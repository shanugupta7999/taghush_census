const express=require('express');
const app=express();
const cors=require('cors')
const PORT=4400;
const mysql=require('mysql')

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'census'
});

con.connect((e)=>{
    if(e)alert(e);
    console.log("connected")
})
app.use(cors());
app.use(express.json({extended:true}))
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.get('/getdata',(req,res)=>{

    const query='SELECT * FROM DETAILS';
    con.query(query,(err,result)=>{
        if(err){
            res.send(500).json({error:'Error excuting query'});
            return;
        }
        res.json(result);
    })
})
app.post('/submit',(req,res)=>
{
    const { fname, lname, dob, gender, status } = req.body;
    con.query(
        "INSERT INTO DETAILS (fname, lname, dob, gender, status) VALUES (?, ?, ?, ?, ?)",
        [fname, lname, dob, gender, status],
        (error, results, fields) => {
          if (error) {
            console.error('Error inserting data:', error);
            res.status(500).json({ error: 'Failed to insert data into the database' });
          } else {
            console.log('Data inserted successfully');
            res.json({ message: 'Data inserted successfully' });
          }
        }
      );
})
app.listen(PORT,()=>{
    console.log(`SERVER RUNS AT ${PORT}`);
})


