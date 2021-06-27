import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {studentApi} from "../../api/studentApi";


const initialState = []
//create an action thunk
export const getStudentsAsync = createAsyncThunk("students/getStudentsAsync", async () => {
    const students = await studentApi.getAllStudent()
    return {students}

})

export const createStudentAsync = createAsyncThunk("students/createStudentAsync", async (payload) => {
    const student = payload.student
    //set status, created at, updated at,...
    student.status = 1
    //call api
    const createdStudent = await studentApi.createStudent(student)
    return {student: createdStudent}

})
const studentSlice = createSlice({
    initialState,
    name: "students",
    reducers: {
        addStudent: (state, action) => {
            state.push(action.payload.student)
        },

        removeStudent: (state, action) => {
            return state.filter(std => std.id !== action.payload.studentId)
        },
    },
    //extra reducers to handle actions that dispatched by thunk
    extraReducers: {
        [getStudentsAsync.fulfilled]: (state, action) => {
            return action.payload.students
        },
        [getStudentsAsync.pending]: () => {
            return []
        },
        [getStudentsAsync.rejected]: () => {
            return []
        },

        [createStudentAsync.fulfilled]: (state, action) => {
            state.push(action.payload.student)
        },

    }

})

const {actions, reducer} = studentSlice;
export const {addStudent, removeStudent} = actions
export default reducer;