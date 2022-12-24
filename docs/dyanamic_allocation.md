**Dynamic Allocation**

Dynamic Allocation means allocating memory for variable at runtime using `new` operator instead of 
compile time. And you can delete it from memory once the task is finished using delete operator.

Runtime means when project is running. And compile time means when project is being transformed 
from source code to machine code by compiler. 

You have use `new` keyword to dynamically allocate the storage at runtime. And

```c++

int *int_ptr {nullptr};

int_ptr = new int; // here instead of assigning int value at compile time we're defined it in a 
// that it will allocate memory to this int_ptr at runtime using new key word

*int_ptr = 40;

cout << *int_ptr; // 40;

// Deallocate memory

delete[] int_ptr;

cout << "Deallocating memory" << *int_ptr; // 0;
```