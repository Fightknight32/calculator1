const buttons = document.getElementsByClassName("buttons");

const input = document.getElementsByClassName("input");

for (let i = 0; i < buttons[0].children.length; i++) {
  buttons[0].children[i].addEventListener("mouseover", () => {
    buttons[0].children[i].style.color = "white";
    buttons[0].children[i].style.background = "grey";
  });

  buttons[0].children[i].addEventListener("mouseout", () => {
    buttons[0].children[i].style.color = "black";
    buttons[0].children[i].style.background = "white";
  });


// console.log(buttons[0].children[1]);

buttons[0].children[i].addEventListener("click", () => {
  if(i==0) {
    input[0].textContent = ''
  }
  else if(i==1) {
    let a = input[0].textContent.split("")
    a.pop()
    input[0].textContent = a.join("")
  }
  else if(i>2 && i<17) {
    input[0].textContent += buttons[0].children[i].textContent
  }
  else if (i==17) {
    input[0].textContent += '*'
  }
  else {
    comp()
  }
  
});
  
}
input[0].addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    comp()
    console.log(input[0].textContent)
  }
})

function comp() {
  try {
    input[0].textContent = eval(input[0].textContent)
    }
    catch(err) {
      console.log(err.message)
      input[0].style.color = 'grey'
      setTimeout(()=>{input[0].style.color = 'black'}, 500)
    }
}
