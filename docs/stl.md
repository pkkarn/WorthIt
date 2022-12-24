## Namespace std:

Namespace is used to define scope of a variabes. You can have multiple variables with the same name but in different namespaces(scope).

```c++
namespace pkkarn {
    std::string name = "PK Karn";
}

int main() {
    std::string name = "Default"

    std::cout << name << std::endl; // Default
    std::cout << pkkarn::name << std::endl; // PK Karn
}
```

You can also declare function & etc inside these namespace.


## Struct: 

Struct is used to create a Data type of multiple data types. Basically its kind of an object(like javascript) in which you can have different types of data variable.

**Important** In struct, defined variables are automatically set to public unlike a Class.

> Intialization:

```c++
struct Person {
    int id;
    string name;
    int age = 10;

    /**Constructor */

    Person(int _id, string name, int age) {
        id = _id; // correct version
        this->name = name; // correct version
        this->age = age; // correct version
    }
}
```


**Error Analysis**:

`Person pkkarn = new Person(1, "PK Karn", 13);`

- First thing that we don't instantiate `struct` in C++ using `new` keyword.
- Our constructor variable is same as local variable of constructor. So, it's 
reinitalizing itself. either use different name for constructor args or use `this` pointer
to access Current object data.

**Important**

1. In struct, you can also use `new` operator like this.

`Person *pkkarn = new Person(1, "PK Karn", 13);`

But in the above code `new` keyword will dynamically allocate memory and assign it to
pointer variable called `pkkarn`. So, its different and its not like you instantiated 
struct using `new`.

2. -> is shortand way to dereference the ptr variable and then to access its member variable.

`cout << pkkarn->id;` Or `cout << (*pkkarn).id;`

Both of the above are correct.

```c++
    // Person is Class
    Person pkkarn = Person(1, "PK Karn", 13);

    // StructPerson is struct
    StructPerson addiction1 = StructPerson(1, "Addiction 1", 13);

    // Object type access
    
    cout << pkkarn.name << endl; // PK Karn
    cout << addiction1.name << endl; // Addiction 1

    // Instantiating variable dynamically using `new operator

    Person *pkkarn = new Person(1, "PK Karn", 13);
    StructPerson *addiction1 = new StructPerson(1, "Addiction 1", 13);

    // -> is shorthand way to derefrence pointer variables
    cout << pkkarn->name << endl; // PK Karn
    cout << addiction1->name << endl; // Addiction 1

    cout << (*pkkarn).name << endl; // PK Karn
    cout << (*addiction1).name << endl; // Addiction 1


    // ------------------------ Static Allocation and then storing it in varibale/

    Person *pkkarn = &pkkarn1;
    StructPerson *addiction1 = &addiction12;
```

## Containers

In C++, containers are classes or structs that are used to store and manage collections of objects. The standard library provides several container classes that you can use to store and manage data in your C++ programs, including:

### array container

We all know that array is fixed size data type, where all elements are stored at contiguous
memory location. But there is no bound checking in defualt one right.

`int arr[3] = {1, 2, 3};`

```c++
int item[4] = {0};
cout << item[4];
```

As in the above code because there was no bound checking or additional internal method available to access element. So, when you use its traditional method to access data then it's simply gonna return some garbage value located at that memory location.

But you can prevent this by using `array` container available in C++ STL

```c++
array<int, 3> arr {0};

arr.fill(4) // Used to intailized and set and all the elements in array to value 4

cout << array.at(4); // will throw an error;
cout << array.size(); // will show no. of elements in the array
```

**Iterators in array containers:**

```c++

array<int, 5> arr {32,12,3,34,3};
    
    // auto rt = arr.rbegin();   // ptr value pointing to last item;
    // auto rt_end = arr.rend(); //  // ptr value pointing to address of first it - 1
    
    cout << arr.begin() << endl; // ptr value pointing to first item
    cout << arr.end() << endl; // ptr value pointing to (lastItem + 1);
    
     auto rit_end = arr.rend(); // these are not memeber function so just can print it // pointing to the right before the start
     auto rit_begin = arr.rbegin(); // pointing to last item
    
    for(auto i = arr.begin(); i != arr.end(); i++) {
        cout << *i << endl; // derefrencing to access its value;
    }
    
    
    for(auto i = rit_begin; i != rit_end; i++) {
        cout << *i << endl;
    }
```




