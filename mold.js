// The Slime mold is particle with position at <x,y> vector and a unit vector that sho
// the direction that particle wants to head to.
// Given Theta angle the x,y bases for the unit vector drawn from 0 heading in
// that direction is x=cos(A) y=sin(A)
class Mold
{
    constructor(x,y,theta=-90)
    {
        this.pos = createVector(x,y);
        //this.heading = createVector(x,y);
        this.theta = theta;
        this.vx = cos(this.theta);
        this.vy = sin(this.theta);
        // make this work with standard vector math
        // and stanard coordinate planes with rotation
        this.rad = 0.5;
        this.SesnorAngle = 30;
        this.turnAngle = 20;
        this.SensorPercption = 10;
        this.rSensorPos = createVector(0,0);
        this.fSensorPos = createVector(0,0);
        this.lSensorPos = createVector(0,0);
    }
    display()
    {
        //push();
        noStroke();
        fill(255);
        circle(this.pos.x,this.pos.y,this.rad*2);
        //line(this.pos.x,this.pos.y,this.pos.x+this.rad*3*this.vx,this.pos.y+this.rad*3*this.vy);
        //pop();
    }
    update()
    {
        this.vx = cos(this.theta);
        this.vy = sin(this.theta);
        this.pos.x = (this.pos.x + this.vx + width)%width;
        this.pos.y = (this.pos.y + this.vy + height)%height;
        this.updateSensorPosition(this.theta,this.SesnorAngle)
        //print(this.x)

        
        //push();
        //fill(255,0,0);
        //circle(this.rSensorPos.x,this.rSensorPos.y,this.rad*2);
        //fill(0,255,0);
        //circle(this.fSensorPos.x,this.fSensorPos.y,this.rad*2);
        //fill(0,0,255);
        //circle(this.lSensorPos.x,this.lSensorPos.y,this.rad*2);       
        //pop();
        let l, r,f;
        let collapsed_index = 4 *( d * floor(this.rSensorPos.y))*(d * width)+(4*(d*floor(this.rSensorPos.x)))
        r = pixels[collapsed_index];
        collapsed_index = 4 *( d * floor(this.fSensorPos.y))*(d * width)+(4*(d*floor(this.fSensorPos.x)))
        f = pixels[collapsed_index];
        collapsed_index = 4 *( d * floor(this.lSensorPos.y))*(d * width)+(4*floor((d*this.lSensorPos.x)))
        l = pixels[collapsed_index];
        // Note that applying floor to the entire collapsed index causes strata formation
        // we only apply floor to the sensor positions
        //print(r,f,l);
        if (f>l && f>r)
        {
            this.theta+=0;
        }
        else if(f<l && f<r)
        {
            if(random(1)<0.5)
            {
                this.theta+=this.turnAngle;
            }
        }
        if(l>r)
        {
            this.theta+=-this.turnAngle;
        }
        if(r>l)
        {
            this.theta+=this.turnAngle;
        }
    }
    updateSensorPosition(angle,angle_t)
    {
        this.rSensorPos.x = (this.pos.x + this.SensorPercption*cos(angle+angle_t)+width)%width;
        this.rSensorPos.y = (this.pos.y + this.SensorPercption*sin(angle+angle_t)+height)%height;
        this.fSensorPos.x = (this.pos.x + this.SensorPercption*cos(this.theta+0)+width)%width;
        this.fSensorPos.y = (this.pos.y + this.SensorPercption*sin(this.theta+0)+height)%height; 
        this.lSensorPos.x = (this.pos.x + this.SensorPercption*cos(angle-angle_t)+width)%width;
        this.lSensorPos.y = (this.pos.y + this.SensorPercption*sin(angle-angle_t)+height)%height;

    }
}