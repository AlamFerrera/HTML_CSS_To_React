import React, {Fragment} from 'react';
import './Global.css';
import Header from './componentes/Header/header.jsx';
import TopCardHeader from './componentes/Top-Card/top-card-list.jsx';
import Overview from './componentes/Overview/overview.jsx';

function App() {
  return (
  <Fragment>
    <Header/>
    <TopCardHeader/>
    <Overview/>
  </Fragment>

  /* */

  /*
    <div className="App">      
    </div>
  */
  );
}

export default App;
