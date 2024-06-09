import React from 'react'
import styles from './MainPage.module.scss'
import Button from '@/components/atoms/Button'
import { EButtonVariant } from '@/components/atoms/Button/constant'
import { IconDeviceGamepad2 } from '@tabler/icons-react'
const IntroSection = () => {
    return (
        <section className={styles['intro-wrapper']}>
            <div className={styles['tagline']}>
                <span>Featured</span>
                <p>
                    New featured collection <a href='/'> \ Gaming. Collector</a>
                </p>
            </div>
            <h2 className={styles['title']}>Best Pro Gaming Accessories</h2>
            <p className={styles['description']}>
                Gaming accessories include gear such as headsets, extra
                controllers, charging stations, memory devices, carrying cases
                and much more.
            </p>
            <div className={styles['btn-group']}>
                <Button variant={EButtonVariant.PRIMARY} onClick={() => {}}>
                    Show Products <IconDeviceGamepad2 size={18} />
                </Button>
                <Button variant={EButtonVariant.TRANSPARENT} onClick={() => {}}>
                    Show Collection
                    <IconDeviceGamepad2 size={18} />
                </Button>
            </div>
        </section>
    )
}

export default IntroSection
