const isPri = (monkey) => {
  return monkey.class === "Primary";
};

const isMil = (monkey) => {
  return monkey.class === "Military";
};

const isMag = (monkey) => {
  return monkey.class === "Magic";
};

const isSup = (monkey) => {
  return monkey.class === "Support";
};

export { isPri, isMil, isMag, isSup };
