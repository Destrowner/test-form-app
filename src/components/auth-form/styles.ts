import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';
import FONTS from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 31,
    paddingBottom: 48,
  },
  input: {
    height: 46,
    paddingHorizontal: 18,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.INPUT_BACKGROUND,
    backgroundColor: COLORS.INPUT_BACKGROUND,
  },
  input_error: {
    borderColor: COLORS.INPUT_ERROR,
  },
  button: {
    width: 97,
    height: 46,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  button_gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_name: {
    color: COLORS.BUTTON_NAME_COMMON,
    fontSize: 16,
    fontFamily: FONTS.BOLD,
  },
});
