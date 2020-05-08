import { all, call } from 'redux-saga/effects';
import { helloSaga } from './sagas';

export default function* rootSaga(){
    yield all([
        call(helloSaga)
    ]);
};