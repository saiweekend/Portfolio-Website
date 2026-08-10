/* ══════════════════════════════════════════════════════════════
   C. Sai Hallie — Portfolio · shared scripts
   ══════════════════════════════════════════════════════════════ */

/* ── BOOT SEQUENCE (home only, once per session) ─────────── */
(function initBoot(){
  const boot=document.getElementById('boot');
  if(!boot)return;

  // Skip boot if already shown this session (nav within site)
  if(sessionStorage.getItem('bootShown')==='1'){
    boot.classList.add('done');
    setTimeout(()=>boot.remove(),50);
    return;
  }

  const bar=document.getElementById('bootBar');
  const msg=document.getElementById('bootMsg');
  const log=document.getElementById('bootLog');
  if(!bar||!msg)return;

  const msgs=[
    'LOADING AUDIO SUBSYSTEM...',
    'INITIALIZING WWISE ENGINE...',
    'MOUNTING FMOD BANKS...',
    'CALIBRATING DSP PIPELINE...',
    'SCANNING ASSET REGISTRY...',
    'LOADING FOLEY LIBRARIES...',
    'SYNCING MIDDLEWARE...',
    'SYSTEM READY.'
  ];
  const logLines=[
    'SYS > audio.dll [OK]',
    'SYS > wwise.sdk [OK]',
    'SYS > fmod.lib [OK]',
    'SYS > ue5.audio [OK]',
    'SYS > c++.runtime [OK]',
    'SYS > dsp.pipeline [OK]',
    'MEM > heap 512mb / 512mb',
    'CPU > 4 cores active',
    'SND > 48khz / 24bit',
    'NET > offline mode'
  ];

  let li=0;
  function addLog(){
    if(li>=logLines.length||!log)return;
    log.textContent+=logLines[li++]+'\n';
    if(li<logLines.length)setTimeout(addLog,240+Math.random()*160);
  }
  setTimeout(addLog,500);

  let pct=0,mi=0;
  function tick(){
    pct+=1+Math.random()*2.6;
    if(pct>100)pct=100;
    bar.style.width=pct+'%';
    const mt=Math.min(Math.floor((pct/100)*msgs.length),msgs.length-1);
    if(mt!==mi){mi=mt;msg.textContent=msgs[mi];}
    if(pct<100){
      setTimeout(tick,26+Math.random()*36);
    } else {
      msg.textContent='SYSTEM READY.';
      sessionStorage.setItem('bootShown','1');
      setTimeout(()=>boot.classList.add('done'),650);
    }
  }
  setTimeout(tick,1300);
})();

/* ── SCRAMBLE TEXT (preserved from original main.js) ─────── */
const specialChars=[...'!@£$%&}{":;?><][+=-_qwertyuiopasdfghjklzxcvbnmアイウオカキクケコサシスセソガギグゲゴパピプペポ'];

class ScrambleTitle{
  constructor(el,delay=0){
    this.el=el;
    this.orig=el.innerText;
    this.idx=0;this.frame=0;this.active=false;this.delay=delay;
    let html='';
    for(let i=0;i<this.orig.length;i++){
      html+=`<span style="opacity:0;display:inline-block;transition:opacity 0.15s">${this.orig[i]===' '?'&nbsp;':this.orig[i]}</span>`;
    }
    this.el.innerHTML=html;
    this.spans=[...this.el.querySelectorAll('span')];
  }
  start(){
    setTimeout(()=>{this.active=true;this.animate();},this.delay);
  }
  animate(){
    if(this.idx<this.orig.length&&this.active){
      this.spans[this.idx].style.opacity='1';
      const ch=this.orig[this.idx];
      if(this.frame%3===0&&ch!==' '){
        this.spans[this.idx].innerText=specialChars[Math.floor(Math.random()*specialChars.length)];
      }
      if(this.frame%32===0&&this.frame!==0){
        this.spans[this.idx].innerText=ch===' '?'\u00a0':ch;
        this.idx++;
      }
      this.frame++;
      requestAnimationFrame(this.animate.bind(this));
    }
  }
}

/* ── SCROLL REVEAL ───────────────────────────────────────── */
function initReveal(){
  const els=document.querySelectorAll('.reveal');
  if(!els.length)return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
  els.forEach(el=>obs.observe(el));
}

/* ── BLOG EXPAND/COLLAPSE ────────────────────────────────── */
function initBlog(){
  document.querySelectorAll('.blog-head').forEach(head=>{
    head.addEventListener('click',()=>{
      const post=head.closest('.blog-post');
      post.classList.toggle('open');
    });
  });
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded',()=>{
  initReveal();
  initBlog();

  // Scramble on any .scramble element
  document.querySelectorAll('.scramble').forEach((el,i)=>{
    const st=new ScrambleTitle(el, 400 + i*200);
    // If boot is showing, wait for it
    const boot=document.getElementById('boot');
    if(boot && !boot.classList.contains('done') && sessionStorage.getItem('bootShown')!=='1'){
      setTimeout(()=>st.start(),2200);
    } else {
      st.start();
    }
  });
});
