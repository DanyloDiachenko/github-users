import styles from './TheHeader.module.scss';

interface TheHeaderProps { }

export const TheHeader = ({ }: TheHeaderProps) => (
  <div className={styles.theHeader}>
    TheHeader Component
  </div>
);
