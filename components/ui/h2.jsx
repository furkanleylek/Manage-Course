import React from 'react';
import { Montserrat } from 'next/font/google'
import classNames from 'classnames';
const cormo = Montserrat({ subsets: ['latin'], weight: '700' })

const TitleH2 = ({ children, className }) => {
    return (
        <h2 className={classNames(`text-2xl lg:text-3xl font-bold border-l-4 border-primary px-2 ${className}`, cormo.className)}>
            {children}
        </h2>
    );
};

export default TitleH2; 