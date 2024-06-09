<template>
    <input class="left" type="button" name="left" style="color: #402FFF;" value="&#5130;" />
    <input class="right" type="button" name="right" style="color: #402FFF;" value="&#5125;" />
    <!-- <input class="left" type="button" name="left" style="color: #402FFF;" value="&#9668;" /> -->
    <!-- <input class="right" type="button" name="right" style="color: #402FFF;" value="&#9658;" /> -->
</template>

<script>
export default {
    name: 'Buttons',
}
</script>

<style scoped>
.left {
  position: absolute;
  background: white;
  font-family: "JetBrains Mono";
  color: #D9D9D9;
  font-size: 20px;
  width: 55px;
  height: 55px;
  border: 2px solid #402FFF;
  border-radius: 50px;
  margin-left: 15px;
}
.right {
  position: absolute;
  background: white;
  font-family: "JetBrains Mono";
  color: #D9D9D9;
  font-size: 20px;
  width: 55px;
  height: 55px;
  border: 2px solid #402FFF;
  border-radius: 50px;
  margin-left: 1820px;
}
</style>