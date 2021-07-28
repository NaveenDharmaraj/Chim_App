import React from 'react';
import Header from './components/signup/main/Header';
import Content from './components/signup/main/Content';
import Footer from './components/signup/main/Footer';
import store from './store';
import {Provider} from 'react-redux';
import './App.css';


const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
      <Header />
      <div className="pageWrapper"><Content /></div>
      <Footer />
      </div> 
      </Provider>
      
  );
}


export default App;
