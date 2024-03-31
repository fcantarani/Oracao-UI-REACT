import { useState } from "react"
import { AuthContext } from "."
import AuthContextData from "./AuthContextData"

interface IAuth {
    children?: React.ReactElement
}

export default function AuthContextProvider({ children }: IAuth) {

    const [currentUser, setCurrentUser] = useState<AuthContextData>({
        username: "Fabio C.",
        email: "fabio.cantarani@gmail.com"
    })
    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
}