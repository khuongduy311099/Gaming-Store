import { Input as UnstyleInput } from '@headlessui/react'
import styles from './Input.module.scss'
import { IconSearch, IconX } from '@tabler/icons-react'
import { ChangeEvent, HTMLAttributes, ReactNode, useRef } from 'react'
type TInputProps = {
    value: string
    className?: string
    placeholder?: string
    type?: string
    name?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    leftSection?: ReactNode
    rightSection?: ReactNode
    isUseClear?: boolean
} & HTMLAttributes<HTMLInputElement>

const Input = ({
    value,
    className = '',
    placeholder,
    type = 'text',
    name,
    onChange,
    leftSection,
    rightSection,
    isUseClear,
    ...props
}: TInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div className={styles.wrapper}>
            {leftSection}
            <UnstyleInput
                ref={inputRef}
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                className={className}
                onChange={onChange}
                {...props}
            />
            {isUseClear && (
                <IconX
                    onClick={() => {
                        if (!inputRef?.current) return
                        inputRef.current.value = ''
                    }}
                    size={12}
                    style={{
                        visibility: !!value ? 'visible' : 'hidden',
                    }}
                />
            )}
            {rightSection}
        </div>
    )
}

export default Input
