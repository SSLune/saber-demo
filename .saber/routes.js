
    export default [
      {
              path: "/posts/hello-world-2.html",
              meta: {
                __relative: '_posts/hello-world-2.md',
                __pageId: '8564b7fe'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-hello-world-2-md" */ "/Users/oriolferrer/Sandbox/saber-demo/pages/_posts/hello-world-2.md?saberPage=8564b7fe")
                
              }
            },
{
              path: "/posts/hello-world.html",
              meta: {
                __relative: '_posts/hello-world.md',
                __pageId: '59b43406'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-hello-world-md" */ "/Users/oriolferrer/Sandbox/saber-demo/pages/_posts/hello-world.md?saberPage=59b43406")
                
              }
            },
{
              path: "/about.html",
              meta: {
                __relative: 'about.md',
                __pageId: '7da445ca'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--about-md" */ "/Users/oriolferrer/Sandbox/saber-demo/pages/about.md?saberPage=7da445ca")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.vue',
                __pageId: 'f7747572'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-vue" */ "/Users/oriolferrer/Sandbox/saber-demo/pages/index.vue?saberPage=f7747572")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/oriolferrer/Sandbox/saber-demo/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]