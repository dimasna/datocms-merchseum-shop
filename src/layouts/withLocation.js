import React,{useEffect} from 'react'
import { Location } from '@reach/router'
import queryString from 'query-string'

const withLocation = ComponentToWrap => props => { 
  useEffect(()=>{
    window.extAsyncInit = function() {
      // the Messenger Extensions JS SDK is done loading 
    };
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'Messenger'));
  })

  return(
  
  <Location>
    {({ location, navigate }) => (
      <ComponentToWrap
        {...props}
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}
  </Location>
)}

export default withLocation