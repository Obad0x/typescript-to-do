import express from 'express';
import Tasks from '../Models/Tasks'
const router = express.Router();

console.log("loading customer route");


router.get('/', (req, res) => {
    res.send('Hello World!');
})


router.post('/create-tasks', async (req, res)=>{
    try{
    const {title, description} = req.body;
    if(!title || !description){
        return res.status(400).json({message: 'Please enter all fields'});
    }
    const task = new Tasks({title, description});
   const savedTask =  await task.save();
    res.json({message: 'Task saved successfully', savedTask});
}catch(err){
    console.log(err);
    res.status(500).json({message: 'Server error'});
}
} )


router.patch('/edit-tasks/:id',  async (req, res)=>{
    try{
        const {id} = req.params
        const { title, description} = req.body;
        if(!title || !description){
            return res.status(400).json({message: 'Please enter all fields'});
        }
        const task = await Tasks.findByIdAndUpdate(id, {title, description}, {new: true});
        res.json({message: 'Task updated successfully', task});

    }catch(err){
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }

})

export default router;