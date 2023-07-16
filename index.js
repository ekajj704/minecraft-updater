import playwright from "playwright";

async function main(){
    const browser = await playwright.chromium.launch({
        headless: false,
    });
    let page = await browser.newPage();
    await page.goto("https://www.minecraft.net/en-us/download/server/bedrock");
    let html = page.getByLabel("Download Minecraft Dedicated Server software for Ubuntu (Linux)");
    console.log(await html.getAttribute("href"));
    browser.close();

}

main();