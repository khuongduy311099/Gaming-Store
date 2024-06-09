import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

const GamingDropDown = () => {
    return (
        <div className={styles['gaming-dropdown']}>
            <div className={styles['gaming-items']}>
                <h3>Pro Gaming</h3>
                <Link href='/hee'>Game Console</Link>
                <Link href='/'>Game Remote</Link>
                <Link href='/'>Gaming Cards</Link>
                <Link href='/'>Gaming Chairs</Link>
                <Link href='/'>Gaming Moniter</Link>
                <Link href='/'>Gaming PCs</Link>
            </div>
            <div className={styles['gaming-items']}>
                <h3> New Accessories</h3>
                <Link href='/'>Alien ware Monitor</Link>
                <Link href='/'>G-Series Curved VA Monitor</Link>
                <Link href='/'>Cloud Alpha Gaming Headset</Link>
                <Link href='/'>DualSense Wireless Controllers</Link>
                <Link href='/'>Raptor Gameing Z95</Link>
                <Link href='/'>GKD DMTR Gaming Desktop PC</Link>
            </div>
            <div className={styles['gaming-items']}>
                <h3> Master Game</h3>
                <Link href='/'>Gaming Office Chair</Link>
                <Link href='/'>Gaming Chair for Gamers with Lumbar</Link>
                <Link href='/'>HTC Vive Tracker (3.0) - PC</Link>
                <Link href='/'>VR Headset with Headphones</Link>
                <Link href='/'>RX 590 GTS Graphics Card</Link>
                <Link href='/'>RX 680 GTS Graphics Card</Link>
            </div>
            <Image
                src={'/header-img.webp'}
                alt='header-img'
                width={250}
                height={125}
            />
        </div>
    )
}

export default GamingDropDown
