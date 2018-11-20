/// <reference types="react" />
import * as React from 'react';
import { EventSubscription } from 'fbemitter';
export default class ModalStack {
    static add(component: React.Component, onChange: (stack: ReadonlyArray<React.Component>) => void): EventSubscription;
    static remove(component: React.Component): void;
    private static getStackInfo();
}
