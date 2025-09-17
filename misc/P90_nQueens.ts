export function nQueens(n: number): number[][] {
  const board: number[][] = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(0);
    }
  }

  if (solve(0, board, n)) {
    display(board);
    return board;
  } else {
    console.log("no solution for N=", n);
    return board;
  }
}

// return whether we can place a safe queen on that row
export function solve(row: number, board: number[][], n: number): boolean {
  if (row === n) return true;

  for (let column = 0; column < n; column++) {
    if (isSafe(row, column, board)) {
      board[row][column] = 1;

      if (solve(row + 1, board, n)) {
        return true;
      }

      board[row][column] = 0;
    }
  }

  return false;
}

export function display(board: number[][]): void {
  let str = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      str += board[i][j] === 0 ? "o " : "x ";
    }
    str += "\n";
  }
  console.log(str);
}

export function isSafe(i: number, j: number, board: number[][]): boolean {
  const max_i = board.length;
  const max_j = board[0].length;

  // check column
  for (let a = 0; a < max_i; a++) {
    if (board[a][j] !== 0) return false;
  }

  // check row
  for (let b = 0; b < max_j; b++) {
    if (board[i][b] !== 0) return false;
  }

  // top left diag
  let c = i - 1,
    d = j - 1;
  while (c >= 0 && d >= 0) {
    if (board[c][d] !== 0) return false;
    c--;
    d--;
  }

  // bottom right diag
  (c = i + 1), (d = j + 1);
  while (c < max_i && d < max_j) {
    if (board[c][d] !== 0) return false;
    c++;
    d++;
  }

  // bottom left diag
  (c = i + 1), (d = j - 1);
  while (c < max_i && d >= 0) {
    if (board[c][d] !== 0) return false;
    c++;
    d--;
  }

  // top right diag
  (c = i - 1), (d = j + 1);
  while (c >= 0 && d < max_j) {
    if (board[c][d] !== 0) return false;
    c--;
    d++;
  }

  return true;
}

nQueens(8);
