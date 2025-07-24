
---

## 🔹 1. **Destructuring (Object & Array)**

### ✅ Object Destructuring

Extract values from objects:

```js
const book = { title: "Dune", author: "Frank Herbert" };
const { title, author } = book;
console.log(title); // Dune
```

### ✅ Array Destructuring

Extract values from arrays:

```js
const genres = ["sci-fi", "fantasy", "drama"];
const [first, second, ...others] = genres;
console.log(first);  // sci-fi
console.log(others); // ["drama"]
```

---

## 🔹 2. **Spread Operator (`...`)**

### ✅ In Arrays (copy/merge)

```js
const a = [1, 2];
const b = [...a, 3, 4]; 
console.log(b); // [1, 2, 3, 4]
```

### ✅ In Objects (copy/update)

```js
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 };
console.log(updatedUser); // { name: "Alice", age: 26 }
```

---

## 🔹 3. **Rest Operator (`...`)**

Used to collect remaining items.

### ✅ In Destructuring

```js
const { name, ...others } = { name: "Bob", age: 30, job: "dev" };
console.log(others); // { age: 30, job: "dev" }
```

### ✅ In Functions   - > Explain

```js
function add(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(add(1, 2, 3)); // 6
```

---

## 🔹 4. **Ternary Operator (`? :`)**

Short if/else:

```js
const age = 18;
const access = age >= 18 ? "Allowed" : "Denied";
console.log(access); // Allowed
```

---

## 🔹 5. **Logical Operators (`&&`, `||`)**

### ✅ `&&` — returns second value if first is truthy

```js
true && "Show this";     // "Show this"
false && "Don't show";   // false
```

### ✅ `||` — returns first truthy value

```js
false || "Fallback";     // "Fallback"
"Hello" || "World";      // "Hello"
```

---

## 🔹 6. **Nullish Coalescing (`??`)**

Returns right value **only if** left is `null` or `undefined` (not 0 or ''):

```js
const rating = 0;
const finalRating = rating ?? "No rating";
console.log(finalRating); // 0
```

---

## 🔹 7. **Optional Chaining (`?.`)**

Safely access deeply nested properties:

```js
const book = { reviews: { goodreads: { rating: 4.5 } } };
console.log(book.reviews?.goodreads?.rating); // 4.5
console.log(book.reviews?.librarything?.rating); // undefined
```

---

## 🔹 8. **Template Literals**

For multi-line and embedded expressions:

```js
const name = "Alice";
const message = `Hello, ${name}!`;
console.log(message); // Hello, Alice!
```

---

## 🔹 9. **Array Methods**

### ✅ `.map()` — transform array items

```js
[1, 2, 3].map((n) => n * 2); // [2, 4, 6]
```

### ✅ `.filter()` — filter by condition

```js
[1, 2, 3].filter((n) => n > 1); // [2, 3]
```

### ✅ `.reduce()` — sum or accumulate

```js
[1, 2, 3].reduce((sum, n) => sum + n, 0); // 6
```

### ✅ `.sort()` — sort items

```js
[3, 1, 4].sort((a, b) => a - b); // [1, 3, 4]
```

---

## 🔹 10. **Async/Await**

For handling async code like API calls:

```js
async function getData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return data;
}
```

---

## 🔹 11. **CRUD with Arrays Using Spread/Filter/Map**

### ✅ Add:

```js
const books = [...oldBooks, newBook];
```

### ✅ Delete:

```js
const books = oldBooks.filter(book => book.id !== 3);
```

### ✅ Update:

```js
const books = oldBooks.map(book => 
  book.id === 1 ? { ...book, pages: 500 } : book
);
```

---

## 🎯 Real Example: Summary

You used all these concepts in this real-world book example:

```js
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(publicationDate)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
```

---
