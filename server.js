// 4.สร้าง application เรียกใช้ config 

// set stattic env. = check ถ้าไม่เคย set อะไร default ให้เป็น NODE_ENV หรือ development
                        // ถ้าเคย set เเล้ว run ใหม่ไม่กำหนด NODE_ENV จะ error  
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const express = require('./config/express')
const app = express()
const port = 8900



app.listen(port,()=> console.log(`Server On ${port}`))


/*
สรุป ขั้นตอนการสร้าง MVC 
 1. สร้าง routes ไปเรียก controller ของ ฟีเจอร์
 2. สร้าง controller ของ ฟีเจอร์ที่ต้องการ
 3. สร้าง config เพื่อสร้าง express instance เเละส่งค่าให้ routes
 4. สร้าง application เรียกใช้ config 

*/