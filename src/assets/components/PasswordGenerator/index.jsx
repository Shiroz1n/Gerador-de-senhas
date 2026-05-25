import './style.css';
import { useState } from 'react';


const PasswordGenerator = () => {
    const [passwordLenght, setPasswordLenght] = useState(8);


    return(
        <>
            <div className='slider'>
                <label htmlFor="Tamanho"></label>

                <h3>{passwordLenght}</h3>
                <input type="text" id='password-lenght' type='range' min={4} max={64} value={passwordLenght}
                    onChange={({target}) => setPasswordLenght(target.value)}/>

            </div>
        </>
    );
};

export default PasswordGenerator;