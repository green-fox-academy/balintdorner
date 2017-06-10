'use strict';

class Ajax {
	ajax(method, endpoint, callback) {
		const xhr = new XMLHttpRequest();
        const url = 'http://localhost:3000/';

		xhr.open(method, url + endpoint, true);
		xhr.setRequestHeader('Content-type', 'application/json');

        xhr.onreadystatechange = function () {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					const rsp = JSON.parse(xhr.response);
					callback(rsp);
				} else {
					new Error('API error!');
					console.log(xhr.status);
				}
			}
		};
        xhr.send();
	};
};
