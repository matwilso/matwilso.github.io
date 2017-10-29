---
layout: post
title: Deep Learning Intuitiions
permalink: /deeplearning-intuitions/
---



### Some resources to get started

A basic video intro: TODO link to 3b1b

If you are really interested in getting good, the way I learned a lot was
through working through the cs231n originally taught by Andrej Karpathy,
a top deep learning researcher now working as the Director of AI for the
Tesla visiion.  You must go through all of the assignments.  The only way to
learn about all of this is to implement.  Karpathy says the best bang for your
buck is implementing it yourself.  It will be hard, but it is the most
efficient use of your time.  If you really want to learn this stuff, you can
do it.  It will be hard.  But if you want to, you can.

There are also prereqs to this course hah.  You will find that there are
several prereqs to deep learning.  It is a complicated field.  If you are
used to programming, there is a lot more math to learn. If you don't have
experience with programming, there is also that to learn.  Don't be discouraged
if you don't know these background math.  You will be able to work through
things, it will just be much harder.  But the prereqs to this course are
strong linear algebra.  You need to familiar with the concept of matrix
multiplies.  You should also have some experience with linear algebra software
like numpy or matlab.  Probability, etc.


### So what is deep learning?

And then if you skipped all those prereqs, I will give a brief introduction
to deep learning.

You may have heard of neural networks.  They sound like a magical thing,
but basically a neural network is just a function.  You have seen many functions
in your past.

An example is $$y = f(x) = x^2$$.  If you plug in 2 for $$x$$, you get 4 for $$y$$.
Pretty easy.


A neural network is the same thing, it takes some input $$\textbf{x}$$ and
returns some output $$\textbf{y}$$.  There are *only 2 differences* between
a standard function and neural net function.  1) The neural net can take in
inputs and outputs as vectors or matrices. So, instead of $$x = 2$$, you could
have $$x = [1, 2, 1]$$.  2) The neural net fucntion is *much* more complicated.

You will still pass in input, and still get bit back output, but what happens
in the middle is a lot more complicated.
$$y = f(x) = neural_network(x) = do\_a\_bunch\_of\_complicated\_shit\_to\_(x)$$
But other than that, they are the same.  You could write a program that looks
like:

```
y = neural_network(x)  # put in input, get output
```

> A neural network is just a function, like $$y = f(x)$$


So what is that bunch_of_complicated_shit that goes on?

TODO: picture
x -> l1 ->

```

W1*x + b1 = layer1
layer1 = relu(layer1)
W2*layer1 + b2 = layer2
output = relu(layer2)

return output

```

Linearities and non-linearities

Linear functions are like $$y = 2x_1 + 3x_2 + 5x_3$$.


Basically in deep learning, you have a bunch of different layers that you
pass your input through to get an output.

The input can be a matrix representing an image (480x640),



Ok, but finally, we will get going.


TODO: insert picture here
