console.log(); // global

setTimeout();
clearTimeout();

setInterval();
clearInterval();

// window.console.log = console.log (in the browser)

var message = '';
window.message // message available in the browser
global.message // in node global replaces the window, but variables are not attached to it. so this does not work