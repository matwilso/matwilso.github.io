---
layout: none
title: Object Collections
---

<div align="left" style="width: 50%; margin:0 auto">
<div align="center">

<h1>Learning to Manipulate Object Collections<br>Using Grounded State Representations</h1>

Conference on Robot Learning (CoRL) 2019 <br> <br>
<a href="/">Matthew Wilson</a> and <a href="https://www.cs.utah.edu/~thermans/">Tucker Hermans</a><br>
University of Utah<br><br>

</div>

<hr>



<h2>Abstract</h2>
We propose a method for sim-to-real robot learning which exploits simulator state information in a way that scales to many objects.  First, we train a pair of encoders on raw object pose targets to learn representations that accurately capture the state information of a multi-object environment.  And second, we use these encoders in a reinforcement learning algorithm to train image-based policies capable of manipulating many objects.  Our pair of encoders consists of a convolutional neural network (CNN) which consumes RGB images and is used in our policy network, and a graph neural network (GNN) which directly consumes a set of raw object poses and is used for reward calculation and value estimation.  We evaluate our method on the task of pushing a collection of objects to desired tabletop regions.  Compared to methods which rely only on images or use fixed-length state encodings, our method achieves higher success rates, performs well in the real world without fine tuning, and generalizes to different numbers and types of objects not seen during training.  

<h2>arXiv: <a href="https://arxiv.org/abs/1909.07876">[abs]</a> <a href="https://arxiv.org/pdf/1909.07876.pdf">[pdf]</a>  Code: <a href="https://github.com/matwilso/object_collections">[GitHub]</a></h2>
<h2></h2>


<h2>Videos</h2>

<iframe width="560" height="315" src="https://www.youtube.com/embed/eCf3jamz5IM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/zj8Hne5ssYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<h2>Slides</h2>
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT2hgsS1AoVUsTO23uLOOc3uDRcZH4PmUmS3p1GD--8uIQ9TvxhsDi6OVIYPFMqu111UGqw7H-qup73/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

<br>
<br>
<br>
<br>
<h2>bibtex</h2>
<code>
@article{wilson2019collections,<br>
  title={Learning to Manipulate Object Collections Using Grounded State Representations},<br>
  author={Matthew Wilson and Tucker Hermans},<br>
  journal={Conference on Robot Learning},<br>
  year={2019},<br>
  url={https://arxiv.org/abs/1909.07876}<br>
}
</code>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



</div>
