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
---

<!--TODO: remove some whitespace here-->
<!--NOTE: focus on making this enjoyable to read.  if i hadn't written it, make it enjoyable for me-->
<!--TODO: more research on the history of simulaotrs.  maybe this post is really about the future of simulators -->
<!--TODO: add note asking for people to send me to stuff that i should have cited.  and i would be happy to know about it and put it in.  plz. including your own work -->


<!--TODO: i need a really awesome opening figure. maybe like an env and agent loop, and the agent is a network, but the simulator is also a network-->

<!--
>If we want to create general robotic systems, is sim2real learning the right bet?
>How far can we get using mostly simulated training experience?
>In this post I discuss what I see as a promising direction in the future
>of sim2real and robot learning: *learned simulators* (i.e., simulators written in Software 2.0).
>I discuss why we need learned simulators and how we might make them.
-->

<img width="400" src="/assets/sim2real/draft_opening_figure.jpg" style="display: block; margin-left: auto; margin-right: auto;"/>
(could also just be a traditional simulator diagram here.  begging to be simplified. just like a traditional cv pipeline.)

>This post is about simulators and robotics and how learned simulators could greatly accelerate our progress in sim2real and robot learning.  

Sim2real seems like a decent bet for the future of robotics.
The future of robotics is certainly going to rely on machine learning.
Machine learning relies on data.  Sim2real gives you all the data you could ever want.
Therefore...

Now sim2real is not the obvious *best* bet.
There are other ways you might collect lots of data and build
capable robotic systems, including teleoperation, robot farms, and
large shared real world datasets (TODO: links).
There are ways you might reduce your data needs via model-based approaches,
meta-learning, other algorithmic improvements. 

But sim2real does seem like a decent bet.
Wrapped up in "all the data you could ever want" is the ability to create dense reward signals, auxiliary labels, arbitrary world and reset distributions, and automated curriculum.
These are massive practical advantages is developing learning systems.
*Except* for the issue of domain shift, from a learning standpoint, 
sim2real seems like a clear choice.  Unfortunately, domain shift  *is* a major sticking point.

Simulators vary in major ways from reality.
The bias means that models don't transfer by default.
Simulation environment models are hard to calibrate.
There are some things we can't simulate.
When we train models, they tend to overfit/exploit the characteristics of the simulator.

Domain randomization and adaptation are partial solution to this.
But we are all starting to clearly see that they are *just* partial solutions (cite irpan maybe).
At some point, you can't just robustify your way into something that works in the real world.
All successful sim2real projects require precise calibration.
To the extent that this effort has largely been task-specific, this has limited the
generality and applicability of the approaches

Sim2real faces huge challenges.
But they are just challenges.  Challenges to be faced.
Just like the challenges we face for any other approach.
The question to ask is whether these challenges are any biggger or less tractable than
challenges we face for other approaches.



Personally I am hopeful about the challenges faced by sim2real.
And I think the potential payoffs for solving them is huge.
How might we solve them?

By investing much more heavily in developing learned simulators.
We should develop simulators that use learned models inside the simulator loop.
Simulators that can benefit from massive amounts of real world data.
Simulators that can continually improve without human effort.
Simulators that improve with just data and compute. 

My claim is that if we can create learned simulators, we will greatly accelerate the progress of sim2real and robot learning research.
The learned simulator will be a great way to incrementally compound and checkpoint our progress.
It will greatly reduce the time and resources required to achieve robotic capabilities.
It will become an extremely valuable *tool* that many people benefit from.
A general tool, like TensorFlow and PyTorch are general tools for deep learning software,
the learned simulator will become a general tool for robotics and robot learning and perhaps many other areas of development for the physical world.
It will be useful for a variety of projects, beyond even robot learning and in to engineering design and scientific inquiry.

With the advances in deep learning, robotics, computer vision, and graphics, 
the time is ripe for starting development on such a system.
A simulator written in [Software 2.0][s2.0].

<!--
A simulator that can accurately model the real world and adapt to different situations.
-->

## Contents
- dd
- dd



# What do I mean by a learned simulator?

I mean that we replace physics equations with neural networks.

We collect data in the real world and use it to learn the simulator's forward pass.
We learn models for sensors, actuators, objects, and their interactions.  Friction, contacts, fluids, deformability.  And we query these models to determine what happens, rather than using physics equations.

$$s' = f_\text{NN}(s)$$ instead of $$s' = f_\text{physics eq}(s)$$


Now to many of you the This Is Stupid Alarm bells just started blaring up.
We have the equations, why would we waste our time learning them?
It just seems like learning for learning's sake.

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



# Traditional Simulators (1.0 Simulators)


# Learned Simulators (2.0 Simulators)



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

### Expanding on benefits of simulation, including automated curriculum?

There are several obvious nice advantages that sim2real offers over real world training.
1. Speed and parallelizability.  All the data you could ever want.  Not having to buy a bunch of robots.  Not having to monitor them closely during training or to design custom,  easily-resettable setups (link: tossingbot).
2. Safety. No worries of damaging an expensive $30k+ robot or its surroundings.
3. Read access to the environment.  Easy reward and auxiliary loss design using raw state information.
4. Write access to the environment.  Easy resets and custom environment sampling distributions.  Automated curriculums.


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



### What about F = ma?

What about deformable objects?

...

Even if we just clone f=ma for some stuff, that is easy to do.
This would be more general and capable of tuning itself.

Maybe we use some residual approach, but eventually I don't think that will matter.


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
