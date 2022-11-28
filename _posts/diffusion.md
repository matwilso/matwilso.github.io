---
layout: post
title: "Diffusion Models"
date: 2022-11-25
permalink: /diffusion/
#tags: robotics 
---
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

> <b>"Creating noise from data is easy; creating data from noise is generative modeling."<br><a href="https://arxiv.org/abs/2011.13456">arxiv:2011.13456</a></b>

<figure style="text-align: center;">
    <a href="/assets/diffusion/ddpm_z.gif"><img src="/assets/diffusion/ddpm_z.gif"/></a>
    <a alt="Diffusion model trained on MNIST digits, using 256 steps of DDPM sampling. left: z_t, right: prediction of the fully denoised data x given current z_t" href="/assets/diffusion/ddpm_x.gif"><img src="/assets/diffusion/ddpm_x.gif"/></a>
</figure>

Diffusion models are a new type of generative model, trained by adding noise to data and learning to undo that noise in an iterative way. They are recently popular and make up the backbone of state of the art in text-to-image generation and beyond, in DALLE-2, Stable Diffusion, Imagen, DreamFusion, and Imagen Video.

This post is a reference to the fundamentals of diffusion models, meant as an introduction or refresher. Part of my own reason for writing this is to solidify my own knowledge and provide a reference for my future self, and I hope it provides a reader the path to apply diffusion models and their extensions to their own problem domain.


One philosophy of this reference is that [code is the source of truth](https://youtube.com/clip/UgkxqmfUnpfO0_6Zz1GwsEcFvdP5tGHRhhr0). Explanations and equations by themselves are useful for understanding, but for a sufficient level of detail and to actually apply and repurpose these techniques, you need to understand the implementation details --- the code.

So I have provided a [reference implementation](https://github.com/matwilso/generative_models/tree/main/gms/diffusion) which I have tried to make as simple as possible. If you just want to understand the gist or refresh some basics, you can just follow along with the pseudocode inlined in this document, but if you want a deeper understanding, I suggest cloning the repo and reading through the code and setting breakpoints and executing it yourself and making modifications and extensions.

This post starts simple and gradually bring in increasing levels of complexity and extensions. You can jump in wherever and look at the code to understand it. You can skip sections that sound boring or are things you understand. Or you can skip to the code and come back for explanations of specific things. If you are starting from zero on diffusion models, I think the preferred way of learning would be reading through this whole document and then going to mess with the code. If you don’t have ideas of changes you could make, I have a few ideas listed in the repo: TODO.


## Overview

Diffusion models are trained by adding noise to data, and trying to reverse that noise with a neural network. To sample from a diffusion model, you start with a fully noisy image and you iteratively apply the model until you recover a novel data point.


Fundamentally, generative models (like GANs, VAEs, and Autoregressive models) take noise and turn it into a sample from the data distribution. The more realistic and varied (mode-covering) these samples are, the better the generative model. We can also consider conditional generative models, which consume some additional constraint input. In that case, we also care about how well the sample satisfies the constraints: does it follow the text prompt well or ultimately does it produce something that the user intended or prefers.

<pre>
<code class="language-python"># basic one-shot sampling
# for e.g., GANs (net := generator), VAE (net := decoder)
sample = net(noise)

# conditional sampling, where cond is some additional information that gets passed in
sample = net(noise, cond)
</code>
</pre>

GANs and VAEs, are often sampled in this one-shot manner or perhaps with a small number of stages, in e.g., VQ-VAE2. This is advantageous because we can both train and sample from them quite quickly.


For iterative models, including autoregressive models, sampling is done iteratively, passing back the previous version of the sample to get the next version.

<pre>
<code class="language-python"># sampling for autoregressive models, diffusion models
sample = init(noise)
for i in range(D):  # D can be quite large for naive autoregs
    sample = net(sample, noise)
</code>
</pre>