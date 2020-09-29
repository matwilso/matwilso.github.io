---
layout: post
title: "GPT Physics Sim"
date: 2020-07-20
permalink: /gpt-sim/
tags: robotics 
toc: true
toc_sticky: true
---

>Imagine a video-based GPT-X model trained on the entirety of YouTube---cooking videos, DIY, home improvement, exercise, sports, gardening, etc.
A high-fidelity general-purpose video prediction model, with generative abilities akin to GPT3, but for video.
<br><br>
What would this enable? In robotics?  For bridging advances in information tech to the physical world more generally?


Recent advances in language modeling (i.e., [GPT-3](https://www.gwern.net/newsletter/2020/05#gpt-3)) demonstrate
a path to powerful AI systems---that of proving out effective architectures and training procedures, then simply scaling the shit out of everything.
As it turns out, this works quite well.
Bigger models, more compute, and more data lead to better performance and wholly new qualitative capabilities.
The [scaling hypothesis](https://www.gwern.net/newsletter/2020/05#scaling-hypothesis) seems to be true.

With models in the 100s of billions of parameters, we're achieving amazing results in language modeling
and have yet to hit scaling limits.
If we can achieve such mastery with such simple approaches in text, we can't be that far away from conquering other domains like video.
Maybe not immediately, due to much larger compute costs, necessary improvements in video-specific arches, training, etc., but definitely on the horizon.

And we have yet to mine all the applications of text models, but I think video prediction offers some extremely interesting promises.
There are no doubt many reasons from VR, movie generation, myriad other tools.
In this post, I mostly focus on that application most relevant to robot learning, which is a *general physics simulator*.

In text prediction, you feed the model a prompt text and the model fills in the blank for the rest.
In video prediction, you feed the model a prompt video and the model generates likely future frames.
If that video happens to depict a physical system, like a free-falling object, then your model will happen to simulate physics by predicting what
is going to happen to that object.
With enough capacity, enough data, and a few built-in inductive biases, a video-GPT-X model could become insanely good at physical prediction.
Just as GPT3 learns things like grammar, sentiment, and so on, in order to better predict the next word,
video-GPT-X would learn super accurate physics to better predict the next frame.

By absorbing knowledge across many domains, it could simulate RL environments with a
physical accuracy and generality light-years beyond what is possible today.
It could unify all the special-case, hand-engineered simulation modes (rigid-body, 
fluids, optics, agents, etc.) into a single useful tool for robot learning, engineering, scientific discovery.

An egg cracking, pouring out, and sizzling on a frying pan. A paintbrush dipping into a bucket,
dragging across the wall, and leaving a red streak of paint behind it.
Sunlight passing through a magnifying glass, catching a pile of dry leaves on fire---a rising trail of smoke, a marshmallow cooking over the flame.
A human stepping to the side when someone else is walking towards them, or getting mad if that someone gets too close and bumps them.
Any number of other interactions for which it is hard for us to write computer simulations for, but for which we have, or could collect, a lot of data.

Such a simulator could be incredibly useful in robot learning.
Imagine sim2real learning with the smallest possible reality gap.
Model-based learning with the best possible model.
All in a package that provides a flexible and natural interface.

We could “prompt” the model with a video sequence to match our specific robotics setup and task.  Film a video of our room layout and our paintbrush dipping into the paint bucket. The model would automatically generate a virtual scene of our scenario that we could freely modify. “What about blue paint instead?”

No XML files, no painstaking calibration or modeling e.g., the articulated physics of a Rubik’s Cube. (With all the cubing videos on YouTube, we're especially well covered here lol.)
Just film a video of our scene and the model would catch on, like GPT3 catches on when given prompts. (e.g., [@xuenay's thread](https://twitter.com/xuenay/status/1283312640199196673), [@gwern's twitter thread](https://twitter.com/gwern/status/1267215588214136833) or [longer newsletter post on GPT3](https://www.gwern.net/newsletter/2020/05#gpt-3), [OpenAI API blog post](https://openai.com/blog/openai-api/))

It’s all differentiable and can be placed directly in our PyTorch/TensorFlow computational graph.  Gradients flow like water.

Model-based learning algos can plug directly into it. Plan ahead and pipe RL gradients directly through the model. Maybe with some fully continuous, fully differentiable analog of MCTS, which has worked so well in AlphaGo/Zero/Mu. (stuff like this does exist, but I haven't seen a slam dunk win like MCTS is for AlphaGo.)

Train a robot to paint your room. Visualize the sequence of actions the robot would take. Make modifications. “Be careful not to spill on the rug, and don’t paint the baseboards.” Visualize the adjusted behavior to ensure it achieves exactly what you had in mind.

Train models directly from human preferences in source videos. Learn that humans don’t like spilling paint, or breaking vases, or burning their eggs. Learn how humans and animals move naturally. How humans are polite in letting others pass. 

This would be an incredible tool for accelerating progress across the whole field. We would invest resources in creating and developing it and then it would become a source of compounding growth. As it gets better, so would our capabilities, data, $, and time budgets.

Beyond just a training tool, it could form the basis of an internal model that the agent uses online during deployment. The agent could understand and interact with the world in terms of its high-fidelity physics model. 

For example, humans can accurately predict what will happen if we bump our 
coffee cup near the edge of a table
or how someone might respond if we bump *their coffee* near the edge of a table.
Our intuitive physics and psychology predictions are very good, despite the
fact our information processing abilities are severely constrained by our hardware,
the DNA bottleneck, and whatever we can learn in a single lifetime.
In theory, you can do much better---with digital brains, specifically optimized to 
model these things, trained on orders of magnitude more data than anyone
encounters in a lifetime, with more memory and much higher accuracy representations.

For example, such brains may be able to predict things like the precise 
trajectory of the mug.  Or perhaps whether that outdoor deck all those people are standing on is about to collapse.
By having watched thousands of videos of structural 
failures like that on YouTube, including several videos of this [exact thing](https://www.youtube.com/results?search_query=deck+collapse), they might know all the tell-tale signs, like
the overloading from too many people and the stress fracture in the wood.
Models that have "experienced" much more than any single human may have extraordinary capabilities such as these.

If text-based-GPT-X is like having thousands of world experts to talk to,
robot-embodied-video-GPT could be like having thousands of world experts in the room with you. 
It could know things like survival skills, yoga, workout routines, guitar cords. 
It could explain and demonstrate the mechanics of these things to you (e.g., starting a fire with a magnifying glass [[youtube video]](https://www.youtube.com/watch?v=D2ym8wt5NWo)).
Like having an Ian Banks Culture [drone](https://en.wikipedia.org/wiki/The_Culture#Drones) or Star Wars droid with you. C3PO that knows all the languages or whatever.


And maybe you only have to do well enough to bootstrap to something on the order of narrow household robots (dish washing + laundry).
Then you can use those robots in a Tesla-like [fleet](https://www.youtube.com/watch?v=Ucp0TTmvqOE&feature=youtu.be&t=6678), collecting more data to iteratively improve the models.

To caveat, it's hard to say how far we are from video-GPT-X. It's possible that
patching up current limitations proves extremely difficult. 
It’s possible text is a uniquely well-suited modality for progress here. 
There is image-GPT, which suggests that other modalities are conquerable---if you are willing to pay the price in compute.
At some point massive-scale video prediction will be affordable.
At that point, it might not be as simple as taking out-of-the-box vanilla video-GPT-X and using it for high-fidelity simulation---it
might require some physics-sim specifc effort to make it work---but it will be possible.

I think preparing for the world where the scaling hypothesis and the bitter lesson are true is important.
What is going to matter in 10-20 years? Is your current research? Is it building to anything that might?

Specifically, I think this is going to look like huge models trained on massive datasets.
And then we reuse these massive models for different tasks.

I am therefore pretty bullish on model-based learning. Learning the huge model of the world,
then using that for training and injecting information into policies and value functions.
And also on sim2real learning, where we can turn massive amounts of data from the real world
into a simulator that we learn in. In fact, these areas will probably merge a lot in the future.
(TODO: write and link my other post on this stuff).

I also think we will benefit from massive amounts of videos of human demonstrations that
we can repurpose for training humanoid robots to do tasks. I imagine we could train a huge 
model that can behave like humans. Without having to do teleoperation. We can just repurpose them,
maybe through the use of the simulator.

Maybe I ought to have a pointer to different huge models that are going to matter in robotics.

Maybe I ought to rewrite this as the 
impact of huge scaled models in robotics.
One will be the learned simulator.
One will be the 


...

Anyway, cheers, thanks for reading

<br>
(always happy to catch any comments, criticism, feedback you have below, or in DMs, email, etc.)



<!--

FAQs/addendums

1. 

When a gpt model looks at starting a fire. It doesn’t have to get perfect physical accuracy. It will look and know that striking a flint with a steel will create sparks. Then that should catch the leaves on fire. That should produce smoke.

It won’t know the exact locations of all of these.

It will have a certain state that corresponds to there is flame. And once it has achieved that, it will know. It won’t have to be perfect.

The only way to achieve something like this is with very little imposed structure, trained on tons of real data. Yeah.


Hmm… this kind of makes me think we don’t want much structure at all. Or in fact, any things like conservation laws.

They will make it easier to learn some things, but they are just a crutch.

Big big models with just enough inductive biases to make it possible.


2. 

I guess one thing that is often ignored is that you can imagine a state before imagining how you would traverse there.

You can imagine, what would it be like if those words were switched.
Or if I went home right now, what would I be doing?
You can imagine states.
If your model is general enough, you can imagine states that are similar.
You could imagine different versions of the state.
Like imagine the desert, but it is grey, there is no air to breathe, the gravity is reduced, the dust can damage your body/electronics. How would you act there?
You can modify your models like that and try to figure it out.

I think video-GPT sim would work because you could place it in different contexts.


3. 

This would be a good way to make it parallelizable.

You collect data from all over, and you can have thousands of agents
running in the sim training.

I think this is going to the best way to scale.
You aggregate all of this knowledge into a central location.






Considering this, and really thinking about it.
Sure it is expensive, but the price will drop and people are willing to drop this cash anyway.
The potential windfall is massive.





-->






