import React from 'react'
import {motion} from 'framer-motion';
import styles from '@/styles/modals/video_modal.module.scss';

export default function VideoModal({children, setShowModal}) {

  return (
    <motion.div 
        onClick={() => setShowModal(false) }
        className={styles.video_modal}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
        delay: 0.2,
        duration: 0.3,
    }}
    >
        {children}
    </motion.div>
  )
}