---
layout: default
---

<!-- <div class="crop"> -->
<!-- </div> -->

<img width="200" src="/assets/me_2.jpg" style="border-radius: 2%;"/>

## Bio

I am a junior computer engineering student at the University of Utah,
graduating in May 2019, interested in robotics and deep learning.
I have worked on several robotics projects in the past and am currently getting
into deep reinforcement learning.
This past summer (2017) I was a Robotics Insititue Summer Scholar ([RISS])
at Carnegie Mellon University working with Ralph Hollis and Jean Oh
in the the [MSL lab][msl] with the [ballbots]. I am also
a core contributor to the Utah robotics club, which competes in the
[NASA Robotic Mining Competition][nasa] each May at Kennedy Space Center in Florida.


See more details below.


# Projects

---

## Robotics research internship at Carnegie Mellon
<span style="color: grey">Summer 2017</span>


This past summer, I was part of the [RISS] (Robotics Institute Summer
Scholards) program at Carnegie Mellon University.  RISS is a program for
undergraduate students from all around the world to come to CMU and work and
do research in a robotics lab with professors and graduate students for a summer.
As part of the RISS program, I worked on adding an object detection
and natural language communication system to one of the ballbots.
I presented my research as a [poster] and a [paper][riss_paper].

<div style="margin: auto;">
    <img src="/assets/riss/little_and_big.jpg" alt="robot" height="200">
    <img src="/assets/riss/cohort.jpg" alt="robot" height="200">
</div>
<br>
The ballbots–invented by Ralph back in '05–are a cool type of robot.
They balance on a single ball at their base and actively keep their balance
by sensing their lean angle and driving the ball to correct any tilts.  They
can balance extremely well.  You can push them and jerk them around and
they will stay balanced.


The really interesting part about the ballbots is how
good they are around humans.  They can move around and do a lot of
things that other robots do, but they are also extremely compliant.  You can
push them around and easily bump them out of the way as you are walking.  This
is because they are dynamically stable.  Like humans, they must
actively balance to stay up and so they are not rigid and can be pushed
and moved pretty easily and safely.


My work was on adding a speech interface and vision system to the newer, smaller
ballbot, called Shmoobot.  Shmoo has an Amazon Echo Dot and Astra RGB-D camera
for speech and vision.  The idea for my project was that a user could give the robot a
command to: "Go to the office, look what's on the table, come back to the lab.
Tell me what you saw."  It went pretty well.




---

## NASA Robotic Mining Competition

<span style="color: grey">2016-2017</span>

<img src="/assets/urmp/emcee_2017.png" alt="robot" width="360">

Each year I compete with the [Utah Student Robotics club][club] in the
[NASA Robotic Mining Competition][nasa].  The idea behind this competition is to
develop robots for a simulated off world mining mission.
Robots are placed in an arena of Lunar Regolith (dirt) simulant and have
to drive across the field to collect dirt and subsurface gravel/ice and deposit
it into a bin.  In a real Mars or Lunar mission, the water in this material would be extracted for
rocket fuel, water for plants, and whatever else water is good for.

At the 2017 competition, our team got [3rd place](https://www.nasa.gov/sites/default/files/atoms/files/rmc2017_scoresummary.pdf) out of about 50 schools.

I work on the programming side of the team and developed a lot of the [software]
last year, including low-level sensor and motor ROS drivers,
Gazebo [robot](https://github.com/matwilso/emcee_simulation) [simulation](https://github.com/utahrobotics/usr_simulation),
localization using [visual markers](https://github.com/utahrobotics/aruco_pkgs),
and high-level [autonomy](https://github.com/utahrobotics/usr_ws/tree/kinetic-devel/src/amee_controllers#competition_smach) (finite state machine). This year I am the software team lead
and am hoping to help the team get its first fully autonomous run at the competition.


I was also the primary author on the
[Systems Engineering][se_paper] [Paper][3rd] for the NASA
competition for which we got 3rd place.


<span style="color: grey">2015-2016</span>

<img src="/assets/urmp/emcee_2016.png" alt="robot" width="360">

At the 2016 competition, our team dug the most regolith out of any team. Our
robot was really heavy though and that is unfortunately a bad thing for
escaping Earth's gravity well and also for NASA competition point penalties. We
ended up getting like 7th overall or something.  This year I was a mechanical
engineer (before switching my major and joining the light side) and worked on the Solidworks models
and other general stuff while learning to code.



<span style="color: grey">2017-2018</span>

Stay tuned...

<img src="/assets/urmp/dr_demo.png" alt="dr_demo" width="360">




[ballbots]: http://www.msl.ri.cmu.edu/projects/ballbot/
[software]: https://github.com/utahrobotics/usr_ws/tree/kinetic-devel/src
[se_paper]: /assets/urmp/se_paper_2017.pdf
[3rd]: /assets/urmp/plaque.jpg
[nasa]: https://www.nasa.gov/offices/education/centers/kennedy/technology/nasarmc/about
[club]: https://utahrobotics.github.io/
[msl]: http://www.msl.ri.cmu.edu
[RISS]: http://riss.ri.cmu.edu
[riss_paper]: /assets/riss/shmoo_paper.pdf
[poster]: http://riss.ri.cmu.edu/wp-content/uploads/2017/09/2017-RISS-Poster-WILSON-Matthew-compressed.pdf


<!-- See my [Projects] page for more details.

[Projects]: /projects/ -->

<!-- __Timeline__

<span class="t2when">2015-now:</span> <span class="t2who">University of Utah:</span> BS Computer Engineering <br>
<span class="t2when">2015-now:</span> <span class="t2who">NASA Robotic Mining Competition:</span> Team member on university robotics team <br>
<span class="t2when">Summer 2017:</span> <span class="t2who">Carnegie Mellon University:</span> Robotics Institute Summer Scholar, research internship <br> -->
