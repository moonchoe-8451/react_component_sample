# Spotify AI Assistant Chatbox Mock Integration 
This repository features a front end mock implementation of an AI assistant (OpenAI) integrated into the Spotify Web Application to be triggered with the addition of an extra button component. 
This repository only serves as a conceptual proof of concept for a future implementation and contains no relation to the official Spotify sofware. Built using ReactJS (Vite) and Tailwind CSS.

## Inspiration
While Spotify's newest AI DJ provides a laid-back AI experience with music recommendations curated to your listening and preference data, it lacks the functionality and role to let 
the users take control of their own data while leveraging AI as a tool. An AI chatbox enables the user to have direct access to their data and leverage AI's capabilities. 

## Key Features

1) Recommendations
   - Music, artist, album, and playlist recommendations tailored to listening data or tailored to user request needs, paired with "AI Matching Score" calculated from user listening data, public
   data trends and patterns, and acoustic similarities.
2) Lyric Identification
   - Song identifying capabilities with user's partial lyric and descriptive inputs utilyzing Spotify's Lyrics database
3) Playlist Generation
   - Playlist generation capabilities templated from user listening and preference data and generated with user descriptive feedback and song approval/disapproval.

# Demo Components 

1) Spotify Mock Layout
   - Mock Authentication (simple boolean auth context)
   - Header (AI Chatbox button integration)
   - Header Dropdown (mock authentication integration)
2) AI Chatbox Button
3) AI Chatbox
   - User descriptive form input
   - AI conversation layout
4) AI Chatbox Response "Card"
   - User Input Validation
   - Song Recommendation: Title
   - Song Recommendation: Artist
   - Song Recommendation: Cover Picture
   - Song Recommendation: AI Recommendation
6) Mock Data
   - Mock User Data
   - Mock AI Chatbox Responses
   - Mock "API calls" for fetching user data and chat responses
     
# Local Installation
To build and run the development server locally, follow these steps:\
Prerequisites: Node.js
```
git clone https://github.com/moonchoe-8451/react_component_sample.git
cd react_component/react_component_sample/frontend 
npm install
npm run dev 
```


# Notes 2/12/2026
- Although, I had many ideas for this proof of concept as laid out in this README, I couldn't implement every feature and only had the opportunity to lay out the UI groudwork of the component
  prior to the demo. 
- The inspriation for this proof of concept originated from my use of the Spotify Web Player. Although the Spotify Web Player does not have other AI capabilities that I have mentioned as key 
concepts, the Spotify Mobile Apps actually have a beta releases of an AI chatbox specific to playlist generation through user conversation feedback and user song approval/disapproval. 
Prior to this proof of concept, I had no knowledge of such beta testing or features on the mobile apps. 


