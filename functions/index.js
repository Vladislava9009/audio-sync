const functions = require("firebase-functions");

const admin = require('firebase-admin');
const { getAdministration } = require("mobx/dist/internal");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail('vladislavabog@icloud.com').then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        })
    }).then(() => {
        return {
            message: 'ok'
        }
    }).catch(err => {
        return err
    })

})

// exports.addAdminRole = functions.https.onCall(() => {
//     //get user and add custom claim (admin)
//     return admin.auth().setCustomUserClaimes('lngDepwbSsWyqCEk64S3B08BqK23', {
//         admin: true
//     }).then(() => {
//         return {
//             message: 'ok'
//         }
//     }).catch(er => {
//         return er
//     })
// })
