'use strict';

const xhr = new XMLHttpRequest();
const url = 'http://localhost:3000/';
const method = 'GET';
const endpoint = 'passedexam';

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.response));
    };
};

xhr.open(method, url + endpoint, true);
xhr.send();