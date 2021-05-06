import React from 'react';
import './post-list.css';
import PostListFilter from '../post-list-item';

const PostList = ({ posts, onDelete , onToggleImportant , onToggleLiked }) => {

    const elements = posts.map( (item) => {        
      
        const {id, ...itemProps} = item ;
        return (
            <li key={id} className="list-group-item">
                <PostListFilter 
                    {...itemProps} 
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked = {() => onToggleLiked(id)} />
            </li>
        )        
    });   

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList ;