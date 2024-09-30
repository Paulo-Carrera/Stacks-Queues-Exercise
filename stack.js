/** Node: node for a stack. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** Stack: chained-together nodes where you can
   *  remove from the top or add to the top. */
  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    /** push(val): add new value to end of the stack. Returns undefined. */
  
    push(val){
        let newNode = new Node(val);
        if(this.first === null){
            this.first = newNode ;
            this.last = newNode ;
        }else{
            newNode.next = this.first ;
            this.first = newNode ;
        }
        this.size ++ ;
    }
  
    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */
  
    pop(){
        if(this.first){
            let temp = this.first ;
            this.first = this.first.next ;
            this.size -- ;
            return temp.val;
        }else {
            throw new Error('STACK IS EMPTY!!!');
        }
    }
  
    /** peek(): return the value of the first node in the stack. */
  
    peek() {
        if(this.first){
            return this.first.val ;
        }else {
            return null ;
        }
    }
  
    /** isEmpty(): return true if the stack is empty, otherwise false */
  
    isEmpty() {
        return this.size === 0 ; 
    }
  }
  
  module.exports = Stack;
  