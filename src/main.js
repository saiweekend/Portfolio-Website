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


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const content = document.getElementById('testcontent');

// Add event listeners to the buttons
btn1.addEventListener('click', function() {
    // Update the content area when Button 1 is clicked
    content.innerHTML = '<div id="content" class="flex ml-0"> <div> <img img  src="/assets/img/temp_01.png" alt=""> </div> </div>';
});

btn2.addEventListener('click', function() {
    // Update the content area when Button 2 is clicked
    content.innerHTML = '<h2>Content for Button 2</h2><p>This is the content for Button 2.</p>';
});