import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps { }

export const ThemeSwitcher = ({ }: ThemeSwitcherProps) => (
  <div className={styles.ThemeSwitcher} data-testid="ThemeSwitcher">
    ThemeSwitcher Component
  </div>
);
