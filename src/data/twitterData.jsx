const twitterData = {

    // 1. Data for the main React profile page
    profile: {
        name: 'React',
        handle: '@reactjs',
        bio: 'The library for web and native user interfaces',
        joinDate: 'July 2013',
        followingCount: 267,
        followersCount: '705.1K',
        website: 'react.dev',
        postsCount: '2,611',
        followedBy: [
            'Mohamed Kulkhun',
            'Yazan Alasade💫',
            '14 others you follow'
        ],
    },

    // 2. Data for the main timeline posts
    posts: [
        {
            id: 1,
            type: 'Repost',
            repostedBy: 'React reposted',
            originalPost: {
                userName: 'danabramov.bsky.social',
                userHandle: '@dan_abramov',
                date: 'May 29',
                content: 'happy 10th birthday to @reactjs 🥳',
                stats: {
                    comments: 46,
                    retweets: 675,
                    likes: 3701,
                    views: '1.1M',
                },
            },
        },
        {
            id: 2,
            type: 'Repost',
            repostedBy: 'React reposted',
            originalPost: {
                userName: 'danabramov.bsky.social',
                userHandle: '@dan_abramov',
                date: 'May 29',
                content: 'happy 10th birthday to @reactjs 🥳',
                stats: {
                    comments: 46,
                    retweets: 675,
                    likes: 3701,
                    views: '1.1M',
                },
            },
        },
        // Add other posts here if they existed
    ],

    // 3. Data for 'Who to Follow' section in the main content area
    whoToFollowMain: [
        {
            name: 'freeCodeCamp.org',
            handle: '@freeCodeCamp',
            isFollowing: false,
            description: "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @goodeyrem.",
            related: 'Node.js and 9 others follow',
            isVerified: true,
            avatar: "assets/freeCodeCamp.jpg",
        },
        {
            name: 'TypeScript',
            handle: '@typescripts',
            isFollowing: false,
            description: 'TypeScript is a language for application-scale JavaScript development. It’s a typed superset of JavaScript that compiles to plain JavaScript.',
            related: 'Node.js and 5 others follow',
            isVerified: false,
            avatar: "assets/TypeScript.png",
        },
        {
            name: 'Tailwind CSS',
            handle: '@tailwindcss',
            isFollowing: false,
            description: 'The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.',
            related: 'Yazzed Obaid and 3 others follow',
            isVerified: true,
            avatar: "assets/Tailwind CSS.png",

        },
    ],

    // 4. Data for 'You Might Like' section (Right Sidebar)
    youMightLike: [
        {
            name: 'Tailwind CSS',
            handle: '@tailwindcss',
            isFollowing: false,
            isVerified: true,
            avatar: "assets/Tailwind CSS.png",


        },
        {
            name: 'TypeScript',
            handle: '@typescripts',
            isFollowing: false,
            isVerified: false,
            avatar: "assets/TypeScript.png",

        },
        {
            name: 'freeCodeCamp.org',
            handle: '@freeCodeCamp',
            isFollowing: false,
            isVerified: true,
            avatar: "assets/freeCodeCamp.jpg",

        },
    ],

    // 5. Data for 'Trends for You' section (Right Sidebar)
    trends: [
        {
            category: 'Gaming · Trending',
            topic: '#VALORANTCHAMPIONS',
            posts: '27.9K',
        },
        {
            category: 'Trending',
            topic: 'الإنستا',
            posts: '1,411',
        },
        {
            category: 'Gaming · Trending',
            topic: 'Mako',
            posts: '14.3K',
        },
        {
            category: 'Trending',
            topic: '#رسالة_اليوم',
            posts: '22.3K',
        },
        {
            category: 'Trending',
            topic: '#Messi',
            posts: '77.2K',
        },
        {
            category: 'Trending',
            topic: '#جامعة_طيبه',
            posts: '27.6K',
        },
        {
            category: 'Trending',
            topic: 'ايفون',
            posts: '27.6K',
        },
        {
            category: 'Gaming · Trending',
            topic: 'fnatic',
            posts: '8,748',
        },
        {
            category: 'Trending',
            topic: 'الإعلام_العبري',
            posts: '85.4K',
        },
        {
            category: 'Trending',
            topic: '#InterMiamiCF',
            posts: '65.4K',
        },
    ],

    // 6. Data for the Left Sidebar Navigation (Home, Explore, etc.)
    navigationItems: [
        {
            id: 1,
            name: 'Home',
            icon: 'fa-solid fa-house outline', // outline style (unfilled)
            path: '/home',
            active: true,

        },
        {
            id: 2,
            name: 'Explore',
            icon: 'fa-solid fa-magnifying-glass', // lens/search icon
            path: '/explore',
        },
        {
            id: 3,
            name: 'Notifications',
            icon: 'fa-regular  fa-bell',
            path: '/notifications',
        },
        {
            id: 4,
            name: 'Messages',
            icon: 'fa-regular  fa-envelope',
            path: '/messages',
        },
        {
            id: 5,
            name: 'Lists',
            icon: 'fa-regular  fa-file-lines ', // paper with horizontal lines
            path: '/lists',
        },
        {
            id: 6,
            name: 'Bookmarks',
            icon: 'fa-regular fa-bookmark outline', // unfilled bookmark
            path: '/bookmarks',
        },
        {
            id: 7,
            name: 'Communities',
            icon: 'fa-solid fa-user-group ', // use solid family glyph and style as outline via CSS
            path: '/communities',
        },
        {
            id: 8,
            name: 'Profile',
            icon: 'fa-regular fa-user outline', // unfilled profile
            path: '/profile',
        },
        {
            id: 9,
            name: 'More',
            icon: 'fa-solid fa-ellipsis-h icon-circle', // dots inside a circular background (styled in CSS)
            path: '/more',
        },
    ],
    tabs: [
        { id: "posts", label: "Posts" },
        { id: "replies", label: "Replies" },
        { id: "media", label: "Media" },
        { id: "likes", label: "Likes" },
    ],

};

export default twitterData;