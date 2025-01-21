class UserManagement {
  constructor() {
    this.API_URL = "https://jsonplaceholder.typicode.com/users";
    this.users = [];
    this.initializeElements();
    this.addEventListeners();
    this.fetchUsers();
  }

  initializeElements() {
    this.userTable = document.getElementById("userTableBody");
    this.userForm = document.getElementById("userForm");
    this.userFormElement = document.getElementById("userFormElement");
    this.addUserBtn = document.getElementById("addUserBtn");
    this.cancelBtn = document.getElementById("cancelBtn");
    this.formTitle = document.getElementById("formTitle");
  }

  addEventListeners() {
    this.addUserBtn.addEventListener("click", () => this.showForm("add"));
    this.cancelBtn.addEventListener("click", () => this.hideForm());
    this.userFormElement.addEventListener("submit", (e) =>
      this.handleSubmit(e)
    );
  }

  async fetchUsers() {
    try {
      const response = await fetch(this.API_URL);
      if (!response.ok) throw new Error("Failed to fetch users");
      this.users = await response.json();
      this.renderUsers();
    } catch (error) {
      this.showError("Failed to load users");
    }
  }

  renderUsers() {
    this.userTable.innerHTML = this.users
      .map(
        (user) => `
            <tr>
                <td>${user.id}</td>
                <td>${user.name.split(" ")[0]}</td>
                <td>${user.name.split(" ")[1] || ""}</td>
                <td>${user.email}</td>
                <td>${user.company?.name || "N/A"}</td>
                <td>
                    <button class="btn btn-warning" onclick="userManagement.editUser(${
                      user.id
                    })">Edit</button>
                    <button class="btn btn-danger" onclick="userManagement.deleteUser(${
                      user.id
                    })">Delete</button>
                </td>
            </tr>
        `
      )
      .join("");
  }

  showForm(type, userId = null) {
    this.userForm.style.display = "block";
    this.formTitle.textContent = type === "add" ? "Add New User" : "Edit User";
    if (userId) {
      const user = this.users.find((u) => u.id === userId);
      if (user) {
        document.getElementById("userId").value = user.id;
        document.getElementById("firstName").value = user.name.split(" ")[0];
        document.getElementById("lastName").value =
          user.name.split(" ")[1] || "";
        document.getElementById("email").value = user.email;
        document.getElementById("department").value = user.company?.name || "";
      }
    } else {
      this.userFormElement.reset();
    }
  }

  hideForm() {
    this.userForm.style.display = "none";
    this.userFormElement.reset();
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.validateForm()) return;

    const userId = document.getElementById("userId").value;
    const userData = {
      name: `${document.getElementById("firstName").value} ${
        document.getElementById("lastName").value
      }`,
      email: document.getElementById("email").value,
      company: {
        name: document.getElementById("department").value,
      },
    };

    try {
      if (userId) {
        await this.updateUser(userId, userData);
      } else {
        await this.createUser(userData);
      }
      this.hideForm();
    } catch (error) {
      this.showError("Failed to save user");
    }
  }

  validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;

    let isValid = true;

    if (!firstName) {
      document.getElementById("firstNameError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("firstNameError").style.display = "none";
    }

    if (!lastName) {
      document.getElementById("lastNameError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("lastNameError").style.display = "none";
    }

    if (!email || !email.includes("@")) {
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("emailError").style.display = "none";
    }

    if (!department) {
      document.getElementById("departmentError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("departmentError").style.display = "none";
    }

    return isValid;
  }

  async createUser(userData) {
    const response = await fetch(this.API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("Failed to create user");

    // Simulate successful creation since JSONPlaceholder doesn't actually create
    userData.id = this.users.length + 1;
    this.users.push(userData);
    this.renderUsers();
  }

  async updateUser(userId, userData) {
    const response = await fetch(`${this.API_URL}/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("Failed to update user");

    // Simulate successful update
    const index = this.users.findIndex((u) => u.id === parseInt(userId));
    if (index !== -1) {
      this.users[index] = { ...userData, id: parseInt(userId) };
      this.renderUsers();
    }
  }

  async deleteUser(userId) {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(`${this.API_URL}/${userId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete user");

      // Simulate successful deletion
      this.users = this.users.filter((user) => user.id !== userId);
      this.renderUsers();
    } catch (error) {
      this.showError("Failed to delete user");
    }
  }

  editUser(userId) {
    this.showForm("edit", userId);
  }

  showError(message) {
    alert(message);
  }
}

// Initialize the application
const userManagement = new UserManagement();
