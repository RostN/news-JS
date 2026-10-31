import News from './news/news.js';
import Sources from './sources/sources.js';
import type { INewsResponse, ISourcesResponse } from '../../types/index.js';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: INewsResponse | undefined): void {
        const values = data?.articles ? data.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ISourcesResponse | undefined): void {
        const values = data?.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
