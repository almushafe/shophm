"use server";

import main from "../../../lib/connectDB";

import { ObjectId } from "mongodb";

export const UbdateFunction = async (formData) => {
    try{
        const { id, title, price } = Object.fromEntries(formData.entries());
        const db = await  main()
        const Ps = db.collection('Product')
        await Ps.updateOne({_id: new ObjectId(id)},{$set:{title:title,price:price}})

    }catch(error){
        console.log(error);
        throw new Error("Not Update "+ error.message)
    }
    
}