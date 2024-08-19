import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';
import FONTS from '../../constants/fonts';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BACKGROUND,
  },
  title: {
    marginTop: 48,
    marginHorizontal: 16,
    color: COLORS.TEXT_COMMON,
    fontSize: 48,
    fontFamily: FONTS.SEMI_BOLD,
    textTransform: 'uppercase',
  },
  text: {
    marginTop: 16,
    marginHorizontal: 16,
    color: COLORS.TEXT_COMMON,
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
  },
  image_container: {
    flex: 1,
    paddingVertical: 24,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
