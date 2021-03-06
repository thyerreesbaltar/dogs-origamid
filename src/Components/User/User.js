import React from 'react'
import { Routes, Route } from 'react-router'
import { Head } from '../../Helper/Head'
import { UserContext } from '../../UserContext'
import { Feed } from '../Feed/Feed'
import { NotFound } from '../NotFound'
import { UserHeader } from './UserHeader'
import { UserPhotoPost } from './UserPhotoPost'
import UserStats from './UserStats'

export const User = () => {
    const { data } = React.useContext(UserContext);
    return (
        <section className="container">
            <Head title="Minha Conta" />
            <UserHeader/> 
            <Routes>
                <Route path="/" element={<Feed user={data.id}/>}/>
                <Route path="postar" element={<UserPhotoPost/>}/>
                <Route path="estatisticas" element={<UserStats/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </section>
    )
}
