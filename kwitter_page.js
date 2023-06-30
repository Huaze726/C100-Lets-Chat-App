function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html";
}