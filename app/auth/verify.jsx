import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const verify = () => {
  return (
    <View>
      <View class="w-full min-h-screen relative">
        <img class="w-full" src="https://images.unsplash.com/photo-1658356162600-2923b8d8bb60?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background image">
      </View>

      <View class="w-full h-full absolute top-0 left-0 z-10 p-2 flex justify-center items-center">
        <div class="w-full bg-white max-w-sm rounded-xl shadow-md">
          <div class="w-full px-6 py-8 space-y-4">
            <!-- inputs -->
            <div class="w-full space-y-4">
              <div class="w-full text-center ">
                <p class="text-xl font-bold text-blue-800">Verify Your Mobile Number </p>
                <p class="text-sm font-medium text-blue-700 mt-1">OTP has been sent to +{{ phone }}</p>
              </div>

              <!-- phone -->
              <div class="w-full">
                <input type="text" v-model="code" class="w-full bg-white border-2 border-blue-800 text-gray-900 text-sm rounded-lg focus:ring-blue-200 block px-5 p-2.5 focus:outline-none focus:ring-4 placeholder-blue-800" placeholder="Enter OTP" required>
              </div>

              <button type="button" v-on:click.prevent="verify" class="w-full text-white bg-blue-800 disabled:bg-blue-600 font-semibold rounded-lg px-5 py-4 focus:outline-none uppercase inline-flex items-center justify-center gap-2" :disabled="isLoading">
                <svg v-if="isLoading" aria-hidden="true" role="status" class="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" class="fill-blue-500"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                Verify & Login
              </button>
            </div>
          </div>
        </div>
      </View>
    </View>
  )
}

export default verify

const styles = StyleSheet.create({})