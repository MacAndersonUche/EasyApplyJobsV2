import * as time from 'time';
import * as os from 'os';
import * as utils from './utils';
import * as constants from './constants';
import * as config from './config';
import * as puppeteer from 'puppeteer';

class Linkedin {
    private browser: puppeteer.Browser;
    private page: puppeteer.Page;

    constructor() {
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

    async generateUrls() {
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

    async linkJobApply() {
        await this.generateUrls();
        let countApplied = 0;
        let countJobs = 0;

        const urlData = utils.getUrlDataFile();

        for (const url of urlData) {
            await this.page.goto(url);

            const totalJobs = await this.page.$eval('//small', el => el.textContent);
            const totalPages = utils.jobsToPages(totalJobs);

            const urlWords = utils.urlToKeywords(url);
            const lineToWrite = `\n Category: ${urlWords[0]}, Location: ${urlWords[1]}, Applying ${totalJobs} jobs.`;
            this.displayWriteResults(lineToWrite);

            for (let page = 0; page < totalPages; page++) {
                const currentPageJobs = constants.jobsPerPage * page;
            }
        }
    }
}