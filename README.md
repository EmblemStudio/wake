# wake

A collection of opinionated tools, libraries, and patterns born of
experience. Or group of vultures.

**This is a monorepo ;)**

May this become a deep repository of valuable abstractions that were
possibly built for specific applications. Let's take the time to
generalize the good ideas we have when working on specific projects so
we don't have to do that work next time.

May this be a ratchet that captures the progress we make in the wake
of product development for future products as we build.

# Structure

Let's structure it like this

* **libs**: libraries of various languages for various purposes
* **utils**: tools and utility programs
* **boilerplate**: Boilerplate projects and implementations
* **patterns**: Like the gang of four book. These are our oppinions that
  can't be put into code.

# Documentation

Let's put documents near their subjects and follow some principles.

1. Keep the file system scannable. Put relevant words in document file
   names. Single purpose documents are good. Maintain a balance
   between document length and filesystem scannability. Too many files
   become impossible to scan, but that number is probably higher than
   the number of documets you have.
2. Beginners look for verbs "how to **build** the project" or
   "**test** the project"
3. Experts look for nouns "the **logger**", or "**accessibility
   options**"

Let's also do a good job documenting the code. This is not product
code (which is still good to document), this is tool code. We
understand this code better because we've learned these patterns from
experience and expect to use them again. Documentation here will be
more valuable and will be easier to write so let's do a good job of
it.

