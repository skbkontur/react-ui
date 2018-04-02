/// <reference types="react" />
import * as React from 'react';
import { PopupPosition } from '../Popup';
export declare type TooltipTrigger = 'hover' | 'click' | 'focus' | 'opened' | 'closed';
export declare type TooltipProps = {
    children?: React.ReactNode;
    className?: string;
    /**
     * Показывать крестик для закрытия тултипа. По-умолчанию крестик
     * показывается если проп *trigger* не `hover` и не `focus`.
     */
    closeButton?: boolean;
    /**
     * Функция, которая возвращает содержимое тултипа.
     *
     * Если эта функция вернула `null`, то тултип не показывается.
     */
    render: () => React.ReactNode;
    pos?: PopupPosition;
    trigger?: TooltipTrigger;
    /**
     * Хэндлер, вызываемый при клике по крестику
     */
    onCloseClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * Хэндлер, вызываемый при клике по крестику или
     * снаружи тултипа
     */
    onCloseRequest?: () => void;
    /**
     * Список позиций, которые тултип будет занимать.
     * Если положение тултипа в определенной позиции
     * будет выходить за край экрана, то будет выбрана
     * следующая позиция. Обязательно должен включать
     * позицию указанную в `pos`
     */
    allowedPositions?: PopupPosition[];
};
export declare type TooltipState = {
    opened: boolean;
};
declare class Tooltip extends React.Component<TooltipProps, TooltipState> {
    static defaultProps: {
        pos: string;
        trigger: string;
        allowedPositions: PopupPosition[];
    };
    _hoverTimeout: number | null;
    _wrapperElement: HTMLElement | null;
    state: {
        opened: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
    _renderContent: () => JSX.Element | null;
    _renderCross(): JSX.Element | null;
    private _refWrapper;
    private _getPositions();
    private _getProps();
    private _open();
    private _close();
    private _handleMouseEnter;
    private _handleMouseLeave;
    private _handleClick;
    private _handleClickOutside;
    private _handleFocus;
    private _handleBlur;
    private _handleCrossClick;
}
export default Tooltip;
