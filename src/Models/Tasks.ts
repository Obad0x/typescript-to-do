import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema<Task>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
            default : false
    }
}, {timestamps : true});

// interface for task type
interface Task {
    title: string;
    description: string;
    status: boolean;
}

export default mongoose.model<Task>("Task", TaskSchema);