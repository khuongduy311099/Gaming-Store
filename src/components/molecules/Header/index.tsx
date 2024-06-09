import DropDown from '@/components/atoms/DropDown'
import { IconChevronDown, IconUser } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import LocaleSelection from '../LanguageSelection/LanguageSelection'
import SearchSection from '../SearchSection'
import ShoppingCart from '../ShoppingCart'
import GamingDropDown from './GamingDropDown'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div>
            <div className={styles['wrapper']}>
                <div className={styles['section']}>
                    <DropDown
                        trigger={
                            <a className={styles['dropdown-trigger']}>
                                Gaming Accessories <IconChevronDown size={16} />
                            </a>
                        }
                        classNames={{
                            optionsContainer: styles['full-width-options'],
                        }}
                        content={<GamingDropDown />}
                    />
                    <DropDown
                        trigger={
                            <a className={styles['trigger-dropdown']}>
                                Pages <IconChevronDown size={16} />
                            </a>
                        }
                        classNames={{
                            optionsContainer: styles['default-options'],
                        }}
                        content={
                            <div className={styles['default-dropdown']}>
                                <Link href='/'>About Us</Link>
                                <Link href='/'>Contact with us</Link>
                                <Link href='/'>FAQ{"'"}s</Link>
                                <Link href='/'>Privacy Policy</Link>
                                <Link href='/'>Shipping & Delivery</Link>
                                <Link href='/'>Terms & Conditions</Link>
                            </div>
                        }
                    />
                    <DropDown
                        trigger={
                            <a className={styles['trigger-dropdown']}>
                                Blog <IconChevronDown size={16} />
                            </a>
                        }
                        classNames={{
                            optionsContainer: styles['default-options'],
                        }}
                        content={
                            <div className={styles['default-dropdown']}>
                                <Link href='/'>Blog Page</Link>
                                <Link href='/'>Article Page</Link>
                            </div>
                        }
                    />
                </div>
                <div className={styles['section']}>
                    <Image
                        src={'/GamingLogo.png'}
                        alt='logo'
                        width={125}
                        height={30}
                    />
                </div>

                <div className={styles['section']}>
                    <DropDown
                        trigger={
                            <IconUser className={styles['icon']} size={28} />
                        }
                        classNames={{
                            optionsContainer: styles['icon-options'],
                        }}
                        content={
                            <div className={styles['default-dropdown']}>
                                <Link href='/'>Blog Page</Link>
                                <Link href='/'>Create Account</Link>
                                <Link href='/'> Wishlist</Link>
                                <Link href='/'>Compare</Link>
                            </div>
                        }
                    />
                    <LocaleSelection />
                    <ShoppingCart />
                </div>
            </div>
            <SearchSection />
        </div>
    )
}

export default Header
