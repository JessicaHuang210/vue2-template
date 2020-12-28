<template>
  <div class="w">
    <div class="wrap">
      <iframe
        src="https://rtsp.singdototo.club:17443/rtc.html?token=token001&autoplay=true"
        width="700"
        height="600"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.w {
  max-width: 500px;
  margin: auto;
}
.wrap {
  position: relative;
  padding-bottom: 85%; // This is the aspect ratio
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
