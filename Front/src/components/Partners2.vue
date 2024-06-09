<template>
    <div class="big_main">
        <div class="partners">
            <h1>Наши партнёры</h1>     
            <button class="b1" type="submit">Стать партнёром</button>    
        </div>
        <div class="main">
            <div class="group_1">
                <div class="block" id="1"><a href="#"><img src="../assets/partners/вк.svg" alt="VK"></a></div>
                <div class="block" id="2"><a href="#"><img src="../assets/partners/1с.svg" alt="1C"></a></div>
                <div class="block" id="3"><a href="#"><img src="../assets/partners/росатом.svg" alt="Rosatom"></a></div>
                <div class="block" id="4"><a href="#"><img src="../assets/partners/хх.svg" alt="HH"></a></div>
            </div>
            <div class="group_2">
                <div class="block" id="5"><a href="#"><img src="../assets/partners/вк1.svg" alt="VK_2"></a></div>
                <div class="block" id="6"><a href="#"><img src="../assets/partners/касперский.svg" alt="Kaspersky"></a></div>
                <div class="block" id="7"><a href="#"><img src="../assets/partners/ржд.svg" alt="RZD"></a></div>
                <div class="block" id="8"><a href="#"><img src="../assets/partners/северсталь.svg" alt="Severstal"></a></div>
            </div>
        </div>
        
    </div>
  
</template>

<script>
export default {
    name: 'Partners2'
}
</script>

<style scoped>
.partners {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
h1 {
    margin-right: 
}
button {
    height: 7dvh;
    width: 15dvw;
    background-color: #000;
    border: #000;
    border-radius: 5px;
    color: #fff;
    font-size: 1.2rem;
}
button:hover {
    background-color: #402FFF;
}
.big_main {
    padding-bottom: 10dvh;
}
.main {
    display: flex;
    flex-direction: column;
    row-gap: 5dvw;
    margin-top: 10dvh;
    justify-content: center;
    padding: 0 auto;
}
.group_1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 4dvh;
}
.group_2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 4dvh;
}
.block {
    height: 7dvh;
    width: 15dvw;
    background-color: #000;
    margin: 1dvh 2dvw;
    padding-top: 3dvh;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: #000;
    border-radius: 5px;
}
img {
    height: 4dvh;
    width: 10dvw;
}
</style>