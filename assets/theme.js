(function(){
  var nav=document.getElementById('mnav');
  if(nav){
    if(!document.querySelector('.hbanner')){ nav.classList.add('solid'); }
    else{
      var f=function(){ if(window.scrollY>60) nav.classList.add('solid'); else nav.classList.remove('solid'); };
      window.addEventListener('scroll',f,{passive:true}); f();
    }
  }
  var drawer=document.getElementById('drawer'), mb=document.getElementById('menuBtn');
  if(mb&&drawer){ mb.addEventListener('click',function(){drawer.classList.add('open')});
    drawer.querySelectorAll('[data-close]').forEach(function(el){el.addEventListener('click',function(){drawer.classList.remove('open')})}); }
  var slides=[].slice.call(document.querySelectorAll('.hslide'));
  if(slides.length>1){
    var dots=document.getElementById('hdots'), i=0;
    slides.forEach(function(s,idx){var b=document.createElement('button');if(idx===0)b.className='on';b.addEventListener('click',function(){go(idx)});dots.appendChild(b)});
    function go(n){slides[i].classList.remove('on');dots.children[i].classList.remove('on');i=(n+slides.length)%slides.length;slides[i].classList.add('on');dots.children[i].classList.add('on');}
    var nx=document.getElementById('hnext'),pv=document.getElementById('hprev');
    if(nx)nx.addEventListener('click',function(){go(i+1)});
    if(pv)pv.addEventListener('click',function(){go(i-1)});
    var t=setInterval(function(){go(i+1)},6000);
  }
})();
