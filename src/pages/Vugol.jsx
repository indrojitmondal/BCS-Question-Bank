import React, { useState } from 'react';

const Vugol = () => {
    const [pdfUrl, setPdfUrl] = useState('/vugol.pdf');
    return (
        <div>
            <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="Vugol PDF"
            ></iframe>
        </div>
    );
};

export default Vugol;