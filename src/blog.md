---
title: 文章列表
---

<script setup>
import articlesByYear from './articles.json'

const years = Object.keys(articlesByYear).sort((a, b) => b.localeCompare(a))
</script>

<div class="article-list">
  <template v-for="year in years" :key="year">
    <section>
      <h2>{{ year }}</h2>
      <ul>
        <li v-for="a in articlesByYear[year]" :key="a.link">
          <a :href="a.link"><span class="date">{{ a.date }}</span> {{ a.text }}</a>
        </li>
      </ul>
    </section>
  </template>
</div>

<style>
.article-list {
  max-width: 800px;
}
.article-list h2 {
  margin-top: 2rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.article-list ul {
  list-style: none;
  padding: 0;
}
.article-list li {
  padding: 0.35rem 0;
}
.article-list .date {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-right: 0.5rem;
  font-family: var(--vp-font-family-mono);
}
</style>
