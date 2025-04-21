// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Profile {
    struct UserProfile {
        string displayName;
        string bio;
    }

    mapping(address => UserProfile) public profiles;
    address[] private owners;
    mapping(address => bool) private hasProfile;

    function setProfile(string memory _displayName, string memory _bio) public {
        if (!hasProfile[msg.sender]) {
            owners.push(msg.sender);
            hasProfile[msg.sender] = true;
        }
        profiles[msg.sender] = UserProfile(_displayName, _bio);
    }

    function getProfile(address _user) public view returns (UserProfile memory) {
        return profiles[_user];
    }

    function getAllOwners() public view returns (address[] memory) {
        return owners;
    }
}
