# parcel
- running a server on localhost:9966
- this server returns us "src/index.html"
    It has two routes
        clubs23 ========> http://localhost:9966/clubs23/clubs23.html
        players23 ======> http://localhost:9966/players23/players23.html

# express
- running a nodeserver on localhost:9901
- valid endpoints
    /players
    /players23/addPlayer
-------------------------------------------------------------------------


# Agenda
- parcel server running on 9966 must make a request to expressApp running on 9901
- some .proxyrc.js ==> is used for that...