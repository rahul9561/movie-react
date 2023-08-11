import React, { useEffect, useState } from 'react'
import { fetchData } from '../api/Api';
import './styl.css'
import { Link } from 'react-router-dom';
const List = ({ title, param }) => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetchData(param).then(res => setList(res.data.results))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div style={{ background: "#000", fontFamily: 'Poppins' }}>
            <h2 style={{ color: '#fff' }}> {title}  </h2>
            <div>
                {
                    list.map((item, id) =>
                            <Link to={`/movies/${id}`}>
                        <div className='growth' style={{ color: 'red' }} key={item.id}>
                                <img className='img-part' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} height={300} width={250}
                                />
                                <p style={{textAlign:'center'}}> {item.vote_average}</p>

                        </div>
                            </Link>



                    )
                }
            </div>
        </div>
    )
}

export default List
