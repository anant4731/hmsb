// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Factory {
    address payable[] public allPatients;

    function createNewPatient() public returns (address) {
        address newPatient = address(new Patient());
        allPatients.push(payable(newPatient));
        return newPatient;
    }

    function getAllPatients() public view returns (address payable[] memory) {
        return allPatients;
    }
}

contract Patient {
    constructor() {}

    string public username;
    string public gender;
    uint public phone;
    uint public sbp;
    uint public dbp;
    uint public pulsePressure;
    uint public pulse;
    uint public respiratoryRate;
    uint public temperature;
    uint public oxygenSaturation;
    uint public bloodGlucose;

    function setUsername(string memory _username) public {
        username = _username;
    }

    function setGender(string memory _gender) public {
        gender = _gender;
    }

    function setPhone(uint _phone) public {
        phone = _phone;
    }

    function setSbp(uint _sbp) public {
        sbp = _sbp;
    }

    function setDbp(uint _dbp) public {
        dbp = _dbp;
    }

    function setPulsePressure(uint _pulsePressure) public {
        pulsePressure = _pulsePressure;
    }

    function setPulse(uint _pulse) public {
        pulse = _pulse;
    }

    function setRespiratoryRate(uint _respiratoryRate) public {
        respiratoryRate = _respiratoryRate;
    }

    function setTemperature(uint _temperature) public {
        temperature = _temperature;
    }

    function setOxygenSaturation(uint _oxygenSaturation) public {
        oxygenSaturation = _oxygenSaturation;
    }

    function setBloodGlucose(uint _bloodGlucose) public {
        bloodGlucose = _bloodGlucose;
    }
}
