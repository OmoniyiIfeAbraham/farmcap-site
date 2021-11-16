const investor = document.getElementById('investor');
const farmname = document.getElementById('farmname');



const database = firebase.database();



    var ref = firebase.database().ref('users/Divine Farm/investors');
    ref.on("value", function(snapshot){


    var   myvalue = JSON.stringify(snapshot.val(),null,2);
    investor.innerHTML = myvalue ;



    });



    var ref = firebase.database().ref('users/Divine Farm/farmname');
    ref.on("value", function(snapshot){


    var   myvalue = JSON.stringify(snapshot.val(),null, );
    farmname.innerHTML = myvalue ;


    });

    var ref = firebase.database().ref('users/Divine Farm/products');
    ref.on("value", function(snapshot){


    var   myvalue = JSON.stringify(snapshot.val(),null, 2);
    products.innerHTML = myvalue ;


    });






