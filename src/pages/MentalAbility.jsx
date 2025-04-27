import React, { useState } from 'react';

const MentalAbility = () => {
    const [pdfUrl, setPdfUrl] = useState('/mentalAbility.pdf');
    
    return (
        <div>
               <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="MentalAbility PDF"
            ></iframe> 
        </div>
    );
};

export default MentalAbility;