export const setDescriptionShort = (description: string) => {
  return description.split('.').slice(0, 3).join('.');
};
