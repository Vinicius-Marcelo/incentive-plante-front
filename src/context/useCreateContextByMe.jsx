import { createContext } from 'react';
import useStateByMe from '../hooks/useStateByMe';

const UserContext = createContext({});

function UseCreateContextByMe (props) {
    return (
      <UserContext.Provider value={useStateByMe}>
        {props.children}
      </UserContext.Provider>
    )
}

export {
    UseCreateContextByMe,
    UserContext 
};