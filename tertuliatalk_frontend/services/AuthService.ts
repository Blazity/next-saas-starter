import { EnvVars } from '../env';

//this function is a simple example, later we create middleware for authentications

const signIn = async (email: string, password: string) => {
  try {
    const response = await fetch(`${EnvVars.API_URL}/api/Auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    }

    return await response.json();
  } catch (error) {
    console.error('Sign-in error:', error);
    return null;
  }
};

const signUp = async (name: string, email: string, password: string) => {
  try {
    const response = await fetch(`${EnvVars.API_URL}/api/Auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    }

    return await response.json();
  } catch (error) {
    console.error('Sign-in error:', error);
    return null;
  }
};

const getUserData = async () => {
  try {
    const response = await fetch(`${EnvVars.API_URL}/api/User`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export { signIn, signUp, getUserData };
