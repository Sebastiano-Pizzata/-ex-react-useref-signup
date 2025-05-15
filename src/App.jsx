import { useState, useMemo, useRef } from 'react'


export default function App() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [special, SetSpecial] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  const isUsernameValid = useMemo(() => {
    const validChar = username.split('').every(char =>
      letters.includes(char.toLowerCase()) ||
      numbers.includes(char)
    )
    return validChar && username.length >= 6;
  }, [username]);



  const isPasswordValid = useMemo(() => {
    return (
      password.length >= 8 &&
      password.split('').some(char => letters.includes(char)) &&
      password.split('').some(char => numbers.includes(char)) &&
      password.split('').some(char => symbols.includes(char))
    )
  }, [password]);


  const isDescriptionValid = useMemo(() => {
    return (
      description.trim().length >= 100 &&
      description.trim().length < 1000
    )
  }, [description]);

  const onSubmit = (e) => {
    e.preventDefault();

    const fullName = fullNameRef.current.value;
    const special = specialRef.current.value;
    const experience = experienceRef.current.value;

    if (!fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !experience.trim() ||
      experience <= 0 ||
      !description.trim()) {
      return console.log('Perfavore compila tutti i campi')
    } else if (!special.trim() || special.trim() === '') {
      return console.log('Dichiara la tua specializzazione')
    } else {
      console.log(`Effettuato submit con :
      - Nome completo :${fullName}
      - Username :${username}
      - Password :${password}
      - Specializzazione :${special}
      - Anni di esperienza :${experience}
      - Breve descrizione :${description}
      `)
    }
  }


  const fullNameRef = useRef();
  const experienceRef = useRef();
  const specialRef = useRef();

  return (
    <>
      <h1>Form con Campi Controllati e Non</h1>
      <div className="container row col-3 p-5">
        <form onSubmit={onSubmit}>
          <div className="input-group mb-3">
            <label>
              <input
                type="text"
                className="form-control"
                placeholder="Nome completo"
                ref={fullNameRef}
              />
            </label>
          </div>
          <div className="input-group mb-3">
            <label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              {
                username.trim() && (
                  <p style={{ color: isUsernameValid ? 'green' : 'red' }}>
                    {isUsernameValid ? 'Username valido' : 'Deve avere almeno 6 caratteri alfanumerici'}
                  </p>
                )
              }
            </label>
          </div>
          <div className="input-group mb-3">
            <label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {
                password.trim() && (
                  <p style={{ color: isPasswordValid ? 'green' : 'red' }}>
                    {isPasswordValid ? 'Password valida' : 'Deve avere almeno 8 caratteri alfanumerici'}
                  </p>
                )
              }
            </label>
          </div>
          <div className="input-group mb-3">
            <label>
              <select className="form-select"
                ref={specialRef}>
                <option value=''>Specializzazione</option>
                <option value="Full-Stack">Full-Stack</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
              </select>
            </label>
          </div>
          <div className="input-group mb-3">
            <label >
              <input
                type="number"
                className="form-control"
                placeholder="Anni di esperienza"
                ref={experienceRef}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              <textarea
                rows={5}
                className="form-control"
                placeholder="Breve descrizione"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              {
                description.trim() && (
                  <p style={{ color: isDescriptionValid ? 'green' : 'red' }}>
                    {isDescriptionValid ? 'Descrizione valida' : 'Deve contenere tra i 100 e i 1000 caratteri'}
                  </p>
                )
              }
            </label>
          </div>
          <div className='mt-2'>
            <button type='submit' className='btn btn-primary'>Conferma</button>
          </div>
        </form>
      </div>
    </>
  )
}

