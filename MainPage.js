function secret() {
    var result = prompt("Please enter your name", "");
    if(result == "") {
        alert("You didnt input anything");
    } else {
        alert(result);
    }
};

function changemode(){
	var element = document.body;
	element.classList.toggle("dark-mode");
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

document.getElementById("e3-2013").addEventListener("mouseover", function() {
    var div = document.getElementById('e3-2013');
    var style = "background: linear-gradient(to bottom, #FF8F00 0%, #C16C00 100%); color: white;";
    div.style = style;
});
    
document.getElementById("e3-2013").addEventListener("mouseout", function() {
    var div = document.getElementById('e3-2013');
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

document.getElementById("e3-2010").addEventListener("mouseover", function() {
    var div = document.getElementById('e3-2010');
    var style = "background: linear-gradient(to bottom, #6c88d9 0%, #0037d3 100%); color: white;";
    div.style = style;
});
    
document.getElementById("e3-2010").addEventListener("mouseout", function() {
    var div = document.getElementById('e3-2010');
    var style = "background: linear-gradient(to bottom, #c2c2c2 0%, #adadad 100%);";
    div.style = style;
});

