/*
Vitórias horizontais
  1 2 3
  4 5 6
  7 8 9

Vitórias verticais
  1 4 7
  2 5 8
  3 6 9

  Vitórias diagonais
  1 5 9
  3 5 7

*/

let btn = document.getElementsByTagName('button')

function allBtn(){
  for(let i in btn){
    btn[i].addEventListener('click', function(){
      btn[i].innerText = 'X'

    })
  }
}

allBtn()