import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../i18n/provider';
import { APP_IMAGE } from '../../constants/image';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[#f5f2e9] flex flex-col items-center justify-center text-center px-6">
      {/* Big 404 */}
      <h1 className="text-[120px] md:text-[160px] font-bold text-green-700 leading-none">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        {t('page404.title')}
      </h2>

      <p className="text-gray-600 mt-3 max-w-md">{t('page404.description')}</p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition"
        >
          <span className="material-symbols-outlined">home</span>
          {t('common.button.goHome')}
        </button>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 border border-green-600 text-green-700 px-6 py-3 rounded-full hover:bg-green-100 transition"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          {t('common.button.goBack')}
        </button>
      </div>

      {/* Optional Illustration */}
      <img src={APP_IMAGE.logo} alt="Aeros Seeds" className="w-35 mt-10" />

      {/* Bottom Text */}
      <p className="text-xs text-gray-500 mt-6">{t('page404.logoTagline')}</p>
    </div>
  );
};

export default NotFound;
