import { useState } from 'react';

export function useProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState('/api/placeholder/100/100');
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-01-15'
  });
  const [tempUserInfo, setTempUserInfo] = useState(userInfo);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'credit',
      brand: 'Visa',
      lastFour: '4567',
      expiryDate: '12/25',
      holderName: 'John Doe',
      isDefault: true
    }
  ]);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [newPayment, setNewPayment] = useState({
    type: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    holderName: ''
  });

  const handleEditToggle = () => {
    if (isEditing) {
      setTempUserInfo(userInfo); // Reset temp info if canceling
    }
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setUserInfo(tempUserInfo);
    setIsEditing(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePayment = (id) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };

  const handleSetDefault = (id) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    })));
  };

  const handleAddPayment = () => {
    if (newPayment.cardNumber && newPayment.expiryDate && newPayment.cvv && newPayment.holderName) {
      const cardBrand = getCardBrand(newPayment.cardNumber);
      const newMethod = {
        id: Date.now(),
        type: newPayment.type,
        brand: cardBrand,
        lastFour: newPayment.cardNumber.slice(-4),
        expiryDate: newPayment.expiryDate,
        holderName: newPayment.holderName,
        isDefault: paymentMethods.length === 0
      };
      
      setPaymentMethods([...paymentMethods, newMethod]);
      setNewPayment({
        type: 'credit',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        holderName: ''
      });
      setShowAddPayment(false);
    }
  };

  const getCardBrand = (cardNumber) => {
    const firstDigit = cardNumber.charAt(0);
    const firstTwo = cardNumber.substring(0, 2);
    const firstFour = cardNumber.substring(0, 4);

    if (firstDigit === '4') return 'Visa';
    if (firstTwo >= '51' && firstTwo <= '55') return 'Mastercard';
    if (firstTwo === '34' || firstTwo === '37') return 'American Express';
    if (firstFour === '6011' || firstTwo === '65') return 'Discover';
    return 'Unknown';
  };

  // Return the card icon type instead of JSX
  const getCardIcon = (brand) => {
    return brand.toLowerCase();
  };

  return {
    isEditing,
    profilePicture,
    userInfo,
    tempUserInfo,
    paymentMethods,
    showAddPayment,
    newPayment,
    setTempUserInfo,
    setShowAddPayment,
    setNewPayment,
    handleEditToggle,
    handleSave,
    handleProfilePictureChange,
    handleDeletePayment,
    handleSetDefault,
    handleAddPayment,
    getCardIcon,
  };
}