import { useContext, useEffect } from "react"
import { AuthContext } from "../context/Authcontext"
import { useNavigate } from "react-router"
import "../loading.css"

const PriveteRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const navigate = useNavigate()


    console.log(user?.email);



    if (loading) {
        return <div className="flex justify-center min-h-[500px] items-center">
           
            <div className="loader">
                <div className="box box0">
                    <div></div>
                </div>
                <div className="box box1">
                    <div></div>
                </div>
                <div className="box box2">
                    <div></div>
                </div>
                <div className="box box3">
                    <div></div>
                </div>
                <div className="box box4">
                    <div></div>
                </div>
                <div className="box box5">
                    <div></div>
                </div>
                <div className="box box6">
                    <div></div>
                </div>
                <div className="box box7">
                    <div></div>
                </div>
                <div className="ground">
                    <div></div>
                </div>
            </div>
        </div>
    }



    if (!user.email) {
        return navigate("/login")
    }




    return <>{children} </>
}


export default PriveteRoute