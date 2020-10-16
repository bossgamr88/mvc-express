exports.render = (req,res) => {

	var isLoggedIn = false 


	// req.session คือค่า name ใน express ที่ set ไว้ name : 'session'
	if (typeof req.session.remember !== 'undefined') {
		isLoggedIn = req.session.remember // คือ ค่า cookie ของ remember
	}


	res.render('index',{
		'title' : 'Hello World',
		'message' : 'How are things',
		isLoggedIn : isLoggedIn // // คือ ค่า cookie ของ remember จาก > index.jade (view)
	})
}

