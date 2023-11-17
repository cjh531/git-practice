let shoppingList = [
  "移动硬盘",
  "4090显卡",
  "按摩仪",
  "爱奇艺会员",
  "Niz 键盘",
  "外星人电脑",
  "女装(偷偷)",
  "水杯"
]

function buy(list, goods) {
  return goods && list.includes(goods) ? list.filter(v => v != goods) : "No buy"
}

let newShoppingList = buy(shoppingList, "Niz 键盘");
console.log(newShoppingList);