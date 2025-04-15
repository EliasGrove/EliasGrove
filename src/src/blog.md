---
title: Journal
layout: layout.njk
---

# Journal

Fragments. Notes. Stuff I didn’t want to forget.

---

{% for post in collections.post | reverse %}
### [{{ post.data.title }}]({{ post.url }})  
<small>{{ post.date | date("MMMM d, yyyy") }}</small>

{{ post.templateContent | truncate(180, true, "...") }}

---

{% endfor %}
