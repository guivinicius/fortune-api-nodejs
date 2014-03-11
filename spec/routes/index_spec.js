var request = require('request');

describe("index", function(){

  it("responds successfully", function(done){
    request("http://localhost:3000", function(error, response, body){
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it("has the correct body", function(done){
    request("http://localhost:3000", function(error, response, body){
      expect(response.body).toContain("Node.js Fortune API");
      done();
    });
  });

});
