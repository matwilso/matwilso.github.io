---
layout: post
title: "GPT Physics Sim"
date: 2020-07-20
permalink: /gpt-sim/
tags: robotics 
toc: true
toc_sticky: true
---

>Imagine video-based GPT-X trained on the entirety of YouTube (cooking videos, DIY, home improvement, exercise, sports, gardening, etc)---a high-fidelity general-purpose prediction model,
with generative abilities akin to GPT3, but for videos.
<br><br>
What would this enable? In robotics?  For bringing advances in information tech to the world of atoms more generally?

Based on recent advances in language modeling---with the incredible
capabilities of massively scaled but relatively "dumb" approaches trained to
predict the next token (i.e., [GPT-3](https://www.gwern.net/newsletter/2020/05#gpt-3))---powerful video prediction doesn't seem too far off.
Maybe not immediate, due to compute costs, necessary improvements in arches, training, etc.,
but it's definitely on our near-term horizon.

Once we do create a general video prediction model, that puts us a small step away from a general physics simulator.
In video prediction, you feed the model a "prompt" video and the model tells you what is going to happen next.
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

...

Why do we expect something stupidly simple like future prediction to work so well? To get us to super accurate physics simulators?

Mainly, the empirical evidence we are starting to see from text-based models trained on this exact same dumb idea. The results of GPT3 are amazing---[still](https://www.gwern.net/GPT-3#weaknesses) [limited](https://twitter.com/michael_nielsen/status/1284937260798885888) [lol](https://twitter.com/sama/status/1284922296348454913), but amazing.
GPT3 just tries to predict the next word as accurately as possible.
When given a bigger brain, it keeps on filling that brain with more and more knowledge.
It learns basic syntax and grammar so it can predict the next word.
Then it learns basic text patterns (paragraphs, dialogue), so it can predict the next word.
Then it learns [emotional sentiment](https://openai.com/blog/unsupervised-sentiment-neuron/), [amateur chess playing](https://twitter.com/TomChivers/status/1214488063310741504), [arithmetic](https://twitter.com/gwern/status/1277244260186763265), [...](https://twitter.com/xuenay/status/1283312640199196673) all to better predict the next word.

Video-GPT-X would be able to learn super accurate physics because this
is what would help it better predict the next video frame.
With enough data, and especially with inductive biases sprinkled in, a super high-fidelity simulation seems possible.
And maybe you only have to do well enough to bootstrap to something on the order of narrow household robots (dish washing + laundry).
Then you can use those robots in a Tesla-like [fleet](https://www.youtube.com/watch?v=Ucp0TTmvqOE&feature=youtu.be&t=6678), collecting more data to iteratively improve the models.

To caveat, it's hard to say how far we are from video-GPT-X. It's possible that
patching up current limitations proves extremely difficult. 
It’s possible text is a uniquely well-suited modality for progress here. 
There is image-GPT, which suggests that other modalities are conquerable---if you are willing to pay the price in compute.
But when will be able to afford massive-scale video prediction?
And at that point, will it be as simple as taking out-of-the-box vanilla video-GPT-X and using it for high-fidelity simulation?
I'm guessing you need to put in a lot of physics sim specific effort to make it workable.

...

Seeing GPT3 and extrapolating forward from that, I can now much more clearly imagine super powerful future AI systems.

It now seems pretty clear that we can build such systems using fairly stupid methods (~[Prosaic AI](https://ai-alignment.com/prosaic-ai-control-b959644d79c2)).
And though GPT is still primitive in many ways, I don't think I would have expected it to be able to do some of the things that it can.
(And maybe ditto for AlphaGo, the DOTA/SCII work, though I never made 
any concrete advance predictions for any of these.)
Quantity really does seem to have a quality all its own here.
Whole new capabilities arise from training bigger and bigger systems.

In terms of optimization processes, if evolution of human brains worked, deep learning of 
neural networks should definitely work. 
Evolution puts a certain type of optimization pressure on organisms to survive and reproduce. 
These AI training processes are putting what seems to be an equivalently powerful
optimization pressure on the neural networks to accurately predict the future (next word).
Evolution turned out, in the specific case of homo sapiens, to squeeze human-level intelligence
out of this by chance, over billions of years.
I don't see an obvious reason why these specific types of AI training processes can't
do something equally impressive using a different objective and pressure, given enough effort and development + training time (much less than billions of years).
And the AI training seems more straight-to-the-point --- predicting the future probably puts a more direct pressure on intelligence capabilities.
Plus, AI benefits from bootstrapping off human artefacts and ingenuity.

Sure, these types of ideas and arguments might be old news,
and you are already convinced or already skeptical.
But I think we are starting to see a much more concrete picture than before,
of how, *exactly*, powerful AI might be built.

So, as we keep on improving these systems, where do the capabilities stop?
Before the model starts probing deeper into human psychology and motivations?
Discovering that it is experiencing a training process?
Discovering that it can do better at its objective by influencing its data sources?

It now also seems pretty clear that we should actually be worried about these questions. 
Starting now (the second best time to plant a tree and all).

It feels like we ought to start buckling down more.  On safety / alignment. On thinking hard
about the future we want.
On dealing with bad/biased data, to stop our YouTube-GPT model from becoming an anti-Vax Flat-Earther. 
To start learning how to optimize for human preferences and values rather than fixed pre-specified objectives. 
Start [pulling the fire alarm](https://intelligence.org/2017/10/13/fire-alarm/).
Personally, start becoming more familiar with the ML biases, human-computer symbiosis, and AI safety literatures as a first step.

Super exciting times, but we've got our work cut out for us. 
Super important choices to make and things to get right. (And not that it often really feels, on the ground level, like one is making a ton of progress. Mostly it's hard, 
unglamorous work.
Something like "things never get easier,
you (or maybe the field as a whole) [just go faster](https://twitter.com/ruohanchenux/status/1000258622239068160/photo/2)".)

...

Anyway, cheers, thanks for reading

<br>
(this document was written by a human, lol)<br>
(always happy to hear any comments, criticism, feedback you have below, or in DMs, email, etc.)



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

-->






