---
layout: post
title: "Machine Learning Analogies"
permalink: /ml-analogies/
---

(audience = mild technical background, but also palatable and brief for experts in the field
maybe write it to a more general audience. like me before I started studying ML. introduce
ML concepts first and then their analogy)
(I think format of this will be: introduce the ML concept and the interesting knowledge about
it, and then desci


Working in CS, there are a lot of fun analogies that you can draw to human
thinking and working.

For example, there is the reference to cycles, as in "don't let bullshit eat up
your mental cycles", referring to computing of instructions going throught the 
computer, or running on the clock cycle of the CPU.  There is thinking of your 
memory as RAM, like you only have so much mental RAM to fit information into.
These are fun and interesting analogies that help tie in the understanding of 
the concepts, are amusing, or enrichen understanding of other ideas.

Learning about modern machine learning, especially the subfield of deeplearning,
I have found some really great analogies or things that seem applicable, or at
least interesting to think about in other contexts.


There is something to be said for the aphorism


There is a claim in ML and that I have heard especially from people in machine 
learning who have switched from pyschology or neuroscience to the computational
side of things that 'the best way to understand intelligence and the brain is 
to recreate it'. 

> 'What I cannot create, I do not understand'

I have started to agree, but whether or not you agree with or see the utility 
of this argument, there is certainly a lot of interesting parallels and analogies
that can be made between formal and well-studied (theoretically and empirically)
concepts in machine learning, especially deep learning.


I think it is true that you do not have a good understanding of something until
you can create it.

For example, I think it is likely that those reading this that have implemented
a neural network understand (at least fairly well) what a neural network is,
and those that haven't probably don't.


Following this line of reasoning, then, it seems that the best route to
understading human-level intelligence is to create it.  Even if you do not
subscribe to this fully, there are many useful analogies that can be gleamed from
studying machine learning.


In general things that are harder in ML are harder for humans to do.  Besides 
almost everything, like contol.



## Discriminative vs. Generative: it's easy to critique and hard to generate something from scratch

In machine learning, there is a well established dichotomy betweeen *discriminative* 
and *generative* models.


Discriminative models are classification or regression tasks, where the ML model
is given an image and it has to say 


So I think that is actually a useful thing to keep in mind and a good lesson.
Trying to produce something yourself is really hard.  It is very easy to judge
something and say if it is bad or not, but it is really hard to create something 
for nothing.

So it is helpful to criticize things because that allows you to quickly make it
better.  And you need to be critical because it is hard to generate things and
often things are bad at first.  But you should not be overly critical, especially
when you have not tried generating something yourself.

Generative models are hard and much less of a solved problem than discriminative
model.  


## Reinforcement Learning as a framework for life planning

I think Sutton sells this concept well in his textbook.



## Backpropping


Karpathy has a tweet about this
[insert karpathy tweet here]


need to try it your self, and then get the signal to update

active learning requires that you actually try to find the answer before getting the label


This says a lot for active learning.  If you do not try to solve the problem,
if you don't think about it, you will not gain a fraction of the knowledge
you would have if you had tried first and then been shown how to fix it.



## Data-driven 

It is interesting to look at aspects of life in terms of data.


Like the photos and videos that you take.  That is collecting data of yourself
and what you were doing.

Taking work logs.  Most of that data is just for storage, but you can use some
things to learn about yourself.

Like predicting how much you can get done in a week or what things you want to work on.
And then compare that with what actually happened.


This can also be tied into Bayesian evidence.  If you are not observing
something -- if you don't have data on it, then you cannot have knowledge
about it.  You have to actually observe it.  Many things are hard and humans
have a lot of biases about what they think is going on, but if you don't
actually look at the data, you will probably be far off.


## Parameter space is huge 

Huge manifold of possibilities.  Things are hard to search for.


You should optimize for the thing that you really want.  And it really 
matters where you are heading. 

there is room for everybody. representation is there. training is not. getting the weights into the right spot.


Goddamn, meta-problem search is so important. Â You could be making great progress, 
but if it is in the wrong direction, then it is useless. Â Oh that is another good 
ML analogy. Searching in parameter space. Â I think a good spin I could put on 
that is finding new ways to think about things that are really helpful. Â These 
are actually very insightful ways to look at the same problems that people 
without rigor are trying to solve. Â They have real mathematical backing and 
they actually work in practice. Â They are actually true. Â We have gotten 
computers to do them.

So the parameter space thing is that there is a huge space of possible goals and
things you can do. Â It is a huge N-dimensional (where N is >> 1000) space to 
search in. Â You can be making great big steps of change in your space, but if 
you are going in the wrong direction, that is a problem. Â 

You have to be following the right gradient. Â Could maybe even tie in 
meta-learning or something here. Hasn't crystallized in my brain enough yet.



You will probably find these analogies most amusing if you have been studying 
ML for a bit or if you have been working in a field with mathematical rigor, 
but these may also offer a good introduction to the ML concepts. Â It is 
probably helpful to understand things as analogy to things that we are already familiar with.





# RL good tricks

## KL Divergence constraint on changing policy too much

There is a big problem that many RL algos have tried to solve of not changing
your policy too much at each step. The motivation for this is that you just have
a sample of what things are going to be like.  You don't want to t

Don't move too much all at once.



## Maximum entropy

good to keep your actions as varied as possible and add in entropy every so often.
it might feel like wasting time and being distracting, but it could lead to something
that you never would have found otherwise.  so try to add a bit more entropy.

not too much though. the thing with maximium entropy is that it is still trying to be
optimal in the end.  it is just adding a bit more randomness in hopes that it will
find more varied and clever ways to reach the goal.


Explore vs. exploit.

Acting optimally, but maximum entropy. You want to add some entropy to your 
actions, but you mostly need to be acting optimally. But you should add some 
entropy to your actions.





