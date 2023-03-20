console.log('hello world');

var introArr = ["Network Security Analyst", "Web Developer", "Software Programmer"];
var iAm = "I'm a ";
var introIndex = 0;

//console.log(document.getElementsByName('firstname').length);
function buttonClick() {
    var FirstName = document.getElementById('n1');
    var LastName = document.getElementById('n2');
    var Email = document.getElementById('n3');


    if (FirstName.value.trim() === "") {

        alert('fill out first name please');
        event.preventDefault(); //prevents form submission

    } else if (LastName.value.trim() === "") {

        alert('fill out last name please');
        event.preventDefault(); //prevents form submission

    } else if (Email.value.trim() === "") {

        alert('fill out email please');
        event.preventDefault(); //prevents form submission

    } else {

        alert('Thank You')
    }   
}


function runIntroAnimation() {

    var word = document.getElementById("intro");
    word.textContent = introArr[introIndex];
    introIndex = (introIndex + 1) % introArr.length;
}



