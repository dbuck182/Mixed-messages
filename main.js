
const messages = {
starters: ['Have a ', 'You should ', 'You are '],
have_A : ['Great Day', 'Spectacular Day', 'Super Day'],
you_Should: ['go workout', 'hangout with your friends', 'code a website'],
you_Are: ['A great person', 'a good coder', 'in good shape']
};

function makeAMessage() {
    let message = "";
    message = message + messages.starters[Math.floor(Math.random() * 3)];
    if (message === 'Have a '){
        message = message + messages.have_A[Math.floor(Math.random() * messages.have_A.length)]
    } else if (message === 'You should ') {
        message = message + messages.you_Should[Math.floor(Math.random() * messages.have_A.length)]
    } else if (message  === 'You are ') {
        message = message + messages.you_Are[Math.floor(Math.random() * messages.have_A.length)]
    }
    return message;
}
console.log(makeAMessage());


