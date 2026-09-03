document.addEventListener("DOMContentLoaded", function () {
    let totalSum = 0;
    let itemCount = 0;

    const totalPriceElement = document.getElementById("totalPrice");
    const cartCountElement = document.getElementById("cartCount");
    const searchInput = document.getElementById("searchInput");
    const items = document.querySelectorAll(".item");

    // 1. إضافة أحداث الضغط على العناصر لتحديث المجموع والعدّاد
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            const priceElement = item.querySelector(".price");
            if (priceElement) {
                const numericPrice = parseInt(priceElement.textContent.replace(/[^0-9]/g, ""), 10);

                if (!isNaN(numericPrice)) {
                    totalSum += numericPrice;
                    itemCount += 1;

                    if (totalPriceElement) totalPriceElement.textContent = totalSum;
                    if (cartCountElement) cartCountElement.textContent = itemCount;

                    // تأثير بصري للضغط
                    item.style.transform = "scale(0.95)";
                    setTimeout(function () {
                        item.style.transform = "none";
                    }, 150);
                }
            }
        });
    });

    // 2. البحث الفوري
    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            const searchTerm = e.target.value.toLowerCase().trim();

            items.forEach(function (item) {
                const titleElement = item.querySelector("p");
                if (titleElement) {
                    const itemName = titleElement.textContent.toLowerCase();
                    if (itemName.includes(searchTerm)) {
                        item.style.display = "";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    }
});