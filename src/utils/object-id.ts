export const generateObjectId = (): string => {
  return (
    randomHex(Date.now() / 1000) +
    ' '.repeat(16).replace(/./g, () => randomHex(Math.random() * 16))
  );
};

const randomHex = (value: number): string => {
  return Math.floor(value).toString(16);
};
