---
layout: post
title: "Learned Simulators"
date: 2021-02-22
permalink: /learned-sims/
tags: robotics 
---

> This is a spin-off from my post on [The Future of Robot Learning](/robot-future), and focuses more on learned simulators, which I think will play a major role in the future of the industry.

Robots are at an interesting intersection between being an engineered system and 
an embodied intelligence.  We have fairly well-established practices for 
designing and building highly reliable engineered systems, but we are actively 
figuring out how to develop flexible intelligent systems that learn from 
experience *and* that reach the same levels of safety and reliability.
This combination represents a unique set of 
challenges and an exciting frontier in technology today.

Simulation is a well-established tool in both engineering and human skill acquisition---it's been used to [design complex][defenseone] [fighter jets][popmech] and to [teach the human pilots][flightsim] that fly them.
It's also used universally in robotics for debugging, evaluation, and (sometimes) training,
to make development safer and cheaper, and to induce scenarios that are otherwise impossible or too dangerous to prep for.

Simulation is going to play an increasingly important role in the future of robotics, by
providing a readable and writeable proxy for reality.
The best robotics companies will have the best simulators, because that will be the cheapest, quickest, and safest way to iterate on and deploy intelligent systems in the real world.

As our robotic systems become capable of handling increasingly complex and varied
settings, however, our simulators must become increasingly complex and varied to remain useful.
And I believe we are going to hit a wall with traditional simulator development---a wall 
very similar to the one we hit with traditional computer vision before deep learning.

In the long run, then, we will need to learn our simulators *from data*,
much more akin to how humans learn their world models, and much more akin to how 
the rest of modern robot learning systems work.
There is no other way to handle the variety of the real world in a general
and scalable way (e.g., an egg cracking, 
pouring out, sizzling on a frying pan, and a paintbrush dipping into 
a bucket, dragging across the wall, leaving a streak of red paint behind).


<!--
But as our robot systems become capable of handling more complex and varied settings,
we need simulators to become more complex and varied to remain useful.

human engineering alone is not going to cut it.

Simulators seem likely to play a key role in the future of robotics.
But our robot systems are becoming increasingly capable of handling complex and varied settings;
in order for our simulators to remain useful, they need to become more complex and varied themselves.

But as our robot systems become capable of handling more complex and varied settings, our simulators need to become more complex and varied to remain useful.
In the long run, human engineering alone is not going to cut it.
We need to start learning more of the simulator *from data*,
much more akin to how humans learn their world models, and much more akin to how 
the rest of modern robot learning systems work.

But our robot systems are becoming increasingly capable
of handling more complex and varied settings. To keep up, I don't think the traditional way of doing things is going to cut it.


Fundamentally, the world is too complex and varied.

To handle the full complexity of the world---like deformability, material property changes, shattering, and strange artifacts like fire, paint, light switches and microwaves---
eventually the traditional way does not scale.
Eventually, we will need to learn our simulators largely from data, much more akin to how humans learn their world models.

And the question I am interested in asking is: what does that look like and how 
are we going to get there?

The best simulators of the future will impose minimal but carefully architected inductive biases for efficient learning; they will be flexible in what they can represent and in how they let us program and interact with them.
-->

<!--
This seems necessary. I don't see an easy path to household robots that are
not tested and evaluated extensively in simulation.

So simulation seems here to stay, but we need to make it more accurate.

This seems the only way to handle the great complexity and variety of the physical world.
-->

<!--
## Enabling technologies

There is massive value in developing enabling technologies---in ideas and artifacts that we can benefit from over and over again and that enable us to solve harder problems with less effort.
The most obvious, steady example in AI is improved computing hardware, which we keep benefitting from by [offloading
more work](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) to optimization processes.
Other examples include:
- Frameworks like TensorFlow and Pytorch, which help abstract away messy lower-level and hardware details, and let us focus on what matters for our work specifically.
- Ideas like Adam and batch norm, and architectures like Transformers, which let us train more powerful networks more effectively.
- Algorithms like PPO and SAC (especially if they have open source implementations), which let us build off and use for our own applications.
- Models and simulators (to the extent they are general and accurately approximate the true phenomena), which let us quickly iterate on ideas and validate systems.
- Benchmarks like ImageNet, which let us compare ideas head to head in a consistent way and let us realize which ideas and artifacts matter.
- Well-curated datasets (to the extent they are publicly available)<label for="sn-1" class="margine-toggle sidenote-number"/><input type="checkbox" id="sn-1" class="margin-toggle"/><span class="sidenote">
I am not bagging on proprietary datasets. It makes a lot of sense to keep data private due
to  hosting and distribution costs, legal issues, and ensuring you receieve compensation to cover both past and future monetary investments (which we hope indirectly help push the field forward).
But it is an interesting question of what the impact of open datasets wil be, and how they can be created.
For some pointers, Andrej has some recent [tweets](https://twitter.com/karpathy/status/1363973271717171200) [about](https://twitter.com/karpathy/status/1365511769255342084) this. [The Pile](https://pile.eleuther.ai/) looks like an interesting work in this space. Maybe something like [Numerai Signals](https://signals.numer.ai/)
could work, where users are compensated for providing their useful data.
</span>, which define what we can train a model to do (ie data is how you program Software 2.0).

It is hard to always predict what these are going to be and what the best way of going about developing them is.
But it seems worth thinking about how we can raise the waterline.

One particularly interesting and emerging class of such artifacts is learned models themselves.
Fine-tuned ImageNet weights are a primitive example of this, where users can solve solve a limited scope of transfer tasks on a smaller computational and data budget.
With more powerful and general unsupervised models like GPT-3, DALL-E, and CLIP, the scope of impact is going to be massive.

Learned simulators are a promising prospect here. If we can build a reusable tool by training models on real data,
and then we use it for training and evaluating on a wide variety of robotics tasks, this could
greatly accelerate progress in the field.

Learned simulators provide a good framing on how we might develop large predictive models in robotics, and in how we might raise the waterline for robot learning.
-->

<!--
- pre-train and fine-tune on imagenet
- use as eval metrics (FID)
- gpt3 something. write code, ideas, idk
- use as model to generate more data.
- use as model to collect data in.
- use to label or make consistent, idk.
We basically need better ways of sharing models and reusing them.
-->

## The Simulator of Tomorrow

Traditional simulators provide a nice conceptual blueprint for the future of learned simulators.
Traditional simulators are fairly general and reusable tools; they can be reprogrammed for many tasks; 
they have nice structure that enables us to interface with them and visualize 
their results in interpretable formats; they are built up from a central 
codebase, where effort and insights can pile up over time in a central place 
and compound, rather than needing to be constructed from scratch for each environment or task.

But traditional simulators are limited in many ways, and ultimately by introducing learned
components, we can go far beyond what they are currently capable of.
Beyond additional accuracy and variety, the Simulator of Tomorrow will be much easier to use and will enables things like:

<!--
I can't see any other way we are going to handle the
complexity and variety of the real world.
-->

**Automatic grounding.** Instead of defining YAML/XML files to specify all the details and possible things we want to vary over, we could naturally “prompt” the model to simulate what we want. It could absorb videos, still images, text, sound, technical drawings, robot specifications, meshes---any modality that we could encode with a neural network---and spit out a simulator description. We could film a quick video of our scene, with some robot specifications, command data and proprioception, and get out a calibrated and general simulation of the scene and the robot.

**Native rendering.** On the flip side of grounding is rich rendering coming directly from the model.
Instead of dealing with complex rendering APIs or designing custom visuals for effects like smoke or dust,
we could just query the model, and as long as it has sufficient video data of these effects, it could render them.

**Repeatability and controllability.** For training, we could induce specific 
and repeatable settings that we want our agent to practice, using natural 
interfaces (video, text).  We could debug our system by 
pulling in failures from the fleet, embedding similar scenarios in the simulator,
and creating behavioral unit and integration tests.

<!--
**Foresight and handling delays.** We could query a learned simulator for the action we are about to take. See what the future states are going to be.
These could become observations into the policy. And we could even deal with sensor delays. It doesn't matter if we don't get an observation right on
time. We can just use our prediction of what is going to happen.
-->

**Intelligent domain randomization.**
Because powerful generative models will have to model uncertainty in the environment, sampling them will yield something like intelligent domain randomization. Instead of randomizing over a bunch of wacky parameters, our model could be tuned to the underlying distribution and only give us variety we might actually see in the real world. For example, given a video of an opaque container, the model samples over the range of possible masses that could fit in the container.

**Differentiability.** Currently, the environment is a giant `stop_gradient` in the middle of our reinforcement learning computational graph.
In fact, it's even worse than a `stop_gradient`, since we usually have to call into a separate Python or C++ API.
Every other part of the system is learned and differentiable, so if we can
patch these issues, there is a lot of opportunity for cleaner designs and
perhaps more straightforward application of ideas from generative modeling.
Or just straight up supervised learning.
(Technically some of this is available today in certain differentiable simulators being developed, but those are still generally external software (not in a PyTorch/jax graph), 
and *more importantly*, they are upper bounded in accuracy by human engineering effort.)

**Keeping data local.** 
On a related note, by making the environment just another `nn.Module`, we never have to leave the compute graph or the accelerator.
To train our policy, we can just hook it straight up to the firehose of data coming from the model.
Resetting an environment is just a means of sampling from a new seed or prompt,
and we can easily generate many counterfactual outcomes from a single state.

<!--
we can apply more ideas from generative modeling directly, where the actions are just control variables and part of what we are generating over. Things become much cleaner.

There are actually many similarities between RL and generative modeling. We can look at DDPG as something
like a GAN where the Q-fucntion tells us the value of actions (discriminates) and the policy
tries to produce actions (generates). There are additional issues of exploration and stability,
but the stop_gradient makes RL much messier. We have to rely on either high variance REINFORCE type approaches (e.g., PPO),
or delayed learning of a Q-function (e.g., SAC) that we can push gradients back through.
(This applies equally well to the "world model" framing, like in Dreamer, but I mention it here for completeness.)
-->

**Code simplicity.** 
With traditional simulators (and Software 1.0 generally), the more features we support, 
the more complex and unwieldy it gets, both for development and usage.
For Software 2.0, improving accuracy is "just a matter" of scaling the size of the model, along with data and compute.
And for users of the simulator, the interface stays simple and we can use natural interfaces to program it (e.g., natural language like in OpenAI's API).
It's not a free lunch and this is not going to be trivial or cheap, but in the long run seems more manageable as our Software 2.0
tools develop and as Moore's Law runs for a few more cycles.

**Portability.** On another related note, learned simulators would have many fewer dependencies.
We just need to save the weights and model definition, and then we can load them anywhere that supports the floating point operation primitives.
We can deploy them in browser for interactivity, for example, or on any hardware that supports those ops.


<!--in fact: check it out. if i included boxlcd right here with a learned policy that would be freaking dope-->

**Sim2real Engine.** A learned simulator may enable a Sim2Real Engine,
where we iteratively bootstrap a system by: training models inside of the simulator, using those models to collect data in the real world, and using that data to train and improve the simulator. Rinse, repeat.

<!--
**Interpretability.** By having a central learned simulator that we build off, we could invest effort
in understanding it (like in [work from](https://distill.pub/2020/circuits/) [colah et al.](https://distill.pub/2020/understanding-rl-vision/)).
This could teach us stuff about the underlying systems we're modeling. And it could perhaps be a way to leverage
the model's representation to get the agent to do specific things. For example, if we can plug into the models
conception of the object it sees, we could perhaps use this to design tasks. Though natural language and other
approaches might be better.
-->

**Science and engineering applications.** A learned simulator may be useful to answer scientific questions and to use in an engineering design process.
It could offer a more repeatable and examinable model of the real world. We could study the dynamics of systems more easily.
We could plug in information like technical drawings and descriptions of new parts and observe how systems behave (similar to how simulators are used now, but in an easier automatic way).



<!--
They suggest a development path, and perhaps a better way to build up compounding progress over the years.

We can start in niche areas and build a tool that let's us control the environment
and prompt it and train agents inside of it.
And as we acquire more data, we can add this to our central pool and expand the frontier of what we develop.
We can create a central arc, or perhaps even a central "repository" that we build off and contribute to.
And the potential downstreams tasks could be large.

But basically developing this like we would develop a simulator, but extending the ideas to software 2.0.
That seems imaginable. And it seems a good way to build momentum.
-->

## Conclusion

The big question, then, is how are we going to build this?

My brief answer for now is: gradually.
I don't think we currently have the technology (compute and otherwise) to build and run a fully learned simulator in a way that is economically sustainable.
In the meantime, it seems like a good strategy to pick the low-hanging fruit where we can learn components of the simulator and incorporate them in the loop
for greater accuracy.  [Jemin et al.'s work on the Anymal](https://arxiv.org/abs/1901.08652) is probably my favorite example in this space right now.

<!--
And if we look to the history of computer vision at Tesla---an example
of an industry rather than academic or research setting. The way that has
worked is the gradual replacement of the traditional C++ stack with
learned components.




It's probably worthwhile thinking about this in much more depth, but for now my brief answer is: gradually.

If we don't have abundant teleoperation data available, we need some way to bootstrap capabilities from worse simulators and policies. This opens many further questions about how
to specify goals, learn human preferences, learn to take actions, and explore
as necessary to cover the space.

But if we do have the data (e.g., in self-driving cars)... creating a fully learned simulator would
still be extremely difficult and is probably out of reach with current technology.
I just haven't seen any super convincing results for general predictive video generation
(a key ingredient), and it seems like it will take quite a bit of compute.
I think it is important to watch the space, but my current sense is at least a few more years
out (3-5 at least maybe), before it would be super useful to go for end2end learned sim.
You can always pay more now for compute (the old [Xerox PARC addage](https://youtu.be/id1WShzzMCQ?t=3320)),
but the timing is important here and you could bleed all your money prematurely
if you jump the gun.

(This timing issue seems much more pressing in industry. In research,
you just do what you can and the results will probably be interesting no matter
what and that helps the field.
In industry, it actually has to work and be deployable and provide real value,
and that is much harder.)

For now, it probably makes sense to iteratively work on areas where learned 
components are relatively cheap and provide strict advantages over their 
engineered counterparts. 

Anyway, physical world AI work seems exciting going forward and I am always
excited to chat and learn more from others working on related topics.
-->

[defenseone]: https://www.defenseone.com/technology/2020/09/virtual-tools-built-air-forces-new-fighter-prototype/168505/ 
[popmech]: https://www.popularmechanics.com/military/aviation/a34043731/air-force-new-designation-e-series-aircraft/
[flightsim]: https://en.wikipedia.org/wiki/Flight_simulator

