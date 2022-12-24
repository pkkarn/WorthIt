To dereference a pointer in C++ means to access the value stored at the memory address that the pointer points to. This is done using the * symbol, which is known as the "dereference" operator.

For example, consider the following code:

```
int x = 5;
int *ptr = &x;
```

Here, ptr is a pointer that points to the memory address of the x variable. If we want to access the value stored at that memory address, we can use the * symbol to dereference the pointer, like this:

```
int y = *ptr;
```

**best example**:

```
#include <iostream>
using namespace std;

int main() {
    int a = 20;
    
    // pointer variable is used to store address of another variable.
    int *b = &a;
    
    // Derefrencing is used to access value at stored of pointer * + ptrVariable;
    cout << *b;  // 20
    
    int x = 20;
    int &y = x;
    
    cout << y; // 20;
}
```


### Derefrencing Array pointers

When you call array in C++, then it gives you address directly. which means that you dont have to refrence it with & to access it address.

`int arr[] {1,23,3,2,2};`

Declaring Pointer

`int *ptr = arr; // as arr will give you an address`

**Accessing and Modifiying Value of pointer array** 

In order to access the array type pointer derefrence it with *(ptrVariable + index)

`cout << *(ptr + 3); // 2`

Similarly, you can also modify the value of this;

`*(ptr + 1) = 3243; // arr[1] would be 3243`

Also you can store specific variable location inside pointer instead of entire array.

```c++
int test[] {1,2,3,4,4};
int *temp = &test[1];
*temp = 33043;
cout << test[1]; // 33043
```

**Vector Refrencing**


```c++

vector<string> title {"Game", "of", "thrones"};

vector<string> *str_ptr { &title }; // In vector, you have to attach &

(*str_ptr)[1] = " Let me test ";

cout << (*str_ptr)[0]; // Game
cout << (*str_ptr)[1]; //  Let me test 
cout << (*str_ptr)[2] << endl; // thrones

```
   
