import Moment from "moment";

export function daysAgo(days) {
    return Moment().subtract(days, "days").format("YYYY-MM-DD");
}

export function timeAgo(date) {
    return Moment(date).fromNow();
}

export function generateAPIURL(date, page, perPage) {
    return `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}&per_page=${perPage}`;
}
