---
normalized_id: shared-pdf-reference-ismt12-c09-a
exam_code: SHARED
material_scope: thomas_ calculus 12th
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Thomas_ Calculus 12th/SolutionSingle/ISMT12_C09_A.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-ismt12-c09-a

      CHAPTER 9 FIRST-ORDER DIFFERENTIAL EQUATIONS

9.1 SOLUTIONS, SLOPE FIELDS AND EULER'S METHOD

1. y w œ x  y Ê slope of 0 for the line y œ x.
   For x, y  0, y w œ x  y Ê slope  0 in Quadrant I.
   For x, y  0, y w œ x  y Ê slope  0 in Quadrant III.
   For kyk  kxk, y  0, x  0, y w œ x  y Ê slope  0 in
   Quadrant II above y œ x.
   For kyk  kxk, y  0, x  0, y w œ x  y Ê slope  0 in
   Quadrant II below y œ x.
   For kyk  kxk, x  0, y  0, y w œ x  y Ê slope  0 in
   Quadrant IV above y œ x.
   For kyk  kxk, x  0, y  0, y w œ x  y Ê slope  0 in
   Quadrant IV below y œ x.
   All of the conditions are seen in slope field (d).

2. y w œ y  1 Ê slope is constant for a given value of y, slope
   is 0 for y œ 1, slope is positive for y  1 and negative for
   y  1. These characteristics are evident in slope field (c).




3. y w œ  xy Ê slope œ 1 on y œ x and 1 on y œ x.
    y w œ  xy Ê slope œ 0 on the y-axis, excluding a0, 0b,
    and is undefined on the x-axis. Slopes are positive for
    x  0, y  0 and x  0, y  0 (Quadrants II and IV),
    otherwise negative. Field (a) is consistent with these
    conditions.




4. y w œ y2  x2 Ê slope is 0 for y œ x and for y œ x.
   For kyk  kxk slope is positive and for kyk  kxk slope is
   negative. Field (b) has these characteristics.




                         Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
538       Chapter 9 First-Order Differential Equations

5.                                                               6.




7. y œ 1  '1 at  yatbbdt Ê dy                        '
                    x                                                 1
                              dx œ x  yaxb; ya1b œ 1  1 at  yatbbdt œ 1; dx œ x  y, ya1b œ 1
                                                                              dy




8. y œ '1 1t dt Ê dy             ' 1
            x                                1
                  dx œ x ; ya1b œ 1 t dt œ 0; dx œ x , ya1b œ 0
                       1                      dy   1




9. y œ 2  '0 a1  yatbbsin t dt Ê dy                               '
                x                                                           0
                                   dx œ a1  yaxbbsin x; ya0b œ 2  0 a1  yatbbsin t dt œ 2; dx œ a1  ybsin x,
                                                                                               dy


     ya0b œ 2


10. y œ 1  '0 yatb dt Ê dy                   '
                x                                            0
                         dx œ yaxb; ya0b œ 1  0 yatb dt œ 1; dx œ y, ya0b œ 1
                                                              dy




11. y" œ y!  Š1  yx!! ‹ dx œ 1  ˆ1  #1 ‰ (.5) œ 0.25,

     y# œ y"  Š1  yx"" ‹ dx œ 0.25  ˆ1  2.5
                                              0.25 ‰
                                                     (.5) œ 0.3,

     y$ œ y#  Š1  yx## ‹ dx œ 0.3  ˆ1  0.3
                                            3 (.5) œ 0.75;
                                               ‰
      dy  ˆ"‰
      dx  x y œ 1      Ê P(x) œ x" , Q(x) œ 1 Ê ' P(x) dx œ ' x" dx œ ln kxk œ ln x, x  0 Ê v(x) œ eln x œ x
      Ê y œ x" ' x † 1 dx œ x" Š x#  C‹ ; x œ 2, y œ 1 Ê 1 œ 1  C2 Ê C œ 4 Ê y œ x#  x4
                                     #



      Ê y(3.5) œ 3.5
                  #  3.5 œ 7 ¸ 0.6071
                       4   4.25



12. y" œ y!  x! (1  y! ) dx œ 0  1(1  0)(.2) œ .2,
    y# œ y"  x" (1  y" ) dx œ .2  1.2(1  .2)(.2) œ .392,
    y$ œ y#  x# (1  y# ) dx œ .392  1.4(1  .392)(.2) œ .5622;
                                         #                                                                       #
      1y œ x dx
       dy
                    Ê  ln k1  yk œ x#  C; x œ 1, y œ 0 Ê  ln 1 œ #"  C Ê C œ  #" Ê ln k1  yk œ  x#  #"
                          #
      Ê y œ 1  ea1x bÎ2 Ê y(1.6) ¸ .5416

13. y" œ y!  (2x! y!  2y! ) dx œ 3  [2(0)(3)  2(3)](.2) œ 4.2,
    y# œ y"  (2x" y"  2y" ) dx œ 4.2  [2(.2)(4.2)  2(4.2)](.2) œ 6.216,
    y$ œ y#  (2x# y#  2y# ) dx œ 6.216  [2(.4)(6.216)  2(6.216)](.2) œ 9.6969;
                                                            #
      dx œ 2y(x  1)    Ê dy
                          y œ 2(x  1) dx Ê ln kyk œ (x  1)  C; x œ 0, y œ 3 Ê ln 3 œ 1  C Ê C œ ln 3  1
      dy


      Ê ln y œ (x  1)#  ln 3  1 Ê y œ eÐx1Ñ ln 31 œ eln 3 ex 2x œ 3exÐx2Ñ Ê y(.6) ¸ 14.2765
                                                         #            #




14. y" œ y!  y#! (1  2x! ) dx œ 1  1# [1  2(1)](.5) œ .5,
    y# œ y"  y#" (1  2x" ) dx œ .5  (.5)# [1  2(.5)](.5) œ .5,
    y$ œ y#  y## (1  2x# ) dx œ .5  (.5)# [1  2(0)](.5) œ .625;
      y# œ (1  2x) dx
      dy
                          Ê  y" œ x  x#  C; x œ 1, y œ 1 Ê 1 œ 1  (1)#  C Ê C œ 1 Ê "y œ 1  x  x#
       Ê y œ 1  x" x#   Ê y(.5) œ 1  .5" (.5)# œ 4


                              Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
                                                                         Section 9.1 Solutins, Slope Fields and Euler's Method          539
                        #
15. y" œ y!  2x! ex! dx œ 2  2(0)(.1) œ 2,
                    #                   #
    y# œ y"  2x" ex" dx œ 2  2(.1) eÞ1 (.1) œ 2.0202,
                    #                         #
    y$ œ y#  2x# ex# dx œ 2.0202  2(.2) eÞ2 (.1) œ 2.0618,
             #               #                                      #                 #
    dy œ 2xex dx Ê y œ ex  C; y(0) œ 2 Ê 2 œ 1  C Ê C œ 1 Ê y œ ex  1 Ê y(.3) œ eÞ3  1 ¸ 2.0942

16. y" œ y!  ay! ex! b dx œ 2  a2 † e0 b (.5) œ 3,
    y2 œ y1  ay1 ex1 b dx œ 3  a3 † e0.5 b (.5) œ 5.47308,
    y3 œ y2  ay2 ex2 b dx œ 5.47308  a5.47308 † e1.0 b (.5) œ 12.9118,
     dx œ y e      Ê dy
                     y œ e dx Ê lnlyl œ e  C; x œ 0, y œ 2 Ê ln 2 œ 1  C Ê C œ ln 2  1 Ê lnlyl œ e  ln 2  1
     dy      x            x              x                                                           x


     Ê y œ 2ee  " Ê ya1.5b œ 2ee                       "
                    x                             1.5
                                                             ¸ 65.0292

17. y" œ 1  1(.2) œ 1.2,
    y# œ 1.2  (1.2)(.2) œ 1.44,
    y$ œ 1.44  (1.44)(.2) œ 1.728,
    y% œ 1.728  (1.728)(.2) œ 2.0736,
    y& œ 2.0736  (2.0736)(.2) œ 2.48832;
     y œ dx
     dy
                  Ê ln y œ x  C" Ê y œ Cex ; y(0) œ 1 Ê 1 œ Ce! Ê C œ 1 Ê y œ ex Ê y(1) œ e ¸ 2.7183


18. y" œ 2  ˆ 21 ‰ (.2) œ 2.4,
    y# œ 2.4  ˆ 2.4
                   1.2 (.2) œ 2.8,
                      ‰
    y$ œ 2.8  ˆ 2.8
                 1.4 (.2) œ 3.2,
                     ‰
    y% œ 3.2  ˆ 1.6 ‰ (.2) œ 3.6,
                 3.2

    y& œ 3.6  ˆ 3.6
                 1.8 (.2) œ 4;
                     ‰

     y œ x        Ê ln y œ ln x  C Ê y œ kx; y(1) œ 2 Ê 2 œ k Ê y œ 2x Ê y(2) œ 4
     dy  dx



                            #
19. y" œ 1  ’ (È1) “ (.5) œ .5,
                        1
                                #
                  .5)
    y# œ .5  ’ (È 1.5
                        “ (.5) œ .39794,
                                              #
    y$ œ .39794  ’ (.39794)
                        È      “ (.5) œ .34195,
                                          2
                               #
    y% œ .34195  ’ (.34195)
                       È2.5 “ (.5) œ .30497,

    y& œ .27812, y' œ .25745, y( œ .24088, y) œ .2272;
                   "                                                                                   "
    y# œ È Ê  y œ 2 x  C; y(1) œ 1 Ê 1 œ 2  C Ê C œ 1 Ê y œ
    dy   dx
              x
                        È
                                                                                                   1  #È x
                                                                                                               Ê y(5) œ 1  "#È5 ¸ .2880


20. y" œ 1  a0 † sin 1b ˆ "3 ‰ œ 1,
    y# œ 1  ˆ "3 † sin 1‰ ˆ 3" ‰ œ 1.09350,
    y$ œ 1.09350  ˆ 23 † sin 1.09350‰ ˆ 3" ‰ œ 1.29089,
    y% œ 1.29089  ˆ 33 † sin 1.29089‰ ˆ 3" ‰ œ 1.61125,
    y& œ 1.61125  ˆ 43 † sin 1.61125‰ ˆ 3" ‰ œ 2.05533,
    y' œ 2.05533  ˆ 53 † sin 2.05533‰ ˆ 3" ‰ œ 2.54694;
    y w œ x sin y Ê csc y dy œ x dx Ê lnlcsc y  cot yl œ 12 x2  C Ê csc y  cot y œ e 2 x C œ Ce 2 x
                                                                                                         1 2              1 2



     Ê 1 sincos     2 x2
                           Ê cotˆ 2y ‰ œ Ce 2 x ; ya0b œ 1 Ê cotˆ 21 ‰ œ Ce0 œ C Ê cotˆ 2y ‰ œ cotˆ 21 ‰e 2 x
                                    1           2             1                                                 2     1
              y œ Ce
                 y


     Ê y œ 2 cot1 Šcotˆ 12 ‰e 2 x ‹, ya2b œ 2 cot1 ˆcotˆ 12 ‰e2 ‰ œ 2.65591
                                   2          1




                                        Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
540       Chapter 9 First-Order Differential Equations

21. y œ 1  x  a1  x0  y0 bex  x0 Ê yax0 b œ 1  x0  a1  x0  y0 bex0  x0 œ 1  x0  a1  x0  y0 ba1b œ y0
                               x  x0
      dx œ 1  a1  x0  y0 be
      dy
                                      Ê y œ 1  x  a1  x0  y0 bex  x0 œ dy
                                                                             dx  x Ê dx œ x  y
                                                                                      dy




22. y w œ faxb, yax0 b œ y0 Ê y œ 'x fatbdt  C, yax0 b œ 'x fatbdt  C œ C Ê C œ y0 Ê y œ 'x fatbdt  y0
                                    x                      x0                                   x
                                    0                      0                                       0




23-34. Example CAS commands:
    Maple:
        ode := diff( y(x), x ) = y(x);
        icA := [0, 1];
        icB := [0, 2];
        icC := [0,-1];
        DEplot( ode, y(x), x=0..2, [icA,icB,icC], arrows=slim, linecolor=blue, title="#23 (Section 9.1)" );
    Mathematica:
    To plot vector fields, you must begin by loading a graphics package.
        <<Graphics`PlotField`
    To control lengths and appearance of vectors, select the Help browser, type PlotVectorField and select Go.
        Clear[x, y, f]
        yprime = y (2  y);
        pv = PlotVectorField[{1, yprime}, {x, 5, 5}, {y, 4, 6}, Axes Ä True, AxesLabel Ä {x, y}];
    To draw solution curves with Mathematica, you must first solve the differential equation. This will be done with
    the DSolve command. The y[x] and x at the end of the command specify the dependent and independent variables.
    The command will not work unless the y in the differential equation is referenced as y[x].
        equation = y'[x] == y[x] (2  y[x]) ;
        initcond = y[a] == b;
        sols = DSolve[{equation, initcond}, y[x], x]
        vals = {{0, 1/2}, {0, 3/2}, {0, 2}, {0, 3}}
        f[{a_, b_}] = sols[[1, 1, 2]];
        solnset = Map[f, vals]
        ps = Plot[Evaluate[solnset, {x, 5, 5}];
        Show[pv, ps, PlotRange Ä {4, 6}];
    The code for problems such as 31 & 32 is similar for the direction field, but the analytical solutions involve
    complicated inverse functions, so the numerical solver NDSolve is used. Note that a domain interval is
    specified.
        equation = y'[x] == Cos[2x  y[x]] ;
        initcond = y[0] == 2;
        sol = NDSolve[{equation, initcond}, y[x], {x, 0, 5}]
        ps = Plot[Evaluate[y[x]/.sol, {x, 0, 5}];
        N[y[x] /. sol/.x Ä 2]
        Show[pv, ps, PlotRange Ä {0, 5}];
    Solutions for 34 can be found one at a time and plots named and shown together. No direction fields here.
    For 34, the direction field code is similar, but the solution is found implicitly using integrations. The plot
    requires loading another special graphics package.
        <<Graphics`ImplicitPlot`
        Clear[x,y]
        solution[c_] = Integrate[2 (y  1), y] == Integrate[3x2  4x  2, x]  c
        values = {6, 4, 2, 0, 2, 4, 6};
        solns = Map[solution, values];
        ps = ImplicitPlot[solns, {x, 3, 3}, {y, 3, 3}]
        Show[pv, ps]
                         Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
                                                     Section 9.1 Solutins, Slope Fields and Euler's Method   541

23.                                                          24.




25.                                                          26.




27.                                                          28.




    dx œ 2xe , ya0b œ 2 Ê yn1 œ yn  2xn e dx œ yn  2xn e a0.1b œ yn  0.2xn e
35. dy      x   2
                                           xn  2
                                                           xn      2            xn  2



      On a TI-84 calculator home screen, type the following commands:
      2 STO > y: 0 STO > x: y (enter)
      y  0.2*x*e^(x^2) STO > y: x  0.1 STO > x: y (enter, 10 times)
      The last value displayed gives yEuler a1b ¸ 3.45835
      The exact solution: dy œ 2xex dx Ê y œ ex  C; ya0b œ 2 œ e0  C Ê C œ 1 Ê y œ 1  ex
                                     2              2                                       2



       Ê yexact a1b œ 1  e ¸ 3.71828


    dx œ 2y ax  1b, ya2b œ  2 Ê yn1 œ yn  2yn axn  1bdx œ yn  0.2 yn axn  1b
36. dy     2                  1                 2                        2

      On a TI-84 calculator home screen, type the following commands:
      0.5 STO > y: 2 STO > x: y (enter)
      y  0.2*y2 ax  1b STO > y: x  0.1 STO > x: y (enter, 10 times)
      The last value displayed gives yEuler a2b ¸ 0.19285
                          dx œ 2y ax  1b Ê y2 œ a2x  2bdx Ê  y œ x  2x  C Ê y œ x  2x  C
      The exact solution: dy     2          dy                  1    2           1     2


      ya2b œ  12 Ê 11Î2 œ a2b2  2a2b  C œ C Ê C œ 2 Ê 1y œ x2  2x  2 Ê y œ x2 12x  2
      ya3b œ a3b2 12a3b  2 œ 0.2




                           Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
542       Chapter 9 First-Order Differential Equations
               Èx                               È xn         È xn                È xn
    dx œ
37. dy         y , y  0ß ya0b œ " Ê yn1 œ yn  yn dx œ yn  yn a0.1b œ yn  0." yn
      On a TI-84 calculator home screen, type the following commands:
      1 STO > y: 0 STO > x: y (enter)
      y  0.1*(Èx /y) STO > y: x  0.1 STO > x: y (enter, 10 times)
      The last value displayed gives yEuler a1b ¸ 1.5000
                                 Èx                                             2
                                               Èx dx Ê y2 œ 32 x3/2  C; aya20bb œ 12 œ 12 œ 23 a0b3/2  C Ê C œ 12
                                                         2                           2
      The exact solution: dy œ   y dx Ê y dy œ
           2
      Ê y2 œ 23 x3/2  12 Ê y œ É 43 x3/2  1 Ê yexact a"b œ É 43 a1b3/2  1 ¸ 1.5275


    dx œ 1  y , ya0b œ 0 Ê yn1 œ yn  a1  yn bdx œ yn  a1  yn ba0.1b œ yn  0.1a1  yn b
38. dy        2                               2                  2                        2

      On a TI-84 calculator home screen, type the following commands:
      0 STO > y: 0 STO > x: y (enter)
      y  0.1*(1  y2 ) STO > y: x  0.1 STO > x: y (enter, 10 times)
      The last value displayed gives yEuler a1b ¸ 1.3964
      The exact solution: dy œ a1  y2 bdx Ê 1 dyy2 œ dx Ê tan1 y œ x  C; tan1 ya0b œ tan1 0 œ 0 œ 0  C Ê C œ 0
      Ê tan1 y œ x Ê y œ tan x Ê yexact a"b œ tan 1 ¸ 1.5574

39.      Example CAS commands:
      Maple:
         ode := diff( y(x), x ) = x + y(x);ic := y(0)=-7/10;
         x0 := -4;x1 := 4;y0 := -4; y1 := 4;
         b := 1;
         P1 := DEplot( ode, y(x), x=x0..x1, y=y0..y1, arrows=thin, title="#39(a) (Section 9.1)" ):
         P1;
         Ygen := unapply( rhs(dsolve( ode, y(x) )), x,_C1 );                                       # (b)
         P2 := seq( plot( Ygen(x,c), x=x0..x1, y=y0..y1, color=blue ), c=-2..2 ):                   # (c)
         display( [P1,P2], title="#39(c) (Section 9.1)" );
         CC := solve( Ygen(0,C)=rhs(ic), C );                                                        # (d)
         Ypart := Ygen(x,CC);
         P3 := plot( Ypart, x=0..b, title="#39(d) (Section 9.1)" ):
         P3;
         euler4 := dsolve( {ode,ic}, numeric, method=classical[foreuler], stepsize=(x1-x0)/4 ): # (e)
         P4 := odeplot( euler4, [x,y(x)], x=0..b, numpoints=4, color=blue ):
         display( [P3,P4], title="#39(e) (Section 9.1)" );
         euler8 := dsolve( {ode,ic}, numeric, method=classical[foreuler], stepsize=(x1-x0)/8 ): # (f)
         P5 := odeplot( euler8, [x,y(x)], x=0..b, numpoints=8, color=green ):
         euler16 := dsolve( {ode,ic}, numeric, method=classical[foreuler], stepsize=(x1-x0)/16 ):
         P6 := odeplot( euler16, [x,y(x)], x=0..b, numpoints=16, color=pink ):
         euler32 := dsolve( {ode,ic}, numeric, method=classical[foreuler], stepsize=(x1-x0)/32 ):
         P7 := odeplot( euler32, [x,y(x)], x=0..b, numpoints=32, color=cyan ):
         display( [P3,P4,P5,P6,P7], title="#39(f) (Section 9.1)" );
         << N|h          | `percent error` >,                                                          # (g)
          < 4 | (x1-x0)/ 4 | evalf[5]( abs(1-eval(y(x),euler4(b))/eval(Ypart,x=b))*100 ) >,
          < 8 | (x1-x0)/ 8 | evalf[5]( abs(1-eval(y(x),euler8(b))/eval(Ypart,x=b))*100 ) >,
          < 16 | (x1-x0)/16 | evalf[5]( abs(1-eval(y(x),euler16(b))/eval(Ypart,x=b))*100 ) >,
          < 32 | (x1-x0)/32 | evalf[5]( abs(1-eval(y(x),euler32(b))/eval(Ypart,x=b))*100 ) > >;




                            Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
                                                                   Section 9.2 First-Order Linear Differential Equations   543

39-42. Example CAS commands:
    Mathematica: (assigned functions, step sizes, and values for initial conditions may vary)
    Problems 39 - 42 involve use of code from Problems 23 - 34 together with the above code for Euler's method.

9.2 FIRST-ORDER LINEAR DIFFERENTIAL EQUATIONS

                      ˆ"‰               "x                             x
     dx  y œ e Ê dx  x y œ x , P(x) œ x , Q(x) œ x
1. x dy        x  dy         e                     e

     ' P(x) dx œ ' "x dx œ ln kxk œ ln x, x  0 Ê v(x) œ e' PÐxÑ dx œ eln x œ x
          " '
               v(x) Q(x) dx œ "x ' x ˆ ex ‰ dx œ "x aex  Cb œ e 
                                                                           x
     y œ v(x)                                                    x ,x0
                                             x
                                                                   C



                                 x                    x
      dx  2e y œ 1 Ê dx  2y œ e , P(x) œ 2, Q(x) œ e
2. ex dy     x        dy


     ' P(x) dx œ ' 2 dx œ 2x Ê v(x) œ e' PÐxÑ dx œ e2x
     y œ e" ' e2x † ecx dx œ e" ' ex dx œ e" aex  Cb œ ecx  Cec2x
           2x                   2x               2x




3. xyw  3y œ sinx# x , x  0 Ê dy
                                dx  x y œ x$ , P(x) œ x , Q(x) œ x$
                                    ˆ3‰    sin x       3          sin x

     ' 3x dx œ 3 ln kxk œ ln x$ , x  0 Ê v(x) œ eln x œ x$    $




     y œ x" ' x$ ˆ sinx x ‰ dx œ x" ' sin x dx œ x" ( cos x  C) œ Cxcos x , x  0
           $         $           $                    $                        $




4. yw  (tan x) y œ cos# x,  1#  x  1# Ê dy                  #                           #
                                            dx  (tan x) y œ cos x, P(x) œ tan x, Q(x) œ cos x
     ' tan x dx œ ' cos                                    "   1         1
                           x dx œ  ln kcos xk œ ln (cos x) ,  #  x  # Ê v(x) œ e
                       sin x                                                           ln Ðcos xÑ "
                                                                                                    œ (cos x)"
     y œ (cos"x) " ' (cos x)" † cos# x dx œ (cos x)' cos x dx œ (cos x)(sin x  C) œ sin x cos x  C cos x

                   "                      "   "                      "   "
     dx  2y œ 1  x , x  0 Ê dx  x y œ x  x# , P(x) œ x , Q(x) œ x  x#
5. x dy                        dy  ˆ2‰                    2

     ' 2x dx œ 2 ln kxk œ ln x# , x  0 Ê v(x) œ eln x œ x#    #




     y œ x" ' x# ˆ x"  x" ‰ dx œ x" ' (x  1) dx œ x" Š x#  x  C‹ œ #"  x"  xC , x  0
                                                                   #
           #             #           #                     #                             #




                                                      Èx                           Èx
6. (1  x) yw  y œ Èx Ê dy  ˆ " ‰                       "
                         dx  1  x y œ 1  x , P(x) œ 1  x , Q(x) œ 1  x
     ' 1 " x dx œ ln (1  x), since x  0 Ê v(x) œ eln Ð1 xÑ œ 1
     y œ 1 " x ' (1  x) Š 1  x ‹ dx œ 1 " x ' Èx dx œ ˆ 1 " x ‰ ˆ 32 x$Î#  C‰ œ 3(1
                             Èx                                                              $Î#
                                                                                           x)  1  x
                                                                                       2x          C




7.   dy   "     " xÎ2
     dx  # y œ # e      Ê P(x) œ  "# , Q(x) œ "# exÎ2 Ê ' P(x) dx œ  "# x Ê v(x) œ e xÎ2
     Ê y œ e "xÎ2 ' ecxÎ2 ˆ #" exÎ2 ‰ dx œ exÎ2 ' #" dx œ exÎ2 ˆ #" x  C‰ œ #" xexÎ2  CexÎ2


8.   dx  2y œ 2xe
     dy           c2x    Ê P(x) œ 2, Q(x) œ 2xec2x Ê ' P(x) dx œ ' 2 dx œ 2x Ê v(x) œ e2x
      Ê y œ e"2x ' e2x a2xec2x b dx œ e"2x ' 2x dx œ ec2x ax#  Cb œ x# ec2x  Cec2x


9.   dy  ˆ"‰
     dx  x y œ 2 ln x       Ê P(x) œ  x" , Q(x) œ 2 ln x Ê ' P(x) dx œ ' x" dx œ  ln x, x  0
      Ê v(x) œ ec ln x œ "x Ê y œ x' ˆ x" ‰ (2 ln x) dx œ x c(ln x)#  Cd œ x (ln x)#  Cx




                             Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
544       Chapter 9 First-Order Differential Equations

    dx  x y œ x# , x  0 Ê P(x) œ x , Q(x) œ x#
10. dy  ˆ2‰   cos x                2         cos x
                                                   Ê ' P(x) dx œ ' x2 dx œ 2 ln kxk œ ln x# , x  0
      Ê v(x) œ eln x œ x# Ê y œ x"# ' x# ˆ cos    dx œ x"# ' cos x dx œ x"# (sin x  C) œ sin xx# C
                        #                      x‰
                                            x#



11. ds               t1                              t1
    dt  t  1 s œ (t  1)$ Ê P(t) œ t  1 , Q(t) œ (t  1)$ Ê
        ˆ 4 ‰                          4                       ' P(t) dt œ ' t41 dt œ 4 ln kt  1k œ ln (t  1)%
      Ê v(t) œ eln Ðt1Ñ œ (t  1)% Ê s œ (t"1)% ' (t  1)% ’ (tt1)" $ “ dt œ (t "1)% ' at#  1b dt
                            %



                   $                          $
      œ (t "1)% Š t3  t  C‹ œ 3(t t 1)%  (t t 1)%  (t C1)%

                                     "                             "                                        $
12. (t  1) ds
            dt  2s œ 3(t  1)  (t  1)# Ê dt  t  1 s œ 3  (t  1)$ Ê P(t) œ t  1 , Q(t) œ 3  (t  1)
                                            ds  ˆ 2 ‰                              2


      Ê ' P(t) dt œ ' t 2 1 dt œ 2 ln kt  1k œ ln (t  1)# Ê v(t) œ eln Ðt1Ñ œ (t  1)#
                                                                                            #




      Ê s œ (t "1)# ' (t  1)# c3  (t  1)$ d dt œ (t "1)# ' c3(t  1)#  (t  1)" d dt
      œ (t "1)# c(t  1)$  ln kt  1k  Cd œ (t  1)  (t  1)# ln (t  1)  (t C1)# , t  1


    dr
13. d)  (cot )) r œ sec ) Ê P()) œ cot ), Q()) œ sec ) Ê ' P()) d) œ ' cot ) d) œ ln ksin )k Ê v()) œ eln sin )             k    k




      œ sin ) because 0  )  1# Ê r œ sin" ) ' (sin ))(sec )) d) œ sin" ) ' tan ) d) œ sin" ) aln ksec )k  Cb
      œ (csc )) aln ksec )k  Cb

                                                                 #
                                                  )
14. tan ) ddr)  r œ sin# ) Ê ddr)  tanr ) œ sin
                                              tan ) Ê d)  (cot )) r œ sin ) cos ) Ê P()) œ cot ), Q()) œ sin ) cos )
                                                      dr


      Ê ' P()) d) œ ' cot ) d) œ ln ksin )k œ ln (sin )) since 0  )  1# Ê v()) œ eln Ðsin )Ñ œ sin )
      Ê r œ sin" ) ' (sin )) (sin ) cos )) d) œ sin" ) ' sin# ) cos ) d) œ ˆ sin" ) ‰ Š sin3 )  C‹ œ sin3 )  sinC )
                                                                                                $                #




    dt  2y œ 3 Ê P(t) œ 2, Q(t) œ 3 Ê
15. dy                                       ' P(t) dt œ ' 2 dt œ 2t Ê v(t) œ e2t Ê y œ e"2t ' 3e2t dt
    œ e"2t ˆ 3# e2t  C‰ ; y(0) œ 1 Ê 3#  C œ 1 Ê C œ  "# Ê y œ 3#  "# ec2t


16. dy        #                     #
    dt  t œ t Ê P(t) œ t , Q(t) œ t Ê
         2y             2              ' P(t) dt œ 2 ln ktk Ê v(t) œ eln t œ t# Ê y œ t"# ' at# b at# b dt
                                                                                                #




      œ t"# ' t% dt œ t"# Š t5  C‹ œ t5  tC# ; y(2) œ 1 Ê 58  C4 œ 1 Ê C œ  12
                                &                  $                                                             $
                                                                                5 Ê y œ 5  5t#
                                                                                        t   12




17. dy  ˆ"‰   sin )
    d)  ) y œ )    Ê P()) œ ") , Q()) œ sin) ) Ê ' P()) d) œ ln k)k Ê v()) œ eln ) œ k)k              k k




      Ê y œ k")k ' k)k ˆ sin) ) ‰ d) œ ") ' ) ˆ sin) ) ‰ d) for ) Á 0 Ê y œ ") ' sin ) d) œ ") ( cos )  C)
      œ  ") cos )  C) ; y ˆ 1# ‰ œ 1 Ê C œ 1# Ê y œ  ") cos )  21)


18. dy          #                                   #
    d)  ) y œ ) sec ) tan ) Ê P()) œ  ) , Q()) œ ) sec ) tan ) Ê
        ˆ2‰                             2                          ' P()) d) œ 2 ln k)k Ê v()) œ ec2 ln )                       k k




      œ )# Ê y œ )" # ' a)# b a)# sec ) tan )b d) œ )# ' sec ) tan ) d) œ )# (sec )  C) œ )# sec )  C)# ;
                                     #                       #
    y ˆ 13 ‰ œ 2 Ê 2 œ Š 19 ‹ (2)  C Š 19 ‹ Ê C œ 18            #              ‰ #
                                                   1#  2 Ê y œ ) sec )  1#  2 )
                                                                         ˆ 18


                                                  x#
                                               x(x  1)                            x#                    x#
                     #
19. (x  1) dy
            dx  2 ax  xb y œ x  1 Ê dx  2 ’ x  1 “ y œ (x  1)# Ê dx  2xy œ (x  1)# Ê P(x) œ 2x,
                                e      dy                      e       dy            e


    Q(x) œ (x e 1)# Ê ' P(x) dx œ ' 2x dx œ x# Ê v(x) œ ex Ê y œ e "x# ' ex ’ (x e 1)# “ dx
                  x#                                                                    #                    #       x#



                                                                      x#
      œ ex ' (x " 1)# dx œ ex ’ (x 1)
           #                          #                "                      #
                                      1                     C“ œ  xe 1  Cex ; y(0) œ 5 Ê  0 1 1  C œ 5 Ê "  C œ 5
                                          #   x#
      Ê C œ 6 Ê y œ 6ex  xe 1

                                    Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
                                                               Section 9.2 First-Order Linear Differential Equations     545

    dx  xy œ x Ê P(x) œ x, Q(x) œ x Ê
20. dy                                 ' P(x) dx œ ' x dx œ x# Ê v(x) œ ex Î2 Ê y œ x"#Î2 ' ex Î2 † x dx
                                                                                  #            #                  #

                                                                                    e
                 #
     œ ex"#Î2 Šex Î2  C‹ œ 1  exC#Î2 ; y(0) œ 6 Ê 1  C œ 6 Ê C œ 7 Ê y œ 1  ex7#Î2


    dt  ky œ 0 Ê P(t) œ k, Q(t) œ 0 Ê
21. dy                                  ' P(t) dt œ ' k dt œ kt Ê v(t) œ ekt
     Ê y œ ec"kt ' ˆekt ‰ (0) dt œ ekt (0  C) œ Cekt ; y(0) œ y! Ê C œ y! Ê y œ y! ekt


22. (a)   dt  m u œ 0
          du   k
                           Ê P(t) œ mk , Q(t) œ 0 Ê ' P(t) dt œ ' mk dt œ mk t œ m
                                                                                 kt
                                                                                    Ê u(t) œ ektÎm
           Ê y œ ekt"Îm ' ektÎm † 0 dt œ ektCÎm ; u(0) œ u! Ê ekÐC0ÑÎm œ u! Ê C œ u! Ê u œ u! eÐkÎmÑt
                                                                         akÎmbtC
    (b)    dt œ  m u Ê u œ  m dt Ê ln u œ  m t  C Ê u œ e
          du      k         du      k                 k
                                                                                   Ê u œ eÐkÎmÑt † eC . Let eC œ C1 Þ
          Then u œ eÐk1ÎmÑt † C1 and ua0b œ u0 œ eÐkÎ1mÑa0b † C1 œ C1 . So u œ u0 eÐkÎmÑt


23. x ' "x dx œ x aln kxk  Cb œ x ln kxk  Cx Ê (b) is correct


24. cos" x ' cos x dx œ cos" x (sin x  C) œ tan x  cosC x Ê (b) is correct


25. Steady State œ VR and we want i œ "# ˆ VR ‰ Ê "# ˆ VR ‰ œ VR a1  eRtÎL b Ê "# œ 1  eRtÎL Ê  "# œ eRtÎL
     Ê ln "# œ  Rt         "
                 L Ê  R ln # œ t Ê t œ R ln 2 sec
                       L                L



                                                                    C" cRtÎL
26. (a)   dt  L i œ 0
          di   R
                         Ê "i di œ  RL dt Ê ln i œ  Rt
                                                      L  C" Ê i œ e e       œ CeRtÎL ; i(0) œ I Ê I œ C
           Ê i œ IeRtÎL amp
          "
    (b)   #I œ I e
                   RtÎL
                         Ê eRtÎL œ "# Ê  Rt         "
                                               L œ ln # œ  ln 2           Ê t œ RL ln 2 sec
    (c)   t œ RL Ê i œ I eÐRtÎLÑÐLÎRÑ œ I e t amp

27. (a) t œ 3L
            R Ê i œ R a1  e
                    V        ÐR/LÑÐ3LÎRÑ
                                          b œ VR a1  ec3 b ¸ 0.9502 VR amp, or about 95% of the steady state value
    (b) t œ 2L
            R Ê i œ R a1  e
                    V        ÐR/LÑÐ2LÎRÑ
                                          b œ VR a1  ec2 b ¸ 0.8647 VR amp, or about 86% of the steady state value


28. (a)   dt  L i œ L
          di   R     V
                          Ê P(t) œ RL , Q(t) œ VL Ê ' P(t) dt œ ' RL dt œ Rt
                                                                          L Ê v(t) œ e
                                                                                       RtÎL



          Ê i œ eRt"ÎL ' eRtÎL ˆ VL ‰ dt œ eRt"ÎL  RL eRtÎL ˆ VL ‰  C‘ œ VR  Ce ÐRÎLÑt
    (b) i(0) œ 0 Ê VR  C œ 0 Ê C œ  VR Ê i œ VR  VR ecRtÎL
    (c) i œ VR Ê di                      ˆ R ‰ ˆ VR ‰ œ VL Ê i œ VR is a solution of Eq. (11); i œ Ce ÐRÎLÑt
                  dt œ 0 Ê dt  L i œ 0  L
                            di  R



29. y w  y œ y2 ; we have n œ 2, so let u œ y12 œ y1 . Then y œ u1 and du
                                                                            dx œ 1y
                                                                                    2 dy
                                                                                       dx Ê dx œ y dx
                                                                                            dy     2 du

                                                        ' dx
     Ê u2 du dx  u
                      1
                         œ u2 Ê dudx  u œ 1. With e       œ ex as the integrating factor, we have
                                                                                                           ex
         dx  u œ dx ae ub œ e . Integrating, we get e u œ e  C Ê u œ 1  ex œ y Ê y œ
    ex ˆ du                                                                                          C œ ex  C
               ‰    d    x    x                       x       x                   C     1          1
                                                                                                     1  ex



30. y w  y œ xy2 ; we have n œ 2, so let u œ y1 . Then y œ u1 and du
                                                                     dx œ y
                                                                            2 dy
                                                                               dx Ê dx œ y dx œ u
                                                                                    dy     2 du     2 du
                                                                                                       dx .
                                                                            '
    Substituting:u2 du
                      dx  u
                             1
                                œ xu2 Ê du
                                         dx  u œ x. Using e
                                                              dx
                                                                 œ ex as an integrating factor:
                                                              e a1  x b  C      x
                                                                             Ê y œ u1 œ ex  xe
                                                                                                              x
         dx  u œ dx ae ub œ x e Ê e u œ e a1  xb  C Ê u œ
    ex ˆ du    ‰  d    x         x   x     x
                                                                    ex
                                                                                              e
                                                                                                 xC




31. xy w  y œ y2 Ê y w  ˆ 1x ‰y œ ˆ 1x ‰y2 . Let u œ y1a2b œ y3 Ê y œ u1/3 and y2 œ u2/3 .
                    w                     ‰ 2                ‰ˆ 2/3 ‰. Thus we have
    dx œ 3y dx Ê y œ dx œ 3            dx ay b œ 3
    du       2 dy        dy     ˆ 1 ‰ˆ du           ˆ 1 ‰ˆ du
                                                           dx u




                            Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
546         Chapter 9 First-Order Differential Equations

     ˆ 13 ‰ˆ du ‰ˆ 2/3 ‰  ˆ 1x ‰u1/3 œ ˆ 1x ‰u2/3 Ê du
             dx u                                      dx  x u œ x 1. The integrating factor, vaxb, is
                                                           ˆ3‰   ˆ3‰
      '3                             3
     e x dx œ e3ln x œ eln x œ x3 . Thus dx
                                         d
                                            ax3 ub œ ˆ 3x ‰x3 œ 3x2 Ê x3 u œ x3  C Ê u œ 1  xC3 œ y3
                               1/3
      Ê y œ ˆ1  xC3 ‰

32. x2 y w  2xy œ y3 Ê y w  ˆ 2x ‰y œ ˆ x12 ‰y3 . Paxb œ ˆ 2x ‰, Qaxb œ ˆ x12 ‰, n œ 3. Let u œ y13 œ y2 .
                       dx  a2b x u œ 2 x2 Ê dx 
    Substituting gives du          ˆ2‰          ˆ1‰       du     ˆ x4 ‰u œ x22 . Let the integrating factor, vaxb, be
           c4             c4
     e' a x bdx œ eln x        œ x4 . Thus dx
                                            d
                                               ax4 ub œ 2x6 Ê x4 u œ 25 x5  C Ê u œ 5x
                                                                                           2
                                                                                             Cx4 œ y2
                                 1/2
      Ê y œ ˆ 5x
              2
                 Cx4 ‰

9.3 APPLICATIONS

1. Note that the total mass is 66  7 œ 73 kg, therefore, v œ v0 eakÎmbt Ê v œ 9e3.9tÎ73
     (a) satb œ ' 9e3.9tÎ73 dt œ  2190
                                     13 e
                                         3.9tÎ73
                                                  C
                                                                      3.9tÎ73 ‰
            Since sa0b œ 0 we have C œ 2190
                                        13 and lim satb œ lim 13 1  e
                                                             2190 ˆ
                                                                                 œ 2190
                                                                                    13 ¸ 168.5
                                                         tÄ_      tÄ_
         The cyclist will coast about 168.5 meters.
     (b) 1 œ 9e3.9tÎ73 Ê 3.9t
                            73 œ ln 9 Ê t œ 3.9 ¸ 41.13 sec
                                             73 ln 9

            It will take about 41.13 seconds.

2. v œ v0 eakÎmbt Ê v œ 9ea59,000Î51,000,000bt Ê v œ 9e59tÎ51,000
     (a) satb œ ' 9e59tÎ51,000 dt œ  459,0000
                                          59    e59tÎ51,000  C
            Since sa0b œ 0 we have C œ 459,0000
                                          59    and lim satb œ lim 459,0000
                                                                      59
                                                                            ˆ1  e59tÎ51,000 ‰ œ 459,0000
                                                                                                     59    ¸ 7780 m
                                                           tÄ_       tÄ_
         The ship will coast about 7780 m, or 7.78 km.
     (b) 1 œ 9e59tÎ51,000 Ê 51,000
                               59t
                                    œ ln 9 Ê t œ 51,000
                                                     59
                                                        ln 9
                                                             ¸ 1899.3 sec
            It will take about 31.65 minutes.

3. The total distance traveled œ v0km Ê a2.75bak39.92b œ 4.91 Ê k œ 22.36. Therefore, the distance traveled is given by the
   function satb œ 4.91ˆ1  ea22.36/39.92bt ‰. The graph shows satb and the data points.




                                a0.80ba49.90b
      k œ coasting distance Ê                  œ 1.32 Ê k œ 998
     v0 m
4.                                    k                          33
     We know that v0km œ 1.32 and mk œ 33a998  49.9b œ 20
                                                       33 .
                                                      ak/mbt ‰
     Using Equation 3, we have: satb œ k 1  e
                                          v0 m ˆ
                                                                œ 1.32ˆ1  e20t/33 ‰ ¸ 1.32a1  e0.606t b




                                     Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
                                                                                    Section 9.3 Applications   547

5. y œ mx Ê yx œ m Ê xyx   œ 0 Ê y w œ yx . So for
                                 w
                          y
                        2
                                                        2   2
                dx œ  y Ê y dy œ x dx Ê 2  2 œ C
   orthogonals: dy     x                  y   x

    Ê x2  y2 œ C1




6. y œ cx2 Ê xy2 œ c Ê x y x4 2xy œ 0 Ê x2 y w œ 2xy
                             2       w




    Ê y w œ 2y
            x . So for the orthogonals: dx œ  2y
                                        dy     x

                                         2
    Ê 2ydy œ xdx Ê y2 œ  x2  C Ê y œ „ É x2  C,
                                                                2



   C0




7. kx2  y2 œ 1 Ê 1  y2 œ kx2 Ê 1 x2y œ k
                                                 2


        x2 a2yby  ˆ1  y2 ‰2x
              w

    Ê             x%
                                 œ 0 Ê 2yx2 y w œ a1  y2 ba2xb
                ˆ1  y2 ‰a2xb      ˆ1  y 2 ‰
    Ê y w œ 2xy2 œ xy . So for the orthogonals:
                      ˆ1  y 2 ‰                      2    2
    dx œ 1y2 Ê                  dy œ x dx Ê ln y  y2 œ x2  C
    dy       xy
                           y




8. 2x2  y2 œ c2 Ê 4x  2yy w œ 0 Ê y w œ  4x
                                            2y œ  y . For
                                                  2x

                                          "
                dx œ 2x Ê y œ 2x Ê ln y œ # ln x  C
   orthogonals: dy   y    dy  dx


    Ê ln y œ ln x1/2  ln C1 Ê y œ C1 kxk1/2




                                 e x y w c yae x bac1b
9. y œ cex Ê ecy x œ c Ê                              œ!
                                         ae x b2
    Ê ex y w œ yex Ê y w œ y. So for the orthogonals:
                         y2
    dx œ y Ê y dy œ dx Ê 2 œ x  C
    dy   1


    Ê y2 œ 2x  C1 Ê y œ „ È2x  C1




                          Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
548       Chapter 9 First-Order Differential Equations

                                                     xŠ 1y ‹y c ln y
                                                            w


10. y œ ekx Ê ln y œ kx Ê lnxy œ k Ê                       x2          œ0
      Ê Š xy ‹ y w  ln y œ 0 Ê y w œ y lnx y . So for the orthogonals:
            x
      dx œ y ln y Ê y ln y dy œ x dx
      dy


      Ê "# y2 ln y  14 ay2 b œ ˆ "# x2 ‰  C
                    2
      Ê y2 ln y  y2 œ x2  C1


11. 2x2  3y2 œ 5 and y2 œ x3 intersect at a1, 1b. Also, 2x2  3y2 œ 5 Ê 4x  6y y w œ 0 Ê y w œ  4x    w
                                                                                                   6y Ê y a1, 1b œ  3
                                                                                                                     2


    y21 œ x3 Ê 2y1 y1w œ 3x2 Ê y1w œ 3x     w                     w   w
                                                2
                                     2y1 Ê y1 a1, 1b œ 2 . Since y † y1 œ  3
                                                       3                 ˆ 2 ‰ˆ 32 ‰ œ 1, the curves are orthogonal.

                                   2        2
12. (a) x dx  y dy œ 0 Ê x2  y2 œ C is the general equation
          of the family with slope y w œ  xy . For the orthogonals:
          y w œ yx Ê dy
                     y œ x Ê ln y œ ln x  C or y œ C1 x
                         dx

          (where C1 œ eC Ñ is the general equation of the
          orthogonals.




    (b) x dy  2y dx œ 0 Ê 2y dx œ x dy Ê dy
                                          2y œ x
                                               dx


           Ê "# Š dy        "
                  y ‹ œ x Ê # ln y œ ln x  C Ê y œ C1 x is
                        dx                              2


          the equation for the solution family.
           "                   "y
                                            x1 œ 0 Ê y w œ 2y
                                       w


           # ln y  ln x œ C Ê # y                           x

           Ê slope of orthogonals is dy
                                     dx œ  2y
                                            x

                                                 2
           Ê 2y dy œ x dx Ê y2 œ  x2  C is the general
          equation of the orthogonals.




13. Let y(t) œ the amount of salt in the container and V(t) œ the total volume of liquid in the tank at time t.
                                y(t)
    Then, the departure rate is V(t) (the outflow rate).
    (a) Rate entering œ 2gallb † 5min
                                   gal
                                       œ 10 lb/min
    (b) Volume œ V(t) œ 100 gal  (5t gal  4t gal) œ (100  t) gal
    (c) The volume at time t is (100  t) gal. The amount of salt in the tank at time t is y lbs. So the
        concentration at any time t is 100y t lbs/gal. Then, the rate leaving œ 100y t (lbs/gal) † 4 (gal/min)
           œ 100
               4y
                 t lbs/min

    (d)    dt œ 10  100  t
           dy          4y
                               Ê dy
                                 dt  100  t y œ 10 Ê P(t) œ 100t , Q(t) œ 10 Ê
                                     ˆ 4 ‰                      4                 ' P(t) dt œ ' 1004 t dt
           œ 4 ln (100  t) Ê v(t) œ e4 ln Ð100 tÑ œ (100  t)% Ê y œ (100"t)% ' (100  t)% (10 dt)
                               &
           œ (10010 t)% Š (1005t)  C‹ œ 2(100  t)  (100C t)% ; y(0) œ 50 Ê 2(100  0)  (100C 0)% œ 50
                                                                            %
           Ê C œ (150)(100)% Ê y œ 2(100  t)  (150)(100)
                                                  (100  t)%
                                                             Ê y œ 2(100  t)  ˆ 150t ‰%
                                                                                             1  100



                            Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
                                                         Section 9.4 Graphical Solutions of Autonomous Equations                          549
                                              %
    (e) y(25) œ 2(100  25)  (150)(100)
                               (10025)%
                                         ¸ 188.56 lbs Ê concentration œ volume
                                                                         y(25)
                                                                               ¸ 188.6
                                                                                  125 ¸ 1.5 lb/gal



          dt œ a5  3b œ 2 Ê V œ 100  2t
          dV
14. (a)
        The tank is full when V œ 200 œ 100  2t Ê t œ 50 min
    (b) Let yatb be the amount of concentrate in the tank at time t.
                 " lb
          dt œ Š # gal ‹Š5 min ‹  Š 100  2t gal ‹Š3 min ‹ Ê dt œ 2  2 50  t Ê dt  2at  50b y œ 2
          dy               gal          y     lb      gal     dy   5   3ˆ y ‰     dy       3         5


          Q(t) œ 52 ; P(t) œ 32 ˆ 501 t ‰ Ê ' P(t) dt œ 32 ' t 150 dt œ 32 ln at  50b since t  50  0
                   '
          vatb œ e P(t) dt œ e 2 ln at50b œ at  50b3/2
                                3



          yatb œ at  50
                      1       ' 25 at  50b3/2 dt œ at  50b3/2  at  50b5/2  C ‘ Ê yatb œ t  50  C 3/2
                         b3/2                                                                         at  50b
          Apply the initial condition (i.e., distilled water in the tank at t œ 0):
                                                                                5/2
          ya0b œ 0 œ 50  50C3/2 Ê C œ 505/2 Ê yatb œ t  50  at 5050b3/2 . When the tank is full at t œ 50,
                              5/2
          ya50b œ 100  100
                        50
                            3/2 ¸ 83.22 pounds of concentrate.




15. Let y be the amount of fertilizer in the tank at time t. Then rate entering œ 1 gal
                                                                                    lb
                                                                                        † 1 min
                                                                                            gal
                                                                                                œ 1 min
                                                                                                    lb
                                                                                                        and the
    volume in the tank at time t is V(t) œ 100 (gal)  [1 (gal/min)  3 (gal/min)]t min œ (100  2t) gal. Hence
    rate out œ ˆ 100y 2t ‰ 3 œ 1003y2t lbs/min Ê dy
                                                   dt œ 1  100  2t lbs/min Ê dt  100  2t y œ 1
                                                       ˆ       3y ‰              dy   ˆ 3 ‰

     Ê P(t) œ 10032t , Q(t) œ 1 Ê ' P(t) dt œ ' 10032t dt œ 3 ln (100
                                                                    #
                                                                        2t)
                                                                             Ê v(t) œ eÐ 3 ln Ð100 2tÑÑ2
     œ (100  2t)$Î# Ê y œ (100 "2t)c$Î# ' (100  2t)$Î# dt œ (100  2t)$Î# ’ 2(100#
                                                                                          2t)         "Î#
                                                                                                              C“
     œ (100  2t)  C(100  2t)$Î# ; y(0) œ 0 Ê [100  2(0)]  C[100  2(0)]$Î# Ê C(100)$Î# œ 100
                                                                       $Î#                                    ˆ #3 ‰ (100  2t)"Î# (2)
                          "
     Ê C œ (100)"Î# œ  10 Ê y œ (100  2t)  (100 102t)                        dt œ 0 Ê dt œ 2 
                                                                             . Let dy       dy
                                                                                                                          10
                 È100  2t
     œ 2  3      10      œ0       Ê 20 œ 3È100  2t Ê 400 œ 9(100  2t) Ê 400 œ 900  18t Ê 500 œ 18t
     Ê t ¸ 27.8 min, the time to reach the maximum. The maximum amount is then
                                                   $Î#
    y(27.8) œ [100  2(27.8)]  [100  2(27.8)]
                                       10                ¸ 14.8 lb

16. Let y œ y(t) be the amount of carbon monoxide (CO) in the room at time t. The amount of CO entering the
               4
    room is ˆ 100 ‚ 10
                     3 ‰
                         œ 1000
                            12
                                ft$ /min, and the amount of CO leaving the room is ˆ 4500                $
                                                                                           10 œ 15,000 ft /min.
                                                                                       y ‰ˆ 3 ‰   y

                                      "                        "                             tÎ15ß000
          dt œ 1000  15,000 Ê dt  15,000 y œ 1000 Ê P(t) œ 15,000 , Q(t) œ 1000 Ê v(t) œ e
    Thus, dy    12      y      dy               12                            12


     Ê y œ etÎ15"ß000 ' 1000
                         12
                             etÎ15ß000 dt Ê y œ ectÎ15ß000 ˆ 12†1000
                                                                 15,000 tÎ15,000
                                                                       e          C‰ œ etÎ15ß000 a180etÎ15ß000  Cb ;
    y(0) œ 0 Ê 0 œ 1(180  C) Ê C œ 180 Ê y œ 180  180ectÎ15ß000 . When the concentration of CO is 0.01%
                                             y
    in the room, the amount of CO satisfies 4500 œ 100
                                                    .01
                                                          Ê y œ 0.45 ft$ . When the room contains this amount we
    have 0.45 œ 180  180e tÎ15ß000 Ê 179.55
                                         180 œ e
                                                  tÎ15ß000
                                                            Ê t œ 15,000 ln ˆ 179.55
                                                                                180
                                                                                      ‰ ¸ 37.55 min.


9.4 GRAPHICAL SOUTIONS OF AUTONOMOUS EQUATIONS

1. y w œ ay  2bay  3b
   (a) y œ 2 is a stable equilibrium value and y œ 3 is an unstable equilibrium.
   (b) yww œ a2y  1by w œ 2ay  2bˆy  12 ‰ay  3b




                            Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
550      Chapter 9 First-Order Differential Equations

   (c)




2. y w œ ay  2bay  2b
   (a) y œ 2 is a stable equilibrium value and y œ 2 is an unstable equilibrium.
   (b) yww œ 2yy w œ 2ay  2byay  2b




   (c)




3. y w œ y3  y œ ay  1byay  1b
   (a) y œ 1 and y œ 1 is an unstable equilibrium and y œ 0 is a stable equilibrium value.
   (b) yww œ a3y2  1by w œ 3ay  1bŠy  È13 ‹yŠy  È13 ‹ay  1b




   (c)




                        Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
                                              Section 9.4 Graphical Solutions of Autonomous Equations   551

4. y w œ yay  2b
   (a) y œ 0 is a stable equilibrium value and y œ 2 is an unstable equilibrium.
   (b) yww œ a2y  2by w œ 2yay  1bay  2b




   (c)




5. y w œ Èy, y  0
   (a) There are no equilibrium values.
   (b) yww œ 2È
              1    w
                y y œ 2È y
                        1
                           Èy œ "#




   (c)




6. y w œ y  Èy, y  0
   (a) y œ 1 is an unstable equilibrium.
   (b) yww œ Š1  2È
                   1      w
                     y ‹ y œ Š1  2Èy ‹ y 
                                   1   ˆ    Èy‰ œ ˆÈy  "# ‰ˆÈy  1‰




                         Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.
552      Chapter 9 First-Order Differential Equations

   (c)




7. y w œ ay  1bay  2bay  3b
   (a) y œ 1 and y œ 3 is an unstable equilibrium and y œ 2 is a stable equilibrium value.
                                                                          È                  È
   (b) yww œ a3y2  12y  11bay  1bay  2bay  3b œ 3ay  1bŠy  6 3 3 ‹ay  2bŠy  6 3 3 ‹ay  3b




   (c)




8. y w œ y3  y2 œ y2 ay  1b
   (a) y œ 0 and y œ 1 is an unstable equilibrium.
   (b) yww œ a3y2  2ybay3  y2 b œ y3 a3y  2bay  1b




   (c)




                        Copyright © 2010 Pearson Education, Inc. Publishing as Addison-Wesley.


