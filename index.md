---
layout: default
---

<img align="left" width="200" src="/assets/mw.jpg" style="border-radius: 20%; margin: 0px 60px 20px 0px;"/>

I am a software engineer on Tesla's Autopilot team.

Previously, I was a masters student in computer science at the [University of 
British Columbia (UBC)](https://www.cs.ubc.ca/), working on robotics and reinforcement
\+ deep learning, advised by [Michiel van de Panne](https://www.cs.ubc.ca/~van/).  Before that, I worked on similar research for my undergraduate 
thesis at the University of Utah (2019) as a member of the [LL4MA lab](https://robot-learning.cs.utah.edu/), advised by [Tucker Hermans](https://robot-learning.cs.utah.edu/thermans). 

[CV](/assets/cv.pdf)
/ [GitHub](https://github.com/matwilso)
/ [Twitter](https://twitter.com/matwilso) 
/ [LinkedIn](https://www.linkedin.com/in/matthew-wilson-916505104/)
/ [Stack Overflow](https://stackoverflow.com/users/7211137/matwilso)


### News
- Aug 2021: I joined Tesla's Autopilot team!
- Apr 2021: [boxLCD paper](/assets/boxLCD_iclr2021_workshop.pdf) was accepted to the ICLR 2021 Workshop on [Deep Learning for Simulation (SimDL)](https://simdl.github.io/)!
- Feb 2021: I released [boxLCD](https://github.com/matwilso/boxLCD) and [generative_models](https://github.com/matwilso/generative_models) repos, and new blog posts on the [Future of Robot Learning](/robot-future) and [Learned Simulators](/learned-sims)
- Nov 2019: Our work won the Best System Paper Award at [CoRL 2019!](https://sites.google.com/robot-learning.org/corl2019) 
- Sep 2019: Our work on "Learning to Manipulate Object Collections Using Grounded State Representations" was accepted to the Conference on Robot Learning ([CoRL](https://www.robot-learning.org/)) 2019!
- Jun 2018: I wrote up an answer to a [stackoverflow question on PPO (Proximal Policy Optimization)](https://stackoverflow.com/questions/46422845/what-is-the-way-to-understand-proximal-policy-optimization-algorithm-in-rl/50663200#50663200)


# Recent Projects
<style>
.static {
  background: white;
}
.static:hover {
  opacity:0;
}
.container {
    position: relative;
    width: 35%;
}

.image {
    position: absolute;
}
</style>


<br>

<div class="container">
    <div class="mage">
    <img class="active" align="left" src="/assets/robot/lcd_sideside.gif" style="border-radius: 0%; margin: 0px 10px 30px 0px;"/>
    </div>
    <div class="image">
    <img class="static" align="left" src="/assets/robot/lcd_sideside.png" style="border-radius: 0%; margin: 0px 10px 30px 0px;"/>
    </div>
</div>
<div style="font-size: 18px; font-weight: bold;">boxLCD: A Simple Testbed for Learned Simulator and World Model Research</div>
ICLR 2021  [SimDL Workshop](https://simdl.github.io/overview) <br>
[[GitHub Project](https://github.com/matwilso/boxLCD)] [[Blog](robot-future) [Posts](/learned-sims)][[Paper](/assets/boxLCD_iclr2021_workshop.pdf)]

<br>



<img align="left" width="35%" src="/assets/task.png" style="border-radius: 0%; margin: 0px 10px 30px 0px;"/>
<div style="font-size: 18px; font-weight: bold;">Learning to Manipulate Object Collections<br>Using Grounded State Representations</div>
Matthew Wilson, Tucker Hermans <br>
[CoRL 2019](https://www.robot-learning.org) (Oral, Best System Paper) <br>
[[arXiv](https://arxiv.org/abs/1909.07876)] [[Project Page](/projects/object_collections)]  [[Code](https://github.com/matwilso/object_collections)]

<!--
Training policy in simulator to move collections of objects to desired goal regions.
Using a graph neural network and MDNs for learning representations of many objects
and then using them to do RL.
-->

# Robots

These are some robots I have worked with.
On the lower row are three of the robots I helped build and program for [Utah's](http://usr.coe.utah.edu/) NASA [Robotic Mining Competition (RMC)](https://www.nasa.gov/offices/education/centers/kennedy/technology/nasarmc/about) team.


<table>
<tr>
<th>
myCobot<br> (2021)
</th>
<th>
Baxter<br>(Utah, 2019)
</th>
<th>
Ballbot and Shmoobot<br> (CMU, 2017)
</th>
</tr>
<tr>
<th>
<a href="/assets/cobot.jpg"><img style="max-height:200px;" src="/assets/cobot.jpg"/></a>
</th>
<th>
<a href="/assets/baxter.jpg"><img style="max-height:200px" src="/assets/baxter.jpg"/></a>
</th>
<th>
<a href="/assets/ball_and_shmoo.jpg"><img style="max-height:200px" src="/assets/ball_and_shmoo.jpg"/></a>
</th>
</tr>

<tr>
<th>
Sandcrawler <br>(Utah/RMC, 2018)
</th>
<th>
AMEE <br>(Utah/RMC, 2017)
</th>
<th>
Master Chief<br> (Utah/RMC, 2016)
</th>
</tr>
<tr>
<th>
<a href="/assets/urmp/emcee_2018.png"><img style="max-height:200px;" src="/assets/urmp/emcee_2018.png"/></a>
</th>
<th>
<a href="/assets/urmp/emcee_2017.png"><img style="max-height:200px" src="/assets/urmp/emcee_2017.png"/></a>
</th>
<th>
<a href="/assets/urmp/emcee_2016.png"><img style="max-height:200px" src="/assets/urmp/emcee_2016.png"/></a>
</th>
</tr>
</table>


# Past Projects

<br>
**[2015-2018] Utah Student Robotics Team Member**

During undergrad at the U, I got into robotics and worked on the [Utah team](http://usr.coe.utah.edu/) on the [NASA Robotic Mining Competition](https://www.nasa.gov/offices/education/centers/kennedy/technology/nasarmc.html) for 3 years of competition.
We had some great robots and consistently placed well in the competition. It was a lot of fun.

- [Competition video 2016](https://www.youtube.com/watch?v=tsUz3quMwMI&t=144s)
- Simulations I made of [2016 robot](https://www.youtube.com/watch?v=CdpFUFFlBOw), and [2017 robot](https://www.youtube.com/watch?v=IGnOgAnL9ag) with localization and nav state machine

<!--S/o to john robe, jon davies, cole mortensen, katie hall, dave purcell, justin schramm, and all the others who worked on the project and continue to carry on the torch.
-->

**[2017] Robotics Institute Summer Scholar @ Carnegie Mellon University (CMU)**

I spent Summer 2017 as part of the [Robotics Institute Summer Scholar (RISS) program](https://riss.ri.cmu.edu/),  which gives undergraduates from other universities experience working on robotics and machine learning research in CMU robotics labs.
I had the great pleasure of working with [Ralph Hollis](http://www.cs.cmu.edu/afs/cs/user/rhollis/www/home.html), [Jean Oh](https://www.cs.cmu.edu/~./jeanoh/), and [Roberto Shu](https://rshum19.github.io./) on getting one of the [ballbots](http://www.msl.ri.cmu.edu/projects/ballbot/) to recognize commands, navigate in a building, recognize objects, and report back about what it saw.


You can check my [CV](/assets/cv.pdf) for more details on these projects.

