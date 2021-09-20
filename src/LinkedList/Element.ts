export class Element {
    private elem;
    public next;

    constructor(elem) {
        this.elem = elem;
        this.next = null;
    }

    toString(){
        return this.elem.toString()
    }
}