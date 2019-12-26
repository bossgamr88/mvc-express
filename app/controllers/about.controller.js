exports.render = (req,res) =>{
   	res.render('about',{
		'title' : 'Hello World',
		'message' : 'How are things'
	})
}