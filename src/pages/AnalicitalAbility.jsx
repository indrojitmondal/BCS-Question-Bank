import React, { useState } from 'react';

const AnalicitalAbility = () => {
    const [pdfUrl, setPdfUrl] = useState('/analiticalAbility.pdf');
    
    return (
        <div>
            <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="AnalicitalAbility PDF"
            ></iframe> 
        </div>
    );
};

export default AnalicitalAbility;