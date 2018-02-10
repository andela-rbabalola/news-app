import * as React from 'react';
import Header from './Header';
import NewsAppStore from './NewsAppStore';
import CircularProgress from 'material-ui/CircularProgress';
import { observer } from 'mobx-react';

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
    render() {
        return (
            <div>
                <Header />
                {this.newsAppStore.isLoading ? <CircularProgress size={60} thickness={7}/> : <p>hello</p>}
            </div>
        );
    }
}

export default NewsApp;