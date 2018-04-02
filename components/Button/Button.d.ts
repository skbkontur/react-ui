/// <reference types="react" />
import * as React from 'react';
import '../ensureOldIEClassName';
import { IconName } from '../Icon';
export declare type ButtonSize = 'small' | 'medium' | 'large';
export declare type ButtonType = 'button' | 'submit' | 'reset';
export declare type ButtonUse = 'default' | 'primary' | 'success' | 'danger' | 'pay' | 'link';
export declare type ButtonProps = {
    /** @ignore */
    _noPadding?: boolean;
    /** @ignore */
    _noRightPadding?: boolean;
    /**
     * Визуально нажатое состояние.
     */
    active?: boolean;
    align?: React.CSSProperties['textAlign'];
    /**
     * Кнопка со стрелкой.
     */
    arrow?: boolean;
    autoFocus?: boolean;
    borderless?: boolean;
    checked?: boolean;
    children?: React.ReactNode;
    /** @ignore */
    corners?: number;
    disabled?: boolean;
    /** @ignore */
    disableFocus?: boolean;
    error?: boolean;
    focused?: boolean;
    /**
     * Иконка слева от текста кнопки.
     */
    icon?: IconName;
    loading?: boolean;
    narrow?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
    size?: ButtonSize;
    type?: ButtonType;
    /**
     * Вариант использования. Влияет на цвет кнопки.
     */
    use?: ButtonUse;
    /** @ignore */
    visuallyFocused?: boolean;
    warning?: boolean;
    width?: number | string;
};
export declare type ButtonState = {
    focusedByTab: boolean;
};
declare class Button extends React.Component<ButtonProps, ButtonState> {
    static TOP_LEFT: number;
    static TOP_RIGHT: number;
    static BOTTOM_RIGHT: number;
    static BOTTOM_LEFT: number;
    static defaultProps: {
        use: string;
        size: string;
        type: string;
    };
    state: {
        focusedByTab: boolean;
    };
    private _node;
    componentDidMount(): void;
    /**
     * @public
     */
    focus(): void;
    /**
     * @public
     */
    blur(): void;
    render(): React.ReactNode;
    private handleFocus;
    private handleBlur;
    private _ref;
}
export default Button;
