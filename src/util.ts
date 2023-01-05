import puppeteer from "puppeteer";
import { homeUrl } from "./constants";



async function login(email: string, password: string) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(homeUrl);

    // Wait for the email field to be displayed and enter the email
    await page.waitForSelector('#username');
    await page.type('#username', email);

    // Wait for the password field to be displayed and enter the password
    await page.waitForSelector('#password');
    await page.type('#password', password);

    // Click the login button
    await page.click('button[type="submit"]');

    // // Wait for the profile page to load and get the logged in user's name
    await page.waitForSelector('#profile-nav-item');
    // const name = await page.$eval('#profile-nav-item', (el) => el.innerText);

    console.log(`Logged in as ${name}`);
}

export { login };