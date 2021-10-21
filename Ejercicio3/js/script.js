const koders = [
    {
      name: "Harold",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 80
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
  
    {
      name: "Arnold",
      lastName: "Osborn",
      birthday: "1998/05/12",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    },
    {
      name: "Peter",
      lastName: "Parker",
      birthday: "1994/10/26",
      generation: 10,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 100
        },
        {
          module: "Backend",
          score: 95
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Homer",
      lastName: "Simpson",
      birthday: "1996/06/24",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 98
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 70
        }
      ]
    },
    {
      name: "Ren",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 80
        },
        {
          module: "Backend",
          score: 90
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    }
  ]; 
 
 function getAge (age) {
    const currentYear = new Date().getFullYear()
    age = age.slice(0,4)
    console.log(age);
    return currentYear - parseInt(age.slice(0,4))
  }
  
  function getPromedio (scores) {
    return scores.reduce((acum, next) => {
      return acum + next.score / scores.length
    },0)
  }
  
  function Koder (name, lastName, birthday, generation, bootcamp, promedio) {
      this.name = name
      this.lastName = lastName
      this.birthday = birthday
      this.age = getAge(birthday)
      this.generation = generation
      this.bootcamp = bootcamp
      this.promedio = parseInt(getPromedio(promedio).toFixed(2))
  }
  
  const newKoders = koders.map(function(koder) {
      return new Koder(koder.name, koder.lastName, koder.birthday, koder.generation, koder.bootcamp, koder.scores)
  })

  class koder {
      constructor (name, lastName, age, generation, bootcamp, average){
        this.name=name;
        this.lastName=lastName;
        this.age =getAge(age);
        this.generation =generation;
        this.bootcamp = bootcamp;
        this.promedio = parseInt(getPromedio(promedio).toFixed(2))
      }
  }

//   const newKoders = koders.map((koder) => {
//       return new Koder(koder.name, koder.lastName, koder.birthday, koder.generation, koder. bootcamp, koder.scores)
//   })

  console.log(newKoders)

  const JavaScriptKoders = newKoders.filter((koder) => koder.bootcamp === "JavaScript")

  const pythonKoders = newKoders.filter((koder) => koder.bootcamp === "Python")

  console.log(JavaScriptKoders)
  console.log(pythonKoders)