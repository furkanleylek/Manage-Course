import React from 'react';
import { Montserrat } from 'next/font/google'
import classNames from 'classnames';
const cormo = Montserrat({ subsets: ['latin'], weight: '700' })

const TitleH1 = ({ children, className }) => {
    return (
        <h1 className={classNames(`text-2xl lg:text-3xl font-bold border-l-4 text-primary border-stroke px-2 ml-2 ${className}`, cormo.className)}>
            {children}
        </h1>
    );
};

export default TitleH1; 