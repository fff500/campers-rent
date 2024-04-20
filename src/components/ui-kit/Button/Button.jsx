import styles from './Button.module.css';

export const Button = ({ variant = 'red', onClick, children }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};
