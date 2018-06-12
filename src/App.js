import React, { Component } from 'react';
import styles from './App.scss';

import Layout from './hoc/Layout';

import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';

import videoBG from './assets/videos/videoBG.mp4';

import Main from './containers/Main/Main';

class App extends Component {
  render() {
    return (
      <main className={styles.App}>
          <Layout>
            <Header />
            <Main />
            <Footer />
          </Layout>
          <video autoPlay loop className={styles.videoBG} muted plays-inline="true">
              <source src={videoBG} type='video/mp4' />
          </video>
      </main>
    );
  }
}

export default App;