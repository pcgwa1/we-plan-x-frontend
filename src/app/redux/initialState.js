import layoutConfig from "./gridLayoutConfig";
// import FirebaseAuthService from "../../../services/firebase/firebaseAuthService";


const initialState = {
    data: {
        block1: {
            id: 1,
            appImage: "/assets/images/apps/workflow.png",
            appName: "Plan X",
            description: 'Planning app',
            type: 'plan_x'
        },
        block2: {
            company: "We Plan X",
            id: 2,
            appImage: "/assets/images/apps/notes.png",
            appName: "Note X",
            description: 'Note app',
            type: 'note_x'
        },
        block3: {
            company: "We Plan X",
            id: 3,
            appImage: "/assets/images/apps/chat.png",
            appName: "Chat X",
            description: 'Chat app',
            type: 'chat_x'
        },
        block4: {
            company: "We Plan X",
            id: 4,
            appImage: "/assets/images/apps/note.png",
            appName: "block 4",
            description: 'Task app',
            type: 'task_x'
        }
    },
    layouts: layoutConfig,
    breakpoint: "lg"
};

export default initialState;
