import { all, call, delay, fork, put, take, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import userSaga from './user'

//baseURL은 앞에 중복을 줄여줌
// axios.defaults.baseURL = 'http://localhost:3065';
// axios.defaults.withCredentials = true; // cors cookie 허용. 서버에서도 처리를 해주고 클라이언트에서도 처리를 해줘야 됨

export default function* rootSaga() {
    yield all([
        fork(userSaga),
    ])
}
