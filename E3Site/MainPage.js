function changebg(){
  var img = document.createElement('img');

  img.setAttribute('src', 'https://blogs-images.forbes.com/erikkain/files/2018/03/mario-map.png');

  e.target.appendChild(img);
};

document.getElementById("e3-2018").addEventListener("mouseover", function() {
    var div = document.getElementById('e3-2018');
    var style = "background: linear-gradient(to bottom, #c92b1d 0%, #7e180e 100%); color: white;";
    div.style = style;
});
    
document.getElementById("e3-2018").addEventListener("mouseout", function() {
    var div = document.getElementById('e3-2018');
    var style = "background: linear-gradient(to bottom, #c2c2c2 0%, #adadad 100%);";
    div.style = style;
});

document.getElementById("e3-2006").addEventListener("mouseover", function() {
    var div = document.getElementById('e3-2006');
    var style = "background: linear-gradient(to bottom, #33cc33 0%, #336600 100%); color: white;";
    div.style = style;
});
    
document.getElementById("e3-2006").addEventListener("mouseout", function() {
    var div = document.getElementById('e3-2006');
    var style = "background: linear-gradient(to bottom, #c2c2c2 0%, #adadad 100%);";
    div.style = style;
});