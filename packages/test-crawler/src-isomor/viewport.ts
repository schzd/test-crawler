import { Viewport as ViewportObject } from 'test-crawler-core';

export interface ViewportString {
    name: string;
    value: string;
}

export interface Viewport {
    name: string;
    value: ViewportObject;
}

export const viewports: Viewport[] = [
    { name: 'Desktop - 800x600', value: { width: 800, height: 600 } },
    { name: 'Desktop - 1024x768', value: { width: 1024, height: 768 } },
    { name: 'Desktop - 1920x1080', value: { width: 1920, height: 1080 } },
    { name: 'iPhone 5 - 320x568', value: { width: 320, height: 568, isMobile: true, hasTouch: true } },
    { name: 'iPhone 6 - 375x667', value: { width: 375, height: 667, isMobile: true, hasTouch: true } },
    { name: 'Ipad - 768x1024', value: { width: 768, height: 1024, isMobile: true, hasTouch: true } },
    { name: 'Galaxy S5 - 360x640', value: { width: 360, height: 640, isMobile: true, hasTouch: true } },
];

export const viewportsStr: ViewportString[] = viewports.map(
    ({ value, ...viewport }) => ({ ...viewport, value: JSON.stringify(value) })
);

export const getDefaultViewportStr = () => viewportsStr[0];
export const getDefaultViewport = (): ViewportObject => viewports[0].value;

export const getViewportName = (value: ViewportObject) => {
    const valueStr = JSON.stringify(value);
    const index = viewportsStr.findIndex(vp => vp.value === valueStr);
    if (index !== -1) {
        return viewportsStr[index].name;
    }
    const { width, height, isMobile } = value;
    return `${width}x${height}${ isMobile && ' mobile'}`;
};
