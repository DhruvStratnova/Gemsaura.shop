(function(){
  var nav=document.getElementById('mnav');
  if(nav){
    if(!document.querySelector('.hbanner')){ nav.classList.add('solid'); }
    else{ var f=function(){ nav.classList.toggle('solid', window.scrollY>60); }; window.addEventListener('scroll',f,{passive:true}); f(); }
  }
  var mega=document.getElementById('mega'), srch=document.getElementById('srch');
  var mb=document.getElementById('menuBtn'), sb=document.getElementById('searchBtn');
  function close(el){ if(el) el.classList.remove('open'); }
  if(mb&&mega){ mb.addEventListener('click',function(){ close(srch); mega.classList.toggle('open'); });
    mega.querySelectorAll('[data-mclose]').forEach(function(e){e.addEventListener('click',function(){close(mega)})}); }
  if(sb&&srch){ sb.addEventListener('click',function(){ close(mega); srch.classList.add('open'); var i=srch.querySelector('input'); if(i) setTimeout(function(){i.focus()},120); });
    srch.querySelectorAll('[data-sclose]').forEach(function(e){e.addEventListener('click',function(){close(srch)})}); }
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'){ close(mega); close(srch); } });

  var slides=[].slice.call(document.querySelectorAll('.hslide'));
  if(slides.length>1){
    var dots=document.getElementById('hdots'), i=0;
    slides.forEach(function(s,idx){var b=document.createElement('button');if(idx===0)b.className='on';b.addEventListener('click',function(){go(idx)});dots.appendChild(b)});
    function go(n){slides[i].classList.remove('on');dots.children[i].classList.remove('on');i=(n+slides.length)%slides.length;slides[i].classList.add('on');dots.children[i].classList.add('on');}
    var nx=document.getElementById('hnext'),pv=document.getElementById('hprev');
    if(nx)nx.addEventListener('click',function(){go(i+1)});
    if(pv)pv.addEventListener('click',function(){go(i-1)});
    setInterval(function(){go(i+1)},6000);
  }

  var sbyTabs=document.getElementById('sbyTabs');
  if(sbyTabs){
    var under=document.getElementById('sbyUnderline');
    var tbtns=[].slice.call(sbyTabs.querySelectorAll('button'));
    var tpanels=[].slice.call(document.querySelectorAll('.sby-panel'));
    function moveU(btn){ under.style.left=btn.offsetLeft+'px'; under.style.width=btn.offsetWidth+'px'; }
    tbtns.forEach(function(b){ b.addEventListener('click',function(){
      tbtns.forEach(function(x){x.classList.toggle('on',x===b)});
      tpanels.forEach(function(p){p.classList.toggle('on',p.dataset.panel===b.dataset.t)});
      moveU(b);
    });});
    var f0=sbyTabs.querySelector('button.on')||tbtns[0];
    setTimeout(function(){moveU(f0)},60);
    window.addEventListener('resize',function(){var o=sbyTabs.querySelector('button.on');if(o)moveU(o)});
  }


  var rf=document.getElementById('remedy');
  if(rf){
    var rchips=[].slice.call(rf.querySelectorAll('.rf-chip'));
    var rcards=[].slice.call(rf.querySelectorAll('.rf-card'));
    rchips.forEach(function(ch){ ch.addEventListener('click',function(){
      rchips.forEach(function(x){var on=x===ch;x.classList.toggle('on',on);x.setAttribute('aria-selected',on?'true':'false');});
      rcards.forEach(function(cd){cd.classList.toggle('on',cd.dataset.c===ch.dataset.i);});
    });});
  }

})();
