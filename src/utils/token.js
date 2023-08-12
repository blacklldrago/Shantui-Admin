import jwt_decode from "jwt-decode";

function saveToken(token, rememberMe) {
  localStorage.setItem("access_token", token);
  localStorage.setItem("rememberMe", JSON.stringify(rememberMe));
}

function getToken() {
  try {
    return jwt_decode(localStorage.getItem("access_token"));
  } catch (error) {}
}

function destroyToken() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("rememberMe");
  window.location.pathname = "/";
}

export { saveToken, destroyToken, getToken };
