import puppeteer from "puppeteer"
import getLike from "./getLike.js";
import saveDb from "./sql.js";
/**
 *
 * @param bool show
 */
export default async function (show) {
    let args = show ? [] : ['--no-sandbox'];
    const browser = await puppeteer.launch({
        defaultViewport: null,
        headless: !show,
        args
    });
    const page = await browser.newPage();
    // await page.goto("https://www.youtube.com/watch?v=fEvM-OUbaKs");
    await page.goto("https://www.youtube.com/watch?v=EHzGlXgWWhk");
    await page.waitForTimeout(1000);
    const count = await getLike(page);
    await saveDb(count);
    await browser.close();
}