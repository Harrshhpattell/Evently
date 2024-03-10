#Evently  
Evently is a platform for event management.

1. install shadecn from shadesn ui website
2. install uploadthing/tw (for file uploading like img in nextjs)----npm i uploadthing/tw
3. inline fold extension ( it hide className )
4. es7+ extension ( rfc basic (rafce) )
5. setup clerk (authorization)  
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
   ![image](https://github.com/Harrshhpattell/Evently/assets/102842153/87aa4dd2-afc5-43ec-8ca7-b47c8a80e0c8)
   ![image](https://github.com/Harrshhpattell/Evently/assets/102842153/209ee9c0-98d3-4e14-b515-1318158c3dd5)

8. footer part done
9. Hero Section done
   ![image](https://github.com/Harrshhpattell/Evently/assets/102842153/840632dd-6080-438b-9dd2-b7aaa5e06439)

10. connecting our application with database  
    -- npm i mongodb mongoose
11. Connected to mongodb database and created user and event model
12. Sync Clerk data to your backend with webhooks
    ![image](https://github.com/Harrshhpattell/Evently/assets/102842153/ee778f5e-a1ab-4cf3-9229-170ea30eb09c)

    (https://clerk.com/docs/users/sync-data)  
    (https://clerk.com/docs/integrations/webhooks)  
    -- npm install svix  
    -- creating new folder in app/api/webhook/clerk/route.ts and paste it code as per documentation of clerk  
    -- creating action folder in lib folder lib/action/user.actions.ts  
    -- updating utli.ts file like handling erros function  
    -- npm i query-string  
    -- created 'create new user' in user.action.ts file

    -- create new category model  
    -- create new order model

    -- deploy website and add webhook in clerk after that copy secret key of webhook and add in local env and deploy env  
    -- succesfully store our login data to our database using webhooks.

13. creating new page in root/events/create/page.tsx and root/events/78/update/page.tsx  
    -- installing shadecn form components  
    -- npx shadcn-ui@latest add form  
    -- npx shadcn-ui@latest add input  
    -- npx shadcn-ui@latest add select  
    -- npx shadcn-ui@latest add alert-dialog  
    -- npx shadcn-ui@latest add textarea

14. creating new account in uploadthing and copy keys and paste it on my project .env.local file  
    -- npm install uploadthing @uploadthing/react
    -- npm install react-datepicker --save and then (npm i --save-dev @types/react-datepicker)  
    -- npx shadcn-ui@latest add checkbox              
    -- npm update uploadthing ( problem in api/uplodething/core.ts)

15. create event (Collection, Card, Pagination component),  
     -- created event create page and after submitting it redirect in event detail page,      
     -- created event detail page,     
     -- created show event in home page.        