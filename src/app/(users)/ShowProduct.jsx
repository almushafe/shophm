'use server';

import main from "../../../lib/connectDB";

export const showProduct = async () =>{
    try{
        const db = await main();
        const ProductsCol = db.collection('Product'); 
        const data = await ProductsCol.find().toArray();
        if (data.length  > 0){
            console.log("This Data :", data);
            return { success: true, message:"Done Work", data };
            
        }
        return data

    }catch(error){
        console.log("NAhi Mila",error)
        return {sucsess:false ,message:"Not Found "}
    }
}
