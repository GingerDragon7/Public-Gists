# Public-Gists
This project uses a  GitHub REST API to fetch a list of public gists and display them on a html page in a grid format.

It displays the following information about the corresponding gist:
• login of the gist owner
• description of the gist if any, OR the string “No Description” otherwise
• last updated date in the format DD/MM/YYYY
• link to the gist which should open in a new tab on clicking

It also performs the following functionalities:
• Client-side filtering the fetched gists by description plus owner login
(there is a search option in the top right side,type any description or owner login and it will be searched accordingly)
• Client-side sorting of the fetched gists by last updated date
(hover the mouse cursor above the Last updated date and click it,the details will be sorted according to Last updated date)

