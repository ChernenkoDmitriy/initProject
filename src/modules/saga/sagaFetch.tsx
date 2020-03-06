import { takeEvery, put, call } from 'redux-saga/effects';
import Axios from "axios";
import { setNavigationParams } from '../redux/reducersAndActions/navigationParam/navigationParamAction';

const fetchData = async () => {
    // try {
    //     return await Axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC9OY04qcszXe48J_D3aNSfIQ6em1gsegw&cx=007169331518472630987:wyr4dl8odkl&q=react`)
    //         .then(response => response.data.items)
    // } catch (error) {
    //     console.log(error)
    // }
}

// function* workerLoadData({ type, payload }) {
//     // const data = yield call(fetchData);
//     console.log('payload', payload)
//     const screen = 'RegistrationView';
//     yield put(setNavigationParams({ screen }))
// }

// export function* watchLoadData() {
//     yield takeEvery('AUTHORIZATION', workerLoadData)
// }