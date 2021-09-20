import { LinkedList} from "./LinkedList";

const linkedList = new LinkedList()

for(let i = 1; i<=10; i++){
    linkedList.append(i)
}
console.log(linkedList.toString())

console.log(linkedList.getNthFromEnd(3).toString());
console.log(linkedList.getNthFromEnd(4).toString());
console.log(linkedList.getNthFromEnd(7).toString());
console.log(linkedList.getNthFromEnd(10).toString());
