import * as utils from './utils';
import * as constants from './constants';
import * as config from './config';
import * as fs from 'fs';
import { time } from "console";
import puppeteer from "puppeteer";


async function generateUrls() {
    if (!os.path.exists('data')) {
        os.makedirs('data');
    }
    try {
        const file = fs.openSync('data/urlData.txt', 'w', { encoding: 'utf-8' });
        const linkedinJobLinks = utils.LinkedinUrlGenerate().generateUrlLinks();
        for (const url of linkedinJobLinks) {
            fs.writeSync(file, `${url}\n`);
        }
        console.log('Urls are created successfully, now the bot will visit those urls.');
    } catch (e) {
        console.log("Couldn't generate url, make sure you have data folder and modified config.py file for your preferences.");
    }
}

function displayWriteResults(lineToWrite: string) {
    try {
        console.log(lineToWrite);
        utils.writeResults(lineToWrite);
    } catch (e) {
        console.log(`Error ${e}`);
    }
}

async function linkJobApply() {
    await generateUrls();
    let countApplied = 0;
    let countJobs = 0;

    const urlData = utils.getUrlDataFile();

    for (const url of urlData) {
        await this.page.goto(url);

        const totalJobs = await this.page.$eval('//small', el => el.textContent);
        const totalPages = utils.jobsToPages(totalJobs);

        const urlWords = utils.urlToKeywords(url);
        const lineToWrite = `\n Category: ${urlWords[0]}, Location: ${urlWords[1]}, Applying ${totalJobs} jobs.`;
        displayWriteResults(lineToWrite);

        for (let page = 0; page < totalPages; page++) {
            const currentPageJobs = constants.jobsPerPage * page;
        }
    }

}




async function main() {
    try {
        this.browser = await puppeteer.launch({ headless: false });
        this.page = await this.browser.newPage();
        await this.page.goto('https://www.linkedin.com/login?trk=guest_homepage-basic_nav-header-signin');
        console.log('Trying to log in linkedin.');
    } catch (e) {
        console.log(`Warning ChromeDriver: ${e}`);
    }
    try {
        await this.page.type('#username', config.email);
        time.sleep(5);
        await this.page.type('#password', config.password);
        time.sleep(5);
        await this.page.click('//*[@id="organic-div"]/form/div[3]/button');
    } catch (e) {
        console.log(`Couldn't log in Linkedin. ${e}`);
    }
}


async function getJobProperties(count: number): Promise<string> {
    let textToWrite = "";
    let jobTitle = "";
    let jobCompany = "";
    let jobLocation = "";
    let jobWorkPlace = "";
    let jobPostedDate = "";
    let jobApplications = "";

    try {
        const jobTitleElement = await this.page.$x("//h1[contains(@class, 'job-title')]");
        jobTitle = await this.page.evaluate(el => el.getAttribute("innerHTML").strip(), jobTitleElement);
        const res = config.blackListTitles.filter(blItem => blItem.toLowerCase() in jobTitle.toLowerCase());
        if (res.length > 0) {
            jobTitle += `(blaclisted title: ${res.join(" ")})`;
        }
    } catch (e) {
        console.warn(`Warning in getting jobTitle: ${e.toString().substring(0, 50)}`);
        jobTitle = "";
    }

    try {
        const jobCompanyElement = await this.page.$x("//a[contains(@class, 'ember-view t-black t-normal')]");
        jobCompany = await this.page.evaluate(el => el.getAttribute("innerHTML").strip(), jobCompanyElement);
        const res = config.blacklistCompanies.filter(blItem => blItem.toLowerCase() in jobTitle.toLowerCase());
        if (res.length > 0) {
            jobCompany += `(blaclisted company: ${res.join(" ")})`;
        }
    } catch (e) {
        console.warn(`Warning in getting jobCompany: ${e.toString().substring(0, 50)}`);
        jobCompany = "";
    }

    try {
        const jobLocationElement = await this.page.$x("//span[contains(@class, 'bullet')]");
        jobLocation = await this.page.evaluate(el => el.getAttribute("innerHTML").strip(), jobLocationElement);
    } catch (e) {
        console.warn(`Warning in getting jobLocation: ${e.toString().substring(0, 50)}`);
        jobLocation = "";
    }
    try {
        const jobWorkPlaceElement = await this.page.$x("//span[contains(@class, 'workplace-type')]");
        jobWorkPlace = await this.page.evaluate(el => el.getAttribute("innerHTML").strip(), jobWorkPlaceElement);
    } catch (e) {
        console.warn(`Warning in getting jobWorkPlace: ${e.toString().substring(0, 50)}`);
        jobWorkPlace = "";
    }
    try {
        const jobPostedDateElement = await this.page.$x("//span[contains(@class, 'posted-date')]");
        jobPostedDate = await this.page.evaluate(el => el.getAttribute("innerHTML").strip(), jobPostedDateElement);
    } catch (e) {
        console.warn(`Warning in getting jobPostedDate: ${e.toString().substring(0, 50)}`);
        jobPostedDate = "";
    }
}


async function applyProcess(page: puppeteer.Page, percentage: number, offerPage: string) {
    const applyPages = Math.floor(100 / percentage);
    let result = "";

    try {
        for (let pages = 0; pages < applyPages - 2; pages++) {
            await page.click("button[aria-label='Continue to next step']");
            await page.waitFor(Math.random() * constants.botSpeed + 1);
        }

        await page.click("button[aria-label='Review your application']");
        await page.waitFor(Math.random() * constants.botSpeed + 1);

        if (!config.followCompanies) {
            await page.click("label[for='follow-company-checkbox']");
            await page.waitFor(Math.random() * constants.botSpeed + 1);
        }

        await page.click("button[aria-label='Submit application']");
        await page.waitFor(Math.random() * constants.botSpeed + 1);

        result = `* 🥳 Just Applied to this job: ${offerPage}`;
    } catch (error) {
        result = `* 🥵 ${applyPages} Pages, couldn't apply to`
    }
}