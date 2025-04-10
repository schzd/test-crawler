import React, { useState, useEffect } from 'react';

import {
    coverStyle,
    imgStyle,
} from '../pages/pageStyle';

import { getThumbnail } from '../server/service';
import { StorageType } from '../server/storage.typing';

export interface Props {
    storageType: StorageType;
    projectId: string;
    timestamp: string;
    id: string;
    width?: number;
    onImg?: () => void;
    marginLeft: number;
};

export const DiffImage = ({
    storageType,
    projectId,
    timestamp,
    id,
    onImg = () => { },
    width = imgStyle.width,
    children
}: Props & React.PropsWithChildren<any>) => {
    const [thumb, setThumb] = useState<string>();
    const load = async () => {
        setThumb(await getThumbnail(storageType, projectId, timestamp, id, width));
        onImg();
    }
    useEffect(() => { load(); }, []);
    return thumb ? (
        <div style={coverStyle as any}>
            {children}
            <img style={{ width }} alt="" src={thumb} />
        </div>) : null;
}
