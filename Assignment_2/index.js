
    
   $(document).ready(function() {
     
      $(".add").click(function() {
        
        var newdata = `<div " >
   <input type="file" id="myfile" name="myfile" multiple>
        <select name="property" >
        <option value="saab">Secondery Image</option>
          <option value="volvo">primary Image</option>
          </select>
        <a class="remove" ">Remove</p>
      </div>`
      var newElement = $(newdata);
        console.log(newdata)
        newElement.appendTo(".inputs");
      });
      
      
      $(".main").on("click", ".remove", function () {
         $(this).parent().remove()
    });
   })
 a
  