var request = require('request');

describe("fortune", function(){

  describe("as JSON", function(){

    it("responds successfully", function(done){
      request("http://localhost:3000/fortune.json", function(error, response, body){
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

    it("responds with a fortune as json", function(done){
      request("http://localhost:3000/fortune.json", function(error, response, body){
        expect(response.headers['content-type']).toEqual("application/json");
        done();
      });
    });

    it("has the correct body", function(done){
      request("http://localhost:3000/fortune.json", function(error, response, body){
        expect(body).toContain("text");
        done();
      });
    });

  });

  describe("as text", function(){

    it("responds successfully", function(done){
      request("http://localhost:3000/fortune", function(error, response, body){
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

    it("responds with a fortune as text", function(done){
      request("http://localhost:3000/fortune", function(error, response, body){
        expect(response.headers['content-type']).toEqual("text/plain");
        done();
      });
    });

    it("responds with a fortune", function(done){
      request("http://localhost:3000/fortune", function(error, response, body){
        expect(body).not.toBeNull();
        done();
      });
    });

  });


});
