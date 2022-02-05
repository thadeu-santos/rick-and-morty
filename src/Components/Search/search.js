import React from 'react';
import styles from './Search.module.scss'

const search = ({ setSearch, setPageNumber }) => {
  return <form className='d-flex justify-content-center gap-5 mb-5'>
      <input onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
      }}
      placeholder='Search for characters' 
      type='text' 
      className={styles.input} />
      <button 
      onClick={(e) => {
          e.preventDefault()
      }}
      className={`${styles.btn} btn btn-primary fs-5`}>Search</button>

  </form>;
};

export default search;
