---
layout: posts
excerpt: Ruby and the double splat
---

Here is a story of me debugging a feature for several hours only to find the issue and wondering why this is a thing. It all starts at the ruby keyword operator.

```ruby
# This method accepts only a keyword argument
def foo(k: 1)
  p k
end

h = { k: 42 }

# This method call passes a positional Hash argument
# In Ruby 2.7: The Hash is automatically converted to a keyword argument
# In Ruby 3.0: This call raises an ArgumentError
foo(h)
  # => demo.rb:11: warning: Using the last argument as keyword parameters is deprecated; maybe ** should be added to the call
  #    demo.rb:2: warning: The called method `foo' is defined here
  #    42

# If you want to keep the behavior in Ruby 3.0, use double splat
foo(**h) #=> 42
```

*but*, what is this double splat operator doing? In the example above I am using a hash and a symbol key. What happens if it is not a symbol key.

```ruby
# This method accepts only a keyword argument
def foo(k: 1)
  p k
end

g = {'k' => 42}

foo(**g)
#  `foo': unknown keyword: "k" (ArgumentError)
#     from (irb):15:in `<main>'
#     from /usr/local/lib/ruby/gems/3.1.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'
#     from /usr/local/bin/irb:25:in `load'
#     from /usr/local/bin/irb:25:in `<main>'
```

So if the keys are not symbols ruby just doesn't know what to do. ArgumentError and tell everyone to use symbols and not strings. No you can use the `transform_keys!` method.

```ruby
# This method accepts only a keyword argument
def foo(k: 1)
  p k
end

g = {'k' => 42}

g.transform_keys!(&:to_sym)

foo(**g) #=> 42
```

This converts all the string methods to symbols. `transform_keys!()` Destructively convert all keys using the block operations. Same as transform_keys but modifies self. Seems nice until this method is in a function you call and try to use the Hash after the function call.

```ruby
# This method accepts only a keyword argument
def foo(k: 1)
  p k
end

def bar(g_hash)
  g_hash.transform_keys!(&:to_sym)
  foo(**g_hash)
end

g = {'k' => 42}

bar(g)

puts g['k'] #=> nil
puts g[:k] #=> 42
```

So if you use this know that it changes the hash and if you use the hash after that just know you will have to use symbols. To access the values and not the string values. 
