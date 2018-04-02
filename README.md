[Research Project Three Demo](http://www.06-90.com/projects/p3/index.html). 



## Welcome to my Research Project Three

Here, I have to say that the game engine which I used is Phaser and its URL is [Phaser](http://phaser.io/). The link of my previous project is [Research Project Two](https://github.com/ChenLyu01/Research-Project-2).

This is also a technical research for [Navigable Video](http://www.06-90.com/final/finalprojectChenLyu.html). In this project, I want to increase some effect of **Barrage** to the Navigable Video. 

### Required technology

In the picture below.

![Image text](https://github.com/ChenLyu01/Research-Project-3/blob/master/image/image1.png) 

My design is that some barrage are automatically generated by robots, And some of the other barrage can be generated by the audience. What needs to be explained is, the video is not a chat room. Essentially, it's a navigable video. So these barrage are not too many, but they must be meaningful. For the readability of this research, I chose a random algorithm instead of it.





- Code without the game engine

Since the previous code is more than 200 lines, I don't want to paste all of them here. The general idea is to display the **Barrage** from the database. They are like movie subtitles. They are realities according to the mark of time.







- Code after using the Phaser

```
	var config = {
		type: Phaser.AUTO,
		width: 800,
		height: 600,
		backgroundColor: '#2d2d2d',
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: -1000}
			}
		},			
		scene: {
			preload: preload,
			create: create
		}
	};	
	
	//This is the physical effect of the game engine. I changed the value of the gravity system to ‘-1000’.
```

![Image text](https://github.com/ChenLyu01/Research-Project-3/blob/master/image/image2.png)

We can feel that the physical effects of the game have been changed by anti gravity. The particle effect began to scatter to the sky.






### Source code description

```
var dialogue = ["I like Phaser game engines!", "Designing games is my hobby!", "Every day is the best day of the year!", "Welcome to study with me!", "I don't like Unity 3D", "Do not treat the designer as a programmer!", "Why do I have to apply for a job?", "Do I have to develop games after college?"];```	
```
Here is a one-dimensional array.


```
var str = Phaser.Math.RND.pick(dialogue) 
```
Here is a random value from a one-dimensional array. **In real games, these data are not randomly selected. **Only in this way can we see this video from different perspectives. Here, I will provide another picture to illustrate this point.

![Image text](https://github.com/ChenLyu01/Research-Project-3/blob/master/image/image3.png)

From the picture, We can see that the perspective of narrative can be changed. This means that this video and most online games look the same. They all need algorithms to make the story lines and ending different. From a technical point of view. we can imagine that barrage data is not read by **Random** in the final work. 



```
emitter.startFollow(text);
```
This line of code is invoking the effect of particle ejection


```
this.tweens.add({
	targets: text,
	x: 800,
	yoyo: true,
	repeat: -1,
	duration: 5000
});

```
This section of the code is for moving the barrage. Here is an interesting attribute set：**yoyo**. If we set the **yoyo** to be a 'false', when the moving text reaches the borders of the window, it will not turn back.






### Reference
[The official example 1](https://labs.phaser.io/edit.html?src=src\input\mouse\text%20input%20test.js) 

[The official example 2](http://www.phaser.io/tutorials/getting-started-phaser3/part5) 

[The official example 3](https://labs.phaser.io/edit.html?src=src\input\mouse\poll%20only%20on%20move.js) 