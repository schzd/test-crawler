import axios from 'axios';
import { extname } from 'path';

import {
    Platform,
    Arch,
    Options,
    defaultPlatform,
    defaultArch,
    defaultDestination,
} from '.';
import { downloadTar, downloadZip, mkdir, getFile, getDriver } from './utils';

export const FILE = 'geckodriver';
export const URL =
    'https://api.github.com/repos/mozilla/geckodriver/releases/latest';

export async function getGeckodriver({
    platform = defaultPlatform,
    destination = defaultDestination,
    arch = defaultArch,
    force = false,
}: Options) {
    const file = getFile(platform, destination, FILE);
    await getDriver(
        { platform, destination, arch, force },
        file,
        downloadGecko,
    );
    return file;
}

export async function downloadGecko(
    platform: Platform,
    arch: Arch,
    destination: string,
) {
    const assetUrl = await getGeckoDownloadUrl(platform, arch);
    await mkdir(destination, { recursive: true });
    if (extname(assetUrl) === '.zip') {
        await downloadZip(assetUrl, destination);
    } else {
        await downloadTar(assetUrl, destination);
    }

    return assetUrl;
}

export async function getGeckoDownloadUrl(
    platform: Platform,
    arch: Arch = Arch.x64,
) {
    const assets = await getAssets();
    const name = getName(platform, arch);
    const asset = assets.find((asset: any) => asset.name.includes(name));
    return asset?.browser_download_url;
}

function getName(platform: Platform, arch: Arch = Arch.x64) {
    if (platform === Platform.mac) {
        return 'macos';
    }
    return `${platform}${arch === Arch.x32 ? '32' : '64'}`;
}

let cacheAssets: any;
async function getAssets() {
    if (!cacheAssets) {
        const {
            data: { assets },
        } = await axios.get(URL);
        cacheAssets = assets;
    }
    return cacheAssets;
}
