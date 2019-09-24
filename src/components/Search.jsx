import React, {useState, useRef, useEffect, useCallback} from 'react';

const Search = props => {
    // const timer = useRef;

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        let result; 
        searchTerm === "" 
            ? result = []
            : result = props.songList.filter(song => song.track_name.includes(searchTerm));
        props.setSearchResult(result);

    }, [searchTerm])

    useEffect(() => {
        props.songOptionSelected && setSearchTerm('');
    }, [props.songOptionSelected])

    // const triggerSearchEvent = useCallback( () =>{
    //     let searchField = document.querySelector(`#${props.type}Search`);
    //     if(searchField.value === ''){
    //         // Emptied Search.. do nothing
    //     }else{
    //         props.changeEvent(searchField);
    //         searchField.value = '';
    //     }
        
    //     props.changeEvent();
    //     clearInterval(timer.current);
    // }, [props, timer]);

    const searchChange = e =>{
        // clearInterval(timer.current);
        // timer.current = setInterval(triggerSearchEvent, props.eventTimer);
        setSearchTerm(e.target.value);
        props.setSongOptionSelected(false);

    };

    return (
        <div className="dashboard-search">
            <label htmlFor={`${props.type}Search`}><i className="search-icon fas fa-search fa-1x"></i> </label>
            <input 
                type="text" 
                name={`${props.type}Search`} 
                value={searchTerm}
                id={`${props.type}Search`} 
                placeholder={props.placeholder}  
                onChange={searchChange} 
                autoComplete="off"/>
        </div>
    );
};

export default Search;