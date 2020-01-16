#include <stdio.h>
#include <windows.h>

#define MAXSONGLENGTH 1000000
#define PLAYSPEED 0.4

char *trimwhitespace(char *str)
{
  char *end;
  while(isspace((unsigned char)*str)) str++;
  if(*str == 0)
    return str;
  end = str + strlen(str) - 1;
  while(end > str && isspace((unsigned char)*end)) end--;
  end[1] = '\0';
  return str;
}

void readfile(const char* filename){
	//get file pointer
	FILE* fp = fopen(filename, "r");
	char str[MAXSONGLENGTH];
	
	//give ERROR if song is a NULL pointer
	if (fp == NULL){
		perror("Could not open b33p file");
		exit(1);
	}
	
	//extract data from the file
	while (fgets(str , MAXSONGLENGTH, fp) != NULL){
		//printf("begin read");
		char* line = trimwhitespace(str);
		//handle print statements
		if (line[0] == '>'){
			//delete the print opperator
			memmove(&line[0], &line[0 + 1], strlen(line) - 0);

			printf("%s\n", str);
			continue;
		}

		//handle note statements
		if (strcmp(line, "") != 0 && line[0] != '#'){
			int frequency;
			int duration;
			
			sscanf(str, "%d;%d", &frequency, &duration);
			//printf("playing note with %d Hz for %d ms\n", frequency, (int) round(duration*PLAYSPEED));
			Beep(frequency, duration*PLAYSPEED);
			continue;
		}
	}
	
	//close the file
	fclose(fp);
}

int main(int argc, char* argv[]){
	readfile(argv[1]);
}