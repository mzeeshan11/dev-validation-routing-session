import { createContext, useContext } from "react";
import { useCookies } from "react-cookie";

let AuthContext = createContext();

export function AuthProvider({children}) {
  const [cookies] = useCookies(["dev_weekend_user"]);
  let user = cookies;
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuth(){
    return useContext(AuthContext)
}