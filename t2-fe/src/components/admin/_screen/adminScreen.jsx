import React from 'react';
import CManagement from '../contentManagement/cManagement';
import TheRealHeader from '../thereal-ad-header/thereal-ad-header';
import Sidebar from '../sidebar/adSidebar';
import Articles from '../articles/articles';
import Tags from '../tags/tags';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

const AdScreen = () => {
  return (
      <div>
        <TheRealHeader />
        <Sidebar />
      </div>
  );
};

export default AdScreen;
