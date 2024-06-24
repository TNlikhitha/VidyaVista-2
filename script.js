const announcementsSection = document.getElementById('announcements');

// Sample announcement data (replace with actual data fetching logic)
const announcements = [
  { title: "Scholarship Applications Open!", date: "2024-05-10", content: "..." },
  { title: "Upcoming Campus Event", date: "2024-05-15", content: "..." },
];

// Function to create announcement list item
function createAnnouncementItem(announcement) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<h3>${announcement.title}</h3><p><b>Date:</b> ${announcement.date}</p><p>${announcement.content}</p>`;
  return listItem;
}

// Add announcements to the list dynamically
announcements.forEach(announcement => {
  const listItem = createAnnouncementItem(announcement);
  announcementsSection.querySelector('ul').appendChild(listItem);
});
 

// Add animation to cards when they come into view
$(document).ready(function() {
  $('body').scrollspy({
    target: '.ani-container',
    offset: 200
  });

  $('.card').on('activate.bs.scrollspy', function() {
    $(this).addClass('animated bounceIn');
  });
});