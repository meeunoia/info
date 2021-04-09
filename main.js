
// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000, isDeleted, speed, name) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.isDeleting = false;
      this.speed = speed;
      this.type();
      this.name = name;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = this.txt;

      // If word is complete
     if(this.isDeleted){

      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
     }

      let typeSpeed = this.speed;

      if(this.isDeleting) {
        typeSpeed /= 2;
      }

      if(this.txt.length !== this.words[current].length){
        console.log(1);
        setTimeout(() => {
          this.type();
        }, typeSpeed);
      } else {
        //start audio

        //set boder

        if(this.name === 2){
          console.log(this.name);
          var element = document.getElementById("button");
          var para = document.createElement("button");
          var node = document.createTextNode("Maybe not");
          para.appendChild(node);
          var att = document.createAttribute("id");
          att.value = "notOke";
          para.setAttributeNode(att);
          para.classList.add("btn");
        
          element.appendChild(para);

          var para2 = document.createElement("button");
          var node2 = document.createTextNode("Okayy");
          para2.appendChild(node2);
      
          var att2 = document.createAttribute("id");
          att2.value = "okee";
          para2.setAttributeNode(att2);
          para2.classList.add("btn");
          element.appendChild(para2);

          //var element = document.getElementById("container");
        }


    //    var body = document.getElementsByTagName("body");
     //   body[0].style.borderColor = "red";
        setTimeout(() => {
    //      body[0].style.borderColor = "transparent";
        }, 500);
      }

      return true;
    }
  }
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
     txtElement = document.querySelector('.txt-header1');
     words = JSON.parse(txtElement.getAttribute('data-words'));
     wait = txtElement.getAttribute('data-wait');
     isDeleted = txtElement.getAttribute('willDelete');
     speed = txtElement.getAttribute('speed');
     new TypeWriter(txtElement, words, wait, isDeleted,speed, 1);

   setTimeout(()=>{ txtElement = document.querySelector('.txt-body1');
   words = JSON.parse(txtElement.getAttribute('data-words'));
   wait = txtElement.getAttribute('data-wait');
   isDeleted = txtElement.getAttribute('willDelete');
   speed = txtElement.getAttribute('speed');
   new TypeWriter(txtElement, words, wait, isDeleted,speed, 1);},5);

  
    setTimeout(()=>{ txtElement = document.querySelector('.txt-body2');
    words = JSON.parse(txtElement.getAttribute('data-words'));
    wait = txtElement.getAttribute('data-wait');
    isDeleted = txtElement.getAttribute('willDelete');
    speed = txtElement.getAttribute('speed');
    new TypeWriter(txtElement, words, wait, isDeleted,speed, 1);},5);
 
    setTimeout(()=>{ txtElement = document.querySelector('.txt-body3');
    words = JSON.parse(txtElement.getAttribute('data-words'));
    wait = txtElement.getAttribute('data-wait');
    isDeleted = txtElement.getAttribute('willDelete');
    speed = txtElement.getAttribute('speed');
    new TypeWriter(txtElement, words, wait, isDeleted,speed, 2);},5);


   setTimeout(()=>{
    //var body = document.body;
    //body.removeChild(document.getElementById('container'));
    //document.getElementById('container').style.display = "none";
    //document.getElementById('afterall').style.display = "block";
   },3000);
  }