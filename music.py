from winsound import Beep
from time import sleep

bpm = 180

def playsong(song):
    for note in song:
        #print(f"playing {note[0]}HZ for {note[1]/1000} sec")
        
        if int(note[0]) >= 37:
            Beep(int(note[0]), int(note[1]))
        else:
            sleep(int(note[1])/1000)
def read(name):
    with open(f"{name}.b33p", "r") as FILE:
        song = FILE.read()
        
    song = song.splitlines()
    
    #remove comments and empty lines
    for i, line in enumerate(song):
        if line.strip() == "":
            song.pop(i)
        elif line[0] == "#":
            song.pop(i)
    
    
    for i, note in enumerate(song):
        song[i] = note.split(";")
        song[i][1] = int(song[i][1])*0.5
   
    
    playsong(song)
    
read("song")