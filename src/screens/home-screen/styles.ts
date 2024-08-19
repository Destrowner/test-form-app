import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';
import FONTS from '../../constants/fonts';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BACKGROUND,
  },
  title: {
    marginTop: 68,
    marginHorizontal: 16,
    color: COLORS.TEXT_COMMON,
    fontSize: 32,
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
  button: {
    marginHorizontal: 16,
  },
  button_name: {
    marginTop: 32,
    color: COLORS.TEXT_COMMON,
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    textDecorationLine: 'underline',
  },
});
