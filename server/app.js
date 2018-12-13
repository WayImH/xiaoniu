// npm install koa koa-body koa2-cors koa-router --save
//引用koa返回一个Koa的构造函数，这个构造函数用来实例化一个服务器对象
var Koa = require("koa");
//app就是一个服务器对象 （现在一个服务器就创建好了）
var Router = require("koa-router")
var cors = require("koa2-cors")
var body =require("koa-body")
var static1 = require("koa-static")
//会先把./mongo/index.js中的代码都执一次，然后
//把一些内容导出
var {user,goods,order,fav} = require("./mongo")
var app = new Koa();

app.use(cors())
app.use(body())
app.use(static1("./src"))
//404,  前端有一个特定的请求地址 /reg
//那么我的http服务器也做一个特定的接口/reg
//来接收 这次特定的请求，之后按前端的要求做一些事
//然后把做完的结果告诉给前端
var router = new Router();
router.post("/reg",(ctx,next)=>{
	//要做的事，写在这里
	//什么也不做，也需要向前端回应一声，这样才算是一次
	//服务器与浏览器正常 的（会话）
	//1.先收到前端网页发过来的post请求中的数据
	console.log(ctx.request.body)
	//2.要把这个拿到的数据写到数据库中
	//首先 数据库的一个表对象，要拿到
	//就可以用这个表对象，来往数据库中写入数据
	//3.在user表中 创建一行数据
	var oneData = new user(ctx.request.body)
	//4.写入到数据表
	oneData.save()
	ctx.body = "注册成功"
})

router.post("/testUser",async (ctx,next)=>{
	//1.拿到前端发来的数据
	console.log(ctx.request.body)//{ userName: 'xiaoming' }
	//2.把user表对象找到，用这个user表对象的查找方法
	//findOne()方法，就是在数据库表中找一条满足条件的数据
	var res = await user.findOne(ctx.request.body)
	//res就是能找到的数据。找不到会返回空null
	//如果报错了，res就拿不到任何东西，默认值undefined
	//3.判断一下res中有不有值，如果有值，说明那个用户名被占用了
	//如果没有值，就说明你现在的这个用户用可以用
	if(res){
		ctx.body = {
			code:0,
			msg:"被占用"
		}
	}else{
		ctx.body = {
			code:1,
			msg:"可用"
		}
	}
	
})


router.post("/login",async (ctx,next)=>{
	//1.数据拿到
	var webData = ctx.request.body; 
	//webData = {userName:"?",pwd:"?"}
	//2.在数据表中找 有没有一条的userName就等于这次前端发来的userName
	var res = await user.findOne({userName:webData.userName})
	//res如果找到有，就是找到的那条完整数据
	//res = {userName:"?",pwd:"?",_id:"?",phone:"?",__v:"?"}
	//res如果 没找到数据，返回Null,说明 没有这个账号
	if(res){
		if(res.pwd == webData.pwd){
			ctx.body = {
				code:1,
				msg:"登录成功"
			}
		}else{
			ctx.body ={
				code:2,
				msg:"密码错误"
			}
		}
	}else{
		ctx.body ={
			code:0,
			msg:"用户名不存在"
		}
	}
})


router.get("/goods",async (ctx,next)=>{
	//要做什么？
	//要在数据库中的goods表中找到所有的数据
	//然后只返回所有数据中的 _id字段和图片字段
	var res = await goods.find({},{goodsImg:true})
	ctx.body = res
})

router.get("/detail",async (ctx,next)=>{
	//要做什么？
	//指定：根据前端传过来的id
	console.log(ctx.query.id) //5baf432e08dabc2cac61c509
	//要在数据库中的goods表中找到指定的数据
	var res = await goods.findOne({_id:ctx.query.id})
	ctx.body = res
})

router.post("/order",async (ctx,next)=>{
	//1把前端发来的 post 订单 数据拿到 
	var web = ctx.request.body;
	
	var oneGoods = await order.findOne({goodsName:web.goodsName,userName:web.userName})
	//在数据表中有找到 相同的 数据，oneGoods就是我找到的信息
	if(oneGoods){
		//要把前端 数据中  的 web, web.goodsCount
		//我在数据表中找到的 oneGoods, oneGoods.goodsCount
		oneGoods.goodsCount += web.goodsCount;
		
		await order.update({_id:oneGoods._id},oneGoods)
		ctx.body = "完成了"
	}else{
		//2.把拿到的数据 写到 数据库的订单表中
		//3.创建一条数据,在数据表中实例化一行数据
		var oneData = new order(web)
		//4.写入到数据表中
		await oneData.save()
		//5.可以告诉前端，完成了
		ctx.body = "完成了"
	}
	
	
})

router.get("/order",async (ctx,next)=>{
	//1 get请求中的 查询字符串
	console.log(ctx.query.userName) //小虎
	//2. 就到 订单表中 找 用户用 是 小虎的 数据
	var res = await order.find({userName:ctx.query.userName})
	ctx.body = res
})


router.post("/fav",async (ctx,next)=>{
	var web = ctx.request.body;
	
	var oneData = new fav(web);
	await oneData.save()
	
	ctx.body = "完成了"
})

router.post("/rmFav",async (ctx,next)=>{
	var web = ctx.request.body;
	await fav.remove(web)
	ctx.body = "完成了"
})

router.post("/testFav",async (ctx,next)=>{
	var web = ctx.request.body;
	var res = await fav.findOne(web)
	if(res){
		ctx.body = "已收藏"
	}else{
		ctx.body = "加入收藏"
	}
	
})

router.get("/fav",async (ctx,next)=>{
	var web = ctx.query.userName; // 小明
	var res = await fav.find({userName:web},{goodsId:1,_id:0})
	// res = [{goodsId: "5baf432e08dabc2cac61c507"},{goodsId: "5baf432e08dabc2cac61c509"}]
	var list = []

	for(item of res){
		var data = await goods.findOne({_id:item.goodsId})
		list.push(data)
	}

	ctx.body = list
})

//路由也是中间件，在koa中所有东西都是中间件
//写好的路由还需要挂在 中间件上
app.use(router.routes())

//还需要给这个服务器分配一个地址及端口，外界（前端）就能照着这个地址及端口来访问服务器
app.listen(3001,function(err){
	console.log("http服务器运行在了3001端口")
})
