/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyMover {
    }
}
declare global {
    interface HTMLMyMoverElement extends Components.MyMover, HTMLStencilElement {
    }
    var HTMLMyMoverElement: {
        prototype: HTMLMyMoverElement;
        new (): HTMLMyMoverElement;
    };
    interface HTMLElementTagNameMap {
        "my-mover": HTMLMyMoverElement;
    }
}
declare namespace LocalJSX {
    interface MyMover {
    }
    interface IntrinsicElements {
        "my-mover": MyMover;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-mover": LocalJSX.MyMover & JSXBase.HTMLAttributes<HTMLMyMoverElement>;
        }
    }
}
