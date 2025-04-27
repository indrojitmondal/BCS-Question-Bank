import React, { useState } from 'react';

const English = () => {
    const [pdfUrl, setPdfUrl] = useState('/english.pdf');
    return (
        <div>
               <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="English PDF"
            ></iframe>
        </div>
    );
};

export default English;