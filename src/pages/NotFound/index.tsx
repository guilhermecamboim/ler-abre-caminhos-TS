import styles from './styles.module.css';

export function NotFound() {
  return (
      <>
        <main>
          <div className={styles.squareZero}>
            <p>Erro 404</p>
          </div>
          <h1 className={styles.notFound}>Página não encontrada. 🚧</h1>
          <div className={styles.squareOne}/>
          <div className={styles.squareTwo}/>
          <div className={styles.squareThree}/>
          <div className={styles.squareFour}/>
          <div className={styles.squareFive}/>
        </main>
      </>
  )
}