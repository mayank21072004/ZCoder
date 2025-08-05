# ZCoder

ZCoder is a comprehensive platform designed to facilitate collaborative learning among users interested in coding and problem-solving. It allows users to create profiles, engage in collaborative learning, chat with each other, discuss problem-solving techniques, share interesting insights, and participate in community discussions. Additionally, it includes a contest calendar page where users can stay updated on upcoming contests.

## Table of Contents

- [Features](#features)
  - [Login Page](#login-page)
  - [User Profiles](#user-profiles)
  - [Collaborative Learning](#collaborative-learning)
  - [Chat](#chat)
  - [Problem-Solving Discussions](#problem-solving-discussions)
  - [Community Section](#community-section)
  - [Contest Calendar](#contest-calendar)
- [Installation](#installation)
- [Usage](#usage)

## Features

 ### Login Page
 - **Enhanced Security:**  Our website exclusively supports logins through Google Authentication, ensuring a secure and streamlined login experience for our users.
 - **New Account on first time Login:** Once you login after google authentication your profile is automatically created however you still need to fill in the necessary details in the user profile section.

### User Profiles

- **Details:** Users can choose username for themselves and upload details about their institution and other details.
- **Bio:** A section where users can write a short bio about themselves.
- **Other Profiles:** Users can list username in different platforms such as Codeforces, Codechef, Atcoder and Leetcode.
- **Linkedin:** user can put up their linkedin profiles.

### Collaborative Learning

- **Study Groups:** Users can join  study groups based on specific topics or programming languages.
- **Learning Resources:** A collection of tutorials, articles, and videos (links) shared by the community.

### Chat

- **Private Messaging:** Users can send private messages to each other.
- **Self Chat:** Users can bookmark questions, articles by sending links in their self chat.
- **Drawer:** Users can check their profile details by clicking on their profile.

### Problem-Solving Discussions

- **Solution Sharing:** Users can share their approaches to problems and their solutions via community and end to end user interactions.

### Community Section

- **Posts:** Users can create messages to share news, articles, or opinions.
- **Discussion:** Users can start discussions on various topics and engage with the community.

### Contest Calendar

- **Calendar View:** List of upcoming contests in various platforms are displayed here.
- **Contest Details:** Detailed information about each contest, including duration, platform, and registration links.

## Installation

To install and run ZCoder locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/krrishkavya/Zcoder.git
2. Navigate to the project directory and download the necessary dependencies:(copy-paste the following code into the terminal)
   ```bash
   cd Zcoder
   cd server
   npm i
   npm start
   cd ..
   cd socket
   npm i
   npm start
   cd ..
   cd client
   cd my-app
   npm i
   npm start

After this the app should start in your device (if you are facing any issues/bugs please raise them in the issues section).

## Usage

Once the server is running, open your browser and navigate to http://localhost:3000 to start using ZCoder. You can create an account by directly signing up with google, set up your profile, join collaborative learning groups, chat with other users, participate in problem-solving discussions, and check the contest calendar.

