// export default (function () {
//     if (typeof window === 'undefined') {
//         return null;
//     }

//     return {
//         onRouteUpdate({ location }) {
//             // Set page so that subsequent hits on this page are attributed
//             // to this page. This is recommended for Single-page Applications.
//             window.srul('aaaaaaaaaaaa', 'page', location.pathname);
//             // Always refer to the variable on window in-case it gets overridden elsewhere.
//             window.srul('send', 'pageview');
//         },
//     };
// })();