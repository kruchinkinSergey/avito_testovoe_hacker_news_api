import React, { useState, useCallback } from 'react';


const UseMemoHookTest = () => {
    const [sequence, setSequence] = useState([5, 2, 7, 1, 4]);

    const sortedSeq = useCallback(() => {
        console.log('СРАБОТАЛА СОРТИРОВКА')
        return [...sequence].sort((a, b) => a - b)
    }, [sequence])

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min
      }
    
      console.log(sequence)
    return ( 
        <div>
            <button onClick={() => {setSequence([...sequence, getRandomNumber(0, 10)])}}>Добавить любое число от 0 до 10</button>
        </div>
    );
}
 
export default UseMemoHookTest;