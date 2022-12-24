### Pointers:

Pointers are used to store adddress of variables

**Declaration of Pointer**:

```
int x = 10;

int *y = &x; Or int* y = &x; // both of these declarations are right

// also can be declared as

int *y { &a };
```

Want to access value:

`cout << *y;`

Want to modify the value:

`*y = 20; // this will change the value of x as well because this is pointing to that variable.`

**Never declare pointer without initialization{ else it will put garbase data in it}**:

```
int *b = nullptr;
    
cout << b // 0
```