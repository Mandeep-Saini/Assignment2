const index = function (req, res) {
    res.render('about', {
        title: 'About My Site'
    });

};

module.exports = {
    index
};
