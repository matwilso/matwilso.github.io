---
layout: post
title: The Sim-to-Real Engine
permalink: /sim2real/
---


 
**BLUF (Bottom Line Up Front):**

If we want to get much further in robot learning with sim2real approaches, then our main focus should be on improving our simulators --- specifically by learning them.  We should collect data from the real world to learn friction and contact models, sensor models, and actuator models.  And we should incorporate them in the simulator loop.

One interesting prospect here is a bootstrapping approach, where we create a “Sim2Real Engine”.  The Engine is a three stage process that we continually crank to ratchet up our simulator, model training, and robotic data collection capabilities through a positive feedback loop.  By improving our simulators, we train better models; by training better models we collect better data; and by collecting better data we improve our simulators. 

<img width="200" src="/assets/engine.png" style="display: block; margin-left: auto; margin-right: auto;"/>


As we crank this engine, each stage gets progressively easier given the previous one.  If we were able to kick off something like this, the efforts might start paying off big.  In the end, we would get a great set of tools for training robots for end-application tasks, like cleaning houses.

A learned simulator could also be useful beyond robotics applications.  Digital feedback cycles are much tighter and cheaper than physical ones.  With super accurate and fast simulators, we could potentially fold a lot of scientific and engineering iteration time into a simulator.  Perhaps even apply automatic design methods to it to create cheaper and more robust designs.




## Intro:  We Should Focus on Learning The Simulator
[todo: add some quote here.  quotes are cool]

Sim2real offers several nice advantages over real world training:
1. Speed and parallelizability.  All the data you could ever want.  Not having to buy a bunch of robots.  Not having to monitor them closely during training or to design custom,  easily-resettable setups (link: tossingbot).
2. Safety. No worries of damaging an expensive *$100k* robot or its surroundings.
3. Read access to the environment.  Easy reward and auxiliary loss design using raw state information.
4. Write access to the environment.  Easy resets and custom environment sampling distributions.  Automated curriculums.

These advantages, however, come with a *price*.  For trivially easy data collection, we get challenging domain shift.  The simulator does not match the real world, and getting sim2real systems to work requires major *task-specific* effort in calibration and tuning.


