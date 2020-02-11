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


add = (name, content) => {
  // 先获取数组
  let arr = show()
    // 数组 [数组下标值-1=最后一位].里面的id的数值 +1
    // 做个判断是否为空，为空是1，不为空依次往上加
  let id = arr.length ? (arr[arr.length - 1].id + 1) : 1
    // let id = arr[arr.lengtn - 1].id + 1
  let obj = {
    id,
    name,
    content,
    dt: Date.now()
  }
  arr.push(obj)
    // 数组转为字符串格式才能写入
  fs.writeFileSync(filePath, JSON.stringify(arr))
    // console.log(arr);
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


module.exports = {
  "show": show,
  "add": add,
  "del": del
}