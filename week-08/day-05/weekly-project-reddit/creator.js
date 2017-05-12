'use script'

let xhr = new XMLHttpRequest();
let url = 'https://time-radish.glitch.me/posts'

xhr.open('GET', url, true);

xhr.setRequestHeader("Accept", "application/json")

xhr.send();

let list;

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        list = JSON.parse(xhr.response)
        console.log(list)
        for (let k = 0; k <list.posts.length; k++) {
            postCreator(list.posts[k].title, list.posts[k].score, list.posts[k].owner)
        }

    }
}



var whichpost = 1;

function postCreator(posttextInner, howmanylikes, created = 'unknown') {

    var container = document.querySelector('.postcontainer');
    var post = document.createElement('div');

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
    since.className = 'since';
    since.innerText = 'submitted somewhen ago ' + created;

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
    })

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
}
