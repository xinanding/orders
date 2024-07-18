Current State of the Existing System

1. System Components:

1) Warehouse Management System (WMS): Manages the inventory pool.
2) Online Storefront: eCommerce platform where customers place orders. It accesses Middleware System to get stock data before generating orders
3) Middleware System: Connects the WMS, online storefront, and marketplaces, handling all product, inventory, and order data.
4) Marketplaces: eBay and Amazon, where customers place orders. It accesses Middleware System to get stock data before generating orders
5) SFTP Server: Stores order data from the online storefront and marketplaces.

2. Data Flow and Synchronization:

1) Inventory Updates:
   WMS sends regular inventory deltas to the middleware every 15 minutes.
2) Order Export:
   Orders from the online storefront and marketplaces are exported in batches every 15 minutes as CSV files to the SFTP server.
   Middleware aggregates these orders every 15 minutes and posts them into the WMS for fulfillment.

3. Identified Causes of Overselling

1) Delay in Inventory Updates:
   Inventory updates from the WMS to the middleware occur every 15 minutes. During this interval, inventory levels may change due to orders placed on any of the channels, leading to outdated inventory information being used.

2) Batch Processing Delays:
   Orders are exported in batches every 15 minutes. There is a potential delay between when an order is placed and when it is processed and reflected in the WMS, increasing the risk of overselling.

3) Asynchronous Order Processing:
   Orders from the online storefront and marketplaces are processed asynchronously, causing discrepancies in the inventory levels across different platforms.

4) Lack of Real-Time Inventory Synchronization:
   The 15-minute intervals for both inventory updates and order processing do not provide real-time synchronization, leading to potential overselling during these intervals.

4. Options for Rectifying the Situation

1) Quick Wins:

1.1) Increase the Frequency of Inventory Updates:

Change: Reduce the interval for inventory updates from the WMS to the middleware to every 5 minutes.
Rationale: More frequent updates will reduce the window during which inventory information may become outdated.

Implementation Effort: Moderate, involves reconfiguring the WMS and middleware.

1.2)Increase the Frequency of Order Exports:

Change: Reduce the interval for order exports from the online storefront and marketplaces to every 5 minutes.
Rationale: More frequent order exports will reduce the delay in processing orders and updating inventory.
Implementation Effort: Moderate, involves reconfiguring the online storefront, marketplaces, and middleware.

2. Larger Pieces of Work:

2.1) Implement Real-Time Inventory Synchronization:

Change: Implement real-time inventory synchronization between the WMS, middleware, online storefront, and marketplaces.

Rationale: Ensures that inventory levels are always up-to-date across all platforms, significantly reducing the risk of overselling.

Implementation Effort: High, requires significant changes to the middleware and potentially the WMS and eCommerce platforms.

2.2) Centralized Inventory Management System:

Change: Implement a centralized inventory management system that all channels (online storefront, marketplaces) interact with in real-time.

Rationale: Centralizing inventory management ensures consistent inventory levels across all channels and reduces the risk of overselling.

Implementation Effort: High, involves significant architectural changes and potential implementation of a new system.

2.3) Order Reservation System:

Change: Implement an order reservation system that temporarily reserves inventory when an order is placed until it is confirmed and processed.

Rationale: Reduces the risk of overselling by ensuring that inventory is not oversold while an order is being processed.

Implementation Effort: High, requires changes to order processing workflows and potential system integration.

5. Recommendation
   Recommended Option: Implement Real-Time Inventory Synchronization

Rationale: While increasing the frequency of updates and exports can provide immediate relief, real-time inventory synchronization offers a long-term solution to the overselling problem. It ensures that inventory levels are always accurate across all channels, significantly reducing the risk of overselling.

Implementation Effort: Although the effort is high, the benefits of having real-time synchronization outweigh the challenges of implementation. It provides a robust and scalable solution that can adapt to future growth and changes in the business.

6. Action Plan

1) Short-Term (Quick Wins):

Increase the frequency of inventory updates and order exports to every 5 minutes.
Monitor the impact on overselling and gather data to inform the long-term solution.

2. Long-Term:

Plan and implement real-time inventory synchronization across all systems.
Evaluate and potentially implement a centralized inventory management system if necessary.
Consider an order reservation system to further reduce the risk of overselling during order processing.

By addressing both immediate and long-term needs, the retailer can mitigate the overselling issue while building a more resilient and efficient system for the future.
