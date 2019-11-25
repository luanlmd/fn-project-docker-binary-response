const fdk = require('@fnproject/fdk');
const fs = require("fs");

fdk.handle((input, ctx) => {
  const http = ctx.httpGateway;

  http.setResponseHeader("Content-Type", "image/png");
  http.statusCode = 200;

  return fdk.rawResult(fs.readFileSync("img.png"));
});