
/**
 * MyModule Class
 */
export class MyModule {
    private name: string;
    constructor() {
        this.setName('My Module : Hello world');
    }

    public setName(name: string) {
        this.name = name;

        return this;
    }

    public getName(){
        return this.name;
    }

    public print() {
        console.log(this.getName());

        return this;
    }
}
