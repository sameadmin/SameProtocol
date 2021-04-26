export function stateFormat(cellValue) {
  if (cellValue) {
    // return Number(cellValue)
    //   .toFixed(6)
    //   .replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => {
    //     return $1 + ",";
    //   })
    //   .replace(/\.$/, "");

      cellValue += "";
      if (!cellValue.includes(".")) cellValue += ".";
      return cellValue
          .replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => {
            return $1 + ",";
          })
          .replace(/\.$/, "");
  }else {
    return 0;
  }
}
