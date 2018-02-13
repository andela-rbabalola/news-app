require('dotenv').config();

import axios from 'axios';
import { observable, action, useStrict } from 'mobx';

// const newsApiKey = process.env.NEWS_API_KEY;

useStrict(true);

class NewsAppStore {
    @observable newsData: any;
    @observable isLoading = true;
    @observable errorOccured = false;

    @action('getNewsData')
    getNewsData() {
        // @todo fix this
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=47dab908ed754a97860d5c5693be067e`;
        axios.get(url).then(response => {
            this.setNewsData(response.data);
            this.stopLoading();
        }).catch(error => {
            this.setErrorOccured();
        });
    }

    @action('retry')
    retry() {
        // set loading to true
        this.isLoading = true;
        // stop error
        this.errorOccured = false;
        // try to get data again
        this.getNewsData();
    }

    @action('setNewsData')
    private setNewsData = (data: any) => {
        this.newsData = data;
    }

    @action('setErrorOccured')
    private setErrorOccured = () => {
        this.errorOccured = true;
        // since an error occured, stop loading
        this.stopLoading();
    }

    @action('stopLoading')
    private stopLoading = () => {
        this.isLoading = false;
    }
}

export default NewsAppStore;