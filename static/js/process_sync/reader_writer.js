var flag = 1, count = 0;

$(document).ready(function () {
	
    $('#writer').click(function writer() {

        if(flag == 1){
            flag = 0;            
            document.getElementById("stop").style.visibility = 'visible';
            
            document.getElementById("textarea").disabled = false;
            document.getElementById("writer").style.visibility = 'hidden';
        }
        else
            alert("Cannot write while document is being read!");
    });

    function reader(r){
        if (flag == 1 || count > 0) {
            document.getElementById(`stopread${r}`).style.visibility = 'visible';
            document.getElementById(`startread${r}`).style.visibility = 'hidden';
            document.getElementById(`textarea${r}`).style.visibility = 'visible';
            var n1 = document.getElementById('textarea');
            count++;
            
            if (count == 1){
                flag = 0;
                document.getElementById("textarea").disabled = true;
            }
            
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            document.getElementById(`textarea${r}`).value = '';
            var n2 = document.getElementById(`textarea${r}`);
            n2.value = n1.value;
            
        }
        else 
            alert("Cannot read while document is being modified!");   
    }

    $('#startread1').click(function() {
        reader(1);
    });
    $('#startread2').click(function() {
        reader(2);
    });
    $('#startread3').click(function() {
        reader(3);
    });
    $('#startread4').click(function() {
        reader(4);
    });
    

function stopread(r) {
            var n1 = document.getElementById('textarea');
            count--;
            //var n = flag % 5;
            //console.log("reader", flag);
            if (count == 0){
                flag = 1;
            }
            document.getElementById(`startread${r}`).style.visibility = 'visible';
            document.getElementById(`stopread${r}`).style.visibility = 'hidden';
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            document.getElementById(`textarea${r}`).style.visibility = 'hidden';
    }

    $('#stopread1').click(function()  {  
        stopread(1);     
    });
    $('#stopread2').click(function()  {  
        stopread(2);     
    });
    $('#stopread3').click(function()  {  
        stopread(3);     
    });
    $('#stopread4').click(function()  {  
        stopread(4);     
    });

    $('#stop').click(function stop() {
        flag = 1;
        document.getElementById("writer").style.visibility = 'visible';
        document.getElementById("stop").style.visibility = 'hidden';
        document.getElementById("textarea").disabled = true;
        document.getElementById('textarea').style.background = "#E0E0E0 ";
    });
});