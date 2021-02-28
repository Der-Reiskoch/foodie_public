var comments = {

  get : function (data, after) {
    
    var url = 'https://der.reisko.ch/__c__/';

    var params = new Object();
    params["sid"] = document.getElementById("sid").value;
    params["pid"] = document.getElementById("pid").value;

    var isFirstParam = true;
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        url += (isFirstParam ? '?' : '&') + key + "=" + params[key];
      }
      isFirstParam = false;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url );
    xhr.onload = after;
    xhr.send();
  },

  post : function (data, after) {
    
    var fdata = new FormData();
    for (let k in data) { fdata.append(k, data[k]); }
    fdata.append("sid", document.getElementById("sid").value);
    fdata.append("pid", document.getElementById("pid").value);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', "https://der.reisko.ch/__c__/");
    xhr.onload = after;
    xhr.send(fdata);
  },


  load : function () {
    comments.get(
      { }, 
      function(){
        document.getElementById("cwrap").innerHTML = this.response;
      }
    );
  },
  

  add: function () {
    comments.post(
   
      {
        name : document.getElementById("cname").value,
        email : document.getElementById("cmail").value,
        website : document.getElementById("cwebsite").value,
        msg : document.getElementById("cmsg").value
      },
      
      function(){
        if (this.response == "OK") {
          document.getElementById("cadd").reset();
          comments.load();
        } else {
          alert(this.response);
        }
      }
    );
    return false;
  }
};
window.addEventListener("DOMContentLoaded", comments.load);