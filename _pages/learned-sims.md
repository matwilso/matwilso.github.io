---
layout: page
title: Learned Simulators
permalink: /robot/learned-sims/
---

# Learned Simulators

(rough draft 🥴)

Eventually, we will need to learn our simulators basically from scratch, much more akin to how humans do. Rigid-body simulator are not flexible enough to handle deformability, material property changes, shattering, and strange artifacts like fire, paint, lightswitches and microwaves. The best learned simulators will impose fairly minimal structure. They will use inductive biases for efficient learning, but they will be flexible in what they can represent.

To me, the learned simulator seems to provide a nice framing of the problem in a way that suggests we can build up better compounding momentum over the years. It suggests how we might create a kernel that we can build off in many ways, rather than having to build components ad-hoc for each model we like to learn. We can gain momentum from piling resources and gradually building it up and using it along the way. We can aggregate all info there and make it reusable across tasks and you can use it as a software component to train robots along the way.

Then there are several interesting properties of the systems themselves that become clear when you look at this problem of learning predictive models in the framing of a simulator system.

**Tool building.** Simulators are pretty general tools. You can reprogram them for many tasks. They have nice structure that enables you to interface with them and see their results in interpretable formats. They are usable and reusable. I think framing the problem as seeking to build a tool like this that is generally useful and reusable for many tasks is a good way to go about things.

**Specific focus.** I also think having people solely dedicated to working on improving the simulator accuracy, independent from any downstream task would be beneficial. Like specific and very focused attention to this problem will lead to better simulators for downstream tasks. It seems there are many challenges that will require direct focus. This seems like it will be a complex and challenging new type of Software 2.0 that will require many challenges to be solved.

[Diagram of sim2real engine]

**Sim2real engine.** The sim2real engine is what I call the idea of iteratively bootstrapping a learned simulator as follows: train models inside of a simulator, use those models to collect data of the real world, and use that data to train and improve the simulator. Rinse repeat for compounding progress.

**Grounding.** A learned simulator will be much easier to work and interface with. Instead of defining XML files to specify all the details and possible things we want to vary over, we will be able to naturally “prompt” the model to simulate what we want. It will be able to absorb videos, still images, text, sound, technical drawings, robot specifications, meshes---any modality that you can encode with a neural network. You will be able to film a quick video of your scene, with some robot specifications, command data and proprioception, and you will get a calibrated and general simulation of the scene and the robot. If you develop this as a central tool, you could have good support for adding different modalities. Like a set of interfaces. Somebody works on adding a meshes interface, where you can then plug in meshes. And they can contribute this to the representation such that others can use it to improve predictions if they have meshes for their objects. Or like dealing with specific robots and their shape and actions. Basically different embedding tools. Or adding different modules for sensors or robots so that we could simulate them.

**Rendering.** On the flip side of grounding is rich rendering and visualizing of different predictions. It would be nice to invest in creating really good tools for letting you look ahead at what your agent is going to do. Testing the effects of different objects in the scene. Having very rich tools for understanding what the model could do.

**Repeatable and controllable.** For training you could induce specific and repeatable things that you want the agent to practice doing, by using the natural interface. You could create central tools for debugging your system and running formal tests to verify your robotics systems. You could pull in information from the fleet about areas you failed before and want to do well next time and embed them in the sim and have the agent practice the setting til it gets it right. Like super nice unit tests for learned systems.

**Intelligent domain randomization.** A successful learned simulator like this will need to be representing uncertainty. Any unknown variables in the scene, like the volume of water in an opaque waterbottle, will be variables that the simulator natively sampled over using the true distribution of possible values that the model has learned about during training. If the robot interacts with that environment and you get new information, you can plug it in to collapse the uncertainty naturally. Instead of random sampling over a wacky range of characteristics, just sample over the range that you might actually see in the world. It will be more accurate and narrow and you will only practice on possible worlds that actually look like the real world.

**Interpretability.** There are many possible benefits of centralizing. If you can learn good interpretive models. Like maybe you can plug into specific modules of the network that represent objects or something. For domain randomization, you could maybe visualize what properties are uncertain in the environment and then specify there values using any modalities you like, like robot collection or natural language. understanding what it learns. and seeing if that tells you things about the phenomena. 

**Science and engineering.** You can do science with it. you can maybe use it to answer scientific questions and engineering stuff by plugging in information like drawings and seeing how systems behave and you can then iterate. I think we will eventually study these systems to learn about the world. They will offer models of the dynamics of simple systems. We will be able to interpret them and understand properties of the world.
