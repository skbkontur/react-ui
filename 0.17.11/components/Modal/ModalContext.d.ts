/// <reference types="react" />
import * as React from 'react';
export interface CloseProps {
    disableClose?: boolean;
    requestClose: () => void;
}
export interface ModalContextProps {
    close?: CloseProps;
    horizontalScroll?: boolean;
}
export declare const ModalContext: {
    Provider: React.ComponentClass<{
        value: ModalContextProps;
        children: React.ReactNode;
    }>;
    Consumer: React.ComponentClass<{
        children: ((value: ModalContextProps) => React.ReactNode) | [(value: ModalContextProps) => React.ReactNode];
        observedBits?: number | undefined;
    }>;
};
