# Wake Opinions

* Accessibility is the top priority
* Abstract to the point of product, operations, or professional
  decisions
* Flexibility reduces accessibility (except when it doesn't)

Wake is the toolroom where product development is the workshop. In the
workshop you need to get the product working and so you bang on it and
get it good enough to release and learn for the next iteration. These
are the tools you use for that so they should work well together,
whould work well with the shop environment, and should be
reliable. You don't want to be solving problems with your tools when
you are trying to solve problems with your product.

Therefore tools need to be built with even more accurate and reliable
tools! JavaScript, Python, and Ruby are great for product development,
but not for tool development. We need the AA rated surface plate, and
the toolroom lathe not the B rated plate and the workhorse shop
lathe.

## Bets

Let's make some bets but let's not get idealist about it. Practicality
is essential to accessibility.

### WASM

Let's bet on WebAssembly. I've (Jesse) always really disliked
JavaScript, even TypeScript, though it does make dramatic
improvements. There will be times where TypeScript is the right tool
for the job (like React probably) but whenever we can, or whenever
what we are doing exceeds some threshold of complexity, let's try
tapping WASM in.

Let's also try replacing Docker with WASM for our services.

### Types

Let's bet on type safety. Let's bet that correctness is worth the
extra development time that strongly typed languages have for the
abstractions that we've learned that we like.

Let's learn what we like in lanugages that offer tight iteration
(Python, Ruby, JavaScfript, etc.) but once learned let's get them
correct by reimplementing them in languages that give better
guarantees. (Rust!, Haskell?!?)

### Functional Composability

Functional programming has a compelling composability and complexity
management promise. Composability is THE way to manage
complexity. Let's bet on that.

# Import This

* Beautiful is better than ugly.
* Explicit is better than implicit.
* Simple is better than complex.
* Complex is better than complicated.
* Flat is better than nested.
* Sparse is better than dense.
* Readability counts.
* Special cases aren't special enough to break the rules.
* Although practicality beats purity.
* Errors should never pass silently.
* Unless explicitly silenced.
* In the face of ambiguity, refuse the temptation to guess.
* There should be one-- and preferably only one --obvious way to do it.
* Although that way may not be obvious at first unless you're Dutch.
* Now is better than never.
* Although never is often better than *right* now.
* If the implementation is hard to explain, it's a bad idea.
* If the implementation is easy to explain, it may be a good idea.
* Namespaces are one honking great idea -- let's do more of those!