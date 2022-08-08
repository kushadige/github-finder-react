import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `${GITHUB_TOKEN}`
    }
});

export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text
    });

    const response = await github.get(`/search/users?${params}`);

    return response.data.items;
}

export const getUserAndRepos = async(username) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${username}`),
        github.get(`/users/${username}/repos`)
    ]);

    return {
        user: user.data,
        repos: repos.data
    }
}

/*
export const getSingleUser = async (username) => {

    const response = await fetch(`${GITHUB_URL}/users/${username}`, {
        headers: {
            Authorization: `${GITHUB_TOKEN}`
        }
    });
    
    if(response.status === 404) {
        window.location = '/notfound';
    } else {
        const data = await response.json();
        return data;
    }
}

export const getUserRepos = async (username) => {

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

    return data;
}
*/