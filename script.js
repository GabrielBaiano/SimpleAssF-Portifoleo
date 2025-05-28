        document.addEventListener('DOMContentLoaded', function () {
            const filterButtons = document.querySelectorAll('.filter-button');
            const filterPill = document.querySelector('.filter-pill');
            const galleryItems = document.querySelectorAll('.gallery-item');

            function setInitialPillPosition() {
                const activeButton = document.querySelector('.filter-button.active');
                if (activeButton && filterPill) { 
                    filterPill.style.left = activeButton.offsetLeft + 'px';
                    filterPill.style.width = activeButton.offsetWidth + 'px';
                }
            }

            if (filterButtons.length > 0 && filterPill) {
                filterButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        filterButtons.forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');

                        filterPill.style.left = this.offsetLeft + 'px';
                        filterPill.style.width = this.offsetWidth + 'px';

                        const filterValue = this.getAttribute('data-filter');

                        galleryItems.forEach(item => {
                            setTimeout(() => {
                                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                                    item.classList.remove('hidden');
                                } else {
                                    item.classList.add('hidden');
                                }
                            }, 50); 
                        });
                    });
                });
                setInitialPillPosition();
                window.addEventListener('resize', setInitialPillPosition);
            }
        });