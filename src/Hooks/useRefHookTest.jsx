import React, { useRef} from 'react';


const useRefHookTest = () => {
    // позволяет получить доступ к DOM элементу
    const inputRef = useRef()

    return ( 
        <div>
            <input 
                type="text" 
                ref={inputRef}
            />
            <button onClick={() => {console.log(inputRef.current.value)}}>Click</button>
        </div>
    );
}
 
export default useRefHookTest;