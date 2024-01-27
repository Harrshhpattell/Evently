#Evently  
Evently is a platform for event management.

1. install shadecn from shadesn ui website
2. install uploadthing/tw (for file uploading like img in nextjs)----npm i uploadthing/tw
3. inline fold extension ( it hide className )
4. es7+ extension ( rfc basic )
5. setup clerk (authorization) (login emailid: 8320@gmail.com)
   -- first create project in clerk
   -- get clerk key and public clerk key store in our .env.local file
   -- install some dependency as per clerk doc like
   -- npm install @clerk/nextjs
   -- add clerkProvide in layout file as per doc
   -- create new file middleware.ts file and copy code from clerk doc and paste it
   -- add public and ignore route in middleware file
   -- Login and profile component from clerk
6. add "sheet" ui from shadecn for mobile nav toggle open close
   -- 'npx shadcn-ui@latest add sheet'
7. add Separator ui from shadecn
   -- 'npx shadcn-ui@latest add separator'
