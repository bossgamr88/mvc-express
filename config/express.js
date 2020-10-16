var express = require('express')
var morgan = require('morgan')
var compression = require('compression')
var bodyParser = require('body-parser')

module.exports = () => {
	var app = express()

	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'))
	}else{
		app.use(compression)
	}
	app.use(bodyParser.urlencoded({ // รองรับ application/x-www-form-urlencoded
		// true -> ประเภทอะไรก็ได้
		// false -> string กับ array 
		extended : true	

	}))
	app.use(bodyParser.json()) // รองรับ application/json

	
	app.set('views','./app/views')
	app.set('view engine','jade')  

	// เราต้อง โฟกัส เรื่อง ลำดับ การทำงานของ code ด้วย

	
	require('../app/routes/index.routes')(app)
	require('../app/routes/user.routes')(app)

	app.use(express.static('./public')) 
	return app
	
}
