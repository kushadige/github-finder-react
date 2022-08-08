import { createContext, useReducer } from 'react';
import { createRenderer } from 'react-dom/test-utils';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        repos: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    return <GithubContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;



/*
// Get initial users (testing purposes)
const fetchUsers = async () => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users`, {
        headers: {
            Authorization: `${GITHUB_TOKEN}`
        }
    });

    const data = await response.json();

    dispatch({
        type: 'GET_USERS',
        payload: data
    });
}
*/