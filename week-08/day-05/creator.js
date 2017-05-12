'use script'

var i = 1;

function postCreator() {
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

    number.innerText = i;
    i++;

    upvote = document.createElement('button');
    counter = document.createElement('div');
    downvote = document.createElement('button');

    upvote.className = 'voterbutton upvote';
    upvote.innerText = 'Up'
    counter.className = 'counter';
    counter.innerText = 223;
    downvote.className = 'voterbutton downvote';
    downvote.innerText = 'Down';

    voter.appendChild(upvote);
    voter.appendChild(counter);
    voter.appendChild(downvote);
}

postCreator()
