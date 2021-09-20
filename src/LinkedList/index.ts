import { Element } from "./Element";

export class LinkedList {
    private head = null;
    private len = 0;

    public append(elem) {
        let node = new Element(elem);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    }

    public removeAt(pos) {
        if (pos > -1 && pos < this.len) {
            let current = this.head;
            let previous;
            let index = 0;

            if (pos === 0) {
                this.head = current.next;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.len--;
            return current.elem;
        } else {
            return null;
        }
    }


    public insert(elem, pos) {
        if (pos > -1 && pos < this.len) {
            let current = this.head;
            let index = 0;
            let previous;
            let node = new Element(elem);

            if (pos === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.len++;
            return true;
        } else {
            return false;
        }
    }

    public getNthFromEnd(n:number):Element|null{
        let current = this.head;
        let result = this.head;
        let currentPosition = 0;
        while(current){
            currentPosition++;
            if(currentPosition>n) {
                result = result.next;
            }
            current = current.next;
        }
        if(currentPosition>=n){
            return result;
        }else{
            return null;
        }
    }

    public toString() {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.elem; //output is undefinedundefinedundefined
            str += " "
            // str += JSON.stringify(current);
            // prints out {"next":{"next":{}}}{"next":{}}{}
            current = current.next;
        }
        return str;
    }
}