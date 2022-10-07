window.onload=function(){
    /*   var heiz =document.querySelector('.animate'); */
    /* 自定义动画 */
      function animates(obj,strage,functions){
            clearInterval(clock);
       var clock = setInterval(donghua,15);
         function donghua (){
            if(obj.offsetLeft===strage){
              clearInterval(clock);
              if(functions){
                  functions();
              }
            }else {
                  var step=(strage-obj.offsetLeft)/10;
                 step=step>0?Math.ceil(step):Math.floor(step);
                  obj.style.left=obj.offsetLeft+step+'px';
            }
         }          
      }
       /* 获取dom元素 */
       var tulunboul = document.querySelector('.tulunbo');
        var lis = tulunboul.querySelectorAll('li');
           var youjiantou = document.querySelector('.youjiantou');
           var dianlunbo =document.querySelector('.dianlunbo');
         
           /* 左侧按钮轮播图 */
           var index =0;
           var a=0;
           var flag= true;
            function youanniu (){
              if(flag){
                flag=false;
               a++;
              if(a===dianlunbo.children.length){
                a=0;
              }
           
              for(var i=0;i<dianlunbo.children.length;i++){
                   dianlunbo.children[i].style.backgroundColor='';
              }
              dianlunbo.children[a].style.backgroundColor='#ffffff';
             if(index===lis.length){
                         index=0;
                       tulunboul.style.left=0+'px';
                 }
                 
                 index++;
                   animates(tulunboul,-721*index,function(){
                       flag=true;
                   });
             }
            }
           youjiantou.addEventListener('click',function(){
                 youanniu();
             })
           /*  动态生成点轮播小点 点击小圆点跳转到相应的图片*/
           for(var i=0; i<lis.length;i++ ){
             var xiaoli =  document.createElement('li');
             xiaoli.setAttribute('indexs',i);
             dianlunbo.appendChild(xiaoli);
             dianlunbo.children[0].style.backgroundColor='#ffffff';
             xiaoli.addEventListener('click',function(){
              
              for(var i=0;i<lis.length;i++){
                 this.parentNode.children[i].style.backgroundColor='';
              }
                this.style.backgroundColor='#ffffff';
                index=this.getAttribute('indexs');
               a =this.getAttribute('indexs');
               animates(tulunboul,-721*index);
             })
               
           

           }
           /* 克隆轮播图第一张图片 */
          var tulunboclone = tulunboul.children[0].cloneNode(true);
           tulunboul.appendChild(tulunboclone);
   /* 自动播放轮播图 */
  var zidong = setInterval(function(){
     youjiantou.click(); 
   },3000)
  /*  鼠标经过自动播放停止 */
    tulunboul.addEventListener('mouseenter',function(){
        clearInterval(zidong);
        zidong=null;
    })
    tulunboul.addEventListener('mouseleave',function(){
     zidong = setInterval(function(){
        youjiantou.click(); 
      },3000)
    })
}