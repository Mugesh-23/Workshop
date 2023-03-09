//functional component for patient details
import React from 'react'
import axios from 'axios'
function Patient() {
    const [id, setid] = React.useState('')
    const [name, setname] = React.useState('')
    const [type, settype] = React.useState('')
    const [address, setaddress] = React.useState('')
    const [phone, setphone] = React.useState('')

    const handleid = (e) => {
        setid(e.target.value)
    }

    const handlename = (e) => {
        setname(e.target.value)
    }

    const handletype = (e) => {
        settype(e.target.value)
    }

    const handleaddress = (e) => {
        setaddress(e.target.value)
    }

    const handlephone = (e) => {
        setphone(e.target.value)
    }
     
    //axios post on submit
    const handlesubmit = (e) => {
        e.preventDefault()
        
        console.log(id, name, type, address, phone)
        localStorage.setItem('id', id);
        const data = {
            id: id,
            name: name,
            type: type,
            address: address,
            phone: phone
        }
        console.log(data)
        axios.post('http://localhost:8080/patientadd', data)
            .then(res => {
                console.log(res)
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }

    //axios get
    const handleget = (e) => {
        e.preventDefault()
        const id = localStorage.getItem('id');
        console.log(id);
        axios.get('http://localhost:8080/patient/' + id)
            .then(res => {
                console.log(res.data);
                setid(res.data.id);
                setname(res.data.name);
                settype(res.data.type);
                setaddress(res.data.address);
                setphone(res.data.phone);
            })
            .catch(err => {
                console.log(err);
            })
    }


    //axios delete
    const handledelete = (e) => {
        e.preventDefault()
        const id = localStorage.getItem('id');
        console.log(id);
        axios.delete('http://localhost:8080/patientdelete/' + id)
            .then(res => {
                console.log(res.data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    //axios update
    const handleupdate = (e) => {
        e.preventDefault()
        const id = localStorage.getItem('id');
        console.log(id);
        const data = {
            id: id,
            name: name,
            type: type,
            address: address,
            phone: phone
        }
        console.log(data)
        axios.put('http://localhost:8080/patientupdate/' + id, data)
            .then(res => {
                console.log(res.data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }


  return (
     <div className="custlogin">
            <div className="custlogin__container">
                <h1>Patient Login</h1>
                <form>
                    <h5>Id</h5>
                    <input type="email" value={id} onChange={handleid} />

                    <h5>Name</h5>
                    <input type="text" value={name} onChange={handlename} />

                    <h5>Type</h5>
                    <input type="text" value={type} onChange={handletype} />

                    <h5>Address</h5>
                    <input type="text" value={address} onChange={handleaddress} />

                    <h5>Phone</h5>
                    <input type="text" value={phone} onChange={handlephone} />

                    <button type="submit" onClick={handlesubmit} className="custlogin__signInButton">Login</button>
                </form>
            </div>
            
           <button type="submit" onClick={handleget} className="custlogin__signInButton">GET</button>
              <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{type}</td>
                    <td>{address}</td>
                    <td>{phone}</td>
                </tr>
            </table>    
            
            
            <button type="submit" onClick={handledelete} className="custlogin__signInButton">DELETE</button>

            <div className="custlogin__container">
                <h1>Patient update</h1>
                <form>
                    <h5>Id</h5>
                    <input type="email" value={id} onChange={handleid} />

                    <h5>Name</h5>
                    <input type="text" value={name} onChange={handlename} />

                    <h5>Type</h5>
                    <input type="text" value={type} onChange={handletype} />

                    <h5>Address</h5>
                    <input type="text" value={address} onChange={handleaddress} />

                    <h5>Phone</h5>
                    <input type="text" value={phone} onChange={handlephone} />

                    <button type="submit" onClick={handleupdate} className="custlogin__signInButton">Update</button>
                </form>
            </div>
            
            

        </div>
  )
}

export default Patient

