const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');



ctx.canvas.width = cols *block_size;
ctx.canvas.height = rows * block_size;

ctx.scale(block_size, block_size);

let board = new Board();

//scale 가로 세로 값을 지정하여 canvas 요소의 단위에 크기 조정 변환을 추가한다

function play() {
    board.reset();
    let piece = new Piece(ctx);
    piece.draw();
    
    board.piece = piece;
  }

 moves = {
      [KEY.SPACE]: p => ({...p, y: p.y + 1}), 
      [KEY.LEFT]: p => ({...p, x: p.x - 1}),
      [KEY.RIGHT]: p => ({...p, x: p.x + 1}),
      [KEY.DOWN]: p => ({...p, y: p.y + 1}),
      [KEY.UP]: p => board.rotate(p)
  };

  document.addEventListener('keydown', event => {
    if(moves[event.keyCode]){
        event.preventDefault();

        let p = moves[event.keyCode](board.piece);

        if (board.valid(p)) {    
            board.piece.move(p);
            
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
            
            board.piece.draw();
          }
    }
  });