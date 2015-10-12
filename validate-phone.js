ValidateForm.addValidator('data-phone', function ($el, instance) {
  var regex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
  var value = $el.val();
  var passes = regex.test(value);

  if (passes) {
    instance._showSuccess();
    instance.log("[ValidateForm] phone number success", instance.el);
  } else {
    instance._showError("Invalid Phone Number");
    instance.log("[ValidateForm] phone number failed", instance.el);
  }

  instance._validations.push(passes);
});