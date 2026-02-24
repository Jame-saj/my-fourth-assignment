### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById is used for select one element by id.
getElementsByClassName is used for select element by class Name.
querySelector is used for select the first element of matching and querySelectorAll is used for select the all element of matching.

### 2. How do you create and insert a new element into the DOM?
Create Element: const newElement = document.createElement('div');
Insert: newElement.className='div-class';
Element into the DOM: document.body.appendChild(newElement);

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a process where a event listener attached to handle it parent's child.
It is very useful for better performance.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a process where a single parent listener manages all child events, bubble up of the dom tree.
It give more efficiency and clean code.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops default action (like a link opening), 
while  
stopPropagation() stops the event from climbing up to parent elements.