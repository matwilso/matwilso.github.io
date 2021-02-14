---
layout: post
title: "The Future of Robot Learning"
date: 2021-02-21
permalink: /robot-learning/future/
tags: robotics 
toc: true
toc_sticky: true
---


>What is the future of robot learning going to look like? What is going to enable us to create general purpose robots, that can, for instance, handle day-to-day household tasks like cooking, cleaning, and laundry?

The future is hard to predict in general, but one thing I think is fairly clear by now is that the future of robot learning is going to be dominated by huge, learned dynamics models. We are going to collect real world video, sensor, and motor command data and use this to train massive predictive models. These models are going to be extremely powerful, they are going to “understand” a surprising chunk of the world, and they are going to allow us to solve much more difficult tasks than we can today.

I see two slightly different angles on how this might come together: (1) model-based reinforcement learning w/ world models, and (2) sim2real w/ learned simulators.

{: class="table-of-content"}
* TOC
{:toc}

## Model-based RL and world models

<div style="text-align: center;"><em>It’s all about bits baby.</em></div>
<br>
The field of model-based reinforcement learning (MBRL) deals with leveraging predictive models of the environment to solve RL tasks. Often these models are learned from data, and in certain cases are considered an agent’s “world model”, somewhat akin to the mental model of the world that humans carry around in their heads.

The main argument today for using model-based RL (over model-free RL) is data efficiency. Fundamentally, if you can extract more useful bits of information from the environment per step of interaction, you should need fewer interactions. Algorithms like Dyna learn a dynamics model and then leverage it as a proxy environment to collect extra rollouts in, and algorithms like MuZero learn a latent dynamics model and then leverage it for planning ahead and distilling into the base policy.

Unfortunately, greater data efficiency often comes at the cost of complexity---in extra theory, lines of code, and moving parts of the algorithm. In MBRL, there are often more details to wrap your head around, more failure points, and more to debug. In practice, this reduces iteration speed and slows progress<label for="sn-1" class="margine-toggle sidenote-number"/>.
<input type="checkbox" id="sn-1" class="margin-toggle"/>
<span class="sidenote">
There’s a decent argument here that MBRL has seen overall less adoption in the past several years because of this: it’s just easier to reach for and modify something like PPO or SAC than it is to reach for an MBRL algo like Dreamer.
</span>
As in many engineered systems, the best part is no part.

There is, however, a point at which the value of a part becomes worth its extra complexity. Models in RL may not often reach that threshold today, but they will increasingly in the future. Unsupervised / predictive learning is the only way to get enough signal to train large enough and powerful enough neural networks. This argument has been made for several years by Hinton, and Lecun w/ the Cake. It has mostly been theoretical though; for several years, supervised learning was working extremely well and unsupervised learning *wasn’t*.

But the times have changed, really only in the last few years. I am now
much more bullish on the future of model-based RL---not due to any
recent spectacular MBRL results, but due to the empirical evidence
piling up in favor of unsupervised learning.
Models like GPT-3 and DALL-E prove the power of predictive training. They prove how much knowledge these systems can absorb at scale. They still have many flaws and shortcomings, but they are only the tip of the iceberg for what’s coming and what’s possible. If we extrapolate forward and imagine predictive models for video and robot sensors, this seems clearly how we are going to train a large part of a general purpose robot brain.

As babies, humans learn about basic concepts like gravity as our brains try to make constant predictions about what is normal and what isn’t<label for="sn-1" class="margine-toggle sidenote-number"/>.
<input type="checkbox" id="sn-1" class="margin-toggle"/>
<span class="sidenote">
It would be quite interesting to look at how the [sequencing of
when babies](/assets/papers/baillargeon_2004.pdf) [learn concepts](/assets/papers/baillargeon_2002.pdf) corresponds to when predictive
modeling systems learn the same concepts.
Maybe this can point to some inductive biases about babies that we should
be thinking about for developing machine learning systems that can
physically reason.
</span>
As adults, we are continually forced to adapt and refine our predictions, as we confront increasingly complex phenomena. Our models become very good. Humans look at the world and we understand it.

Robots look at the world and they effectively see static. ConvNets trained on classification or even segmentation, for example, can pick up on important features of the world and can acquire a surprising amount of knowledge, but their understanding is superficial compared to humans. They are not given the chance to acquire all of the information they need about the world to understand it.

In the end, I don’t think it’s going to require fundamentally new and complex processes that we currently “can’t even imagine” to endow networks with this information. Large scale predictive training will be sufficient and necessary to get powerful models that allow robots to see the world. These will provide the context and scaffolding to ground further supervision and human feedback in, and bring us much closer to solving the tasks we care about.

## Sim2real and learned sims

<div style="text-align: center;"><em>It’s all about Software 2.0 baby.</em></div>
<br>
The field of sim2real deals with training policies in simulation and then deploying them in the real world with little to no fine-tuning. Sim2real offers several advantages over real world training, in speed, safety, and environment read + write access.

Arguably, sim2real is the same idea as model-based learning. In sim2real, you just use a specific type of structured model: the simulator.


Through this lens, sim2real looks weaker. In MBRL, it’s common to learn models end2end with gradient descent. In sim2real, everyone uses fundamentally traditional simulators, with perhaps partially learned or hybrid components. There are trade-offs here---traditional simulators have nice structure, are general and reusable across tasks---but eventually the human engineering becomes the bottleneck that limits the complexity of environments we can handle.

Eventually, we need to learn our simulators basically from scratch, much more like how humans do. The world is too complex and traditional simulators are not flexible enough to handle it. Too often their assumptions are broken---with deformable objects, with material property changes, with shattering, with strange artifacts like fire, paint, lightswitches and microwaves---and eventually the structure becomes too burdensome. The best simulators of the future will impose fairly minimal structure with some inductive biases for efficient learning.

Robotics simulators should be mainly Software 2.0 systems, not 1.0 systems. If we zoom in on the process behind traditional 1.0 simulators: humans have spent years of domain specific effort, studying the physical world, distilling our knowledge into core principles and equations, and implementing these equations in computer programs. In the end, after a massive “real2sim2real” loop, at extreme cost in human science and engineering effort, we can train RL policies that operate in the real world. Ultimately, a learned simulator is just a better version of the this human-based loop, where the feedback loops are much quicker and neural networks are much better at dealing with the high-dimensionality (sys-id and dynamics) necessary to simulate the real world. Once learning is in place, learned simulators will require much less effort per incremental advance in performance. They’ll just consume data and compute and grow stronger.

(I think learned simulators provide a nice framing on the problem. I have more detailed thoughts here: for more of my thoughts on the details of learned simulators and the framing they provide, see: Learned Simulator)

## Conclusion

Model-based RL and sim2real give two perspectives on the role that massive predictive models will play in the future of robot learning. World models represent something akin to what humans have going on in their heads, and suggest that with predictive learning and simply more bits, we can build more intelligent agents. Learned simulators represent an extension of traditional human-engineered simulators to the era of Software 2.0, and suggest that we can build more general and reusable tools for training intelligent agents to handle the full complexity of the world.

World models and learned sims perhaps draw on different fields and suggest different paths of development. They may end up being largely the same thing, or they may diverge. But they seem to both suggest the value of predictive learning in robotics. As the base of the Cake, predictive learning seems like the most important part in some ways, or at least a major catalyst and context to ground and amplify the power of the other components (human supervision, RL signal). If you care about building general purpose robots, you should care about predictive modeling.

## References

If you’re excited by this stuff, there is some background that is useful to have and stay current on:
- **fundamentals in DL and Deep RL.** Karpathy’s DL course and OpenAI’s Spinning Up in Deep RL. I recommend doing the assignments, and messing with the RL algorithms and understanding why every single line is in the code.
- **model-based RL.** Igor Mordatch and Jessica Hamrick have a good tutorial on MBRL @ ICML 2020. I’d recommend that for a good overview. Also reading specific recent papers in the space. One I like is Dreamer, which learns a stochastic world model that handles uncertainty to some extent; it uses the model’s latent state as input to the policy and value networks; and it uses differentiable rollouts through the model for training. For me, it’s hard to say the results are really that much better than alternative algos, but it feels like it’s on the right path.
- **sim2real.** The sim2real Workshop @ RSS 2020 is solid (also see summary document). Also reading the recent work in the space. One I like Jemin Hwangbo et. al’s work on learning a network to model the series elastic actuator network on Anymal, and plugging this network into the simulator dynamics for sim2real learning; the real world results are impressive.
- **generative modeling / unsupervised learning.** Pieter Abbeel’s Deep Unsupervised Learning Course is a great course for fundamentals. I’ve been going through the course and implementing/transcribing the various models and training them on MNIST. Generative modeling is super important in this area, and it’s easier to study and build intuition if you don’t have to simultaneously deal with data collection and actions and exploration.
- **video prediction.** Pixels seem like the primary modality used to train world models and learned simulators, so this will be an especially important subset of generative modeling. Also many people are pushing on this for different reasons, so it will be good if we can draft off that work.
- **cloning simulators.** This body of work is taking existing physics simulation and cloning them (clean-rooming) with neural networks to run faster, basically. E.g., Learning to simulate complex physics with graph networks. While this only lets you get as good as the original simulation, there are likely good insights here in how to set up effective inductive biases and set up training. I think this is actually a decent path for getting traction in learned simulators.
- **case studies.** The development of language models have some lessons to draw on. Alec Radford gives a good talk on this for the Deep Unsupervised Learning Course. One thing is that maybe working on pushing on accuracy in isolation can help downstream learning (at 1:24:00 mark). Also large scale and production grade systems and studying how companies are sourcing large amounts of data (Tesla) and training and deploying huge models (OpenAI, Google).
- **infant cognitive development**. As alluded to in a sidenote, it seems useful to learn what we can from babies.
https://en.wikipedia.org/wiki/Developmental_psychology#Infant_perception
/assets/papers/baillargeon_2002.pdf
/assets/papers/baillargeon_2004.pdf



## Call to action
Ultimately, though, the best way to proceed is to get building.

TODO: finish writing this, not done yet.


And the best way to get building is to start small. Smaller problems and simpler systems allow for greater iteration speed and building up strong fundamentals and intuition.

In this vein (to plug my own work), I’m working on boxLCD, which is meant to be a toy playground for developing ideas and algorithms in this space, where you can run experiments on a single desktop machine with GPU. This is a simple 2D environment, but many things are likely to generalize from 2D → 3D → real world. If we think carefully about how to structure this thing. And if not, then the intuition and the practice and ability to iterate quickly will be worth it for the knowledge gained.

I think the compute is not quite there yet to build the grand version of this, but that we can work on the ideas and that it will become worth starting to pursue a system and lay down some capital if we can start building up progress here. Along with drafting off the progress in related areas like video prediction and generative modeling more generally.

And I think one thing to really note here is there is so much work left to be done. There are so many exciting things yet to happen in NNs and generative modeling and all of this. If you get in and work *very hard*, you can do well. And you need to work very hard to do well in any career. But choose this one, because it will be really exciting. Or go work on making compute really fast and that will help too. Ultimately that’s what enables all of this.


## FAQs

TODO
