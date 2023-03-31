import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Redux/app/store";
import {toast, Toaster} from "react-hot-toast";
import {Button, Form, InputGroup} from "react-bootstrap";
import TodoList from "./list";
import {addTodo} from "../../Redux/features/todos/todoControlSlic";

const MyTodos = () => {
    const todoState = useSelector((state: RootState) => state.todos)
    const {tasks} = todoState
    const dispatch = useDispatch<AppDispatch>()
    // const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>()
    const [task, setTask] = useState('')
    const handleTask = () => {
        toast.loading('wait')
        setTimeout(() => {
            toast.dismiss()
            if (!task) return toast.error('Input your task name')
            dispatch(addTodo(task))
            setTask('')
            toast.success('Added')
        }, 1000)
    }


    return (
        <div>
            <Toaster/>
            <h6 className={'text-center'}> My Todo{"'"}s </h6>
            <small className={'d-flex justify-content-end'}>(without thunk)</small>
            <div>
                <InputGroup className="mb-3">
                    <Form.Control
                        value={task}
                        placeholder="Task name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name={'task'}
                        id={'task'}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyDown={({key}) => key === "Enter" && handleTask()}
                    />
                    <Button
                        onClick={() => handleTask()}
                        variant="outline-secondary" id="button-addon2">
                        +
                    </Button>
                </InputGroup>
            </div>
            <div>
                <TodoList taskList={tasks}/>
            </div>
        </div>
    );
};

export default MyTodos;