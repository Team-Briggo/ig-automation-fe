This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

<!-- Dashboard screen -->

- check if user has connect to ig account
- if not, show "connect to ig account button" with some UI similar to Instagram and it's icon in the salt and pepper theme
- if yes, show dashboard
  - Total posts
  - Total followers
  - Total Following
  - etc

<!-- All Posts Listing -->

- show all posts in instagram format
- show post details in modal like instagram [https://www.instagram.com/p/DMQcFFbyN0v/?next=%2F]
- show comments listing in modal - with hide, delete and reply option attached to each comment
- on reply click, show reply form in modal
- show likes views and comments of a post in the modal itself

<!-- Automation page -->

- ask user to select post
- then ask user to select
  - send dm to comments
  - send reply to comments
  - send both
- if user selects "send reply to comments"
  - ask user if they want to reply to all comments or comments with specific keywords only
  - if user selects "comments with specific keywords only", ask user to enter keywords
  - ask user to enter reply message
- if user selects "send dm to comments"
  - ask user if they want to dm to all comments or comments with specific keywords only
  - if user selects "comments with specific keywords only", ask user to enter keywords
  - ask user to enter dm message
    - types of dm
      - normal text message
      - media + text message [attach 1 media only]
      - product carousel
        - same as card, but with a product image [1 image only]
      - card
        - with a card title and title - link of CTA buttons [max 3 buttons]
- if user selects "send both"
  - ask user if they want to reply to all comments or comments with specific keywords only
  - if user selects "comments with specific keywords only", ask user to enter keywords
  - ask user to enter reply message
  - ask user if they want to dm to all comments or comments with specific keywords only
  - if user selects "comments with specific keywords only", ask user to enter keywords
  - ask user to enter dm message
