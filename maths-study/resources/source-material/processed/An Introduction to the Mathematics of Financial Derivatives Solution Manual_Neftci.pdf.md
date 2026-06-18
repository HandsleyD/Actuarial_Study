---
normalized_id: shared-solutions-an-introduction-to-the-mathematics-of-financial-derivatives-solution-manual-neftci
exam_code: SHARED
material_scope: an introduction to the mathematics of financial derivatives solution manual_neftci.pdf
material_group: shared
document_type: solutions
source_repo_path: resources/source-material/shared/An Introduction to the Mathematics of Financial Derivatives Solution Manual_Neftci.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-solutions-an-introduction-to-the-mathematics-of-financial-derivatives-solution-manual-neftci

                                                   CHAPTER 1




1. (a) Payo diagram at expiration:
                      20
                                                                                        short stock
                                                                                        short call
                                                                                        combined position
                      15



                      10

                                                         short stock

                       5        written call



                       0



                      −5                           short stock + short call



                     −10



                     −15



                     −20
                           0      2            4   6         8         10     12   14   16      18          20



            FIGURE   0.1       Payo diagram for both a short sale of stock and an at-the-money call.




                                                                       i
             Payo diagram at expiration:
                             3.5
                                                                                           long put
                                                                                           long call
                                                                                           put + call
                              3




                             2.5




                              2




                             1.5




                              1




                             0.5




                              0
                                   1   2       3   4          5        6   7   8          9             10



         FIGURE      0.2   Payo diagram for a long put with strike K1 and a long call with strike K2 , K1 < K2 .

             Payo diagram at expiration:
                              6
                                                                                long put+short call
                                                                                short put + long call
                                                                                combined position

                              4




                              2
                                                         K1       K2




                              0




                             −2




                             −4




                             −6
                                  0        2       4               6       8        10                  12



FIGURE 0.3    Payo diagram for a (long put/short call) combination at K1 plus a (long call/short put) combination at K2 > K1 .




                                                                  ii
 (b) Payo diagram before expiration:
                        10
                                                                                             short stock
                                                                                             short call
                                                             short stock                     combined position
                         5




                         0




                        −5               written call




                       −10
                                                        short stock + short call



                       −15




                       −20




                       −25
                             0   2   4         6            8         10           12   14   16      18           20



    FIGURE      0.4   Pre-maturity payo diagram for both a short sale of stock and an at-the-money call.

     Payo diagram before expiration:
                        4
                                                                                                     long put
                                                                                                     long call
                                                                                                     put + call
                       3.5



                        3



                       2.5



                        2



                       1.5



                        1



                       0.5



                        0
                             0   1   2         3            4          5           6    7    8        9           10



FIGURE   0.5   Pre-maturity payo diagram for a long put with strike K1 and a long call with strike K2 , K1 < K2 .




                                                                    iii
               Payo diagram before expiration:

                                6
                                                                                   long put+short call
                                                                                   short put+long call
                                                                                   combined position

                                4




                                2




                                0




                               −2




                               −4




                               −6
                                    0   1    2     3      4     5     6     7      8         9           10



FIGURE 0.6      Pre-maturity payo diagram for a (long put/short call) combination at K1 plus a (long call/short put) combination
at K2 > K1 .


    2. (a) Let N denote the notional amount of the swap and L12 and L18 the USD Libor rate at 12 months
           and 18 months respectively. The cash ows are given by

                                                       12 months 18 months 24 months
                                                                                                              
                                        Floating leg +N              +N  L212         +N  1 + L218
                                                                                                    
                                        Fixed leg     N               N  :05
                                                                           2            N  1 + :05
                                                                                                 2
               where the 1 in the 24 months column represents the notional amount.

         (b) If one had a oating rate obligation and wished to pay a xed rate, , then enter into two FRA
             contracts at rate  with maturity 18 and 24 months. For example, at 18 months, if the oating rate
             were above , then the FRA would be in-the-money by precisely the amount required to o set the
             higher oating rate payment. Therefore, the total payment is at the rate .

         (c) If one had a oating rate obligation and wished to pay a xed rate, a swap is not necessary as long
             as the appropriate interest rate options are available. A long position in an interest rate cap at
             rate  and a short position in an interest rate oor at rate , both maturing on the oating rate
             payment date, ensure that a xed rate of  is paid. If the oating rate, say rT , is above  at expiry,
             a net payment at rate  is required after taking into account the value of the cap, N  (rT ).
             If the oating rate is below  at expiry, say rT , then a payment at rate rT must be made on the
               oating rate obligation. However, the short position in the oor requires an additional payment of
             N  ( rT ). The result is a total payment at precisely rate .

    3. (a) St (1 + r)  Ft  (St + c + s)(1 + r) where c is the annual storage cost for 1 ton of wheat, s is the
           annual insurance cost for 1 ton of wheat, and r is the simple interest rate. If Ft > (St + c + s)(1 + r),
           then construct the following arbitrage portfolio

                                                              iv
            Position                                           Payo at t        Payo at T
            Short futures                                      0                Ft ST
            Borrow St + c + s                                  +(St + c + s)     (St + c + s)(1 + r)
            Buy wheat and pay storage, insurance costs           (St + c + s)   ST
            Total                                              0                Ft (St + c + s)(1 + r) > 0

       Thus, Ft  (St + c + s)(1 + r). If Ft < (St + c + s)(1 + r), one cannot immediately reverse the
       holdings in the above portfolio to create another arbitrage portfolio. A problem arises since wheat
       is not typically held as an investment asset. If one sells wheat, it is not reasonable to assume that
       one is entitled to receive the storage and insurance. Therefore, a weaker condition ensues with
       Ft  St (1+ r) but not Ft  (St + c + s)(1+ r). If the asset were of a nancial nature or a commodity
       held for investment such as gold, one could sell the asset and save on the storage and insurance costs.
       These assets produce an exact relationship, Ft = (St + c + s)(1 + r). Holding an asset such as wheat
       has value since it may be consumed. For instance, a large bakery requires wheat for production and
       maintains an inventory. These companies would be reluctant to substitute a futures contract for
       the actual underlying. Hence, the price of a futures is allowed to be less than (St + c + s)(1 + r).
       However, if Ft < St (1 + r), then construct the following arbitrage portfolio

                                   Position        Payo at t      Payo at T
                                   Buy futures     0              ST Ft
                                   Invest St         St           +St(1 + r)
                                   Sell wheat      +St              ST
                                   Total           0              St (1 + r) Ft > 0
       Thus, Ft  St (1 + r) and combining the two inequalities implies
                                        St (1 + r)  Ft  (St + c + s)(1 + r)

   (b) Ft = $1; 500 < $1; 543:50 = (1; 470)(1 + :05) = St (1 + r). This violates the above inequality. To take
       advantage of this arbitrage opportunity, follow the second arbitrage strategy outlined above.
   (c) Pro t / Loss = 1,543.50 - 1,500 = $43.50.

4. (a) Ft = St (1 + r)(T t) = $105 where T       t = 1 year.
   (b) Ft = 101. Consider the following arbitrage portfolio
                                Position                       Payo at t    Payo at T
                                Long forward                   $0           ST $101
                                Short stock                    +$100          ST
                                Invest at risk - free rate       $100       +$105
                                Total                          $0           $4

       or the following arbitrage portfolio

                                                     v
Position                               Payo at t   Payo at T
Short stock                            +$100         ST
Long Call                                $3:0      max(ST $100; 0)
Short Put                              +$3:5       min(ST $100; 0)
Invest P V (100) at risk - free rate     $ 1100
                                             :05   $100
Total                                  $5:26       $0




                            vi
                                          CHAPTER 2




                             260
1. (a) p = ur dd = 1+320
                       :05 280
                           260 = :3917
                      280 280
   (b) Value of the call option.
                                                    1
                                        Ct =              E (C )
                                               (1 + :05) p~ t+
                                                    1
                                             =            (320 280)  p
                                               (1 + :05)
                                             = $15:47
   (c) Normalize by St . The elements of the state price vector must be solved. Consider the following two
       equations

                                           1 = (1 + r) u + (1 + r) d
                                          St = Stu+1 u + Std+1 d
       and after dividing the second equation by St

                                          1 = (1 + r) u + (1 + r) d
                                              Su        Sd
                                          1 = t+1 u + t+1 d
                                               St        St
       Substitute in the values for r, Stu+1 , Std+1 and express these equations as
                                                                                
                                          1:0125 1:0125          u       =       1
                                           320      260                          1
                                           280      280          d

       Solving this system gives u = :3868 and d = :6008. The rst equation

                                          1 = (1 + r) u + (1 + r) d

                                                   vii
        demonstrates that up and down probabilities are calculated as p~u = (1 + r) u = :3917 and
        p~d = 1 p~u = (1 + r) d = :6083. Observe that the quantity p~u is the same as p in part (a).
   (d) Observe that the discounted stock price is a martingale under the risk - neutral measure calculated
       by the St normalization.

                                              
                                 St+1                     1                               
                             E          I
                               (1 + r) t
                                                   =
                                                     (1 + r)
                                                                p~u  Stu+1 + p~d  Std+1
                                                        1
                                                   =        (:3917  320 + :6083  260)
                                                     1:0125
                                                   = 280
                                                   = St
    (e) Only the up state is relevant for pricing the call option as the call expires worthless if the stock
        decreases to $260 next period. The call price equals
                                                   Ct = 40 u = $15:47
        The same price calculated in part (b).
    (f) No, di erent martingale measures (i.e. di erent risk neutral probabilities p~u and p~d ) produce di erent
        call values. However, an option's fair market value is independent of the procedure used to obtain
        p~ (or p ).
   (g) A di erent normalization (numeraire asset) is used. An analogue to part (f) would be a statement
       asserting that the arbitrage - free option price is independent of the numeraire asset.
   (h) The risk premium
                  h      i incorporated in the option's price satis es: (1 + r + risk premium for Ct ) =
       E empirical CCt+1
                      t . This risk premium is usually not calculated in the real world. One uses risk -
                                                                  h   i                            h     i
        neutral probabilities for call pricing, E risk neutral CCt+1
                                                                  t  = 1 + r and not E empirical CCt+1
                                                                                                    t . In an
        incomplete market, there may exist risk premiums which require explicit calculation.

2. (a) Assume the risk - free interest rate r is zero and consider the system of equations given by
                                           2                  3           2   3
                                             124 71       A0
                                           4 83  61 5 1 = 4 B0 5
                                             92 160   2     C0
        If there exists 1 and 2 with the properties

                                                              1
                                     1:    1 + 2 = (1 + r) = 1            assumed r = 0
                                     2:    1 , 2>0
        such that the right hand side of this system of equations is positive, then the \current prices" are
        arbitrage - free. In this particular case, since no current prices are speci ed, there are an in nite
        number of possible 1 and 2 solutions in which both state prices are positive, sum to the discount
        factor, and generate positive values for A0 , B0 , and C0 .
   (b) If no such solution exists, then at least one of the current prices (A0 , B0 , or C0 ) is non - positive. In
       this case, one would \buy" the asset for the non - positive price and be assured of positive payo s
       in all future states of the world. Hence, an arbitrage pro t exists.

                                                       viii
   (c) Let 1 = 2 = 12 . Then,
                                                2          3   2       3
                                                  A0       97:5
                                                4 B0 5 = 4 72:0 5
                                                  C0       126:0

   (d) The futures' strike price for asset B is chosen such that the current value of the contract is worth
       zero. Thus, F0 = 0. In this case, given 1 , the strike price K satis es, K = 22 1 + 61. This value
       of K was generated by the equation
                                        0 = 1 (83 K ) + (1          1 )(61 K )
       where 1 = p~1 since r = 0. In general, risk - neutral probabilities and not state prices are used.
       Alternatively, if the contract was struck on a previous date with a previously speci ed strike price
       K , it's current value is given by the expected payo under the risk - neutral measure.

                                       F0 = p~(83 K ) + (1 p~)(61 K )
       Note that in general one does not discount the payo when pricing a futures' contract.
   (e) The put option on asset C only depends on the rst state as the $92 payo is less than the strike
       price. Its price is therefore the discounted payo in the rst state, P0 = (125 92) 1 = 33 1. For
       the put option, the state price is used as discounting must be taken into account.

3. (a) The three equations are captured in the following linear system.

                                  0                        1          0        1
                                    Stu+ Std+          St
                                  @ Cu    C d   A 1   = @ Ct A
                                      t+   t+   2        1
                                       1     1            1+r
   (b) The two step binomial tree is
                                                                              Suu
                                                                               t+2∆




                                                     u
                                                    St+∆




                                                                              Sud
                                                                               t+2∆



                          S
                          t




                                                                              Sdu
                                                                               t+2∆




                                                    Sd
                                                     t+∆




                                                                              Sdd
                                                                               t+2∆




                       FIGURE    0.7   Two step binomial tree for problem 3, part (b)

       If the tree were arbitrage - free, one could write three 3 - equation systems for the entire tree, one
       corresponding to each of the three nodes; St , Stu+ , and Std+ .


                                                     ix
   (c) The three 3 - equation systems are
                                   0                        1               0 u     1
                                     Stuu
                                        +2 Stud
                                               +2                     u    St+
                                   @ C uu     ud
                                       t+2 Ct+2 A
                                                                       1u = @ Ctu+ A
                                        1      1                       2         1
                                                                               1+r
                                   0                        1               0 d     1
                                     Stdu
                                        +2 Stdd
                                               +2                     d    St+
                                   @ C du     dd
                                       t+2 Ct+2 A
                                                                       1d = @ Ctd+ A
                                        1      1                       2         1
                                                                               1+r
                                     0                      1                   0            1
                                       Stu+ Std+          St
                                     @ Cu    C d   A 1   = @ Ct A
                                         t+   t+   2        1
                                          1     1            1+r
   (d) Let  be the terminal time. Consistency is the notion that at time zero, all intermediate nodes on
       the tree are arbitrage - free if the terminal nodes are arbitrage - free. A state price, i (t), is the
       discounted risk - neutral probability of that state occurring, i (t) = pBi (0(t;t) ) . Let pi (0; t) denote the
       risk - neutral probability that state i occurs at time t given the initial node as the current position.
       The term B (t) represents the discount factor from 0 to time t, B (t) = (1+1r)t > 0. Since the terminal
       nodes are arbitrage - free, the values of i ( ) satisfy two properties

                                             (1)     i ( ) > 0 ) pi (0;  ) > 0 8i
                                                    X                    1
                                             (2)            i ( ) =
                                                    i                  B ( )

       It remains to show that i (t) also satisfy the same two properties for 0  t   and all states i
       which can occur at time t. Note that the number of states depends on t. At time t, the sum extends
       from i = 1 to i = 2t (non recombining tree).
       Since pi (0;  ) > 0 for all i, all intermediate nodes are accessible from the initial node. If an interme-
       diate node was not accessible, pi (0; t) = 0, then there would exist a terminal node with pi (0;  ) = 0.
       This would contradict property (1) above. Therefore, i (t) > 0 for all i and for all t.
       The second property requires the sum of the state prices across the number of states to equal the
       discount factor for a xed t. This assertion follows from

                                                        X
                                                            pi (0; t) = 1          8t
                                                        i
                                                                X
                                                ) B (t)                i (t) = 1        8t
                                                                 i
                                                        X                  1
                                                )               i (t) =
                                                                          B (t)
                                                                                    8t
                                                        i

       Thus, the sum of the state prices across all the states at time t equals the discount factor. Therefore,
       all intermediate nodes are free of arbitrage.
             p
4. (a) u = e  )  = log(
                       pu) = :48 (where  = 121 when annualized).

   (b) Assume that S0 = 50 and K = 50. The 4 - step binomial tree for the stock:

                                                        x
                                       t=0 t=1 t=2 t=3 t=4
                                                                               87:45
                                                                   76:04
                                                        66:13                  66:13
                                                57:50              57:50
                                         50                50                    50
                                                43:48              43:48
                                                        37:80                  37:80
                                                                   32:88
                                                                               28:59
                                                                       :05
       The risk - neutral up probability, p = (1+(urd) d) = 1+       :87
                                                              1:1512 :87 = :48, is used to nd the call pre-
       mium tree. Work backwards from the terminal node at t = 4 where the call premium is simply
       max (S4 100; 0). For example, at t = 3, the top node is priced as p37:45+(1 1+r
                                                                                        p)16:13 = $26:25.

                                        t=0 t=1 t=2 t=3 t=4
                                                                               37:45
                                                                   26:25
                                                        16:54                  16:13
                                                9:82               7:71
                                        5:60              3:69                   0
                                                1:76                   0
                                                           0                     0
                                                                       0
                                                                                 0

   (c) C0 = $5:60, the initial node on the call premium tree.
                 p 1
5. (a) u = e(:30) 12 = 1:09. The binomial tree for the stock is

                                          t=0     t=1           t=2          t=3
                                                                             132:26
                                                               121:30
                                                 111:23                      111:23
                                          102                    102
                                                  93:54                      93:54
                                                               85:78
                                                                             78:66
       while the terminal values for the call option are
        12:26
          0
          0
          0
       The hedging portfolio one should use to replicate the option payo s is as follows:
       Time 0

                                                  xi
                                Position                       Value of Portfolio
                                Borrow at the risk - free rate $16:113
                                Long 0.173 shares              +$17:646
                                Total Value                    = $1:53
       Time 1
          If tick was down, the portfolio is now worth $0, do nothing the rest of the option's life and the
          portfolio matches the option payo s since it expires worthless.
          If the tick was up, the portfolio is now worth $3.06. Adjust the portfolio in the following way:
                                  Position                       Value of Portfolio
                                  Borrow at the risk - free rate $32:279
                                  Buy 0.3178 Shares              +$35:348
                                  Total Value                    = $3:06
       Time 2
          Again, if tick was down, the portfolio is now worth $0, do nothing the rest of the option's life
          and the portfolio matches the option payo s since it expires worthless.
          If the tick was up, the portfolio is now worth $6.135. Adjust the portfolio in the following way:
                                  Position                       Value of Portfolio
                                  Borrow at the risk - free rate $64:5754
                                  Buy 0.583 Shares               +$70:7116
                                  Total Value                    = $6:135
       Time 3
          Again, if tick was down, the portfolio is now worthless, matching the option's payo s.
          If the tick was up, the portfolio is now worth $12.26 and the option's payo s are replicated by
          this portfolio.
   (b) Since the self - nancing portfolio in part (a) matches the options payo s, the option's value at time
       0 must equal the time 0 value of the portfolio. Speci cally, Ct = 102  0:173 16:1133 = $1:53:
   (c) To hedge the position, simply follow the dynamic hedging portfolio outlined in part (a) with ev-
       erything multiplied by 100. For example, at time 0, borrow 100  16:1133 = $1; 611:33 and buy
       100  :173 = 17:3 shares of the stock. Continue this scaling along the remainder of the tree.
   (d) If the market price of this call were $5, sell the call and use $1.53 of the proceeds to form the
       replicating portfolio. The remaining $3.47 is risk - free pro t.

6. (a) If  = r, the expected value of St+ conditional on St is
                                             E p [St+ jSt ] = St (1 + r)
       for the appropriate p. With the process
                                             St+ = St + rSt + St t
       p must satisfy
                                St (1 + r + )p + St (1 + r )(1 p) = (1 + r)St

                                                  xii
       which is true for p = 21 . This is the only choice for p which makes the discounted stock a martingale.
   (b) No, p = 31 is not consistent since this measure does not make the discounted stock a martingale.
   (c) With risk premiums in the economy, the stock price process is not under the risk - neutral measure.
       Hence p represents the empirical, statistical, or true measure for the stock.
   (d) It is only possible to determine the value of p statistically. This would involve calibrating a particular
       SDE to observed stock prices. A probability could then be inferred using a procedure similar to
       chapter 17, problem 1, part (d).

                                          200 . Thus,  = 40 or 40 days.
7. (a) We want to choose  such that 5 = 365             365
                n       q    o
                      40 = 1:0405. Thus, d = 1 = 0:9611
   (b) u = exp (0:12) 365                    u

   (c) The implied up probability is p = (1+(urd) d) = 0:5727. This is a risk neutral probability.

   (d) Stock price tree with S0 = 100.

                            t=0        t=1        t=2        t=3         t=4         t=5
                                                                                   121:9725
                                                                       117:2221
                                                            112:6567               112:6567
                                                 108:2692              108:2692
                                    104:0525                104:0525               104:0525
                             100                   100                   100
                                    96:1054                 96:1054                 96:1054
                                                 92:3624               92:3624
                                                            88:7652                 88:7652
                                                                       85:3081
                                                                                    81:9857
   (e) The call premium tree is below. Work backwards from the terminal node at t = 5 where the
       call premium is simply; max (S5 100; 0). For example, at t = 4, the top node is priced as
       p21:9725+(1 p)12:6567 = $17:8743.
                1+r
                                 t=0     t=1       t=2       t=3        t=4        t=5
                                                                                  21:9725
                                                                       17:8743
                                                            13:9570               12:6567
                                                  10:5113              8:9215
                                        7:6793               6:0548               4:0525
                               5:4703              4:0018              2:3057
                                        2:5937               1:3118                 0
                                                   0:7464                 0
                                                               0                    0
                                                                          0
                                                                                    0
       Hence, the value of the call option at the present time, t = 0, is $5.47.


                                                    xiii
                                         CHAPTER 3




1. Are the following sequences convergent ?

   (a) fXn g1
                     2 3
            n=1 = a; a ; a ; : : :
            8
            < converges to 0 if jaj < 1
       Xn     converges to 1 if a = 1
            :
              diverges       if jaj > 1

   (b) fXn g1
                  9 64                      1 n
            n=1 = 2; 4 ; 27 ; : : : Xn = 1 + n ! e  2:71828 Convergent since

                                    
                                 n+1
          ln(Xn ) =      n ln
                                   n
                              n +1 
                         ln n
                    =         1
                              n
                         use L'hopital's rule, numerator and denominator both approach zero as n ! 1
                                         
                           1 1 n+1              2
                    =     n+1 n       n 2 ( n)
                           n
                            n
                    =            [ n + n + 1]
                         n+1
                            n
                    =
                         n+1
                                 !1
            ) Xn !       e1
       because ln is a continuous function which allows the interchange of the limit.

   (c) fXn g1
                    1 1 1                  ( 1)n 1 ! 0 Convergent since
            n=1 = 0; 2 ; 6 ; 24 ; : : : Xn = n!

                                                jXn j = n1! ! 0


                                                 xiv
        The yearly interest rate is 5% and the intervals, , are chosen such that n = 1.
         i. What is the gross return on $1 invested during  ?
                                                     x n
                                      1:05 = 1 +
                                                      n
                                         x
                                 ) 1 + n = (1:05) n1
                                                   h        i
                                      ) x = n 1:05 n1 1 and with n = 1
                                                 1:05 1
                                            =
                                                     
         ii. What is the compound return during one year ? Use results from problem 1, part (b).
                                                                     x n
                                                       1:05 =    1+
                                                                      n
                                                            ! ex
             In the limit, ex = 1.05 which implies that x = ln(1:05)  :04879.

2. If it exists, nd the limit of the following sequences for n=1,2,3, . . .
    (a) No limit
               
        Xn =        1 even natural numbers
                   -1 odd natural numbers
   (b) No limit, function is periodic
               8
               >
               < 0 p n = 3; 6; 9; : : :
        Xn =         3 n = 4; 5; 10; 11; : : :
                 p 2
               >
               :   3
                  2 n = 1; 2; 7; 8; : : :
    (c) No limit, sequence oscillates worse than part (a)
   (d) No limit, the second term, ( n1) converges to 0 but the rst term is part (b) which does not converge.
                                          n


        Is Xn = sin n  ( 1)
                                 n
                     3 + n bounded ? Yes, both components are bounded in absolute value by 1.

3. Determine the following limits.
                   p
    (a) limn!1 (3+pnn) = limn!1 p3n + 1 = 1
                    1
   (b) limn!1 n n = 1

                                                 1        ln(n)
                                       lim ln n n
                                      n!1
                                                     = nlim
                                                         !1 n
                                                            1
                                                     = nlim
                                                         !1 n by L'hopital's rule
                                                     ! 0
                                              ) n n1 ! e0 = 1
                                                       xv
4. The sum nk=1 k1! equals nk=0 k1! 1 since 0!1 = 1. ByPde nition, 1                      sum, nk=0 k1! ,
             P                     P                                         x     x   P   k            P
                                                                         k=0 k! = e .PThe
   starting at k = 0 is the partial sum of e . In the limit, k=1 k! ! e 1. Hence, k=1 k1! converges to
                                            1                n   1     1              n
   e1 1  1:718282.
                                       p
5. Show the partial sum Sn+1 = 3Sn with S1 = 1 converges to 3. Claim: Sn = 3 2n 1 .
                                                                                               2n 1 1
                                       p
                                       1                  21 1
   (a) Base Case, n = 2 S2 = 3  1 = 3 2 = 3 21
   (b) Assumption Assume formula true for n = k
                                                                  2k 1 1
                                                           Sk = 3 2k 1
                                                           2k 1
    (c) Induction Then, for k + 1, want Sk+1 = 3 2k as the result.

                                                                  p
                                                  Sk+1 =              3  Sk
                                                                  q
                                                                          sk 1 1
                                                           =          3  3 sk 1
                                                                  q
                                                                  2k 1 +2k 1 1
                                                           =          2k 1
                                                                      3
                                                              2k k 1
                                                           = 3 2
                                           2n 1
        Thus, limn!1 Sn = 3limn!1 2n = 3.

              P
6. The series N      1                                                                  1
                n=1 n is a harmonic series and does not converge. Despite the fact that n decreases to zero,
   the decrease is not rapid enough to ensure the in nite sum converges.

                N                                                                       
                X 1       1   3 1     1 1 1 1     1        1
                      =1+   +   +   +   + + +   +   +:::+    +:::
                n=1 n     2   4   4   5  6 7  8   9       16

   The terms in brackets, ( ), all add up to greater than or equal to 21 with 2k elements in each bracket (i.e.
                                     P
   1, 2, 4, 8, ... terms). Therefore, N    1        1 1 1
                                       n=1 n > 1 + 2 + 2 + 2 + : : : and the series diverges.

7. The series, Xn = aXn 1 +1, will converge provided that jaj < 1. This is an autoregressive AR(1) process.
   It can be written as a partial sum through successive backward substitution.

                  Xn = aXn 1 + 1 substituting in the previous value Xn 1 = aXn 2 + 1
                     = a2 Xn 2 + a + 1 after further substitution
                     = a3 Xn 3 + a2 + a + 1
                       ..
                        .
                               nX1
                     = an X0 +      ak
                                k=0


8. The function f (x) = x3 is a monotonically increasing function for x 2 [0; 1]. Therefore, the left \endpoint"
   underestimates the value of the integral while the right \endpoint" overestimates the integral.

    (a) 01 x3 dx = 41 x4 10 = 41
        R



                                                          xvi
   (b) Choose an evenly spaced partition for simplicity such as x0 = 0, x1 = 41 , x2 = 12 , x3 = 43 , and
       x4 = 1. The terms xi xi 1 8i = 1; : : : ; 4 always evaluate to 41 . Therefore, with f (xi ) = x3i , the
       sum becomes

                                    4
                                    X
                                                                      
                                                                  1 1 + 8 + 27 + 64
                                                                                       
                                            f (xi )(xi   xi 1 ) =
                                    i=1                           4        64
                                                                            
                                                                  3       24
                                                                =      =
                                                                  8       64
                                  4
                                  X
                                                                      
                                                                  1 0 + 1 + 8 + 27
                                                                                       
                                        f (xi 1 )(xi     xi 1 ) =
                                  i=1                             4       64
                                                                   9
                                                                =
                                                                  64
   (c) As expected, the true value 14 = 64
                                        16 lies between the two \endpoints", 9 < 16 < 24 .
                                                                             64 64 64

9. (a) The integral has no closed form solution. It can be simpli ed using successive applications of
       integration by parts. As this is tedious, computer software such as MATLAB can be utilized with
       the following commands.
       x=sym('x')
       int(x*sin(pi/x),0,1)
       The result generated by MATLAB is

                                    Z 1
                                                         2  sin(t)              3
                                                            Z
                                                                              
                                            f (x)dx =                dt
                                        0                2 0    t             2   4
       The integral 0 sint(t) dt can be evaluated numerically with the following MATLAB command.
                     R

       quad8('integral',0,pi)
       where the argument integral is a separate m - le program
       function y=integral(x)
       y = (sin(x))/x;
       MATLAB generated 1:8511091 as the approximation to 0 sint(t) dt. Thus, the entire expression is
                                                                          R
                       2                 3
       approximately 2 (1:8511091) 2 4  0:187508.

   (b) Approximation of 01 f (x)dx. Choose the same evenly spaced partition of with 14 for the mesh
                           R

       size. Since the intensity of the uctuations increases as x approaches zero, placing a ner grid
       near zero could improve performance. Usually, for a given number of nodes, placing more nodes in
       regions where the function uctuates more intensely increases the accuracy of the approximation.
       Let x0 = 0, x1 = 41 , x2 = 12, x3 = 43
                                                , and x4 = 1. The terms xi xi 1 8i = 1; : : : ; 4 evaluate to 14 .
       Therefore, with f (xi ) = xi sin xi , the sum becomes

                                    4                                "             p       #
                                    X                             1               3 3
                                            f (xi )(xi   xi 1 ) =   0+0               +0
                                    i=1                           4                8
                                                                      p
                                                                     3 3
                                                                =
                                                                      48
                                                                          :10825

                                                         xvii
                                   4                                "              p#
                                   X                             1                3 3
                                         f (xi 1 )(xi   xi 1 ) =   0+0+0
                                   i=1                           4                 8
                                                                     p
                                                                    3 3
                                                                =
                                                                     48
                                                                         :10825


     (c) The sums are not accurate.


     (d) The sums do not approximate the integral very well since the function oscillates rapidly.




                                                                                                    x+y+z
10. Calculate the partial derivatives with respect to x, y, and z of the function f (x; z; y) = (1+x)(1+ y)(1+z) .




                                      
                           y+z)(1+x) 1
                     @ (x+(1+ y)(1+z)                 1                 (x + y + z )
                                         =
                             @x            (1 + x)(1 + y)(1 + z ) (1 + x)2 (1 + y)(1 + z )
                                                                              
                                                      1                x+y+z
                                         =                          1
                                           (1 + x)(1 + y)(1 + z )       1+x
                                                                                   
                                                      1              1+x x y z
                                         =
                                           (1 + x)(1 + y)(1 + z )       1+x
                                                 1 y z
                                         =
                                           (1 + x)2 (1 + y)(1 + z )




    The partial derivatives for y and z follow immediately from the above calculations.




                                                        1 x z
                                             fy =
                                                  (1 + x)(1 + y)2 (1 + z )
                                                        1 x y
                                             fz =
                                                  (1 + x)(1 + y)(1 + z )2




                                                        xviii
                                        CHAPTER 4




1. (a) The expected gain for a bet on the incumbent winning is 0:6  $1; 000 0:4  $1; 500 = $0.

   (b) Yes, the value of p is important as it determines the expected gain.

   (c) Two people taking this bet would not necessarily agree on p. Neither person would necessarily be
       correct since p is not observed. The assessment of p is subjective.

   (d) Yes, statistics can be employed to determine p. One could use survey sampling as in political polls
       to determine the true p or one could look at past data and try to estimate p historically.

   (e) The statistician's assessment of p is crucial. The assessment provides an objective, although not
       perfectly accurate, assessment of p.

    (f) How much one is willing to pay for this bet depends on an individual's level of risk aversion since p
        is not the risk - neutral probability.


2. (a) One could go long R and short R. The risk - free payo is $500 regardless of the election's outcome.

   (b) No, the value of p is not important in selecting this portfolio. The payo of the portfolio is indepen-
       dent of the election outcome. Not unless one knows the portfolio and it's payo s can the portfolio
       help determine the unknown p.

   (c) A statistician or econometrician would play no role in making these decisions since the outcome of
       the election does not e ect the portfolio payo s. The payo s are independent of p.



                                                  xix
                                          CHAPTER 5




1. Two discrete random variables X , Y that assume either the value 0 or 1.
   (a) Marginal Distributions.

                      P (X = 1) = P (X = 1jY = 1)P (Y = 1) + P (X = 1jY = 0)P (Y = 0) = :60
                      P (X = 0) = P (X = 0jY = 1)P (Y = 1) + P (X = 0jY = 0)P (Y = 0) = :40
                      P (Y = 1) = P (Y = 1jX = 1)P (X = 1) + P (Y = 1jX = 0)P (X = 0) = :35
                      P (Y = 0) = P (Y = 0jX = 1)P (X = 1) + P (Y = 0jX = 0)P (X = 0) = :65

   (b) Independence. X ? Y ) E [XY ] = E [X ]E [Y ].
       The expectation of XY , E [XY ], is :20 since X and Y must both be nonzero for the expectation to
       be nonzero. Therefore, the only element in the matrix of concern is the entry where X = Y = 1.
       The expectation of X is simply the probability that X is 1 and similarly for Y .

                   E [X ]E [Y ] =      [(1)P (X = 1) + (0)P (X = 0)] [(1)P (Y = 1) + (0)P (Y = 0)]
                                =      P (X = 1)P (Y = 1)
                                =      (:60)(:35)
                                =      :21
                                6 =    :20 Not Independent
   (c) from above, E [X ] = :60 and E [Y ] = :35
   (d) Conditional Distribution.

                                                        P (X = 1; Y = 1) :2
                                      P (X = 1jY = 1) =                 =
                                                            P (Y = 1)     :35
                                                        P (X = 0; Y = 1) :15
                                      P (X = 0jY = 1) =                 =
                                                            P (Y = 0)     :35

                                                     xx
   (e) Conditional Expectation E [X jY = 1] and Conditional Variance V ar[X jY = 1].

                   E [X jY = 1] = (1)P (X = 1jY = 1) + (0)P (X = 0jY = 1)
                                = P (X = 1jY = 1)
                                  P (X = 1; Y = 1)
                                =
                                      P (Y = 1)
                                   :2
                                =
                                  :35
                 V ar[X jY = 1] = E [ X E [X ]j Y = 1]2
                                         :2 2                       :2 2
                                                                   
                                = 1           P (X = 1jY = 1) +          P (X = 0jY = 1)
                                        :35                       :35
                                         :2 2 :2       :2 2 :15
                                                      
                                = 1               +
                                        :35 :35       :35 :35
                                = :24489
                                                   Pn
2. (a) The random variable is binomial, Xn =             i=1 Bi , where Bi are independent Bernoulli random
       variables with distribution
             
       Bi = 10 with     probability p
                   with probability 1 p
                                                                  
      Calculate P (X4 > K ) for k = 0; 1; 2; 3; 4 with       n         = m!(nn! m)! .
                                                             m
                                                                          
                     P (X4 > 0) = 1 P (X4 = 0) = 1    4 p0 (1 p)4 = 1 (1 p)4
                                                      0
                     P (X4 > 1) = 1 P (X4 = 0) P (X4 = 1)
                                                 
                                = 1 (1 p) 4     4   1     3
                                                1 p (1 p)
                                = 1 (1 p)4 4p1(1 p)3
                                ..
                                 .
                     P (X4 > 4) = 0
      The general formula for 0  k  4 is

                                                             k            
                                                             X         4
                                   P (X4 > k) = 1                      i       pi (1 p)k i
                                                             i=0

      Plot the distribution function. Assume p = 21 .
      %Calculate Binomial Density and Cumulative Density
      %Method 1
      pr=.5;
      n=4;
      for i=1:5
              p(i)=(factorial(n)/(factorial(i-1)*factorial(n-i+1)))*pr^(i-1)*(1- pr)^(n-i+1);
      end
      %Method 2 (built in MATLAB function)

                                                  xxi
       for i=1:5
               MATLABp(i) = binopdf(i-1,n,pr);
       end

       %Binomial Cumulative Density Function - Two Methods
       %Method 1
       cump(1) = p(1);
       for i=2:5
               cump(i) = p(i) + cump(i-1);
       end
       %Method 2 (built in MATLAB function)
       for i=1:5
               cumMATLABp(i) = binocdf(i-1,n,pr);
       end




                                               Binomial Density, n=4
                                       0.4                                0.375
                                      0.35
                                       0.3
                        Probability




                                                            0.25                   0.25
                                      0.25
                                       0.2
                                      0.15
                                       0.1   0.0625                                        0.0625
                                      0.05
                                         0
                                               0               1           2        3        4
                                                            Number of Successes




                                      FIGURE   0.8       Binomial Density with p = :5 and n = 4


   (b) E [X3 ] = 3p. The expectation of a binomial with probability p is np.
3. Exponential distribution with parameter  has cumulative distribution function P (Z < z ) = 1 e z .

   (a) Density function f (z ) = @P (@z
                                     Z<z) = e z

   (b) E [Z ] = 1 zf (z )dz
               R
                 0
                                                         Z 1
                                       E [Z ] =               ze z dz           use Integration by parts
                                                          0        Z 1
                                                               1
                                               =         ze z 0 +     e z dz
                                                                    0
                                                     1
                                               =
                                                     
   (c) V ar[Z ] = E [Z 2 ] E [Z ]2

                                                                   xxii
                                         Z 1
                        E [Z 2 ] =            z 2 e z dz              use Integration by parts twice
                                          0
                                2
                                 =
                               2
                  ) V ar[Z ] = 22             1
                                               2
                                1
                             = 2
                               
(d) Z1 and Z2 are independent and distributed Z1  exp(), Z2  exp(). Their sum is distributed
    according to the two parameter gamma density. In general, for n independent random variables, their
    sum has a moment generating function equal to the product of the individual moment generating
    functions. A convolution could also be employed. The product of exponential moment generating
    functions, I (t) =  t , is

                                                                               
                                                                             
                                           I 2 (t) =
                                                                    t  t
                                                                     2
                                                                      
                                                        =
                                                                    t
    This is the unique moment generating function for a (2; ) density. The convolution approach
    yields

                                                             Z s
                                         f S (s ) =          e x e (s x) dx
                                                          0      Z s
                                                          2
                                                       = e   s     dx
                                                                  0
                                                       = 2 se s
    which is a (2; ) density.
(e) The mean and variance of a (2; ) are 2 and 22 respectively. These can be obtained from the
    moment generating function or through direct integration. For example, the mean is

                  Z 1                         Z 1
                        sfS (s)ds = 2                 s2 e s ds            use Integration by parts
                   0                           0
                                              Z    1
                                     = 2              se s ds              another Integration by parts
                                               0
                                         2
                                     =
                                         
    The computation of the second moment proceeds in a similar fashion and equals
                                Z 1                  Z 1
                                                                      6
                                    s2 fS (s)ds = 2     s3 e s ds = 2
                                 0                    0              
    Therefore, the variance equals 62         4
                                              2 = 2 .
                                                         2



                                                       xxiii
                                         k    
4. Z  P oisson() if P rob(Z = k) =  ke!         where k is a nonnegative integer.
              P1
   (a) Show     k=0 P rob(Z = k ) = 1.

                                             1
                                             X                          1 k e 
                                                                        X
                                                   P rob(Z = k) =
                                             k=0                        k=0
                                                                               k!
                                                                              1 k
                                                                              X
                                                                   = e 
                                                                            k=0 k !
                                                                   =    e  e
                                                                   = 1
   (b) Calculate the mean and variance of Z . Moment generating function produce the required solutions
       directly.

                                             1
                                             X     k e 
                             E [Z ] =             k
                                             k=0     k!
                                             X1 k e 
                                    =            k
                                             k=1
                                                     k!
                                             X1 k e 
                                    =                     change of variables, m = k 1
                                             k=1 (k 1)!
                                                  X1 m+1
                                    =        e 
                                                 m=0 m!
                                                   X1 m
                                    =        e 
                                                   m=0 m!
                                    =        

                                           X k    1
                            E [Z 2 ] = e  k 2
                                           k=0 k !
                                       X1 k e 
                                     =     k2
                                       k=1     k!
                                        1
                                       X k e 
                                     =     k                     change of variables, m = k   1
                                       k=1
                                             (k 1)!
                                                   1
                                                   X             m+1
                                    = e               (m + 1)
                                                   m=0            m!
                                                   1
                                                 m+1
                                                   X       X1 m+1
                                    = e              +e 
                                                         m
                                          m=0     m!       m=0 m!
                                            1 m
                                            X             X1 m+1
                                    = e      m +e 
                                           m=0 m!         m=0 m!
                                                  1 m+1
                                                  X
                                    = ( + 1)e 
                                                 m=0 m!
                                    = ( + 1)

                                                         xxiv
This implies that the variance equals .




                                   V ar[Z ] = E [Z 2 ] E [Z ]2
                                            = 2 +  2
                                            = 




                                           xxv
                                           CHAPTER 6




1. (a) If Mt = E (Y jIt ) then by the law of iterated expectations

                                           E (Mt+s jIt ) = E [ E ( Y j It+s )j It ]
                                                         = E (Y jIt )
                                                         = Mt ;

        and Mt is a martingale.
    (b) Yes, every conditional expectation is a martingale provided the conditioning is with respect to the
        same ltration.

2. (a) E (X4 jI1 ) = X1 , E (X4 jI2 ) = X2 , and E (X4 jI4 ) = X4 .
    (b) If Zi = E (X4 jIi ), then Zi is a martingale by problem 1 above.
                           p
    (c) De ne Vi = Bi + i. For k > 0 consider

                                                                     p               p
                                     E ( Vi+k j Vi ) = E Bi+k + i + k Bi + i
                                                                         p p
                                                    = E Bi+k j Bi + i + i + k
                                                          p
                                                    = Bi + i + k
                                      p
        which is not equal to Bi + i.
                                                                p
        The random process Vi is a submartingale since i > 0 and Bi is iid with E (Bi ) = 0. Therefore,
        with i  j , E [ Vi j Ij ]  Vj .
                                                                              p
    (d) Yes, transform Vi by subtracting the deterministic component i. Then, Vi = Bi and Vi is now a
        martingale.


                                                     xxvi
                                                                                                        p
   (e) No, Bi are iid random variables. For Vi to be a martingale, it must be the case that E (Bi ) =   i
       for all i. This is not possible.

3. (a) If Xt = 2Wt + t then
                                         E (Xt+s jIt ) = E (2Wt+s + (t + s)jIt )
                                                       = 2Wt + (t + s)
                                                       6 2Wt + t:
                                                        =
       Xt is not a martingale.
   (b) If Xt = Wt2 then
                                                                    
                                        E [ Xt+s j It ] = E Wt2+s It
                                                        = Wt2 + s
                                                        6 Wt2 ;
                                                         =
       Xt is not a martingale. However, Wt2 t is a martingale. The second equality follows from

                                   Wt2+s = (Wt+s Wt )2 + 2Wt+s Wt Wt2
                                              h                             i
                               Et Wt2+s = Et (Wt+s Wt )2 + 2Wt+s Wt Wt2
                                      

                                         = V ar (Wt+s Wt ) + 2Wt Et [Wt+s ] Wt2
                                         = s + 2Wt2 Wt2
                                         = s + Wt2
                          R
   (c) If Xt = Wt t2     2 0t sWs ds then
                                                                    Z t+s              
                       E [Xt+s jIt ] = E Wt+s (t + s)2 2        uWu du It
                                                    Z t
                                                           0         Z t+s        
                                               2
                                  = Wt (t + s) 2 sWs ds 2Et                 uWu du
                                              Z t
                                                     0                 t
                                                                             Z t+s         
                                  = Wt t2 2 sWs ds + s(2t + s)Wt 2Et                 uWu du
                                                 0                             t

       Xt is a martingale as the last two terms cancel. The integral 0t+s uWu du equals
                                                                    R


                                    Z t+s                     Z t              Z t+s
                                            uWu du =                sWs ds +           uWu du
                                     0                         0                 t
       and the result is a consequence of
                                          Z t+s                        Z t+s
                                    2Et             uWu du         = 2       uEt [Wu ] du
                                                t                         t
                                                                          Z t+s
                                                                   = 2W t       udu
                                                                        
                                                                           t           
                                                                   = Wt (t + s)2 t2
                                                                   = s(2t + s)Wt

                                                      xxvii
                                                          R
       which implies that E [Xt+s jIt ] = Wt t2       2 0t sWs ds = Xt .

4. Given the representation                                              Z t
                                      MT (Xt ) = M0 (X0 ) +                       g(t; Xt )dWt
                                                                              0
  with dXt = dt + dWt . The right hand side is always a martingale as g(t; Xt ) is adapted to the
   ltration generated by Wt . The Ito integral is a martingale and the initial term is constant and therefore
  a martingale. In all cases, the left hand side is also a martingale. Determine g(; ) for the following

   (a) MT (XT ) = WT . Let g(t; Xt ) = 1. Since W0 = 0

                                                          Z T
                                         WT =                     dWt
                                                           0        Z T
                                               = W0 +                     g(t; Wt )dWt
                                                                     0        Z T
                                               = M0 (W0 ) +                               g(t; Xt)dWt
                                                                                  0
                                                                                                   R
   (b) MT (XT ) = WT2 T . Employ the relationship WT2                             T = 2 0T Wt dWt (verify using Ito's lemma).
       Let g(t; Xt ) = 2Wt and the result follows.
                          1
   (c) MT (XT ) = eWT 2 T . The function g(t; Xt) is solved by using a trivial special case of Ito's integration
       by parts formula.                       Z              Z
                                                              T                           T
                                XT Y T = X 0 Y 0 +                Xt dYt +                    Yt dXt + hXt ; Yt iT
                                                          0                           0
       De ne                                      1
                                     Xt = eWt 2 t                 X0 = 1                      dXt = Xt dWt
       and
                                         Yt = 1     Y0 = 1                                    dYt = 0
       The Ito integration by part formula reduces to
                                                                         Z T
                                                      1                                        1
                                            eWT 2 T = 1 +                         eWt 2 t dWt
                                                                          0
       Therefore, the function g(t; Xt ) equals eWt 12 t .
       These three exercises are applications of the martingale representation theorem. In nancial theory,
       the function g(t; Xt) operates as a \hedge" parameter against the Brownian motion. It represents
       the sensitivity of the function Mt (Xt ) to a movement in the Brownian motion. The function Mt(Xt )
       could generate a call option as the next example illustrates.

5. In theory, the representation is possible. The diÆculty is that Xt = St may not be a martingale under
   the empirical measure involving Wt . In general the call option has the form
                                                                              Z T
                                        MT (ST ) = M0 (S0 ) +                             (t)dSt
                                                                                  0
  where St is under the risk - neutral measure. For example, dS (t) = St dW ~ t in the Black Scholes model
  but the stock price process is now under the risk - neutral measure, not the empirical measure. The term

                                                      xxviii
(t) is the hedge parameter which equals @CK@S(t;S
                                               t
                                                  t ) for the Black Scholes model; the partial derivative of
the call with respect to the underlying stock. Continuing with the Black Scholes model to illustrate the
diÆculty, the call option can be expressed as




                                                          Z T
                                  MT (ST ) = M0 (S0 ) +                  ~t
                                                                (t)St dW
                                                           0




However, the representation does not occur under the empirical measure involving Wt but with a trans-
formed Brownian motion W  ~ t under the risk - neutral measure. A representation using Wt would introduce
a risk premium and a corresponding non constant additional term. This additional term would make the
representation impossible.




                                                xxix
                                       CHAPTER 7




1. Consider the geometric Brownian motion model, St = S0 et+Wt , used in Black Scholes. Here, the term
     1 2
     2  t has been omitted from the exponent which di ers from chapter 11. Under the risk - neutral
   measure, the drift is set equal to r in either case. Only the risk premium di ers between the two models
   but call values remain unchanged as the stock price process equals
                                              dSt
                                                  = rdt + dWt
                                               St
  under the risk - neutral measure.

   (a) Use the MATLAB command
       x=normrnd(0,sqrt(.25),4,1)

       to generate four normal random numbers with mean 0 and variance :25. Assume that S0 = 1
       for simplicity. One particular set of 4 draws (a MATLAB program is provided below for repeated
       drawings) produced the values :0873, :0934, :3629, and :2942. The path of the Brownian motion
       involves adding these values together over time
       W0 = 0, W 41 = :0873, W 12 = :0061, W 34 = :3568, and W1 = :0626
       One possible stock price path is

                                 S0 = 1                      
                                                 1
                                 S 41 = exp (:01) + (:15)W 14
                                                 4
                                                               
                                                 1
                                      = exp (:01) + (:15)(:0873)  1:0157
                                                 4
                                                             
                                                 1
                                 S 12 = exp (:01) + (:15)W 12
                                                 2
                                                                 
                                                 1
                                      = exp (:01) + (:15)( :0061)  1:0041
                                                 2

                                                 xxx
                                                    
                                       3
                       S 34 = exp (:01) + (:15)W 34
                                       4
                                                     
                                       3
                            = exp (:01) + (:15)(:3568)  1:0629
                                       4
                                                  
                                       1
                       S1 = exp (:01) + (:15)W1
                                       1
                                                     
                                       1
                            = exp (:01) + (:15)(:0626)  1:0196
                                       1
Program and accompanying graphs (di erent draws than presented above)
mu = .01;
sigma = .15;
T = 1;
K = 1.5;
S0 = 1;
%n is the number of discretizations for T
%part (a), n=4
%part (b), n=8
n = 4;
delta = T/n;

%generate Brownian motions
bm=zeros(n,1);
%cbm is the cumulative Brownian motion
cbm=zeros(n,1);
cbm(1) = bm(1);

for j=2:n
        bm(j) = normrnd(0,sqrt(delta));
        cbm(j) =cbm(j-1) + bm(j);
end

axis=(0:delta:T);
newcbm=[0;cbm]';

%generate stock prices
stock = zeros(n,1);

for j=1:n
        stock(j) = S0 * exp( (mu*j*delta) + sigma*cbm(j) );
end

newstock=[S0;stock]';

%graph Brownian motion and stock
subplot(2,1,1), plot(axis,newcbm)
hold on
plot(axis,newcbm,'*')
xlabel('Time')
title('Brownian Motion Path')
hold off

subplot(2,1,2), plot(axis,newstock)

                                       xxxi
    hold on
    plot(axis,newstock,'*')
    xlabel('Time')
    title('Stock Price Path')
    hold off

                                          Brownian Motion Path
        0.6

        0.4

        0.2

         0

       −0.2

       −0.4

       −0.6

       −0.8
              0   0.1    0.2     0.3      0.4          0.5         0.6   0.7   0.8   0.9   1
                                                      Time

                                                Stock Price Path
        1.1

       1.05

         1

       0.95

        0.9

       0.85
              0   0.1    0.2     0.3      0.4          0.5         0.6   0.7   0.8   0.9   1
                                                      Time


                        FIGURE   0.9   Brownian Motion and Stock Price Paths


(b) Repeat exercise for 8 subdivisions of interval with random variables approximating the Brownian
    motion having variance equal to 18 = :125.
    x=normrnd(0,sqrt(.125),8,1)
    Using the above command generates eight random numbers :0841, :3563, :2624, :3826, :0465,
    :1378, :0311, and :2247. Use the same MATLAB program as above with n=8 instead of n=4 for
    repeated simulations. The path of the Brownian motion is
    W0 = 0, W 81 = :0841, W 28 = :2722, W 38 = :5345, W 48 = :1519, W 58 = :1984, W 68 = :0605,
    W 78 = :0294, and W1 = :2541
    One possible stock price path is

                               S0 = 1                                   
                                               1
                               S 81 = exp (:01) + (:15)W 81
                                               8
                                                             
                                               1
                                    = exp (:01) + (:15)(:0841)  1:0125
                                               8

                                                    xxxii
                          
                 2
S 82 = exp (:01) + (:15)W 82
                 8
                                
                 2
     = exp (:01) + (:15)( :2722)  :9597
                 8
                              
                 3
S 83 = exp (:01) + (:15)W 83
                 8
                                
                 3
     = exp (:01) + (:15)( :5345)  :9225
                 8
          n                  o
S 84 = exp (:01) + (:15)W 48
                                
                 4
     = exp (:01) + (:15)( :1519)  :9769
                 8
                              
                 5
S 85 = exp (:01) + (:15)W 85
                 8
                                
                 5
     = exp (:01) + (:15)( :1984)  :9699
                 8
                              
                 6
S 86 = exp (:01) + (:15)W 86
                 8
                                
                 6
     = exp (:01) + (:15)( :0605)  :9900
                 8
                              
                 7
S 87 = exp (:01) + (:15)W 87
                 8
                                
                 7
     = exp (:01) + (:15)( :0294)  :9945
                 8
                             
                 1
S1 = exp (:01) + (:15)W1
                 1
                                
                 1
     = exp (:01) + (:15)( :2541)  :9614
                 1




            xxxiii
                                                  Brownian Motion Path
       0.6

       0.4

       0.2

         0

      −0.2

      −0.4

      −0.6

      −0.8
             0   0.1     0.2         0.3         0.4         0.5          0.6   0.7   0.8   0.9   1
                                                            Time

                                                       Stock Price Path
       1.1

      1.05

         1

      0.95

       0.9

      0.85
             0   0.1     0.2         0.3         0.4         0.5          0.6   0.7   0.8   0.9   1
                                                            Time


                       FIGURE    0.10          Brownian Motion and Stock Price Paths
                                                   
(c) What is the distribution of log StSt ? With S0 = 1, log(St ) = t + Wt .
                                               
                                          St
                               log                      = log(St ) log(St  )
                                         St 
                                                        = t + Wt (t ) Wt 
                                                        =  +  (Wt Wt  )
                                                        =  + W
                                                        d N (; 2 )
   where N (; 2 ) represents the normal distribution with mean  and variance 2 . Therefore,
   log changes in the stock price over an increment of time  are normally distributed with mean 
   and variance 2 . Note that the mean and variance are linear in time .
(d) The unit of measurement represents the log stock return. This random variable is distributed
    N (:25; :252 ).
(e) The random variable becomes distributed as a N (:000001; :0000012).
                                                                2
(f) Since N (; 2 ) is equivalent to N (;  ), a problem arises since the variance explodes as
     ! 0. The mean and variance are not \balanced" as would be the case if the distribution were
    N (; 2 2 ) instead.
(g) Brownian motion is not di erentiable as dWt is a formalism. Therefore, the random variable is not
    well de ned.

                                                         xxxiv
                                             CHAPTER 8




1. (a) Recall the property, lim(an bn ) = lim(an ) lim(bn ) and limn!1 1                             k                  xed k
                                                                                                     n = 1. For any
                                                                                          
                                                             1      1)              (k
                                         lim 1 1
                                        n!1                  n    n
                                                                      1
                                                                         =1

   (b) Chapter 3, problem 1, part   (b) proved that lim n !1 1 + 1 n = e. Using the additional property
                                                                 n
       that lim a1n = lim1an , it follows that (1 n1 )n ! e 1 . Now, let n0 = n .
                                                                                          0
                                                      n                                 1 n
                                       lim       1       = lim  1                               =e 
                                       n!1           n    n0 !1                          n0
   (c) This follows immediately from the fact that lim(an bn ) = lim(an ) lim(bn ).

2. (a)                                                                   n
                                             P r(Xn = k) =                        pk (1 p)n k
                                                                          k
   (b)
                                                                  n    k                   
                                                                                              n k
                                        P r(Xn = k) =                                    1
                                                                     k        n              n
   (c)
                   n    k         
                                        n k   k    n!
                                                                                             
                                                                                              n k
                                   1         =             1
                    k    n             n       k! (n k)!nk                                   n
                                                                             
                                                         k                n n(n 1)    (n k + 1)   1
                                                     =      1                                            k
                                                         k!               n             nk           1                  n
         Consider the ratio
                                                                                                                
                        n(n 1)    (n k + 1)                                1              2               (k 1)
                                  nk
                                               = 1  1
                                                                              n
                                                                                         1
                                                                                             n
                                                                                                      1     n
                                                         ! 1 by part (a) of problem 1
                                                         xxxv
                k                n
               n ! 1 and          n ! e , it follows that
    Since 1                   1         




                                       n    k          
                                                             n k
                   P r(Xn = k) =                        1
                                        k       n           n
                                                     "                               #
                                    k               n n(n 1)    (n k + 1)   1
                                  =    1                                           
                                    k!              n             nk           1  k
                                                                                  n
                                       k
                                  ! k! e 




    as the contents of [ ] converges to 1. Therefore




                                                            k e 
                                        P r(Xn = k) !
                                                              k!




    which is the density function for the Poisson distribution.



(d) The probability of an event occurring decreases but the number of trials from which an event can
    occur increases. This is the central idea of insurance. Many people are insured with any individual
    having a small probability of an accident.




                                                xxxvi
                                                CHAPTER 9




                                            R
1. Calculate the stochastic integral 0t Ws2 dWs using Riemann and Ito integrals.
   (a) Three Riemann sums will di er according to the time-point at which the integrand is evaluated.
       Three possible choices are left, right, and middle of the partition as follows

                                                      n
                                                      X
                                                (1)         Wi2 (Wi        Wi 1 )
                                                      i=1
                                                      Xn
                                                (2)         Wi2 1 (Wi       Wi 1 )
                                                      i=1
                                                 Wi + Wi 1 2
                                                       n     
                                                      X
                                                (3)             (Wi Wi 1 )
                                            i=1        2
                                                     P
   (b) The Ito sum is represented by integral (2), ni=1 Wi2 1 (Wi Wi 1 ). Integral (3) is known as a
       Stratonovich integral.
   (c) Expectations of the three integrals. The Ito integral, number (2), is zero since Wi2 1 ? Wi Wi 1
       by the property of independent increments for Brownian motion.
                                   " n                          #          n
                                    X                                      X           
                              E           Wi2 1 (Wi Wi 1 )            =          E Wi2 1 E [(Wi   Wi 1 )]
                                    i=1                                    i=1
                                                                           Xn
                                                                      =          ti 1 0
                                                                           i=1
                                                                      = 0
       Integral (1) is also zero.
                         "                            #
                             n
                             X                                  n
                                                                X                       
                     E             Wi2 (Wi Wi 1 )           =             E Wi3 E Wi2 Wi 1
                             i=1                                    i=1

                                                            xxxvii
                                                             n
                                                             X               
                                                   =               E Wi2 Wi 1
                                                             i=1
                                                             n
                                                             X                     
                                                   =               E E Wi2 Wi 1 Ii 1
                                                             i=1
                                                             n
                                                             X                     
                                                   =               E Wi 1 E Wi2 Ii 1
                                                             i=1
                                                             n
                                                             X                              
                                                   =               E Wi 1 Wi2 1 + (ti ti 1 )
                                                             i=1
                                                             n
                                                             X                   n
                                                                                   X
                                                   =               E Wi3 1               (ti   ti 1 ) E [Wi 1 ]
                                                             i=1                   i=1
                                                   = 0
                     3
The term E Wi = 0 since Wt has a normal distribution which is symmetric. Therefore, all odd
moments are zero. The value of the integral is calculated in closed form using results from chapter
11, problem 1.

                                                             Wt3
                                   Z t                                         Z t
                                            W22 dWs =          tWt + sdWs
                                    0                         3       0Z
                                Z t                       3             t 
                                                            Wt
                               E  W 2 dWs              = E        tWt + sdWs
                                 0 2                         3
                                                            3
                                                                         0
                                                            Wt
                                                       = E
                                                             3
                                                       = 0
                R
The integral 0t sdWs has zero expectation as it is a well de ned Ito integral. Integral (3) is an
\average" of the previous two integrals and therefore has an expected value equal to zero. Overall,
this example should not
                     R form the impression that the choice of integrand is irrelevant. For instance,
consider the integral 0t Ws dWs and two seemingly similar integrands, one of which uses Wi 1 and
the other Wi as the integrand in the approximation. A major di erence reveals itself.

                    Ito Representation
             n
             X
                    Wi 1 (Wi    Wi 1 )
           i=1
         " n                            #        n
          X                                      X
     E          Wi 1 (Wi       Wi 1 )        =         E [Wi 1 ] E [(Wi           Wi 1 )]
          i=1                                    i=1
                                             = 0

          Non Ito Representation
                n
                X                                n
                                                 X                                             n
                                                                                               X
                      Wi (Wi    Wi 1 ) =               (Wi     W i 1 ) (W i        Wi 1 ) +          Wi 1 (Wi     Wi 1 )
               i=1                               i=1                                           i=1
             " n                        #         n
              X                                  X       h                    i
         E           Wi (Wi    Wi 1 )        =         E (Wi        Wi 1 )2 + 0
              i=1                                i=1
                                             = t
Where the last result follows from the de nition of quadratic variation and the previous result for
the Ito integral.

                                                   xxxviii
   (d) The Ito integral has zero expectation as was noted above.

2. Integration by Parts
               Pn                                   Pn                                          Pn                          
   Show that    j =1 tj Wtj      tj 1 Wtj 1 =              j =1 tj Wtj                Wtj 1 +         j =1 (tj    tj 1 ) Wtj 1 .
   The sum on the left hand side is a telescoping sum which reduces to
                                 n 
                                 X                                  
                                        tj Wtj       tj 1 Wtj 1
                                 j =1
                       = t1 Wt1 t0 Wt0 + t2 Wt2 t1 Wt1 + : : : + tn Wtn tn 1 Wtn 1
                       = tn Wtn t0 Wt0
                       = tWt
   as tn = t and Wt0 = W0 = 0. The right hand side is also a telescoping sum.
                         n 
                         X                                 n 
                                                             X                                   
                                tj Wtj      Wtj 1 +                 (tj       tj 1 ) Wtj 1
                         j =1                                j =1
                    = t1 Wt1 t1 Wt0 + t1 Wt0 t0 Wt0 + t2 Wt2 t2 Wt1 + t2 Wt1                                     t1 Wt1 + : : :
                      +tn Wtn tn Wtn 1 + tn Wtn 1 tn 1 Wtn 1
                    = tn Wtn t0 Wt0
                    = tWt
   In this example, with only one process being stochastic, the above does represent the standard product
   rule. Let u(t) = t and v(t) = Wt . An extra term would account for the quadratic variation if the integrand
   and integrator were both semimartingales (see below).
3. In the limit, as the partition width goes to zero
                                                                        Z t                Z t
                                                      tWt =                   sdWs +           Ws ds
                                              Z t
                                                                  0                   Z t
                                                                                            0
                                          )          sdWs      = tWt                      Ws ds
                                                 0                                     0
                R
4. The integral 0t sdWs is de ned in the sense of the Ito integral.
5. This is not a change of variable formula.
6. Problem 3 is an example of integration by parts. In general, when u(t) and v(t) are both stochastic
   semimartingales
                                                     Z t                      Z t
                     u(t)v(t) = u(0)v(0) +                 u(s)dv(s) +                 v(s)du(s) + hu(s); v(s)it
                                                      0                           0
   where h; it represents the quadratic variation of the two processes. When at least one of the two processes
   is of bounded variation, the quadratic variation is zero. In this case, the formula reduces to
                                                                          Z t                        Z t
                                    u(t)v(t) = u(0)v(0) +                             u(s)dv(s) +          v(s)du(s)
                                                                              0                       0
                           ) d (u(t)v(t)) = u(t)dv(t) + v(t)du(t)

                                                              xxxix
                                         CHAPTER 10




1. Di erentiate the following functions using Ito's lemma.

                                                          1
                             df (Wt ) = f 0 (Wt )dWt + f 00 (Wt )dt
                                                          2
                                                                          1
                           df (Wt ; t) = ft (Wt ; t)dt + f 0 (Wt ; t)dWt + f 00 (Wt ; t)dt
                                                                          2

   (a) f (Wt ) = Wt2

                                              df (Wt ) = 2Wt dWt + dt
                    1
       f (Wt ) = Wt2

                                                   1   1             1    3
                                         df (Wt ) = Wt 2 dWt           Wt 2 dt
                                                   2                 8

                    2
   (b) f (Wt ) = eWt

                                                          2
                                     f 0 (Wt ) = 2Wt eWt
                                                     2          2
                                    f 00 (Wt ) = 2eWt + 4Wt2 eWt
                                                               h               i
                                   ) df (Wt ) = 2Wt eWt2 dWt + eWt2 + 2Wt2 eWt2 dt
                          1 2
   (c) f (Wt ; t) = e(Wt 2  t)

                                   @f (Wt ; t)      1 2
                                               =       f (Wt ; t)
                                       @t           2
                                                     xl
                                   @f (Wt ; t)
                                                 = f (Wt ; t)
                                       @Wt
                                  @ 2 f (Wt ; t)
                                                 = 2 f (Wt ; t)
                                      @ 2 Wt                                        
                                                                   1 2 1 2
                                 ) df (Wt ; t) = f (Wt ; t)        2
                                                                      +  dt + dWt
                                                                        2
                                                = f (Wt ; t)dWt

       f (Wt ; t) = eWt
       Similar to above except that @f (@t
                                         Wt ;t) = 0. This implies that a drift term is introduced and the
       process is no longer a martingale as in the previous case.

                                                  1
                                        df (Wt ) = 2 f (Wt )dt + f (Wt )dWt
                                                  2
              R
   (d) g(t) = 0t Ws ds

                                                      @g(t)
                                                            = Wt dt
                                                       @t
2. Obtain SDE's for processes below involving Wt1 and Wt2 . The 1 and 2 are superscripts, not exponents
   which are denoted with brackets.

   (a) dXt = 4 Wt1 3 dWt1 + 6 Wt1 2 dt
                                       


   (b) Xt = Wt1 + Wt2 2 The term Ws1 ; Ws2 t = Ws2 ; Ws1 t is the \covariance" between the two Brownian
                             

       motions which equals zero if the two Brownian motions are independent.

                     @Xt     @Xt                  
                          =         = 2 Wt1 + Wt2
                    @Wt1    @Wt2
                   @ 2 Xt    @ 2 Xt     @ 2 Xt
                        1 =          =           =2
                   @ 2 Wt   @ 2 Wt @Wt1 @Wt2
                                  2
                   ) dXt = 21 (2 + 2) dt + (2 + 2) Ws1 ; Ws2 t dt + 2 Wt1 + Wt2 dWt1 + dWt2
                                                                                         

                                                                          
                          = 2 1 + W 1 ; W 2 dt + 2 W 1 + W 2 dW 1 + dW 2
                                            s   s t            t      t    t    t
                         2
   (c) Xt = t2 + eWt

                                          @Xt
                                               = 2t
                                           @t
                                         @Xt      @ 2 Xt       2
                                             2 =   2   2 = eWt
                                         @Wt     @W
                                                  t           
                                                         1 Wt2
                                        ) dXt = 2t + 2 e dt + eWt2 dWt2
               2     2
   (d) Xt = et +Wt

                                                       xli
                                        @Xt
                                             = 2tXt
                                         @t
                                       @Xt      @2X
                                           2 = 2 t2 = Xt
                                       @Wt     @W
                                                t 
                                      ) dXt = 2t + 12 Xt dt + Xt dWt2

                                               1 2
3. Geometric Brownian motion, St = S0 e( 2  )t+Wt



   (a) dSt = St dt + St dWt which follows from Ito's lemma (see problem 1, part (c) above)


                                                                     1 2
                               S (Wt ; t)    = S (W0 ; 0)et+Wt 2  t
                             @S (Wt ; t)                     1 2
                                             = S (Wt ; t)      S (W t ; t )
                                  @t                         2
                             @S (Wt ; t)
                                             = S (Wt ; t)
                                @Wt
                             2
                            @ S (Wt ; t)
                                             = 2 S (Wt ; t)
                               @ 2 Wt                                            
                           ) dS (Wt ; t) = S (Wt ; t)  21 2 + 12 2 dt + dWt
                                         = S (Wt ; t)dt + S (Wt ; t)dWt

                                    dSt
                                        = dt + dWt
                                     St


   (b) The expected instantaneous rate of change is the drift rate, .

   (c) Without the term 21 2 t in the exponent, the dynamics of St would be


                                                              
                                            dSt      1
                                                =  + 2 dt + dWt
                                            St       2


       There is no cancellation of the 21 2 term by the partial derivative with respect to time. Now, the
       expected rate of change is  + 21 2 under the empirical measure.




                                                      xlii
                                      CHAPTER 11




                                                 
1. Consider the SDE d(Wt3 ) = 3 Wt dt + Wt2 dWt

   (a) Write the SDE in integral format.

                                                           Z t                 Z t
                                     Wt3 = W03 + 3               Ws ds + 3           Ws2 dWs
                                                 Z t
                                                    0    Z t
                                                               0
                                                             2
                                            = 3 Ws ds + 3 Ws dWs
                                               0          0
                R
   (b) Evaluate 0t Ws2 dWs . Certain results follow from chapter 9, problem 1. From the above equation

                                        Wt3
                           Z t                         Z t
                              Ws2 dWs =                      Ws ds
                            0            3                 0
                                        Wt3
                                                                Z t     
                                         =                 tWt       sdWs from chapter 9
                                            3                      0
                                           Wt3
                                                                Z      t
                                         =             tWt +               sdWs
                                            3                      0
                    R                                                                          R   3
       The integral 0t sdW
                           s
                              is normally distributed with mean zero and variance 0t s2 ds = t3 . The random
                        3
       variable N 0; t3 could be represented as a time changed Brownian motion, W t33 .

                                                                 Wt3
                                       Z t
                                             W22 dWs =                      tWt + W t33
                                        0                         3

                                                                1 2
2. dSt = St dt + St dWt ) S (t) = S (0)exp t + Wt            2 t
   (a) Coin tossing to approximate dWt  Wt

                                                  xliii
                p
    Wt =       +p if coin toss is heads .5 probability
                   if coin toss is tails .5 probability
(b) W is distributed with zero mean and variance . The above in part (a) is a binomial distribution
    with probability 12 which has the same mean and variance as Wt .

                                               1 p     1 p
                                     mean        ( ) + ( ) = 0
                                               2       2
                                               1 p 2 1 p 2
                                  variance       ( ) + ( ) = 
                                               2        2
(c) Generate three random paths over the 8 day period in 2 day increments ( = 2). Must ip 4 coins
    to determine a path.

                                    S (t + 2) = S (t)e:0775+(:15)W
    The amount :0775 follows from the drift (where the drift is equal to the risk - free interest rate),
    (2)(:05) 21 (2)(:15)2 . These simulations are under the equivalent risk - neutral martingale measure
    as stock's drift rate is the risk - free interest rate. A MATLAB program below replaces the act of
    tossing a coin with a draw from the binomial distribution.
    %number of simulations
    m=3;
    %number of draws (nodes) per simulation
    n=4;
    stock=zeros(m,n+1);
    stock(:,1)=940;

    for j=1:m
            for i=2:n+1
                    x=binornd(1,.5); %x is either 1 (heads) or 0 (tails)
                    if x==1
                            delW = sqrt(2);
                    else
                            delW = -sqrt(2);
                    end
                    stock(j,i)=stock(j,i-1)*exp(.0775 + .15 * delW);
            end
    end

    %path 1
    stock(1,:)

    940    821.60     1097.60     959.34     1281.62

    %path 2
    stock(2,:)

    940    821.60      718.12     959.34     1281.62

    %path 3
    stock(3,:)


                                             xliv
       940     821.60   1097.60     959.34      838.50


3. dSt = :01Stdt + :05StdWt
   (a) see MATLAB program below
   (b) see MATLAB program below
   (c) A MATLAB program below generates 5 normally distributed random variables with mean 0 and
       variance :20, then computes the stock price and call value.
       sigma = .05;
       T = 1;
       K = 1;
       r = .03;
       S0 = 1;

       %n is the number of discretizations for T
       n = 5;
       delta = T/n;

       bm(1)=normrnd(0,sqrt(delta));
       cbm(1) = bm(1);

       for j=2:n
               bm(j) = normrnd(0,sqrt(delta));
               cbm(j) = cbm(j-1) + bm(j);
       end

       for j=1:n
               stock(j) = S0*exp((r*j*delta)+sigma*cbm(j)-(1/2)*(sigma^2)*j*delta);
       end

       %generate European call price
       %stock(n) is final stock price, stock(T)
       call = exp(-r*T) * max(0, stock(n) - K)

       0.0312 <- call value (one simulation)

       stock

       0.9980 1.0162 1.0447 1.0510 1.0321 <- one possible stock price path

   (d) Need parameters for a uniform distribution with mean 0 and variance 15 . Since the parameters must
       generate a symmetric distribution with mean zero, a = b. To ensure that the variance equals 51 ,
       choose b such that

                                                 1   (b a)2
                                                   =
                                                 5      12
                                                     (2b)2
                                                   =
                                                       12
                                                     b2
                                                   =
                                                      3
                                                xlv
                                        ) 35 = b2
                                               p
                                        ) b = :6
                                                                           p p
   Therefore, draw the random variables from a uniform distribution, U (   :6; :6). A MATLAB
   program which performs these calculations is given below.
   sigma = .05;
   T = 1;
   K = 1;
   r = .03;
   S0 = 1;

   %n is the number of discretizations for T
   n = 5;
   delta = T/n;

   bm(1)=unifrnd(-sqrt(.6),sqrt(.6));
   cbm(1) = bm(1);

   for j=2:n
           bm(j) = unifrnd(-sqrt(.6),sqrt(.6));
           cbm(j) = cbm(j-1) + bm(j);
   end

   for j=1:n
           stock(j) = S0*exp((r*j*delta)+sigma*cbm(j)-(1/2)*(sigma^2)*j*delta);
   end

   %generate European call price
   %stock(n) is final stock price, stock(T)
   call = exp(-r*T) * max(0, stock(n) - K)

   0.0353 <- call value (one simulation)

   stock

   1.0193 1.0523 1.0198 1.0401 1.0364 <- one possible stock price path

(e) Repeat the experiment 1,000 times and compare the two approximation methods.
   %generates Brownian motion using Normal and Uniform approximations, then
   generates
   %stock prices and European call values (1000 times)

   for k=1:1000

   sigma = .05;
   T = 1;
   K = 1;
   r = .03;
   S0 = 1;

   %n is the number of discretizations for T
   n = 5;

                                          xlvi
       delta = T/n;

       bm_normal(1)=normrnd(0,sqrt(delta));
       cbm_normal(1) = bm_normal(1);
       bm_uniform(1)=unifrnd(-sqrt(.6),sqrt(.6));
       cbm_uniform(1) = bm_uniform(1);

       for j=2:n
               bm_normal(j) = normrnd(0,sqrt(delta));
               cbm_normal(j) = cbm_normal(j-1) + bm_normal(j);
               bm_uniform(j) = unifrnd(-sqrt(.6),sqrt(.6));
               cbm_uniform(j) = cbm_uniform(j-1) + bm_uniform(j);
       end

       for j=1:n
               stock_normal(j) = S0*exp((r*j*delta)+sigma*cbm_normal(j)-(1/2)*(sigma^2)*j*delta);
               stock_uniform(j) = S0*exp((r*j*delta)+sigma*cbm_uniform(j)-(1/2)*(sigma^2)*j*delta);
       end

       %generate European call price
       %stock(n) is final stock price, stock(T)
       call_normal(k) = exp(-r*T) * max(0, stock_normal(n) - K);
       call_uniform(k) = exp(-r*T) * max(0, stock_uniform(n) - K);

       end

       avgnormal=mean(call_normal)

       0.0381 <- call value using Normal approximation

       avguniform=mean(call_uniform)

       0.0388 <- call value using Binomial approximation


       The two prices are similar. In general, the central limit theorem could be invoked if n were increased.
       The sum of independent uniform random variables with a common mean converges to a normal
       distribution.
       Note: MATLAB has a built in Black Scholes option pricing formula (among many other nance
       related features).

   (f) Yes, the paths may be combined. However, the accuracy of the expectation also depends on the
       number of nodes in the sample path and not just the number of sample paths. Rather than combine
       simulations (increase k), decreasing the partition width (increase n) would be more suitable. There
       are two sources of error, one arises from the discretization and the other from the Monte Carlo
       simulation for a given discretization. With only ve nodes in the discretization, the central limit
       theorem cannot be invoked. Increasing the number k of simulated paths simply makes the sample
       average approach the expected call value calculated with only ve nodes, this is not the true call
       value.


4. Consider the process dSt = :05dt + :1dWt . This is arithmetic and not geometric Brownian motion. The
   terms dWt are approximated by

                                                 xlvii
                                                                   p
                                                  Wt =          +p with probability .5
                                                                    with probability .5
(a) see MATLAB program below
(b) see MATLAB program below
(c) Stock price path plots with  = 1 and  = :5.

                                                                Stock Price Path, Delta = 1


                                       1.3
                         Stock Price




                                       1.2



                                       1.1



                                        1
                                             0   0.5        1               1.5                2   2.5   3
                                                                           Time

                                                                Stock Price Path, Delta = .5
                                       1.2

                                 1.15
                   Stock Price




                                       1.1

                                 1.05

                                        1

                                 0.95
                                             0   0.5        1               1.5                2   2.5   3
                                                                           Time



                                                   FIGURE       0.11      Stock Price Paths

(d) A MATLAB program is presented below with draws from a binomial distribution to simulate coin
    tossing. For  = 1, choose n to be 3, for  = :5, choose n to be 6, and for  = :01, choose n to be
     3
    :01 = 300.
    n=[3,6,300];
    stock(1)=1;
    sig=.1;

    for j=1:3
            delta=3/n(j);
            for i=2:n(j)+1
                    %x is either 1 (heads) or 0 (tails)
                    x=binornd(1,.5);
                    if x==1
                            delW = sqrt(delta);
                    else
                            delW = -sqrt(delta);
                    end
                    stock(i)=stock(i-1) + .05 * delta + sig * delW;
            end
            x=[0:delta:3];
            plot(x,stock)
            title('Path of Stock Price')
            xlabel('Time')

                                                                     xlviii
                               %pause command will generate plot and wait for return key to proceed
                               pause
                      end

                      As the plots indicate, when  = :01, the stock price process looks as if it is being driven by a
                      Brownian motion.
                                                Path of Stock Price, Delta = .01, sigma=.1
              1.15

                    1.1
Stock Price




              1.05

                     1

              0.95

                    0.9
                          0         0.5             1                1.5                2         2.5         3
                                                                    Time

                                             Path of Stock Price, Delta = .01, sigma=.1*sqrt(3)
                    1.3

                    1.2
      Stock Price




                    1.1

                     1

                    0.9

                    0.8
                          0         0.5             1                1.5                2         2.5         3
                                                                    Time

                                                 FIGURE    0.12     Stock Price Paths

                                                                                            p
         (e) To increase the variance by a factor of 3, change  from :10 to 3(:10). After this value is adjusted
             in the above MATLAB program, new plots are generated. One possible path is
                      1.0000     1.2232      1.4464       1.3232 <- one possible stock price path




                                                                  xlix
                                       CHAPTER 12




1. Laplace's equation: fxx + fyy + fzz = 0. Is Laplace's equation satis ed by the following equations ?
   (a) f (x; z; y) = 4z 2y   x2 y y3 YES

                                          fxx = 2y fyy = 6y            fzz = 8y
                                   )      fxx + fyy + fzz = 0
   (b) f (x; y) = x2    y2 YES

                                                  fxx = 2 fyy = 2
                                           )      fxx + fyy = 0
    (c) f (x; y) = x3   3xy NO

                                                 fxx = 6x fyy = 0
                                          )      fxx + fyy = 6x 6= 0 8x
   (d) f (x; z; y) = y+x z NO

                                                      1
                                               fx =
                                                    y+z
                                                           ) fxx = 0
                                                        x
                                               fy =         2 ) fyy = 2x 3
                                                    (y + z )         (y + z )
                                                        x
                                               fz =         2 ) fzz = 2x 3
                                                    (y + z )         (y + z )
                                                       4x
                                ) fxx + fyy + fzz =           6 0 8x
                                                               =
                                                    (y + z )3
        More than one function will satisfy Laplace's equation unless boundary conditions are speci ed. The
        number of boundary conditions depends on the domain. Boundary conditions are needed as one can

                                                   l
        always add constants and terms of the form x, y;, and xy without changing the second derivative.
        Boundary conditions serve a purpose similar to initial conditions in ordinary di erential equations.
        A unique solution is desirable when all necessary boundary conditions have been speci ed.

2. Do the following functions satisfy the heat equation ?
                         2 2
   (a) f (x; z; y) = e[29a  t+(3x+2y+4z)] YES

                                           @f (x; z; y)
                                                            = 29a22 f (x; z; y)
                                                 @t
                                          @ 2 f (x; z; y)
                                                            = 92 f (x; z; y)
                                                @2x
                                            2
                                          @ f (x; z; y)
                                                            = 42 f (x; z; y)
                                                @ 2y
                                          @ 2 f (x; z; y)
                                                            = 162f (x; z; y)
                                                @2z
        Therefore, a2 times the sum of the second derivatives, a2 (fxx + fyy + fzz ) equals ft and the heat
        equation is satis ed.

                                 a2 (fxx + fyy + fzz ) = a2 (9 + 4 + 16)2 f (x; z; y)
                                                       = 29a22 f (x; z; y)
                                                       = ft

   (b) f (x; z; y) = 3x2 + 3y2   6z 2 + x + y     9z 3 YES
        Since there is no dependence on t, this equation satis es the heat equation if and only if it satis es
        Laplace's equation as ft = 0. Only terms of quadratic order or higher need to be considered,
        3x2 + 3y2 6z 2, as lower order terms vanish when the Laplacian is applied.

                                                fxx = 6 fyy = 6          fzz = 12
                                      )         fxx + fyy + fzz = 0
        The heat equation is satis ed.

3. PDE: fx + :2fy = 0 with x 2 [0; 1] and y 2 [0; 1].

   (a) The function f (x; y) is the unknown in the above equation.
   (b) fy = 5fx. In English, a function such that the change in y is minus 5 times the change in x is
       required.
    (c) There will be in nitely many solutions to the equation without a boundary condition. For instance,
        consider the class of constant solutions, f (x; y) = k where k 2 R (any real number). In this instance,
        fx = fy = 0 and fx + :2fy = 0 as desired. In addition, f (x; y) = :2x + y and f (x; y) = e(:2x y)
        can also be shown to satisfy the equation for any constant  2 R. The PDE is the linear homogeneous
        transport equation and in general

                                                       li
                                         fx (x; y) + :2fy (x; y) = 0
                                                   f (x; y) jx=0 = g(0; y)
       has a solution f (x; y) = g(y :2x).
   (d) Impose the boundary condition f (0; y) = 1. The unique solution is f (x; y) = 1 since the function g
       is identically 1. This corresponds the rst class of solutions in part (c) when k = 1.

4. The PDE is the heat equation, fxx + :2ft = 0, with boundary condition f (x; 1) = max[x          6; 0] for
   0  x  12 and 0  t  1. The boundary condition is for a European call option.

   (a) A single boundary condition is not suÆcient, the rectangle (time by space) has four sides. Three
       boundary conditions must be speci ed. The fourth side, f (x; 0), is then solved as the value of the
       option at the current date, t = 0, for various initial stock prices.
   (b) Two reasonable assumptions for boundary conditions would be that f (0; t) = 0 and f (12; t) = 6.
       The rst boundary condition speci es that if the stock price becomes zero it stays zero. The second
       boundary condition states that when the option becomes very deep in-the-money, $6, it remains at
       that level.
   (c) Implement a numerical approximation using grid sizes of x = 3 and t = :24. The simplest
       technique is an explicit scheme with a backward time derivative (more elaborate procedures would
       involve an implicit Crank - Nicholson scheme). Let k be the time horizon (0, .25, .50, .75, 1.0) and
       j be the state space (0, 3, 6, 9, 12). The numerical routine operates backward in time starting from
       k = 1 and proceed to k = 0, when the values of the function (call values) are known for a given
       initial stock price. At each step, the program will solve for ukj 1 as the k terms are known.

                                                                                    !
                                 ukj  ukj 1                 ukj+1    2ukj + ukj 1
                                            =           5
                                     t                             (x)2
                                                   t
                                  ukj ukj 1 =
                                                                               
                                                      2 5 ukj+1 2ukj + ukj 1
                                                 (x)
                                        k 1    k    5 k                      
                                       uj   = uj +      u       2ukj + ukj 1
                                                   36 j+1
       The MATLAB program below performs the calculations.
       Matrix=zeros(5,5);
       Matrix(:,5)=[6,6,6,6,6]';
       Matrix(1,:)=[0,0,0,3,6];

       for k=1:4
           for j=4:-1:2
                 Matrix(k+1,j)=Matrix(k,j)+(5/36)*(Matrix(k,j+1)-2*Matrix(k,j)+Matrix(k,j-1));
           end
       end
       For instance, to calculate the (2; 4) entry of $3, the following was done

                                                 5
                                        x =3+       (6 2(3) + 0) = 3
                                                 36
                                                  lii
The values at the various nodes can be seen from the nal values of Matrix.

Matrix =

              0             0              0         3.0000          6.0000
              0             0         0.4167         3.0000          6.0000
              0        0.0579         0.7176         3.0579          6.0000
              0        0.1415         0.9510         3.1415          6.0000
              0        0.2342         1.1428         3.2342          6.0000

To interpret the results, time to maturity is increasing down the rows and the value of x (initial stock
price) is increasing from column to column (going right). Therefore the results are consistent with
 nancial intuition. Prices increase along each column from left to right as the current stock price
increases. Prices converge to their intrinsic value from the bottom to the top row as the \option"
approaches maturity. Overall, the bottom row

 S(0)    $0  $3     $6     $9    $12
 t=0     0 0.2342 1.1428 3.2342 6.0000

represents the current value of the \option" at various initial stock prices.

                                                 x variable
        1.0
                   0                  0                      0                3              6




        .75
                   0                  0                      .4167            3              6

     Time

        .50
                   0                  .0579               .7176               3.0579         6




        .25
                   0                  .1415               .9510               3.1415         6




         0
                   0                  .2342               1.1428              3.2342         6

                  $0             $3                  $6                  $9            $12



                                FIGURE        0.13   Numerical PDE Solution




                                                      liii
                                          CHAPTER 13




1. Xt = eYt where Yt  N (t; 2 t)
   (a) Calculate E [ Xt j Xs ; s < t]

                                                                               
                                      E [ Xt j Xs ; s < t] = E eYt Ys ; s < t
                                                                                    
                                                           = E eYt Ys+Ys Ys ; s < t
                                                                                   
                                                           = eYs E eYt Ys Ys ; s < t
        Since Ys is not random, the term eYs can be removed from under the expectation. The remainder
        in the exponent has a normal distribution, Yt Ys  N ((t s); 2 (t s)).
                                                                h       2                   i
                               E [ Xt j Xs ; s < t] = eYs E eN ((t s); (t s)) Ys ; s < t
        Using the moment generating function for a normal distribution produces the result.

                                                                         1 2
                                         E [ Xt j Xs ; s < t] = eYs e(+ 2  )(t s)
                                                                        1 2
                                                              = Xs e(+ 2  )(t s)
2. When would e rtXt be a martingale ?
                                                          1 2
   (a) Relate the variables r, , and  such that e( r++ 2  )(t s) = 1 (see below).
   (b) From part (a), e rt is not random and can be removed from the expectation

                                                                          1 2
                                                            = e rtXs e(+ 2  )(t s)
                                                     
                               E e rt Xt Xs ; s < t
                                                                                    1 2
                                                            = e rs e r(t s)Xs e(+ 2  )(t s)
        For e rt Xt to be a martingale, the right hand side must equal e rs Xs .

                                                      liv
                                                                               
                                             E e rt Xt Xs ; s < t                   =   e rs Xs
                                    , e rs Xs e r(t s) e(+ 12 2 )(t s)            =   e rs Xs
                                           , e r(t s) e(+ 12 22 )(t s)            =   1
                                               , e( r++ 12  )(t s)                =   1
                                                  , r +  + 12 2                   =   0

       The above condition is satis ed when  = r                  1 2
                                                                   2  . Therefore, only choice (d) is suitable.


3. Zt = e rt Xt where Xt = eWt . This implies that Zt = e rt+Wt .


   (a) Expected value of increment dZt is calculated using Ito's lemma.


                                          @Zt
                                               = rZt
                                           @t
                                          @Zt    @ 2Z
                                               = 2 t = Zt
                                          @Wt    @W
                                                  t 
                                         ) dZt = 12 r Zt dt + Zt dWt

                                                                      
       The expected value of the increment dZt is 21                 r Zt dt.

   (b) Since the expected value of the increment is not zero, Zt cannot be a martingale (assuming r 6= 12 ).
                                                              
   (c) Calculate E [Zt ] using Wt  N (0; t) ) E eWt = e 2t .


                                                E [Zt ] = e rtE [eWt ]
                                                                 1
                                                        = e( r + 2 ) t

       If the value r is set to equal 12 , then Zt is a martingale. From part (a), if r = 12 , then dZt = Zt dWt .
       This implies that Zt is a martingale.
                               1
       The exponential, eXt 2 hX it , is a martingales
                                                  p if Xt is a continuous martingale (withpX2rW
                                                                                              0 = 0 and
       for boundedp hX it ). Therefore, inserting
                                              p    2r in front of the Wt implies that Xt = e    t . Thus,
       Zt = e rt+  2rW t is a martingale as     2rWs t = 2rt.

   (d) Zt is a mean one martingale, E [ Zt j I0 ] = Z0 = 1.



                                                          lv
                                      CHAPTER 14




1. (a) mean and variance of X

                                              E (X ) = 0:3
                                            V ar(X ) = 0:19
   (b) If Y = X        0:25, then
                                               E (Y ) = 0:05
   (c) No, the variance has not changed.
   (d) Choose                                        0      1
                                                    0:0917
                                              p = @ 0:3190 A
                                                    0:5893
       This results in

                                             E p (X ) = 0:05
                                           V arp (X ) = 0:19

       The values for p are chosen such that the elements of p sum to 1 and X maintains the same mean
       and variance. The following system of equations must be solved.
                    0                                     10       1    0              1
                         1          :5        :2        p1           :05
                    @ (1 :05)2 ( :5 :05)2 (:2 :05)2 A @ p2 A = @ :19 + (:05)2 A
                         1         1          1         p3            1

   (e) The values of X have not changed. Only the probabilities associated with the three values that
       X can assume have changed. Thus, the distribution of X has changed but not the state space
       of the random variable; X remains an element of f1; :5; :2g.


                                               lvi
2. The density function f (x) for log(Rt ) is normal with mean  and variance 2 .
                                                                                          (x )2
                                                                                                  
                                                                1
                                                      f (x) = p 2 exp
                                                               2                         22
   (a) Choose                                                                                             
                                                   1                      
                                       (x) = exp    2   (x r)2 + (x )2 ;
                                                  2
        The density  (x)f (x) is a normal density with mean r and variance 2 .
   (b) Choose                                                                                         
                                                       1  2            
                                          (x) = exp    2   x + (x )2 ;
                                                     2
        and the density  (x)f (x) is a normal density with mean 0 and variance 2 :
    (c) It is easier to calculate E (Rt2 ) under the distribution in (b) since E (Rt2 ) = V ar(Rt ) = 2 because
        the distribution in part (b) has mean zero.
   (d) No, the variance has not changed. Both transformations adjusted the mean but not the variance.

3. (a) Plot of the joint density:



                            0.7


                            0.6


                            0.5


                            0.4
                   f(R,r)




                            0.3


                            0.2


                            0.1


                             0
                             3
                                   2
                                         1
                                                                                                                   3
                                             0                                                             2
                                                                                                   1
                                                 −1                                           0
                                                      −2                             −1
                                                                            −2
                                             r             −3   −3
                                                                                          R


              FIGURE              0.14   Plot of bivariate normal density function with mean  and var-cov .

   (b) Choose                                                                                                 
                                                  1 0 1                            
                                   (x) = exp        x  x (x )0  1 (x ) ;
                                                  2
        where x is a 2 - vector. The density  ([R; r])f (R; r) is multivariate normal with mean 0 and variance-
        covariance matrix .

                                                                     lvii
(c) Plot of the new joint density:




                        0.7


                        0.6


                        0.5


                        0.4
               f(R,r)




                        0.3


                        0.2


                        0.1


                         0
                         3
                                2
                                     1
                                                                                                   3
                                         0                                                     2
                                                                                           1
                                             −1                                        0
                                                  −2                          −1
                                                                         −2
                                         r             −3   −3
                                                                                   R


         FIGURE               0.15   Plot of bivariate normal density function with 0 mean and var-cov  .




(d) No, the variance - covariance matrix has not changed.




                                                                 lviii
                                          CHAPTER 15




1. (a)
              C (t; St ) P (t; St ) =    e r(T t) E (max(ST K; 0)jIt ) e r(T t) E (max(K                  ST ; 0)jIt )
                                    =    e r(T t) E (max(ST K; 0) max(K ST ; 0)jIt )
                                    =    e r(T t) E (max(ST K; 0) + min(ST K; 0)jIt )
                                    =    e r(T t) E (ST K jIt )
                                    =    St e r(T t)K
         since under the risk - neutral measure, the discounted stock is a martingale. This relationship is put
         - call parity.
   (b) This follows trivially by part (a) and the de nition of H (t; St ).
   (c) By part (b)
                                                     h                                               i
                                 H (t; St ) = max C (t; St ); C (t; St ) + e r(T t) K           St
                                                              h                     i
                                            = C (t; St ) + max e r(T t) K St ; 0
         Therefore
                                                                  h                           i
                         H (0; S0) = e rt E C (t; St ) + max e r(T t)K St ; 0
                                                                  h               i
                                   = e rt C (0; S )ert + e rtE max e r(T t)K St ; 0
                                                                    h               i
                                   = C (0; S0 ) + e rt e r(T t)E max K er(T t)St ; 0
                                                                      h                   i
                                      = C (0; S0 ) + e rT E max K              er(T t)St ; 0
                           1 2
         With St = S0 e(r 2  )t+Wt under the risk - neutral measure, the result follows.
                                                                                                 
   (d) Since e rT E max K er(T t)St ; 0 = e r(T t)E max e r(T t)K St ; 0 , the chooser option
       is equivalent to a portfolio consisting of a long call expiring at T with strike K plus a long put with
       strike Ke r(T t) expiring at t. Therefore
                                  H (0; S0 ) = C (0; S0 ; K; T ) + P (0; S0 ; Ke r(T t); t)

                                                         lix
   (e) Using the Black-Scholes formula
                        H (0; S0 ) = S0 (N (d1 ) N ( d1 )) + Ke r(t T )(N ( d2 ) N (d2 ))
       where

                                                                         
                                               ln SK0 + r + 12 2 T
                                          d1 =          p
                                                     p T
                                                      
                                          d2 = d1  T
       and

                                                           
                                               ln SK0 + rT + 12 2 t
                                          d1 =          p
                                                     p t
                                                      
                                          d2 = d1  t


2. (a) Use Ito's lemma to show that
                                                               1 2
                                               St = S0 e(r f 2  )t+Wt
       is the solution to the SDE
                                           dSt = (r f )St dt + St dWt
                                         1 2
       Taking St = f (t; Wt ) = S0 e(r f 2  )t+Wt and applying Ito's lemma

                                      @f        @f        1 @2f
                              dSt =       dt +      dWt + 2 dt
                                      
                                       @t      @Wt       2 @ Wt
                                                 1 2                  1
                                    = r f           St dt + St dWt + 2 St dt
                                                 2                    2
                                                         
                                                1 2 1 2
                                    = r f          +  St dt + St dWt
                                                2     2
                                    = (r f )St dt + St dWt

   (b) For s > 0 consider the conditional expectation
                              h          1 2         i           1 2                
                            E eWt+s 2  (t+s) It        = e 2  (t+s)+Wt E eWt
                                                                 1 2          1 2
                                                         = e 2  (t+s)+Wt + 2  s
                                                             1 2
                                                         = e 2  t+Wt
       Thus, the process is a martingale.  The second equality follows from Wt = Wt+s Wt  N (0; s).
                                         2
       Therefore, E e(Wt+s Wt ) = e 21  s by the moment generating function for the normal distribution.
                               


   (c) If Xu = , then by Girsanov's theorem

                                                               Z t
                                               ~ t = Wt
                                               W                     Xu du
                                                                0
                                                    = Wt       t

                                                    lx
    is a martingale under the measure P~ where
                                                         Z
                                              P~ (A) =         (WT )dP
                                                          A
    and

                                                       RT
                                                                    1RT 2
                                      (WT ) = e 0 Xu dWu 2 0 Xu du
                                                      1 2
                                             = eWT 2  T
                                       1 2
(d) Let Zt = f (St ) = S1t = S10 e (r f 2  )t Wt . By Ito's lemma

                                      @f         @f       1 @2f
                              dZt =       dt +      dWt + 2 dt
                                      @t       @Wt  2 @ Wt
                                          r f 12 2                  1 2
                                    =                  dt       dWt +        dt
                                          
                                              S t           S t
                                                              
                                                                      2  S t
                                       1            1     1          1
                                    =       f r + 2 + 2 dt            dWt
                                      St            2     2          St
                                    = Zt [f r + 2 ]dt Zt dWt
(e) For s > 0, consider the conditional expectation under measure P and de ne Wt = Wt+s         Wt .

                                           1 (r f 12 2 )(t+s) Wt  Wt 
                           E [Zt+s jIt ] =    e                   E e
                                           S0
                                           1 (r f 12 2 )(t+s) Wt 21 2 s
                                         =    e                   e
                                           S0
    Therefore

                      Z er(t+s)
                                       
                                                 1 (r f 12 2 )(t+s) Wt + 12 2 s+(r f )(t+s)
                    E t+fs(t+s) It           =      e
                       e                        S0
                                                 1 21 2 (t+s) Wt + 12 2 s
                                             =      e
                                                S0
                                             6= S1 e 21 2 t Wt
                                                  0
                                              = Zt e(r f )t
    and the process is not a martingale under measure P . However, under measure P~ , the situation
    changes. The term Wt under measure P is N (0; s) while under measure P~ , the variance remains
    the same but the mean changes according to part (c). Under measure P~ , use the property that
    Wt = W~ t + t to conclude that


                                  Wt = Wt+s Wt
                                                                                
                                        ~ t+s + (t + s)
                                      = W                                 ~ t + t
                                                                          W
                                        ~ t+s W
                                      = W         ~ t + s
                                      = W ~ t + s

                                                 lxi
          ~ t d N (0; s) under measure P~
   Since W



                                                                  h               i
                                  E P~ e Wt             = E P~ e (s+W~ t )
                                                  

                                                                  h            i
                                                          = E P~ e  s W~ t
                                                                       2
                                                                h             2 i
                                                          = E P~ e  s+N (0; s)
                                                                    2
                                                                           h          i
                                                          = e  s E P~ eN (0; s)
                                                               2              2
                                                                  2   1 2
                                                          = e  s+ 2  s



   This result is used below.



                                               1 (r f 12 2 )(t+s) Wt P~  Wt 
                         E P~ [Zt+s jIt ] =       e                     E e
                                               S0
                                               1 (r f 12 2 )(t+s) Wt 2 s+ 21 2 s
                                             =    e
                                               S0
                                               1 (r f )(t+s)+ 21 2 t Wt
                                             =    e
                                               S0



   Therefore




                                            Zt+s er(t+s)
                                                             
                                                                     1 21 2 t Wt
                                 E P~                    It       =    e
                                              ef (t+s)              S0
                                                                       ert
                                                                  = Zt ft
                                                                       e


   and the process is a martingale under P~ .


(f) Yes, Zt is the price of 1 unit of domestic currency in terms of foreign currency. In order to discount
    this quantity, multiply by eeft = e(r f )t. Thus, P~ is the arbitrage - free measure of the foreign
                                   rt

    economy.




                                                   lxii
                                                                      CHAPTER 16




1. Payo Diagrams
   (a) A caplet with rate Rcap = 6:75% written on 3 - month Libor.
                                                          −3          Caplet Payoff for each $1 of Notional Amount
                                                      x 10

                                                                                                                            payoff
                                           18


                                           16


                                           14
                 (Lt − 3 months − 6.75%) * 3/12




                                           12


                                           10


                                                  8


                                                  6


                                                  4


                                                  2


                                                  0


                                          −2
                                                      0        0.02   0.04          0.06              0.08           0.1   0.12
                                                                       3 − month Libor at start of 3 month period




                                                                                      lxiii
(b) A forward contract maturing in 3 months on a default - free discount bond whose maturity is 18
    months. The contracted price is 89:5.
                                                                               Forward Contract Payoff with Forward Price = $89.5

                                                                                                                                                   payoff
                                                      80


                                                      60


                                                      40
               Bond price in 3 months − 89.5

                                                      20


                                                       0


                                                     −20


                                                     −40


                                                     −60


                                                     −80

                                                           0       20           40           60           80          100        120         140            160
                                                                     Price, in 3 months, of a default−free discount bond maturing in 18 months




(c) A 3 by 6 FRA that pays a 3 - month xed rate, F = 7:5%, against Libor.
                                                                            Payoff of a Single FRA on 3−month Libor with F equal to 7.5%
                                                      0.08
                                                                                                                                                   payoff


                                                      0.06



                                                      0.04
              Payoff (same for all six agreements)




                                                      0.02



                                                           0



                                                     −0.02



                                                     −0.04



                                                     −0.06



                                                     −0.08
                                                               0   0.02        0.04          0.06          0.08       0.1         0.12     0.14             0.16
                                                                                      Libor at the end of each three−month period




                                                                                                    lxiv
   (d) A xed payer interest rate swap with swap rate  = 7:5% which receives 6 - month Libor. The swap
       began 6 months ago and matures in 2 years.

                                                                Fixed Payer Interest Rate Swap at 6, 12, 18, and 24 Months per $1 Notional
                                                  0.04
                                                                                                                                             payoff


                                                  0.03



                                                  0.02
                 − 7.5%) * 6/12

                                                  0.01



                                                        0
                                     t − 1/2
                 (L




                                                 −0.01



                                                 −0.02



                                                 −0.03



                                                 −0.04
                                                            0   0.02         0.04          0.06             0.08          0.1        0.12             0.14
                                                                             6 − month Libor at the start of the 6 month period




   (e) A swaption maturing in 6 months on a 2 year xed paper swap with swap rate  = 6%.

                                                                                 Payoff of Swaption with 6% Swap Rate
                                                 0.06
                                                                                                                                             payoff



                                                 0.05
                 max(current swap rate − 6%,0)




                                                 0.04




                                                 0.03




                                                 0.02




                                                 0.01




                                                   0
                                                        0        0.02            0.04             0.06              0.08           0.1                0.12
                                                                                           current swap rates




2. The assets which trade are (b), (c), (d), and (g). Returns and volatilities do not trade and must be
   inferred from assets such as bonds or options.


                                                                                               lxv
                                       CHAPTER 17




1. Construct an implied tree for the spot rate process drt = :01rt dt + :12rtdWt .

   (a) Choose  to have 5 time steps in a 12 month period;  = 125 months or 51 years.
                                                 p          p1
   (b) Since  and  are xed constants, u = e  = e(:12) 5 = 1:0551 and d = u1 = :9477 are also
       constant throughout the tree.
    (c) The tree is recombining with t + 1 nodes at time t.
          t=0       t=1      t=2      t=3       t=4        t=5
                                                          0.0785
                                               0.0744
                                     0.0705               0.0705
                            0.0668             0.0668
                  0.0633             0.0633               0.0633
         0.0600             0.0600             0.0600
                  0.0569             0.0569               0.0569
                            0.0539             0.0539
                                     0.0511               0.0511
                                               0.0484
                                                          0.0459
   (d) As no traded bonds have been introduced into the economy, it is not possible to nd the term
       structure market price of risk. Nor can risk - neutral probabilities be ascertained. However, empirical
       probabilities can be obtained using the original SDE. Consider the discretized SDE with partition
       size  under the empirical measure
                                              rt+1 = rt + rt + rt W
        Given this process, the following reasoning extracts probabilities from the spot rate tree.

                                          E [rt+1 ] = rt + rt

                                                   lxvi
                                         ) pu (t)rtu+1 + (1 pu (t))rtd+1 = rt + rt
                                                             
                                         ) pu (t) rtu+1 rtd+1 = rt + rt rtd+1
        Therefore, pu (t) = rt +rurtrdrt+1
                                         d
                                 t+1   t+1
        The \up" probabilities:
           t=0       t=1       t=2           t=3     t=4
                                                    0.5061
                                        0.5318
                              0.5047                0.5047
                    0.5039              0.5039
         0.5031               0.5031                0.5031
                    0.5105              0.5105
                              0.5013                0.5013
                                        0.5095
                                                    0.4994
        The \down" probabilities:
           t=0       t=1       t=2           t=3     t=4
                                                    0.4939
                                        0.4682
                              0.4953                0.4953
                    0.4961              0.4961
         0.4969               0.4969                0.4969
                    0.4895              0.4895
                              0.4987                0.4987
                                        0.4905
                                                    0.5006


2. Given 4 zero coupon bonds of di erent maturities, construct a \tree" for the spot rate which is consistent
   with the observed bond prices.
   (a) There are at least two methods to generate a \tree". The second generates a spot rate tree for a
       speci ed volatility term structure given by the Black, Derman, and Toy model. The rst method
       simply nds the implied forward curve from market observed bond prices. These implied forward
       rates are not necessarily expected future spot rates. However, they are very useful objects in the
       study of xed income securities.
   (b) Method 1 - Forward Rate Curve
        Implied forward rates can be ascertained from default - free zero coupon bonds recursively. This
        procedure starts with the shortest maturity bond and nds an implied spot rate assumed to be
        constant from period 0 until 1. Then, the procedure uses the two year bond to nd an implied
        rate between 1 and 2. Repeating the procedure with consecutively longer maturities extrapolates a
        piecewise constant approximation to the forward rate curve.
        Want to nd forward rates between time ti 1 and ti .

                                                1                        1
                                             1 + f0;1
                                                      = :94    ) f0;1 = :94   1 = :06383

                                                       lxvii
                                       
                      1               1
                   1 + f0;1        1 + f1;2
                                            = :92      ) f1;2 = :92(1 +1 f )   1 = :02174
                                                                         0;1
The other two rates are obtained in a similar fashion.

                                          1
                        f2;3 =                            1 = :05748
                               :87(1 + f0;1)(1 + f1;2 )
                                               1
                        f3;4 =                                     1 = :08749
                               :80(1 + f0;1)(1 + f1;2 )(1 + f2;3 )

Method 2 - Assume a Volatility Term Structure and Implement Black Derman and Toy (BDT) Model
The (BDT) model requires a term structure of yields and volatilities. Here, the volatility term
structure is a at :12 from the above equation. In addition, the yield at maturity N , yN , is implied
from bond prices by the formula P (0; N ) = (1+y1N )N .

 Maturity     Yield Volatility
    1        .06383    .12
    2        .04257    .12
    3        .04751    .12
    4        .05737    .12

The rst node of the tree is implied directly from P (0; 1) and is equal to :06383 while ru and rd
require  two equations to match yields and volatilities. The volatilities must satisfy  = :12 =
ln rrud             :24
   2 ) ru = rd e . Therefore, there are two equations and two unknowns (ru and rd ).
                                         h               i
                                        1 1 + 1
                                        2 1+ru 1+rd
                                   (1)              = P (0; 2) = :92
                                           1:06383
                                   (2) ru = rd e:24

                                            1         1
                                   )               +
                                        1 + rd e:24 1 + rd
                                                           = 2(1:06383)(:92)

The values ru = :024342 and rd = :019148 are the solutions. As the forward rates indicate, there is
a drop in interest rates between period 1 and 2. Next, solve for ruu , rdd , and rud = rdu . These are
related by ruu = e:24 rud = e:48 rdd and satisfy the equation

                       1            1            1          1
                    1+rdd e:48 + 1+rud e:24 + 1+rude:24 + 1+rdd = 4(1:06383)(:87)
                           1:024342               1:019148
The values ruu = :072153, rud = :056758, and rdd = :072153 are the solutions. Thus far, the tree
has become
   t=0        t=1           t=2
                         0.072153
            0.024342
 0.06383                 0.056758
            0.019148
                         0.044647

                                              lxviii
        The solutions for ruuu , rddd, etc proceeds in a similar manner.
    (c) The di erence between the methods in problem 1 and 2 involves the information contained in market
        observed bond prices. The two approaches taken in problem 2 are consistent with the market prices
        of bonds used for calibrating the term structure. However, errors between observed bond prices and
        bond prices implied by the term structure could occur in other additional bonds not used to infer
        the term structure. Problem 1 assumed a process for the spot rate but bond prices derived from
        the spot rate process need not match any observed bond prices. Thus, without placing additional
        restrictions on the parameters of the spot rate process in problem 1, the model may not be consistent
        with observed bond prices which could generate arbitrage opportunities.

3. Process for the spot rate is drt = :02rt dt + :06rtdWt with r0 = :06.

    (a) Discretize the SDE at nodes t0 = 0 < t1 < t2 < : : : < tn = t and de ne  = ti    ti 1 .

                                     rti = rti 1 + :02rti 1  + :06rti 1 W
   (b) see MATLAB program below
    (c) A MATLAB program to calculate the integral is below.
        delta=.04
        t=1;
        %number of nodes (not including the first)
        n=t/delta;
        r=zeros(n,1);
        %starting value is .06
        r(1)=.06;

        for k=1:1000

        for i=2:n
                %generate random increment
                deltaW=normrnd(0,sqrt(delta));
                r(i) = r(i-1) + .02*r(i-1)*delta + .06*r(i-1)*deltaW;
        end

        %approximate integral with sum
        %the partition width is fixed at .04 making the approximation .04 times the
        %sum of all the entries

        %calculate the first expectation in part (c)
        expect1(k)=exp(-.04*sum(r));
        %calculate the second expectation in part (c)
        expect2(k)=max(r(n)-.06,0);
        %calculate the expectation in part (b) (combined expectations)
        expect3(k)=exp(-.04*sum(r)) * max(r(n)-.06,0) ;

        end

        %calculate final values for comparison
        E1=mean(expect1);
        E2=mean(expect2);

                                                   lxix
    E3=mean(expect3);
    difference = E3-E1*E2

     -2.2972e-06



(d) In general, unless the random variables X and Y are uncorrelated, one cannot separate E [XY ] into
    E [X ]E [Y ]. For instance, if max(r1 :06; 0) is large,
                                                      R1    then the value of r1 must have been large.
                                                         r ds
    However, this would imply a smaller value for e 0 s .


                        R1                                       R1        
                  E e     0 rs ds max(r1   :06; 0) 6= E e             0 rs ds E [max(r1   :06; 0)]


    The quantity di erence in the output of the above program, although small in this example, provides
    empirical justi cation for not separating the expectations.

(e) Bond prices are calculated under the equivalent risk - neutral martingale measure when using spot
    rate data, not the empirical measure.


                                                                 RT           
                                       P (t; T ) = EtP~    e       t r ( s )ds



    The market price of risk is required to calculate the expectation under the correct measure.

(f) The interest rate dynamics would be arbitrage - free if, using the formula above, they generated
    bond prices which matched those observed in the market. One requires a traded asset such as a
    bond in order to make any conclusions regarding arbitrage opportunities.

(g) If the spot rate process is changed to a equivalent risk - neutral martingale measure, a market
    price of risk, t , would be introduced into the drift of the process. This market price of risk is the
    compensation investors require when faced with uncertainty in the spot rate caused by the Brownian
    motion. The spot rate process under the risk - neutral measure would be


                                                                       ~t
                                   drt = (:02 + :06t ) rt dt + :06rt dW

          ~ t is a Brownian motion under the equivalent risk - neutral martingale measure, P~ .
    where W

(h) A set of arbitrage - free bonds could determine the unknown market price of risk as in the Heath,
    Jarrow, and Morton term structure model.



                                                lxx
                                             CHAPTER 18




1. Consider the Vasicek spot rate model, drt = ( rt )dt + dWt , which incorporates mean reversion into
   the spot rate. The term  represents the long term average spot rate while represents the \speed" of
   reversion from rt to . Both quantities and  are positive.
   (a) Solve for E [ rs j rt ] and V ar [ rs j rt ] for t < s.

                                         drt     = ( rt )dt + dWt
                                drt + rt dt      = dt + dWt multiply both sides by e t
                          e t [drt + rt dt]      = e t [ dt + dWt ]
                                  @  t 
                                     e rt        = e t [ dt + dWt ] integrate from t to s
                         Z s
                                 @t                        Z s                    Z s
                              @ x
                                 [e rx ] dx      =               e x dx +             e x dWx
                          t  @x                            t                  t
                                                                        Z s
                                 e xrx jxx==st   =           x=   s
                                                      e jx=t +  e x dWx
                                                         x
                                                                         tZ
                                                                              s
                              e s rs    e t rt =      e s e t +  e x dWx multiply by e s
                                                                            t                   Z s
                                           rs =       e  ( s  t ) rt +  e     ( s t ) + e  s     e x dWx
                                                                                          Z s    t
                                           rs =        + (rt )e (s t) + e s e xdWx
                                                                                           t
       From the above equation, the conditional mean and variance are obtained.
                                                                                                 Z s         
                         E [ rs j rt ] =  + (rt       )e (s t)                  since E e s          e x dWx = 0
                                                                             
                                                                                                   t
                                                               Z s
                      V ar [ rs j rt ] = V ar e s                   e xdWx
                                                      Z 
                                                           t              
                                       = 2 e 2 s               e x dWx
                                                           t                  s

                                                               lxxi
                                                    Z s
                               = 2 e 2 s                 e2 xdx
                                                      t
                                 2 h                i
                               =        1 e 2 (s t)
                                 2
    The second equality in the variance calculation is the Ito isometry
                               Z t             Z                 Z t
                          V ar       f (u)dWu =          f (u)dWu = f 2 (u)du
                                  0                    0           t    0
    provided that the integrand f () is predictable.
(b) As s " 1 for a xed t, the terms e s and e (s t) converge to zero since is a positive constant.
                                                                                           2
    Therefore, the conditional mean approaches  and the conditional variance approaches 2 .
(c) Calculate the coeÆcients for the bond dynamics. This requires Br (t; s), the partial derivative of
    the bond maturing at time s with respect to spot interest rate at time t, r(t). Using the formula
    found in the text, B B = rt B + Br , results in the drift coeÆcient B being isolated. To calculate
    Br , substitute r(s) above into the bond price with v replacing s and adjust spot rate dynamics to
    account for the market price of risk.
                                                  Rs        
                    B (t; s) =     EtP~       e     t r v dv
                                                                                                              
                                                  Rs                     (v t) +e v R v e x (dW~ x +dx)dv
                               = Et e              t +(rt )e                         t
                                                   R                        Rs                                              
                                                  rt ts e (v t) dv                     (v t) +e v R v e x (dW~ x +dx)dv
                               = Et e                                    e    t  e                 t

                                     Z s                            
         ) Br = @B@r((t;t)s)   =         e (v t) dv B (t; s)
                                      t
                                              
                                    e (s t) 1
                               =                B (t; s)
    Therefore
                                                                               
                                                                     1 e (s t)
                                          Br =                   B                     <0

    With > 0 and s t > 0, Br is negative since e (s t) 1 < 0. The sign of this partial derivative
    is intuitive as an increase in the spot interest rate lowers bond prices. The drift of the bond equals

                                    B B = rt B + Br 
                                                           
                                     B = rt +       1 e (s t) > rt

    Here, a slight adjustment was made to ensure that B is greater than rt . To solve for B , the
    relationship B B = b(rt ; t)Br is used where in this instance b(rt ; t) = . The negative sign is
    removed as the standard deviation must be positive.

                                          B B = b(rt ; t)Br
                                                             
                                           B =       1 e (s t) > 0

                                                          lxxii
       The values of B and B imply that

                                                  B rt    1 e (s t) 
                                                        =             
                                                    B       1 e (s t)
                                                        = 
       as expected. Justi cation for the alterations which make B > rt and B > 0 is provided in Vasicek
       (Journal of Financial Economics, 1977). Computations which parallel those in the text with

                                                     dB = B Bdt B BdWt

                                                   B B = b(rt ; t)Br > 0
                                                    B = rt + B > rt
       lead to the intuitive results presented above. These de nitions realize apriori that Br is a negative
       quantity. Overall,
                       with     the increment
                                              W approximating dWt , both B B W and B B W are
                               2
       distributed N 0; B B 2 t . Therefore, placing a negative sign in front of B does not change
       the distribution of the bond price but results in parameters with greater economic meaning.
       For parts (d) and (e), use the relationship e (s t) ! 1 as t " s.
   (d) Bond price volatility goes to zero as t " s which is expected since the bond matures at $1 for certain
       (no default risk is assumed).
   (e) Bond price drift goes to rs which is also expected. As the bond converges to $1, its return becomes
       the return of holding $1 over an instant, this is exactly the short term rate.
    (f) s " 1 ) e (s t) # 0 Therefore, the drift on a consul or perpetual bond becomes rt +  and the
        di usion parameter becomes  .

2. Two period world with two assets, a savings account (money market) and a bond which pays $1 at
   maturity (t = 2). There are four possible states at t = 2 which correspond to the bond price path. For
   simplicity, denote these four states as 1 = u;u , 2 = u;d , 3 = d;u, and 4 = d;d.
   (a) Form matrix with state prices.
                                                                                                              2    3
                                                                                                              1
           1        =       (1 + r0 )(1 + r1 ) (1 + r0 )(1 + r1 ) (1 + r0 )(1 + r1 ) (1 + r0 )(1 + r1 )       6
                                                                                                              6   2 7
                                                                                                                    7
           B0                       1                  1                  1                  1                4   3 5
                                                                                                                  4
       This implies two equations

           (1)          1 = (1 + r0 )(1 + r1 ) 1 + (1 + r0 )(1 + r1 ) 2 + (1 + r0 )(1 + r1 ) 3 + (1 + r0 )(1 + r1 ) 4

           (2)          B0 = 1 1 + 1 2 + 1 3 + 1 4
   (b) Risk - neutral probabilities can be obtained by setting p~i = (1 + r0 )(1 + r1 ) i 8i = 1; 2; 3; 4. From
       the rst equation, 4i=1 p~i = 1, which ensures that a probability measure has been obtained.
                          P




                                                          lxxiii
                                           ~i
(c) From the second equation and i = (1+r0p)(1+r1 )




   B0 =         1+ 2+ 3+ 4
                                                                                                     
                        1                        1                        1                        1
        =                          p~1 +                    p~2 +                    p~3 +                    p~
                (1 + r0 )(1 + r1 )       (1 + r0 )(1 + r1 )       (1 + r0 )(1 + r1 )       (1 + r0 )(1 + r1 ) 4
                                   
                       1
        = E0P~
               (1 + r0 )(1 + r1 )




                                                                                                 h              i
                                                                                                     1
   Where the last equality follows from the fact that each state has the same payo , X (!i ) = (1+r0 )(1+ r1 ) .
                                                                P4                           P4
   Thus, X (!i ) has no dependence on !i . The expectation i=1 p~i X (!i ) reduces to X i=1 p~i = X
   as the risk - neutral probabilities sum to one according to the rst equation.




                                                lxxiv
                                     CHAPTER 19




1. Consider the two processes

                         rt+ = rt (1 + ) + 1 (Wt+ Wt ) + 2 (Wt Wt  )
                                                                       
                         Rt+ = Rt (1 + ) + 1 W ~ t+ W
                                                       ~ t + 2 W ~t W
                                                                     ~t 
                     h           i
                       ~ )(W ) = 
  with correlation E (W
   (a) This error structure is known as a moving average model of order 1 in the time series literature.
       Both a current \shock" and a previous \shock" enter into the present value of rt .
       Yes, it's plausible that Wt  = Wt Wt  may enter into the dynamics of rt+ . For example, if
       interest rates move up (down) sharply due to some random phenomena, one might expect a possible
       reversion in the next period. This tendency to mean revert is modeled through two restrictions;
       1 > 0 and 2 < 0. Alternatively, it may be reasonable to assume that interest rates are path
       dependent. Simply knowing the current value of rt may not be suÆcient for modeling next period's
       value. In short, interest rates might not necessarily be Markov.
   (b) The closest SDE analogous to this discrete process would be
                                             drt = rt dt + 1 dWt
       which is Markov. This SDE fails to account for the second error term. The diÆculty is that rt is
       not Markov, it depends on previous values of the Brownian motion, not just the current movement
       captured by dWt .
   (c) No, one cannot write a representation for Xt such that Xt is rst order Markov. Even if  = 1, Xt
       is still not rst order Markov. For Xt to be Markov, there must exist some function f such that
                                                      
                                     Xt+ =         rt+
                                                    Rt+ = f (rt ; Rt ) + Zt
       where Zt is the current random variable. In this case, Zt is a function of Wt = Wt+ Wt and
       W~t = W ~ t+ W  ~ t , not the previous random disturbances Wt  = Wt Wt  and W   ~t  =
       ~t W
       W     ~ t  . But

                                               lxxv
                                                                        
                 rt+               rt (1 + )              Wt1 2      0 0           W~t 
                 Rt+       =       Rt (1 + )        +    Wt 
                                                              0 0   +    1 2          ~t 
                                                                                     W
       To be rst order Markov, the values of Wt  and W  ~ t  must be expressed in terms of Rt and
       rt and not involve Rt  and rt  or Rt+ and rt+ . However, the matrices
                                                                                 
                                                                      1 2
                                                                      0 0
       and                                                                   
                                                     0 0
                                                     1 2
                                                                                                ~t 
       are not of full rank. Thus, the matrices are not invertible and the values of Wt  and W
       cannot be solved. If  = 1, then
                                                                                                  
                               rt+         rt (1 + )         1 2        Wt
                              Rt+ = Rt (1 + ) + 1 2                    Wt 
       However, (assume that 1 2 2 1 6= 0), the value for Wt  cannot be expressed in terms of rt and
       Rt as the following system of equations demonstrates
                                                                       1                          
                                         Wt         =        1 2                   rt+ rt (1 + )
                                        Wt                  1 2                   Rt+ Rt (1 + )
       Inverting the matrix
                                                                                 
                                                       1 2
                                                       1 2
       leaves a dense 2  2 matrix which implies that any solution for Wt  involves the future short and
       long term interest rate, not just their present values at time t. Thus, Xt is not rst order Markov.
   (d) No, the same diÆculty in part (b) arises. The past randomness cannot be accounted for in the term
       dWt .
    (e) Yes, this is possible. Adding another process allows one to condition on more information. In
        general, the additional information could make the joint process Markov.

2. (a) A univariate representation for the short rate is
                                           "                                                      #
                                            1
                                            X
                 rt+ = 11 rt + 12                            i 1r            i W 2  + W 2          + Wt1+
                                                         21 22       t i +   22 t i      t
                                               i=1
       provided that j 22 j < 1 so that the in nite series converge. This equation is the result of a recursion.
       Expand the matrix into two equations as follows

                                          rt+ =              11 rt + 12 Rt + Wt1+

                                         Rt+ = 21 rt + 22 Rt + Wt2+
                                           Rt = 21 rt  + 22 Rt  + Wt2
                                         Rt  = 21 rt 2 + 22 Rt 2 + Wt2 
                                             .. ..
                                              .  .

                                                              lxxvi
         Successive substitution of the past values of Rt i for i = 0; 1; 2; : : : into rt+ yields the solution.
   (b) According to this representation, rt is not a Markov process. In nitely many past values of the
       random \shocks" and the spot rate process are required to represent rt .
   (c) The univariate process for rt would be Markov if 12 = 0. In this case, rt+ = 11 rt + Wt1+ .

3. (a) There are 23 = 8 possible states of the world at time t = 3.
   (b) Portfolio 1:
                          Position                             Cash ows at 0 Cash ows at 1
                          Long the forward, f0                   +$1:0000        $1:0800
                          Long 1.08 units of the B1 bond           $0:9720     +$1:0800
                          Net cash ows                           +$0:0280       $0:0000
         Portfolio 2:
                  Position                    Cash ows at 0 Cash ows at 1 Cash ows at 2
                  Short 1.09 units of B2 bond   +$0:9483       $0:0000        $1:0900
                  Long the B1 bond                $0:9000     +$1:0000       $0:0000
                  Short the forward, f1          $0:0000        $1:0000     +$1:0900
                  Net cash ows                  +$0:4830       $0:0000       $0:0000
         Portfolio 3:
                   Position                   Cash ows at 0 Cash ows at 2 Cash ows at 3
                   Short 1.1 units of B3 bond   +$0:9020       $0:0000        $1:1000
                   Long the B2 bond               $0:8700     +$1:0000       $0:0000
                   Short the forward, f2         $0:0000        $1:0000     +$1:1000
                   Net cash ows                 +$0:0320       $0:0000       $0:0000

   (c)
                                                    1      1     1
                                         Bn =                          1 :
                                                1 + f0 1 + f1 1 + f2 1 + fn 1
         This follows from the fact that to avoid arbitrage opportunities, the forward rates must satisfy
         fi = BBi+1
                 i      1. This relationship implies that Bn = 1+Bnfn 1 1 but Bn 1 = 1+Bnfn 2 2 which implies that
         Bn = 1+Bnfn 2 2 1+f1n 1 and so forth until the right hand side only involves B0 = 1.
   (d) Combinations of the above portfolios can generate an in nite number of possible returns.
   (e) No, the Bi 's cannot be determined independently. All bond prices are derived from the same
       underlying term structure.
    (f) No, the fi 's cannot be determined independently either. The forward rates are implied from bond
        prices and are found recursively. The forward rate fi depends on previous forward rates, for instance,
        fi 1 .


                                                    lxxvii
   (g) Presently, only asymptotically are the fi 's normally distributed. The fi 's are a discrete process
       taking, at most, 8 possible values. Theoretically, modeling bonds and the forward rates as a normal
       process allows for negative values. This consequence has no economic rationale and implies the
       existence of arbitrage opportunities.


4. (a) Find the measure under which the discounted bond process is a martingale. Then, take the expec-
       tation of the payo under this measure.

   (b) See part (c) for an assessment of the assumptions.

   (c) The rst assumption is not appropriate under the risk - neutral measure since the expectation of Li
       under this measure is not equal to fi . The second assumption is not reasonable as the fi 's cannot
       have mean 0 since they do not take on non - positive values.

   (d) As for the rst assumption, this becomes reasonable under the forward measure since fi = Ef (Li ),
       the expectation of Li under the forward measure. However, using the forward measure does not
       make the 2nd assumption any more reasonable.

   (e) As mentioned above, since fi = Ef (Li ) the forward measure p1 satis es


                                         f1 = Ef (Li ) = p1 Lu1 + (1 p1 )Ld1
                                                    d
                                      ) p1 = Lf1u LL1d
                                                     1      1

       For the forward measure at t = 2, pu2 and pd2 satisfy


                     f2 = p1 pu2 Luu
                                  2 + p1 (1 pu2 )Lud
                                                  2 + (1 p1 )pd2 Ldu
                                                                  2 + (1 p1 )(1 pd2 )Ldd
                                                                                      2

                      1 = p1 pu2 + p1 (1 pu2 ) + (1 p1 )pd2 + (1 p1 )(1 pd2 )

       where pd2 is the probability of the spot rate process moving from Ld1 to Ldu   2 . Thus, given the
       dynamics of the spot process, the forward measure is recoverable with two unknowns, pu2 and pd2 ,
       and two equations. The rst equation states that the forward rate is the expected future spot rate
       while the second equation merely assets that the sum of the probabilities at t = 2 equals one.

   (f) The price of the option is then given by
                                                                                                              
        C0 = B (0; 2) p1 pu2 C (2; uu) + p1 (1 pu2 )C (2; ud) + (1 p1 )pd2 C (2; du) + (1 p1 )(1 pd2 )C (2; dd)

       Note that the forward measure employs B (0; 2) and not the money market account. The forward
       measures uses a di erent numeraire, a bond instead of the money market, for normalizing assets in
       the economy.


                                                  lxxviii
                                       CHAPTER 20




1. Consider the process drt = rt dWt with r0 = :05.
   (a) The spot rate dynamics are a martingale under the empirical measure as there is no drift term in
       the SDE.
   (b) With a(rt ; t) = 0 and b(rt ; t) = rt , the PDE for the bond price B (t; T ) becomes

                                                                1
                                     rt B = Bt Br (rt ; t)rt + Brr 2 rt2
                                                                2
       where (rt ; t) represents the market price of risk.
                                                        RT       Rt                             
                                                                                   12 R t 2 (rs ;s)ds
   (c) A solution to this PDE is B (t; T ) = EtP    e     t rs ds+ 0 (rs ;s)dWs       0               . Use the SDE given
       in the problem to conclude that

                                                                     2
                                           rs = rt e(Ws Wt ) 2 (s t)
                                                              


       for veri cation.
   (d) The market price of risk equals ii r where i and i are the drift and volatility of the bond. This
       market price of risk is the compensation investors require to hold bonds since they are exposed to
       term structure risk in the form of Wt . This premium is positive. The denominator, i , is always
       positive. The numerator is also positive since i > r. This inequality is intuitive. Imagine if it did
       not hold, i < r. Then the expected return on a particular bond would be less than the risk - free
       rate. No one would be interested in holding such a bond.

2. Consider the mean reverting spot rate model drt = ( rt )dt + bdWt introduced by Vasicek.
   (a) Let B (t; T ) be represented as B with Bx denoting the partial derivative of the bond price with
       respect to the variable x. An SDE for the bond price dynamics follows from Ito's lemma.

                                                       lxxix
                                                              
                                             1
                dB =      Bt + Br a(rt ; t) + Brr b2(t; rt ) dt + Br b(rt ; t)dWt
                                             2
                                                                         
                                                            1
                      = Bt + Br [a(rt ; t) b(rt ; t)t ] + Brr b2 (t; rt ) dt + Br b(rt ; t)dW
                                                                                             ~t
                                                            2
                                                             
                                                        1                     ~t
                      = Bt + Br [ ( rt ) bt ] + Brr b dt + Br bdW
                                                        2


(b) For the drift and di usion parameters, see the calculations in chapter 18, problem 1, part (c). Simply
    replace  with b.

(c) Yes, this is expected. Girsanov's theorem changes the mean but not the di usion component of an
    SDE. Under the risk - neutral measure, the drift on the SDE has been altered but not the di usion
    component.

(d) As maturity approaches, t " T , the di usion of the bond approaches zero. This is intuitive since the
    bond matures at face value. The nal value of the bond is known.

(e) The risk premium  r does not depend on the volatility of the bond. However, the market price
    of risk is proportional to the risk premium. The market price of risk is simply the risk premium
    standardized by the volatility of the bond. These relationships are important as they allow Girsanov's
    theorem to alter the drift (through the risk premium) but not the volatility of the bond price SDE
    under a change of measure.

(f) As in chapter 18, the drift of the bond approaches rt + b while the volatility of the bond approaches
    b.


(g) The yield of a bond, R(t; T ), equals

                                                         1
                                            R(t; T ) =     ln B (t; t + T )
                                                         T


    With the bond price given in the problem

                                                                   b      b2
                                     R = lim R(t; T ) =  +
                                        T !1                              2 2


    Therefore, R represents the yield on a consul bond with in nite maturity.




                                                 lxxx
                                            CHAPTER 21




                                                     RT
                                                                           1 RT 2
1. De ne the Radon Nikodym as V (t; T ) = e t (rs ;s)dWs 2 t  (rs ;s)ds (a martingale provided that (rs ; s)
   is square integrable by Novikov's criterion). This quantity is responsible for changing the bond process
   to the equivalent martingale measure.
                                 RT      
    (a) Let B (t; T ) = EtP~ e     t rs ds . The Ito product rule implies

                                                     Z t                            Z t
         B (t; T )V (t; T ) = B (0; T )V (0; T ) +         B (s; T )dV (s; T ) +          V (s; T )dB (s; T ) + hB (s; T ); V (s; T )it
                                                      0                              0
        Since B (t; T ) is of bounded variation, the quadratic variation between the two processes is zero and
        the last term may be omitted.
                                                                     Z t                           Z t
                     B (t; T )V (t; T ) = B (0; T )V (0; T ) +             B (s; T )dV (s; T ) +         V (s; T )dB (s; T )
                                                                      0                             0
        Therefore, the standard product rule may be applied

                        d(B (t; T )V (t; T )) = dB (t; T )V (t; T ) + B (t; T )dV (t; T )

                                               = r(t)B (t; T )V (t; T )dt (rt ; t)B (t; T )V (t; T )dWt

                                               = B (t; T )V (t; T ) [r(t)dt (rt ; t)dWt ]
   (b) Obtaining an expression for dB (t; T ) is accomplished by observing that b(rt ; t) =  and a(rt ; t) = .
       From the previous section
                                                                                         
                                                                1
                                   dB =         Bt + ( ) Br + Brr 2 dt + Br dW
                                                                                  ~t
                                                                2
         R t result is intuitive. De ne B (t) as the money market account used for discounting, B (t) =
    (c) This
        e 0 rs ds . Under the risk - neutral measure, P~ , the discounted bond, BB(t;T )
                                                                                   (t) , is a martingale.

                                                             lxxxi
                                          
         B (t; T )          B (T; T )
                   = EtP~                          martingale property
          B (t)              B (T )
                                  
                       P~     1
                   = Et                         since B (T; T ) = 1 (zero coupon bond maturing at $1)
                            B (T )
                                   
      ) B (t; T ) = EtP~ BB((Tt))               since B (t) is adapted to Ft
                                RT       
                   = EtP~ e       t rs ds
                                RT                 
                   = EtP e        t rs ds V (t; T )



More justi cation is possible using the result of part (a). Manipulate the SDE to form

                             d(B (t; T )V (t; T ))
                                                   = [ r(t)dt + (rt ; t)dWt ]
                              B (t; T )V (t; T )

The solution to this SDE parallels earlier results for the stock price.


                                dS (t)
                                       = r(t)dt + (t)dW (t)
                                S (t)
                                          Rt       Rt
                                                              1 Rt 2
                               ) S (t) = e 0 rs ds+ 0 (s)dWs 2 0  (s)ds

In the context of this question, the solution to the SDE is

                                                             RT       RT                       RT             
           B (T; T )V (T; T ) = B (t; T )V (t; T )e            t rs ds+ t (rs ;s)dWs         21 t 2 (rs ;s)ds


The left hand side terms V (T; T ) and B (T; T ) both equal one by de nition. Taking the exponential
terms on the right hand side over to the left hand side results in

                        RT       RT                     RT
                    e    t rs ds+ t (rs ;s)dWs       21 t 2 (rs ;s)ds = B (t; T )V (t; T )


After taking expectations under measure P at time t, the right hand side becomes EtP [B (t; T )V (t; T )] =
B (t; T )EtP~ [1] = B (t; T ). The nal result is

                                              RT       RT                 RT                
                     B (t; T ) = EtP    e       t rs ds+ t (rs ;s)dWs   21 t 2 (rs ;s)ds




                                                 lxxxii
                                        CHAPTER 22




                                            Q           Q
1. (a) For independent random variables, E ( ni=1 Xi ) = ni=1 E (Xi ). Therefore
                                              T               !        T
                                              Y                        Y
                                          E        (zt + 1)        =         E (zt + 1)
                                              t=1                      t=1
                                                                       YT
                                                                   =         1
                                                                       t=1
                                                                   = 1:
         This is independent of T .
   (b) It is not clear when it is best to stop the game. If one uses expected reward as the criterion for
       optimal stopping, then it does not matter what the stopping rule is. All stopping rules yield the same
       expected reward. However, using the expected reward as the optimal stopping criterion implicitly
       assumes that one can play this many times over the long run. If one has only a single chance to play
       the game, another criterion may be in order.
   (c)
                                          Tk            !                  k              !
                                    2Tk Y                            2k    Y
                                  E          (z + 1)              =      E   (z + 1)
                                    Tk+1 t=1 t                      k + 1 t=1 t
                                                                     2k
                                                                  =      :
                                                                    k+1
         This follows since Tk is deterministic.
   (d) The expected reward is increasing in Tk . Thus, the expected reward is maximized as k ! 1.
   (e) Again, if one chooses the optimal stopping rule to maximize the expected reward, then the optimal
       rule would be to never stop. However, this by de nition is not a stopping rule, meaning an optimal
       stopping rule does not exist.


                                                    lxxxiii
2. (a) At time T + 1, assuming the reward is not already 0, one of 2 things can happen; either the reward
                                                T +2
       goes to 0, or the reward becomes (T +1)2
                                           (T +2) . Thus, conditional on WT = wT
                                                                                 

                                                           1 (T + 1)2T +2 1
                                E (WT +1 jWT = wt ) = 0  +              2
                                                           2      (T + 2)
                                                       (T + 1)2T +1
                                                     =              :
                                                          (T + 2)
   (b) This expected value is larger than WT . Thus, the player should never stop when only considering
       expected value.
    (c) For any given game, the game will end with probability one, P (zt = 1; t < 1) = 1. If a player
        decides to never stop, then the game will eventually end after a \tails". This leaves the player with
        no winnings.
   (d) As alluded to above, for any given game, the game will end with probability one. Thus, a paradox
       appears. If a player wants to maximize expected winnings, then the player should never stop.
       However, with certainty, this strategy leaves the player with nothing.
    (e) The criterion one uses to determine the stopping time is expected winnings. This criterion is suitable
        if one can play the game in nitely often. However, when one has a limited number of trials, a di erent
        stopping criterion may be desirable.
        The expected reward for stopping at time T is increasing in T because the reward grows larger and
        larger. However, the probability of such a reward is also being reduced. Thus, although the expected
        reward becomes larger as the stopping time increases, the probability of actually getting that reward
        diminishes.

3. Pricing an American call option requires checking each node of the tree to determine if the intrinsic value
   (immediate value if exercised) is greater than the value computed by waiting an additional time period.
                                       50 . Therefore, u equals ep = e:12 365
                                                                               p 50
    (a) Let  = 200    =  50 days  or                                               = 1:0454 and d equals
        1 = :9566. 4                   365
        u
                                                                50 ) :9566
                                                       1+(:06)( 365
   (b) The risk - neutral implied up probability is       1:0454 :9566 = :5814.
    (c) stock price tree:
                                      t=0      t=1       t=2     t=3      t=4
                                                                          119:44
                                                                 114:25
                                                        109:29            109:29
                                              104:54             104:54
                                       100                100              100
                                               95:66             95:66
                                                        91:50             91:50
                                                                 87:53
                                                                          83:72
   (d) call price tree:
        Intrinsic value (immediate exercise) simply subtracts the strike price of 100 from each node of the
        stock price tree if the stock price is above 100 at that node. Otherwise, the value at that node is set
        to zero.

                                                 lxxxiv
                                        t=0 t=1 t=2 t=3 t=4
                                                                        19:44
                                                                14:25
                                                        9:29            9:29
                                                4:54            4:54
                                          0              0               0
                                                 0               0
                                                         0               0
                                                                 0
                                                                         0

       Compare the intrinsic value with the usual procedure of discounting the call values starting from
       t = 4.


                                        t=0 t=1 t=2 t=3 t=4
                                                                        19:44
                                                                15:07
                                                        10:92           9:29
                                                7:58            5:36
                                        5:15            3:09              0
                                                1:78              0
                                                         0                0
                                                                  0
                                                                          0

       The nodes of the second tree have call values which are always higher than those produced by
       exercising the option before maturity. Therefore, one would never exercise the option before maturity
       and $5.15 is the price of the option. Since one does not exercise the option early, one can invoke the
       Black Scholes formula which generated a call price of $5.34. The binomial approximation with just
       4 steps performed reasonably well.

   (e) One would never exercise the option early as the value of waiting and discounting next period's
       expected value is higher at every possible node.



4. Early exercise with dividends. After a dividend, the stock value decreases. This may result in early
   exercise of an American option prior to a dividend payout. It is assumed that if an option were to be
   exercised at an intermediate node, the option would be exercised prior to any dividend being paid.


   (a) A 4% continuous dividend does not e ect the values of u and d but it does alter the implied
                                                     50 ) d
                                           1+(r Æ)( 365
       probability. In this case, p equals      u d         = :5197 which is lower than in problem 3 as the
       dividend decreases the probability that the stock increases next period. The stock price tree is
       identical but the expected value of the call option on the intermediate nodes changes as follows

                                                lxxxv
                                     t=0 t=1 t=2 t=3 t=4
                                                                          19:44
                                                                 14:45
                                                          9:73            9:29
                                                6:19             4:79
                                      3:80                2:47             0
                                                1:27              0
                                                           0               0
                                                                  0
                                                                    0
    The intrinsic value from the previous question has not changed since the stock price tree has not
    changed. By inspection, each node on the above tree is higher than the value of immediately
    exercising the option. Therefore, with this continuous dividend, one would still never exercise early.
    However, the dividend does reduce the value of the call option to $3.80. This value is close to the
    Black Scholes value (European option calculation valid as one exercises only at maturity) of $4.01.
(b) The stock pays 5% of its value at the third node. Here, the stock price tree at t = 3 and t = 4 does
    change to account for the dividend. Despite the dividend at the third node, the tree still recombines.
    For a given S , the up node next period has a value of 1Su:05 while the value at the bottom node next
    period is 1Sd
               :05 . Therefore, after an  up and down  movement    or a down and then up movement, the
                              Su       Sd      S
    stock price recombines, 1:05 d = 1:05 u = 1:05 . The values of u and d have not changed which allows
    new terminal values to be computed.
    stock price tree (after dividend at t = 3):
                                   t=0        t=1      t=2       t=3       t=4
                                                                           113:75
                                                                 108:81
                                                       109:29              104:08
                                              104:54             99:56
                                    100                   100               100
                                              95:66              91:10
                                                       91:50               87:15
                                                                 83:36
                                                                       79:74
    The intrinsic value of the option is almost identical to the option in problem 3 except at the terminal
    nodes. The values at t = 3 are identical since one would exercise just prior to the dividend being
    paid to avoid a decrease in the stock price. Therefore, the dividend would only reduce the intrinsic
    value of the option at t = 4.
                                     t=0 t=1 t=2 t=3 t=4
                                                                          13:75
                                                                 14:25
                                                          9:29            4:08
                                                4:54             4:54
                                          0                0               0
                                                  0               0
                                                           0               0
                                                                  0
                                                                           0

                                                 lxxxvi
   When one works backward at t = 3 to compute the value of waiting to exercise the option at t = 4,
   the values of
                                       13:75p + 4:08(1  p)
                                9:62 =              50      < 14:25
                                          1 + (:06) 365
   and
                                                   4:08p + 0(1 p)
                                          2:35 =               50 < 4:54
                                                    1 + (:06) 365
   are computed. The value of p is from problem 3 since continuous dividends are no longer being paid
   in this example. Both these values are less than their counterparts on the intrinsic value tree (14:25
   and 4:54). Thus, one would exercise early at t = 3 and not allow the dividend to reduce the stock
   price before exercising the option.
   call price tree (exercise at t = 3):

                                           t=0 t=1 t=2 t=3
                                                                       14:25
                                                            10:10
                                                     6:91              4:54
                                            4:61               2:62
                                                     1:51                0
                                                                0
                                                                         0

   Before t = 3, it is best not to exercise the option. The discounted expected value of the option is
   greater than the intrinsic value at each node prior to t = 3.

(c) Dividend of $5 paid at time t = 3. Now the tree no longer recombines. The value of a stock after an
    up and down movement no longer equals the value of the stock after a down and then up movement.
    There is path dependence since (Su 5)d =  6 (Sd 5)u. In fact, since 5d < 5u, the down and then
    up movement is always less then an up and then down movement.
   stock price tree (dividend at t = 3):

                                   t=0       t=1       t=2          t=3        t=4
                                                                              114:21
                                                                    109:25
                                                                              104:50
                                                      109:29                  104:06
                                            104:54                  99:54
                                                                               95:22
                                    100                  100                   94:78
                                             95:66                  90:66
                                                                               86:72
                                                       91:50                   86:28
                                                                    82:53
                                                                               78:94

   Only at t = 4 does the intrinsic value change when compared to part (b) since one could exercise
   the option at t = 3 prior to any dividend being paid.

                                               lxxxvii
                                         t=0 t=1                t=2          t=3 t=4
                                                                                          14:21
                                                                             14:25
                                                                                           4:50
                                                               109:29                      4:06
                                                    4:54                       4:54
                                                                                            0
                                              0                     0                       0
                                                         0                      0
                                                                                            0
                                                                    0                       0
                                                                                0
                                                                                            0
       As in part (b), the discounted expected value of the option at t = 3, assuming the option is exercised
       at t = 4, is less than the intrinsic value at both relevant nodes.

                                               14:21p + 4:50(1  p)
                                      10:06 =                50     < 14:25
                                                  1 + (:06) 365
                                                    4:06p 
                                        2:34 =            50 < 4:54
                                               1 + (:06) 365
       Therefore, exercise the option at t = 3 and then proceed to discount the expected call option values
       backwards in time. These values are greater than the intrinsic values presented above from t = 0 to
       t = 2 inclusive.
       call price tree (exercise at t = 3):
                                                  t=0 t=1 t=2 t=3
                                                                                    14:25
                                                                        10:10
                                                             6:91                   4:54
                                                  4:61                  2:62
                                                             1:51                     0
                                                                         0
                                                                                      0
       Therefore, despite di erent dividend policies, the options in parts (b) and (c) have the same value.
       This is explained by the fact that one would exercise prior to either dividend being paid at t = 3.
       The call values of $4.61 are less than $5.15 calculated in problem 3 since it was not optimal to
       exercise early in problem 3. The dividends forced the option holder to exercise one period earlier.
       In the absence of dividends, the option holder would have exercised only at maturity if the option
       was in-the-money.

5. This problem is solved using dynamic programming. Some modi cations are made to the original question.
   The process begins at t = 4 and nds the optimal instrument k4 . Then, it proceeds backwards in time to
    nd the optimal instruments k3 , k2 , and k1 . These values and the initial condition Y0 = 0 generate the
   values of Y1 ; : : : ; Y4 and the corresponding values of the objective function through time.
  At t = 4:

                                                     lxxxviii
                        maximize         2(k4 k3 )2 + 100(Y4)2 with respect to k4
                       subject to:       Y4 = :2k4 + :6Y3
is equivalent to maximizing
                                       2(k4    k3 )2 + 100(:2k4 + :6Y3 )2
or
                                        2(k4 k3 )2 + (2k4 + 6Y3 )2
with respect to k4 after substituting the Y4 constraint into the rst expression. However, this function,
for xed k3 and Y3 , is monotonically increasing in k4 . Therefore, the solution would be to choose k4 = 1.
Therefore, change the sign of the rst term to 2(k4 k3 )2 . This functional form penalizes the policy
maker for choosing an instrument path with a high degree of variability. In a nancial context, a form of
\transaction costs" are imposed as a smooth instrument path is desired. However, even this modi cation
is not suÆcient since
                                        2(k4 k3 )2 + (2k4 + 6Y3 )2
has 2k42 as a leading term. Therefore, the function is still monotonically increasing in k4 . Alter the
objective function once more to

                                                   4
                                                   X
                                maximize                    2(kt   kt 1 )2 + 10(Yt )2
                                                   t=1
                              subject to:          Yt = :2kt + :6Yt 1
In this formulation, less weight is given to the target variable Yt which contains k4 . Investing an in nite
amount in the instrument is no longer optimal.
(a) At t = 4:

                          maximize              2(k4 k3 )2 + 10(Y4 )2 with respect to k4
                         subject to:          Y4 = :2k4 + :6Y3
     or
     At t = 4:

                     maximize           2(k4       k3 )2 + 10(:2k4 + :6Y3 )2 with respect to k4
     Taking the partial derivative with respect to k4 and setting the result to zero yields
                                            4(k4    k3 ) + 4(:2k4 + :6Y3 ) = 0
     Therefore
                                                      k + :6Y3
                                               k4 = 3
                                                         :8
     Taking the second derivative ensures that a maximum has been found
                                                                
                             @ 2 2(k4 k3 )2 + 10(:2k4 + :6Y3 )2      32
                                                    2             =     <0
                                             (@k4 )                  10
(b) see \Instrument" entry in table below


                                                   lxxxix
(c) see \Instrument" entry in table below
(d) see \Value" entry in table below
    Continuing this procedure from t = 3 to t = 1 reveals that kt = kt 1 +:8:6Yt 1 . Therefore, in addition
    to Y0 = 0, the initial value k0 is needed. Let k0 = 1. These values imply that k1 and hence Y1 can
    be solved as k1 = 1:25 and Y1 = :2(1:25) + :6(0) = :25. Thus, the value function at t = 1 equals
      2(:25)2 + 10(:25)2 = :5. Moving forward in time, the following table summarizes the results

                                                      Time       Instrument             Target     Value
                                                        0            1.00                  0     not de ned
                                                        1            1.25                 .25        .50
                                                        2            1.75                 .50       2.00
                                                        3            2.56                 .81       5.28
                                                        4            3.81                1.25       12.50

(e) Plot of the value function.
                                                                  Value Function over Time
                                    14




                                    12




                                    10
                   Value Function




                                     8




                                     6




                                     4




                                     2




                                     0
                                         1      1.5          2              2.5              3    3.5     4
                                                                           Time



                 FIGURE                      0.16     Value Function over Time with Optimal Instruments

    Both the instrument and the target variable increase in a steady manner over time. The instrument
    does not increase rapidly as a penalty is imposed on the value function to prevent a trivial solution.
    Overall, the value function increases along with the instrument and target variable.




                                                                         xc


