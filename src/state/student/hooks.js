import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {addStudent, createStudentAsync, getStudentsAsync, removeStudent} from "./reducer";
// tạo những hooks để làm việc với state này
// lấy state hiện tại
export const useStudentState = () => {
    return useSelector(state => state.students)
}
//sử lý các events
export const useStudentHandler = () => {
    const dispatch = useDispatch()
    const onAddStudent = useCallback((student) => {
        //addStudent() trả về 1 action object không có payload dạng {type: "students/studentAdded"}
        //addStudent({student}) trả về 1 action object có payload {type: "students/studentAdded", payload: {student: {...}}
        //dispatch() nhận vào 1 action object
        dispatch(addStudent({student}))
    }, [dispatch])

    const onRemoveStudent = useCallback((studentId) => {
        dispatch(removeStudent({studentId}))
    }, [dispatch])

    const onGetStudentsAsync = useCallback(async () => {
        await dispatch(getStudentsAsync())
    }, [dispatch])

    const onCreateStudentAsync = useCallback( async (student) => {
        await dispatch(createStudentAsync({student}))
    }, [dispatch])
    return {onAddStudent, onRemoveStudent, onGetStudentsAsync, onCreateStudentAsync}
}