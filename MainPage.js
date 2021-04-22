function secret() {
    var result = prompt("Please enter your name", "");
    if(result == "") {
        alert("You didnt input anything");
    } else {
        alert(result);
    }
};

function changemode(){
    var div = document.getElementById('changemode');
    var style = document.body.style.background = 'black';
	var style2 = document.body.style.color = 'white';
	div.style = style;
	div.style = style2;
};

function changemode2(){
    var div = document.getElementById('changemode');
    if(document.body.style.background = 'white') {
        var style = "document.body.style.background = 'black'; color: white;";
    }
    else {
        var style = document.body.style.background = 'white';
    }
  div.style = style;
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
