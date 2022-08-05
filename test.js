function reduceLanguages(str, lang, i) {
  if (i === this.languages.length - 1) {
    return `${str} and ${lang}.`
  }
  return `${str} ${lang},`
}
const r =
  o =>
  (...args) =>
    reduceLanguages.apply(o, args)
const user = {
  name: "Tyler",
  age: 27,
  languages: ["JavaScript", "Ruby", "Python"],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`

    const langs = this.languages.reduce((acc, s, i) => {
      if (i === this.languages.length - 1) return `${acc} and ${s}.`
      return `${acc} ${s},`
    })

    return hello + langs
  },
}

const greeting = user.greet()
console.log(greeting)
