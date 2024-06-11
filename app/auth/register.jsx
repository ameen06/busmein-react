import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const register = () => {
  return (
    <View class="w-full min-h-screen relative">
        <img class="w-full" src="https://images.unsplash.com/photo-1658356162600-2923b8d8bb60?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background image">

        <div class="w-full h-full absolute top-0 left-0 z-10 p-2 flex justify-center items-center">
          <div class="w-full bg-white max-w-sm rounded-xl shadow-md">
            <div class="w-full px-6 py-8 space-y-4">
              <!-- auth page switch buttons -->
              <div class="w-full rounded-lg border-[2px] border-blue-800 flex justify-center items-center p-0">
                <a class="w-full text-white font-semibold text-center px-4 py-2.5 bg-blue-800 rounded-md focus:outline-none focus:bg-blue-900">
                  SIGN UP
                </a>
                <router-link :to="{name: 'login'}" class="w-full text-blue-800 font-semibold text-center px-4 py-2.5 bg-white rounded-md focus:outline-none focus:bg-blue-900">
                  LOGIN
                </router-link>
              </div>

              <!-- inputs -->
              <div class="w-full space-y-4">
                <!-- name -->
                <div class="w-full relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg  class="w-5 h-5 fill-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>
                  </div>
                  <input type="text" v-model="name" class="w-full bg-white border-2 border-blue-800 text-gray-900 text-sm rounded-lg focus:ring-blue-200 block ps-10 p-2.5 focus:outline-none focus:ring-4 placeholder-blue-800" placeholder="Enter Full Name" required>
                </div>

                <!-- email -->
                <div class="w-full relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-5 h-5 fill-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                    </svg>
                  </div>
                  <input type="email" v-model="email" class="w-full bg-white border-2 border-blue-800 text-gray-900 text-sm rounded-lg focus:ring-blue-200 block ps-10 p-2.5 focus:outline-none focus:ring-4 placeholder-blue-800" placeholder="Enter Email">
                </div>

                <!-- phone -->
                <div class="w-full relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-5 h-5 fill-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
                    </svg>
                  </div>
                  <input type="text" v-model="phone" class="w-full bg-white border-2 border-blue-800 text-gray-900 text-sm rounded-lg focus:ring-blue-200 block ps-10 p-2.5 focus:outline-none focus:ring-4 placeholder-blue-800" placeholder="Enter Phone" required>
                </div>

                <button type="button" v-on:click.prevent="register" class="w-full text-white bg-blue-800 disabled:bg-blue-600 font-semibold rounded-lg px-5 py-4 focus:outline-none uppercase inline-flex items-center justify-center gap-2" :disabled="isLoading">
                  <svg v-if="isLoading" aria-hidden="true" role="status" class="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" class="fill-blue-500"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  Get Started
                </button>
              </div>

              <!-- social logins -->
              <div class="w-full text-center">
                <p class="text-blue-800 font-semibold text-sm">OR</p>
              </div>

              <!-- google facebook apple login-->
              <div class="w-full flex justify-center items-center gap-2">
                <!-- Google -->
                <button class="w-auto rounded-full">
                  <div class="p-2 border-2 border-blue-900 rounded-full flex justify-center items-center">
                    <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                      <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" ></path>
                      <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                      <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                  </div>
                </button>
                <!-- facebook -->
                <button class="w-auto rounded-full">
                  <div class="p-2 border-2 border-blue-900 rounded-full flex justify-center items-center">
                    <svg class="w-8 h-8 fill-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                      <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                    </svg>
                  </div>
                </button>
                <!-- apple -->
                <button class="w-auto rounded-full">
                  <div class="p-2 border-2 border-blue-900 rounded-full flex justify-center items-center">
                    <svg class="w-8 h-8 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                      <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </View>
  )
}

export default register

const styles = StyleSheet.create({})