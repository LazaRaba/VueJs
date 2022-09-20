<template>
    <div class="container my-1">
        <ul class="list-group">
            <h2 class="list-group-item btn btn-warning " >{{leNom}} {{premium ? 'Ami premium' :'Ami Nul'}}</h2> 
            <button  @click=afficherPremium class="btn btn-success">Premium ?</button>
            <button @click="afficherDetails"  class="btn btn-primary">{{detailsVisibles? 'Masquer': 'Afficher'}}</button>
            <ul v-if="detailsVisibles" class="list-group">
                <li class="list-group-item">{{lePhone}}</li>
                <li class="list-group-item">{{leMail}}</li>
            </ul>
        </ul>
    </div> 
</template>

<script>
export default {
    // props:[
    //     'leNom',
    //     'lePhone',
    //     'leMail',
    //     'premium'
    // ],
    props:{
      leNom:{type:String, required:true},
      lePhone:{type:String, required:true},
      leMail:{type:String, required:true},
      premium:{type:Boolean, required:false, default:false,
       //validator:function(value){
        // return value==='1'|| value ==='0'}
        },
      id:{type:String, required:false}
    },
    emits:{
      'mon-event-premium': function(id){
        if(id){
          return true;
        }
        else{
          console.warn('Yo Kefen');
          return false;
        }
      }
    },
    data(){
        return{
            detailsVisibles:false,
            // unPote:{
            //     id:'jojo',
            //     name:"jojoLeBarjo",
            //     phone:'123 12346 24',
            //     email:'jojo@barjo.com',
            // },
            // premiumData:this.premium
        }
    },
    methods:{
        afficherDetails(){
            this.detailsVisibles = !this.detailsVisibles;
        },
        afficherPremium(){
            // this.premiumData = !this.premiumData;(pour faire fonctionner le booléen)
            this.$emit('mon-event-premium',this.id);
        },
    },
}
</script>