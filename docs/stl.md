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



### Vectors:

A dynamic array that can shrink and grow its size as needed.

```c++
vector<int> arr;
vector<int> arr2 {2,3,4,4};

arr.push_back(3);
arr.push_back(2);

arr.size(); // 2

arr.pop_back(); // delete item from last; 


// copy the vector arr2 entirely inside vector arr3
vector<int> arr3(arr2.begin(), arr2.end() - 2); // 2, 3
vector<int> arr4(arr2); // 2,3,4,4

v.emplace_back(3333); // this one takes lesser time than push_back


// declaration of 2d vector - A vector of 10 size vector and each vector inside has size 20. with default value 444

vector<vector<int>> vec1(10, vector<int> (20, 444));

// 3D Vector Declaration

vector<vector<vector<int>>> vec(10, vector<vector<int>> (15, vector<int>(29, 34339)));

cout << vec.at(9).at(14).at(28);
```

**Important**

1. `vector<int>::iterator it;`

Above line codee is used to declare and iterator type vairable. So, if you have
defined your iterator like this then you don't have to mention it like `auto it`
in for loop.

```c++
  for (it = v.begin(); it != v.end(); ++it) {
    std::cout << *it << std::endl;  // Dereference the iterator to access the element
  }
```

2. `find() method in #include <algorithm>`

`auto(iterator_type) i = std::find(v.begin(), v.end(), 33);`

this one gives you the iterator pointing at first occurence of 33 in vector.

3. `emplace_back` and `push_back`

/**
   * emplace_back() may be faster than push_back() in some cases because it constructs the element in-place within the container, rather than requiring an additional copy or move operation.
  */

```c++

  Point p1 = Point(3,1);
  vector<Point> pointers_data;
  
  // puhsh_back takes element as an argument and copies in vector
  pointers_data.push_back(p1);
  // while emplace_back takes and constructor as an argument and creates an element out it and then places it back.
  pointers_data.emplace_back(5,4);
  
  /**
   * emplace_back() may be faster than push_back() in some cases because it constructs the element in-place within the container, rather than requiring an additional copy or move operation.
  */
  
  cout << pointers_data[1].x;
```




