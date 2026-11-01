import AppLoader from './appLoader';
import type { INewsResponse, ISourcesResponse } from '../../types/index';

class AppController extends AppLoader {
    public getSources(callback: (data: ISourcesResponse) => void): void {
        super.getResp({ endpoint: 'sources' }, callback);
    }

    public getNews(e: Event, callback: (data: INewsResponse) => void): void {
        let target = e.target as HTMLElement | null;
        const newsContainer = e.currentTarget as HTMLElement | null;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer && sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            target = target.parentNode as HTMLElement | null;
        }
    }
}

export default AppController;
