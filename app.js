const chalk = require('chalk')
const yargs = require('yargs')
const notes= require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note describe',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'   
        },
        body:{
            describe:'note body',
            demandOption: true,
            type:'string'
        }
    }, //builder
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
}) //command add

yargs.command({
    command:'remove',
    describe:'remove describe',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        //console.log('remove command func')
        notes.removeNote(argv.title)
    }
}) //command remove

yargs.command({
    command: 'read',
    describe:'read',
    builder:{
        title:{
            describe:'read title',
            demandOption:true,
            type:'string'
    }
},
    handler(argv){
        notes.readNotes(argv.title)
       // console.log('read func')
    }
}) //command read

yargs.command({
    command: 'list',
    describe:'list all notes',
   
    handler(){
       notes.listNotes()
    }
}) //command list
 
yargs.command({
    command: 'save',
    describe:'save command',
    handler(){
        console.log('save my note') 
    }
}) //command save

//console.log(yargs.argv)
yargs.parse()
 