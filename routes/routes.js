const express = require('express')
const router = express.Router();
const User = require('../models/users');
const Appoint = require('../models/appointment');
const Profile = require('../models/profile');
const Bussiness = require('../models/salonbuss');
let isLoggedIn = false;
let name="recomended logout";
let mail="and login again";
router.get("/", (req, res) => {
    res.render('index', { title: 'SereneStyles' });
});
router.get("/bookings", async (req, res) => {
    const homeUrl = isLoggedIn ? '/index1' : '/';
    const bookers = await Appoint.find().exec();
    if (bookers) {
        // Assuming mail is defined somewhere in your code
        const filteredBookers = bookers.filter(booker => booker.email === mail);
        res.render("bookings", { book: filteredBookers, homeUrl });
    } else {
        console.log("No bookings found.");
        res.render("bookings", { book: [], homeUrl }); // Render with an empty array if no bookings found
    }

});

router.get("/sigin", (req, res) => {
    const homeUrl = isLoggedIn ? '/index1' : '/';
    res.render('sigin', { homeUrl });
});
router.get("/index1", (req, res) => {
    res.render('index1', { title: 'SereneStyles', username: name, gmail: mail });
})
router.get("/signup", (req, res) => {

    res.render('signup');
});
router.get("/skincare", (req, res) => {
    const homeUrl = isLoggedIn ? '/index1' : '/';
    res.render('skincare',{homeUrl});
});
router.get("/haircare", (req, res) => {
    const homeUrl = isLoggedIn ? '/index1' : '/';
    res.render('haircare',{homeUrl});
});
router.get("/colorcare", (req, res) => {
    const homeUrl = isLoggedIn ? '/index1' : '/';
    res.render('colorcare',{homeUrl});
});
router.get("/ourstory", (req, res) => {
    const homeUrl = isLoggedIn ? '/index1' : '/';
    res.render('ourstory',{homeUrl});
});

// router.get("/profile", (req, res) => {
//     res.render('profile');
// });
router.get("/salonbusiness", (req, res) => {
    const homeUrl = isLoggedIn ? '/index1' : '/';
    res.render('salonbusiness', { homeUrl });
});
router.get('/loreal', (req, res) => {

    const homeUrl = isLoggedIn ? '/index1' : '/';
    const bmail = mail;
    if(isLoggedIn){
        res.render('loreal', { homeUrl, bmail });

    }else{
        res.redirect('sigin');
    }

    
});
router.get("/success", (req, res) => {
    const homeUrl = isLoggedIn ? '/index1' : '/';

    res.render('success', { message1: 'appointment booked successfully', message: 'Thankyou', homeUrl });
});
/*router.get("/signedup", (req, res) => {
    res.render('success', { message1: 'signed up successfully', message: 'Thankyou' });
});
router.get("/profilesuccessful", (req, res) => {
    res.render('success', { message1: 'profile completed successfully', message: 'Thankyou' });
});
*/
//signup an user into database
router.post('/sign', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({ email: req.body.email }).then(existingUser => {
        if (existingUser) {
            const message = 'User Already Exists!Login to Continue.';
            res.render('signup', { message });
        } else {
            newUser.save().then(() => {
                const message = 'Signed Up Successfully!';
                res.render('signup', { message });
            }).catch(err => {
                
                console.error('Error saving user:', err);
                const message = 'An error occurred. Please try again later.';
                res.render('signup', { message });
            });
        }
    }).catch(err => {
        // Handle any database query errors here
        console.error('Error finding user:', err);
        const message = 'An error occurred. Please try again later.';
        res.render('signup', { message });
    });
});

  

router.post('/sigin', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }).then(user => {
        if (user) {
            if (user.password === password) {
                isLoggedIn = true;
                name = user.name;
                mail = user.email;
                console.log(name);//important
                console.log(mail);


                res.redirect('/index1');
            } else {
                const message = 'Incorrect Password!';
                const homeUrl = isLoggedIn ? '/index1' : '/';

                res.render('sigin', { message, homeUrl });
            }
        } else {
            const message = 'Username Not Found! create an account';
            const homeUrl = isLoggedIn ? '/index1' : '/';

            res.render('sigin', { message, homeUrl });
            // Redirect to signup page

        }
    }).catch(err => {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
    });
});
router.get('/logout', (req, res) => {
    isLoggedIn = false;
    res.redirect('/');
});

router.post('/loreal', (req, res) => {
    const appoint = new Appoint({
        email: req.body.email,
        salonname: req.body.salonname,
        name: req.body.name,
        sex: req.body.sex,
        contact: req.body.contact,
        datetime: req.body.datetime,
        purpose: req.body.purpose,
        reason: req.body.reason,



    });
    appoint.save();
    res.redirect('/success');

});

router.post('/profile', (req, res) => {
    const profil = new Profile({

        name: req.body.name,
        sex: req.body.sex,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,





    });
    profil.save();
    res.redirect('/profilesuccessful');

});
//salon business
router.post('/salonbusiness', (req, res) => {
    const employ = new Bussiness({
        ownername: req.body.ownername,
        salonname: req.body.salonname,
        city: req.body.city,
        phone: req.body.phone,
        email: req.body.email,

    });
    employ.save();
    const message = 'Thank you! ' + req.body.ownername + ' we will contact you soon ';
    const homeUrl = isLoggedIn ? '/index1' : '/';
   
    res.render('salonbusiness', { message ,homeUrl});


});

module.exports = router
