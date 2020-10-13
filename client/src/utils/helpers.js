export const setNumberPokemon = (number) => {
  let newNumber;
  if (number < 100) {
    newNumber = number < 10 ? `00${number}` : `0${number}`;
  } else {
    newNumber = number;
  }
  return newNumber;
};

export const getType = (types) => {
  return types.map(({ type }) => type.name)[0];
};


export const isActiveSession = () => {
    const data = localStorage.getItem("session_token");
    if (data) {
        return true;
    } else {
        return false;
    }
};
export const getSession = () => {
    const data = localStorage.getItem("session_token");
    if (data) {
        return data;
    } else {
        return null;
    }
};

export const setSession = (token) => {
    const data = localStorage.setItem("session_token", JSON.stringify(token) );
    if (data) {
        return true;
    } else {
        return false;
    }
};

export const removeSession = (token) => {
    const data = localStorage.removeItem("session_token");
    if (data) {
        return true;
    } else {
        return false;
    }
};
