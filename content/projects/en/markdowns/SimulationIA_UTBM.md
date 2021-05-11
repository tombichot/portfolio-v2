Simulation of a crowd (humans vs. zombies) with Unity3D in a student project with Maxime LUCAS. 
<br>
<br>
At the beginning of the development we proceeded to a research phase on the solutions that could be used with Unity3D. We decided to start on a rather simple solution, the use of the pathfinder tool proposed by Unity. Zombies walk randomly and look for a human to go to. Humans, on the other hand, seek to go to the nearest safe zone. When they encounter one or more zombies, they go in the opposite direction for a while and then return to their original goal. The development of this solution is quite fast and proves to be quite effective in addition to meeting the expectations of the project. 
<br>
<br>
During our research phase, we became aware of the MLAgent tool, which allows Machine Learning in Unity. This solution was initially discarded because it was a bit complex, but I still liked it very much. So I decided to give myself 2 days to develop an alternative solution with MLAgent. 
<br>
<br>
First contact with Machine Learning was successful, since I managed to train a human with a very convincing behavior (zombies keep the behavior mentioned above). The training lasted about 20 hours once the environment was configured with the right parameters. The most interesting part was the analysis phase in order to know what bonus and malus to give to the agent so that he could progress efficiently. 
<br>
<br>
Link to a small demo :<ins style="color:DodgerBlue;"> https://youtu.be/ELFRRsvAH84</ins>