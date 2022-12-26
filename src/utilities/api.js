const BASE_URL = "https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-pt/"

export async function registerUser(user) {
    const response = await fetch(`${BASE_URL}users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const data = await response.json();
    return data;
}

export async function loginUser(user) {
    const response = await fetch(`${BASE_URL}users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const data = await response.json();
    return data;
}

export async function displayPosts(token) {
    try {
        const response = await fetch(`${BASE_URL}posts`,{
        method: "GET", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        const data = await response.json();
        if(data.error) {
            throw data.error;
        }
        return data.data.posts;
    } catch(error) {
        console.error("Unable to display posts.", error);
    }
};

export async function newPost(post, token) {
    try{
        const response = await fetch(`${BASE_URL}posts`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(post)
        })
        const data = await response.json();
        if(data.error) {
            throw data.error;
        }
        return data.data.posts;
    } catch(error) {
        console.error("Unable to create new post.", error);
    }
};

export async function deleteYourPost(id, token) {
    try{
        const response = await fetch(`${BASE_URL}posts/${id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify()
        })  
        const data = await response.json();
        if(data.error) {
            throw data.error;
        }
        return data.posts;
    } catch(error) {
        console.error("Unable to delete post.", error);
    }
};

export async function submitMessage(message, token, id) {
    const note = {
        message: {
            content: message
        }
    }
    console.log(note)
    try{
        const response = await fetch(`${BASE_URL}posts/${id}/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(note)
        })
        const data = await response.json();
        if(data.error) {
            throw data.error;
        }
        return data.data.posts;
    } catch(error) {
        console.error("Unable to send message.", error);
    }
};
export async function myProfile(token) {
    try{
        const response = await fetch(`${BASE_URL}users/me`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify()
        })  
        const data = await response.json();
        if(data.error) {
            throw data.error;
        }
        return data.data;
    } catch(error) {
        console.error("Unable to load profile.", error);
    }
};

