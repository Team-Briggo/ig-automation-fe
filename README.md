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

<!-- Publish page -->

- ask user to enter caption
- mediatype - image, video, carousel
- mediaUrl, thumbnailUrl

# Backend Migration Guide

## 1. Move CommentAnalysisService Class to Backend

The entire `CommentAnalysisService` class should be moved to your backend:

```javascript
// MOVE TO BACKEND: /services/commentAnalysisService.js
class CommentAnalysisService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
  }

  async analyzeComment(comment) {
    // ... entire method implementation
  }

  async analyzeCommentsBatch(comments) {
    // ... entire method implementation
  }
}
```

## 2. Create Backend API Endpoints

Create these new API endpoints in your backend:

```javascript
// BACKEND API: /api/comments/analyze-single
POST /api/instagram/comments/analyze-single
{
  "userId": "string",
  "commentText": "string"
}

// BACKEND API: /api/comments/analyze-batch
POST /api/instagram/comments/analyze-batch
{
  "userId": "string",
  "mediaId": "string",
  "comments": [
    {
      "id": "string",
      "text": "string"
    }
  ]
}

// BACKEND API: /api/comments/get-analysis
GET /api/instagram/comments/analysis/:mediaId?userId=string
```

## 3. Replace Frontend Service with API Calls

Replace the frontend service instantiation and calls with API calls:

```javascript
// REMOVE FROM FRONTEND:
const analysisService = useRef(null);

useEffect(() => {
  if (apiKey) {
    analysisService.current = new CommentAnalysisService(apiKey);
  }
}, [apiKey]);

// REPLACE WITH:
const analyzeCommentsBatch = async (comments) => {
  try {
    const response = await fetch("/api/instagram/comments/analyze-batch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        mediaId: post.id,
        comments: comments.map((c) => ({ id: c.id, text: c.text || "" })),
      }),
    });

    if (!response.ok) {
      throw new Error("Analysis failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Analysis error:", error);
    throw error;
  }
};
```

## 4. Update Frontend handleStartAnalysis Function

```javascript
// REPLACE THIS FUNCTION:
const handleStartAnalysis = async () => {
  if (!analysisService.current) {
    alert(
      "Please set your Google API key in environment variables (GOOGLE_API_KEY)"
    );
    return;
  }

  if (comments.length === 0) {
    alert("No comments to analyze");
    return;
  }

  setIsAnalyzing(true);
  setAnalysisResults([]);

  try {
    const results = await analysisService.current.analyzeCommentsBatch(
      comments
    );
    setAnalysisResults(results);
    setShowAnalysis(true);
  } catch (error) {
    console.error("Analysis failed:", error);
    alert("Analysis failed. Please check your API key and try again.");
  } finally {
    setIsAnalyzing(false);
  }
};

// WITH THIS:
const handleStartAnalysis = async () => {
  if (comments.length === 0) {
    alert("No comments to analyze");
    return;
  }

  setIsAnalyzing(true);
  setAnalysisResults([]);

  try {
    const results = await analyzeCommentsBatch(comments);
    setAnalysisResults(results);
    setShowAnalysis(true);
  } catch (error) {
    console.error("Analysis failed:", error);
    alert("Analysis failed. Please try again.");
  } finally {
    setIsAnalyzing(false);
  }
};
```

## 5. Remove Frontend Dependencies

Remove these from frontend:

```javascript
// REMOVE THESE LINES:
const [apiKey, setApiKey] = useState(
  "AIzaSyDepjlF-cKFs_RvMnsmRa86-tR2VMNpLLU" || ""
);
const analysisService = useRef(null);

// REMOVE THIS useEffect:
useEffect(() => {
  if (apiKey) {
    analysisService.current = new CommentAnalysisService(apiKey);
  }
}, [apiKey]);
```

## 6. Add API Handler Functions

Add these to your existing API handler file:

```javascript
// ADD TO: /lib/apiHandler.js
export const analyzeCommentsAPI = async (userId, mediaId, comments) => {
  const response = await fetch("/api/instagram/comments/analyze-batch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      mediaId,
      comments,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze comments");
  }

  return await response.json();
};

export const getCommentAnalysisAPI = async (userId, mediaId) => {
  const response = await fetch(
    `/api/instagram/comments/analysis/${mediaId}?userId=${userId}`
  );

  if (!response.ok) {
    throw new Error("Failed to get analysis");
  }

  return await response.json();
};
```

## 7. Backend Environment Variables

Move API key to backend environment:

```bash
# BACKEND .env
GOOGLE_API_KEY=AIzaSyDepjlF-cKFs_RvMnsmRa86-tR2VMNpLLU
```

## 8. Optional: Cache Analysis Results

Consider caching analysis results in backend database to avoid re-analyzing same comments.

## Summary of Changes:

### Frontend (Remove/Modify):

- Remove `CommentAnalysisService` class
- Remove `apiKey` state and related useEffect
- Replace service calls with API calls
- Update `handleStartAnalysis` function

### Backend (Add):

- Add `CommentAnalysisService` as a backend service
- Create analysis API endpoints
- Add environment variable for API key
- Optionally add database caching for results
