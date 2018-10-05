/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All tests are being placed within the $() function
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS feeds definitions,
     * the allFeeds variable in the application.
     */
    describe('RSS Feeds', () => {
        /* Test to make sure that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test to make sure that each feed in the allFeeds object has a
         * URL defined and that the URL is not empty.
         */
        it('have URLs', () => {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* Test to make sure that each feed in the allFeeds object has a
         * name defined and that the name is not empty.
         */
        it('have names', () => {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* This suite features a set of tests concerning the menu. */
    describe('The menu', () => {
        let bodyClassList = null;

        beforeEach(() => {
            bodyClassList = document.body.classList;
        });

        /* The menu element needs to be hidden by default. This test checks for
         * the presence of the CSS class that is required to make that happen.
         */
        it('is hidden by default', () => {
            expect(bodyClassList).toContain('menu-hidden');
        });

        /* The menu must change visibility when the menu icon is clicked.
         * This test simulates two clicks and expects that the menu displays
         * after the first click and is hidden after the second.
         */
        it('changes visibility when the menu icon is clicked', () => {
            document.querySelector('.menu-icon-link').click();
            expect(bodyClassList).not.toContain('menu-hidden');

            document.querySelector('.menu-icon-link').click();
            expect(bodyClassList).toContain('menu-hidden');
        });

    });

    /* This test suite focuses on the initial population of the feed. */
    describe('Initial Entries', () => {
        /* Call the loadFeed function and check that there is at least
         * one .entry element within the .feed container.
         * loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            });
        });

        it('are present', (done) => {
            const feed = document.querySelector('.feed');

            expect(feed.getElementsByClassName('entry').length).not.toBe(0);
            done();
        });
    });

    /* This test suite focuses on feed population after new feed selection. */
    describe('New Feed Selection', () => {
        /* Check that the content changes after a new feed is loaded
         * by the loadFeed function.
         */
        let oldFeed = '',
            newFeed = '';
        const entries = document.getElementsByClassName('entry');

        beforeEach((done) => {
            loadFeed(0, () => {
                for (const entry of entries) {
                    oldFeed = oldFeed + entry.textContent;
                }

                loadFeed(1, () => {
                    for (const entry of entries) {
                        newFeed = newFeed + entry.textContent;
                    }
                    done();
                });
            });
        });

        it('changes content', (done) => {
            expect(newFeed !== oldFeed).toBe(true);
            done();
        });
    });
}());
