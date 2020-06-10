
var canvas = document.getElementById("myCanvas");  //Author of the code: Erik Pavlusik    
var context = canvas.getContext("2d");
	
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');

context.fillStyle = "white";
context.font = "bold 30pt Courier";
context.fillText("LOADING...",400,230);

var currentpageshosted = 22;   // pocet stran
	
var mouseX;
var mouseY;
         
var Game = { level: 0 };
	
var innerRadius = 5,
outerRadius = 15,
radius = 60;	
	
var bgImage = new Image();
var logoImage = new Image();
var playImage = new Image();
var instructImage = new Image();
var settingsImage = new Image();
var creditsImage = new Image();
var logoxImage = new Image();
        
var backgroundY = 0;
var speed = 1;
     	
var buttonX = [240,220,300,270];
var buttonY = [160,250,350,450];
var buttonWidth = [480,520,364,430];
var buttonHeight = [80,80,80,80];
 
var pocitadlo = 0;
var xpoc = 0;
var ypoc = 0;
        
context.font = "10px Arial";
context.fillStyle = "white";
	
var logoxX = [0,0];
var logoxY = [0,0];
var logoxWidth = 35;
var logoxHeight = 40;
	
var logoxVisible = false;
var logoxSize = logoxWidth;
var logoxRotate = 0;
	
var frames = 20;
var timerId = 0;
var fadeId = 0;
var time = 0.0;

var Background = new Image();
Background.src = "Images/first.png";
        
var Story = new Image();
Story.src = "Images/story1.png";
        
var Story2 = new Image();
Story2.src = "Images/story2.png";
		
var Story3 = new Image();
Story3.src = "Images/story3.png";
		
var Space = new Image();
Space.src = "Images/space.png"
				
var auicon = new Image();
auicon.src = "Images/auicon.png";	
				
var pocitadlo = 0; //Tu si ratam cas
var circleRadius = 10;
var pulzovaciavelicina = 0;
var holex;
var holey;

var pohybstory = -100;
var druhypohyb = 300;
var casovacstory = 0;
var blikac = 0;

//New variables
var prvemomenty = 0;
var firstframe = true;
var arrowup = new Image();
arrowup.src = "Images/arrowup.png";
var arrowdown = new Image();
arrowdown.src = "Images/arrowdown.png";
var arrowback = new Image();
arrowback.src = "Images/arrowback.png";
var vertpolohastranky = 0;
var mousepressedup = false;
var mousepresseddown = false;
var erikbio = new Image();
erikbio.src = "Images/erikbio.png";
var backtomenu = new Image();
backtomenu.src = "Images/backtomenu.png";
var neninasipke = true;
var nextpage = new Image();
nextpage.src = "Images/nextpage.png";
var text1 = new Image();
var text2 = new Image();
var text3 = new Image();
var text4 = new Image();
var text5 = new Image();
var newpage = false;
var floatingtext = -200;
var floatingtext2 = 1000;
var floatingtext3 = 0;
var floatingtext4 = 0;
var displayedpage = new Image();  // toto asi nebude treba
var text = '{"supertext":[' +
'{"count":2,"startpositions":[-200,1200],"endpositions":[500,100],"vertposition":[50,800],"directions":[1,2],"length":[320,350],"width":[90,90]},' +  // p1
'{"count":3,"startpositions":[-400,1200,-2000],"endpositions":[500,100,300],"vertposition":[50,800,1100],"directions":[1,2,2],"length":[300,320,300],"width":[70,80,130]},' + // p2
'{"count":2,"startpositions":[-400,2200],"endpositions":[500,100],"vertposition":[50,1100],"directions":[1,2],"length":[280,300],"width":[120,130]},' + // p3
'{"count":4,"startpositions":[-900,1200,-1400,1800],"endpositions":[200,450,100,500],"vertposition":[250,350,950,700],"directions":[1,3,2,2],"length":[310,310,220,310],"width":[130,130,200,200]},' + // p4
'{"count":3,"startpositions":[-500,1000,-2000],"endpositions":[500,100,500],"vertposition":[50,500,1100],"directions":[1,2,2],"length":[380,320,400],"width":[150,80,110]},' + // p5
'{"count":2,"startpositions":[-500,2500],"endpositions":[280,400],"vertposition":[300,1100],"directions":[1,2],"length":[390,320],"width":[150,80]},' + // p6
'{"count":3,"startpositions":[-500,1000,-2000],"endpositions":[500,200,500],"vertposition":[50,700,900],"directions":[1,2,2],"length":[320,320,320],"width":[90,80,90]},' + // p7
'{"count":2,"startpositions":[-500,1800],"endpositions":[60,100],"vertposition":[50,900],"directions":[1,2],"length":[180,360],"width":[110,70]},' + // p8
'{"count":3,"startpositions":[-500,1000,-2000],"endpositions":[500,100,500],"vertposition":[50,400,900],"directions":[1,2,2],"length":[320,320,400],"width":[70,80,120]},' + // p9
'{"count":2,"startpositions":[-500,2200],"endpositions":[300,300],"vertposition":[50,880],"directions":[1,2],"length":[390,350],"width":[70,90]},' + // p10
'{"count":4,"startpositions":[-900,1200,-1400,2400],"endpositions":[200,650,100,500],"vertposition":[50,100,950,1020],"directions":[1,3,2,2],"length":[310,200,220,310],"width":[130,70,70,70]},' + // p11
'{"count":3,"startpositions":[-400,1200,-2000],"endpositions":[500,100,100],"vertposition":[50,800,1000],"directions":[1,2,2],"length":[250,320,200],"width":[70,80,80]},' + // p12
'{"count":1,"startpositions":[-200],"endpositions":[300],"vertposition":[50],"directions":[1],"length":[420],"width":[170]},' + // p13
'{"count":3,"startpositions":[-500,1200,-2000],"endpositions":[400,410,400],"vertposition":[50,350,1100],"directions":[1,1,2],"length":[220,320,300],"width":[70,80,80]},' + // p14
'{"count":3,"startpositions":[-500,2000,-2000],"endpositions":[500,100,320],"vertposition":[50,600,1000],"directions":[1,2,2],"length":[320,320,350],"width":[90,80,90]},' + // p15
'{"count":3,"startpositions":[-500,1000,-2200],"endpositions":[500,100,400],"vertposition":[50,700,900],"directions":[1,2,2],"length":[320,320,350],"width":[90,70,90]},' +  // rotating
'{"count":3,"startpositions":[-400,1200,-1500],"endpositions":[500,180,200],"vertposition":[150,350,1000],"directions":[1,1,2],"length":[350,320,300],"width":[70,80,120]},' + 
'{"count":1,"startpositions":[-200],"endpositions":[300],"vertposition":[50],"directions":[1],"length":[320],"width":[70]},' + // p18
'{"count":2,"startpositions":[-200,1200],"endpositions":[500,100],"vertposition":[50,800],"directions":[1,2],"length":[320,350],"width":[90,90]},' + //p19
'{"count":3,"startpositions":[-500,1000,-2000],"endpositions":[500,100,500],"vertposition":[50,350,1100],"directions":[1,1,2],"length":[350,320,400],"width":[70,80,110]},' + // p20
'{"count":4,"startpositions":[-500,1200,-1400,2400],"endpositions":[200,650,100,500],"vertposition":[30,50,950,1020],"directions":[1,3,2,2],"length":[300,300,220,310],"width":[70,70,70,70]},' + // p21
'{"count":1,"startpositions":[-200],"endpositions":[500],"vertposition":[50],"directions":[1],"length":[320],"width":[90]},' + // p22
'{"count":3,"startpositions":[-500,1000,-2000],"endpositions":[500,100,500],"vertposition":[50,500,1100],"directions":[1,2,2],"length":[320,400,400],"width":[70,70,110]}]}'; // p23

var makingof = new Image();
var homebutton = new Image();
homebutton.src = "Images/home.png";
var wall = new Image();
wall.src = "Images/wall.png";
var modedemoon = false;
var pagenumber = 0;
// 1 vlavo 2 vpravo
// **********************
var storyimageNames = ["page1.jpg", "page2.jpg", "page3.jpg", "page4.jpg", "page5.jpg", "page6.jpg",
"page7.jpg", "page8.jpg", "page9.jpg","page10.jpg", "page11.jpg", "page12.jpg","page13.jpg", "page14.jpg", "page15.jpg",
"page16.jpg", "page17.jpg", "page18.jpg", "page19.jpg", "page20.jpg","page21.jpg", "page22.jpg", "page23.jpg"];
var pageimages = [];


var currentcharacter = 0;
var characterNames = ["charpic_1.png", "charpic_2.png", "charpic_3.png", "charpic_4.png", "charpic_5.png", "charpic_6.png",
"charpic_7.png", "charpic_8.png", "charpic_9.png","charpic_10.png", "charpic_11.png"];
var characterimages = [];


var monumber = 0;
var moNames = ["making_1.png", "making_2.png", "making_3.png", "making_4.png", "making_5.png", "making_6.png"];
var moimages = [];

var bioNames = ["chartext_1.png", "chartext_2.png", "chartext_3.png", "chartext_4.png", "chartext_5.png", 
"chartext_6.png", "chartext_7.png", "chartext_8.png","chartext_9.png","chartext_10.png","chartext_11.png"];
var bioimages = [];



logoxImage.src = "Images/logox.png";
bgImage.onload = function(){
context.drawImage(bgImage, 0, backgroundY);
};
bgImage.src = "Images/Background.png";
logoImage.onload = function(){
context.drawImage(logoImage, 100, 10);
}
playImage.src = "Images/play.png";
playImage.onload = function(){
context.drawImage(playImage, buttonX[0], buttonY[0]);
}
logoImage.src = "Images/logo.png";
instructImage.onload = function(){
context.drawImage(instructImage, buttonX[1], buttonY[1]);
}
instructImage.src = "Images/instructions.png";
settingsImage.onload = function(){
context.drawImage(settingsImage, buttonX[2], buttonY[2]);
}
settingsImage.src = "Images/settings.png";
creditsImage.onload = function(){
context.drawImage(creditsImage, buttonX[3], buttonY[3]);
}
creditsImage.src = "Images/credits.png";
	
timerId = setInterval("update()", 800/frames);
	
canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);
canvas.addEventListener("mousedown", checkDown);

/* var menuhudba = document.getElementById("magic");
menuhudba.volume = .3;     
menuhudba.currentTime = 0; */

var superobjekt = JSON.parse(text);  
		       
function checkPos(mouseEvent){                            //sledujeme kde sa kurzor nachadza  
  
	  if(mouseEvent.pageX || mouseEvent.pageY == 0){
		  mouseX = mouseEvent.pageX - this.offsetLeft;
		  mouseY = mouseEvent.pageY - this.offsetTop;
    }
    else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
		mouseX = mouseEvent.offsetX;
		mouseY = mouseEvent.offsetY;
    }
    if(Game.level == 0) {
	  for(i = 0; i < buttonX.length; i++){
		  if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
			  if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
				  logoxVisible = true;
				  logoxX[0] = buttonX[i] - (logoxWidth/2) - 2;
				  logoxY[0] = buttonY[i] + 2;
				  logoxX[1] = buttonX[i] + buttonWidth[i] + (logoxWidth/2); 
				  logoxY[1] = buttonY[i] + 2;
			  }
            }
            else {
			logoxVisible = false;
			}
    }
  }
  if(Game.level == 1) {                        
		  if(mouseX > 455 && mouseX < 515){   // horna sipka
			  if(mouseY > 0 && mouseY < 40){
          scrollsetterup();
          mousepressedup = true;
          mousepresseddown = false;
          neninasipke = false;
        }         
      }  
      if(mouseX > 455 && mouseX < 515){  // dolna sipka
			  if(mouseY > 600 && mouseY < 640){
          scrollsetterdown();
          mousepresseddown = true;
          mousepressedup = false;
          neninasipke = false;
        }         
      } 
      else { neninasipke = true;}
      if(neninasipke) {  
        mousepressedup = false;
        mousepresseddown = false;
        neninasipke = false;
          }   
  }
}

function move(){           // toto nechat, rotacia tych veci pri options  
	backgroundY -= speed;
	if(backgroundY == -1 * height){
		backgroundY = 0;
	}
	if(logoxSize == logoxWidth){
		logoxRotate = -1;
	}
	if(logoxSize == 0){
		logoxRotate = 1;
	}
	logoxSize += logoxRotate;
} 

function checkClick(mouseEvent){                    //sledovanie kliknutia mysi v menu
    if(Game.level == 0) {  
		for(i = 0; i < buttonX.length; i++){
			if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
				if(mouseY > buttonY[0] && mouseY < buttonY[0] + buttonHeight[0]){    //tu sa aktivuje prvy leve	
	  storyimageNames.forEach(function(name){
          image = new Image();  
          image.src = "Images/" + name;     
          pageimages.push(image);    
          });				
          Game.level = 1;     
          clear();
          context.clearRect(0, 0, width, height);
          context.drawImage(Background, 0 ,0 , 960, 640); 
          vertpolohastranky = 0;
          pagenumber = 0;
          newpage = true;
          mousepressedup = false;
          mousepresseddown = false;
          firstframe = true;
          prvemomenty = 0;
          nextpagetexts();                                       										                                                                                                                        
				}
      if(mouseY > buttonY[1] && mouseY < buttonY[1] + buttonHeight[1]){    // kliknutie druhej ikony
	bioNames.forEach(function(name){
        image = new Image();  
        image.src = "Images/" + name;     
        bioimages.push(image);    
        });
	characterNames.forEach(function(name){
        image = new Image();  
        image.src = "Images/" + name;     
        characterimages.push(image);    
        });
        pohybstory = -100;
	casovacstory = 0;   // Tu nastavit ak sa chce pribeh pustit v neskorsej sekunde
	druhypohyb = 300;
	blikac = 0;
        Game.level = 20;	
        modedemoon = true;										
        }        
      if(mouseY > buttonY[2] && mouseY < buttonY[2] + buttonHeight[2]){       // kliknutie tretej ikony - bio                                              
        clear(); 
        context.fillStyle = "black";
        context.fillRect(0, 0, 960, 640);
        context.drawImage(erikbio, 50 ,50 , 860, 540);
        context.drawImage(backtomenu, 280 ,450 , 480, 80);        
        Game.level = 4; 
        }      
      if(mouseY > buttonY[3] && mouseY < buttonY[3] + buttonHeight[3]){       // kliknutie stvrtej ikony - making of
        clear();
	moNames.forEach(function(name){
        image = new Image();  
        image.src = "Images/" + name;     
        moimages.push(image);    
        });
        monumber = 0;
        context.fillStyle = "black";
        context.fillRect(0, 0, 960, 640); 
        Game.level = 5;
      }
		}
	}
}
    if(Game.level == 1) {                        // citaci mod
        if(mouseX > 455 && mouseX < 515){     // arrow up
          if(mouseY > 0 && mouseY < 40){
            scrollsetterup();
            mousepressedup = true;
          }         
        }  
        if(mouseX > 455 && mouseX < 515){    // arrow down
          if(mouseY > 600 && mouseY < 640){
            scrollsetterdown();
            mousepresseddown = true;
          }         
        }
        if(mouseX > 660 && mouseX < 940 && vertpolohastranky < -750){    // next page
          if(mouseY > 550 && mouseY < 630){
            if(pagenumber < currentpageshosted)  {           
            pagenumber++;
            vertpolohastranky = 0;
            newpage = true;      
            nextpagetexts();
            }
          }         
        }
        if(mouseX > 100 && mouseX < 140 && pagenumber > 1 && vertpolohastranky < -750){    // previous page
          if(mouseY > 550 && mouseY < 610){
            pagenumber--;
            vertpolohastranky = 0;
            newpage = true;
            nextpagetexts();
          }         
        } 
        if(mouseX > 435 && mouseX < 535 && vertpolohastranky < -750){    // back to main
          if(mouseY > 550 && mouseY < 650){
            Game.level = 0;
            pocitadlo = 0;
            backgroundY = 0;
            }
          }       
        }
        if(Game.level == 4) {
          if(mouseX > 280 && mouseX < 760){
            if(mouseY > 450 && mouseY < 530){
              Game.level = 0;
              pocitadlo = 0;
              backgroundY = 0;
            }         
          }
        }
        if(Game.level == 5) {      // Back to menu
          if(mouseX > 280 && mouseX < 630){
            if(mouseY > 550 && mouseY < 600){
              Game.level = 0;
              pocitadlo = 0;
              backgroundY = 0;
            }         
          }
          if(mouseX > 660 && mouseX < 910 && monumber < 6){   // next page
            if(mouseY > 550 && mouseY < 600){
              monumber++;
            }         
          }
          if(mouseX > 100 && mouseX < 130 && monumber > 0){    // previouse page
            if(mouseY > 550 && mouseY < 600){
              monumber--;
            }         
          }
        }
        if(Game.level == 20) {      // Back to menu
          if(mouseX > 280 && mouseX < 630 && modedemoon == false) {
            if(mouseY > 550 && mouseY < 600){
              Game.level = 0;
              pocitadlo = 0;
              backgroundY = 0;
              context.font = "10px Arial";
              context.fillStyle = "white";
              currentcharacter = 0;
            }         
          }
          if(mouseX > 660 && mouseX < 910 && currentcharacter < 10 && modedemoon == false){   // next page
            if(mouseY > 550 && mouseY < 600){
              currentcharacter++;
            }         
          }
          if(mouseX > 100 && mouseX < 130 && currentcharacter > 0 && modedemoon == false) {    // previouse page
            if(mouseY > 550 && mouseY < 600){
              currentcharacter--;
            }         
          }
        }
}

function checkDown(mouseEvent)  {
  if(Game.level == 1) {  
     mousepressedup = false;
     mousepresseddown = false;
  }  
}

function update() {                  //srdce hry
    if(Game.level == 0) {
		    clear();
        move();
        draw();
    }
	  if(Game.level == 20) {
      if(modedemoon) {  animation();			
      }
      if(modedemoon == false)
      {
           charactersdisp();
      }
		}
    if(Game.level == 1) {
      if(firstframe) { 
        prvemomenty++; 
        if(prvemomenty > 50) { 
          firstframe = false;
          newpage = true;
        }
      }
      if(firstframe)
      { context.drawImage(Background, 0 ,0 , 960, 640); 	 }  
      if(firstframe == false) { 
        if(newpage) { 
          floatingtext = floatingtext + 20;
          if(superobjekt.supertext[pagenumber].vertposition[1] < 400)
          {     if(superobjekt.supertext[pagenumber].endpositions[1] < floatingtext2) {
            floatingtext2 = floatingtext2 - 20;     }                  }
          if(floatingtext > superobjekt.supertext[pagenumber].endpositions[0]) { 
            newpage = false; 
           }
        }
        drawreadnovel();
        if(mousepressedup)  { 
          mousepresseddown = false; 
          scrollsetterup();
        }
        if(mousepresseddown) {  
          mousepressedup = false;
          scrollsetterdown();
        }
        
      }
    }
    if(Game.level == 5) {
        drawmakingof();
    }  				  
}

function scrollsetterup()
{
  if(vertpolohastranky < 0) {
    vertpolohastranky = vertpolohastranky + 5;
    textfloat(0);  
  }
}
function scrollsetterdown()
{
  if(vertpolohastranky > -755) {
    vertpolohastranky = vertpolohastranky - 5; 
    textfloat(1);     
  }
}

function nextpagetexts()
{
  floatingtext = superobjekt.supertext[pagenumber].startpositions[0];
  if(superobjekt.supertext[pagenumber].count > 1)
  {
    floatingtext2 = superobjekt.supertext[pagenumber].startpositions[1];
  }
  if(superobjekt.supertext[pagenumber].count > 2)
  { 
    floatingtext3 = superobjekt.supertext[pagenumber].startpositions[2];
  }
  if(superobjekt.supertext[pagenumber].count > 3)
  { 
    floatingtext4 = superobjekt.supertext[pagenumber].startpositions[3];
  }
  text1.src = "Images/text_" + pagenumber + "_1.png";
  if(superobjekt.supertext[pagenumber].count > 1) { 
    text2.src = "Images/text_" + pagenumber + "_2.png";
  }
  if(superobjekt.supertext[pagenumber].count > 2) { 
    text3.src = "Images/text_" + pagenumber + "_3.png";
  }
  if(superobjekt.supertext[pagenumber].count > 3) { 
    text4.src = "Images/text_" + pagenumber + "_4.png";
  }
}

function textfloat(direction)
     {
       if (direction == 0)   // scrollup
       {
         
        if(superobjekt.supertext[pagenumber].directions[0] == 1)   // text1
        {
          if(floatingtext < superobjekt.supertext[pagenumber].endpositions[0]) {  
          floatingtext = floatingtext + 20; 
          }
        }
        if(superobjekt.supertext[pagenumber].directions[0] == 2)
        {          
          floatingtext = floatingtext + 20; 
        }
        
        if(superobjekt.supertext[pagenumber].count > 1)   // text2
        {   
          if(superobjekt.supertext[pagenumber].directions[1] == 1)
          {
             floatingtext2 = floatingtext2 + 20; 
          }
          if(superobjekt.supertext[pagenumber].directions[1] == 2)
          {          
              floatingtext2 = floatingtext2 + 20; 
          
          }
          if(superobjekt.supertext[pagenumber].directions[1] == 3)
          {
            
            floatingtext2 = floatingtext2 - 20;
          
        }
      }
        if(superobjekt.supertext[pagenumber].count > 2)   // text3
        {   
          if(superobjekt.supertext[pagenumber].directions[2] == 1)
          {
            if(floatingtext3 > superobjekt.supertext[pagenumber].endpositions[2]) { 
             floatingtext3 = floatingtext3 - 10; 
            }
          }
          if(superobjekt.supertext[pagenumber].directions[2] == 2)
          {          
              floatingtext3 = floatingtext3 - 10; 
          
          }
        } 
        if(superobjekt.supertext[pagenumber].count > 3)   // text4
        {   
          if(superobjekt.supertext[pagenumber].directions[3] == 1)
          {
            if(floatingtext4 > superobjekt.supertext[pagenumber].endpositions[3]) {  
             floatingtext4 = floatingtext4 + 10; 
            }
          }
          if(superobjekt.supertext[pagenumber].directions[3] == 2)
          {          
              floatingtext4 = floatingtext4 + 10; 
          
          }
        }            
    }
       if (direction == 1)    // scrolldown
       {        
        if(superobjekt.supertext[pagenumber].directions[0] == 1)   // text1
        {
           
          floatingtext = floatingtext - 20; 
        }
        if(superobjekt.supertext[pagenumber].directions[0] == 2)       // ideme dolu, ide do lava
        {   
          if(floatingtext > superobjekt.supertext[pagenumber].endpositions[0]) {        
          floatingtext = floatingtext - 20; 
        }
        }
        if(superobjekt.supertext[pagenumber].count > 1)   // text2
        {            
        if(superobjekt.supertext[pagenumber].directions[1] == 1)
        {
             floatingtext2 = floatingtext2 - 20; 
        }
        if(superobjekt.supertext[pagenumber].directions[1] == 2)
        {    
          if(floatingtext2 > superobjekt.supertext[pagenumber].endpositions[1]) {      
              floatingtext2 = floatingtext2 - 20; 
             }
          }
          if(superobjekt.supertext[pagenumber].directions[1] == 3)
          {
           
              floatingtext2 = floatingtext2 + 20;
          }

        }
        if(superobjekt.supertext[pagenumber].count > 2)   // text3
        {            
        if(superobjekt.supertext[pagenumber].directions[2] == 1)
        {
             floatingtext3 = floatingtext3 + 20; 
        }
        if(superobjekt.supertext[pagenumber].directions[2] == 2)
        {    
          if(floatingtext3 < superobjekt.supertext[pagenumber].endpositions[2]) {      
              floatingtext3 = floatingtext3 + 20; 
          }
          }
        }
        if(superobjekt.supertext[pagenumber].count > 3)   // text4
        {            
        if(superobjekt.supertext[pagenumber].directions[3] == 1)
        {
             floatingtext4 = floatingtext4 + 20; 
        }
        if(superobjekt.supertext[pagenumber].directions[3] == 2)
        {    
          if(floatingtext4 > superobjekt.supertext[pagenumber].endpositions[3]) {      
              floatingtext4 = floatingtext4 - 20; 
          }
          }
        }
      }
    }
     
function drawreadnovel() {                   // Read mode
  context.drawImage(pageimages[pagenumber], 0 ,vertpolohastranky , 960, 1398);
  context.drawImage(text1, floatingtext ,vertpolohastranky + superobjekt.supertext[pagenumber].vertposition[0], superobjekt.supertext[pagenumber].length[0], superobjekt.supertext[pagenumber].width[0]); 
  if(superobjekt.supertext[pagenumber].count > 1) { 
    context.drawImage(text2, floatingtext2 ,vertpolohastranky + superobjekt.supertext[pagenumber].vertposition[1] , superobjekt.supertext[pagenumber].length[1], superobjekt.supertext[pagenumber].width[1]);
  }
  if(superobjekt.supertext[pagenumber].count > 2) { 
    context.drawImage(text3, floatingtext3 ,vertpolohastranky + superobjekt.supertext[pagenumber].vertposition[2] , superobjekt.supertext[pagenumber].length[2], superobjekt.supertext[pagenumber].width[2]);
  }
  if(superobjekt.supertext[pagenumber].count > 3) { 
    context.drawImage(text4, floatingtext4 ,vertpolohastranky + superobjekt.supertext[pagenumber].vertposition[3], superobjekt.supertext[pagenumber].length[3], superobjekt.supertext[pagenumber].width[3]);
  }
  if(vertpolohastranky < 0) {
  context.drawImage(arrowup, 455 ,0 , 60, 40);
  }
  if(vertpolohastranky > -754) {
  context.drawImage(arrowdown, 455 ,600 , 60, 40);
  }
  if(vertpolohastranky < -750) {
    if(pagenumber < currentpageshosted)  {
  context.drawImage(nextpage, 660 ,550 , 280, 80);
    }
  context.drawImage(homebutton, 435 ,535 , 100, 100);  // back to main menu
  }
  if(vertpolohastranky < -750 && pagenumber > 1) {                          
    context.drawImage(arrowback, 100 ,550 , 40, 60);
  }     
}

function drawmakingof()   {
  context.drawImage(moimages[monumber], 0 ,0 , 960, 640);
  if(monumber < 5) {
  context.drawImage(nextpage, 660 ,550 , 250, 50);
  }
  context.drawImage(backtomenu, 280 ,550 , 350, 50);    
  if(monumber > 0) {
  context.drawImage(arrowback, 100 ,550 , 30, 50);
  }
}

function clear() {        
	context.clearRect(0, 0, width, height);  
}

/* function pomocna(){
  pagenumber++;
  vertpolohastranky = 0;
  newpage = true;
  nextpagetexts();
} */

function draw(){
                           //vykreslovanie pre menu
	context.fillStyle = "white";
        context.font = "bold 30pt Courier";
        context.fillText("LOADING...",400,230);
	context.fillText("PLEASE WAIT",400,290);
	context.drawImage(bgImage, 0, backgroundY);
	context.drawImage(logoImage, 100,10);
	context.drawImage(playImage, buttonX[0], buttonY[0]);
	context.drawImage(instructImage, buttonX[1], buttonY[1]);
	context.drawImage(settingsImage, buttonX[2], buttonY[2]);
	context.drawImage(creditsImage, buttonX[3], buttonY[3]);
	context.drawImage(auicon,mouseX - 27, mouseY - 36, 50, 70);
	if(logoxVisible == true){
		context.drawImage(logoxImage, logoxX[0] - (logoxSize/2), logoxY[0], logoxSize, logoxHeight);
		context.drawImage(logoxImage, logoxX[1] - (logoxSize/2), logoxY[1], logoxSize, logoxHeight);
  }
  context.font = "10px Arial";
  context.fillStyle = "white";
  context.fillText("Copyright 2020 by Erik Pavlusik",400,630);
}

function animation(){     //vyrozpravanie pribehu	 
   pohybstory = pohybstory + 0.5;
   druhypohyb = druhypohyb - 0.3;
   casovacstory = casovacstory + 1;
   if(casovacstory < 30)
   { fadeOut();
   }
   if(casovacstory > 30 && casovacstory < 200)
   {
   blikac = blikac + 0.3;
   context.drawImage(Space,0,0,960, 640);
   context.drawImage(Story,druhypohyb,0,500, 640);   
   context.drawImage(Story2,pohybstory,0, 1060, 640);
   context.fillStyle = "white";
   context.font = "bold 20pt Courier";
   if(blikac < 1)
   {
   context.fillText("H", 500,100);
   drawSquare(510, 80, 12, 25,1);
   }
   if(blikac > 1 && blikac < 2)
   {
   context.fillText("He", 500,100);
   drawSquare(530, 80, 12, 25);
   }
   if(blikac > 2 && blikac < 3)
   {
   context.fillText("Her", 500,100);
   }
   if(blikac > 3 && blikac < 4)
   {
   context.fillText("Hero", 500,100);
   drawSquare(580, 80, 12, 25);
   }
   if(blikac > 4 && blikac < 5)
   {
   context.fillText("Heroe", 500,100);
   }
   if(blikac > 5 && blikac < 6)
   {
   context.fillText("Heroes", 500,100);
   drawSquare(620, 80, 12, 25);
   }
   if(blikac > 6 && blikac < 7)
   {
   context.fillText("Heroes a", 500,100);
   }
   if(blikac > 7 && blikac < 8)
   {
   context.fillText("Heroes and", 500,100);
   drawSquare(680, 80, 12, 25);
   }
   if(blikac > 8 && blikac < 9)
   {
   context.fillText("Heroes and Vi", 500,100);
   }
   if(blikac > 9 && blikac < 10)
   {
   context.fillText("Heroes and Vill", 500,100);
   }
   if(blikac > 10 && blikac < 11)
   {
   context.fillText("Heroes and Villai", 500,100);
   }
   if(blikac > 11)
   {
   context.fillText("Heroes and Villains", 500,100);
   if(blikac > 15){
   drawSquare(810, 80, 12, 25);
   fadeOut();
   if(blikac > 19)
   { 
   blikac = 11;    //nech blika kurzor
        }
       }
      }
    }
   if(casovacstory == 200)
   { context.drawImage(Space,0,0,960, 640);
     pohybstory = 0;
     blikac = 0;			}
   if(casovacstory > 200)
   {			
   blikac = blikac + 1;
   if(blikac < 100)
   {					
    pohybstory = pohybstory + 10;
   context.drawImage(Story3,pohybstory, 0, 550, 640);	
    }
    if(blikac > 100 && blikac < 110)
    {
      context.drawImage(characterimages[0],100, 50, 120, 120);  
    }
    if(blikac > 110 && blikac < 120) {
      context.drawImage(characterimages[1],200, 450, 120, 120);
    }
    if(blikac > 120 && blikac < 130) {
      context.drawImage(characterimages[2],300, 50, 120, 120);
    }
    if(blikac > 130 && blikac < 140) {
      context.drawImage(characterimages[3],400, 450, 120, 120);
    }
    if(blikac > 140 && blikac < 150) {
      context.drawImage(characterimages[4],500, 50, 120, 120);
    }
    if(blikac > 150 && blikac < 160) {
      context.drawImage(characterimages[5],600, 450, 120, 120);
    }
    if(blikac > 160 && blikac < 170) {
      context.drawImage(characterimages[6],700, 50, 120, 120);
    }
    if(blikac > 170 && blikac < 180) {
      context.drawImage(characterimages[7],800, 450, 120, 120);
    }
    if(blikac > 180 && blikac < 190) {
      context.drawImage(characterimages[8],140, 250, 120, 120);
    }
    if(blikac > 190 && blikac < 200) {

      context.drawImage(characterimages[9],420, 250, 120, 120);
    }
    if(blikac > 200 && blikac < 210) {
      context.drawImage(characterimages[10],680, 250, 120, 120);
    }
    if(blikac > 210 && blikac < 250) {
      fadeOut();
    }
    if(blikac == 250) 
    {    
     modedemoon = false;
    }
  }
}

function fadeOut(){
  context.fillStyle = "rgba(0,0,0, 0.2)";
  context.fillRect (0, 0, width, height);
  time += 0.1;
  if(time >= 2){
    clearInterval(fadeId);
    time = 0;                        			
      }
}

function charactersdisp() {
  context.drawImage(wall,0, 0, 960, 640);
  context.drawImage(characterimages[currentcharacter],380, 20, 200, 200);
  context.drawImage(bioimages[currentcharacter],130, 225, 700, 310);
  if(currentcharacter < 10) {
  context.drawImage(nextpage, 660 ,550 , 250, 50);
  }
  context.drawImage(backtomenu, 280 ,550 , 350, 50); 
  if(currentcharacter > 0) {
  context.drawImage(arrowback, 100 ,550 , 30, 50);
  }
}

function updateFrame(){
    curFrame = ++curFrame % frameCount; 
    srcX = curFrame * ewidth; 
    srcY = trackLeft * eheight;          
}

function drawSquare(x, y, sizex,sizey,color)
{
  context.beginPath();
  context.rect(x, y, sizex, sizey);
if(color == 1)
{
 context.fillStyle = 'black';
}
if(color == 2)
{
context.fillStyle = 'red';
}
if(color == 3)
{context.fillStyle = 'rgb(164, 0, 0)';
} 
if(color == 4)
{context.fillStyle = 'rgb(205, 181, 7)';
} 
if(color == 5)  // toto nie je farba, ale oramovanie
{
context.lineWidth="5";
context.strokeStyle="black";
context.stroke(); 
}
context.rect(x, y, sizex, sizey);
context.fill();
}
