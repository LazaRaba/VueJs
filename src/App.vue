<template>
  <!-- <div class="container"> -->
    <h1 class="text-center">Les Amis</h1>
    <ul class="list-group">
      <un-ami v-for="unAmi in lesAmis" 
      :key="unAmi.id" 
      :leNom="unAmi.name" 
      :lePhone="unAmi.lePhone" 
      :leMail="unAmi.leMail" 
      :premium="unAmi.premium"
      @mon-event-premium="afficherStatusPremium"
      :id="unAmi.id">
      </un-ami>
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
            premium:true
        },
        {
            id: 'robert pires',
            name: 'Pires Junior',
            lePhone: '01234 5678 991',
            leMail: 'coco@lasticot.com',
            premium:true
        },
        {
            id: 'janine',
            name: 'Janine DeLavega',
            lePhone: '09876 543 221',
            leMail: 'janine@delavega.com',
            premium:false
        },
    ],
    }
  },
  methods:{
        afficherStatusPremium(leIdDansUnAmi){
        let unAmiIdentified = this.lesAmis.find(unTruc=>unTruc.id===leIdDansUnAmi);
        unAmiIdentified.premium=!unAmiIdentified.premium;
        console.log('amiIdenditified :', unAmiIdentified);
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
