import { Client, Databases } from 'appwrite';


const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

// Make a new client instance for our Appwrite server
export const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(projectId)

// Make a new database instance for our Appwrite server
export const database = new Databases(client);

