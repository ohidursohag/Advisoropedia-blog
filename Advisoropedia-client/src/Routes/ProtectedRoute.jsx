import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Utils/Loading';

const ProtectedRoute = ({children}) => {
const {user,loading}= useAuth()
const location = useLocation()
console.log(loading)
if(loading) {
   return <Loading/>
}
if (!loading && !user) {
   return <Navigate state={location.pathname} to={'/authentication'}></Navigate>
}
  return children
};

ProtectedRoute.propTypes = {
   children: PropTypes.node
};

export default ProtectedRoute;
