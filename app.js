// const validator = require('validator')
// const notes = require('./notes.js');
// const chalk = require('chalk');

// console.log(notes("this is a personal note"));
// console.log(validator.isURL('tuba.alixample.com'));
// console.log(chalk.blue.bold.inverse('success'));

const yargs = require('yargs');

// console.log(process.argv);
yargs.command({
    command: 'add',
    describe: 'adding a new note!',
    builder: {
        title: {
            describe: 'This is the title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'This is the body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: '+argv.title);
        console.log('Body: '+argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe: 'removing a note!',
    handler: function(){
        console.log('Removing a already held note for youuu!')
    }
})
yargs.command({
    command: 'list',
    describe: 'listing all the notes',
    handler: function(){
        console.log('I am listing all notes hereee');
    }
})
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function(){
        console.log('Reading a note');
    }
})
yargs.parse();
// console.log(yargs.argv);

