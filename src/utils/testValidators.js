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
