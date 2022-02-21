pragma solidity ^0.5.16;

contract election{
    
    // Candidate defintion
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }
    
    // Keeping the candidate count
    uint public candidateCount = 0;

    // Storing candidate details in a mapping
    mapping(uint => Candidate) public candidates;

    // Constructor function to add candidates
    constructor() public {
        addCandidate("BJP");
        addCandidate("Congress");
    }

    // private function that adds candidate to the mapping
    function addCandidate(string memory _name) private {
        candidateCount ++;
        candidates[candidateCount] = Candidate(candidateCount, _name, 0);
    }
}