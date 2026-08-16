# Example: Wi-Fi Connection Algorithm

## BMIS 263 -- Week 1

---

## The Problem

Write an algorithm for connecting a phone to a Wi-Fi network. Unlike the toothbrushing algorithm, this one requires **branching** -- doing different things depending on the situation.

---

## Algorithm

```
1.  Unlock the phone
2.  Open the Settings app
3.  Tap on "Wi-Fi" (or "Network & Internet," depending on the phone)
4.  Check whether Wi-Fi is currently turned on
5.  IF Wi-Fi is turned off:
      5a. Tap the Wi-Fi toggle to turn it on
      5b. Wait 3 seconds for the phone to scan for available networks
6.  Read the list of available networks displayed on screen
7.  IF the desired network appears in the list:
      7a. Tap on the network name
      7b. Go to step 8
8.  IF the network did NOT appear in the list:
      8a. Tap "Scan" or pull down to refresh the list
      8b. Wait 3 seconds
      8c. IF the network still does not appear:
            8c-i.   The network may be out of range or hidden
            8c-ii.  Stop -- the connection cannot be made from this location
      8d. IF the network now appears:
            8d-i. Tap on the network name
9.  IF the phone prompts for a password:
      9a. Type the Wi-Fi password using the on-screen keyboard
      9b. Double-check the password for typos
      9c. Tap "Connect" or "Join"
10. IF the phone does NOT prompt for a password (open network):
      10a. The phone attempts to connect automatically
11. Wait up to 10 seconds for the connection attempt
12. IF the status shows "Connected":
      12a. Connection successful -- done
13. IF the status shows "Authentication error" or "Failed":
      13a. Tap on the network name
      13b. Tap "Forget this network"
      13c. Go back to step 6 and try again with the correct password
14. IF you have tried 3 times and the connection still fails:
      14a. Restart the phone
      14b. After restart, go back to step 1
      14c. If it still fails after restart, the problem is likely with the network, not the phone
```

---

## What This Teaches

### Branching (Conditional Logic)

Notice the IF statements throughout. The algorithm does not follow a single straight path -- it makes **decisions** based on the current situation. This is called **conditional logic**, and it is one of the most fundamental concepts in programming. You will implement this in JavaScript using `if/else` statements in Week 9.

### Error Handling

Steps 13 and 14 deal with what happens when things go wrong. A naive algorithm would assume the connection always works. A good algorithm (and a good program) plans for failure. This connects directly to the "reliability" characteristic of a good program from the lecture.

### Repetition (Loops)

Step 13c says "go back to step 6 and try again." This is a **loop** -- repeating a set of steps. Step 14 limits the loop ("if you have tried 3 times") to prevent it from running forever. You will implement loops in JavaScript in Week 10.

### Nesting

Some IF statements are inside other IF statements (step 8c is inside step 8, which is inside the broader flow). This is called **nesting**, and it appears constantly in real programs. For now, just notice that decisions can contain other decisions within them.

---

## Key Takeaway

Even a task as ordinary as connecting to Wi-Fi, when described precisely enough for a machine, involves conditions, branches, error handling, and repetition. These are not abstract computer science concepts -- they are descriptions of how decisions actually work. Programming is the discipline of writing them down precisely.
