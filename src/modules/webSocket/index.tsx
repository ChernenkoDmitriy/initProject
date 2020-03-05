export const connect = () => {
    console.log('connect')
    const connection = new WebSocket('ws://10.1.135.69:6503', "json");
    connection.onopen = (evt) => {
        console.log('onopen')
    }
    connection.onclose = (evt) => {
        console.log('onclose')
    }
    connection.onmessage = (evt) => {
        console.log('onmessage', evt.data)
    }
}
