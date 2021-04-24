import React from 'react';
import { TEMPLATES } from '../../Config/Constant';

const Layout = ({ currentTemplate, setTemplate }) => {
    return (
        <div className="template-wrapper">
            {Object.keys(TEMPLATES).map((key, index) => {
                let template = TEMPLATES[key];
                return (
                    <div key={index} className="template-img-wrapper" onClick={() => setTemplate(key)}>
                        <img className="template-img" src={template.img} alt={key} />
                    </div>
                )
            })}
        </div>
    );
}

export default Layout;
