<template>
  <main class="min-h-screen bg-indigo-100 p-6 sm:py-12">
    <section class="max-w-[800px] mx-auto">
      <h1 class="text-4xl font-bold mb-16">
        <svg width="20" height="20" viewBox="0 0 50 50" fill="none" class="inline">
          <circle  cx="25" cy="25" r="25" fill="#000000"></circle>
        </svg>
        typeful
      </h1>
      <form action="#" method="POST" class="bg-white rounded-lg p-5 space-y-3">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold">Log In</h2>
          <a href="#" class="text-blue-400 transition-transform transform hover:translate-x-2">Sign Up ⯈</a>
        </div>
        <hr />
        <label for="email" class="block">
          <span class="text-gray-700">Email</span>
          <input id="email" type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="john.doe@example.com" required>
        </label>
        <label for="password" class="block">
          <span class="text-gray-700">Password</span>
          <input id="password" type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="********" required>
        </label>
        <input type="submit" class="px-3 py-2 mt-1 block w-full rounded-md border-gray-300 hover:bg-indigo-100 shadow-sm appearance-none focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-50 font-medium cursor-pointer" value="Log In" />
      </form>
    </section>
  </main>
</template>
