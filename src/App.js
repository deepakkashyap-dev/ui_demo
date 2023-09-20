import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import './App.css';
import $ from 'jquery';

import ProjectRoutes from "./routes";
function App() {
  React.useEffect(() => {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    $("#menu-toggle-2").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled-2");
      $('#menu ul').hide();
    });

    function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      //$('#menu ul:first').show();
      $('#menu li a').click(
        function () {
          var checkElement = $(this).next();
          if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
          }
          if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
          }
        }
      );
    }
    
    $(document).ready(function () {
      initMenu();
    });
  },[])
  return (
    <BrowserRouter>
      <Header />
      <div id="wrapper">
        <SideBar />
        <ProjectRoutes />
      </div>

    </BrowserRouter>

  );
}

export default App;
