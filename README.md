# Public-Gists
This project uses a  GitHub REST API to fetch a list of public gists and display them on a html page in a grid format.

It displays the following information about the corresponding gist:

• login of the gist owner

• description of the gist if any, OR the message “No Description” otherwise

• last updated date in the format DD/MM/YYYY

• link to the gist which opens in a new tab on clicking

It also performs the following functionalities:

• Client-side filtering the fetched gists by description plus owner login
(there is a search option in the top right side,type any description or owner login and it will be searched accordingly)

• Client-side sorting of the fetched gists by last updated date
(hover the mouse cursor above the Last updated date and click it,the details will be sorted according to Last updated date)

Currently,it displays 30 details in one page using https://api.github.com/gists/public?page=1&per_page=30
The no. of details can be adjusted by modifying the per_page in api url. 

On clicking the button to fetch details,30 details of a corressponding page will be displayed each time.
(hover the mouse cursor on the page no. to view the details of that page)

From any page,you can go to the top/home page by clicking this arrow.![arrow_up](https://user-images.githubusercontent.com/17198965/29506616-56171616-866a-11e7-8eb6-ad37832ddece.png)

Screenshots:

![screenshot 257](https://user-images.githubusercontent.com/17198965/29506073-687ef6a0-8667-11e7-8300-59c3e1c78c97.png)



![screenshot 258](https://user-images.githubusercontent.com/17198965/29506003-11c3278c-8667-11e7-8d9b-a22647eec577.png)


The arrow button to scroll-up.



