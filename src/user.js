export const userData = async () => {
  try {
    const token = JSON.parse(localStorage.token);
    const response = await fetch('https://api.hattch.brdsites.com/api/v1/auth/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token.access_token,
      },
    })
    .then(res => res.json())
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res));
      console.log('User:', res);
    })

    return response.data ?? null

  } catch (error) {
    console.error(error);
  }
};
