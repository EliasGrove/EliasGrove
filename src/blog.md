---
layout: layout.njk
title: Blog
eleventyExcludeFromCollections: true
---

# Blog

{% for post in collections.post | reverse %}
### [{{ post.data.title }}]({{ post.url }})
<small>{{ post.date | date: "MMMM d, yyyy" }}</small>

{{ post.templateContent | truncate(180, true, "...") }}
---
{% endfor %}
