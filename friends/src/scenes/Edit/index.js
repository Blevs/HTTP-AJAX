import React, { useEffect } from 'react';
import FriendForm from '../../components/FriendForm';

const Edit = ({onSubmit, match, handleInput, values, initEdit}) => {
  useEffect(() => {
    initEdit(match.params.id);
  }, [match.params.id]);
  return (
    <div>
      <h1>Edit Friend</h1>
      {(values && Object.entries(values).length !== 0)
       ? <FriendForm onSubmit={onSubmit}
                     buttonText="Edit Friend"
                     handleInput={handleInput}
                     values={values }/>
       : <div>Loading...</div> }
    </div>
  );
};

export default Edit;
