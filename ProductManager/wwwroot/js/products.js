// Front end for the Products page.
// Uses jQuery for DOM work and $.ajax for every call to /api/products — the page never reloads.
$(function () {
    const API = '/api/products';
    const modal = new bootstrap.Modal('#productModal');
    let searchTimer = null;

    const money = n => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    // ---------- Load + render ----------
    function loadProducts() {
        const search = $('#searchBox').val();

        $.getJSON(API, { search: search })
            .done(renderTable)
            .fail(() => showAlert('Could not load products.', 'danger'));
    }

    function renderTable(products) {
        const $tbody = $('#productRows').empty();

        if (products.length === 0) {
            $tbody.append('<tr><td colspan="7" class="text-center text-muted">No products found.</td></tr>');
        }

        products.forEach(p => {
            // .text() escapes user input, so a product named "<script>" can't inject HTML
            const $row = $('<tr>').append(
                $('<td>').text(p.name),
                $('<td>').text(p.category),
                $('<td class="text-end">').text(money(p.price)),
                $('<td class="text-end">').text(p.quantity),
                $('<td class="text-end">').text(money(p.totalValue)),
                $('<td>').html(p.inStock
                    ? '<span class="badge text-bg-success">In stock</span>'
                    : '<span class="badge text-bg-danger">Out of stock</span>'),
                $('<td class="text-end text-nowrap">').append(
                    $('<button class="btn btn-sm btn-outline-primary me-1 btn-edit">Edit</button>').data('id', p.id),
                    $('<button class="btn btn-sm btn-outline-danger btn-delete">Delete</button>').data('id', p.id).data('name', p.name)
                )
            );
            $tbody.append($row);
        });

        const grand = products.reduce((sum, p) => sum + p.totalValue, 0);
        $('#grandTotal').text(money(grand));
    }

    // ---------- Search (debounced) ----------
    $('#searchBox').on('input', function () {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(loadProducts, 300);
    });

    // ---------- Add ----------
    $('#btnAdd').on('click', function () {
        resetForm();
        $('#modalTitle').text('Add Product');
        modal.show();
    });

    // ---------- Edit (event delegation: rows are created dynamically) ----------
    $('#productRows').on('click', '.btn-edit', function () {
        const id = $(this).data('id');

        $.getJSON(`${API}/${id}`)
            .done(p => {
                resetForm();
                $('#modalTitle').text('Edit Product');
                $('#productId').val(p.id);
                $('#name').val(p.name);
                $('#category').val(p.category);
                $('#price').val(p.price);
                $('#quantity').val(p.quantity);
                modal.show();
            })
            .fail(() => showAlert('Product not found.', 'warning'));
    });

    // ---------- Delete ----------
    $('#productRows').on('click', '.btn-delete', function () {
        const id = $(this).data('id');
        const name = $(this).data('name');
        if (!confirm(`Delete "${name}"?`)) return;

        $.ajax({ url: `${API}/${id}`, method: 'DELETE' })
            .done(() => {
                showAlert(`"${name}" deleted.`, 'success');
                loadProducts();
            })
            .fail(() => showAlert('Delete failed.', 'danger'));
    });

    // ---------- Save (create or update) ----------
    $('#productForm').on('submit', function (e) {
        e.preventDefault();
        clearErrors();

        if (!validateClientSide()) return;

        const id = $('#productId').val();
        const payload = {
            name: $('#name').val().trim(),
            category: $('#category').val().trim(),
            price: Number($('#price').val()),
            quantity: Number($('#quantity').val())
        };

        $('#btnSave').prop('disabled', true);

        $.ajax({
            url: id ? `${API}/${id}` : API,
            method: id ? 'PUT' : 'POST',
            contentType: 'application/json',
            data: JSON.stringify(payload)
        })
            .done(() => {
                modal.hide();
                showAlert(id ? 'Product updated.' : 'Product added.', 'success');
                loadProducts();
            })
            .fail(xhr => {
                // Server-side validation errors from [ApiController] come back as { errors: { Name: ["..."] } }
                if (xhr.status === 400 && xhr.responseJSON && xhr.responseJSON.errors) {
                    $.each(xhr.responseJSON.errors, (field, messages) => {
                        showFieldError(field.charAt(0).toLowerCase() + field.slice(1), messages[0]);
                    });
                } else {
                    showAlert('Save failed.', 'danger');
                }
            })
            .always(() => $('#btnSave').prop('disabled', false));
    });

    // ---------- Validation helpers ----------
    function validateClientSide() {
        let ok = true;
        if (!$('#name').val().trim()) { showFieldError('name', 'Name is required.'); ok = false; }
        if (!$('#category').val().trim()) { showFieldError('category', 'Category is required.'); ok = false; }
        if (!(Number($('#price').val()) > 0)) { showFieldError('price', 'Price must be greater than 0.'); ok = false; }

        const qty = $('#quantity').val();
        if (qty === '' || !Number.isInteger(Number(qty)) || Number(qty) < 0) {
            showFieldError('quantity', 'Quantity must be a whole number, 0 or more.');
            ok = false;
        }
        return ok;
    }

    function showFieldError(field, message) {
        const $input = $('#' + field);
        $input.addClass('is-invalid');
        $input.siblings('.invalid-feedback').text(message);
    }

    function clearErrors() {
        $('#productForm .is-invalid').removeClass('is-invalid');
        $('#productForm .invalid-feedback').text('');
    }

    function resetForm() {
        $('#productForm')[0].reset();
        $('#productId').val('');
        clearErrors();
    }

    // ---------- Alerts ----------
    function showAlert(message, type) {
        const $alert = $(`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <span></span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`);
        $alert.find('span').text(message);
        $('#alertBox').empty().append($alert);
        setTimeout(() => $alert.fadeOut(400, () => $alert.remove()), 3000);
    }

    loadProducts();
});
