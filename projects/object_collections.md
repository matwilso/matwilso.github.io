---
layout: header
title: Object Collections
---

<div align="left" style="width: 50%; margin:0 auto">
<div align="center">

<h1>Learning to Manipulate Object Collections<br>Using Grounded State Representations</h1>

Conference on Robot Learning (CoRL) 2019 <br> <br>
Matthew Wilson and Tucker Hermans <br>
University of Utah<br><br>

</div>

<hr>

<h2>Abstract</h2>
We propose a method for sim-to-real robot learning which exploits simulator state information in a way that scales to many objects.  First, we train a pair of encoders on raw object pose targets to learn representations that accurately capture the state information of a multi-object environment.  And second, we use these encoders in a reinforcement learning algorithm to train image-based policies capable of manipulating many objects.  Our pair of encoders consists of one which consumes RGB images and is used in our policy network, and one which directly consumes a set of raw object poses and is used for reward calculation and value estimation.  We evaluate our method on the task of pushing a collection of objects to desired tabletop regions.  Compared to methods which rely only on images or use fixed-length state encodings, our method achieves higher success rates, performs well in the real world without fine tuning, and generalizes to different numbers and types of objects not seen during training.  

<h2>Arxiv: <a href="todo">[abs]</a> <a href="todo">[pdf]</a>  Code: <a href="https://github.com/matwilso/object_collections">[GitHub]</a></h2>
<h2></h2>


<h2>Videos</h2>

<iframe width="560" height="315" src="https://www.youtube.com/embed/cPsoDO2Tzqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/zj8Hne5ssYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>
<br>
<br>
<br>
<code>
todo: bibtex, later

</code>



</div>
