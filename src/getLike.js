export default async function getLike(page) {
    return new Promise(async resolve => {

        const likeSelector = '#button[aria-label*="aime"]';
        const acceptCookies = '#button[aria-label*="utilisation de cookies"]';
        //Accept Cookie click
        await page.waitForSelector(acceptCookies);
        await page.click(acceptCookies);

        const element = await page.waitForSelector(likeSelector);
        const countMessage = await element.evaluate(el => el.getAttribute('aria-label'))
        const count = countMessage.replace(/[^0-9]/g, '')
        resolve(count);
    });
}