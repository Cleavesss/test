import React, { useEffect, useState } from "react";
import PersonCard from './PersonCard';
import {fetchPersons} from 'asyncActions/persons';
import { useDispatch, useSelector } from "react-redux";
import Pagination from 'components/COMMON/Pagination.jsx';
import NotFoundItem from "components/COMMON/NotFoundItem";
import Loading from "components/COMMON/Loading";


export default function PersonList(){

    
    let dispatch = useDispatch();
    let persons = useSelector(state => state.persons.persons );
    let isFetching = useSelector(state => state.persons.isFetching);
    let searchValue = useSelector(state => state.persons.searchValue)
    let [currentPage, setCurrentPage] = useState(1);
    let [personPerPage] = useState(50);
   
    useEffect(() => {
        dispatch(fetchPersons());
    }, [dispatch])
    
    let filteredPerson = [];
    if (searchValue !== ''){
        filteredPerson = persons.filter( person => {
            let personNameForFiltring = `${person.name.title} ${person.name.first} ${person.name.last}`;
            let filterCase =  personNameForFiltring.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            return filterCase;
        })
    }

    
    const pageLimit = Math.ceil(persons.length / personPerPage)
    const lastPersonIndex = currentPage * personPerPage;
    const firstPersonIndex = lastPersonIndex - personPerPage;
    let currentPerson = persons.slice(firstPersonIndex, lastPersonIndex)

   if (filteredPerson.length > 0 ||  searchValue !== ''){
    currentPerson = filteredPerson
    }

    return (
            <div className="newBordered bg-blue-500 dark:bg-blue-800 mx-5 my-5 w-full h-full px-4 py-6">
                
                {
                    isFetching === false
                         ? 
                         currentPerson.map((item) => <PersonCard person={item} key={item.registered}/>)
                         :
                        <Loading x={2}/>
                }

                { filteredPerson.length === 0 && searchValue !== '' && <NotFoundItem />}

                
                

                {!filteredPerson.length && searchValue === '' && isFetching===false && <Pagination currentPage={currentPage} pageLimit={pageLimit} setCurrentPage={setCurrentPage}/>}
                
                
            </div>    
    )
}