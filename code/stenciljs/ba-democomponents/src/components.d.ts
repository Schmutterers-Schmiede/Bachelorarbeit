/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyChild {
    }
    interface MyEventEmitter {
    }
    interface MyEventListener {
    }
    interface MyMover {
    }
    interface MyParent {
    }
    interface MyPropbinding {
        "input": string;
    }
}
export interface MyEventEmitterCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyEventEmitterElement;
}
declare global {
    interface HTMLMyChildElement extends Components.MyChild, HTMLStencilElement {
    }
    var HTMLMyChildElement: {
        prototype: HTMLMyChildElement;
        new (): HTMLMyChildElement;
    };
    interface HTMLMyEventEmitterElement extends Components.MyEventEmitter, HTMLStencilElement {
    }
    var HTMLMyEventEmitterElement: {
        prototype: HTMLMyEventEmitterElement;
        new (): HTMLMyEventEmitterElement;
    };
    interface HTMLMyEventListenerElement extends Components.MyEventListener, HTMLStencilElement {
    }
    var HTMLMyEventListenerElement: {
        prototype: HTMLMyEventListenerElement;
        new (): HTMLMyEventListenerElement;
    };
    interface HTMLMyMoverElement extends Components.MyMover, HTMLStencilElement {
    }
    var HTMLMyMoverElement: {
        prototype: HTMLMyMoverElement;
        new (): HTMLMyMoverElement;
    };
    interface HTMLMyParentElement extends Components.MyParent, HTMLStencilElement {
    }
    var HTMLMyParentElement: {
        prototype: HTMLMyParentElement;
        new (): HTMLMyParentElement;
    };
    interface HTMLMyPropbindingElement extends Components.MyPropbinding, HTMLStencilElement {
    }
    var HTMLMyPropbindingElement: {
        prototype: HTMLMyPropbindingElement;
        new (): HTMLMyPropbindingElement;
    };
    interface HTMLElementTagNameMap {
        "my-child": HTMLMyChildElement;
        "my-event-emitter": HTMLMyEventEmitterElement;
        "my-event-listener": HTMLMyEventListenerElement;
        "my-mover": HTMLMyMoverElement;
        "my-parent": HTMLMyParentElement;
        "my-propbinding": HTMLMyPropbindingElement;
    }
}
declare namespace LocalJSX {
    interface MyChild {
    }
    interface MyEventEmitter {
        "onSecretRevealed"?: (event: MyEventEmitterCustomEvent<number>) => void;
    }
    interface MyEventListener {
    }
    interface MyMover {
    }
    interface MyParent {
    }
    interface MyPropbinding {
        "input"?: string;
    }
    interface IntrinsicElements {
        "my-child": MyChild;
        "my-event-emitter": MyEventEmitter;
        "my-event-listener": MyEventListener;
        "my-mover": MyMover;
        "my-parent": MyParent;
        "my-propbinding": MyPropbinding;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-child": LocalJSX.MyChild & JSXBase.HTMLAttributes<HTMLMyChildElement>;
            "my-event-emitter": LocalJSX.MyEventEmitter & JSXBase.HTMLAttributes<HTMLMyEventEmitterElement>;
            "my-event-listener": LocalJSX.MyEventListener & JSXBase.HTMLAttributes<HTMLMyEventListenerElement>;
            "my-mover": LocalJSX.MyMover & JSXBase.HTMLAttributes<HTMLMyMoverElement>;
            "my-parent": LocalJSX.MyParent & JSXBase.HTMLAttributes<HTMLMyParentElement>;
            "my-propbinding": LocalJSX.MyPropbinding & JSXBase.HTMLAttributes<HTMLMyPropbindingElement>;
        }
    }
}
