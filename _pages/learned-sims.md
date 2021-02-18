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

## Perspectives

Compared to world models, learned simulators provide a few nice perspectives of the problem of [predictive learning in robotics](/robot/future),
in a way that suggests we can build up compounding progress over the years:

**Reusable tool.** Traditional simulators are fairly general tools. They can be reprogrammed for many tasks. They have nice structure that enables you to interface with them and visualize their results in interpretable formats. 
Rather than constructing ah-hoc world models for each environment or agent, a learned simulator should be reusable. 

**Specific focus.** Building a general simulator suggests that you dedicate focus to improve its accuracy, without a specific downstream
task in mind. I suspect that developing powerful predictive models will take very focused attention on improving accuracy, and
that it would be beneficial to dedicate some fraction of resources to solely pushing on accuracy (independent of downstream tasks).

**Sim2real engine.** The "sim2real engine" is what I call the idea of iteratively bootstrapping a learned simulator as follows: train models inside of the simulator, use those models to collect data in the real world, and use that data to train and improve the simulator. Rinse repeat for compounding progress.

## Properties and usees
Learned simulators also suggest several interesting properties and uses:

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


