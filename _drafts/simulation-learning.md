---
layout: post
title: "Learning the Simulator"
date: 2020-06-17
permalink: /simulation/
tags: robotics 
toc: true
toc_sticky: true
---

(in rough draft mode still.  making it public now so that I have strong
incentive to fix it up and get it done quick. would recommend coming back later.)

>On learned simulators and the future of learning in simulation.
>[slides version] [video version]

I think this is going to involve learning from humans and human data.
Like teleoperation and mocap.
But that it happens largely in a simulator. 

The sim2real border is a false one.
It implies training only on simulated data.
Simulation training.
Not sim2real learning.  Just simulation training.

Kind of like the jemin work.
And the peng work.
You take some data from the real world.
You pull that into your simulator.

So here is my take: simulation training is the future.
But zero real world data is not.
And it is distracting to try and not use any real world data.

It is ok to use mocap and human demos.
Because it works and you could scale that.
Learning from human and real world video.

And imagine getting a simulator of a plant.
Maybe not a plant, but something like that.
Some model of reality that you could never get besides learning it.
Like simulating an ant hill.

Every process up to this point uses real world data.
Every single paper that claims to use no real data is lying.
They might actaully do fine-tune.
They use real world data to tune the simulator, using it as data in simple optimization.
They use real world data to get feedback on the system.

Human get data to learn f=ma and put in simulator.
They tune it and debug it using physical intuitions (from real world).

And this is not just a cute point.
It represents a general principle.
The most general idea of a simulator is that we take real observations about the 
world.  We compile them into a compressed model.
And then we use that model to simulate what will happen.
(Might be worth checking out Hamming book on this.)

A rigid-body simulator represents one of the most compressed versions of this.
We came up with precise mathematical representations to describe these systems.
We learned the physics and math to precisely describe these systems.
And we carefully implement the differential equations in code and solve using euler method.

Current robotics simulators may work well (in their limited scenarios).
They may be easy to understand.
But they are fundamentally extremely biased and constrained in what they can represent.

They make many assumptions that don't hold in practice.
Like rigid bodies.
Not fluids, deformable, ropes, paint, agents, different types of material,
plushy, meltable, fire, devices like a microwave.  I can put things in it,
press the button, and whatever comes out of it will be cooked.

If we want it to be able to handle new "physics" that we did not anticipate.
This is the only way.

Humans don't walk around with detailed physical understanding of things.
They store just enough to be able to predict what will happen when they use something.
People can't draw bicycle or can opener.
They use them every day.  They know how to operate them to do what they want.
In such a way that they can open the can or get to work.
But they can't even correctly draw them.

And I think this is what we should aim for basically.
General and approximate.

And this is obvious I think.
But we haven't known how to do this.
And I think we are just figuring out how this would work.
And we are seeing some small, but concrete examples of how to do it.


So the point is that this is not just about sim2real.
This is about simulation learning.

Because people in sim2real generally fetishize using no real data.


Questions to answer maybe:
- How do current sims work?
- Why do we need to make a learned simulator?  Why not just learn in real world?
- Current examples of learned simulators
- Maybe where this is more complex than NLP?
- A sketch of a learned simulator
- How do we go about working on this?  The good news is we have already started.  We just push harder on some areas and expand and work in this direction.




Ok one of the central claims of this is that GPT type things will keep on scaling.
If you just keep on predicting things, you will keep on picking up on new stuff.
You just predict the next token.
You pick up on grammar.
Then 

It keeps getting better with more data and parameters.
And this is a relatively naive version.
It doesn't actively search out new information.
It doesn't filter its information.

It might stop scaling at some point, but where *exactly*?
And why *exactly* does it stop scaling?  Would you have predicted it 
gets to basic arithmetic, decent games of Chess, ?
Where do you expect it to stop?
And keep in mind this is a relatively early and simple version.

A GPT simulator would be general.  Just by using some prediction task.
It is a super general loss.
Like can use any token.
And it works!


Imagine what a GPT3-simulator could do.
You could show it a video of you painting part of a wall red.
It would pick up on all the cues and learn that there is paint on that brush.

If it was good enough, you could even just show the paint bucket and maybe the paint dipped
brush.  And the simulator could pick up on these cues.

You could then train a robot in simulation to paint your room for you.
You could simulate the action of the robot and run the sequence in simulation
and see how it painted it for you.
You could give it feedback.
You could say that you got paint on some areas.
You should lay down some covers over the carpet and put tape on the edges.
Then it could do that.

Hmm.... maybe this just exists in the robot.
Or you have to call back to a server.

And, sure, you could do this in other ways.
But this is just a single example!
This is just one possible way that you could use the system.
Like how GPT3 can summarize for you.  It can also play chess, do math, etc.

You could also get this to.

This is basically what we need.
Something that has a good enough model of the world.
So it can predict what will happen. 

Like it understands in some way.
Like it knows that there is liquid in that bottle.
And it knows what will happen if it opens that bottle and tilts it. 

It is like the Chinese room test.
If you can predict enough stuff, do you not just understand?
What is the difference?

When you have a general system like this, you now have something that could
handle. 

This seems the only way we will ever get to really general systems.

Prompt and then fill in the blank.

Here is a paintbrush, I'll show you a few strokes and you finish it up.





And this isn't here yet and I am not sure when it will be here.
But this is on the horizon.
This is what the future of simulators will look like.
If you work in this area, you should be working towards this.
Building the tools and research in the direction that will be required
to make it useful for robotics in particular.
If you don't work in this area, you should have this in the back of your mind
as to where the field is going.


So I'll keep pointing to GPT3, just as a reference.
It is not the only thing, but it a landmark. 

If you haven't taken a look, I would recommend it.
The capabilities are getting really good.
And the training curves are not bending.

This is what GPT3 points to.
This is what it could be used for.
Simulating worlds so that we can train agents in them.
I have some concerns about realism.
Like might it be fuzzy?
I am sure there are ways to work on that.

But even if it is not perfect, it will be extremely useful for learning from.
It would basically be the best "model" for model-based approach that you could possibly imagine.
Humans can learn from fake reality stuff.
And the closer it represents the actual thing, the better.


So I don't think simulation training is going away.
I think there will continue to be 









It makes simulators a special case.

The general idea is that we use data from the real world.

Rigid-body simulators are just a specific version of this that provide
overly rigid assumptions and bad model-biases.
And they are extremely hard to interface with.

You have to define your exact setup.
You have to go to painstaking lengths to learn things.

Modern simulators are going to look like crap in the future.
We will be able to do so much better.


And I think you can catch a glimpse of what future simulators will look like
by looking at GPT3.
You feed it a scene as the "prompt".

I have no idea how much compute this will take.
But it seems pretty surefire.
This is what the future is going to look like.

Price is high, but price always drops.
Efficiency climbs, we will get better hardware.




What is on the horizon because of GPT3?
If you imagine this as being like an early mainframe computer.
What does this signify should be possible in the future?
Something like a general simulator.
But what else (also not related to this post)?


## Why train in simulation?

What is the point of taking the step to create the simulator and learn inside it.

If you had a super nice one, you could plan through it.
Like if it was robust to certain things.
It could be that if you invest a certain number of params and data that you
get something that understands the world better.

If it is varied enough, you can choose different random samples
and get a ton of variation, which is a current limitation.

Safety, control, curriculum, all sorts of standard reasons.

So fast and parallelizable!
You could run at many time speed.
And no matter how efficient your algorithms get, they will always benefit
from more compute.

It will be a way to checkpoint progress.
All efforts in learning can be compiled into the physics simulator.

You can run verification.
When you want to deploy things in the real world, how can you verify them?
Make sure they are safe on a whole battery of different scenarios.
If they are going to be interacting with humans.


I also think that robotics and physical simulation is going to be more challenging
to solve than NLP in this way.  Less structured and the data is messier.
So likely this is going to involve building up gradually from certain areas.
Where can we get solid wins?

And also, this will likely take active learning and feedback loops.
How can we bootstrap this?  So using robots to collect the real data,
training them in simulation, updating our models, over and over in a loop
that can keep improving itself.


So how do we work to this now?
If this is the future, but we don't know how soon, what can we do now?
Certainly this doesn't seem likely to come online in 5 years.
What can we do now from the simulator and robotics side of things?

I think we can start trying to work past the status quo of simulators.
As we discussed, work like jemin is starting to learn parts of the simulator.
So stepping out in to ways to learn simulators, like more of the anymal work
and learning other physical interactions, and rendering as well.
Replacing more and more of it with learned models, for actuators, sensors,
and for the physical interactions.

Finding more concrete cases of where you can learn something using a learned
simulator that you can't do in a standard rigid-body one.
Like get those type of things to work to test this out and prove or disprove
the idea.  Maybe there are cases where standard sim is better, or where it
is advantageous to use the standard sim as a subcomponent.
Finding the right balance perhaps.

Also getting to be more long-term contextualized.
This is a more general problem for these systems.
But like if you have a household robot, you want it to remember things
specific to that household.
Layouts, preferences, temporary state, authorized people.
The layout is such.
There is currently one carton of eggs and a jug of milk in the fridge.
They put their toilet paper roll facing down.

I think this is a big challenge.
Context and memory.
And getting to the point that you don't make mistakes that humans make.

So yeah, I guess offline RL is pretty big.  Eventually, we should keep
every single interaction that we have of robots in the real world.

We can have humans supervising them.
If the robots act in bad ways, we can tell them to stop.
Like if they get shut down for trying to put something plastic or metal
in the microwave, they'll learn that this is bad.




(right now, I'm writing down a lot of the big thoughts.  Then I can organize later
and pare down and fix.  This seems good.  Just let the thoughts flow for now.
Don't worry about finalizing at all rn.)





