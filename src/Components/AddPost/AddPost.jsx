import React from 'react';
import stylesWall from "../Profile/Wall/Wall.module.css"; // need to refactor
import PropTypes from 'prop-types';

const AddPost = ({addPostFromProps}) => {
    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        addPostFromProps(text);
        newPost.current.value = '';
    };

    return (
        <div>
            <div className={stylesWall.newPost}>
                <textarea ref={newPost}
                          placeholder="anything new?"
                          className={stylesWall.textarea}>
                </textarea>
                <button onClick={addPost}>add post</button>
            </div>
        </div>
    )
};

AddPost.propTypes = {
    addPostFromProps: PropTypes.func
};

export default AddPost; // TODO: import in Profile and Activity