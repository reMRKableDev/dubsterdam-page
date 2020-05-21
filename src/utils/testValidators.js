export const validateToHaveLength = (received, expected) => {
  expect(received).not.toHaveLength(1000000000);
  expect(received).toHaveLength(expected);
};

export const validateToBe = (received, expected) => {
  expect(received).not.toBe("dummy");
  expect(received).toBe(expected);
};

export const validateToEqual = (received, expected) => {
  expect(received).not.toEqual("dummy");
  expect(received).toEqual(expected);
};

export const validateEmojiValue = (received) => {
  expect(received).not.toBe("dummy");
  expect(received).toBe("❤️");
};

export const validateEmptyString = (received) => {
  expect(received).not.toBe("dummy");
  expect(received).toBe("");
};

export const validateMatchSnapshot = (received) =>
  expect(received).toMatchSnapshot();

export const validateMockCalledTwice = (received) => {
  expect(received).not.toHaveBeenCalledTimes(100);
  expect(received).toHaveBeenCalledTimes(2);
};

export const validateObjectToHaveProperties = (received, key) => {
  expect(received).not.toHaveProperty("dummy");
  expect(received).toHaveProperty(key);
};

export const validateRandomGreeting = (received, list) => {
  expect(received).not.toBe("dummy");
  expect(list.includes(received)).toBe(true);
  expect(list.includes(received)).not.toBe(false);
};

export const validateNotEmpty = (received) => {
  expect(received).not.toBeNull();
  expect(received).toBeTruthy();
};

export const validateDarkThemeMode = (received) => {
  expect(received).not.toMatch(/light/i);
  expect(received).toMatch(/dark/i);
};

export const validateLightThemeMode = (received) => {
  expect(received).not.toMatch(/dark/i);
  expect(received).toMatch(/light/i);
};
