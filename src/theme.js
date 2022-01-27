import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textButton: 'white',
    error: '#d73a4a',
    primary: '#0366d6',
    backgroundColorPrimary: '#e1e4e8',
    backgroundColorSecondary: 'white',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  borders: {
    radiusCircle: 45 / 2,
    radiusRectangle: 5,
  },
};

export default theme;