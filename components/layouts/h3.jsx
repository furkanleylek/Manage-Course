import React from 'react';
import { Montserrat } from 'next/font/google'
import classNames from 'classnames';
const cormo = Montserrat({ subsets: ['latin'], weight: '700' })

const TitleH3 = ({ children, className }) => {
    return (
        <h1 className={classNames(`text-[18px] lg:text-[22px] font-bold text-primary ${className}`, cormo.className)}>
            {children}
        </h1>
    );
};

export default TitleH3; 