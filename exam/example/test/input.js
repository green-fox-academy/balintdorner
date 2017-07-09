'use strict';

let validator = function(input) {
    let valid = false;
    let awesome = false;
    let counter = 0;
    let name =  input.name;
    let res = name.slice(-3);
    let feedback = input.feedback;
    let scale = input.scale;
    let feedbackList = feedback.split(" ")
    let goodWords = ["amazing", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"]

    for (let i = 0; i < feedbackList.length; i++) {
        if (feedbackList[i] === 'awesome') {
            awesome = true;
        };
    };

    for (let i = 0; i < feedbackList.length; i++) {
        for (let j = 0; j < goodWords.length; j++) {
            if (feedbackList[i] === goodWords[j]) {
                counter++;
            };

        };
    };

    if (res === 'fox' && awesome === true && counter >= 2 && scale >= 10) {
        valid = true;
    };
    return valid;
};

module.exports = validator;
