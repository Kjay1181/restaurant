var tax = 1.04712;
 var $= document;
var p;
var p2;
var p3;
var p4;
var p5;
var p6;
var lumpia=[];
 
 var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
    if (this.readyState ==4 && this.status== 200){
    var menuData= JSON.parse(this.responseText);//gets the json file and saves its as mydata
        $.getElementById("bananaTitle").innerHTML=menuData.lumpia[0].type;
        $.getElementById("bananaPrice").innerHTML=menuData.lumpia[0].price;
        $.getElementById("chickenTitle").innerHTML=menuData.lumpia[1].type;
        $.getElementById("chickenPrice").innerHTML=menuData.lumpia[1].price;
        $.getElementById("shrimpTitle").innerHTML=menuData.lumpia[2].type;
        $.getElementById("shrimpPrice").innerHTML=menuData.lumpia[2].price;
         $.getElementById("beefTitle").innerHTML=menuData.lumpia[3].type;
        $.getElementById("beefPrice").innerHTML=menuData.lumpia[3].price;
         $.getElementById("veggieTitle").innerHTML=menuData.lumpia[4].type;
        $.getElementById("veggiePrice").innerHTML=menuData.lumpia[4].price;
         $.getElementById("porkTitle").innerHTML=menuData.lumpia[5].type;
        $.getElementById("porkPrice").innerHTML=menuData.lumpia[5].price;
        
         p= menuData.lumpia[0].price;//price for lumpia type 1
         p2= menuData.lumpia[1].price;//price for lumpia type 2
          p3= menuData.lumpia[2].price;//price for lumpia type 3
           p4= menuData.lumpia[3].price;//price for lumpia type 4
            p5= menuData.lumpia[4].price;//price for lumpia type 5
       p6= menuData.lumpia[5].price;//price for lumpia type 6
        
      }
    };
    xmlhttp.open("GET","bento.json",true);
    xmlhttp.send();

    //do this function when a criteria is met
    //4 means ready
    //200 means ok
   
  
  function buyItem(){
    var amount= $.getElementById("userInput").value;//gets an integer from the user
    var price= p*amount;// takes integer multiply it by two dollars which is the price
    document.getElementById("userInput").value="";//clears the input box
    var total= "you bought"+" "+"$"+price.toFixed(2)+ " of Banana Lumpia";//takes price displays it as you bought_ of bana
    
    
    
      var li= document.createElement('li');//creates a lists
      var newText=document.createTextNode(total);// gets total and saves it as newtext
    li.appendChild(newText);//puts newtext and total together
      var olTag=document.getElementById("recipt");//
      olTag.appendChild(li);
      lumpia.push(price);
  }
    
 function buyItemTwo(){
   var user=$.getElementById("userInputTwo").value;
   var price= p2*user;
   document.getElementById("userInputTwo").value="";
   var total= "you bought"+" "+price.toFixed(2)+" " +"of chicken Lumpia";
     var li= document.createElement('li');//creates a lists
      var newText=document.createTextNode(total);// gets total and saves it as newtext
    li.appendChild(newText);//puts newtext and total together
      var olTag=document.getElementById("recipt");//
      olTag.appendChild(li);
       lumpia.push(price);
 }
 function buyItemThree(){
   var user=$.getElementById("userInputThree").value;
   var price= p3*user;
   document.getElementById("userInputThree").value="";
   var total= "you bought"+" "+price.toFixed(2)+" " +"of shrimp Lumpia";
     var li= document.createElement('li');//creates a lists
      var newText=document.createTextNode(total);// gets total and saves it as newtext
    li.appendChild(newText);//puts newtext and total together
      var olTag=document.getElementById("recipt");//
      olTag.appendChild(li);
       lumpia.push(price);
 }
 function buyItemFour(){
   var user=$.getElementById("userInputFour").value;
   var price= p4*user;
   document.getElementById("userInputFour").value="";
   var total= "you bought"+" "+price.toFixed(2)+" " +"of Beef Lumpia";
     var li= document.createElement('li');//creates a lists
      var newText=document.createTextNode(total);// gets total and saves it as newtext
    li.appendChild(newText);//puts newtext and total together
      var olTag=document.getElementById("recipt");//
      olTag.appendChild(li);
       lumpia.push(price);
 }
 function buyItemFive(){
   var user=$.getElementById("userInputFive").value;
   var price= p5*user;
   document.getElementById("userInputFive").value="";
   var total= "you bought"+" "+price.toFixed(2)+" " +"of Veggie Lumpia";
     var li= document.createElement('li');//creates a lists
      var newText=document.createTextNode(total);// gets total and saves it as newtext
    li.appendChild(newText);//puts newtext and total together
      var olTag=document.getElementById("recipt");//
      olTag.appendChild(li);
       lumpia.push(price);
 }
 function buyItemSix(){
   var user=$.getElementById("userInputSix").value;
   var price= p6*user;
   document.getElementById("userInputSix").value="";
   var total= "you bought"+" "+price.toFixed(2)+" " +"of Pork Lumpia";
     var li= document.createElement('li');//creates a lists
      var newText=document.createTextNode(total);// gets total and saves it as newtext
    li.appendChild(newText);//puts newtext and total together
      var olTag=document.getElementById("recipt");//
      olTag.appendChild(li);
      lumpia.push(price);
 }
  function nextPage(){
 var done= document.getElementById("recipt").innerHTML;
         localStorage.setItem("array",lumpia);// set the value
     localStorage.setItem("list",done)
      location.href="results.html";
      
  }