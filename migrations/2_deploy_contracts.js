"use strict";
const StoreCertAndHash = artifacts.require("StoreCertAndHash");
const CryptoJS = require("crypto-js")

console.log('Entering the second migration')

module.exports = async (deployer) => {
  await deployer.deploy(StoreCertAndHash)
  const instance = await StoreCertAndHash.deployed()

  // This information has to be updated
  // Will need to get name, course name, participation date
  const certs = [
    {
      ipfsHash: "QmRr4QXCJ3sDgocDAb58YMiEoWDbLosZn1r1jP8oJQnaye",
      details: {
        'participantName': 'Janice Dean',
        'participationDate': "December 16, 2020",
        'programmeName': "UNICEF Venture's Blockchain 101 Learning Course"
      }
    },
  ];

  // for (let i = 0; i < certs.length; i++) {
  const cert = {
    ipfsHash: "QmRr4QXCJ3sDgocDAb58YMiEoWDbLosZn1r1jP8oJQnaye",
    details: {
      'participantName': 'Janice Dean',
      'participationDate': "December 16, 2020",
      'programmeName': "UNICEF Venture's Blockchain 101 Learning Course"
    }
  };
  const encrypted_data = CryptoJS.AES.encrypt(JSON.stringify(cert.details), "XRxPzeZcxoukhsiX88npc7AL5cu5dDm7").toString()
  await instance._createCert(cert.ipfsHash, encrypted_data);
  console.log(cert);
  // }

  // const cert = await instance._getCert(0)
};
