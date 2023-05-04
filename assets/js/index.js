const gameArea = document.getElementById("game-area");
const restart = document.getElementById("restart")
const liner = document.querySelector(".line")

function cells() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    const id = i;
    cell.classList.add("cells");
    gameArea.appendChild(cell);
    cell.setAttribute("id", id);
  }

  var cells = document.querySelectorAll(".cells");
  cells.forEach((element) => {
    element.style.height = "32%";
    element.style.width = "32%";
    element.style.backgroundColor = "#121212";
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
  });

  let x = [];
  let o = [];
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let line = true;
  let tie = false;

  function endGame() {
    cells.forEach((element) => {
      element.removeEventListener("click", play);

      
      
    });
  }
  

  function play() {
    if (line == true && !x.includes(this.id) && !o.includes(this.id)) {
      x.push(this.id);
      this.classList.add("X");
      this.innerHTML = "X";
      this.style.fontSize = "6rem";
      this.style.fontFamily = "Calibri";
      this.style.color = "red";
      this.style.cursor = "pointer";
      line = false;
      liner.innerHTML="O plays"
      liner.style.color="green"
    } else if (
      line == false &&
      !o.includes(this.id) &&
      !x.includes(this.id)
      
    ) {
      o.push(this.id);
      this.classList.add("O");
      this.innerHTML = "O";
      this.style.fontSize = "6rem";
      this.style.fontFamily = "Calibri";
      this.style.color = "green";
      this.style.cursor = "pointer";
      line = true;
      liner.innerHTML="X plays"
      liner.style.color="red"
    }

   

    for (let combination of winningCombinations) {
      if (combination.every((cellIndex) => x.includes(String(cellIndex)))) {
        tie = true;

        endGame();

        setTimeout(()=> {
          gameArea.innerHTML=""
          const end = document.createElement("div");
      end.classList.add("end");
      end.style.display="flex"
      end.style.justifyContent="center"
      end.style.alignItems="center"
      end.style.color="red"
      end.style.height="100%"
      end.style.width="100%"
      end.innerHTML="X Won!"
      end.style.fontSize = "6rem";
      end.style.fontFamily = "Calibri";
      gameArea.appendChild(end);
    }, 1000);
    liner.innerHTML=""
        
      } else if (
        combination.every((cellIndex) => o.includes(String(cellIndex)))
      ) {
        tie = true;

    setTimeout(() => {
      gameArea.innerHTML = "";
      const end = document.createElement("div");
      end.classList.add("end");
      end.style.display = "flex";
      end.style.justifyContent = "center";
      end.style.alignItems = "center";
      end.style.color = "green";
      end.style.height = "100%";
      end.style.width = "100%";
      end.innerHTML = "O Won!";
      end.style.fontSize = "6rem";
      end.style.fontFamily = "Calibri";
      gameArea.appendChild(end);
    }, 1000);
    
    liner.innerHTML=""
    
        endGame();
      }
    }
    
  

  if (x.length + o.length === 9 && !tie ) {
  
    
    tie = true;
    setTimeout(()=> {
      gameArea.innerHTML=""
      const end = document.createElement("div");
  end.classList.add("end")
  end.style.display="flex"
  end.style.justifyContent="center"
  end.style.alignItems="center"
  end.style.color="lightblue"
  end.style.height="100%"
  end.style.width="100%"
  end.innerHTML="Tied!"
  end.style.fontSize = "6rem";
  end.style.fontFamily = "Calibri";
  gameArea.appendChild(end);
}, 1000);
liner.innerHTML=""
    

    endGame();
  }
}

cells.forEach((element) => {
  element.addEventListener("click", play);
});
}

cells();

restart.addEventListener("click",()=>{
  gameArea.innerHTML="";
  cells();
  const newCells = document.querySelectorAll(".cells");
  newCells.forEach((element) => {
    element.style.height = "32%";
    element.style.width = "32%";
    element.style.backgroundColor = "#121212";
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
  });
});



