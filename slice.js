const address = 'andorKilla';
const part = address.slice(2,5);
console.log(part)




const sentence = 'I am a good and hardworking person.';
// console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsStr = 'Rahim,Kahim,Kobir,Jobbar,Mofij,Kader';
const friends = friendsStr.split(',');
// console.log(friends);


const realFriend = [ 'Rahim', 'Kahim', 'Kobir', 'Jobbar', 'Mofij', 'Kader' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));

