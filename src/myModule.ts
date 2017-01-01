
/**
 * MyModule Class
 */
export class MyModule {
    private name: string;
    constructor(name: string = 'Hello World') {
        this.setName('My Module : ' + name);
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
