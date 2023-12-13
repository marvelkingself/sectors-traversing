$(document).ready(function() {
  var setimage= "pimage"
  $(".main").on("change", ".inputs select", function(e) {
    e.preventDefault()
    var inputValue = $(this).val();
    
    console.log(inputValue)
    if(inputValue==="pimage"&&setimage==="pimage"){
      e.preventDefault()
      alert("already selected a primary image")
      $(this).val("simage");
    }
    else if(inputValue==="simage"){
      setimage= "simage"
      // alert(setimage)
    }
    else if(inputValue==="pimage"){
      setimage= "pimage"
      // alert(setimage)
    }
  });
  $(".main").on("change", ".inputs input", function() {
    var inputElement = $(this)[0];
    var files = inputElement.files[0].name;
    console.log(files)
    $(this).closest(".line").find(".propertyImg").attr("src",`img/${files}`);
    
  });


  $(".add").click(function() {
    var newdata = `
    <div class=" mx-10 line border flex w-3/4 ">
    <div class=" border ">
      <img he src="w-[]"  class="propertyImg" alt="property image " height="100px" width="100px">
    </div>
    <div class="inputs mt-6  ">
        <div class="mt-2">
          <input class="border" type="file" id="myfile" name="myfile" multiple>
          <select class="border" title="" name="property" id="primary">
          <option value="simage">Secondery Image</option>
            <option value="pimage">primary Image</option>
            
          </select>
          
        </div>
      </div>
      <a class="remove cursor-pointer mt-8 ms-4">Remove</p>
  </div>`;

    var newElement = $(newdata);
    newElement.appendTo(".addmore");
  });

  $(".main").on("click", ".remove", function() {
    $(this).parent().remove();
  });
});
