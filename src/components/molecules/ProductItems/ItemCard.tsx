import Select from '@/components/atoms/Select'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './ProductItems.module.scss'
import Link from 'next/link'
import Button from '@/components/atoms/Button'
import { EButtonVariant } from '@/components/atoms/Button/constant'

const ItemCard = () => {
    const [filterVal, setFilterVal] = useState('')
    return (
        <>
            <div className={styles['item-card-wrapper']}>
                <div className={styles['item-name']}>
                    <Link href='/'>
                        Name Naem Name Nameadasdasdas das das d asd asd
                    </Link>
                </div>
                <p className={styles['item-type']}> TYPE: Electreco</p>

                <Link href='/' className={styles['item-image']}>
                    <Image
                        src='/gaming-chair.avif'
                        alt='name'
                        width={100}
                        height={100}
                    />
                </Link>

                <div className={styles['item-filter']}>
                    <p>Filter:</p>
                    <Select
                        options={[
                            { value: '1', label: 'one' },
                            { value: '2', label: 'two' },
                        ]}
                        onChange={setFilterVal}
                        value={filterVal}
                    />
                </div>

                <div className={styles['item-pricing']}>
                    <div className={styles['item-price']}>
                        <p className={styles['price']}>
                            355.00 <span>USD</span>
                        </p>
                        <p className={styles['discount']}>
                            500.00 <span>USD</span>
                        </p>
                    </div>
                    <Button onClick={() => {}} variant={EButtonVariant.PRIMARY}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ItemCard
