// Type definitions for MyModule 0.0.1
// Project: MyModule
// Definitions by: tvicpe

/*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace MyModule;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */


/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */
declare namespace MyModule {
    export class MyModule {
        constructor(name?: string);
        setName(name: string):any;
        getName():string;
        print():any;
    }


}

export = MyModule;
