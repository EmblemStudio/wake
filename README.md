# Wake

A collection of opinionated tools, libraries, and patterns born of
experience. Like a wake of vultures circiling product development
looking for tasty morsels.

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
* **services**: Opinionated backend services
* **boilerplate**: Boilerplate projects and implementations
* **patterns**: Like the gang of four book. These are our oppinions that
  can't be put into code.
* **design-system**: It'll be good to have a base design system. Yeah
  this is a boilerplate, but it feels different enough to be upgraded
  here.

Let's put global ops automation and it's documentation in the root
folder. Probably defering to specific packages for implementations and
dependencies. (Bazel?!?)

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
funderstand this code better because we've learned these patterns from
experience and expect to use them again. Documentation here will be
more valuable and will be easier to write so let's do a good job of
it.

# Managed Services

Let's keep in mind that we can offer wake as a managed service for
anyone using it.

