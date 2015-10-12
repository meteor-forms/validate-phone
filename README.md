#Validate-Form : Password

This package extends the `Validate-Form` package found [here](https://github.com/AdamBrodzinski/validate-form)



## Setup

`meteor add forms:validate-phone`


## Useage

Simply add `data-phone`  to your fields like so

```
<form id='new-user-form' class='validate'>
  <div class="form-group">
    <input type="text" name="mobile" data-onblur data-required data-phone>
  </div>

</form>

```
