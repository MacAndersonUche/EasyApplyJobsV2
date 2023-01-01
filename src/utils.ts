import constants from "constants";
import fs from "fs";

function getUrlDataFile(): string[] {
    let urlData = "";
    try {
        const file = fs.openSync('data/urlData.txt', 'r');
        urlData = fs.readFileSync(file, 'utf8');
        fs.closeSync(file);
    } catch (e) {
        if (e.code === "ENOENT") {
            console.error("FileNotFound:urlData.txt file is not found. Please run ./data folder exists and check config.py values of yours. Then run the bot again");
        } else {
            throw e;
        }
    }
    return urlData.split('\n');
}

function jobsToPages(numOfJobs: string): number {
    let number_of_pages = 1;

    if (numOfJobs.indexOf(' ') !== -1) {
        const spaceIndex = numOfJobs.indexOf(' ');
        const totalJobs = numOfJobs.substring(0, spaceIndex);
        const totalJobs_int = parseInt(totalJobs.replace(',', ''));
        number_of_pages = Math.ceil(totalJobs_int / constants.jobsPerPage);
    }
    return number_of_pages;
}


function urlToKeywords(url: string) {
    const keywordUrl = url.substring(url.indexOf("keywords=") + 9);
    const keyword = keywordUrl.substring(0, keywordUrl.indexOf("&"));
    const locationUrl = url.substring(url.indexOf("location=") + 9);
    const location = locationUrl.substring(0, locationUrl.indexOf("&"));
    return [keyword, location];
}

function writeResults(text: string) {
    const timeStr = new Date().toISOString().slice(0, 10);
    const fileName = `Applied Jobs DATA - ${timeStr}.txt`;
    try {
        const file = fs.openSync(`data/${fileName}`, 'r');
        const fileContent = fs.readFileSync(file, 'utf8');
        fs.closeSync(file);
        const lines = fileContent.split('\n').filter(line => line.indexOf('----') === -1);
        fs.writeFileSync(`data/${fileName}`, `---- Applied Jobs Data ---- created at: ${timeStr}\n---- Number | Job Title | Company | Location | Work Place | Posted Date | Applications | Result\n${lines.join('\n')}\n${text}\n`, 'utf8');
    } catch (e) {
        if (e.code === "ENOENT") {
            fs.writeFileSync(`data/${fileName}`, `---- Applied Jobs Data ---- created at: ${timeStr}\n---- Number | Job Title | Company | Location | Work Place | Posted Date | Applications | Result\n${text}\n`, 'utf8');
        } else {
            throw e;
        }
    }
}

function generateUrlLinks(): string[] {
    let path: string[] = [];
    for (const location of config.location) {
        for (const keyword of config.keywords) {
            const url: string = constants.linkJobUrl + "?f_AL=true&keywords=" + keyword + this.jobType() + this.remote() + this.checkJobLocation(location) + this.jobExp() + this.datePosted() + this.salary() + this.sortBy();
            path.push(url);
        }
    }
    return path;
}

function checkJobLocation(job: string): string {
    let jobLoc = "&location=" + job;
    switch (job.toLowerCase()) {
        case "asia":
            jobLoc += "&geoId=102393603";
            break;
        case "europe":
            jobLoc += "&geoId=100506914";
            break;
        case "northamerica":
            jobLoc += "&geoId=102221843&";
            break;
        case "southamerica":
            jobLoc += "&geoId=104514572";
            break;
        case "australia":
            jobLoc += "&geoId=101452733";
            break;
        case "africa":
            jobLoc += "&geoId=103537801";
            break;
    }

    return jobLoc;
}

export {
    getUrlDataFile,
    jobsToPages,
    urlToKeywords,
    writeResults
}
