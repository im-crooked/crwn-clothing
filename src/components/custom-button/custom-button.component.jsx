import React from 'react'

import './custom-button.styles.scss';

export default function CustomButtom({children,isGoogeleSignIn,...props}) {
    return (
        <div className={`${isGoogeleSignIn?'google-sign-in':''} custom-button`} {...props}>
            {children}
        </div>
    )
}
