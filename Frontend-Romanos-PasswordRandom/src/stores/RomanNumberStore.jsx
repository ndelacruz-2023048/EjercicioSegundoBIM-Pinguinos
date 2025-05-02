import { create } from "zustand";

export const useRomanNumberStore = create((set,get)=>({
    numberRoman:"",
    fetchNumberRoman:async(p)=>{
        const request =await fetch("http://localhost:3605/v1/app/numbersromans",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(p)
        })
        const response = await request.json()
        set({numberRoman:response})
        return response
    }
}))