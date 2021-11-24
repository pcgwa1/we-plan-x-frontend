import layoutConfig from "./gridLayoutConfig";
// import FirebaseAuthService from "../../../services/firebase/firebaseAuthService";


const initialState = {
    data: [
        {
            company: "We Plan X",
            id: 1,
            appImage: "/assets/images/apps/workflow.png",
            appName: "Plan X",
            description: 'Planning app',
            type: 'plan_x'
        },
        {
            company: "We Plan X",
            id: 2,
            appImage: "/assets/images/apps/notes.png",
            appName: "Note X",
            description: 'Note app',
            type: 'note_x'
        },
        {
            company: "We Plan X",
            id: 3,
            appImage: "/assets/images/apps/chat.png",
            appName: "Chat X",
            description: 'Chat app',
            type: 'chat_x'
        },
        {
            company: "We Plan X",
            id: 4,
            appImage: "/assets/images/apps/note.png",
            appName: "Task X",
            description: 'Task app',
            type: 'task_x'
        }
    ],
    layouts: layoutConfig,
    breakpoint: "lg"
};

export default initialState;
