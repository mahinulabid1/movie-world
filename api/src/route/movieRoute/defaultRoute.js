const { app }  = require( '../../../index' );

app.get( '/' , ( req, res ) => {
    res.send( 'MovieWorld API default route' );
})