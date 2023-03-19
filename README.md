
# MMD Bookhub
Unlock a world of knowledge with MMD Bookhub

## Introduction
This is a mock-up website for Okayreads.com, created for the CSCB20 course at the University of Toronto Scarborough. The website displays the main functionality of the page, including book listings, book details, user reviews, and admin controls.

## Team Members
<img src="https://media.licdn.com/dms/image/C5603AQHMhJncxxeY3A/profile-displayphoto-shrink_800_800/0/1663289948994?e=1684972800&v=beta&t=cpDEjc4DL4Dhc--DfZ_r7oyjIy9GJrSo_QYqUVIb6A0" alt="Alt Text" width="100" height="100">
- Divyansh Kachchhava
- Minjun Kim
- Mustafa Abulmit

## Technologies Used
- HTML
- CSS
- JavaScript
- GitHub
- Figma

## Requirements
- Navigation menu that sticks to the left side of the window in full screen or across the top of the screen in mobile view
- Footer that sticks to the bottom of the page, displaying the names of all team members who designed the page
- Main page should contain five books of the week with images of each book
- Page for each book of the week that provides details and a summary of the book
- Users should be able to add a review of the book
- Page that allows users to log in to the website
- Admin page that only appears if the login name is "admin"
- Page that lists all the reviews of users for each book

## Implementation
We used VS Code to set up the whole project. The initial interface starts with a login page. All the fields, including the username, password, and checkbox, are mandatory for the user to fill in before entering. If the user is an admin, the page will redirect to the admin page. If the user is a regular user, it will redirect to the dashboard. The JavaScript system checks for the admin username and password, which are "admin" and "password," respectively.

For the admin, they have the option to see the feedback form and add new books, authors, and summaries, along with an image that replaces the original one. There is also an option to reorder the IDs of the books.

For regular users, the dashboard displays four options: to see all the books, search for a book, fill out a feedback form, and visit the About Us page section. Users can see all five books visible and navigate through them using the navigation bar. They can also search for a specific book they want. Users can provide feedback on the book through a feedback form. This feedback is sent to the administration, and the admin has the option to reply to them and delete reports if necessary.

## Additional Features
We have added several enhancements to the user interface of our web application. Firstly, we have designed a login page with mandatory fields, and the user must accept the terms and conditions before logging in. Additionally, we have included a loading page with our logo to improve the overall user experience. On the dashboard, we have implemented hover effects that display various options. Users can access the main page to view all available books, search for a particular book using the search function, or provide feedback via the feedback form. 

The feedback form includes a response mechanism that allows the admin to view and respond to user feedback. Furthermore, users have the option to dismiss the responses. We have also integrated a spinning wheel effect that enhances the user interface, and a navigation bar that allows for easy navigation throughout the application. The navigation bar adjusts its size according to the display, ensuring a smooth user experience. Overall, these enhancements have significantly improved the user interface and user experience of our web application.

## We also did the back-end part
Our project is not limited to front-end development alone; we have also developed the backend in Javascript. Users can store all their books as an object in local device memory, making it easily accessible elsewhere when needed. If the administrator enters book details, including images, the system updates everything accordingly. In the event that the administrator does not enter any details, default books are available on our platform, which are already in the Document Object Model (DOM). We have implemented a similar approach for user feedback and review handling, utilizing the DOM and local memory. This project serves as a valuable addition to our resumes, demonstrating our expertise in both front-end and back-end development.

## Installation and Usage
- Clone the repository
- Open the login.html file from login folder in our file in your web browser
