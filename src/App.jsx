import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Organization from './Components/MyOrg/Organization'
import Branchs from './Components/Branch/Branchs'
import Footer from './Components/Footer/Footer'

function App() {
  //Muestra el formulario
  const [show , setShow] = useState(true)
  //Array con los applicantes. Inicia vacio y luego lo llenamos
  const [ applicants , setApplicants] = useState([
   
  ])

  
  

  const changeFav = (id) => {
    const updateApplicants = applicants.map( (applicant) => {
      
      if( applicant.id == id){

       applicant.fav = !applicant.fav
      }

      return applicant
        })

    setApplicants(updateApplicants)
  }

  //Funcion encargada de mostrar y ocultar el Formulario
  const handleClick = () => {
        setShow(!show)
    }

    //Posiciones para postularse
    const positions = [
      { id: uuid(),
        title: "Criminal Law",
        strongColor:"#A59FA1",
        softColor: "#d8d4d5"
      },
      {id: uuid(),
        title: "Family Law",
        strongColor:"#28272D",
        softColor: "#626167"
      },
      {id: uuid(),
        title:"Inmigration Law",
        strongColor:"#5B1B1D",
        softColor: "#8d4244"
      },
      {id: uuid(),
        title:"Labor Law",
        strongColor:"#B99C97",
        softColor: "#ebdfdd"
      },
      
  ]

  //Registra el nuevo aplicante y guarda todo lo que ya tenia y le suma el nuevo aplicante(es llamada desde el formulario)
  const lawyerRegister = ( lawyer ) => {
    setApplicants([...applicants, lawyer])
    
  }

  //Elimina el aplicante
  const deletePosition = (id) => {
    const newApplicants = applicants.filter( applicant => applicant.id !== id)

    //Retorna el nuevo array sin el aplicante encontrado
    setApplicants(newApplicants);
  }
  return (
    <div className="App">
      <Header/>
      { show && <Form register={lawyerRegister} />}
      
      <Organization handle={handleClick}/>
      {
        positions.map( position => <Branchs 
          applicants={applicants.filter( lawyer => lawyer.branch == position.title)}  
          data={position} 
          deletePosition={deletePosition}
          changeFav={changeFav}
          key={position.title}/>)
      }

      <Footer/>
    </div>
  )
}

export default App
