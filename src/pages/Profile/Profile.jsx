import { useState } from "react";
import { User, Camera, CreditCard, Plus, Trash2, Edit3, Save, X, Shield, Bell, Settings } from "lucide-react";
import "./Profile.css";

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face");
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "john.doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15"
  });
  
  const [tempUserInfo, setTempUserInfo] = useState(userInfo);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "credit",
      brand: "Visa",
      lastFour: "4532",
      expiryDate: "12/25",
      isDefault: true
    },
    {
      id: 2,
      type: "debit",
      brand: "Mastercard",
      lastFour: "8901",
      expiryDate: "08/26",
      isDefault: false
    },
    {
      id: 3,
      type: "paypal",
      brand: "PayPal",
      email: "john.doe@email.com",
      isDefault: false
    }
  ]);

  const [showAddPayment, setShowAddPayment] = useState(false);
  const [newPayment, setNewPayment] = useState({
    type: "credit",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    holderName: ""
  });

  const handleEditToggle = () => {
    if (isEditing) {
      setTempUserInfo(userInfo);
    }
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setUserInfo(tempUserInfo);
    setIsEditing(false);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
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
      const payment = {
        id: Date.now(),
        type: newPayment.type,
        brand: newPayment.cardNumber.startsWith('4') ? 'Visa' : 'Mastercard',
        lastFour: newPayment.cardNumber.slice(-4),
        expiryDate: newPayment.expiryDate,
        isDefault: paymentMethods.length === 0
      };
      setPaymentMethods([...paymentMethods, payment]);
      setNewPayment({
        type: "credit",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        holderName: ""
      });
      setShowAddPayment(false);
    }
  };

  const getCardIcon = (brand) => {
    const iconStyle = "w-8 h-5 rounded";
    switch (brand.toLowerCase()) {
      case 'visa':
        return <div className={`${iconStyle} bg-blue-600 flex items-center justify-center text-white text-xs font-bold`}>VISA</div>;
      case 'mastercard':
        return <div className={`${iconStyle} bg-red-500 flex items-center justify-center text-white text-xs font-bold`}>MC</div>;
      case 'paypal':
        return <div className={`${iconStyle} bg-blue-500 flex items-center justify-center text-white text-xs font-bold`}>PP</div>;
      default:
        return <CreditCard className="w-8 h-5 text-gray-400" />;
    }
  };
    return (
        <div className="container-general">
             <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                  />
                  <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                    <Camera className="w-4 h-4" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                      className="hidden"
                    />
                  </label>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {userInfo.firstName} {userInfo.lastName}
                </h2>
                <p className="text-gray-600">@{userInfo.username}</p>
                <div className="flex items-center justify-center mt-3 text-sm text-green-600">
                  <Shield className="w-4 h-4 mr-1" />
                  Verified Account
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  Member since 2023
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CreditCard className="w-4 h-4 mr-2" />
                  {paymentMethods.length} Payment methods
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications enabled
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-blue-600" />
                  Account Information
                </h3>
                <button
                  onClick={isEditing ? handleSave : handleEditToggle}
                  className={` flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    isEditing
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isEditing ? (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit Info
                    </>
                  )}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={isEditing ? tempUserInfo.firstName : userInfo.firstName}
                    onChange={(e) => setTempUserInfo({...tempUserInfo, firstName: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={isEditing ? tempUserInfo.lastName : userInfo.lastName}
                    onChange={(e) => setTempUserInfo({...tempUserInfo, lastName: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={isEditing ? tempUserInfo.username : userInfo.username}
                    onChange={(e) => setTempUserInfo({...tempUserInfo, username: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={isEditing ? tempUserInfo.email : userInfo.email}
                    onChange={(e) => setTempUserInfo({...tempUserInfo, email: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={isEditing ? tempUserInfo.phone : userInfo.phone}
                    onChange={(e) => setTempUserInfo({...tempUserInfo, phone: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={isEditing ? tempUserInfo.dateOfBirth : userInfo.dateOfBirth}
                    onChange={(e) => setTempUserInfo({...tempUserInfo, dateOfBirth: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={handleEditToggle}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                  Payment Methods
                </h3>
                <button
                  onClick={() => setShowAddPayment(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Payment
                </button>
              </div>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-4 border rounded-lg transition-colors ${
                      method.isDefault
                        ? "border-blue-200 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getCardIcon(method.brand)}
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">
                              {method.brand} {method.type === 'paypal' ? '' : `•••• ${method.lastFour}`}
                            </span>
                            {method.isDefault && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {method.type === 'paypal' 
                              ? method.email
                              : `Expires ${method.expiryDate}`
                            }
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        {!method.isDefault && (
                          <button
                            onClick={() => handleSetDefault(method.id)}
                            className="btn btn-secondary px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            Set Default
                          </button>
                        )}
                        <button
                          onClick={() => handleDeletePayment(method.id)}
                          className="btn btn-secondary p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Payment Modal */}
              {showAddPayment && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-semibold text-gray-900">Add Payment Method</h4>
                      <button
                        onClick={() => setShowAddPayment(false)}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Type
                        </label>
                        <select
                          value={newPayment.type}
                          onChange={(e) => setNewPayment({...newPayment, type: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="credit">Credit Card</option>
                          <option value="debit">Debit Card</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={newPayment.cardNumber}
                          onChange={(e) => setNewPayment({...newPayment, cardNumber: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            value={newPayment.expiryDate}
                            onChange={(e) => setNewPayment({...newPayment, expiryDate: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            value={newPayment.cvv}
                            onChange={(e) => setNewPayment({...newPayment, cvv: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={newPayment.holderName}
                          onChange={(e) => setNewPayment({...newPayment, holderName: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="flex space-x-3 mt-6">
                      <button
                        onClick={() => setShowAddPayment(false)}
                        className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleAddPayment}
                        className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Add Card
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600 sec-sett" />
                Security Settings
              </h3>

              <div className="space-y-4">
                <button className="btn btn-primary w-full p-4 text-left border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Change Password</h4>
                      <p className="text-sm text-gray-600">Update your account password</p>
                    </div>
                    <Edit3 className="w-5 h-5 text-gray-400" />
                  </div>
                </button>

                <button className="btn btn-primary w-full p-4 text-left border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-600">Add an extra layer of security</p>
                    </div>
                    <div className="flex items-center">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mr-2">
                        Enabled
                      </span>
                      <Settings className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Profile;
