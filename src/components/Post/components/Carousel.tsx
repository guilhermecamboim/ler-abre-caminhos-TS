import styles from './styles.module.css';

interface ICarouselProps {
  fileUrl: string;
}

export function Carousel({fileUrl}: ICarouselProps) {
  return (
    <main className={styles.containerCarousel}>
      <div className={styles.itemsWrapper}>
          <div className={styles.items}>
              <div className={styles.item}><img src={fileUrl}/></div>
          </div>
      </div>
    </main>
  )
}