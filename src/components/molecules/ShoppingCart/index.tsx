import { IconShoppingCart } from '@tabler/icons-react'
import styles from './ShoppingCart.module.scss'

type TShoppingCartProps = {
    count?: number
}

const ShoppingCart = ({ count=0 }: TShoppingCartProps) => {
    return (
        <div className={styles['cart-section']}>
            <div>
                <p>My Kart</p>
                <p>100.00$</p>
            </div>
            <div className={styles['icon-wrapper']}>
                <IconShoppingCart className={styles['icon']} />
                <div className={styles['cart-count']}>{count}</div>
            </div>
        </div>
    )
}

export default ShoppingCart
