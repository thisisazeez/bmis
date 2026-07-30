# Example: Toothbrushing Algorithm

## BMIS 263 -- Week 1

---

## The Problem

Write a step-by-step algorithm, in plain English, that a robot could follow to brush its teeth. The robot has no judgment -- every step must be explicit.

---

## First Attempt (Too Vague)

```
1. Pick up toothbrush
2. Put toothpaste on it
3. Brush teeth
4. Rinse
5. Done
```

**Why this fails:** Step 3 ("brush teeth") is a goal, not an instruction. A robot would not know what motion to use, how long to brush, or which teeth to start with. Step 4 ("rinse") is ambiguous -- rinse what? The brush? Your mouth? Both?

---

## Revised Algorithm (Precise)

```
1.  Pick up the toothbrush with your dominant hand
2.  Hold the toothpaste tube with your other hand
3.  Remove the cap from the toothpaste tube
4.  Squeeze a pea-sized amount of toothpaste onto the bristles of the toothbrush
5.  Replace the cap on the toothpaste tube
6.  Put the toothpaste tube down
7.  Turn on the cold water tap
8.  Hold the bristles under the running water for 2 seconds
9.  Turn off the tap
10. Open your mouth
11. Place the bristles against the outer surfaces of your upper-right teeth
12. Move the toothbrush in small back-and-forth strokes for 30 seconds
13. Move to the outer surfaces of your upper-front teeth
14. Brush in small back-and-forth strokes for 30 seconds
15. Move to the outer surfaces of your upper-left teeth
16. Brush in small back-and-forth strokes for 30 seconds
17. Repeat steps 11-16 for your lower teeth
18. Tilt the toothbrush vertically and brush the inner surfaces of your upper teeth for 30 seconds
19. Tilt the toothbrush vertically and brush the inner surfaces of your lower teeth for 30 seconds
20. Lay the bristles flat on the chewing surfaces of your teeth
21. Brush the chewing surfaces using a back-and-forth motion for 30 seconds
22. Gently brush the surface of your tongue from back to front
23. Turn on the cold water tap
24. Hold the toothbrush under the running water and rotate it to rinse off the toothpaste
25. Turn off the tap
26. Fill a cup with water (or cup your hand under the tap)
27. Take a mouthful of water
28. Swish the water around your mouth for 5 seconds
29. Spit the water into the sink
30. Place the toothbrush back in its holder, bristles facing up
```

---

## What This Teaches

1. **Precision matters.** What a human understands as one step ("brush teeth") decomposes into many explicit steps for a machine.
2. **Order matters.** Putting toothpaste on before picking up the brush does not work. Rinsing your mouth before brushing defeats the purpose.
3. **Assumptions are dangerous.** The first version assumes the robot knows what "brush" means. It does not.
4. **This is what programming feels like.** When you start writing JavaScript in a few weeks, you will find yourself breaking down tasks into small, precise steps just like this. The language changes; the discipline does not.
