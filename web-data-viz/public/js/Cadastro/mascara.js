document.addEventListener("DOMContentLoaded", function () {
    const inputMask = new Inputmask("99/99/9999");
    const ipt_nasc = document.getElementById("ipt_nasc");
    inputMask.mask(ipt_nasc);
  });