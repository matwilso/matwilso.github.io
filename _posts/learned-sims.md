---
layout: post
title: "Learned Simulators"
date: 2021-02-22
permalink: /learned-sims/
tags: robotics 
---

Traditional simulators are not flexible enough to handle deformability, material property changes, shattering, and strange artifacts like fire, paint, lightswitches and microwaves.
Eventually, we will need to learn our simulators basically from scratch, much more akin to how humans do.

The best simulators of the future will impose minimal but carefully architected inductive biases for efficient learning;
they will be flexible in what they can represent and in how they let you program them.

## Properties and uses

Here is my list of various perspectives, properties, and uses that learned simulators suggest, for how they might raise the waterline in robotics:

**Reusable tool.** Traditional simulators are fairly general tools. They can be reprogrammed for many tasks. They have nice structure that enables you to interface with them and visualize their results in interpretable formats. 
Rather than constructing ah-hoc world models for each environment or agent, a learned simulator would aim to be more reusable. 

**Growing repository.** Simulators are implemented in code that constantly morphs, but constantly builds up as a repository.
What is the analogue of a git repository for [Software 2.0](https://medium.com/@karpathy/software-2-0-a64152b37c35)?
It's not yet obvious, but it seems like an important question to answer. You want to find some way to pile up effort over time in a central place,
so it compounds. You want to be able to build this thing up iteratively, to make updates on the architecture and the data and the training,
while remaining stable for whatever current uses you have.

**Sim2real Engine.** A learned simulator suggests the idea of a Sim2Real Engine,
where you iteratively bootstrapping the system as follows: train models inside of the simulator, use those models to collect data in the real world, and use that data to train and improve the simulator. Rinse repeat for compounding progress.

**Accuracy.** To me, the simulator framing suggests pushing raw accuracy. I think dedicated effort, somewhat independent of task, is likely to pay off in the the long run---given the large challenge of learning good models.

**Generality.** It also suggests expanding the scope of the domains you try to model. Of course you can't cover everything, and you will need to grow out from small niches early in development. But given the benefits of covering more domains with a single system, I also think pushing hard on making the simulator more general will pay off.

**Grounding.** A learned simulator will be much easier to work with and interface with. Instead of defining XML files to specify all the details and possible things you want to vary over, you could naturally “prompt” the model to simulate what you want. It could absorb videos, still images, text, sound, technical drawings, robot specifications, meshes---any modality that you could encode with a neural network---and spit out a simulator description. You could film a quick video of your scene, with some robot specifications, command data and proprioception, and get out a calibrated and general simulation of the scene and the robot.

**Rendering.** On the flip side of grounding will be rich rendering and visualizing of different predictions.
You could visualize the effects of different objects in the scene, the uncertainty your model has, and how your robot will behave.
You could translate between modalities, like feed in tactile data and build a partial visual representation of the world from that, or a
partial mesh.

**Repeatability and controllability.** For training, you could induce specific and repeatable settings that you want your agent to practice, by using a natural interface. You could use this for debugging your system, for example by pulling in information from the fleet about areas
you are failing and then embed similar scenarios in the simulator to create behavioral unit tests.

**Intelligent domain randomization.**
Because powerful generative models will have to model uncertainty in the environment, sampling them could yield intelligent domain randomization. Instead of randomizing over a bunch of wacky parameters, your model could be tuned to the underlying distribution and only give you variety you might actually see in the real world. For example, given a video of an opaque container, the model samples over the range of possible masses that could fit in the container.

<!--
**Interpretability.** By having a central learned simulator that we build off, we could invest effort
in understanding it (like in [work from](https://distill.pub/2020/circuits/) [colah et al.](https://distill.pub/2020/understanding-rl-vision/)).
This could teach us stuff about the underlying systems we're modeling. And it could perhaps be a way to leverage
the model's representation to get the agent to do specific things. For example, if we can plug into the models
conception of the object it sees, we could perhaps use this to design tasks. Though natural language and other
approaches might be better.
-->

**Science and engineering.** A learned simulator may be useful to answer scientific questions and to use in an engineering design process.
They could offer a more repeatable and more examinable model of the real world. You could study the dynamics of systems more easily.
Or you could plug in information like technical drawings and descriptions of new parts and observe how systems behave (similar to how simulators are used now, but in an easier automatic way).



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

## Framing

**What actually brings a field forward?**

I believe it is the ideas and artifacts that raise the water level---that enable researchers and practitioners to do with more with less,
*over and over again*.
The most obvious, universal, and steady example is compute, which let's us gradually offload more work to [optimization processes](http://www.incompleteideas.net/IncIdeas/BitterLesson.html).
Other examples include:
- Frameworks like TensorFlow and Pytorch, which help abstract away messy lower-level and hardware details, and let us focus on what matters for your work specifically.
- Tricks like batch norm (though it's going out of fashion) and architectures like Transformers, which let us train networks more effectively.
- Algorithms like PPO and SAC (especially if they have open source implementations), which let us build off and use for your own applications.
- Models and simulators (to the extent they are general and accurately approximate the true phenomena), which let us quickly iterate on ideas and validate systems.
- Benchmarks like ImageNet, which let us compare ideas head to head in a consistent way and let us realize which ideas and artifacts matter.

In the future, trained models themselves are going raise the waterline substantially.
Fine-tuning on ImageNet trained weights is the beginning of this. But with more powerful
and general unsupervised models like GPT-3, this is really going to take off.


**What are these models going to look like for robotics?**

Compared to world models, I think learned simulators provide a slightly better framing on [the problem](/robot-future).

For robotics, learned simulators suggest a nice way to develop large predictive models,
and then package and leverage them.
We can draw analogies from what simulator systems are today, and how they might be developed in the future.
And I think we end up with a more promising path forward.