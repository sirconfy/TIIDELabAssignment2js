const chessBoard = (size) => {
  // empty string to push my output
  let result = "";

  //looping for rows
  for (let i = 1; i <= size; i++) {
    // looping for column
    for (let j = 1; j <= size; j++) {
      // to check if the sum  of the size is even in the if els statment
      // and if yes let it put space
      // else let it not space but put hash

      if ((i + j) % 2 == 0) {
        result += " ";
      } else {
        result += "#";
      }
    }

    // to add a new line after each size iteration
    result += "\n";
  }

  // it prints the output in the console
  console.log(result);
};

chessBoard(8);
