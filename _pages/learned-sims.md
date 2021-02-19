---
layout: page
title: Learned Simulators
permalink: /robot/learned-sims/
---

# Learned Simulators

Traditional simulators are not flexible enough to handle deformability, material property changes, shattering, and strange artifacts like fire, paint, lightswitches and microwaves.
Eventually, we will need to learn our simulators basically from scratch, much more akin to how humans do.

The best simulators of the future will impose minimal but carefully architected inductive biases for efficient learning;
they will be flexible in what they can represent and in how they let you program them.


## Properties and uses

Here is my list of various framings, properties, and uses that learned simulators suggest, for how they might raise the water line:

**Reusable tool.** Traditional simulators are fairly general tools. They can be reprogrammed for many tasks. They have nice structure that enables you to interface with them and visualize their results in interpretable formats. 
Rather than constructing ah-hoc world models for each environment or agent, a learned simulator would aim to be more reusable. 

**Growing repository.** Simulators are also developed as codebases that grow and morph, but remain a central hub of development.
The analogue of a git repository for [Software 2.0](https://medium.com/@karpathy/software-2-0-a64152b37c35) is not clear yet,
but I think this is the type of thing you want to be thinking about to develop a reusable system.
It let's you pile up effort over time in a single place and compound effort more.

**Pushing hard on general accuracy.** To me, a general simulator also suggests pushing some level of accuracy, independent of a specific downstream task.
Of course you can't cover everything, and you will need to grow out from small niches early in development.
But given the challenge of learning accurate models, I think dedicated effort on improving accuracy would pay off in the long run.
And given the benefits of expanding the scope of coverage, I also think pushing hard on making the simulator more general will pay off.

**sim2real engine.** The development of learned simulators also suggests the idea of the "sim2real engine",
where you iteratively bootstrapping a learned simulator as follows: train models inside of the simulator, use those models to collect data in the real world, and use that data to train and improve the simulator. Rinse repeat for compounding progress.

**Grounding.** A learned simulator will be much easier to work and interface with. Instead of defining XML files to specify all the details and possible things we want to vary over, we can naturally “prompt” the model to simulate what we want. It can absorb videos, still images, text, sound, technical drawings, robot specifications, meshes---any modality that we can encode with a neural network. We can film a quick video of our scene, with some robot specifications, command data and proprioception, and we'll get a calibrated and general simulation of the scene and the robot.

**Rendering.** On the flip side of grounding is rich rendering and visualizing of different predictions.
We can visualize the effects of different objects in the scene, the uncertainty our model has, and how our robot will behave.
We can perhaps render different modalities, like feed in a visual scene and the model will be able to pull out the
scene geometry and likely meshes that correspond to a scene. 

**Repeatable and controllable.** For training, we can induce specific and repeatable settings that we want our agent to practice, by using a natural interface. We can use this for debugging our system, for example by pulling in information from the fleet about areas
we are failing and then embed similar scenarios in the simulator to create behavioral unit tests.

**Intelligent domain randomization.**
Because powerful generative models will have to model uncertainty in the environment, sampling them will give you intelligent domain randomization for free. Instead of randomizing over a bunch of wacky parameters, your model will be tuned to the underlying distribution and only give you variety you might actually see in the real world. For example the volume of water in an opaque waterbottle would be sampled from the range of 0.1-1.0kg mass,
while the see-through one would be targeted around 0.7kg, or whatever the water level happens to suggest.

<!--
**Interpretability.** By having a central learned simulator that we build off, we could invest effort
in understanding it (like in [work from](https://distill.pub/2020/circuits/) [colah et al.](https://distill.pub/2020/understanding-rl-vision/)).
This could teach us stuff about the underlying systems we're modeling. And it could perhaps be a way to leverage
the model's representation to get the agent to do specific things. For example, if we can plug into the models
conception of the object it sees, we could perhaps use this to design tasks. Though natural language and other
approaches might be better.
-->

**Science and engineering.** A learned simulator may be useful to answer scientific questions and to use in an engineering design process.
They offer a more repeatable and more examinable model of the real world. We could study the dynamics of systems more easily.
Or we could plug in information like technical drawings and descriptions of new parts and observe how systems behave (similar to how simulators are used now, but in an easier automatic way).



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
The most obvious, universal, and steady example is compute, which let's us offload work to optimization processes.
Other examples include:
- Frameworks like TensorFlow and Pytorch, which help abstract away messy lower-level and hardware details, and let us focus on what matters for our work specifically.
- Tricks like batch norm (though it's going out of fashion) and architectures like Transformers, which let us train networks more effectively.
- Algorithms like PPO and SAC (especially if they have open source implementations), which let us build off and use for our own applications.
- Models and simulators (to the extent they are general and accurately approximate the true phenomena), which let us quickly iterate on ideas and validate systems.
- Benchmarks like ImageNet, which let us compare ideas head to head in a consistent way and let us realize which ideas and artifacts matter.

In the future, trained models themselves are going raise the water line substantially.
Fine-tuning on ImageNet trained weights is the beginning of this. But with more powerful
and general unsupervised models like GPT-3, this is really going to take off.


**What are these models going to look like for robotics?**

Compared to world models, I think learned simulators provide a slightly better framing on [the problem](robot/future).

For robotics, learned simulators suggest a nice way to develop large predictive models,
and then package and leverage them.
We can draw analogies from what simulator systems are today, and how they might be developed in the future.
And I think we end up with a more promising path forward.