# b20a2
Okayreads.com - Book Review Website
This is a mock-up website created for CSCB20 course, showcasing the main functionality of Okayreads.com. The website allows users to view and review books, with a special feature that allows users to rate books and leave messages visible to others.

Team Members
Divyansh
Minjun
Mustafa
Project Requirements
The website must include the following features:

A navigation menu that sticks to the left side of the window in full screen or across the top of the screen in mobile view.
A footer that sticks to the bottom of the page, displaying the names of all team members who designed the page.
A main page containing five books of the week with images of each book.
A page for each book of the week that provides details and a summary of the book.
Users should be able to add a review of the book.
A page that allows users to log in to the website.
An admin page that appears only if the login name is "admin," allowing the user to set the order in which the books of the week appear on the main page.
A page that lists all the reviews of users for each book.
Technologies Used
HTML
CSS
JavaScript
How We Implemented It
We used VS Code to set up the whole project. The initial interface starts with a login page. All the fields, including the username, password, and checkbox, are mandatory for the user to fill in before entering. If the user is an admin, the page will redirect to the admin page. If the user is a regular user, it will redirect to the dashboard. The JavaScript system checks for the admin username and password, which are "admin" and "password," respectively.

For the admin, they have the option to see the feedback form and add new books, authors, and summaries, along with an image that replaces the original one. There is also an option to reorder the IDs of the books.

For regular users, the dashboard displays four options: to see all the books, search for a book, fill out a feedback form, and visit the About Us page section. Users can see all five books visible and navigate through them using the navigation bar. They can also search for a specific book they want. Users can provide feedback on the book through a feedback form. This feedback is sent to the administration, and the admin has the option to reply to them and delete reports if necessary.

Additional Features
We have added several enhancements to the user interface of our web application. Firstly, we have designed a login page with mandatory fields, and the user must accept the terms and conditions before logging in. Additionally, we have included a loading page with our logo to improve the overall user experience. On the dashboard, we have implemented hover effects that display various options. Users can access the main page to view all available books, search for a particular book using the search function, or provide feedback via the feedback form. The feedback form includes a response mechanism that allows the admin to view and respond to user feedback. Furthermore, users have the option to dismiss the responses. We have also integrated a spinning wheel effect that enhances the user interface, and a navigation bar that allows for easy navigation throughout the application. The navigation bar adjusts its size according to the display, ensuring a smooth user experience. Overall, these enhancements have significantly improved the user interface and user experience of our web application.
