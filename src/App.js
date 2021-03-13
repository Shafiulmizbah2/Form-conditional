import './App.css';
import Person from './components/person';
import Form from './components/form';
import { useState } from 'react';

function App() {

  const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [persons,setPersons] = useState([]);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name && email){
          const person = { name,email }
          setPersons(()=>{
              return [...persons,person];
          });
          console.log(persons);
          setName('');
          setEmail('');
        }
        
        
    }

    const handleChangeName = (e)=>{
        setName(e.target.value);
    }

    const handleChangeEmail = (e)=>{
        setEmail(e.target.value);
    }

  return (
    <div className="container">
      <Form 
        name = {name}
        email = {email}
        handleSubmit= {(e)=> handleSubmit(e)}
        handleChangeName= {(e)=>handleChangeName(e)}
        handleChangeEmail = { (e)=>handleChangeEmail(e)}
      />
      <div className="sub-container">
        {
          persons.map((cur,i)=>{
            return (
              <Person 
              id = {i}
              name = {cur.name}
              email = {cur.email}
            />
            )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
