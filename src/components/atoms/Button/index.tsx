import {Button as UnstyledButton} from "@headlessui/react";
import {MouseEventHandler} from "react";
import {EButtonVariant} from "./constant";
import styles from "./Button.module.scss";
import clsx from "clsx";
type TButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    variant?: EButtonVariant;
    classNames?: string;
};
const Button = ({
    onClick,
    children,
    variant = EButtonVariant.TRANSPARENT,
    classNames = "",
    ...props
}: TButtonProps) => {
    return (
        <UnstyledButton
            {...props}
            onClick={onClick}
            className={clsx(styles[variant], styles["btn-wrapper"], classNames)}
        >
            {children}
        </UnstyledButton>
    );
};

export default Button;
