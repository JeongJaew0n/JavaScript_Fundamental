class A{
    print(){
        console.log("A");
    }
}

class B extends A{
    print(){
        super();
        console.log("B");
    }
}

class C extends B{
    print(){
        console.log("C");
    }

    printB() {
        super.print();
    }
    
    printA() {
        super.call(super.print());
    }
}

let c = new C;