# Interview_Tracker
A firebase project where multiple single page apps are used to coordinate an interview setting. 

I used this project for an MUN Chair interviews event. From past experiences, writing the names out on a white board and waiting for interviewers to come into the waiting room to call the next person was too inneficient. Almost 30 - 40 seconds per candidate, which adds up with over 50 applicants. 

The app has 3 pages: -
 - Chair Registration
 - Interviewer Control
 - Projector View
 
Chair Registration: 
    This side of the app is with the person in the waiting room who takes the candidates name's as they walk in. This is the only place the database may be edited from. This app uploads the names in the order they were entered, which updates the list wherever else it being accessed.
    
Interviewer Control:
    This side of the app is with the interviewer, who can remove people from the interview Queue as they are done. When the interviewer removes a name, all other apps where the list cna be read flashes blue as an alert to let them know the next person can go in. 
    
Projector View:
    This side of the app is to be displayed to the candidates in the waiting room. It has the name of the person who is currently being interviewed, 2 spots for people who must wait outside the interview room, and the rest of the candidates in order they were entered. It also flashes when updated so candidates know if their turn has arrived. 
    
The whole system uses firebase realtime as a base. The actual database has been set to locked mode where it can't be edited externally. So the app won't work currently... but this is due to safety reasons. You may copy the code and add your own database keys to use it. 
