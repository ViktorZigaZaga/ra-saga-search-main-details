import {takeLatest, put, debounce, retry, spawn} from 'redux-saga/effects'
import {searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure, servicesDownloadSuccess, servicesDownloadFailure} from './actions/actionCreators'
import {CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST, DOWNLOAD_SERVICES_REQUEST} from './actions/actionTypes'

export const searchSkills = async (search) => {
    const params = new URLSearchParams({q: search});
    const response = await fetch(`${import.meta.env.VITE_SEARCH_URL}?${params}`);

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json;
}

function* handleChangeSearchSaga(action) {
    yield put(searchSkillsRequest(action.payload.search));
}

function* watchChangeSearchSaga() {
    yield debounce(100, CHANGE_SEARCH_FIELD, handleChangeSearchSaga);
}


function* handleSearchSkillsSaga(action) {
    try{
        const retryCount = 3;
        const retryDelay = 1000;
        const data = yield retry(retryCount, retryDelay, searchSkills, action.payload.search);
        yield put(searchSkillsSuccess(data));
    }catch(e) {
        yield put(searchSkillsFailure(e));
    }
}

function* watchSearchSkillsSaga() {
    yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga)
}

//----------------

export const servicesDownload = async (value) => {
    const response = await fetch(`${import.meta.env.VITE_SERVICES_URL}/${value}`);

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json;
}

function* handleDownloadSaga(action) {
    try {
        const retryCount = 2;
        const retryDelay = 1000;
        const data = yield retry(retryCount, retryDelay, servicesDownload, action.payload.value);
        yield put(servicesDownloadSuccess(data));
    } catch (e) {
        yield put(servicesDownloadFailure(e));
    }
}

function* watchDownloadSaga() {
    yield takeLatest(DOWNLOAD_SERVICES_REQUEST, handleDownloadSaga);
}

export default function* saga() {
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchSkillsSaga);
    yield spawn(watchDownloadSaga);
}