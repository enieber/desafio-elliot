import {
  generateToken,
  saveToken,
  removeToken,
  getToken,
} from './token';

export const login = (user, password, redirect) => {
  if (user == 'admin@eusouelliot.com' && password == '1234') {
    const token = generateToken();
    saveToken(token);
    setTimeout(redirect, 200);
    return;
  }
  alert('Usuario/Senha incorreto');
};

export const logout = (redirect) => {
  setTimeout(redirect, 200);
  removeToken();
};

export const hasAuthentication = () => {
  const token = getToken();
  if (token) {
    return token.length > 1;
  }
  return false;
};
