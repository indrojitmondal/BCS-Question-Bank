import React, { useState } from 'react';

const Ethics = () => {
    const [pdfUrl, setPdfUrl] = useState('/ethics.pdf');
    
    return (
        <div>
              <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="Ethics PDF"
            ></iframe> 
        </div>
    );
};

export default Ethics;