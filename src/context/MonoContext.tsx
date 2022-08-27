import React, { useEffect, useState } from 'react';

export const MonoContext = React.createContext();

export const MonoProvider = ({ children: any }) => {
  return <MonoContext.Provider value={{}}>{children}</MonoContext.Provider>;
};
