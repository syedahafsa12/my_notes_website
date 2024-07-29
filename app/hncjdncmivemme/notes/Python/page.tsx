"use client";

import { useRouter } from 'next/navigation';
import withAuth from '@/app/components/withAuth'; // Adjust the path if needed

const Notes: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('authenticated');
    router.push('/login');
  };
  let name = "name"
  let edu = "edu"
  let jinja = "{{name}}"

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700">My Notes</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Python</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Name the file:</strong> hello.py</li>
              <li><strong className="font-semibold">To run the file:</strong> py hello.py</li>
              <li><strong className="font-semibold">To print:</strong> <code>print(&apos;hello&apos;)</code></li>
              <li><strong className="font-semibold">Environment Creation:</strong></li>
              <ul className="list-inside list-disc mt-2">
                <li><code>conda create -n python12 python==3.12 -y</code> (Write all these commands in anaconda terminal
                  Here you can add any other name instead of python12, in every folder)</li>
                <li><code>conda activate python12</code> (This will change the folder name from (base) to (python12))</li>
              </ul>
              <li><strong className="font-semibold">Make requirements.txt file:</strong> In the root folder, not in any subfolder</li>
              <li><strong className="font-semibold">requirements.txt:</strong></li>
              <ul className="list-inside list-disc mt-2">
                <li>numpy</li>
                <li>pandas</li>
                <li>jupyter</li>
                <li>mypy</li>
              </ul>
              <li><strong className="font-semibold">Install requirements:</strong> <code>pip install -r requirements.txt</code></li>
            </ul>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Python</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Name the file:</strong> hello.py</li>
              <li><strong className="font-semibold">To run the file:</strong> py hello.py</li>
              <li><strong className="font-semibold">To print:</strong> <code>print(&apos;hello&apos;)</code></li>
              <li><strong className="font-semibold">Environment Creation:</strong></li>
              <ul className="list-inside list-disc mt-2">
                <li><code>conda create -n python12 python==3.12 -y</code> (Write all these commands in anaconda terminal
                  Here you can add any other name instead of python12, in every folder)</li>
                <li><code>conda activate python12</code> (This will change the folder name from (base) to (python12))</li>
              </ul>
              <li><strong className="font-semibold">Make requirements.txt file:</strong> In the root folder, not in any subfolder</li>
              <li><strong className="font-semibold">requirements.txt:</strong></li>
              <ul className="list-inside list-disc mt-2">
                <li>numpy</li>
                <li>pandas</li>
                <li>jupyter</li>
                <li>mypy</li>
              </ul>
              <li><strong className="font-semibold">Install requirements:</strong> <code>pip install -r requirements.txt</code></li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">New Python Notes</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li>name="hafsa"</li>
              <li>print(type(name))  # to check type like string or what of variable </li>
              <li>print(id(name))  # to check variables physical location</li>
              <li>print([i for i in dir(name) if &quot;__&quot; not in i])  # to check all the methods and attributes of variable or any type like str</li>
              <li>Method: like I can teach, walk, sit</li>
              <li>Attribute: I have eyes color black, height</li>
              <li>Always write data type names:</li>
              <ul className="list-inside list-disc mt-2">
                <li>names: str = &quot;hafsa&quot;</li>
                <li>no let and var like TypeScript, global scope variable ha to let ke bagahir bhi chal jayega</li>
                <li>no semicolon ki zarrorat</li>
              </ul>
              <li>Types:</li>
              <ul className="list-inside list-disc mt-2">
                <li>names: list[str] = ['a', 'b']  # list only in string</li>
                <li>names: bool = True</li>
                <li>names: int = 8</li>
                <li>names: float = 7.5</li>
                <li>names: str = &quot;yy&quot;</li>
                <li>names: any = &quot;ji&quot;</li>
                <li>name: tuple[str, int] = ("pk", 8)  # you can add any type, you can&apos;t add any other type that is not defined in your tuple</li>
                <li>variable ka naam small</li>
              </ul>
              <li>Special characters ko simple characters ma convert krne ke liye backslash lagaen:</li>
              <ul className="list-inside list-disc mt-2">
                <li>name: str = &apos;muhammad qasim \n father\&apos;s name&apos;</li>
              </ul>
              <li>Single quote =&apos;&apos; ye bhi string par is ke andar apostrophe nhi laga sakte</li>
              <li>Double quote = "string" is ke andar double quote nhi laga sakte</li>
              <li>Triple quote = &apos;&apos;&apos;hi&apos;&apos;&apos;ke andar \n for new line nhi krna parta == &quot;&quot;&quot;k&quot;&quot;&quot;</li>
              <li>Backslash = \ for line continue</li>
              <ul className="list-inside list-disc mt-2">
                <li>print(name)\print(age)</li>
              </ul>
              <li>F STRING:</li>
              <ul className="list-inside list-disc mt-2">
                <li>card: str = f &quot;&quot;&quot;education: {edu}&quot;&quot;&quot;</li>
                <li>or you can use f &apos;&apos;&apos;education: {edu} {2 + 8 + 9}&apos;&apos;&apos; # f string me ap curly bracket m kuch bhi kr sakte hen</li>
                <li>backtick nhai chalta</li>
              </ul>
              <li>JINJA STYLE:</li>
              <ul className="list-inside list-disc mt-2">
                <li>&quot;&quot;&quot;student name {jinja}&quot;&quot;&quot;</li>
              </ul>
            </ul>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">String Formatting</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-purple-500 mb-4">Basic Techniques</h3>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Using %s and %d:</strong> You can use %s for strings and %d for integers.
                <pre><code>
                  {`name: str = "Alice"
age: int = 30
print("My name is %s and I am %d years old." % (name, age))`}
                </code></pre>
              </li>
              <li><strong className="font-semibold">Using .format():</strong> The .format() method is another way to format your strings.
                <pre><code>
                  {`name: str = "Alice"
age: int = 30
print("My name is {} and I am {} years old.".format(name, age))`}
                </code></pre>
              </li>
              <li><strong className="font-semibold">Using f-string (Python 3.6+):</strong> f-strings provide a concise and readable way to include the value of Python expressions inside strings.
                <pre><code>
                  {`name: str = "Alice"
age: int = 30
print(f"My name is {name} and I am {age} years old.")`}
                </code></pre>
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold text-purple-500 mt-8 mb-4">Advanced Techniques</h3>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">f-string Expressions:</strong> You can include Python expressions within f-strings.
                <pre><code>
                  {`x: int = 10
y: int = 20
print(f"The sum of {x} and {y} is {x+y}.")`}
                </code></pre>
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">List Operations</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Append Function:</strong> Adds an item to the end of the list.
                <pre><code>
                  {`marks = [22, 33, 55]
marks.append(99)  # join something or add
print(marks)`}
                </code></pre>
              </li>
              <li><strong className="font-semibold">Insert Function:</strong> Adds an item at a specific position in the list.
                <pre><code>
                  {`marks = [22, 33, 55]
marks.insert(0, 99)  # first place index where to add number, second which number to add
print(marks)`}
                </code></pre>
              </li>
              <li><strong className="font-semibold">To Check Whether It&apos;s in the List:</strong>
                <pre><code>
                  {`print(93 in marks)  # false`}
                </code></pre>
              </li>
              <li><strong className="font-semibold">Length of List:</strong>
                <pre><code>
                  {`print(len(marks))`}
                </code></pre>
              </li>
              <li><strong className="font-semibold">For Loop Example:</strong>
                <pre><code>
                  {`i = 0
while i < len(marks):
    print(marks[i])
    i = i + 1`}
                </code></pre>
              </li>
              <li><strong className="font-semibold">Clear Function:</strong> Clears all items in the list.
                <pre><code>
                  {`marks.clear()  # clear full list
print(marks)`}
                </code></pre>
              </li>
              <li><strong className="font-semibold">Break:</strong> Exits the loop when a condition is met.
                <pre><code>
                  {`students = ["pappi", "pappu", "pappa"]
for student in students:
    if student == "pappu":
        break
print(student)`}
                </code></pre>
              </li>
              <li><strong className="font-semibold">Continue:</strong> Skips the current iteration of the loop and continues with the next iteration.
                <pre><code>
                  {`students = ["pappi", "pappu", "byr", "pappa"]
for student in students:
    if student == "byr":
        continue
    print(student)`}
                </code></pre>
              </li>
            </ul>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Tuple</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">It&apos;s Just Like a List but Cannot Be Changed:</strong>
                <pre><code>
                  {`marks = (99, 00, 88)
marks[0] = 90  # This will give an error`}
                </code></pre>
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Count Function</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">.count:</strong> Counts the number of occurrences of a value in a list.
                <pre><code>
                  {`marks = [00, 88, 99, 88, 88]
print(marks.count(88))  # This will tell how many times 88 is present`}
                </code></pre>
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Index Function</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">.index:</strong> Finds the index of the first occurrence of a value in a list.
                <pre><code>
                  {`print(marks.index(88))  # This will tell the index of the first occurrence of 88`}
                </code></pre>
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Set</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Unique Values:</strong> Sets store unique values and do not support indexing.
                <pre><code>
                  {`marks = {00, 00, 77, 98}
# This will not print 00 as it is a duplicate
# Sets cannot be accessed by index
marks = {99, 80, 88}

for score in marks:
    print(score)`}
                </code></pre>
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">Dictionary</h2>
            <ul className="list-disc pl-5 text-gray-800">
              <li><strong className="font-semibold">Key-Value Pairs:</strong> Dictionaries store values with a unique key.
                <pre><code>
                  {`marks = {"maths": 90, "chemistry": 99}
print(marks["maths"])  # Access value by key
marks['l'] = 90  # Update value for a key
print(marks)`}
                </code></pre>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Notes);
