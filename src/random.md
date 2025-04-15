---
title: Random Thoughts {# <--- Title updated #}
layout: layout.njk
eleventyExcludeFromCollections: true # Important: Prevents build errors
pageClass: blog # For potential specific styling
---

# Random Thoughts {# <--- Also update the H1 on the page if you like #}

Fragments, notes, thoughts caught in the net.

---

{# Loop through posts, newest first. Assumes posts have 'post' tag #}
{%- for post in collections.post | reverse -%}
  <article>
    <h2><a href="{{ post.url | url }}">{{ post.data.title }}</a></h2>
    {# Check if date exists before trying to format #}
    {%- if post.date -%}
      <p><small>Published on: {{ post.date | date("MMMM d,<x_bin_534>") }}</small></p>
    {%- endif -%}
    {# Excerpt could go here later #}
  </article>
  {# Add a separator unless it's the last post #}
  {% if not loop.last %}
  <hr style="border: 0; border-top: 1px solid #333; margin: 2rem 0;">
  {% endif %}
{%- else -%}
  <p>No posts yet. The ink is dry.</p>
{%- endfor -%}
