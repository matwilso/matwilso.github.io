---
layout: post
title: "GPT Physics Sim"
date: 2020-07-19
permalink: /robotics/gpt-sim/
tags: robotics 
toc: true
toc_sticky: true
---

>Imagine video-based GPT3 trained on the entirety of YouTube (cooking videos, DIY, home improvement, exercise, sports, gardening, etc.) <br><br>
What would this enable? In robotics? In general, for bringing advances in information technology to the world of atoms?

We could generate RL environments with physical accuracy and variety light-years beyond what is possible with current simulators.

Simulate an egg cracking, pouring out, and sizzling on a frying pan. A paintbrush dipping into a bucket, dragging across the wall, and leaving a red streak of paint behind it.
Sunlight passing through a magnifying glass to catch a pile of dry leaves on fire, a rising trail of smoke, a marshmallow cooking over the flame.
A human politely stepping to the side when someone else is walking towards them, or getting mad if that someone gets too close and bumps into them.

Any number of other “soft” or hard-to-model interactions, which we have trouble writing computer programs for, but for which we have---or could collect---a lot of data.

Based on GPT and its capabilities, it seems possible and *quite likely* that we can create a “good-enough” general-purpose reality simulator using a stupid future prediction training approach. Maybe not super soon, but definitely sometime on our horizon.

A data-driven approach to simulation definitely seems the way to go. Unify all compartmentalized, special-case simulation modes (rigid-body, fluids, optics, agents, etc) into a single useful tool for robot learning, engineering, scientific discovery.
Something that works well enough across the entire range of tasks we care about. A simulator that's way more useful and *usable* than what we have now.

Imagine sim2real learning with the smallest possible reality gap.
Model-based learning with the best possible model.
All in a package that is natural to interface with.

We could “prompt” a GPT learned simulator with a video sequence to match our specific robotics setup and task.  Film a video of our room layout and our paintbrush dipping into the paint bucket. The model automatically generates a virtual scene of our painting task that we can freely modify. “What about blue paint instead?”

No XML files, no painstaking calibration or modeling the articulated physics of e.g., a Rubik’s Cube. (With all the YouTube cubing videos, we're especially well covered here lol.)

Just film a video of our scene and the model would catch on, like GPT3 catches on when given prompts. (See [@xuenay's thread](https://twitter.com/xuenay/status/1283312640199196673), [@gwern's twitter thread](https://twitter.com/gwern/status/1267215588214136833) or [longer newsletter post on GPT3](https://www.gwern.net/newsletter/2020/05#gpt-3), or the [OpenAI API blog post](https://openai.com/blog/openai-api/).)

It’s all differentiable and can be placed directly in our PyTorch/TensorFlow computational graph.  Gradients flow like water.

Model-based learning algos can plug directly into it. Plan ahead and pipe RL gradients directly through the model. Maybe with some fully continuous, fully differentiable analog of the MCTS that has worked so well in AlphaGo/Zero/Mu.

Train a robot to paint your room. Visualize the sequence of actions the robot would take. Make modifications. “Be careful not to spill on the rug, and don’t paint the baseboards.” Visualize the adjusted behavior to ensure it achieves exactly what you had in mind.

Train models directly from human preferences in source videos. Learn that humans don’t like spilling paint, or breaking vases, or burning their eggs. Learn how humans and animals move naturally. How they step carefully and are gentle. How humans are polite in letting people pass. 

This would be an incredible tool for accelerating progress across the whole field. We invest resources in creating and developing it and then it becomes a source of compounding growth. As it gets better, so do our capabilities, data, $, and time budgets.

Beyond just a training tool, it could form the basis of an internal model that the robot uses online during deployment. The agent would understand the world in terms of high-fidelity physics model. 

Think how good human are at intuitive physics and pyschology. You can predict
what will happen if you bump your coffee cup near the edge of your table
or how someone else might respond if you bump their coffee near the edge of the table.
Yet human information processing abilities are so constrained.
We are limited by what the DNA bottleneck and whatever we can learn in a single lifetime.
Our digital models suffer from no such constraints.
They can be trained on orders of magnitude more data than you would ever hope to see,
in a substrate with more memory and many decimal places of floating point accuracy.
They will be so freaking accurate.

Made-up story, probably inaccurate, but somewhat illustrative:
People are standing having drinks on a raised patio. 
"Everybody off the patio!", a droid comes running from across the street,
"Get inside!", they look over confused, a moment the supports start creaking.
Most get inside, while a few drop down a few feet before the patio comes to a halt.

On YouTube, there are thousands of videos of structural failures, including
several videos of this exact thing happening on YouTube, which much worse
results.  The droid had integrated this knowledge of the tell-tale signs of pillars about to collapse.

Just like someone said GPT is like having a PhD person there. This will be like having a world expert. It would know survival skills. How to do workout exercises, yoga. How to play guitar cords. It would be like having a Ian Banks Culture/Star Wars droid. C3PO that knows all the languages or whatever.

To caveat, idk how far we are from YouTube GPT3.  It’s possible text is a uniquely well-suited modality for progress here. But also there is image-GPT, and though it’s hella compute expensive, it at least strongly suggests that other modalities are conquerable.
And once we have YouTube GPT3, it’s prolly not as simple as taking it out-of-the-box and using it for high-fidelity simulation. But with the wide range of tools already built on top of GPT3, it seems possible to jerry rig an accurate physics simulator out of YouTube GPT3.

But I can now imagine really powerful AI systems much more clearly than I could before.
GPT3 has not stopped scaling.
The whole quantity has a quality all its own.
This really seems true.
There are whole new capabilities that arise from training these bigger and bigger systems.

We need to start thinking much more about safety.
And much more about how we want the future to go.
The choices are made today.
What future do we want?

If you’re skeptical, or you haven’t started becoming quite scared of our AI progress yet... read on...

Why do we expect something stupidly simple like predict-the-next-frame to work so well? To get us to super accurate physics simulators?

Mainly, the empirical evidence we are seeing from text-based models train on this exact same dumb idea. The results of GPT3 are amazing. If you haven’t spent some time looking at these, you really should.

GPT3 just tries to predict the next word as accurately as possible.  As it scales, it keeps getting better and better at predicting the next word.  And *it doesn’t stop getting better*.

When given a bigger brain, it keeps on filling that brain with more and more knowledge.

It learns syntax and grammar so it can predict the next word.
Then it learns sentiment so it can predict the next word.
Then 
TODO: some more in between here.
It learns how to add numbers so it can predict the next word.

YouTube GPT would learn complex and super accurate physics because it would help it predict the next video frame.

With enough data, and especially with some inductive biases sprinkled in, a super high-fidelity simulation seems possible.

You only have to do well enough that you can bootstrap household robots and other widespread general purpose robots.

Then you can use the cameras from those robots like a Tesla fleet.  You can use them to run experiments to make the model even more accurate.

Not sure how far you could get with just YouTube and you may need to start doing this bootstrapping process much earlier.


Exciting times. But also. We might want to start pulling some fire alarms.
(https://intelligence.org/2017/10/13/fire-alarm/#:~:text=There's%20no%20possible%20sign%20short,5%2C%20or%202%20years%20away.&text=So%20there%20isn't%20going,Period.)

When given a bigger brain, it keeps on filling it up with more and more knowledge.

When does it stop filling up?

When it can predict human intentions?
Model human psychology?
Discover that it is in a training process?
Discover that it can do better at its objective by influencing its data sources?
By influencing humans?
By hacking into the system?

We aren’t there yet.
But what do we really think is going to stop us from getting there?
What specifically do you expect is going to stop it from getting there? What specifically did you think that a language model trained this way could not do?
Shouldn’t we really be doing much more?

Evan Hubringer has a pretty good podcast on FLI or something discussing some related ideas and models.

Maybe looking more and reading more into the issues of AI alignment.


Lol it is pretty crazy to me that something like YouTube enables this. Just a bunch of users, with their own purposes of providing entertainment or sharing knowledge. And they feed it the ton of data that makes it possible to build these amazing AI systems.

People have predicted this type of thing for years. ~“Just mine the internet for all the data and you will get AI”. 

But to see it actually start happening. The details of it. And it’s actually working.

It is pretty insane.


And also for more immediate issues, how do avoid biases in the data? What if some of your videos have humans behaving belligerently, harming other things? Like videos of first person shooter games or fighting games?  How do you protect against this?

If we just train our model on YouTube, it might just turn into an anti-Vax Flat-Eather.



We have our work cut out for us for sure.


Super excited to see how we start turning predictive models like GPT for the use of RL.


https://www.lesswrong.com/posts/SqF8cHjJv43mvJJzx/feeling-rational


References:
gwern thread.
other guy thread that i faved.
austin.




The LeCun Cake analogy is seeming pretty reasonable right about now. Unsupervised learning is going to carry us, give us a rich understanding of the world. Then we just do some cherry-on-the-top RL to achieve some goals. Gwern also touches on this is his great post on GPT3 ([link again](https://www.gwern.net/newsletter/2020/05#gpt-3)).











(What's the alternative, anyway, if we don't directly learn our models from data using ML? Write down and precisely compute the physics of how strawberries get pulverized in the blades of a blender? The heat transfer and chemical processes involved in cooking an egg? Do this for every imaginable physics mode?)





A microwave cooking a bag of popcorn. A blender blending fruit into a smoothie. Water from a sink rinsing the crumbs off a plate.



(Obviously, it won't be as simple as just out of the box video-based GPT trained on YouTube, but
the wide uses cases we see with GPT3 suggest it might not be so difficult to jerry-rig an
accurate simulator out of such a model.)



Our models have no such constraints and would be so much better at predicting what is going
to happen. They would have seen orders of magnitude more physical interactions than you ever will.

Now think how much better you could do with brains specifically designed to 
model these things, trained on orders of magnitude more data, with more memory,
higher accuracy (floating point decimal places).
It will have seen so many more physical interactions than you ever had. 
It will be so much better than you at predicting what is going to happen.


I would bet on learned simulators of this nature having a huge impact on robot learning. A huge wave. I’m not sure when it crashes on shore, but it is surely building.

Powerful predictive models and their unrelenting scalability are a huge wave for AI in general.
A scary wave.

