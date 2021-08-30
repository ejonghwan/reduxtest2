
import React from 'react';
import Head from 'next/head'
import wrapper from '../store/configureStore.js'

//saga
import withReduxSaga from 'next-redux-saga'


const App = ({ Component }) => {
    return (
        <div>
            <Head>
                {/* <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css' /> */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" /> 
            </Head>
            <Component />
        </div>
    );
};


// export default wrapper.withRedux(withReduxSaga(App));
export default wrapper.withRedux(App);