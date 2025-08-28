import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = (props) => {
  const [signed, setSigned] = useState(false);
  const values =  {signed, setSigned}
  return (
    <LoginContext.Provider value={values}>
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;
