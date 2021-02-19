// define data variable
let data;

// set default language
function setDefaultLang(){
  (localStorage.getItem('language') == null) ? setLanguage('en') : false;
}

// get data according to the language setting
function getData(){
  //$.ajax({
  //  url: '/language/' + localStorage.getItem('language') + '.json',
  //  dataType: 'json',
  //  async: false,
  //  success: function (res /* response we get */) { data = res }
  //});
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log(data);
    }
  };
  xhttp.open("GET", '/language/' + localStorage.getItem('language') + '.json', false);
  xhttp.send();
}

// display data we get
function displayData() {
  $(document).ready(function(){
    $('#name').text(data.name);
    $('#age').text(data.age);
    $('#date').text(data.date);
  });
}

// set language
function setLanguage(lang) {
  localStorage.setItem('language', lang);
}

// change language
function changeLang(lang){
  setLanguage(lang);
  getData();
  displayData();
}

setDefaultLang();
getData();
displayData();