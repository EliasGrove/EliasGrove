---
title: Blog
layout: layout.njk
---

# Blog

Updates, fragments, essays — all the pieces between the books.

---

{% for post in collections.post | reverse %}
### [{{ post.data.title }}]({{ post.url }})
<small>{{ post.date | date("MMMM d, yyyy") }}</small>

{{ post.templateContent | truncate(200, true, "...") }}

---

{% endfor %}
