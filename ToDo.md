- use ensureFile from fs-extra

- base on history, use AI to identify if diff are normal or not...

- e2e test base on screen zone
    + when page load, wait for a specific zone from page to load by comparing to another image
    + as soon as image equal this zone, then we apply some action like click or typing
    + then we again make some screen shot and do the next step

- add test for test-crawler

- we are able to set review as done, maybe we should have as well be able to report it
- make project name editable with https://ant.design/components/typography/#components-typography-demo-interactive
- delete project? for github use CI for that
- delete crawl result
- give the possibility to keep a note on a crawler result page?
- make USER_AGENT configurable?

- update doc:
    + code and links

- if puppeteer not installed, user should not be able to select it.
  but it should be possible to install it from the settings.

- show affix of job in progress

- Improve commit messages by including project name...

- should show performence

- support gitlab

- beforeAll script should be call in CI ?
        should not be necessary, we can install lib in run time and call it
        need to verify
        else this would be useful only for CI
        so we should make a special one for CI

- improve naming with all those crawlers, job, run, project...

- see if we can improve IE, full page? we could scroll till the bottom and make screenshot of each step
    getting link fails, try to find some alternative? like get by tag name, or by loading the html
    in test-crawler and parsin the dom.

- publish action there https://github.com/sdras/awesome-actions

- **we could track the number of query per page and see if there is some changes...**

- generate animated preview automatically:
  make a system that's could bundle all the screenshot in a gif
  with some explaination of each screenshot... or video with music? :p

- improve cli perf: should be kind of ok, still have to look at actions cache
  Dirname /Users/runner/runners/2.165.2/work/_actions/apiel/test-crawler/master/actions/crawl
  cache action is only for push and PR but we could maybe trick it out?

- run test-crawler in docker?


- antd breadcrumb https://ant.design/components/breadcrumb-cn/#components-breadcrumb-demo-router


- if crawl failed, in some case we could move back the url to crawl in the queue (or maybe too dangerous?)
- should keep log for each url: see why code didn't execute...
- need to handle error properly?




- html comparison -> prettify code and then compare. Do we really want that?


- track user behavior, save it in history and reproduce scenarios... (e2e?)



waitForNetworkIdle(idleTime: number = 500) {
        const MAX_TIMEOUT = 10 * 1000;
        return new Promise((resolve, reject) => {
            const succeed = () => {
                clearTimeout(timeoutTimer);
                page.removeListener('request', onRequest);
                resolve();
            };
            const fail = () => {
                clearTimeout(idleTimer);
                page.removeListener('request', onRequest);
                reject(
                    new Error(
                        `Maximum timeout of ${MAX_TIMEOUT}ms exceeded while waiting for network to become idle`,
                    ),
                );
            };

            let idleTimer = setTimeout(succeed, idleTime);
            let timeoutTimer = setTimeout(fail, MAX_TIMEOUT);

            const onRequest = () => {
                clearTimeout(idleTimer);
                idleTimer = setTimeout(succeed, idleTime);
            };

            page.on('request', onRequest);
        });
    }




storybook
pattern http://localhost:9001/
module.exports = async function run(page, url, links) {
    return await page.evaluate(() => {
        // Array.from(document.body.getElementsByTagName("a"))
        //      .filter(a => !a.href)
        //      .forEach(a => a.click());
        // return Array.from(document.links).map(
        //     link => link.href.replace('/?path=/story/', '/iframe.html?id=')
        // );
    });
}
|
--->
        module.exports = async function run(page, url, links) {
            return links.map(
                link => link.replace('/?path=/story/', '/iframe.html?id=')
            );
        }

----->
const origin = (new URL(url)).origin;

Array.from(document.body.getElementsByTagName("a")).filter(a => !a.href).forEach(a => {
  if (a.nextSibling.nodeName === 'A') a.click()
});


const URL = require('url').URL;
module.exports = async function run(page, url, links) {
    const foundLinks = await page.evaluate(() => {
        Array.from(document.body.getElementsByTagName("a")).filter(a => !a.href).forEach(a => {
            if (a.nextSibling && a.nextSibling.nodeName === 'A') a.click()
        });
        return Array.from(document.links).map(
            link => link.href.replace('/?path=/story/', '/iframe.html?id=')
        );
    });
    const origin = (new URL(url)).origin;
    return foundLinks.filter(link => link.href.indexOf(origin) !== -1);
}


const URL = require('url').URL;
module.exports = async function run(page, url, links) {
    return await page.evaluate((url) => {
        const origin = (new URL(url)).origin;
        Array.from(document.body.getElementsByTagName("a")).filter(a => !a.href).forEach(a => {
            if (a.nextSibling && a.nextSibling.nodeName === 'A') a.click()
        });
        return Array.from(document.links).filter(link => link.href && link.href.indexOf(origin) !== -1).map(
            link => link.href.replace('/?path=/story/', '/iframe.html?id=')
        );
    }, url);
}



// module.exports = async function run(page, url, links) {
//     return links.map(
//        (link) => link.replace('/?path=/story/', '/iframe.html?id=')
//    );
//}




- - export * from './Image';

- inject code base on url pattern
    - update doc
    - display related pins base on pattern
    - (code history?)

- code preview
    - code preview till specific line

- use html diff to improve visual comparison. automatically remove elements that changed and make screenshot, isolate element that change and make screenshot of them.
    - if we have possibility to reuse original page, with all CSS and so on -> then we can remove element as well on original page, so we can know from with height position page changed

- when limit selected, allow random page (shuffle, if limit is 2 instead to always pick up the first 2 pages, pick randomly eg. page 10 and page 22)
    - or maybe do something with code injection
    -> extract urls from beginning and pass them to code injection

- use single input for search and filtering
        https://2x.ant.design/components/select/#components-select-demo-select-users

- Url to crawl base on pattern

- when page was automatically pined, show info

- page detail

- plugin system

- think about AI!! random click?
    --> instead of random, track user behavior, save it in history and reproduce scenarios...


toggle on/off `runProcess` from settings, set timeout from settings...
```tsx
if (runProcess) {
    exec(`PROCESS_TIMEOUT=60 test-crawler-cli 2> ${this.getLogFile()} &`);
}
```

- ctrl-s save code https://www.npmjs.com/package/react-hotkeys

- ~~improve test-crawler bash > maybe switch to JS~~




- diff images with different height algorithm

- HTML diff -> uglify HTML + linux diff (or diff lib)

- SSR version for react components?

- serverLess version using only github and travis (when loading the ui, github credential would be asked to get the a github token, then data would be saved by pushing commit to github)

### Test-crawler-input

- (form) input random value in field, submit and save result. Do this several time with different values, and saves everything. Re-do with the same value and check if there is the same result. If result change, trigger warning...
    - might give the possibility to reconize filed type
        - email
        - numeric
        - password
        - ...

### Test-crawler-search

- search input test, enter random text... save result, compare... but for generating the search might use the data in the result...
    - actually easier than form testing