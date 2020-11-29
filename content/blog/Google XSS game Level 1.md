---
title: 'Google XSS game - Level 1'
date: '2020-11-18'
---

Recently I've been reviewing Frontend basics and came across this XSS game made by Google Security Team, I believe. 

Although it was designed at least 4 yrs ago, I found it quite interesting and learned how to launch XSS attacks in various ways through the game. It took me almost 2 hrs to clear all 6 levels. 

### Level 1: Hello, world of XSS
#### Mission Description
This level demonstrates a common cause of cross-site scripting where user input is directly included in the page without proper escaping.

Interact with the vulnerable application window below and find a way to make it execute JavaScript of your choosing. You can take actions inside the vulnerable window or directly edit its URL bar.
#### Mission Objective  
Inject a script to pop up a JavaScript alert() in the frame below.

Once you show the alert you will be able to advance to the next level.

#### Solution

> TL;DR   
> 
> **input `<script>alert('xxx')</script>` into the textbox, click "Search", and then an alert will pop up.**

Look at the source code below: 

```html{2, 5}
<!-- HTML Form -->
<form action="" method="GET">
  <input id="query" name="query" value="Enter query here..."
    onfocus="this.value=''">
  <input id="button" type="submit" value="Search">
</form>
```
```python{5,9}
# Backend
query = self.request.get('query', '[empty]')
    
# Our search engine broke, we found no results :-(
message = "Sorry, no results were found for <b>" + query + "</b>."
message += " <a href='?'>Try again</a>."

# Display the results page
self.render_string(page_header + message + page_footer)
```
The HTML form would send a `GET` request with a query parameter. Its value is what we input into the textbox.
When the server receives the request, it would directly write the value into an HTML response and send it back to our browser without proper escaping.

That's where our attack kicks in. 

Just type `<script>alert('xxx')</script>` into the textbox, click "Search", and then an alert will pop up.