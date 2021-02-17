let XMLHttRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchdata(url_api, callback){
  let xhttp = new XMLHttRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = function(event){
    if(xhttp.readyState === 4){
      if(xhttp.status === 200){
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + url_api);
        return callback(error, null)
      }
    }
  }
  xhttp.send();
}