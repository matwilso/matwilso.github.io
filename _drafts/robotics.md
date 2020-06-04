---
layout: post
title: "The Future of Robot Learning Series"
date: 2020-02-14 18:00:00
permalink: /robotics/
tags: robotics
toc: true
toc_sticky: true
---

<!-- TODO: change the block quotes. quote top and change style of kay quote -->

What does the future of robot learning look like?
How are we going to create more capable and general purpose robots?
In this series of posts, I explore how robotics and robot learning might progress in the future.

Below are descriptions and links to the posts as well as a short essay 
that motivates the posts and why pursue robotics in general.

<!--<img height="200" src="/assets/sim2real/irobot.jpg" style="display: block; margin-left: auto; margin-right: auto;"/>-->

## Posts
- Learning the Simulator.  How we can improve simulators, for pushing sim2real forward and better verification.
- Learning from Demonstration.  Some ideas about how we can learn more from humans.  And how that might look.

# Intro and Motivation

Ultimately, we want broadly capable robots that can serve to amplify human 
progress and creativity in the physical world.
Robots that can help us clean and maintain our world and to help us expand and build new things.
Robots that can help do household chores, clean up trash and pollution, 
and repair decaying infrastructure.  That can build vast new infrastructure, 
grow and harvest crops, mine raw materials, and explore and develop colonies in space.

(maybe one more paragraph here elaborating on robots in space)

## Where Are The Robots?

Why don't we have household robots already?  

What stands in our way of realizing this future?

Why don't we have household robots yet?

The answer is software.  The brains of the robot.

The hardware, the body is already there.
Just look at Boston Dynamics and what their robots can physically do.

You might have to pay millions of dollars to build a really great robot.
But it can be done.  Those machines are extremely capable obviously.

And it is not an issue of access to robots.
Like maybe it is just that they do cost 1 million dollars so
we don't have as many people hacking on them as we did computers to make them better.
Perhaps a bit, but that is not the main issue.

Because we have simulation and we can't even make a household robot in simulation.
That is beyond the reach of current research.
We have been able to achieve narrow tasks.
BUt the field is growing and progressing quickly.

The hardware is not the issue.
It is expensive, but it you made a million of them, the cost would drop
from unit dynamics.

The bottleneck is software.
We have cars, but they can't drive themselves yet.
And the software for a general purpose household robot is harder than self-driving cars.


If I had to bet, I would bet on deep learning being a big part of the solution.
(footnote: Or whatever you want to call big things with lots of parameters that you optimize with data.  You get the idea.)
Future robots will be running some type of "network" for perception and for making decisions.

Deep learning is state of the art in both computer vision (ImageNet, and any other
computer vision since basically 2012) and playing games (Go, DOTA, Star Craft).  
Today you cannot write a computer program that even comes close to these
without using (1) neural networks (2) trained with backpropagation.

This is the current best way to write software to solve these types of problems.
What are the limitations though?
If ImageNet is solved and Go is solved, why is robotics not solved?
What makes it work or not work?

The best first-order way to think about this is in terms of data.
ImageNet is a fixed dataset;
AlphaGo works by self-playing millions of hours of Go by simulating
it at many times real speed and parallelizing across big computer clusters.
Ditto for Star Craft and DOTA.
These are fully controllable simulators.

To run similar training processes in the real world would take many hundreds of years,
countless engineering hours, thousands of broken robots, injured people, and damaged environments.
What I mean to say is it is impossible.

And like with what we see in self-driving.
The real world is incredibly complex and diverse.
Long-tail.
The complexity of the real world far outstrips any game.
And this matters when you want your systems operating in a large swath of the real world.


Computer vision and strategic decision making.
Sensory perception and control.

It is clear to anyone in robotics that it has not yet been solved.
So obviously we need a few more tricks.



I think one trick that could really help us is sim2real learning.
In fact, I think that pushing hard on the sim2real angle is a pretty
good bet for reaching super capable robots.  And I think
it is going to be worthwhile pushing on that angle even if real world
training wins out.  As I will get into later...

One big looming question in robotics is the data one.
Computer vision uses fixed datasets.
Game playing has a simulator that you can run literally
millions of years of game play by running at high speed across clusters.
But robots must make decisions and interact with the physical world.
There is no way getting around that.
Some amount of learning experience must come from a physical robot
interacting in the physical world at real time.
(Footnote: you could argue that there are fully sim2real projects,
but they use some calibration optimization.  It is manual effort, in fact
worse than if it were learned because it is not reusable engineering effort across
projects.)
The question is just: how much?



>Instead of innovating out from the present, what you want to do is invent the future *from the future*.  Go out and live in the future and bring the future back. - Alan Kay


Research can get pretty narrow focused and short-sighted.
Carrying out research is hard and it takes extremely strong focus on the details
and getting everything right to make things work.
This makes it hard to keep the long term focus in mind.

So I think it's good to stop every so often and think about what is likely going
to happen in the future.  In 5, 10, 20 years, what is going to matter.
What is going to be the likely state of robotics and robot learning?
What ideas are going to flourish?
If you imagine robot learning really working, what made it work?
Where might trends be going in the future?

This is really important to think about and try to predict. 
Not just because it will lead you to do better and more impactful research.
But because it will help us bring about a more exciting future.
And that is what this is about.
That is all this is about.
That is the goal in the end.

That is the goal.
So what knowledge do we need to gain?
What areas do we need to push on to make this a reality?


Not just because we want to help bring about this future to push things
forward and discover, but 


The common view of a researcher is a narrow focused one.
What can I actually get to work in the next six months to one year?
Though it goes against the credo of research novlty, it's the truth.
You bulid out from what works.
How can I push out from what already exists?


This is my attempt to try to reach out into the future and see what is there.



To realize this bright future, we need systems that can make decisions and act 
without painstaking frequent human intervention.
Teleoperating or hand-coding behaviors will clearly not scale to millions of 
household robots or self-sustaining robotic mining colonies in space.

Getting there is going to require a good dose of robot learning.

To get there, the path is uncertain.
It seems we are far from this future point.
But if this is the type of thing we would like to achieve,
how can push out from where we are and try to get closer to where we want to be?

Where are we currently?

...


