
var app = {
    // Application Constructor
    initialize: function() {
        iab.open('http://www.stichtingtoegankelijkehoreca.nl', '_blank');
        cordova.InAppBrowser.open('http://www.stichtingtoegankelijkehoreca.nl', '_blank', 'location=yes')
    }
    
};
