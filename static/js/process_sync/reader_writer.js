var flag = 1, count = 0;

$(document).ready(function () {
	
    $('#writer').click(function writer() {
document.getElementById("textarea").disabled = false;
        if(flag == 1){
            flag = 0;            
            document.getElementById("stop").style.visibility = 'visible';
            
            document.getElementById("textarea").disabled = false;
            document.getElementById("writer").style.visibility = 'hidden';
        }
        else
            alert("Cannot write while document is being read!");
    });

    $('#startread1').click(function reader1() {
        if (flag == 1 || count > 0) {
            document.getElementById('stopread1').style.visibility = 'visible';
            document.getElementById('startread1').style.visibility = 'hidden';
            document.getElementById('textarea1').style.visibility = 'visible';
            var n1 = document.getElementById('textarea');
            count++;
            
            if (count == 1){
                flag = 0;
                document.getElementById("textarea").disabled = true;
            }
            
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            document.getElementById('textarea1').value = '';
            var n2 = document.getElementById('textarea1');
            n2.value = n1.value;
            
        }
        else 
            alert("Cannot read while document is being modified!");   
    });
    $('#startread2').click(function reader2() {
        if (flag == 1 || count > 0) {
            document.getElementById('stopread2').style.visibility = 'visible';
            document.getElementById('startread2').style.visibility = 'hidden';
            document.getElementById('textarea2').style.visibility = 'visible';
            var n1 = document.getElementById('textarea');
            count++;
            //var n = flag % 5;
            //console.log("reader", flag);
            if (count == 1){
                flag = 0;
                document.getElementById("textarea").disabled = true;
            }
            
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            document.getElementById('textarea2').value = '';
            var n2 = document.getElementById('textarea2');
            n2.value = n1.value;
            
        }
        else 
            alert("Cannot read while document is being modified!");   
    });
    $('#startread3').click(function reader3() {
        if (flag == 1 || count > 0) {
            document.getElementById('stopread3').style.visibility = 'visible';
            document.getElementById('startread3').style.visibility = 'hidden';
            document.getElementById('textarea3').style.visibility = 'visible';
            var n1 = document.getElementById('textarea');
            count++;
            //var n = flag % 5;
            //console.log("reader", flag);
            if (count == 1){
                flag = 0;
                document.getElementById("textarea").disabled = true;
            }
            
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            document.getElementById('textarea3').value = '';
            var n2 = document.getElementById('textarea3');
            n2.value = n1.value;
            
        }
        
        else 
            alert("Cannot read while document is being modified!");   
    });
    $('#startread4').click(function reader4() {
        if (flag == 1 || count > 0) {
            document.getElementById('stopread4').style.visibility = 'visible';
            document.getElementById('startread4').style.visibility = 'hidden';
            document.getElementById('textarea4').style.visibility = 'visible';
            var n1 = document.getElementById('textarea');
            count++;
            //var n = flag % 5;
            //console.log("reader", flag);
            if (count == 1){
                flag = 0;
                document.getElementById("textarea").disabled = true;
            }
            
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            document.getElementById('textarea4').value = '';
            var n2 = document.getElementById('textarea4');
            n2.value = n1.value;
            
        }
        
        else 
            alert("Cannot read while document is being modified!");   
    });

    $('#stopread1').click(function stopread1() {
            var n1 = document.getElementById('textarea');
            count--;
            //var n = flag % 5;
            //console.log("reader", flag);
            if (count == 0){
                flag = 1;
                document.getElementById("textarea").disabled = false;
            }
            document.getElementById('startread1').style.visibility = 'visible';
            document.getElementById('stopread1').style.visibility = 'hidden';
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            document.getElementById('textarea1').style.visibility = 'hidden';
           
    });
    $('#stopread2').click(function stopread2() {
        
            var n1 = document.getElementById('textarea');
            count--;
            //var n = flag % 5;
            //console.log("reader", flag);
            if (count == 0){
                flag = 1;
                document.getElementById("textarea").disabled = false;
            }
            document.getElementById('startread2').style.visibility = 'visible';
            document.getElementById('stopread2').style.visibility = 'hidden';
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            document.getElementById('textarea2').style.visibility = 'hidden';
        
        
            alert("Cannot read while document is being modified!");   
    });
    $('#stopread3').click(function stopread3() {
        
            var n1 = document.getElementById('textarea');
            count--;
            //var n = flag % 5;
            //console.log("reader", flag);
            if (count == 0){
                flag = 1;
                document.getElementById("textarea").disabled = false;
            }
            document.getElementById('startread3').style.visibility = 'visible';
            document.getElementById('stopread3').style.visibility = 'hidden';
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            document.getElementById('textarea3').style.visibility = 'hidden';
         
            alert("Cannot read while document is being modified!");   
    });
    $('#stopread4').click(function stopread4() {
        
            var n1 = document.getElementById('textarea');
            count--;
            //var n = flag % 5;
            //console.log("reader", flag);
            if (count == 0){
                flag = 1;
                document.getElementById("textarea").disabled = false;
            }
            document.getElementById('startread4').style.visibility = 'visible';
            document.getElementById('stopread4').style.visibility = 'hidden';
            document.getElementById('textarea').style.background = "#E0E0E0 ";
            document.getElementById('textarea4').style.visibility = 'hidden';
           
    });

    $('#stop').click(function stop() {
        flag = 1;
        document.getElementById("writer").style.visibility = 'visible';
        document.getElementById("stop").style.visibility = 'hidden';
    });
});