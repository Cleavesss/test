import React from "react";

export default function Pagination({ pageLimit, setCurrentPage, currentPage}){
    
    let pagItems = [];
    for (let i = 1; i <= pageLimit; i++){
                 pagItems.push(i)
    }
    let pagItemsForRender = [];


    let length = Math.floor((pagItems.length - 7)/2);
    if(pagItems.length <= 6){
        pagItemsForRender = pagItems;
    } else if(pagItems.length > 7 && currentPage===1){
        pagItemsForRender = pagItems.slice(currentPage-1, currentPage + 5);
    } else if(pagItems.length > 7 && currentPage===2){
        pagItemsForRender = pagItems.slice(currentPage-2, currentPage + 4);
    }else if(pagItems.length > 7 && currentPage >= 3 && currentPage < pagItems.length - 3){
        pagItemsForRender = pagItems.slice(currentPage-3, currentPage + 3);
    } else if(pagItems.length > 7 && currentPage >=  pagItems.length - 3 ){
        pagItemsForRender = pagItems.slice(pagItems.length - 6);
    } 

    const paginate = (pageNum) => setCurrentPage(pageNum)
    const nextPage = () => setCurrentPage((prev) => prev+1)
    const prevPage = () => setCurrentPage((prev) => prev-1)
    const firstPage = () => setCurrentPage(1)
    const lastPage = () => setCurrentPage(pagItems.length)

    return(
        <div className="flex flex-col items-center mt-5 justify-center">
            <ul className="flex justify-center w-[550px] mb-5">
                {
                    pagItemsForRender.map(number => (
                        <li  onClick={() => paginate(number)} className="mx-3 btn  px-5 py-3  newBordered text-white text-center" key={number}>
                            <a href="#" >{number}</a>
                        </li>
                    ))    
                }
            </ul>
            <div className="flex justify-center w-[550px]">
                <button className="mx-3 btn  px-5 py-3 text-white text-xs "  onClick={() => firstPage()}>First Page</button>
                <button className="mx-3 btn  px-5 py-3 text-white text-xs  " disabled={currentPage === 1} onClick={() => prevPage()}>Prev Page</button>
                <button className="mx-3 btn  px-5 py-3 text-white text-xs "  disabled={currentPage === pagItems.length} onClick={() => nextPage()}> Next Page</button>
                <button className="mx-3 btn  px-5 py-3 text-white text-xs "  onClick={() => lastPage()}>Last Page</button>

            </div>
        </div>   
    )
}