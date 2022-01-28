class Board{
    gird;

    //새 게임이 시작되면 보드를 초기화한다.
    reset(){
        this.grid = this.getEmptyBoard();
    }

    //0으로 채워진 행렬을 얻는다
    getEmptyBoard(){
        return Array.from(
            {length: rows}, () => Array(cols).fill(0)
        );
    }

    valid(p){
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x + dx;
                let y = p.y + dy;

                return (
                    value === 0 ||
                    (this.insideWalls(x, y) &&
                    this.notOccupied(x, y))
                    );
            });
        });
    }

    insideWalls(x,y){
        return x >= 0 && x < cols && y <= rows;
    }

    notOccupied(x, y) {
        return this.grid[y] && this.grid[y][x] === 0;
    }

    rotate(p){
        let p = JSON.parse(JSON.stringify(piece));

        if(!piece.hardDropped){

        
            for (let y = 0; y <p.shape.length; ++y){
                for(let x = 0; x < y; ++x){
                    [p.shape[x][y]], p.shape[y][x] = 
                    [p.shape[y][x], p.shape[x][y]];
                }
            }

        }

        p.shape.forEach(row => row.reverse());

        
    }

}
