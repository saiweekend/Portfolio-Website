// Sample project data
const projects = [
  {
      id: 1,
      title: "2026 · WITCH HAT ATELIER AR",
      image: "assets/img/audio/WHA.jpg", // Replace with actual image URL
      soundcloudEmbed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/HjyKMGPfv7Q?si=CZjh69qfIdtI5UUS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },  
  
  
  {
      id: 2,
      title: "2026 · WOULD YOU LOVE ME",
      image: "assets/img/audio/WYLM.jpg", // Replace with actual image URL
      soundcloudEmbed: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2341904348&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/knd2" title="fua" target="_blank" style="color: #cccccc; text-decoration: none;">fua</a> · <a href="https://soundcloud.com/knd2/would-you-love-me-wav" title="WOULD YOU LOVE ME" target="_blank" style="color: #cccccc; text-decoration: none;">WOULD YOU LOVE ME</a></div>`
    },  
  
  {
      id: 3,
      title: "2026 · Day Cycle",
      image: "assets/img/audio/daycycle.jpg", // Replace with actual image URL
      soundcloudEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/3xvcrul9WNHXusqOBLIatU?utm_source=generator&si=9e6c33a6ddea4774" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },  
  
  {
      id: 4,
      title: "2025 · itsgo1ng2be0k w/ recyclexbin",
      image: "assets/img/audio/itsgoingtobeok.png", // Replace with actual image URL
      soundcloudEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4wki2cX85Gwe6DOttqGND9?utm_source=generator" width="100%" 
      height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    // Add more projects as needed
    {
        id: 5,
        title: "2025 · FROM ME 2 U",
        soundcloudEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7yHay8Z6F7FxUi0PTACVie?utm_source=generator&theme=0" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        image: "assets/img/audio/Simon-Says-Spectorama.png",
        
    },

    {
        id: 6,
        title: "2024 . ENSEMBLE",
        soundcloudEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6KpLoYJT82I5ZARDJIMNaJ?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        image: "assets/img/audio/ensemble.jpg",
    
    },
    
    {
        id: 7,
        title: "2024 . ALABASTER & THE BASTARD SON",
        soundcloudEmbed: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/04TAaaEhlxIMpEi5DdnhrM?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        image: "assets/img/audio/alabaster.jpg",
    
    },

    {
        id: 8,
        title: "2024 . SEPTEMBER",
        soundcloudEmbed: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1925227388&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        // </iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/knd2" title="knd" target="_blank" style="color: #cccccc; text-decoration: none;">knd</a> · <a href="https://soundcloud.com/knd2/september-solos-24" title="september solos 24&#x27;" target="_blank" style="color: #cccccc; text-decoration: none;">september solos 24&#x27;</a></div>`,
        image: "assets/img/78pxLogoCrossARC33xo.png",
    
    },

    {
        id: 9,
        title: "2024 . APRIL",
        soundcloudEmbed: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1814096934&color=%23444444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        // </iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/knd2" title="knd" target="_blank" style="color: #cccccc; text-decoration: none;">knd</a> · <a href="https://soundcloud.com/knd2/april-solos-24" title="april solos 24&#x27;" target="_blank" style="color: #cccccc; text-decoration: none;">april solos 24&#x27;</a></div>`,
        image: "assets/img/78pxLogoCrossARC33xo.png",
    
    },

    {
        id: 10,
        title: "2023 . BREAK FROM GRACE",
        soundcloudEmbed: `<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/album/1jSbvC2b2vZYEcpRCu6hqw?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        image: "assets/img/audio/breakfromgrace.jpg",
    
    },
      
    {
        id: 11,
        title: "2021 . PAIN IN POETRY",
        soundcloudEmbed: `<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/album/59N7fvQYTb8doHa6YKAtmo?utm_source=generator" 
        width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        image: "assets/img/audio/PART3!.jpg",
    
    },

    {
        id: 12,
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
        id: 13,
        title: "MISC.",
        soundcloudEmbed: `<a href="https://www.patreon.com/c/knd33xo"> <img src="/assets/img/audio/ilovethecoloringbook.png"  alt="" > </a>`,
        image: "assets/img/78pxLogoCrossARC33xo.png",
    
    },
  ];
  
  // Function to render the project list
  function renderProjectList() {
    const projectList = document.getElementById("projectList");
    projects.forEach((project, index) => {
      const listItem = document.createElement("li");
      listItem.className = "p-4 cursor-pointer hover:bg-gray-300 hover:text-white text-sm";
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
      <img class="p-2 content-center" src="${project.image}" alt="${project.title}" class="mb-4 w-full h-auto object-cover"/>
    `;
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", () => {
    renderProjectList();
    displayProjectDetails(0); // Display the first project by default
  });

  