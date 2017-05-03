'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function accountViewer(object, account) {
    for (var i = 0; i < object.length ; i++) {
        if (account === object[i]['account_number']) {
            console.log(object[i]['client_name'], object[i]['balance'])
        }
    }
}

function transfer(from, to, balance) {
    var validAccountFrom = false;
    for (var i = 0; i < accounts.length ; i++) {
        if (from === accounts[i]['account_number']) {
            accounts[i]['balance'] = accounts[i]['balance']-balance
            validAccountFrom = true;
        }
    }
    var validAccountTo = false;
    for (var i = 0; i < accounts.length ; i++) {
        if (to === accounts[i]['account_number']) {
            accounts[i]['balance'] = accounts[i]['balance']+balance
            validAccountTo = true;
        }
    }
    if (validAccountFrom === false || validAccountTo === false) {
        console.log("404 - account not found")
    }
}


accountViewer(accounts, 43546731)
transfer(11234543, 43546731, 5000000)
transfer(112345143, 1143546731, 5000000)
accountViewer(accounts, 11234543)
accountViewer(accounts, 43546731)
