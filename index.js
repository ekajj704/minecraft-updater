import playwright from "playwright";

async function main(){
    const browser = await playwright.firefox.launch({
        headless: true,
    });
    let page = await browser.newPage();
    await page.goto("https://www.minecraft.net/en-us/download/server/bedrock");
    let html = page.getByLabel("Download Minecraft Dedicated Server software for Ubuntu (Linux)");
    let link = await html.getAttribute("href");
    browser.close();
    exec(`../updateBedrock.sh '${link}'`);
}

main();