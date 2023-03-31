import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Button, Col, Row} from "react-bootstrap";
import MyTodos from "../components/todos";
import Blogs from "../components/blogs";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={'mb-5'}>React-toolkit-rtk</h1>
                <Row>
                    <Col>
                        <Blogs/>
                    </Col>
                    <Col>
                        <MyTodos/>
                    </Col>
                </Row>
                <Button onClick={() => router.push('/test')}>Next</Button>
            </main>
        </div>
    )
}