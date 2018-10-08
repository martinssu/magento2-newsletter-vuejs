<?php

namespace Bitbull\Newsletter\Plugin\Customer\CustomerData;

use \Magento\Newsletter\Model\Subscriber;
use \Magento\Customer\Helper\Session\CurrentCustomer;

class Customer
{
    /**
     * @var Subscriber
     */
    protected $_subscriber;

    /**
     * @var CurrentCustomer
     */
    protected $_currentCustomer;

    /**
     * Customer constructor.
     * @param Subscriber $subscriber
     * @param CurrentCustomer $currentCustomer
     */
    public function __construct(
        Subscriber $subscriber,
        CurrentCustomer $currentCustomer
    )
    {
        $this->_subscriber = $subscriber;
        $this->_currentCustomer = $currentCustomer;
    }

    /**
     * @param \Magento\Customer\CustomerData\Customer $subject
     * @param $result
     * @return mixed
     */
    public function afterGetSectionData(\Magento\Customer\CustomerData\Customer $subject, $result)
    {
        $customerId = $this->_currentCustomer->getCustomerId();
        if ($customerId) {
            $customerSubscribtion = $this->_subscriber->loadByCustomerId($this->_currentCustomer->getCustomerId());
            $subscribed = ($customerSubscribtion) ? $customerSubscribtion->isSubscribed() : '';

            $result['subscribed'] = ($subscribed) ? 1 : 0;
        }

        return $result;
    }
}

