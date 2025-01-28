// src/components/DataLoader.js
import useUserData from '../../hooks/useUserData'; // Custom hook to fetch data
import PropTypes from 'prop-types'; 

const DataLoader = ({ children }) => {
  const { data, error, loading } = useUserData();

  //console.log(data, error, loading); 

  // Passing data, error, and loading state to children
  return children({ data, error, loading });
};

DataLoader.propTypes = {
    children: PropTypes.func.isRequired, // The children must be a function
};

export default DataLoader;
