import './style.css';
import { useState } from 'react';


const PasswordGenerator = () => {
    const [passwordLenght, setPasswordLenght] = useState(8);
    const [digitsLenght, setDigitsLenght] = useState(2);
    const [symbolsLenght, setSymbolsLenght] = useState(2);

    return(
        <>
            <div className='slider'>
                <label htmlFor="password-lenght">Tamanho</label>

                <input type="text" id='password-lenght' type='range' min={4} max={64} value={passwordLenght}
                    onChange={({target}) => setPasswordLenght(parseInt(target.value))}/>
                <span>{passwordLenght}</span>
            </div>

            <div className='slider'>
                <label htmlFor="digits-lenght">Digitos</label>

                <input type="text" id='digits-lenght' type='range' min={0} max={10} value={digitsLenght}
                    onChange={({target}) => setDigitsLenght(parseInt(target.value))}/>
                <span>{digitsLenght}</span>
            </div>

            <div className='slider'>
                <label htmlFor="symbols-lenght">Simbolos</label>

                <input type="text" id='symbols-lenght' type='range' min={0} max={10} value={symbolsLenght}
                    onChange={({target}) => setSymbolsLenght(parseInt(target.value))}/>
                <span>{symbolsLenght}</span>
            </div>
        </>
    );
};

export default PasswordGenerator;