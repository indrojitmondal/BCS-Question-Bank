import React, { useState } from 'react';

const Science = () => {
    const [pdfUrl, setPdfUrl] = useState('/science.pdf');
    
    return (
        <div>
            <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="Science PDF"
            ></iframe> 
        </div>
    );
};

export default Science;