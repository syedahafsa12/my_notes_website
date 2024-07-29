"use client";

import { useRouter } from 'next/navigation';
import withAuth from '@/app/components/withAuth'; // Adjust the path if needed

const TypeScriptNotes: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('authenticated');
    router.push('/login');
  };
  let firstname = "syeda"
  let lastname = "hafsa"
  let lessthansign = "<"
  let whitespace = "${whitespace}"
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700">TypeScript Notes</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="space-y-8">
          {/* Class 2 */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Class 2: Variables and Basics</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Variables:</strong> Variables are like &quot;boxes&quot; where you can store values. Use <code>let</code>, <code>const</code>, and avoid <code>var</code> to prevent errors.</li>
              <li><strong className="font-semibold">Naming:</strong> Variable names should not contain special characters or uppercase letters. You can use <code>$</code> and <code>_</code>.</li>
              <li><strong className="font-semibold">String:</strong> Text inside double quotes is a string. Numbers are not strings. Example: <code>let name: string = &quot;Alice&quot;;</code></li>
              <li><strong className="font-semibold">Boolean:</strong> Values that are either <code>true</code> or <code>false</code>. Example: <code>let isStudent: boolean = true;</code></li>
              <li><strong className="font-semibold">Undefined:</strong> A variable without a value is <code>undefined</code>. Example: <code>let fullname;</code></li>
              <li><strong className="font-semibold">Template Literals:</strong> Use <code>``</code> to embed variables within strings: <code>console.log(`My name is ${firstname} ${lastname}`);</code></li>
              <li><strong className="font-semibold">Watching TypeScript:</strong> Use <code>tsc -w</code> to watch for changes.</li>
              <li><strong className="font-semibold">Operators:</strong>
                <ul className="list-inside list-disc mt-2">
                  <li><code>*</code> for multiplication</li>
                  <li><code>/</code> for division</li>
                  <li><code>**</code> for exponentiation</li>
                  <li><code>%</code> for modulus</li>
                  <li><code>==</code> for comparison (value only)</li>
                  <li><code>===</code> for strict comparison (value and type)</li>
                  <li><code>!</code> for negation</li>
                </ul>
              </li>
              <li><strong className="font-semibold">If Statements:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let x = 5;
let y = 6;
if (x > 18) {
  document.write("This is true");
}`}
                </pre>
              </li>
              <li><strong className="font-semibold">Project Configuration:</strong>
                <ul className="list-inside list-disc mt-2">
                  <li>Update <code>tsconfig.json</code> for ES 2022 and Node module resolution.</li>
                  <li>Add <code>&quot;type&quot;: &quot;module&quot;</code> in <code>package.json</code>.</li>
                </ul>
              </li>
              <li><strong className="font-semibold">Number Guessing Game:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`const systemGeneratedNo = Math.floor(Math.random() * 10);
const userGuess = prompt("Guess a number between 0 and 9");
if (parseInt(userGuess) === systemGeneratedNo) {
  console.log("Congratulations! You guessed correctly.");
} else {
  console.log("Try again!");
}`}
                </pre>
              </li>
              <li><strong className="font-semibold">Logical Operators:</strong>
                <ul className="list-inside list-disc mt-2">
                  <li><code>&&</code> for AND</li>
                  <li><code>||</code> for OR</li>
                  <li><code>!</code> for NOT</li>
                </ul>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`console.log(false && true); // Output: false
console.log(true || false); // Output: true`}
                </pre>
              </li>
              <li><strong className="font-semibold">If / Else Statement:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let age = 50;
if (age >= 18 && age <= 40) {
  document.write("This is true");
} else {
  document.write("This is false");
}`}
                </pre>
              </li>
              <li><strong className="font-semibold">If / Else / If Statement:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let country = "Pakistan";
let age = 18;

if (country === "Pakistan" && age >= 18) {
  console.log("Here is your ticket");
} else if (country !== "Pakistan" && age < 18) {
  console.log("Invalid country and Age restriction");
} else if (country !== "Pakistan") {
  console.log("Invalid country");
} else {
  console.log("Age restriction");
}`}
                </pre>
              </li>
              <li><strong className="font-semibold">Ternary Operator:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`const age = 15;
const drive = age >= 19 ? "Yes, drive" : "No, drive";
document.write(drive);`}
                </pre>
              </li>
              <li><strong className="font-semibold">Switch Case:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let month = 12;

switch (month) {
  case 1:
    document.write('January');
    break;
  case 2:
    document.write('February');
    break;
  // other cases
  case 12:
    document.write('December');
    break;
  default:
    document.write('Invalid month');
}`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Class 3 */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Class 3: Advanced Concepts</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Any Type:</strong> If you don&apos;t specify a type, it&apos;s <code>any</code>. Example: <code>let username;</code></li>
              <li><strong className="font-semibold">Logical Operators in Practice:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`console.log(false && true); // Output: false
console.log(true || false); // Output: true`}
                </pre>
              </li>
              <li><strong className="font-semibold">Arrays:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let names = ["Zunaira", "Eshal", "Maryam"];
console.log(names[0]); // Prints "Zunaira"
console.log(names[1]); // Prints "Eshal"
console.log(names[2]); // Prints "Maryam"`}
                </pre>
              </li>
              <li><strong className="font-semibold">Array Methods:</strong>
                <ul className="list-inside list-disc mt-2">
                  <li><code>push()</code> to add items to the end of an array.</li>
                  <li><code>pop()</code> to remove items from the end of an array.</li>
                  <li><code>unshift()</code> to add items to the beginning of an array.</li>
                  <li><code>shift()</code> to remove items from the beginning of an array.</li>
                  <li><code>splice()</code> to add or remove items at a specific index.</li>
                  <li><code>slice()</code> to remove items from a specific index.</li>
                </ul>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon"); // Removes "Apple" and adds "Lemon" at index 2
fruits.splice(2, 0, "Kiwi"); // Adds "Kiwi" at index 2 without removing anything`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Class 4 */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Class 4: Functions and Arrays</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Functions:</strong> Functions need to be called to execute. Example:
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`function greet() {
  console.log("Hello, World!");
}
greet(); // Calls the function`}
                </pre>
              </li>
              <li><strong className="font-semibold">Array Datatype:</strong> Arrays can hold values of specific types. Example: <code>boolean[]</code> for an array of booleans.</li>
            </ul>
          </section>
          {/* For Loop */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">For Loop</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Syntax:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`for (let i = 0; i < 10; i++) {
  console.log(i);
}`}
                </pre>
                <p>This loop runs from 0 to 9 and prints each value of i. The loop continues as long as the condition <code>i {lessthansign} 10</code> is true.</p>
              </li>
            </ul>
          </section>

          {/* Objects */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Objects</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Creating an Object:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let video1 = {
  title: "video1",
  description: "video 1 description",
  image: "https://image.com"
};

console.log(video1.title);`}
                </pre>
                <p>To access properties of an object, use <code>video1.title</code>. Accessing properties via array indexing can lead to problems.</p>
              </li>
            </ul>
          </section>

          {/* Scope and Variables */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Scope and Variables</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Block Scope:</strong> Variables declared with <code>let</code> or <code>const</code> are block-scoped and not accessible outside the block.</li>
              <li><strong className="font-semibold">Function Scope:</strong> Variables declared with <code>var</code> are function-scoped.</li>
              <li><strong className="font-semibold">Global Scope:</strong> Variables declared outside of functions or blocks are globally scoped.</li>
              <li><strong className="font-semibold">Example:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`if (true) {
  let a = 20;
  const b = 10;
  var c = 30;
}
console.log(a); // Error: a is not defined
console.log(b); // Error: b is not defined
console.log(c); // 30`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Export & Import */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Export & Import</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Named Export:</strong> Use curly brackets for exporting multiple items.</li>
              <li><strong className="font-semibold">Default Export:</strong> Export a single item without curly brackets. Example:
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`// module.ts
export default function add(a: number, b: number) {
  return a + b;
}

// index.ts
import add from './module';`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Using npm Packages */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Using npm Packages</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Initializing a Project:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`npm init --yes`}
                </pre>
              </li>
              <li><strong className="font-semibold">Installing Packages:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`npm install inquirer
npm install @types/node --save-dev
npm install @types/inquirer --save-dev`}
                </pre>
                <p>For TypeScript, you need to install types for packages as well.</p>
              </li>
            </ul>
          </section>

          {/* Example Assignment */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Example Assignment: Calculator</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Code:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`import inquirer from "inquirer";

async function calculate() {
  let { FirstNumber, SecondNumber, Operation } = await 
  inquirer.prompt([
    {
      type: "input",
      name: "FirstNumber",
      message: "Enter First number:",
      validate: (ans) => ans ? true : "Please provide an answer"
    },
    {
      type: "input",
      name: "SecondNumber",
      message: "Enter Second number:",
      validate: (ans) => ans ? true : "Please provide an answer"
    },
    {
      type: "input",
      name: "Operation",
      message: "Enter the operation (+, -, *, /):",
      validate: (ans) => ans ? true : "Please provide an answer"
    }
  ]);

  const num1 = parseFloat(FirstNumber);
  const num2 = parseFloat(SecondNumber);

  if (Operation === "+") {
    console.log(\`Result: \${num1 + num2}\`);
  } else if (Operation === "-") {
    console.log(\`Result: \${num1 - num2}\`);
  } else if (Operation === "*") {
    console.log(\`Result: \${num1 * num2}\`);
  } else if (Operation === "/") {
    console.log(\`Result: \${num1 / num2}\`);
  } else {
    console.log("Invalid operation.");
  }
}

calculate();`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Union and Intersection Types */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Union and Intersection Types</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Union Type:</strong> Allows a variable to be one of several types.
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let a: string | boolean | number = "hafsa";
a = 10;
a = "hi";`}
                </pre>
              </li>
              <li><strong className="font-semibold">Intersection Type:</strong> Combines multiple types into one.
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`type student = {
  name: string;
  rollnumber: number;
};
type teacher = {
  name: string;
  experience: number;
};

let both: student & teacher = {
  name: "hafsa",
  rollnumber: 6,
  experience: 6
};`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Type Guards and Literal Types */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Type Guards and Literal Types</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Type Guard:</strong> Checks the type of a variable.
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let age: string | number;
age = 24;

if (typeof age === "number") {
  console.log(age.toFixed(2)); // Only works if age is a number
}`}
                </pre>
              </li>
              <li><strong className="font-semibold">Literal Type:</strong> Restricts the value of a variable to a specific set.
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let trafficLight: "yellow" | "red" | 3 = "yellow";
trafficLight = 3; // This is valid
trafficLight = "blue"; // Error: Type '"blue"' 
is not assignable to type '"yellow" | "red" | 3'`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Custom Types and Interfaces */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Custom Types and Interfaces</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Custom Type:</strong> Use <code>type</code> to define custom types.
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`type Person = {
  name: string;
  age: number;
  email: string;
  children?: {
    name: string;
    age: number;
  }
};

const person: Person = {
  name: "Bushra",
  age: 39,
  email: "abc@gmail.com",
  children: {
    name: "Hafsa",
    age: 13
  }
};

const person2: Person = {
  name: "Muh"
};`}
                </pre>
              </li>
              <li><strong className="font-semibold">Interface:</strong> Similar to <code>type</code> but can be extended.
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`interface Student {
  name: string;
  rollnumber: number;
}

interface Teacher {
  name: string;
  experience: number;
}

let both: Student & Teacher = {
  name: "Hafsa",
  rollnumber: 6,
  experience: 6
};`}
                </pre>
              </li>
            </ul>
          </section>
          {/* Enum */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Enum</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`enum days {
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}

console.log(days.wednesday); // 3
let meetingday: days = days.monday; // monday = 1`}
                </pre>
                <p>Enums are a way to define a set of named constants. They help in restricting the values a variable can have.</p>
              </li>
            </ul>
          </section>

          {/* Array Data Type */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Array Data Type</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let p: person[] = [{ name: "hafa" }, { name: "hi" }];`}
                </pre>
                <p>Here, <code>person[]</code> denotes an array of objects conforming to the <code>person</code> type.</p>
              </li>
            </ul>
          </section>

          {/* Faker for Fake Item */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Faker for Fake Item</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Installation:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`npm install @faker-js/faker`}
                </pre>
                <p>Import and use <code>faker</code> to generate fake data for testing purposes.</p>
              </li>
            </ul>
          </section>

          {/* Function Calls */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Function Calls</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Without Return Type:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`function sum(num1: any, num2: any) {
    return num1 + num2;
}
let result = sum(3, 6);
console.log(result); // 9`}
                </pre>
              </li>
              <li><strong className="font-semibold">With Return Type:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`function sum(num1: any, num2: any): number {
    return num1 + num2;
}
let result = sum(3, 6);
console.log(result); // 9`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Anonymous Function */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Anonymous Function</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`type Sum = (num1: number, num2: number) => number;
let sum: Sum = function (num1, num2) {
    return num1 + num2;
}
console.log(sum(3, 6)); // 9`}
                </pre>
                <p>Anonymous functions don&apos;t have a name and are assigned to variables.</p>
              </li>
            </ul>
          </section>

          {/* Arrow Function */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Arrow Function</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let sum = (num1: number, num2: number): number => num1 + num2;
console.log(sum(3, 6)); // 9`}
                </pre>
                <p>Arrow functions provide a concise syntax for writing function expressions.</p>
              </li>
            </ul>
          </section>

          {/* Optional Parameter */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Optional Parameter</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let fullname = (firstname: string, lastname?: string) => {
    return lastname ? firstname + " " + lastname : firstname;
}
console.log(fullname('hamzah')); // hamzah`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Default Parameter */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Default Parameter</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let fullname = (firstname: string, lastname: string = "khan") => {
    return firstname + " " + lastname;
}
console.log(fullname('hamzah')); // hamzah khan`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Rest Parameter */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Rest Parameter</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let makemessage = (name: string, ...message: string[]) => {
    console.log(message.join(" "));
}
makemessage("hello", "how", "hi"); // hello how hi`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Function Overloading */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Function Overloading</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`function add(arg1: string, arg2: string): string;
function add(arg1: number, arg2: number): number;
function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}
console.log(add(1, 2)); // 3
console.log(add("Hello, ", "World!")); // Hello, World!`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Tuples */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Tuples</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let fruits: [string, string, number] = ["orange", "mango", 2];
fruits.push("apple"); // Allowed, but should not change length

console.log(fruits); // ["orange", "mango", 2, "apple"]`}
                </pre>
                <p>Tuples are fixed-size arrays with specified types for each element.</p>
              </li>
            </ul>
          </section>

          {/* White Space */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">White Space</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let whitespace = "\\t hafsa\\n";
console.log(\`whitespace ${whitespace}\`);
let clean = whitespace.trim();
console.log(clean); // hafsa`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Three Dots (... spread/rest) */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Three Dots (... Spread/Rest)</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`const placesToVisit: string[] = ["Paris", "Tokyo", "Bora Bora", "Marrakech", "Rio de Janeiro"];
console.log("Original Order:", placesToVisit);

const sortedArray = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedArray);`}
                </pre>
                <p>The three dots (<code>...</code>) are used for spreading or collecting elements in arrays and objects.</p>
              </li>
            </ul>
          </section>

          {/* Code Shortkeys */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Code Shortkeys</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`GO TO PREFERENCES > CONFIGURE USER SNIPPETS > ADD NEW
Write a name (e.g., console), add body and prefix like this`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Map Function */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Map Function</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <p>Use the <code>map</code> function to transform array elements.</p>
              </li>
            </ul>
          </section>

          {/* Callback Function */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Callback Function</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`function func(nam: string) {
    console.log(nam);
}

function hello(text: string, callback: (text: string) => void) {
    callback(text);
}

hello("hellosarmad", func);`}
                </pre>
                <p>Callbacks are functions passed as arguments to other functions, allowing for asynchronous operations.</p>
              </li>
            </ul>
          </section>

          {/* Asynchronous Behavior */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Asynchronous Behavior</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Definition:</strong>
                <p>JavaScript handles asynchronous operations, allowing tasks to run concurrently, such as API calls and timers.</p>
              </li>
            </ul>
          </section>
          {/* Promise */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Promise</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Basic Promise:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let myPromise = new Promise((resolve, reject) => {
    console.log("Promise pending...");

    setTimeout(() => {
        console.log("status reject");
        // resolve("Sarmad");
        reject("data fetch error...");
    }, 2000);
});

myPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));`}
                </pre>
              </li>
              <li><strong className="font-semibold">Promise with Data:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let myPromise = new Promise((resolve, reject) => {
    console.log("Promise pending...");
    setTimeout(() => {
        let data = ["Hafsa"];
        if (data) {
            console.log("promise resolved");
            resolve(data);
        } else {
            console.log("promise rejected");
            reject("data fetch error");
        }
    }, 2000);
});

myPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Fetch API */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Fetch API</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Basic Fetch Usage:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("error"));`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Async/Await */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Async/Await</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Using Async/Await:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`async function datafunc() {
    let fetchdata = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await fetchdata.json();
    console.log(data);
}

datafunc();`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Chalk Library */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Chalk Library</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Installation:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`npm install chalk@4.1.2`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Object-Oriented Programming (OOP) */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Object-Oriented Programming (OOP)</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Class Definition:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`class House {
    numberofrooms: number = 4;
}

let house1 = new House();
console.log(house1);`}
                </pre>
                <p>Classes are blueprints for creating objects. They help in organizing and managing code.</p>
              </li>
              <li><strong className="font-semibold">Constructor Function:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`class House {
    numberofrooms: number;
    noofbath: number;

    constructor(numberofrooms: number, noofbath: number) {
        this.numberofrooms = numberofrooms;
        this.noofbath = noofbath;
    }
}

let house1 = new House(4, 1);
console.log(house1);`}
                </pre>
              </li>
              <li><strong className="font-semibold">Method:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`class Person {
    readonly name: string;
    age: number;
    hobby: string;

    constructor(nam: string, ag: number, hobb: string) {
        this.name = nam;
        this.age = ag;
        this.hobby = hobb;
    }

    doorbell() {
        console.log('bell pressed');
    }
}

let person = new Person("abubakar", 9, "cry");
console.log(person);
person.doorbell();`}
                </pre>
              </li>
              <li><strong className="font-semibold">Readonly & Super:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`class House {
    numberofrooms: number;
    noofbath: number;

    constructor(numberofrooms: number, noofbath: number) {
        this.numberofrooms = numberofrooms;
        this.noofbath = noofbath;
    }
}

class DeluxeHouse extends House {
    garden: boolean;

    constructor(numberofrooms: number, noofbath: number, garden: boolean) {
        super(numberofrooms, noofbath);
        this.garden = garden;
    }
}

let deluxeHouse = new DeluxeHouse(4, 2, true);
console.log(deluxeHouse);`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Array Methods */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Array Methods</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Array Inclusion:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // True
console.log(fruits.includes("grape")); // False`}
                </pre>
              </li>
              <li><strong className="font-semibold">Sorting:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`const fruits = ["apple", "banana", "orange"];
console.log(fruits.sort()); // ["apple", "banana", "orange"]`}
                </pre>
              </li>
              <li><strong className="font-semibold">Reverse Order:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`const fruits = ["apple", "banana", "orange"];
console.log(fruits.reverse()); // ["orange", "banana", "apple"]`}
                </pre>
              </li>
            </ul>
          </section>
          {/* Fresh & Stale Assignment */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Fresh & Stale Assignment</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Assignment with `{ }`:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let a = { name: 'ubaid' };
let b = { name: 'bilal', age: 80 };
a = b; // 'a' now refers to 'b' as 'b' has the same structure as 'a'`}
                </pre>
              </li>
              <li><strong className="font-semibold">Using `as` Keyword:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let x: any = "hello";
let y = x as string; // Forcefully treat 'x' as a string`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Encapsulation */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Encapsulation</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Public:</strong> Accessible everywhere.</li>
              <li><strong className="font-semibold">Private:</strong> Accessible only within the class.</li>
              <li><strong className="font-semibold">Protected:</strong> Accessible within the class and its subclasses.</li>
            </ul>
            <pre className="bg-gray-100 p-4 rounded-md">
              {`// Public
class Person {
    name: string = "sarmad";
    getName() {
        console.log(this.name);
    }
}
let p = new Person();
p.getName(); // Accessible

// Private
class Person {
    name: string = "sarmad";
    private salary: number = 1000;
    getName() {
        console.log(this.name);
    }
}
let p = new Person();
// p.salary; // Error: Property 'salary' is private

// Protected
class Person {
    name: string = "sarmad";
    protected salary: number = 1000;
    getName() {
        console.log(this.name);
    }
}
class Human extends Person {
    hello() {
        console.log(this.salary); // Accessible in subclass
    }
}
let h = new Human();
h.hello();`}
            </pre>
          </section>

          {/* Getter/Setter */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Getter/Setter</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Getter:</strong> Access properties.</li>
              <li><strong className="font-semibold">Setter:</strong> Modify properties.</li>
            </ul>
            <pre className="bg-gray-100 p-4 rounded-md">
              {`class Person {
    private _name = "sarmad";
    get name() {
        return this._name;
    }
    set name(val: string) {
        this._name = val;
    }
}
let p = new Person();
console.log(p.name); // Access getter
p.name = 'abdul';   // Use setter
console.log(p.name);`}
            </pre>
          </section>

          {/* Implements Keyword */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Implements Keyword</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Interface and Implementation:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`interface Hello {
    age: number;
    email?: string;
}

class Person {
    name = "bilal";
}

class Human implements Person, Hello {
    name = "Ábdul";
    age = 19;
    firstName = "rehman";
    secondName = "rehman";
}

let h = new Human();
console.log(h.name);`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Polymorphism */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Polymorphism</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Method Overwriting:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`class Player {
    game() {
        console.log("Cricket");
    }
}

class Game extends Player {
    game() {
        console.log("Football");
    }
}

let g = new Game();
g.game(); // Outputs: Football`}
                </pre>
              </li>
            </ul>
          </section>
          {/* Generic Function */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Generic Function</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Purpose:</strong> To reduce code duplication and handle various data types with a single function.</li>
              <li><strong className="font-semibold">Example:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`function genericFunc<T>(val: T): T {
    return val;
}

genericFunc(['hi', true, 9]); // Can handle arrays or objects
genericFunc<string>('hafsa'); // Validates string type`}
                </pre>
              </li>
              <li><strong className="font-semibold">Notes:</strong>
                <ul className="list-disc pl-5">
                  <li>Use placeholders like `T`, `HNCjm`, or any other name for the generic type.</li>
                  <li>You can add validation to ensure the argument matches a specific type.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Array Methods */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Array Methods</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Key Methods:</strong>
                <ul className="list-disc pl-5">
                  <li>.map()</li>
                  <li>.filter()</li>
                  <li>.reduce()</li>
                  <li>.forEach()</li>
                  <li>.find()</li>
                  <li>.some()</li>
                  <li>.every()</li>
                  <li>.sort()</li>
                </ul>
              </li>
              <li><strong className="font-semibold">Ternary Operator:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let result = condition ? 'True' : 'False';`}
                </pre>
              </li>
            </ul>
          </section>

          {/* Type Assertion */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Type Assertion</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Purpose:</strong> To explicitly specify the type of a variable.</li>
              <li><strong className="font-semibold">Syntax:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`let a = a1 as string; // Using 'as' syntax
let a = <string>a1; // Using angle-bracket syntax`}
                </pre>
              </li>
              <li><strong className="font-semibold">Usage:</strong> Use when you are sure about the type and need to force it.</li>
            </ul>
          </section>

          {/* Next.js Info Note */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Next.js Info Note</h2>
            <pre className="bg-gray-100 p-4 rounded-md">
              {`import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>HI</h1>
    </main>
  );
}`}
            </pre>
          </section>

          {/* Using Bootstrap */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Using Bootstrap in Next.js</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Step 1:</strong> Install Bootstrap: `npm install bootstrap`</li>
              <li><strong className="font-semibold">Step 2:</strong> Import in `layout.tsx`: `import &apos;bootstrap/dist/css/bootstrap.css&apos;`</li>
              <li><strong className="font-semibold">Step 3:</strong> Use Bootstrap classes in `page.tsx` with `className` instead of `class`.</li>
            </ul>
          </section>

          {/* Tailwind CSS */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Tailwind CSS Setup</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Install Tailwind CSS with Vite:</strong>
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`npm install -D tailwindcss postcss autoprefixer vite
npx tailwindcss init -p`}
                </pre>
              </li>
              <li><strong className="font-semibold">Configure:</strong> Add Tailwind directives to your CSS file:
                <pre className="bg-gray-100 p-4 rounded-md">
                  {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                </pre>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withAuth(TypeScriptNotes);
