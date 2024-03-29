---
layout: post
title: "The Future of Robot Learning"
date: 2021-02-22
permalink: /robot-future/
tags: robotics 
toc: true
toc_sticky: true
---

<!--
>What is the future of robot learning going to look like? What is going to enable us to create general purpose robots, that can do things like household cooking, cleaning, and laundry?
-->

<div style="margin-left: 2em; font-style: italic;">
"For some years I set aside Friday afternoons for 'great thoughts'...
I found it was well worth the 10% of my time to do this careful examination of where computing was heading
so I would know where we were going and hence could go in the right direction... I could also keep a sharp eye on
the important problems and see that my major effort went to them." - Richard Hamming (<a href="/assets/papers/hamming_research_stripe.pdf">You and Your Research</a>)
</div><br/>

<!--To me, it seems that robot learning is heading towards the use of large learned dynamics models.-->

It seems likely that robot learning is going to be dominated by unsupervised learning and the use of large, learned dynamics models. 
In the future, we'll be collecting massive amounts of real world video, sensor, and motor command data, and using this to train massive predictive models. These models will be extremely powerful, they'll “understand” a surprising chunk of the world, and they'll allow us to solve much more difficult tasks than we can today.

I can see two angles on how this might come together: (1) model-based reinforcement learning w/ world models, and (2) sim2real learning w/ [learned simulators](/learned-sims).

{: class="table-of-content"}
* TOC
{:toc}

## Model-based RL and world models

<div style="text-align: center;"><em>It’s all about bits baby</em></div>
<br>
The field of model-based reinforcement learning (MBRL) deals with leveraging predictive models of the environment to solve RL tasks. Often these models are learned from data, and can be considered an agent’s “world model”, akin to the mental model of the world that humans carry around in their heads.

The main argument today for using model-based RL (over model-free RL) is data efficiency. If you can extract more useful bits of information from the environment per step of interaction, you should need fewer interactions. Algorithms like Dyna achieve this by learning a dynamics model and then leveraging it as a proxy environment to collect extra rollout steps in, and algorithms like MuZero learn a latent dynamics model and then leverage it for planning ahead and distilling the outcomes of a search process to iteratively bootstrap a learned policy.

Unfortunately, greater data efficiency in MBRL often comes at the price of complexity. Model-based RL comes with extra theory to wrap your head around and extra moving parts to tune, train, and debug. Extra complexity tends to reduce iteration speed and slow progress<label for="sn-1" class="margine-toggle sidenote-number"/>.
<input type="checkbox" id="sn-1" class="margin-toggle"/>
<span class="sidenote">
There’s a decent argument here that MBRL has seen overall less adoption in the past several years because of this: it’s just easier to reach for and modify something like PPO or SAC than it is to reach for an MBRL algo like Dreamer, for example.
</span>
As in many systems, [the best part is no part](https://twitter.com/Erdayastronaut/status/1203840982497792005?s=20).

There is, however, a point at which the value of a part becomes worth the complexity.
If models in RL have not yet reached this threshold, they certainly will in the future.
Unsupervised / predictive learning is going to be the only way to gather enough signal to train powerful enough neural networks.
This is a familiar argument, made famously by
[Geoff Hinton](https://www.reddit.com/r/MachineLearning/comments/2lmo0l/ama_geoffrey_hinton/clyjogf/) and [Yann Lecun](https://www.gwern.net/docs/ai/2019-02-18-lecun-isscc-talk-deeplearninghardwarepastpresentandfuture.pdf#page=59).

What makes me more excited now is that we are starting to build the artifacts that prove these arguments.
I am much more bullish on the future of model-based RL now, not due to any
recent spectacular MBRL results, but due to recent spectacular unsupervised learning results.
Models like GPT-3 and DALL-E prove the power of predictive training and just
how much knowledge these systems can absorb at scale.
They still have many flaws and shortcomings, but they offer a strong existence proof of the potential of unsupervised learning.
And they are only the tip of the iceberg for what’s coming and what’s possible. If we extrapolate forward and imagine predictive models for video and robot sensors, this seems clearly how we are going to train a large part of a general purpose robot brain.

As babies, humans learn about basic concepts like gravity, as our brains try to make constant predictions about what is normal and what isn’t<label for="sn-1" class="margine-toggle sidenote-number"/>.
<input type="checkbox" id="sn-1" class="margin-toggle"/>
<span class="sidenote">
Because you can't exactly ask a baby what it understands, [infant cognitive development](https://en.wikipedia.org/wiki/Developmental_psychology#Infancy)
researchers instead often test "violation of expectation". They
give babies an impossible physics scenario (e.g., a block that magically floats instead of falling)
and a control scenario (e.g., block that falls as expected), and test whether the babies look longer at the impossible physics sceneraio.
If they do look longer on average at impossible scenarios, it suggests they are surprised and that
the data doesn't fit their world model.
(some review papers from Baillargeon [2002](/assets/papers/baillargeon_2002.pdf), [2004](/assets/papers/baillargeon_2004.pdf))
</span>
As adults, we are continually forced to adapt and refine our predictions, as we confront increasingly complex phenomena.
Through this process, our models become *very* good. Humans look at the world and we understand it.

Robots look at the world and they effectively see static. 
ConvNets, as we mostly train them today, can do complex information processing
and pick up on important features of the world, but their understanding is extremely superficial.
They are not given the chance to acquire even a fraction of the information they need about the world to understand it.
They are starved for training bits, so it's not surprising they understand very little.

I don't believe it will require radically new and complex processes that we currently can't fathom to endow networks with this deeper understanding.
Some form of large scale predictive training will be sufficient and necessary to get powerful models that allow robots to "see the world". These models will provide the context and scaffolding to ground further supervision and human feedback in, and bring us much closer to solving the hard tasks we care about.
And the main thing standing in our way now is actually lack of computation.

## Sim2real and learned simulators

<div style="text-align: center;"><em>It's all about Software 2.0</em></div>
<br>
The field of sim2real learning deals with training policies fully or partially in simulation and then deploying them in the real world. Sim2real offers several advantages over real world training, in speed, safety, and environment read + write access.

Like model-based RL (MBRL), it allows agents to gain useful information and strategies
without having to interact with the real environment.
Arguably, sim2real is the same idea as model-based learning, where the model (simulator)
is constructed by humans.
Not that MBRL models are never constructed by humans, but it is becoming 
increasingly common to learn
them end2end with gradient descent,
whereas sim2real work still uses fundamentally traditional simulators, 
with perhaps partially learned or hybrid components. There are 
trade-offs to this---traditional simulators have nice structure and are 
general and reusable across tasks---but eventually human engineering becomes a 
bottleneck that limits the complexity of environments we can handle.

Eventually, we need to learn our simulators basically from scratch, much more akin to how humans do. The world is just too complex and traditional simulators are not flexible enough to handle it. Too often their assumptions are broken---with deformable objects, with material property changes, with shattering, with strange artifacts like fire, paint, light switches and microwaves---and eventually the structure becomes too burdensome. The best simulators of the future will impose fairly minimal structure with some inductive biases for efficient learning<label for="sn-1" class="margine-toggle sidenote-number"/>
<input type="checkbox" id="sn-1" class="margin-toggle"/>
<span class="sidenote">
In the interim, I concede that domain-specific structures are useful for constraining what you have to learn.
It's hard to say exactly when fully learned simulators become more effective for general use,
but for training something like a household robot in the future, minimal structure is going to be best.
</span>.


Robotics simulators should be mainly [Software 2.0](https://medium.com/@karpathy/software-2-0-a64152b37c35) systems, not 1.0.
To build traditional simulators, humans have spent years of domain specific effort, studying the physical world, distilling our knowledge into core principles and equations, and implementing these equations in computer programs. In the end, after a massive “real2sim2real” loop, at extreme cost in human science and engineering effort, we can train RL policies that operate in the real world. Ultimately, a learned simulator is a better version of this human-based loop, where the feedback loops are quicker and the neural networks are better at dealing with the high-dimensionality sys-id and dynamics necessary to simulate the real world. Once learning is in place, learned simulators will require much less effort per incremental advance in performance. They’ll just consume data & compute and grow stronger.

(For a more detailed discussion of learned simulators and the framing they provide, see my [dedicated post](/learned-sims) on this.)

## Conclusion

Model-based RL and sim2real give two perspectives on the role that massive predictive models will play in the future of robot learning. World models represent something akin to what humans have going on in their heads, and suggest that with predictive learning and "simply" by providing more bits of information, we can build intelligent agents
that see the world. Learned simulators represent an extension of traditional human-engineered simulators to the era of Software 2.0, and suggest that we can build more general and reusable tools for training intelligent agents that handle the full complexity of the world.

<!--
Model learning is computationally expensive, especially if you want accuracy.
That is a limitation for now, but in the grand arc of the Bitter Lesson, that is a good thing that these methods leverage compute.
-->

As the base of the [Cake](https://www.gwern.net/docs/ai/2019-02-18-lecun-isscc-talk-deeplearninghardwarepastpresentandfuture.pdf#page=59), these components seem like the most important in some ways.
At the very least they provide a context to ground and amplify the power of other system components (human supervision, RL signal).
If you care about building general purpose robots (and useful AI systems in general),
I recommend investing your time in predictive learning.

Thanks for reading.

## References

There is some background that is useful to have and stay current on:
- **fundamentals in DL and Deep RL.** If you are new to the field, I recommend doing the [cs231n](https://cs231n.github.io/) assignments, and messing with the [Spinning Up](https://spinningup.openai.com/) RL algorithms and understanding why every single line is in the code.
- **model-based RL.** Igor Mordatch and Jessica Hamrick have a good tutorial on [MBRL @ ICML 2020](https://sites.google.com/view/mbrl-tutorial). I’d recommend that for a good overview. Also reading specific recent papers in the space. One I like is [Dreamer](https://danijar.com/project/dreamer/), which learns a stochastic world model that handles uncertainty to some extent; it uses the model’s latent state as input to the policy and value networks; and it uses differentiable rollouts through the model for training. I wouldn't say it strongly outperform other algorithms---for example, image-based SAC with a [few tricks](https://mishalaskin.github.io/rad/) can get better learning curves---but it feels like Dreamer is on the right path.
- **sim2real.** The [sim2real Workshop @ RSS 2020](https://sim2real.github.io/) is solid ([summary document](https://twitter.com/sim2realAIorg/status/1336364134510678017)). Also reading the recent work in the space. One I like [Jemin Hwangbo et. al’s work](https://arxiv.org/abs/1901.08652) on learning a network to model the series elastic actuator network on Anymal, and plugging this network into the simulator dynamics for sim2real learning. The [real world results are impressive](https://www.youtube.com/watch?v=aTDkYFZFWug). Also, [Josh Tobin's slides on sim2real](http://josh-tobin.com/assets/pdf/randomization_and_the_reality_gap.pdf) are pretty nice too.
- **generative modeling.** [Pieter Abbeel’s Deep Unsupervised Learning Course](https://sites.google.com/view/berkeley-cs294-158-sp20/home) is a great course for fundamentals. I’ve been going through the course and implementing/transcribing various models and [training them on MNIST](https://github.com/matwilso/generative_models). Generative modeling is super important in this area, and it’s easier to study and build intuition on tasks like MNIST where you don’t have to simultaneously deal with data collection and actions and exploration.
- **non-generative self-supervised learning.** It seems to me that generative models are going to be central, but other types of self-supervised learning might also be useful. Most notably contrastive learning ([[CPC]](https://arxiv.org/abs/1807.03748), [[Berkeley Slides]](https://docs.google.com/presentation/d/1rnvyNWnVv1Q0-aFLK-wdiNiFNedNAz30nWLsNuTh4Nk/edit#slide=id.g54597b54d0_0_21)), which we see being used for feature learning in RL, and also in [CLIP](https://openai.com/blog/clip/). The way the [DALL-E](https://openai.com/blog/dall-e/) results use CLIP for filtering may point to a larger trend where non-generative self-supervised models are used to interact with generative models.
- **video prediction.** Pixels seem like they will be the primary modality used to train world models and learned simulators, so this will be an especially important subset of generative modeling. Also, there are many people pushing on video prediction for different reasons, so it's good if we can draft off that work.
- **cloning simulators.** This area of research takes existing physics simulation and clones them  with neural networks to run faster (kind of like neural [clean-rooming](https://en.wikipedia.org/wiki/Clean_room_design)). One example is [Learning to simulate complex physics with graph networks](https://sites.google.com/view/learning-to-simulate). While this only lets you get as good as the original simulation, there are likely good insights here in how to set up effective inductive biases and set up training. I think this is actually a decent path for getting traction in more fully learned simulators.
- **case studies.** Case studies of related areas provide valuable lessons to draw on. Some things that come to mind are the recent large language models and large scale, production grade systems at Tesla, OpenAI, Google, etc. Alec Radford gave a good talk on historical development of language models [[video]](https://youtu.be/BnpB3GrpsfM) [[slides]](https://drive.google.com/open?id=1sdH-9KQipnu3RMN0-YUqU8R4ZMLapz8IJzfe7VLN39o).
And Andrej has some talks about Tesla [on his website](https://karpathy.ai/). Reality in general is a great filter for flawed approaches.
- **infant cognitive development**. It might be useful to draw on what we know about how babies develop their models of the world. Like in what sequence do they learn different concepts about the world? Is there anything we can learn about the inductive biases they have for physical reasoning---about which physics they understand early on, and which takes a long time to learn?
Can we use something like violation of expectation to evaluate our model's understanding? There are some [reviews on physical](/assets/papers/baillargeon_2002.pdf) [reasoning in infants](/assets/papers/baillargeon_2004.pdf), that discuss when babies learn certain skills. 
- **yann lecun and self-supervised learning.** [His podcast with Lex is good, and his recent talks can probably offer insight on this area as well.](https://www.youtube.com/results?search_query=yann+lecun) He is a big believer in this type of stuff now, though with some differing opinions in the details.

## What next?

<div style="margin-left: 2em"><em>A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system. - <a href="https://en.wikipedia.org/wiki/John_Gall_(author)#Gall's_law">Galls's Law</a></em></div>
<br>

<div style="margin-left: 2em"><em>Because deep learning is so empirical, success in it is to a large extent proportional to raw experimental throughput - the ability to babysit a large number of experiments at once, staring at plots and tweaking/re-launching what works. This is necessary, but not sufficient. - <a href="https://twitter.com/karpathy/status/1350503355299205120?ref_src=twsrc%5Etfw">Andrej Karpathy</a></em></div>
<br>

*If* it takes a lot of experimentation to build up fundamentals and intuitions about a problem (as it does in deep learning),
then it's best to start small at first, so we're waiting for hours and not days for feedback.

I don't think we quite have the compute to build the grand version of learned simulators or world models, but 
we can start working on the ideas and building up real progress in this space.
And we can be ready when the compute arrives.

I built something like an MNIST of world modeling / learned simulators, called [boxLCD](https://github.com/matwilso/boxLCD).
It's meant to be a testbed for developing ideas and algorithms for learned simulators and world models.
It uses box2D physics and very low resolution, binarized images for rendering, and it aims to capture as much structure of the full real world learned simulator / world model problem as possible, while remaining much quicker and easier to run experiments and iterate ideas on.


<!--
And I think one thing to really note here is there is so much work left to be done. There are so many exciting things yet to happen in NNs and generative modeling and all of this. If you get in and work *very hard*, you can do well. And you need to work very hard because that happens to be what it takes to make progress on most challenging problems. 

This seems like an exciting area. But alternatively, you should go work on making compute faster and cheaper, because that’s what's going to enable all of this.
-->

## FAQs

- <a href="#faq-possible">Is it even possible to build world models and/or learned simulators?</a>
- <a href="#faq-actions">What about actions and goals?</a>
- <a href="#faq-money">What about money?</a>
- <a href="#faq-timing">What about timing?</a>
- <a href="#faq-data">Where is the data going to come from?</a>
- <a href="#faq-model">What is the model going to look like exactly?</a>
- <a href="#faq-selfsupe">What about non-generative self-supervision?</a>
- <a href="#faq-curation">Data curation?</a>
- <a href="#faq-whatelse">What else is going to matter in the future?</a>
/
<!--
(Kind of just loose and less polished thoughts that didn't fit in the main body)
-->

<!--TODO: add table of contents for this specifically-->


<div class="faq" id="faq-possible">Is it even possible to build world models and/or learned simulators?</div>
Humans give an example that this type of knowledge can be learned. And generative models (VAEs, GANs, etc) give an example that machine systems can go beyond humans in pixel perfect generating of images. Only a select few humans can do something like generate high-resolution realistic human faces, but they need art tools and it takes a long time. Generative models point to something that can go far beyond human abilities in this space. And it is just a matter of how far. 


<div class="faq" id="faq-actions">What about actions and goals?</div>

I think learned simulators are a good fit when you need to accurately simulate a scene
step-by-step. They will benefit from abundant offline data and they will be able to cover a wide variety of scenarios.
But my sense is that the learned sim framework does not facilitate policy learning as well
as the world model framework does.


I guess I think about learned simulators as simulators/environments and the world models more as brains (or at least more in that direction).
For a learned simulator, the agent action is just another part of the state that it uses to predict the future.
For a brain, the action is something it chooses. This seems like an important distinction.
Choosing actions requires intent about some state of the world you would like to achieve.
Also, brains have an easier task for taking actions since they can rely on heuristics.
When a brain catches a baseball, it can do this by keeping the baseball at a certain angle of its vision, while a simulator has to compute the dynamics.
On a semi-related note, the work on a unified framework to action and perception(e.g., [APD](https://danijar.com/project/apd/)), as [might](https://en.wikipedia.org/wiki/Free_energy_principle) [exist](https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/whatever-next-predictive-brains-situated-agents-and-the-future-of-cognitive-science/33542C736E17E3D1D44E8D03BE5F4CD9) [in](https://www.amazon.com/Surfing-Uncertainty-Prediction-Action-Embodied/dp/0190217014) human brains, is seeming more interesting to me.


<!--
World models can provide temporal abstractions and you can narrow down into certain niches that are easier to predict.
of exploration and representation learning, for example.
-->

Maybe we use brains to collect the data for learning our simulators
(the interesting data needs to come from somewhere; we can't get it by pure motor babbling).
Maybe we use our simulators to train our brains.
Maybe we do both iteratively.
Maybe learned simulators will just be brains.
Maybe brains will use components of learned simulators.
This seems like a big knot of questions that is only going to come undone as we start to build more powerful working systems.


<!--
Learned simulator components could perhaps be used in a world model, 
-->

<div class="faq" id="faq-money">What about money?</div>
Developing an effective learned simulator and/or world model is going to take a lot of $.
Maybe you can capitalize on the investment by licensing it. I can see an open sourced / crowd-sourced version being potentially viable, at least as a weaker version of what the top companies have.
Maybe you benefit more from not licensing or releasing and using the simulator
to create some other end-user product.
(It's actually hard for me to imagine in detail how development is going to work. It does just seem like a massive endeavor. Probably starting in niches and expanding from there. Then as you build momentum, you will have the resources to build this system in a way that actually seems possible. In the meantime, doing the R&D and pushing on these ideas seems useful so we are ready when the full vision becomes possible.)
Maybe OpenAI's API approach is somewhat informative here. Once you have the big model, seems like having an API but releasing access to researchers so
they can tell you interesting things about the model is a good idea.
Maybe using it in for some application specific purpose, like a simulator for self-driving, where you
capitalize on the end product of robo taxis.

<div class="faq" id="faq-timing">What about timing?</div>
In general, it's especially hard to predict the [timing](https://www.gwern.net/Timing) of future innovations.
Moore’s law seems a  guideline here. I think this is mostly a question of compute.
We will be developing the ideas and algorithms along the way, but compute is what is going to enable this.
Given that, if we assume that we are using videos instead of text, how much more computational and information processing do we expect to have to do?
Video requires much more bit processing, but also there is much redundancy in videos both spatially and temporally. You can see this by how much youtube can compress a video.
So there are likely some tricks we can use to benefit from this. Maybe some scheme where we only encode differences from the expectation. And somehow benefit from this during training.
At some point, I probably ought to do a back of the envelope calculation for how much more computationally intensive we should expect video to be.

<div class="faq">(followup)</div>
Sure MBRL and models are likely to win out in the long run. But when is the long run? Does it matter? Like what if you are trying to get results today?

You probably want to do a bit of both, short-term and long-term work.
But I think the long run bet is good, especially the earlier in your
career you are. It gives you time to position yourself and benefit from some compounding.
And the thing about the future is that it eventually happens. It eventually is no longer “the future”, but what is happening now. 

<div class="faq" id="faq-data">Where is the data going to come from?</div>

There is a lot of internet video floating around,
but there are restrictions on what YouTube is going to let you take legally.
Perhaps you can hire people to film daily tasks, like cooking and cleaning, with GoPros.
At $10/hr, this is still cheaper than training costs for quite awhile.
But I think ultimately you want robot hardware out in the world collecting your data.
This creates a Catch 22 because you need a competent robot system to be able
to collect the data, but you need the data to create a competent system.
So I suspect bootstrapping and starting in a niche is the way to go.
Maybe teleoperation can take off. That would help a lot.
(In self-driving, we are already at that point, so this is less
of an issue.)

It's possible you can get pretty far without needing robot interaction data,
and then you just plug in / calibrate the robot to your YouTube-trained simulator.
But I have to come to think this is less plausible.

<div class="faq" id="faq-model">What is the model going to look like exactly?</div>
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

Autoregressive and/or combined latent variable model seem a pretty promising path forward.
Likelihood models are better at mode covering (than e.g., GANs), and many recent top results use autoregressive models.
They can be expensive to sample,  but the samples are damn good.
And the sequential nature of autoregressive models fits pretty well with the structure of world modeling, where you
get actions at every step as well.

But perhaps world modeling is different enough from past tasks where these have shined, and that something
else works much better.

This question is pretty wide open, from what I understand with my limited knowledge.

<div class="faq" id="faq-selfsupe">What about non-generative self-supervision?</div>

Who's to say we can't get our bits from some non-generative self-supervision, like by using a contrastive loss.

Maybe this ends up being useful. It seems you will certainly need a generative model for much of the functionality
of a learned simulator. You need to be able to make accurate predictions forward and to render them to users.
Contrastive learning could augment this or help train the generative part (you could pass gradients through
a contrastive model to train a generative model).
I suspect something you might call a "world model" would also benefit from generative properties.
But I suppose you can get pretty far using some contrastive type approach to learn a powerful representation.

In summary, I believe non-generative self-supervised learning is worth paying attention to going forward, but generative modeling seems more important.

<div class="faq" id="faq-curation">Data curation?</div>
Data curation will be important. Just like it really is for SL. In USL, it 
will be as well.  You will want to curate the dataset to make sure it is 
balanced and interesting.

<div class="faq" id="faq-whatelse">What else is going to matter in the future?</div>
In this post, I mainly focused on how we're going to train the general predictive models,
but that is only a part of the future store.

It's likely that learning from humans and human demos will matter.
And maybe you can use the model to help ground the information you get.
And reduce the amount of feedback and guiding you need.

I am somewhat doubtful on teleoperation taking off, but it would help if it does.
It is a lot of the fuel for Telsa autonomy, but that's because it makes sense to drive a car before it's autonomous.
It makes less sense to teleop a humanoid robot before it's autonomous.
It seems cheaper and easier to hire manual labor than to teleop an unreliable robot from somewhere else.
Unless we get really good cheap hardware and then telepresence from developing countries or something becomes economically viable, I think the Tesla / Karpathy short story route is not going to be a main driving force in humanoid robotics.

(Over time, I might develop this post more to cover these other aspects in more detail.)

