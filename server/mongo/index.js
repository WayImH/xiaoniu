//在这里来连接和操作mongodb数据库
//在node中 要连接mongodb数据库需要用到一个第三方的模块
//叫mongoose.
//1.下载mongoose: npm install mongoose --save
//2.引用： 
var mongo = require("mongoose")
//3.用mongo对象调用一个connect（连接）的方法来连接
//在连接前，需要确保 mongodb是启动的状态，它启动时会
//运行在 127.0.0.1：27017,然后我们才可以连接这个地址
//如何启动mongodb: mongod --dbpath=D:\mongo\data
mongo.connect("mongodb://127.0.0.1:27017/xiaoniu",function(err){
	if(!err){
		console.log("数据库连接成功")
	}
})

//表规则
var gz = mongo.Schema({
	userName:String,
	pwd:String,
	pwds:String,
	phone:Number
})

//创建 或 连接  一张表
//user就是 表对象
var user = mongo.model("user",gz)

//创建商品表
var goodsGz = mongo.Schema({
	goodsName:String,
	goodsType:Number,
	goodsImg:String,
	goodsColor:String,
	goodsInfo:String,
	goodsPrice:Number,
	goodsNum:Number
})
var goods = mongo.model("goods",goodsGz)

//要在这个goods的空表中 创建出4条数据
var mockData=[
	{
		goodsName:"N1s城市版",
		goodsType:1,
		goodsImg:"http://47.106.175.186:3001/img/n1s01.jpg",
		goodsColor:"白色",
		goodsInfo:"M1都市版是xxxxM1都市版是M1都市版是M1都市版是M1都市版是M1都市版是",
		goodsPrice:5899,
		goodsNum:1253
	},
	{
		goodsName:"N222s城市版",
		goodsType:1,
		goodsImg:"http://47.106.175.186:3001/img/n1s02.jpg",
		goodsColor:"红色",
		goodsInfo:"M1都市版是xxxxM1都市版是M1都市版是M1都市版是M1都市版是M1都市版是",
		goodsPrice:1234,
		goodsNum:98
	},
	{
		goodsName:"N3333s城市版",
		goodsType:1,
		goodsImg:"http://47.106.175.186:3001/img/n1s03.jpg",
		goodsColor:"蓝色",
		goodsInfo:"M1都市版是xxxxM1都市版是M1都市版是M1都市版是M1都市版是M1都市版是",
		goodsPrice:765,
		goodsNum:34
	},
	{
		goodsName:"N444s城市版",
		goodsType:1,
		goodsImg:"http://47.106.175.186:3001/img/n1s04.jpg",
		goodsColor:"蓝白色",
		goodsInfo:"M1都市版是xxxxM1都市版是M1都市版是M1都市版是M1都市版是M1都市版是",
		goodsPrice:983,
		goodsNum:111
	}
]
//把 模拟出来的数组，把数组中的每一项 写到 goods表中
//mockData.forEach(function(item){
//	goods.create(item)
//})

//创建一个订单表
var orderSchema = mongo.Schema({
	userName:String,
	goodsName:String,
	goodsColor:String,
	goodsCount:Number,
	goodsPrice:Number,
	createTime:Date
})
var order = mongo.model("order",orderSchema)

var favGZ = mongo.Schema({
	userName:String,
	goodsId:String
})
var fav = mongo.model("fav",favGZ)

//导出 表对象
module.exports = {
	user,goods,order,fav
}
