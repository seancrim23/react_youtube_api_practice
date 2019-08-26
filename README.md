# React Youtube API Practice
This is the same application as the one I wrote using vanilla Javascript. However, this application will be written using ReactJS.

# TO DO
- Click a button on the first page to authorize - DONE
- Successfully make search calls to the Youtube API using the auth response from the first step - DONE
- Properly retrieve confidential keys/etc from the environment - DONE
- Add an input field and a button to submit dynamic search calls to the Youtube API - DONE
- Create a component to display the results in a list - DONE
- Create a component to display a singular result that was clicked on - DONE
- Create a component to add favorites to when "favorite" button is clicked - DONE
- Create functionality to display all favorites - DONE
- Use Redux to handle actions - DONE
- Upgrade the styling to make it look nice
- Clean up code?
- Optimize?

# GROWING PAINS
- Originally used React Context to authorize. Context did not like working with Redux so I moved the authorization actions to be handled by Redux. I feel as though there may be a better way to handle it but for now it works.
- Lots of issues with syntax! Many issues had me blocked for an hour or so until I realized there was one word I was missing! Either that or misunderstood the functionality of the function I was calling!
