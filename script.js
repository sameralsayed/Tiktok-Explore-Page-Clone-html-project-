$(document).ready(function() {
    const grid = $('#explore-grid');

    // Mock Data Generator
    const generateVideos = (category) => {
        grid.fadeOut(200, function() {
            grid.empty();
            for (let i = 1; i <= 12; i++) {
                const views = (Math.random() * 10).toFixed(1) + "M";
                const card = `
                    <div class="col-6 col-md-4 col-xl-2">
                        <div class="video-card animate-in">
                            <img src="https://picsum.photos/seed/${category + i}/400/600" class="video-thumb" alt="Trending content">
                            <div class="video-overlay">
                                <div class="view-count">▶ ${views}</div>
                                <div class="creator-info">
                                    <img src="https://ui-avatars.com/api/?name=User${i}&background=random" class="rounded-circle" width="18" height="18">
                                    <span>@creator_node_${i}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                grid.append(card);
            }
            grid.fadeIn(300);
        });
    };

    // Initial Load
    generateVideos('all');

    // Tab Click Event
    $('.tab-item').on('click', function() {
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        
        const category = $(this).data('cat');
        generateVideos(category);
    });

    // Simple search interaction
    $('.search-box input').on('keypress', function(e) {
        if(e.which == 13) {
            alert('Searching for: ' + $(this).val());
        }
    });
});
