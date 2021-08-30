import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LOG_IN_REQUEST } from '../reducers/user.js'

const CardInfo = ( ) => {


    const { islogged } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [txt, setTxt] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
        console.log(islogged)
        dispatch({
            type: LOG_IN_REQUEST,
            data: txt,
        })
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setTxt(value)
    }

    return (
        <Fragment>
           CardInfo
           <form onSubmit={handleClick}>
            <input type="text" onChange={handleChange} value={txt}/>
            <button>click</button>
           </form>
        </Fragment>
    )
}

export default CardInfo;