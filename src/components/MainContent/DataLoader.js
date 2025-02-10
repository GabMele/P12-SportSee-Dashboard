import useUserData from "../../hooks/useUserData";
import PropTypes from "prop-types";

const DataLoader = ({ userId, children }) => {
  const { data, error, loading } = useUserData(userId);
  return children({ data, error, loading });
};

DataLoader.propTypes = {
  userId: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default DataLoader;
