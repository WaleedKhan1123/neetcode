// create
const person = { name: "Ali", age: 20 };
const empty = {};

// read / write
person.name              // "Ali"
person["age"]            // 20  (use brackets when key is a variable)
const key = "age";
person[key] = 21;
person.city = "Lahore";  // add new key
delete person.city;      // remove key

// check if key exists
"name" in person                 // true
person.hasOwnProperty("name")    // true
person.salary === undefined      // missing key gives undefined

// loop over an object
for (const key in person) { person[key]; }
Object.keys(person)      // ["name", "age"]
Object.values(person)    // ["Ali", 21]
Object.entries(person)   // [["name","Ali"], ["age",21]]
for (const [k, v] of Object.entries(person)) { }
Object.keys(person).length   // number of keys

// object as a counter (works like Map)
const count = {};
for (const ch of s) {
  count[ch] = (count[ch] || 0) + 1;
}

// destructuring
const { name, age } = person;
const [first, ...rest] = [1, 2, 3];   // first=1, rest=[2,3]

// copy / merge (shallow)
const copy = { ...person };
const merged = { ...a, ...b };        // b's values win

// optional chaining (safe access)
node?.next?.val          // undefined instead of crashing