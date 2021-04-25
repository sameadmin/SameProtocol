export function stateFormat(cellValue) {
  if (cellValue) {
    // 保留两位小数
    /*return Number(cellValue)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => {
        return $1 + ",";
      })
      .replace(/\.$/, "");*/
    return cellValue.toString().replace(/(\d)(?=(?:\d{3})+$)/g,'$1,')
  }
}
