import { ID, Query } from "appwrite";
import { database } from "./config";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

export const updateSearchCount = async (searchTerm, movie) => {
    try {
        // 1. Use Appwrite SDK to check if the search term exists in the database
        const existingSearchTerm = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal("searchTerm", searchTerm)
        ]);

        // 2. If it does, update and increment the count
        if(existingSearchTerm.documents.length > 0){
            const document = existingSearchTerm.documents[0];
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, document.$id, {
                count: document.count + 1
            })
        } 
        // 3. If it doesn't, create a new document with the search term and set the count to 1
        else{
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                movie_id: movie.id
            })
        }
    } catch(error){
        console.log(error)
    }

};


// Fetch the trending movies from the database
export const getTrendingMovies = async () => {
    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc("count")
        ]);

        return result.documents;
    } catch(error) {
        console.log(error)
    }
}
