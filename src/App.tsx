import * as React from 'react';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import NewsApp from './components/NewsApp';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <NewsApp />
      </MuiThemeProvider>
    );
  }
}

export default App;
