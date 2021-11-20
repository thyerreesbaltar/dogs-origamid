import React from 'react'
import { useParams } from 'react-router'
import { PHOTO_GET_ID } from '../../api';
import { Error } from '../../Helper/Error';
import { Head } from '../../Helper/Head';
import Loading from '../../Helper/Loading';
import { useFetch } from '../../Hooks/useFetch';
import { PhotoContent } from './PhotoContent';

export const Photo = () => {
    const {id} = useParams();
    const {data, loading, error, request} = useFetch();

    React.useEffect(() => {
        const {url, options} = PHOTO_GET_ID(id);
        request(url, options);
    }, [request, id])

    if(error) return <Error error={error}/>
    if(loading) return <Loading />
    if(data) 
    return (
        <section className="container mainContainer">
            <Head title={data.photo.title}/>
            <PhotoContent data={data} single={true}/>
        </section>
    )
    else return null
}
