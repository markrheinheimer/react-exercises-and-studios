import styles from './ChoresList.module.css';

export default function ChoresList() {
  return (
    <div>
      <h1 class={styles.choresHeading}>Things I Need to Get Done</h1>
      <p class={styles.choresText}>Fix the Car</p>
      <p class={styles.choresText}>Paint the House</p>
      <p class={styles.choresText}>Water the Garden</p>
    </div>
  );
}
