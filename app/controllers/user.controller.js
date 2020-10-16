exports.login = function(req,res){
	// console.log(req.body)
	// console.log('Email: ' + req.body.email)
	// console.log('Password: ' + req.body.password)

	// [3-15] การ validate ค่าจาก form
	// https://www.youtube.com/watch?v=xdzgFegXQhc&list=PLtM3znnbMbVXD0fygCTsblC2sLZvSPY8g&index=28


	// ... 
	// เช็คว่า ติก remember มารึป่าว คือ value จาก > index.jade (view)
	if (req.body.remember === 'remember') {
		req.session.remember = true // set ค่า ให้ cookie
		req.session.email = req.body.email; // ให้จำ email ไว้
		req.sessionOptions.maxAge = 60000 // ตั้งเวลา กำหนดอายุให้กับ session หน่วยเป็น millisecinds
		// 60000 = 60 วินาที
	}

	res.render('index',{ // -> index.jade (view)
		title : 'Logged in as ' + req.body.email, 
		isLoggedIn : true
	})
}

exports.logout = function(req,res){
	req.session = null
	res.render('index',{ // -> index.jade (view)
		title : 'See you again later', 
		isLoggedIn : false
	})
}