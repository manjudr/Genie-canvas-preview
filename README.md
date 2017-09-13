# Introduction

org.ekstep.preview npm module it used to preview the content's which is being created from the ekstep portal.
Contents types  can be below listed.

1. ECML (Ekstep content markup language)
2. HTML
3. H5P
4. PDF
5. EPUB
6. MP4/WEBM
7. YOUTUBE

### How to setup the local preview?

1. Run npm install `org.ekstep.preview`
2. Once the module is installed go to node modules folder (`cd node_modules`)
3. Find `org.ekstep.preview` folder inside node_modules.
4. Takeout the `org.ekstep.preview` module from the node_modules folder or still you can run preview inside the node_modules folder(`cd org.ekstep.preview`)
5. Inside org.ekstep.preview module folder run `npm install`
6. Run node index
7. Open this [link](http://localhost:3010) in the browser.

### How to preview the contents?

Once the preview setup is done you can preview the above listed type of contents in the two ways as of now.
Before you preview the contents you should have authToken of the particular host.
(ie. Suppose if want to preview the contents which is present in `dev.ekstep.in` host then you should have a authToken of that instance.)
For more details refer [here](https://github.com/ekstep/Common-Design/wiki/GenieCanvas:-Preview-integration).

You can preview the contents in two ways.

1. Preview the content by passing content body and metadata information.
2. Preview the content by passing contentId and AuthToken.





