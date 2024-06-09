import DropDown from '@/components/atoms/DropDown'
import { IconWorld } from '@tabler/icons-react'
import Link from 'next/link'
import styles from './LanguageSelection.module.scss'

const LocaleSelection = () => {
    return (
        <div>
            <DropDown
                trigger={<IconWorld className={styles['icon']} size={28} />}
                classNames={{
                    optionsContainer: styles['container'],
                }}
                content={
                    <div className={styles['dropdown']}>
                        <Link href='/'>English</Link>
                        <Link href='/'>Vietnamese</Link>
                    </div>
                }
            />
        </div>
    )
}

export default LocaleSelection
