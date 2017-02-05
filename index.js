
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        var target = "_blank";
        var options = "location=yes";
        var ref = cordova.InAppBrowser.open('http://www.stichtingtoegankelijkehoreca.nl', target, options);
        ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
        ref.addEventListener('exit', reloadPage);
    },
    
    function reloadPage() {
        var inAppBrowserRef = cordova.InAppBrowser.open('http://www.stichtingtoegankelijkehoreca.nl', target, options);
        inAppBrowserRef.addEventListener('exit', reloadPage);
    }
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
