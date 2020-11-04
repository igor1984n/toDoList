$(function(){
	
//hide AddTaskForm finction
	function hideAddTaskForm(){
		$('#left-column').css({
			'width' : '75%',
			'display' : 'block'
		});
	};

//delete one task from the list
	$(".delete-button").click(function() {
		$( this ).parent().parent().parent().remove()
	});

//delete all tasks from the list
	$('.delete-all-tasks-button').on('click', function() {
		$('.task-link').remove();
//		$('#right-column').css('display' , 'block');
	});


//save a new task to the list
	$('.save-button').on( 'click', function(){ hideAddTaskForm() });
		
//add another task to the list
	$('.add-new-task-button').on('click', function(){
		$('#left-column').hide();
		$('#right-column').css('display' , 'block');
	});

	//change colour of the save button when over it
	function changeColor(){
		$('.save-button').toggleClass("-new-style");
	};

	$('.save-button').on('mouseover', function(){
		changeColor();
	});

	$('.save-button').on('mouseout', function(){
		changeColor();
	});

	//additional margin when the calendar expands
	function addMargin(){
		$('.date-and-urgency-container').toggleClass('-add-margin-bottom');
	}

	$('.deadline').on('click', function(){
		$('.date-and-urgency-container').addClass('-add-margin-bottom');
	});

	$('.deadline').on('focusout', function(){
		addMargin();
	});

	//change the add new task button color
	function changeAddButtonColor(){
		$('.add-new-task-button').toggleClass("-new-style-for-add-button");
	};

	$('.add-new-task-button').on('mouseover', function(){
		changeAddButtonColor();
	});

	$('.add-new-task-button').on('mouseout', function(){
		changeAddButtonColor();
	});

	//
	function changeDeleteAllColor(){
		$('.delete-all-tasks-button').toggleClass('new-style-for-delete-all');
	};

	$('.delete-all-tasks-button').on('mouseover', function(){
		changeDeleteAllColor();
	});

	$('.delete-all-tasks-button').on('mouseout', function(){
		changeDeleteAllColor();
	});

});