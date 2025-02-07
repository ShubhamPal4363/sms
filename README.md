# SMS Website

This project is an SMS management website that allows users to add contacts, groups, and libraries, as well as send messages to individuals or groups. The application provides a user-friendly interface for managing contacts, creating and sending messages, and organizing them into groups or libraries. The app also allows users to send emails directly.

## Features

- **Add Contact**: Allows users to input details like name, mobile number, and email for new contacts.
- **Add Group**: Lets users create groups by providing a group name.
- **Add Library**: Users can add predefined libraries to organize messages or content.
- **Add Message**: Users can compose and store messages to be sent later.
- **Show Contact**: Displays all the added contacts with their details (name, mobile, email).
- **Show Group**: Displays all created groups.
- **Show Library**: Displays all libraries with stored messages.
- **Show Message**: Displays stored messages, and users can edit or send them.
- **Send Email**: Users can send messages via email to one or more recipients.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript & React
- **Backend**: Firebase (Firestore for database management)
- **Styling**: Bootstrap

## Setup

### Prerequisites

Ensure that you have the following installed:

- **Node.js** (LTS version recommended)  
  Download and install from [Node.js website](https://nodejs.org/)
  
- **npm** (comes with Node.js)

- **Firebase CLI**  
  To install Firebase CLI, run the following:

  ```bash
  npm install -g firebase-tools
  ```

### Firebase Setup

1. **Create a Firebase Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   
2. **Firebase Configuration**:
   - Go to your Firebase project settings and get your Firebase config object.
   - This will contain your API key, auth domain, project ID, storage bucket, etc.
   - Add your Firebase configuration in the `.env` file like so:

     ```bash
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

3. **Install Firebase SDK**:
   In your project directory, run the following to install the Firebase SDK:

   ```bash
   npm install firebase
   ```

4. **Set up Firebase Firestore**:
   - Enable Firestore in the Firebase console under the "Firestore Database" section.
   - You can now use Firestore to store and retrieve contacts, groups, messages, and libraries.

5. **Firebase Hosting** (Optional):
   - If you're deploying the website to Firebase Hosting, initialize Firebase in your project directory:

     ```bash
     firebase init
     ```

   - Select **Hosting** and follow the setup process to deploy your app.

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/sms-website.git
   cd sms-website
   ```

2. **Install dependencies**:

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Firebase Configuration**:

   Ensure that the `.env` file is properly configured with your Firebase credentials (as shown in the Firebase setup section).

4. **Start the development server**:

   Run the following command to start the application:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000/`.

## Pages and Features

### 1. **Add Contact**
   - Input fields for **name**, **mobile number**, and **email**.
   - Saves new contacts to Firestore.

### 2. **Add Group**
   - A single input field to create a group (group name).
   - Stores groups in Firestore and allows users to manage contacts within groups.

### 3. **Add Library**
   - Allows the user to create and manage libraries.
   - Users can save predefined message templates in Firestore.

### 4. **Add Message**
   - Allows the user to compose and store messages.
   - Messages are saved in Firestore and can be retrieved or edited later.

### 5. **Show Contact**
   - Displays a list of all contacts stored in Firestore with their details (name, mobile number, email).

### 6. **Show Group**
   - Displays all created groups stored in Firestore.

### 7. **Show Library**
   - Displays all predefined libraries with saved messages stored in Firestore.

### 8. **Show Message**
   - Displays all stored messages and allows the user to view, edit, or delete them.

### 9. **Send Email**
   - Users can select contacts or groups and send messages via email.
   - You can use **Nodemailer** or **Firebase Functions** to send emails to recipients.

## Folder Structure

```
/sms-website
├── /public
│   └── index.html
├── /src
│   ├── /components
│   │   ├── AddContact.js
│   │   ├── AddGroup.js
│   │   ├── AddLibrary.js
│   │   ├── AddMessage.js
│   │   ├── ShowContact.js
│   │   ├── ShowGroup.js
│   │   ├── ShowLibrary.js
│   │   ├── ShowMessage.js
│   │   ├── SendEmail.js
│   ├── /firebase
│   │   └── firebaseConfig.js (Firebase initialization file)
│   ├── App.js
│   ├── index.js
├── .env
├── package.json
└── README.md
```

## Firebase Functions (Optional)

If you plan to use **Firebase Functions** for email sending or other backend logic, you can set up Firebase Functions in your project:

1. Initialize Firebase Functions in your project:

   ```bash
   firebase init functions
   ```

2. Implement your backend logic in the `functions` folder and deploy it using:

   ```bash
   firebase deploy --only functions
   ```

## Known Issues

- Ensure that Firebase rules are configured correctly for reading and writing data.
- Email sending may require a custom backend if using services like **Nodemailer** or Firebase Functions.
- Firestore data read/write limits may apply, depending on the Firebase plan you're using.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any inquiries or suggestions, feel free to open an issue in this repository.

---
