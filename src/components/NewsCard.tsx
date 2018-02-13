import * as React from 'react';
import { observer } from 'mobx-react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

type NewsCardProps = {
    data: any;
};

@observer
class NewsCard extends React.Component<NewsCardProps, {}> {
    render() {
        const { title, author, description } = this.props.data;
        return (
            <Card style={{width: '320px', height: 'auto', marginTop: '10px', marginLeft: '10px'}}>
                <CardTitle title={title} subtitle={author} titleStyle={{lineHeight: '30px'}}/>
                <CardText>
                    {description}
                </CardText>
                <CardActions>
                    <FlatButton label='Read'/>
                </CardActions>
            </Card>
        );
    }
}

export default NewsCard;