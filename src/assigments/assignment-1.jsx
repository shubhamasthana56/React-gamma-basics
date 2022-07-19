import { useEffect, useState } from "react"

function Assignment1() {
    const [user, setUser] = useState("");
    useEffect(()=> {
        //Item1 //Item2
        getUserData(user).then((userData)=> {
            console.log(userData);
        })
    }, [user])
    const getUserData = (user)=> {
        const data = {
            admin: "Data for Admin",
            read: "Read user",
            normal: "Normal user"
        }
        return new Promise((resolve)=> {
            setTimeout(()=> {
                resolve(data[user])
            }, 100)
        })
    }
    return(
        <div>
            <button onClick={()=> {setUser("admin")}}>Admin</button>
            <button onClick={()=> {setUser("read")}}>Read</button>
            <button onClick={()=>{setUser("normal")}}>Normal</button>
        </div>
    )
}
export default Assignment1