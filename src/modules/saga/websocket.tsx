import { takeEvery, put, call, take, cancelled } from 'redux-saga/effects';
import { eventChannel, END  } from 'redux-saga';
import IConnection from '../connection';
import { websocketData } from '../redux/reducersAndActions/webSocket/webSocketActions';

// Каналы необходимы, чтобы нормальной очередности всех сообщений, чтобы не возникала их гонка.
// Каналы обладают буферами, тем самым помогают выстраивать в очередь приходящие события, и организуют их последовательное исполнение

function createSocketChannel(socket) {
    // eventChannel(subscribe, [buffer], [matcher]) // Создает канал, который будет подписываться на источник события через subscribe
    // subscribe --- функция инициализирующая внешний источник событий. Вернуть должна функцию отписки
    // buffer --- аккумулирующий буфер
    // matcher --- функция для фильтрации входящих сообщений

    return eventChannel(emit => {
        socket.onmessage = (event) => {
            emit(event.data) // положить сообщение в eventChannel
        };

        socket.onclose = () => {
            console.log('onclose')    
            emit(END); // окончание общения с каналом
        };

        return () => {
            console.log('socket.close()')
            socket.close(); // закрыть сокет
        };
    });
}

function* workerWebsocket() {
    // const socket = IConnection.connect('ws://10.1.135.71:6503', 'json'); // создать сокет
    const socket = IConnection.Open(); // создать сокет
    // const socket = new WebSocket('ws://10.1.135.71:6503', 'json'); // создать сокет
    const socketChannel = yield call(createSocketChannel, socket); // вызвать функцию для получения сообщений
    while (true) { // постоянное получение сообщений, если не будет while (true), то один раз
        const message = yield take(socketChannel); // ждет возврат сообщения из канала 
        yield put(websocketData(JSON.parse(message)));
    }
}

export function* watchWebsocket() {
    yield takeEvery('CONNECT_WEBSOCKET', workerWebsocket)
}