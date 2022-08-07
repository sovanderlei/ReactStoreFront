import React from 'react';

const DataGet = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return ( 
    <table className="table">
      <thead>
          <tr> 
              <th scope='col' style={{width:80}} >id</th>
              <th scope='col'>title</th> 

          </tr>
      </thead>
      <tbody>
          {posts.map((item, index) => (
              <tr key={index} > 
                  <td>{item.id} </td>
                  <td>{item.title} </td> 
              </tr>
          ))}
      </tbody>
    </table>    
  );
};

export default DataGet;