---
layout: post
title: "Learning about neural networks and deep learning "
permalink: /learn-nns-anecdote/
---

(this will have some hindsight bias guaranteed, where I will make things
seem a lot more obvious than they were for me at the time)
(i don't really know if this will be useful, but it might be.  I always
wish that I knew more details about how people did things, and so I am
just kind of trying this out)
(basically my story, but with a lot of commentary and hindsight bias
on things that I should have done better)



I have been learning a lot about neural networks and deep learning and am
especially interested in reinforcement learning.  I have not done much yet,
but I have worked on a few projects using deep learning, mostly unfinished,
but still applying NNs is a way that should possibly work.  I have also
implemented RL algorithms in numpy and tensorflow, and MAML using raw
numpy, for which I derived and implemented the backward pass.

This post is just an anecdote of how I got started.  It can be hard to 
hard to figure out how to get started and it can be intimidating. I don't 
claim that this is the best method, but this is just a recounting as best
as I can remember of how I got started in deep learning and what really 
helped along the way.


I had been interested in robotics and was interested in coding and
had learned python and done some messing around with numpy and doing
some basic math stuff for electrical engineering classes in python.
But my background in linear algebra was overall pretty weak.

I started realizing that writing systems by hand is a huge pain in the ass
and that was definitely not the way that things were going to be done in
the future (probably some hindsight bias, because now I really strongly believe
this and it seems obvious: see software 2.0).

I even had tried learning tensorflow, going through the tutorial, but really
not understanding anything.


About a year ago, I started reading about NNs.  Michael Nielson's book.
For me, that was maybe a good intro, but not as helpful, and I quickly
gave up in the math.
http://neuralnetworksanddeeplearning.com/chap1.html


In poking around more, I found the jackpot of CS231n and what
Andrej Karpathy has written and done.

I studied a lot of what Karpathy did.  The best advice is still to implement
things. Link his blog, twitter, 2.0.  I just consumed a lot of what he did
and watched some interviews he did and tried to emulate him a lot and be more
like him.

I had a misconception early on that I needed a lot of compute, like beefy
computer and hella nice GPU.  I couldn't afford that, or didn't feel like I 
could at the time.  But I found that to just be a distraction.  You can get
started with crappy hardware.  You don't need the good hardware until you
really hit the limit of your hardware.  And you need to get used to the fact
that DL experiments can run days. 


Went throught that CS231n course.  I really struggled.  My math background
was not that great.  I had taken calculus a year ago and linear algebra and 
I was good at math, but a bit rusty and this stuff was not exactly like
anything I had seen before.  It is possible that you will really struggle.
But if you want to be good, you have to stay dedicated.

I struggled through at least half of that.  And then things became a bit
easier.  It took a lot of thinking though.  And it was a grind. And I 
skipped some stuff and I cheated a bit.  It probably would have better
if I had not cheated and instead found that stuff out for myself.  But
at some points I was really stuck.  I had no idea what I was doing
wrong and nobody to help me fix it.  I think if you have spent enough
time thinking about it (30 mins to several hours) then it is ok to cheat
like that if you are stuck.

And eventually I got through the whole thing.  And then what to do
after that?  It is kind of hard to take that next step.  And get
the motivation to work on something, because it is really hard.

I got stuck for awhile, and eventually got out of it by working on
implementing.  I was interested in RL. Found reinforce.py in pytorch.
That was helpful.  Implement that in numpy.  That was hard and I got
stuck for awhile.  Find some good project and just try.

And that is where I am at right now. It took about a year of doing it
mostly part time and in between school breaks.  You could do it much
faster if you were fully dedicated.  And it might take much longer
if you do not have the same background or if you have less time to work
on it, like a full time job and other reponsibilities.
You have to really give a shit. It is hard, but within reach for sure.
