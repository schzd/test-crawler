// import notification from 'antd/lib/notification';
import { Project } from 'test-crawler-core';
import { loadProjects } from '../server/service';
import { useAsync } from '../hook/useAsync';
import { StorageType } from '../server/storage.typing';

export const useProjects = (storageType: StorageType) => {
    const { result: projects, error, loading, call } =
        useAsync<Project[]>(() => loadProjects(storageType));
    if (error) {
        // notification['warning']({
        //     message: `Something went wrong while loading project from ${storageType}.`,
        //     description: error.toString(),
        // });
    }
    return { projects, loading, error, call };
}
