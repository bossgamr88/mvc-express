// 2. สร้าง controller ของ ฟีเจอร์ที่ต้องการ
exports.render = (req,res) => {
	// res.send('Hello World') // สร้าง method ให้ require ใน routes ใช้งาน
	res.render('index',{
		'title' : 'Hello World',
		'message' : 'How are things'
	})
}

/*
 Note : 
 res.render(view,[locals],callback)
 - เรนเดอร์ view เเละส่ง HTML response

 เป็นคำสั่ง render บอกว่าให้ไป ทำ view template จากที่ไหน
 
 res.render(index,{ (callback key:value)
	...
 }) 
 argument เเรก ให้ไปเอา view ที่ชื่อว่า index 

 **(ทำ config ไว้เเล้ว) อะไรก็ตามที่ มาจากคำสั่ง  res.render มันจะไปอยู่ใน app/views
  นามสกุลไฟล์ไม่ต้องใส่ ก็ได้ node.js มันฉลาดพอ 
  เพราะว่า เรา set template engine ไว้เป็น jade ก่อนเเล้ว มันก็จะไปหา 
  ไฟล์ที่ชื่อว่า index.jade ในไฟล์ app/view ให้

*/
