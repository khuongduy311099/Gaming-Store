import {
    Button,
    CloseButton,
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import { ReactNode, useState } from 'react'
import styles from './Modal.module.scss'
import { IconX } from '@tabler/icons-react'

type TModalProps = {
    title?: string
    open: boolean
    children: ReactNode
    close: () => void
    withCloseBtn?: boolean
}

const Modal = ({ title, open, children, close, withCloseBtn }: TModalProps) => {
    return (
        <>
            <Transition appear show={open}>
                <Dialog
                    static
                    as='div'
                    className={styles['modal-wrapper']}
                    onClose={close}
                >
                    <div className={styles['modal-inner']}>
                        <TransitionChild
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 transform-[scale(95%)]'
                            enterTo='opacity-100 transform-[scale(100%)]'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 transform-[scale(100%)]'
                            leaveTo='opacity-0 transform-[scale(95%)]'
                        >
                            <DialogPanel>
                                <DialogTitle
                                    className={styles['modal-title']}
                                    as='h3'
                                >
                                    {title}
                                    {withCloseBtn && (
                                        <IconX onClick={() => close()} />
                                    )}
                                </DialogTitle>
                                {children}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default Modal
