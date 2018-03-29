import { ITheme } from '../theme';
export default function Button(theme: ITheme): {
    [x: string]: {
        backgroundImage: string;
        color: string;
        boxShadow: string | string[][];
        '&:hover': {
            backgroundImage: string;
            boxShadow: string | string[][];
        };
        '&:active': {
            background: string;
            boxShadow: string | string[][];
        };
        '&$active': {
            background: string;
            boxShadow: string | string[][];
        };
    } | {
        boxSizing: string;
        display: string;
        padding: number;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        border: string;
        color: string;
        cursor: string;
        display: string;
        fontFamily: string;
        fontSize: number;
        margin: number;
        outline: number;
        overflow: string;
        position: string;
        width: string;
        '&::-moz-focus-inner': {
            border: number;
            padding: number;
        };
        '&:active': {
            paddingTop: number;
            verticalAlign: number;
            boxShadow?: undefined;
        };
        '&:after': {
            content: string;
            display: string;
            verticalAlign: string;
            width: number;
        };
        '&$focus': {
            boxShadow: string[][];
            position: string;
            zIndex: number;
        };
        '&$checked': {
            background: string;
            boxShadow: string[][];
            color: string;
            paddingTop: string;
            '&:hover': {
                background: string;
                boxShadow: string[][];
            };
            '&$focus': {
                boxShadow: string[][];
                position: string;
                zIndex: string;
            };
        };
        boxSizing?: undefined;
        padding?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        boxSizing?: undefined;
        display?: undefined;
        padding?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        boxShadow: string;
        '&:hover': {
            boxShadow: string;
        };
        '&:active': {
            boxShadow: string;
            paddingTop?: undefined;
            verticalAlign?: undefined;
        };
        boxSizing?: undefined;
        display?: undefined;
        padding?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        position: string;
        whiteSpace: string;
        display: string;
        width: string;
        boxSizing?: undefined;
        padding?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        paddingRight?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        display: string;
        paddingRight: string;
        boxSizing?: undefined;
        padding?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        height: string;
        lineHeight: string;
        padding: string;
        boxSizing?: undefined;
        display?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        fontSize: number;
        height: string;
        lineHeight: string;
        padding: string;
        boxSizing?: undefined;
        display?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        paddingRight: number;
        paddingLeft: number;
        boxSizing?: undefined;
        display?: undefined;
        padding?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        borderRadius: string;
        outline: string;
        textDecoration: string;
        color: string;
        '&:hover': {
            color: string;
        };
        '&$focus': {
            color: string;
        };
        '&:active': {
            color: string;
            verticalAlign: string;
        };
        display: string;
        padding: string;
        margin: string;
        background: string;
        border: string;
        boxShadow: string;
        height: string;
        '& $caption': {
            display: string;
        };
        '&$disabled': {
            boxShadow: string;
            background: string;
        };
        '&$focus $caption': {
            textDecoration: string;
        };
        $icon: {
            paddingRight: number;
        };
        boxSizing?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:after"?: undefined;
        "&$checked"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        background: string;
        boxShadow: string;
        color: string;
        cursor: string;
        pointerEvents: string;
        '&:active': {
            paddingTop: number;
            verticalAlign: number;
            boxShadow?: undefined;
        };
        boxSizing?: undefined;
        display?: undefined;
        padding?: undefined;
        border?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        position: string;
        top: string;
        bottom: string;
        left: string;
        right: string;
        borderRadius: string;
        overflow: string;
        '&:before': {
            content: string;
            height: string;
            position: string;
            opacity: string;
            background: string;
            backgroundSize: string;
            top: string;
            left: string;
            right: string;
            transform: string;
            animation: string;
        };
        boxSizing?: undefined;
        display?: undefined;
        padding?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        from: {
            transform: string;
        };
        to: {
            transform: string;
        };
        boxSizing?: undefined;
        display?: undefined;
        padding?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        extend?: undefined;
    } | {
        borderRadius: string;
        position: string;
        top: string;
        bottom: string;
        left: string;
        right: string;
        boxShadow: string;
        boxSizing?: undefined;
        display?: undefined;
        padding?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    } | {
        extend: string;
        boxShadow: string;
        boxSizing?: undefined;
        display?: undefined;
        padding?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        paddingRight?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
    } | {
        paddingRight: number;
        boxSizing?: undefined;
        display?: undefined;
        padding?: undefined;
        border?: undefined;
        color?: undefined;
        cursor?: undefined;
        fontFamily?: undefined;
        fontSize?: undefined;
        margin?: undefined;
        outline?: undefined;
        overflow?: undefined;
        position?: undefined;
        width?: undefined;
        "&::-moz-focus-inner"?: undefined;
        "&:active"?: undefined;
        "&:after"?: undefined;
        "&$focus"?: undefined;
        "&$checked"?: undefined;
        boxShadow?: undefined;
        "&:hover"?: undefined;
        whiteSpace?: undefined;
        height?: undefined;
        lineHeight?: undefined;
        paddingLeft?: undefined;
        background?: undefined;
        pointerEvents?: undefined;
        top?: undefined;
        bottom?: undefined;
        left?: undefined;
        right?: undefined;
        borderRadius?: undefined;
        "&:before"?: undefined;
        from?: undefined;
        to?: undefined;
        extend?: undefined;
    };
    wrap: {
        boxSizing: string;
        display: string;
        padding: number;
    };
    root: {
        border: string;
        color: string;
        cursor: string;
        display: string;
        fontFamily: string;
        fontSize: number;
        margin: number;
        outline: number;
        overflow: string;
        position: string;
        width: string;
        '&::-moz-focus-inner': {
            border: number;
            padding: number;
        };
        '&:active': {
            paddingTop: number;
            verticalAlign: number;
        };
        '&:after': {
            content: string;
            display: string;
            verticalAlign: string;
            width: number;
        };
        '&$focus': {
            boxShadow: string[][];
            position: string;
            zIndex: number;
        };
        '&$checked': {
            background: string;
            boxShadow: string[][];
            color: string;
            paddingTop: string;
            '&:hover': {
                background: string;
                boxShadow: string[][];
            };
            '&$focus': {
                boxShadow: string[][];
                position: string;
                zIndex: string;
            };
        };
    };
    active: {};
    focus: {};
    checked: {};
    borderless: {
        boxShadow: string;
        '&:hover': {
            boxShadow: string;
        };
        '&:active': {
            boxShadow: string;
        };
    };
    caption: {
        position: string;
        whiteSpace: string;
        display: string;
        width: string;
    };
    icon: {
        display: string;
        paddingRight: string;
    };
    sizeSmall: {
        height: string;
        lineHeight: string;
        padding: string;
    };
    sizeMedium: {
        fontSize: number;
        height: string;
        lineHeight: string;
        padding: string;
    };
    DEPRECATED_sizeMedium: {
        fontSize: number;
        height: string;
        lineHeight: string;
        padding: string;
    };
    sizeLarge: {
        fontSize: number;
        height: string;
        lineHeight: string;
        padding: string;
    };
    buttonWithIcon: {
        paddingRight: number;
        paddingLeft: number;
    };
    default: {
        backgroundImage: string;
        color: string;
        boxShadow: string | string[][];
        '&:hover': {
            backgroundImage: string;
            boxShadow: string | string[][];
        };
        '&:active': {
            background: string;
            boxShadow: string | string[][];
        };
        '&$active': {
            background: string;
            boxShadow: string | string[][];
        };
    };
    primary: {
        backgroundImage: string;
        color: string;
        boxShadow: string | string[][];
        '&:hover': {
            backgroundImage: string;
            boxShadow: string | string[][];
        };
        '&:active': {
            background: string;
            boxShadow: string | string[][];
        };
        '&$active': {
            background: string;
            boxShadow: string | string[][];
        };
    };
    success: {
        backgroundImage: string;
        color: string;
        boxShadow: string | string[][];
        '&:hover': {
            backgroundImage: string;
            boxShadow: string | string[][];
        };
        '&:active': {
            background: string;
            boxShadow: string | string[][];
        };
        '&$active': {
            background: string;
            boxShadow: string | string[][];
        };
    };
    danger: {
        backgroundImage: string;
        color: string;
        boxShadow: string | string[][];
        '&:hover': {
            backgroundImage: string;
            boxShadow: string | string[][];
        };
        '&:active': {
            background: string;
            boxShadow: string | string[][];
        };
        '&$active': {
            background: string;
            boxShadow: string | string[][];
        };
    };
    pay: {
        backgroundImage: string;
        color: string;
        boxShadow: string | string[][];
        '&:hover': {
            backgroundImage: string;
            boxShadow: string | string[][];
        };
        '&:active': {
            background: string;
            boxShadow: string | string[][];
        };
        '&$active': {
            background: string;
            boxShadow: string | string[][];
        };
    };
    link: {
        borderRadius: string;
        outline: string;
        textDecoration: string;
        color: string;
        '&:hover': {
            color: string;
        };
        '&$focus': {
            color: string;
        };
        '&:active': {
            color: string;
            verticalAlign: string;
        };
        display: string;
        padding: string;
        margin: string;
        background: string;
        border: string;
        boxShadow: string;
        height: string;
        '& $caption': {
            display: string;
        };
        '&$disabled': {
            boxShadow: string;
            background: string;
        };
        '&$focus $caption': {
            textDecoration: string;
        };
        $icon: {
            paddingRight: number;
        };
    };
    disabled: {
        background: string;
        boxShadow: string;
        color: string;
        cursor: string;
        pointerEvents: string;
        '&:active': {
            paddingTop: number;
            verticalAlign: number;
        };
    };
    loading: {
        position: string;
        top: string;
        bottom: string;
        left: string;
        right: string;
        borderRadius: string;
        overflow: string;
        '&:before': {
            content: string;
            height: string;
            position: string;
            opacity: string;
            background: string;
            backgroundSize: string;
            top: string;
            left: string;
            right: string;
            transform: string;
            animation: string;
        };
    };
    btn_loading: {};
    btn_loading_arrow: {};
    warning: {
        borderRadius: string;
        position: string;
        top: string;
        bottom: string;
        left: string;
        right: string;
        boxShadow: string;
    };
    error: {
        extend: string;
        boxShadow: string;
    };
    narrow: {
        paddingLeft: number;
        paddingRight: number;
    };
    noPadding: {
        paddingLeft: number;
        paddingRight: number;
    };
    noRightPadding: {
        paddingRight: number;
    };
    arrow: {};
    wrap_arrow: {};
    arrow_loading: {};
    arrow_warning: {};
    arrow_error: {};
};
