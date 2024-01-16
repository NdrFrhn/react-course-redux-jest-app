// Higher Order Component (HOC) - A component (HOC) that renders another component 
// Goal of HOC => reuse code
// Advantages:
// - render hijacking
// - prop manipulation
// - abstract state

import React from "react";

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  )
};

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       { !props.isAdmin && <p>This is private info. Please don't share</p> }
//       <WrappedComponent {...props}/>
//     </div>
//   );
// };

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {!props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in to visualise the hoc.</p>}
    </div>
  );
}

// const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// export {AdminInfo as default};
export {AuthInfo as default};