-------------------
Data : 07 july 2022
-------------------

Done:-
      1. Hide Tags, section and description from survey master module.

Task:-
      2. survey dashboard create export functionility and put a searching bar in table view

-------------------
Data : 13 july 2022
-------------------

Done:-
      1. In survey :- any one completed the survey then no updated will take place in particular survey.
      2. Add a button in action.
      3. ADD, Add access and reject access button in employees module and employee_master table.

Task:-
Dashboard

-------------------
Data : 26 july 2022
-------------------

Done:-
      1. create blocks in global dashboard
          * how many launched review cycle is there.(with popup)
          * how many closed review cycle is there.(with popup)
          * how many active survey is there.(with popup)
          * how many closed survey is there.(with popup)
          API;- survey list and cycle list (for popup)

Pending task:-

--------------------
Data : 27 july 2022
--------------------

Done:-
    1. create a block of table for last 10 review cycle.
    2. Create a block of table for top 10 completed survey.

Pending task:-

-------------------
Data : 29 july 2022
-------------------

Done:-
    1. Need to updae in latest 10 review cycle
        a. employee_name, review_cycle_name, review given by (In number), upward, downward, self, peer, oveall_rating, cycle_start_date, end_date

Pending task:-
            2. Latest review_cycle added by employee

--------------------
Data : 1 August 2022
--------------------
Done:-
      1. Latest review cycle added by employee

--------------------
Data : 2 August 2022
--------------------
Done:-
    1. create a block in global dashboard to show latest five launched cycle.(condition:- launched_date+ launched)
    2. crete a block in GD to show Ongoing goal with graph in amchart.

Pending task:-

--------------------
Data : 3 August 2022
--------------------
Done:-
    1. Create upcoming review cycle block in global dashboard in table formate.
    2. Recent closed review cycle in global dashboard in table formate.
    3. Upcoming survey in global dashboard in table block.
    4. Recent closed survey in global dashboardin table block.
    5. Avtive goal count in global dashboard.
    6. Closed goal count in global dashboard.

Pending task:-

-- ##json_data
let chart_data = [
  {
    "cyce_name": "Research",
    "precentage": 80,
    "total_percentage": 100,
    "total_employee": 65,
    "count_of_given_rating" : 40
  },
  {
    "cyce_name": "gkResearch",
    "precentage": 65,
    "total_percentage": 100,
    "total_employee": 45,
    "count_of_given_rating" : 10
  }
];

---------------------
Data : 22 August 2022
---------------------
Done:-
      1.Need to render data in global dashboard in loan management system.
Pending:- 

---------------------
Data : 24 August 2022
---------------------
Done:-  
      1. Need to render dynamic data in global dashboard in loan management system.
      2. block details list table in pop up.
Pnding Task:-

---------------------
Data : 25 August 2022
---------------------
Done:-  
      1. PDF and CSV Done.
Pending:- 
      1. Work on PDF/CSV/Email section in the popup on global_dashboard in LMS.
      2. Need to change the amChart into apexcharts.

---------------------
Data : 26 August 2022
---------------------
Done:-
      1.Integrate apex chart in LMS  and prepare charts in global dashboard.
Pending:-

---------------------
Data : 29 August 2022
---------------------
Done:-
      1. Create loan_collateral_consuming_reports api in lms.
      2. Create disbursement_amount_update api in LMS.[loan_disbursement_id (required)]
Pending:-

---------------------
Data : 30 August 2022
---------------------
Done:-
      1. create one radialbar chart in loan module
      2. create Report in LMS (loan_collateral_consuming_reports)
Pending:-

$('.left-search-panel').css('left', '0px')

---------------------
Data : 31 August 2022
---------------------
Done:-
      1. Create loan_paid_payments api in LMS for report.
      2. Need to integrate the api in LMS report.
      3. Create loan_remaining_payments api in LMS for report.
Pending:-

------------------------
Data : 02 September 2022
------------------------
Done:-
      1. Change in Loan Collateral Consuming table in Reports (LMS)
      2. Create API of Today, Tomorrow And Yesterday payment table in LMS for global_dashboard.(completed)
Pending:-
      
NOTES:-  
      $where[] = 'IF((IFNULL(hem.dActualBirthDate, "") = "" OR hem.dActualBirthDate = "0000-00-00"), DATE_FORMAT(hem.dBirthDate,"%m-%d"), DATE_FORMAT(hem.dActualBirthDate,"%m-%d")) = DATE_FORMAT(now(),"%m-%d")';

------------------------
Data : 05 September 2022
------------------------
Done:-
      1. Create Today, yesterday and Tomorrow tables in global_dashboard (LMS).  
Pending:-

------------------------
Data : 06 September 2022
------------------------
Done:-
      1. Create recent_visited functionility in LMS.

Pending:-
      2. Create bookmark functionility in LMS

------------------------
Data : 07 September 2022
------------------------
Done:-
      1. Create purchase_requisition_history api in PROCUREMENT.
      2. need to implement in Report the above api.
      3. need to change in disbursement_amount_update.

Pending:-

------------------------
Data : 08 September 2022
------------------------

Done:-

Pending:-
      2. Create bookmark functionility in LMS (pending since 06 sept).

      SELECT sv.vProcurementCode AS procurement_code,sv.dRequisitionDate AS requisition_date,IF(svm.iSysVoucherId,svm.iSysVoucherId,'--') AS mapping_voucher_id,IFNULL(svm.vVoucherType,'--') AS mapping_voucher_type,IF(pc.vFullName>0,pc.vFullName,'--') AS pc_full_name FROM sys_voucher AS sv LEFT JOIN sys_voucher_mapping AS svm ON sv.iSysVoucherId = svm.iRefSysVoucherId  AND svm.vFromVoucherType = 'GEN_2011_1016_100001' LEFT JOIN pro_contact AS pc ON sv.iProContactId = pc.iProContactId WHERE 1=1 AND sv.vVoucherType = 'GEN_2011_1016_100001' ORDER BY sv.iSysVoucherId DESC"


      <div class="chart_bottom">
      <div class="chart_marker d-none"> <img src="../public/images/admin/lms/dashboard/approved-chart.svg"> Gas Tank </div>
      <div class="chart_marker d-none"> <img src="../public/images/admin/lms/dashboard/pending-chart.svg"> Oil Tank </div>
    </div>
    </div>image.png
    Indian Hotels Company Ltd
    Astral Ltd



      "api_params": {
            "company_id": "#company_id",
            "account_id": "#account_id",
            "table_view":"Yes"                    
      },  

      $extra_where   = [];   
      $extra_where[] = " llr.iAccountId = '".getAccountId()."' ";
      $extra_where[] = " llr.iCompanyId = '".getCompanyId()."' ";



      $generic_settings_data        = $this->config->item('generic_settings_data');
      $dashboard_block_rec_limit    = $generic_settings_data['dashboard_block_rec_limit'];
      
      if(intval($dashboard_block_rec_limit) <= 0)
      {
            $dashboard_block_rec_limit = 20;
      }