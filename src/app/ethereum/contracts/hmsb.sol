// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Factory {
    address payable[] public allPatients;

    function createNewPatient(
        string memory _username,
        string memory _gender,
        uint _phone,
        uint _age,
        uint _sbp,
        uint _dbp,
        uint _pulse,
        uint _respiratoryRate,
        uint _temperature,
        uint _oxygenSaturation,
        uint _bloodGlucose
    ) public returns (address) {
        address newPatient = address(
            new Patient(
                _username,
                _gender,
                _phone,
                _age,
                _sbp,
                _dbp,
                _pulse,
                _respiratoryRate,
                _temperature,
                _oxygenSaturation,
                _bloodGlucose
            )
        );
        allPatients.push(payable(newPatient));
        return newPatient;
    }

    function getAllPatients() public view returns (address payable[] memory) {
        return allPatients;
    }
}

contract Patient {
    string public username;
    string public gender;
    uint public phone;
    uint public age;
    uint public sbp;
    uint public dbp;
    uint public pulse;
    uint public respiratoryRate;
    uint public temperature;
    uint public oxygenSaturation;
    uint public bloodGlucose;

    constructor(
        string memory _username,
        string memory _gender,
        uint _phone,
        uint _age,
        uint _sbp,
        uint _dbp,
        uint _pulse,
        uint _respiratoryRate,
        uint _temperature,
        uint _oxygenSaturation,
        uint _bloodGlucose
    ) {
        username = _username;
        gender = _gender;
        phone = _phone;
        age = _age;
        sbp = _sbp;
        dbp = _dbp;
        pulse = _pulse;
        respiratoryRate = _respiratoryRate;
        temperature = _temperature;
        oxygenSaturation = _oxygenSaturation;
        bloodGlucose = _bloodGlucose;
    }
}
