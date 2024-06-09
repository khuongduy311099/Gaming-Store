import Input from '@/components/atoms/Input'
import styles from './SearchSection.module.scss'
import { useState } from 'react'
import { IconSearch } from '@tabler/icons-react'

const SearchSection = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className={styles['wrapper']}>
            <p>
                New Accessories -30 % Off. <a>More</a>
            </p>
            <Input
                value={searchValue}
                onChange={e => setSearchValue(e.currentTarget.value)}
                placeholder='Search product ...'
                leftSection={<IconSearch size={18} />}
                isUseClear
            />
            <a>New Collections</a>
        </div>
    )
}

export default SearchSection
