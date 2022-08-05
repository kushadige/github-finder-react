import { createContext, useReducer } from 'react';
import { createRenderer } from 'react-dom/test-utils';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        repos: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

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

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        });
    }

    const searchUsers = async (text) => {
        setLoading();

        const params = new URLSearchParams({
            q: text
        });

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `{GITHUB_TOKEN}`
            }
        });
        
        const { items } = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: items
        });
    }

    const getSingleUser = async (username) => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users/${username}`, {
            headers: {
                Authorization: `${GITHUB_TOKEN}`
            }
        });
        
        if(response.status === 404) {
            window.location = '/notfound';
        } else {

            const data = await response.json();
    
            dispatch({
                type: 'SET_USER',
                payload: data
            });

        }
    }

    const getUserRepos = async (username) => {
        setLoading();

        const params = new URLSearchParams({
            sort: 'created',
            // per_page: 10
        });

        const response = await fetch(`${GITHUB_URL}/users/${username}/repos?${params}`, {
            headers: {
                Authorization: `${GITHUB_TOKEN}`
            }
        });

        const data = await response.json();

        dispatch({
            type: 'GET_REPOS',
            payload: data
        });
    }

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        });
    }

    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.isLoading,
        fetchUsers,
        clearUsers,
        searchUsers,
        getSingleUser,
        getUserRepos
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;