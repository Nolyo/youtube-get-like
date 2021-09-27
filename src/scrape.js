import puppeteer from "puppeteer"
import getLike from "./getLike.js";
/**
 *
 * @param bool show
 */
export default async function (show, url) {
    let args = show ? [] : ['--no-sandbox'];
    const browser = await puppeteer.launch({
        defaultViewport: null,
        headless: !show,
        args
    });
    const page = await browser.newPage();

    await page.goto("https://www.youtube.com/watch?v=" + url);
    await page.waitForTimeout(1000);
    const count = await getLike(page);

    await browser.close();
    return count;
}
