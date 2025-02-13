// src/components/MainContent/DataLoader.js

/**
 * @module DataLoader
 * @category Data Fetching Components
 * 
 * @description
 * The `DataLoader` component fetches user data based on the provided user ID 
 * and provides it to its children as a render prop. It utilizes the `useUserData` 
 * custom hook to handle the data fetching process and passes the data, error, 
 * and loading states to the render function.
 * 
 * @example
 * <DataLoader userId="123">
 *   {({ data, error, loading }) => (
 *     loading ? <p>Loading...</p> : <UserProfile data={data} />
 *   )}
 * </DataLoader>
 * 
 * @param {Object} props - The component props.
 * @param {string} props.userId - The ID of the user whose data is being fetched.
 * @param {function} props.children - A render function that receives `data`, 
 * `error`, and `loading` states.
 * 
 * @returns {JSX.Element} The render prop with user data, error, and loading states.
 */

import useUserData from "@/hooks/useUserData";
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
