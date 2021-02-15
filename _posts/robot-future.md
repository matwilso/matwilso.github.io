---
layout: post
title: "Future of Robot Learning"
date: 2021-02-22
permalink: /robot-learning/future/
tags: robotics 
toc: true
toc_sticky: true
---


>What is the future of robot learning going to look like? What is going to enable us to create general purpose robots, that can do things like household cooking, cleaning, and laundry?

The future is hard to predict in general, but one thing which seems fairly clear now is that the future of robot learning is going to be dominated by huge, learned dynamics models. We are going to collect real world video, sensor, and motor command data and use this to train massive predictive models. These models are going to be extremely powerful, they are going to “understand” a surprising chunk of the world, and they are going to allow us to solve much more difficult tasks than we can today.

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

There is, however, a point at which the value of a part becomes worth its extra complexity. Models in RL may not often reach that threshold today, but they will increasingly in the future. Unsupervised / predictive learning will be the only way to get enough signal to train large enough and powerful enough neural networks. This argument has been made for several years by Hinton, and Lecun w/ the Cake. It has mostly been theoretical though---for several years, supervised learning was working extremely well and unsupervised learning *wasn’t*.

In the last few years, I am much more bullish on the future of model-based RL, not due to any
recent spectacular MBRL results, but due to the empirical evidence
piling up in favor of unsupervised learning.
Models like GPT-3 and DALL-E prove the power of predictive training. They prove how much knowledge these systems can absorb at scale. Of course, they still have many flaws and shortcomings, but they are only the tip of the iceberg for what’s coming and what’s possible. If we extrapolate forward and imagine predictive models for video and robot sensors, this seems clearly how we are going to train a large part of a general purpose robot brain.

As babies, humans learn about basic concepts like gravity as our brains try to make constant predictions about what is normal and what isn’t<label for="sn-1" class="margine-toggle sidenote-number"/>.
<input type="checkbox" id="sn-1" class="margin-toggle"/>
<span class="sidenote">
Because you can't exactly ask a baby what physics it understands, [infant cognitive development](https://en.wikipedia.org/wiki/Developmental_psychology#Infancy)
researchers instead often test "violation of expectation", where they
give babies a normal control scenario and an impossible physics scenario (e.g., an unsupported block that falls vs. an unsupported block that magically floats),
and test whether the babies look longer at the impossible physics sceneraio.
If babies look longer on average at the impossible physics, this suggests it 
surprised them---that it's breaking their world model in some way.
(review papers from: [2002](/assets/papers/baillargeon_2002.pdf), [2004](/assets/papers/baillargeon_2004.pdf))
</span>
As adults, we are continually forced to adapt and refine our predictions, as we confront increasingly complex phenomena. Our models become very good. Humans look at the world and we understand it.

On the other hand, robots look at the world and they effectively see static. ConvNets trained on classification or even segmentation, for example, can pick up on important features of the world and can acquire a surprising amount of knowledge, but their understanding is extremely superficial compared to humans.
This is because they are not given the chance to acquire all of the information they need about the world to understand it.

In the end, I don’t think it’s going to require fundamentally new and complex processes that we currently “can’t even imagine” to endow networks with this information. Some form of large scale predictive training (roughly like GPT-3/DALL-E) will be sufficient and necessary to get powerful models that allow robots to see the world. These will provide the context and scaffolding to ground further supervision and human feedback in, and bring us much closer to solving the hard tasks we care about.

## Sim2real and learned sims

<div style="text-align: center;"><em>It’s all about Software 2.0 baby.</em></div>
<br>
The field of sim2real deals with training policies in simulation and then deploying them in the real world with little to no fine-tuning. Sim2real offers several advantages over real world training, in speed, safety, and environment read + write access.

Arguably, sim2real is the same idea as model-based learning. In sim2real, you just use a specific type of structured model: the simulator.


Through this lens, sim2real looks weaker. In MBRL, it’s common to learn models end2end with gradient descent. In sim2real, everyone uses fundamentally traditional simulators, with perhaps partially learned or hybrid components. There are trade-offs here---traditional simulators have nice structure, are general and reusable across tasks---but eventually the human engineering becomes the bottleneck that limits the complexity of environments we can handle.

Eventually, we need to learn our simulators basically from scratch, much more like how humans do. The world is too complex and traditional simulators are not flexible enough to handle it. Too often their assumptions are broken---with deformable objects, with material property changes, with shattering, with strange artifacts like fire, paint, lightswitches and microwaves---and eventually the structure becomes too burdensome. The best simulators of the future will impose fairly minimal structure with some inductive biases for efficient learning.

Robotics simulators should be mainly Software 2.0 systems, not 1.0 systems. If we zoom in on the process behind traditional 1.0 simulators: humans have spent years of domain specific effort, studying the physical world, distilling our knowledge into core principles and equations, and implementing these equations in computer programs. In the end, after a massive “real2sim2real” loop, at extreme cost in human science and engineering effort, we can train RL policies that operate in the real world. Ultimately, a learned simulator is just a better version of the this human-based loop, where the feedback loops are much quicker and neural networks are much better at dealing with the high-dimensionality (sys-id and dynamics) necessary to simulate the real world. Once learning is in place, learned simulators will require much less effort per incremental advance in performance. They’ll just consume data and compute and grow stronger.

(For a more detailed discussion of learned simulators and the framing they provide beyond world models, see my [dedicated post on them].)

## Conclusion

Model-based RL and sim2real give two perspectives on the role that massive predictive models will play in the future of robot learning. World models represent something akin to what humans have going on in their heads, and suggest that with predictive learning and simply more bits, we can build more intelligent agents. Learned simulators represent an extension of traditional human-engineered simulators to the era of Software 2.0, and suggest that we can build more general and reusable tools for training intelligent agents to handle the full complexity of the world.

World models and learned sims perhaps draw on different bodies of work and suggest different paths of development. They may diverge, or they may end up being largely the same thing. But they both suggest the value of predictive learning in robotics. As the base of the Cake, they seem like the most important part in some ways, or at least a major catalyst and context to ground and amplify the power of the other components (human supervision, RL signal).
If you care about building general purpose robots (and useful AI systems in general), you should probably care about predictive modeling.

## References

If you do care about this stuff, there is some background that is useful to have and stay current on:
- **fundamentals in DL and Deep RL.** [Karpathy’s DL course](https://cs231n.github.io/) and [OpenAI’s Spinning Up in Deep RL](https://spinningup.openai.com/). I recommend doing the assignments, and messing with the RL algorithms and understanding why every single line is in the code.
- **model-based RL.** Igor Mordatch and Jessica Hamrick have a good tutorial on [MBRL @ ICML 2020](https://sites.google.com/view/mbrl-tutorial). I’d recommend that for a good overview. Also reading specific recent papers in the space. One I like is Dreamer, which learns a stochastic world model that handles uncertainty to some extent; it uses the model’s latent state as input to the policy and value networks; and it uses differentiable rollouts through the model for training. I wouldn't say the results are really that much better than alternative algos, but it feels like it’s on the right path.
- **sim2real.** The [sim2real Workshop @ RSS 2020](https://sim2real.github.io/) is solid ([summary document](https://twitter.com/sim2realAIorg/status/1336364134510678017)). Also reading the recent work in the space. One I like [Jemin Hwangbo et. al’s work](https://arxiv.org/abs/1901.08652) on learning a network to model the series elastic actuator network on Anymal, and plugging this network into the simulator dynamics for sim2real learning. The real world results are impressive.
- **generative modeling / unsupervised learning.** [Pieter Abbeel’s Deep Unsupervised Learning Course](https://sites.google.com/view/berkeley-cs294-158-sp20/home) is a great course for fundamentals. I’ve been going through the course and implementing/transcribing the various models and training them on MNIST. Generative modeling is super important in this area, and it’s easier to study and build intuition if you don’t have to simultaneously deal with data collection and actions and exploration.
- **video prediction.** Pixels seem like they will be the primary modality used to train world models and learned simulators, so this will be an especially important subset of generative modeling. Also, there are many people pushing on this for different reasons, so it will be good if we can draft off that work.
- **cloning simulators.** This research takes existing physics simulation and clones them ([clean-rooms](https://en.wikipedia.org/wiki/Clean_room_design)) with neural networks to run faster, basically. E.g., [Learning to simulate complex physics with graph networks](https://sites.google.com/view/learning-to-simulate). While this only lets you get as good as the original simulation, there are likely good insights here in how to set up effective inductive biases and set up training. I think this is actually a decent path for getting traction in more fully learned simulators.
- **case studies.** The development of language models have some lessons to draw on. [Alec Radford gives a good talk](https://youtu.be/BnpB3GrpsfM) on this for the Deep Unsupervised Learning Course. One thing is that maybe working on pushing on accuracy in isolation can help downstream learning (at [1:24:00 mark](https://youtu.be/BnpB3GrpsfM?t=5041)). Also large scale and production grade systems and studying how companies are sourcing large amounts of data (Tesla) and training and deploying huge models (OpenAI, Google, etc.).
- **infant cognitive development**. [Reviews on physical](/assets/papers/baillargeon_2002.pdf) [reasoning in infants](/assets/papers/baillargeon_2004.pdf). It also seems useful to draw from biological inspiration and see learn what we can from babies.
It would be quite interesting to look at how the [sequencing of
when babies](/assets/papers/baillargeon_2004.pdf) [learn concepts](/assets/papers/baillargeon_2002.pdf) corresponds to when predictive
modeling systems learn the same concepts.
Maybe this can point to some inductive biases about babies that we should
be thinking about for developing machine learning systems that can
physically reason.  Maybe there is some violation of expectation equivalent we can use for our models.
Or maybe this road both ways, and we can introspect our systems more than we can babies, and provide
some insight to cognitive development researchers.
- **yann lecun and self-supervised learning.** [His podcast with Lex is good, and his recent talks can probably offer insight on this area as well](https://www.youtube.com/results?search_query=yann+lecun)

## Call to action
Ultimately, though, the best way to proceed is to get building.

And the best way to get building is to start small.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Because deep learning is so empirical, success in it is to a large extent proportional to raw experimental throughput - the ability to babysit a large number of experiments at once, staring at plots and tweaking/re-launching what works. This is necessary, but not sufficient.</p>&mdash; Andrej Karpathy (@karpathy) <a href="https://twitter.com/karpathy/status/1350503355299205120?ref_src=twsrc%5Etfw">January 16, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Smaller problems and simpler systems allow for greater iteration speed and building up strong fundamentals and intuition about a problem.
It's best if you can get first hand experience building systems and working on the nitty gritty details of making these systems run.
And for this, you want to choose small problems because they will let you train in a few hours on a desktop machine, rather than weeks on a cluster (which is eventually necessary).

To plug my own current work in this space, I'm building something that I guess you could think of like an MNIST scaled version of
world modeling / learned simulators, called boxLCD.
It's meant to be a toy playground for developing ideas and algorithms in this space, where you can run experiments on a single desktop machine with GPU. 
It uses box2D physics and very low resolution, binarized images for rendering, and it tries to capture as much structure of the full real world learned simulator / world model problem
as possible, while remaining much quicker and easier to run experiments and iterate ideas on.
It's unlikely that the specific ideas developed in this playground will scale all that well, but it seems like a
good area to get started and develop intuition and general ideas. And if we can't solve something of this scale,
how can we expect to solve something of larger scale.
So yeah, you can probably think of something like an MNIST for predictive modeling in robotics.
For more details, see the repo.

I think the compute is not quite there yet to build the grand version of learned simulators or world models, but that we can work on the ideas and that it will become worth starting to pursue a system and lay down some capital if we can start building up progress here. Along with drafting off the progress in related areas like video prediction and generative modeling more generally.

And I think one thing to really note here is there is so much work left to be done. There are so many exciting things yet to happen in NNs and generative modeling and all of this. If you get in and work *very hard*, you can do well. And you need to work very hard because that happens to be what it takes to make progress and get shit done
on anything challenging. But this seems like an exciting area.

Alternatively, go work on making compute faster. Ultimately that’s what is going to enable this.

## FAQs

Kind of just looser thoughts that didn't fit in the main body and that people
can read a la cartea as they are interested.

(still a bit of a work in progress)
TODO: add table of contents for this specifically

<div class="faq">Is it even possible to build world models and/or learned simulators?</div>
Humans give an example that this type of knowledge can be learned. And generative models (VAEs, GANs, etc) give an example that machine systems can go beyond humans in pixel perfect generating of images. Humans can’t just generate realistic looking images in pixel perfect space. Only a select view can do something like this with digital art tools and it takes along time. Generative models point to something that can go far beyond human abilities in this space. And it is just a matter of how far. Hint: it’s going to be pretty far.

<div class="faq">Money?</div>
This is going to take lots of money to create. And so you maybe want to be able to capitalize on it by licensing it. I can also see an open sourced / crowd-sourced version being potentially viable, at least as a weaker version of what the top companies have.
Maybe you benefit more from not licensing or releasing and using the simulator
to create some other end-user product.
(It's actually hard for me to imagine in detail how development is going to work. And it does make it seem like a massive endeavor. Probably starting in niches and expanding from there. Then as you build momentum, you will have the resources to build this system in a way that actually seems possible. In the meantime, doing the R&D and pushing on these ideas seems useful so we are ready when the full vision becomes possible.)

<div class="faq">Timing?</div>
In general, it's especially hard to predict the [timing](https://www.gwern.net/Timing) of future events.
But Moore’s law is probably the best guideline here. I think this is mostly a question of compute.
We will be developing the ideas and algorithms along the way, but compute is what is going to enable this.
Given that, if we assume that we are using videos instead of text, how much more computational and information processing do we expect to have to do?
video requires much more bit processing, but also there is much redundancy in videos both spatially and temporally. You can see this by how much youtube can compress a video.
So there are likely some tricks we can use to benefit from this. Maybe some scheme where we only encode differences from the expectation. And somehow benefit from this during training.
I probably ought to do a back of the envelope calculation for how much more intensive video is at some point.

<div class="faq">Followup: on Timing?</div>
Sure MBRL and models are likely to win out in the long run. But when is the long run? Does it matter? Like what if you are trying to get results today.

You probably want to do a bit of both, short-term and long-term work.
But I think the long run bet is good, especially the earlier in your
career you are. It gives you time to position yourself and benefit from some compounding.
And the thing about the future is that it eventually happens. It eventually is no longer “the future”, but the experience of today. And if you are not sufficiently prepared, you don’t fare as well.

<div class="faq">Where is the data going to come from?</div>
internet, gopros, and robots maybe.

I imagine you can scrape a lot, then you could pay people to film
themselves doing specific tasks (like cooking) for relatively cheap ($10/hr?) compared to training run costs, and then you will need robot interaction data. 
But you can perhaps get pretty far without needing robot interaction data.
Then you just use that to plug in / calibrate the robot to your simulator or whatever.

<div class="faq">What is the model going to look like exactly?</div>
single-step vs. [gamma-model](https://people.eecs.berkeley.edu/~janner/gamma-models/) type thing vs. contrastive loss vs. autoregressive vs. latent variable?

I think gamma models might make sense for a world model. It seems like humans don't reason 
about what is going to happen at every specific tick.
They imagine if the world is in state X and I am going to do Y, then
what is likely to be the state of the world at some unexact time in
the near future. They can know how to throw a ball to reach a target, without having to go
through all the explicit reasoning about the trajectory. Something like that.

For learned simulators, you may need mostly single step modeling to
account for inputs at every step.
Maybe there is a way to incorporate something like a gamma model, but I
don't see quite how yet.


<div class="faq">What else is going to matter in the future?</div>
I focused on predictive modeling, but that is only one aspect of the problem.
Over time, I might develop this post more to cover the other aspects.
But to start, this is what I focus on because I've been thinking a lot about it.

probably learning from humans and human demos will matter. i somewhat doubt teleoperation becoming big, like it is a lot of the fuel for telsa autonomy. people don’t teleop robots at scale really. not in households. it seems like it likely be cheaper and easier to hire manual labor than to teleop a less reliable robot from somewhere else. that is just really hard to get right.

i think predictive models will enable these other things and make them easier.



<div class="faq">Data curation?</div>
Data curation will be important. Just like it really is for SL. In USL, it will be as well. You don’t have to be as strict. But you will want to curate the dataset to make sure it is
balanced and interesting.
