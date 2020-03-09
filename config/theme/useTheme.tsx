import { AppConstants } from '../DefaultConfig';
import useConstants from '../../hooks/useConstants';
import { themes, AppTheme } from './themes';

const useTheme = (): AppTheme => {
  const { selectedTheme }: AppConstants = useConstants()

  return themes[selectedTheme];
}

export default useTheme;
