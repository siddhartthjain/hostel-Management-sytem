import Student from "../models/student.js"

export const getstudents = async (req,res)=>
{
    try {
        const allstudents= await Student.find();
        res.status(200).json(allstudents);
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}

export const createstudent= async (req,res)=>
{
    const astudent=req.body;

    const newstudent =new Student(astudent);
    try {
         await newstudent.save();
         res.status(201).json(newstudent);
    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
}

export const deletestudent= async(req,res)=>
{
   const id= req.params.id;
   try {
       await Student.findByIdAndRemove(id).exec();
       res.send("deleted succesfully");
    
   } catch (error) {
    console.log(err);
    
   }

}
