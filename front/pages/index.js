import React, { Fragment, useState } from 'react'
import CardInfo from '../components/CardInfo.js'
import Layout from '../components/Layout.js'
import UserInfo from '../components/UserInfo.js'
import { useSelector, useDispatch } from 'react-redux'

const Index = ( ) => {

    const [islogged, setIslogged] = useState(false)

    return (
        <Fragment>
           <Layout>
               {islogged ? <UserInfo /> : <CardInfo />}
           </Layout>
        </Fragment>
    )
}

export default Index