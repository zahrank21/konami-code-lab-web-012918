const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let idx = 0


function init(e){
document.body.addEventListener('keydown', function(e){
  const key = parseInt(e.detail || e.which);

  if (key === code[idx]){
    idx++;

    if (idx === code.length){
      alert("hurray!")
    }

  }else {
    idx = 0
  }
})}
