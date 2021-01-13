import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import _ from 'lodash';
import { formatDate } from '../../utils/formatDate'
// import { useRecoilValueLoadable } from 'recoil'
// import { declarationsState } from 'src/recoil'

import './listDeclarations.scss';

const ListDeclarations = ({ fetchAllListDeclarations, listDeclarations }) => {
// const ListDeclarations = () => {

//   const stateDeclarations = useRecoilValueLoadable(declarationsState)

//   const createTable = declarations => (
//     <table>
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Date</th>
//           <th>Trailer license plate</th>
//           <th>Truck license plate</th>
//           <th>Emitter</th>
//           <th>State</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {declarations.map(declaration => (
//           <tr key={declaration.id}>
//               <td>{declaration.id}</td>
//               <td>{formatDate(declaration.date)}</td>
//               <td>{declaration.trailerLicensePlate}</td>
//               <td>{declaration.truckLicensePlate}</td>
//               <td>{declaration.emitter}</td>
//               <td>{declaration.state}</td>
//               <td><Link to={`/details/${declaration.id}`}>Détails</Link></td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )

//   switch (stateDeclarations.state) {
//     case 'loading':
//       return <div>Loading</div>
//     case 'hasError':
//       return <div>Error loading declarations</div>
//     case 'hasValue':
//       const declarations = stateDeclarations.contents
//       return createTable(declarations)
//     default:
//       return <div>Loading...</div>
//   }

  useEffect(() =>  {
    fetchAllListDeclarations();
  }, []);
  return (
    <div className="listDeclaration">
      <h2>Listes des déclarations</h2>
      <table>
        <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Trailer license plate</th>
              <th>Truck license plate</th>
              <th>Emitter</th>
              <th>State</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {listDeclarations.map((declaration) => (
            <tr key={_.get(declaration,'id')}>
              <td>{_.get(declaration,'id')}</td>
              <td>{formatDate(_.get(declaration,'date'))}</td>
              <td>{_.get(declaration,'trailerLicensePlate')}</td>
              <td>{_.get(declaration,'truckLicensePlate')}</td>
              <td>{_.get(declaration,'emitter')}</td>
              <td>{_.get(declaration,'state')}</td>
              <td><Link to={`/details/${declaration.id}`}>Détails</Link></td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
};

ListDeclarations.propTypes= {
  fetchAllListDeclarations: PropTypes.func.isRequired,
  listDeclarations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default ListDeclarations;