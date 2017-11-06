---
layout: post
title: Getting starting with OpenAI gym and Deep Reinforcement Learning
permalink: /gym-intro/
---

I was really excited when I first found out about OpenAI's gym.  It seemed
really cool that they have this place to essentially develop AI that could
learn to play all these games.  It seemed so cool, but I had no idea what was
going on and how you would even try to write a program that could learn to
play games.  

<!--
I saw that
DeepMind had trained an agent to learn to play several Atari games better than
humans.  That seemed so cool!  AI was getting good and having exciting results.

I thought it was all really cool, but it seemed so distant.  The problem was
that I had no idea where to get started.  The challenge just
seemed so impossible and like it could only be solved by geniuses with huge
computing centers.  But in reality, you can get started with it and start
experiment with machine learning and AI to train agents to play video games. -->


This guide is written as an informal guide to help you get started.  I don't
aim to cover anything in depth, but just to give you a lay of the land.  To
give you a feel for what things to research and how you might get started if you
are motivated.  And trust me, if you are motivated, you will make progress and
get to the point where you can do cool stuff.  It just takes time. That's it.

Specifically, the things I will be talking about are:
- What is the Gym for?  Why did the people at OpenAI put in the time to create it?
- Naive approach to solving a gym environment
- Introduction to deep learning and its role in training agents to beat Gym environments (games)
- Interactive python example code that you can run in the browser!


---

<br>

## OpenAI Gym

<img width="100%" src="/assets/gym-intro/gym_screenshot.png" style="border-radius: 1%;"/>

OpenAI Gym is a python library that allow you to test **reinforcement learning**
algorithms.

It turns out the gym was created mostly as a benchmark and standardized
playground for developing and testing **reinforcement learning** agents.

You may have heard of the recent successes of AI in learning to play Atari
games, beating the world champion at Go, and winning a single player DOTA
tournament.  All of these problems are part of the field of reinforcement
learning.


**Why play easy games that don't matter?**  You need to iterate quickly.




## Deep learning

TODO: picture


#### Background
We talked about how the Gym was created to help practice solving the problem
of Reinforcement Learning.  This is a subset of machine learning.  You may
have heard of another kind called supervised learning.  Supervised learning is
pretty simple and it seems kind of obvious and lame at first, but it turns out
to be the type that has had the current commercial success.

Basically the idea is that you need *tons* of labeled data.  You show your
machine learning models literally millions of images that all have exact
labels of what is in the picture.  So you show it millions of pictures of
dogs with the label dog, and then if you show it a new picture that it has
never seen before, it should be able to tell you if there is a dog or a cat
in the picture.  If you show it a donkey and you have never trained it to see
donkeys (by showing it labeled pictures of donkey), it won't know what it is.
It might guess dog or some other label you showed it, but it may not be that
sure about it because it looks kind of different from other dogs it has seen.

So I said that supervised learning has had the most success now.  It is used in
a ton of things.  There was recently a big breakthrough, which you will no
doubt here of if you decide to study more, and that is the AlexNet.  This paper
and software popularized the idea of using deep learning and neural networks
in an image competition.  This kicked off a whole bunch of subseqeuent successes
and now neural nets have achieved similar performance to human level detection.

With the success of the neural nets in the field of supervised learning,
people tried (again) to apply the techniques.  

TODO: add simple cartoon showing depecting supervised learning


#### Tensorflow

For me, the tensorflow tutorial was a bad place to start.  I just saw the
tip of the iceberg, run through some code that you barely understand
with a bunch of math that you don't understand at all.

The way I found useful was completing the cs231n course.  It is actually hard
to get through.  There is some complicated math and the code is hard to write.
But it is complete.  If you get all the way through it, you will have a great
grasp for the whole field of deep learning.  You won't be a pro, but you will
be in a place where you can learn anything.  The tensorflow tutorial will
actually make sense.


Another thing I found really frustrating starting machine learning was why
I wasn't getting 100% success rate on MNIST.  It seems so easy... state of
the art.  There are better methods.  You have to start somewhere.  And also
humans aren't even 100% because the 6 that looks like a 0.  In imagenet,
the computers have actually surpassed human accuracy

tensors aren't scary.  they are just multidimensional arrays. just think
like matrices but with more dimensions.  it is pretty easy conceptually.
you have a color image that is 640x480, that is just a "tensor" of size
(480, 640, 3). 480 for height, 640 for width, 3 for channel depth.
Then if you have multiple images that you wanna do the same operation to all
of them, say you had 10 images, you would have a tensor of size (10, 480, 640, 3).
That tensor holds exactly 10 rgb color images.




This is a Jupyter notebook to show how fun it is to mess around with deep
reinforcement learning for training agents to play games.

If you are unfamiliar with Juptyer, it is an interactive way to run python code.
 A Jupyter notebook is made up of cells of python code, you can click on the
  cells and type `SHIFT+ENTER` and the code inside will get run.

Jupyter is a great tool for scientific research and trying out things quickly.
 You can easily make changes.


<!--
This is the first section of the Chainer Tutorial. In this section, you will learn about the following things:
- Pros and cons of existing frameworks and why we are developing Chainer
- Simple example of forward and backward computation
- Usage of links and their gradient computation
- Construction of chains (a.k.a. “model” in most frameworks)
- Parameter optimization
- Serialization of links and optimizers
- After reading this section, you will be able to:
-
- Compute gradients of some arithmetics
- Write a multi-layer perceptron with Chainer
-->




There are a [million][1] [different][2] [resources][3] [for][4] [deep][5]
[learning][6] [and][7] [reinforcement][8] [learning][9] [out][10] [there][11].

This post is meant to help you to get your feet wet with gym and to start
being able to explore and mess around with deep learning and real "games",
because that is when it gets fun.

So this is an intro to how to start playing with gym and writing intelligent
agents, using deep learning, to solve an OpenAI environment.


Because it is fun and the coolest thing ever.  Training AI to win a game.
That is just way cool.  When you get to play with it and figure out how it
works, that is exciting.  Then you can create AI.  But unless you really
deeply care about it, you won't get any good.  It is not easy.  You don't
just sit down one day and write AI.  It takes many days and a lot of the
times it is not fun.  You have to do a lot of work before it becomes fun.
But if you enjoy it enough and you believe in it, you can do it.


TODO: Picture of lunar lander


## Prereqs

To understand this post the most, you should be familiar with calculus, and
deep supervised learning, as for image classification.  You do not need
background on reinforcement learning concepts.

Go see my other post for getting started with deep learning.  It is a
prereq because all of the best methods for solving gym environments use
deep learning.

Depending on your background, this can take a few months to a year.  If you
have taken intro calculus, you could learn it in a year max.  If you have
intro calculus and have at least a year or two of programming experience,
you could learn it 6 months max.  Assuming that you were dedicated enough.

It does take awhile though. There are many prereqs. See my other post.


So first, I will show you what I can do, and then I will show you how you can
get started.


1. Train a neural, using a policy gradient method, to solve the LunarLander
environment.  All running on your computer, and all quickly and you will
be able to mess around and look at how things work.

before ll -> after ll


2. Step through the code

Look through the code and kind of a get a feel for what is going on.
Then move along

<!-- <Show all the code> -->

3. Step by in a notebook, maybe live hosting. Oh that would make this cool.
A live blog that they could play with.


## Gym

So the OpenAI gym is just a python interface to interact with a bunch of
different environments, meaning you can write code and *mostly* run it
on other environments pretty easily.  The code I will show you does in
fact solve both the CartPole (boring) and the LunarLander (much cooler)
environments.


[1]: http://example.com
[2]: http://example.com
[3]: http://example.com
[4]: http://example.com
[5]: http://example.com
[6]: http://example.com
[7]: http://example.com
[8]: http://example.com
[9]: http://example.com
[10]: http://example.com
[11]: http://example.com
