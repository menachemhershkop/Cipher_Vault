export default function reversText(msg){
    const revers= msg.split("").reverse().join('');
    return revers.toUpperCase();
};

