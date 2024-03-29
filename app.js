
const getNumbers = [...document.querySelectorAll('.number')];
const operators = document.querySelectorAll('.operators-btn');
const clear = document.querySelector('.clear-btn');
const secondScreen = document.querySelector('.second-screen');
const screen = document.querySelector('#screen');
// const operatorsScreen = document.querySelector('.operators-screen');
const equal = document.querySelector('.equal');
const historyBtn = document.querySelector('.history-btn');
const coloseBtn = document.querySelector('.close-panel-btn');
const HistoryPanel = document.querySelector('.history-panel'); 
const getItems = document.querySelectorAll('.item');
getNumbers.map(e=>{
    e.addEventListener('click', ()=>{
        screen.value += e.textContent;
    });
});
operators.forEach((e)=>{
    e.addEventListener('click', ()=>{
        screen.value += e.textContent
    })
})

// equal

function total() {
   parseFloat(secondScreen.textContent = screen.value);
    screen.value = secondScreen.textContent;
}

equal.addEventListener('click', total)

// document.addEventListener('keydown', (event)=>{
//     if(event.key === 'Enter'){
//     console.log('hooray')
//     }
// })

// Function to set input filter
function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
      textbox.addEventListener(event, function(e) {
        if (inputFilter(this.value)) {
          // Accepted value
          if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
            this.classList.remove("input-error");
            this.setCustomValidity("");
          }
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          // Rejected value: restore the previous one
          this.classList.add("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          // Rejected value: nothing to restore
          this.value = "";
        }
      });
    });
  }
  
  // Use the setInputFilter function to install an input filter
  setInputFilter(document.getElementById("screen"), function(value) {
    return /^-?\d*[.,]?\d*([+\-*/]\d*[.,]?\d*)*$/.test(value); // Allow digits and operators only, using a RegExp
  }, "لطفا عددی را وارد نمایید");
  

