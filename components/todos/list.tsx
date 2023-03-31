import React from 'react';
import {ListGroup} from "react-bootstrap";
import {FaRegEdit} from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai";
import {toast} from "react-hot-toast";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../Redux/features/todos/todoControlSlic";
import {AppDispatch} from "../../Redux/app/store";

const TodoList = ({taskList}: { taskList: string[] }) => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div>
            <ListGroup as="ol" numbered>
                {
                    taskList.map((task: string, id: number) =>
                        <ListGroup.Item key={id}
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                {task}
                            </div>
                            <div>
                                <FaRegEdit
                                    type={'button'}
                                    className={'m-2'}
                                    onClick={() => toast.error('Not ready yet')}
                                />
                                <AiFillDelete
                                    type={'button'}
                                    onClick={() => dispatch(deleteTodo(task))}
                                />
                            </div>

                        </ListGroup.Item>
                    )
                }
            </ListGroup>
        </div>
    );
};

export default TodoList;