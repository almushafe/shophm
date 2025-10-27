'use server';
import main from "../../../lib/connectDB";
import { ObjectId } from "mongodb";

export const deleteFnction = async (id) => {
    try{
        const db = await main()
        const colProduct = db.collection('Product')
        const objectId = new ObjectId(id);
        await colProduct.deleteOne({_id:objectId})
        console.log("Deleted");
        

    }catch(error){
        console.log("Error");
        
    }
}