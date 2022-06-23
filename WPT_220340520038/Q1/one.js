
const express = require('express');
const app = express();
app.use(express.static('sf'));

const no=require('mysql2');

let para={

        host: 'localhost',
        user: 'root',
        password: 'cdac',
        database: 'khamgaon',
        port:3306
    
}

let con=no.createConnection(para);

app.get("/addbook",(req,res)=>{
   
    let input={Book_id:req.query.Book_id,BookNmae:req.query.BookName,price:req.query.price,}
    let output={status:false};
     con.query('insert into book values(?,?,?)',[input.Book_id,input.BookName,input.price,],
     (err,data)=>{
         if(err){
             console.log("book was not added ")
         }
         else{
             if(data.affecteRows>0){
                 output.status=true;
                console.log(rows[0]);
                output.addbook=r0ws[0];  
             }
         }
         res.send(output);
     })
})

app.get("/addbook",(req,res)=>{
    let x=req.query.Book_id;
    let output= {status1:false,addbook:{Book_id,BookName:"",price:0}}

    con.query('select BookName from book where book_id=?',[Book_id],
    (err,data)=>{
        if(err){
            console.log("book was not added ")
        }
        else{
            if(data.affecteRows>0){
                output.status1=true;
               console.log(rows[0]);
               output.addbook=r0ws[0];  
            }
        }
        res.send(output);
    })

})



app.listen(1999,()=>{
    console.log("server is running")  ;

})