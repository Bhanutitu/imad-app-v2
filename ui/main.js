console.log('Loaded!');
var submit = document.getElementById('submit_btn');
submit.onClick = function(){
     var request = new XMLHttpRequest();
     reuest.onreadystatechange = function(){
         if(request.readystate === XMLHttpRequest.DONE){
         
         if(request.status === 200){
             alert('logged in');
             
         }
         else if (request.status === 403){
             alert('wrong password');
         }
         
         else(request.status === 500)
         {
             alert('something went wrong');
         
         }
     }};
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value; 
request.open('POST', 'http://bhanu836.imad.hasura-app.io/login',true);
request.send(JSON.stringify({username:username , password:password}));
    
    
};