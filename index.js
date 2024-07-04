let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})


function navigateTo(page) {
    
    switch (page) {
      case 'dashboard':
        window.location.href = 'dashboard.html';
        break;
      case 'Profile':
        window.location.href = 'Profile.html';
        break;
      case 'InOut Time':
         window.location.href = 'InOutTime.html';
         break;
      case 'Apply Loan':
         window.location.href = 'ApplyLoan.html';
         break;
      case 'Reimbursement':
        window.location.href = 'Reimbursement.html';
        break;
      case 'Query':
        window.location.href = 'Query.html';
        break;
      case 'Income Tax':
        window.location.href = 'IncomeTax.html';
        break;
       case 'Off-Boarding':
        window.location.href = 'Off-Boarding.html';
        break;
        case 'Leave':
        window.location.href = 'Leave.html';
        break;
        case 'Logout':
        window.location.href = 'logout.html';
        break;

      default:
        console.error('Invalid page:', page);
    }
  }