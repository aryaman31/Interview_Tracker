var database;
var ref;
var ikey;
var ifname;
var isname;

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
  var p = document.getElementById("current-interview");
  p.innerHTML = "Line Empty";

  var olParent = document.getElementById('interview-list');
  while (olParent.firstChild) {
    olParent.removeChild(olParent.firstChild);
  }

  if (chairObj != null) {
    var keys = Object.keys(chairObj);

    ikey = keys[0];
    ifname = chairObj[ikey].first_name;
    isname = chairObj[ikey].second_name;
    p.innerHTML = ifname + " " + isname;

    for (var i = 1; i < keys.length; i++) {
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

function deleteLatest() {
  ref.child(ikey).remove();
}
