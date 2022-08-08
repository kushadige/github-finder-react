const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `{GITHUB_TOKEN}`
        }
    });
    
    const { items } = await response.json();

    return items;
}

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