import React from 'react'
import {Feed} from '../Feed/Feed'
import { useParams } from 'react-router'
import { Head } from '../../Helper/Head';
export const UserProfile = () => {
    const {user} = useParams();

    return (
        <section className="container mainSection">
            <Head title={user} />
            <h1 className="title">{user}</h1>
            <Feed user={user}/>
        </section>
    )
}
