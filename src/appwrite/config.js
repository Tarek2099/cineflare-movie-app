import {Client} from 'appwrite';

const client = new Client();
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(projectId)

export default client;
