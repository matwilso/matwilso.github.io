---
layout: post
title: "GPT Physics Sim"
date: 2020-07-20
permalink: /gpt-sim/
tags: robotics 
toc: true
toc_sticky: true
---

>Imagine a huge video prediction model trained on a huge chunk of YouTube---tens of thousands of cooking videos, DIY, home improvement, exercise, gardening, etc.
Something like a general purpose predictive model, with generative abilities akin to [GPT-3 (and beyond)](https://www.gwern.net/newsletter/2020/05#gpt-3),
but for video instead of text.
<br><br>
What might this enable in robotics? And more generally, for bringing advances from information tech to the physical world?

Recent advances in huge language models demonstrate a path to powerful AI systems.
Step 1. Develop fairly simple but scalable architectures and training procedures.
Step 2. Proceed to scale the shit out of them.
Bigger models, more compute, and more data lead to better performance and wholly new qualitative abilities, it turns out.
The [scaling hypothesis](https://www.gwern.net/newsletter/2020/05#scaling-hypothesis) is true. [All hail](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)[ compute ;)](https://www.gwern.net/images/ai/2020-07-24-meme-moneyprinter-bitterlesson-gpt3.png)

When GPT is given more compute and more parameters, it keeps on filling those parameters with more and more 
knowledge. It learns basic syntax and grammar so it can better predict the next word.
Then it learns paragraph and dialogue structure. Then [emotional sentiment](https://openai.com/blog/unsupervised-sentiment-neuron/).
Then, at 175 billion parameters, things like [amateur chess playing](https://twitter.com/TomChivers/status/1214488063310741504), 
[arithmetic](https://twitter.com/gwern/status/1277244260186763265), [UI programming](https://twitter.com/sharifshameem/status/1284095222939451393)... 

There's good reason to believe these [scaling trends are robust](https://arxiv.org/abs/2001.08361) and that they hold [beyond natural](https://arxiv.org/abs/2010.14701)[ language](https://www.youtube.com/watch?v=QMqPAM_knrE&feature=youtu.be&t=2380),
in video for example.
Current language models are still quite limited, of course.
There are many more issues to fix and details to get right in text and other domains, but it seems like we're just getting started here with massively scaled models.

So, just as GPT-3 picks up on grammar, sentiment, and so on,
in order to better predict the next word,
a future video-based-GPT-X model is going to be able to learn accurate physics to better predict the next frame.
It will probably take specialized effort beyond a vanilla video prediction model.
But certainly with enough physics specific data, a few built-in inductive biases, and some fine-tuning, a learned model could become insanely good at physical prediction and simulation<label for="sn-1" class="margine-toggle sidenote-number"/>.
<input type="checkbox" id="sn-1" class="margin-toggle"/>
<span class="sidenote">
With "physicsal simulation" being just a narrow use case of such a model. 
I imagine that AI generated video content and VR environments, for example, are going to be huge.
There'll be plenty of incentive to develop large generative video models outside of physics prediction.
</span>

By absorbing knowledge across many domains, a large video prediction model could simulate environments with a
physical accuracy and generality light-years beyond what is possible today.
It could replace all the narrow, special, hand-engineered (rigid-body, fluid, optic, agent, etc) simulators
with a single great tool for robot learning, engineering, scientific discovery.

A single model could simulate an egg cracking, pouring out, and sizzling on a frying pan. A paintbrush dipping into a bucket,
dragging across the wall, and leaving a red streak of paint behind it.
Sunlight passing through a magnifying glass, catching a pile of dry leaves on fire---a rising trail of smoke, a marshmallow cooking over the flame.
A human stepping to the side when someone else is walking towards them, or getting mad if that someone gets too close and bumps them.
Any number of other interactions for which it is nearly impossible for us to write computer simulations for, but for which we have, or could collect, a lot of data.

Such a simulator could be incredibly useful in robot learning.
Imagine sim2real learning with the smallest possible reality gap, or model-based learning with the best possible model.
All in a package with a natural interface.

We could “prompt” our model with a video sequence to match our specific robotics setup and task.  Film a video of our room layout and our paintbrush dipping into the paint bucket. The model would automatically generate a virtual scene of our scenario that we could freely modify. “What about blue paint instead?”

No XML files, no painstaking calibration or modeling e.g., the articulated physics of a Rubik’s Cube. (With all the cubing videos on YouTube, we should be especially well covered here lol.)
Just film a video of our scene and the model would catch on, like GPT-3 catches [on](https://twitter.com/xuenay/status/1283312640199196673) [when](https://twitter.com/gwern/status/1267215588214136833) [given](https://www.gwern.net/newsletter/2020/05#gpt-3) [prompts](https://openai.com/blog/openai-api/).

It’s all differentiable and can be placed directly in our PyTorch/TensorFlow computational graph.  Gradients flow like water.

Model-based learning algos can plug directly into it. Plan ahead and pipe RL gradients directly through the model. 
Maybe with some fully continuous, fully differentiable analog of MCTS, which has worked so well in Alpha/MuZero.

Train a robot to paint your room. Visualize the sequence of actions the robot would take. Make modifications. “Be careful not to spill on the rug, and don’t paint the baseboards.” Visualize the adjusted behavior to ensure it achieves exactly what you had in mind.

Train models directly from human preferences in source videos. Learn that humans don’t like spilling paint, or breaking vases, or burning their eggs. Learn how humans and animals move naturally. How humans are polite in letting others pass. 

This could be an incredible tool for future progress. One that a small fraction of people build and maintain,
while many others benefit from what it enables them to do.

Beyond just a training tool, it could form the basis of an internal model that the agent uses online during deployment. The agent could understand and interact with the world in terms of its high-fidelity physics model, relying on its future predictions for making decisions in the world.

For example, humans can accurately predict what will happen if we bump our 
coffee cup near the edge of a table
or how someone might respond if we bump their coffee near the edge of a table.

Human intuitive physics and psychology predictions are very good, despite the
fact our information processing abilities are severely constrained by our hardware,
the DNA bottleneck, and whatever we can learn in a single lifetime.
In theory, it seems like you can do much better---with digital brains, specifically optimized to 
model these things, trained on orders of magnitude more data than anyone
encounters in a lifetime, with more memory and much higher accuracy representations.

For example, such brains may be able to predict things like the precise 
trajectory of the mug.  Or perhaps whether that outdoor deck all those people are standing on [is about to collapse](https://www.youtube.com/results?search_query=deck+collapse).
By having watched thousands of videos of structural 
failures like that on YouTube, including several videos of this exact thing, they might know all the tell-tale signs, like
the overloading from too many people and the stress fractures in the wood.
Models that have "experienced" much more than any single human may have extraordinary capabilities like this.

If text-based-GPT-X is like having thousands of world experts to talk to,
robot-embodied-video-GPT could be like having thousands of world experts in the room with you. 
It could know things like survival skills, yoga, workout routines, guitar cords. 
It could explain and demonstrate the mechanics of these things to you (e.g., starting a fire with a magnifying glass [[youtube video]](https://www.youtube.com/watch?v=D2ym8wt5NWo)).
Like having an Ian Banks Culture [drone](https://en.wikipedia.org/wiki/The_Culture#Drones) or Star Wars droid with you. C3PO that knows all the languages or whatever.

To caveat, it's hard to say how far we are from video-GPT-X. It's possible that
patching up current limitations proves extremely difficult. 
It’s possible text is a uniquely well-suited modality for progress here<label for="sn-2" class="margine-toggle sidenote-number"/>
<input type="checkbox" id="sn-2" class="margin-toggle"/>
<span class="sidenote">
Probably true. Images/video are less [semantically dense than text](https://twitter.com/jcjohnss/status/1271273497310965762),
You need to process many more bits to gain relevant info---perhaps thousands of irrelevant or redudant pixels to determine you are looking at a brick wall or something.
I don't see this as a roadblock to very accurate video models.
It probably just means we'll need a bit more cleverness and a lot more scale.
</span>.

But with [improved](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit)[ hardware](https://en.wikipedia.org/wiki/Huang%27s_law#:~:text=Huang's%20Law%20is%20an%20observation,central%20processing%20units%20(CPU).&text=Huang's%20law%20states%20that%20the,than%20double%20every%20two%20years.), [larger investments](https://openai.com/blog/ai-and-compute/), and [efficiency gains](https://openai.com/blog/ai-and-efficiency/),
massive-scale video prediction and general physics simulators don't seem too far on the horizon though.
Seems like they're probably worth planning for.


<!--
Creating general physics simulators may be challenging, but it will be possible, and it will be worth doing.

And I think it is probably good to think about if you work in this area.
What is going to matter?

At that point, it may require a decent amount of extra physics-sim specific effort, but it will be possible, and worth doing.
-->

<!--
<label for="bootstrap" class="margine-toggle sidenote-number"/><input type="checkbox" id="bootstrap" class="margin-toggle"/><span class="sidenote">
To bootstrap to something like this might not require an unreasonable robotics specific effort.
Maybe you can start with something on the order of narrow household robots (dish washing + laundry).
Then use these in a Tesla-like [fleet](https://www.youtube.com/watch?v=Ucp0TTmvqOE&feature=youtu.be&t=6678), collecting more data to iteratively improve the models
and ratcheting up.
Maybe a "Sim2Real Engine", where you (1) use simulators to train policies, (2) use those policies to collect better data,
and then (3) use that data to improve the simulator. Rinse, repeat.
</span>.


And so will other large scale models, like large models that can imitate humans.

And I think preparing for the world where the scaling hypothesis and the bitter lesson are true is important.
What is going to matter in 10-20 years? Are you building towards something that might? 

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



And as we are seeing, powerful prediction models are extremely versatile.
They can be [programmed based on different prompts](https://twitter.com/ch402/status/1273765062633639936) to do a vast number of things.
If you want your GPT-3 model to solve arithmetic problems, you feed it a
prompt that says to add "the following 4-digit numbers: 4,235 + 1,897 = " and
then your model happens to do arithmetic by predicting what tokens come next ("6,132").


They are super powerful tools with a quite nice interface, relative to 
traditional software APIs.



Thus, if you want your video-GPT-X to simulate physics, you feed it a video of an egg falling off the kitchen table and then your model happens to simulate physics by predicting what frames come next (it hits the ground and splatters).

Just as arithmetic is just one example of what you can do with a text prediction
model, physics simulation is just one example of what you can do with a video prediction model.


But here I just focus on physics simulation, because it is super exciting for robotics.
-->



...

Anyway, cheers, thanks for reading

<br>
(I'm happy to catch any comments, criticism, feedback you have below, or in DMs, email, etc.)



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


With models in the 100s of billions of parameters---and yet to hit any scaling limits---we are seeing incredible
results.  If we can achieve such mastery with such simple approaches in text, we can't be too far away from cracking other domains like video.
Maybe not immediately, due to the much larger compute costs it will likely take, the necessary improvements in video-specific arches, training, etc.
But this is definitely on the horizon.

Though we have yet to hit on many of the applications of powerful text models,
I am excited about the prospects of video prediction.
Specifically robotics, and specifically for the potential of creating a general purpose physics simulator.

No doubt many in VR, movie generation, etc.
But in this post, I focus on the applications to robot learning of a general purpose video physics simulator.







Concretely, for training, I think this means something simple like mean-squared error on pixels is not going to
work like just predicting the next word works.
I think something like generative models will be the right way to do this.
Things like GANs, or VAEs that can sample probabilitistically the possible types of cars.

I think a future simulator has randomness built in. Core to the simulation, will be sampling about possible future events.
About how the wave is going to crash.
You can train your robot on all variations simultaneously.

Maybe a VAE would be able to handle MSE loss...
Like if you sample and keep track of that.
Maybe it would work.
Maybe pixel loss along with other. But if you are sampling a latent... maybe it could work.


I think in narrow settings this will work well.
There will be plenty of cases where you have enough information to accurately predict what is going to happen.

But then plenty more where all kinds of things can happen because you don't have perfect information.

But you can sample over that. Randomly sample and account for that.

This will be core for a learned simulator.





-->






