window.addEventListener('load', initialize)

function initialize(){
    btnOn = document.querySelector('#btnLedOn');
    btnOff = document.querySelector('#btnLedOff');
    btnMessage = document.querySelector('#btnMessage')

    btnOn.addEventListener('click',TurnLedOn);
    btnOff.addEventListener('click',TurnLedOff);
    btnMessage.addEventListener('click', SendMessageToServer)
}

const IPHost = 'http://192.168.0.107:5000'
const data = {"Incoming" : "Test"};

function TurnLedOff(){
    fetch(IPHost + '/off',
    {method : 'POST'})
    .then((response)=> response.json())
    .then((data) => {
        console.log('Succes', data);
    })
    .catch((error)=> {
        console.log('Error', error)
    });
}

function TurnLedOn(){
    fetch(IPHost + '/on',
    {method : 'POST'})
    .then((response)=> response.json())
    .then((data) => {
        console.log('Succes', data);
    })
    .catch((error)=> {
        console.log('Error', error)
    });
}

function SendMessageToServer(){
    fetch(IPHost + '/doStuff',
    {   
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
                 },
        body : JSON.stringify(data) })
    .then((response)=> response.json())
    .then((data) => {
        console.log('Succes', data);
    })
    .catch((error)=> {
        console.log('Error', error)
    });

}