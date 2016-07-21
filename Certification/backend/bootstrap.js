//directory.setLoginListener("loginFunc");

addHttpRequestHandler(
      '/posts',               // (string) regex used to filter the requests to be intercepted
      'reqHandlers.js',  // (string) name of the file where the request handler function is specified
      'getData'         // (string) name of the request handler function
);

//addHttpRequestHandler('/sendMail','reqHandlers.js','sendMail'); 