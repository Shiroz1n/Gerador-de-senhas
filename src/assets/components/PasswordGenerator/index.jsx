import './style.css';
import { useState, useEffect } from 'react';


const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [passwordLenght, setPasswordLenght] = useState(8);
    const [digitsLenght, setDigitsLenght] = useState(2);
    const [symbolsLenght, setSymbolsLenght] = useState(2);

    useEffect(() => {
        const draftPassword = [];




        draftPassword.push(...Array.from({length: digitsLenght}, randomDigit));
        draftPassword.push(...Array.from({length: symbolsLenght}, randomSymbol));
        draftPassword.push(...Array.from({length: passwordLenght}, randomLetter));


        setPassword(draftPassword.
            slice(0, passwordLenght)
            .sort(()=> Math.random() - 0.5)
            .join(""));
    }, [passwordLenght, digitsLenght, symbolsLenght]);

    const randomDigit = () => {
        const digits = "01234567789";
        
        return digits[Math.floor(Math.random() * digits.length)];
    }

    const randomSymbol = () => {
        const symbols = "#$&(+,./;?@[]^{}";
        
        return symbols[Math.floor(Math.random() * symbols.length)];
    }    

    const randomLetter = () => {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        const letter = letters[Math.floor(Math.random() * letters.length)];
        return Math.random() >= 0.5 ? letter : letter.toUpperCase();
    }   

    return(
        <>
            <div className='slider'>
                <label htmlFor="password-lenght">Tamanho</label>

                <input id='password-lenght' type='range' min={4} max={64} value={passwordLenght}
                    onChange={({target}) => setPasswordLenght(parseInt(target.value))}/>
                <span>{passwordLenght}</span>
            </div>

            <div className='slider'>
                <label htmlFor="digits-lenght">Digitos</label>

                <input id='digits-lenght' type='range' min={0} max={10} value={digitsLenght}
                    onChange={({target}) => setDigitsLenght(parseInt(target.value))}/>
                <span>{digitsLenght}</span>
            </div>

            <div className='slider'>
                <label htmlFor="symbols-lenght">Simbolos</label>

                <input id='symbols-lenght' type='range' min={0} max={10} value={symbolsLenght}
                    onChange={({target}) => setSymbolsLenght(parseInt(target.value))}/>
                <span>{symbolsLenght}</span>
            </div>

            <h1>{password}

            </h1>
        </>
    );
};

export default PasswordGenerator;