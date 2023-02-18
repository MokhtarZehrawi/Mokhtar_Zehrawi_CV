console.log('hello world');

var a123 = 'hello world';
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



