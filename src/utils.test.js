import Moment from "moment";
import MockDate  from "mockdate";

import { daysAgo, timeAgo, generateAPIURL } from "./Utils";

describe("daysAgo", () => {
    describe("when days is 30 from 2019-09-08", () => {
        test("date is 2019-08-09", () => {
            MockDate.set(Moment("2019-09-08"));
            expect(daysAgo(30)).toBe("2019-08-09");
            MockDate.reset();
        });
    });
});

describe("timeAgo", () => {
    // days
    describe("when day is yesterday", () => {
        test("time ago is a day ago", () => {
            expect(timeAgo(Moment().subtract(1, "days"))).toBe("a day ago");
        });
    });
    describe("when day is the day before yesterday", () => {
        test("time ago is 2 days ago", () => {
            expect(timeAgo(Moment().subtract(2, "days"))).toBe("2 days ago");
        });
    });

    // hours
    describe("when day is the day before yesterday", () => {
        test("is an hour ago", () => {
            expect(timeAgo(Moment().subtract(1, "hours"))).toBe("an hour ago");
        });
    });
    describe("when day is the day before yesterday", () => {
        test("is 2 hours ago", () => {
            expect(timeAgo(Moment().subtract(2, "hours"))).toBe("2 hours ago");
        });
    });

    // minutes
    describe("when day is the day before yesterday", () => {
        test("is a minute ago", () => {
            expect(timeAgo(Moment().subtract(1, "minutes"))).toBe("a minute ago");
        });
    });
    describe("when day is the day before yesterday", () => {
        test("is 2 minutes ago", () => {
            expect(timeAgo(Moment().subtract(2, "minutes"))).toBe("2 minutes ago");
        });
    });

    // seconds
    describe("when day is the day before yesterday", () => {
        test("is a few seconds ago", () => {
            expect(timeAgo(Moment().subtract(1, "seconds"))).toBe("a few seconds ago");
        });
    });
});

describe("generateAPIURL", () => {
    describe("when date is 2019-08-09, page is 1 and per page is 10", () => {
        test("url is https://api.github.com/search/repositories?q=created:>2019-08-09&sort=stars&order=desc&page=1&per_page=10", () => {
            MockDate.set(Moment("2019-08-09"));
            expect(generateAPIURL(Moment().format("YYYY-MM-DD"), 1, 10)).toBe("https://api.github.com/search/repositories?q=created:>2019-08-09&sort=stars&order=desc&page=1&per_page=10");
            MockDate.reset();
        });
    });
});