import React from 'react';

// Create  global context so components can have access to said context without passing down props
// This doesn't have an initial value on purpose
// Explanation: https://kentcdodds.com/blog/how-to-use-react-context-effectively
const AuthStorageContext = React.createContext();

export default AuthStorageContext;
