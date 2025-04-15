---
title: Random Thoughts
layout: layout.njk
eleventyExcludeFromCollections: true # Important: Prevents build errors
# pageClass: blog <-- Removed this line
---

# Random Thoughts

Fragments, notes, thoughts caught in the net.

--- {# Use Markdown HR #}

{# Loop through posts, newest first. Assumes posts have 'post' tag #}
{%- for post in collections.post | reverse -%}
  <article>
    <h2><a href="{{ post.url | url }}">{{ post.data.title }}</a></h2>
    {# Check if date exists before trying to format #}
    {%- if post.date -%}
      <p><small>Published on: {{ post.date | date("MMMM d, yyyy") }}</small></p> {# Using built-in filter #}
    {%- endif -%}
    {# Excerpt could go here later #}
  </article>
  {# Add a separator unless it's the last post #}
  {% if not loop.last %}
  --- {# Use Markdown HR #}
  {% endif %}
{%- else -%}
  <p>No posts yet. The ink is dry.</p>
{%- endfor -%}
