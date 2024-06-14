const nodemailer = require('nodemailer');
const twilio = require('twilio');
const { subscribeClient } = require('./websocketService');

class AlertsService {
    constructor() {
        this.alerts = new Map();
        this.emailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'bethnorberg24@gmail.com',
                pass: 'Tricia40@' 
            }
        });
        this.smsClient = twilio('ACCOUNT_SID', 'AUTH_TOKEN'); // INPUT_REQUIRED {Enter your Twilio Account SID and Auth Token}
    }

    addAlert(id, alertConfig) {
        this.alerts.set(id, alertConfig);
        console.log(`Alert added with ID: ${id}`);
    }

    removeAlert(id) {
        this.alerts.delete(id);
        console.log(`Alert removed with ID: ${id}`);
    }

    updateAlert(id, newConfig) {
        this.alerts.set(id, newConfig);
        console.log(`Alert updated with ID: ${id}`);
    }

    checkAlerts(priceUpdate) {
        this.alerts.forEach((config, id) => {
            if ((config.direction === 'above' && priceUpdate.price > config.threshold) ||
                (config.direction === 'below' && priceUpdate.price < config.threshold)) {
                this.notify(config, priceUpdate);
                console.log(`Alert triggered for ID: ${id}`);
            }
        });
    }

    notify(config, priceUpdate) {
        const message = `Price alert for ${config.asset}: ${priceUpdate.price}`;
        if (config.notificationMethod === 'email') {
            this.sendEmail(config.email, message);
        } else if (config.notificationMethod === 'sms') {
            this.sendSMS(config.phone, message);
        }
    }

    sendEmail(email, message) {
        const mailOptions = {
            from: 'your-email@gmail.com', // INPUT_REQUIRED {Enter your Gmail address}
            to: email,
            subject: 'Price Alert',
            text: message
        };
        this.emailTransporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    }

    sendSMS(phone, message) {
        this.smsClient.messages.create({
            to: phone,
            from: '+1234567890', // INPUT_REQUIRED {Enter your Twilio phone number}
            body: message
        }).then(message => {
            console.log('SMS sent:', message.sid);
        }).catch(error => {
            console.error('Error sending SMS:', error);
        });
    }
}

module.exports = AlertsService;

// Subscribe to WebSocket updates and check alerts on each price update
subscribeClient({
    onMessage: (priceUpdate) => {
        const alertsService = new AlertsService();
        alertsService.checkAlerts(priceUpdate);
    }
});