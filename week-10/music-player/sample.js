'use strict';

const Ajax = function() {
  this.get = function(render){
    // Get request -> respond
    let respond = 'respond';
    console.log(render);
    render(respond);
  }
}

const Controller = function() {
  this.ajax = new Ajax();
  this.button = document.querySelector('button');
  this.x = 'This is x';

  this.init = function() {
    this.ajax.get(this.render.bind(this));
  }

  this.render = function(respond) {
    console.log(this.x);
  }

  this.button.addEventListener('click', function(){
    console.log(this);
    this.ajax.get(this.render.bind(this));
  }.bind(this));
}

const controller = new Controller();
controller.init();
