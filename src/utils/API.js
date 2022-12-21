const BASE_URL = 'https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-pt';

export async function registerUser(user) {
const response = await fetch(`${BASE_URL}/users/register`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
});
const data = await response.json();
return data; 
}

export async function loginUser(user) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
}

// export async function viewProfile(user) {
//   const response = await fetch(`${BASE_URL}/users/me`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//       'Authorization': 'Bearer _.token' <== Fix this
//     },
//     body: JSON.stringify(user)
//   });
//   const data = await response.json();
//   return data;
// }

export async function getPosts(user) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
}




