import React, { FC, useState, useMemo } from 'react';
import i18n from './services';

export const LocalizationContext = React.createContext();

export const LocalizationContextProvider: FC = (porps) => {
    const [locale, setLocale] = useState(i18n.locale);
    const localizationContext = useMemo(
        () => ({
            t: (scope, options) => i18n.t(scope, { locale, ...options }),
            locale,
            setLocale,
        }),
        [locale]
    );

    return (
        <LocalizationContext.Provider value={localizationContext}>
            {porps.children}
        </LocalizationContext.Provider>
    );
}