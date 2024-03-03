class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    addPhoneNumber(phoneNumber) {
      if (typeof phoneNumber === 'string') {
        this.phoneNumbers.push(phoneNumber);
      } else {
        throw new Error("Invalid phone number format. Enter a string.");
      }
    }
  
    removePhoneNumber(phoneNumber) {
      const index = this.phoneNumbers.indexOf(phoneNumber);
      if (index !== -1) {
        this.phoneNumbers.splice(index, 1);
      } else {
        throw new Error("Phone number not found");
      }
    }
  
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        this.notifyObservers(phoneNumber);
        console.log(`Dialing number: ${phoneNumber}`);
      } else {
        throw new Error("Phone number not found in the list");
      }
    }
  
    addObserver(observer) {
      if (typeof observer === 'function') {
        this.observers.push(observer);
      } else {
        throw new Error("Invalid observer. Provide a function.");
      }
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(phoneNumber) {
      this.observers.forEach(observer => observer(phoneNumber));
    }
  }
  
  // Create phone instance
  const phone = new Telephone();
  
  // Add observers directly as functions
  const phoneObserver = (number) => console.log(`Phone number dialed: ${number}`);
  const dialingObserver = (number) => console.log(`Now Dialling ${number}`);
  phone.addObserver(phoneObserver);
  phone.addObserver(dialingObserver);
  
  // Add phone numbers
  phone.addPhoneNumber("1234567890");
  phone.addPhoneNumber("2347023232");
  
  // Dial a number
  phone.dialPhoneNumber("2347023232");  