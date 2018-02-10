import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';
import countries from '../utils/Countries';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class Header extends React.Component {
    @observable searchText = '';

    onFocus = () => {
        this.searchText = '';
    }

    onUpdateInput = (searchText: string) => {
        this.searchText = searchText;
    }

    render() {
        const { flatButtonStyle, toolBarGroupStyle } = this.getStyle();
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true} style={toolBarGroupStyle}>
                    <FlatButton label={'Politics'} style={flatButtonStyle} />
                    <FlatButton label={'Entertainment'} style={flatButtonStyle} />
                    <FlatButton label={'Tech'} style={flatButtonStyle} />
                    <FlatButton label={'Sports'} style={flatButtonStyle} />
                    <FlatButton label={'Lifestyle'} style={flatButtonStyle} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarSeparator />
                    <AutoComplete
                        onFocus={this.onFocus}
                        onUpdateInput={this.onUpdateInput}
                        openOnFocus={true}
                        dataSource={countries}
                        filter={(searchText, key) => key.toLowerCase().includes(searchText.toLowerCase())}
                        hintText='Select Country'
                        menuStyle={{ maxHeight: '150px' }}
                        style={{ marginLeft: '25px' }} 
                    />
                    <RaisedButton label='Go' primary={true} />
                </ToolbarGroup>
            </Toolbar>
        );
    }

    getStyle() {
        return {
            flatButtonStyle: {
                marginLeft: '0px',
                marginRight: '0px',
            },
            toolBarGroupStyle: {
                marginLeft: '0px',
            }
        };
    }
}

export default Header;
