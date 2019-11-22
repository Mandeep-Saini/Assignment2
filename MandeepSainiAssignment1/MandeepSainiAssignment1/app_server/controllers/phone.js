var phoneArray = [{
    name: 'IPhone 11',
    type: 'IPhone'
}, {
    name: 'Samsung s10',
    type: 'Samsung'
}, {
    name: 'Microsoft Lumia 535',
    type: 'Microsoft'
}];

const phoneList = function (req, res) {
    res.render('list-display', {
        phone: phoneArray,
        title: 'Phone List'
    });

};

const about = function (req, res) {
    res.render('about', {
        title: 'Welcome to the Phone Shop'
    });

};
const display = function (req, res) {
    res.render('display', {
        title: 'Not Implemented'
    });

};

module.exports = {
    phoneList,display,about
};
