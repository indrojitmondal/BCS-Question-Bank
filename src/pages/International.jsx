import React, { useState } from 'react';

const International = () => {
    const [pdfUrl, setPdfUrl] = useState('/international.pdf');
    
    return (
        <div>
             <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="International PDF"
            ></iframe>
        </div>
    );
};

export default International;