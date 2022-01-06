import React, { useState } from 'react'
import { messages } from './data/msgs'

import ReactPaginate from 'react-paginate';


export const MsgsApp = () => {

    const msgs = messages;

    const [pageNumber, setpageNumber] = useState(0);
    const msgsPerPage = 4;
    const pagesVisited = pageNumber * msgsPerPage;
    const displayMsgs = msgs.slice(pagesVisited, pagesVisited + msgsPerPage);
    const pageCount = Math.ceil(msgs.length / msgsPerPage);
    const changePage = ({selected}) => {
        setpageNumber(selected)
    }

   
    return (
        <>
    <main>
        <div className="header">
            <h1>
                Mensajes Salientes
            </h1>
        </div>
        <div className="dashboard">
            <div className="dl">
                <div className="dli">
                    <div className="dli-text">
                        <h5>Enviados</h5>
                    </div>
                    <div className="dli-line">

                    </div>
                    <div className="dli-number">
                        <h5>25</h5>
                    </div>
                </div>
                <div className="dli">
                    <div className="dli-text">
                        <h5>Recibidos</h5>
                    </div>
                    <div className="dli-line received">

                    </div>
                    <div className="dli-number">
                        <h5>25</h5>
                    </div>
                </div>
                <div className="dli">
                    <div className="dli-text">
                        <h5>No recibidos</h5>
                    </div>
                    <div className="dli-line no-received">

                    </div>
                    <div className="dli-number">
                        <h5>0</h5>
                    </div>
                </div>
                <div className="dli">
                    <div className="dli-text">
                        <h5>Respondidos</h5>
                    </div>
                    <div className="dli-line answered">

                    </div>
                    <div className="dli-number">
                        <h5>0</h5>
                    </div>
                </div>

            </div>
            <div className="dr">
                <div className="dri">
                    <div className="dric">
                        <div className="dric-line send">

                        </div>
                        <div className="dric-content">
                            <div className="dric-icon">
                                <img src="./assets/sent.svg" alt=""/>
                            </div>
                            <div className="dric-text">
                                <h5>Mensajes enviados</h5>
                            </div>
                            <div className="dric-number">
                                <h1>25</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="dri">
                    <div className="dric">
                        <div className="dric-line received">

                        </div>
                        <div className="dric-content">
                            <div className="dric-icon">
                                <img src="./assets/received.svg" alt=""/>
                            </div>
                            <div className="dric-text">
                                <h5>Mensajes recibidos</h5>
                            </div>
                            <div className="dric-number">
                                <h1>25</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="dri">
                    <div className="dric">
                        <div className="dric-line no-received">

                        </div>
                        <div className="dric-content">
                            <div className="dric-icon">
                                <img src="./assets/not_received.svg" alt=""/>
                            </div>
                            <div className="dric-text">
                                <h5>Mensajes no recibidos</h5>
                            </div>
                            <div className="dric-number">
                                <h1>0</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="dri">
                    <div className="dric">
                        <div className="dric-line answered">

                        </div>
                        <div className="dric-content">
                            <div className="dric-icon">
                                <img src="./assets/answered.svg" alt=""/>
                            </div>
                            <div className="dric-text">
                                <h5>Mensajes respondidos</h5>
                            </div>
                            <div className="dric-number">
                                <h1>0</h1>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>

        <div className="messages">
            <div style={{overflowX:'auto'}}>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Estado</th>
                            <th>Fecha de creación</th>
                            <th>Efectividad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayMsgs.map(msg =>(
                                <tr
                                key={msg.id}
                                >
                                    <td>{msg.title}</td>
                                    <td>
                                        {
                                            (msg.status === 'true')?
                                            <>
                                                Verificado
                                                <img src="./assets/verified.svg" alt=""/> 
                                            </>
                                            :
                                            <>
                                                En revision
                                                <img src="./assets/loading-svgrepo-com.svg" alt=""/> 
                                            </>
                                            
                                        } 
                                    </td>
                                    <td>{msg.date}</td>
                                    <td>{msg.effectiveness}</td>
                                </tr>
                            ))
                            
                        }
                    </tbody>


                 
                </table>

              </div>
                <div className="pag">
                <ReactPaginate
                            previousLabel = "<<"
                            nextLabel = ">>"
                            pageCount = {pageCount}
                            onPageChange ={changePage}
                            containerClassName={"pagination pagination-sm flex-wrap"}
                            breakClassName={"page-item"}
                            pageClassName={"page-item"}
                            nextClassName={"page-item"}
                            previousClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            pageLinkClassName={"page-link"}
                            previousLinkClassName={"page-link"}
                            nextLinkClassName={"page-link"}
                            disabledClassName={"disabled"}
                            activeClassName={"active"}
                        />
                </div>
        </div>

        <div className="button">
            <div className="btn-icon">
                <img src="./assets/Plus_icon-icons.com_71848.svg" alt=""/>
            </div>
            <div className="btn-msg">
                Nuevo Mensaje
            </div>
        </div>
    </main>

        </>
    )
}
