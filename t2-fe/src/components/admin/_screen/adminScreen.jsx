import React from 'react';
import AdHeader from '../ad-header/adHeader';
import Sidebar from '../sidebar/adSidebar';
import Articles from '../articles/articles';
import Tags from '../tags/tags';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

const AdScreen = () => {
  return (
      <div>        
          <AdHeader />
          <Sidebar />
      </div>
  );
};

export default AdScreen;
