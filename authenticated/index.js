const signOutBtn = document.getElementById('signOut');

signOutBtn.addEventListener('click', () => {
    window.location.replace("/.auth/logout");
});

const dataBtn = document.getElementById('data');

data.addEventListener('click', () => {
  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const data = await response.json();
      console.log(data);
      document.getElementById('resultado').innerHTML = JSON.stringify(data);
    } catch (error) {
      console.error(error);
    }
  }
      
  console.log(getUserInfo());
});
