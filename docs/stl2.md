# STL 2

## Table of contents:

- set
- unordered set
- map
- multi map
- queue
- stack
- list
- struct


## Sets

Sets basically remove all the duplicates from the list. And there will be only one unique copy of the each item in the list.

set are used to store unique value in lists.

**Declaration**:

```c++

#include <set>

set<int> my_set;
    
my_set.insert(1);
my_set.insert(1);
my_set.insert(2);
my_set.insert(3);
my_set.insert(3);
my_set.insert(223);

for(auto i: my_set) {
    cout << i << endl; // 1 - 3
}


my_set.erase(1);

my_set.erase(myse)

```

**Methods**:

- `insert`: used to insert value at last;
- `erase`: used to remove particular value from set `erase(3)`
- `empty`: Returns true if the set is empty, false otherwise.
- `size`: Returns the number of elements in the set.
- `count`: Returns 1 if the element is in the set, 0 otherwise.
- `insert`: Inserts an element into the set.
- `erase`: Removes an element from the set.
- `clear`: Removes all elements from the set.
- `begin`: Returns an iterator to the first element in the set.
- `end`: Returns an iterator to the end of the set.
- `find`: Returns an iterator to the element in the set, or to the end of the set if the element is not found.

```c++
#include <iostream>
#include <set>
#include <iterator> // for std::distance
using namespace std;

int main() {
    set<int> my_set;
    
    my_set.insert(1);
    my_set.insert(1);
    my_set.insert(2);
    my_set.insert(3);
    my_set.insert(23);
    my_set.insert(33);

     // because erase takes iterator to the element
    my_set.erase(my_set.begin(), next(my_set.begin(), 2)); // this one works
    
    // not range of element
    // my_set.erase(my_set.begin(), my_set.begin() + 2); 
    for(auto i: my_set)
        cout << i << endl;
    
    for(auto i = my_set.begin(); distance(my_set.begin(), i) < 2; i++) {
        cout << *i << endl;
    }
}
```

## Maps

In C++, `map` is a container that is used to store key-value pairs. And it is implemented as a [red black](## "It's a kind of self-balancing tree(You have to look more deeper into it)") tree.

**Here are some of its common methods:**

- `begin()`: Returns an iterator pointing to the first element in the map.
- `clear()`: Removes all elements from the map.
- `count(key)`: Returns the number of elements with the specified key.
- `empty()`: Returns a boolean value indicating whether the map is empty.
- `end()`: Returns an iterator pointing to the element following the last element in the map.
- `erase(key)`: Removes the element with the specified key from the map.
- `find(key)`: Returns an iterator pointing to the element with the specified key, or end() if the key is not found.
- `insert(pair)`: Inserts a new element with the specified key and value into the map.
- `size()`: Returns the number of elements in the map.

In map, `map[]:operator` is used to assign value if the item doesn't exist, and if it exists then it will simply override the exisiting value. similarly, you can also use `insert` method to insert value into the map.

`map_varaible.insert(pair<string, int>("key","value"))`;

**Main Differences in `insert` and `[]`**

- when you use `[]` operator then it basically overrides the exsiting element at specific key, if that exists.
- but using `insert` doesn't override or add new element if item already exist.

```c++
    points.insert(pair<string, int>("pkkarn", 10));
    points.insert(pair<string, int>("pkkarn", 100));
    
    cout << points["pkkarn"] << endl; // 10
    
    points["nischay"] = 345;
    points["nischay"] = 22;

    cout << points["nischay"]; // 22
```

You can also store mutliple value at specific key.

```c++
    map<string, pair<string, int>> points;

    points["pkkarn"] = pair<string,int>("point", 203); // to stor pair type value
    
    cout << points["pkkarn"].first << endl; // you can access first value in pair using `first`
    cout << points["pkkarn"].second << endl; // you can access first value in pair using `second`
```

**Building a nested map**

```c++
    
  map<string, map<string, int>> nested;
  
  /**Insert 1**/
  
  nested["pkkarn"]["age"] = 3434;
  nested["pkkarn"]["name"] = 443;
  
  cout << nested["pkkarn"]["age"] << endl;
  
  /**Insert 2**/
  
  nested.emplace("naruto", map<string, int>{{ "age", 334}, {"name", 432}});
  
  cout << nested["naruto"]["name"] << endl;
  cout << nested["naruto"]["age"] << endl;
  
    /**Insert 2**/
  
  nested.insert(pair("hinata", map<string, int>{{ "age", 30}, {"name", 32}}));
  
  cout << nested["hinata"]["name"] << endl;
  cout << nested["hinata"]["age"] << endl;
```

Also can be done like this:

```c++
  map<string, map<string, int>> nested;
  
  nested["itme"] = {
      {"age", 4},
      {"name", 44}
  };
  
  cout << nested["itme"]["age"];
```


**To simplify `pair` function you can also replace it with `make_pair`**

But for that you have to import `utility`

```c++

import <utility>

nested.insert(pair<int, string>(2, "test"))// OR
nested.insert(make_pair(2, "test"))//

