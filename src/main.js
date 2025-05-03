let h1Elements = [];
const h1Array = [...document.querySelectorAll('h1')];
const specialChars = [...'!@£$%&}{":;?><][+=-_qwertyuiopasdfghjklzxcvbnmアイウオカキクケコサシスセソガギグゲゴパピプペポ'.split('')]

class Title{
    constructor(id, element){
        this.id = id;
        this.idx = 0;
        this.frame = 0;
        this.element = element;
        this.element.className = `${id}`;
        this.originalString = element.innerText;
        this.innerHtml = '';
        this.intersecting = false;
        this.createSpans();
    }

    createSpans(){
        for(let i = 0; i < this.originalString.length; i++){
            this.innerHtml += `<span>${this.originalString[i]}</span>`;
        }
        this.element.innerHTML = this.innerHtml;
        this.spans = [...this.element.querySelectorAll('span')]
    
    }

    animate(){
        if(this.idx !== this.originalString.length && this.intersecting){
            this.spans[this.idx].style.opacity = 1;
            this.spans[this.idx].style.transform = `translateX(0)`
            if(this.frame % 3 === 0 && this.spans[this.idx].innerText !== ' '){
                this.spans[this.idx].innerText = specialChars[Math.floor(Math.random() * specialChars.length)]
            }
            if(this.frame % 35 == 0 && this.frame !== 0){ // Tweak the frame % number to adjust animation time
                this.spans[this.idx].innerText = this.originalString[this.idx]
                this.idx++
            }
            this.frame++;
            requestAnimationFrame(this.animate.bind(this))
        }else{
            console.log('done')
        }
    }

    reset(){
        this.idx = 0;
        this.frame = 0;
        this.intersecting = false;
        [...this.element.querySelectorAll('span')].forEach(span => {
            span.style.opacity = 0;
            span.style.transform = `translateX(-10px)`
        })
    }
}

window.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        h1Array.forEach((header,idx) => {
            h1Elements[idx] = new Title(idx, header)
        })
    
        let options = {
            rootMargin: '0px',
            threshold: 0.0
          }
          
          let callback = (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    h1Elements[+entry.target.className].intersecting = true;
                    h1Elements[+entry.target.className].animate()
                  
                }else{
                    h1Elements[+entry.target.className].reset()
                }
            });
          };
        
          let observer = new IntersectionObserver(callback, options);
    
          h1Elements.forEach(instance => {
            observer.observe(instance.element)
            instance.element.style.opacity = 1
          });

    }, 300)
})


// Sample project data
const projects = [
    {
      id: 1,
      title: "2025 · itsgo1ng2be0k w/ recyclexbin",
      image: "assets/img/audio/itsgoingtobeok.png", // Replace with actual image URL
      soundcloudEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4wki2cX85Gwe6DOttqGND9?utm_source=generator" width="100%" 
      height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    // Add more projects as needed
    {
        id: 2,
        title: "2025 · FROM ME 2 U",
        soundcloudEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7yHay8Z6F7FxUi0PTACVie?utm_source=generator&theme=0" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        image: "assets/img/audio/Simon-Says-Spectorama.png",
        
    },

    {
        id: 3,
        title: "2024 . ENSEMBLE",
        soundcloudEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6KpLoYJT82I5ZARDJIMNaJ?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        image: "assets/img/audio/ensemble.jpg",
    
    },
    
    {
        id: 4,
        title: "2024 . ALABASTER & THE BASTARD SON",
        soundcloudEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/04TAaaEhlxIMpEi5DdnhrM?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        image: "assets/img/audio/alabaster.jpg",
    
    },

    {
        id: 5,
        title: "2024 . SEPTEMBER",
        soundcloudEmbed: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925227388&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        // </iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/knd2" title="knd" target="_blank" style="color: #cccccc; text-decoration: none;">knd</a> · <a href="https://soundcloud.com/knd2/september-solos-24" title="september solos 24&#x27;" target="_blank" style="color: #cccccc; text-decoration: none;">september solos 24&#x27;</a></div>`,
        image: "assets/img/78pxLogoCrossARC33xo.png",
    
    },

    {
        id: 6,
        title: "2024 . APRIL",
        soundcloudEmbed: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1814096934&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        // </iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/knd2" title="knd" target="_blank" style="color: #cccccc; text-decoration: none;">knd</a> · <a href="https://soundcloud.com/knd2/april-solos-24" title="april solos 24&#x27;" target="_blank" style="color: #cccccc; text-decoration: none;">april solos 24&#x27;</a></div>`,
        image: "assets/img/78pxLogoCrossARC33xo.png",
    
    },

    {
        id: 6,
        title: "2023 . BREAK FROM GRACE",
        soundcloudEmbed: `<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/album/1jSbvC2b2vZYEcpRCu6hqw?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        image: "assets/img/audio/breakfromgrace.jpg",
    
    },
      
    {
        id: 6,
        title: "2021 . PAIN IN POETRY",
        soundcloudEmbed: `<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/album/59N7fvQYTb8doHa6YKAtmo?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        image: "assets/img/audio/PART3!.jpg",
    
    },

    {
        id: 6,
        title: "2024 - 2025 . COLLABORATIONS",
        soundcloudEmbed: `
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0plHrAqS0VRyv9YBWxmq0s?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe> <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5n27iCLIsotivPFdc53mCQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2017635273&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/s0da0ntheside" title="emw0n" target="_blank" style="color: #cccccc; text-decoration: none;">emw0n</a> · <a href="https://soundcloud.com/s0da0ntheside/justice-prod-scrambl" title="justice (scrambl + saiweeknd)" target="_blank" style="color: #cccccc; text-decoration: none;">justice (scrambl + saiweeknd)</a></div>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1975587043&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ivykay" title="ivy kay" target="_blank" style="color: #cccccc; text-decoration: none;">ivy kay</a> · <a href="https://soundcloud.com/ivykay/forever-pack-violet-chromecrystals-gloom-knd" title="forever pack + violet chromecrystals gloom knd" target="_blank" style="color: #cccccc; text-decoration: none;">forever pack + violet chromecrystals gloom knd</a></div>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1789433338&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ivykay" title="ivy kay" target="_blank" style="color: #cccccc; text-decoration: none;">ivy kay</a> · <a href="https://soundcloud.com/ivykay/sidonia-spring-ambience-w-yuritashr-saiweekend" title=".sidonia [spring ambience] (w/ @yuritashr @saiweekend)" target="_blank" style="color: #cccccc; text-decoration: none;">.sidonia [spring ambience] (w/ @yuritashr @saiweekend)</a></div>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2018693933&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sumn2turn" title="• lance.BIZZLE" target="_blank" style="color: #cccccc; text-decoration: none;">• lance.BIZZLE</a> · <a href="https://soundcloud.com/sumn2turn/tres-lacy-say-nun-pls-saiweekend-ninomilano" title="Tres &amp; Lacy - say nun pls (saiweekend + ninomilano)" target="_blank" style="color: #cccccc; text-decoration: none;">Tres &amp; Lacy - say nun pls (saiweekend + ninomilano)</a></div>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1107460201&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/meanathen" title="Meanathen" target="_blank" style="color: #cccccc; text-decoration: none;">Meanathen</a> · <a href="https://soundcloud.com/meanathen/novokain" title="Новокаин" target="_blank" style="color: #cccccc; text-decoration: none;">Новокаин</a></div>
        `,
        image: "assets/img/78pxLogoCrossARC33xo.png",
    
    },

    {
        id: 6,
        title: "MISC.",
        soundcloudEmbed: "DRUM KITS",
        soundcloudEmbed: `<a href="https://www.patreon.com/c/knd33xo">
<img src="/assets/img/audio/ilovethecoloringbook.png"  alt="" >
</a>`,
        
        image: "assets/img/78pxLogoCrossARC33xo.png",
    
    },
  ];
  
  // Function to render the project list
  function renderProjectList() {
    const projectList = document.getElementById("projectList");
    projects.forEach((project, index) => {
      const listItem = document.createElement("li");
      listItem.className = "p-4 cursor-pointer hover:bg-gray-300 hover:text-white text-xs";
      listItem.textContent = project.title;
      listItem.addEventListener("click", () => displayProjectDetails(index));
      projectList.appendChild(listItem);
    });
  }
  
  // Function to display project details
  function displayProjectDetails(index) {
    const project = projects[index];
    const projectDetails = document.getElementById("projectDetails");
    projectDetails.innerHTML = `
      ${project.soundcloudEmbed}
      <img class="p-2" src="${project.image}" alt="${project.title}" class="mb-4 w-full h-auto object-cover"/>
    `;
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", () => {
    renderProjectList();
    displayProjectDetails(0); // Display the first project by default
  });
  