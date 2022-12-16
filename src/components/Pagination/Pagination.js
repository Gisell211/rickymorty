import React, {useState,useEffect} from "react";
import ReactPaginate from "react-paginate";


const Pagination = ({ pageNumber, setPageNumber, info }) => {

    let[width, setWidth] =useState(window.innerWidth);

    let updateDimension =() =>{
        setWidth(window.innerWidth);
    };

    useEffect(()=>{
        window.addEventListener("resize", updateDimension);
        return () => window.removeEventListener("resize", updateDimension);

    },[]
    );
    return (
        <>
          <style jsx>
            {`
              @media (max-width: 768px) {
                .pagination {
                  font-size: 12px;
                }
                .next,
                .prev {
                  display: none;
                }
              }
              @media (max-width: 768px) {
                .pagination {
                  font-size: 14px;
                }
              }
            `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"   
        nextLabel="Next"   
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev" 
        nextClassName="btn btn-light fs-5 next "
        previousClassName="btn btn-ligth fs-5 prev" 
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={6}
        activeClassName="active"      
        onPageChange={(data)=>{
            setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
       
        
      />
    </>
  );
};

export default Pagination;