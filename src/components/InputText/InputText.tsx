import styles from './styles.module.css';

export function InputText() { 
  return (
    <div className={styles.textInputContainer}>
      <input className={styles.input}/>
    </div>
  )
}