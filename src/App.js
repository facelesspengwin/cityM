import React, { Component } from 'react';
import styles from './App.scss';

import Layout from './hoc/Layout';

import Header from './components/UI/Header/Header';
// import Footer from './components/UI/Footer/Footer';

import videoBG from './assets/videos/videoBG.mp4';

import Main from './containers/Main/Main';

class App extends Component {
  state = {
    currPage: "page1"
  }
  HandleClick = () => {
    if(this.state.currPage === "page1") {
      this.setState({currPage: 'page2'});
    } else if (this.state.currPage === 'page2') {
      this.setState({currPage: 'page3'});
    } else {
      this.setState({currPage: 'page1'});
    }
  }

  render() {

    return (
      <main className={styles.App}>
          <Layout>
            <Header />
            <Main pageNum={this.state.currPage} click={this.HandleClick}/>
            {/* <Footer /> */}
          </Layout>
          <video autoPlay loop className={styles.videoBG} muted plays-inline="true">
              <source src={videoBG} type='video/mp4' />
          </video>
      </main>
    );
  }
}

export default App;