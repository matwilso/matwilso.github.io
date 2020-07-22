---
layout: post
title: "GPT Physics Sim"
date: 2020-07-20
permalink: /gpt-sim/
tags: robotics 
toc: true
toc_sticky: true
---

>Imagine video-based GPT-X trained on the entirety of YouTube (cooking videos, DIY, home improvement, exercise, sports, gardening, etc)---in other words, imagine a high-fidelity *general-purpose reality simulator*.
<br><br>
What does this enable? In robotics? In general, for bringing advances in information technology to the world of atoms?

An egg cracking, pouring out, and sizzling on a frying pan. A paintbrush dipping into a bucket,
dragging across the wall, leaving a red streak of paint wall behind it.
Sunlight passing through a magnifying glass, catching a pile of dry leaves on fire---a rising trail of smoke, a marshmallow cooking over the flame.
A human stepping to the side when someone else is walking towards them, or getting mad if that someone gets too close and bumps into them.
There are many complex interactions for which we have trouble writing computer simulations, but for which we have, or could collect, a lot of data.

Based on the growing capabilities of language models like GPT3, it seems likely that we will be able to create a "good-enough" general-purpose reality simulator using relatively dumb future prediction training. Maybe not super soon, but definitely sometime on our horizon.

With a powerful enough "learned simulator" like this, we could generate RL environments with 
physical accuracy and generality light-years beyond what is possible today.
We could unify all compartmentalized, special-case simulation modes (rigid-body, fluids, optics, agents, etc.) into a single useful tool for robot learning, engineering, scientific discovery.
Something that works well enough across the entire range of tasks we care about.

Imagine sim2real learning with the smallest possible reality gap.
Model-based learning with the best possible model.
All in a package that is natural to interface with.

We could “prompt” the model with a video sequence to match our specific robotics setup and task.  Film a video of our room layout and our paintbrush dipping into the paint bucket. The model would automatically generate a virtual scene of our scenario that we could freely modify. “What about blue paint instead?”

No XML files, no painstaking calibration or modeling the articulated physics of e.g., a Rubik’s Cube. (With all the cubing videos on YouTube, we're especially well covered here lol)

Just film a video of our scene and the model would catch on, like GPT3 catches on when given prompts. (e.g., [@xuenay's thread](https://twitter.com/xuenay/status/1283312640199196673), [@gwern's twitter thread](https://twitter.com/gwern/status/1267215588214136833) or [longer newsletter post on GPT3](https://www.gwern.net/newsletter/2020/05#gpt-3), [OpenAI API blog post](https://openai.com/blog/openai-api/))

It’s all differentiable and can be placed directly in our PyTorch/TensorFlow computational graph.  Gradients flow like water.

Model-based learning algos can plug directly into it. Plan ahead and pipe RL gradients directly through the model. Maybe with some fully continuous, fully differentiable analog of MCTS, which has worked so well in AlphaGo/Zero/Mu. (I know stuff like this does exist, but there hasn't yet been a slam dunk win like MCTS planning is in the discrete case.)

Train a robot to paint your room. Visualize the sequence of actions the robot would take. Make modifications. “Be careful not to spill on the rug, and don’t paint the baseboards.” Visualize the adjusted behavior to ensure it achieves exactly what you had in mind.

Train models directly from human preferences in source videos. Learn that humans don’t like spilling paint, or breaking vases, or burning their eggs. Learn how humans and animals move naturally. How humans are polite in letting others pass. 

This would be an incredible tool for accelerating progress across the whole field. We invest resources in creating and developing it and then it becomes a source of compounding growth. As it gets better, so do our capabilities, data, $, and time budgets.

Beyond just a training tool, it could form the basis of an internal model that the agent uses online during deployment. The agent would understand and interact with the world in terms of its high-fidelity physics model. 

Think of how strong human intuitive physics and pyschology models are. We can 
accurately predict what will happen if we bump our coffee cup near the edge of our table
or how someone might respond if we bump *their coffee* near the edge of the table.
Yet our information processing abilities are severely constrained by our hardware,
the DNA bottleneck, and whatever we can learn in a single lifetime.
In practice, you could do much better with digital brains, specially optimized to 
model these things, trained on orders of magnitude more data than you would
ever encounter in a lifetime, with more memory and much higher accuracy representations.



If text-based-GPT is like having thousands of world experts to talk to,
robot-embodied YouTube-GPT would be like having thousands of world experts in the room with you. 
It would know survival skills, workout routines, yoga, guitar cords. 
It could demonstrate and explain the
mechanics of these things to you (e.g., starting a fire with a magnifying glass [[youtube video]](https://www.youtube.com/watch?v=D2ym8wt5NWo)).
Like having an Ian Banks Culture [drone](https://en.wikipedia.org/wiki/The_Culture#Drones) or Star Wars droid with you. C3PO that knows all the languages or whatever.

<!--

*Cut to a scene of a large group of people standing together, having drinks on a small outdoor deck.*

*"Get inside!", a droid comes running across the street, "Get off the deck!". 
It noticed there are way too many of them standing there and they are overloading the deck. 
The 
It also notices*

*They look over, confused, as the supports start creaking.
The deck suddenly drops out from under them, comes to a halt a few feet below. Most of them 
are able to jump inside---only a few are knocked of their feet
with minor bruises and a sprained wrist.* 

Maybe not the most realistic scenario, but there are in fact thousands of videos of structural failures like this on YouTube to learn from, including several videos of this [exact thing](https://www.youtube.com/results?search_query=deck+collapse) (not turning out quite as well).
An agent that has integrated so much knowledge could notice and predict many things like this better than an average person.
-->

...

Why do we expect something stupidly simple like future prediction to work so well? To get us to super accurate physics simulators?

Mainly, the empirical evidence we are starting to see from text-based models trained on this exact same dumb idea. The results of GPT3 are amazing---[still](https://www.gwern.net/GPT-3#weaknesses) [limited](https://twitter.com/michael_nielsen/status/1284937260798885888) [lol](https://twitter.com/sama/status/1284922296348454913), but amazing.
GPT3 just tries to predict the next word as accurately as possible.
When given a bigger brain, it keeps on filling that brain with more and more knowledge.
It learns basic syntax and grammar so it can predict the next word.
Then it learns basic text patterns (paragraphs, dialogue), so it can predict the next word.
Then [emotional sentiment](https://openai.com/blog/unsupervised-sentiment-neuron/), [amateur chess playing](https://twitter.com/TomChivers/status/1214488063310741504), [arithmetic](https://twitter.com/gwern/status/1277244260186763265), [...](https://twitter.com/xuenay/status/1283312640199196673)

YouTube-GPT would be able to learn super accurate physics because this
is what would help it better predict the next video frame.
With enough data, and especially with inductive biases sprinkled in, a super high-fidelity simulation seems possible.
And you really only have to do well enough to bootstrap to something on the order of narrow household robots (dish washing + laundry).
Then you can use those robots in a Tesla-like [fleet](https://www.youtube.com/watch?v=Ucp0TTmvqOE&feature=youtu.be&t=6678), collecting more data to make the models even more accurate.

To caveat, it's hard to say how far we are from YouTube-GPT. It's possible that
patching up current limitations proves extremely difficult. It’s possible text is a uniquely well-suited modality for progress here. But also there is image-GPT, and though it’s hella compute expensive, it at least strongly suggests that other modalities are conquerable.
Also, to further caveat, it won't be as simple as taking out-of-the-box vanilla YouTube-GPT and using it for high-fidelity simulation. 
I'm guessing you need to put in a lot of physics sim specific effort to make it workable.

...

Extrapolating forward from GPT3, I can much more clearly imagine super powerful AI systems now, compared to say, a few months ago.

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
I see no obvious reason that these specific types of AI training processes can't
do something equally impressive using a different objective and pressure, given enough effort and development + training time (much less than billions of years).
And the AI training seems more straight-to-the-point --- predicting the future probably puts a more direct pressure on intelligence capabilities.
Plus, AI benefits from bootstrapping off human artefacts and ingenuity.

These types of ideas and arguments have been floating around for awhile,
and maybe you are already convinced or already skeptical.
But I think we are starting to see a much more concrete picture than before,
of how, *exactly*, powerful AI might be built.

So, as we keep on improving these systems, where do the capabilities stop?
Before the model starts probing deeper into human psychology and motivations?
Discovering that it is experiencing a training process?
Discovering that it can do better at its objective by influencing its data sources?

It now also seems pretty clear that we should actually be worried about these questions. 
Starting now (the second best time to plant a tree, and all).

Feels like we ought to start buckling down more.  On safety / alignment, on thinking hard
about the future we want.
On dealing with bad/biased data, to prevent our powerful YouTube-GPT model becoming an anti-Vax Flat-Earther. To start learning how to optimize for human preferences
and values rather than cold fixed objectives. 
Start [pulling some fire alarms](https://intelligence.org/2017/10/13/fire-alarm/).
Personally, start becoming more familiar with the ML biases, human-computer symbiosis, and AI safety literatures as a first step.

Super exciting times, but we certainly have our work cut out for us. Super important choices to make and things to get right.

...

Anyway, cheers, thanks for reading

<br>
(this document was written by a human, lol)<br>
(always happy to hear any comments, criticism, feedback you have below, or in DMs, email, etc.)
