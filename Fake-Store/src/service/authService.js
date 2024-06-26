import { server, port } from "./serverSetting"

export const signupUser = async ( name, email, password ) => {
  const url = `${server}:${port}/users/signup`;
  const user = { name, email, password }
  try {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (error) {
    throw new Error("Failed to sign up user: " + error);
  }
}

export const signinUser = async ( email, password ) => {
  const url = `${server}:${port}/users/signin`;
  const user = { email, password }
  try {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json()
    return data;
  } catch (error) {
    throw new Error("Failed to sign in user: " + error);
  }
}

export const updateUserProfile = async ( token, name, password ) => {
  const url = `${server}:${port}/users/update`;
  const user = { name, password }
  try {
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (error) {
    throw new Error("Failed to update user profile: " + error);
  }
}

