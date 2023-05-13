const signUpBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
    window.location.replace("/.auth/login/aad?post_login_redirect_uri=https://proud-tree-00ffc2c03.3.azurestaticapps.net/authenticated/");
});
