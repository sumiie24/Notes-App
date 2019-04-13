# Notes-App
Notes Application using NodeJS.

## To Run the project
1. Clone all the files in a folder.
  
    ```
    $ git clone https://github.com/sumiie24/Notes-App
    ```
2. Run the following commands. Before that make sure NodeJS is installed in your machine.
    a. For Installing npm
    ``` 
    $ npm install 
    ```
    then 
    
    b.For Adding a Note
    ``` 
    $ node app.js add --title="Note 1" --body="Design a Web Page" 
    ``` 
    **New Note added!**
    
    c.For Removing a Note
    ``` 
    $ node app.js remove --title="Note 2" 
    ``` 
    If note found then **Note removed!** if not then **No note found!** 
    
    d.For Reading a Specific Note
    ``` 
    $ node app.js read --title="Note 1" 
    ```
    If note found then **Note name- Note 1 & Note body- Design a web page** if not then **No note found!**
    
    e.For Listing all the Notes
    ``` 
    $ node app.js list 
    ``` 
    **Your Notes - Note 1, Note 2, Note 3** 
    
    
## Requirements
* NodeJS


## Contributing
I welcome pull requests, bug fixes and issue reports. Before proposing a change, please discuss your change by raising an issue.


## Developer 
* **[Sumit Yadav](https://www.linkedin.com/in/sumiie24/)**

