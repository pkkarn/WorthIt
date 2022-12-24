**Difference between different type of declartion of pointer*


`Node *curr = this->head;` and
`Node* curr = this->head;`

In the first example, Node *curr = this->head;, the * operator is used to declare that curr is a pointer to a Node object. In the second example, Node* curr = this->head;, the * operator is not used in the declaration of curr, but it is still a pointer to a Node object because it is placed next to the Node type. So in both cases, curr is a pointer to a Node object. The only difference is the placement of the * operator in the declaration. In general, it is good practice to use the first style, where the * operator is placed next to the variable name, to make the code easier to read.