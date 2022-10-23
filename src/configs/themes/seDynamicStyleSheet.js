const useDynamicStyleSheet = (dynamicStyleSheet, theme) => {
  const defaultMode = 'LIGHT';
  const mode = theme || defaultMode;
  return dynamicStyleSheet[mode] || dynamicStyleSheet[defaultMode];
};

export default useDynamicStyleSheet;
