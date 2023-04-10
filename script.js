// function displayText() {
//   times = JSON.parse.localStorage.getItem(someId);
// }
// displayText();

$(function () {
  var mainDiv = $(".container-lg");

  var today = dayjs();
  $("#currentDay").text(today.format("MMM D, YYYY"));

  var currentHour = dayjs().format("H");

  var times = [
    {
      timeOfDay: "9am",
      timeValue: 9,
      id: "hour-9",
    },
    {
      timeOfDay: "10am",
      timeValue: 10,
      id: "hour-10",
    },
    {
      timeOfDay: "11am",
      timeValue: 11,
      id: "hour-11",
    },
    {
      timeOfDay: "12pm",
      timeValue: 12,
      id: "hour-12",
    },
    {
      timeOfDay: "1pm",
      timeValue: 13,
      id: "hour-13",
    },
    {
      timeOfDay: "2pm",
      timeValue: 14,
      id: "hour-14",
    },
    {
      timeOfDay: "3pm",
      timeValue: 15,
      id: "hour-15",
    },
    {
      timeOfDay: "4pm",
      timeValue: 16,
      id: "hour-16",
    },
    {
      timeOfDay: "5pm",
      timeValue: 17,
      id: "hour-17",
    },
  ];
  function buildBlocks() {
    for (let i = 0; i < times.length; i++) {
      //Determines entire timeblock container
      var blockRow = $("<div>");
      blockRow.addClass("row time-block");
      blockRow.attr("id", times[i].id);

      //Div that contains current hour. (9am, 10am, etc)
      var scheduleTimesDiv = $("<div>");
      scheduleTimesDiv.addClass("col-2 col-md-1 hour text-center py-3");
      scheduleTimesDiv.text(times[i].timeOfDay);

      //Div that user enters text
      var textArea = $("<textarea>");
      textArea.addClass("col-8 col-md-10 description");
      textArea.attr("rows", "3");

      //Div containing Save Button
      var saveButtonDiv = $("<button>");
      saveButtonDiv.addClass("btn saveBtn col-2 col-md-1");
      saveButtonDiv.attr("id", "save-button");
      saveButtonDiv.attr("aria-label", "save");

      //Actual save button
      var iTag = $("<i>");
      iTag.addClass("fas fa-save");
      iTag.attr("aria-hidden", "true");

      if (times[i].timeValue > currentHour) {
        blockRow.addClass("future");
      } else if (times[i].timeValue == currentHour) {
        blockRow.addClass("present");
      } else if (times[i].timeValue < currentHour) {
        blockRow.addClass("past");
      }

      mainDiv.append(blockRow);

      blockRow.append(scheduleTimesDiv, textArea, saveButtonDiv);
      saveButtonDiv.append(iTag);

      saveButtonDiv.on("click", function (event) {
        event.preventDefault();
        var userText = $(this).siblings(".description").val();
        var someId = $(this).parent().attr("id");

        localStorage.setItem(someId, userText);
      });
    }
  }
  buildBlocks();
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
