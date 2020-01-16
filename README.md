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

    