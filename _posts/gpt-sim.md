---
layout: post
title: "GPT Physics Sim"
date: 2020-07-19
permalink: /gpt-sim/
tags: robotics 
toc: true
toc_sticky: true
---

>Imagine video-based GPT4/5 trained on the entirety of YouTube (cooking videos, DIY, home improvement, exercise, sports, gardening, etc.) <br><br>
What would this enable? In robotics? In general, for bringing advances of information technology to the world of atoms?

Based on recent language models like GPT3 and their capabilities, it seems possible and *quite likely* that we can create a good-enough general-purpose reality simulator using a relatively stupid future prediction training approach. Maybe not soon, but definitely sometime on our horizon.

With a "learned simulator" like this, we could generate RL environments with a variety and physical accuracy light-years beyond what is possible with current simulators.

Simulate an egg cracking, pouring out, and sizzling on a frying pan. A paintbrush dipping into a bucket, and leaving a red streak of paint on the wall behind it.
Sunlight passing through a magnifying glass, catching a pile of dry leaves on fire; a rising trail of smoke, a marshmallow cooking over the flame.
A human stepping to the side when someone else is walking towards them, or getting mad if that someone gets too close and bumps into them.

Any number of other “soft” or hard-to-model interactions, which we have trouble writing computer programs for, but for which we have---or could collect---a lot of data.


This data-driven approach to simulation definitely seems the way to go. Unify all compartmentalized, special-case simulation modes (rigid-body, fluids, optics, agents, etc) into a single useful tool for robot learning, engineering, scientific discovery.
Something that works well enough across the entire range of tasks we care about.

Imagine sim2real learning with the smallest possible reality gap.
Model-based learning with the best possible model.
All in a package that is natural to interface with.

We could “prompt” a learned simulator with a video sequence to match our specific robotics setup and task.  Film a video of our room layout and our paintbrush dipping into the paint bucket. The model automatically generates a virtual scene of our painting task that we can freely modify. “What about blue paint instead?”

No XML files, no painstaking calibration or modeling the articulated physics of e.g., a Rubik’s Cube. (With all the cubing videos on YouTube, we're especially well covered here lol)

Just film a video of our scene and the model would catch on, like GPT3 catches on when given prompts. (See [@xuenay's thread](https://twitter.com/xuenay/status/1283312640199196673), [@gwern's twitter thread](https://twitter.com/gwern/status/1267215588214136833) or [longer newsletter post on GPT3](https://www.gwern.net/newsletter/2020/05#gpt-3), or the [OpenAI API blog post](https://openai.com/blog/openai-api/))

It’s all differentiable and can be placed directly in our PyTorch/TensorFlow computational graph.  Gradients flow like water.

Model-based learning algos can plug directly into it. Plan ahead and pipe RL gradients directly through the model. Maybe with some fully continuous, fully differentiable analog of the MCTS that has worked so well in AlphaGo/Zero/Mu.

Train a robot to paint your room. Visualize the sequence of actions the robot would take. Make modifications. “Be careful not to spill on the rug, and don’t paint the baseboards.” Visualize the adjusted behavior to ensure it achieves exactly what you had in mind.

Train models directly from human preferences in source videos. Learn that humans don’t like spilling paint, or breaking vases, or burning their eggs. Learn how humans and animals move naturally. How they step carefully and are gentle. How humans are polite in letting people pass. 

This would be an incredible tool for accelerating progress across the whole field. We invest resources in creating and developing it and then it becomes a source of compounding growth. As it gets better, so do our capabilities, data, $, and time budgets.

Beyond just a training tool, it could form the basis of an internal model that the agent uses online during deployment. The agent would understand the world in terms of its high-fidelity physics model. 

Think how good humans are at intuitive physics and pyschology. You can predict
what will happen if you bump your coffee cup near the edge of your table
or how someone might respond if you bump *their* coffee near the edge of the table.
Yet human information processing abilities are constrained by our hardware,
the DNA bottleneck, and whatever we can learn in a single lifetime.
You could do much better with digital brains specifically optimized to 
model these things, trained on orders of magnitude more data than you would
ever encounter in a lifetime, with more memory, higher accuracy representations.

If text-based-GPT is like having thousands of world experts to talk to,
robot-embodied YouTube-GPT is like thousands of world experts in the room with you. 
It knows survival skills, workout routines, yoga, guitar cords. 
It can demonstrate and explain the
mechanics of these things to you (e.g., [starting a fire with a magnifying glass](https://www.youtube.com/watch?v=D2ym8wt5NWo)).
Would be like having an Ian Banks Culture or Star Wars droid with you. C3PO that knows all the languages or whatever.

*People are standing having drinks on a small raised outdoor deck.
"Everybody off the deck!", a droid comes running across the street,
"Get inside!". They look over, confused, as the supports start creaking.
The deck drops, comes to a halt a few feet lower. Enough of them react
soon enough to get inside, with only a few being knocked to the deck floor 
with minor bruises and sprained wrists.* 

There are thousands of videos of structural failures, including several videos of this [exact thing](https://www.youtube.com/results?search_query=deck+collapse) happening on YouTube.
Maybe the full scenario isn't realistic, but a learned model that has integrated so much 
knowledge could likely see and predict things better than an average person.


...

Why do we expect something stupidly simple like future prediction to work so well? To get us to super accurate physics simulators?

Mainly, the empirical evidence we are starting to see from text-based models trained on this exact same dumb idea. The results of GPT3 are amazing---[still](https://twitter.com/michael_nielsen/status/1284937254666768384) [limited lol](https://twitter.com/sama/status/1284922296348454913), but amazing.
GPT3 just tries to predict the next word as accurately as possible.
When given a bigger brain, it keeps on filling that brain with more and more knowledge.
It learns syntax and grammar so it can predict the next word.
Then it learns basic text patterns (paragraphs, dialogue), so it can predict the next word.
Then [emotional sentiment](https://openai.com/blog/unsupervised-sentiment-neuron/), [amateur chess moves](https://twitter.com/TomChivers/status/1214488063310741504), [arithmetic](https://twitter.com/gwern/status/1277244260186763265), [...](https://twitter.com/xuenay/status/1283312640199196673)

YouTube-based GPT would learn complex and super accurate physics because it would help it to predict the next video frame.
With enough data, and especially with inductive biases sprinkled in, a super high-fidelity simulation seems possible.
And you only have to do well enough to bootstrap something like limited household robots (dish washing + laundry).
Then you can use those in a Tesla-like data-collection [fleet](https://www.youtube.com/watch?v=Ucp0TTmvqOE&feature=youtu.be&t=6678), runnning experiments to make the models even more accurate.

To caveat, it's hard to say how far we are from YouTube-GPT. It's possible that
shoring up the current weaknesses proves to be extremely difficult. It’s possible text is a uniquely well-suited modality for progress here. But also there is image-GPT, and though it’s hella compute expensive, it at least strongly suggests that other modalities are conquerable.
And to further caveat, if we do get YouTube-GPT, it’s probably not as simple as taking it out-of-the-box and using it for high-fidelity simulation. But with the wide range of tools already built on top of GPT3, it seems possible to jerry-rig this or at least use it to help bootstrap.

...

Extrapolating forward,
I can now imagine really powerful AI systems much more clearly than before.
GPT has learned to do things I don't think I would have expected. 
Quantity does really seem to have a quality all its own here.
There are whole new capabilities that arise from training these bigger and bigger systems.

And as we keep improving these systems, where do the capabilities stop?
Where do you expect them to stop?
Modeling human psychology?
Discovering that it is experiencing a training process?
Discovering that it can do better at its objective by influencing its data sources?

I believe we can build super powerful systems using fairly stupid methods (~[Prosaic AI](https://ai-alignment.com/prosaic-ai-control-b959644d79c2)).
In terms of optimization processes, if evolution of humans worked, deep learning of 
neural networks should definitely work.

Evolution optimizes through survive-and-reproduce incentive, and operates at glacial speed.
It turns out that a certain specific run of this gets you human-level intelligence.
It turns out that pretty general reasoning abilities is what helps
you do that in a certain niche of the ecosystem.
Humans were just trying to survive and reproduce.
There was pressure for smarter brains.
As our brains grew, we could start to absorb more things into them,
like language (for instance).

These specific AI training processes optimize through predict-what-is-going-to-happen incentive,
and operate at training-in-a-few months speed.
And I don't see such processes as obviously being (irreparably) less powerful, to the point where
they can't achieve the same practical abilities when tuned and scaled.
A neural network brain could always keep getting smarter to make better predictions (that's what we're seeing).
And training these objectives directly with backpropagation seems a bit more to the point.
Plus we can use human ingenuity to drive these processes.

Deep learning is clearly very capable of solving challenging tasks.
With much more optimization pressure and a few more tricks, how is it not going to produce super intelligent machines?

It makes me think we need to start thinking much more about safety / alignment, and
about the future we want.  Start [pulling some fire alarms](https://intelligence.org/2017/10/13/fire-alarm/#:~:text=There's%20no%20possible%20sign%20short,5%2C%20or%202%20years%20away.&text=So%20there%20isn't%20going,Period.).
Start working more on issues of bias and bad sources of data, to protect against our YouTube-GPT becoming an anti-Vax Flat-Earther. Start learning how to optimize for human preferences
rather than cold fixed objectives. Personally, probably start at least becoming more familiar with the ML biases, human-computer symbiosis, and AI safety literatures as a first step.

Super exciting times. But we certainly have our work cut out for us.
Super important choices to make and things to get right.

...

Anyway, cheers, thanks for reading

(this document was written by a human, lol)<br>
(always happy to hear any comments, criticism, feedback you have below, or in DMs, email, etc.)



