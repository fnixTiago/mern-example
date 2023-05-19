import Project from "../models/Project.js";
import Task from "../models/Task.js";


export const resolvers = {
    Query: {
        hello: () => "hello world",
        projects: async () => await Project.find(),
        project: async (_, { _id }) => await Project.findById(_id),
        tasks: async () => await Task.find(),
        task: async (_, { _id }) => await Task.findById(_id),
    },
    Mutation: {
        createdProject: async (_, { name, description }) => {
            const project = new Project({
                name, description
            })
            const saveProject = await project.save()
            return saveProject;
        },
        deleteProject: async (_, { _id }) => {
            const deletedProject = await Project.findByIdAndDelete(_id);
            if (!deletedProject) throw new Error("Project not found");
            return deletedProject;
        },
        updateProject: async (_, args) => {
            const updatedProject = await Project.findByIdAndUpdate(
                args._id,
                args,
                { new: true }
            );
            if (!updatedProject) throw new Error("Project not found");
            return updatedProject;
        },
        createdTask: async (_, { title, projectId }) => {
            const projectFound = await Project.findById(projectId)
            if (!projectFound) {
                throw new Error("Project id not found");
            }
            const task = new Task({
                title,
                projectId
            })
            const taskSaved = await task.save()
            return taskSaved;
        },
        deleteTask: async (_, { _id }) => {
            const deletedTask = await Task.findByIdAndDelete(_id);
            if (!deletedTask) throw new Error("Task not found");
            return deletedTask;
        },
        updateTask: async (_, args) => {
            const updatedTask = await Task.findByIdAndUpdate(args._id, args, {
                new: true,
            });
            if (!updatedTask) throw new Error("Task not found");
            return updatedTask;
        }
    },
    Project: {
        tasks: async (parent) => {
            return await Task.find({ projectId: parent._id });
        }
    },
    Task: {
        project: async (parent) => {
            return await Project.findById(parent.projectId)
        }
    }
}