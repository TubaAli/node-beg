console.log('Example of requiring');

const fname = 'Tubaa';

// We can export the variable from this file to any file which is requiring it
// module.exports = fname;

const add = function(a,b){
    return a+b;
}

module.exports = add;