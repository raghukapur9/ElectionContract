var election = artifacts.require("./election.sol");

contract ("election", function(accounts){
    var electionInstance;
    it("initializes two candidates", function(){
        return election.deployed().then(function(instance){
            return instance.candidateCount();
        }).then(function(count){
            assert.equal(count,2);
        });
    });

    it("it initializes the candidates with the correct values", function() {
        return election.deployed().then(function(instance) {
          electionInstance = instance;
          return electionInstance.candidates(1);
        }).then(function(candidate) {
          assert.equal(candidate[0], 1, "contains the correct id");
          assert.equal(candidate[1], "BJP", "contains the correct name");
          assert.equal(candidate[2], 0, "contains the correct votes count");
          return electionInstance.candidates(2);
        }).then(function(candidate) {
          assert.equal(candidate[0], 2, "contains the correct id");
          assert.equal(candidate[1], "Congress", "contains the correct name");
          assert.equal(candidate[2], 0, "contains the correct votes count");
        });
      });
});