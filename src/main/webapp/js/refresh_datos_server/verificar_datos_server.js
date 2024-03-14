const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/html");

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("http://23.97.221.154:8080/monitor3/", myInit);

const myContentType = myRequest.headers.get("Content-Type"); // devuelve el html
