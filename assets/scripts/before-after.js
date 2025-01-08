function imageComparison(selector) {
    let comparison = $(selector)
        .addClass("image-comparison")
        .prepend('<div class="image-comparison__before"></div>')
        .append('<button class="image-comparison__slider"></button>');

    let images = comparison
        .find("img")
        .addClass("image-comparison__image")
        .css("max-width", comparison.width());

    let before = comparison
        .find(".image-comparison__before")
        .append(images.eq(0));

    comparison
        .find(".image-comparison__slider")
        .on("dragstart", () => false)
        .on("mousedown", function (e) {
            let slider = $(this);
            slider.css("border", "none");
            let doc = $(document).on("mousemove", (e) => {
                let offset = e.pageX - comparison.position().left;
                let content_width = comparison.width();
                let el = document.getElementsByClassName("ba-block")[0];
                let width = el.offsetWidth;
                let dif = (width - content_width) / 2 - 5;

                if (offset < -dif) offset = -dif;
                if (offset > content_width + dif) {
                    console.log(width);
                    offset = content_width + dif;
                }
                slider.css("left", offset + "px");
                before.css("width", offset + "px");
            });

            doc.on("mouseup", () => doc.off("mousemove"));
        });
}

imageComparison("#image-comparison");
