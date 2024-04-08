import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, ...props }) {
  if (props.loggedIn) {
    return <Component {...props} />
  } else {
    <Navigate to='/' replace />
  }
}

export default ProtectedRoute;