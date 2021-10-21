const mentorsArray = [
    {
        name:"Ivan Diaz",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alan Medina",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Elvira Camarillo",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Alejandra Paez",
        scores:[
            {
                signature:"HTML",
                score:10
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
               score:10
            },
        ]
    },
  ]


  const table = document.createElement("table") 
  const thead = document.createElement("thead")
  const tbody = document.createElement("tbody")
  const tr1 = document.createElement("tr")
  const tr2 = document.createElement("tr")
  const tr3 = document.createElement("tr")
  const tr4 = document.createElement("tr")
  const tr5 = document.createElement("tr")
  const th = document.createElement("th")

  const mentor = document.createTextNode(" Mentor ")
  const signature1 = document.createTextNode(" HTML ")
  const signature2 = document.createTextNode(" CSS ")
  const signature3 = document.createTextNode(" JS ")
  const signature4 = document.createTextNode(" REACT ")
  const promedio = document.createTextNode(" PROMEDIO ")


  th.appendChild(mentor)
  th.appendChild(signature1)
  th.appendChild(signature2)
  th.appendChild(signature3)
  th.appendChild(signature4)
  th.appendChild(promedio)
  

  tr1.appendChild(th)
  thead.appendChild(tr1)
  table.appendChild(thead)

  document.body.appendChild(table)

  const Mentor1 = document.createTextNode(" Ivan Diaz ")
  const Mentor2 = document.createTextNode(" Alan Medina")
  const Mentor3 = document.createTextNode(" Elvira Camarillo ")
  const Mentor4 = document.createTextNode(" Alejandra Paez ")


  
  tr2.appendChild(Mentor1)
  tr3.appendChild(Mentor2)
  tr4.appendChild(Mentor3)
  tr5.appendChild(Mentor4)

  tbody.appendChild(tr1)
  tbody.appendChild(tr2)
  tbody.appendChild(tr3)
  tbody.appendChild(tr4)
  tbody.appendChild(tr5)


  table.appendChild(tbody)

  document.body.appendChild(table)






  



  