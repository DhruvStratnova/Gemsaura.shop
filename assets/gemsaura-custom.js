/* GemsAura hero slideshow + custom hamburger mega-menu (draft) */
(function(){
  /* Pin every session to the UAE market: non-AE geo contexts (e.g. India) mark all variants unavailable and block carts. Native ?country param switches server-side, once. */
  try{ if(window.__gaCountry&&window.__gaCountry!=='AE'&&!sessionStorage.getItem('gaLocAE3')){ sessionStorage.setItem('gaLocAE3','1'); var _gu=new URL(location.href); _gu.searchParams.set('country','AE'); location.replace(_gu.toString()); } }catch(e){}
  var GAABASE=(function(){
    var l=document.querySelector('link[href*="/assets/gemsaura-custom.css"]');
    return l ? l.href.replace(/assets\/gemsaura-custom\.css.*$/, 'assets/') : 'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/8/assets/';
  })();
  var GAAV='1';
  function GAA(n){ return GAABASE+n+'?v='+GAAV; }
  var D=["https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-zodiac-d.jpg", "https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-bracelets-d.jpg", "https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-rudraksha-d.jpg", "https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-pendants-d.jpg", "https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-anklets-d.jpg", "https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-mani-d.jpg"], M=["https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-zodiac-m.jpg?v=1789704491", "https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-bracelets-m.jpg?v=1789704496", "https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-rudraksha-m.jpg?v=1789704501", "https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-pendants-m.jpg?v=1789704506", "https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-anklets-m.jpg?v=1789704511", "https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/bn-mani-m.jpg?v=1789704515"];
  function hero(){
    var h=document.querySelector('#MainContent[data-template="index"] > .shopify-section');
    if(!h || h.querySelector('.ga-hero-slides')) return;
    var mob=window.matchMedia('(max-width:749px)').matches, imgs=mob?M:D;
    var HL=['/collections/rashi-bracelets','/collections/crystal-bracelets','/collections/rudraksha','/collections/pendants','/collections/anklets','/collections/gemstones'];
    var w=document.createElement('div'); w.className='ga-hero-slides';
    imgs.forEach(function(src,i){ var s=document.createElement('a'); s.className='ga-slide'+(i===0?' on':''); s.href=HL[i]||'/collections/all'; s.style.backgroundImage='url("'+src+'")'; w.appendChild(s); });
    h.insertBefore(w, h.firstChild);
    if(imgs.length>1){ var i=0, sl=w.children; setInterval(function(){ sl[i].classList.remove('on'); i=(i+1)%sl.length; sl[i].classList.add('on'); }, 6000); }
  }
  function mega(){
    var header=document.querySelector('#header-component'); if(!header || document.getElementById('ga-mega')) return;
    var burger=document.createElement('button'); burger.id='ga-burger'; burger.setAttribute('aria-label','Menu');
    burger.innerHTML='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="3.5" y1="7" x2="20.5" y2="7"></line><line x1="3.5" y1="12" x2="20.5" y2="12"></line><line x1="3.5" y1="17" x2="20.5" y2="17"></line></svg>';
    var lc=header.querySelector('.header__column--left'); if(lc){ lc.insertBefore(burger, lc.firstChild); } else { header.appendChild(burger); } var sbs=header.querySelectorAll('search-button'); if(sbs.length){ for(var k=0;k<sbs.length;k++){ sbs[k].style.display='none'; } var s0=sbs[0]; s0.style.display='inline-flex'; burger.parentNode.insertBefore(s0, burger.nextSibling); }
    var brand=document.createElement('a'); brand.id='ga-brand'; brand.href='/'; brand.innerHTML='<img class="ga-brand-img" src="https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-logo-black.png?v=1" alt="GemsAura">'; header.appendChild(brand);
    var panel=document.createElement('div'); panel.id='ga-mega'; panel.className='ga-mega';
    panel.innerHTML="<div class=\"ga-mega-inner\"><button class=\"ga-mega-close\" aria-label=\"Close\">&#10005;</button><div class=\"ga-mega-grid\"><div class=\"ga-feat-col\"><h4>Featured</h4><a class=\"ga-feature\" href=\"/products/crystal-oud\"><span class=\"ga-feature-im\" style=\"background-image:url(" + GAA('ga-oud3d.webp') + ")\"></span><span class=\"ga-feature-ov\"></span><span class=\"ga-feature-t\">Crystal <span>Oud</span></span><span class=\"ga-feature-sub\">Sacred oud, energised with crystal</span></a></div><div class=\"ga-cat\"><h4>Shop by category</h4><div class=\"ga-tiles\"><a class=\"ga-tile\" href=\"/collections/crystal-bracelets\"><span class=\"ga-tile-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-nav-crystal.jpg?v=1790013906)\"></span><span class=\"ga-tile-lb\">Bracelets</span></a><a class=\"ga-tile\" href=\"/collections/rashi-bracelets\"><span class=\"ga-tile-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-nav-zodiac.jpg?v=1790013906)\"></span><span class=\"ga-tile-lb\">Zodiac</span></a><a class=\"ga-tile\" href=\"/collections/rudraksha\"><span class=\"ga-tile-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-nav-rudraksha.jpg?v=1790013906)\"></span><span class=\"ga-tile-lb\">Rudraksha</span></a><a class=\"ga-tile\" href=\"/collections/gemstones\"><span class=\"ga-tile-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-nav-gemstone.jpg?v=1790013906)\"></span><span class=\"ga-tile-lb\">Gemstones</span></a><a class=\"ga-tile\" href=\"/collections/pendants\"><span class=\"ga-tile-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-nav-pendant.jpg?v=1790013906)\"></span><span class=\"ga-tile-lb\">Pendants</span></a><a class=\"ga-tile\" href=\"/collections/anklets\"><span class=\"ga-tile-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-nav-anklet.jpg?v=1790013906)\"></span><span class=\"ga-tile-lb\">Anklets</span></a><a class=\"ga-tile\" href=\"/collections/silver-bracelets\"><span class=\"ga-tile-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-nav-silver.jpg?v=1790013906)\"></span><span class=\"ga-tile-lb\">Silver</span></a><a class=\"ga-tile\" href=\"/collections/crystal-trees\"><span class=\"ga-tile-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-nav-tree.jpg?v=1790013906)\"></span><span class=\"ga-tile-lb\">Home Decor</span></a></div></div><div class=\"ga-side\"><h4>By gender</h4><div class=\"ga-gender\"><a href=\"/collections/all\">♂ Men</a><a href=\"/collections/all\">♀ Women</a></div><h4>With intention</h4><div class=\"ga-ints\"><a class=\"ga-int\" href=\"/collections/all\"><b>Peace</b><em>Shop</em></a><a class=\"ga-int\" href=\"/collections/all\"><b>Harmony</b><em>Shop</em></a><a class=\"ga-int\" href=\"/collections/all\"><b>Love</b><em>Shop</em></a><a class=\"ga-int\" href=\"/collections/all\"><b>Protection</b><em>Shop</em></a><a class=\"ga-int\" href=\"/collections/all\"><b>Prosperity</b><em>Shop</em></a><a class=\"ga-int\" href=\"/collections/all\"><b>Focus</b><em>Shop</em></a><a class=\"ga-int\" href=\"/collections/all\"><b>Healing</b><em>Shop</em></a></div></div></div><div class=\"ga-mega-foot\"><a href=\"/pages/about-us\">Our story</a><a href=\"/pages/contact\">Contact</a><a href=\"/collections/all\">Products</a></div></div>";
    document.body.appendChild(panel);
    function op(){ panel.classList.add('open'); document.body.style.overflow='hidden'; }
    function cl(){ panel.classList.remove('open'); document.body.style.overflow=''; }
    burger.addEventListener('click', function(e){ e.preventDefault(); panel.classList.contains('open')?cl():op(); });
    panel.querySelector('.ga-mega-close').addEventListener('click', cl);
    panel.addEventListener('click', function(e){ if(e.target===panel) cl(); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') cl(); });
  }
  function collstrip(){
    var sec=document.querySelector('[id$="collection_list_FFV7jq"]');
    if(!sec || document.querySelector('.ga-collband')) return;
    var CATS=[
      ['crystal-bracelets','Crystal Bracelet','Everyday energy','ga-crystal.webp'],
      ['rashi-bracelets','Zodiac Bracelet','Your sign, your stone','ga-zodiac.webp'],
      ['silver-bracelets','Silver Bracelet','Timeless & pure','ga-silver3d.webp'],
      ['rudraksha','Rudraksha','Sacred & grounding','ga-rudraksha.webp'],
      ['gemstones','Gemstone','Certified & natural','ga-gemstone.webp'],
      ['pendants','Pendant','Wear your intention','ga-pendant.webp'],
      ['anklets','Anklet','Subtle & sacred','ga-anklet.webp'],
      ['crystal-trees','Home Decor','Harmony at home','ga-tree3d.webp']
    ];
    var cards=CATS.map(function(c){ return '<a class="ga-ap" href="/collections/'+c[0]+'"><span class="ga-ap-im" style="background-image:url('+GAA(c[3])+')"></span><span class="ga-ap-shade"></span><span class="ga-ap-lb"><span class="ga-ap-t">'+c[1]+'</span><span class="ga-ap-s">'+c[2]+'</span></span></a>'; }).join('');
    var w=document.createElement('div'); w.className='ga-catsec';
    w.innerHTML='<div class=\"ga-collband-head ga-accord-head\"><span class=\"ga-collband-eyebrow\">Shop by category</span><h2 class=\"ga-collband-title\">Crafted for your energy</h2></div><div class=\"ga-accord\">'+cards+'</div>';
    sec.innerHTML=''; sec.appendChild(w); try{ gaReveal(w); }catch(e){}
  }
  function oudfeature(){
    var sec=document.querySelector('[id$="featured_product_pW7dEU"]');
    if(!sec || document.querySelector('.ga-oud')) return;
    var w=document.createElement('div'); w.className='ga-oud';
    w.innerHTML='<div class=\"ga-oud-text\"><span class=\"ga-oud-first\">World&#39;s first Crystal Oud</span><h2 class=\"ga-oud-title\">Crystal <span>Oud</span></h2><p class=\"ga-oud-body\">A world-first ritual: sacred oud blended with energised crystal, something you wear and breathe. Grounding, cleansing and quietly powerful, charged with intention to align your energy and still the noise.</p><a class=\"ga-oud-cta\" href=\"/products/crystal-oud\">Shop now <span>&#8594;</span></a></div><div class=\"ga-oud-visual\"><video class=\"ga-oud-video\" autoplay muted loop playsinline preload=\"metadata\" src=\"'+GAA('crystal-oud.mp4')+'\"></video><button class=\"ga-oud-sound\" type=\"button\" aria-label=\"Toggle sound\">\ud83d\udd0a</button></div>';
    sec.innerHTML=''; sec.appendChild(w); try{ gaReveal(w); }catch(e){}
  }
  var GACOL={ rudraksha:'#8a5a24', anklet:'#d05a6e', pendant:'#b03e6b', combo:'#8e3b6b', silver:'#51617a', zodiac:'#4b4f9c', mala:'#9c7317', mani:'#6f45b0', vastu:'#47804b', crystal:'#0e8291', bracelet:'#7a5c9e', gemstone:'#b23b2e' };
  function catKey(h){ h=(h||'').toLowerCase();
    if(/rudraksha|mukhi/.test(h)) return 'rudraksha';
    if(/anklet|payal/.test(h)) return 'anklet';
    if(/pendant|locket/.test(h)) return 'pendant';
    if(/rakhi|combo| trio| duo|hamper/.test(h)) return 'combo';
    if(/silver/.test(h)) return 'silver';
    if(/aries|taurus|gemini|cancer|leo|virgo|libra|scorpio|sagittarius|capricorn|aquarius|pisces|zodiac|rashi/.test(h)) return 'zodiac';
    if(/mala| jap/.test(h)) return 'mala';
    if(/\bmani\b/.test(h)) return 'mani';
    if(/pyramid|tree|orgone|plate|vastu|jalpravah| oil/.test(h)) return 'vastu';
    if(/cluster|crystal point|wand|tumbled|raw crystal|geode/.test(h)) return 'crystal';
    if(/bracelet|kada|cuff/.test(h)) return 'bracelet';
    if(/ruby|pearl|coral|emerald|sapphire|hessonite|gomed|panna|neelam|moonga|manik|pukhraj|gemstone/.test(h)) return 'gemstone';
    return 'bracelet'; }
  function catColor(h){ return GACOL[catKey(h)]||'#7a5c9e'; }
  try{ window.__gaCatColor=catColor; }catch(e){}
  // Per-sign accent for individual zodiac-sign collection pages only (element
  // colour, matching the quiz grid). Generic rashi-bracelets returns null -> keeps
  // the standard zodiac indigo.
  var ZODEL={aries:'Fire',leo:'Fire',sagittarius:'Fire',taurus:'Earth',virgo:'Earth',capricorn:'Earth',gemini:'Air',libra:'Air',aquarius:'Air',cancer:'Water',scorpio:'Water',pisces:'Water'};
  var ZELC={Fire:'#c2703d',Earth:'#5f8a5f',Air:'#3f7d86',Water:'#7a5c9e'};
  function zodColor(h){ h=(h||'').toLowerCase(); for(var s in ZODEL){ if(h.indexOf(s)>=0) return ZELC[ZODEL[s]]; } return null; }
  // Per-purpose shader/accent for the "What do you seek" collection pages, matched to each purpose's stone/vibe.
  var PURCOL={ 'wealth-prosperity':'#bf8a3a', 'love-relationships':'#c67f8e', 'protection':'#566175', 'focus-clarity':'#a5762e', 'peace-calm':'#7a5c9e', 'health-wellness':'#5f8a5f' };
  function purColor(h){ h=(h||'').toLowerCase(); var m=h.match(/purpose-([a-z-]+)/); return (m && PURCOL[m[1]]) || null; }
  // Slide a freshly-built homepage section in as it enters view (instead of a hard
  // pop). Runs only when the section is actually (re)built by init on a full load;
  // on bfcache back the section is already revealed so this is skipped (dataset guard).
  var GAHIO=null;
  function gaReveal(el){
    if(!el || el.dataset.gahr) return; el.dataset.gahr='1';
    el.classList.add('ga-reveal');
    if(!GAHIO){ try{ GAHIO=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); GAHIO.unobserve(e.target); } }); }, {root:document.querySelector('.page-wrapper')||null, threshold:0.06}); }catch(e){ GAHIO=null; } }
    if(GAHIO) GAHIO.observe(el); else el.classList.add('in');
    setTimeout(function(){ el.classList.add('in'); }, 2600);
  }
  function catLabel(h){ h=(h||'').toLowerCase();
    if(/rudraksha/.test(h)) return 'Rudraksha';
    if(/mala|jap/.test(h)) return 'Mala';
    if(/anklet|payal/.test(h)) return 'Anklet';
    if(/pendant|locket/.test(h)) return 'Pendant';
    if(/necklace/.test(h)) return 'Necklace';
    if(/pyramid/.test(h)) return 'Pyramid';
    if(/tree/.test(h)) return 'Home Decor';
    if(/bracelet|kada|band|cuff/.test(h)) return 'Bracelet';
    if(/ring/.test(h)) return 'Ring';
    return 'Gemstone'; }
  // CTA colour keyed to the DISPLAYED category (catLabel) so the +Add always
  // matches the eyebrow. Gemstones like citrine/opal/cat's eye no longer fall
  // through to the bracelet default.
  function catLabelColor(h){ var M={Rudraksha:'rudraksha',Mala:'mala',Anklet:'anklet',Pendant:'pendant',Necklace:'pendant',Pyramid:'vastu','Crystal Tree':'vastu',Bracelet:'bracelet',Ring:'gemstone',Gemstone:'gemstone'}; return GACOL[M[catLabel(h)]]||GACOL.gemstone; }
  // Ratings map built ONCE at module scope (was re-allocated on every cards() call).
  var GA_R={"7-chakra-tree-300-beads":[4.4,13],"amazonite":[4.7,17],"amber":[4.8,20],"amethyst":[4.8,18],"amthystt":[4.4,11],"amethyst-tree-300-beads":[4.7,15],"anger-control-bracelet":[4.7,18],"apatite":[4.8,20],"improve-appetite-bracelet":[4.6,18],"aquarius_bracelet":[4.8,20],"architect-bracelet":[4.7,16],"aries_bracelet":[4.8,16],"arthritis-and-rheumatism-pain-control-bracelet":[4.7,18],"artist-talent-bracelet":[4.7,17],"astrologers-bracelet":[4.7,16],"attorneys-bracelet":[4.7,17],"amazonite-jap-mala-108-beads":[4.5,15],"amethyst-pendant":[4.9,14],"amethyst-pendant-ratan":[4.5,15],"amethyst-jap-mala-108-beads":[4.4,16],"ametrine-jap-mala-108-beads":[4.4,16],"angelite-jap-mala-108":[4.7,15],"apetite-jap-mala-108-beads":[4.8,15],"aquamarine-jap-mala-108-beads":[4.5,14],"aventurine-jap-mala-108-beads":[4.3,13],"azurite-jap-mala-108-beads":[4.5,14],"black-cats-eye-jap-mala-108-beads":[4.6,14],"black-obsidian-jap-mala-108-beads":[4.7,16],"black-tourmaline-pendant":[4.7,13],"black-tourmaline-jap-mala-108-beads":[4.5,15],"bloodstone-jap-mala-108-beads":[4.6,13],"blue-kyanite-jap-mala-108-beads":[4.4,13],"blue-lace-agate-jap-mala-108-beads":[4.5,15],"blue-tiger-eye-jap-mala-108-beads":[4.5,13],"calcite-jap-mala-108-beads":[4.5,14],"citrine-jap-mala-108-beads":[4.7,13],"spatik-clear-quartz-jap-mala-108-beads":[4.6,16],"selenite-16-inch-mala-light-orange-cream":[4.5,13],"dalmatian-jasper-jap-mala-108-beads":[4.8,13],"dragons-vein-jap-mala-108-beads":[4.5,16],"8mm-firoza-16-inch-mala":[4.7,14],"garnet-jap-mala-108-beads":[4.6,28],"sunsitara-goldstone-4-mm-16-inch-mala":[4.4,14],"selenite-16-inch-mala-light-gray":[4.5,13],"green-aventurine-pendant":[4.5,16],"hakik-16-inch-mala-light-blue-green":[4.6,16],"green-jade-jap-mala-108-beads":[4.8,14],"hematite-jap-mala-108-beads":[4.8,16],"howlite-jap-mala-108-beads":[4.5,16],"kunzyite-jap-mala-108-beads":[4.5,15],"labrodrite-jap-mala-108-beads":[4.7,16],"aura-labrodrite-jap-mala-108-beads":[4.5,13],"lapis-lazuli-lajwart-jap-mala-108-beads":[4.5,13],"lapis-bullet-pendant":[4.5,13],"lapiz-heart-pendant":[4.5,13],"lava-jap-mala-108-beads":[4.4,14],"hakik-16-inch-mala-light-blue-white":[4.5,13],"malachite-jap-mala-108-beads":[4.4,14],"moonstone-jap-mala-108-beads":[4.4,16],"moss-agate-pendant":[4.6,15],"multi-fluorite-jap-mala-108-beads":[4.4,14],"hakik-18-inch-mala-yellow-orange":[4.5,14],"selenite-16-inch-mala-orange":[4.4,16],"citrine-16-inch-mala-pale-yellow-clear":[4.8,15],"8mm-pearl-16-inch-mala":[4.6,16],"peridot-jap-mala-108-beads":[4.6,14],"petrified-wood-jap-mala-108-beads":[4.4,14],"selenite-16-inch-mala-light-pink":[4.7,15],"pyrite-jap-mala-108-beads":[4.5,14],"pyrite-4mm-16-inch-mala":[4.6,41],"rainbow-moonstone-jap-mala-108-beads":[4.7,15],"lal-hakik-red-agate-jap-mala-108":[4.6,16],"red-carnelian-jap-mala-108-beads":[4.6,15],"red-jasper-jap-mala-108-beads":[4.6,14],"red-tiger-eye-4-mm-16-inch-mala":[4.8,13],"red-tiger-eye-jap-mala-108-beads":[4.5,14],"rhodochrosite-jap-mala-108-beads":[4.7,15],"rhodonite-jap-mala-108-beads":[4.5,13],"rose-quartz-pendant":[4.6,14],"rosequartz-jap-mala-108-beads":[4.5,15],"rose-quartz-16-inch-mala":[4.4,14],"selenite-jap-mala-108-beads":[4.5,13],"selenite-pendant":[4.7,36],"aura-shield-trio-black-tourmaline-tiger-eye-smoky-quartz":[4.8,19],"shree-yantra-spatik-clear-quartz-pendant":[4.5,13],"smoky-quartz-jap-mala-108-beads":[4.8,16],"sodalite-jap-mala-108-beads":[4.6,14],"aura-starter-duo-combo":[4.7,19],"stawberry-quartz-jap-mala-108-beads":[4.5,14],"sulemani-hakik-jap-mala-108-beads":[4.6,15],"sulemani-hakik-16-inch-mala":[4.9,15],"sunsitara-jap-mala-108-beads":[4.8,16],"sunstone-jap-mala-108-beads":[4.5,16],"tiger-eye-pendant":[4.5,14],"tiger-eye-jap-mala-108-beads":[4.5,16],"turquoise-firoza-jap-mala-108-beads":[4.6,14],"unakite-pendant":[4.5,13],"unakite-jap-mala-108-beads":[4.6,15],"yellow-cats-eye-jap-mala-108-beads":[4.5,13],"citrine-16-inch-mala-yellow-clear":[4.5,16],"yellow-jasper-pendant":[4.3,15],"yellow-tiger-eye-4-mm-16-inch-mala":[4.5,15],"aurora-bracelet-lab-certified":[4.8,18],"backpain-relief-bracelet":[4.7,18],"bankers-banking-bracelet":[4.6,19],"beginners-luck-trio-green-aventurine-clear-quartz-howlite":[4.8,16],"love-harmony-rakhi-combo":[4.7,20],"premium-brother-sister-crystal-rakhi-combo":[4.8,16],"black_-agate":[4.8,20],"black-tourmaline":[4.7,31],"black-tourmaline-amethyst-anklet-rakhi-combo":[4.7,36],"black-tourmaline-silver-rose-quartz-rakhi-combo":[4.8,20],"black-_tourmaline":[4.8,20],"blood-pressure-support-bracelet":[4.6,16],"improve-blood-deficiency":[4.7,18],"blue_agate":[4.8,17],"blush-bracelet-lab-certified":[4.8,20],"bone-strengthening-bracelet":[4.7,20],"business-man-bracelet":[4.7,20],"for-stress-and-anxiety-relief":[4.5,16],"balancing-frickling-mind-bracelet":[4.7,16],"cancer-support-bracelet":[4.8,17],"cancer_bracelet":[4.8,17],"capricorn_bracelet":[4.8,18],"cardio-vascular-disease":[4.6,16],"cervical-pain-relief-bracelet":[4.8,16],"chandra-mani":[4.6,11],"chartered-accountant-bracelet":[4.7,18],"citrine-citrine-anklet-rakhi-combo":[4.6,17],"citrine":[4.7,19],"ctrn":[4.4,12],"citrine-tree-300-beads":[4.7,13],"clarity-aura-blue-aventurine-keychain":[4.5,11],"clear_quartz":[4.8,20],"clear-_quartz":[4.6,18],"spatik-clear-quartz-tree-300-beads":[4.6,14],"attract-clients-customer-bracelet":[4.7,18],"erectile-dysfunction-recovery-bracelet":[4.8,19],"consultant-bracelet":[4.6,19],"court-case-victory-settlement":[4.6,16],"youtuber-bracelet":[4.6,18],"better-sleep-bracelet":[4.7,16],"deep-sleep-trio-amethyst-howlite-moonstone":[4.7,20],"depression-bracelet":[4.7,19],"boutique-designer-bracelet":[4.6,19],"dhan-yog-bracelet":[4.7,32],"diabetic-control-bracelet":[4.7,19],"indigestion-bracelet":[4.6,20],"divine-beauty-bracelet":[4.7,20],"doctors-bracelet":[4.6,16],"strengthen-friendship-bracelet":[4.6,19],"job-manifestation-bracelet":[4.7,20],"dream-job-trio-dream-job-tiger-eye-clear-quartz":[4.6,16],"dune-bracelet-lab-certified":[4.7,19],"bracelet-for-polarized-behaviour":[4.6,19],"engineers-bracelet":[4.6,16],"nazar-moti-rakhi":[4.8,19],"eye-sight-improvement":[4.6,19],"feminine-beauty-bracelet":[4.7,20],"fertility-crystal-bracelet":[4.6,17],"fibromyalgia-support-bracelet":[4.6,16],"anti-ageing-bracelet":[4.6,20],"freedom-bracelet":[4.7,17],"gemini_bracelet":[4.8,16],"golden-hour-aurora-rakhi-combo":[4.6,17],"golden-hour-bracelet-lab-certified":[4.9,16],"good-luck-bracelet":[4.8,16],"government-job-bracelet":[4.8,16],"green-aventurine-pyrite-anklet-rakhi-combo":[4.7,17],"green_aventurine":[4.8,20],"green-_aventurine":[4.6,27],"green-aventurine-tree":[4.7,15],"harit-jade-rakhi":[4.7,18],"grief-and-loss-support-bracelet":[4.6,18],"griha-vastu-combo":[4.7,17],"guru-mani":[4.8,12],"stop-hairfall-bracelet":[4.7,20],"in-laws-interference-protection-bracelet":[4.6,18],"headache-relief-bracelet":[4.8,19],"healing-touch-trio-turquoise-green-aventurine-clear-quartz":[4.8,20],"better-health-and-well-being-bracelet":[4.7,18],"healthy-pregnancy-bracelet":[4.6,16],"high-vibration-bracelet":[4.7,20],"housewives-bracelet":[4.7,18],"horizon-bracelet-lab-certified":[4.8,16],"healing-wellness-rakhi-combo":[4.5,19],"howlite":[4.8,16],"vaginal-dryness-improvement-bracelet":[4.6,19],"sexually-transmitted-infection-recovery-bracelet":[4.6,16],"inner-peace-trio-howlite-smoky-quartz-moonstone":[4.8,17],"software-developer-bracelet":[4.6,20],"interior-designer-bracelet":[4.7,17],"fear-or-dislike-of-sex-sexual-aversion-bracelet":[4.7,17],"ketu-mani":[4.7,13],"knee-pain-relief-bracelet":[4.6,20],"lagoon-bracelet-lab-certified":[4.8,20],"lapis-lazuli-lavender-rakhi-combo":[4.6,18],"calm-mind-rakhi-combo":[4.8,16],"lapis-lazuli-rose-quartz-heart-rakhi-combo":[4.6,18],"lapis-lazuli-silver-firoza-rakhi-combo":[4.7,16],"lapizlazu":[4.7,20],"lapis-lazuli":[4.6,16],"lajwart-lapis-lazuli-tree-300-beads":[4.3,14],"neel-ratna-rakhi":[4.8,18],"laser-focus-trio-clear-quartz-amethyst-tiger-eye":[4.7,17],"lavender-bracelet-lab-certified":[4.7,19],"lawyers-bracelet":[4.7,18],"leo_bracelet":[4.8,16],"libra_bracelet":[4.8,20],"love-laxmi-combo-rose-quartz-bracelet-citrine-bracelet":[4.7,38],"attracting-love":[4.7,20],"activate-luck-bracelet":[4.7,20],"lucky-carry-combo":[4.6,17],"macch-mani":[4.6,11],"makeup-artist-bracelet":[4.8,16],"peyronies-disease-recovery-bracelet":[4.7,19],"mangal-kanta":[4.5,11],"share-market-broker-bracelet":[4.7,20],"meadow-bracelet-lab-certified":[4.7,17],"menopause-bracelet":[4.7,20],"mental-illness-bracelet":[4.7,20],"mental-work-bracelet":[4.7,16],"midas-touch-trio-pyrite-citrine-green-aventurine":[4.6,19],"midnight-silver-amber-rakhi-combo":[4.8,20],"midnight-bracelet-lab-certified":[4.8,18],"migrane-and-vertigo-support-bracelet":[4.6,17],"money-maker-money-magnet-bracelet":[4.6,19],"money-magnet-trio-money-magnet-dhan-yog-pyrite":[4.6,17],"moonstone":[4.8,20],"motivation-bracelet":[4.5,19],"musician-bracelet":[4.6,16],"naari-shakti-combo":[4.6,17],"name-and-fame-bracelet":[4.6,17],"quit-addiction-bracelet":[4.7,20],"navratna-rakhi":[4.8,17],"numerologist-bracelet":[4.7,17],"nurse-bracelet":[4.6,19],"dietician-and-nutritionist-bracelet":[4.8,19],"energy-booster-vitality-bracelet":[4.7,19],"10_mukhi_nepali":[4.7,13],"11_mukhi_nepali":[4.8,13],"12_mukhi_nepali":[4.7,13],"13_mukhi_nepali":[4.7,15],"15_mukhi_nepali":[4.7,16],"2_mukhi_nepali":[4.7,14],"3_mukhi_nepali":[4.7,14],"4_mukshi_nepali":[4.5,15],"5_mukhi_nepali":[4.6,14],"6_mukhi_nepali":[4.8,13],"7_mukhi_nepali":[4.7,15],"8_mukhi_nepali":[4.7,15],"9_mukhi_nepali":[4.8,16],"parkinson-bracelet":[4.6,17],"blissful-sex-life-bracelet":[4.6,16],"improvement-in-lack-of-sexual-satisfaction-bracelet":[4.8,20],"chandra-moti-rakhi":[4.8,17],"actor-actress-bracelet":[4.7,20],"pisces_bracelet":[4.8,16],"after-baby-sexual-dysfunction-recovery-bracelet":[4.8,20],"prem-bandhan-combo":[4.7,19],"prosperity-crystal-rakhi":[4.7,20],"prostatitis-recovery-bracelet":[4.7,16],"prosperity-protection-rakhi-combo":[4.6,20],"pyrite-dhan-yog-anklet-rakhi-combo":[4.6,19],"pyrite-rhodonite-rakhi-combo":[4.8,19],"pyrite-silver-amethyst-rakhi-combo":[4.6,16],"pyrite":[4.8,17],"pyrite-tree":[4.8,15],"rakhi-duo-blessing-protection":[4.7,18],"rakhi-duo-buddha-love":[4.7,17],"rakhi-duo-energy-abundance":[4.8,17],"rakhi-box-pick-any-3":[4.7,15],"rakhi-box-pick-any-5":[4.6,16],"1_mukhi_rameswaram":[4.5,13],"14_mukhi_nepali":[4.8,13],"raw-selenite-plate":[4.0,11],"real-estate-agent-bracelet":[4.8,16],"red-jasper-garnet-anklet-rakhi-combo":[4.6,18],"red-jasper-silver-citrine-rakhi-combo":[4.7,17],"red_jasper":[4.8,16],"red-_jasper":[4.6,16],"reiki-therapist-bracelet":[4.6,20],"infidelity-cheating-physically-emotionally-protection-bracelet":[4.6,20],"rhodonite":[4.8,20],"debt-clear-bracelet":[4.7,19],"buddha-prem-rakhi":[4.8,17],"rose_quartz":[4.6,32],"rose-quartz-tree-300-beads":[4.6,14],"rudra-raksha-rakhi":[4.8,16],"sagittarius_bracelet":[4.7,17],"sales-and-marketing-bracelet":[4.7,20],"sampoorna-trio-combo":[4.7,20],"wealth-maker-bracelet":[4.6,16],"sankalp-shakti-combo":[4.6,18],"scorpio_bracelet":[4.7,19],"sapt-chakra-rakhi":[4.7,18],"excessive-sexual-tendencies-bracelet":[4.6,16],"painful-intercourse-recovery-bracelet":[4.7,16],"shukra-mani":[4.5,13],"amber_silver_bracelet":[4.8,16],"amethyst_silver_bracelet":[4.6,20],"citrine_silver_bracelet":[4.8,20],"firoza_silver_bracelet":[4.6,18],"green_aventurine_silver_bracelet":[4.7,20],"jasper_silver_bracelet":[4.6,19],"elegant-silver-sibling-rakhi-combo":[4.7,20],"lapis_silver_bracelet":[4.7,19],"pearl_silver_bracelet":[4.7,19],"peridot_silver_bracelet":[4.8,16],"red_jasper_silver_bracelet":[4.7,18],"rosequartz_silver_bracelet":[4.7,20],"tulsi_silver_bracelet":[4.6,16],"controls-overs-sleeping-bracelet":[4.6,16],"smoky-quartz-silver-peridot-rakhi-combo":[4.8,19],"smoky":[4.8,19],"soorya-mani":[4.5,13],"attract-positive-energy-in-your-love-life":[4.6,17],"soulmate-trio-rose-quartz-moonstone-rhodonite":[4.8,18],"storm-silver-green-aventurine-rakhi-combo":[4.8,20],"storm-bracelet-lab-certified":[4.7,18],"stress-relief-bracelet":[4.7,17],"success-bracelet":[4.8,16],"peace-and-happiness-bracelet":[4.6,16],"sunset-bracelet-lab-certified":[4.7,19],"sunstone":[4.7,18],"suraksha-kavach-combo":[4.7,17],"taurus_bracelet":[4.8,16],"teachers-bracelet":[4.6,19],"thyroid-gland-protection":[4.6,18],"success-prosperity-rakhi-combo":[4.6,17],"tiger-eye-moonstone-rakhi-combo":[4.6,17],"emotional-strength-rakhi-combo":[4.7,18],"tiger-eye-rose-quartz-anklet-rakhi-combo":[4.7,19],"tiger-eye-silver-pearl-rakhi-combo":[4.7,18],"energy-positivity-rakhi-combo":[4.8,17],"tige_reye":[4.9,16],"tiger_eye":[4.6,31],"vyaghra-rakhi":[4.9,18],"study-bracelet":[4.5,20],"share-market-broker-trader":[4.7,19],"travel-sickness-bracelet":[4.6,17],"triple-protection-bracelet":[4.7,20],"tourquise":[4.8,28],"firoza-rakhi":[4.8,20],"twilight-bracelet-lab-certified":[4.8,20],"unstoppable-trio-sunstone-tiger-eye-citrine":[4.7,16],"uterus-problem-bracelet":[4.6,19],"vastu-expert-bracelet":[4.7,18],"victory-over-enemies":[4.5,20],"foriegn-abroad-settlement-bracelet":[4.7,18],"virgo_bracelet":[4.8,19],"premature-ejaculation-recovery-bracelet":[4.7,19],"throat-pain-tonsillitis-recovery-bracelet":[4.7,17],"weight-gain-bracelet":[4.7,19],"ultimate-weight-control-bracelet":[4.5,17],"yellow-aventurine-tree":[4.7,16],"yin-yang-bracelet":[4.6,19]};
  try{ window.__gaRatings=GA_R; }catch(e){}

  function cards(){
    var R=GA_R;
    /* ratings hoisted to GA_R (built once) */
    var _collAccent=null;
    if(/\/collections\//.test(location.pathname)){ var _ch2=(location.pathname.match(/\/collections\/([^/?#]+)/)||[])[1]||''; var _h1c=document.querySelector('#MainContent h1'); var _cstr=_ch2+' '+(_h1c?_h1c.textContent:''); _collAccent=purColor(_cstr)||zodColor(_cstr)||catColor(_cstr); }
    document.querySelectorAll('product-card').forEach(function(card){
      if(card.dataset.gaGlass) return; card.dataset.gaGlass='1';
      var link=card.querySelector('a[href*="/products/"]'); if(!link) return;
      var href=link.getAttribute('href');
      var handle=(href.match(/\/products\/([^/?#]+)/)||[])[1]; if(!handle) return;
      card.classList.add('ga-gcard');
      var content=card.querySelector('.product-card__content'); if(!content) return;
      var h3=content.querySelector('h3');
      var titleText=(h3?h3.textContent:'').trim();
      var col=_collAccent||catLabelColor(titleText); card.style.setProperty('--gac', col);
      var priceEl=content.querySelector('product-price')||content.querySelector('.price');
      var onSale=!!content.querySelector('s');
      var d=R[handle];
      content.querySelectorAll('h3, .group-block').forEach(function(e){ e.style.display='none'; });
      if(d){ var rp=document.createElement('span'); rp.className='ga-pill-rate'; rp.innerHTML='<span class="s">&#9733;</span> '+d[0].toFixed(1); card.appendChild(rp); }
      if(onSale){ var sp=document.createElement('span'); sp.className='ga-pill-sale'; sp.textContent='Price Drop'; card.appendChild(sp); }
      var glass=document.createElement('div'); glass.className='ga-glass';
      var meta=document.createElement('div'); meta.className='ga-cardmeta';
      meta.innerHTML='<span class="ga-cardcat">'+catLabel(titleText)+'</span>'+(d?'<a class="ga-cardrev" href="'+href+'">'+d[1]+' reviews</a>':'');
      var title=document.createElement('div'); title.className='ga-title'; title.textContent=titleText;
      var foot=document.createElement('div'); foot.className='ga-cardfoot';
      if(priceEl){ var pc=priceEl.cloneNode(true); pc.classList.add('ga-price'); try{ var tw=document.createTreeWalker(pc, NodeFilter.SHOW_TEXT); var tn; while((tn=tw.nextNode())){ tn.nodeValue=tn.nodeValue.replace(/\.00(?!\d)/g,''); } }catch(e){} foot.appendChild(pc); }
      var add=document.createElement('button'); add.type='button'; add.className='ga-add'; add.dataset.handle=handle; add.dataset.href=href; add.innerHTML='+ Add';
      var vidEl=card.querySelector('input[name="id"]'); if(vidEl&&vidEl.value&&!vidEl.disabled) add.dataset.vid=vidEl.value;
      foot.appendChild(add);
      glass.appendChild(meta); glass.appendChild(title); glass.appendChild(foot);
      card.appendChild(glass);
    });
  }
  function intent(){
    var sec=document.querySelector('[id$="collection_list_iAQiBH"]');
    if(!sec || sec.querySelector('.ga-intentband')) return;
    var cards='<a class=\"ga-collcard\" href=\"/collections/purpose-wealth-prosperity\"><span class=\"ga-collcard-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-intent-wealth.jpg?v=1790184179)\"></span><span class=\"ga-collcard-body\"><span class=\"ga-collcard-t\">Wealth</span><span class=\"ga-collcard-s\">Abundance & money</span></span></a>'+'<a class=\"ga-collcard\" href=\"/collections/purpose-love-relationships\"><span class=\"ga-collcard-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-intent-love.jpg?v=1790184179)\"></span><span class=\"ga-collcard-body\"><span class=\"ga-collcard-t\">Love</span><span class=\"ga-collcard-s\">Heart & harmony</span></span></a>'+'<a class=\"ga-collcard\" href=\"/collections/purpose-protection\"><span class=\"ga-collcard-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-intent-protection.jpg?v=1790184179)\"></span><span class=\"ga-collcard-body\"><span class=\"ga-collcard-t\">Protection</span><span class=\"ga-collcard-s\">Shield & ground</span></span></a>'+'<a class=\"ga-collcard\" href=\"/collections/purpose-focus-clarity\"><span class=\"ga-collcard-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-intent-focus.jpg?v=1790184179)\"></span><span class=\"ga-collcard-body\"><span class=\"ga-collcard-t\">Focus</span><span class=\"ga-collcard-s\">Clarity & drive</span></span></a>'+'<a class=\"ga-collcard\" href=\"/collections/purpose-peace-calm\"><span class=\"ga-collcard-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-intent-peace.jpg?v=1790184179)\"></span><span class=\"ga-collcard-body\"><span class=\"ga-collcard-t\">Peace</span><span class=\"ga-collcard-s\">Calm & balance</span></span></a>'+'<a class=\"ga-collcard\" href=\"/collections/purpose-health-wellness\"><span class=\"ga-collcard-im\" style=\"background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-intent-healing.jpg?v=1790184179)\"></span><span class=\"ga-collcard-body\"><span class=\"ga-collcard-t\">Healing</span><span class=\"ga-collcard-s\">Body & mind</span></span></a>'+'';
    var w=document.createElement('div'); w.className='ga-collband ga-intentband';
    w.innerHTML='<div class=\"ga-collband-head\"><span class=\"ga-collband-eyebrow\">Shop by intention</span><h2 class=\"ga-collband-title\">What do you seek?</h2></div><div class=\"ga-collgrid\">'+cards+'</div>';
    sec.innerHTML=''; sec.appendChild(w); try{ gaReveal(w); }catch(e){}
  }
  function footer(){
    var host=document.querySelector('#footer-group')||document.querySelector('footer');
    if(!host || document.querySelector('.gfoot')) return;
    var cols={
      'Shop':[['All Products','/collections/all'],['Crystal Bracelets','/collections/crystal-bracelets'],['Zodiac Bracelets','/collections/rashi-bracelets'],['Silver Bracelets','/collections/silver-bracelets'],['Rudraksha','/collections/rudraksha'],['Gemstones','/collections/gemstones'],['Pendants','/collections/pendants'],['Anklets','/collections/anklets'],['Home Decor','/collections/crystal-trees']],
      'By Intention':[['Wealth','/collections/purpose-wealth-prosperity'],['Love','/collections/purpose-love-relationships'],['Protection','/collections/purpose-protection'],['Focus','/collections/purpose-focus-clarity'],['Peace','/collections/purpose-peace-calm'],['Healing','/collections/purpose-health-wellness']],
      'Company':[['About Us','/pages/about-us'],['Contact','/pages/contact'],['FAQs','/pages/faqs'],['Astro Calculator','/pages/astrocalculator']],
      'Help':[['Shipping & Delivery','/pages/shipping-delivery-policy'],['Return & Refund','/pages/return-refund-policy'],['Privacy Policy','/pages/privacy-policy'],['Terms & Conditions','/pages/terms-conditions']]
    };
    var colHtml=Object.keys(cols).map(function(k){ return '<div class="gfoot-col"><h4>'+k+'</h4><ul>'+cols[k].map(function(l){ return '<li><a href="'+l[1]+'">'+l[0]+'</a></li>'; }).join('')+'</ul></div>'; }).join('');
    var yr=2026; try{ yr=new Date().getFullYear(); }catch(e){}
    var f=document.createElement('footer'); f.className='gfoot';
    f.innerHTML='<div class="gfoot-waves"></div>'+'<div class="gfoot-inner">'+'<div class="gfoot-hero"><img class="gfoot-logo-img" src="https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-logo-black.png?v=1" alt="GemsAura"><p class="gfoot-tag">Feel your aura.</p></div>'+'<div class="gfoot-grid">'+'<div class="gfoot-about"><h4>About</h4><p>We craft genuine, lab certified natural stones, hand finished and energised with intention. Every piece ships with a certificate of authenticity, a small ritual of calm you can wear every day.</p></div>'+colHtml+'</div>'+'<div class="gfoot-mid">'+'<div class="gfoot-contact"><h4>Contact</h4><p class="gfoot-contact-l">GemsAura, operated by Stratnova Technologies LLP</p><p><a href="mailto:gemsaura.shop@gmail.com">gemsaura.shop@gmail.com</a></p></div>'+'<div class="gfoot-social">'+'<a href="https://www.instagram.com/gemsaura.store/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>'+'<a href="https://www.facebook.com/gemsaura.store" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.5c0-.3.2-.5.5-.5z"/></svg></a>'+'<a href="https://wa.me/919311192978" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.1-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.5 1.8 1 .9 1.8 1.1 2.1 1.3.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.6-.1 1.1z"/></svg></a>'+'</div>'+'</div>'+'<div class="gfoot-bottom"><span>&copy; '+yr+' GemsAura. All rights reserved.</span><span class="gfoot-pay">Secure checkout, encrypted end to end.</span></div>'+'</div>';
    host.querySelectorAll('.shopify-section').forEach(function(n){ n.style.display='none'; });
    var util=document.querySelector('.shopify-section[id*="utilities"], .shopify-section[id*="copyright"]'); if(util) util.style.display='none';
    document.querySelectorAll('a[href*="shopify.com"]').forEach(function(a){ if(/powered by shopify/i.test(a.textContent||'')){ var p=a.closest('.shopify-section, .footer__utilities, [class*="utilit"]')||a.parentElement; if(p) p.style.display='none'; } });
    host.appendChild(f);
  }
  function extras(){
    var main=document.querySelector('#MainContent'); if(!main || main.dataset.gaExtras) return; main.dataset.gaExtras='1';
    var ZOD=[["Aries", "&#9800;&#65038;", "rashi-aries", "Mar 21 to Apr 19", "Carnelian", "Fire"], ["Taurus", "&#9801;&#65038;", "rashi-taurus", "Apr 20 to May 20", "Rose Quartz", "Earth"], ["Gemini", "&#9802;&#65038;", "rashi-gemini", "May 21 to Jun 20", "Tiger Eye", "Air"], ["Cancer", "&#9803;&#65038;", "rashi-cancer", "Jun 21 to Jul 22", "Moonstone", "Water"], ["Leo", "&#9804;&#65038;", "rashi-leo", "Jul 23 to Aug 22", "Pyrite", "Fire"], ["Virgo", "&#9805;&#65038;", "rashi-virgo", "Aug 23 to Sep 22", "Amazonite", "Earth"], ["Libra", "&#9806;&#65038;", "rashi-libra", "Sep 23 to Oct 22", "Lapis Lazuli", "Air"], ["Scorpio", "&#9807;&#65038;", "rashi-scorpio", "Oct 23 to Nov 21", "Obsidian", "Water"], ["Sagittarius", "&#9808;&#65038;", "rashi-sagittarius", "Nov 22 to Dec 21", "Turquoise", "Fire"], ["Capricorn", "&#9809;&#65038;", "rashi-capricorn", "Dec 22 to Jan 19", "Garnet", "Earth"], ["Aquarius", "&#9810;&#65038;", "rashi-aquarius", "Jan 20 to Feb 18", "Amethyst", "Air"], ["Pisces", "&#9811;&#65038;", "rashi-pisces", "Feb 19 to Mar 20", "Aquamarine", "Water"]]; var REV=[{"a": "Farhan T.", "b": "Placed the 7 chakra crystal tree in my living room it looks beautiful"}, {"a": "Shreya R.", "b": "My overthinking was too much lately and i can relax much easier now"}, {"a": "Om A.", "b": "The amber bracelet came with a proper lab certificate"}, {"a": "Nitin M.", "b": "Been using the amethyst bracelet for two weeks and i can relax much easier now!"}, {"a": "Suresh A.", "b": "Wearing the amethyst anklet daily and my mind feels peaceful most days"}, {"a": "Rupa G.", "b": "Kept the amethyst crystal tree in the money corner and my mind feels peaceful most days"}, {"a": "Meenakshi B.", "b": "The anger control bracelet came with a proper lab certificate"}, {"a": "Gopal J.", "b": "Wearing it for three weeks now and my mind feels sharper"}, {"a": "Ananya H.", "b": "Wearing it for about ten days now and my mood has lifted a bit"}, {"a": "Rahul J.", "b": "Honestly the aquarius zodiac bracelet is doing its job my mood has lifted a bit"}];
    function mk(html){ var d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstElementChild; }
    function after(suffix, node){ var s=document.querySelector('[id$="'+suffix+'"]'); if(s&&s.parentNode){ s.parentNode.insertBefore(node, s.nextSibling); return node; } main.appendChild(node); return node; }

    /* 2. ZODIAC WHEEL */
    var ELC={Fire:'#c2703d',Earth:'#5f8a5f',Air:'#3f7d86',Water:'#7a5c9e'};
    var cardsHtml=ZOD.map(function(z){ var col=ELC[z[5]]; return '<a class="ga-zcard" href="/collections/'+z[2]+'" style="--ec:'+col+'"><span class="ga-zcard-glyph">'+z[1]+'</span><span class="ga-zcard-name">'+z[0]+'</span><span class="ga-zcard-dates">'+z[3]+'</span></a>'; }).join('');
    var zod=mk('<section class="ga-zodiac"><div class="ga-zodiac-head"><span class="ga-eyebrow">Written in the stars</span><h2 class="ga-h2">Shop by your sign</h2><p class="ga-zsub">Twelve signs, twelve stones. Find the crystal aligned to your birth.</p></div><div class="ga-zgrid">'+cardsHtml+'</div></section>');
    after('featured_product_pW7dEU', zod); try{ gaReveal(zod); }catch(e){}

    /* 3. HOW IT WORKS */
    var how=mk('<section class="ga-how"><div class="ga-how-head"><span class="ga-eyebrow">The ritual</span><h2 class="ga-h2">How it works</h2></div>'
      +'<div class="ga-how-row">'
      +'<div class="ga-how-step"><span class="ga-how-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg></span><span class="ga-how-n">01</span><h3>Choose your intention</h3><p>Wealth, love, protection or peace. Pick the energy you want to carry.</p></div>'
      +'<div class="ga-how-step"><span class="ga-how-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z"/><path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z"/></svg></span><span class="ga-how-n">02</span><h3>We energise it</h3><p>Every stone is cleansed and charged with intention before it ships.</p></div>'
      +'<div class="ga-how-step"><span class="ga-how-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 3h12l3 5-9 13L3 8z"/><path d="M3 8h18M9 3l-1 5 4 13 4-13-1-5"/></svg></span><span class="ga-how-n">03</span><h3>Wear it daily</h3><p>Keep it close. Let the crystal work quietly, every single day.</p></div>'
      +'</div></section>');

    /* 4. REVIEWS SLIDER */
    var RPAL=['#b5763f','#5f8a5f','#3f7d86','#7a5c9e','#a9737f'];
    var revHtml=REV.map(function(r,ri){ var ini=r.a.split(' ').map(function(w){return (w[0]||'');}).join('').slice(0,2).toUpperCase(); var col=RPAL[ri%RPAL.length]; return '<div class="ga-rev"><div class="ga-rev-top"><div class="ga-rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div></div><p class="ga-rev-b">&ldquo;'+r.b+'&rdquo;</p><div class="ga-rev-foot"><span class="ga-rev-av" style="background:'+col+'">'+ini+'</span><span class="ga-rev-meta"><span class="ga-rev-a">'+r.a+'</span><span class="ga-rev-verified"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 1.8 3 .2.9 2.8 2.4 1.7-.9 2.9.9 2.9-2.4 1.7-.9 2.8-3 .2L12 22l-2.4-1.8-3-.2-.9-2.8L3.3 15.5l.9-2.9-.9-2.9 2.4-1.7.9-2.8 3-.2z"/><path d="M10.5 13.5l-2-2-1 1 3 3 5-5-1-1z" fill="#fff"/></svg>Verified buyer</span></span></div></div>'; }).join('');
    var reviews=mk('<section class="ga-reviews"><div class="ga-rev-head"><span class="ga-eyebrow">Loved by thousands</span><h2 class="ga-h2">What people feel</h2></div><div class="ga-rev-track ga-rev-marquee">'+revHtml+revHtml+'</div></section>');
    after('collection_list_iAQiBH', how);
    try{ var _hio=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ how.classList.add('in'); _hio.disconnect(); } }); },{threshold:.25}); _hio.observe(how); }catch(e){ how.classList.add('in'); }
    how.parentNode.insertBefore(reviews, how.nextSibling);
  }
  function faq(){
    var main=document.querySelector('#MainContent'); if(!main || document.querySelector('.ga-faq')) return;
    var items='<details class=\"ga-faq-item\"><summary>Are your crystals natural and certified?<span class=\"ga-faq-chev\"></span></summary><div class=\"ga-faq-a\">Yes. Every stone is lab tested for authenticity and hand selected. No synthetics, no shortcuts.</div></details>'+'<details class=\"ga-faq-item\"><summary>How do I care for my crystal jewellery?<span class=\"ga-faq-chev\"></span></summary><div class=\"ga-faq-a\">Keep it away from water and perfume, wipe it gently with a soft cloth, and recharge it under moonlight now and then.</div></details>'+'<details class=\"ga-faq-item\"><summary>Do the crystals actually work?<span class=\"ga-faq-chev\"></span></summary><div class=\"ga-faq-a\">Each piece is energised with intention to support your focus and calm. Wear yours daily and stay consistent for the best results.</div></details>'+'<details class=\"ga-faq-item\"><summary>How fast is delivery?<span class=\"ga-faq-chev\"></span></summary><div class=\"ga-faq-a\">Orders across the UAE ship free and usually arrive within 7 to 10 business days.</div></details>'+'<details class=\"ga-faq-item\"><summary>Can I return or exchange my order?<span class=\"ga-faq-chev\"></span></summary><div class=\"ga-faq-a\">Yes. If something is not right you can return it. See our returns policy for the full details.</div></details>'+'';
    var sec=document.createElement('section'); sec.className='ga-faq';
    sec.innerHTML='<div class=\"ga-faq-in\"><div class=\"ga-faq-list\"><h2 class=\"ga-h2\">Questions, answered</h2>'+items+'</div>'
      +'<aside class=\"ga-faq-side\"><div class=\"ga-faq-card\"><span class=\"ga-faq-av\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5\"/></svg></span><h3>Still have a question?</h3><p>Our team is here to help, real people, quick replies. Ask us anything about your order or which stone fits your intention.</p><span class=\"ga-faq-hours\">Mon to Sat &middot; 10am to 7pm</span><a class=\"ga-faq-wa\" href=\"mailto:gemsaura.shop@gmail.com?subject=Question%20for%20GemsAura\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3.5 7.5l8.5 6 8.5-6\"/></svg>Write us a mail</a></div></aside></div>';
    main.appendChild(sec);
  }
  function faqAnim(){
    document.querySelectorAll('.ga-faq-item > summary').forEach(function(sm){
      var d=sm.parentNode; if(d.dataset.gaFaq) return; d.dataset.gaFaq='1';
      var ans=d.querySelector('.ga-faq-a'); if(!ans) return;
      sm.addEventListener('click', function(e){
        e.preventDefault();
        if(d.open){
          ans.style.overflow='hidden'; ans.style.height=ans.scrollHeight+'px';
          requestAnimationFrame(function(){ ans.style.height='0px'; });
          var te=function(ev){ if(ev.propertyName==='height'){ d.open=false; ans.style.height=''; ans.style.overflow=''; ans.removeEventListener('transitionend',te); } };
          ans.addEventListener('transitionend', te);
        } else {
          d.open=true; ans.style.overflow='hidden'; ans.style.height='0px';
          requestAnimationFrame(function(){ requestAnimationFrame(function(){ ans.style.height=ans.scrollHeight+'px'; }); });
          var te2=function(ev){ if(ev.propertyName==='height'){ ans.style.height='auto'; ans.style.overflow=''; ans.removeEventListener('transitionend',te2); } };
          ans.addEventListener('transitionend', te2);
        }
      });
    });
  }
  function collhead(){
    if(!/\/collections\//.test(location.pathname)) return;
    if(!document.querySelector('.product-grid')) return;
    var title=document.querySelector('#MainContent h1'); if(!title || title.dataset.gaColl) return; title.dataset.gaColl='1';
    var sec=title.closest('.shopify-section'); if(sec){ sec.classList.add('ga-collsec'); var _ctstr=location.pathname+' '+(title.textContent||''); sec.style.setProperty('--cat', purColor(_ctstr)||zodColor(_ctstr)||catColor(title.textContent||'')); }
    function killJunk(){
      [].slice.call(document.querySelectorAll('.menu-list__link-title')).forEach(function(e){ if(/^\s*more\s*$/i.test(e.textContent||'')){ var li=e.closest('li, overflow-list, .overflow-menu'); if(li) li.style.display='none'; } });
      [].slice.call(document.querySelectorAll('.facets__summary, .facets__label')).forEach(function(s){ if(/^\s*availability/i.test(s.textContent||'')){ var d=s.closest('details, .facets__panel'); if(d) d.style.display='none'; } });
    }
    killJunk();
    var block=title.closest('.text-block')||title;
    if(block.parentElement) block.parentElement.classList.add('ga-collcontent');
    var MOODS=[["All", "", "#6a6154"], ["Wealth", "wealth-prosperity", "#b5763f"], ["Love", "love-relationships", "#a9737f"], ["Protection", "protection", "#5f8a5f"], ["Peace", "peace-calm", "#3f7d86"], ["Healing", "health-wellness", "#6a9d8a"]], PIC={"All": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8 12l2.5 2.5L16 9\"/></svg>", "Wealth": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><ellipse cx=\"12\" cy=\"7\" rx=\"7\" ry=\"3\"/><path d=\"M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7\"/><path d=\"M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5\"/></svg>", "Love": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M12 20s-7-4.3-7-9.5A3.8 3.8 0 0112 8a3.8 3.8 0 017 2.5C19 15.7 12 20 12 20z\"/></svg>", "Protection": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M12 3l7 3v5c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6l7-3z\"/></svg>", "Peace": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"21\"/><line x1=\"12\" y1=\"12\" x2=\"5.5\" y2=\"18\"/><line x1=\"12\" y1=\"12\" x2=\"18.5\" y2=\"18\"/></svg>", "Focus": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/></svg>", "Healing": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"><path d=\"M12 21c5-1 8-5 8-11V4l-6 2c-3 1-5 3-5 7 0 3 1 5 3 8z\"/><path d=\"M8 20c-2-4-2-8 4-12\"/></svg>"}, STONE=[["Amethyst", "amethyst"], ["Tiger Eye", "tiger-eye"], ["Citrine", "citrine"], ["Rose Quartz", "rose-quartz"], ["Green Aventurine", "green-aventurine"], ["Pyrite", "pyrite"], ["Lapis Lazuli", "lapis-lazuli"], ["Black Tourmaline", "black-tourmaline"], ["Clear Quartz", "clear-quartz"], ["Moonstone", "moonstone"], ["Agate", "agate"]], TYPE=[["Bracelets", "bracelet"], ["Gemstones", "gemstone"], ["Rudraksha", "rudraksha"], ["Pendants", "pendants"], ["Anklets", "anklet"]], CHEV="<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M6 9l6 6 6-6\"/></svg>";
    var x=document.createElement('div'); x.className='ga-collx';
    var intro=document.createElement('p'); intro.className='ga-coll-tag'; intro.textContent='Everyday stones, chosen for their energy and finished by hand. Each piece is lab certified and charged with intention before it reaches you.';
    var trust=document.createElement('div'); trust.className='ga-coll-trust'; trust.innerHTML="<span><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M12 3l7 3v5c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6l7-3z\"/><path d=\"M9 12l2 2 4-4\"/></svg>Lab certified</span><span><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M12 21c5-1 8-5 8-11V4l-6 2c-3 1-5 3-5 7 0 3 1 5 3 8z\"/><path d=\"M8 20c-2-4-2-8 4-12\"/></svg>Natural &amp; energised</span><span><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><rect x=\"1\" y=\"6\" width=\"13\" height=\"10\" rx=\"1\"/><path d=\"M14 9h4l3 3v4h-7z\"/><circle cx=\"6\" cy=\"18\" r=\"1.6\"/><circle cx=\"18\" cy=\"18\" r=\"1.6\"/></svg>Free shipping</span><span><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"9\" rx=\"2\"/><path d=\"M8 11V7a4 4 0 018 0v4\"/></svg>Secure checkout</span>";
    var mood=document.createElement('div'); mood.className='ga-mood';
    function railHtml(g,list,withIcon){ var p='<button class="ga-mood-card on" data-g="'+g+'" data-k="">'+(withIcon?'<span class="ga-mood-ic">'+PIC.All+'</span>':'')+'<span>All</span></button>'; p+=list.map(function(m){ return '<button class="ga-mood-card" data-g="'+g+'" data-k="'+m[1]+'">'+(withIcon?'<span class="ga-mood-ic">'+(PIC[m[0]]||'')+'</span>':'')+'<span>'+m[0]+'</span></button>'; }).join(''); return '<div class="ga-mood-rail" data-rail="'+g+'"'+(g!=='purpose'?' hidden':'')+'>'+p+'</div>'; }
    var tabs='<div class="ga-ftabs"><button class="ga-ftab on" data-tab="purpose">By purpose</button><button class="ga-ftab" data-tab="stone">By stone</button></div>';
    mood.innerHTML=tabs+railHtml('purpose',MOODS.slice(1),true)+railHtml('stone',STONE,false);
    var _host=block.parentElement, _kids=_host?[].slice.call(_host.children):[], _ti=_kids.indexOf(block), _desc=null;
    for(var _i=_ti+1;_i<_kids.length;_i++){ if((_kids[_i].textContent||'').trim().length>30){ _desc=_kids[_i]; break; } }
    if(!_desc){
      var _cha=(location.pathname.match(/\/collections\/([^/?#]+)/)||[])[1]||'';
      var GADESC={
        'crystal-bracelets':'Hand-finished bracelets strung with natural, energised crystal beads. Every stone is lab certified and chosen for its unique energy, made to be worn every day.',
        'bracelets':'Hand-finished bracelets strung with natural, energised stones. Every bead is lab certified and chosen for its unique energy, made to be worn every day.',
        'gemstones':'Certified natural gemstones, ethically sourced and energised before dispatch. Each stone is lab tested for authenticity and cut to bring out its natural colour and clarity.',
        'vedic-gems':'Authentic Vedic gemstones (Navratna) for planetary remedies, each lab certified and energised. Sourced and graded to honour their astrological significance.',
        'other-gems':'Certified natural gemstones beyond the classic nine, each lab tested and energised. Chosen for their beauty and their unique metaphysical properties.',
        'crystals':'Raw and polished natural crystals for your space and rituals. Each piece is cleansed and charged with intention, ready to bring calm, focus and positive energy home.',
        'crystal-trees':'Handcrafted crystal trees that bring abundance and positive energy to any room. Each tree is wired by hand with natural stone chips.',
        'pendant':'Natural stone pendants made to be worn close to the heart. Each is lab certified and energised, pairing everyday elegance with the stone\'s properties.',
        'pyramids':'Orgone and crystal pyramids that focus energy into your space. Each pyramid is hand-set with natural stones for protection and balance.',
        'malas':'Traditional 108-bead japa malas for meditation and intention. Each mala is strung by hand from natural, energised beads and finished with a guru bead.',
        'money':'Stones and combinations chosen to attract abundance, prosperity and flow. Each piece is lab certified and energised to support your wealth intentions.',
        'wealth':'Stones and combinations chosen to attract abundance, prosperity and flow. Each piece is lab certified and energised to support your wealth intentions.',
        'health':'Crystals selected to support wellbeing, vitality and balance in body and mind. Each stone is natural, lab certified and energised before it reaches you.',
        'top-selling':'Our most loved pieces, chosen by thousands. Every bracelet and stone is natural, lab certified and energised before dispatch.',
        'new-arrival':'The latest additions to the GemsAura collection. Fresh natural stones and designs, each lab certified and energised, ready to wear.'
      };
      var GACAT={
        bracelet:'Hand-finished bracelets strung with natural, energised stones. Every bead is lab certified and chosen for its unique energy, made to be worn every day.',
        gemstone:'Certified natural gemstones, ethically sourced and energised before dispatch. Each stone is lab tested for authenticity and its natural colour and clarity.',
        crystal:'Raw and polished natural crystals for your space and rituals. Each piece is cleansed and charged with intention to bring calm, focus and positive energy.',
        rudraksha:'Sacred rudraksha beads known for their spiritual and grounding properties. Each bead is natural, energised and finished by hand for daily wear.',
        mala:'Traditional 108-bead japa malas for meditation and intention. Each mala is strung by hand from natural, energised beads.',
        pendant:'Natural stone pendants made to be worn close to the heart, lab certified and energised for everyday elegance.',
        anklet:'Natural stone anklets finished by hand, energised and lab certified for comfortable everyday wear.',
        silver:'Sterling silver pieces paired with natural, energised stones, crafted for lasting shine and everyday elegance.',
        vastu:'Crystal energy pieces for your home and workspace, hand-set with natural stones to invite balance and abundance.',
        combo:'Curated crystal combinations that work in harmony. Each set is hand-picked, lab certified and energised for a focused intention.',
        zodiac:'Bracelets matched to your zodiac sign and its guiding stones, each natural, lab certified and energised for your path.',
        mani:'Sacred stones chosen for their planetary and spiritual significance, each natural, energised and lab certified.'
      };
      var _dt=GADESC[_cha] || GACAT[catKey(_cha+' '+(title.textContent||''))] || 'Natural, energised stones, lab certified and finished by hand. Each piece is charged with intention before it reaches you.';
      _desc=document.createElement('div'); _desc.innerHTML='<p>'+_dt+'</p>';
    }
    x.appendChild(trust);
    if(_desc){ _desc.classList.add('ga-coll-desc'); x.appendChild(_desc); }
    x.appendChild(mood);
    var _cc=block.parentElement;
    if(_cc && _cc.parentNode){ _cc.parentNode.insertBefore(x, _cc.nextSibling); } else { sec.appendChild(x); }
    if(sec && !sec.querySelector('.ga-coll-glow')){ var g0=document.createElement('div'); g0.className='ga-coll-glow'; sec.insertBefore(g0, sec.firstChild); }
    var _isCry=/crystal-bracelet/.test(location.pathname) || /crystal\s*bracelet/i.test(title.textContent||'');
    if(_isCry && sec){
      sec.style.setProperty('--cat', '#7a5c9e');
      sec.classList.add('ga-coll-hascrystal');
      var cry=document.createElement('div'); cry.className='ga-coll-crystal'; cry.innerHTML='<img src="https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-cosmic.png?v=1789904898" alt="Crystal" loading="lazy">'; sec.appendChild(cry);
      sec.addEventListener('mousemove', function(e){ var rr=sec.getBoundingClientRect(); var img=cry.querySelector('img'); if(!img) return; var px=(e.clientX-rr.left)/rr.width-0.5, py=(e.clientY-rr.top)/rr.height-0.5; img.style.transform='rotateY('+(px*20)+'deg) rotateX('+(-py*20)+'deg)'; });
      sec.addEventListener('mouseleave', function(){ var img=cry.querySelector('img'); if(img) img.style.transform='rotateY(0deg) rotateX(0deg)'; });
    }
    var _isRud=/\/collections\/rudraksha/.test(location.pathname) || /rudraksha/i.test(title.textContent||'');
    if(_isRud && sec && !sec.querySelector('.ga-coll-crystal')){
      sec.classList.add('ga-coll-hascrystal');
      var rud=document.createElement('div'); rud.className='ga-coll-crystal'; rud.innerHTML='<img src="https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-rudraksha.png?v=1789903387" alt="Rudraksha" loading="lazy">'; sec.appendChild(rud);
      sec.addEventListener('mousemove', function(e){ var rr=sec.getBoundingClientRect(); var img=rud.querySelector('img'); if(!img) return; var px=(e.clientX-rr.left)/rr.width-0.5, py=(e.clientY-rr.top)/rr.height-0.5; img.style.transform='rotateY('+(px*20)+'deg) rotateX('+(-py*20)+'deg)'; });
      sec.addEventListener('mouseleave', function(){ var img=rud.querySelector('img'); if(img) img.style.transform='rotateY(0deg) rotateX(0deg)'; });
    }
    var _isZod=/\/collections\/(rashi-bracelets|zodiac)/.test(location.pathname) || /zodiac|rashi/i.test(title.textContent||'');
    if(_isZod && sec && !sec.querySelector('.ga-coll-crystal')){
      sec.classList.add('ga-coll-hascrystal');
      var zod=document.createElement('div'); zod.className='ga-coll-crystal'; zod.innerHTML='<img src="https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zodiac.png?v=1789904903" alt="Zodiac" loading="lazy">'; sec.appendChild(zod);
      sec.addEventListener('mousemove', function(e){ var rr=sec.getBoundingClientRect(); var img=zod.querySelector('img'); if(!img) return; var px=(e.clientX-rr.left)/rr.width-0.5, py=(e.clientY-rr.top)/rr.height-0.5; img.style.transform='rotateY('+(px*20)+'deg) rotateX('+(-py*20)+'deg)'; });
      sec.addEventListener('mouseleave', function(){ var img=zod.querySelector('img'); if(img) img.style.transform='rotateY(0deg) rotateX(0deg)'; });
    }

    // Per-sign floating 3D zodiac charm (individual rashi-<sign> pages). Add a
    // sign here as its keyed PNG is uploaded; rashi-bracelets uses the generic one above.
    var ZIMG={ aries:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-aries.png?v=1789972475', taurus:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-taurus.png?v=1789974222', gemini:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-gemini.png?v=1789974227', cancer:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-cancer.png?v=1789974232', leo:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-leo.png?v=1789974236', virgo:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-virgo.png?v=1789974269', libra:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-libra.png?v=1789974241', scorpio:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-scorpio.png?v=1789974246', sagittarius:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-sagittarius.png?v=1789974251', capricorn:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-capricorn.png?v=1789974255', aquarius:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-aquarius.png?v=1789974260', pisces:'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-zod-pisces.png?v=1789974264' };
    var _zsign=(location.pathname.match(/\/collections\/rashi-([a-z]+)/)||[])[1];
    if(_zsign && ZIMG[_zsign] && sec && !sec.querySelector('.ga-coll-crystal')){
      sec.classList.add('ga-coll-hascrystal');
      var zc=document.createElement('div'); zc.className='ga-coll-crystal'; zc.innerHTML='<img src="'+ZIMG[_zsign]+'" alt="'+_zsign+'" loading="lazy">'; sec.appendChild(zc);
      sec.addEventListener('mousemove', function(e){ var rr=sec.getBoundingClientRect(); var img=zc.querySelector('img'); if(!img) return; var px=(e.clientX-rr.left)/rr.width-0.5, py=(e.clientY-rr.top)/rr.height-0.5; img.style.transform='rotateY('+(px*20)+'deg) rotateX('+(-py*20)+'deg)'; });
      sec.addEventListener('mouseleave', function(){ var img=zc.querySelector('img'); if(img) img.style.transform='rotateY(0deg) rotateX(0deg)'; });
    }

    // Floating 3D charm for the "What do you seek" purpose collections. Add each
    // as its keyed PNG is uploaded (key = the purpose handle minus the 'purpose-' prefix).
    var PIMG={ 'wealth-prosperity':'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-purpose-wealth.png?v=1789985658', 'love-relationships':'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-purpose-love.png?v=1789985567', 'protection':'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-purpose-protection.png?v=1789985654', 'focus-clarity':'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-purpose-focus.png?v=1789986280', 'peace-calm':'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-purpose-peace.png?v=1789986284', 'health-wellness':'https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-purpose-healing.png?v=1789986287' };
    var _psg=(location.pathname.match(/\/collections\/purpose-([a-z-]+)/)||[])[1];
    if(_psg && PIMG[_psg] && sec && !sec.querySelector('.ga-coll-crystal')){
      sec.classList.add('ga-coll-hascrystal');
      var pcw=document.createElement('div'); pcw.className='ga-coll-crystal'; pcw.innerHTML='<img src="'+PIMG[_psg]+'" alt="'+_psg+'" loading="lazy">'; sec.appendChild(pcw);
      sec.addEventListener('mousemove', function(e){ var rr=sec.getBoundingClientRect(); var img=pcw.querySelector('img'); if(!img) return; var px=(e.clientX-rr.left)/rr.width-0.5, py=(e.clientY-rr.top)/rr.height-0.5; img.style.transform='rotateY('+(px*20)+'deg) rotateX('+(-py*20)+'deg)'; });
      sec.addEventListener('mouseleave', function(){ var img=pcw.querySelector('img'); if(img) img.style.transform='rotateY(0deg) rotateX(0deg)'; });
    }

    var _isGem=/\/collections\/gemstones/.test(location.pathname) || /gemstone/i.test(title.textContent||'');
    if(_isGem && sec && !sec.querySelector('.ga-coll-crystal')){
      sec.classList.add('ga-coll-hascrystal');
      var gem=document.createElement('div'); gem.className='ga-coll-crystal'; gem.innerHTML='<img src="https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-gemstone.png?v=1789905498" alt="Gemstone" loading="lazy">'; sec.appendChild(gem);
      sec.addEventListener('mousemove', function(e){ var rr=sec.getBoundingClientRect(); var img=gem.querySelector('img'); if(!img) return; var px=(e.clientX-rr.left)/rr.width-0.5, py=(e.clientY-rr.top)/rr.height-0.5; img.style.transform='rotateY('+(px*20)+'deg) rotateX('+(-py*20)+'deg)'; });
      sec.addEventListener('mouseleave', function(){ var img=gem.querySelector('img'); if(img) img.style.transform='rotateY(0deg) rotateX(0deg)'; });
    }

    var _isPen=/\/collections\/pendant/.test(location.pathname) || /pendant/i.test(title.textContent||'');
    if(_isPen && sec && !sec.querySelector('.ga-coll-crystal')){
      sec.classList.add('ga-coll-hascrystal');
      var pen=document.createElement('div'); pen.className='ga-coll-crystal ga-coll-portrait'; pen.innerHTML='<img src="https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-pendant.png?v=1789928805" alt="Pendant" loading="lazy">'; sec.appendChild(pen);
      sec.addEventListener('mousemove', function(e){ var rr=sec.getBoundingClientRect(); var img=pen.querySelector('img'); if(!img) return; var px=(e.clientX-rr.left)/rr.width-0.5, py=(e.clientY-rr.top)/rr.height-0.5; img.style.transform='rotateY('+(px*20)+'deg) rotateX('+(-py*20)+'deg)'; });
      sec.addEventListener('mouseleave', function(){ var img=pen.querySelector('img'); if(img) img.style.transform='rotateY(0deg) rotateX(0deg)'; });
    }

    var _isAnk=/\/collections\/anklet/.test(location.pathname) || /anklet/i.test(title.textContent||'');
    if(_isAnk && sec && !sec.querySelector('.ga-coll-crystal')){
      sec.classList.add('ga-coll-hascrystal');
      var ank=document.createElement('div'); ank.className='ga-coll-crystal'; ank.innerHTML='<img src="https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-anklet.png?v=1789929321" alt="Anklet" loading="lazy">'; sec.appendChild(ank);
      sec.addEventListener('mousemove', function(e){ var rr=sec.getBoundingClientRect(); var img=ank.querySelector('img'); if(!img) return; var px=(e.clientX-rr.left)/rr.width-0.5, py=(e.clientY-rr.top)/rr.height-0.5; img.style.transform='rotateY('+(px*20)+'deg) rotateX('+(-py*20)+'deg)'; });
      sec.addEventListener('mouseleave', function(){ var img=ank.querySelector('img'); if(img) img.style.transform='rotateY(0deg) rotateX(0deg)'; });
    }

    var FACETS=null, state={purpose:'',category:'',stone:''};
    var cntEl=document.querySelector('.products-count-wrapper');
    function items(){ return [].slice.call(document.querySelectorAll('.product-grid .product-grid__item')); }
    function handle(it){ var l=it.querySelector('a[href*="/products/"]'); return l?((l.getAttribute('href').match(/\/products\/([^/?#]+)/)||[])[1]):''; }
    function apply(){
      var groups={};
      if(state.purpose) groups.purpose=[state.purpose];
      if(state.category) groups.category=[state.category];
      if(state.stone) groups.stone=[state.stone];
      var any=Object.keys(groups).length>0, shown=0;
      items().forEach(function(it){ var h=handle(it), ok=true;
        for(var gk in groups){ var inG=groups[gk].some(function(k){ return FACETS&&FACETS[gk]&&FACETS[gk][k]&&FACETS[gk][k].indexOf(h)>-1; }); if(!inG){ok=false;break;} }
        it.style.display=ok?'':'none'; if(ok)shown++;
      });
      if(cntEl) cntEl.textContent=(any?shown:items().length)+' items';
      mood.querySelectorAll('.ga-mood-card').forEach(function(c){ c.classList.toggle('on', (c.getAttribute('data-k')||'')===(state[c.getAttribute('data-g')]||'')); });
      var grid=document.querySelector('.product-grid'); var msg=document.getElementById('ga-empty');
      if(any && shown===0){ if(!msg){ msg=document.createElement('div'); msg.id='ga-empty'; msg.className='ga-empty'; msg.innerHTML='<p>No pieces match this combination.</p><button>Reset filters</button>'; grid.parentNode.insertBefore(msg, grid.nextSibling); msg.querySelector('button').addEventListener('click', function(){ state={purpose:'',category:'',stone:''}; apply(); }); } msg.style.display=''; }
      else if(msg){ msg.style.display='none'; }
    }
    mood.querySelector('.ga-ftabs').addEventListener('click', function(e){ var t=e.target.closest('.ga-ftab'); if(!t) return; var tab=t.getAttribute('data-tab'); mood.querySelectorAll('.ga-ftab').forEach(function(b){ b.classList.toggle('on', b===t); }); mood.querySelectorAll('.ga-mood-rail').forEach(function(r){ r.hidden=r.getAttribute('data-rail')!==tab; }); });
    mood.addEventListener('click', function(e){ var c=e.target.closest('.ga-mood-card'); if(!c) return; state[c.getAttribute('data-g')]=c.getAttribute('data-k')||''; apply(); });
    fetch('https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-facets.json?v=1789756625').then(function(r){return r.json();}).then(function(j){ FACETS=j; apply(); }).catch(function(){});
    var pg=document.querySelector('.product-grid'); if(pg){ new MutationObserver(function(){ killJunk(); apply(); }).observe(pg,{childList:true}); }
    [300,1200].forEach(function(ms){ setTimeout(killJunk, ms); });
    var tbf=document.querySelector('.facets__form'); if(tbf){ new MutationObserver(killJunk).observe(tbf,{childList:true,subtree:true}); }
  }
  function fixHeaderCart(){
    document.querySelectorAll('cart-icon svg').forEach(function(svg){
      if(svg.dataset.gaFixed) return; svg.dataset.gaFixed='1';
      svg.setAttribute('viewBox','0 0 24 24');
      svg.innerHTML='<path d="M6 8.5h12l-.9 10.2a1.8 1.8 0 0 1-1.8 1.6H8.7a1.8 1.8 0 0 1-1.8-1.6L6 8.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.2 8.5V7a2.8 2.8 0 0 1 5.6 0v1.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';
    });
  }
  function cartWire(){
    if(window.__gaCartWired) return; window.__gaCartWired=true;
    function gaPW(){ return document.querySelector('.page-wrapper'); }
    function gaLock(){ var p=gaPW(); if(p){ p.style.overflow='hidden'; } document.documentElement.classList.add('gcart-lock'); }
    function gaUnlock(){ var p=gaPW(); if(p){ p.style.overflow=''; } document.documentElement.classList.remove('gcart-lock'); }
    // neutralize the theme cart trigger so its drawer (and scroll-lock) never fires
    function gaNeutralizeTrigger(){ document.querySelectorAll('button[aria-label="Cart"]').forEach(function(b){ ['on:click','aria-controls','aria-haspopup','command','commandfor'].forEach(function(a){ b.removeAttribute(a); }); }); }
    gaNeutralizeTrigger(); [200,800,1600].forEach(function(ms){ setTimeout(gaNeutralizeTrigger, ms); });
    gaUnlock();
    var pcache={};
    function getProduct(h){ if(pcache[h]) return Promise.resolve(pcache[h]); return fetch('/products/'+h+'.js').then(function(r){return r.json();}).then(function(p){ pcache[h]=p; return p; }); }
    function money(c){ return 'Dhs. '+(c/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
    function toast(msg){ var t=document.createElement('div'); t.className='ga-toast'; t.textContent=msg; document.body.appendChild(t); requestAnimationFrame(function(){ t.classList.add('on'); }); setTimeout(function(){ t.classList.remove('on'); setTimeout(function(){ t.remove(); }, 320); }, 2200); }
    var X='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    var MINUS='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><path d="M5 12h14"/></svg>';
    var PLUS='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';
    var TRASH='<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M6.5 7l.8 12.1A1.5 1.5 0 0 0 8.8 20.5h6.4a1.5 1.5 0 0 0 1.5-1.4L17.5 7"/></svg>';

    var root, itemsEl, emptyEl, totalEl, countEl;
    function build(){
      if(root) return;
      root=document.createElement('div'); root.id='gcart'; root.setAttribute('aria-hidden','true');
      root.innerHTML='<div class="gcart-scrim"></div><aside class="gcart-panel" role="dialog" aria-label="Shopping cart" aria-modal="true">'
        +'<header class="gcart-top"><span class="gcart-h">Cart <span class="gcart-count">0</span></span><button class="gcart-x" aria-label="Close cart">'+X+'</button></header>'
        +'<div class="gcart-scroll"><div class="gcart-items"></div><div class="gcart-empty"><p>Your cart is empty.</p><button class="gcart-shop">Continue shopping</button></div></div>'
        +'<footer class="gcart-foot"><div class="gcart-ship">✦ Free shipping on all orders</div><div class="gcart-row gcart-row-disc" style="display:none"><span class="gcart-disc-lb">Discount</span><span class="gcart-disc-v"></span></div><div class="gcart-row"><span>Subtotal</span><span class="gcart-total">Dhs. 0.00</span></div><a class="gcart-co" href="/checkout">Checkout</a></footer>'
        +'</aside>';
      document.body.appendChild(root);
      itemsEl=root.querySelector('.gcart-items'); emptyEl=root.querySelector('.gcart-empty'); totalEl=root.querySelector('.gcart-total'); countEl=root.querySelector('.gcart-count');
      root.querySelector('.gcart-scrim').addEventListener('click', closeCart);
      root.querySelector('.gcart-x').addEventListener('click', closeCart);
      root.querySelector('.gcart-shop').addEventListener('click', closeCart);
      document.addEventListener('keydown', function(e){ if(e.key==='Escape' && root.classList.contains('on')) closeCart(); });
      itemsEl.addEventListener('click', function(e){ var b=e.target.closest('[data-act]'); if(!b) return; var row=b.closest('.gci'); if(!row) return; var key=row.getAttribute('data-key'); var act=b.getAttribute('data-act'); var q=parseInt((row.querySelector('.gci-q')||{}).textContent,10)||1; if(act==='inc') changeQty(key,q+1,row); else if(act==='dec') changeQty(key,Math.max(0,q-1),row); else if(act==='rm') changeQty(key,0,row); });
    }
    function imgUrl(u){ if(!u) return ''; return u.replace(/(\.(?:jpe?g|png|webp|gif|avif))(\?|$)/i,'_180x$1$2'); }
    function render(cart){
      build();
      countEl.textContent=cart.item_count; totalEl.textContent=money(cart.total_price); updateBadge(cart.item_count);
      try{ var _dr=root.querySelector('.gcart-row-disc'); if(_dr){ var _sv=cart.total_discount||0; if(_sv>0){ var _dn=(cart.cart_level_discount_applications&&cart.cart_level_discount_applications[0]&&cart.cart_level_discount_applications[0].title)||'Discount applied'; _dr.style.display=''; _dr.querySelector('.gcart-disc-lb').textContent=_dn; _dr.querySelector('.gcart-disc-v').textContent='− '+money(_sv); } else { _dr.style.display='none'; } } }catch(e){}
      if(!cart.items.length){ itemsEl.innerHTML=''; root.classList.add('empty'); return; }
      root.classList.remove('empty');
      itemsEl.innerHTML=cart.items.map(function(it){ var im=imgUrl(it.image||(it.featured_image&&it.featured_image.url)||'');
        return '<div class="gci" data-key="'+it.key+'" style="--c:'+catColor((it.product_type||'')+' '+it.product_title)+'">'
          +'<div class="gci-img"'+(im?' style="background-image:url('+im+')"':'')+'></div>'
          +'<div class="gci-mid"><div class="gci-t">'+it.product_title+'</div>'
          +(it.variant_title&&!/default/i.test(it.variant_title)?'<div class="gci-v">'+it.variant_title+'</div>':'')
          +'<div class="gci-p">'+money(it.final_price)+(it.original_price>it.final_price?' <s>'+money(it.original_price)+'</s>':'')+'</div>'
          +'<div class="gci-qty"><button data-act="dec" aria-label="Decrease quantity">'+MINUS+'</button><span class="gci-q">'+it.quantity+'</span><button data-act="inc" aria-label="Increase quantity">'+PLUS+'</button></div></div>'
          +'<div class="gci-right"><button class="gci-rm" data-act="rm" aria-label="Remove item">'+TRASH+'</button><div class="gci-line">'+money(it.final_line_price)+'</div></div>'
          +'</div>';
      }).join('');
      enrich(cart);
    }
    function enrich(cart){ var hs=cart.items.map(function(i){return i.handle;}).filter(function(v,i,a){return a.indexOf(v)===i;});
      hs.forEach(function(h){ getProduct(h).then(function(p){ cart.items.forEach(function(it){ if(it.handle!==h) return; var v=(p.variants||[]).filter(function(x){return x.id===it.variant_id;})[0]; if(v&&v.compare_at_price&&v.compare_at_price>it.final_price){ var el=itemsEl.querySelector('.gci[data-key="'+it.key+'"] .gci-p'); if(el&&!el.querySelector('s')) el.innerHTML=money(it.final_price)+' <s>'+money(v.compare_at_price)+'</s>'; } }); }).catch(function(){}); });
    }
    function updateBadge(n){ document.querySelectorAll('cart-icon').forEach(function(ci){ var b=ci.querySelector('.gcart-badge'); if(!b){ b=document.createElement('span'); b.className='gcart-badge'; ci.appendChild(b); } b.textContent=n; b.style.display=n>0?'':'none'; }); document.querySelectorAll('.cart-bubble').forEach(function(el){ el.style.display='none'; }); }
    function popBadge(){ document.querySelectorAll('.gcart-badge').forEach(function(b){ b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }); }
    function openCart(){ build(); return fetch('/cart.js').then(function(r){return r.json();}).then(function(cart){ render(cart); void root.offsetWidth; gaLock(); root.classList.add('on'); root.setAttribute('aria-hidden','false'); return cart; }).catch(function(e){ if(root){ gaLock(); root.classList.add('on'); } }); }
    function closeCart(){ if(!root) return; root.classList.remove('on'); root.setAttribute('aria-hidden','true'); gaUnlock(); }
    window.__gaAddId=function(id,qty){ return fetch('/cart/add.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:[{id:id,quantity:qty||1}]})}).then(function(r){ return r.json().then(function(b){ return {ok:r.ok,b:b}; }); }).then(function(res){ if(!res.ok){ toast(res.b&&res.b.description?res.b.description:'Sold out'); return; } return openCart(); }).catch(function(){ toast('Could not add to cart'); }); };
    window.__gaOpenCart=openCart;
    function changeQty(key,qty,row){ if(row) row.classList.add('gci-busy'); fetch('/cart/change.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:key,quantity:qty})}).then(function(r){return r.json();}).then(function(cart){ render(cart); }).catch(function(){ if(row) row.classList.remove('gci-busy'); }); }

    function flyToCart(card){
      try{ if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
        var img=card.querySelector('.card-gallery img, .product-media__image, img'); var ci=document.querySelector('cart-icon')||document.querySelector('button[aria-label="Cart"]');
        if(!img||!ci) return; var s=img.getBoundingClientRect(), e=ci.getBoundingClientRect();
        var fly=img.cloneNode(true); fly.removeAttribute('class'); fly.className='ga-fly';
        fly.style.cssText='position:fixed;left:'+s.left+'px;top:'+s.top+'px;width:'+s.width+'px;height:'+s.height+'px;border-radius:16px;object-fit:cover;z-index:100000;pointer-events:none;box-shadow:0 20px 50px -18px rgba(46,33,64,.6);transition:transform .8s cubic-bezier(.5,-.2,.35,1),opacity .8s ease;will-change:transform,opacity;';
        document.body.appendChild(fly); var dx=(e.left+e.width/2)-(s.left+s.width/2), dy=(e.top+e.height/2)-(s.top+s.height/2);
        requestAnimationFrame(function(){ fly.style.transform='translate('+dx+'px,'+dy+'px) scale(.07)'; fly.style.opacity='.15'; });
        setTimeout(function(){ fly.remove(); }, 820);
      }catch(e){}
    }
    function addVariant(id, btn){
      var card=btn.closest('.ga-gcard'); var orig=btn.dataset.orig||btn.innerHTML; btn.dataset.orig=orig;
      btn.dataset.adding='1'; btn.classList.remove('ga-add-done');
      return fetch('/cart/add.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:[{id:id,quantity:1}]})}).then(function(r){ return r.json().then(function(b){ return {ok:r.ok,b:b}; }); }).then(function(res){
        if(!res.ok){ btn.innerHTML=orig; delete btn.dataset.adding; toast(res.b&&res.b.description?res.b.description:'Could not add to cart'); return; }
        btn.classList.add('ga-add-done'); btn.innerHTML='&#10003; Added';
        if(card) flyToCart(card);
        return openCart().then(function(){ setTimeout(popBadge, 780); setTimeout(function(){ btn.classList.remove('ga-add-done'); btn.innerHTML=orig; }, 1900); delete btn.dataset.adding; });
      }).catch(function(){ btn.innerHTML=orig; delete btn.dataset.adding; toast('Could not add to cart'); });
    }
    function openPicker(card, btn, p){
      if(card.querySelector('.ga-sizes')) return;
      var wrap=document.createElement('div'); wrap.className='ga-sizes';
      var opts=p.variants.map(function(v){ return '<option value="'+v.id+'"'+(v.available?'':' disabled')+'>'+v.title+(v.available?'':' (sold out)')+'</option>'; }).join('');
      wrap.innerHTML='<button type="button" class="ga-sizes-x" aria-label="Close">&#215;</button><span class="ga-sizes-lb">'+((p.options[0]&&p.options[0].name)||'Select an option')+'</span>'
        +'<div class="ga-sizes-row"><select class="ga-sizes-sel"><option value="" disabled selected>Choose an option</option>'+opts+'</select>'
        +'<button type="button" class="ga-sizes-go" disabled>Add</button></div>';
      card.appendChild(wrap);
      var sel=wrap.querySelector('.ga-sizes-sel'), go=wrap.querySelector('.ga-sizes-go');
      sel.addEventListener('click', function(e){ e.stopPropagation(); });
      sel.addEventListener('change', function(e){ e.stopPropagation(); go.disabled=!sel.value; });
      wrap.addEventListener('click', function(e){ e.stopPropagation(); if(e.target.closest('.ga-sizes-x')){ wrap.remove(); return; } if(e.target.closest('.ga-sizes-go')){ var id=parseInt(sel.value,10); if(id){ addVariant(id, btn); wrap.remove(); } } });
    }
    document.addEventListener('click', function(e){
      var btn=e.target.closest('.ga-add'); if(!btn) return;
      e.preventDefault(); e.stopPropagation();
      if(btn.dataset.adding) return;
      var card=btn.closest('.ga-gcard'); var h=btn.dataset.handle; if(!h){ if(btn.dataset.href) location.href=btn.dataset.href; return; }
      var ex=card&&card.querySelector('.ga-sizes'); if(ex){ ex.remove(); return; }
      if(btn.dataset.vid){ addVariant(parseInt(btn.dataset.vid,10), btn); return; }
      getProduct(h).then(function(p){
        if(p.available===false){ toast('Sold out'); btn.classList.add('ga-add-out'); btn.innerHTML='Sold out'; setTimeout(function(){ btn.classList.remove('ga-add-out'); btn.innerHTML='+ Add'; }, 2500); return; }
        var avail=p.variants.filter(function(v){return v.available;}); var pick=avail.length?avail:p.variants;
        addVariant(pick[0].id, btn);
      }).catch(function(){ if(btn.dataset.href) location.href=btn.dataset.href; });
    });
    // intercept header cart icon -> open custom cart
    document.addEventListener('click', function(e){ var btn=e.target.closest('button[aria-label="Cart"], cart-icon'); if(!btn) return; e.preventDefault(); e.stopImmediatePropagation(); openCart(); }, true);
    // PDP add-to-cart: let the theme add, then open the custom cart (avoids double-add)
    document.addEventListener('click', function(e){ var addBtn=e.target.closest('button[name="add"], .add-to-cart-button'); if(!addBtn||addBtn.closest('.ga-gcard')||addBtn.disabled) return; var before=null; fetch('/cart.js').then(function(r){return r.json();}).then(function(c){ before=c.item_count; }); var tries=0; var poll=setInterval(function(){ tries++; fetch('/cart.js').then(function(r){return r.json();}).then(function(c){ if(before!==null && c.item_count>before){ clearInterval(poll); if(window.__gaOpenCart) window.__gaOpenCart(); } else if(tries>12){ clearInterval(poll); } }); }, 180); }, false);
    // hard-retire theme cart drawer: force-close it if the theme ever opens it
    (function killTheme(){ var td=document.getElementById('cart-drawer'); if(!td){ setTimeout(killTheme,300); return; } var dlg=td.querySelector('dialog'); if(!dlg){ setTimeout(killTheme,300); return; } function shut(){ try{ if(dlg.open) dlg.close(); }catch(e){} if(dlg.hasAttribute('open')) dlg.removeAttribute('open'); gaUnlock(); } shut(); new MutationObserver(shut).observe(dlg,{attributes:true,attributeFilter:['open']}); })();
    // init badge from current cart + eager build so first open animates reliably
    build();
    fetch('/cart.js').then(function(r){return r.json();}).then(function(c){ updateBadge(c.item_count); }).catch(function(){});
  }
  function pdp(){
    if(!/\/products\//.test(location.pathname)) return;
    // free shipping text
    [].slice.call(document.querySelectorAll('.product-information small, .product-information p, .product-information div, .product-price ~ *')).forEach(function(e){ if(e.children.length===0 && /calculated at checkout/i.test(e.textContent||'')){ e.textContent='\u2726 Free shipping on all orders'; e.classList.add('ga-pdp-ship'); } });
    // trust strip after buy box
    var anchor=document.querySelector('add-to-cart-component')||document.querySelector('product-form-component')||document.querySelector('.product-form')||document.querySelector('buy-buttons-component');
    if(anchor && anchor.parentNode && !document.querySelector('.ga-pdp-trust')){
      var t=document.createElement('div'); t.className='ga-coll-trust ga-pdp-trust';
      t.innerHTML="<span><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M12 3l7 3v5c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6l7-3z\"/><path d=\"M9 12l2 2 4-4\"/></svg>Lab certified</span><span><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M12 21c5-1 8-5 8-11V4l-6 2c-3 1-5 3-5 7 0 3 1 5 3 8z\"/><path d=\"M8 20c-2-4-2-8 4-12\"/></svg>Natural &amp; energised</span><span><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><rect x=\"1\" y=\"6\" width=\"13\" height=\"10\" rx=\"1\"/><path d=\"M14 9h4l3 3v4h-7z\"/><circle cx=\"6\" cy=\"18\" r=\"1.6\"/><circle cx=\"18\" cy=\"18\" r=\"1.6\"/></svg>Free shipping</span><span><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"9\" rx=\"2\"/><path d=\"M8 11V7a4 4 0 018 0v4\"/></svg>Secure checkout</span>";
      anchor.parentNode.insertBefore(t, anchor.nextSibling);
    }
    // modernize benefits list -> glass cards
    (function(){
      var main=document.querySelector('#MainContent')||document.body;
      var host=null;
      [].forEach.call(main.querySelectorAll('.rte ul, .text-block ul'),function(ul){ if(host) return; if(ul.closest('.menu-drawer,[class*="menu-drawer"],header')) return; var items=ul.querySelectorAll('li'); if(items.length>=2 && /[\u2013\u2014-]/.test(ul.textContent) && /[A-Za-z]/.test(ul.textContent)) host=ul; });
      if(!host || host.dataset.gaBenefit) return; host.dataset.gaBenefit='1';
      var IC='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M6 3h12l3 5-9 12L3 8z"/><path d="M6 3l3 5h6l3-5M3 8h18M9 8l3 12M15 8l-3 12"/></svg>';
      var cards=[].map.call(host.querySelectorAll('li'),function(li){ var strong=li.querySelector('strong,b'); var name, desc; var txt=li.textContent.replace(/\s+/g,' ').trim(); if(strong){ name=strong.textContent.trim(); desc=txt.replace(strong.textContent,'').replace(/^\s*[\u2013\u2014-]\s*/,'').trim(); } else { var p=txt.split(/\s[\u2013\u2014-]\s/); name=p[0].trim(); desc=p.slice(1).join(' \u2013 ').trim(); } return '<div class="ga-benefit"><span class="ga-benefit-ic">'+IC+'</span><div class="ga-benefit-tx"><div class="ga-benefit-t">'+name+'</div>'+(desc?'<div class="ga-benefit-d">'+desc+'</div>':'')+'</div></div>'; }).join('');
      var wrap=document.createElement('div'); wrap.className='ga-benefits'; wrap.innerHTML='<div class="ga-benefits-h">Why you\'ll love it</div><div class="ga-benefits-grid">'+cards+'</div>';
      host.style.display='none'; host.parentNode.insertBefore(wrap, host.nextSibling);
    })();
  }
  function pdpStory(){
    if(!/\/products\//.test(location.pathname)) return;
    if(document.querySelector('.gpdp-story')) return;
    var handle=(location.pathname.match(/\/products\/([^/?#]+)/)||[])[1]; if(!handle) return;
    fetch('/products/'+handle+'.js').then(function(r){return r.json();}).then(function(p){
      if(document.querySelector('.gpdp-story')) return;
      var imgs=(p.images||[]).map(function(u){ return (u.indexOf('//')===0?'https:':'')+u; });
      function img(i){ return imgs[i%imgs.length]||imgs[0]||''; }
      var CK='<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#2f7d5b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';
      var CX='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#c2a48a" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
      var story=document.createElement('div'); story.className='gpdp-story';
      var marquee='';
      var stats='<div class="gpdp-stats"><div><b>4.8★</b><span>Average rating</span></div><div><b>100%</b><span>Certified natural</span></div><div><b>Free</b><span>Shipping</span></div><div><b>7-day</b><span>Easy returns</span></div></div>';
      var earth='<section class="gpdp-sec gpdp-earth"><span class="gpdp-eyebrow">The origin</span><h2>From the earth, to your wrist.</h2><p class="gpdp-sub">Real stones, pulled from the earth, energised with intention and finished by hand, then certified before they reach you.</p><div class="gpdp-earth-grid">'
        +'<article class="gpdp-ecard"><span class="gpdp-ecard-im" style="background-image:url('+img(1)+')"></span><h3>From nature to your wrist</h3><p>Each bead is a real stone, shaped by the earth over millennia, not manufactured glass.</p></article>'
        +'<article class="gpdp-ecard"><span class="gpdp-ecard-im" style="background-image:url('+img(2)+')"></span><h3>Energised with intention</h3><p>Every piece is cleansed and charged before dispatch, so it arrives ready to wear.</p></article>'
        +'<article class="gpdp-ecard"><span class="gpdp-ecard-im" style="background-image:url('+img(3)+')"></span><h3>Genuinely certified</h3><p>Independently lab-tested for authenticity. A certificate of origin ships with every order.</p></article>'
        +'</div></section>';
      var rows=[['Stone authenticity','Lab certified','Unverified'],['Energised & charged','Included','None'],['Certificate of origin','With every order','Rarely'],['Finish','Hand-finished','Mass produced'],['Durability','Reinforced thread','Cheap elastic']];
      var comp='<section class="gpdp-sec gpdp-comp"><span class="gpdp-eyebrow">The difference</span><h2>GemsAura vs. ordinary bracelets.</h2><p class="gpdp-sub">They can look similar at a glance. The difference is everything you can’t see.</p><div class="gpdp-comp-tbl"><div class="gpdp-comp-head"><span>Feature</span><span class="gpdp-comp-us">GemsAura</span><span>Others</span></div>'
        +rows.map(function(r){ return '<div class="gpdp-comp-row"><span>'+r[0]+'</span><span class="gpdp-comp-us">'+CK+' '+r[1]+'</span><span class="gpdp-comp-them">'+CX+' '+r[2]+'</span></div>'; }).join('')
        +'</div></section>';
      var faqs=[['Are your stones natural and certified?','Yes. Every stone is independently lab-tested for authenticity, and a certificate of origin is included with each order.'],['How do I care for my bracelet?','Keep your piece away from water, perfume and harsh chemicals, and store it somewhere cool and dry. Wipe it gently with a soft cloth, and recharge it under moonlight now and then.'],['How fast is delivery?','Orders are dispatched within 24 to 48 hours with free shipping, and most arrive within 7 to 10 business days.'],['Can I return or exchange my order?','Yes, within 7 days of delivery. The piece should be unused and in its original packaging.']];
      var faq='<section class="gpdp-sec gpdp-faq"><span class="gpdp-eyebrow">Good to know</span><h2>Questions, answered.</h2><div class="gpdp-faq-list">'
        +faqs.map(function(f){ return '<details class="gpdp-q"><summary>'+f[0]+'<span class="gpdp-q-ic">+</span></summary><div class="gpdp-q-a">'+f[1]+'</div></details>'; }).join('')
        +'</div></section>';
      story.innerHTML=marquee+stats+earth+comp+faq;
      var main=document.querySelector('#MainContent .shopify-section[id*="__main"]')||document.querySelector('#MainContent .shopify-section')||document.querySelector('#MainContent');
      if(main&&main.parentNode) main.parentNode.insertBefore(story, main.nextSibling); else document.querySelector('#MainContent').appendChild(story);
      // sticky add bar
      if(!document.querySelector('.gpdp-sticky')){
        var v0=p.variants.filter(function(v){return v.available;})[0]||p.variants[0];
      var addonHtml='';
      if(ap && ap.variants && ap.variants.length){
        var av=ap.variants.filter(function(v){return v.available;})[0]||ap.variants[0];
        if(av){
          var asave=ap.compare_at_price>av.price?(ap.compare_at_price-av.price):0;
          addonHtml='<div class="gpx-addon"><span class="gpx-addon-tab">ADD &amp; SAVE <b>'+moneyA(asave)+'</b></span>'
            +'<label class="gpx-addon-row"><input type="checkbox" class="gpx-addon-ck" data-vid="'+av.id+'">'
            +'<span class="gpx-addon-im" style="background-image:url('+iuA(ap.featured_image||'')+')"></span>'
            +'<span class="gpx-addon-tx"><span class="gpx-addon-t">Add <b>'+ap.title+'</b></span>'
            +'<span class="gpx-addon-p"><b class="gpx-addon-now">'+moneyA(av.price)+'</b>'+(ap.compare_at_price>av.price?' <s>'+moneyA(ap.compare_at_price)+'</s>':'')+'</span></span></label></div>';
        }
      }
        var bar=document.createElement('div'); bar.className='gpdp-sticky';
        bar.innerHTML='<span class="gpdp-sticky-im" style="background-image:url('+img(0)+')"></span><div class="gpdp-sticky-info"><div class="gpdp-sticky-t">'+p.title+'</div><div class="gpdp-sticky-p">Dhs. '+(p.price/100).toFixed(2)+(p.compare_at_price>p.price?' <s>Dhs. '+(p.compare_at_price/100).toFixed(2)+'</s>':'')+'</div></div><button class="gpdp-sticky-add">Add to cart</button>';
        document.body.appendChild(bar);
        bar.querySelector('.gpdp-sticky-add').addEventListener('click', function(){ var idEl=document.querySelector('product-form-component [name="id"], [name="id"]'); var id=(idEl&&idEl.value)||v0.id; if(window.__gaAddId) window.__gaAddId(parseInt(id,10),1); });
        var sc=document.querySelector('.page-wrapper')||window; var getTop=function(){ return sc===window?window.scrollY:sc.scrollTop; }; var onScroll=function(){ bar.classList.toggle('on', getTop()>560); }; sc.addEventListener('scroll', onScroll, {passive:true}); onScroll();
      }
    }).catch(function(){});
  }

  function buildHero(){
    if(!/\/products\//.test(location.pathname)) return;
    if(document.querySelector('.gpx')) return;
    var handle=(location.pathname.match(/\/products\/([^/?#]+)/)||[])[1]; if(!handle) return;
    Promise.all([
      fetch('/products/'+handle+'.js').then(function(r){return r.json();}),
      fetch('/products/raw-selenite-plate.js').then(function(r){return r.ok?r.json():null;}).catch(function(){return null;}),
      (window.__gaStonesUrl?fetch(window.__gaStonesUrl).then(function(r){return r.ok?r.json():{};}).catch(function(){return {};}):Promise.resolve({}))
    ]).then(function(_res){
      var p=_res[0]; var ap=_res[1]; var _stmap=_res[2]||{};
      if(document.querySelector('.gpx')) return;
      var main=document.querySelector('#MainContent .shopify-section[id*="__main"]'); if(!main) return;
      function iu(u,s){ if(!u) return ''; u=(u.indexOf('//')===0?'https:':'')+u; return u.replace(/(\.(?:jpe?g|png|webp|gif|avif))(\?|$)/i,'_'+s+'$1$2'); }
      function money(c){ return 'Dhs. '+(c/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
      var moneyA=money, iuA=function(u){return iu(u,'160x');};
      var imgs=(p.images||[]);
      var rating=(window.__gaRatings&&window.__gaRatings[handle])||[4.8,20];
      var save=p.compare_at_price>p.price?Math.round((p.compare_at_price-p.price)/p.compare_at_price*100):0;
      var v0=p.variants.filter(function(v){return v.available;})[0]||p.variants[0];
      var addonHtml='';
      if(ap && ap.variants && ap.variants.length){
        var av=ap.variants.filter(function(v){return v.available;})[0]||ap.variants[0];
        if(av){
          var asave=ap.compare_at_price>av.price?(ap.compare_at_price-av.price):0;
          addonHtml='<div class="gpx-addon"><span class="gpx-addon-tab">ADD &amp; SAVE <b>'+moneyA(asave)+'</b></span>'
            +'<label class="gpx-addon-row"><input type="checkbox" class="gpx-addon-ck" data-vid="'+av.id+'">'
            +'<span class="gpx-addon-im" style="background-image:url('+iuA(ap.featured_image||'')+')"></span>'
            +'<span class="gpx-addon-tx"><span class="gpx-addon-t">Add <b>'+ap.title+'</b></span>'
            +'<span class="gpx-addon-p"><b class="gpx-addon-now">'+moneyA(av.price)+'</b>'+(ap.compare_at_price>av.price?' <s>'+moneyA(ap.compare_at_price)+'</s>':'')+'</span></span></label></div>';
        }
      }
      var catcol=catColor((p.type||'')+' '+p.title);
      try{ var _acc=window.__gaAccent; if(typeof _acc==='string' && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(_acc.trim())) catcol=_acc.trim(); }catch(e){}
      var tmp=document.createElement('div'); tmp.innerHTML=p.description||''; var ul=tmp.querySelector('ul');
      var benefits=ul?[].map.call(ul.querySelectorAll('li'),function(li){ var st=li.querySelector('strong,b'); var t=li.textContent.replace(/\s+/g,' ').trim(); var n,d; if(st){n=st.textContent.trim();d=t.replace(st.textContent,'').replace(/^\s*[\u2013\u2014-]\s*/,'').trim();}else{var pr=t.split(/\s[\u2013\u2014-]\s/);n=pr[0].trim();d=pr.slice(1).join(', ').trim();} return {n:n,d:d}; }):[];
      var I={
        globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9z"/></svg>',
        leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21c5-1 8-5 8-11V4l-6 2c-3 1-5 3-5 7 0 3 1 5 3 8z"/><path d="M8 20c-2-4-2-8 4-12"/></svg>',
        shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3l7 3v5c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>',
        spark:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.5L19 9l-5.2 1.5L12 16l-1.8-5.5L5 9l5.2-1.5z"/></svg>',
        truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="1" y="6" width="13" height="10" rx="1.5"/><path d="M14 9h4l3 3v4h-7z"/><circle cx="6" cy="18" r="1.7"/><circle cx="18" cy="18" r="1.7"/></svg>',
        bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
        cert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="3" width="16" height="13" rx="2"/><path d="M8 8h8M8 11h5"/><circle cx="16.5" cy="18" r="2.6"/></svg>',
        gem:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M6 3h12l3 5-9 12L3 8z"/><path d="M3 8h18M9 8l3 12M15 8l-3 12"/></svg>',
        box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M12 3l8 4v10l-8 4-8-4V7z"/><path d="M4 7l8 4 8-4M12 11v10"/></svg>',
        sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8"/></svg>'
      };
      var thumbs=imgs.slice(0,12).map(function(u,i){ return '<button class="gpx-thumb'+(i===0?' on':'')+'" data-i="'+i+'" style="background-image:url('+iu(u,'220x')+')"></button>'; }).join('');
      var _isOud=(handle==='crystal-oud');
      var _hasCustomSpec=_isOud;
      var badges='<span class="gpx-badge">'+I.truck+'Free shipping</span><span class="gpx-badge">'+I.bolt+'Fast delivery</span>'+(_hasCustomSpec?('<span class="gpx-badge">'+I.spark+'Long-Lasting</span>'):('<span class="gpx-badge">'+I.cert+'Certificate</span>'));
      var detailsHtml=_hasCustomSpec?'<ul class="gpx-blist"><li><b>Pure oud oil.</b> Rich, warm White Oud, long-lasting on skin.</li><li><b>Hand-blended.</b> Small-batch crafted for depth and richness.</li><li><b>Crystal-infused.</b> Real pyrite chips settled in every bottle.</li><li><b>Thoughtfully bottled.</b> Hand-cut crystal glass with a gold cap.</li></ul>':'<ul class="gpx-blist"><li><b>100% natural.</b> Genuine, untreated gemstone beads.</li><li><b>Lab certified.</b> Independently tested for authenticity.</li><li><b>Hand finished.</b> Strung on a durable, comfortable stretch cord.</li><li><b>Energised.</b> Charged with intention before it is dispatched.</li></ul>';
      var benefitsHtml=benefits.length?'<ul class="gpx-blist">'+benefits.map(function(b){ return '<li><b>'+b.n+'</b>'+(b.d?'. '+b.d:'')+'</li>'; }).join('')+'</ul>':'<p>A hand-finished natural stone bracelet, energised and lab-certified.</p>';
      var howHtml='<ul class="gpx-blist"><li>Wear it on your receiving hand (usually the left) to draw in its energy.</li><li>Keep the bracelet dry and avoid perfume or harsh chemicals.</li><li>Store it away from direct sunlight when you are not wearing it.</li><li>Cleanse under moonlight once a month to recharge the stones.</li></ul>';
      var opts=p.options[0]; var vals=(opts&&opts.values)||[]; var pct=Math.min(92, 66+(handle.length*7)%26);
      var _m=window.__gaMeta||{}; var accItems=[];
      function _s(v){ return (typeof v==='string'&&v)?v:''; }
      function _nd(s){ return (typeof s==='string'?s:'').replace(/\s*[\u2013\u2014]\s*/g, ', '); }
      function _wrap(s){ return '<div class="gpx-acc-txt">'+_nd(s)+'</div>'; }
      function _accsWrap(items){ return '<div class="gpx-accs">'+items.map(function(it,i){ return '<details class="gpx-acc"'+(i===0?' open':'')+'><summary>'+it[0]+'<span class="gpx-acc-x" aria-hidden="true"></span></summary><div class="gpx-acc-body">'+it[1]+'</div></details>'; }).join('')+'</div>'; }
      // TOP: Benefits + How to Use (product description)
      var descItems=[];
      descItems.push(['Details', detailsHtml]);
      descItems.push(['Benefits', _s(_m.benefits)?_wrap(_m.benefits):(benefits.length?benefitsHtml:'<p>A hand-finished natural stone bracelet, energised and lab certified.</p>')]);
      descItems.push(['How to Use', _s(_m.how_to_use)?_wrap(_m.how_to_use):howHtml]);
      var _defTab=1;
      var descHtml='<div class="gpx-tabs">'+descItems.map(function(it,i){return '<button class="gpx-tab'+(i===_defTab?' on':'')+'" data-t="'+i+'">'+it[0]+'</button>';}).join('')+'</div>'+'<div class="gpx-panel">'+descItems.map(function(it,i){return '<div class="gpx-tp'+(i===_defTab?' on':'')+'">'+it[1]+'</div>';}).join('')+'</div>';
      // BOTTOM: Specifications (technical only) + Astrology & Energy + rest
      var _spec=[];
      if(_s(_m.specifications)){ _m.specifications.split('\n').forEach(function(ln){ ln=_nd(ln); var i=ln.indexOf(':'); if(i>0){ _spec.push([ln.slice(0,i).trim(), ln.slice(i+1).trim()]); } }); }
      if(!_spec.length){
        if(_m.stones&&_m.stones.length)_spec.push(['Stone',_m.stones.join(', ')]);
        if(vals.length) _spec.push(['Bead sizes', vals.join(' & ')]);
        _spec.push(['Material', 'Genuine natural gemstone beads']);
        _spec.push(['Cord', 'Durable elastic stretch cord']);
        _spec.push(['Certification', 'Lab certified, authenticity guaranteed']);
        _spec.push(['Sourcing', 'Natural stones, ethically sourced']);
      }
      accItems.push(['Specifications','<dl class="gpx-spec">'+_spec.map(function(s){return '<div><dt>'+s[0]+'</dt><dd>'+s[1]+'</dd></div>';}).join('')+'</dl>']);
      accItems.push(['Authenticity & Quality', (_s(_m.authenticity)||_s(_m.quality))?((_s(_m.authenticity)?_wrap(_m.authenticity):'')+(_s(_m.quality)?_wrap(_m.quality):'')):'<div class="gpx-acc-txt"><p>Every piece is genuine and natural, independently lab-tested for authenticity, then cleansed and energised before it is dispatched.</p></div>']);
      accItems.push(['Packaging', _s(_m.packaging)?_wrap(_m.packaging):'<div class="gpx-acc-txt"><p>Arrives in premium, gift-ready packaging along with your authenticity certificate.</p></div>']);
      if(_s(_m.style_tip)) accItems.push(['Style Tip', _wrap(_m.style_tip)]);
      accItems.push(['Shipping & Returns', _s(_m.returns)?_wrap(_m.returns):'<div class="gpx-acc-txt"><p>Free, fully tracked shipping across the UAE in 7 to 10 business days. 7 day returns or exchange, including items that arrive damaged.</p></div>']);
      if(Array.isArray(_m.faq)&&_m.faq.length) accItems.push(['FAQ', _m.faq.map(function(f){return '<div class="gpx-faq"><p class="gpx-faq-q">'+_nd(f.q||'')+'</p><p class="gpx-faq-a">'+_nd(f.a||'')+'</p></div>';}).join('')]);
      var accHtml=_accsWrap(accItems);
      var sizeCards=vals.map(function(v,i){ var vv=p.variants.filter(function(x){return x.title===v||x.option1===v;})[0]; return '<button class="gpx-opt'+(i===0?' on':'')+'" data-id="'+(vv?vv.id:'')+'" data-price="'+(vv?vv.price:p.price)+'"'+(vv&&!vv.available?' data-out="1"':'')+'><span class="gpx-opt-im" style="background-image:url('+iu(imgs[0]||'','160x')+')"></span><span class="gpx-opt-tx"><span class="gpx-opt-l">'+v+'</span><span class="gpx-opt-p">'+money(vv?vv.price:p.price)+'</span></span></button>'; }).join('');
      var hero=document.createElement('div'); hero.className='ghero-wrap'; hero.style.setProperty('--cat', catcol); try{ document.documentElement.style.setProperty('--cat', catcol); document.body.style.setProperty('--cat', catcol); document.body.classList.add('ga-pdp'); }catch(e){}
      hero.innerHTML='<div class="gpx">'
        +'<div class="gpx-left">'
          +'<div class="gpx-imgwrap"><div class="gpx-track">'+imgs.slice(0,12).map(function(u,i){ return '<img class="gpx-slide" src="'+iu(u,'900x')+'" alt="'+p.title+'"'+(i>0?' loading="lazy"':'')+'>'; }).join('')+'</div>'+(imgs.length>1?'<button class="gpx-nav gpx-prev" type="button" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button><button class="gpx-nav gpx-next" type="button" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>':'')+'</div>'
          +'<div class="gpx-prog"><i></i></div>'+'<div class="gpx-thumbs">'+thumbs+'</div>'
        +'</div>'
        +'<div class="gpx-right">'
          +(_s(_m.key_feature)?'<span class="gpx-eyebrow">'+_nd(_m.key_feature)+'</span>':'')+'<h1 class="gpx-title">'+p.title+'</h1>'
          +'<div class="gpx-badges">'+badges+'</div>'
          +'<hr class="gpx-hr">'
          +'<div class="gpx-price"><span class="gpx-now">'+money(v0.price)+'</span>'+(p.compare_at_price>p.price?'<s>'+money(p.compare_at_price)+'</s><span class="gpx-save">Save '+save+'%</span>':'')+'</div>'
          +descHtml
          +(vals.length>1?'<div class="gpx-optsec"><div class="gpx-optlb">Select '+(opts.name||'Option')+'</div><div class="gpx-opts">'+sizeCards+'</div></div>':'')
          +addonHtml+'<div class="gpx-stockrow">'+'<div class="gpx-stock"><div class="gpx-stock-bars"><span class="gpx-bar"><i style="width:'+pct+'%"></i></span><span class="gpx-bar gpx-bar2"><i style="width:'+(pct-14)+'%"></i></span></div><div class="gpx-stock-tx"><b>Limited Stock</b><span>'+pct+'% full</span></div></div>'+'</div>'+'<button class="gpx-cta" data-id="'+v0.id+'">Add to Cart \u2013 <b class="gpx-cta-p">'+money(v0.price)+'</b></button>'+'<div class="gpx-info">'+'<div class="gpx-ibox"><div class="gpx-ibox-h"><span class="gpx-ibox-ic">'+I.truck+'</span>Seamless Delivery</div><div class="gpx-ibox-b">Fast, fully tracked shipping. Delivered in 7 to 10 business days, free across the UAE.</div></div>'+'<div class="gpx-ibox"><div class="gpx-ibox-h"><span class="gpx-ibox-ic">'+I.box+'</span>Mindful Returns</div><div class="gpx-ibox-b">7 day returns or exchange, including damaged items.</div></div>'+(_hasCustomSpec?('<div class="gpx-ibox"><div class="gpx-ibox-h"><span class="gpx-ibox-ic">'+I.spark+'</span>Long-Lasting Scent</div><div class="gpx-ibox-b">8+ hours of rich, authentic wear on skin.</div></div>'+'<div class="gpx-ibox"><div class="gpx-ibox-h"><span class="gpx-ibox-ic">'+I.sun+'</span>Hand-Blended</div><div class="gpx-ibox-b">Carefully blended in small batches for depth and richness.</div></div>'):('<div class="gpx-ibox"><div class="gpx-ibox-h"><span class="gpx-ibox-ic">'+I.cert+'</span>Certified Authentic</div><div class="gpx-ibox-b">Every piece ships with a lab authenticity certificate.</div></div>'+'<div class="gpx-ibox"><div class="gpx-ibox-h"><span class="gpx-ibox-ic">'+I.sun+'</span>Energised &amp; Blessed</div><div class="gpx-ibox-b">Cleansed and charged with intention before it is dispatched.</div></div>'))+'</div>'+accHtml
        +'</div>'
      +'</div>';
      main.style.display='none'; main.parentNode.insertBefore(hero, main); try{ var _sk=document.querySelector('.ga-skel'); if(_sk&&_sk.remove) _sk.remove(); }catch(e){} try{ document.documentElement.classList.remove('ga-boot'); }catch(e){}
      if(!_hasCustomSpec) try{
        function _slug(s){ return (s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
        var _snames=(_m.stones&&_m.stones.length)?_m.stones:[((p.title||'').replace(/\(.*/,'').replace(/bracelet|rudraksha|pendant|anklet|mala|lab certified/ig,'').trim()||'This stone')];
        var _fallImg=imgs[0]?iu(imgs[0],'900x'):'';
        var _prodBens=(benefits&&benefits.length)?benefits.map(function(b){return [b.n,b.d];}):[['Natural','Genuine, lab-tested stone.']];
        var _sdata=_snames.map(function(nm){ var d=_stmap[nm]||_stmap[(nm||'').trim()]||null; return { name:nm, bead:'https://astroaura.market/cdn/shop/t/8/assets/bead-'+_slug(nm)+'.png', bens:(d&&d.bens&&d.bens.length)?d.bens:_prodBens }; });
        function _facs(s){ var f=(s.bens||[]).map(function(b){return b[0];}).filter(function(n){return n && n.toLowerCase()!==s.name.toLowerCase();}); return f.length?f:['Natural','Energised','Certified']; }
        var _ckSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l4.5 4.5L19 7"/></svg>';
        var _catn=((p.type||'bracelet').replace(/s$/i,'')).toLowerCase()||'piece';
        function _facHtml(s){ var f=_facs(s).slice(0,4); var n=f.length; return f.map(function(nm,i){ return '<span class="gss-fac" style="animation-delay:-'+(i/n*50).toFixed(2)+'s"><i></i>'+nm+'</span>'; }).join(''); }
        function _swHtml(cur){ if(_sdata.length<2) return ''; return '<div class="gss-swrow" role="tablist" aria-label="Stones in this piece">'+_sdata.map(function(s,i){ return '<button type="button" class="gss-sw'+(i===cur?' on':'')+'" data-si="'+i+'" aria-label="'+s.name+'"><img src="'+s.bead+'" alt="'+s.name+'" loading="lazy"></button>'; }).join('')+'</div>'; }
        var _ci=0;
        var _ss=document.createElement('section'); _ss.className='gss';
        _ss.innerHTML='<div class="gss-inner">'
          +'<div class="gss-left">'
            +'<span class="gss-eyebrow">Know Your Stones</span>'
            +'<h2 class="gss-title">Nothing random. Nothing filler.</h2>'
            +'<p class="gss-sub">Every bead is a genuine, lab-graded stone, never dyed glass or filler. See exactly which stones are in your piece and what each one is known for.</p>'
            +'<div class="gss-divider"></div>'
            +'<p class="gss-disc">Stone associations come from traditions across many cultures and are shared for heritage, not as medical claims. Each stone is independently lab-verified.</p>'
          +'</div>'
          +'<div class="gss-right"><div class="gss-card">'
            +'<div class="gss-stage">'
              +'<span class="gss-glow"></span>'
              +'<span class="gss-ring1"></span><span class="gss-ring2"></span>'
              +'<div class="gss-orbit">'+_facHtml(_sdata[0])+'</div>'
              +'<div class="gss-hero-bead"><img class="gss-bead" src="'+_sdata[0].bead+'" alt="'+_sdata[0].name+' bead"></div>'
            +'</div>'
            +'<div class="gss-foot"><h3 class="gss-feat-n">'+_sdata[0].name+'</h3>'+_swHtml(0)+'</div>'
          +'</div></div>'
        +'</div>';
        hero.insertAdjacentElement('afterend', _ss);
        var _heroImg=_ss.querySelector('.gss-bead');
        function _wireBeadErr(){ if(_heroImg) _heroImg.addEventListener('error', function(){ var m=this.closest('.gss-hero-bead'); if(m) m.classList.add('is-photo'); if(_fallImg) this.src=_fallImg; }, {once:true}); }
        _wireBeadErr();
        var _sw=_ss.querySelector('.gss-swrow');
        if(_sw){ _sw.addEventListener('error', function(e){ var img=e.target; if(img&&img.tagName==='IMG'&&_fallImg&&img.src.indexOf(_fallImg)<0) img.src=_fallImg; }, true);
          _sw.addEventListener('click', function(ev){ var b=ev.target.closest('.gss-sw'); if(!b) return; var i=+b.dataset.si; if(i===_ci) return; _ci=i; var c=_sdata[i];
            _sw.querySelectorAll('.gss-sw').forEach(function(x){ x.classList.toggle('on', x===b); });
            var orb=_ss.querySelector('.gss-orbit'), hb=_heroImg.closest('.gss-hero-bead'), fn=_ss.querySelector('.gss-feat-n');
            orb.style.opacity='0'; fn.style.opacity='0'; if(hb){ hb.style.opacity='0'; hb.style.transform='translate(-50%,-50%) scale(.85)'; }
            setTimeout(function(){
              orb.innerHTML=_facHtml(c);
              if(hb) hb.classList.remove('is-photo'); _heroImg.src=c.bead; _wireBeadErr();
              fn.textContent=c.name;
              requestAnimationFrame(function(){ orb.style.opacity=''; fn.style.opacity=''; if(hb){ hb.style.opacity=''; hb.style.transform=''; } });
            }, 240);
          }); }
      }catch(e){}
      if(!_hasCustomSpec) try{
        var _pd=[
          {img:'https://astroaura.market/cdn/shop/t/8/assets/aa-proc-1.jpg', k:'Step 01', t:'Real, raw crystals', d:'Natural stones, lab-tested, never glass or dyed.'},
          {img:'https://astroaura.market/cdn/shop/t/8/assets/aa-proc-2.jpg', k:'Step 02', t:'Hand-strung', d:'Strung by hand on a sacred count, checked for fit and finish.'},
          {img:'https://astroaura.market/cdn/shop/t/8/assets/aa-proc-3.jpg', k:'Step 03', t:'Energised in ritual', d:'Pran-Pratishta with mantra jaap by our pandit.'},
          {img:'https://astroaura.market/cdn/shop/t/8/assets/aa-proc-4.jpg', k:'Step 04', t:'Sealed with care', d:'Boxed with your authenticity certificate and care guide.'}
        ];
        var _tl=document.createElement('section'); _tl.className='gtl';
        _tl.innerHTML='<div class="gtl-head"><span class="gtl-eyebrow">The Process</span><h2 class="gtl-h">Not mass-produced. Individually blessed.</h2></div>'
          +'<div class="gtl-track"><span class="gtl-line"><i class="gtl-fill"></i></span><div class="gtl-steps">'
          +_pd.map(function(s,i){ return '<article class="gtl-step" style="--i:'+i+'"><div class="gtl-node"><img src="'+s.img+'" alt="'+s.t+'" loading="lazy"></div><div class="gtl-k">'+s.k+'</div><h3 class="gtl-t">'+s.t+'</h3><p class="gtl-d">'+s.d+'</p></article>'; }).join('')
          +'</div></div>';
        var _pa=(typeof _ss!=='undefined'&&_ss)?_ss:hero; _pa.insertAdjacentElement('afterend', _tl);
        try{ var _psc=document.querySelector('.page-wrapper'); var _pio=new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ _tl.classList.add('in'); _pio.disconnect(); } }); }, {root:_psc||null, threshold:0.18}); _pio.observe(_tl); setTimeout(function(){ _tl.classList.add('in'); }, 3500); }catch(e){ _tl.classList.add('in'); }
      }catch(e){}
      if(_isOud) try{
        var _oq=document.createElement('section'); _oq.className='goud-quote'; _oq.style.setProperty('--qbg','url('+GAA('ga-oud-ritual2.webp')+')'); _oq.style.setProperty('--qbgw','url('+GAA('ga-oud-ritual-w.webp')+')');
        _oq.innerHTML='<div class="goud-quote-in"><span class="goud-eyebrow" style="color:#f0c987">World\'s First Crystal Oud</span><h2 class="goud-quote-h">Never been done.<br>Until now.</h2><p class="goud-quote-p">Real pyrite, sealed inside pure White Oud. The first fragrance of its kind, anywhere. Worn on skin, not sprayed in air - and once you wear it, nothing else comes close.</p></div>';
        hero.insertAdjacentElement('afterend', _oq);
        var _o3=document.createElement('section'); _o3.className='gss gss-oud';
        var _ofc=['White Oud','Raw Pyrite','Roll-On','8+ Hours'];
        _o3.innerHTML='<div class="gss-inner">'
          +'<div class="gss-left">'
            +'<span class="gss-eyebrow">The Hero Piece</span>'
            +'<h2 class="gss-title">One bottle. A world first.</h2>'
            +'<p class="gss-sub">Pure White Oud resting over real pyrite crystal - blended, bottled and finished by hand. Nothing random, nothing filler.</p>'
            +'<div class="gss-divider"></div>'
            +'<p class="gss-disc">Pyrite associations come from traditions across many cultures and are shared for heritage, not as medical claims.</p>'
          +'</div>'
          +'<div class="gss-right"><div class="gss-card">'
            +'<div class="gss-stage">'
              +'<span class="gss-glow"></span>'
              +'<span class="gss-ring1"></span><span class="gss-ring2"></span>'
              +'<div class="gss-orbit">'+_ofc.map(function(nm,i){ return '<span class="gss-fac" style="animation-delay:-'+(i/_ofc.length*50).toFixed(2)+'s"><i></i>'+nm+'</span>'; }).join('')+'</div>'
              +'<div class="gss-hero-bead"><img class="gss-bead" src="'+GAA('ga-oud3d.webp')+'" alt="Crystal Oud"></div>'
            +'</div>'
            +'<div class="gss-foot"><h3 class="gss-feat-n">Crystal Oud</h3></div>'
          +'</div></div>'
        +'</div>';
        _oq.insertAdjacentElement('afterend', _o3);
      }catch(e){}
      try{
        var _cmpRows=[
          ['Stone authenticity','Lab certified','Unverified'],
          ['Thread & durability','Reinforced core','Cheap elastic'],
          ['Energised & blessed','Included','None'],
          ['Certificate of origin','With every order','Rarely'],
          ['Finish','Hand-finished','Mass produced'],
          ['Returns','7-day, easy','Rarely offered']
        ];
        var _ck='<svg viewBox="0 0 24 24" fill="none" stroke="#2f7d5b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';
        var _cx='<svg viewBox="0 0 24 24" fill="none" stroke="#bd7a5e" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
        var _cmp=document.createElement('section'); _cmp.className='gcmp';
        _cmp.innerHTML='<div class="gcmp-head"><span class="gcmp-eyebrow">The Comparison</span><h2 class="gcmp-h">GemsAura vs. everything else.</h2><p class="gcmp-sub">Most stone bracelets look similar at first. What sets them apart is what you can\'t see, until something breaks.</p></div>'
          +'<div class="gcmp-tbl"><div class="gcmp-row gcmp-hrow"><span class="gcmp-c gcmp-feat">Feature</span><span class="gcmp-c gcmp-us">GemsAura</span><span class="gcmp-c gcmp-them">Others</span></div>'
          +_cmpRows.map(function(r){ return '<div class="gcmp-row"><span class="gcmp-c gcmp-feat">'+r[0]+'</span><span class="gcmp-c gcmp-us"><i class="gcmp-mk">'+_ck+'</i><span class="gcmp-v">'+r[1]+'</span></span><span class="gcmp-c gcmp-them"><i class="gcmp-mk">'+_cx+'</i><span class="gcmp-v">'+r[2]+'</span></span></div>'; }).join('')
          +'</div>';
        var _ca=(typeof _o3!=='undefined'&&_o3)?_o3:((typeof _tl!=='undefined'&&_tl)?_tl:hero); _ca.insertAdjacentElement('afterend', _cmp);
        try{ var _cio=new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ _cmp.classList.add('in'); _cio.disconnect(); } }); }, {root:document.querySelector('.page-wrapper')||null, threshold:0.14}); _cio.observe(_cmp); setTimeout(function(){ _cmp.classList.add('in'); }, 3500); }catch(e){ _cmp.classList.add('in'); }
      }catch(e){}
      try{
        var _gk='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';
        var _gftList=_hasCustomSpec?['Ready to gift, no wrapping needed','Hand-blended in small batches','Express delivery across the UAE','7 day returns or exchange']:['Premium matte gift box, made for gifting','Energising guide included with every piece','Express delivery across the UAE','Certificate of authenticity included'];
        var _gft=document.createElement('section'); _gft.className='gft';
        _gft.innerHTML='<div class="gft-head"><span class="gft-eyebrow">Gifting</span><h2 class="gft-h">A gift that means something.</h2></div>'
          +'<div class="gft-card"><div class="gft-media" style="background-image:url('+GAA('ga-gift-lux.webp')+')"></div>'
          +'<div class="gft-body"><h3 class="gft-bh">Premium. Packaged. Ready.</h3>'
          +'<p class="gft-sub">'+(_hasCustomSpec?'Arrives ready to gift, carefully wrapped with a silk ribbon, no extra wrapping needed. Ready for a birthday, an anniversary, or just because.':'Arrives in a premium matte gift box that needs no wrapping, made for gifting. Every piece includes an energising guide, ready for a birthday, an anniversary, or just because.')+'</p>'
          +'<ul class="gft-list">'+_gftList.map(function(t){ return '<li><i class="gft-ck">'+_gk+'</i>'+t+'</li>'; }).join('')+'</ul>'
          +'</div></div>';
        if(typeof _cmp!=='undefined'&&_cmp){ _cmp.insertAdjacentElement('beforebegin', _gft); }
        else if(typeof _tl!=='undefined'&&_tl){ _tl.insertAdjacentElement('afterend', _gft); }
        else { hero.insertAdjacentElement('afterend', _gft); }
        try{ var _gio=new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ _gft.classList.add('in'); _gio.disconnect(); } }); }, {root:document.querySelector('.page-wrapper')||null, threshold:0.14}); _gio.observe(_gft); setTimeout(function(){ _gft.classList.add('in'); }, 3500); }catch(e){ _gft.classList.add('in'); }
      }catch(e){}
      try{
        var _star='<svg viewBox="0 0 24 24" fill="#e0a43b"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.8 5.9 20.4l1.5-6.8L2.2 9l6.9-.7z"/></svg>';
        function _stars(){ var s=''; for(var i=0;i<5;i++) s+=_star; return s; }
        var _starE='<svg viewBox="0 0 24 24" fill="#d6d2c8"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.8 5.9 20.4l1.5-6.8L2.2 9l6.9-.7z"/></svg>';
        function _starsN(n){ n=Math.round(n||0); var s=''; for(var i=0;i<5;i++) s+=(i<n?_star:_starE); return s; }
        var _rvAll=(_m.reviews&&_m.reviews.length)?_m.reviews.filter(function(r){return r&&r.body;}):[];
        var _rev=null;
        if(_rvAll.length){
          var _tot=_rvAll.length, _sum=0, _dc=[0,0,0,0,0];
          _rvAll.forEach(function(r){ var n=Math.max(1,Math.min(5,Math.round(+r.rating||5))); _sum+=n; _dc[n-1]++; });
          var _avg=_sum/_tot;
          var _dist=[[5,_dc[4]],[4,_dc[3]],[3,_dc[2]],[2,_dc[1]],[1,_dc[0]]];
          var _bars=_dist.map(function(d){ var pct=_tot?(d[1]/_tot*100).toFixed(1):0; return '<div class="grv-bar"><span class="grv-bar-lbl">'+d[0]+'<i class="grv-ministar">'+_star+'</i></span><span class="grv-bar-track"><i class="grv-bar-fill" style="width:'+pct+'%"></i></span><span class="grv-bar-c">'+d[1]+'</span></div>'; }).join('');
          var _show=_rvAll.slice().sort(function(a,b){return (+b.rating||0)-(+a.rating||0);}).slice(0,6);
          var _cards=_show.map(function(r){ var nm=(r.author||'Verified buyer'); return '<article class="grv-card"><span class="grv-cstars">'+_starsN(r.rating)+'</span><p class="grv-q">'+_nd(r.body||'')+'</p><div class="grv-meta"><span class="grv-av">'+nm.charAt(0).toUpperCase()+'</span><span class="grv-meta-tx"><span class="grv-n">'+_nd(nm)+(r.verified?'<i class="grv-verif">Verified</i>':'')+'</span></span></div></article>'; }).join('');
          _rev=document.createElement('section'); _rev.className='grv';
          _rev.innerHTML='<div class="grv-head"><span class="grv-eyebrow">Reviews</span><h2 class="grv-h">Loved on wrists everywhere.</h2></div>'
            +'<div class="grv-summary"><div class="grv-score"><div class="grv-score-n">'+_avg.toFixed(1)+'</div><span class="grv-stars">'+_starsN(_avg)+'</span><span class="grv-count">Based on '+_tot+' verified '+(_tot===1?'review':'reviews')+'</span></div><div class="grv-bars">'+_bars+'</div></div>'
            +'<div class="grv-grid">'+_cards+'</div>';
        }
        if(_rev){
        if(typeof _cmp!=='undefined'&&_cmp) _cmp.insertAdjacentElement('afterend', _rev); else hero.insertAdjacentElement('afterend', _rev);
        try{ var _rio=new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ _rev.classList.add('in'); _rio.disconnect(); } }); }, {root:document.querySelector('.page-wrapper')||null, threshold:0.12}); _rio.observe(_rev); setTimeout(function(){ _rev.classList.add('in'); }, 3500); }catch(e){ _rev.classList.add('in'); }
        }
      }catch(e){}
      try{
        var _faqs=[
          ['Are your stones natural and certified?','Yes. Every stone is independently lab-tested for authenticity, and a certificate of authenticity is included with every order.'],
          ['How do I care for my bracelet?','Keep your piece away from water, perfume and harsh chemicals, and store it somewhere cool and dry. Wipe it gently with a soft cloth, and recharge it under moonlight now and then.'],
          ['How fast is delivery?','Orders are dispatched within 24 to 48 hours with express shipping, and most arrive within 7 to 10 business days.'],
          ['Can I return or exchange my order?','Yes, within 7 days of delivery. The piece should be unused and in its original packaging.']
        ];
        var _fq=document.createElement('section'); _fq.className='gfq';
        _fq.innerHTML='<div class="gfq-head"><span class="gfq-eyebrow">Good to know</span><h2 class="gfq-h">Questions, answered.</h2></div>'
          +'<div class="gfq-list">'+_faqs.map(function(f){ return '<details class="gfq-item"><summary class="gfq-q"><span>'+f[0]+'</span><i class="gfq-ic"></i></summary><div class="gfq-a">'+f[1]+'</div></details>'; }).join('')+'</div>';
        var _rec=document.querySelector('.shopify-section[id*="product-recommendations"]');
        if(_rec) _rec.insertAdjacentElement('afterend', _fq); else if(typeof _rev!=='undefined'&&_rev) _rev.insertAdjacentElement('afterend', _fq); else document.querySelector('#MainContent').appendChild(_fq);
        try{ var _fio=new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ _fq.classList.add('in'); _fio.disconnect(); } }); }, {root:document.querySelector('.page-wrapper')||null, threshold:0.14}); _fio.observe(_fq); setTimeout(function(){ _fq.classList.add('in'); }, 3500); }catch(e){ _fq.classList.add('in'); }
      }catch(e){}
      var track=hero.querySelector('.gpx-track'); var _nImgs=Math.min(imgs.length,12); var cur=0;
      var _prog=hero.querySelector('.gpx-prog i'); if(_prog) _prog.style.width=(100/_nImgs)+'%';
      function _syncThumbs(){ hero.querySelectorAll('.gpx-thumb').forEach(function(x,xi){x.classList.toggle('on',xi===cur);}); var at=hero.querySelector('.gpx-thumb[data-i="'+cur+'"]'); if(at&&at.scrollIntoView){ try{ at.scrollIntoView({inline:'nearest',block:'nearest'}); }catch(e){} } if(_prog) _prog.style.transform='translateX('+(cur*100)+'%)'; }
      function setImg(i){ cur=(i+_nImgs)%_nImgs; if(track) track.scrollTo({left:cur*track.clientWidth, behavior:'smooth'}); _syncThumbs(); }
      if(track){ var _srf=0; track.addEventListener('scroll', function(){ if(_srf) return; _srf=requestAnimationFrame(function(){ _srf=0; var i=Math.round(track.scrollLeft/Math.max(1,track.clientWidth)); if(i!==cur&&i>=0&&i<_nImgs){ cur=i; _syncThumbs(); } }); }, {passive:true}); }
      hero.querySelector('.gpx-thumbs').addEventListener('click', function(e){ var t=e.target.closest('.gpx-thumb'); if(t) setImg(+t.dataset.i); });
      var pv=hero.querySelector('.gpx-prev'), nx=hero.querySelector('.gpx-next');
      if(pv) pv.addEventListener('click', function(){ setImg(cur-1); });
      if(nx) nx.addEventListener('click', function(){ setImg(cur+1); });
      function _accAnim(el, from, to, after){ el.style.height=from+'px'; void el.offsetHeight; el.style.transition='height .32s cubic-bezier(.4,0,.2,1)'; el.style.height=to+'px'; var done=function(){ el.style.transition=''; el.style.height=''; el.removeEventListener('transitionend',done); if(after) after(); }; el.addEventListener('transitionend',done); }
      hero.addEventListener('click', function(e){ var s=e.target.closest('.gpx-acc > summary'); if(!s) return; e.preventDefault(); var d=s.parentElement; var body=d.querySelector('.gpx-acc-body'); if(!body) return; var group=d.closest('.gpx-accs')||hero;
        if(d.open){ _accAnim(body, body.scrollHeight, 0, function(){ d.open=false; }); }
        else { [].forEach.call(group.querySelectorAll('.gpx-acc[open]'), function(o){ if(o!==d){ var ob=o.querySelector('.gpx-acc-body'); if(ob) _accAnim(ob, ob.scrollHeight, 0, (function(oo){ return function(){ oo.open=false; }; })(o)); } }); d.open=true; _accAnim(body, 0, body.scrollHeight); }
      });
      var _tabsEl=hero.querySelector('.gpx-tabs');
      if(_tabsEl) _tabsEl.addEventListener('click', function(e){ var t=e.target.closest('.gpx-tab'); if(!t) return; var i=+t.dataset.t; _tabsEl.querySelectorAll('.gpx-tab').forEach(function(x){x.classList.toggle('on',x===t);}); var panel=_tabsEl.nextElementSibling; if(panel) panel.querySelectorAll('.gpx-tp').forEach(function(x,xi){x.classList.toggle('on',xi===i);}); });
      var cta=hero.querySelector('.gpx-cta');
      var optsec=hero.querySelector('.gpx-opts'); if(optsec) optsec.addEventListener('click', function(e){ var o=e.target.closest('.gpx-opt'); if(!o||o.dataset.out) return; hero.querySelectorAll('.gpx-opt').forEach(function(x){x.classList.toggle('on',x===o);}); cta.dataset.id=o.dataset.id; var pr=+o.dataset.price; hero.querySelector('.gpx-now').textContent=money(pr); hero.querySelector('.gpx-cta-p').textContent=money(pr); var sv=hero.querySelector('.gpx-save'); if(sv&&p.compare_at_price>pr) sv.textContent='Save '+Math.round((p.compare_at_price-pr)/p.compare_at_price*100)+'%'; });
      cta.addEventListener('click', function(){
        var items=[{id:parseInt(cta.dataset.id,10), quantity:1}];
        var ck=hero.querySelector('.gpx-addon-ck');
        if(ck && ck.checked && ck.dataset.vid) items.push({id:parseInt(ck.dataset.vid,10), quantity:1});
        if(items.length===1){ if(window.__gaAddId) window.__gaAddId(items[0].id,1); return; }
        fetch('/cart/add.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:items})}).then(function(r){ return r.json().then(function(b){return {ok:r.ok,b:b};}); }).then(function(res){ if(!res.ok){ if(window.__gaAddId) window.__gaAddId(items[0].id,1); return; } if(window.__gaOpenCart) window.__gaOpenCart(); }).catch(function(){ if(window.__gaAddId) window.__gaAddId(items[0].id,1); });
      });
    }).catch(function(){});
  }

  function gaLoadScript(src){ return new Promise(function(res){ if([].some.call(document.scripts,function(s){return s.src===src;})){res(1);return;} var s=document.createElement('script'); s.src=src; s.onload=function(){res(1);}; s.onerror=function(){res(0);}; document.head.appendChild(s); }); }
  function excite(){
    var scroller=document.querySelector('.page-wrapper')||null;
    if(!window.__gaIO){ try{ window.__gaIO=new IntersectionObserver(function(es){ es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); window.__gaIO.unobserve(en.target); } }); }, {root:scroller, threshold:0.1}); }catch(e){} }
    var io=window.__gaIO;
    function reveal(sel, stagger){ document.querySelectorAll(sel).forEach(function(el,i){ if(el.dataset.gaRev) return; el.dataset.gaRev='1'; el.classList.add('ga-reveal'); if(stagger) el.style.transitionDelay=((i%6)*0.06)+'s'; if(io) io.observe(el); else el.classList.add('in'); }); }
    reveal('.gpdp-eyebrow'); reveal('.gpdp-sec h2'); reveal('.gpdp-sub');
    reveal('.gpdp-ecard', true); reveal('.gpdp-comp-row', true); reveal('.ghero-info .ga-benefit', true); reveal('.gpdp-q', true); reveal('.gpdp-stats>div', true); reveal('.gpdp-comp-tbl');
    setTimeout(function(){ document.querySelectorAll('.ga-reveal:not(.in)').forEach(function(el){ el.classList.add('in'); }); }, 12000);
    (async function(){
      if(!window.gsap) await gaLoadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js');
      if(!window.gsap) return;
      document.querySelectorAll('.gpdp-stats b').forEach(function(b){ if(b.dataset.gaCount) return; b.dataset.gaCount='1'; var m=(b.textContent||'').match(/[\d.]+/); if(!m) return; var end=parseFloat(m[0]); var suffix=b.textContent.replace(m[0],''); var dec=(m[0].indexOf('.')>-1); var o={v:0}; var done=false;
        var ob=new IntersectionObserver(function(es){ es.forEach(function(en){ if(en.isIntersecting && !done){ done=true; gsap.to(o,{v:end,duration:1.5,ease:'power2.out',onUpdate:function(){ b.textContent=(dec?o.v.toFixed(1):Math.round(o.v))+suffix; }}); ob.disconnect(); } }); }, {root:scroller, threshold:0.5}); ob.observe(b);
      });
    })();
  }
  function buildRelated(){
    if(!/\/products\//.test(location.pathname)) return;
    if(document.querySelector('.gpdp-related')) return;
    var handle=(location.pathname.match(/\/products\/([^/?#]+)/)||[])[1]; if(!handle) return;
    fetch('/products/'+handle+'.js').then(function(r){return r.json();}).then(function(p){
      return fetch('/recommendations/products.json?product_id='+p.id+'&limit=4&intent=related').then(function(r){return r.json();}).then(function(rec){
        var prods=(rec&&rec.products)||[];
        if(prods.length<2){ return fetch('/collections/all/products.json?limit=6').then(function(r){return r.json();}).then(function(c){ return (c.products||[]).filter(function(x){return x.handle!==handle;}).slice(0,4); }); }
        return prods;
      });
    }).then(function(prods){
      if(!prods||prods.length<2||document.querySelector('.gpdp-related')) return;
      function money(c){ return 'Dhs. '+((typeof c==='string'?parseFloat(c)*100:c)/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); }
      function iu(u,s){ if(!u) return ''; u=(u.indexOf('//')===0?'https:':'')+u; return u.replace(/(\.(?:jpe?g|png|webp|gif|avif))(\?|$)/i,'_'+s+'$1$2'); }
      var cards=prods.slice(0,4).map(function(pr){
        var img=pr.featured_image||(pr.images&&pr.images[0])||''; if(img&&typeof img==='object') img=img.src||img.url||'';
        var price=pr.price!=null?pr.price:(pr.variants&&pr.variants[0]&&pr.variants[0].price);
        var rating=(window.__gaRatings&&window.__gaRatings[pr.handle])||[4.8,0];
        var type=pr.type||pr.product_type||'Lab-certified natural stone';
        var title=(pr.title||'').replace(/\s*\(Lab Certified\)/i,'');
        return '<a class="ipc" href="/products/'+pr.handle+'"><div class="ipc-tilt">'
          +'<img class="ipc-img" src="'+iu(img,'600x')+'" alt="'+title+'" loading="lazy">'
          +'<div class="ipc-grad"></div>'
          +'<div class="ipc-content"><div class="ipc-header"><div class="ipc-htext"><h3>'+title+'</h3><p>'+type+'</p></div><span class="ipc-badge">&#9733; '+rating[0].toFixed(1)+'</span></div>'
          +'<div class="ipc-price">'+money(price)+'</div>'
          +'<div class="ipc-dots"><i class="on"></i><i></i><i></i><i></i></div></div>'
          +'</div></a>';
      }).join('');
      var sec=document.createElement('section'); sec.className='gpdp-sec gpdp-related';
      sec.innerHTML='<span class="gpdp-eyebrow">Complete your ritual</span><h2>You may also love.</h2><p class="gpdp-sub">Hand-picked pieces that pair beautifully with this one.</p><div class="ipc-grid">'+cards+'</div>';
      var story=document.querySelector('.gpdp-story');
      if(story) story.insertBefore(sec, story.querySelector('.gpdp-comp')||story.firstChild); else { var m=document.querySelector('#MainContent'); if(m) m.appendChild(sec); }
      // 3D tilt
      sec.querySelectorAll('.ipc').forEach(function(card){ var tilt=card.querySelector('.ipc-tilt'); if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
        card.addEventListener('mousemove',function(e){ var r=card.getBoundingClientRect(); var x=e.clientX-r.left, y=e.clientY-r.top; var rx=(y-r.height/2)/(r.height/2)*-7; var ry=(x-r.width/2)/(r.width/2)*7; tilt.style.transform='perspective(1000px) rotateX('+rx+'deg) rotateY('+ry+'deg) scale3d(1.04,1.04,1.04)'; tilt.style.transition='transform .1s ease-out'; });
        card.addEventListener('mouseleave',function(){ tilt.style.transform='perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'; tilt.style.transition='transform .45s ease'; });
      });
      if(window.excite) try{ excite(); }catch(e){}
    }).catch(function(){});
  }

  function story(){
    if(!/^\/pages\/about-us\/?$/.test(location.pathname)) return;
    var main=document.querySelector('#MainContent'); if(!main || main.dataset.gaStory) return; main.dataset.gaStory='1';
    main.querySelectorAll('.shopify-section').forEach(function(n){ n.style.display='none'; });
    function pill(t,d){ return '<div class="ga-story-pill"><h3>'+t+'</h3><p>'+d+'</p></div>'; }
    var sec=document.createElement('section'); sec.className='ga-story';
    sec.innerHTML='<div class="ga-story-waves" style="background-image:url(https://cdn.shopify.com/s/files/1/0627/9849/5847/t/7/assets/ga-footer-waves.svg?v=1)"></div>'
      +'<div class="ga-story-inner">'
        +'<header class="ga-story-hero"><span class="ga-story-eyebrow">Our Story</span><h1 class="ga-story-h1">Real stones.<br>Real <span>energy.</span></h1><p class="ga-story-lead">The market is full of fakes. We built GemsAura so you never have to wonder whether yours is real.</p></header>'
        +'<div class="ga-story-rows">'
          +'<article class="ga-story-row"><span class="ga-story-kicker">The problem</span><h2>Too many fakes.</h2><p>Walk through any market and the shelves are full of crystal bracelets. Dyed glass, pressed powder, mass produced beads with no origin, no certificate, and no energy behind them. People pay for positivity and quietly get plastic.</p></article>'
          +'<article class="ga-story-row"><span class="ga-story-kicker">What we believe</span><h2>You deserve the real thing.</h2><p>A stone you wear every day should be genuine, and it should carry good energy into your life. Not a gimmick, not a knock off. Something authentic, grounding, and quietly powerful.</p></article>'
          +'<article class="ga-story-row"><span class="ga-story-kicker">So we made GemsAura</span><h2>Genuine, certified, energised.</h2><p>Every piece is a real natural stone, hand finished and energised with intention, then shipped with a certificate of authenticity. Proof in the box, positivity on your wrist.</p></article>'
        +'</div>'
        +'<div class="ga-story-pillars">'+pill('Genuine','Real natural stones, never dyed glass or plastic.')+pill('Certified','A lab certificate of authenticity in every box.')+pill('Energised','Hand finished and charged with intention.')+pill('Positive','Made to bring calm, clarity and good energy.')+'</div>'
        +'<blockquote class="ga-story-quote">Something genuine, something positive. That is the whole promise.</blockquote>'
        +'<div class="ga-story-cta"><a href="/collections/all">Explore the collection <span>&#8594;</span></a></div>'
      +'</div>';
    main.appendChild(sec);
  }
  function init(){
    var isHome=!!document.querySelector('#MainContent[data-template="index"]');
    hero(); mega();
    if(isHome){ collstrip(); intent(); }
    footer(); try{ story(); }catch(e){} cards(); collhead(); cartWire(); pdp(); buildHero(); [700].forEach(function(ms){ setTimeout(pdp, ms); }); [600].forEach(function(ms){ setTimeout(buildHero, ms); }); [1600,3400].forEach(function(ms){ setTimeout(excite, ms); }); fixHeaderCart(); [700,1800].forEach(function(ms){ setTimeout(fixHeaderCart, ms); });
    if(isHome){ oudfeature(); extras(); faq(); try{ faqAnim(); }catch(e){} }
    var t; var mo=new MutationObserver(function(){ clearTimeout(t); t=setTimeout(function(){ if(document.querySelector('product-card:not([data-ga-glass])')) cards(); }, 180); });
    try{ mo.observe(document.querySelector('#MainContent')||document.body, {childList:true, subtree:true}); }catch(e){}
  }
  // Premium smooth scroll-restore. This theme scrolls .page-wrapper (not window) AND
  // briefly LOCKS scroll on a bfcache/back restore, then unlocks after ~1-2s. So we
  // land at the banner, poll until the page is tall AND scroll is unlocked (nudge test),
  // then fast-ease the container down to where you were = the smooth scroll you wanted.
  try{ if('scrollRestoration' in history) history.scrollRestoration='manual'; }catch(e){}
  function gaScroller(){ return document.querySelector('.page-wrapper') || document.scrollingElement || document.documentElement; }
  function gaSKey(){ return 'gaScroll:'+location.pathname; }
  function gaSaveScroll(){ try{ sessionStorage.setItem(gaSKey(), String(gaScroller().scrollTop||0)); }catch(e){} }
  window.addEventListener('pagehide', gaSaveScroll);
  document.addEventListener('click', function(e){ if(e.target.closest('a[href]:not([href^="#"])')) gaSaveScroll(); }, true);
  function gaEaseTo(sc, y, dur){
    var start=sc.scrollTop||0, dist=y-start; if(Math.abs(dist)<6) return;
    var prevSB=sc.style.scrollBehavior; sc.style.scrollBehavior='auto';
    var t0=null; dur=dur||820;
    function ease(p){ return 1-Math.pow(1-p,3); }
    function step(ts){ if(t0===null)t0=ts; var p=Math.min(1,(ts-t0)/dur); sc.scrollTop=start+dist*ease(p); if(p<1) requestAnimationFrame(step); else sc.style.scrollBehavior=prevSB; }
    requestAnimationFrame(step);
  }
  function gaRestoreScroll(){
    try{
      var y=parseInt(sessionStorage.getItem(gaSKey())||'0',10);
      if(y<180) return;
      var tries=0, done=false;
      (function attempt(){
        if(done) return;
        tries++;
        var sc=gaScroller();
        if(sc.scrollHeight < y + (sc.clientHeight||600)*0.5){ if(tries<130) setTimeout(attempt,70); return; }
        var prevSB=sc.style.scrollBehavior; sc.style.scrollBehavior='auto';
        sc.scrollTop=y;   // attempt the real target; the theme lock will swallow it while active
        requestAnimationFrame(function(){ requestAnimationFrame(function(){
          if(done) return;
          var took = sc.scrollTop > y-80;
          sc.scrollTop=0; sc.style.scrollBehavior=prevSB;
          if(took){ done=true; gaEaseTo(sc, y, 820); }
          else if(tries<130) setTimeout(attempt,70);
        }); });
      })();
    }catch(e){}
  }
  window.addEventListener('pageshow', function(e){ if(e.persisted) setTimeout(gaRestoreScroll, 60); });
  document.addEventListener('DOMContentLoaded', function(){ var n=performance.getEntriesByType('navigation')[0]; if(n && (n.type==='back_forward'||n.type==='reload')) setTimeout(gaRestoreScroll, 90); });

  function _gaReady(){ try{ document.documentElement.classList.add('ga-hp-ready'); }catch(e){} }
  function _gaBoot(){ try{ init(); }catch(e){} requestAnimationFrame(function(){ requestAnimationFrame(_gaReady); }); }
  if(document.readyState!=='loading') _gaBoot(); else document.addEventListener('DOMContentLoaded', _gaBoot);
  window.addEventListener('load', _gaReady);
  setTimeout(_gaReady, 1500);
})();
;document.addEventListener('click',function(e){var b=e.target&&e.target.closest&&e.target.closest('.ga-oud-sound');if(!b)return;e.preventDefault();var v=b.parentNode&&b.parentNode.querySelector('.ga-oud-video');if(!v)return;v.muted=!v.muted;b.classList.toggle('on',!v.muted);if(!v.muted){var p=v.play();if(p&&p.catch)p.catch(function(){});}});
