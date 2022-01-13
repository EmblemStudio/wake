# cfg

Just enough of a configuration library to get back to what you were
doing.

## Theory (and stories)

Config doesn't need to be very conmplicated for most (all?)
projects. Sometimes in the course of writing some peice of software
one decides that this or that variable should really be configurable
at runtime.

As a developer, in those situations I want to come up with a good
config name and set it up there so I can move on without breaking
flow. I *don't* want to leave to go find the config file, remember how
that works, add it there, then come back and have to get back into
whatever I was doing.

As a developer I don't want to worry about name collisions while I'm
in the flow.

As an operator I want to be able to avoid config name collisions at
runtime

As an operator, I do still want to have a single place to see all the
configuration options, and I want them all to be set in the same way
so I don't have to go digging through code or docs to figure out how
to do it.

As an operator, I want flexibility in how I set configuration so that
I can accomidate evolving operational strategies.

## Strat (and opinions)

1. To fit inline with as little impact as possible, use a very short
   function (`cfg`). Configuration is fundamental enough to warrent
   such a small contraction.
2. Use a simple function interface. `cfg(<name>, [<default value>])`
3. Allow the operator to set a config prefix using a library config
   option
4. Use static analysis to extract configuration names and defaults
   into a standard config requirements and options file.
5. The function checks a cascading list of standard locations when
   looking for config. Check args, then envars, then a standard config
   file location for backends. Check query string, then cookies, then
   local storage in the browser (or another order? maybe a global
   $$__config__$$ object or something, a remote config file?).
6. Write a library per platform and use the appropriate one. A web js
   one, a node.js one, a linux rust one, linux go etc.