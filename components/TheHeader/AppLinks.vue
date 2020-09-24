<template>
  <ul class="nav-list">
    <li class="nav-item dropdown" @click="isOpen = !isOpen">
      servizi
      <span class="caret" :class="{ open: isOpen }">&#129043;</span>
      <ul class="sub-nav" :class="{ open: isOpen }">
        <li class="nav-item sub">
          <nuxt-link to="/valutazione-consulenza-strategia"
            >valutazione, consulenza e strategia</nuxt-link
          >
        </li>
        <li class="nav-item sub">
          <nuxt-link to="/naming-loghi-brandidentity"
            >naming, loghi e brand identity</nuxt-link
          >
        </li>
        <li class="nav-item sub">
          <nuxt-link to="/creazione-siti-web">creazione siti web</nuxt-link>
        </li>
        <li class="nav-item sub">
          <nuxt-link to="/ottimizzazione-seo">ottimizzazione e SEO</nuxt-link>
        </li>
        <li class="nav-item sub">
          <nuxt-link to="/creazione-piani-editoriali"
            >creazione di piani editoriali</nuxt-link
          >
        </li>
        <li class="nav-item sub">
          <nuxt-link to="/social-media-management"
            >social media management</nuxt-link
          >
        </li>
        <li class="nav-item sub">
          <nuxt-link to="/creazione-contenuti">creazione contenuti</nuxt-link>
        </li>
      </ul>
    </li>
    <li class="nav-item"><nuxt-link to="/by-veeri">by veeri</nuxt-link></li>
    <li class="nav-item"><nuxt-link to="/about">about</nuxt-link></li>
    <li class="nav-item"><nuxt-link to="/contatti">contatti</nuxt-link></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-list {
  display: block;

  @include for-size(medium, from) {
    display: flex;
  }
}

.nav-item {
  display: block;
  font-size: 2rem;
  padding-bottom: 16px;

  .caret {
    display: inline-block;
    animation: rotateBack 0.3s ease-out forwards;

    &.open {
      animation: rotate 0.3s ease-out forwards;
    }
  }

  .sub-nav {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;

    &.open {
      max-height: 238px;
    }

    @include for-size(medium, from) {
      position: absolute;
      background-color: white;
      margin-left: -16px;
      padding: 0 16px;
      &.open {
        max-height: 238px + 16px;
        padding-bottom: 16px;
      }
    }
  }

  &.sub:first-child {
    padding-top: 16px;
  }

  &.sub:last-child {
    padding-bottom: 0;
  }

  &.sub a {
    font-family: $font-testo;
    font-size: 1rem;
  }

  @include for-size(medium, from) {
    &:not(.sub) {
      margin: 0 10px;
      padding-bottom: 0;
    }
  }
}

.dropdown {
  cursor: pointer;
}

.nav-item a,
.dropdown {
  display: block;
  font-family: $font-black;
  color: $blu;

  @include on-event() {
    color: darken($blu, 20%);
  }
}

@keyframes rotate {
  0% {
    transform: translateY(0) rotateX(0) scaleY(1) skewY(0);
  }
  50% {
    transform: translateY(50%) rotateX(-90deg) scaleY(0) skewY(45deg);
  }
  100% {
    transform: translateY(0) rotateX(-180deg) scaleY(1) skewY(0);
  }
}
@keyframes rotateBack {
  0% {
    transform: translateY(0) rotateX(-180deg) scaleY(1);
  }

  50% {
    transform: translateY(-50%) rotateX(-90deg) scaleY(0);
  }
  100% {
    transform: translateY(0) rotateX(0) scaleY(1);
  }
}
</style>
