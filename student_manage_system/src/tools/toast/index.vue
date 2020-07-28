<template>
     <div class="notify" :class="{fadein: showNotify,fadeout: !showNotify}" v-if="exit">
      <div v-if="type=='success'" style="background: lime;color:white;">✔ {{ msg }}</div>
      <div v-else-if="type=='fail'" style="background: red;color:white;">✖ {{ msg }}</div>
      <div v-else-if="type=='warn'" style="background: lightblue:color:white;">😳 {{ msg }}</div>
      <div v-else>未知内容</div>
  </div>
</template>

<style scoped>
        .notify {
            width: 200px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 3px;
            position: fixed;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
        }
        .fadein {
            animation: animate_in .25s;
        }
        .fadeout {
            animation: animate_out .25s;
        }

        @keyframes animate_in {
            0% {
                top: 0;
                opacity: 0;
            }
            100% {
                top: 10%;
                opacity: 1;
            }
        }

        @keyframes animate_out {
            100% {
                top: 0;
                opacity: 0;
            }
            0% {
                top: 10%;
                opacity: 1;
            }
        }
    </style>