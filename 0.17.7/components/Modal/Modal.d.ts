/// <reference types="react" />
import * as React from 'react';
import { EventSubscription } from 'fbemitter';
export interface ModalProps {
    /**
     * Отключает событие onClose, также дизейблит кнопку закрытия модалки
     */
    disableClose?: boolean;
    /**
     * Не закрывать окно при клике на фон.
     */
    ignoreBackgroundClick?: boolean;
    /**
     * Не показывать крестик для закрытия окна.
     */
    noClose?: boolean;
    width?: number | string;
    /**
     * Вызывается, когда пользователь запросил закрытие окна (нажал на фон, на
     * Escape или на крестик).
     */
    onClose?: () => void;
}
export interface ModalState {
    stackPosition: number;
    horizontalScroll: boolean;
}
/**
 * Модальное окно
 *
 * Содержит в себе три компоненты: **Modal.Header**,
 * **Modal.Body** и **Modal.Footer**
 *
 * Для отображения серой плашки в футере в компонент
 * **Footer** необходимо передать пропс **panel**
 */
declare class Modal extends React.Component<ModalProps, ModalState> {
    static Header: typeof Header;
    static Body: typeof Body;
    static Footer: typeof Footer;
    state: ModalState;
    _stackSubscription: EventSubscription | null;
    _centerDOM: Element | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    requestClose: () => void;
    private refCenter;
    private handleStackChange;
    private handleContainerClick;
    private handleKeyDown;
    private checkHorizontalScrollAppearance;
}
export interface HeaderProps {
    close?: boolean;
}
export declare class Header extends React.Component<HeaderProps> {
    render(): JSX.Element;
}
export declare class Body extends React.Component {
    render(): JSX.Element;
}
export interface FooterProps {
    /**
     * Включает серый цвет в футере
     */
    panel?: boolean;
}
/**
 * Футер модального окна.
 */
export declare class Footer extends React.Component<FooterProps> {
    _scrollbarWidth: number;
    render(): JSX.Element;
}
export default Modal;
