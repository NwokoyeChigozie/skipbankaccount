<?php include("../phpscripts/top.php");?>
<?php $page = "dashboard"; ?>
                <div id="LeftContent" class="maDashboard">
                    <div id="widgetContainer" class="widgetContainer" bis_skin_checked="1">
                        <div class="myaccount" bis_skin_checked="1">
                            <div class="myaccount__container legacy" bis_skin_checked="1">
                                <div class="myaccount__container__outlet" bis_skin_checked="1">
                                    <div class="myaccount__container__wrapper" bis_skin_checked="1">
                                        <div class="dashboard-outlet" bis_skin_checked="1">
                                            <div class="widget-handler dashboard-widget-handler jumbotron-widget--not_visible" bis_skin_checked="1">
                                                <!--                                                <div class="widget-template actions-required-widget" bis_skin_checked="1"></div>-->
                                                <div class="widget-template jumbotron-widget" bis_skin_checked="1">
                                                    <div class="sc-fzoYkl hfPoTr" bis_skin_checked="1"></div>
                                                </div>
                                                <div class="widget-template balances-widget" bis_skin_checked="1">
                                                    <div class="balances-widget-outlet" bis_skin_checked="1">
                                                        <div class="balances-widget-main" bis_skin_checked="1">
                                                            <div class="balances-widget-header" bis_skin_checked="1"><span class="text">Balances</span></div>
                                                            <div class="balances-cards-list-wrapper" bis_skin_checked="1">
                                                                <div class="balances-cards-list" bis_skin_checked="1">
                                                                    <div data-testid="widget-balances-balance-card-0" class="balance-card" bis_skin_checked="1">
                                                                        <div class="active-border" bis_skin_checked="1">
                                                                            <div bis_skin_checked="1"></div>
                                                                        </div>
                                                                        <div class="balance-card__content" bis_skin_checked="1">
                                                                            <header class="balance-card__header" data-testid="widget-balance_blocked-header-0">
                                                                                <!--
                                                                                <div class="inline-dropdown" bis_skin_checked="1">
                                                                                    <div class="inline-dropdown__trigger" bis_skin_checked="1"><span class="inline-dropdown__trigger__value-wrapper"></span><span class="inline-dropdown__trigger__label"><i class="icon-more-actions"></i></span></div>
                                                                                </div>
-->
                                                                            </header>
                                                                            <main class="balance-card__main">
                                                                                <div class="" bis_skin_checked="1">
                                                                                    <p>Savings Balance</p><br>
                                                                                    <div class="balance" data-testid="widget-balance_card-balance-0" bis_skin_checked="1"><?php echo serializer($savings_balance); ?> USD</div>
                                                                                    <div class="card-details" bis_skin_checked="1"><span class="masked-card"></span></div>
                                                                                </div>
                                                                                <!--                                                                                <i class="icon-right-open-big  "></i>-->
                                                                            </main>
                                                                            <div class="snackFooter" bis_skin_checked="1">
                                                                                <div bis_skin_checked="1">
                                                                                    <footer data-testid="widget-balance_balance-card-footer-0" class="balance-card__footer"><a class="myaccount-link" href="../withdraw/"><span>Withdraw <i class="fa fa-angle-right"></i></span></a></footer>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="sep" bis_skin_checked="1"></div>
                                                                    <div data-testid="widget-balances-balance-card-1" class="balance-card" bis_skin_checked="1">
                                                                        <div class="active-border" bis_skin_checked="1">
                                                                            <div bis_skin_checked="1"></div>
                                                                        </div>
                                                                        <div class="balance-card__content" bis_skin_checked="1">
                                                                            <header class="balance-card__header" data-testid="widget-balance_blocked-header-1">
                                                                            </header>
                                                                            <main class="balance-card__main">
                                                                                <div class="" bis_skin_checked="1">
                                                                                    <p>Investment Balance</p><br>
                                                                                    <div class="balance" data-testid="widget-balance_card-balance-1" bis_skin_checked="1"><?php echo serializer($investment_balance); ?> USD</div>
                                                                                    <div class="card-details" bis_skin_checked="1"><span class="masked-card"></span></div>
                                                                                </div>
                                                                                <!--                                                                                <i class="icon-right-open-big  "></i>-->
                                                                            </main>
                                                                            <div class="snackFooter" bis_skin_checked="1">
                                                                                <div bis_skin_checked="1">
                                                                                    <footer data-testid="widget-balance_balance-card-footer-1" class="balance-card__footer"><a class="myaccount-link" href="../withdraw/"><span>Withdraw <i class="fa fa-angle-right"></i></span></a></footer>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="sep" bis_skin_checked="1"></div>
                                                                    <div data-testid="widget-balances-balance-card-2" class="balance-card" bis_skin_checked="1">
                                                                        <div class="active-border" bis_skin_checked="1">
                                                                            <div bis_skin_checked="1"></div>
                                                                        </div>
                                                                        <div class="balance-card__content" bis_skin_checked="1">
                                                                            <header class="balance-card__header" data-testid="widget-balance_blocked-header-2">
                                                                            </header>
                                                                            <main class="balance-card__main">
                                                                                <div class="" bis_skin_checked="1">
                                                                                    <p>Investment Withdrawable Amount</p><br>
                                                                                    <div class="balance" data-testid="widget-balance_card-balance-2" bis_skin_checked="1"><?php echo serializer($user_withdrawable); ?> USD</div>
                                                                                    <div class="card-details" bis_skin_checked="1"><span class="masked-card"></span></div>
                                                                                </div>
                                                                                <!--                                                                                <i class="icon-right-open-big  "></i>-->
                                                                            </main>
                                                                            <div class="snackFooter" bis_skin_checked="1">
                                                                                <div bis_skin_checked="1">
                                                                                    <footer data-testid="widget-balance_balance-card-footer-2" class="balance-card__footer"><a class="myaccount-link" href="../withdraw/"><span>Withdraw <i class="fa fa-angle-right"></i></span></a></footer>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="sc-fzoXWK hnKkAN" bis_skin_checked="1">
                                                                <div class="snackBackground closeSnack" bis_skin_checked="1">
                                                                    <div class="overlay" bis_skin_checked="1"></div>
                                                                    <div class="snack" bis_skin_checked="1"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="LeftContent" class="" bis_skin_checked="1">
                                                    <div id="widgetContainer" class="widgetContainer" bis_skin_checked="1">
                                                        <div class="myaccount" bis_skin_checked="1">
                                                            <div class="myaccount__container legacy" bis_skin_checked="1">
                                                                <div class="myaccount__container__outlet" bis_skin_checked="1">
                                                                    <div class="myaccount__container__wrapper" bis_skin_checked="1">
                                                                        <section id="activity" class="activity page-component activity--legacy">
                                                                            <div class="activity__activity-body--legacy" bis_skin_checked="1">
                                                                                <div class="transactions" bis_skin_checked="1">
                                                                                    <div class="transactions__body" bis_skin_checked="1">
                                                                                        <div class="myaccount-page-title myaccount-page-title--legacy" bis_skin_checked="1">
                                                                                            <div class="myaccount-page-title__wrapper" bis_skin_checked="1">
                                                                                                <div class="myaccount-page-title__start" bis_skin_checked="1"><span class="title">Recent Transactions</span></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="transaction-search-new transaction-search-new--legacy" bis_skin_checked="1"></div>
                                                                                        
                                                                                        <div class="transactions__body__tables transactions__body__tables--legacy" bis_skin_checked="1">
                                                                                            <div class="card transactions__body__tables__table-transactions transactions__body__tables__table-transactions--legacy card--open card--active card--no-padding card--shadow" bis_skin_checked="1">
                                                                                                <div class="card__header card__header--collapsable" bis_skin_checked="1"><i class="card__header__expander icon-right-open-big"></i>
                                                                                                    <div class="card__header__title" bis_skin_checked="1">
                                                                                                        <h2>Recent transactions</h2>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="card__content" bis_skin_checked="1">
                                                                                                    <div class="card__body" bis_skin_checked="1">
                                                                                                        <div class="table table--clickable table--show-selection" bis_skin_checked="1">
                                                                                                            <div class="table__actions" bis_skin_checked="1">
                                                                                                                <div class="table__actions__header-text" bis_skin_checked="1"></div>
                                                                                                                
                                                                                                            </div>
                                                                                                            <div class="table-wrapper" bis_skin_checked="1" style="min-width: initial;">
                                                                                                                <table>
                                                                                <colgroup>
                                                                                    <col span="1" class="table__table-col column-date">
                                                                                    <col span="1" class="table__table-col column-activity">
                                                                                    <col span="1" class="table__table-col column-amount">
                                                                                    <col span="1" class="table__table-col column-payout-method">
                                                                                    <col span="1" class="table__table-col column-statement">
                                                                                    <col span="1" class="table__table-col column-action">
                                                                                    <col span="1" class="table__table-col column-status">
                                                                                    <col span="1" class="table__table-col column-date-status-mobile">
                                                                                    <col span="1" class="col--clickable">
                                                                                </colgroup>
                                                                                <thead>
                                                                                    <tr class="table__table-tr">
                                                                                        <th colspan="1" class="table__table-th column-amount">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Date</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Date</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="1" class="table__table-th column-activity">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Description</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Description</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="2" class="table__table-th column-amount">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Comment</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Comment</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
<!--
                                                                                        <th colspan="1" class="table__table-th column-payout-method">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Comment</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Comment</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
-->
<!--
                                                                                        <th colspan="1" class="table__table-th column-statement">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1"></div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="1" class="table__table-th column-action">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Action</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Action</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="1" class="table__table-th column-status">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Status</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Status</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="1" class="table__table-th column-date-status-mobile">
                                                                                            <div bis_skin_checked="1">
                                                                                                <div class="table__table-th__title-shadow" bis_skin_checked="1">Status</div>
                                                                                                <div class="table__table-th__title-content" bis_skin_checked="1">
                                                                                                    <div class="table__table-th__title-content__title-text" bis_skin_checked="1">Status</div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th colspan="1" class="table__table-th table__table-th--clickable"></th>
-->
                                                                                    </tr>
                                                                                </thead>
                                                            <tbody>
                                                                <?php 
$prods = [];
$sql1 = "SELECT * FROM `$username` ORDER BY id DESC" ;
          if($result = mysqli_query($link1, $sql1)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            $prods[] = $row;
//                   $transactionid = $row["id"];
//            
//               $transaction = $row["transaction"];
//            
//               $amount = $row["amount"];
//               $comment = $row["comment"];
//               $currency = $row["currency"];
//               if($currency == '$'){
//                  $amount = round($amount, 2);
//               }
//            if(strpos(strtolower($transaction), "debit") !== false){
//                $color = "red";
//            }elseif(strpos(strtolower($transaction), "credit") !== false){
//                $color = "green";
//            }else{
//                $color = "blue";
//            }
//               $date = $row["date"];
////            $date = date("F d, Y h:i:s", $date);
//               $status = $row["status"]; 
        }
    }
          }
    $new_prods = [];
    if(!empty($prods) && $prods[0] != ''){
        foreach($prods as $prod){
            $t_time = $prod['date'];
            $t_stamp = strtotime($t_time);
            if((time()-$t_stamp) <= 172800){
               $new_prods[] = $prod; 
            }
        }
    }
                                        
    if(!empty($new_prods) && $new_prods[0] != ''){
        foreach($new_prods as $prod){
            $t_time = $prod['date'];
            $t_transaction = $prod['transaction'];
            $t_amount = $prod['amount'];
            $t_comment = $prod['comment'];
            $t_currency = $prod['currency'];
            $t_status = $prod['status'];
            $t_stamp = strtotime($t_time);
            $t_a = explode(',', $t_time);
            $t_time = implode('', $t_a);
            $t_a = explode(' ', $t_time);
            $color = '';
            
//            receive
            if(strpos(strtolower($t_transaction), "debit") !== false || strpos(strtolower($t_transaction), "pay") !== false){
                $color = "red";
            }elseif(strpos(strtolower($t_transaction), "credit") !== false || strpos(strtolower($t_transaction), "receive") !== false){
                $color = "green";
            }else{
                $color = "blue";
            }
//            print_r($t_a);
            
            ?>
             <tr class="table__table-tr table__table-tr--data" style="color:<?php echo $color; ?> !important">
                                                                    <td class="table__table-td column-date">
                                                                        <div bis_skin_checked="1">
                                                                            <div bis_skin_checked="1">
                                                                                
                                                                                <div class="activity-date" bis_skin_checked="1"><?php echo $t_a[1] . " " . $t_a[0]; ?></div>
                                                                                <div class="activity-year" bis_skin_checked="1"><?php echo $t_a[2]; ?></div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="table__table-td column-activity">
                                                                        <div bis_skin_checked="1">
                                                                            <div class="activity-description" bis_skin_checked="1"><?php echo $t_transaction; ?><br>
                                                                                <span class="activity-description__status"><?php echo $t_status; ?></span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="table__table-td column-amount">
                                                                        <div bis_skin_checked="1"><span style="font-size:13px"><?php echo $t_comment; ?></span></div>
                                                                    </td>
<!--
                                                                    <td class="table__table-td column-payout-method">
                                                                        <div bis_skin_checked="1">
                                                                            <div bis_skin_checked="1">

                                                                                <div class="payout-method-view" bis_skin_checked="1" style="max-width:200px">
                                                                                    <div class="prefix-view" bis_skin_checked="1" ><?php echo $t_comment; ?></div>
                                                                                    <div class="suffix-view" bis_skin_checked="1"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
-->
                                                                    <td class="table__table-td column-statement">
                                                                        <div bis_skin_checked="1">
                                                                            <div bis_skin_checked="1"></div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="table__table-td column-action">
                                                                        <div bis_skin_checked="1"><span> </span></div>
                                                                    </td>
                                                                    <td class="table__table-td column-status">
                                                                        <div bis_skin_checked="1"><span> Completed</span></div>
                                                                    </td>
                                                                    <td class="table__table-td column-date-status-mobile">
                                                                        <div bis_skin_checked="1"><span>17 Jun 2020<span class="status-span"> - Completed</span></span></div>
                                                                    </td>
                                                                    <td class="table__table-td table__table-td--clickable">
<!--                                                                        <i class="icon-expander"></i>-->
                                                                    </td>
                                                                </tr>                                                   
                                                                
                                                                
                                                                
            <?php
        }
    }else{
        
    }
?>
                                                                
                                                            </tbody>
                                                                                                                </table>
                                                                                                            </div>
                                                                                                            
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </section>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="" bis_skin_checked="1">
                                                                <div class="notification-list" bis_skin_checked="1"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="" bis_skin_checked="1">
                                <div class="notification-list" bis_skin_checked="1"></div>
                            </div>
                        </div>
                    </div>
                </div>
<?php include("../phpscripts/bottom.php");?>