var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(){
    users.forEach(function(user){
      if(user.name === req.body.name && user.password === req.bodypassword) {
        var currentUser = req.session.currentUser;
        res.send({ userFound: true });
      } else {
        res.send({ userFound: false });
      }
    })
  }
}
