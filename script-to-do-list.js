$(document).ready(function () {

    $("#send").on("click", function () {
        AddTaskToContainer($("#task").val());
        $("#task").val("").focus();
    });


    $(document).on('click', '.taskRemove', function () {
        console.log($(this).is(":checked"));
        $(this).is(":checked") ? $(this).next("span").addClass("checked").hide().fadeIn(50) : $(this).next("span").removeClass("checked").hide().fadeIn(50);
    });

});

function AddTaskToContainer(task) {
    if (task.trim() == "") {
        alert("Fill the task for add it in the list!");
        return;
    }

    $('<li><input type="checkbox" class="taskRemove"> <span>' + task + '</span></li>').appendTo("#taskList").hide().fadeIn(300);
}





