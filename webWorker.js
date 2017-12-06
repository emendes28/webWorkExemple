
function httpGet()  {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", 'https://www.googleapis.com/discovery/v1/apis', false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
};
self.onmessage = event => {
    switch (event.data.command) {
      case 'getApi': {
        
        for(let i = 0; i< 500; i++){
          httpGet();
      }
        let result = httpGet();
        self.postMessage({ result });
        close(); break;
      }
    }
  }