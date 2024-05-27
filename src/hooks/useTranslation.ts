// translation.ts
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useTranslation = () => {
  const translations = useSelector((state: RootState) => state.languageSelected.translations);

  const t = (key: string) => {
    return translations[key] || key;
  };

  return { t };
};
