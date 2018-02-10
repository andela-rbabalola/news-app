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
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true} style={{ marginLeft: '10px' }}>
                    <FlatButton label={'Politics'} style={{ marginLeft: '0px', marginRight: '0px' }} />
                    <FlatButton label={'Entertainment'} style={{ marginLeft: '0px', marginRight: '0px' }} />
                    <FlatButton label={'Tech'} style={{ marginLeft: '0px', marginRight: '0px' }} />
                    <FlatButton label={'Sports'} style={{ marginLeft: '0px', marginRight: '0px' }} />
                    <FlatButton label={'Lifestyle'} style={{ marginLeft: '0px', marginRight: '0px' }} />
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
}

export default Header;
