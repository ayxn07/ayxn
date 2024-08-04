function clock(){
    let secDots = document.getElementById("secDots");
    let minDots = document.getElementById("minDots");
    let hrDots = document.getElementById("hrDots");
    var date = new Date();
    var hours = date.getHours() % 12;
    var amPm = date.getHours() >= 12 ? 'PM' : 'AM';
    hours = hours === 0 ? 12 : hours;
    var mintues = date.getMinutes();
    var seconds = date.getSeconds();

    secDots.innerHTML = '<b>'+ amPm +'</b>'+ '<h2>' + zero(seconds) + '</h2>'
    minDots.innerHTML = '<h2>' + zero(mintues) + '</h2>'
    hrDots.innerHTML = '<h2>' + zero(hours) + '</h2>'
}
function zero(number){
    if(number < 10){
        return '0' + number;
    }
    return number;
}
setInterval(clock, 1000);