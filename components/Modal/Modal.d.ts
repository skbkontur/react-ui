/// <reference types="react" />
import * as React from 'react';
import { EventSubscription } from 'fbemitter';
import { Footer } from './ModalFooter';
import { Header } from './ModalHeader';
import { Body } from './ModalBody';
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
export default Modal;
