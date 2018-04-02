
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

		var game = new Phaser.Game(config);

var dialogue = ["I like Phaser game engines!", "Designing games is my hobby!", "Every day is the best day of the year!", "Welcome to study with me!", "I don't like Unity 3D", "Do not treat the designer as a programmer!", "Why do I have to apply for a job?", "Do I have to develop games after college?"];

		function preload ()
		{
			//this.load.setBaseURL('http://localhost/');
			this.load.setBaseURL('http://www.06-90.com/projects/p3/');
			this.load.image('bg', 'image/BG.png');
			this.load.image('honeycombs', 'image/honeycomb1mini.png');
			this.load.image('honeycomb1', 'image/honeycomb1.png');
			this.load.image('honeycomb2', 'image/honeycomb2.png');
		}

		function create ()
		{
			
			var group = this.add.group();
			group.classType = Phaser.GameObjects.Text;
			this.add.image(340, 300, 'bg');		
			
			var line1 = new Phaser.Geom.Line(100, 200, 100 + 4 * 162, 200);
			var group1 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group1.getChildren(), line1);
			
			var line2 = new Phaser.Geom.Line(100 + 81, 200+46, 100 + 81 +3* 162, 200+46);
			var group2 = this.add.group({ key: 'honeycomb2', frameQuantity: 3 });
			Phaser.Actions.PlaceOnLine(group2.getChildren(), line2);			

			var line3 = new Phaser.Geom.Line(100, 200+1 * 93, 100 + 4 * 162, 200+1 * 93);
			var group3 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group3.getChildren(), line3);
			
			var line4 = new Phaser.Geom.Line(100 + 81 , 200+ 46+1 * 93, 100 + 81 +3* 162 , 200+ 46+1 * 93);
			var group4 = this.add.group({ key: 'honeycomb2', frameQuantity: 3 });
			Phaser.Actions.PlaceOnLine(group4.getChildren(), line4);	
			
			var line5 = new Phaser.Geom.Line(100, 200+2 * 93, 100 + 4 * 162, 200+2 * 93);
			var group5 = this.add.group({ key: 'honeycomb1', frameQuantity: 4 });
			Phaser.Actions.PlaceOnLine(group5.getChildren(), line5);	
			
			var particles = this.add.particles('honeycombs');

			var emitter = particles.createEmitter({
				speed: 100,
				scale: { start: 1, end: 0 },
				blendMode: 'ADD'
			});			
			
			
			
					var x = Phaser.Math.Between(-100, 700);
					var y = Phaser.Math.Between(100, 500);
					var str = Phaser.Math.RND.pick(dialogue) 
					var font = { font: '16px Arial' };
					var text = group.create(x, y, str, font);

					//text.setInteractive(new Phaser.Geom.Rectangle(0, 0, text.width, text.height), Phaser.Geom.Rectangle.Contains);
					
					emitter.startFollow(text);
					
					this.tweens.add({
						targets: text,
						x: 800,
						yoyo: true,
						repeat: -1,
						duration: 5000
					});
					
					

				
			
			
			
		}




