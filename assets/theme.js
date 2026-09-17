(function(){
  var d=document;
  // mobile drawer
  var mb=d.getElementById('burger'), dr=d.getElementById('mdrawer'), ov=d.getElementById('ovl'), mx=d.getElementById('mclose');
  function close(){dr&&dr.classList.remove('on');ov&&ov.classList.remove('on')}
  mb&&mb.addEventListener('click',function(){dr.classList.add('on');ov.classList.add('on')});
  ov&&ov.addEventListener('click',close); mx&&mx.addEventListener('click',close);

  // hero slider
  var hero=d.querySelector('[data-hero]');
  if(hero){
    var slides=hero.querySelector('.slides'), n=slides.children.length, i=0,
        dots=hero.querySelectorAll('.dots button');
    function go(k){i=(k+n)%n;slides.style.transform='translateX('+(-i*100)+'%)';dots.forEach(function(b,j){b.classList.toggle('on',j===i)})}
    hero.querySelectorAll('.dots button').forEach(function(b,j){b.addEventListener('click',function(){go(j)})});
    var p=hero.querySelector('.prev'),nx=hero.querySelector('.next');
    p&&p.addEventListener('click',function(){go(i-1)}); nx&&nx.addEventListener('click',function(){go(i+1)});
    if(n>1){var t=setInterval(function(){go(i+1)},5500); hero.addEventListener('mouseenter',function(){clearInterval(t)})}
  }

  // rail arrows
  d.querySelectorAll('[data-rail]').forEach(function(r){
    var tr=r.querySelector('.track'); if(!tr)return;
    var pv=r.querySelector('[data-prev]'), nx=r.querySelector('[data-next]');
    function step(){return Math.max(240,tr.clientWidth*0.7)}
    pv&&pv.addEventListener('click',function(){tr.scrollBy({left:-step(),behavior:'smooth'})});
    nx&&nx.addEventListener('click',function(){tr.scrollBy({left:step(),behavior:'smooth'})});
  });

  // reveal on scroll
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
  d.querySelectorAll('.rv').forEach(function(el){io.observe(el)});

  // ajax add to cart -> just go to cart for base (iterate later)
  d.querySelectorAll('[data-add]').forEach(function(b){
    b.addEventListener('click',function(e){e.preventDefault();
      fetch('/cart/add.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:b.getAttribute('data-add'),quantity:1})})
      .then(function(){window.location='/cart'});
    });
  });
})();
