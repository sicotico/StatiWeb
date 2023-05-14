const signOutBtn = document.getElementById('signOut');

signOutBtn.addEventListener('click', () => {
    window.location.replace("/.auth/logout");
});

async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
  };
  
  console.log(await getUserInfo());
