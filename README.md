# blogpost project

# This is a fully functional blog website built with React, Redux, Tailwind CSS, and Vite. The website includes a blog list page with dynamic cards, a detailed blog page with a reviews section, a search bar, a subscription form(doest not work), and a fixed navigation bar with a bell counter that counts the number of times the blogposts been clicked also added counter for individual blog count.

# Project implementation:

- dummy api jsonplaceholder is used to get data for blogs. For fetching data i used axios.
- Frontend search is been used to show blog search texts are compared with title of the blogposts
- I used tailwind css for styling
- For going to the deatils page of the blogposts i used react-router-dom
- For review section i made an array of objects with blogId key. I matched that blogId key to the id i got from api and showed review dynamically.
- For global bell counter and individual counter on the each blog post i used react-redux to store the number of click i showed that on frontend. for individual blog post counter i passed id of that post and increment that individual blog counter.

# how to run the project

- clone repository from the github
- cd repository-name npm install
- npm run dev
