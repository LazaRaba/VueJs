<template>
  <!-- <div class="container"> -->
    <h1 class="text-center">Les Amis</h1>
    <ul class="list-group">
      <un-ami v-for="unAmi in lesAmis" v-bind:key="unAmi.id" :leNom="unAmi.name" :lePhone="unAmi.lePhone" :leMail="unAmi.leMail"></un-ami>
    </ul>
  <!-- </div> -->
</template>

<script>
export default{
  data(){
    return {
      lesAmis: [
        {
            id: 'lasticot',
            name: 'COCO L ASTICOT',
            lePhone: '01234 5678 991',
            leMail: 'coco@lasticot.com',
        },
        {
            id: 'robert pires',
            name: 'Pires Junior',
            lePhone: '01234 5678 991',
            leMail: 'coco@lasticot.com',
        },
        {
            id: 'janine',
            name: 'Janine DeLavega',
            lePhone: '09876 543 221',
            leMail: 'janine@delavega.com',
        },
    ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
