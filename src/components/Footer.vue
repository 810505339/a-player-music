<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <a
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="http://github.com/810505339/a-player-music"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
