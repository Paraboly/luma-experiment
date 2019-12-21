/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PwcMap {
    /**
    * Config for the map to be initialized
    */
    'config': object;
    /**
    * Allow to get map instance from pwc-map element
    * @returns Promise which resolves pwc map instance
    * @author SchemeSonic
    */
    'getMap': () => Promise<any>;
  }
}

declare global {


  interface HTMLPwcMapElement extends Components.PwcMap, HTMLStencilElement {}
  var HTMLPwcMapElement: {
    prototype: HTMLPwcMapElement;
    new (): HTMLPwcMapElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-map': HTMLPwcMapElement;
  }
}

declare namespace LocalJSX {
  interface PwcMap {
    /**
    * Config for the map to be initialized
    */
    'config'?: object;
    'onMapInitialized'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'pwc-map': PwcMap;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-map': LocalJSX.PwcMap & JSXBase.HTMLAttributes<HTMLPwcMapElement>;
    }
  }
}


