import { useState } from 'react'


export default function App() {

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [special, SetSpecial] = useState('');
  const [experience, setExperience] = useState(0);
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    if (!fullName || !username || !password || experience <= 0 || !description) {
      return console.log('Perfavore compila tutti i campi')
    } else if (!special || special === '') {
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

  return (
    <>
      <div className="container row col-3 p-5">
        <form onSubmit={onSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome completo"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <select className="form-select"
              value={special}
              onChange={e => SetSpecial(e.target.value)}>
              <option value=''>Specializzazione</option>
              <option value="Full-Stack">Full-Stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Anni di esperienza"
              value={experience}
              onChange={e => setExperience(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="textarea"
              className="form-control"
              placeholder="Breve descrizione"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className='mt-2'>
            <button type='submit' className='btn btn-primary'>Conferma</button>
          </div>
        </form>
      </div>
    </>
  )
}

