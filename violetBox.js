class VioletBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
    display(){
         if(this.body.speed < 5){
            fill("violet");
            super.display();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             rect(this.x,this.y, 20, 30);
             pop();
           }
        
    }
    
}