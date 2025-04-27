import React, { useState } from 'react';

const Computer = () => {
    const [pdfUrl, setPdfUrl] = useState('/computer.pdf');
    
    return (
        <div>
           <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="Computer PDF"
            ></iframe>  
        </div>
    );
};

export default Computer;