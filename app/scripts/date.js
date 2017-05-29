var domReady = function ( callback ) {
    //http://beeker.io/jquery-document-ready-equivalent-vanilla-javascript
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener( "DOMContentLoaded", callback );
};
domReady( function () {
    "use strict";
    document.getElementById( 'date' ).innerHTML = ( ( new Date() ).getFullYear() );
} )
