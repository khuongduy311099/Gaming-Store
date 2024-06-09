import ItemCard from '@/components/molecules/ProductItems/ItemCard'
import React from 'react'

const BestSellerSection = () => {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            <ItemCard />
        </div>
    )
}

export default BestSellerSection
