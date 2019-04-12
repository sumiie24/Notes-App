const fs= require('fs')
const chalk= require('chalk')

// adding the note
const addNote = (title,body) =>
    {
        const notes = loadNotes()
        const dupNote= notes.find((note)=> note.title===title)

        if(dupNote===undefined){  
                notes.push({
                    title: title,
                    body: body
                })
                saveNotes(notes)
                console.log(chalk.green.inverse('New Note added!') )
            }  
        else{
                console.log(chalk.red.inverse('Note title Taken!'))
            }
    }//add note 

// removing the note
const removeNote= (title) =>
    {
        const notes= loadNotes()
        const notesToKeep= notes.filter( (note) => note.title!==title )
        
        if(notes.length>notesToKeep.length){
            console.log(chalk.green.inverse('Note removed!'))
            saveNotes(notesToKeep)
        }
        else{
            console.log(chalk.red.inverse('No Note found!'))
        }
        saveNotes(notesToKeep)
    }

// saving the note writing into file
const saveNotes= (notes) =>
    {
        const dataJSON=JSON.stringify(notes)
        fs.writeFileSync('notes.json', dataJSON)
    }

// loading notes form file
const loadNotes= () =>
    {
        try{
            const dataBuffer= fs.readFileSync('notes.json')
            const dataJSON= dataBuffer.toString()
            return JSON.parse(dataJSON)
        }
        catch(e){
            return []
        }
    }//try catch for error handling

//listing the notes
const listNotes = () => 
    {
    const allNotes= loadNotes()

    console.log(chalk.blue.inverse('Your Notes'))

    allNotes.forEach ( (note) => {
        console.log(note.title)
    });
    }

//Reading the notes
const readNotes = (title) =>{
        const allNotes= loadNotes()

        const noteprint= allNotes.find( (note) => note.title===title)

        if(noteprint===undefined){
            console.log(chalk.red.inverse('No Note found'))
        }
        else{
            console.log(chalk.green.inverse("Note name- " + noteprint.title))
            console.log("Note body- " + noteprint.body)     
        }
    }

//exporting the function 
module.exports=
    {
        removeNote: removeNote,
        addNote: addNote,
        listNotes:listNotes,
        readNotes:readNotes
    }