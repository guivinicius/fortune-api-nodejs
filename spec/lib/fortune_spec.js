var fortune = require("../../lib/fortune");


describe("fortune", function(){

  describe("#text", function(){

    describe("the length of a fortune", function(){
      describe("when param long is undefined", function(){

        it("returns a fortune", function(){
          expect(fortune().text()).toEqual(jasmine.any(String));
        });

      });

      describe("when param long is 0", function(){

        it("returns a shorter fortune", function(){
          expect(fortune(0).text().length).toBeLessThan(160);
        });

      });

      describe("when param long is 1", function(){

        it("returns a longer fortune", function(){
          expect(fortune(1).text().length).toBeGreaterThan(160);
        });

      });

    });

    describe("the offensiveness of a fortune", function(){
      describe("when param dirty is undefined", function(){
        expect(fortune(1).options()).not.toContain("-o");
      });

      describe("when param dirty is 0", function(){
        expect(fortune(1, 0).options()).not.toContain("-o");
      });

      describe("when param dirty is 1", function(){
        expect(fortune(1, 1).options()).toContain('-o');
      });
    });

  });

});
