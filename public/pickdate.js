 
           document.getElementById('form1').addEventListener('submit', function(evt){
                console.log("klickar på knappen");
               evt.preventDefault();
    document.getElementById('datum').value = document.getElementById('picked').value;
    })
    
          
        function myFunction (){
            document.getElementById("picked").value = datum;
        }
           

           
   