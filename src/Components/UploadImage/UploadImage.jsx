import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';
import {uploadProfileImageFromProps} from '../../Redux/actions/authorization-actions';
import * as PropTypes from "prop-types";

const UploadImage = ({authorizedUserUid, uploadProfileImageFromProps}) => {

    const onFileChange = event => {
        event.preventDefault();
        // Get file
        const file = event.target.files[0];

        uploadProfileImageFromProps(file, authorizedUserUid)
        // TODO: need to delete previous photo
    };

    return (
        <div className='upload-image'>
            <form>
                <input type='file'
                       id='fileButton'
                       accept='image/png, .jpeg, .jpg, image/gif'
                       required
                       onChange={onFileChange} />
            </form>
        </div>
    )
};

UploadImage.propTypes = {
    authorizedUserUid: PropTypes.string,
    uploadProfileImageFromProps: PropTypes.func,
};

const mapStateToProps = state => {
    return {
        authorizedUserUid: state.authorization.authorizedUser.uid,
    }
};

const mapDispatchToProps = {
    uploadProfileImageFromProps
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);