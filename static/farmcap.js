
const interest = document.getElementById('interest');
const farmname = document.getElementById('farmname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber')
const password = document.getElementById('password');

const register = document.getElementById('register');

const database = firebase.database();

register.addEventListener('click', (e) => {
    e.preventDefault();
    

    
 


   // fullname.value = "Registration Complete!";



   
    //  database.ref('users/' + farmname.value).set({
    //      category: interest.value,
    //      farmname: farmname.value,
    //      email: email.value,
    //      phonenumber: phonenumber.value,
    //      password: password.value,
    //      investors: 0,
    //      profilepicture: "",
    //      products: 0,
         

    //  });



    //  database.ref('users/' + fullname.value + '/products').set({
    //     rice: 0,
    //     garri: 0,
    //     corn: 0,
    //     casava: 0,
    // });



    //alert("done!");



     var ref = firebase.database().ref('users/Divine Farm/password');
     ref.on("value", function(snapshot){

     var   passwordinfirebase =snapshot.val()



     if(passwordinfirebase.toString == phonenumber.value){

      alert("password correct");
       //window.location.href = "/FarmCap-master/user.html";

     }else{
      alert("password incorrect");
     }


    //phonenumber.value = myvalue ;


     });


   // alert("Registration Complete!");



});