export const turboLogger = (message, textColor = "blue") => {
  const textStyle = `color: ${textColor}`;
  console.log(`%c${message}`, textStyle);
};
