import React from 'react';
import message from 'antd/lib/message';
import notification from 'antd/lib/notification';
import Button from 'antd/lib/button';
import { PageData, ZoneStatus } from 'test-crawler-core';

import { setZoneStatus } from '../server/service';
import { StorageType } from '../server/storage.typing';

const buttonStyle = {
    marginLeft: 5,
    marginRight: 5,
}

interface Props {
    index: number;
    timestamp: string;
    id: string;
    projectId: string;
    storageType: StorageType;
    setPages: React.Dispatch<React.SetStateAction<PageData[]>>;
}

const onSetStatus = (
    status: ZoneStatus,
    { timestamp, id, index, projectId, setPages, storageType }: Props,
) => async () => {
    try {
        const pages = await setZoneStatus(storageType, projectId, timestamp, id, index, status);
        setPages(pages);
        message.success('Page pinned as reference for comparison.', 2);
    } catch (error) {
        notification['error']({
            message: 'Something went wrong!',
            description: error.toString(),
        });
    }
}

export const DiffImageButtons = (props: Props) => {
    return (
        <>
            <Button
                style={buttonStyle}
                icon="check"
                size="small"
                onClick={onSetStatus(ZoneStatus.valid, props)}>Valid</Button>
            <Button
                style={buttonStyle}
                icon="pushpin"
                size="small"
                onClick={onSetStatus(ZoneStatus.zonePin, props)}>Always valid</Button>
            <Button
                style={buttonStyle}
                icon="warning"
                size="small"
                type="danger"
                onClick={onSetStatus(ZoneStatus.report, props)}>Report</Button>
        </>
    );
}
