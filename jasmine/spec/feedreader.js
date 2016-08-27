/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against our application.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* Makes sure that the allFeeds variable 
         * has been defined and that it is not empty. 
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* Loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('must have defined URL that is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* Loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('must have name defined and not be empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toEqual(0);
            }
        });
    });

    describe('The Menu', function() {
        /* Ensures the menu element is
         *  hidden by default.
         */
        it('menu must be hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });
        /* Ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('Menu should show on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });

        it('Menu should hide when clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        /* Ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);

        });

        it("Should have at least one entry", function() {
            expect($('.feed .entry').length).not.toBe(0);

        });

    });

    describe('New Feed Selection', function() {

        /* Ensures that when a new feed is loaded
         * by the loadFeed function the content actually changes.
         */
        beforeEach(function(done) {

            loadFeed(1, function() {
                feedContent = $('.feed').html();
                done();
            });
        });

        it('feed content changes on update', function(done) {
            loadFeed(2, function() { // then load html rocks feed to change feedContent
                expect($('.feed').html()).not.toEqual(feedContent);
                done();
            });
        });
    });


}());
