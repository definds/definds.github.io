$(function(){
  /*  $.each($(".feiji ul li"),function(i,e){
      var ii = e.find("i");
     console.log(ii);      
   }) */
 
   /*  for(let i=0;i<ii.length;i++){
     var positionx= [17,80,142,207,17,80,142,207,17];
     var positiony=[16,16,16,16,80,80,80,80,141]
     var position = '-'+positionx[i]+'px -'+positiony+'px';
     ii[i].css("backgroundPosition",position);
    } */

   
    var ii= $(".feiji ul li").find("i");
    var a=-1;
    var b=-1;
    $.each(ii,function(i,e){
       a++;
       if(a%4===0){
          a=0;
          b++;
       }
       var positionx= [17,80,142,207];
       var  positiony=[16,89,160];
       /*  var positionx= [17,80,142,207,17,80,142,207,17,80,142,207];*/
        /* var  positiony=[16,16,16,16,89,89,89,89,160,160,160,160]; */
     var position = '-'+positionx[a]+'px -'+positiony[b]+'px';
     $(e).css("backgroundPosition",position);
          
    })
    
   var xiaoi = $(".zhengpin ul li").children("i");
    /*  console.log(xiaoi); */
    $.each(xiaoi,function(i,e){
      positiony = 2+i*51;
      position='-'+253+'px -'+positiony+'px';
      $(e).css("backgroundPosition", position);
    })
 
})