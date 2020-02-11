// 引入fs模块
const fs = require("fs")
  // 引入路径模块
const path = require("path")
  // 消除魔术数
const DATA_FILE = "message.json"

// 拼接绝对路径 join方法
let filePath = path.join(__dirname, DATA_FILE)


show = () => {
  // 读文件
  // let rs = fs.readFileSync("./message.json", "utf8")
  // 修改路径
  let rs = fs.readFileSync(filePath, "utf8")
    // 将取回的json格式转为js格式
  let arr = JSON.parse(rs)
  return arr
}

del = id => {
  let arr = show()
    // console.log(rs);
    // 数组中找到下标为id的值 arr.findIndex方法 返回值是所比对的数组的下标
  let idx = arr.findIndex(item => item.id == id)
    // console.log(idx);
    // 从数组下标为idx的值开始删除，删除一个
  arr.splice(idx, 1)
  fs.writeFileSync(filePath, JSON.stringify(arr))
  console.log(arr);
}
let rs = del(3)
  // console.log(rs);