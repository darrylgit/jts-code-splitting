import React from 'react';

import './App.css';

import Page1 from './components/Page1';
import AsyncComponent from './components/AsyncComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    };
  }
  onRouteChange = route => {
    this.setState({ route: route });
  };

  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === 'page2') {
      const AsyncPage2 = AsyncComponent(() => import('./components/Page2'));
      return <AsyncPage2 onRouteChange={this.onRouteChange} />;
    } else {
      const AsyncPage3 = AsyncComponent(() => import('./components/Page3'));
      return <AsyncPage3 onRouteChange={this.onRouteChange} />;
    }

    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />;
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />;
    // }
  }
}

export default App;
