// express = require("express"); 
// app = express(); 
// port = 3000 

// Student = require('./database.js') 

// app.listen(port,()=>{ 
//     console.log(`Running on ${port}`); 
// }); 
 
// app.set("view engine","ejs"); 
// app.use(express.json()); 
// app.use(express.urlencoded({ extended: true })); 
 
// app.get('/',async(req,res)=>{ 
//     students = await Student.find() 
//     res.render("index.ejs",{ 
//         page:"CRUD  with  NodeJS and MongoDB - Home Page" , 
//         title : "Dashboard", 
//         students:students}); 
// }); 
 
 
// app.post("/register",async(req,res)=>{ 
//     const {name , mail , age} = req.body; 
//     newStudent = new Student({ 
//         name , mail , age 
//     }); 
 
//     studentsave = await newStudent.save(); 
//     res.redirect("/"); 
 
// }); 
 
// app.get("/register",(req,res)=>{ 
//     res.render("register") 
// })

// app.get('/delete/:id',async(req,res)=>{
//     // const {id}=req.params;
//     // delelteStudent  = await Student.findByIdAndDelete({_id:id});
//     deleteStudent = await Student.findByIdAndDelete(req.params.id);
//     res.redirect('/') 
// })
// app.get('/edit/:id',async(req,res)=>{
//     id = req.params.id;
//     editStudent = await Student.findById({_id:id});
//     if(editStudent == null){res.redirect('/')}
//     else{res.render('edit'),({students:editStudent})}
//     res.render('edit.ejs')
// })


// app.post("/update/:id",async(req,res)=>{
//     id = req.params.id;
//     const { name ,mail , age} = req.body;
//     updateStudent = await Student.findByIdAndUpdate({_id:id},{
//         name,mail,age
//     },{new:true});
//     res.redirect('/')
// })

const express = require("express");
const app = express();
const port = 3000;

const Student = require('./database.js');

app.listen(port, () => {
    console.log(`Running on ${port}`);
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.render("index.ejs", {
            page: "CRUD with NodeJS and MongoDB - Home Page",
            title: "Dashboard",
            students: students
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error879");
    }
});

app.post("/register", async (req, res) => {
    try {
        const { name, mail, age } = req.body;
        const newStudent = new Student({
            name,
            mail,
            age
        });

        const savedStudent = await newStudent.save();
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error0");
    }
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get('/delete/:id', async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error1");
    }
});

app.get('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const editStudent = await Student.findById({_id:id});
        if (editStudent == null) {
            res.redirect('/');
        } else {
            res.render('edit.ejs', { students: editStudent });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error2");
    }
});

app.post("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { name, mail, age } = req.body;
        const updateStudent = await Student.findByIdAndUpdate({_id:
            id},
            { name, mail, age },
            { new: true }
        );
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error3");
    }
});
