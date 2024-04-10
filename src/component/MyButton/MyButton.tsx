import styles from './MyButton.module.css';
import React from 'react';

interface IMyButton extends React.HTMLAttributes<HTMLButtonElement> {
    
}

const MyButton = ({...props}: IMyButton) => {
    return ( 
        <button className={styles.btn} {...props} />
     );
}
 
export default MyButton;