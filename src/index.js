import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './containers/hero/Hero';
import Content from './containers/Content';
import Footer from './containers/footer/Footer';

import './style.css';

const App = () => {
    let [welcomeState, setWelcomeState] = React.useState(true);

    function changeState () {
        setWelcomeState((prevState) => !prevState)
    }

    return <>
        <Hero visibility={welcomeState} click={changeState} />
        <Content click={changeState}/>
        <Footer/>
    </>
}

ReactDOM.render(<App />, document.getElementById('root'));