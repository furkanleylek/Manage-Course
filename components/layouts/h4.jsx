import React from 'react';
import { Montserrat } from 'next/font/google'
import classNames from 'classnames';
const cormo = Montserrat({ subsets: ['latin'], weight: '700' })

const TitleH4 = ({ children, className }) => {
    return (
        <h4 className={classNames(`text-[18px] lg:text-[20px] font-bold border-l-4 text-primary border-stroke px-2 ${className}`, cormo.className)}>
            {children}
        </h4>
    );
};

export default TitleH4; 