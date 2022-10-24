import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>  {
  prefix?: string;
}

export function InputText({ prefix, ...props }: TextInputProps) { 
  return (
    <div className={styles.textInputContainer}>
      {!!prefix && <span className={styles.prefix}>{prefix}</span>}
      <input {...props} className={styles.input}/>
    </div>
  )
}