## The problem

Icarus and Daedalus are imprisoned.  They plan to escape using numbers
to fly.  Each pick a random number, and based on whether it's even or
odd, they halve it or triple and add/subtract one as follows:

Icarus:
1. Pick a number
2. If even, then halve it.
2. If odd, triple it, and add one.

Daedalus:
1. Pick a number
2. If even, then halve it.
3. If odd, triple it, and subtract one.

They continue to do this, using the result as input.  If after doing
this over and over they end up with 1, they will crash.  So, they pick
another number, and try again.

Mathematicians have apparently never found a number that doesn't
eventually resolve to 1.


## My Algorithm

I tried all numbers between 0 and 100,000 for each God.  The first
value is the number the God used and the second is the number of
attempts for that number.

```
Icarus: 99999/100224
Daedalus: 99941/100122
```
