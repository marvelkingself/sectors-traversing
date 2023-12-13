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
      alert(setimage)
    }
    else if(inputValue==="pimage"){
      setimage= "pimage"
      alert(setimage)
    }
  });


  $(".add").click(function() {
    var newdata = ` <div class="mt-2">
    <input class="border" type="file" id="myfile" name="myfile" multiple>
    <select class="border" title="" name="property" id="primary" >
      <option value="simage">Secondery Image</option>
      <option value="pimage">primary Image</option>
    </select>
    <a  class="remove cursor-pointer"  >Remove</p>
    </div>`;

    var newElement = $(newdata);
    newElement.appendTo(".inputs");
  });

  $(".main").on("click", ".remove", function() {
    $(this).parent().remove();
  });
});
