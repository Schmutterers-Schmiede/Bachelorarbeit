/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyBackdrop {
    }
    interface MyModal {
        "close": () => Promise<void>;
        "content": string;
        "open": () => Promise<void>;
        "title": string;
    }
}
declare global {
    interface HTMLMyBackdropElement extends Components.MyBackdrop, HTMLStencilElement {
    }
    var HTMLMyBackdropElement: {
        prototype: HTMLMyBackdropElement;
        new (): HTMLMyBackdropElement;
    };
    interface HTMLMyModalElement extends Components.MyModal, HTMLStencilElement {
    }
    var HTMLMyModalElement: {
        prototype: HTMLMyModalElement;
        new (): HTMLMyModalElement;
    };
    interface HTMLElementTagNameMap {
        "my-backdrop": HTMLMyBackdropElement;
        "my-modal": HTMLMyModalElement;
    }
}
declare namespace LocalJSX {
    interface MyBackdrop {
    }
    interface MyModal {
        "content"?: string;
        "title"?: string;
    }
    interface IntrinsicElements {
        "my-backdrop": MyBackdrop;
        "my-modal": MyModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-backdrop": LocalJSX.MyBackdrop & JSXBase.HTMLAttributes<HTMLMyBackdropElement>;
            "my-modal": LocalJSX.MyModal & JSXBase.HTMLAttributes<HTMLMyModalElement>;
        }
    }
}
