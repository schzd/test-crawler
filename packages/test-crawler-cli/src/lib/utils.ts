import { CodeInfoList } from 'test-crawler-core';
import { pathCodeListFile } from './path';
import { readJSON, pathExists } from 'fs-extra';

export async function getCodeList(projectId: string): Promise<CodeInfoList> {
    const listPath = pathCodeListFile(projectId);
    if (await pathExists(listPath)) {
        return readJSON(listPath) as Promise<CodeInfoList>;
    }
    return {};
}
