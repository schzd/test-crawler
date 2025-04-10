import React from 'react';
import Spin from 'antd/lib/spin';
import { RouteComponentProps } from 'react-router-dom';
import { subscribe, unsubscribe } from 'isomor';
import { Crawler } from 'test-crawler-core';

import { Pages } from '../pages/Pages';
import { CrawlerInfo } from './CrawlerInfo';
import { ErrorHandler } from '../common/ErrorHandler';
import { useAsync } from '../hook/useAsync';
import { getCrawler } from '../server/service';
import { StorageType } from '../server/storage.typing';
import { useThisDoc } from '../doc/useDoc';
import { useGitHub } from '../auth/useGitHub';

export const CrawlerResults = ({
    match: { params: { timestamp, projectId, storageType } },
}: RouteComponentProps<{ timestamp: string, projectId: string, storageType: StorageType }>) => {
    useGitHub(storageType);
    useThisDoc();
    const { result: crawler, error, setResult: setCrawler } = useAsync<Crawler>(
        () => getCrawler(storageType, projectId, timestamp)
    );
    React.useEffect(() => {
        const id = subscribe(setCrawler);
        return () => unsubscribe(id);
    }, [crawler, setCrawler]);
    if (error) {
        return <ErrorHandler description={error.toString()} />;
    }
    const lastUpdate = crawler?.lastUpdate;
    return crawler ? (
        <>
            <CrawlerInfo
                crawler={crawler}
                projectId={projectId}
                storageType={storageType}
                setCrawler={setCrawler}
            />
            <Pages storageType={storageType} timestamp={timestamp} lastUpdate={lastUpdate!} projectId={projectId} />
        </>
    ) : <Spin />;
}
