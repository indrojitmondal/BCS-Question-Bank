import React, { useState } from 'react';

const Bangla = () => {
    const [pdfUrl, setPdfUrl] = useState('/bangla.pdf');
    return (
        <div>
            <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="Bangla PDF"
            ></iframe>
        </div>
    );
};

export default Bangla;