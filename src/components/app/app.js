import React from 'react';
import AppHeader from '../app-header'; // импортируем наши компоненты
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list'
import PostAddForm from '../post-add-form';

// import './app.css';
import styled from 'styled-components'; // js in css

const AppBlock = styled.div` 
    margin: 0 auto;
    max-width: 800px;
` // создали блок сразу со стилями используя styled-components

const App = () => {

    const data = [
        {label: 'asss', important: false, id: 'a4'},
        {label: 'Going to learn React', important: true, id: 'a1'},
        {label: 'That is so good', important: false, id:'a2'},
        {label: 'I need a break...  ', important: false, id:'a3'}
    ] 

    return (
        <AppBlock>
            <AppHeader/>   
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div> 
            <PostList posts = {data} />
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;