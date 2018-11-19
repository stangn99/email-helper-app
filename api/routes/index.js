const express = require('express');
const router = express.Router();
const emailTestOne = {
    emailDetails: "Friday Recap Email - Volume 1", 
    mainStoryTitle: 'This is the title for the main story',
    mainStoryTeaser: ' <h1>This is my Title</h1><p>Lorem ipsum dolor sit amet, <a href="//google.com">consectetur</a> adipiscing elit. Duis sit amet felis ullamcorper, ornare justo sit amet, egestas sem. Pellentesque fermentum diam non consequat convallis. Quisque dictum ornare sodales. Etiam eget augue egestas, feugiat odio vitae, euismod dui. Pellentesque gravida maximus ex id blandit. Ut et erat ex. Duis pulvinar lacus tristique est accumsan maximus. Phasellus eu efficitur mi. Phasellus vel sapien vel urna euismod tempus.</p>  '
}


router.route('/path')
    .get((req, res) => {
        const message = 'Example App';
        res.send(emailTestOne)
    });

exports.router = router