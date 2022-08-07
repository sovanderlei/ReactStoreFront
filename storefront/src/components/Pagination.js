/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Pagination = ({ datasPerPage, totalDatas, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(0);

  for (let i = 1; i <= Math.ceil(totalDatas / datasPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if(currentPage <= pageNumbers.length) { 
        paginate(currentPage+1);
        setCurrentPage(currentPage+1);
    }
  }

  const prevPage = () => {
    if(currentPage !== 1) {
        paginate(currentPage-1);
        setCurrentPage(currentPage-1);
    }
  }

  const numberPage = (pageclick) => { 
    paginate(pageclick);
    setCurrentPage(pageclick);
  }
 
  if(pageNumbers.length > 0){
      return (
        <nav> 
          <ul  className="pagination pagination-sm justify-content-end">
          <li className="page-item" style={{width:'80px'}} >
                <a className="page-link" 
                    onClick={prevPage} 
                    href='#'> 
                    Previous
                </a>
          </li>        
            {pageNumbers.map(number => (
              <li key={number}  className= {`page-item ${currentPage === number ? 'active' : ''} `} >
                <a onClick={() => numberPage(number)} href='#' className='page-link'>
                  {number}
                </a>
              </li>
            ))}
            <li className="page-item">
                <a className="page-link" 
                    onClick={nextPage}
                    href='#'> 
                    Next
                </a>
            </li>
          </ul>
        </nav>
      );
    }else{
      return <h2> </h2>;
    }



};

export default Pagination;