import { useTranslation } from 'react-i18next';
export const About = () => {
    const { t } = useTranslation()
    return (
        <main>
            <h1>{t('about')}</h1>
        </main>
    )
}