"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_crawler_core_1 = require("test-crawler-core");
const test_crawler_cli_1 = require("test-crawler-cli");
const path_1 = require("path");
const Storage_1 = require("./Storage");
const fs_extra_1 = require("fs-extra");
test_crawler_cli_1.setDefaultDriversDestination(path_1.join(__dirname, '..', '..', '..', '..', 'node_modules', '.bin'));
class LocalStorage extends Storage_1.Storage {
    constructor(ctx) {
        super();
        this.ctx = ctx;
    }
    get browsers() {
        const browsers = [
            test_crawler_core_1.Browser.ChromeSelenium,
            test_crawler_core_1.Browser.FirefoxSelenium,
            test_crawler_core_1.Browser.ChromePuppeteer,
        ];
        if (process.platform == 'darwin') {
            browsers.push(test_crawler_core_1.Browser.SafariSelenium);
        }
        else if (process.platform == 'win32') {
            browsers.push(test_crawler_core_1.Browser.IeSelenium);
        }
        return browsers;
    }
    readdir(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield fs_extra_1.pathExists(this.root(path))) {
                yield fs_extra_1.mkdirp(this.root(path));
                return fs_extra_1.readdir(this.root(path));
            }
            return [];
        });
    }
    read(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield fs_extra_1.pathExists(this.root(path))) {
                return fs_extra_1.readFile(this.root(path));
            }
        });
    }
    readJSON(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield fs_extra_1.pathExists(this.root(path))) {
                return fs_extra_1.readJSON(this.root(path));
            }
        });
    }
    image(path) {
        return this.read(path);
    }
    blob(path) {
        return this.read(path);
    }
    saveJSON(file, data) {
        return fs_extra_1.outputJSON(this.root(file), data, { spaces: 4 });
    }
    saveFile(file, data) {
        return fs_extra_1.outputFile(this.root(file), data);
    }
    copy(src, dst) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield fs_extra_1.pathExists(this.root(src))) {
                return fs_extra_1.copy(this.root(src), this.root(dst), { overwrite: true });
            }
        });
    }
    copyBlob(src, dst) {
        return this.copy(src, dst);
    }
    remove(file) {
        return fs_extra_1.remove(this.root(file));
    }
    crawl(crawlTarget, push) {
        return __awaiter(this, void 0, void 0, function* () {
            yield test_crawler_cli_1.crawl(crawlTarget, push);
            return undefined;
        });
    }
    root(...path) {
        return path_1.join(test_crawler_core_1.ROOT_FOLDER, ...path);
    }
    repos() {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    getRepo() {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    info() {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    jobs() {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
}
exports.LocalStorage = LocalStorage;
