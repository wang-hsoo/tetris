const cols = 10;
const rows = 20;
const block_size = 30;

//플레잉 보드는 10개의 열과 20개의 행으로 구성

const KEY = {
    SPACE: 32, 
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
    UP: 38
}

Object.freeze(KEY);
//Object.freeze() 메서드는 개체를 제거합니다. 오브젝트는 더 이상 변경될 수 없습니다.
