Absolutely. We’ll do **Document 1 first**, in full, and then move to Document 2 after you approve it.

 # Document 1 — Kiamaiko FM / K Buzz Website

 ## Software Requirements Specification (SRS)

 # KIAMAIKO FM / K BUZZ

 ## Website & Digital Media Platform

 ### Software Requirements Specification (SRS)

 **Version:** 1.0\
 **Status:** Draft for Review\
 **Platform:** Web / Mobile Responsive\
 **Primary Brand:** K Buzz / Kiamaiko FM\
 **Geographic Focus:** Kiamaiko, Eastlands, Nairobi, Kenya\
 **Primary Language:** English\
 **Additional Content Languages:** Sheng and other locally relevant languages\
 **Streaming Infrastructure:** Zeno.FM or equivalent streaming provider

---

 # 1\. Executive Summary

 Kiamaiko FM / K Buzz is intended to operate as a **community-focused digital media platform**, combining online radio, journalism, podcasts, video, community services, events and commercial advertising.

 The existing K Buzz website already establishes the core editorial identity around:

 - Culture
- People
- Youth
- Ideas
- News/Dispatches
- Community events
- People of Kiamaiko
- Kiamaiko TV
- Radio programming
- Podcasts
- Presenter profiles
- Studio sessions
- Music submissions
- Community channels
- Advertising
- Governance and editorial policies

 The new platform will build on that foundation rather than replacing it.

 The objective is to evolve the website from a primarily editorial/content website into a **multi-channel community media platform** where users can consume and interact with:

 > **Radio + News + Podcasts + Video + Events + Community + Business + Advertising**

 The platform must be designed so that content created once can be distributed across multiple channels.

 For example:

 **Live radio programme → recording → podcast → article → video clips → social media → sponsored content**

 This content-reuse model is central to the technical and commercial architecture.

 The existing website currently presents Kiamaiko FM as a community radio and publishing platform with radio programming, cultural/editorial content, community events, people profiles, video, newsletters, social channels, advertising and governance sections.  Ian Mugwe

---

 # 2\. Product Vision

 The platform should become the digital home of Kiamaiko FM and K Buzz.

 The product vision is:

 > **A community media platform that gives Kiamaiko and the wider Eastlands audience a place to listen, watch, read, participate, discover local businesses, attend events and engage with local stories.**

 The platform should serve four major audiences:

 1. **Listeners / readers**
2. **Creators / presenters / journalists**
3. **Community organisations and local businesses**
4. **Advertisers, sponsors and commercial partners**

---

 # 3\. Product Objectives

 The platform shall:

 - Provide reliable live radio streaming.
- Make radio accessible from desktop and mobile devices.
- Provide a permanent home for radio programmes and podcasts.
- Turn recorded radio programmes into reusable digital content.
- Publish news and editorial content.
- Publish video and documentary content.
- Promote community events.
- Provide community directories and profiles.
- Support local businesses.
- Provide advertising opportunities.
- Capture useful audience analytics.
- Support newsletter and WhatsApp audience growth.
- Support future mobile/PWA functionality.
- Provide an administration system for managing the entire platform.
- Create a technical foundation for future monetization.

---

 # 4\. Existing Platform Baseline

 The existing K Buzz website already contains the following concepts and sections:

 ## Editorial

 - Culture
- People
- Youth
- Ideas
- Dispatch Desk
- Investigative content
- Music & Sheng
- Policy
- Enterprise

 ## Community

 - Community calendar
- Events
- RSVP
- People of Kiamaiko
- Changemaker profiles
- Community Council
- Artisan Registry
- Youth Tech Labs
- Bazaar Bookings

 ## Video

 - Kiamaiko TV
- Field recordings
- Cinema/documentary dispatches
- Studio sessions
- Video archive

 ## Radio

 - Live radio
- Radio programme schedule
- Presenter roster
- Podcasts archive
- Studio sessions
- Music submissions

 ## Audience

 - Newsletter
- WhatsApp channel
- Social media channels
- Launch notifications

 ## Governance

 - Editorial Manifesto
- Media Ethics Policy
- Archival Index
- Broadcast Licences
- Field Guidelines

 ## Commercial

 - Advertising rates
- Press office
- Contact bureau

 These existing sections shall be retained conceptually and incorporated into the new platform architecture rather than duplicated.  Ian Mugwe

---

 # 5\. Scope

 ## 5.1 In Scope

 The platform includes:

 - Public website
- CMS
- Live radio
- Radio schedule
- Programme pages
- Presenter profiles
- Podcast system
- Video system
- Editorial publishing
- Community content
- Events
- RSVP
- People profiles
- Business directory
- Advertising system
- Newsletter integration
- WhatsApp integration
- Social sharing
- Search
- Analytics
- SEO
- User management
- Media management
- Advertising management
- Moderation
- Governance content
- Reporting

 ## 5.2 Future Scope

 The architecture should allow future addition of:

 - Native mobile applications
- Progressive Web App
- User accounts
- Membership
- Donations
- Paid subscriptions
- Classifieds
- Marketplace
- Advertiser dashboards
- Self-service advertising purchases
- Event ticketing
- E-commerce
- SMS broadcasting
- AI-assisted transcription
- AI-assisted content repurposing
- Advanced audience segmentation

---

 # 6\. Information Architecture

 The primary navigation should be:

```
HOME
│
├── NEWS
├── CULTURE
├── PEOPLE
├── YOUTH
├── IDEAS
├── COMMUNITY
├── RADIO
├── PODCASTS
├── TV / VIDEO
├── EVENTS
├── BUSINESS
└── ABOUT
```

 A persistent **LISTEN LIVE** control should be visible throughout the website.

---

 # 7\. Homepage

 The homepage shall function as the primary discovery and conversion page.

 ## Required sections

 ### 7.1 Live Radio

 Display:

 - Live status
- Station logo
- Play button
- Current programme
- Current presenter
- Now playing information
- Next programme
- Programme description

 Primary CTA:

 > **LISTEN LIVE**

---

 ### 7.2 Featured Story

 Display:

 - Featured image
- Headline
- Summary
- Category
- Author
- Publication date
- Read CTA

---

 ### 7.3 Latest Dispatches

 Display latest articles by:

 - News
- Culture
- Youth
- People
- Ideas
- Enterprise

---

 ### 7.4 Radio Shows

 Display current/upcoming programmes.

 Each item should include:

 - Programme name
- Presenter
- Time
- Description
- Listen button
- Podcast/replay availability

---

 ### 7.5 Featured Podcast

 Display:

 - Podcast artwork
- Title
- Episode
- Duration
- Description
- Play button

---

 ### 7.6 Kiamaiko TV

 Display:

 - Featured video
- Recent videos
- Documentary
- Studio sessions
- Short clips

---

 ### 7.7 Community Events

 Display:

 - Event image
- Event name
- Date
- Location
- Registration status
- RSVP CTA

---

 ### 7.8 People of Kiamaiko

 Display featured community profiles.

---

 ### 7.9 Local Business / Community Directory

 Display featured businesses or community organisations.

---

 ### 7.10 Newsletter

 Email subscription CTA.

 Optional:

 - WhatsApp subscription
- SMS subscription

---

 ### 7.11 Social Channels

 Links to:

 - YouTube
- Instagram
- TikTok
- X
- WhatsApp
- Facebook where applicable

---

 # 8\. Live Radio System

 ## 8.1 Live Streaming

 The website shall integrate with the selected streaming provider.

 Initial recommended provider:

 **Zeno.FM**

 Zeno currently provides live encoder streaming, AutoDJ, stream relays, analytics and distribution through Zeno.FM.  Zeno Media Help Page+1

---

 ## 8.2 Player

 The radio player shall provide:

 - Play
- Pause
- Volume
- Mute
- Stream status
- Current programme
- Now Playing
- Station identity
- Mobile support

---

 ## 8.3 Persistent Player

 The player should remain available while the user navigates through the website.

 Recommended implementation:

```
┌──────────────────────────────────────────────┐
│ 🔴 LIVE  KIAMAIKO FM   ▶ Listen Live        │
└──────────────────────────────────────────────┘
```

 On mobile, the player should become a compact bottom player.

---

 # 9\. Radio Programme System

 Each radio programme shall have a dedicated page.

 ## Programme fields

 - Programme name
- Description
- Presenter
- Category
- Days
- Start time
- End time
- Programme artwork
- Social links
- Podcast relationship
- Sponsor
- Related articles
- Related videos

 Example:

 > **Asubuhi Njema**\
>  Morning Talk & News\
>  Hosted by Captain Otis\
>  Monday–Friday\
>  06:00–10:00

---

 # 10\. Radio Schedule

 The system shall provide:

 - Daily schedule
- Weekly schedule
- Programme categories
- Current programme
- Next programme
- Presenter
- Programme description

 The schedule must be manageable through the CMS.

---

 # 11\. Recorded Radio Shows

 The system shall support publishing recorded radio programmes.

 Workflow:

```
LIVE SHOW
   ↓
RECORDING
   ↓
UPLOAD / IMPORT
   ↓
RADIO ARCHIVE
   ↓
PODCAST EPISODE
   ↓
ARTICLE / CLIPS / SOCIAL
```

 Zeno AutoDJ can play pre-recorded audio including show recordings, interviews, podcasts and jingles when the station is not live. Starter currently supports up to 500 AutoDJ tracks.  Zeno Media Help Page

---

 # 12\. Podcast System

 The website shall have a dedicated podcast platform.

 ## Podcast landing page

 Display:

 - Featured podcasts
- Latest episodes
- Popular episodes
- Categories
- Search
- Hosts
- Subscribe/listen links

 ## Podcast page

 Each podcast shall have:

 - Podcast title
- Artwork
- Description
- Host
- Category
- Episode list
- External listening links
- Website player

 ## Episode page

 Fields:

 - Episode title
- Description
- Audio
- Duration
- Publication date
- Episode number
- Season
- Host
- Guests
- Transcript
- Related articles
- Related videos
- Sponsor
- Social sharing

---

 # 13\. Podcast Capacity Strategy

 The website must **not make the website's podcast capacity dependent on Zeno's podcast-hosting limit**.

 Zeno's current Starter plan supports up to three podcasts, while Prime supports up to 50 podcasts/shows.  Zeno.FM

 Therefore:

 > **The website CMS shall support an expandable podcast catalogue independently of the Zeno plan.**

 Zeno can remain the live-radio infrastructure while podcast hosting/distribution can be expanded independently when required.

 This prevents the website architecture from becoming locked to a single provider.

---

 # 14\. Podcast Repurposing

 The system should support:

```
Radio Show
     ↓
Recording
     ↓
Podcast Episode
     ↓
Transcript
     ↓
Article
     ↓
Short Clips
     ↓
Social Posts
```

 Future automation may be introduced for:

 - Transcription
- Chapter generation
- Show notes
- Article drafts
- Social captions
- Short-video extraction

---

 # 15\. News / Editorial CMS

 Editors shall be able to create:

 - News articles
- Features
- Investigations
- Interviews
- Opinions
- Culture stories
- Youth stories
- Enterprise stories

 ## Article fields

 - Headline
- Subheadline
- Body
- Author
- Category
- Tags
- Featured image
- Gallery
- Video
- Audio
- Publication date
- Updated date
- SEO title
- SEO description
- Social image
- Related content

---

 # 16\. Editorial Categories

 Initial categories:

 - News
- Culture
- People
- Youth
- Ideas
- Music
- Sheng
- Enterprise
- Sports
- Community
- Investigations

 The CMS should allow administrators to add or modify categories.

---

 # 17\. Video / Kiamaiko TV

 The platform shall support:

 - Featured videos
- Documentaries
- Studio sessions
- Interviews
- Field recordings
- Short clips
- Video articles
- Video series

 Each video shall support:

 - Title
- Description
- Thumbnail
- Duration
- Category
- Presenter
- Guest
- Date
- Related article
- Related podcast
- Sponsor
- Social sharing

 Video may be hosted externally, such as YouTube, while the website maintains the editorial catalogue.

---

 # 18\. People of Kiamaiko

 The platform shall support community profiles.

 Profile fields:

 - Name
- Photograph
- Occupation
- Category
- Biography
- Location
- Achievements
- Social links
- Interviews
- Related stories
- Related videos

 Users may submit nominations.

 All submitted profiles require moderation before publication.

---

 # 19\. Community Events

 The platform shall support:

 - Event creation
- Event listings
- Event categories
- Date/time
- Location
- Description
- Image
- RSVP
- Capacity
- Registration status
- Organiser
- Contact information

 Possible future functionality:

 - Paid ticketing
- QR tickets
- Check-in
- Sponsor placement
- Event analytics

---

 # 20\. Community Directory

 The system should support local organisations and businesses.

 Categories may include:

 - Food
- Retail
- Services
- Education
- Health
- Automotive
- Beauty
- Entertainment
- Professional services
- Artisans
- Community organisations

 Each profile may contain:

 - Business name
- Description
- Address
- Map
- Phone
- WhatsApp
- Website
- Social accounts
- Opening hours
- Images
- Category
- Verification status

---

 # 21\. Artisan Registry

 The existing Artisan Registry concept shall be retained.

 Features:

 - Artisan profile
- Category
- Portfolio
- Contact
- Location
- Social links
- Verification
- Featured artisan

 Future monetization:

 - Featured listings
- Sponsored profiles
- Directory subscriptions

---

 # 22\. Bazaar / Marketplace Bookings

 The system shall support:

 - Vendor registration
- Event/bazaar selection
- Stall booking
- Vendor profile
- Booking status
- Admin approval

 Future:

 - Online payments
- Digital receipts
- Vendor dashboards

---

 # 23\. Search

 Global search shall cover:

 - Articles
- Podcasts
- Radio shows
- Episodes
- Videos
- Events
- People
- Businesses

 Search filters:

 - Content type
- Category
- Date
- Keyword

---

 # 24\. User Accounts

 Phase 1 may allow public access without mandatory registration.

 Future accounts may support:

 - Profile
- Saved articles
- Favourite podcasts
- Favourite programmes
- Event registrations
- Notifications
- Comments
- Submission history

---

 # 25\. Content Submission

 Users should eventually be able to submit:

 - Stories
- Events
- Business listings
- People nominations
- Music
- Community announcements
- Tips

 All public submissions require moderation.

---

 # 26\. Anonymous Tips

 The existing Anonymous Tips concept shall be retained.

 The system shall provide:

 - Anonymous submission
- Optional contact details
- Secure backend storage
- Editorial review
- Abuse/spam protection

 Sensitive submissions must not be publicly exposed.

---

 # 27\. Newsletter

 The platform shall support:

 - Email subscription
- Newsletter list
- Weekly newsletter
- Featured stories
- Events
- Radio highlights
- Podcast highlights
- Sponsored placements

 Future:

 - Segmented newsletters
- Advertiser-sponsored newsletters
- Automated newsletters

---

 # 28\. WhatsApp Integration

 The platform shall support:

 - WhatsApp channel link
- WhatsApp contact
- Share-to-WhatsApp
- Newsletter/alert subscription where technically supported
- Event sharing
- Article sharing

---

 # 29\. Social Sharing

 Every major content page should support:

 - WhatsApp
- Facebook
- X
- Instagram where supported
- TikTok where appropriate
- Copy link

---

 # 30\. Advertising System

 The website shall have a dedicated advertising framework.

 ## Inventory

 Advertising may appear in:

 - Homepage
- Article pages
- Podcast pages
- Video pages
- Radio pages
- Event pages
- Directory
- Newsletter
- Social media
- Radio broadcasts

 ## Ad types

 - Display banner
- Sponsored article
- Sponsored podcast
- Sponsored programme
- Radio commercial
- Presenter mention
- Event sponsorship
- Directory sponsorship
- Homepage takeover
- Newsletter sponsorship

---

 # 31\. Advertiser Management

 Future advertiser dashboard should allow:

 - Campaign creation
- Creative upload
- Campaign dates
- Budget
- Placement
- Impressions
- Clicks
- Leads
- Reporting

 Phase 1 can use an internal admin-managed advertising system.

---

 # 32\. Sponsorship

 The CMS should support linking sponsors to:

 - Radio programmes
- Podcasts
- Articles
- Events
- Video series
- Community initiatives

 Example:

 > **The Kiamaiko Business Show — Sponsored by ABC**

 Sponsor details may include:

 - Logo
- Description
- Website
- CTA
- Campaign period

---

 # 33\. Analytics

 The platform shall collect:

 ## Website

 - Page views
- Unique visitors
- Sessions
- Traffic source
- Device
- Geography
- Content performance
- Search terms

 ## Radio

 Where available from the streaming provider:

 - Current listeners
- Listening sessions
- Listening duration
- Listener geography
- Audience trends

 Zeno provides station analytics including listener activity, location and engagement information.  Zeno Media Help Page

 ## Podcasts

 - Plays
- Downloads where supported
- Episode performance
- Listening duration where supported

 ## Video

 - Views
- Watch time
- Completion
- Traffic source

 ## Advertising

 - Impressions
- Clicks
- Campaign period
- Content performance

---

 # 34\. Analytics Dashboard

 Administrators should have a unified dashboard.

 Example:

```
TODAY

Website Visitors       4,820
Radio Listeners         640
Podcast Plays           1,240
Video Views             3,870
Event RSVPs               86
Newsletter Signups        42

ADVERTISING

Active Campaigns           8
Ad Impressions          32,400
Sponsored Content           6
```

 The exact metrics will depend on the integrations available.

---

 # 35\. CMS

 The CMS shall manage:

 - Articles
- Categories
- Authors
- Radio shows
- Schedule
- Presenters
- Podcasts
- Episodes
- Videos
- Events
- People
- Businesses
- Advertisers
- Sponsors
- Pages
- Menus
- Media
- SEO
- Newsletter content

---

 # 36\. User Roles

 ## Super Administrator

 Full system access.

 ## Platform Administrator

 Technical/platform management.

 ## Editor-in-Chief

 Editorial control.

 ## Editor

 Create/edit/publish content.

 ## Journalist

 Create and submit articles.

 ## Radio Manager

 Manage:

 - Shows
- Schedule
- Presenters
- Radio content

 ## Presenter

 Manage own:

 - Programme profile
- Show content
- Episode metadata

 ## Video Producer

 Manage video content.

 ## Community Manager

 Manage:

 - Events
- Community submissions
- People
- Directory

 ## Advertising Manager

 Manage:

 - Advertisers
- Campaigns
- Sponsors
- Inventory

 ## Analyst

 View analytics without content editing.

 ## Moderator

 Review user submissions.

---

 # 37\. Media Library

 Central media library shall support:

 - Images
- Audio
- Video
- Documents
- Podcast artwork
- Programme artwork
- Advertisements

 Metadata:

 - File name
- Type
- Size
- Upload date
- Creator
- Usage
- Copyright/rights status

---

 # 38\. SEO

 Each public content page shall support:

 - SEO title
- Meta description
- URL slug
- Canonical URL
- Open Graph image
- Social title
- Social description
- Structured data
- Sitemap
- Robots controls

 The platform should generate structured data for:

 - Articles
- Events
- Podcasts
- Radio programmes
- People
- Businesses

---

 # 39\. Performance

 Target:

 - Fast first load
- Mobile-first design
- Optimised images
- Lazy loading
- CDN support
- Browser caching
- Compressed assets
- Minimal blocking JavaScript

 Target performance should be measured using Core Web Vitals.

---

 # 40\. Mobile Experience

 The platform must be fully responsive.

 Priority devices:

 1. Android smartphones
2. iPhones
3. Tablets
4. Desktop

 The radio player must remain easy to access on mobile.

---

 # 41\. Progressive Web App

 Architecture should allow future PWA functionality:

 - Install to home screen
- Push notifications
- Offline content shell
- Persistent radio player
- App-like navigation

---

 # 42\. Notifications

 Future notification system:

 - Breaking news
- New podcast
- Live programme
- Event reminder
- Community alert
- Newsletter

 Users should be able to control notification preferences.

---

 # 43\. Accessibility

 The website shall target WCAG 2.1 AA principles.

 Requirements include:

 - Keyboard navigation
- Sufficient colour contrast
- Alt text
- Accessible forms
- Captions where available
- Transcripts where available
- Screen-reader compatibility
- Clear focus states

---

 # 44\. Security

 Required controls:

 - HTTPS
- Secure authentication
- Role-based permissions
- Password hashing
- Admin session security
- Rate limiting
- Spam protection
- Input validation
- File upload validation
- Database backups
- Audit logs
- Secure API keys
- Environment secrets

---

 # 45\. Content Moderation

 User-generated content must pass moderation where appropriate.

 Moderation states:

```
SUBMITTED
    ↓
UNDER REVIEW
    ↓
APPROVED
    ↓
PUBLISHED
```

 Alternative:

```
SUBMITTED → REJECTED
```

 Moderators must be able to record rejection reasons internally.

---

 # 46\. Governance

 The website shall retain dedicated governance pages for:

 - Editorial Manifesto
- Media Ethics
- Broadcast Licences
- Field Guidelines
- Privacy Policy
- Terms of Use
- Corrections Policy
- Advertising Policy
- Community Guidelines

 The current site already exposes several governance and broadcast-information sections.  Ian Mugwe

---

 # 47\. Legal and Rights Management

 The CMS should allow content owners to record:

 - Fast first load
- Mobile-first design
- Optimised images
- Lazy loading
- CDN support
- Browser caching
- Compressed assets
- Minimal blocking JavaScript

 Target performance should be measured using Core Web Vitals.

---

 # 40\. Mobile Experience

 The platform must be fully responsive.

 Priority devices:

 1. Android smartphones
2. iPhones
3. Tablets
4. Desktop

 The radio player must remain easy to access on mobile.

---

 # 41\. Progressive Web App

 Architecture should allow future PWA functionality:

 - Install to home screen
- Push notifications
- Offline content shell
- Persistent radio player
- App-like navigation

---

 # 42\. Notifications

 Future notification system:

  Users should be able to control notification preferences.

---

 # 43\. Accessibility

 The website shall target WCAG 2.1 AA principles.

 Requirements include:

---

 # 44\. Security

 Required controls:

 - HTTPS
- Secure authentication
- Role-based permissions
- Password hashing
- Admin session security
- Rate limiting
- Spam protection
- Input validation
- File upload validation
- Database backups
- Audit logs
- Secure API keys
- Environment secrets

---

 # 45\. Content Moderation

 User-generated content must pass moderation where appropriate.

```
SUBMITTED
    ↓
UNDER REVIEW
    ↓
APPROVED
    ↓
PUBLISHED
```

```
SUBMITTED → REJECTED
```

 Moderators must be able to record rejection reasons internally.

---

 # 46\. Governance

 The website shall retain dedicated governance pages for:

 - Editorial Manifesto
- Media Ethics
- Broadcast Licences
- Field Guidelines
- Privacy Policy
- Terms of Use
- Corrections Policy
- Advertising Policy
- Community Guidelines

---

 # 47\. Legal and Rights Management

 The CMS should allow content owners to record:

 - Copyright owner
- Licence
- Usage rights
- Expiry date
- Music rights status
- Image rights
- Video rights

 Radio music must only be broadcast where the required rights/licensing are in place.

---

 # 48\. Technical Architecture

 Recommended high-level architecture:

```
                         USERS
                           │
              ┌────────────┴────────────┐
              │                         │
          WEBSITE                   MOBILE/PWA
              │
              ▼
        FRONTEND APPLICATION
              │
              ▼
           CMS / API
              │
     ┌────────┼─────────┐
     │        │         │
 CONTENT    USERS    COMMERCE
     │        │         │
     └────────┼─────────┘
              │
       ┌──────┴─────────────┐
       │                    │
   MEDIA STORAGE        ANALYTICS
       │
 ┌─────┼──────┐
 │     │      │
Audio Video Images
 │     │
 ▼     ▼
Zeno   Video Platform
 │
 ▼
LIVE RADIO
```

---

 # 49\. External Integrations

 The platform should support integrations with:

 ### Radio

 - Zeno.FM
- Icecast-compatible streaming
- Radio encoder

 ### Video

 - YouTube
- Other video CDN/provider

 ### Communications

 - Email provider
- WhatsApp
- SMS provider

 ### Analytics

 - Web analytics
- Radio analytics
- Podcast analytics
- Advertising analytics

 ### Payments

 Future:

 - M-Pesa
- Card payments
- Other payment gateways

---

 # 50\. Zeno Integration Requirements

 The website shall not directly depend on Zeno for the entire content architecture.

 Zeno shall be treated as a **streaming/distribution service**.

 The website remains the primary owned digital platform.

 Integration should support:

 - Live stream URL
- Now Playing where available
- Player embed/API where available
- Station metadata
- Radio schedule
- Podcast links
- Analytics import where technically available

 Zeno currently supports live encoder streaming, AutoDJ and stream relays.  Zeno Media Help Page+1

---

 # 51\. Zeno Plan Independence

 The architecture must allow Kiamaiko FM to change Zeno plans or switch providers without rebuilding the website.

 The system shall therefore use an abstraction such as:

```
RADIO SERVICE
     │
     ├── Zeno
     ├── Provider B
     └── Provider C
```

 This prevents vendor lock-in.

---

 # 52\. Content Repurposing Engine

 One of the core platform principles shall be:

 > **Create once, distribute many times.**

 Example:

```
INTERVIEW
   │
   ├── Live Radio
   ├── Podcast
   ├── Article
   ├── YouTube Video
   ├── Short Video
   ├── Quote Card
   ├── Newsletter
   └── Social Post
```

 The CMS should therefore support linking related content.

---

 # 53\. Content Relationships

 Content types shall be linkable.

 For example:

```
PERSON
  │
  ├── ARTICLE
  ├── PODCAST
  ├── VIDEO
  ├── EVENT
  └── RADIO SHOW
```

 Similarly:

```
BUSINESS
  │
  ├── DIRECTORY PROFILE
  ├── SPONSORSHIP
  ├── ARTICLE
  ├── EVENT
  └── AD CAMPAIGN
```

---

 # 54\. Advertising Inventory Architecture

 Advertising inventory should be treated as a first-class platform object.

 Example:

```
INVENTORY
│
├── RADIO
│   ├── Spot
│   ├── Presenter Mention
│   └── Programme Sponsorship
│
├── WEBSITE
│   ├── Banner
│   ├── Homepage
│   └── Article
│
├── PODCAST
│   ├── Sponsorship
│   └── Episode Placement
│
├── VIDEO
│   └── Sponsorship
│
├── EVENTS
│   └── Event Sponsorship
│
└── DIRECTORY
    └── Featured Listing
```

 This architecture directly supports the commercial model described in Document 2.

---

 # 55\. Reporting

 The platform shall produce reports for:

 ## Editorial

 - Articles published
- Top articles
- Authors
- Categories

 ## Radio

 - Listening
- Programme performance
- Audience trends

 ## Podcast

 - Episodes
- Plays
- Downloads where available

 ## Video

 - Views
- Watch time

 ## Community

 - RSVPs
- Event attendance
- Submissions

 ## Commercial

 - Advertiser campaigns
- Impressions
- Clicks
- Sponsored content
- Revenue

---

 # 56\. Data Model — Core Entities

 Initial entities:

```
User
Role
Author
Presenter
Article
Category
Tag
RadioStation
RadioProgramme
ScheduleSlot
Podcast
PodcastEpisode
Video
Event
EventRegistration
Person
Business
DirectoryCategory
Advertisement
Advertiser
Campaign
Sponsor
NewsletterSubscriber
CommunitySubmission
MediaAsset
Notification
AnalyticsRecord
```

---

 # 57\. Functional Requirements

 ## FR-001 — Live Radio

 The system shall allow users to start the live radio stream from any major page.

 ## FR-002 — Radio Status

 The system shall display whether the station is live/available where technically possible.

 ## FR-003 — Programme Schedule

 Administrators shall create and manage radio programmes.

 ## FR-004 — Podcast Publishing

 Editors shall publish podcast episodes.

 ## FR-005 — Article Publishing

 Editors shall create, edit and publish articles.

 ## FR-006 — Video Publishing

 Editors shall create and publish video content.

 ## FR-007 — Events

 Community managers shall create events.

 ## FR-008 — RSVP

 Users shall register for eligible events.

 ## FR-009 — Directory

 Administrators shall create and manage business/community profiles.

 ## FR-010 — Search

 Users shall search across the content catalogue.

 ## FR-011 — Advertising

 Administrators shall manage advertising inventory.

 ## FR-012 — Sponsorship

 Administrators shall associate sponsors with eligible content.

 ## FR-013 — Analytics

 Authorised users shall access analytics.

 ## FR-014 — User Submissions

 Users shall submit selected community content.

 ## FR-015 — Moderation

 Moderators shall review submissions.

 ## FR-016 — Newsletter

 Users shall subscribe to newsletters.

 ## FR-017 — Social Sharing

 Users shall share eligible content.

 ## FR-018 — SEO

 Editors shall manage SEO metadata.

 ## FR-019 — Media Library

 Editors shall upload and manage media.

 ## FR-020 — Roles

 Administrators shall assign permissions based on roles.

---

 # 58\. Non-Functional Requirements

 ## NFR-001 Availability

 The public website should target high availability.

 ## NFR-002 Performance

 Pages should load efficiently on Kenyan mobile networks and lower-end Android devices.

 ## NFR-003 Scalability

 The platform must support growth in:

 - Users
- Articles
- Podcasts
- Radio listeners
- Videos
- Businesses
- Advertisers

 ## NFR-004 Security

 Administrative functions must require authenticated access.

 ## NFR-005 Maintainability

 The system should use modular services and documented APIs.

 ## NFR-006 Portability

 The platform should avoid unnecessary vendor lock-in.

 ## NFR-007 Accessibility

 Public pages should target WCAG 2.1 AA.

 ## NFR-008 SEO

 Public content must be indexable unless intentionally excluded.

---

 # 59\. Suggested Development Phases

 ## Phase 1 — Core Platform

 - Existing website migration/upgrade
- CMS
- Homepage
- Editorial
- Radio player
- Radio schedule
- Presenter profiles
- Podcast foundation
- Video
- Events
- Search
- Newsletter
- Analytics
- SEO
- Admin roles

 ## Phase 2 — Community

 - Business directory
- Artisan Registry
- People profiles
- Community submissions
- RSVP
- Bazaar bookings
- WhatsApp integration
- Notifications

 ## Phase 3 — Commercial

 - Advertising inventory
- Advertiser management
- Sponsorship management
- Campaign reporting
- Sponsored content
- Business listings
- Commercial analytics

 ## Phase 4 — Advanced Media

 - Automated podcast workflow
- Transcription
- Content repurposing
- Advanced analytics
- Audience segmentation
- PWA
- Push notifications

 ## Phase 5 — Platform Expansion

 - Membership
- Payments
- Ticketing
- Marketplace
- Advertiser self-service
- Mobile application
- Additional radio stations/content brands

---

 # 60\. MVP Definition

 The first production release should contain:

 ### Must Have

 - Homepage
- CMS
- Articles
- Categories
- Live radio
- Radio player
- Programme schedule
- Presenter profiles
- Podcast catalogue
- Podcast player
- Video catalogue
- Events
- RSVP
- Search
- Newsletter
- Social sharing
- Admin dashboard
- User roles
- Analytics
- SEO
- Advertising placements

 ### Should Have

 - Business directory
- People profiles
- Community submissions
- Sponsor profiles
- Programme sponsorship
- WhatsApp integration

 ### Later

 - User accounts
- Payments
- Ticketing
- Marketplace
- Push notifications
- PWA
- Advertiser dashboard
- Native mobile application

---

 # 61\. Success Metrics

 The platform should measure:

 ## Audience

 - Monthly active users
- Radio listeners
- Listening hours
- Podcast plays
- Video views
- Newsletter subscribers
- WhatsApp subscribers

 ## Engagement

 - Average session duration
- Pages/session
- Radio listening duration
- Podcast completion
- Event RSVPs
- Shares
- Returning users

 ## Commercial

 - Number of advertisers
- Revenue per advertiser
- Sponsorship revenue
- Radio advertising revenue
- Digital advertising revenue
- Directory revenue
- Event revenue
- Podcast sponsorship revenue

 ## Content

 - Stories published
- Shows produced
- Podcast episodes
- Videos
- Community submissions

---

 # 62\. Product Principles

 The platform shall follow these principles:

 ### 1\. Mobile first

 The majority of users should have a good experience on mobile.

 ### 2\. Community first

 The platform should prioritise local relevance.

 ### 3\. Radio at the centre

 Radio should be highly visible without turning the website into only a radio site.

 ### 4\. Content reuse

 Content should be reusable across multiple formats.

 ### 5\. Owned audience

 The platform should build audiences that Kiamaiko can communicate with directly.

 ### 6\. Commercially measurable

 Content and advertising performance should be measurable.

 ### 7\. Provider independent

 Zeno should be replaceable without rebuilding the platform.

 ### 8\. Scalable

 The architecture should support expansion beyond Kiamaiko.

---

 # 63\. Final Product Architecture

 The final platform should conceptually operate as:

```
                         KIAMAIKO / K BUZZ
                                │
        ┌───────────────────────┼────────────────────────┐
        │                       │                        │
      RADIO                   DIGITAL                  COMMUNITY
        │                       │                        │
   Live Stream              News/Stories              Events
   Programmes               Culture                   Directory
   Presenters               People                    Businesses
   Recorded Shows            Youth                     Profiles
        │                   Ideas                      RSVP
        │                       │                        │
        └───────────────┬───────┴───────────┬────────────┘
                        │                   │
                    PODCASTS              VIDEO
                        │                   │
                        └─────────┬─────────┘
                                  │
                              AUDIENCE
                                  │
                 ┌────────────────┼────────────────┐
                 │                │                │
              Website          Social           WhatsApp
                 │                │                │
                 └────────────────┼────────────────┘
                                  │
                              COMMERCIAL
                                  │
        ┌──────────────┬──────────┼──────────┬──────────────┐
        │              │          │          │              │
      Radio          Digital   Podcast    Events       Directory
       Ads             Ads      Sponsors   Sponsors      Listings
        │              │          │          │              │
        └──────────────┴──────────┴──────────┴──────────────┘
                                  │
                               REVENUE
```

---

 # 64\. Acceptance Criteria

 The platform shall be considered ready for initial production when:

 1. Users can access the website on mobile and desktop.
2. Users can start the live radio stream.
3. Radio programmes are visible and searchable.
4. Editors can publish articles.
5. Editors can publish podcasts.
6. Users can listen to podcast episodes.
7. Editors can publish videos.
8. Events can be created and displayed.
9. Users can RSVP to supported events.
10. Community profiles can be created and moderated.
11. Search works across major content types.
12. Administrators can manage users and permissions.
13. Advertising placements can be managed.
14. Analytics are available.
15. SEO metadata is manageable.
16. The platform is secured through HTTPS and role-based access.
17. The website performs acceptably on mobile networks.
18. The radio integration can be replaced without rebuilding the core website.
19. Backups and recovery procedures are established.
20. Governance, privacy and legal pages are available.

---

 # 65\. Important Architectural Decision

 The most important decision in this SRS is that **Kiamaiko owns the digital platform and audience relationship**.

 Zeno is an infrastructure/distribution component.

 Therefore:

```
                 KIAMAIKO / K BUZZ
                  OWNS THE PLATFORM
                         │
          ┌──────────────┼──────────────┐
          │              │              │
        Website        Audience       Content
          │              │              │
          └──────────────┼──────────────┘
                         │
                  External Services
                         │
                  ┌──────┴──────┐
                  │             │
                 Zeno        Other APIs
```

 This ensures that the business can change streaming providers, podcast providers, analytics providers or other infrastructure without losing its core digital asset.

---

 # 66\. SRS Conclusion

 The Kiamaiko FM / K Buzz website should not be treated as a conventional radio station website.

 It should be built as a **community media operating platform**.

 Its central asset is the ability to transform one piece of local content into multiple forms of audience engagement:

 > **Listen → Read → Watch → Share → Attend → Discover → Participate**

 The technical architecture should consequently support both **media production** and **commercial distribution**.

 The monetization engine defined in Document 2 will build on this architecture by converting the resulting audience, content and community activity into measurable commercial inventory.

 ### Next

 I’d keep **Document 2 separate and substantially more investor-facing**. It will explain the business logic behind this SRS: **what value Kiamaiko creates, who pays for that value, the revenue streams, advertising products, radio economics, content economics, audience flywheel, growth model, KPIs and the investment case**.

 Before I write it, you can mark up anything in Document 1 that you want **added, removed, or changed**.