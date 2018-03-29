/// <reference types="react" />
import * as React from 'react';
import PropTypes from 'prop-types';
import '../ensureOldIEClassName';
import IconNames from '../Icon/IconNames';
export declare enum ButtonSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
}
export declare enum ButtonType {
    Button = "button",
    Submit = "submit",
    Reset = "reset",
}
export declare enum ButtonUse {
    Default = "default",
    Primary = "primary",
    Success = "success",
    Danger = "danger",
    Pay = "pay",
    Link = "link",
}
export declare type ButtonProps = {
    /** @ignore */
    _noPadding?: boolean;
    /** @ignore */
    _noRightPadding?: boolean;
    active?: boolean;
    align?: React.CSSProperties['textAlign'];
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
    icon?: IconNames;
    loading?: boolean;
    narrow?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
    size: ButtonSize;
    type: ButtonType;
    use: ButtonUse;
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
    static propTypes: {
        active: PropTypes.Requireable<any>;
        arrow: PropTypes.Requireable<any>;
        autoFocus: PropTypes.Requireable<any>;
        borderless: PropTypes.Requireable<any>;
        checked: PropTypes.Requireable<any>;
        disableFocus: PropTypes.Requireable<any>;
        disabled: PropTypes.Requireable<any>;
        focused: PropTypes.Requireable<any>;
        icon: PropTypes.Requireable<any>;
        loading: PropTypes.Requireable<any>;
        narrow: PropTypes.Requireable<any>;
        size: PropTypes.Requireable<any>;
        use: PropTypes.Requireable<any>;
        visuallyFocused: PropTypes.Requireable<any>;
        width: PropTypes.Requireable<any>;
        onClick: PropTypes.Requireable<any>;
        onMouseEnter: PropTypes.Requireable<any>;
        onMouseLeave: PropTypes.Requireable<any>;
        onMouseOver: PropTypes.Requireable<any>;
    };
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
