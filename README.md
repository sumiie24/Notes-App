# Notes-App
Notes Application using NodeJS.    
Notes application by which we can Add a note, Remove a note, Read a specific note and can List all the notes from the file. All notes are saved in the JSON file.


## To Run the project
1. Clone all the files in a folder.
  
    ```
    $ git clone https://github.com/sumiie24/Notes-App
    ```
2. Run the following commands. Before that make sure NodeJS is installed in your machine.  
    
    A. For Installing npm  
    ``` 
    $ npm install 
    ```
    then
    
    B. For Adding a Note  
    ```
       $ node app.js add --title="Note 1" --body="Design a Web Page" 
    ```     
      **New Note added!**  
            
    C. For Removing a Note  
    ```
       $ node app.js remove --title="Note 2"
    ```       
      If note found then **Note removed!** if not then **No note found!** 
            
    D. For Reading a Specific Note  
    ``` 
       $ node app.js read --title="Note 1" 
    ```  
      If note found then **Note name- note_title & Note body- body_of_note** if not then **No note found!**
            
    E. For Listing all the Notes  
    ``` 
       $ node app.js list 
    ```   
      **Your Notes - Note 1, Note 2, Note 3** 
    
    **JSON FILE**: In which All Notes get saved!
    ```
    [
       {
          "title": "Note 1",
          "body": "Design a Web Page"
        },
      {
          "title": "Note 2",
          "body": "Go to Doctor"
        },
      {
          "title": "Note 3",
          "body": "Study Networking and Database"
        },
      {
          "title": "Note 4",
          "body": "Attend a meeting at 12AM"
        }
    ]
    ```
    
    
## Requirements
* NodeJS


## Contributing
I welcome pull requests, bug fixes and issue reports. Before proposing a change, please discuss your change by raising an issue.


## Developer 
* **[Sumit Yadav](https://www.linkedin.com/in/sumiie24/)**

