---
layout: post
title: "Learned Simulators"
date: 2021-02-22
permalink: /learned-sims/
tags: robotics 
---

> This post represents some of my thoughts on **learned simulators**. It is a spin-off from my other post on [The Future of Robot Learning](/robot-future), which provides some more contextualization.

Traditional simulators are not flexible enough to handle the full complexity of the world---things like deformability, material property changes, shattering, and strange artifacts like fire, paint, lightswitches and microwaves.
Eventually, we will need to learn our simulators basically from scratch, much more akin to how humans do.

The best simulators of the future will impose minimal but carefully architected inductive biases for efficient learning;
they will be flexible in what they can represent and in how they let you program and interact with them.

## Setting the stage

I believe what actually brings a field forward are the ideas and artifacts that raise the waterline. Those things that we end
up benefitting from over and over again and that enable us to solve harder problems with less effort.
The most obvious, universal, and steady example in AI is compute, which we keep benefitting from by [offloading
more work](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) to optimization processes.
Other examples include:
- Frameworks like TensorFlow and Pytorch, which help abstract away messy lower-level and hardware details, and let us focus on what matters for our work specifically.
- Tricks like batch norm and architectures like Transformers, which let us train networks more effectively.
- Algorithms like PPO and SAC (especially if they have open source implementations), which let us build off and use for our own applications.
- Models and simulators (to the extent they are general and accurately approximate the true phenomena), which let us quickly iterate on ideas and validate systems.
- Benchmarks like ImageNet, which let us compare ideas head to head in a consistent way and let us realize which ideas and artifacts matter.
- Well-curated datasets (to the extent they are publicly available)<label for="sn-1" class="margine-toggle sidenote-number"/><input type="checkbox" id="sn-1" class="margin-toggle"/><span class="sidenote">
Some examples of datasets which could raise the waterline in their domains if released are Tesla's fleet data,
Google's JFT, OpenAI's 200M+ text-image pairs. However, there are many reasons they are kept proprietary:
there's hosting and distribution costs, legal issues, and there's keeping the lights on; companies
need to receieve compensation to cover both past and future monetary investments.
But it is an interesting question of what the impact of open datasets wil be, and how they can be created.
For some pointers, Andrej has some recent [tweets](https://twitter.com/karpathy/status/1363973271717171200) [about](https://twitter.com/karpathy/status/1365511769255342084) this. [The Pile](https://pile.eleuther.ai/) looks like an interesting work in this space. Maybe something like [Numerai Signals](https://signals.numer.ai/)
would work, where users are compensated for providing their useful data.
</span>, which define what we can train a model to do. (ie data is how you program Software 2.0.)

Work on these types of waterline-raising ideas and artifacts is extremely impactful.
But it is hard to always say what these are going to be and what the best way of going
about developing them is.


One interesting and emerging class of such artifacts is learned models themselves.
Fine-tuning on ImageNet trained weights is a primitive example of this, where
people can solve solve a limited scope of transfer tasks on a smaller computational and data budget.
With more powerful and general unsupervised models like GPT-3, it's likely that large learned models themselves will
start raising the waterline for many more domains we care about. 
Learned simulators are a promising prospect here.

## Learned simulators

Learned simulators seem to provide a good framing on how we might develop large predictive models in robotics, and in how we might raise the waterline for robot learning.

First, traditional simulators suggest a few perspectives:

**Reusability and generality.**  Traditional simulators are fairly reusable tools. They can be reprogrammed for many tasks. They have nice structure that enables you to interface with them and visualize their results in interpretable formats. 
They are built up from a central codebase, where effort and insights can pile up over time in a central place and compound.
Rather than constructing ah-hoc world models for each environment or agent, our systems should aim to be more reusable and general.

**Accuracy.** Simulators are useful to the extent they accurately model the world. I think dedicated effort, somewhat independent of task, is likely to pay off in the the long run---given the large challenge of learning good models.

Ultimately, though, learned simulators will go far beyond traditional simulators and this is where prospects become interesting:

**Grounding.** A learned simulator will be much easier to work with and interface with. Instead of defining XML files to specify all the details and possible things you want to vary over, you could naturally “prompt” the model to simulate what you want. It could absorb videos, still images, text, sound, technical drawings, robot specifications, meshes---any modality that you could encode with a neural network---and spit out a simulator description. You could film a quick video of your scene, with some robot specifications, command data and proprioception, and get out a calibrated and general simulation of the scene and the robot.

**Rendering.** On the flip side of grounding is rich rendering and visualizing of different predictions.
You could visualize the effects of different objects in the scene, the uncertainty your model has, and how your robot will behave.

**Differentiability.** Currently, the environment is a giant stop_gradient in the middle of your reinforcement learning computational graph.
Every other part of the system is learned and differentiable. 
If you can patch this stop_gradient, it seems there is great opportunity for cleaner and more free design decisions.
It may enable more straightforward application of ideas from generative modeling.
(Technically this is available today in certain differentiable simulators being developed, but those are external software (not in your PyTorch graph), 
and they are ceiling-ed by human engineering.)

<!--
we can apply more ideas from generative modeling directly, where the actions are just control variables and part of what we are generating over. Things become much cleaner.

There are actually many similarities between RL and generative modeling. You can look at DDPG as something
like a GAN where the Q-fucntion tells you the value of actions (discriminates) and the policy
tries to produce actions (generates). There are additional issues of exploration and stability,
but the stop_gradient makes RL much messier. You have to rely on either high variance REINFORCE type approaches (e.g., PPO),
or delayed learning of a Q-function (e.g., SAC) that you can push gradients back through.
(This applies equally well to the "world model" framing, like in Dreamer, but I mention it here for completeness.)
-->

**Repeatability and controllability.** For training, you could induce specific and repeatable settings that you want your agent to practice, using a natural interface. You could use this for debugging your system, for example by pulling in information from the fleet about areas
the agents are failing and then embedding similar scenarios in the simulator to create behavioral unit tests. (Part of this applies to traditional simulators as well, but learned simulators greatly reduce the friction here.)

**Intelligent domain randomization.**
Because powerful generative models will have to model uncertainty in the environment, sampling them will yield something like intelligent domain randomization. Instead of randomizing over a bunch of wacky parameters, your model could be tuned to the underlying distribution and only give you variety you might actually see in the real world. For example, given a video of an opaque container, the model samples over the range of possible masses that could fit in the container.

**Sim2real Engine.** A learned simulator may enable a Sim2Real Engine,
where you iteratively bootstrap a system by: training models inside of the simulator, using those models to collect data in the real world, and using that data to train and improve the simulator. Rinse, repeat.

<!--
**Interpretability.** By having a central learned simulator that we build off, we could invest effort
in understanding it (like in [work from](https://distill.pub/2020/circuits/) [colah et al.](https://distill.pub/2020/understanding-rl-vision/)).
This could teach us stuff about the underlying systems we're modeling. And it could perhaps be a way to leverage
the model's representation to get the agent to do specific things. For example, if we can plug into the models
conception of the object it sees, we could perhaps use this to design tasks. Though natural language and other
approaches might be better.
-->

**Science and engineering applications.** A learned simulator may be useful to answer scientific questions and to use in an engineering design process.
It could offer a more repeatable and examinable model of the real world. You could study the dynamics of systems more easily.
You could plug in information like technical drawings and descriptions of new parts and observe how systems behave (similar to how simulators are used now, but in an easier automatic way).



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

