'use client';

import styles from '@/styles/buttons/PrimaryButton.module.scss'

type PrimaryButtonProps = {
    text: string;
    onClick: () => void;
  };

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className={styles.primary_button}
            onClick={onClick}
        >
            {text}
        </button>
      )
  };

export default PrimaryButton
