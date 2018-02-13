import * as React from 'react';
import Header from './Header';
import NewsAppStore from './NewsAppStore';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';
import { observer } from 'mobx-react';
import NewsCard from './NewsCard';

@observer
class NewsApp extends React.Component {
    newsAppStore: NewsAppStore;
    constructor(props: any) {
        super(props);
        this.newsAppStore = new NewsAppStore();
    }

    componentDidMount() {
        this.newsAppStore.getNewsData();
    }

    handleRequestClose() {
        this.newsAppStore.retry();
    }

    renderContent() {
        if (this.newsAppStore.isLoading) {
            return <CircularProgress size={60} thickness={7} />;
        } else if (this.newsAppStore.errorOccured) {
            return (
                <Snackbar
                    open={this.newsAppStore.errorOccured}
                    message='An error occured loading the data'
                    autoHideDuration={4000}
                    action='retry'
                    onRequestClose={() => this.handleRequestClose()}
                />
            );
        }
        return <NewsCard data={this.newsAppStore.newsData.articles[0]} />;
    }
    render() {
        return (
            <div>
                <Header />
                {this.renderContent()}
            </div>
        );
    }
}

export default NewsApp;