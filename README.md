# 🚀 TCC

Its a test project for learning how compilers and transpilers like [babel](https://babeljs.io/) work behind the scenes.

It takes your code from `<filename>.tomper` file, compile it, and then displays the result in the terminal

## ✨ Features

- [x] Lexer, parser, transfomer, code generator, and compile, all implemented from scratch.
- [x] Compiles code from file of your choice.
- [x] Support the following operations:

<table>
<thead>
  <tr>
    <th>Operation</th>
    <th>Support</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Addition (+)</td>
    <td align='center'>✅</td>
  </tr>
  <tr>
    <td>Subtraction (-)</td>
    <td align='center'>✅</td>
  </tr>
  <tr>
    <td>Multiplication (x)</td>
    <td align='center'>✅</td>
  </tr>
  <tr>
    <td>Division (/)</td>
    <td align='center'>✅</td>
  </tr>
</tbody>
</table>

## 📃 Program syntax

The program has 3 parts:

1. Call Expressions
2. Caller function
3. Parameters

#### Call Expression

- Call expressions are the expression containing the operations we want to perform like: addition, subtraction etc.
- Every call expression must be written inside round parentheses `( ... )`.

#### Caller functions

- Caller functions are the functions representing the type of operation to be performed.
- Currently there are only 4 caller functions: `add`, `subtract`, `multiply`, and `divide`.
- Caller functions are written inside the call expressions:
  `( add ... )`,
  `( subtract ... )`
  `( multiply ... )`
  `( divide ... )`

#### Parameters

- Every caller function will have two parameters. These parameters can either be numbers or other call expression.
- Parameters are written inside the call expressions, after the caller functions.
- There should be only two parameters (since we are using binary operators like `+`, `-`, `*`, `/`), separated by spaces.

#### Examples:

| **Input**                                  | **Compiled**    | **Output** |
| ------------------------------------------ | --------------- | ---------- |
| `( add 2 4 )`                              | (2+4)           | 6          |
| `( subtract 5 3 )`                         | (5-3)           | 2          |
| `( add 2 ( subtract 5 3 ) )`               | (2+(5-3))       | 4          |
| `( add ( multiply 4 5 ) ( divide 20 4 ) )` | ((4\*5)+(20/4)) | 25         |

## 🛠 Installation and setup

#### Installation

Clone the repository to your local machine.

```
git clone git@github.com:varunKT001/tcc.git
```

#### Testing

You can test different components by using the following command:

```
npm run test
```

#### Compiling

Create a file inside the root of the project with a `.tomper` extension.

Write your code inside the file (following the syntax given above).

```
( add ( add 2 4 ) ( subtract 5 3 ) )
```

Compile and run the file using the following command:

```
npm run compile <filename>.tomper
```
