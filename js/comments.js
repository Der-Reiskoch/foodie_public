var comments = {

  get : function (data, after) {
    
    var fdata = new FormData();
    for (let k in data) { fdata.append(k, data[k]); }
    fdata.append("sid", document.getElementById("sid").value);
    fdata.append("pid", document.getElementById("pid").value);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://der.reisko.ch/__c__/");
    xhr.onload = after;
    xhr.send(fdata);
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
        email : document.getElementById("cemail").value,
        website : document.getElementById("cwebsite").value,
        msg : document.getElementById("cmsg").value
      },
      
      // (C2) RELOAD COMMENTS AFTER ADD
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