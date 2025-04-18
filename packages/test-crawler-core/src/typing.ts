export interface Zone {
    xMin: number;
    yMin: number;
    xMax: number;
    yMax: number;
}

export interface Viewport {
    width: number;
    height: number;
    deviceScaleFactor?: number;
    isMobile?: boolean;
    hasTouch?: boolean;
    isLandscape?: boolean;
}

export enum CrawlerMethod {
    URLs = 'urls',
    SPIDER_BOT = 'spiderbot',
}

export enum ZoneStatus {
    valid = 'valid',
    zonePin = 'zone-pin',
    report = 'report',
    diff = 'diff',
}

export enum Browser {
    ChromePuppeteer = 'chrome-puppeteer',
    FirefoxSelenium = 'firefox-selenium',
    ChromeSelenium = 'chrome-selenium',
    SafariSelenium = 'safari-selenium',
    IeSelenium = 'ie-selenium',
    // EdgeSelenium = 'edge-selenium',
}

export interface CodeInfoList {
    [id: string]: CodeInfo;
}

export interface CodeInfo {
    id: string;
    pattern: string;
    name: string;
}

export interface CrawlerInput {
    url: string;
    viewport: Viewport;
    browser: Browser;
    method: string;
    limit?: number;
    autopin: boolean;
}

export interface Project {
    id: string;
    name: string;
    crawlerInput: CrawlerInput;
}

export interface Crawler extends CrawlerInput {
    id: string;
    timestamp: string;
    diffZoneCount: number;
    errorCount: number;
    inQueue: number;
    urlsCount: number;
    status: string;
    startAt: number;
    lastUpdate: number;
}

export interface PngDiffDataZone {
    zone: Zone;
    status: ZoneStatus;
}

export interface PngDiffData {
    pixelDiffRatio: number;
    zones: PngDiffDataZone[];
}

export interface PageData {
    id: string;
    url: string;
    timestamp: string;
    error?: string;
    performance?: Performance;
    metrics?: PageMetrics;
    viewport?: Viewport;

    png?: {
        width: number;
        diff?: PngDiffData;
    };
}

export interface CrawlTarget {
    timestamp: string;
    projectId: string;
}

export interface PageMetrics {
    Timestamp: number;
    Documents: number;
    Frames: number;
    JSEventListeners: number;
    Nodes: number;
    LayoutCount: number;
    RecalcStyleCount: number;
    LayoutDuration: number;
    RecalcStyleDuration: number;
    ScriptDuration: number;
    TaskDuration: number;
    JSHeapUsedSize: number;
    JSHeapTotalSize: number;
}
