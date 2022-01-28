function makeTurn(field, player, index) {
  if (field[index] === 0) {
    field[index] = player === 1 ? 1 : -1;
    return true;
  }
  return false;
}