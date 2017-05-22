'use script'

let xhrsend = new XMLHttpRequest();
let url = 'http://localhost:3000/posts'

xhrsend.open('POST', url, true);

xhrsend.setRequestHeader("Accept", "application/json")
xhrsend.setRequestHeader("Content-Type", "application/json")

if (document.location.href === 'file:///C:/Greenfox/balintdorner/week-09/day-05/reddit/createpost.html') {
    sendbutton = document.querySelector('button');
    sendbutton.addEventListener('click', function() {
        var url = document.querySelector('.urlinput');
        var urlInnerText = url.value;
        var title = document.querySelector('textarea');
        titleInnerText = title.value;
        xhrsend.send(JSON.stringify({
          "title": titleInnerText,
          "href": urlInnerText
        }));
        if (xhr.readyState === XMLHttpRequest.DONE) {
            document.location.href = 'index.html'
        }
    })
}





let xhr = new XMLHttpRequest();

var getIndex = function() {
    xhr.open('GET', url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();

    let list;

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && document.location.href === 'file:///C:/Greenfox/balintdorner/week-09/day-05/reddit/index.html') {
            list = JSON.parse(xhr.response)
            console.log(list)
            for (let k = 0; k <list.posts.length; k++) {
                postCreator(list.posts[k].title, list.posts[k].score, list.posts[k].owner,list.posts[k].id, list.posts[k].href)
            }

        }
    }
}

getIndex();

var whichpost = 1;
var when = 0;

function postCreator(posttextInner, howmanylikes, created = 'unknown', id,  href) {

    var container = document.querySelector('.postcontainer');
    var post = document.createElement('div');
    var id = id;
    var howmanylikes = howmanylikes;
    post.className = 'post';
    container.appendChild(post);

    var number = document.createElement('div');
    number.className = 'number';
    var voter = document.createElement('div');
    voter.className = 'voter';
    var postInfo = document.createElement('div');
    postInfo.className = 'postinfo';

    post.appendChild(number);
    post.appendChild(voter);
    post.appendChild(postInfo);

    number.innerText = whichpost;
    whichpost++;

    var upvote = document.createElement('button');
    var counter = document.createElement('div');
    var downvote = document.createElement('button');

    upvote.className = 'voterbutton upvote';
    upvote.innerText = 'Up'
    counter.className = 'counter';
    counter.innerText = howmanylikes;
    downvote.className = 'voterbutton downvote';
    downvote.innerText = 'Down';

    voter.appendChild(upvote);
    voter.appendChild(counter);
    voter.appendChild(downvote);

    var postText = document.createElement('a');
    var since = document.createElement('div');
    var modRev = document.createElement('div');

    postText.className = 'posttext';
    postText.innerText = posttextInner;
    postText.href = href;
    since.className = 'since';
    since.innerText = 'submitted ' + when + ' ago ' + created;

    postInfo.appendChild(postText);
    postInfo.appendChild(since);
    postInfo.appendChild(modRev);

    var modify = document.createElement('button');
    var remove = document.createElement('button');

    modify.className = 'editor';
    modify.innerText = 'modify';
    remove.className = 'editor';
    remove.innerText = 'remove';

    modRev.appendChild(modify);
    modRev.appendChild(remove);

    var voted = false;

    upvote.addEventListener('click', function() {
        if (voted === false) {
            howmanylikes++;
            counter.innerText = howmanylikes;
            voted = true;
            upvote.style.backgroundImage = 'url(upvoted.png)';
        }
    });

    downvote.addEventListener('click', function() {
        if (voted === false) {
            howmanylikes--;
            counter.innerText = howmanylikes;
            voted = true;
            downvote.style.backgroundImage = 'url(downvoted.png)';
        }
    });

    remove.addEventListener('click', function(callback){
        var xhr =  new XMLHttpRequest();
        xhr.open('DELETE', 'file:///C:/Greenfox/balintdorner/week-09/day-05/reddit/index.html' + id, true);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                location.reload();
            }
        }
   });
};
