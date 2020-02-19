var database;
var ref;
var previousKey = "";

function onload(){
  var firebaseConfig = {
    apiKey: "AIzaSyBAhICp6Kz-0nStBiiwQONW622Xcq090ng",
    authDomain: "britmun-chair-tracker-20bd9.firebaseapp.com",
    databaseURL: "https://britmun-chair-tracker-20bd9.firebaseio.com",
    projectId: "britmun-chair-tracker-20bd9",
    storageBucket: "britmun-chair-tracker-20bd9.appspot.com",
    messagingSenderId: "880134160103",
    appId: "1:880134160103:web:f48df6975074714ab46c42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
  ref = database.ref('chair');

  ref.on('value', getData, errData);

}

function getData(data) {
  var chairObj = data.val();

  var olParent = document.getElementById('chairList');
  while (olParent.firstChild) {
    olParent.removeChild(olParent.firstChild);
  }

  if (chairObj != null) {
    var keys = Object.keys(chairObj);

    if (previousKey != keys[0]) {
      var body = document.body.style;
      flickering(body)
      console.log("done");
    }

    // body.background = "white";
    previousKey = keys[0]
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var fname = chairObj[k].first_name;
      var sname = chairObj[k].second_name;
      var li = document.createElement('li');
      var text = document.createTextNode(fname + " " + sname);
      li.appendChild(text);
      olParent.appendChild(li);
    }
  }
}

function errData(err) {
  console.log("Error");
  console.log(err);
}

function submit() {

  var fname = document.getElementById("first-name").value;
  var sname = document.getElementById("second-name").value;

  if (fname != "") {
    var data = {
      first_name: fname,
      second_name: sname
    };

    ref.push(data);

    document.getElementById("first-name").value = "";
    document.getElementById("second-name").value = "";

  } else {
    alert("Please fill in all the fields");
  }
}

function inputOnFocus(id) {
  var a = document.getElementById(id);
  a.placeholder = ""; 
}

function inputOnBlur(id, ph) {
  var a = document.getElementById(id);
  a.placeholder = ph; 
}

async function flickering(body) {
  var c1 = 'blue';
  var c2 = 'white';
  var time = 250; // in milliseconds
  body.background = c1;
  await sleep(time);
  body.background = c2;
  await sleep(time);
  body.background = c1;
  await sleep(time);
  body.background = c2;
  await sleep(time);
  body.background = c1;
  await sleep(time);
  body.background = c2;
  await sleep(time);
  body.background = c1;
  await sleep(time);
  body.background = c2;
  await sleep(time);
  body.background = c1;
  await sleep(time);
  body.background = c2;
  await sleep(time);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}