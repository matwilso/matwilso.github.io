---
layout: post
title: "Diffusion Models"
date: 2022-11-25
permalink: /diffusion/
#tags: robotics 
---

<figure style="text-align: center;">
    <a href="/assets/diffusion/ddpm_z.gif"><img src="/assets/diffusion/ddpm_z.gif"/></a>
    <a href="/assets/diffusion/ddpm_x.gif"><img src="/assets/diffusion/ddpm_x.gif"/></a>
  <figcaption>
    Diffusion model trained on MNIST digits, using 256 steps of DDPM sampling. left: z_t, right: prediction of the fully denoised data x given current z_t
  </figcaption>
</figure>

<!--
<div style="margin-left: 2em; font-style: italic;">
Diffusion model trained on MNIST digits, using 256 steps of DDPM sampling. left: z_t, right: prediction of the fully denoised data x given current z_t
</div><br/>
-->

"Creating noise from data is easy; creating data from noise is generative modeling." - <a href="https://arxiv.org/abs/2011.13456">arxiv:2011.13456</a>


Diffusion models are an interesting type of generative model, well represented in the latest state of the art models, including DALLE-2, Stable Diffusion, DreamFusion, Imagen, and Imagen Video. The extensions and applications to other domains beyond standard generative modeling seem to make up every other paper on arxiv.

