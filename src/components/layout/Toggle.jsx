import { useState, useEffect } from 'react';

function Toggle(){

    const [mode, setMode] = useState('corporate');

    const html = document.querySelector('html');

    useEffect(() => {
        html.setAttribute('data-theme', mode);
    }, [mode]);

    const handleChange = (e) => {
        if(e.target.checked){
            setMode('night');
        } else {
            setMode('corporate');
        }
    }

    return(
        <div>
            <input 
                onChange={handleChange} 
                type="checkbox" 
                className="toggle rounded-xl mt-1 mr-2" 
            />
        </div>
    );
}

export default Toggle;