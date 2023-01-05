import puppeteer from "puppeteer";
import { homeUrl } from "./constants";
import * as dotenv from 'dotenv';
import { details } from "./env.config";


dotenv.config();


const login = async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.setViewport({ width: 1280, height: 800 })
    await page.goto(homeUrl);

    await page.waitForSelector('input[type="email"]')
    await page.type('input[type="email"]', details.emailAddress, { delay: 50 })
    await page.screenshot({ path: "example.png" });

    await browser.close();
}

export { login };