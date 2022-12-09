module.exports = function(baseUrl, app) {
    console.log(baseUrl);

    app.get('/players', (req, res) => {        
        res.send('players endpoint');
    });

    app.get('/players23/addPlayer', (req, res) => {        
        res.send('add player request received');
    })
}