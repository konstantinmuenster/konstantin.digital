export const isInternal = (url?: string): boolean => {
  return !!(url?.startsWith('/') || url?.startsWith('#'));
};
