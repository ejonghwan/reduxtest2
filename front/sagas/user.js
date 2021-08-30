import { all, put, takeLatest, takeEvery, throttle, fork, delay, call } from "@redux-saga/core/effects";
import axios from 'axios'

import { LOG_IN_SUCESS, LOG_IN_FAILUE, LOG_IN_REQUEST } from '../reducers/user.js'



function loggedAPI(data) {
    return axios.post('http://localhost:3000/aaa', data)
}

function* login(action) {
    try {
        const result = yield call(loggedAPI, action.data) //action.data = 11
        console.log(action.data)
        yield put({
            type: LOG_IN_SUCESS,
            data: result.data,
        })
    } catch(err) {
        console.error(err)
        yield put({
            type: LOG_IN_FAILUE,
            error: err.response.data
        })
    }
}


function* islogged() {
    yield takeLatest(LOG_IN_REQUEST, login)
}



export default function* userSaga () {
    yield all([
        fork(islogged)
    ])
}