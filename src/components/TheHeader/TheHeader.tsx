import styles from './TheHeader.module.scss';

interface TheHeaderProps { }

export const TheHeader = ({ }: TheHeaderProps) => (
  <div className={styles.TheHeader} data-testid="TheHeader">
    TheHeader Component
  </div>
);
