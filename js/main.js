var app = new Vue({
    el: "#products",
    data: {
        products: [{ id: 1, title: "Cucumber1", short_text: 'Burpless Cucumber.', image: 'images/Burpless.jpg', desc: "Burpless is a popular cucumber variety that is known for its mild flavor and crisp texture. It is seedless and has a thin skin, making it a great choice for salads or pickling though they are not considered pickling cucumbers." },
        { id: 2, title: "Cucumber2", short_text: 'Chinese Cucumber.', image: 'images/Chinese.jpg', desc: "Chinese cucumbers, also known as Mao gourd, are long and slender with a bumpy skin. They have a slightly sweet flavor and are often used in Chinese cuisine. Chinese cucumbers are perfect for adding texture to salads or as a garnish." },
        { id: 3, title: "Cucumber3", short_text: 'Crystal Cucumber.', image: 'images/Crystal.jpg', desc: "This cucumber with an elongated name only grows to about 5-6 inches. This small white cucumber does not look at all like a cucumber with a much rounder shape. They are generally used as a slicing cucumber and not often pickled." },
        { id: 4, title: "Cucumber4", short_text: 'Armenian Cucumber.', image: 'images/Armenian.jpg', desc: "Armenian cucumbers, also known as snake cucumbers or yard-long cucumbers, are long and thin with a pale green skin and few seeds. They have a mild, sweet flavor and a crunchy texture. Armenian cucumbers are a popular choice for salads and sandwiches, but they can also be used for pickling. They are often harvested when they are about 12 inches or so as they quickly become bitter with growth." },
        { id: 5, title: "Cucumber5", short_text: 'English Cucumber', image: 'images/English.jpg', desc: "English cucumbers, also known as seedless cucumbers or hot house cucumbers, are long and narrow with a thin skin and few seeds.They are usually wrapped in plastic to protect them during transport and storage. English cucumbers are a popular choice for salads and sandwiches because of their mild flavor and crunchy texture. They are also great for pickling because they hold their shape well. Together with American cucumbers, English cucumbers are the two most commonly available cucumbers at most groceries." }],
    },
    mounted: function () {
        console.log(window.localStorage.getItem('prod'));
    },
    methods: {
        addItem: function (id) {
            window.localStorage.setItem('prod', id);
        }
    }
});