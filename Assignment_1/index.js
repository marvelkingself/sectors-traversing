$(document).ready(function () {
    
    $("#parentCheckbox").click(function () {
      
      $(".childCheckbox").prop("checked", $(this).prop("checked"));
  
      updateParentCheckbox();
    });
  
    
    $(".childCheckbox").click(function () {
      updateParentCheckbox();
    });
  
    
    function updateParentCheckbox() {
      var allChecked = $(".childCheckbox:checked").length === $(".childCheckbox").length;
  
      
      $("#parentCheckbox").prop("checked", allChecked);
    }
    //check box 1
    $("#parentCheckbox1").click(function () {
      
        $(".childCheckbox1").prop("checked", $(this).prop("checked"));
    
        updateParentCheckbox1();
      });
    
      
      $(".childCheckbox1").click(function () {
        updateParentCheckbox1();
      });
    
      1
      function updateParentCheckbox1() {
        var allChecked = $(".childCheckbox1:checked").length === $(".childCheckbox1").length;
    
        
        $("#parentCheckbox1").prop("checked", allChecked);
      }
      // checkbox3 
      $("#parentCheckbox2").click(function () {
      
        $(".childCheckbox2").prop("checked", $(this).prop("checked"));
    
        updateParentCheckbox2();
      });
    
      
      $(".childCheckbox2").click(function () {
        updateParentCheckbox2();
      });
    
      
      function updateParentCheckbox2() {
        var allChecked = $(".childCheckbox2:checked").length === $(".childCheckbox2").length;
    
        
        $("#parentCheckbox2").prop("checked", allChecked);
      }
      // checkbox4
      $("#parentCheckbox3").click(function () {
      
        $(".childCheckbox3").prop("checked", $(this).prop("checked"));
    
        updateParentCheckbox3();
      });
    
      
      $(".childCheckbox3").click(function () {
        updateParentCheckbox3();
      });
    
      
      function updateParentCheckbox3() {
        var allChecked = $(".childCheckbox3:checked").length === $(".childCheckbox3").length;
    
        
        $("#parentCheckbox3").prop("checked", allChecked);
      }

  });
  