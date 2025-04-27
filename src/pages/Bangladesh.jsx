import React, { useState } from 'react';

const Bangladesh = () => {
    const [pdfUrl, setPdfUrl] = useState('/bangladesh.pdf');
    return (
        <div>
            <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="Bangladesh PDF"
            ></iframe>
        </div>
    );
};

export default Bangladesh;