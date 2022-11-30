import styles from './Container.module.scss';

interface ContainerProps { }

export const Container = ({ }: ContainerProps) => (
  <div className={styles.Container} data-testid="Container">
    Container Component
  </div>
);
