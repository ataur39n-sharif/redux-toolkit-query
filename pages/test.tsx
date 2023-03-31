import React from 'react';
import {Button} from "react-bootstrap";
import {useRouter} from "next/router";

const Test = () => {
    const router = useRouter()
    return (
        <div>
            This is a test page.
            <Button onClick={() => router.push('/')}>Next</Button>
        </div>
    );
};

export default Test;