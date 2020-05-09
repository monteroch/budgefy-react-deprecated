import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as firebase from 'firebase';
import * as RootNavigation from '../routes/RootNavigation';
import { loginSuccess, loginFailure, registerFailure, saveUserintoDB, saveUserSuccess, saveUserFailure } from '../redux/actions/index';

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
        yield put(loginFailure(error.message));
    }
};

export function* onLoginRequest(){
    yield takeEvery('LOGIN_REQUEST', login);
};

export function* register(action){
    try{
        const auth = firebase.auth();
        const result = yield call(
            [auth, auth.createUserWithEmailAndPassword],
            action.payload.email,
            action.payload.password
        );
        let uid = result.user.uid;
        yield put(saveUserintoDB({
            uid: uid,
            fullname: action.payload.fullname,
            email: action.payload.email,
        }));
        yield RootNavigation.navigate('Dashboard', {uid: uid});
    }catch(error){
        yield put(registerFailure(error.message));
    }
};

export function* onRegisterRequest(){
    yield takeEvery('REGISTER_REQUEST', register);
};

export function* saveUser(action){
    try{
        const ref = firebase.database().ref('users/' + action.payload.uid)
        const result = yield call(
            [set, ref.set],
            {
                id: action.payload.uid,
                fullname: action.payload.fullname,
                email: action.payload.email
            }
        );
        yield put(saveUserSuccess(result.user));
    }catch(error){
        yield put(saveUserFailure(error.message));
    }
};

export function* onSaveUserRequest(){
    yield takeEvery('SAVE_USER_REQUEST', saveUser);
};

//Export all the sagas
export function* userSagas(){
    yield all([
        call(onLoginRequest),
        call(onRegisterRequest)
    ]);
};