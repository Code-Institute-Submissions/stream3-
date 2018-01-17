# Stream 3 Compare Stop
**Driving schools directory for the Irish market focusing on EDT driving lessons**

This Website is a Code Institute stream 3 projet. Compare Stop is a driving schools directory enabling users to search for Driving Schools by County. Driving Schools can submit there information through the site. The site also includes a blog to increase SEO strenght with key word blog post displayed on the home page. The E-Commerece component of this site is a advertising market place to buy ads for the site. 

**Follow this link to view deployed version of the web app https://compare-stop-d1.herokuapp.com/**

##Prototyping

Wireframing the funtionality and outline of the project. Wireframe available here: 

## Built with 
1. HTML 5
2. CSS 3
3. Bootstrap
4. JavaScript 
5. Python (Django Framework)


## Components

1. Search 
2. Schools Directory
3. Blog
4. Advertising Market Place
5. Google Form To Gather Data


## Deployment / Hosting

This Application was deployed and is hosted on Heroku - gunicorn Python package runs the http server for the app, the Procfile gives Heroku the information to run the app and requirements.txt is a file that conains all the Python packages (pip installs) required to run the app. mLab MongoDB was chosen to host the dataset on the server.

## Installation

Follow the below instructions to get this project up & running on Mac (commands will be slightly different for Windows)

1. Download MongoDB & Robomongo
2. Go to folder you want to put the cloned project in your terminal & type:
    'https://github.com/PeterKosinski/herokudash.git'
3. Create & Activate a new Virtual Environment in terminal:
    Create: `$ python3 -m venv ~/virtualenvs/name_of_environment`
    Activate: `$ source ~/virtualenvs/name_of_environment/bin/activate`
4. Install the project dependancies:
    `$ pip install -r requirements.txt`
5. Get Mongod running
    `$ mongod --config config/mongoConfig.conf`
6. Open the folder in vscode and use the internal Terminal 
7. Navigate to the 'threatened_species.py', right click and select 'Run python file in terminal'
8. You should see it running below - go to your browser and type '127.0.0.1:5000' into the address bar and the application should appear


## Testing
This Application was tested across a range of browsers
