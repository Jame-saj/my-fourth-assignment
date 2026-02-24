### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById is used for select one element by id.
getElementsByClassName is used for select element by class Name.
querySelector is used for select the first element of matching and querySelectorAll is used for select the all element of matching.

### 2. How do you create and insert a new element into the DOM?
Create Element: const newElement = document.createElement('div');
Insert: newElement.className='div-class';
Element into the DOM: document.body.appendChild(newElement);