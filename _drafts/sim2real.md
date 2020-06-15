---
layout: post
#title: We should rebuild simulators in software 2.0
#title: Sim2Real Using Learned Simulators
#title: Upgrading Simulators to Software 2.0
title: "Learning the Simulator"
#title: "The Future of Physics Simulators and Sim2Real Robot Learning"
#title: "The Future of Sim2Real Learning"
date: 2020-02-14 18:00:00
permalink: /sim2real/
tags: robotics sim2real
toc: true
toc_sticky: true
---

<!--TODO: remove some whitespace here-->
<!--TODO: center the title?-->
<!--NOTE: focus on making this enjoyable to read.  if i hadn't written it, make it enjoyable for me-->
<!--TODO: more research on the history of simulaotrs.  maybe this post is really about the future of simulators -->
<!--TODO: add note asking for people to send me to stuff that i should have cited.  and i would be happy to know about it and put it in.  plz. including your own work -->

<!--TODO: Add a way to do side notes.  this is going to require some html hacking-->
<!--TODO: fix double hash bigger than single hash. like swap them-->
<!--TODO: Auto TOC?  maybe.  we will see.  manual might not be too bad
maybe once we scroll past a certain point.
-->

<!--TODO: make a sidebar for contents.  like an outline like in google docs

i think the route here is to steal stuff from minimal mistakes code to make this work

-->

<!--
>If we want to create general robotic systems, is sim2real learning the right bet?
>How far can we get using mostly simulated training experience?
>In this post I discuss what I see as a promising direction in the future
>of sim2real and robot learning: *learned simulators* (i.e., simulators written in Software 2.0).
>I discuss why we need learned simulators and how we might make them.
-->

>On learned physics simulators and the future of sim2real robot learning.
>[slides version] [video version]

<img width="400" src="/assets/sim2real/draft_opening_figure.jpg" style="display: block; margin-left: auto; margin-right: auto;"/>
<!-- TODO: (could also just be a traditional simulator diagram here.  begging to be simplified. just like a traditional cv pipeline.)-->
<!-- TODO: could also show the development cycle.  how physics sim is developed vs. the sim2real engine
left: how simulators work (many complex components vs. just a NN)
right: how simulators are developed (manual iterating and modeling blah blah vs. sim2real enginer)
-->

<!--
>This post is about learned physics simulators and how they could accelerate progress in robot learning. <br>
-->

<!-- TOOD: make this a different type of quote, ~where it is just indented and in quote font-->

Sim2real seems like a decent bet to me.

There are other ways you might collect the experience 
needed to build general robotic systems, by pooling resources across labs or 
by building large fleets of
teleoperated robots (a la [Karpathy's short story](http://karpathy.github.io/2015/11/14/ai/))
for example.
There are ways you might reduce your data needs with imitation,
model-based, or meta-learning, other various algorithmic improvements, etc, etc.
But sim2real seems worth pursuing.

<!-- TOOD: real links here to other work maybe. i think it would be cool to link them
stanford and finn has been a part of one i think.
-->

Deep learning works.  Super well.
Deep learning is state of the art (SOTA) in both computer vision, playing games (Go, DOTA, Star Craft),
and more recently natural language processing.
Today you cannot write a computer program that even comes close to SOTA
without using (1) neural networks (2) trained with backpropagation.

And this only works if you have a ton of data.
Either in large static datasets or in fast game simulators.
Deep learning is super data hungry.  You have to feed it a lot to
make it happy, which makes it harder to apply in robotics.
Real-time constraints.  Robot specific data.  Low quantity.

Simulators are the All-You-Can-Eat Buffets of robotics data.
You can easily generate more data than you would ever need in simulation.
Where data in robotics is much harder to come by, simulation
and sim2real levels the data playing field and makes it straightforward to apply
deep learning approaches to robotics.

And beyond the mere volume of data, simulators enable you to specify dense reward signals, auxiliary training labels, arbitrary environments, reset distributions, and automated curriculum.
Bits are much easier to manipulate than atoms, so systems are much easier to train in simulation
than in the real world.

Until you start bumping up against the problem of domain shift, that is.



If you can overcome the large domain shift challenges, that is.
Ease of training only counts if your policy actually runs in the real world :/

Domain shift is the plague of sim2real learning.  Recently there has been 
some hope that domain randomization and domain adaptation can help plug in the sim2real
gap and get models to transfer.  And indeed, we have seen some great success cases here.
But I think there is a limit to this.
There is only so much you can randomize.
And results so far show that you need to calibrate really well for things to work.

And I suggest we focus on a different main angle of attack:
Making the simulator match the real world.
Just make the simulator match the real world.

This seems pretty possible.

Just like GPT3 learns to predict the next .
Language models learn to model more intricate things in the pursuit of prediction.
They learn grammar because it helps them predict the next token.
They learn sentiment because it helps them predict the next token.
They learn simple arithmetic because it helps them predict the next token.

The same should be true for the video modality.
You learn physics so you can predict the next frame.


With robots and lots of external data sources, this should be learnable.
Then you should be able to turn this into a simulator API.
You can plug different scenarios in and use them to train robots to do
various tasks.


HUma

You might complain that we are throwing out F=ma.
But how much does F=ma really cover?
F=ma doesn't cover fluids.

It doesn't cover biology.
What happens when you plant a

F=ma is fine.  But it is a crutch.
It limits what a simulator could be.

Learned simulators are going to be a thing because using physics to predict everything is impossible.  It is impossible to model it all.

The simulator will just be an approximate model.
But it will be the best thing for predicting what is actually going to happen.

I think GPT3 makes it clear that this will work.
If you don't think this is possible, I would spend some time reflecting on the language model stuff.

Imagine putting in a query.
You film a video of your scene.
The robot is a separate plugin to the network.
It's proprioception and its control outputs.
Filming the video of your scene is like prompting the language model.
It can then predict accurate next stuff because it has seen stuff like your scene before.


This is what calibrating your simulator should be:
You film a video of the object moving around and the robot moving it.

I can kind of picture how a general AI could work.
You tell it to plant a flower.
And it knows a model of the world. 
It knows that if you put a seed in the ground and water it, it will grow.
It could read about that.
It could see YouTube videos about that.
It could have experience moving things.
And then it could go out and plant a seed in the ground.

Seeing GPT3 work shows that just future prediction is a good enough task.
If you have enough capacity, future prediction will eventually get you to learn everything.

You could have an AI that learns 3rd person by seeing a bunch of people do stuff.
And then you just give it a body and it will figure out how its outputs change the world. 
You could just have it try to predict what is going to happen next.
I guess you need some active learning of some sort.

It would have a causal model of how the 

Why not just scale the shit out of stuff?
Figure out what works, then just scale the shit out of it.
And that is what will get you to AGI.

The challenge of AGI is maybe just building big enough clusters.

If you could predict any 


It would learn about human psychology to predict what they would do next.
It would learn real facts because that is what would help it predict what text was going to say.








There has recently been some hope that neural networks will allow knowledge learned in
simulation to transfer to the real world.
This has been driven by domain randomization and domain adaptation work.




I am hopeful that we can overcome current challenges associated with domain
shift.  And not with any domain adaptation or randomization tricks.  These
are useful, but they have their limits (pretty low-ceiling limits).
I am hopeful because we can make simulators so much better. 
We can make them match the real world way better than they do now.
We can make it match much more closely the real world. 

Nope, we can overcome these challenges by building better simulators.
Just make the simulators match the real world.

Researchers generally ignore the simulator.  It's somewhat of a [blind spot][schlep].
You just choose Bullet, Dart, Mujoco, ODE, whatever, and make it work for your needs.
If you were to build your own simulator, you wouldn't have any time left for
learning research!

If you work on the simulator, this is precious time away from 
developing cool new learning algos.  

But the simulator is the weakest link in the sim2real chain.
Every other component of our system improves with more data and compute, while
the simulator stays the same.  It is inaccurate, requires human effort to improve,
and is hard to tune to custom use cases.
(Sergey and Chelsea have a few good talks that discuss some of these points.
But where they are pessimistic on the prospects of sim2real, I'm pretty optimistic.)

Even if you don't buy into sim2real as a strong route for developing
more general robots, you should appreciate the value of better simulators,
for developing algorithms, and eventually for rigorously evaluating the 
safety and performance of your robot models before you deploy them to users.
We could have simulators that are super easy to use
(little to know manual XML tweaking, etc), more accurate to real world phenomenon, 
and can automatically configure and tune themselves to your specific setup.

The type of simulators I am talking about are *learned simulators*.
We collect data in the real world and use it to learn sensor models,
actuator models, and physics dynamics models that get called in the forward
pass of the simulator.
Simulators running neural networks inside them. Simulators running Software 2.0 baby.

These simulators could become powerful tools.
Imagine recording a video of your robot interacting in an environment.
The simulator detects the robot model, parses the scene and automatically
instantiates a model that you can use to develop and test policies on.
And imagine that simulator 

I don't just think this is possible, I think it is doable within 10 years.

We should make the simulator a central focus of sim2real research.
We should push on it and make it into a central tool.
Not just bring it up to snuff, but actually blow past that, and make the simulator a
powerful tool that enables general progress across the field and even beyond robot learning.

And I think the way we do this is by learning it.

With the advances in deep learning, computer vision, graphics, and robotics,
the time is ripe for starting development on such a system:
a simulator written in [Software 2.0][s2.0].
A **learned simulator**.

How much do I expect for neural network transfer to get better?


## Contents
<div class="sidenav">
	test
</div>

* TOC
{:toc}

- [Traditional Simulators](#Traditional-Simulators)
- [What do I mean by a learned simulator?](#What-do-I-mean-by-a-learned-simulator)
- 


---


It honestly seems pretty plausible that we can get models that predict
what will happen in a simulation.
We can make huge text models and those basically keep getting better.
Without stop.
And super impressive.
So I think we could do this.
IF we just had the data.

And I think this will allow a bootstrapping method.
We use better sims to make a bit of progress.
Then we send some robots out to go collect data about the world.
Learn new interactions and improve our simulator.
Bring it back to us.
Then we can train the next round.










We need to get over not using real world data.

I am sure that is what the future is going to look.

We can't hide in our simulation shells forever.
If sim2real ends up being a viable future route, it will be because 
we have embraced training in the real world.
We need to learn models of the real world.

And mark my words.
The best simulators in the future will be ones that are largely
built from data from the real world rather than from 

I would be willing to bet on this.
(link to why betting is good for making good predictions and being held accountable)

----


While 

Sim2real, for all its strengths, does come with an achilles heel: domain shift.
One bad hit of domain shift from slight miscalibration and the power of sim2real shatters.

Eventually we care about our sim2real trained systems working in the real world.
But the default for many problems is failure to transfer.
The core and central reason for this is that our simulations are not good enough.
Our simulators are not good enough.
If the simulation was more accurate, the gap would be small enough that our 
models would cross it.  But that is not the case.

Domain adaptation and randomization are partial solutions to this.
They reduce the modeling accuracy required---but only a bit.
It turns out you can't simply robustify your way into something that works 
in the real world. You have to train on the distribution that accurately matches the real one.
You have to calibrate your system aggresively and you have to model all the 
relevant variables.

This has been the case for the majority of sim2real robotics results of the past few years.
Domain adaptation and randomization might help pick up the slack a bit, but calibration is king.
And unfortunately this calibration often requires large *task-specific* effort which limits generality.
If you have to build complex physical models and accurately calibrate them for 
every possible task you might want to solve, sim2real is not going to scale.


And unfortunately.
Current physics simulators are crude approximations of reality.
Often they either can't model the phenomenon you are after or they are difficult
enough to program and calibrate that they may as well not be able to model it.
In practice, the effect is the same: models don't transfer.

What's the solution?

There is a lot of great sim2real research happening and great progress being made now.
But the simulator remains a huge [blind spot](http://www.paulgraham.com/schlep.html) for many researchers.

The simulator is often taken as given, very rarely a research focus; instead just an engineering detail.
Just choose Mujoco or Bullet or maybe Dart and make it work for your needs.
They are great tools, and we're all grateful they exist.
But the current paradigm of rigid body simulators will not cut it for the future of models we need to train.

The simulator is key to success of sim2real methods, but it remains the weakest link in the chain (sergey link maybe).
Every other component of our system improves with more data and compute, while
the simulator stays the same.  It requires human effort to improve,
and evidently that is not cutting it (if simulators were accurate enough,
our models would be transferring to the real world...).

We should make the simulator a central focus of sim2real research.
We should push on it and make it into a central tool.
Not just bring it up to snuff, but actually blow past that, and make the simulator a
powerful tool that enables general progress across the field and even beyond robot learning.

And I think the way we do this is by learning it.
By collecting data in the real world and using it to learn the forward dynamics of the simulator.

With the advances in deep learning, computer vision, graphics, and robotics,
the time is ripe for starting development on such a system:
a simulator written in [Software 2.0][s2.0].
A **learned simulator**.



This is basically a bootstrapping effort.
Add enough energy into this (at many stages over and over)
that we eventually create a machine that pushes itself forward.
Learn the simulator that we can use to learn our models.



How are we going to make robots work really well?

This is kind of my version for if we wanted sim2real to work really well.
How would we do it.
I think learned simulators are probably interesting no matter if you use them for training or not.



What's this all about?
What is the end game of robotics and robot learning?
Where are we trying to head?

The end game of robot learning is a general purpose robot.







(I feel like framing it this way might turn people off).





Current simulators aren't good enough.

The idea of what a simulator could be.

And the importance of this to the success of robot learning.

Use the lens of sim2real?  Or make it more broad than that?


Here is what a simulator could be.
A simulator could be an amazing tool.
It could be super accurate.
You could give it an image of your kitchen and it could turn that image into a full 3D world simulator.
It could simulate 


It is a bit hard to believe this is possible.
But there is an existence proof.
Humans.

You can basically look at an image and create a simulation in your head.

While I guarantee this is possible, I also guarantee it will be extremely difficult.

How would you train such a system?
Use robots to interact with the environment.
Collect data and improve your model.
Make predictions and use the real data to improve them.
Form better simulators.
Use those simulators to train more competent models.








Here is what the future (of robot learning) is going to look like.
Models are going to be trained and evaluated in simulated environments.








How are we going to get to general purpose robots?
Robots that work not just in a few narrow settings, but across a range of tasks and environments.
Manufacturing, construction, cleaning, household maid and cook service.

Robots with enough autonomy and capabilities to save our time and expand our capabilities.
To do our household chores for us.
To enable us to cheaply fix our crumbling infrastructure, to construct large scale devices, to mine and build on other planets.
Robots that could allow us to construct and manufacture systems at extremely cheap cost.
Cheap and extremely scalable labor.

Robots with enough autonomy to help people in their homes to do chores

and help builders construct things more cheaply, quickly, and safely.


(
What's a more specific example?  What would we want constructed or manufactured? 
Like roads, fixing infrastructure.one one 
Build profitable mining outposts on other planets.
)

The promise is still some years out and there are other societal concerns to address of course. 
But from a technical standpoint, from the software POV, how would we get to this point?
What should we be betting on at this point?

Here is my prediction.

Learned robotics simulators are going to play an enormous role in the future rollout of robots.

No matter what, simulators are going to be a huge deal.
And you are going to want your simulators to be as accurate as possible. 


Robotics adds a whole new layer of complexity.
Beyond the quality control of the physical parts.
You now need quality control of the behaviors of the robot.

Tesla can do this with shadow mode.







Honestly, I think sim2real is a decent bet.

General purpose robots are going to be running software


General purpose robots are going to be driven by deep learning or whatever
you want to call large parameterized learned systems that use tons of data.
Or whatever they are calling the data-driven thing that uses lots of learned
parameters and beats everything else on a wide range of tasks.




including through teleoperation and 

large parallelized systems (a la arm farm)
or shared datasets across many labs, and training on either human demonstrations
or some self-supervised approach.




including teleoperation, large parallelized data collection (arm farm), and
large shared real world datasets (TODO: links: karpathy, some research, arm farm, recent cohort things).
There are ways you might reduce your data needs via model-based approaches,
meta-learning, other algorithmic improvements, etc.


<!--
A simulator that can accurately model the real world and adapt to different situations.
-->


<a id="Traditional-Simulators"/>
# Traditional Simulators (1.0 Simulators)

First, how do traditional simulators work?
What is this [Chesterton's Fence](https://wiki.lesswrong.com/wiki/Chesterton%27s_Fence) we are about to knock down?  
In this section, I briefly step through the standard rigid body simulator approach used by simulators like Bullet and Mujoco, two common simulators for robot learning.
(tl; dr:  It's $$f = ma$$)

Rigid body simulators are basically 3 steps:
1. computing functions of state: forward kinematic, collision detection, contacts, inertia
2. computing f = ma forward dyanmics.  compute forces, acceleration
3. numerical integration. euler or rk4. advance time by dt: v = v + a*dt, p = p + v*dt.  

Forward kinematics = taking rigid body robot arm and computing the joint link or end effector positions from the angles.

Collision detecion = 

f = m * a
and
torque = inertia * rotational acceleration

Integrate accelerations into velocity, velocity into position.

Look at the bullet slides for more on this


Contact forces computation and collision detection are way expensive.

What is wrong with this?
It is an idealistic model.
The real world isn't actually this cut and dry.

And you also can't model everything this way.
You can't create a model for every type of object and material.
There are too many of them and too many of them break the assumptions.
Like ropes and wires, deformable object.

What if you have a vase that you drop.
That is going to shatter into several pieces.
Rigid body simulators are not made to handle things like that.
And things like that are everywhere.
Other examples include.


While there might exist some simulators for games and movies, they are not common
in robotics.  Likely because they are too slow or difficult to implement.

Computing contacts and collisions becomes too expensive.

Learning a simulator could provide a much more unified and general way to
simulate the wide variety of objects.

Links:
- https://www.cs.cmu.edu/~baraff/sigcourse/notesd1.pdf
- bullet intro: https://docs.google.com/presentation/d/1-UqEzGEHdskq8blwNWqdgnmUDwZDPjlZUvg437z7XCM/edit#slide=id.g6429c8b9f_0_1
- Neural ODE: https://arxiv.org/pdf/1806.07366.pdf








<a id="What-do-I-mean-by-a-learned-simulator"/>
# What do I mean by a learned simulator?

(I think this sounds a bit too extreme at the moment.  It mispaints the picture.
It is not clear on what I am actually suggesting.)

I mean we replace physics equations with neural networks.

We collect data in the real world and use it to learn the simulator's forward pass.
We learn models for sensors, actuators, objects, and their interactions.  Friction, contacts, fluids, deformability.  And we query these models to determine what happens, rather than using physics equations and hand-designed mathematical models.

$$s_{t+1} = f_\text{NN}(s_t)$$ 

instead of 

$$s_{t+1} = f_\text{physics eq.}(s_t)$$

Isn't this just learning for learning's sake?
We already have $$f=ma$$.  Why would we waste our time to learn it?


But do the equations actually describe what is happening?
You may be able to write down some equations, but do they describe what is going on?

Isn't that the problem in the first place?  The 



And yeah, we may be able to model the system 

But first think, we may be able 

There are issues of calibration, sys-id,.
For real world interactions, you never have a model
And we don't even have good models for many interactions.

I want to emphasize that I am not totally sure where we draw the line.
How much of traditional simulators do we keep around?
How much do we toss out?
Some amount of structure is surely beneficial, as well as certain physical constraints
like conservation of mass and energy.
But I would lean towards more of a complete rethinking of simulators for Software 2.0.

I think residual learning is probably wrong.
I would lean more towards traditional simulators as a prior.
Pre-train/bootstrap on them or have KL divergence between our results and the traditional simulator.

This is a difference in software 2.0 and we should embrace it.

I think the solution is going to come largely from focusing on the simulator.
I think the simulator has largely been sidelined in sim2real work.
It has not been a central research focus and I think if we want to make more progress
that needs to change.

To solve these problems, we should focus on the simulator.
The simulator has been sidelined in most sim2real work.
We should focus on research effort on it.
I think the solution to these problems is to learn the simulator.

We should invest much more heavily in **learned simulators**.
Simulators that use neural networks inside the simulator loop.
Simulators that can benefit from massive amounts of real world data.
Simulators that can improve with just data and compute.

The simulator should be a central focus of research.
We are in the stone age of physics simulators and we can do much better if we make it a priority.

My claim is that if we can create learned simulators, we will greatly accelerate the progress of sim2real and robot learning research.
The learned simulator will be a great way to incrementally compound and checkpoint our progress.
It will greatly reduce the time and resources required to achieve robotic capabilities.
It will become an extremely valuable *tool* that many people benefit from.
A general tool, like TensorFlow and PyTorch are general tools for deep learning software,
the learned simulator will become a general tool for robotics and robot learning and perhaps many other areas of development for the physical world.
It will be useful for a variety of projects, beyond even robot learning and in to engineering design and scientific inquiry.


# Learnability of simulator

Simulators are definitely learnable.
And that should be very encouraging for you.

You have a simulator in your head.
You can picture pretty clearly what will happen if you pick up a mug and throw it across the room.
It is probably going to smash into a few pieces and maybe leave a mark on the wall.

(revisit later in the text)
From all of your experience of similar things, you can know this.
If we were able to pile up a lot of experience and videos of physical interactions, we could do this.


And if you don't buy that, you have a simulator binary sitting on your computer.

We can clone a simulator.
It is just a function.
We would be able to learn a simulator from cloning a simulator.
Just make it so that your network always gives the same answer the simulator does.

But cloning a simulator is not exciting at all and again seems like a waste of time
and learning for learning's sake.

And if we can clone a simulator, we can then go beyond it.
We can make it faster and parallelizable.

But we can also make it more accurate.
We can use real world interactions to improve its accuracy.

Imagine you wanted to simulate your kitchen table.
You set up a camera and start taking video.
Your simulator automatically forms a model of the environment.
Then you move stuff around on the table and it automatically creates the environment for you.

You can now place a robot in that environment and start training it to do things for you.


Maybe you want it to learn how to put your coffee mugs away.
You could automatically generate learning problems for it.
Automatically generated curriculum and learning tasks.


This probably isn't exactly what a system would look like but it paints the right picture. 
These are the types of things that we could do with a learned simulator.





# Learned Simulators (2.0 Simulators)



# Old


I'm interested in working on these ideas.
I graduate pretty soon.  If you are interested in collaborating or chatting about these ideas, hit me up.




I think sim2real learning is a strong bet for the future of robotics.
The future of robotics is going to rely on machine learning.
Machine learning relies on data.  And sim2real lets you collect a ton of data.

biggest current issue is not using real data.

not for fine-tuning.

but for learning the simulator.

this gets rid of gap


this is possible.  if we can do it in our head, then it is possible to learn.
we could give a picture and a network could make a simulation of that environment and it could predict what would happen.
even it can deal with objects shattering and liquid flowing.
the challenge is just in getting the network to learn that.
getting the representations right.  getting the losses right.

with a learned simulator, we would not be limited to the things we can accurately model.
we are limited to what we can collect data of.
we are in the domain of software 2.0.


# How we might create this


## This means a turn away from "zero real world data used"

Also add the meme here.

And one of the things getting in the way of that hope is the current focus on "zero real world data used".
This is not an overly useful metric and it leads us to a local minimum.

What really matters is the capabilities we are able to show and the amount of time
and resources it takes to achieve them.  That is the only thing that matters.

What I am arguing for here is that we get over our fear of using real world data.
We can't go along without collecting data in the real world.

But not by using it to fine-tune or something.











I believe in sim2real learning.
I think it is a strong bet for the future of robotics.
And I think it deserves a lot of the attention it gets in the learning community.




and perhaps real world tasks in general.
Meaning that anything we could apply deep learning to that takes actions in the real world will benefit from simulation.

But I think most people miss what 



It is a good question, how far we can get in robot learning by using simulated data.
It is a good question because of how *nice* it is to work in simulation.

The obvious thing is the data...  But there are a lot of subtle reasons why it is easier.
You can test things over and over again.
You can achieve really good repeatability.
You have so much control --- read and write access to the world
meaning you can add extra signal and reset things easily.
Provide perfectly designed curriculum.
Not having to worry about managing the physical robot during training.
No worries of damaging high cost robots or the environment.
Collecting all the data you could ever want.
Easy reward and auxiliary loss design via read access to the environment.
Easy resets and custom environment sampling distributions via write access.


But one point I want to make is that the reason that training in simulation
is easy is not the same reason why it doesn't work.  If you had a simulator that
perfectly matched the real world, you get all the benefits of simulator training
and it would transfer to the real world becauese there would be no gap.
This may seem like a pipe dream, but I think we can get close enough with deep learning.

What I propose is a modularization of the problem.  On the one hand, we work
on making our simulators super accurate.  We design a super general and learned
simulator, that we collect data and train to match the real world as well as we can.
And on the other hand, we use it to train end application systems.

This makes end application systems easy.
I think it makes sense.  Basically we create a very useful tool
that would let us solve many tasks.  It is like a model-based approach.
You spend some time learning a model and then you can use that to more easily learn.

By making it in a simulator form, it would be extremely reusable.

I think this would achieve a nice decoupling of efforts.
You can focus on the simulator and make it really good.
But then when you want to develop models and train them for end applications, 
this becomes super easy.


This post is primarily about learned simulators and the prospect of sim2real.
I also discuss the comparative advantages of other approaches.



## We Can't Avoid the Real World Forever

But the price for these advantages is domain shift.
Models trained naively in simulation do not transfer to the real world.

Domain randomization is a popular idea.

While it is useful, I think there has been relatively too much focus here.
Closing the sim2real gap by making models robust
I think there should be more focus on closing the sim2real loop and making simulators
match the real world.

It kind of gets us right back into what we were trying to avoid in the first place:
training on real world data.

I think there is some natural instinct for a lot of people (myself included), to shirk
away from dealing with real robots.  There are just many more things to deal with.
Things are harder.  Robots are scary and you have to pay attention and they can break
stuff.  And they are just hard and it seems like schlep work to deal with them.

But there is no avoiding it.  If you want AI to work in the physical world, you
need to get over that fear and solve the problems.
There is no avoiding dealing with hardware.
We can't just write perfect domain adaptation and randomization code and hope that it gets us very far.
That is a road to failure.

Take a look at some of the biggest evidence we have of sim2real.
They still require really good calibration to the 

And I think the domain randomization is not what we should push on.
We should push on this calibration stuff.
That is going to be the key to getting much farther.

When you have to train on real world data anyway since your simulator isn't accurate enough.
(collecting data in the real world)

<img width="400" src="/assets/sim2real/meme.png" style="display: block; margin-left: auto; margin-right: auto;"/>

Sim2real papers often claim the advantage of using as little real world data as possible.
But this is not something we should be celebrating.

We are going to need to use a lot of real world data to make these systems work.
And we should get over that as soon as possible.

It is nice that the methods don't require any real world data, but it will be
impossible to get much further.

We should put more effort to improving simulators, by learning them.
We should collect data from the real world and use it to build a deep simulator, a Software 2.0 simulator. 



## What Does A Learned Simulator Look Like

First, what does a standard physics simulator like Bullet or Mujoco look like?





What I am proposing is that we replace the physics equations with neural networks.

Now I am sure for many of you that triggers a thinking that this is idiotic.
Using learning for learning's sake.


Now some of you might be thinking that is idiotic.
But how much does F=ma cover the interesting interactions that happen in the world?
What about contact, fluids, friction, deformability?
What about particles?

The point is that 

IWhat I am proposing is that we replace the physics equations with neural networks.


Now some of you might be thinking that is idiotic.
But how much does F=ma cover the interesting interactions that happen in the world?
What about contact, fluids, friction, deformability?
What about particles?

The point is that 

I  could be wrong, but I think it becomes easier if we don't try to build in too much bias.
I think there should be some structure and constraints perhaps, but it should mostly be nets.
I talk about that a little bit later.

But I imagine we have a set of entities, and these entities can interact, andb

TODO: diagram.


You could argue that other routes are better.
Like the simulation becomes a bottleneck, too hard to calibrate,..
So why not collect data in the real world.
I still think that is a valid route (and I talk about some trade-offs below), 
but sim2real offers some unique advantages and is still very much worth pursuing for some fraction of the field.

Basically the barrier to entry of simulation is so much lower.
It is so much easier to try out ideas and explore than it is on a real robot.



The main point that sim2real folks need to get over is the aversion to using real world data.
We need to 


I mainly argue that we should devote a lot of resources to creating a really great learned simulator.


I think there are big advantages of factoring things into a simulator.
It basically makes data extremely reusable for whatever task you would want to do.
The best model-based approach.  Maybe you could use it to plan through.


I think something like this would allow us to acculumate advances over many years.
Instead of throwing away trained models, our effort would acculumate.



Mostly I think the lion's share of the effort in sim2real work should go towards
developing better simulators.  And not just a little bit better


And not just from a Software 1.0 view, but going all in on a 2.0 approach.

By learning a great simulator using real world data, we are free from the biases of hand-engineered ones and we can improve without bounds, just like the rest of the components.


I explore this and the trade-offs between the sim2real route and other more real world focused approaches.

There are some arguments against sim2real learning, but I would say it definitely has a future.
It is not obvious that it is a dead-end.  And there is enough overlap interest and utility to push it forward.
One, it could make training robot systems super easy.  If you release the simulator.

First, it is not obvious that sim2real is a good route, but it is not obvious that it isn't either.
But this mostly talks about if you are already interested in that route, or you .
So we should explore both routes, but if you are already exploring the sim2real route,
I think this is how we should do it.

The challenge of sim2real is pretty obvious.  Distribution mismatch.
What is less obvious is how to solve that.
From the perspecive of learning research, it looks like a domain adaptation problem.

But I think we need a paradigm shift.  We should not be using hand-coded simulators
like Mujoco or Bullet or whatever.  We should be working on learning our simulators.



2 main reasons come to mind.  1. physics simulators are inaccurate in many ways.
Some things like friction and contact dynamics are incredibly hard to model. By
collecting data and training models to run this physics.


In the end, I think this will be the right way to build physics simulators for any usage.
They will end up being the most accurate and most widely useful simulators.
They will pull robot learning forward and robot learning will pull them forward.





Of course, we don't need to throw everything away at once.
It will probably be beneficial to use the current simulators to bootstrap our technique.
The bootloader.
Using lots of physics equations and biases on the problem.
Adding a lot of structure to the problem so that it is tractable.
But doing things in a Software 2.0 way.


The simulator makes sense as 2.0.

This is about upgrading simulators to Software 2.0.



There is a lot of overlap with VR work.

I think it makes a nice decoupling.  You build the 




Basically I think the main argument is that if we want sim2real to work, 
the lion's share of the effort should be on creating the simulator.





The main problem is that 

And also I think it is important that 





Some important questions (for me) seem to be: is sim2real a dead end?
And is this obvious?
I think nobody has put all the pieces together in this way.

I think people have done physics simulator type stuff.
But I've got the full blueprint.






Including both learned rendering system and especially learned physics.

I walk through this and then discuss a bit the trade-offs between this and more pure real world approaches.




(where we are not focusing as much and where I think we could do better.)  

And I discuss how we might bootstrap our capabilities from poor to great simulators.
And I think we might be able to push this stuff really far.  
Like to household robot or so.  Not that it is the best, but it seems plausible
we could push things that far.




## Towards Learning The Simulator

Several works are going in this direction.
They learn models or take measurements, or adapt the training to match the real world distribution.
But I am awarding the Prize for Best Results in This Direction to [the hwangbo paper].

They learn an actuator model and incorporate that into the simulator loop.

They are taking something that is really hard to model with traditional methods.
And they are learning a model for it.

Collect data in the real world.
Train a model.
Use that model inside your simulator.
Train a policy inside that simulator and deploy it in the real world.

## The Sim-to-Real Engine

The anymal work almost does a full loop of the sim2real engine.

The next logical step is to use the newly trained policy to collect better data
for you and then to use that to further improve the simulator.  And then train
better models and keep doing this.

<img width="200" src="/assets/engine.png" style="display: block; margin-left: auto; margin-right: auto;"/>

By improving our simulators, we train better models; by training better models we collect better data; and by collecting better data we improve our simulators. 
The Engine is this three stage process that we continually crank to ratchet up our simulator, model training, and robotic data collection capabilities through a positive feedback loop.  
If we were able to kick off something like this, the efforts might start paying off big.  In the end, we would get a great set of tools for training robots for end-application tasks, like cleaning houses.


## What I Imagine the Simulator Looks Like

- every object is am embedding of properties:
	- mass
	- material
	- color/visual properties
	- mass distribution
	- ...
- also global characteristic maybe:
	- global position to COM?

These would be able to represent a wide-variety of possible objects.
They don't just have to be rigid bodies.

It is like object2vec.

And the world is just an interaction of object embeddings.

At some point, a pile of sand could be a single entity.
Maybe you do some splitting.
1 node becomes 2 or 2 becomes 1.

This is a graph neural network that is running in here.
It does the interactions between the objects.

- step() is an interaction of a group of those properties
	- nearby objects pairwise interact to compute the update of those properties

## How we would learn it

One nice idea would be to just clone a simulator.

If you could achieve similar results 

This could help work out the architecture and everything.
Then we could go far beyond that.


## Learning It


Collect data.
Train models.
Improve the simulator.

Yeah we need to figure out how to close the loop.



Use current simulators to learn good object grounding models.
img --> object embedding
mesh --> object embedding
And they should match.

Use current systems to bootstrap this.

Learn good models that can create simulations of real world environments.
Ground the objects.

Not sure the breakdown, factoring into models.
Maybe a grounder, then a forward simulator?
Maybe break up how you train them?
Do some e2e?

- Image2simulator environment.  Designing a simulation environment is such a pain.  Imagine if we could take a picture of a scene and it automatically turns into a physical simulation of that scene.
- Maybe some energy-based contrastive divergence training?  Where the real world is truth and you try to match that?  Maybe making your model more robust, to exploitations?
- Training through the physics.  Since it's differentiable.  Maybe make it robust to exploitations.


## Looking forward
We could make the simulator into a great tool for many people to use.
If they want to set up a task, they could take a picture of it and we could generate a simulation environment for them.
They could train models there and then they would transfer.

This would make it nice for end user applications.


# Beyond Robotics

A learned simulator could also be useful beyond robotics applications.  Digital feedback cycles are much tighter and cheaper than physical ones.  With super accurate and fast simulators, we could potentially fold a lot of scientific and engineering iteration time into a simulator.  Perhaps even apply automatic design methods to it to create cheaper and more robust designs.


# Conclusion



## FAQ:

### Etc

I think there is a tendency to avoid the real world too much.
Going this direction tends to breed that.
But I think that is wrong.
There is a lot of work that needs to be done in the real world.

Just smart about it.



### Expanding on benefits of simulation, including automated curriculum?

There are several obvious nice advantages that sim2real offers over real world training.
1. Speed and parallelizability.  All the data you could ever want.  Not having to buy a bunch of robots.  Not having to monitor them closely during training or to design custom,  easily-resettable setups (link: tossingbot).
2. Safety. No worries of damaging an expensive $30k+ robot or its surroundings.
3. Read access to the environment.  Easy reward and auxiliary loss design using raw state information.
4. Write access to the environment.  Easy resets and custom environment sampling distributions.  Automated curriculums.

### Unnamed

I think inevitably there will be errors, but it will serve as a great prior.
The more realistic the better.
Our internal physics simulators are not perfect.
We have errors, but we adjust.
But they are pretty damn good.
Like a basketball player can usually tell if a shot is going to go in even when it is halfway
to the basket.  They can predict what will happen.

I think both traditional physics simulators and internal human simulators offer good
models for developing this new kind of simulator.

### Do I see long tail events being an issue?

Not really.  Humans can handle long tail cases.
This is mostly a learning problem.
Can we create systems that adapt or smoothly fail when they encounter out-of-distribution cases?
That is the problem that we need to solve.
I think we will need meta-learning and online optimization components that adapt in the real world.
But I see simulation as offering a training ground where we can learn great priors
and even do a lot of validation and "unit tests" of agent behavior.

### Good way to get started?

I think what might be a good way to get started is using a 2D simulator.
Like box2d and trying to clone it.
See if you can get a neural network and renderer to match what you get from box2d.
For a single scenario and then a variety.

For an additional challenge, you could set up some real world 2D sys-id challenge.
With an overhead camera, learn a grounder.
2 objects on a table, does your simulator accurately predict how they will behave.
Then try to start getting your simulator adapt to identify the objects in the scene.

Could set up a force on an object.  Tie a string to it with a weight hanging off the table.
See if it accurately responds to the forces.


### What about the teleoperation path?

Great question.

### TDB

This is just a sketch.


### What about F = ma?

What about deformable objects?

...

Even if we just clone f=ma for some stuff, that is easy to do.
This would be more general and capable of tuning itself.

Maybe we use some residual approach, but eventually I don't think that will matter.


### Are current simulators like computer vision systems pre-2012?

I would argue yeah.

I hesitate a bit more here because hasn't physical modeling gotten us pretty damn far.
If we can model rocket physics well enough to get us to the Moon and back safely,
does't that show it works pretty damn well?

My thought on that is that it is a very specific type of system.
First you spend a lot of time studying that specific area of physics.
But then you have control over the entire system.
All of the interactions that you are modeling are there because you created them.
You have exact models of all the objects because you built them.
You create everything in the system. You don't have to deal with objects
outside the system.

This is not true of robotic systems.  You are constantly dealing with objects
and scenes you have never encountered before.  All kinds of physical interactions
that you cannot model.  This requires a level of breadth and generality not required
in areas where traditional physical modeling has prevailed in the past.

For robotics as well, you might be able to model certain objects in enough detail.
Certain scenarios.  But it won't generalize.

So I think there is a connection between this and CV pre-2012.
There are some challenges that you just can't solve with manual modeling.
Some things you need to step aside and let optimization handle.
And if you want general systems that can handle all the variety of the real world,
this is really the only chance you have.

So in that sense, yeah.
I would say the analogy is pretty good.

### Unnamed
I think you can see that sim2real faces huge challenges.
But they are just challenges.  Challenges to be faced.
Just like the challenges we face for any other approach.
Are these challenges any biggger or less tractable than challenges we face for other approaches?
That is a good question that deserves more analysis, maybe in a later post.
But that is the question that should be asked, not whether sim2real is a dead end.

I think you can see that sim2real faces huge challenges.

But they are just challenges.  Challenges to be faced.
Just like the challenges we face for any other approach.
Are these challenges any biggger or less tractable than challenges we face for other approaches?
That is a good question that deserves more analysis, maybe in a later post.
But that is the question that should be asked, not whether sim2real is a dead end.


## unnamed
Now this means that we should not fetishize "zero real world data used".
That is a local minima.  If we want to make better systems we are going to
need to collect massive amounts of real world data.  Using real robot is scary.
It's arduous.  It's a pain.  But it can't be avoided.

## not easy
This is not going to be easy.
Making a simulator "accurate enough" is not a trivial problem.
It is going to take a lot of thought and effort.
And any serious project will require a large amount of resources.
But if we are already dedicating research bandwidth to sim2real,
we may as well allocate it where it has the best chance of generating substantial progress.

## trash
(Side note: this is a bit ambiguous here what is meant by accurate enough.
The prose is a bit loose here, but it covers the high level idea well.
What I mean is does it match the phenomenon you are trying to model like picking up
a bottle on the table.  Does it accurately model the thing you are caring about?
All the properties and calibration and everything.  Physics simulators might be
able to handle that, but if they are not calibrated they are not accurate.
And I think simulators can be doing a better job as a tool to help calibration.
They should be smarter and be able to calibrate and even improve their forward
pass using data.
We should be expanding the domain of what the simulator is responsible for.
Because it is a tool that is reused across research projects.
We can checkpoint our progress and push much further this way.)


### Other routes to robot learning

Teleoperation seems a bit tricky.
This approach, which is basically Tesla's approach makes sense for cars but not for robots.
Cars are useful when teleoperated.

Some robots may be useful while teleoperated.
But most will not be.
Because it is harder to do the job with a robot in the loop.
You would be better off just hiring a human to do the job.

So you don't get a big dataset of teleoperation for free, like Tesla pretty much does.
This would take a lot of investment to teach robots to do things.

It might happen, but for those reasons it seems a bit less likely.

#### Case study counterpoint: Tesla Autonomy

List: 
- They have shadow mode available.  We will likely not.
- Road driving is pretty narrow, compared to dealing with household settings.  Very complex, but basically just stay on the road and avoid everything.  
As compared to navigating in highly unconstrained settings (steps, ladders, doors) and manipulating things.  And manipulation is hard.


They are not using simulators very heavily.
For some testing.
But instead they have the fleet and they are doing things like shadow mode.

In the case that we get something like Karpathy's short story, I think this could happen.

But I think that is less likely.

Driving and general purpose robot teleoperationg are very different.
Robotics requires much more of a bootstrapping process.

In th
Robots that could do crucial work during the next pandemic.
Robots that could run [dense job that people wouldn't be sad is taken by robot] during the next pandemic.
Robots that could allow us to construct and manufacture systems at extremely cheap cost.
Cheap and extremely scalable labor.

Cars are by default teleoperated.
Apart from surgery, most robotics is not teleoperated.
Many robot applications

And while you could teleoperate, it is going to be slower than just doing the task with a human.

It is going to be slower and more error prone.

So you don't build up the competency naturally.

You have to add much more activation energy into the system to get up to speed.


Another big challenge is the long tail of scenarios.
If you think self-driving is long tail.
Imagine not being constrained to roads.
Every single house setting imaginable.
All weird possibilities.



### Who builds this?

People who seem well poised and likely to build this.

- Facebook.  More than I initially thought. Seem getting more into it.  This would fit especially well with their VR stuff.  Interestingly, either the Karpathy route or the sim2real route would have a lot of overlap with VR world.  Teleoperating or simulating things realistically.  Turning real worlds into virtual worlds.  
- NVIDIA.  Lot of experience in simulators and interest in robotics.
- Google.  Seems they are moderately well poised with large robot data collection through X.  They are the powerhouse of deep learning, so they could.
- OpenAI.  Due to past in sim2real research.  To me, this seems like the next most fruitful step in their research direction.

I think a really good learned simulator would require a ton of resources to create.
A big investment, and potentially very lucrative if you licensed the technology.
Though it would be nice to have an open source version so that the community could play with it.


### What is the importance of splitting this into a simulator vs. using the learned model?  Wouldn't robots trained on real world data learn this stuff anyway?  Why not just image prediction?

It is very important that we explicitly learn a simulator.
This is because it would be extremely reusable.

While you might get a bit of this in image prediction, I think you want some more sturcture.
You want to place some structure in key places.


[todo: add some quotes maybe]

 
<!--**BLUF (Bottom Line Up Front):**-->

> For sim2real robot learning, our main focus should be on learning simulators.

If we want to get much further in robot learning with sim2real approaches, then our main focus should be on improving our simulators --- specifically by learning them.  We should collect data from the real world to learn friction and contact models, sensor models, and actuator models.  And we should incorporate them in the simulator loop.



Running things in simulation is just easier.
And it changes the types of things you can do and the approaches you can use. 
There are huge benefits in automating things.
Working in simulation is just so different than working in reality.
It unlocks different modes.
Could be nice for people to get started.
As software, it can be distributed instantly.
It is just information.
Sim2real is an exciting direction








Sim2real is an exciting research area with some promising results.


price can be quite high, both metaphorically and in compute.


Of course the catch is the sim2real gap and that there is a price to pay for this ease of training.  The severity of this domain shift depends on the setting, but it can be quite severe. 

And while there have been some impressive results to combat this, there is fear uncertainty and doubt over what the future prospects are.
And there is kind of a grey cloud over the future prospects of sim2real in that area.
Basically it seems that it requires a ton of effort and calibration and domrand is hitting its limit (cite irpan).
It requires a lot of calibration to make work.

Some have been critical and bearish about future prospects of sim2real, arguing that the simulator becomes the bottleneck (finn, levine talks).
Other parts of your model improve with data, but the simulator does not.

And I think that actually does hit on the exact right problem.
Simulators are inaccurate and they do not match the exact system that you have.
And that is the key problem we have yet to bite into.
And that is the key problem that I suggest we do bite into and focus on.

I see the simulator as the current largest barrier to further progress.


[s2.0]: https://medium.com/@karpathy/software-2-0-a64152b37c35


The future of robotics is going to rely on data.
The better we can leverage data and compute, the greater capabilities
we will achieve, on average, in the long run.
Sim2real gives you all the data you could ever want.


Therefore it seems like a strong bet.


They are hard to calibrate to match your real world setup.
And so by default, models trained in simulation fail in the real world.
Simulators are inaccurate.  
Even with perfect calibration, there are some things you can't simulate efficiently or at all.
Some long tail distribution cases that you can't anticipate.


So what *is* the solution to all of this?
It seems pretty daunting to solve these issues.
At a passing glance, it may seem not worth pursuing the sim2real route.
And at a longer glance, it may still seem quite uncertain whether this route bears fruit or
not in the end.
But I would say the grounds are quite fertile.
In large part currently, because there is something that has yet to get a serious rethinking in the modern deep learning era.  And that is the simulator.


There is a steep progress gradient for us to climb with the simulator.  And that gradient is to be climbed with learning.

(A generalization could be made that simulator stands for engineering effort in general,
which is often crucial to research success.  But in this case, this is especially true.)

## Simulator as bottleneck.
Short horizon wins and it eventually becomes bottleneck.
Not if we achieve this.

## Not differntiable simulators.

I have seen this, but this is not what I mean.
Genally those are just implemented to be differentiable.
But still programmed by hand.
I am talking about fairly big neural networks inside of the simulator.
That figure out what will happen next.
Like the human brain can do.


## Specific claims that I would bet money on
(or maybe do superforecasting predictions.  measure my accuracy)

The future best simulator as measured by ability to accurately transfer to the real
world across a broad set of tasks will largely be learned from data rather
than programmed.
At least 1 Million weights will be used in the network.
And it will be trained on at least 100k image frames and likely more.

## sim notes
For individual research projects, this is fine, you have to pick your battles.
But in aggregrate, we are greatly under investing in simulator research.

With sim2real, the simulator is a *huge* part of what determines if we succeed or not.
It is central to sim2real, but a small minority of researchers are working on.
So in the big arc of the field and the long term progress, 
it is a mistake to treat it as a detail.
And I think if we focused more concerted and long-term research efforts on the
simulator itself, there is a huge potential payoff.  

I claim simulation is a problem where it is to collect the data than it is 
to accurately model and write equations and code to handle every potential physical interaction
that we may want to deal with in household or industrial settings.
Rigid bodies, deformable objects, fluids, all the strange and complex and varied
objects with different properties and abilities, like a bottle that can hold water,
a pencil that can write on paper, a plastic bag that behaves like a plastic bag.
(The immense variety of objects alone makes this seem like a learning problem.
Some of this may be out of reach of current methods to learn, but eventually we *will*
want robots that can write on a piece of paper or something like that.)

For a proof of concept, imagine how good you are at simulating in your head.
You can pretty well imagine what happens if you knock your coffee cup over or pick it up
and throw it across the room.
And you learned that ability from your experience and some amazing inductive biases from evolution.
With robotic data collection and inductive biases from traditional simulators, we could learn a simulator.
This is not trivial, but it is certainly possible.

It seems we are in the stone age of simulators.  They are arduous to setup with XML files,
they only cover a small set of phenomenon efficiently, and they are challenging to calibrate.
The simulator could be a much more general and useful tool than it currently is.
We need a simulator that is smart, that can help us calibrate systems automatically
to form models of the actual phenomenon it is trying to simulate and to improve
based on errors in its prediction.



And in fact, I think that is not cutting it in a very similar way that
computer vision was not cutting it pre-2012: it is relying on human
modeling and the problem is likely easier to collect data for than to model explicitly.

And in fact, I think that is not cutting it in a very similar way that
computer vision was not cutting it pre-2012: it is relying on human
modeling and the problem is likely easier to collect data for than to model explicitly.


and eventually outstrip any purely
human effort to write a simulator, just as CNNs have outstripped tradiional CV pipelines.
(The analogy might seem a bit of a stretch to some, but the common thread is that it is
easier to collect the data than it is to write the program.  This is true for vision
and it's true for simulation.)


sources:
- http://mujoco.org/book/computation.html
- https://pybullet.org/wordpress/index.php/forum-2/
- http://hades.mech.northwestern.edu/images/7/7f/MR.pdf



In summary, it seems useful to keep pushing on simulators and sim2real.


Scaling up self-supervision or teleoperation (a la Cognitive Discontinuity)
seem still plausible.  
While teleoperation seems likely to yield success in self-driving (Tesla),
general robotics faces a bootstrapping investment problem that seems challenging
to overcome.
And self-supervision seems hopeful but it .
In the end, the line may not be so sharp between the approaches.
Self-supervision may learn what is effectively a simulator model.
Sim2real may be used as an initial tool, while self-supervision or teleoperation
is used to achieve more refined abilities.








[schlep]: http://www.paulgraham.com/schlep.html


