const signOutBtn = document.getElementById('signOut');

signOutBtn.addEventListener('click', () => {
    window.location.replace("/.auth/logout");
});


const dataBtn = document.getElementById('data');

data.addEventListener('click', () => {
    function getUserInfo() {
        const response = fetch('/.auth/me');
        const payload = response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
      }
      
      console.log(getUserInfo());
});
