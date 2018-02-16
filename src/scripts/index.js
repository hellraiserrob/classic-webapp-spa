// import Vue from 'vue/dist/vue.js';
import Vue from 'vue';
// import $ from 'jquery';

Vue.config.productionTip = false;

// import { add, subtract, merge } from './components/utils.js';
import './index.scss';


import App from './components/App.vue';

// const Home = { 
//   template: '<div>{{message}}</div>',
//   data: function() {
//     return {
//       message: 'Hello World',
//     };
//   }
// };



new Vue({
  data: {
    message: 'Hello Vue!'
  },
  render: h => h(App),
}).$mount('#app');

// console.log('hello');


// let name = 'rob';

// console.log(`my name is ${name}...`);

// console.log(`the sum is ${add(1, 5)}`);
// // console.log(`the sum is ${subtract(10, 5)}`);


// let a = {
//     forename: 'Rob'
// };

// let b = {
//     surname: 'Phillips'
// };

// let c = merge(a, b);

// console.log(`user object ${c.forename} ${c.surname}`);



// $('.form-group-text input').on('focus', (e) => {
    
//     let $input = $(e.target);
//     let $parent = $input.parent();

//     $parent.addClass('float');

// });

// $('.form-group-text input').on('blur', (e) => {
    
//     let $input = $(e.target);
//     let $parent = $input.parent();

//     if($input.val() === '') {
//         $parent.removeClass('float');
//     }

// });