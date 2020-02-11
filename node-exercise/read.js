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
let rs = show()
console.log(rs);