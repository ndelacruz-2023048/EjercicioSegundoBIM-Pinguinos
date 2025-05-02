import { create } from "zustand";

export const useRandomPasswordStore = create((set,get)=>({
    passwordrandom:null,
    fetchPasswordRandom:async(p)=>{
        try {
            const request = await fetch("http://localhost:4000/v1/generate",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(p)
            })
            console.log(request);
            
            const response = await request.json()
            set({passwordrandom:response})
            return response
        } catch (error) {
            console.error(error)
        }
    }
}))