import {Table} from "../../components/Table";
import {studentTableColumns} from "./config";
import {useStudentHandler, useStudentState} from "../../state/student";
import {Link} from "react-router-dom";
import {useEffect} from "react";

export const ListStudent = () => {
    const {onRemoveStudent, onGetStudentsAsync}=useStudentHandler()
    const students = useStudentState()
    //get list when component loaded
    useEffect(() => {
         onGetStudentsAsync()
    }, [onGetStudentsAsync])
    return (
        <>
            <Link to={"/student/create"}>Create new</Link>
            <Table columns={studentTableColumns} data={students} deleteHandler={onRemoveStudent}/>
        </>

    )
}