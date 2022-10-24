import styles from './styles.module.css';

export function Carousel() {
  return (
    <main className={styles.containerCarousel}>
      <div className={styles.itemsWrapper}>
          <div className={styles.items}>
              <div className={styles.item}><img src="https://unsplash.it/1600/400?image=950"/></div>
              <div className={styles.item}><img src="https://unsplash.it/1600/400?image=930"/></div>
              <div className={styles.item}><img src="https://unsplash.it/1600/400?image=990"/></div>
              <div className={styles.item}><img src="https://unsplash.it/1600/400?image=980"/></div>
              <div className={styles.item}><img src="https://unsplash.it/1600/400?image=970"/></div>
              <div className={styles.item}><img src="https://unsplash.it/1600/400?image=976"/></div>
              <div className={styles.item}><img src="https://unsplash.it/1600/400?image=993"/></div>
              <div className={styles.item}><img src="https://unsplash.it/1600/400?image=969"/></div>
          </div>
      </div>
    </main>
  )
}