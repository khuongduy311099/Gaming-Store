import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/react'
import styles from './Select.module.scss'
import { IconCheck, IconChevronDown } from '@tabler/icons-react'
import { TOption } from '@/app/global-type'

type TSelectProps = {
    options: TOption[]
    value: string
    onChange: (value: string) => void
    className?: string
    width?: number | string
    height?: number | string
}

const Select = ({
    options,
    onChange,
    value,
    width = '100%',
    height = '40px',
}: TSelectProps) => {
    const selectedItem = options.find(i => i.value === value)
    return (
        <div
            className={styles['wrapper']}
            style={{ width: width, height: height }}
        >
            <Listbox value={selectedItem} onChange={e => onChange(e.value)}>
                <ListboxButton className={styles['list-btn']}>
                    <p>{selectedItem?.label}</p>
                    <IconChevronDown size={16} />
                </ListboxButton>
                <ListboxOptions className={styles['list-options-container']}>
                    {options.map(option => (
                        <ListboxOption
                            className={styles['list-item']}
                            key={option.value}
                            value={option}
                        >
                            <span>{option.label}</span>
                            {selectedItem?.value === option.value && (
                                <IconCheck size={16} />
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    )
}

export default Select
