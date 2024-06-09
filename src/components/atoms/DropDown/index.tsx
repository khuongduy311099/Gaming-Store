import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import clsx from 'clsx'
import { ReactNode, useRef } from 'react'
import styles from './Dropdown.module.scss'
import { TDropdownClassNames } from './type'
type TDropDownProps = {
    classNames?: TDropdownClassNames
    trigger: ReactNode
    content: ReactNode
}

// duration can be tweaked at convenience
const timeoutDuration = 120
const DropDown = ({ classNames, trigger, content }: TDropDownProps) => {
    const triggerRef = useRef<HTMLButtonElement>(null)
    const timeOutRef = useRef<ReturnType<typeof setTimeout>>()

    const handleEnter = (isOpen: boolean) => {
        clearTimeout(timeOutRef.current)
        !isOpen && triggerRef.current?.click()
    }

    const handleLeave = (isOpen: boolean) => {
        timeOutRef.current = setTimeout(() => {
            isOpen && triggerRef.current?.click()
        }, timeoutDuration)
    }

    return (
        <Popover className={clsx(styles['wrapper'], classNames?.wrapper)}>
            {({ open }) => (
                <div
                    onMouseEnter={() => handleEnter(open)}
                    onMouseLeave={() => handleLeave(open)}
                >
                    <PopoverButton
                        ref={triggerRef}
                        as='div'
                        className={styles['trigger']}
                    >
                        {trigger}
                    </PopoverButton>

                    <PopoverPanel
                        className={clsx(
                            styles['dropdown-content'],
                            classNames?.optionsContainer,
                        )}
                    >
                        {content}
                    </PopoverPanel>
                </div>
            )}
        </Popover>
    )
}

export default DropDown
