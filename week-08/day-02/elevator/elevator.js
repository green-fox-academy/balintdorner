function elevatorController() {
    office = new elevatorModel(10,10);
    office.buttonList[0].addEventListener('click', office.movingUp);
    office.buttonList[1].addEventListener('click', office.movingDown);
    office.buttonList[2].addEventListener('click', office.addPeople);
    office.buttonList[3].addEventListener('click', office.removePeople);
}

function elevatorModel(maxFloor, maxPeople) {
    this.buttonList = document.querySelectorAll('button');
    this.stageList = document.querySelectorAll('.stage');
    this.content = 0;
    this.background = 'green';
    this.stageList[9].textContent = this.content;
    this.stageList[9].style.backgroundColor = this.background;
    this.checkPosition = function() {
        for (var i = 0; i < this.stageList.length; i++) {
            if (this.stageList[i].style.backgroundColor === 'green') {
                return i
            }
        }
    };
    this.movingUp = function() {
        this.position = this.checkPosition()
        if (this.position > 0 ) {
            this.stageList[this.position].style.backgroundColor = 'white';
            this.stageList[this.position].textContent = '';
            this.stageList[this.position-1].style.backgroundColor = this.background;
            this.stageList[this.position-1].textContent = this.content;
        }
    }.bind(this);
    this.movingDown = function() {
        this.position = this.checkPosition()
        if (this.position < 9 ) {
            this.stageList[this.position].style.backgroundColor = 'white';
            this.stageList[this.position].textContent = '';
            this.stageList[this.position+1].style.backgroundColor = this.background;
            this.stageList[this.position+1].textContent = this.content;
        }
    }.bind(this);
    this.addPeople = function() {
        this.position = this.checkPosition()
        if (this.content < 10) {
            ++this.content
        this.stageList[this.position].textContent = this.content;
        }
    }.bind(this);
    this.removePeople = function() {
        this.position = this.checkPosition()
        if (this.content > 0) {
            --this.content
        this.stageList[this.position].textContent = this.content;
        }
    }.bind(this);
}

elevatorController()
