import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
// import socketIOClient from 'socket.io-client'
import './detailDeclaration.scss';
import { formatDate } from 'src/utils/formatDate';
import _ from 'lodash';

// let socket

const DetailDeclaration = ({ fetchDetailDeclaration, detailDeclaration, idDeclaration }) => {
  const id  = useParams()
  const history = useHistory()
  
  const [messages, setMessage] = useState([])
  const [value, setValue] = useState('')

  const sendMessage = e => {
    e.preventDefault()
    console.log(value);
    setValue('')
    // socket.emit('new_message', value)
  }

  useEffect(() =>  {
    idDeclaration(id);
    fetchDetailDeclaration();
  }, []);

  // useEffect(() => {
  //   socket = socketIOClient(`http://localhost:5000`)
  //   socket.on('message', data => {
  //     setMessage(old => {
  //       return [...old, {date: data}]
  //     })
  //   })

  //   return () => socket.disconnect()
  // }, [])

  return (
    <div className="detailDeclaration">
      <button onClick={() => history.goBack()}>Retour</button>
      <div className="detailDeclaration__card">
        <h2>Détail de la déclaration par {detailDeclaration.emitter}</h2>
        <hr />
        <p><span>id: </span> {_.get(detailDeclaration, 'id')}</p>
        <p><span>truckLicensePlate: </span> {_.get(detailDeclaration, 'truckLicensePlate')}</p>
        <p><span>trailerLicensePlate: </span> {_.get(detailDeclaration, 'trailerLicensePlate')}</p>
        <p><span>truckOrigin: </span>{_.get(detailDeclaration, 'truckOrigin')}</p>
        <p><span>state: </span> {_.get(detailDeclaration, 'state')}</p>
        <p><span>emitter: </span> {_.get(detailDeclaration, 'emitter')}</p>
        <p><span>createdAt: </span> {formatDate(_.get(detailDeclaration, 'createdAt'), true)}</p>
        <hr />
        <div>
          {detailDeclaration.MRNS3Path && <a href={detailDeclaration.MRNS3Path} download>Télécharger le MRNS3</a>}
          <a href={detailDeclaration.packingListS3Path} download >Télécharger le Packing ListS3</a>
        </div>
      </div>
      <div className="detailDeclaration__card">
        <h2>Liste des documents</h2>
        <hr />
        <div>
        {_.get(detailDeclaration, 'CustomsDeclarationDocuments', []).map(document => (
          <div key={document.id}>
            <p><span>id: </span>{document.id}</p>
            <p><span>name: </span>{document.name}</p>
            <p><span>s3Path: </span>{document.s3Path}</p>
            <p><span>size: </span>{document.size}</p>
            <p><span>emitter: </span>{document.emitter}</p>
            <p><span>createdAt: </span>{formatDate(document.createdAt, true)}</p>
            <p><span>customsDeclaration: </span>{document.customsDeclaration_id}</p>
          </div>
        ))}
        <div>
          <a href={_.get(detailDeclaration, 'CustomsDeclarationDocuments', 's3Path')} download>Télécharger</a>
          <button>Supprimer</button>
        </div>
        </div>
      </div>
      <div className="detailDeclaration__card">
        <h2>Chat</h2>
          <div>
            {_.get(detailDeclaration, 'CustomsDeclarationChats', []).map((message, idx) => (
              <div className="detailDeclaration__card__chat" key={`${message.id}-${idx}`}>
                <p>{message.message}</p>
                <div className="detailDeclaration__card__chat__content"> 
                  <p>{formatDate(message.createdAt, true)}</p>
                  <p>{message.emitter}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="detailDeclaration__card__form">
            <input placeholder="Envoyer un message" type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button type="button" onClick={sendMessage}>Envoyer</button>
          </div>
      </div>
    </div>
  );
};

DetailDeclaration.propTypes= {
  fetchDetailDeclaration: PropTypes.func.isRequired,
  detailDeclaration: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  idDeclaration: PropTypes.func.isRequired,
}

export default DetailDeclaration;