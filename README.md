# Welcome to Bitb33per

##

###### Bitb33per is a 8bit music engine for Windows writen in pure C. It has its own language wich someone can easily write and read custom songs in!

##

### How to install Bitb33per
###### - The first thing that you need to do is, to download the Bitb33per. The only thing you need is the `bitb33p.exe` file found in this repo. Either download the repo as a zip file or Git clone it with the command `git clone https://github.com/justlucdewit/bitb33per` .

###### - When you have `bitb33p.exe` downloaded, you have to put the folder containing the executable in your PATH. If u do not know how to do this. please read [this](https://www.itprotoday.com/cloud-computing/how-can-i-add-new-folder-my-system-path) article.

## 

### How to use Bitb33per
###### To run a `.b33p` file (wich contains the song) you need to go to cmd and execute the following command: `bitb33p filename.b33p` where filename is the name of your file.


##

### Standard songs
###### Bitb33per comes with a number of standard songs including:
- happy birthday
- mario theme song

##

### How to write your own songs
###### Bitb33per comes with a number of syntax components:

    Comments

    Comments are texts that are ignored by the interpreter. 
    They are used by the programmer to identify what part of the
    code they are looking at, or hinting future programmers what
    the code means.

    In Bitb33per you define a comment with the character #,
    everything after that gets turned into a comment and will be
    ignored.

    Example code:

    #i am a comment
    #that means that i am ignore
    #simple :)

#

    Notes

    A note, is a set of frequency and duration, sepperated with
    a semi-colon (;) The frequency is an integer measured in Hz 
    and the duration is measured in 1000th of a quater note

    so:
    a duration of 1000 is a quaternote
    a duration of 500 is a 8th note
    a duration of 250 is a 16th note
    etc

    Example code:

    #this is a A4 played for 2 beats
    440;2000
    
    #this is a C4 played for 1 beat
    261;1000

    #you can also have multiple notes without comments:
    660;500
    660;500
    0;500
    660;500
    0;500
    523;500
    660;1000
    783;1000
    0;1000
    391;1000
    0;1000

#

    Print statements

    Print statements are used for outputting text
    to the screen. This can be used to display text
    about the writer, or simply for displaying
    lyrics. To make a print statement, use the
    symbol ">" and then type the string to be
    displayed to the screen

    Example code:

    >song written by human
    >song will begin in 5 seconds
    0;5000

    >happy birthday to you
    #bar 1
    293;500
    293;500
    330;1000
    293;1000
    440;1000
    370;1000
    330;2000