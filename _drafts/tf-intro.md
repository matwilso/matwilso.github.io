---
layout: post
title: "Tensorflow Level 0"
permalink: /tensorflow-level0/
---

(audience: me before learing TF. right after cs231n)

This post is meant to be an intuitive introduction to what TensorFlow is
and how it is very different from numpy and how it can be really confusing to
learn if you do not fully internalize that TensorFlow is based on a computational
graph definition programming model.  I will go into more detail, but the punchline
is: all the TensorFlow code you write doesn't get executed right away.  It is 
just defining a computational graph that gets run later.  So you should really
internalize and write TensorFlow code by defining a sequence of ops and always
remember that things won't get run til later.

This might be overdone and there are probably a million other posts 
like this on the internet, but I mostly write it for the past me.
(I will check, and if the space is too crowded, I may not finish it)

First: basics of what is TensorFlow? 
Second: what is going on with the computational graph and how should I think about it?

If you came here trying to learn what TensorFlow is for, I would suggest
diving into learning about neural networks.  This is the absolute best
resource for starting to learn about things: CS231N.  It will take some
math and studying and writing things yourself in numpy, and it will be
really hard if you don't have good background in that stuff.  But if you
make it through, you wil have a great understanding of neural networks and
you will be extremely confident and ready to start doing cool stuff with
TensorFlow.  It takes a lot of time, but if you are really serious about
this stuff, that is the best way to start. Otherwise you could end up 
spinning your tires trying to figure out what is going on with TF while
trying to figure out what the hell a NN really is.

Also I recommend learning TF because it is ubiqutous. Most SOTA implementations
(baselines, MAML), use it.  But PyTorch is a bit nicer to learn and much
more intuitive.  TF is kind of a pain in the ass, or at least was for me
and there have been some complaints of it (like to the f\*\*\* tf post).

Alright let's give it a rest with the warnings. On to the content.


---

TF is a general library for defining computations.  You can use it for
anything.  Somebody has used it to write Pong: [unixpickle tf-env]. Anything
you can do in numpy, you can do in TF basically.

Think of it like a programming language. Things are defined in ops. 



Level 0 introduction to tensorflow? What is it? How is it a framework and not 
an API? It is kind of like a language. You wouldn't call it that, but it helps 
to draw the analogy.



One thing I wish I had 


known before diving deep in was the computational graph idea




TODO: make cartoon

Python surrounding but central running TF



Tensorflow is just this inner optimization thing

Python lives all around it.
- Defines/Constructs it
- Feeds it
- Uses the values









