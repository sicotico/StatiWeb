const signOutBtn = document.getElementById('signOut');

signOutBtn.addEventListener('click', () => {
    window.location.replace("/.auth/logout");
});

<<<<<<< HEAD

const dataBtn = document.getElementById('data');

signOutBtn.addEventListener('click', () => {
    async function getUserInfo() {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
      }
      
      console.log(await getUserInfo());
});
=======
async function getUserInfo() {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    const { clientPrincipal } = payload;
    return clientPrincipal;
  };
  
  console.log(await getUserInfo());
>>>>>>> 67b003195285491729b7ac65b81340acfe369d8e
