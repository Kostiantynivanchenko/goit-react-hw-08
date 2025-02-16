import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};

// PropTypes validation
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
