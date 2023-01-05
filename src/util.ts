import puppeteer from "puppeteer";
// import { homeUrl } from "./constants";
import * as dotenv from 'dotenv';
import { details } from "./env.config";


dotenv.config();


// const login = async () => {
//     const browser = await puppeteer.launch({ headless: false })
//     const page = await browser.newPage()

//     await page.setViewport({ width: 1280, height: 800 })
//     await page.goto(homeUrl);

//     await page.waitForSelector('#username');
//     await page.type('#username', details.emailAddress);

//     // Wait for the password field to be displayed and enter the password
//     await page.waitForSelector('#password');
//     await page.type('#password', details.passWord);

//     // Click the login button
//     await page.click('button[type="submit"]');

//     // // Wait for the profile page to load and get the logged in user's name
//     // await page.waitForSelector('#profile-nav-item');
//     // const name = await page.$eval('#profile-nav-item', (el) => el.innerText);

//     console.log(`Logged in`)
// }

async function login() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.linkedin.com/uas/login');

    // Wait for the email field to be displayed and enter the email
    await page.waitForSelector('#username');
    await page.type('#username', details.emailAddress);

    // Wait for the password field to be displayed and enter the password
    await page.waitForSelector('#password');
    await page.type('#password', details.passWord);

    // Click the login button
    await page.click('button[type="submit"]');

    // // Wait for the profile page to load and get the logged in user's name
    // await page.waitForSelector('#profile-nav-item');
    // const name = await page.$eval('#profile-nav-item', (el) => el.innerText);

    // console.log(`Logged in as ${name}`);
}

export { login };