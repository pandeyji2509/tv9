import React from 'react'

function Pagination({ nPages, currentPage, setCurrentPage }) {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
  return (
    <div className='container mt-5'>
    <nav>
    <ul className='pagination justify-content-center'>
        <li className="page-item">
            <a className="page-link" 
                onClick={prevPage} 
                href='#'>
                <span aria-hidden="true"><i class="bi bi-arrow-left-circle"></i></span>
            </a>
        </li>
        {pageNumbers.map(pgNumber => (
            <li key={pgNumber} 
                className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                <a onClick={() => setCurrentPage(pgNumber)}  
                    className='page-link' 
                    href='#'>
                    
                    {pgNumber}
                </a>
            </li>
        ))}
        <li className="page-item">
            <a className="page-link" 
                onClick={nextPage}
                href='#'>
                <span aria-hidden="true"><i class="bi bi-arrow-right-circle"></i></span>
            </a>
        </li>
    </ul>
</nav>
</div>
)
  
}

export default Pagination
