import { takeEvery, put, all, call } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../redux/actions/index';
import * as firebase from 'firebase';
import * as RootNavigation from '../routes/RootNavigation';

export function* login(action){
    try{
        const auth = firebase.auth();
        const result = yield call(
            [auth, auth.signInWithEmailAndPassword],
            action.payload.email,
            action.payload.password
        );
        let uid = result.user.uid;
        yield put(loginSuccess(result.user));
        yield RootNavigation.navigate('Dashboard', {uid: uid});
    }catch(error){
        yield console.log("Error: ", error);
        yield put(loginFailure(error.message));
    }
};

export function* onLoginRequest(){
    yield takeEvery('LOGIN_REQUEST', login);
};

//Export all the sagas
export function* userSagas(){
    yield all([
        call(onLoginRequest)
    ]);
};