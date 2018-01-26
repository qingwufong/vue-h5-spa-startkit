const deviceInvoker = (context, method, params, callback) => {
  typeof params === 'object' && (params = JSON.stringify(params));
  /* eslint-disable no-undef */
  if (typeof webkit !== 'undefined' && webkit.messageHandlers) {
    webkit.messageHandlers.cordova.postMessage([null, context, method, [callBack]]);
  } else {
    if (window[context][method]) {
      var finishHandler = window[callback];
      var token = params ? window[context][method](params) : window[context][method]();
      finishHandler(token);
    }
  }
}

window.postBackToken = function(token) {
  localStorage.setItem('unifiedToken', token);
}

const methods = {
  relogin() {
    deviceInvoker('deviceApi_demo', 'relogin', undefined, 'postBackToken');
  }
}

export default methods;