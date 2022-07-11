function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="modal__overlay">
        <div class="modal__window">
          <div class="modal__header">
            <span class="modal__title">Modal title</span>
            <span class="modal__close">&times;</span>
          </div>
          <div class="modal__content">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div class="modal__footer">
            <button>OK</button>
            <button>CANCEL</button>
          </div>
        </div>
      </div>
   `
  );

  document.body.appendChild(modal);
  return modal;
}

$.modal = function (options) {
  const $modal = _createModal(options);

  return {
    open() {},
    close() {},
    destroy() {},
  };
};
