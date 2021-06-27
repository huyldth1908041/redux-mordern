import {useState} from "react";
import {useStudentHandler} from "../../state/student";
import {Link} from "react-router-dom";
export const CreateStudent = () => {
    const { onCreateStudentAsync} = useStudentHandler()
    const [formStudent, setFormStudent] = useState({name: "", phone: ""})
    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        setFormStudent({...formStudent, [name]: value})

    }
    const handleSubmit = async e => {
        e.preventDefault()
        if(!formStudent.name || !formStudent.phone) {
            return
        }
        await onCreateStudentAsync(formStudent)
        setFormStudent({name: "", phone: ""})
    }
    return (
    <div>
        <Link to ="/student">Go to list</Link>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={formStudent.name} onChange={handleChange}/>
            </div>
            <div>
                <label>Phone</label>
                <input type="text" name="phone" value={formStudent.phone} onChange={handleChange}/>
            </div>
            <div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </div>
    )
}