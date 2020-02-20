---
layout: post
#title: We should rebuild simulators in software 2.0
#title: Sim2Real Using Learned Simulators
#title: Upgrading Simulators to Software 2.0
title: "The Future of Sim2Real: Learned Simulators"
#title: "The Future of Sim2Real Learning"
date: 2020-02-14 18:00:00
permalink: /sim2real/
---

<!--TODO: remove some whitespace here-->
<!--NOTE: focus on making this enjoyable to read.  if i hadn't written it, make it enjoyable for me-->
<!--TODO: more research on the history of simulaotrs.  maybe this post is really about the future of simulators -->


<!--TODO: i need a really awesome opening figure. maybe like an env and agent loop, and the agent is a network, but the simulator is also a network-->

>If we want to create general robotic systems, is sim2real learning viable?
>How far can we get using mostly simulated training experience?
>In this post I discuss what I see as a promising direction in the future
>of sim2real and robot learning: *learned simulators* (i.e., simulators written in Software 2.0).
>I go in to why we need 2.0 simulators and how we might make them.

Not having to worry about managing the physical robot during training.
No worries of damaging high cost robots or the environment.
Collecting all the data you could ever want.
Easy reward and auxiliary loss design via read access to the environment.
Easy resets and custom environment sampling distributions via write access.
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

Here I am arguing against the focus on domain randomization and the fetishization of not using any real world data.
We are going to need to use a lot of real world data to make these systems work.
And we should get over that as soon as possible.

We should put more effort to improving simulators, by learning them.
We should collect data from the real world and use it to build a deep simulator, a Software 2.0 simulator. 

I think this would achieve a nice decoupling of efforts.
You can focus on the simulator and make it really good.
But then when you want to develop models and train them for end applications, 
this becomes super easy.


## Contents
- dd
- dd







## Looking forward
We could make the simulator into a great tool for many people to use.
If they want to set up a task, they could take a picture of it and we could generate a simulation environment for them.
They could train models there and then they would transfer.

This would make it nice for end user applications.







## What do I mean by a learned simulator?


By learned simulator, I basically mean we replace the physics equations with neural networks.
Now some of you might be thinking that is idiotic.
But how much does F=ma cover the interesting interactions that happen in the world?
What about contact, fluids, friction, deformability?
What about particles?

The point is that 

I could be wrong, but I think it becomes easier if we don't try to build in too much bias.
I think there should be some structure and constraints perhaps, but it should mostly be nets.
I talk about that a little bit later.

But I imagine we have a set of entities, and these entities can interact, andb

TODO: diagram.





You could argue that other routes are better.
Like the simulation becomes a bottleneck, too hard to calibrate,..
So why not collect data in the real world.
I still think that is a valid route (and I talk about some trade-offs below), 
but sim2real offers some unique advantages and is still very much worth pursuing for some fraction of the field.

There are several obvious nice advantages that sim2real offers over real world training.
1. Speed and parallelizability.  All the data you could ever want.  Not having to buy a bunch of robots.  Not having to monitor them closely during training or to design custom,  easily-resettable setups (link: tossingbot).
2. Safety. No worries of damaging an expensive $30k+ robot or its surroundings.
3. Read access to the environment.  Easy reward and auxiliary loss design using raw state information.
4. Write access to the environment.  Easy resets and custom environment sampling distributions.  Automated curriculums.

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



But the price for these advantages is domain shift.
Models trained naively in simulation do not transfer to the real world.

Domain randomization is a popular idea.

While it is useful, I think there has been relatively too much focus here.
Closing the sim2real gap by making models.
I think there should be more focus on closing the sim2real loop and making simulators
match the real world.

It kind of gets us right back into what we were trying to avoid in the first place:
training on real world data.


When you have to train on real world data anyway since your simulator isn't accurate enough.
(collecting data in the real world)

<img width="400" src="/assets/meme.png" style="display: block; margin-left: auto; margin-right: auto;"/>


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


# Beyond Robotics

A learned simulator could also be useful beyond robotics applications.  Digital feedback cycles are much tighter and cheaper than physical ones.  With super accurate and fast simulators, we could potentially fold a lot of scientific and engineering iteration time into a simulator.  Perhaps even apply automatic design methods to it to create cheaper and more robust designs.


# Conclusion



## FAQ:


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

