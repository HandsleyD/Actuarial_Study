---
normalized_id: shared-pdf-reference-finance-financial-analysis-using-excel
exam_code: SHARED
material_scope: finance - financial analysis using excel.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Finance - Financial Analysis Using Excel.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-finance-financial-analysis-using-excel

Financial
        Function
                    Information requirements for function
                                      Dates                                Prices and par values                                          Frequency,                             Yields and
                                                                                                                                          and related                        interest/ discount
                                                                                                                                                                                    rates




                                                                                          Any amount paid
Analysis using



                                                                                                                                      Frequency of
                                                                                                                         Redemption
                            First coupon




                                                                                                                                      payments pa
                                                                                                            Investment




                                                                                                                                                     # of periods
                                                                                            at maturity?
                                           Settlement




                                                                             Par/coupon
                                                        Maturity




                                                                                                                                                                                    Discount


                                                                                                                                                                                               Interest
                                                                                                              amount

                                                                                                                          amount




                                                                                                                                                                    Basis
                    Issue




                                                                                                                                                                            Yield
                                                                   Price
Excel
    COUPDAYBS                                9            9                                                                              9                           9
    COUPDAYS                                 9            9                                                                              9                           9
    COUPDAYSNC                               9            9                                                                              9                           9
    COUPNCD                                  9            9                                                                              9                           9
    COUPPCD                                  9            9                                                                              9                           9
    COUPNUM                                  9            9                                                                              9                           9
    DURATION                                 9            9                   9                                                          9                                     9
    MDURATION                                9            9                   9                                                          9                                     9
    PRICE                                    9            9                                  9                            9                                                    9                 9
    PRICEDISC                                9            9                                  9                            9                                          9                   9
                    9




    PRICEMAT                                 9            9                                  9                                                                                 9                 9
    RECEIVED                                 9            9                                                  9                                                       9                   9
    YIELD                                    9            9         9                        9               9                           9                           9                           9
    YIELDDISC                                9            9         9                        9               9                                                       9
                    999




    YIELDMAT                                 9            9         9                                                                                                9                           9
                            9




    ACCRINT                                  9                                9                                                          9                           9                           9
    ACCRINTM                                              9                   9                                                                                      9                           9
    INTRATE                                  9            9                                  9               9            9                                          9
    DISC                                     9            9         9                        9               9                                                       9




Excel for Professionals  2002 VJ Books. All rights reside with the author.
                               Financial Analysis using Excel




F
Fiin
   naan
      ncciiaall A
                Annaallyyssiiss u
                                ussiin
                                     ngg E
                                         Exxcceell

Volume 6 in the series E
                       Exxcceell ffoorr P
                                        Prrooffeessssiioon
                                                         naallss
        Volume 1: Excel For Beginners
        Volume 2: Charting in Excel
        Volume 3: Excel-- Beyond The Basics
        Volume 4: Managing & Tabulating Data in Excel
        Volume 5: Statistical Analysis with Excel
        Volume 6: Financial Analysis using Excel


Published by VJ Books Inc


All rights reserved. No part of this book may be used or reproduced in any form or by
any means, or stored in a database or retrieval system, without prior written
permission of the publisher except in the case of brief quotations embodied in
reviews, articles, and research papers. Making copies of any part of this book for any
purpose other than personal use is a violation of United States and international
copyright laws.


First year of printing: 2002


Date of this copy: Saturday, December 14, 2002


This book is sold as is, without warranty of any kind, either express or implied,
respecting the contents of this book, including but not limited to implied warranties
for the book's quality, performance, merchantability, or fitness for any particular
purpose. Neither the author, the publisher and its dealers, nor distributors shall be
liable to the purchaser or any other person or entity with respect to any liability, loss,
or damage caused or alleged to be caused directly or indirectly by the book.


This book is based on Excel versions 97 to XP. Excel, Microsoft Office, Microsoft
Word, and Microsoft Access are registered trademarks of Microsoft Corporation.


Publisher: VJ Books Inc, Canada


Author: Vijay Gupta




                                                                                             2
    To Dr “Chini” at the Business School Georgetown Universitry
                            and SEC.




             Thanks for the timely support and advice.




3
                           Financial Analysis using Excel




                 ABOUT THE AUTHOR
Vijay Gupta has taught statistic, econometrics, and finance to institutions in
the US and abroad, specializing in teaching technical material to
professionals.


He has organized and held training workshops in the Middle East, Africa,
India, and the US. The clients include government agencies, financial
regulatory bodies, non-profit and private sector companies.


A Georgetown University graduate with a Masters degree in economics, he
has a vision of making the tools of econometrics and statistics easily
accessible to professionals and graduate students. His books on SPSS and
Regression Analysis have received rave reviews for making statistics and
SPSS so easy and “non-mathematical.” The books are in use by over 150,000
users in more than 140 nations.


He is a member of the American Statistics Association and the Society for
Risk Analysis.


In addition, he has assisted the World Bank and other organizations with
econometric analysis, survey design, design of international investments,
cost-benefit, and sensitivity analysis, development of risk management
strategies, database development, information system design and
implementation, and training and troubleshooting in several areas.


Vijay has worked on capital markets, labor policy design, oil research, trade,
currency markets, and other topics.




                                                                                 4
                                    VISION
         Vijay has a vision for software tools for Office Productivity and
         Statistics. The current book is one of the first tools in stage one of his
         vision. We now list the stages in his vision.



    Stage one: Books to Teach Existing Software

         He is currently working on books on word-processing, and report
         production using Microsoft Word, and a booklet on Professional
         Presentations.



         The writing of the books is the first stage envisaged by Vijay for
         improving efficiency and productivity across the world. This directly
         leads to the second stage of his vision for productivity improvement
         in offices worldwide.



    Stage two: Improving on Existing Software

         The next stage is the construction of software that will radically
         improve the usability of current Office software.



         Vijay’s first software is undergoing testing prior to its release in Jan
         2003. The software — titled “Word Usability Enhancer” — will
         revolutionize the way users interact with Microsoft Word, providing
         users with a more intuitive interface, readily accessible tutorials, and
         numerous timesaving and annoyance-removing macros and utilities.



         He plans to create a similar tool for Microsoft Excel, and, depending
         on resource constraints and demand, for PowerPoint, Star Office, etc.




5
                            Financial Analysis using Excel




Stage 3: Construction of the first “feedback-designed” Office and Statistics
          software

     Vijay’s eventual goal is the construction of productivity software
     that will provide stiff competition to Microsoft Office. His hope is
     that the success of the software tools and the books will convince
     financiers to provide enough capital so that a successful software
     development and marketing endeavor can take a chunk of the multi-
     billion dollar Office Suite market.



     Prior to the construction of the Office software, Vijay plans to
     construct the “Definitive” statistics software. Years of working on
     and teaching the current statistical software has made Vijay a
     master at picking out the weaknesses, limitations, annoyances, and,
     sometimes, pure inaccessibility of existing software. This 1.5 billion
     dollar market needs a new visionary tool, one that is appealing and
     inviting to users, and not forbidding, as are several of the current
     software. Mr. Gupta wants to create integrated software that will
     encompass the features of SPSS, STATA, LIMDEP, EViews,
     STATISTICA, MINITAB, etc.




     Other

     He has plans for writing books on the “learning process.” The books
     will teach how to understand one’s approach to problem solving and
     learning and provide methods for learning new techniques for self-
     learning.




                                                                               6
                             CONTENTS
CHAPTER 1 WRITING FORMULAS 25

  1.1    The Basics Of Writing Formulae 26
  1.2    Tool for using this chapter effectively: Viewing the formula instead of the end
           result 26
           1.2.a    The “A1” vs. the “R1C1“ style of cell references 28
           1.2.b    Writing a simple formula that references cells 29
  1.3    Types Of References Allowed In A Formula 30
           1.3.a    Referencing cells from another worksheet 30
           1.3.b    Referencing a block of cells 30
           1.3.c    Referencing non–adjacent cells 31
           1.3.d    Referencing entire rows 32
           1.3.e    Referencing entire columns 32
           1.3.f    Referencing corresponding blocks of cells/rows/columns from a set of
                    worksheets 33
  1.4    Working Simultaneously On Cells In Different Worksheets 34


CHAPTER 2 COPYING/CUTTING AND PASTING FORMULAE 36

  2.1    Copying And Pasting A Formula To Other Cells In The Same Column 37
  2.2    Copying And Pasting A Formula To Other Cells In The Same Row 38
  2.3    Copying And Pasting A Formula To Other Cells In A Different Row And Column
           39
  2.4    Controlling Cell Reference Behavior When Copying And Pasting Formulae (Use
           Of The “$” Key) 40
           2.4.a    Using the “$” sign in different permutations and computations in a formula 42
  2.5    Copying And Pasting Formulas From One Worksheet To Another 43
  2.6    Pasting One Formula To Many Cells, Columns, Rows 44
  2.7    Pasting Several Formulas To A Symmetric But Larger Range 44
  2.8    Defining And Referencing A “Named Range” 44
                       Adding several named ranges in one step 47
                       Using a named range 48
  2.9    Selecting All Cells With Formulas That Evaluate To A Similar Number Type 49
  2.10   Special Paste Options 49
           2.10.a   Pasting only the formula (but not the formatting and comments) 49
           2.10.b   Pasting the result of a formula, but not the formula itself 49
  2.11   Cutting And Pasting Formulae 50
                               Financial Analysis using Excel




            2.11.a   The difference between “copying and pasting” formulas and “cutting and
                     pasting” formulas 50
  2.12   Creating A Table Of Formulas Using Data/Table 51
  2.13   Saving Time By Writing, Copying And Pasting Formulas On Several Worksheets
           Simultaneously 51


CHAPTER 3 PASTE SPECIAL 53

  3.1    Pasting The Result Of A Formula, But Not The Formula 54
  3.2    Other Selective Pasting Options 57
            3.2.a    Pasting only the formula (but not the formatting and comments) 57
            3.2.b    Pasting only formats 57
            3.2.c    Pasting data validation schemes 58
            3.2.d    Pasting all but the borders 58
            3.2.e    Pasting comments only 58
  3.3    Performing An Algebraic “Operation” When Pasting One Column/Row/Range On
            To Another 59
            3.3.a    Multiplying/dividing/subtracting/adding all cells in a range by a number 59
            3.3.b    Multiplying/dividing the cell values in cells in several “pasted on” columns
                     with the values of the copied range 60
  3.4    Switching Rows To Columns 60


CHAPTER 4 INSERTING FUNCTIONS 62

  4.1    Basics 62
  4.2    A Simple Function 65
  4.3    Functions That Need Multiple Range References 68
  4.4    Writing A “Function Within A Function” 70
  4.5    New Function-Related Features In The XP Version Of Excel 74
                        Searching for a function 74
            4.5.a    Enhanced Formula Bar 74
            4.5.b    Error Checking and Debugging 75


CHAPTER 5 TRACING CELL REFERENCES & DEBUGGING FORMULA ERRORS 77

  5.1    Tracing the cell references used in a formula 77
  5.2    Tracing the formulas in which a particular cell is referenced 79
  5.3    The Auditing Toolbar 80
  5.4    Watch window (only available in the XP version of Excel) 81
  5.5    Error checking and Formula Evaluator (only available in the XP version of Excel)
            82
  5.6    Formula Auditing Mode (only available in the XP version of Excel) 85
  5.7    Cell-specific Error Checking and Debugging 86



                                                                                                    8
                                            Contents




      5.8   Error Checking Options 87


    CHAPTER 6 LOAN REPAYMENTS 90

      6.1   Single Period Payment On Principal And Interest 91
              6.1.a    Relation between NPER and RATE when the payment period is less than one
                       year 91
                          Payment on Principal only (not on interest) 92
              6.1.b    Payment on interest only (not on principal) 92
              6.1.c    Payment on interest and principal 93
      6.2   Loan Repayments (Cumulative Payment Over Periods) 94
              6.2.a    Cumulative repayment of principal 94
              6.2.b    Cumulative interest paid on a loan 95
                          Cumulative interest and principal paid on a loan between user-chosen
                                  periods 96
                          Summary of loan repayment formulae 97
      6.3   Related Functions: RATE & NPER 98
                          RATE (“Interest Rate per period of an Annuity”) 98
                          NPER (“Number of periods in an Investment”) 99
      6.4   Mapping Between Simple And Compound Rates For The Same Annual Interest
              100
                          EFFECT (“Effective Interest Rate”) 100
                          NOMINAL (“Nominal Interest Rate”) 100


    CHAPTER 7 DISCOUNT CASH FLOWS 103

      7.1   Present Values 103
                          PV 104
                          NPV 105
                          XNPV 106
      7.2   Discount Cash Flow Analysis: Rates Of Return For An Investment/Project 107
                          IRR 107
                          MIRR 108
                          XIRR 109
      7.3   Future Values 110
                          FV function 110
                          Rate versus NPER 111
                          FVSCHEDULE function 111
                          Difference between FV and FVSCHEDULE 112
      7.4   Annuities — Comparative Summary Of Functions 112
      7.5   Depreciation 114
              7.5.a    Depreciation of an asset over a single period 114
                          Straight-line and Sum-of-year’s depreciation methods 114
                          SLN function: Straight line depreciation 114
                          SYD function: Sum-of-years' digit method 114
              7.5.b    Depreciation of an asset over specified period using declining balance
                       methods 115
                          Fixed declining balance method 115
                          Variable declining balance method 116




9
                              Financial Analysis using Excel




                      Allowing for a switch over between declining balances and straight line –
                              the VDB function 119
  7.6   Risk Analysis— “If-Then” Scenarios 120


CHAPTER 8 SECURITIES FUNCTIONS 121

  8.1   Information Requirements 121
  8.2   Coupon-Related Functions 124
                      COUPDAYBS 124
                      COUPDAYS 125
                      COUPDAYSNC 126
                      COUPNCD 127
                      COUPPCD 128
                      COUPNUM 129
                      DURATION & MDURATION (Bond price’s response to changes in yield)
                            functions 130
  8.3   Price versus Yield, & Interest Calculations 132
          8.3.a    Security that pays periodic interest (Coupon Paying Bond) 132
                      YIELD 132
                      PRICE 133
                      ACCRINT 133
                      Price and Yield for odd (long or short) first or last period Bonds 134
                      Odd First Period 134
                      Yield 135
                      Odd Last Period 136
                      Yield 136
          8.3.b    A discounted security which may pay redemption at maturity 138
                      DISC 138
                      PRICEDISC 139
                      YIELDDISC 140
          8.3.c    Security that pays interest at maturity 141
                      PRICEMAT 141
                      YIELDMAT 142
                      ACCRINTM 142
          8.3.d    Fully invested security 144
                      INTRATE 144
                      RECEIVED 144
  8.4   Information Requirements For Loan Repayment And Securities Functions 145
  8.5   T Bill Formulae 146
                      TBILLEQ function 146
                      TBILLPRICE function 147
                      TBILLYIELD function: Yield for a treasury bill (given market price or par
                             value) 149


CHAPTER 9 FUNCTIONS FOR BASIC STATISTICS 152

  9.1   “Averaged” Measures Of Central Tendency 153
          9.1.a    AVERAGE 153
          9.1.b    TRIMMEAN (“Trimmed mean”) 154
          9.1.c    HARMEAN (“Harmonic mean”) 155
          9.1.d    GEOMEAN (“Geometric mean”) 156




                                                                                                  10
                                               Contents




       9.2    Location Measures Of Central Tendency (Mode, Median) 157
                 9.2.a    MEDIAN 158
                 9.2.b    MODE 158
       9.3    Other Location Parameters (Maximum, Percentiles, Quartiles, Other) 158
                 9.3.a    QUARTILE 159
                 9.3.b    PERCENTILE 159
                 9.3.c    Maximum, Minimum and “Kth Largest” 160
                             MAX (“Maximum value”) 160
                             MIN (“Minimum value”) 161
                             LARGE 161
                             SMALL 162
                 9.3.d    Rank or relative standing of each cell within the range of a series 162
                             PERCENTRANK 162
                             RANK 163
       9.4    Measures Of Dispersion (Standard Deviation & Variance) 163
                             Sample dispersion: STDEV, VAR 164
                             Population dispersion: STDEVP, VARP 164
       9.5    Shape Attributes Of The Density Function (Skewness, Kurtosis) 165
                 9.5.a    Skewness 165
                 9.5.b    Kurtosis 167
       9.6    Functions Ending With An “A” Suffix 168


     CHAPTER 10 OTHER MATHEMATICS & STATISTICS FUNCTIONS 172

       10.1   Counting and summing 173
                             COUNT function 173
                             COUNTA function also counts cells with logical or text values 175
                             COUNTBLANK function counts the number of empty cells in the range
                                    reference 176
                             SUM function 176
                             PRODUCT function 177
                             SUMPRODUCT function 177
       10.2   The “If” counting and summing functions: Statistical functions with logical
                conditions 178
                             SUMIF function 179
                             COUNTIF function 179
       10.3   Transformations (log, exponential, absolute, sum, etc) 181
                             Standardizing a series that follows a Normal Density Function 184
       10.4   Deviations from the Mean 184
                             DEVSQ 184
                             AVEDEV 185
       10.5   Cross series relations 186
                 10.5.a   Covariance and correlation functions 186
                 10.5.b   Sum of Squares 186
                             SUMXMY2 function 187
                             SUMX2MY2 function 187


     CHAPTER 11 LOGICAL & INFORMATION FUNCTIONS 190




11
                              Financial Analysis using Excel




  11.1   Negative Nesting (The Not Function) 191
  11.2   Functions That Output True/False After Evaluating If All/One/None Of The
           Logical Expressions Are True (The Functions— And, Or) 192
           11.2.a   AND function 192
           11.2.b   OR function 193
           11.2.c   NOT(AND) function 194
           11.2.d   NOT(OR) function 195
  11.3   Information Functions On Type Of Data In Cell (Is Functions) 197
           11.3.a   TYPE function provides information on the data type of the value in a cell 199
  11.4   Testing If Odd Or Even Number 201
                       ISODD function 201
                       ISEVEN function 201
  11.5   Information On Error Type In A Cell (#N/A, #Value!, #Ref!, #Div/0!, #Num!,
            #Name?, #Null!) 202
           11.5.a   ERROR.TYPE function provides information on the Error type — if any - in a
                    cell 203
  11.6   Lookup Or “Location” Functions 205
                       The functions: COLUMN/ROW 205
                       The functions: COLUMNS/ROWS 205
                       The functions: INDEX, MATCH, OFFSET, HYPERLINK, ADDRESS,
                                TRANSPOSE, AREAS, INDIRECT 206


CHAPTER 12 “SMART” NESTED FUNCTIONS THAT RESPOND TO FORMULA RESULT
                208

  12.1   If Function 208
  12.2   Choose Function 209
  12.3   Working with Nested functions 211
           12.3.a   Defining the Nested Function 211
                       Nesting by hand 211
           12.3.b   Nesting with the assistance of the “Insert Function” dialog 212
           12.3.c   Formula AutoCorrection 214
           12.3.d   Formula Bar identification of error 215
           12.3.e   Function identification in the Formula Bar Assistant 216
                       Identification of cells referenced by the function highlighted in the Formula
                                 Bar 218
  12.4   Multiple Nesting: Tips 218


CHAPTER 13 ADD-INS: ENHANCING EXCEL 220

  13.1   Add-Ins: Introduction 220
           13.1.a   What can an Add-In do? 221
           13.1.b   Why use an Add-In? 221
  13.2   Add–ins installed with Excel 221
  13.3   Other Add-Ins 221
  13.4   The Statistics Add-In 222



                                                                                                       12
                                                Contents




                 13.4.a   Choosing the Add-Ins 222


     CHAPTER 14 THE SOLVER TOOL FOR CONSTRAINED LINEAR OPTIMIZATION 227

       14.1   Defining the objective function (Choosing the optimization criterion) 227
       14.2   Adding constraints 231
       14.3   Choosing Algorithm Options 232
                             Running the Solver 233


     CHAPTER 15 “IF-THEN” ANALYSIS: SCENARIOS AND GOAL SEEK 236

       15.1   Scenarios (for “If this assumption-then this result”) 236
                 15.1.a   Defining the Scenarios 237
                             Using the Scenarios 240
                             Scenario summary 241
                             Using the “Group and Outline” tool 242
                             Scenario-based Pivot Tables 244
       15.2   Goal Seek (“If I want this cell to have a certain result, what value should that cell
                take) 246
                 15.2.a   Setting the desired value for the “target” cell (the one with the formula that
                          references the “solution” cell) 247
                 15.2.b   Choosing the “solution” cell 247
                             Running the utility 248




     INDEX 242




13
                             Financial Analysis using Excel




          Mapping of menu options with sections of the book
                          and in the series of books


You may be looking for a section that pertains to a particular menu option
in Excel. I now briefly lay out where to find (in the series) a discussion of
a specific menu option of Excel.


                  Table 1: Mapping of the options in the “FILE“ menu

          Menu Option               Section that discusses the option

          OPEN                      Volume 1: Excel For Beginners
          SAVE
          SAVE AS

          SAVE AS WEB PAGE          Volume 3: Excel– Beyond The Basics

          SAVE WORKSPACE            Volume 3: Excel– Beyond The Basics

          SEARCH                    Volume 1: Excel For Beginners

          PAGE SETUP                Volume 1: Excel For Beginners

          PRINT AREA                Volume 1: Excel For Beginners

          PRINT PREVIEW             Volume 1: Excel For Beginners

          PRINT                     Volume 1: Excel For Beginners

          PROPERTIES                Volume 1: Excel For Beginners


                  Table 2: Mapping of the options in the “EDIT“ menu

  Menu Option                  Section that discusses the option

  UNDO                         Volume 1: Excel For Beginners

  REDO                         Volume 1: Excel For Beginners

  CUT                          Volume 1: Excel For Beginners
  COPY




                                                                                14
                                       Contents




     Menu Option                Section that discusses the option
     PASTE

     OFFICE CLIPBOARD           Volume 1: Excel For Beginners

     PASTE SPECIAL              Volume 3: Excel– Beyond The Basics

     FILL                       Volume 4: Managing & Tabulating Data in Excel

     CLEAR                      Volume 1: Excel For Beginners

     DELETE SHEET               Volume 1: Excel For Beginners

     MOVE OR COPY SHEET         Volume 1: Excel For Beginners

     FIND                       Volume 1: Excel For Beginners

     REPLACE                    Volume 1: Excel For Beginners

     GO TO                      Volume 3: Excel– Beyond The Basics

     LINKS                      Volume 3: Excel– Beyond The Basics

     OBJECT                     Volume 3: Excel– Beyond The Basics
                                Volume 2: Charting in Excel

                   Table 3: Mapping of the options in the “VIEW“ menu

            Menu Option                Section that discusses the option

            NORMAL                     Volume 1: Excel For Beginners

            PAGE BREAK PREVIEW         Volume 1: Excel For Beginners

            TASK PANE                  Volume 1: Excel For Beginners

            TOOLBARS                   Volume 1: Excel For Beginners

                                       Volume 3: Excel– Beyond The Basics
            FORMULA BAR                Leave it on (checked)

            STATUS BAR                 Leave it on (checked)

            HEADER AND FOOTER          Volume 1: Excel For Beginners

            COMMENTS                   Volume 3: Excel– Beyond The Basics

            FULL SCREEN                Volume 1: Excel For Beginners




15
                          Financial Analysis using Excel




     Menu Option                      Section that discusses the option

     ZOOM                           Volume 1: Excel For Beginners


              Table 4: Mapping of the options in the “INSERT“ menu

Menu Option                     Section that discusses the option

CELLS                           Volume 1: Excel For Beginners

ROWS                            Volume 1: Excel For Beginners

COLUMNS                         Volume 1: Excel For Beginners

WORKSHEETS                      Volume 1: Excel For Beginners

CHARTS                          Volume 2: Charting in Excel

PAGE BREAK                      Volume 1: Excel For Beginners

FUNCTION                        chapter 1-chapter 4

FUNCTION/FINANCIAL              chapter 6-chapter 8

FUNCTION/STATISTICAL            chapter 9-chapter 10

FUNCTION/LOGICAL                Volume 3: Excel– Beyond The Basics

FUNCTION/TEXT                   Volume 3: Excel– Beyond The Basics

FUNCTION/INFORMATION            Volume 3: Excel– Beyond The Basics

FUNCTION/LOOKUP                 Volume 3: Excel– Beyond The Basics

FUNCTION/MATH & TRIG            Volume 3: Excel– Beyond The Basics

FUNCTION/ENGINEERING            Volume 3: Excel– Beyond The Basics

FUNCTION/DATABASE               Volume 3: Excel– Beyond The Basics

FUNCTION/DATE & TIME            Volume 3: Excel– Beyond The Basics

NAME                            2.8

COMMENT                         Volume 3: Excel– Beyond The Basics

PICTURE                         Volume 2: Charting in Excel

DIAGRAM                         Volume 2: Charting in Excel




                                                                          16
                                           Contents




       Menu Option                      Section that discusses the option

       OBJECT                           Volume 3: Excel– Beyond The Basics

       HYPERLINK                        Volume 3: Excel– Beyond The Basics


                   Table 5: Mapping of the options inside the “FORMAT“ menu

          Menu Option                          Section that discusses the option

          CELLS                                Volume 1: Excel For Beginners

          ROW                                  Volume 1: Excel For Beginners

          COLUMN                               Volume 1: Excel For Beginners

          SHEET                                Volume 1: Excel For Beginners

          AUTOFORMAT                           Volume 1: Excel For Beginners

          CONDITIONAL FORMATTING               Volume 3: Excel– Beyond The Basics


          STYLE                                Volume 1: Excel For Beginners


                     Table 6: Mapping of the options inside the “TOOLS“ menu

     Menu Option                 Section that discusses the option

     SPELLING                    Volume 1: Excel For Beginners

     ERROR CHECKING              Volume 3: Excel– Beyond The Basics

     SPEECH                      Volume 4: Managing & Tabulating Data in Excel

     SHARE WORKBOOK              Volume 3: Excel– Beyond The Basics

     TRACK CHANGES               Volume 3: Excel– Beyond The Basics

     PROTECTION                  Volume 3: Excel– Beyond The Basics


     ONLINE                      Volume 3: Excel– Beyond The Basics
     COLLABORATION

     GOAL SEEK                   15.2

     SCENARIOS                   15.1

     AUDITING                    Volume 3: Excel– Beyond The Basics




17
                              Financial Analysis using Excel




 Menu Option                 Section that discusses the option

 TOOLS ON THE WEB            The option will take you to a Microsoft site that
                             provides access to resources for Excel

 MACROS                      In upcoming book on “Macros for Microsoft Office”

 ADD-INS                     chapter 13

 AUTOCORRECT                 Volume 1: Excel For Beginners
                             Volume 4: Managing & Tabulating Data in Excel
 CUSTOMIZE                   Volume 3: Excel– Beyond The Basics


 OPTIONS                     Volume 1: Excel For Beginners


                 Table 7: Mapping of the options inside the “DATA” menu

Menu Option                Section that discusses the option

SORT                       Volume 4: Managing & Tabulating Data in Excel

FILTER                     Volume 4: Managing & Tabulating Data in Excel


FORM                       Volume 4: Managing & Tabulating Data in Excel


SUBTOTALS                  Volume 4: Managing & Tabulating Data in Excel

VALIDATION                 Volume 4: Managing & Tabulating Data in Excel


TABLE                      2.12

CONSOLIDATION              section 48.5

GROUP AND OUTLINE          Volume 1: Excel For Beginners

PIVOT REPORT               Volume 4: Managing & Tabulating Data in Excel


EXTERNAL DATA              Volume 4: Managing & Tabulating Data in Excel


                Table 8: Mapping of the options inside the “WINDOW“ menu

               Menu Option         Section that discusses the option

               HIDE                Volume 3: Excel– Beyond The Basics

               SPLIT               Volume 1: Excel For Beginners

               FREEZE PANES        Volume 1: Excel For Beginners




                                                                                 18
                             Contents




       Table 9: Mapping of the options inside the “HELP“ menu

     Menu Option             Section that discusses the option

     OFFICE ASSISTANT        Volume 1: Excel For Beginners

     HELP                    Volume 1: Excel For Beginners

     WHAT’S THIS             Volume 1: Excel For Beginners




19
                          Financial Analysis using Excel




                    INTRODUCTION
Are there not enough Excel books in the market? I have asked myself this
question and concluded that there are books “inside me,” based on what I
have realized from observation by friends, students, and colleagues that I
have a “vision and knack for explaining technical material in plain
English.”


Read the book practicing the lessons on the sample files provided in the
zipped file you downloaded. I hope the book is useful and assists you in
increasing your productivity in Excel usage. You may be pleasantly
surprised at some of the features shown here. They will enable you to
save time.


The “Make me a Guru” series teach technical material in simple English.
A lot of thinking went into the sequencing of chapters and sections. The
book is broken down into logical “functional” components. Chapters are
organized into sections and sub-sections. This creates a smooth flowing
structure, enabling “total immersion” learning. The current book is
broken down into a multi-level hierarchy:


   —Chapters, each teaching a specific skill/tool.


   — Several sections within each chapter. Each section shows aspect of
     the skill/tool taught in the chapter. Each section is numbered—for
     example, “Section 1.2” is the numbering for the second section in
     chapter 1.


   — A few sub-sections (and maybe one further segmentation) within
     each section. Each sub-section lists a specific function, task, or
     proviso related to the “master” section. The sub-sections are
     numbered——for example, “1.2.a” for the first sub-section in the
     second section of chapter 1.




                                                                             20
                                       Contents




     Unlike other publishers, I do not consider you dummies or idiots. Each
     and everyone had the God given potential to achieve mastery in any field.
     All one needs is a guide to show you the way to master a field. I hope to
     play this role. I am confident that you will consider your self an Excel
     “Guru” (in terms of the typical use of Excel in your profession) and so will
     others.


     Once you learn the way to master a windows application, this new
     approach will enable you to pick up new skills” on the fly.” Do not argue
     for your limitations. You have none.


     I hope you have a great experience in learning with this book. I would
     love feedback. Please use the feedback form on our website vjbooks.net.
     In addition, look for updates and sign up for an infrequent newsletter at
     the site.



     VJ Inc Corporate and Government Training

     We provide productivity-enhancement and capacity building for corporate,
     government, and other clients. The onsite training includes courses on:


        •        Designing and Implementing Improved Information and
                 Knowledge Management Systems


        •        Improving the Co-ordination Between Informational Technology
                 Departments and Data Analysts & other end-users of
                 Information


        •        Office Productivity Software and Tools
        •        Data Mining
        •        Financial Analysis

        •        Feasibility Studies
        •        Risk Analysis, Monitoring and Management



21
                           Financial Analysis using Excel




   •      Statistics, Forecasting, Econometrics
   •      Building and using Credit Rating/Monitoring Models

   •      Specific software applications, including Microsoft Excel, VBA,
          Word, PowerPoint, Access, Project, SPSS, SAS, STATA, ands
          many other

Contact our corporate training group at http://www.vjbooks.net.



BASICS

The fundamental operations in Excel are taught in Volume 1: Excel For
Beginners, Volume 2: Charting in Excel, and Volume 3: Excel– Beyond The
Basics



FUNCTIONS

I teach the writing of formulas and associated topics in Volume 3: Excel–
Beyond The Basics. I show, in a step-by-step exposition, the proper way
for writing cell references in a formula. The book describe tricks for
copying/cutting and pasting in several examples. In addition, I discuss
special pasting options.


Finally, different types of functions are classified under logical categories
and discussed within the optimal category. The categories include
financial, Statistical, Text, Information, Logical, and “Smart” Logical.



FINANCE

In three chapters on financial functions, I list the functions used for
estimating loan repayments (for example, like a car loan or house
mortgage), discount cash flow analysis (used often for estimating the
returns and present values of multi-period investment projects), and
parameters associated with securities market instruments like bonds and




                                                                                22
                                        Contents




     T-bills.


     If your interest is Investment Banking or Feasibility Studies (Project
     Finance), you should learn Scenarios, the Solver utility, and Goal Seek.
     With Scenarios, you can perform basic risk analysis.



     STATISTICS PROCEDURES

     Three chapters teach statistics functions including the use of Excel
     functions for building Confidence Intervals and conducting Hypothesis
     Testing for several types of distributions. The design of hypothesis tests
     and the intermediate step of demarcating critical regions are taught
     lucidly.



     MANAGING & TABULATING DATA

     Excel has extremely powerful data entry, data management, and
     tabulation tools. The combination of tools provide almost database like
     power to Excel. Unfortunately, the poor quality of the menu layout and
     the help preclude the possibility of the user self-learning these features.
     These features are taught in Volume 4: Managing & Tabulating Data in
     Excel



     CHARTING

     Please refer to book two in this series. The book title is Charting in Excel.



     Sample data

     All the sample data files are included in the zipped file.




23
Page for Notes
                                Chapter 1: Writing Formulas




                                                                      CHAPTER 1


                                                      WRITING FORMULAS



     This chapter discusses the following topics:


        — THE BASICS OF WRITING FORMULAE

        — TOOL FOR USING THIS CHAPTER EFFECTIVELY: VIEWING
               THE FORMULA INSTEAD OF THE END RESULT

        — The A1 VS THE R1C1 STYLE OF CELL REFERENCES

        — TYPES OF REFERENCES ALLOWED IN A FORMULA

        — REFERENCING CELLS FROM ANOTHER WORKSHEET

        — REFERENCING A BLOCK OF CELLS

        — REFERENCING NON–ADJACENT CELLS

        — REFERENCING ENTIRE ROWS

        — REFERENCING ENTIRE COLUMNS

        — REFERENCING CORRESPONDING BLOCKS OF
               CELLS/ROWS/COLUMNS FROM A SET OF WORKSHEETS

     The most important functionality offered by a spreadsheet application is
     the ease and flexibility of writing formulae. In this chapter, I start by
     showing how to write simple formula and then build up the level of
     complexity of the formulae.


     Within the sections of this chapter, you will find tips and notes on
     commonly encountered problems or issues in formula writing.




25
                                Financial Analysis using Excel




1.1                THE BASICS OF WRITING FORMULAE

      This section teaches the basics of writing functions.




1.2                TOOL FOR USING THIS CHAPTER EFFECTIVELY:
                   VIEWING THE FORMULA INSTEAD OF THE END
                   RESULT

      For ease of understanding this chapter, I suggest you use a viewing option
      that shows, in each cell on a worksheet, the formula instead of the result.
      Follow the menu path TOOLS/OPTIONS/VIEW. In the area “Window
      Options” select the option “Formulas” as shown in Figure 1.


      Execute the dialog by clicking on the button OK. Go back to the
      worksheet. The formula will be shown instead of the calculated value.


      Eventually you will want to return to the default of seeing the results
      instead of the formula. Deselect “formula” in the area “Windows Options”
      in TOOLS/OPTIONS/VIEW.




                                                                                    26
                                  Chapter 1: Writing Formulas




                  Figure 1: Viewing the formulas instead of the formula result




     The effect is only cosmetic; the results will not change. As you shall see
     later, what you have just done will facilitate the understanding of
     functions.


     In addition, leave the option VIEW/ FORMULA BAR selected as shown in
     Figure 2.


                                Figure 2: Select “Formula Bar”




27
                                       Financial Analysis using Excel




1.2.A             THE “A1” VS. THE “R1C1“ STYLE OF CELL REFERENCES


        The next figure shows a simple formula. The formula is written into cell
        G15. The formula multiplies the values inside cells F8 and F6.


                                     Figure 3: A!-style cell referencing




        This style of referencing is called the “A1“ style or “absolute” referencing.
        The exact location of the referenced cells is written. (The cells are those
        in the 6th and 8th rows of column F.) One typically works with this style.


        However, there is another style for referencing the cells in a formula.
        This style is called the “R1C1“ style or “relative” referencing. The same
        formula as in the previous figure but in R1C1 style is shown in the next
        figure.


            Figure 4: The same formula as in the previous figure, but in R1C1 (Offset) style cell
             referencing while the previous figure showed A1 (Absolute-) style cell referencing




        Does not this formula look different? This style uses relative referencing.
        So, the first cell (F8) is referenced relative to its position in reference to
        the cell that contains the formula (cell G15). Row 8 is 7 rows below row
        15 and column F is 1 column before column G. Therefore, the cell
        reference is “minus seven rows, minus 1 column” or “R[— 7]C[— 1].”


        If you see a file or worksheet with such relative referencing, you can
        switch all the formulas back to absolute “A1” style referencing by going to
        TOOLS/OPTIONS/GENERAL and deselecting the option “R1C1 reference
        style.”




                                                                                                    28
                                           Chapter 1: Writing Formulas




                                   Figure 5: Settings for Formula Referencing




1.2.B                 WRITING A SIMPLE FORMULA THAT REFERENCES CELLS


           Open the sample file “File3.xls” and choose the worksheet “main.”
           Assume you want to write add the values in cells C2231 and D223 (that is,
           to calculate “C223 + D223”) and place the result into cell F223.


           Click on cell F223. Key-in “=“and then write the formula by clicking on
           the cell C223, typing in “+” then clicking on cell “D223.”


                                          Figure 6: Writing a formula




           After writing in the formula, press the key ENTER. The cell F223 will
           contain the result for the formula contained in it.


                     Figure 7: The result is shown in the cell on which you wrote the formula




        1 Cell C223 is the cell in column C and row 223.




29
                                        Financial Analysis using Excel




1.3                     TYPES OF REFERENCES ALLOWED IN A FORMULA




1.3.A              REFERENCING CELLS FROM ANOTHER WORKSHEET


        You can reference cells from another worksheet. Choose cell H235 on the
        worksheet “main.” In the chosen cell, type the text shown in the next
        figure. (Do not press the ENTER key; the formula is incomplete and you
        will get an error message if you press ENTER.)


                  Figure 8: Writing or choosing the reference to the first referenced range




        Then select the worksheet “second” and click on cell D235. Now press the
        ENTER key. The formula in cell H235 of worksheet “main” references the
        cell D235 from the worksheet “second”. The next figure illustrates this.


        Figure 9: Writing or choosing the reference to the second referenced range which is not on the
                               worksheet on which you are writing the formula




        In this formula, the part “second!” informs Excel that the range referenced
        is from the sheet “second.




1.3.B              REFERENCING A BLOCK OF CELLS


        Select the worksheet “main.” Choose cell H236. In the chosen cell, type
        the text shown in the next figure.




                                                                                                         30
                                         Chapter 1: Writing Formulas




                       Figure 10: This formula requires a block of cells as a reference




        Use the mouse to highlight the block of cells “E223 to E235.” Type in a
        closing parenthesis and press the ENTER key. The resulting function is
        shown in the next figure.


                          Figure 11: Formula with a block of cells as the reference




1.3.C             REFERENCING NON–ADJACENT CELLS


        Choose cell H237. Click in the cell and type the text shown in the next
        figure.


                                 Figure 12: The core function is typed first




        As in the previous example, choose cells E223 to E235 by highlighting
        them— the formula should like the one shown in the next figure.


                               Figure 13: The first block of cells is referenced




        Type a comma. The resulting formula should look like that shown in the
        next figure.




31
                                      Financial Analysis using Excel




                    Figure 14: Getting the formula ready for the second block of cells




        Highlight the block of cells “E210 to E222.” Key-in a closing parenthesis
        and press the ENTER key.


                Figure 15: The formula with references to two non-adjacent blocks of cells




1.3.D            REFERENCING ENTIRE ROWS


        Choose cell H238. In this cell, type the text shown in the next figure.


        Using the mouse, highlight the rows 197 to 209. Type in a closing
        parenthesis and press the ENTER key. The resulting formula is shown in
        the next figure.


                                   Figure 16: Referencing entire rows




1.3.E            REFERENCING ENTIRE COLUMNS


        Choose cell H239. In this cell, type the text shown in the next figure


        Using the mouse, highlight the columns C and D. Key-in a closing
        parenthesis and press the ENTER key.



                                                                                             32
                                    Chapter 1: Writing Formulas




                              Figure 17: Referencing entire columns




1.3.F            REFERENCING CORRESPONDING BLOCKS OF
                 CELLS/ROWS/COLUMNS FROM A SET OF WORKSHEETS


        Assume you have a workbook with six worksheets on similar data from
        six clients. You want to sum cells “C4 to F56” across all six worksheets.


        One way to do this would be to create a formula in each worksheet to sum
        for that worksheet’s data and then a formula to add the results of the
        other six formulae.


        Another way is using “3–D references.” The row and column make the
        first two dimensions; the worksheet set is the third dimension. You can
        use only one formula that references all six worksheets that the relevant
        cells within them.

        While typing the formula,

              • Type the “=“sign,
              • Write the formula (for example, “Sum”),
              • Place an opening parenthesis “(,” then
              • Select the six worksheets by clicking at the name tab of the first
                one and then pressing down SHIFT and clicking on the name tab
                of the sixth worksheet, and then
              • Highlight the relevant cell range on any one of them,
              • Type in the closing parenthesis “)”
              • And press the ENTER key to get the formula

                              =SUM(Sheet1:Sheet6!”C4:F56”)


33
                                        Page for Notes




1.4                  WORKING SIMULTANEOUSLY ON CELLS IN
                     DIFFERENT WORKSHEETS

      Assume your workbook has 18 worksheets, each for a different country.
      Assume further that all the worksheets have a similar composition— the
      same variables in the same columns and rows. You want to make some
      calculations for each country/worksheet. The long way of doing this is
      calculating separately for each country/worksheet. However, this means
      that you will be repeating the same step 17 times.


      An easier way is to select all the worksheets and do the calculations only
      once. Whenever you select several worksheets2 and perform some
      formatting on a range of cells, rows, or columns in one of the worksheets,
      the same is automatically conducted for the same range of cells, rows, or
      columns in all the selected worksheets.


      If you write a formula on a cell (for example, in cell “C3”) in one of the
      worksheets, the same formula is automatically written in the same cell (in
      cell “C3”) on all the selected worksheets. Whenever you copy and paste
      formulas or cell values in one worksheet, the same copy and paste action
      is replicated on the other worksheets.



                           Once again, as the other sections in this chapter, this




      2 Selecting multiple consecutive worksheets:    (a) click on the first sheet, (b) press
        down on the SHIFT key, and, (c) click on the last sheet. Selecting multiple non-
        consecutive worksheets: (a) click on the first sheet, (b) press down on the CTRL
        key, and, (c) one by one, click on the other worksheets you want to select. If a
        sheet is selected successfully, its sheet tab will be highlighted.
                         Chapter 2: Copying/Cutting and pasting formulae




     feature is best learned by practice. So, try it out on the sample file
     “Files1.xls.” In that file, all the worksheets whose names are country
     names (see the worksheets “Algeria,” “Bahrain,” … , “Yemen”) are
     identical in their structure.


        — In cell D5 of each cell, I wanted the formula “= (C5/C4) — 1.” I
              selected all the worksheets and typed the formula into cell D5 of
              only one of the worksheets. The formula was automatically
              replicated on all the worksheets I had selected.


        — Write the formula “= (C6/C5) — 1” into cell D6 of all these
             worksheets using this method. With all the worksheets
             selected, try different things like formatting cells, changing the
             width of columns, etc. Notice that you only have to work on one
             worksheet, and the work is automatically replicated for all the
             selected worksheets.


     The use of this feature is optimized if data in separate worksheets is
     arranged in a manner that facilitates work on several sheets.




35
                          Financial Analysis using Excel




                                                           CHAPTER 2


                                         COPYING/CUTTING AND
                                                   PASTING FORMULAE



This chapter teaches the following topics:


   — COPYING AND PASTING A FORMULA TO OTHER CELLS IN
          THE SAME COLUMN

   — COPYING AND PASTING A FORMULA TO OTHER CELLS IN
          THE SAME ROW

   — COPYING AND PASTING A FORMULA TO OTHER CELLS IN A
          DIFFERENT ROW AND COLUMN

   — CONTROLLING CELL REFERENCE BEHAVIOR WHEN
          COPYING AND PASTING FORMULAE (USE OF THE “$”
          KEY)

   — USING THE “$” SIGN IN DIFFERENT PERMUTATIONS AND
          COMPUTATIONS IN A FORMULA.

   — COPYING AND PASTING FORMULAS FROM ONE
          WORKSHEET TO ANOTHER

   — SPECIAL PASTE OPTIONS

   — PASTING ONLY THE FORMULA (BUT NOT THE FORMATTING
          AND COMMENTS)

   — PASTING THE RESULT OF A FORMULA, BUT NOT THE
          FORMULA ITSELF

   — CUTTING AND PASTING FORMULAE

   — THE DIFFERENCE BETWEEN “COPYING AND PASTING“
          FORMULAS AND “CUTTING AND PASTING” FORMULAS



                                                                 36
                               Chapter 2: Copying/Cutting and pasting formulae




             — SAVING TIME BY WRITING, COPYING AND PASTING
                     FORMULAS ON SEVERAL WORKSHEETS
                     SIMULTANEOUSLY




2.1                      COPYING AND PASTING A FORMULA TO OTHER
                         CELLS IN THE SAME COLUMN

         Often one wants to write analogous formulae for several cases. For
         example, assume you want to write a formula analogous to the formula in
         F223 into each of the cells F224 to F2353. The quick way to do this is to:


             — Click on the “copied from” cell F223.


             — Select the option EDIT/COPY. (The menu can also be accessed by
                   right-clicking on the mouse or by clicking on the COPY icon.)


             — Highlight the “pasted on” cells F224 to F235 and


             — Choose the menu option EDIT/PASTE. (The menu can also be
                  accessed by right-clicking on the mouse or by clicking on the
                  PASTE icon.)


             — Press the ENTER key.


         The formula is pasted onto the cells F224 to F235 and the cell references




      3 The formula in F223 adds the values in cells that are 3 and 2 columns to the left (that

         is, cells in columns in C and D.)


37
                                       Financial Analysis using Excel




                within each formula are adjusted4 for the location difference
                between the “pasted on” cells and the “copied from” cell.


                                       Figure 18: Pasting a formula




2.2                     COPYING AND PASTING A FORMULA TO OTHER
                        CELLS IN THE SAME ROW

         Select the range F223— F235 (which you just created in the previous sub–
         section). Select the option EDIT/COPY. Choose the range G223— G235
         (that is, one column to the right) and choose the menu option
         EDIT/PASTE. Now click on any cell in the range G223— G235 and see
         how the column reference has adjusted automatically. The formula in




      4 The formula in the “copied cell” F223 is “C223 + D223” while the formula in the

         “pasted on” cell F225 is “C225 + D225.” (Click on cell F225 to confirm this.) The cell
         F225 is two rows below the cell F223, and the copying-and-pasting process accounts
         for that.



                                                                                                  38
                            Chapter 2: Copying/Cutting and pasting formulae




      G223 is “D223 + E223” while the formula in F223 was “C223 + D223”.


      The next figure illustrates this. Because you pasted one column to the
      right, the cell references automatically shifted one column to the right.
      So:


            — The reference “C” became “D,” and


            — The reference “D” became “E.”


                 Figure 19: Cell reference changes when a formula is copied and pasted




      The examples in 2.1 on page 32 and 2.2 on page 33 show the use of “Copy
      and Paste” to quickly replicate formula in a manner that maintains
      referential parallelism.




2.3                   COPYING AND PASTING A FORMULA TO OTHER
                      CELLS IN A DIFFERENT ROW AND COLUMN

      Select the cell F223. Select the option EDIT/COPY. Choose the range
      H224 (that is, two columns to the right and one row down from the copied
      cell) and choose the menu option EDIT/PASTE. Observe how the column
      and row references have changed automatically— the formula in H224 is


39
                                 Financial Analysis using Excel




      “E224 + F224” while the formula in F223 was “C223 + D223”.


      The next figure illustrates this. Because you pasted two columns to the
      right and one row down, the cell references automatically shifted two
      columns to the right and one row down. So:


         — The reference “C” became “E” (that is, two columns to the right)


         — The reference “D” became “F” (that is, two columns to the right)


         — The references “223” became “224” (that is, one row down)


                           Figure 20: Copying and pasting a formula




2.4                 CONTROLLING CELL REFERENCE BEHAVIOR WHEN
                    COPYING AND PASTING FORMULAE (USE OF THE
                    “$” KEY)

      The use of the dollar key “$” (typed by holding down SHIFT and choosing
      the key “4”) allows you to have control over the change of cell references in
      the “Copy and Paste” process. The use of this feature is best shown with
      some examples.


         — The steps in copy and pasting a formula from one range to another:


         — Click on the “copied from” cell F223.


         — Select the option EDIT/COPY. (The menu can also be accessed by
               right-clicking on the mouse or by clicking on the COPY icon.)



                                                                                      40
                              Chapter 2: Copying/Cutting and pasting formulae




            — Choose the “pasted on” cell F219 by clicking on it, and


            — Select the menu option EDIT/PASTE. (The menu can also be
                  accessed by right-clicking on the mouse or by clicking on the
                  PASTE icon.)


            — Press the ENTER key.


            — The formula “C219 + D219” will be pasted onto cell F219. (For a
                 pictorial reproduction of this, see Figure 21.)


                                      Figure 21: The “pasted-on” cell




        Change the formula by typing the dollar signs as shown Figure 22.


                   Figure 22: Inserting dollar signs in order to influence cell referencing




        Copy cell F219. Paste into G220 (that is, one column to the right and one
        row down). The dollar signs will ensure that the cell reference is not
        adjusted for the row or column differential for the parts of the formula
        that have the dollar sign before them5— see the formula in cell F220




     5 In this example, the parts are the “C” reference and “219” reference in “$C$219” part of

        the formula.


41
                                           Financial Analysis using Excel




           (reproduced in Figure 23).


                 Figure 23: The “copied-from” and “pasted-on” cells with the use of the dollar sign




           For the parts of the cell that do not have the dollar sign before them, the
           cell references adjust to maintain referential integrity6.




2.4.A                    USING THE “$” SIGN IN DIFFERENT PERMUTATIONS AND
                         COMPUTATIONS IN A FORMULA

                                   The copy &        The cell references in the “pasted on” cell
        The dollar sign in the
                                   paste action      depend on the location of the dollar signs in the
        “copied from” cell
                                                     formula in the original, “copied from” cell

        Reference behavior         Copy F219
        with a dollar sign         and paste          Figure: 24: Only the reference to “C” does not adjust
        before one of the          into G220.                 because only “C” has a dollar prefix
        column references

        Original cell:

        F219 = $C219 + D219

        Reference behavior         Copy F219
        with a dollar sign         and paste          Figure 25: Only the reference to “219” (in the formula
        before one of the row      into G220.         part “C$219”) does not adjust because only that “219”
        references                                                     has a dollar prefix


        Original cell:




        6 The part “D219” adjusts to “E220” to adjust for the fact that the “pasted on” cell is one

           column to the right (so “DÆE") and one row below (so “219Æ220”.)



                                                                                                          42
                               Chapter 2: Copying/Cutting and pasting formulae




                                The copy &        The cell references in the “pasted on” cell
      The dollar sign in the
                                paste action      depend on the location of the dollar signs in the
      “copied from” cell
                                                  formula in the original, “copied from” cell
      F219 = C$219 + D219




      Reference behavior        Copy F219
      with a dollar sign        and paste          Figure 26: the references to “C,” “D” and to “219” (in
      before all but one of     into G220.        the formula part “$D$219”) do not adjust because they
      the row/column                                             all have a dollar prefix
      references

      Original cell:

      F219 = $C219 +
      $D$219

      Original cell:            Copy F219         Try it…
                                and paste
      F219 = $C$219 +           into G220.        G220 = $C$219 + $D$219
      $D$219

      Original cell:            Copy F219         Try it...
                                and paste
      F219 = $C219 +            into G220.        G220 = $C220 + $D220
      $D219

      Original cell:            Copy F219         Try it...
                                and paste
      F219 = C219 +             into G220.        G220 = D220 + $D$219
      $D$219




2.5                     COPYING AND PASTING FORMULAS FROM ONE
                        WORKSHEET TO ANOTHER

         The worksheet “second” in the sample data file has the same data as the
         worksheet you are currently on (“main.”) In the worksheet main, select
         the cell F219 and choose the menu option EDIT/COPY. Select the
         worksheet “second” and paste the formula into cell F219. Notice that the
         formula is duplicated.


43
                               Financial Analysis using Excel




2.6                PASTING ONE FORMULA TO MANY CELLS,
                   COLUMNS, ROWS

      Copy the formula. Select the range for pasting and paste or “Paste
      Special” the formula.




2.7                PASTING SEVERAL FORMULAS TO A SYMMETRIC
                   BUT LARGER RANGE

      Assume you have different formulas in cells G2, H2, and I2. You want to
      paste the formula:


      — In G2 to G3:G289


      — In H2 to H3:H289


      — In I2 to I3:I289


      Select the range G2:I2. Pick the menu option EDIT/COPY. Highlight the
      range G3:I289. (Shortcut: select G3. Scroll down to I289 without
      touching the sheet. Depress the SHIFT key and click on cell I289.) Pick
      the menu option EDIT/PASTE.




2.8                DEFINING AND REFERENCING A “NAMED RANGE”

      You can use range names as references instead of exact cell references.
      Named ranges are easier to use if the names chosen are explanatory.


      First, you have to define named ranges. This process involves informing



                                                                                44
                           Chapter 2: Copying/Cutting and pasting formulae




     Excel that the name, for example, “age_nlf,” refers to the range “C2:C19.”
     Pick the menu option “INSERT/NAME/DEFINE.” The dialog (user-input
     form) that opens is shown in the next figure. Type the name of the range
     into the text-box “Names in workbook” and the “Cell References” in the
     box “Refers to:” See the next figure for an example.


                              Figure 27: The DEFINE NAMES dialog




     Click on the button “Add.” The named range is defined. The name of a
     defined range is displayed in the large text-box in the dialog. The next
     figure illustrates this text.


       Figure 28: Once added, the defined named range’s name can be seen in the large text-box




     Several named ranges can be defined. A named range can represent
     multiple blocks of cells.




45
                               Financial Analysis using Excel




Figure 29: Defining a second named range. On clicking “Add,” the named range is defined, as
                                shown in the next figure.




You can view the ranges represent by any name. Just click on the name
in the central text-box and the range represented by the name will be
displayed in the bottom box.


                         Figure 30: Two named ranges are defined




                                                                                              46
                            Chapter 2: Copying/Cutting and pasting formulae




       Figure 31: You can define many ranges. Just make sure that the names are explanatory and
                                            not confusing.




Adding several named ranges in one step

       If the first/last row/column in your ranges has the labels for the range,
       then you can define names for all the ranges using the menu option
       INSERT/NAMES/CREATE. The dialog is reproduced in the next figure.


                                     Figure 32: CREATE NAMES




       In our sample data set, I selected columns “A” and “B” and created the
       names from the labels in the first row.




47
                                    Financial Analysis using Excel




       Figure 33: The named ranges “Country_Name,” and “Series_Name” were defined in one step
                                       using “Create Names”




Using a named range

      Named ranges are typically used to make formulas easier to read. The
      named ranges could also be used in other procedures


      Assume you want to sum several of the ranges defined above. One way to
      sum them would be to select them one-by-one from the worksheet.




      Another way is to use the menu option INSERT/NAME/PASTE to select
      and paste the names of the ranges. The names are explanatory and
      reduce the chances of errors in cell referencing.


      A reference to the named range is pasted onto the formula as shown
      below.




                                                                                                48
                            Chapter 2: Copying/Cutting and pasting formulae




                                  Figure 34: Pasting named ranges




2.9                   SELECTING ALL CELLS WITH FORMULAS THAT
                      EVALUATE TO A SIMILAR NUMBER TYPE
         Volume 3: Excel– Beyond The Basics.




2.10                  SPECIAL PASTE OPTIONS




2.10.A            PASTING ONLY THE FORMULA (BUT NOT THE FORMATTING AND
                  COMMENTS)


         Refer to page 52 in chapter 3.




2.10.B            PASTING THE RESULT OF A FORMULA, BUT NOT THE FORMULA
                  ITSELF


         Refer to page 49 in chapter 3.




49
                                         Financial Analysis using Excel




2.11                     CUTTING AND PASTING FORMULAE




2.11.A              THE DIFFERENCE BETWEEN “COPYING AND PASTING” FORMULAS
                    AND “CUTTING AND PASTING” FORMULAS


         Click on cell F223, select the option EDIT/CUT, click on cell H224 and
         choose the menu option EDIT/PASTE. The formula in the “pasted on” cell
         is the same as was in the “cut from” cell. (The formula “=C223 + D223.”)
         Therefore, there is no change in the cell references after cutting–and–
         pasting. While copy–and–paste automatically adjusts for cell reference
         differentials, cut–and–paste does not.


         If you had used copy and paste, the formula in H224 would be “=D224 +
         E224.”


                                         Figure 35: Cut from cell F223




                  Figure 36: Paste into cell H223. Note that the cell references do not adjust.




         After doing this, select the option EDIT/UNDO because I want to
         maintain the formulas in F223— F235 (and not because it is required for
         a cut and paste operation).




                                                                                                  50
                             Chapter 2: Copying/Cutting and pasting formulae




2.12                 CREATING A TABLE OF FORMULAS USING
                     DATA/TABLE

       The menu option DATA/TABLE supposedly offers a tool for creating an X-
       Y table of formula results. However, the method needs so much data
       arrangement that it is no better than using a simple copy and paste
       operation on cells!




2.13                 SAVING TIME BY WRITING, COPYING AND PASTING
                     FORMULAS ON SEVERAL WORKSHEETS
                     SIMULTANEOUSLY

       Refer to Volume 3: Excel– Beyond The Basics to learn how to work with
       multiple worksheets. The section will request you to follow our example
       of writing a formula for several worksheets together.




51
Page for Notes
                                 Chapter 3: Paste Special




                                                                  CHAPTER 3


                                                            PASTE SPECIAL



     This chapter teaches the following topics:


        — PASTING THE RESULT OF A FORMULA, BUT NOT THE
               FORMULA

        — OTHER SELECTIVE PASTING OPTIONS

        — PASTING ONLY THE FORMULA (BUT NOT THE FORMATTING
               AND COMMENTS)

        — PASTING ONLY FORMATS

        — PASTING DATA VALIDATION SCHEMES

        — PASTING ALL BUT THE BORDERS

        — PASTING COMMENTS ONLY

        — PERFORMING AN ALGEBRAIC “OPERATION” WHEN PASTING
               ONE COLUMN/ROW/RANGE ON TO ANOTHER

        — MULTIPLYING/DIVIDING/SUBTRACTING/ADDING ALL CELLS
               IN A RANGE BY A NUMBER

        — MULTIPLYING/DIVIDING THE CELL VALUES IN CELLS IN
               SEVERAL “PASTED ON” COLUMNS WITH THE VALUES OF
               THE COPIED RANGE

        — SWITCHING ROWS TO COLUMNS

     This less known feature of Excel has some great options that save time
     and reduce annoyances in copying and pasting.




53
                                  Financial Analysis using Excel




3.1                 PASTING THE RESULT OF A FORMULA, BUT NOT
                    THE FORMULA

      Sometimes one wants the ability to copy a formula (for example, “=C223 +
      D223)”) but paste only the resulting value. (The example that follows will
      make this clear.)


      Select the range “F223:F235” on worksheet ““main.”


      Choose the menu option FILE/NEW and open a new file. Go to any cell in
      this new file and choose the menu option EDIT/PASTE SPECIAL.


      In the area “Paste,” choose the option “Values” as shown in Figure 37.


             Figure 37: The PASTE SPECIAL dialog in Excel versions prior to Excel XP




                                                                                       54
                                  Chapter 3: Paste Special




     In Excel XP, the “Paste
                                          Figure 38: “Paste Special” dialog In Excel XP,
     Special” dialog has three
     additional options:


        •      Paste Formulas
               and number
               formats (and not
               other cell
               formatting like
               font, background
               color, borders, etc)


        •      Paste Values and
               number formats
               (and not other cell
               formatting like
               font, background
               color, borders, etc)


        •      Paste only
               “Column widths.”




     In Excel XP, the “Paste”
                                        Figure 39: The pasting options can be accessed by
     icon provides quick access        clicking on the arrow to the right of the “Paste” icon
     to some types of “Paste
     Special.” The options are
     shown in the next figure.

     The calculated values in
     the “copied” cells are
     pasted. The formula is not
     pasted. Try the same
     experiment using
     EDIT/PASTE instead of
     EDIT/PASTE SPECIAL.
     The usefulness of the


55
                            Financial Analysis using Excel




In Excel XP, the “Paste
                                       Figure 38: “Paste Special” dialog In Excel XP,
Special” dialog has three
additional options:


   •      Paste Formulas
          and number
          formats (and not
          other cell
          formatting like
          font, background
          color, borders, etc)


   •      Paste Values and
          number formats
          (and not other cell
          formatting like
          font, background
          color, borders, etc)


   •      Paste only
          “Column widths.”




former will be apparent.




                                                                                        56
                                     Chapter 3: Paste Special




3.2                   OTHER SELECTIVE PASTING OPTIONS




3.2.A              PASTING ONLY THE FORMULA (BUT NOT THE FORMATTING AND
                   COMMENTS)


        Choose the option “Formulas” in the area “Paste” of the dialog (user-input
        form) associated with the menu “EDIT/PASTE SPECIAL.” This feature
        makes the pasted values free from all cell references. The “pasted on”
        range will only contain pure numbers. The biggest advantage of this
        option is that it enables the collating of formula results in different
        ranges/sheets/workbooks onto one worksheet without the bother of
        maintaining all the referenced cells in the same workbook/sheet as the
        collated results.


                                 Figure 40: Pasting formulas only




3.2.B              PASTING ONLY FORMATS


        Choose the option “Formats” in the area “Paste” of the dialog associated
        with the menu “EDIT/PASTE SPECIAL use the “Format Painter” icon. I
        prefer using the icon.


        Refer to Volume 1: Excel For Beginners for a discussion on the format
        painter.




57
                                  Financial Analysis using Excel




3.2.C            PASTING DATA VALIDATION SCHEMES


        Pick the option “Validation” in the area “Paste” of the dialog associated
        with the menu “EDIT/PASTE SPECIAL.” Data validation schemes are
        discussed in Volume 4: Managing & Tabulating Data in Excel. This
        option can be very useful in standardizing data entry standards and rules
        across an institution.




3.2.D            PASTING ALL BUT THE BORDERS


        Choose the option “All except borders” in the area “Paste” of the dialog
        associated with the menu “EDIT/PASTE SPECIAL.” All other formatting
        features, formulae, and data are pasted. This option is rarely used.




3.2.E            PASTING COMMENTS ONLY


        Pick the option “Comments” in the area “Paste” of the dialog associated
        with the menu “EDIT/PASTE SPECIAL.” Only the comments are pasted.
        The comments are pasted onto the equivalently located cell. For example,
        a comment on the cell that is in the third row and second column that is
        copied will be pasted onto the cell that is in the third row and second
        column of the “pasted on” range. This option is rarely used.




                                                                                    58
                                           Chapter 3: Paste Special




3.3                     PERFORMING AN ALGEBRAIC “OPERATION” WHEN
                        PASTING ONE COLUMN/ROW/RANGE ON TO
                        ANOTHER




3.3.A              MULTIPLYING/DIVIDING/SUBTRACTING/ADDING ALL CELLS IN A
                   RANGE BY A NUMBER


        Assume your data is expressed in millions. You need to change the units
        to billions— that is, divide all values in the range by 1000. The complex
        way to do this would be to create a new range with each cell in the new
        range containing the formula “cell in old range/1000.” A much simpler
        way is to use PASTE SPECIAL. On any cell in the worksheet, write the
        number 1000. Click on that cell and copy the number. Choose the range
        whose cells need a rescaling of units. Go to the menu option EDIT/PASTE
        SPECIAL and choose “Divide” in the area Options. The range will be
        replaced with a number obtained by dividing each cell by the copied cells
        value!


        The same method can be used to multiply, subtract or add a number to all
        cells in a range


           Figure 41: You can multiply (or add/subtract/divide) all cells in the “pasted on” range by
                                  (to/by/from) the value of the copied cell




59
                                     Financial Analysis using Excel




3.3.B             MULTIPLYING/DIVIDING THE CELL VALUES IN CELLS IN SEVERAL
                  “PASTED ON” COLUMNS WITH THE VALUES OF THE COPIED
                  RANGE


        You can use the same method to add/subtract/multiply/divide one
        column’s (or row’s) values to the corresponding cells in one or several
        “pasted on” columns (or rows).



                            Copy the cells in column E and paste special onto the
        cells in columns C and D choosing the option “Add” in the area
        “Operation” of the paste special dialog. (You can use EDIT/UNDO to
        restore the file to its old state.)




3.4                    SWITCHING ROWS TO COLUMNS

        Choose any option in the “Paste” and “Operations” areas and choose the
        option “Transpose.” If pasting a range with many columns and rows you
        may prefer to paste onto one cell to avoid getting the error “Copy and
        Paste areas are in different shapes.”




                                                                                    60
Page for Notes
                                 Financial Analysis using Excel




                                                                  CHAPTER 4


                                                   INSERTING FUNCTIONS



      This chapter teaches the following topics:


         — A SIMPLE FUNCTION

         — FUNCTIONS THAT NEED MULTIPLE RANGE REFERENCES

         — WRITING A “FUNCTION WITHIN A FUNCTION“

         — NEW IN EXCEL XP

         — RECOMMENDED FUNCTIONS IN THE FUNCTION WIZARD

         — EXPANDED AUTOSUM FUNCTIONALITY

         — FORMULA EVALUATOR

         — FORMULA ERROR CHECKING




4.1                 BASICS

      Excel has many in–built functions. The functions may be inserted into a
      formula.




      Accessing the functions dialog/wizard

      (a) select the menu path INSERT/FUNCTION, or


      (b) click on the function icon (see Figure 42)




                                                                                62
                                Chapter 4: Inserting functions




                                Figure 42: The Function icon




     The “Paste Function” dialog (or wizard, because it is a series of dialogs)
     opens. The dialog is shown in Figure 43.


                    Figure 43: Understanding the PASTE FUNCTION dialog




                                            1                      2




                                                                       3




     The equivalent dialog in the XP version of Excel is called INSERT
     FUNCTION. (It is reproduced in the next figure below.) The dialog has
     one new feature—a “Search for a function” utility. The “Function
     category” is now available by clicking on the list box next to the label “Or
     select a category.”




63
                              Financial Analysis using Excel




  Figure 44: The equivalent dialog in the XP version of Excel is called INSERT FUNCTION




This dialog has three parts:


   (1) The area “Function category” on the left half shows the labels of
          each group of functions. The group “Statistical” contains
          statistical functions like “Average” and “Variance.” The group
          “Math & Trig” contains algebra and trigonometry functions like
          “Cosine.” When you click on a category name, all the functions
          within the group are listed in the area “Function name.”


   (2) The area “Function name” lists all the functions within the
          category selected in the area “Function category.” When you
          click on the name of a function, its formula, and description is
          shown in the gray area at the bottom of the dialog.


   (3) The area with a description of the function




Step 2 for using a function in a formula

Click on the “Function category” (in area 1 or the left half of the dialog)



                                                                                          64
                                 Chapter 4: Inserting functions




      that contains the function, then click on the function name in the area
      “Function name” (in area 2 or the left half of the dialog) and then execute
      the dialog by clicking on the button OK.




4.2                A SIMPLE FUNCTION

      In my first example, I show how to select and use the function “Average”
      which is under the category “Statistical.”


      Choose the category “Statistical” as shown in Figure 45.


                            Figure 45: Choosing a function category




      Choose the formula “Average” in the area “Function name.”


      This is shown in Figure 46.


      Execute the dialog by clicking on the button OK.




65
                                Financial Analysis using Excel




                           Figure 46: Choosing a function name




The dialog (user-input form) for the “Average” function opens.


For a pictorial reproduction of this, see Figure 47.


                        Figure 47: The dialog of the chosen function




Step 3 for inserting a function — defining the data
arguments/requirements for the function


  Figure 48: Selecting the cell references whose values will be the inputs into the function




                                                                                               66
                                        Chapter 4: Inserting functions




        You have to tell Excel which cells contain the data to which you want to
        apply the function “AVERAGE.” Click on the right edge of the text-box
        “Number1”7. (That is, on the red–blue–and–white corner of the cell.) Go
        to the worksheet that has the data you want to use and highlight the
        range “C2 to E3.” Click on the edge of the text-box. (For a pictorial
        reproduction of this, see Figure 48.)


        You will be taken back to the “Average” dialog. Notice that — as shown in
        Figure 49 — the cell reference “C2:E3” has been added.


        Furthermore, note that the answer is provided at the bottom (see the line
        “Formula result = 9973333.333”).


        Execute the dialog by clicking on the button OK.


                                  Figure 49: The completed function dialog




     7 If you want to use non-adjacent ranges in the formula, then use the text-box “Number

        2” for the second range. Excel will add more text-boxes once you fill all the available
        ones. If the label for a text-box is not in bold then it is not essential to fill that text-
        box. In the AVERAGE dialog shown in Figure 402, the label for the first text-box
        (“Number 1”) is in bold—so it has to be filled. The label for the second text-box
        (“Number 2”) is not in bold — so, it can be left empty.


67
                                  Financial Analysis using Excel




      The formula is written into the cell and is shown in Figure 50.


                         Figure 50: The function is written into the cell




      Press the ENTER key and the formula will be calculated.


      You can work with this formula in a similar manner as a simple formula
      — copying and pasting, cutting and pasting, writing on multiple
      worksheets, etc.


      If you remember the function name, you do not have to use
      INSERT/FUNCTION. Instead, you can simple type in the formulas using
      the keyboard. This method is faster but requires that you know the
      function.




4.3                 FUNCTIONS THAT NEED MULTIPLE RANGE
                    REFERENCES

      Some formulas need a multiple range reference. One example is the
      correlation formula (“CORREL“). Assume, in cell J1, you want to
      calculate the correlation between the data in the two ranges: “D2 to D14”
      and “E2 to E14.”


      Activate cell J1. Select the option INSERT/FUNCTION. Choose the
      function category “Statistical.” In the list of functions that opens in the
      right half of the dialog, choose the function “CORREL“ and execute the
      dialog by clicking on the button OK.




                                                                                    68
                                  Chapter 4: Inserting functions




                          Figure 51: Choosing the function CORREL




     The CORREL dialog (shown in the next figure) opens. The function needs
     two arrays (or series) of cells references. (Because the labels to both the
     text-box labels are bold, both text-boxes have to be filled for the function
     to be completely defined.) Therefore, the pointing to the cell references
     has to be done twice as shown in Figure 53 and the next two figures.




                                Figure 52: The CORREL dialog




     Choosing the first array/series

     Click on the box edge of “Array1” (as shown in Figure 52.) Then go to the
     relevant data range (D2 to D14 in this example) and select it.




                    Figure 53: Selecting the first data input for the function




69
                                     Financial Analysis using Excel




      Repeat the same for “Array 2,” selecting the range “E2:E14” this time.


                          Figure 54: The first data input has been referenced




      The formula is complete. The result is shown in the dialog in the area at
      the bottom “Formula result.” Execute the dialog by clicking on the button
      OK.


                       Figure 55: The second data input has also been referenced




      Once the dialog closes, depress the ENTER key, and the function will be
      written into the cell and its result evaluated/calculated.


                            Figure 56: The function as written into the cell.




4.4                    WRITING A “FUNCTION WITHIN A FUNCTION”

      I use the example of the CONFIDENCE function from the category
      “Statistical.”


      Choose the menu option INSERT/FUNCTION.



                                                                                   70
                                      Chapter 4: Inserting functions




        Choose the function category “Statistical.”


        In the list of functions that opens in the right half of the dialog, choose the
        function CONFIDENCE and execute the dialog by clicking on the button
        OK.


                             Figure 57: Selecting the CONFIDENCE function




        The Confidence dialog (user-input form) requires8 three parameters: the
        alpha, standard deviation, and sample size. First type in the alpha
        desired as shown in Figure 58. (An alpha of “.05” corresponds to a 95%
        confidence level while an alpha value of “:.1” corresponds to a confidence
        interval of 90 %.)


                                  Figure 58: Dialog for CONFIDENCE




     8 We know that all three are necessary because their labels are in bold.




71
                             Financial Analysis using Excel




Press the OK button.


                        Figure 59: The first part of the function




Type a comma after the “.05” (see Figure 60) and then go to
INSERT/FUNCTION and choose the formula STDEV as shown in Figure
61.


              Figure 60: Placing a comma before entering the second part




Choose the range for which you want to calculate the STDEV (for
example, the range “E:E”) and execute the dialog by clicking on the button
OK.


          Figure 61: Using STDEV function for the second part of the function




The formula now becomes:


                        Figure 62: A function within a function




The main formula is still CONFIDENCE. The formula STDEV provides
one of the parameters for this main formula. The STDEV function is
nested within the CONFIDENCE function.




                                                                                72
                                      Chapter 4: Inserting functions




     Type a comma, and then go to INSERT/FUNCTION and choose the
     function “Count” from the function category “Statistical” to get the final
     formula.


                                   Figure 63: The completed formula




     There are two other ways to write this formula.

     Select the option INSERT/FUNCTION, choose the function
     CONFIDENCE from the category “Statistical” and type in the formulae
     “STDEV(E:E)” and “COUNT(E:E)” as shown in Figure 64.


     This method is much faster but requires that you know the function
     names STDEV and COUNT.


     Figure 64: If sub-functions are required in the formula of a function, the sub-functions may be
                         typed into the relevant text-box of the function’s dialog




     The third way to write the formula is to type it in. This is the fastest
     method.


                                   Figure 65: The result is the same




73
                                          Financial Analysis using Excel




4.5                      NEW FUNCTION-RELATED FEATURES IN THE XP
                         VERSION OF EXCEL




      Searching for a function

          Type a question (like “estimate maximum value”) into the box “Search for
          a function” utility and click on the button “Go.” Excel will display a list of
          functions related to your query.


                 Figure 66: Search for a function utility is available in the XP version of Excel




4.5.A               ENHANCED FORMULA BAR


          After you enter a number or cell reference for the first function
          “argument” (or first “requirement”) and type in a comma, Excel
          automatically converts to bold format the next argument/requirement. In
          the example shown in the next figure, Excel makes bold the font for the
          argument placeholder pmt after you have entered a value for nper and a
          comma.


                   Figure 67: The Formula Bar Assistant is visible below the Formula Bar




          Similarly, the argument/requirement after pmt has a bold font after you
          have entered a value or reference for the argument pmt



                                                                                                    74
                                       Chapter 4: Inserting functions




           Figure 68: The next “expected” argument/requirement if highlighted using a bold font




        The square brackets around the argument/requirement “fv” indicate that
        the argument is optional. You need not enter a value or reference for the
        argument.


                              Figure 69: An optional argument/requirement




4.5.B             ERROR CHECKING AND DEBUGGING


        This topic is taught in Volume 3: Excel– Beyond The Basics




75
Page for Notes
                   Chapter 5: Tracing Cell References & Debugging Formula Errors




                                                                                   CHAPTER 5


                                  TRACING CELL REFERENCES &
                                DEBUGGING FORMULA ERRORS



      This short chapter demonstrates the following topics:


         — TRACING THE CELL REFERENCES USED IN A FORMULA

         — TRACING THE FORMULAS IN WHICH A PARTICULAR CELL
                IS REFERENCED

         — WATCH WINDOW

         — ERROR CHECKING

         — FORMULA EVALUATION




5.1                TRACING THE CELL REFERENCES USED IN A
                   FORMULA

      Click on the cell that contains the formula whose references need to be
      visually traced. Pick the menu option TOOLS/AUDITING/TRACE
      PRECEDENTS. (For a pictorial reproduction of this, see Figure 70.)




77
                               Financial Analysis using Excel




  Figure 70: Tracing precedents. These options are from Excel versions prior to Excel XP.




          Figure 71: Excel XP offers several error-checking and debugging tools.




As shown in Figure 72, blue arrows will trace the references.


If a group of cells is referenced, then the group will be marked by a blue
rectangle. The two rectangular areas are referenced in the formula.




                                                                                            78
                     Chapter 5: Tracing Cell References & Debugging Formula Errors




         Figure 72: The arrows define and trace all the cells/ranges referenced in the active cell




5.2                   TRACING THE FORMULAS IN WHICH A PARTICULAR
                      CELL IS REFERENCED

      You may want to do the opposite— see which formulas reference a
      particular cell.


         •   First, click on the cell of interest.


         •   Then, pick the menu option TOOLS/AUDITING/TRACE
                DEPENDENTS as shown in Figure 73. Now the arrows will go
                from the active cell to all the cells that have formulas that use
                the active cell.




79
                                     Financial Analysis using Excel




        Figure 73: Tracing Dependents. These options are from Excel versions prior to Excel XP.




      Remove all the auditing arrows by following the menu path
      TOOLS/AUDITING/REMOVE ALL ARROWS.




5.3                   THE AUDITING TOOLBAR

      The “Auditing” toolbar opens automatically when you are using the
      auditing option (TOOLS/AUDITING) to review formula references.


                                  Figure 74: The “Auditing” toolbar




5.4                   WATCH WINDOW (ONLY AVAILABLE IN THE XP
                      VERSION OF EXCEL)

      The window is accessed through the menu path TOOLS/ AUDITING/
      SHOW WATCH WINDOW, or VIEW/ TOOLBARS/ WATCH WINDOW.




                                                                                                  80
                   Chapter 5: Tracing Cell References & Debugging Formula Errors




     Figure 75: The Watch Window may not display correctly. Use the mouse to drag the walls of
                                 the dialog to a workable size.




     Add one cell on whose values you want to keep tabs.


     The value will be shown in the Watch Window so that you can see the
     value even if you are working on cells or sheets that are far from the cell
     whose value is being “watched.”


                                      Figure 76: Add Watch




     You can add many cells to the Watch Window. Note that the Watch
     Window provides precise information on the location of the cell being
     watched and the formula in the cell. For example, the first watched cell is
     on cell D8 in sheet “Date to serial” in the file “Date and Time.xls.” The
     formula in the cell is “=DATE(F7, E7, D7)”.


                      Figure 77: You can add many cells to the Watch Window




81
                                      Financial Analysis using Excel




5.5                    ERROR CHECKING AND FORMULA EVALUATOR
                       (ONLY AVAILABLE IN THE XP VERSION OF EXCEL)

      The tools are accessed through TOOLS/ERROR CHECKING and
      TOOLS/FORMULA AUDITING/EVALUATE FORMULA.


      The Error Checking dialog shows the formula in the cell as well as the
      type of error. In this example, these are “=DEGREE(COS(C6))” and
      “Invalid Name Error,” respectively.


      The button (“Help on this error”) links to a help file containing assistance
      on understanding and debugging the error.


      The button “Show Calculation Steps” links to a step-by-step debugger that
      assists in catching the calculation step at which the error occurred.


      This debugger has the same functionality as the Formula Auditor
      (accessed through TOOLS/FORMULA AUDITING/EVALUATE
      FORMULA).


      Figure 78: The Error Checking dialog shows the formula in the cell as well as the type of error




      The button “Ignore Error” keeps the error “as is.” The button Options




                                                                                                        82
                     Chapter 5: Tracing Cell References & Debugging Formula Errors




     opens the dialog for setting error-checking options. The choices within the
     dialog are listed in section 5.8.


     The Formula Evaluator shows the step at which the first calculation error
     occurred. This helps in identifying the primary problem. In this example,
     no error has occurred in the formula part “COS(C6))”. The dialog informs
     you that “The next evaluation (that is, calculation step), will result in an
     error.”


     Figure 79: The Formula Evaluator shows the step at which the first calculation error occurred




     After clicking on evaluate, you see that the error is in the formula part
     “DEGREE.” Excel also informs you of the type of error— “#NAME?”
     suggests that “DEGREE” does not match the name of any Excel function.
     (The correct function is “DEGREES.”)


     The “COS“ function is nested within the DEGREE function. Clicking on
     “Step In” will evaluate the nested function only.




83
                             Financial Analysis using Excel




                        Figure 80: After clicking on evaluate...




The “COS“ function is evaluated. The function has no error.


            If a function has more than two levels of nesting, then you
  can use the “Step Out” button to evaluate the function at the higher
  level of nesting.



                      Figure 81: The “COS“ function is evaluated




                                                                          84
                   Chapter 5: Tracing Cell References & Debugging Formula Errors




5.6                 FORMULA AUDITING MODE (ONLY AVAILABLE IN
                    THE XP VERSION OF EXCEL)

      This feature is accessed through TOOLS/FORMULA
      AUDITING/FORMULA AUDITING MODE. After this mode is selected,
      when you select a cell that has or is referenced by a formula, Excel
      highlights the other referenced/referencing cells.


      In addition, you have quick access (via the “Formula Auditing” toolbar) to
      all the Auditing tools discussed earlier in this chapter.


                                Figure 82: Formula Auditing Mode




5.7                 CELL-SPECIFIC ERROR CHECKING AND
                    DEBUGGING

      On every cell whose value evaluates to an error value, you will see a small
      icon with a “!” image and a downward arrow. Click on the arrow to obtain
      assistance for debugging the error.




85
                            Financial Analysis using Excel




                Figure 83: Cell-specific Error Checking and Debugging




In the example shown in the figure, the options show:


— the error type (“Number Error”),


— a link to assistance on understanding and debugging the error (“Help
  on this error”),


— a step-by-step debugger to catch the calculation step at which the error
  occurred (“Show Calculation Steps”),


— the option to ignore and thereby keep the error as is (“Ignore Error”),


— a link to directly edit the formula in the cell (“Edit in Formula Bar”),


— the overall error-checking options (“Error Checking Options”), and


— direct access to the Formula Auditing Toolbar (“Show Formula
  Auditing Toolbar”) and, thereby, to all the features of Auditing (these
  features are taught in this chapter)




                                                                             86
                    Chapter 5: Tracing Cell References & Debugging Formula Errors




5.8                 ERROR CHECKING OPTIONS

      The Error Checking options can be assessed through
      TOOLS/OPTIONS/ERROR CHECKING or through TOOLS/ERROR
      CHECKING/OPTIONS. The dialog is reproduced in the next figure.


                                 Figure 84: Error Checking options




      You can inform Excel to show as an error any cell: that contains:


      •   A formula that evaluates to an error value


      •   A formula that refers to an empty cell


      •   A formula that is not consistent with the other formulas and cell
          references in neighboring cells


      •   A two-digit year (like “02”) instead of a four-digit year (like “2002”)



87
                          Financial Analysis using Excel




•   A number stored as text




The other options are beyond the scope of this book. I recommend sticking
with the default settings reproduced in the next figure.




                                                                            88
Page for Notes
                          Financial Analysis using Excel




                                                           CHAPTER 6


                                                     LOAN REPAYMENTS



This chapter lists functions on:


   — SINGLE PERIOD PAYMENT ON PRINCIPAL AND INTEREST

   — RELATION BETWEEN NPER AND RATE WHEN THE
          PAYMENT PERIOD IS LESS THAN ONE YEAR.

   — PAYMENT ON PRINCIPAL ONLY (NOT ON INTEREST)

   — PAYMENT ON INTEREST ONLY (NOT ON PRINCIPAL)

   — PAYMENT ON INTEREST AND PRINCIPAL

   — LOAN REPAYMENTS (CUMULATIVE PAYMENT OVER
          PERIODS)

   — CUMULATIVE REPAYMENT OF PRINCIPAL

   — CUMULATIVE INTEREST PAID ON A LOAN

   — CUMULATIVE INTEREST AND PRINCIPAL PAID ON A LOAN
          BETWEEN THE START AND END OF THE LOAN

   — SUMMARY OF LOAN REPAYMENT FORMULAE

   — ASSOCIATED FUNCTIONS

   — RATE, NPER

   — CONVERTING BETWEEN EFFECTIVE AND NOMINAL
          INTEREST RATES OR MAPPING BETWEEN SIMPLE AND
          COMPOUND INTEREST RATES FOR THE SAME ANNUAL
          INTEREST CHARGES

   — EFFECT, NOMINAL




                                                                 90
                                    Chapter 6: Loan Repayments




6.1                   SINGLE PERIOD PAYMENT ON PRINCIPAL AND
                      INTEREST

        Calculates the payment for a loan based on constant payments and a
        constant interest rate.




6.1.A             RELATION BETWEEN NPER AND RATE WHEN THE PAYMENT
                  PERIOD IS LESS THAN ONE YEAR


        If you make monthly payments on a four-year loan at an annual interest
        rate of 24 %, use 24%/12 for RATE and 4*12 for NPER. If you make
        annual payments on the same loan, use 12 % for RATE and 4 for NPER.



            Table 10 : Annual rates have to be converted into the rates relevant to the
                                    periodicity of repayments

                                    If periodic payments         Then the rate and nper to
        For the annualized rates    are:                         use Excel formulas are:
        of:...
                                                                 RATE          NPER

        Annual Rate 24%             Annual (so 1 per year)       24/1 =        5*1=

        Number of years 5                                        24%           5

        Annual Rate 24%             Semi-Annual (2               24/2 =        5*2=
                                    payments per year
        Number of years 5                                        12%           10

        Annual Rate 24%             Every four months (so        24/3 =        5*3 =
                                    3 payments per year)
        Number of years 5                                        8%            15

        Annual Rate 24%             Quarterly (4 payments        24/4 =        5*4 =
                                    per year)
        Number of years 5                                        6%            20

        Annual Rate 24%             Bi-monthly (6                24/6 =        5*6 =
                                    payments per year)
        Number of years 5                                        4%            30




91
                                   Financial Analysis using Excel




                                   If periodic payments             Then the rate and nper to
        For the annualized rates   are:                             use Excel formulas are:
        of:...
                                                                    RATE          NPER

        Annual Rate 24%            Monthly (12 payments             24/12 =       5 * 12 =
                                   per year)
        Number of years 5                                           2%            60




Payment on Principal only (not on interest)

        The function PPMT calculates the payment on the principal for a given
        period for an investment based on periodic, constant payments and a
        constant interest rate. This function can be accessed through the menu
        option INSERT/FUNCTION/FINANCIAL/PPMT.


        An example is shown in the next table.


        The data requirements for PPMT and IPMT are similar. The
        requirements are listed in the next sub-section.




6.1.B             PAYMENT ON INTEREST ONLY (NOT ON PRINCIPAL)


        The function IPMT calculates the payment on the interest for a given
        period for an investment based on periodic, constant payments and a
        constant interest rate. Access this function through the menu option
        INSERT/FUNCTION/FINANCIAL/IPMT


        The data requirements for PPMT and IPMT are similar. The
        requirements are shown in the next figure.




                                                                                                92
                                    Chapter 6: Loan Repayments




                      Figure 85: Requirements of the functions PPMT and IPMT




           — Rate is the interest rate per payment period.


           — Nper (“Number of Periods”) is the number of payment periods.


           — Per (“Period”) is a positive whole number less than nper.


           — PV (“Present Value”): in this context, the PV is the loan amount or
                 the principal.


           — FV (“Future Value”): in this context, FV is the balance after the last
                 payment. This requirement is optional. If it left blank, then
                 the default of zero is used.


        An example is shown in the next table.




6.1.C            PAYMENT ON INTEREST AND PRINCIPAL


        The function PMT calculates the total loan repayment (principal plus
        interest chares) in any period. The loan must be characterized by
        periodic, constant payments and a constant interest rate. Access this
        function through the menu option
        INSERT/FUNCTION/FINANCIAL/PMT.


        The information requirements are the same as for IPMT and PPMT (see
        previous sub-section) with one addition. PMT also needs information on
        the due date of payments in relation to the period end and start. This


93
                                  Financial Analysis using Excel




        information is input in the box “Type.”


                                  Figure 86: The function PMT




        Type: payments are due either at the end or the beginning of a period.


           — Type = 0 or omitted, if payments are due at the end.


           — Type = 1, if payments are due at the beginning


        An example is shown in table at the end of this chapter.




6.2                  LOAN REPAYMENTS (CUMULATIVE PAYMENT OVER
                     PERIODS)




6.2.A            CUMULATIVE REPAYMENT OF PRINCIPAL


        CUMPRINC calculates the cumulative repayments of principal from the
        first period of the loan until a user chosen future period. The loan must
        be characterized by periodic, constant payments and a constant interest
        rate. Access this function through the menu option
        INSERT/FUNCTION/FINANCIAL/CUMPRINC.




                                                                                    94
                                   Chapter 6: Loan Repayments




                 Figure 87: Requirements of the functions CUMIPMT and CUMPRINC




        — Rate is the interest rate per payment period.


        — nper (“Number of Periods”) is the total number of payment periods in
              the loan agreement.


        — PV (“Present Value”): in this context, the PV is the loan amount or the
              principal.


        — Start_Period and End_period are the two periods (both inclusive) that
              define the tome period whose cumulative payments you wish to
              calculate.


        An example is shown in the next table.




6.2.B            CUMULATIVE INTEREST PAID ON A LOAN


        CUMIPMT calculates the cumulative interest payments from the first
        period of the loan until a user chosen future period. The loan has to be
        characterized by periodic, constant payments and a constant interest rate.
        Access this function through the menu option
        INSERT/FUNCTION/FINANCIAL/CUMIPMT


        The information requirements are the same as for the function
        CUMPRINC. An example is shown in the next table.



95
                                        Financial Analysis using Excel




Cumulative interest and principal paid on a loan between user-chosen periods

       This amount may be estimated by adding CUMIPMT & CUMPRINC. An
       example is shown in the next table.


        Table 11: Example of a car loan. This example is on the sheet “Car Loan” in the sample file
       “Loan.xls.” Additional samples will be available at http://www.vjbooks.net/excel/samples.htm.

      Loan Terms: 20,000 dollars at 8.99% per year, to be repaid over 48 months

      Principal or PV: 20000

      Interest Rate per Year: 8.99%

      Interest Rate per         0.75%                                           Rate per
      Month:                                                                   Repayment Period
                                                                               (month)

      Number of Periods         48                                              Nper— is the
      for Loan Repayment:                                                      number of periods
                                                                               (months)— 48 in
                                                                               this case

      Function                                                                       Result

      Interest Payment (month 24)                                                    -84.70
                                                                  IPMT

      Principal Repayment (month 24)                                                 -412.90
                                                                  PPMT

      Interest plus Principal Payment (month 24)                                     -497.61
                                                                  PMT

      Interest Payment (month 37)                                                    -42.63
                                                                  IPMT

      Principal Repayment (month 37)                                                 -454.98
                                                                  PPMT

      Interest plus Principal Payment (month 37)                                     -497.61
                                                                  PMT

      Cumulative Interest Payment (months 1-24)                                      -2666.00
                                                                  CUMIPMT

      Cumulative Principal Repayment (months 1-24)                                   -9187.74
                                                                  CUMPRINC




                                                                                                       96
                                  Chapter 6: Loan Repayments




     Cumulative Interest plus Principal Payment                            -11853.74
     (months 1-24)                                        CUMIPMT +
                                                          CUMPRINC

     Cumulative Interest Payment (year 2 or months                         -1205.10
     13-24)                                               CUMIPMT

     Cumulative Principal Repayment (year 2 or                             -4721.77
     months 13-24)                                        CUMPRINC

     Cumulative Interest plus Principal Payment                            -5926.87
     (year 2 or months 13-24)                             CUMIPMT +
                                                          CUMPRINC




     Note that the total repayments are the same in months 24 and 37, the
     share of interest goes down over time as more of the principal is repaid




 Summary of loan repayment formulae

                         Table 12: Summary of loan repayment formulae
                   Payment       Payment         Period for which payment is calculated
                   includes      includes
                   interest      principal
                   Yes     No    Yes     No      One       One specific   Cumulative
                                                 period    period         over several
                                                           defined by     periods
                                                           the user
     IPMT            9                     9       9            9


     PPMT                   9      9               9            9


     PMT             9             9               9                            9

     CUMIPMT                9              9


     CUMPRINC               9      9




97
                                    Financial Analysis using Excel




6.3                    RELATED FUNCTIONS: RATE & NPER




      RATE (“Interest Rate per period of an Annuity”)

          This function calculates the interest rate per period of an annuity.
          Because the RATE is estimated using iterations, the result may be none,
          one or more solutions.


          Location within INSERT/FUNCTION: FINANCIAL/RATE


                                         Figure 88: RATE




          pmt (payment): payment made each period; it cannot change over the life
          of the annuity. Typically, pmt contains principal and interest but no other
          fees or taxes. The other information requirements are the same as in the
          previous sub-section.


          Example:
          Use this function to estimate the rate of a four-year $8,000 loan with
          monthly payments of $200: RATE (48, -200, 8000) = 0.77 %. This is the
          monthly rate, because the period is monthly. The annual rate is
          0.77%*12, which equals 9.24 %.




                                                                                        98
                               Chapter 6: Loan Repayments




 NPER (“Number of periods in an Investment”)

     This function calculates the number of periods for an investment based
     on periodic, constant payments and a constant interest rate.


     Location within INSERT/FUNCTION: FINANCIAL/NPER


                                    Figure 89: NPER




     pmt (payment): payment made each period; it cannot change over the life
     of the annuity. Typically, pmt contains principal and interest but no other
     fees or taxes. The other information requirements are described in the
     previous sub-section.




     Examples

           • NPER (12%/12, -100, -1000, 10000, 1) = 60

           • NPER (1%, -100, -1000, 10000) = 60

           • NPER (1%, -100, 1000) = 11




99
                                        Financial Analysis using Excel




6.4                      MAPPING BETWEEN SIMPLE AND COMPOUND
                         RATES FOR THE SAME ANNUAL INTEREST




      EFFECT (“Effective Interest Rate”)

          This function calculates the effective annual interest rate, given the
          nominal annual interest rate and the number of compounding periods per
          year— Nominal_rate, and nperY, respectively, in the dialog reproduced in
          the next figure.


          This rate is equivalent (in terms of generating the same interest charges
          during a year) to a one-year simple interest rate applied to the same
          principal with no within-year compounding.




           Figure 90: Access this function through the menu option INSERT/ FUNCTION/ FINANCIAL/
                                                     EFFECT




      NOMINAL (“Nominal Interest Rate”)

          This function calculates the nominal annual interest rate, given the
          effective rate and the number of compounding periods per year—
          Effect_rate, and nperY, respectively, in the dialog reproduced in the next
          figure.


          This rate maps a one year simple interest rate to the equivalent (in terms
          of generating the same interest charges during an year) nominal
          compound interest rate if the interest is compounded in periods of less




                                                                                                  100
                                      Chapter 6: Loan Repayments




      than one year.


      Figure 91: Access this function through the menu option INSERT/ FUNCTION/ FINANCIAL/
                                               NOMINAL




          Table 13: This Example is from the worksheet “Effective Nominal” in the sample file
           “Loans.xls.” This example is on the sheet “Car Loan” in the sample file “Loan.xls.”

            EFFECTIVE

            Terms: 14% nominal annual interest, compounded quarterly

            Nominal Rate                                                           14.0%

            Npery— number of compounding periods in an year                        4

            Effective Rate                                                         14.8%




            NOMINAL

            Terms: 14.8% effective annual interest after compounding quarterly

            Effective Rate                                                         14.8%

            Npery— number of compounding periods in an year                        4

            Effective Rate                                                         14.0%




101
Page for Notes
                               Chapter 7: Discount Cast Flows




                                                                    CHAPTER 7


                                               DISCOUNT CASH FLOWS



      The topics taught in this chapter are:


         — PRESENT VALUES

         — PV, NPV, XNPV

         — DISCOUNT CASH FLOW ANALYSIS: RATES OF RETURN FOR
                AN INVESTMENT/PROJECT

         — IRR, MIRR, XIRR

         — FUTURE VALUES

         — FV, FVSCHEDULE

         — DIFFERENCE BETWEEN FV AND FVSCHEDULE

         — ANNUITIES — COMPARATIVE SUMMARY OF FUNCTIONS

         — DEPRECIATION

         — RISK ANALYSIS— “IF-THEN” SCENARIOS




7.1                PRESENT VALUES

      Examples of the functions shown in this section are provided in the
      sample file “Cash_Flow.xls.”




103
                                Financial Analysis using Excel




PV

     This function calculates the present value of an investment. The present
     value is the total amount that a series of future payments is worth now.


                                       Figure 92: PV




     Type: equals 0 or 1 and indicates when payments are due. This
     information is optional. If left empty, the default of zero is used. Set type
     equal to 0 If payments are due At the end of the period, 1 if payments are
     due at the beginning of the period.




     Location within INSERT/FUNCTION: FINANCIAL/PV



     Rate: interest rate per period.


     For example, if you obtain an automobile loan at a 10 % annual interest
     rate and make monthly payments, your interest rate per month is 10%/12,
     or 0.83%. You would enter 10%/12, or 0.83%, or 0.0083, into the formula
     as the rate.


     NPER: number of periods


     Fv (future value): the cash balance desired after the last payment. This
     information is optional. If left empty, the default of zero is used.




                                                                                     104
                                   Chapter 7: Discount Cast Flows




       pmt: The amount paid. The pmt data should be entered as positive if cash
       is received (such as profits) from the investment and negative if cash is
       spent on the investment (such as the initial investment, subsequent
       spending (investment) at future time periods, etc. You should net, for
       each year, recurrent expenditures including depreciation allowances from
       recurrent revenues. Further, at least one of the cash flows must be
       negative and at least one positive




 NPV

       This function calculates the net present value of an investment by using a
       discount rate and a series of future payments (negative values) and
       income (positive values).


       The primary difference between PV and NPV is that PV allows cash flows
       to begin either at the end or at the beginning of the period. Unlike the
       variable NPV cash flow values, PV cash flows must be constant
       throughout the investment.


                                         Figure 93: NPV




       Location within INSERT/FUNCTION: FINANCIAL/NPV


       Rate: discount rate over one period.


       Value1, value2, ... must be equally spaced in time and occur at the end of
       each period.




105
                              Financial Analysis using Excel




   The NPV investment begins one period before the date of the value1 cash
   flow and ends with the last cash flow in the list. The NPV calculation is
   based on future cash flows. If the first cash flow occurs at the beginning
   of the first period, this flow's value must not be included in the arguments
   for the NPV function. Instead, you should add this value to the results of
   the NPV function.




XNPV

   This function calculates the net present value for a schedule of cash flows
   that is not necessarily periodic. Use this function instead of the NPV
   when the cash flows from the investment/project may not be at periodic
   intervals (or are not accounted for on a periodic basis).


                                   Figure 94: XNPV




   Location within INSERT/FUNCTION: FINANCIAL/XNPV


   Same as above. In addition, you need to supply the reinvestment rate.


   Notes:


       — An annuity is a series of constant cash payments made over a
            continuous period. For example, a car loan or a mortgage is an
            annuity. For more information, see the description for each
            annuity function.


       — In annuity functions, a negative number represents cash paid out; a
             positive number represents cash received.



                                                                                  106
                                      Chapter 7: Discount Cast Flows




               — The primary difference between PV and NPV is that PV allows cash
                    flows to begin either at the end or at the beginning of the
                    period. Unlike the variable NPV cash flow values, PV cash
                    flows must be constant throughout the investment.


               — IRR is the rate for which NPV equals zero


               — XIRR is the rate for which XNPV equals zero




7.2                       DISCOUNT CASH FLOW ANALYSIS: RATES OF
                          RETURN FOR AN INVESTMENT/PROJECT




      IRR

            This function is used when the cash flows occur (or are estimated as in an
            annual report) at periodic intervals. (Typically, the period is a year; but
            the period could be monthly, quarterly, etc).


                                             Figure 95: IRR




            The default initial guess is 10% or 0.10. Typically one does not enter any
            number as a guess


            Location within INSERT/FUNCTION: FINANCIAL/IRR


            The data should be entered as positive if cash is received (such as profits)
            from the investment and negative if cash is spent on the investment (such
            as the initial investment, subsequent spending (investment) at future



107
                             Financial Analysis using Excel




   time periods, etc. You should net, for each year, recurrent expenditures
   including depreciation allowances from recurrent revenues. Further, at
   least one of the cash flows must be negative and at least one must be
   positive.




MIRR

   A good measure of the rate of return should include the cost of raising
   capital (an outflow) and returns from reinvestment of the profits from the
   investment (an inflow). The MIRR function includes the cost of funds and
   the earnings on profit reinvestment. The function is an extension of the
   IRR function.


   For example, over a 10 period investment, the profits earned in year 2 will
   be reinvested for eight years. The cash inflows may be (re-)invested in
   interest-earning assets like bonds, money market, etc.


   On the other hand, the rate of return should also consider the return on
   the next best use of the funds invested. (Alternatively, as may be the
   case, the interest cost of borrowing these funds).


   Location within INSERT/FUNCTION: FINANCIAL/MIRR


   Same as for IRR. In addition, you need to supply the borrowing
   (financing) and reinvestment rates.


                                  Figure 96: MIRR




                                                                                 108
                                  Chapter 7: Discount Cast Flows




 XIRR

      Use this function instead of the IRR when the cash flows from the
      investment/project may not be at periodic intervals (or are not accounted
      for on a periodic basis).


                                        Figure 97: XIRR




      Location within INSERT/FUNCTION: FINANCIAL/XIRR


      Same as for IRR. In addition, you need data on the dates when the cash
      flow will occur.


      Notes:

               — If a #NUM! error is displayed it may indicate that the
                 underlying algorithm is generated an estimate on the 20th
                 iteration/try for IRR (and 100th for XIRR) that was too far from
                 the estimate on the 19th (or 99th for XIRR) to consider the
                 estimate to be the “final” correct estimate.


               — IRR corresponds to the function NPV. IRR is the rate of return
                 at which NPV=zero.


               — XIRR corresponds to the function NPV. XIRR is the rate of
                 return at which XNPV=zero.




109
                                      Financial Analysis using Excel




7.3                     FUTURE VALUES




FV function

         This function calculates the “end-of-project” or “Future Value” of a set of
         periodic investment. The function can be used only if all the investments
         are— of the same amount, at the same interest rate, and include principal
         and interest only. Funds received are included as positive numbers and
         fund outflows as negative numbers.


         This function calculates the “end-of-project” or “Future Value” of a set of
         periodic investment. The function can be used only if all the investments
         are— of the same amount, at the same interest rate, and include principal
         and interest only. Funds received are included as positive numbers and
         fund outflows as negative numbers.


         You can also use the function to evaluate the Future Value of a Present
         Value. Follow the menu path INSERT/FUNCTION/FINANCIAL/FV9




      9 Suppose you want to save money for a special project occurring a year from now.
                                                                                      You
         deposit $1,000 into a savings account that earns 6 percent annual interest
         compounded monthly (monthly interest of 6%/12, or 0.5%). You plan to deposit $100
         at the beginning of every month for the next 12 months. How much money will be in
         the account at the end of 12 months?
                   FV(0.5%, 12, -100, -1000, 1) equals $2301.40



                                                                                             110
                               Chapter 7: Discount Cast Flows




                                  Figure 98: The FV dialog




      FV(interest rate per period, NPER - the number of payments in an year,
      PER - the periodic payment or PV - the present value of the series of
      payments (include PER or PV), TYPE- period extremity at which payment
      is due with 0=“period end” and 1= “period beginning”)




  Rate versus NPER

      If you make monthly payments on a four-year loan at 12 percent annual
      interest, use 12%/12 for RATE and 4*12 for NPER. If you make annual
      payments on the same loan, use 12% for RATE and 4 for NPER.




FVSCHEDULE function

      This function calculates the “end-of-project” or “Future Value” of one
      initial investment at interest rates that may differ across periods. The
      function uses a series of compound interest rates to evaluate the Future
      Value.


                            Figure 99: The FVSCHEDULE dialog




      Location: INSERT/FUNCTION/FINANCIAL/FVSCHEDULE



111
                                       Financial Analysis using Excel




          FVSCHEDULE(Principal or Present Value, set of interest rates over the
          number of periods of the investment—this number should equal the
          number of periods of the investment and is typically referenced from a
          range of cells that contain information on the rates as numbers in the
          range 0 to 1)


                  Example: FVSCHEDULE(1,{0.09, 0.11, 0.1}) equals 1.33089




Difference between FV and FVSCHEDULE


                            Table 14: Difference between FV and FVSCHEDULE

          Parameter/Issue                     FV                   FVSCHEDULE

          Nature of the          Periodic, constant                One time only
          investments

          Rate applied           Constant                          Variable

          Periods                Needs information only on         Needs information on the
                                 total number of periods           rate during each period




7.4                       ANNUITIES — COMPARATIVE SUMMARY OF
                          FUNCTIONS


                          Table 15: Annuities — comparative summary of functions
                              Payment        Periodicity of        Interest rates   Consideration of
                              amounts         payments                               reinvestment

                            Same May Fixed Variable Constant May                    Cash inflows are
                             each differ time    time  across   differ                reinvested;
                            period each periods period periods across               borrowing costs
                                   period                      periods                 included

      Present values of
      multi-period cash
      flows




                                                                                                112
                                   Chapter 7: Discount Cast Flows




                             Payment     Periodicity of       Interest rates   Consideration of
                             amounts      payments                              reinvestment

                           Same May Fixed Variable Constant May                Cash inflows are
                            each differ time    time  across   differ            reinvested;
                           period each periods period periods across           borrowing costs
                                  period                      periods             included

  PV                        9              9                    9

  NPV                              9       9                    9

  XNPV                             9                 9          9

  Estimation of implicit
  or explicit interest
  rates

  RATE                      9              9                    9

  IRR                              9       9                    9

  MIRR                             9       9                    9                     9

  XIRR                             9                 9          9

  Future value
  estimation

  FV                        9              9                    9

  FVSCHEDULE                               9                          9

  Estimating number of
  periods

  NPER                      9              9                    9

  Estimating
  repayments for a loan

  IPMT                      9              9                    9

  PPMT                      9              9                    9

  PMT                       9              9                    9

  CUMIPMT                   9              9                    9

  CUMPRINC                  9              9                    9




113
                                         Financial Analysis using Excel




7.5                      DEPRECIATION




7.5.A               DEPRECIATION OF AN ASSET OVER A SINGLE PERIOD




Straight-line and Sum-of-year’s depreciation methods



      SLN function: Straight line depreciation

          Estimates depreciation during a particular period. All periods have the
          same depreciation amount.


          Location within INSERT/FUNCTION: FINANCIAL/SLN


          Cost: initial cost of asset,


          Salvage: value of asset at end of depreciation period,


          Life: life of asset in number of periods)




      SYD function: Sum-of-years' digit method

          Estimates depreciation during a particular period. Depreciation amounts
          decline over time.


          Location within INSERT/FUNCTION: FINANCIAL/SYD


          Same as for SLN, plus: Per– the period for which depreciation amount
          needs to be calculated.




                                                                                    114
                                                                          Chapter 7: Discount Cast Flows




                                                          Figure 100: Difference between SLN and SYD for a typical asset

                                                                          Comparing depreciation scedules across different methods


                                                $16,000

                                                $14,000
          $ Depreciation allowance for period

                                                                                                   Straight line (SLN)               Sum-of-years (SYD)
                                                $12,000

                                                $10,000

                                                 $8,000

                                                 $6,000

                                                 $4,000

                                                 $2,000

                                                    $0
                                                             1        2        3          4           5          6            7      8        9           10
                                                                                              Period from intial investment




7.5.B                                                 DEPRECIATION OF AN ASSET OVER SPECIFIED PERIOD USING
                                                      DECLINING BALANCE METHODS




Fixed declining balance method

        Select the option INSERT/FUNCTION/FINANCIAL/DB



                                                                          Figure 101: The DB function




115
                                                                        Financial Analysis using Excel




       Month: number of months in the first year. If omitted, Excel defaults to
       12.



                                                                     Figure 102: Comparing SYD and DB

                                                                          Comparing depreciation scedules across different methods


                                                   $16,000


                                                   $14,000
                                                                                                                        Sum-of-years (SYD)
             $ Depreciation allowance for period




                                                   $12,000


                                                   $10,000                                                              Fixed Declining Balance (DB) factor=1

                                                    $8,000


                                                    $6,000


                                                    $4,000


                                                    $2,000


                                                       $0
                                                             1   2         3           4           5            6           7        8          9         10
                                                                                            Period from intial investment




Variable declining balance method

       You can choose the factor at which the balance declines. The default is
       two, that is, “Double Declining.”


       Location: INSERT/FUNCTION/FINANCIAL/DDB.




                                                                                                                                                    116
                                Chapter 7: Discount Cast Flows




                               Figure 103: The DDB function




      This function this method computes depreciation at a higher rate than the
      fixed declining balance function. The depreciation is much higher than
      SLN, SYD, and DB in the first few periods.


      Example:

      Assume the following parameters define a piece of capital equipment:


            — Initial Cost =$100, 000

            — Salvage Value =$20, 000

            — Life =10 yrs

      The different depreciation amounts per period, estimated using different
      depreciation functions are shown in the table below and the next figure.


                      Table 16: Comparing SLN, SYD, DB and DDB results

             Method— > Straight Sum-of- Fixed     Double    Double            Double
                       line     years   Declining Declining Declining         Declining
      Period           (SLN) (SYD)      Balance Balance Balance               Balance
                                        (DB)      (DDB)     (DDB with         (DDB with
                                                  factor=2 factor=1.5)        factor=0.5)

      1     Depreciation $8, 000 $14, 545 $14, 900 $20, 000        $15, 000     $5, 000
            in specific
      2     period       $8, 000 $13, 091 $12, 680 $16, 000        $12, 750     $4, 750

      3                  $8, 000 $11, 636 $10, 791 $12, 800        $10, 838     $4, 513

      4                  $8, 000 $10, 182 $9, 183       $10, 240   $9, 212      $4, 287



117
                               Financial Analysis using Excel




       Method— > Straight Sum-of- Fixed     Double    Double                 Double
                 line     years   Declining Declining Declining              Declining
Period           (SLN) (SYD)      Balance Balance Balance                    Balance
                                  (DB)      (DDB)     (DDB with              (DDB with
                                            factor=2 factor=1.5)             factor=0.5)

5                      $8, 000 $8, 727     $7, 815      $8, 192   $7, 830       $4, 073

6                      $8, 000 $7, 273     $6, 650      $6, 554   $6, 656       $3, 869

7                      $8, 000 $5, 818     $5, 659      $5, 243   $5, 657       $3, 675

8                      $8, 000 $4, 364     $4, 816       $972     $4, 809       $3, 492

9                      $8, 000 $2, 909     $4, 098         $0     $4, 087       $3, 317

10                     $8, 000 $1, 455     $3, 488         $0     $3, 162       $3, 151


     Figure 104: Value of an asset after depreciation— comparing SLN, SYD, DB, and DDB




                                                                                           118
                                   Chapter 7: Discount Cast Flows




Allowing for a switch over between declining balances and straight line –the VDB
function

       This function uses a general declining method with switch over to straight
       line if depreciation goes above straight line before the salvage/end date.


       Location: INSERT/ FUNCTION/ FINANCIAL/ VDB


                                          Figure 105: VDB




       Select the option INSERT/FUNCTION/FINANCIAL/VDB (cost of
       investment, salvage cost, starting period which equals zero for 1st
       period’s depreciation, end of period which equals n for period n’s
       depreciation, factor, TRUE if you do not want to switch to Straight Line
       and FALSE or omitted otherwise)


       A comparison of variable declining depreciation is shown in the next table.


                               Table 17: VDB with factors of 1 and 1.5

                General declining method with           General declining method with
                switch over to straight line if         switch over to straight line if
       Period   depreciation goes above straight        depreciation goes above straight
                line before salvage date (a use of      line before salvage date (a use of
                VDB; using factor=1)                    VDB; using factor=1.5)

       1        $10, 000.00                             $15, 000.00

       2        $9, 000.00                              $12, 750.00

       3        $8, 100.00                              $10, 837.50




119
                                   Financial Analysis using Excel




               General declining method with            General declining method with
               switch over to straight line if          switch over to straight line if
      Period   depreciation goes above straight         depreciation goes above straight
               line before salvage date (a use of       line before salvage date (a use of
               VDB; using factor=1)                     VDB; using factor=1.5)

      4        $7, 557.14                               $9, 211.88

      5        $7, 557.14                               $7, 830.09

      6        $7, 557.14                               $6, 655.58

      7        $7, 557.14                               $5, 657.24

      8        $7, 557.14                               $4, 808.66

      9        $7, 557.14                               $4, 087.36

      10       $7, 557.14                               $3, 161.69




7.6                  RISK ANALYSIS— “IF-THEN” SCENARIOS

      Discount cash flow analysis has to take into account different scenarios
      because most of the input information is based on as-yet unknown future
      cash flows and future financial parameters. A method for including the
      different possible future scenarios is available through the menu option
      TOOLS/SCENARIOS. Refer to 15.1.




                                                                                             120
                                Chapter 7: Discount Cast Flows




                                                                     CHAPTER 8


                                                 SECURITIES FUNCTIONS



      In this chapter, you will learn about the following topics:


         — CALCULATING NUMBER OF DAYS (BETWEEN ISSUE/
                PURCHASE/ NEXT COUPON/SETTLEMENT)

         — BOND PRICES RESPONSIVENESS TO YIELD

         — PRICE, YIELD, AND DISCOUNT RATES FOR A SECURITY

         — INTEREST ACCRUALS

         — T BILL FORMULAE




8.1                 INFORMATION REQUIREMENTS

      This section explains the various information/data requirements for the
      functions taught in this chapter.


             — Issue is the date the security was issued into the primary
               securities market.


             — Settlement is the date (after the issue date) when the current
               owner purchased the security.


             — Maturity is the date the securities legal obligations end. For
               some securities, the maturity date may be the only date when a
               payment is made. A 30-year bond issued on January 1, 1996 is



121
                    Financial Analysis using Excel




  purchased by a buyer six months post-issue. The issue date
  would be January 1, 1996, the settlement date would be July 1,
  1996, and the maturity date would be January 1, 2026, 30 years
  after the January 1, 1996 is the date when the security was
  issued (first sold)— the issue date.


— Date of first coupon: is the security's first coupon date.
  Furthermore, in chronological descending order, maturity > first
  coupon > settlement > issue.


— Date of last coupon: the security's last coupon date. In addition,
  in chronological descending order, maturity > settlement > date
  of last interest payment


— Rate is the security's annual coupon rate. (Only relevant for
securities that make coupon payments.)


— Discount Rate is the discount rate implicit from the security.


— Price is the security's price per $100 face value.


— amount invested (Investment) or Present Value (PV) is the
amount invested on the date th security was purchased.


— Yield is the annual yield or return on the security


— Redemption is the security's redemption value per $100 face
value. (Only relevant for securities that hold value at maturity.
For some securities, Redemption is the security's redemption value
per $100 face value.)




                                                                       122
                                    Chapter 7: Discount Cast Flows




              — Frequency is the number of coupon payments per year.


                     — If annual, then frequency = 1
                     — If semiannual, then frequency = 2
                     — If quarterly, then frequency = 4
                     — If monthly, then frequency= 12


              — Basis is the type of day count. The different optional values are
                listed in the next table.


                                 Table 18: Codes for type of day count

      Basis        Day count

      0 or         30/360 or US basis:
      omitted
                                    30 days in the month and 360 days in the year.

      1            Actual/Actual:

                                    Actual number of days in the month and Actual
                                    number of days in the year.

      2            Actual/360:

                                    Actual number of days in the month and 360 days in
                                    the year.

      3            Actual/365:

                                    Actual number of days in the month and 365 days in
                                    the year.

      4            30360 or European

                                    30 days in the month and 360 days in the year.




123
                                       Financial Analysis using Excel




8.2                     COUPON-RELATED FUNCTIONS




COUPDAYBS

         This function calculates the number of days from the beginning of the
         coupon period to the settlement date10.



         Period calculated by the function

         COUPDAYBS = Days from beginning of coupon period to the settlement
         (purchase)


         Location within INSERT/FUNCTION: FINANCIAL/COUPDAYBS



           Figure 106: The information requirements for the functions COUPDAYBS, COUPDAYS,
                                             COUPDAYSNC




      10 Assume that a bond is defined by the following terms:  January 25, 1998 is the date
         when the bond was traded (the settlement date). November 15, 1999 is the date
         when the bond will pay back in full and will close (the maturity date). The security’s
         interest (and coupon payment) is calculated on a semiannual basis -- that is, the
         security has a semiannual coupon. The type of day count basis is actual number of
         days in the month and actual number of days in the year -- Actual / Actual basis. For
         this bond, the number of days from the beginning of the coupon period to the
         settlement date is:
                COUPDAYBS ("1/25/1998”, “11/15/1999”, 2, 1) = 71



                                                                                                  124
                                     Chapter 7: Discount Cast Flows




         Data requirements
            • settlement date
            •   maturity date
            •   frequency of payments

            •   basis




         See section 8.1 on page 116 for a definition of each of the information
         requirements.




COUPDAYS

         This function calculates the number of days in the coupon period that
         contains the settlement date11.



         Period calculated by the function

         COUPDAYS = Days in coupon period


         Location within INSERT/FUNCTION: FINANCIAL/COUPDAYS


         Data requirements
            • settlement date
            •   maturity date

            •   frequency of payments




      11 Continuing the example from the previous footnote.  For this bond, the number of
         days in the coupon period that contains the settlement date is:
                COUPDAYS ("1/25/1998”, “11/15/1999”, 2, 1) = 181


125
                                   Financial Analysis using Excel




         •   basis

      (Same as for COUPDAYBS.)


      See section 8.1 on page 116 for a definition of each of the information
      requirements.




COUPDAYSNC

      This function calculates the number of days from the settlement date to
      the next coupon date12.



      Period calculated by the function

      COUPDAYSNC= Days to next coupon after settlement (purchase)


      Location within INSERT/FUNCTION: FINANCIAL/COUPDAYSNC


      Data requirements
         • settlement date

         •   maturity date
         •   frequency of payments
         •   basis

      See section 8.1 on page 116 for a definition of each of the information
      requirements.




   12 Continuing the example from the previous footnote. For this bond, the number of
      days from the settlement date to the next coupon date is:
             COUPDAYSNC (“1/25/1998”, “11/15/ 1999”, 2, 1) = 110



                                                                                        126
                                      Chapter 7: Discount Cast Flows




COUPNCD

         This function calculates a number that represents the next coupon date
         after the settlement date13.



         Period calculated by the function

         COUPNCD = Next Coupon Date


         Location within INSERT/FUNCTION: FINANCIAL/COUPNCD


         Data requirements
            • settlement date
            •   maturity date
            •   frequency of payments

            •   basis

         Same as the previous two functions, but the output is a number — a serial
         number for the date. To view the number as a date, click Cells on the
         Format menu, click Date in the Category box, and then click a date format
         in the Type box.


         See section 8.1 on page 116 for a definition of each of the information
         requirements.




      13 Continuing the example from the previous footnote.   For this bond, the next coupon
         date after the settlement date (in the 1900 date system) is:
                 COUPNCD (“1/25/1998”, “11/15/1999”, 2, 1) = 35930.

          To view the number as a date (May 15, 1998) instead of a serial number (35930),
         click Cells on the Format menu, click Date in the Category box, and then click a date
         format in the Type box


127
                                   Financial Analysis using Excel




COUPPCD

      This function calculates a number that represents the previous coupon
      date before the settlement date14.



      Period calculated by the function

      COUPPCD = Previous Coupon Date


      Location within INSERT/FUNCTION: FINANCIAL/COUPPCD


      Data requirements
         • settlement date
         •   maturity date
         •   frequency of payments

         •   basis

      Same as for COUPNCD — see above.


      See section 8.1 on page 116 for a definition of each of the information
      requirements.




   14 Continuing the example from the previous footnote.  For this bond, the previous
      coupon date before the settlement date (in the 1900 date system) is:
       COUPPCD (“1/25/1998”, “11 /15/1999”, 2, 1) = 35749. or November 15, 1997
      To view the number as a date (November 15, 1997) instead of a serial number
         (35749), click Cells on the Format menu, click Date in the Category box, and then
         click a date format in the Type box.



                                                                                             128
                                     Chapter 7: Discount Cast Flows




COUPNUM

         This function calculates the number of coupons payable between the
         settlement date and maturity date, rounded up to the nearest whole
         coupon15.



         Number calculated by the function

         COUPNUM = Coupon + Number of Coupon Payments from “Now”
         Till Maturity


         Location within INSERT/FUNCTION: FINANCIAL/COUPNUM


         Data requirements
            • settlement date
            •   maturity date

            •   frequency of payments
            •   basis

         Same as for COUPNCD — see above.


         See section 8.1 on page 116 for a definition of each of the information
         requirements.



                                 Table 19: Example of Coupon functions

  Issue Date     1/25/1998




      15 Continuing the example from the previous footnote.   For this bond, the number of
         coupon payments is:
         COUPNUM (“1/25/1998”, “11/15/1999”, 2, 1) = 4.


129
                                       Financial Analysis using Excel




 Maturity Date    11/15/1999    …make sure that the dates are in date format. Go to the menu option
                                FORMAT/CELLS/NUMBER. Select the type “Date.”

Settlement Date    3/14/1999

     Frequency         2

          Basis        1




FUNCTIONS          RESULT

COUPDAYBS             119       ...number of days from the beginning of the coupon period to the
                                settlement date

COUPDAYS              181       ...number of days in the coupon period that contains the settlement
                                date

COUPDAYSNC            62        ...number of days from the settlement date to the next coupon date

COUPNCD              36295      …implies that Excel has returned a “Date Serial Number” instead of
                                the date. If this happens, then go to FORMAT/CELLS/NUMBER.
                                Select the type “Date.” The serial number will change to the date
                                shown on the right

COUPPCD           11/15/1998    …previous coupon date before the settlement date

COUPNUM                2        …number of coupons from settlement to maturity




 DURATION & MDURATION (Bond price’s response to changes in yield) functions

          This function calculates the Macaulay duration for an assumed par value
          of $10016. Duration is the weighted average of the present value of future




       16 Assume that a bond is defined by the following terms: January 1, 1998 is the date

          when the bond was traded (the settlement date). January 1, 2006 is the date when
          the bond will pay back in full and will close (the maturity date)



                                                                                              130
                                    Chapter 7: Discount Cast Flows




      cash flows. The function measures a bond price's response to changes in
      the annual yield.


      Location: INSERT/FUNCTION/FINANCIAL/DURATION or
      MDURATION.


                   Figure 107: Data requirements for DURATION and MDURATION




      8 % coupon. 9.0 % yield. Frequency is semiannual. The type of day count basis is
         actual number of days in the month and actual number of days in the year --
         Actual / actual basis (so the value of basis = 1).
      -- For this bond, the duration (in the 1900 date system) is:
              DURATION (“1/1/1998”, “1/1/2006”, 0.08, 0.09, 2, 1) = 5.993775
      -- For this bond, the modified duration is:
              MDURATION (“1/1/1998”, “1/1/2006”, 0.08, 0.09, 2, 1) = 5.73567


131
                                          Financial Analysis using Excel




8.3                        PRICE VERSUS YIELD, & INTEREST CALCULATIONS




8.3.A                 SECURITY THAT PAYS PERIODIC INTEREST (COUPON PAYING
                      BOND)




      YIELD

           This function calculates the yield on a security that pays periodic interest,
           that is, bonds17.


           Location within INSERT/FUNCTION: FINANCIAL/YIELD


           Data requirements
              • settlement date
               •   maturity date
               •   price or par value

               •   redemption amount
               •   frequency of payments
               •   basis




        17 Assume that a bond is defined by the following terms: February 15, 1999 is the date

           when the bond was traded (the settlement date). November 15, 2007 is the date
           when the bond will pay back in full and will close (the maturity date)
           5.75 % coupon. 95.04287 price. $100 redemption value. Frequency is semiannual.
              The type of day count basis is 30 days in the month and 360 days in the year -- 30
              / 360 basis (so the value of basis = 0).
           For this bond, the yield is:
                   YIELD (“2/15/1999”, “11/15/2007”, 0.0575, 95.04287, 100, 2, 0) = 0.065 or 6.5
              %



                                                                                                   132
                                 Chapter 7: Discount Cast Flows




         •   rate, where:

             Rate is the security's annual coupon rate, Price is the security's
             price per $100 face value, and Redemption is the security's
             redemption value per $100 face value.


             See section 8.1 on page 116 for a definition of each of the information
             requirements.




 PRICE

      This function calculates the price per $100 face value on a security that
      pays periodic interest.


      Location within INSERT/FUNCTION: FINANCIAL/PRICE


      Data requirements
         • settlement date
         •   maturity date

         •   annual rate
         •   yield
         •   redemption amount

         •   frequency of payments
         •   basis

      See section 8.1 on page 116 for a definition of each of the information
      requirements.




 ACCRINT

      This function calculates the accrued interest for a security that pays


133
                                   Financial Analysis using Excel




       periodic interest.


       Location within INSERT/FUNCTION: FINANCIAL/ACCRINT


       Data requirements
          • issue date
           •   settlement date
           •   date of first payment

           •   annual rate
           •   par value. If you omit par value a default of $1,000 is used

               See section 8.1 on page 116 for a definition of each of the information
               requirements.




Price and Yield for odd (long or short) first or last period Bonds



  Odd First Period

       Price per $100 face value


       Location within INSERT/FUNCTION: FINANCIAL/ODDFPRICE


       Data requirements
          • settlement date
           •   maturity date

           •   rate
           •   yield
           •   redemption amount

           •   frequency of payments
           •   basis



                                                                                         134
                                   Chapter 7: Discount Cast Flows




         •     date of first coupon, where:

      Date of first coupon: is the security's first coupon date. Furthermore, , in
      chronological descending order, maturity > first coupon > settlement >
      issue.


               See section 8.1 on page 116 for a definition of each of the information
               requirements.




 Yield

      Location within INSERT/FUNCTION: FINANCIAL/ODDFYIELD


      Data requirements
         • settlement date

         •     maturity date
         •     rate
         •     price

         •     redemption amount
         •     frequency of payments
         •     basis

         •     date of first coupon, where:

      Date of first coupon: is the security's first coupon date. Furthermore, in
      chronological descending order, maturity > first coupon > settlement >
      issue


      See section 8.1 on page 116 for a definition of each of the information
      requirements.




135
                                Financial Analysis using Excel




Odd Last Period

    Price per $100 face value


    Location within INSERT/FUNCTION: FINANCIAL/ ODDLPRICE


    Data requirements
       • settlement date

        •   maturity date
        •   rate
        •   yield

        •   redemption amount
        •   frequency of payments
        •   basis

        •   date of last coupon, where:

    Date of last coupon: the security's last coupon date. In addition, , in
    chronological descending order, maturity > settlement > date of last
    interest payment


    See section 8.1 on page 116 for a definition of each of the information
    requirements.




Yield

    Location within INSERT/FUNCTION: FINANCIAL/ODDLYIELD


    Data requirements
       • settlement date
        •   maturity date
        •   rate




                                                                              136
                                 Chapter 7: Discount Cast Flows




         •   price
         •   redemption amount

         •   frequency of payments
         •   basis
         •   date of last coupon, where:

      Date of last coupon: the security's last coupon date. Furthermore,
      maturity > settlement > date of last interest payment


      See section 8.1 on page 116 for a definition of each of the information
      requirements.




137
                                          Financial Analysis using Excel




8.3.B                 A DISCOUNTED SECURITY 18 WHICH MAY PAY REDEMPTION AT
                      MATURITY




   DISC

           This function calculates the discount rate for a security19.


           Location within INSERT/FUNCTION: FINANCIAL/ DISC




        18 Assume that a bond is defined by the following terms:


               •   February 15, 1999 is the date when the bond was traded (the settlement
                   date)
               •   March 1, 1999 is the date when the bond will pay back in full and will close
                   (the maturity date)
               •   5.25 % discount rate

               •   $100 redemption value
               •   The type of day count basis is actual number of days in the month and 360
                   days in the year -- Actual / 360 basis (so the value of basis = 2) basis
           The bond price (in the 1900 date system) is:
                   PRICEDISC (“2/15/1999”, “3/1/1999”, 0.0525, 100, 2) = 99.79583
        19 Assume that a bond is defined by the following terms: February 15, 1998 is the date

           when the bond was traded (the settlement date). June 10, 1998 is the date when the
           bond will pay back in full and will close (the maturity date). $97.975 is the market
           price of the security. $100 redemption value. The type of day count basis is actual
           number of days in the month and 360 days in the year -- Actual / 360 basis (so the
           value of basis = 2) basis.
           For this bond, the discount rate is:

                   DISC (“2/15/1998”, “6/10/1998”, 97.975, 100, 2) = 0.063391 or 6.3391 %



                                                                                                  138
                                 Chapter 7: Discount Cast Flows




                                          Figure 108




      Data requirements
         • settlement date
         •   maturity date

         •   basis
         •   price
         •   redemption amount, where:

      Price is the security's price per $100 face value and Redemption is the
      security's redemption value per $100 face value.


      See section 8.1 on page 116 for a definition of each of the information
      requirements.




 PRICEDISC

      This function calculates the price per $100 face value of a discounted
      security


      Location within INSERT/FUNCTION: FINANCIAL/ PRICEDISC


      Data requirements
         • settlement date

         •   maturity date
         •   discount rate



139
                              Financial Analysis using Excel




      •   annual yield
      •   redemption amount




YIELDDISC

   This function calculates the annual yield for a discounted security


   Location within INSERT/FUNCTION: FINANCIAL/ YIELDDISC


   Data requirements
      • settlement date
      •   maturity date

      •   price per $100 face value
      •   redemption amount
      •   basis

   See section 8.1 on page 116 for a definition of each of the information
   requirements.




                                                                             140
                                          Chapter 7: Discount Cast Flows




8.3.C                 SECURITY THAT PAYS INTEREST AT MATURITY 20




   PRICEMAT

           This function calculates the price per $100 face value of a security that
           pays interest at maturity


           Location within INSERT/FUNCTION: FINANCIAL/ PRICEMAT


           Data requirements
              • settlement date

               •   maturity date
               •   issue date
               •   discount rate

               •   annual yield

           See section 8.1 on page 116 for a definition of each of the information
           requirements.




        20 Assume that a bond is defined by the following terms: February 15, 1999 is the date

           when the bond was traded (the settlement date). April 13, 1999 is the date when the
           bond will pay back in full and will close (the maturity date)
           November 11, 1998 is the date when the security was issued (first sold)-- the issue
             date. 6.1 % The security’s interest (and coupon payment) is calculated on a
             semiannual basis -- that is, the security has a semiannual coupon. 6.1 % yield.
             The type of day count basis is 30 days in the month and 360 days in the year -- 30
             / 360 basis (so the value of basis = 0)
           For this bond, the price is:
                  PRICEMAT (“2/15 /1999”, “4/13/1999”, “11/11/1998”, 0.061, 0.061, 0) =
              99.98449888


141
                                  Financial Analysis using Excel




YIELDMAT

    This function calculates the annual yield of a security that pays interest
    at maturity


    Location within INSERT/FUNCTION: FINANCIAL/ YIELDMAT


    Data requirements
       • settlement date
        •   maturity date

        •   issue date
        •   discount rate
        •   price per $100 face value (par value)

    See section 8.1 on page 116 for a definition of each of the information
    requirements.




ACCRINTM

    This function calculates the accrued interest for a security that pays
    interest at maturity21.


    Location within INSERT/FUNCTION: FINANCIAL/ ACCRINTM




 21 A treasury note has the following terms:   April 1, 1998 is the date when the security
    was issued (first sold)-- the issue date. June 15, 1998 is the date when the bond will
    pay back in full and will close (the maturity date). 10.0 % coupon. $1,000 par value.
    The type of day count basis is actual number of days in the month and 365 days in
    the year -- Actual / 365 basis (so the value of basis = 3).
    For this treasury note, the accrued interest (in the 1900 date system) is:

            ACCRINTM (“4/1/1998”, “6/15/1998”, 0.1, 1000, 3) = 20.54795



                                                                                             142
                                 Chapter 7: Discount Cast Flows




                                          Figure 109




      Data requirements
         • settlement date
         •   issue date
         •   basis

         •   discount rate
         •   price per $100 face value (par value). If you omit par, ACCRINTM
                 uses $1,000.

      See section 8.1 on page 116 for a definition of each of the information
      requirements.




143
                                         Financial Analysis using Excel




8.3.D                 FULLY INVESTED SECURITY




   INTRATE

           This function calculates the interest rate for a fully invested security22.


           Location within INSERT/FUNCTION: FINANCIAL/ INTRATE


           Data requirements
              • settlement date
              •   maturity date
              •   discount rate

              •   amount invested (Investment)
              •   basis

           See section 8.1 on page 116 for a definition of each of the information
           requirements.




   RECEIVED

           This function calculates the amount received that is, the redemption) at




        22 Assume that a bond is defined by the following terms: February 15, 1999, settlement

           (and also the -issue) date. May 15, 1999 is the date when the bond will pay back in
           full and will close (the maturity date). 1, 000, 000 investment. 5.75 % discount rate.
           The type of day count basis is actual number of days in the month and 360 days in
           the year -- Actual / 360 basis (so the value of basis = 2).
           For this bond, the total amount received at maturity (in the 1900 date system) is:
                   RECEIVED (“2/15/1999”, “5/15/1999”, 1000000, 0.0575, 2) = 1, 014, 420.266,
              or $1, 014, 420.27



                                                                                                    144
                                                                        Chapter 7: Discount Cast Flows




            maturity for a fully invested security.


            Location within INSERT/FUNCTION: FINANCIAL/ RECEIVED


            Data requirements
               • settlement date
                  •   maturity date
                  •   discount rate

                  •   amount invested (Investment)
                  •   basis

            See section 8.1 on page 116 for a definition of each of the information
            requirements.




 8.4                              INFORMATION REQUIREMENTS FOR LOAN
                                  REPAYMENT AND SECURITIES FUNCTIONS


             Table 20: Summary of information requirements for loan repayment and securities functions

                         Information requirements for function
                                           Dates                                  Prices and par values                                          Frequency,                             Yields and
                                                                                                                                                 and related                        interest/ discount
                                                                                                                                                                                          rates
                                                                                                 Any amount paid




       Function
                                                                                                                                             Frequency of
                                                                                                                                             payments pa
                                 First coupon




                                                                                                                                Redemption
                                                                                                   at maturity




                                                                                                                                                            # of periods
                                                                                                                   Investment
                                                                                    Par/coupon
                                                Settlement

                                                             Maturity




                                                                                                                                                                                           Discount


                                                                                                                                                                                                      Interest
                                                                                                                     amount

                                                                                                                                  amount




                                                                                                                                                                           Basis
                         Issue




                                                                                                                                                                                   Yield
                                                                          Price




COUPDAYBS                                         9            9                                                                                9                           9
COUPDAYS                                          9            9                                                                                9                           9
COUPDAYSNC                                        9            9                                                                                9                           9
COUPNCD                                           9            9                                                                                9                           9
COUPPCD                                           9            9                                                                                9                           9



 145
                                                                       Financial Analysis using Excel




                        Information requirements for function
                                          Dates                                  Prices and par values                                          Frequency,                             Yields and
                                                                                                                                                and related                        interest/ discount
                                                                                                                                                                                         rates




                                                                                                Any amount paid
       Function




                                                                                                                                            Frequency of
                                                                                                                                            payments pa
                                First coupon




                                                                                                                               Redemption
                                                                                                  at maturity




                                                                                                                                                           # of periods
                                                                                                                  Investment
                                                                                   Par/coupon
                                               Settlement

                                                            Maturity




                                                                                                                                                                                          Discount


                                                                                                                                                                                                     Interest
                                                                                                                    amount

                                                                                                                                 amount




                                                                                                                                                                          Basis
                        Issue




                                                                                                                                                                                  Yield
                                                                         Price
COUPNUM                                          9            9                                                                                9                           9
DURATION                                         9            9                     9                                                          9                                     9
MDURATION                                        9            9                     9                                                          9                                     9
PRICE                                            9            9                                    9                            9                                                    9                 9
PRICEDISC                                        9            9                                    9                            9                                          9                   9
                        9




PRICEMAT                                         9            9                                    9                                                                                 9                 9
RECEIVED                                         9            9                                                    9                                                       9                   9
YIELD                                            9            9           9                        9               9                           9                           9                           9
YIELDDISC                                        9            9           9                        9               9                                                       9
                        9 9 9




YIELDMAT                                         9            9           9                                                                                                9                           9
                          9




ACCRINT                                          9                                  9                                                          9                           9                           9
ACCRINTM                                                      9                     9                                                                                      9                           9
INTRATE                                          9            9                                    9               9            9                                          9
DISC                                             9            9           9                        9               9                                                       9




 8.5                             T BILL FORMULAE




 TBILLEQ function

            This function estimates the “bond-equivalent” yield for a T-Bill.


            Location within INSERT/FUNCTION: FINANCIAL/TBILLEQ


            Data requirements
               • settlement date
                  •   maturity date



                                                                                                                                                                                          146
                                 Chapter 7: Discount Cast Flows




         •   discount rate

      See section 8.1 on page 116 for a definition of each of the information
      requirements.


      Example:
      TBILLEQ (“3/31/1999”, “6/1/1999”, 0.0914) = 0.094151 or 9.4151 %


                                    Figure 110: TBILLEQ




TBILLPRICE function

      This function evaluates the price per $100 face value (this value is the
      amount the Treasury – the issuer of the T-Bill -- has to pay you at
      maturity) of a T-Bill, given the Settlement and Maturity dates, and the
      Discount Rate.


      The price must be less than 100, because an investor will only purchase a
      T-Bill if the amount she receives at maturity (which is always $100 per
      $100 face value) is more than the market price of the T–Bill.



                                  Figure 111: TBILLPRICE




      Location within INSERT/FUNCTION: FINANCIAL/ TBILLPRICE


147
                                    Financial Analysis using Excel




   Data requirements
      • settlement date
       •   maturity date
       •   discount rate

   See section 8.1 on page 116 for a definition of each of the information
   requirements.




   For Example, if 9% (or 0.09) is the discount rate on a T-Bill purchased on
   3/31/1999 maturing on 6/1/1999, then the price per $100 face value of the
   T-Bill is:




   TBILLPRICE (“3/31/1999”, “6/1/1999”, 0.0914) = 98.45



   Table 21: Example of functions for estimating the bond-equivalent T-Bill yield and the market
                                   price (par value) of a T-Bill23.

   Settlement Date      3/31/1999

   Maturity Date        6/1/1999

   Discount Rate        9.14%




   Function             Result

   TBILLEQ              9.42%         The 9.14% yield of the T-Bill is equivalent to a
                                      Bond with a yield of 9.42%




23 The example is in the worksheet “T-Bill formulas given discount” in the sample file “T-

   Bill.xls.” Additional samples will be available at
   http://www.vjbooks.net/excel/samples.htm.



                                                                                                   148
                                  Chapter 7: Discount Cast Flows




       TBILLPRICE        98.43       Price per $100 face value— this value is the
                                     amount the Treasury has to pay you at maturity—
                                     of a T-Bill




TBILLYIELD function: Yield for a treasury bill (given market price or par value)

       This function measures the yield of a T-Bill, given the Settlement and
       Maturity dates, and the Treasury bill's Price per $100 face value.


       Location within INSERT/FUNCTION: FINANCIAL/TBILLYIELD.


                                   Figure 112: TBILLYIELD




       Data requirements
          • settlement date
          •   maturity date

          •   Price per $100 face value

       See section 8.1 on page 116 for a definition of each of the information
       requirements.




       For Example, if 98.45 is the market price of the security per $100 face
       value of a T-Bill purchased on 3/31/1999 maturing on 6/1/1999, then:


       TBILLYIELD (“3/31/1999”, “6/1/1999”, 98.45) = 0.091417 or 9.1417 %




149
                                Financial Analysis using Excel




Table 22: T-Bill Yield. The example is in the worksheet “T-Bill Yield” in the sample file “T-
                                         Bill.xls.”

Settlement Date      3/31/1999

Maturity Date        6/1/1999

Price                98.40          (market price of the security per $100 face value)

Function             Result

TBILLYIELD           9.44%         The yield on the T-Bill




                                                                                                150
Page for Notes
                          Financial Analysis using Excel




                                                              CHAPTER 9


                   FUNCTIONS FOR BASIC STATISTICS



This chapter discusses the following topics:


   — “AVERAGED” MEASURES OF CENTRAL TENDENCY

   — AVERAGE, TRIMMED MEAN, HARMONIC MEAN, GEOMETRIC
          MEAN

   — LOCATION MEASURES OF CENTRAL TENDENCY

   — MEDIAN, MODE

   — OTHER LOCATION PARAMETERS

   — QUARTILE, PERCENTILE

   — MAXIMUM VALUE, MINIMUM VALUE, LARGE, SMALL

   — RANK OR RELATIVE STANDING OF EACH CELL WITHIN THE
          RANGE OF A SERIES

   — MEASURES OF DISPERSION (STANDARD DEVIATION &
          VARIANCE)

   — STDEV, VAR, STDEVA, VARA, STDEVP, VARP, STDEVPA,
          VARPA

   — SHAPE ATTRIBUTES OF THE DENSITY FUNCTION

   — SKEWNESS, KURTOSIS

   — FUNCTIONS ENDING WITH AN “A” SUFFIX

I am presuming that the reader is familiar with basic statistical functions
and/or has access to a basic statistics reference for learning more about




                                                                              152
                              Chapter 9: Functions for Basic Statistics




        each function.




9.1                  “AVERAGED” MEASURES OF CENTRAL TENDENCY

        These set of functions perform some type of averaging to measure a
        “mean” value. You may want to use the Trimmed Mean function to
        estimate an average that excludes the extreme values of the data series.
        The Harmonic Mean estimates the averages of the reciprocals of the
        numbers in the series. The Geometric Mean is used to average rates of
        change.


        Samples will be available at http://www.vjbooks.net/excel/samples.htm.




9.1.A             AVERAGE


        The function calculates the simple arithmetic average of all cells in the
        chosen range.


        Menu path to function: Go to the menu option INSERT/FUNCTION and
        choose the formula “AVERAGE the function category STATISTICAL.


                                 Figure 113: AVERAGE function




153
                                  Financial Analysis using Excel




        Data requirements: The X values can be input as references to one or more
        ranges that may be non–adjacent. The second range can be referenced in
        the first text-box “Number1” after placing a comma after the first range,
        or it could be referenced in the second text-box “Number2.” If you use the
        second text-box, then a third text-box “Number3” will automatically open.
        (As you fill the last visible box, another box opens until the maximum
        number of boxes — 30 — is reached.)


        The function does not count invalid cell values when counting the number
        of X values. The X values can take any real number value.




9.1.B            TRIMMEAN (“TRIMMED MEAN”)


        This function is a variation of the average or mean. This function
        calculates the average for a set of X values after removing “extreme
        values” from the set. The excluded cells are chosen by the user based on
        the extremity (from mean/median) of the values in the range.
        TRIMMEAN calculates the mean taken by excluding a percentage of data
        points from the top and bottom tails of a data set. The user decides on the
        percentage of extreme values to drop. For symmetry, TRIMMEAN
        excludes a set of values from the top and bottom of the data set before
        moving on to the next exclusion.


        Menu path to function: INSERT/FUNCTION/STATISTICAL/TRIMMEAN.


        Data requirements: The X values can be input as references to one or more
        ranges that may be non–adjacent. The function does not count invalid cell
        values when counting the number of X values. The X values can take any
        real number value.




                                                                                      154
                              Chapter 9: Functions for Basic Statistics




                             Figure 114: TRIMMEAN (Trimmed Mean)




        In the dialog (shown above), Percent is the fractional number of data
        points to exclude from the calculation. Percent must be greater than zero
        and less than one.




9.1.C            HARMEAN (“HARMONIC MEAN”)


        The function calculates the harmonic mean of all cells in the chosen
        range(s). The harmonic mean is the reciprocal of the arithmetic mean of
        reciprocals. In the formula below, H is the harmonic mean, n the
        sample/range size and the Y’s are individual data values.


        Menu path to function: INSERT/FUNCTION/STATISTICAL/HARMEAN.


                             Figure 115: HARMEAN (Harmonic Mean)




        Data requirements: The X values can take any real number value except
        zero.




155
                                     Financial Analysis using Excel




                Table 23: Comparing the results of the functions Average, Trimmed Mean
                                         and Harmonic Mean

        Function              s1        s2          x1           x2       x3       x4

        Average/mean          7.32      7.23        1173.00      14.55    0.17     1158.45

        Trimmed Mean          7.13      7.00        1173.00      14.42    0.02     1158.71

        Harmonic Mean         3.84      3.18        120.17       13.52    0.01     #NUM!


        Harmonic mean for x4 is zero because one value of x4 is not positive.




9.1.D              GEOMEAN (“GEOMETRIC MEAN”)


        This function is typically used to calculate average growth rate given
        compound interest with series rates. In general, the function is good for
        estimating average growth or interest rates.


        Menu path to function: INSERT/ FUNCTION/ STATISTICAL/
        GEOMEAN. Data requirements: All values should be positive.


                              Figure 116: GEOMEAN (Geometric Mean)




                                                                                             156
                            Chapter 9: Functions for Basic Statistics




9.2                LOCATION MEASURES OF CENTRAL TENDENCY
                   (MODE, MEDIAN)

      The Median and — less often — the Mode are also used for estimating the
      central tendency of a series. The Median is much better in situations
      where, either:


           (a) A few extreme highs or lows are influencing the Mean (note that
              the TRIMMEAN or Trimmed Mean function shown in the
              previous section can reduce the chance of extreme values over-
              influencing a Mean estimate), or


           (b) The central tendency is required to obtain the mid-point of
              observed values of the data series as in the “Median Voter”
              models, which are used to know if the “Median Voter” threshold is
              crossed in support of a point on the nominee’s agenda. (In a two-
              person face-off, any more than the Median vote will result in a
              greater than 50% majority).


      Samples will be available at http://www.vjbooks.net/excel/samples.htm.


                            Figure 117: Some location indicators
                                                                            Mode




                                 Median4                      75 th percentile
                                                              (or 3 rd
                                                              quartile)




157
                                  Financial Analysis using Excel




9.2.A            MEDIAN


        The Median is the number in the middle of a set of numbers. It is the 50th
        percentile.


        Menu path to function: INSERT/FUNCTION/STATISTICAL/MEDIAN.
        Data requirements: Any array/range with real numbers.




9.2.B            MODE


        This function returns the most frequently occurring value in a range.


        Menu path to function: INSERT/FUNCTION/STATISTICAL/MODE.
        Data requirements: Any array/range with real numbers. The range has to
        contain duplicate data values.




9.3                   OTHER LOCATION PARAMETERS (MAXIMUM,
                      PERCENTILES, QUARTILES, OTHER)

        Other useful location indicators for key points in a series are the
        quartiles, percentiles, maximum value, minimum value, the Kth largest
        value, and the rank.


        Samples will be available at http://www.vjbooks.net/excel/samples.htm.




                                                                                     158
                               Chapter 9: Functions for Basic Statistics




9.3.A               QUARTILE


        This function calculates a quartile of a data series.


                                 QUARTILE (Data, Quartile)


        Choose the quartile you desire to obtain. The five quartiles are shown in
        the next table.


                                  Table 24: Choosing the Quartile

                Quartile value of…        Calculates the...

                0                         0.0….1% ile

                1                         First quartile (25th percentile)

                2                         Median value (50th percentile)

                3                         Third quartile (75th percentile)

                4                         Fourth quartile (99.9x%ile)




        Menu path to function: INSERT/FUNCTION/STATISTICAL/QUARTILE.

        Data requirements: Any array/range with real numbers. Note: the data

        series has to contain between 1 and 8,191 data points




9.3.B               PERCENTILE


        This function returns the Pth percentile of values in a data series. You can
        use this function to establish a threshold of acceptance. For example, you
        can prefer to examine candidates who score above the 95th percentile will
        qualify for a scholarship.




159
                                       Financial Analysis using Excel




        Menu path to function:
        INSERT/FUNCTION/STATISTICAL/PERCENTILE.


          Figure 118: Estimating the 5th percentile. K is the percentile value in the range 0 to 1.




        Data requirements: Any array/range with real numbers. If the data array
        is empty or contains more than 8,191 data points, PERCENTILE returns
        the” #NUM!” error value. If K is not a multiple of (1/(n — 1)), then Excel
        interpolates the value at the Kth percentile.



                               Figure 119 : Estimating the 95th percentile




9.3.C             MAXIMUM, MINIMUM AND “KTH LARGEST”




MAX (“Maximum value”)

        MAX and MAXA: The functions calculate the largest value in a series.




                                                                                                      160
                              Chapter 9: Functions for Basic Statistics




        Menu path to function: STATISTICAL/MAX , & STATISTICAL/MAXA.


        Data Requirements: Any array/range with real numbers. In addition,
        MAXA may include “True,” “False,” or numbers in text format




MIN (“Minimum value”)

        MIN and MINA: The functions calculate the smallest value in a series


        Menu path to function: STATISTICAL/MIN, & STATISTICAL/MINA


        Data Requirements: Any array/range with real numbers. In addition,
        MINA include “True,” “False,” or numbers in text format




LARGE

        This function calculates the Kth largest value in a range.


                                       Figure 120: LARGE




        Menu path to function: STATISTICAL/LARGE


        Data Requirements: Any real number.




161
                                  Financial Analysis using Excel




SMALL

        This function calculates the Kth smallest value in a range.


        Menu path to function: STATISTICAL/SMALL


        Data Requirements: Any real number.




9.3.D             RANK OR RELATIVE STANDING OF EACH CELL WITHIN THE
                  RANGE OF A SERIES




   PERCENTRANK

        The PERCENTRANK function returns the rank of a value in a data set as
        a percentage of the data set. The function can be used to evaluate the
        relative standing of a value within a data set. For example, you can use
        PERCENTRANK to evaluate the standing of a test score among all scores
        for the test.


                           Figure 121: Percentrank of the average/mean




        Menu path to function: INSERT/FUNCTION / STATISTICAL /
        PERCENTRANK.




                                                                                   162
                                Chapter 9: Functions for Basic Statistics




          Data requirements: Any array/range with real numbers.




      RANK

          The function RANK calculates the relative rank of a value within a series
          of numbers data. You can choose to obtain the ranks on the basis of
          ascending or descending values. X is the data point whose rank is desired
          within the range. Order sets the sorting direction— 1 for ascending
          ranking, 0 or blank for descending ranking. Cells with the same value
          cells are given the same rank.


          Menu path to function: INSERT / FUNCTION / STATISTICAL / RANK.


          Data requirements: Any array/range with real numbers.




9.4                    MEASURES OF DISPERSION (STANDARD DEVIATION
                       & VARIANCE)


                              Table 25: Standard Deviation & Variance.

                       Description                   Location within        Data Requirements
       Function                                      INSERT /
                                                     FUNCTION




163
                                  Financial Analysis using Excel




                    Description                  Location within   Data Requirements
  Function                                       INSERT /
                                                 FUNCTION




                    The functions STDEV          STATISTICAL /     Any range with
mple dispersion:    and VAR estimate the         STDEVA            sufficient number of
DEV, VAR            sample standard              &                 numeric data points.
                    deviation and variance,      STATISTICAL /     Text and logical values
                    respectively. VAR is         VARA              are excluded.
                    the square of STDEV.

  STDEVA, VARA      These are variants of                          Text and logical values
                    the functions above but      STATISTICAL /     such as TRUE and
                    with a wider range of        STDEVA            FALSE are included in
                    acceptable data types                          the calculation. TRUE
                    as input data.               &                 is valued as 1; text or
                                                 STATISTICAL /     FALSE is valued as 0.

                                                 VARA


                   The less often used
                   population dispersion
                   functions are                                   A large number of
 ulation dispersio sometimes also used for       STATISTICAL /     observations.
DEVP,              large sample sizes.           STDEVA
                   STDEVP assumes that                             Text and logical values
RP                                               &                 are excluded.
                   its data are the entire
                   population. Typically,        STATISTICAL /
                   you use the sample
                   formulae. For large           VARA
                   sample sizes, STDEV
                   and STDEVP return
                   approximately equal
                   values. VARP is
                   square of STDEVP

  STDEVPA,          These are variants of                          Text and logical values
  VARPA             the functions above but      STATISTICAL /     such as TRUE and
                    with a wider range of        STDEVA            FALSE are included in
                    acceptable data types                          the calculation. TRUE
                    as input data                &                 is valued as 1; text or
                                                 STATISTICAL /     FALSE is valued as 0.
                                                                   Text and logical values
                                                 VARA              such as TRUE and
                                                                   FALSE are included in
                                                                   the calculation. TRUE




                                                                                       164
                                      Chapter 9: Functions for Basic Statistics




                            Description                    Location within        Data Requirements
        Function                                           INSERT /
                                                           FUNCTION

                                                                                  is valued as 1; text or
                                                                                  FALSE is valued as 0.


                                          Figure 122: Dialog for STDEV




            Figure 123: Dialog for STDEVA. Note that the functions with the “A” suffix request “Values”
                      as input while the equivalent non–suffixed functions request “Numbers”




9.5                         SHAPE ATTRIBUTES OF THE DENSITY FUNCTION
                            (SKEWNESS, KURTOSIS)




9.5.A                  SKEWNESS


           Skewness measures asymmetry around the mean. The parameter is best
           interpreted as relative to the Normal Density Function (whose Skewness
           equals zero). The interpretation of the Skewness for a series (relative to
           the Normal Density Function) is:

                — Skewness > 0 Æ asymmetric tail with more values above the mean.
                — Skewness < 0 Æ asymmetric tail with more values below the mean.




165
                             Financial Analysis using Excel




The next three figures shown Density Functions that have a Skewness >
0, = 0, and < 0, respectively, for three variables Y1, Y2 and Y3. (Y2 is
distributed Normally).


                         Figure 124: Distribution of series Y1.
                                     Skewness > 0




                         Figure 125: Distribution of series Y2.
                                    Skewness = 0.




                         Figure 126: Distribution of series Y3
                                    Skewness < 0




Samples will be available at http://www.vjbooks.net/excel/samples.htm.




                                                                           166
                                Chapter 9: Functions for Basic Statistics




                                   Figure 127: SKEW (Skewness)




        Menu path to function: INSERT / FUNCTION / STATISTICAL / SKEW




9.5.B             KURTOSIS


        Compared with the Normal Density Function (which has a Kurtosis of
        zero), the interpretation of the kurtosis for a series is:

          — Kurtosis > 0Æ peaked relative to the Normal Density Function
          — Kurtosis < 0Æ flat relative to the Normal Density Function


        The next figure shows three Density Functions. The Density Functions
        lie around the same Mean and Median, but note the difference in the
        relative flatness of the Density Functions:


        Distribution of series X1 is the flattest with a Kurtosis < 0, that of X2 is
        less flat with a Kurtosis = 0 (a Normal Density Function) and that of
        series X3 is the least flat with a Kurtosis > 0.




167
                                     Financial Analysis using Excel




                   Figure 128: Example of Density Functions with different Skewness




        Samples will be available at http://www.vjbooks.net/excel/samples.htm.


        Menu path to function: INSERT / FUNCTION / STATISTICAL / KURT




9.6                   FUNCTIONS ENDING WITH AN “A” SUFFIX

        These functions calculates the same statistic as their “twin” formula (the
        one without the prefix “A”) but include a wider range of valid cell values
        in the relevant formula. The “A” –suffixed functions include the following
        types of cell values:


        — Logical (and not numeric) like “True” and “False” (valued as 1 and 0,
               respectively),


      — Blank cells (valued as 0), and


      — Text (valued as 0).


        A text string or a blank cell is valued as zero. The next table lists these
        twin functions:




                                                                                      168
                       Chapter 9: Functions for Basic Statistics




                   Table 26: Functions ending with the “A” suffix.

      The non–   The “A” prefixed         Comment
      prefixed   “twin” formula
      function

      AVERAGE    AVERAGEA                 Simple average/mean

      COUNT      COUNTA                   Count of valid cells. The prefixed
                                          function is very useful in counting.

      STDEV      STDEVA                   Standard deviation

      STDEVP     STDEVPA                  Standard deviation from a population or
                                          a very large sample (relative to
                                          population)

      VAR        VARA                     Variance

      VARP       VARPA                    Variance from population (and not
                                          sample) data, or from a very large sample
                                          (relative to population)

      MIN        MINA                     Minimum value

      MAX        MAXA                     Maximum value




169
Financial Analysis using Excel




                                 170
Page for Notes
                                 Financial Analysis using Excel




                                                                  CHAPTER 10


OTHER MATHEMATICS & STATISTICS FUNCTIONS



   This chapter briefly displays some other functions available in Excel. The
   topics in this chapter are:


      — COUNTING AND SUMMING

      — COUNT, COUNTA

      — COUNTBLANK

      — COMPARING COUNT, COUNTA AND COUNTBLANK

      — SUM

      — PRODUCT

      — SUMPRODUCT

      — THE “IF “COUNTING AND SUMMING FUNCTIONS

      — SUMIF

      — COUNTIF

      — TRANSFORMATIONS (LIKE LOG, EXPONENTIAL, ABSOLUTE,
             ETC)

      — STANDARDIZING A SERIES THAT FOLLOWS A NORMAL
             DENSITY FUNCTION

      — DEVIATIONS FROM THE MEAN

      — CROSS SERIES RELATIONS

      — COVARIANCE AND CORRELATION FUNCTIONS

      — SUM OF THE SUM OF THE SQUARES OF TWO VARIABLES




                                                                                172
                        Chapter 10: Other Mathematics & Statistics Functions




          — SUM OF THE SQUARES OF DIFFERENCES ACROSS TWO
                 VARIABLES

          — SUM OF THE DIFFERENCE OF THE SQUARES OF TWO
                 VARIABLES




10.1                 COUNTING AND SUMMING




COUNT function

       This function counts the number of valid cells in a range. Cells are valid
       only if there value is numeric or a date.


       Menu path to function: INSERT / FUNCTION / STATISTICAL
       / COUNT.


       Data requirements: Numbers and dates are included in the count. Not
       counted cells include those that contain error values, text, blank cells, and
       logical values (like TRUE and FALSE). The X values can be input as
       references to one or more ranges that may be non–adjacent.


       The second range can be referenced in the first text-box “Value1” after
       placing a comma after the first range, or it could be referenced in the
       second text-box “Value2.”


       If you use the second text-box, then a third text-box “Value3” will
       automatically open. (As you fill the last visible box, another box opens
       until the maximum number of boxes — 30 — is reached.)




173
                  Financial Analysis using Excel




         Table 27: Sample data for the “Count” functions.
          The example is in the sample file “Count.xls.”
A        B            C                     D
         Y            Date                  Respondent is employed

.51      24.34        24— Sep— 2000         TRUE
20.07    24.34        25— Sep— 2000         FALSE
VALUE! 24.34          26— Sep— 2000         #VALUE!
15.28    24.34        27— Sep— 2000         FALSE
DIV/0!   #VALUE! 28— Sep— 2000 TRUE
11.63    24.34        29— Sep— 2000         #N/A!
.86                   30— Sep— 2000         TRUE

REF!     22.00        1— Oct— 2000          FALSE
.74      22.00                              TRUE

NAME?    22.00        3— Oct— 2000
.13      22.00        4— Oct— 2000          TRUE
N/A!     21.58        5— Oct— 2000          TRUE


                      Figure 129: COUNT




                                                                     174
                           Chapter 10: Other Mathematics & Statistics Functions




COUNTA function also counts cells with logical or text values

       This function counts the number of valid cells in a range. Valid values
       include cells with numeric, date, text, logical, or error value. COUNTA
       only excludes empty cells, but text and logical values are only counted if
       you type them directly into the list of arguments are counted. If an
       argument is a data array or range reference, only numbers in that data
       array or range reference.


       Figure 130: The function COUNTA is a variant of the COUNT function. The example is in the
                                      sample file “Count.xls.”




       Menu path to function: INSERT / FUNCTION / STATISTICAL /
       COUNTA.




       Data requirements: Unlike the COUNT function, COUNTA will include
       the label row in the count. (So, if you have one label in the referenced
       range, you may want to use “= COUNTA (A:A) — 1”.) The X values can be
       input as references to one or more ranges that may be non–adjacent. The
       second range can be referenced in the first text-box “Value1” after placing
       a comma after the first range, or it could be referenced in the second text-
       box “Value2.” If you use the second text-box, then a third text-box
       “Value3” will automatically open. (As you fill the last visible box, another
       box opens until the maximum number of boxes — 30 — is reached.) The
       function does not count invalid cell values when counting the number of X
       values.




175
                                    Financial Analysis using Excel




COUNTBLANK function counts the number of empty cells in the range reference

       This function counts the number of blank cells in a range.


       Menu path to function: INSERT /FUNCTION
       /INFORMATION/COUNTBLANK.


               Figure 131: COUNTBLANK. The example is in the sample file “Count.xls.”




SUM function

       This function sums the values in the data array.




       SUM = X1 + X2 +…. +Xn



       Menu path to function: INSERT / FUNCTION / MATH / SUM.


                                         Figure 132: SUM




       Data requirements: This function does not include blank cells or cells with
       values that are of the following formats: text, and logical values (that is,
       TRUE and FALSE.)




                                                                                        176
                          Chapter 10: Other Mathematics & Statistics Functions




PRODUCT function
      This function multiplies all the values referenced.



      PRODUCT = X1 * X2 *….* Xn



                     Figure 133: PRODUCT (multiplying all the values in a range)




      Menu path to function: INSERT / FUNCTION / MATH / PRODUCT.




SUMPRODUCT function

      This function multiplies corresponding components in two or more data
      arrays/ranges, and then sums the results of these multiplications. The
      data arrays/ranges must have the same number of data points.


      Menu path to function: INSERT /FUNCTION /MATH /SUMPRODUCT


       Figure 134: SUMPRODUCT (multiplying individual data points across data series and then
                        adding up the results of all these multiplications).




      Data Array1, data Array2, data Array3 ... are 2 to 30 data arrays/ranges
      whose components you desire to multiply and then add. The minimum
      number of arrays is two. The data arrays must have the same number of
      data points. Non-numeric cell values are assigned the value of zero.




177
                                     Financial Analysis using Excel




       The X values can be input as references to two or more ranges that may
       be non–adjacent. The second range should be referenced in the second
       text-box “Array2.” If you use the third text-box, then a fourth text-box
       “Array4” will automatically open. (As you fill the last visible box, another
       box opens until the maximum number of boxes — 30 — is reached.)


       Example


       The following formula multiplies all the components of the two data
       arrays on the preceding worksheet and then adds the products— that is,
       3*2 + 4*7 + 8*6 + 6*7 + 1*5 + 9*3.


       Note:
       Samples will be available at http://www.vjbooks.net/excel/samples.htm.


        Figure 135: Columns A and B make up one data series while columns D and E make up the
                                         other data series




10.2                  THE “IF” COUNTING AND SUMMING FUNCTIONS:
                      STATISTICAL FUNCTIONS WITH LOGICAL
                      CONDITIONS

       I display two “if-then” two-step functions in this section. The functions
       first evaluate a criterion. If a cell in the referenced range satisfies the
       criteria then the second part of the function includes this cell.




                                                                                                178
                          Chapter 10: Other Mathematics & Statistics Functions




SUMIF function

      This function adds the values in a range if the cell with the value satisfies
      a user-defined criterion.


         •   In the box Range, enter a reference to the range of cells you want
                 evaluated.


          Figure 136: SUMIF (summing only the cells whose value satisfies one “if” condition)




         •   In the box Criteria, enter the condition (a number, expression, or
                 text) that defines which cells values will be summed. For
                 example, Criteria can be expressed as 32, “32,” “>32”.


         •   In the box Sum_range, you may reference the actual cells to sum.
                 The cells in sum range are summed only if their corresponding
                 cells in the entire Range match the criteria. If sum range is
                 omitted, all the “criterion-satisfying” cells in the Range are
                 summed.




      Menu path to function: INSERT / FUNCTION / MATH / SUMIF. The
      Criteria should be relevant to the type of data/text in the queried range.




COUNTIF function

      This function counts the number of cells in a range that satisfy a user-
      defined criterion.




179
                               Financial Analysis using Excel




The dialog for “COUNTIF“ requires two inputs from the user. The
“Range” is similar to the functions shown previously. The “Criteria” is a
logical condition set by you.


   Figure 137: COUNTIF (counting only the cells whose value satisfies one “if” condition)




   •   In the box Range, enter a reference to the range of cells you seek to
           evaluate.


   •   In the box Criteria, enter the condition (a number, expression, or
           text) that defines which cells will be counted. For example,
           Criteria can be expressed as 32, “32,” “>32,” “tea.”


Menu path to function: INSERT /FUNCTION /STATISTICAL /COUNTIF.


Data requirements: The range can take any values. The Criteria should
be relevant to the type of data/text in the queried range.




Example

Choose the range “D:D” and the condition “>1,000,000”. The function is
“Count the number of cases in the range D:D, but only if the value of the
cell is greater than 1 million.”


For a pictorial reproduction of this, see the next figure.




                                                                                            180
                        Chapter 10: Other Mathematics & Statistics Functions




                     Figure 138: Entering the data input and logical criterion




       Execute the dialog by clicking on the button OK. The formula is written
       onto the cell. The next figure illustrates this. Depress the ENTER key.


                         Figure 139: The function as written into the cell




10.3                TRANSFORMATIONS (LOG, EXPONENTIAL,
                    ABSOLUTE, SUM, ETC)


                           Table 28: Common transformation functions
                     Description                     Location within         Data Requirements
       Function                                      INSERT
                                                     /FUNCTION
       Sign          This function outputs the
                     sign of a number.            MATH /SIGN                 Any real value.
                     Returns 1 if the number
                     is positive, zero (0) if the
                     number is 0, and –1 if
                     the number is negative.
                     Useful for red–flagging
                     data, or using in
                     functions like IF,
                     COUNTIF, SUMIF and
                     CHOOSE.




181
                            Financial Analysis using Excel




              Description                     Location within   Data Requirements
Function                                      INSERT
                                              /FUNCTION
Absolute
number                                        MATH /ABS         One real number.
              ABS = | X |


Square root   The square root of a            MATH/SQRT         One positive real
              number.                                           number.



              Y = X1/2


Log natural                                                     One positive real
                                                                number.
              LN (X)                          MATH /LN


              This function calculates the
              natural logarithm of a
              number. Natural
              logarithms are based on
              the constant e (2.718).
              LN (85) = 4.454347.
              This mean: “If you raise the
              base e to the power of 4.45
              you will get 85. Æ LN (85)
              = 4.45.
              Conversely,
              exp (4.45) = e^ (4.45) =
              2.718^ (4.45) = 85.
Exponential
              This function calculates the MATH /EXP            One positive real
              exponential to a number.                          number.




                                                                                    182
                       Chapter 10: Other Mathematics & Statistics Functions




                    Description                     Location within       Data Requirements
      Function                                      INSERT
                                                    /FUNCTION


      Log to the                                    MATH /LOG10          One positive real
      base 10                                                             number.
                    LOG10 (X)


                    This function calculates the
                    base 10 logarithm of a
                    number.
                    LOG10 (85) = 1.934
                    because the base of 10
                    needs to be raised 1.934
                    times to get 85:
                      101.934 = 85
                    LOG10 (10) = 1 because
                    101 = 10
                    LOG10 (1000) = 3 because
                    103 = 1000
      Log to a user
      defined base This function calculates the MATH/LOG.                A positive real
                    logarithm of a number to                              number X and the
                    the base you specify. The                             (optional) base of
                    default base is 10. For                               the logarithm.
                    natural log use base e =
                                                                          If base is omitted,
                    2.718.
                                                                          it is assumed = 10.



                    LOG (X, base)


                    LOG (100) = 2 Æ base 10.
                    (Since 102 = 100).
                    LOG (27, 3) = 3 Æ base 3.
                    (Since 33 = 27).
                    LOG (86, 2.7182818) = 4.45
                    Æ same as natural log.
                    Because— (exp (4.45) = 85).




183
                                  Financial Analysis using Excel




Standardizing a series that follows a Normal Density Function

        Converts a value in a series X to its equivalent standard normal
        transformation.




        STANDARDIZE (x, AVERAGE (X), STDEV (X)) where X is all the numbers

        in the X data series.



        Menu path to function:
        INSERT/FUNCTION/STATISTICAL/STANDARDIZE.


        Data requirement: The function requires three input numbers: x, mean of
        the X series, and the standard deviation of the X series. The mean and
        standard deviation can be written as a “function within a function.”




10.4                  DEVIATIONS FROM THE MEAN

        The formulas in this and the next section provide estimates of functions
        used in formulas for parameters obtained in advanced analysis like
        ANOVA, Correlation, Regression, etc.




DEVSQ

        This function calculates the sum of squares of deviations of data points
        from their sample mean




                                                                                   184
                           Chapter 10: Other Mathematics & Statistics Functions




      Σ ((x — mean (x))2



      Menu path to function: MATH/DEVSQ


      Data Requirements: A range(s) of real numbers, inclusive of zero.


      Figure 140: Summation of the squares of the “differences of individual points from the mean of
                                              the series”




AVEDEV

      This function calculates the average of the absolute deviations of data
      points from their mean. AVEDEV is a measure of the variability in a data
      set.




      Menu path to function: STATISTICAL/AVEDEV


      Menu path to function: A range(s) of real numbers, inclusive of zero.




185
                                        Financial Analysis using Excel




10.5                      CROSS SERIES RELATIONS




10.5.A                 COVARIANCE AND CORRELATION FUNCTIONS


         The functions are CORREL, COVAR, PEARSON, & RSQ. I recommend
         using the Analysis ToolPak Add-In — refer to Volume 5: Statistical
         Analysis using Excel.




10.5.B                 SUM OF SQUARES


         SUMX2PY2 function evaluates the “Sum of the sum of the squares of each
         case in two variables”


         This function estimates the summation of the squares of individual points
         in two series.




         Σ (x2 + y2)



           Figure 141: Summation of the squares of individual points in two series. Samples will be
                          available at http://www.vjbooks.net/excel/samples.htm.




         Menu path to function: INSERT/FUNCTION/MATH/SUMX2PY2.


         Data requirements: This function needs two data series.




                                                                                                      186
                           Chapter 10: Other Mathematics & Statistics Functions




SUMXMY2 function

      This function estimates Sum of the squares of differences of each case in
      two across two variables.




      Σ ((x — y)2)



       Figure 142: Summation of the squares of the “differences in individual points in two series.”
                 Samples will be available at http://www.vjbooks.net/excel/samples.htm.




      Menu path to function: INSERT/FUNCTION/MATH/SUMXMY2. Data
      requirements: This function needs two data series.




SUMX2MY2 function

      This function estimates the Sum of the difference of the squares of each
      case in two variables.




      Σ (x2 — y2)



      Menu path to function: INSERT/FUNCTION/MATH/SUMX2MY2.


      Data requirements: This function needs two data series.




187
Financial Analysis using Excel




                                 188
Page for Notes
                          Financial Analysis using Excel




                                                           CHAPTER 11


                                    LOGICAL & INFORMATION
                                                           FUNCTIONS



This chapter teaches the following topics:


   — NEGATIVE NESTING (THE NOT FUNCTION)

   — FUNCTIONS THAT OUTPUT TRUE/FALSE AFTER
          EVALUATING IF ALL/ONE/NONE OF THE LOGICAL
          EXPRESSIONS ARE TRUE

   — AND, OR, NOT(AND), NOT(OR)

   — INFORMATION FUNCTIONS ON TYPE OF DATA IN CELL (IS
          FUNCTIONS)

   — ISBLANK, NOT(ISBLANK), ISLOGICAL, NOT(ISLOGICAL),
          ISNUMBER, NOT(ISNUMBER), ISTEXT, ISNONTEXT,
          NOT(ISTEXT), ISREF, NOT(ISREF)

   — TYPE FUNCTION PROVIDES INFORMATION ON THE DATA
          TYPE OF THE VALUE IN A CELL

   — TESTING IF ODD OR EVEN NUMBER

   — ISODD, — ISEVEN

   — INFORMATION ON ERROR TYPE IN A CELL (#N/A, #VALUE!,
          #REF!, #DIV/0!, #NUM!, #NAME?, #NULL!)

   — ISERR, NOT(ISERR), ISNA, NOT(ISNA), ISERROR,
          NOT(ISERROR),

   — ERROR.TYPE FUNCTION PROVIDES INFORMATION ON THE




                                                                 190
                            Chapter 11: Logical & Information Functions




                 ERROR TYPE — IF ANY - IN A CELL




11.1                NEGATIVE NESTING (THE NOT FUNCTION)

       The NOT function switches a TRUE to FALSE and vice versa.


       NOT(FALSE) = TRUE


       NOT(10+1=11) gives the result FALSE, because the expression is TRUE.
       Examples are in the worksheet “Logical and, or, not” in the sample file
       “Logical and Information.xls.” Additional samples will be available at
       http://www.vjbooks.net/excel/samples.htm.


       As you will see in the next sections, the NOT function can be extremely
       powerful when combined with other logical/information functions. In
       effect, the combination is a new and unique logical function.


       The function is useful inside IF and other nested logical functions. Refer
       to chapter 12.




191
                                   Financial Analysis using Excel




11.2                  FUNCTIONS THAT OUTPUT TRUE/FALSE AFTER
                      EVALUATING IF ALL/ONE/NONE OF THE LOGICAL
                      EXPRESSIONS ARE TRUE (THE FUNCTIONS— AND,
                      OR)




11.2.A            AND FUNCTION


         The function tests for “ALL EXPRESSIONS ARE TRUE“


         The function can have many logical expressions/arguments, each
         separated by a comma. If –and only if - all the logical
         expressions/arguments are true, the function result is TRUE.


         If even one of the logical expressions/arguments is not true, the function
         result is FALSE.


         Location wthin INSERT / FUNCTION: LOGICAL/AND


         Data Requirements: One or more logical expressions. A comma separates
         each expression.


                     AND(expression 1, expression 2, ….., expression k)


         Examples:

                      • AND(TRUE, FALSE) = FALSE
                        (because one of the logical expressions is not equal to
                        TRUE)


                      • AND(10+1=11, 10*1=1, 10-2=8, 10<100) = TRUE




                                                                                      192
                               Chapter 11: Logical & Information Functions




                        (because all four expressions are TRUE)


                        but,


                        AND(10+1=11, 10*1=10, 10-2=12, 10<100) = FALSE
                        (because the third expression is FALSE while the other
                        expressions are true)




11.2.B            OR FUNCTION


         The function tests for “EVEN IF ONE EXPRESSION IS TRUE”


         The function can have many logical expressions/arguments, each
         separated by a comma. If even one of the logical expressions/arguments
         is TRUE, then the function result is TRUE.


         If –and only if - all of the logical expressions/arguments are FALSE, the
         function result is FALSE.


         Location wthin INSERT / FUNCTION: LOGICAL/OR


         Data Requirements: One or more logical expressions. A comma separates
         each expression.


                     OR(expression 1, expression 2, ….., expression k)


         Examples:

                      • OR(TRUE, FALSE) = TRUE
                        (because one of the logical expressions is TRUE)




193
                                     Financial Analysis using Excel




                      • OR(10+1=11, 10*1=11, 10-2=8, 10<100) = TRUE
                        (because all four expressions are TRUE)


                        and,


                        OR(10+1=11, 10*1=10, 10-2=12, 10<100) = TRUE
                        (because at least one expression is TRUE)




11.2.C            NOT(AND) FUNCTION


         The function tests for “EVEN IF ONE IS TRUE“


         It provides the same test for FALSE expressions as the function AND does
         for TRUE expressions. If even one of the logical expressions/arguments
         is FALSE, then the function result is TRUE.


         If –and only if - all of the logical expressions/arguments are TRUE the
         function result is FALSE.


         Location wthin INSERT / FUNCTION: LOGICAL/AND, &
         LOGICAL/NOT


         Data Requirements: One or more logical expressions. A comma separates
         each expression.


                        NOT (AND (expression 1, ….., expression k))


         Examples:

               • NOT (AND(TRUE, FALSE)) = TRUE




                                                                                    194
                              Chapter 11: Logical & Information Functions




                  (because one of the expressions is FALSE)


               • NOT (AND(10+1=11, 10*1=10, 10-2=8, 10<100)) = FALSE
                  (because none of the expressions are FALSE. They are all
                  TRUE)


                  and,


                  NOT (AND(10+1=11, 10*1=10, 10-2=12, 10<100)) = TRUE
                  (because at least one expression –the third expression in this
                  example -is FALSE)


               but,


               NOT (AND(10+1=1, 10*1=1, 10-2=1, 10<1))= TRUE
               (because at least one expression is FALSE)




11.2.D            NOT(OR) FUNCTION


         The function tests for “ALL FALSE“


         It provides the same test for FALSE expressions as the function AND does
         for TRUE expressions. If –and only if - all the logical
         expressions/arguments are FALSE, then the function result is TRUE.


         If even one of the logical expressions/arguments is TRUE, the function
         result is FALSE.


         Location wthin INSERT / FUNCTION: LOGICAL/OR, & LOGICAL/NOT




195
                                Financial Analysis using Excel




Data Requirements: One or more logical expressions. A comma separates
each expression.


                    NOT (OR(expression 1, ….., expression k))


Examples:

        • NOT (OR(TRUE, FALSE)) = FALSE
          (because one of the expressions is TRUE)


        • NOT (OR(10+1=11, 10*1=10, 10-2=8, 10<100)) = FALSE
          (because all four expressions are TRUE)


          and,


          NOT (OR(10+1=11, 10*1=10, 10-2=12, 10<100)) = FALSE
          (because at least one expression is TRUE)


        • but,


        • NOT (OR(10+1=1, 10*1=1, 10-2=1, 10<1))= TRUE
          (because all the expressions are FALSE)


The functions are useful inside IF and other nested logical functions.
Refer to chapter 12.



   Table 29: Examples of the logical functions AND, OR, and NOT. Examples are in the
 worksheet “Logical and, or, not” in the sample file “Logical and Information.xls.” Additional
          samples will be available at http://www.vjbooks.net/excel/samples.htm.
            Function                                                     Result

            AND

            AND(TRUE, FALSE)                                             FALSE




                                                                                                 196
                            Chapter 11: Logical & Information Functions




                 Function                                                 Result
                 AND(10+1=11, 10*1=10, 10-2=8, 10<100)
                                                                          TRUE
                 AND(10+1=11, 10*1=10, 10-2=12, 10<100)
                                                                          FALSE



                 OR
                 OR(TRUE, FALSE)
                                                                          TRUE
                 OR(10+1=11, 10*1=10, 10-2=12, 10<100)
                                                                          TRUE



                 NOT (AND)
                 NOT (AND(TRUE, FALSE))
                                                                          TRUE
                 NOT (AND(10+1=11, 10*1=10, 10-2=8, 10<100))
                                                                          FALSE
                 NOT (AND(10+1=11, 10*1=10, 10-2=12, 10<100))
                                                                          TRUE
                 NOT (AND(10+1=1, 10*1=1, 10-2=1, 10<1))
                                                                          TRUE



                 NOT (OR)
                 NOT (OR(TRUE, FALSE))
                                                                          FALSE
                 NOT (OR(10+1=11, 10*1=10, 10-2=8, 10<100))
                                                                          FALSE
                 NOT (OR(10+1=11, 10*1=10, 10-2=12, 10<100))
                                                                          FALSE
                 NOT (OR(10+1=1, 10*1=1, 10-2=1, 10<1))                   TRUE




11.3                  INFORMATION FUNCTIONS ON TYPE OF DATA IN
                      CELL (IS FUNCTIONS)

       The following “IS” functions are used to test if a value or the result of a
       function in a referenced cell conforms (or, does not conform, if one adds
       the NOT function to the IS function) to a certain data type.




197
                                   Financial Analysis using Excel




           The functions are used as, for example,


                     ISBLANK(Reference to a Cell),


                            or


                    NOT(ISBLANK(Reference to a Cell))



     Table 30 : The “IS” information functions. Examples are in the worksheet ‘“IS” information
                     functions’ in the sample file “Logical and Information.xls.”
                       The formula result = Location within                         Data
Function
                       TRUE if...           INSERT/FUNCTION                         Requirements

ISBLANK                The referenced cell is INFORMATION/ISBLANK                   One referenced
                       empty.                                                       cell.

NOT(ISBLANK)           The referenced cell is INFORMATION/ISBLANK                   One referenced
                       not empty                                                    cell.
                                              &

                                               LOGICAL/NOT

ISLOGICAL              The referenced cell’s INFORMATION/ISLOGICAL                  One referenced
                       value is TRUE or                                             cell.
                       FALSE.

NOT(ISLOGICAL)         The referenced cell’s INFORMATION/ISLOGICAL                  One referenced
                       value is neither                                             cell.
                                             &
                       TRUE nor FALSE.
                                             LOGICAL/NOT

ISNUMBER               The referenced cell’s INFORMATION/ISNUMBER                   One referenced
                       value is a number.                                           cell.

NOT(ISNUMBER)          The referenced cell’s INFORMATION/ISNUMBER                   One referenced
                       value is not a                                               cell.
                                             &
                       number.
                                             LOGICAL/NOT

ISTEXT                 The referenced cell’s INFORMATION/ISTEXT                     One referenced
                       value is a text string.                                      cell.

ISNONTEXT              The referenced cell’s INFORMATION/ISNONTEXT                  One referenced
                       value is not a text                                          cell.
                       string or is blank.




                                                                                                  198
                                   Chapter 11: Logical & Information Functions




                             The formula result = Location within                           Data
    Function
                             TRUE if...           INSERT/FUNCTION                           Requirements




    NOT(ISTEXT)              The referenced cell’s INFORMATION/ISTEXT                       One referenced
                             value is not a text                                            cell.
                                                   &
                             string.
                                                   LOGICAL/NOT

    ISREF                                             INFORMATION/ISREF                     One referenced
                                                                                            cell.
                             The referenced cell’s
                             value is a reference
                             to a range.

    NOT(ISREF)               The referenced cell’s INFORMATION/ISREF                        One referenced
                             value is not a                                                 cell.
                                                   &
                             reference to a range.
                                                   LOGICAL/NOT


         The functions are useful inside IF and other nested logical functions.
         Refer to chapter 12.




11.3.A              TYPE FUNCTION PROVIDES INFORMATION ON THE DATA TYPE
                    OF THE VALUE IN A CELL


         The TYPE function may be used in nested logical functions like AND, OR,
         NOT, IF and CHOOSE. The function TYPE gives as result the numbers
         shown in the right column of the table below.


                 The function is: TYPE(Reference to a Cell)



         Table 31 : Mapping of the output of the function TYPE and specific data types. Examples are
         in the worksheet ‘“IS” information functions’ in the sample file “Logical and Information.xls.”

                                                              The result of the
                        If the referenced cell’s value is
                                                              TYPE function is:




199
                                 Financial Analysis using Excel




                                                     The result of the
               If the referenced cell’s value is
                                                     TYPE function is:

               Number                                                 1

               Text                                                   2

               Logical value                                          4

               Error value                                        16

               Array                                              64




The function is useful inside IF, CHOOSE and other nested or logical
functions. Refer to chapter chapter 12 starting on page 202.



  Table 32: Examples of the IS functions. Examples are in the worksheet ‘“IS” information
                functions’ in the sample file “Logical and Information.xls.”

Test ValuesÆ       10        TEST                                         235     TRIAL 1
                                                     #VALUE! TRUE

ISBLANK            FALSE     FALSE        TRUE       FALSE        FALSE   FALSE   FALSE

NOT(ISBLANK)       TRUE      TRUE         FALSE      TRUE         TRUE    TRUE    TRUE

ISLOGICAL          FALSE     FALSE        FALSE      FALSE        TRUE    FALSE   FALSE

NOT(ISLOGICAL)     TRUE      TRUE         TRUE       TRUE         FALSE   TRUE    TRUE

ISNUMBER           TRUE      FALSE        FALSE      FALSE        FALSE   TRUE    FALSE

NOT(ISNUMBER)      FALSE     TRUE         TRUE       TRUE         TRUE    FALSE   TRUE

ISTEXT             FALSE     TRUE         FALSE      FALSE        FALSE   FALSE   TRUE

ISNONTEXT          TRUE      FALSE        TRUE       TRUE         TRUE    TRUE    FALSE

NOT(ISTEXT)        TRUE      FALSE        TRUE       TRUE         TRUE    TRUE    FALSE
                   1         2            1          16           4       1       2
TYPE




                                                                                            200
                          Chapter 11: Logical & Information Functions




11.4                 TESTING IF ODD OR EVEN NUMBER




   ISODD function

       Outputs TRUE if the referenced value is an Odd number.


       Location wthin INSERT / FUNCTION: INFORMATION/ISODD


       Data Requirements: One Integer. (Non-integers are truncated by Excel


       Examples:
          •     ISODD(-1) = TRUE
          •     ISODD(1) = TRUE
          •     ISODD(2) = FALSE
          •     ISODD(2.5) = FALSE, because the number “2.5” is truncated to
                2.



   ISEVEN function

       Outputs TRUE if the referenced value is an Even number.


       Location wthin INSERT / FUNCTION: INFORMATION/ISEVEN


       Data Requirements: One Integer. (Non-integers are truncated by Excel)


       Examples:
          •     ISEVEN(-1) = FALSE
          •     ISEVEN(1) = FALSE
          •     ISEVEN(2) = TRUE




201
                                       Financial Analysis using Excel




           •       ISEVEN(2.5) = TRUE, because the number “2.5” is truncated to
                   2.




11.5                   INFORMATION ON ERROR TYPE IN A CELL (#N/A,
                       #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, #NULL!)

       The functions are used as, for example,


               ISERR(Reference to a Cell) or NOT(ISERR(Reference to a Cell))


       Table 33: The “IS Error” information functions. Examples are in the worksheet “Errors’ in the
                                 sample file “Logical and Information.xls.”

                        The formula result=TRUE if... Location within                Data
       Function
                                                      INSERT/FUNCTION                Requirements

       ISERR            The referenced cell’s value is INFORMATION/ISERR             One
                        any error value except #N/A.                                 referenced
                                                                                     cell.
                        These error values are—
                        #VALUE!, #REF!, #DIV/0!,
                        #NUM!, #NAME?, #NULL!.

       NOT(ISERR)       The referenced cell’s value is INFORMATION/ISERR             One
                        not any of the following error                               referenced
                        values:                        &                             cell.
                         #VALUE!, #REF!, #DIV/0!,
                        #NUM!, #NAME?, #NULL!. LOGICAL/NOT

       ISNA             The referenced cell’s value is INFORMATION/ISNA              One
                        the #N/A (not available) error                               referenced
                        value.                                                       cell.



       NOT(ISNA)        The referenced cell’s value is INFORMATION/ISNA              One
                        the not equal to the #N/A                                    referenced
                        (not available) error value. &                               cell.




                                                                                                       202
                               Chapter 11: Logical & Information Functions




                       The formula result=TRUE if... Location within         Data
         Function
                                                     INSERT/FUNCTION         Requirements

                                                         LOGICAL/NOT

         ISERROR       The referenced cell’s value is INFORMATION/ISERROR One
                       any error value.                                   referenced
                                                                          cell.
                       The error values are— #N/A,
                       #VALUE!, #REF!, #DIV/0!,
                       #NUM!, #NAME?, #NULL!.

         NOT(ISERROR) The referenced cell’s value is INFORMATION/ISERROR One
                      not any error value.                               referenced
                                                     &                   cell.
                      The error values are— #N/A,
                      #VALUE!, #REF!, #DIV/0!, LOGICAL/NOT
                      #NUM!, #NAME?, #NULL!.

         N             Converts the information in INFORMATION/N             One
                       the referenced cell into its                          referenced
                       numeric equivalent. Excel                             cell
                       evaluates the logical values
                       TRUE & FALSE as 1 and 0,
                       respectively. A date is
                       converted into a serial
                       number.

                       (A serial number can
                       represent each date. On
                       reformatting (or using one of
                       the “Serial number to date”
                       functions), the serial number
                       will show as dates. Excel
                       evaluates a Text string as
                       zero. Errors retain their error
                       value.




11.5.A              ERROR.TYPE FUNCTION PROVIDES INFORMATION ON THE
                    ERROR TYPE — IF ANY - IN A CELL


         The function is used as, for example:




203
                                       Financial Analysis using Excel




                        ERROR.TYPE (Reference to a Cell)


       This function is often used in an IF or CHOOSE function.


         Table 34: Mapping of the output of the function ERROR.TYPE and specific Error values.
         Examples are in the worksheet “Errors’ in the sample file “Logical and Information.xls.”

                                                   Then the ERROR.TYPE
                        If the value is…
                                                   result is:

                        NULL!                      1

                        DIV/0!                     2

                        VALUE!                     3

                        REF!                       4

                        NAME?                      5

                        NUM!                       6

                        N/A                        7

                        No error                   #N/A


       The function is useful inside IF, CHOOSE and other nested OR logical
       functions. Refer to chapter 12. Note: you can color code cells whose
       values have error terms using “Conditional Formatting.” This topic is
       taught in book 3.


                              Table 35: Examples of the IS (ERROR) functions

Formula or cell value    ISNA       NOT(ISNA) ISERROR NOT(ISERROR)                   ERROR.TYPE

VALUE!                   FALSE TRUE               TRUE          FALSE                          3

NAME?                    FALSE TRUE               TRUE          FALSE                          5

REF!                     FALSE TRUE               TRUE          FALSE                          4




                                                                                                    204
                                       Chapter 11: Logical & Information Functions




       Formula or cell value    ISNA      NOT(ISNA) ISERROR NOT(ISERROR)             ERROR.TYPE

       N/A                      TRUE      FALSE          TRUE         TRUE                 7

       35                       FALSE TRUE               FALSE        FALSE              #N/A

       NULL!                    FALSE TRUE               TRUE         TRUE                 1

       FALSE                    FALSE TRUE               FALSE        TRUE               #N/A

       NUM!                     FALSE TRUE               FALSE        TRUE               #N/A

                                FALSE TRUE               FALSE        FALSE              #N/A

       DIV/0                    FALSE TRUE               TRUE         TRUE                 2




11.6                           LOOKUP OR “LOCATION” FUNCTIONS

               All the functions mentioned in this section are accessible through
               INSERT/FUNCTION/LOOKUP.




The functions: COLUMN/ROW

               This function evaluates the column/row number of a reference.


                  •      COLUMN(F181) = 6


                  •      ROW(F181) = 181




The functions: COLUMNS/ROWS

               This function evaluates the number of columns/rows in a reference.




205
                                Financial Analysis using Excel




         •      COLUMNS(B2:F181) = 5


         •      ROWS(B2:F181) = 180




The functions: INDEX, MATCH, OFFSET, HYPERLINK, ADDRESS, TRANSPOSE,
AREAS, INDIRECT

      Discussion of these functions is beyond the scope of this book. The
      functions are useful while developing Excel using Visual Basic for
      Applications (VBA).




                                                                            206
Page for Notes
                                 Financial Analysis using Excel




                                                                       CHAPTER 12


                                    “SMART” NESTED FUNCTIONS
                                   THAT RESPOND TO FORMULA
                                                                             RESULT



       The topics discussed in this chapter are:


          — IF FUNCTION

          — CHOOSE FUNCTION

          — TOOLS THAT ASSIST WITH NESTING

          — NEW TOOLS IN EXCEL XP




12.1                IF FUNCTION

       The function “IF” is probably the most useful Excel function. A clever use
       of the IF function makes available an amazing level of smartness in
       formulae. The function provides almost coding-like binary functionality
       — you can nest up to seven IF functions. Therefore, you can write in 21
       possible actions as long as the actions can be set up as TRUE/FALSE
       conditions. The innermost “IF” is evaluated first, and the outermost the
       last.


       IF(logical expression that may evaluate to TRUE or FALSE, x1 or
       value/action if the logical expression is TRUE, x2 or value/action if the




                                                                                    208
                  Chapter 12: “Smart” nested functions that Respond to Formula Result




       logical expression is TRUE)


       Stage 1:
       Excel evaluates the logical expression first. The result is TRUE or
       FALSE.


       Stage 2:
       If the first stage result is TRUE, then Excel evaluates x1. If the first
       stage result is FALSE, then Excel evaluates x2. An option may be a
       number, string, formula or function, or cell reference


       The IF function often nests and uses many other information or IS and
       logical/smart functions. Many samples will be available at
       http://www.vjbooks.net/excel/samples.htm.




12.2                 CHOOSE FUNCTION

       CHOOSE runs one of several optional user-defined/chosen
       values/references/formulas based on an index number which that may
       take the values 1 to 29. The index number is from a user-set cell
       reference. CHOOSE can be used as a “super-IF if the conditionality
       inherent in the analysis may have more than a simple YES/NO result.


       CHOOSE(index, option 1, option 2,..., up to a maximum of option 29)


       The index is a number 1 between 29, or a formula or reference to a cell
       evaluating to an integer between 1 and 29. (Excel truncates down
       decimal-bearing numbers.) If the value of the index = 1, then option 1 (a
       value, cell reference, or function) will be evaluated. If the index equals 2,




209
                           Financial Analysis using Excel




then option 2 will be evaluated ...and so on until a maximum of 29
options.




Stage 1:

The function first evaluates the index. The cell referenced as the index
may contain a number, a reference to another cell or a formula. Assume
that the result is index = x, where x is between 1 and 29.




Stage 2:

In the second stage, the function chooses “option x” where x is the
evaluated value of the index. An option may be a number, string,
formula, or function, or cell/range reference.


AVERAGE(CHOOSE(7, A1:A100, A101:A200, A201:A300, A301:A400,
D1:D100, D101:D200, D201:D300, D301:D400)) = AVERAGE (D201:D300)


Many samples will be available at
http://www.vjbooks.net/excel/samples.htm.




                                                                           210
                                      Page for Notes




12.3                     WORKING WITH NESTED FUNCTIONS




12.3.A            DEFINING THE NESTED FUNCTION


         Nested functions may be written in by hand or with the assistance of the
         “Insert Function” dialog.




Nesting by hand

         Once you are familiar with the function names and
         arguments/requirements, you can type in the nested function directly into
         the cell. In Excel XP, the Formula Bar Assistant makes this process
         easier by:


         (a) providing the list of arguments/requirements for a function once you
             type in the name of the function (in the next figure note that the
             Assistant shows the expanded formula notation for AVERAGE with
             the requirement “number1” in bold even though I have only typed
             “AVERAGE” in the Formula Bar, and


         b) using different colors for the parenthesis (brackets) enclosing each
             function. This reduces the probability of errors in placing the closing
             parenthesis, or in failing to include sufficient number of closing
             brackets.
                                     Financial Analysis using Excel




                             Figure 143: Using the Formula Bar Assistant




12.3.B             NESTING WITH THE ASSISTANCE OF THE “INSERT FUNCTION”
                   DIALOG


         Excel (XP and earlier versions) provide access to the “Insert/Paste
         Function” dialog at each level of nesting within a formula.


                                    Figure 144: Click on the arrow




         Assume you want to define the same formula as shown in the previous
         figure. You have already user INSERT/FUNCTION to define the outer
         function “NORMDIST.” Now, you have to define the inner function
         AVERAGE. Place the cursor at the location (within the NORMDIST
         function) where the function AVERAGE is to be inserted, and click on the
         arrow shown at the left edge of the Formula Bar.




         A list of recently-used functions will be displayed. The next figure
         illustrates this.


         Pick the last option “More Functions” in case the sought function is not in
         this list (or, if you have a desire for searching for a “better” function).




                                                                                       212
                                     Chapter 12: Nested Functions




          Figure 145: Recently-used functions and a link to the “Insert/Paste Function” dialog




      The “Insert/Paste function” dialog opens. Use this dialog to select or
      completely define a function. (Always define the “inner” nested functions
      completely in one step.)


                              Figure 146: “Insert/Paste Function” dialog




      Select the function and complete all function arguments/requirements.




213
                                         Financial Analysis using Excel




                    Figure 147: The “inner” nested function is best defined using its dialog




         When you execute the dialog by clicking on OK, you will be taken back to
         the Formula Bar. The updated Formula bar is reproduced in the next
         figure.


                               Figure 148: The “inner” function is fully defined




         You need to define the next argument/requirement for the “outer” function
         NORMDIST. (Note that the Formula Bar Assistant is suggesting this by
         making bold the font for the requirement “standard_dev.” This
         requirement can also be completed using the “Insert/Paste Function”
         dialog as you did earlier for the function AVERAGE.


            Figure 149: The requirement “standard_dev” can be defined with the function STDEV




12.3.C              FORMULA AUTOCORRECTION


         In case you make a simple error (like forgetting to place a closing
         parenthesis), Excel will suggest a correction after you try to finish the
         formula.


         Evaluate whether Excel has corrected your error correctly; if so, click on
         OK.




                                                                                                214
                                    Chapter 12: Nested Functions




                                Figure 150: Formula AutoCorrection




           The AutoCorrection feature is upgraded in the XP version of Excel in
           terms of the types of errors AutoCorrected.




12.3.D            FORMULA BAR IDENTIFICATION OF ERROR


         Even if Autocorrect does not correct the error, Excel will indicate the
         location of the error. Assume you use the same formula as before, but
         failed to type a comma before the function STDEV.




                                 Figure 151: The erroneous formula




         When you finish the formula and press the ENTER key, Excel will show
         the warning reproduced in the next figure.




215
                                     Financial Analysis using Excel




                                  Figure 152: Formula Error warning




         Choose the option OK. Look at the Formula Bar. Excel has highlighted
         the location where an error was found.


                           Figure 153: Excel locates the location of the error




12.3.E             FUNCTION IDENTIFICATION IN THE FORMULA BAR ASSISTANT


         In Excel XP, the Formula Bar Assistant displays only that function which
         directly references the argument/requirement on which you place the
         cursor.


         For example, if you place the cursor on the cell references used in the
         function “AVERAGE,” then the Formula Assistant Bar only shows the
         function AVERAGE and placeholders for its requirements.




                                                                                    216
                                    Chapter 12: Nested Functions




                       Figure 154: Cursor within the arguments for AVERAGE




      Cursor is on an argument of the function ISNUMBER24


      The Formula Assistant Bar will show only the ISNUMBER function and
      placeholders for its requirements.




       Figure 155: Cursor within the arguments for ISNUMBER but not within the arguments for
                                            AVERAGE




      Cursor is on an argument of the function IF25


      The Formula Assistant Bar will show only the IF function and
      placeholders for its requirements.


      Figure 156: Cursor within the arguments for IF but not within the arguments for ISNUMBER
                                            or AVERAGE




      24 The function AVERAGE is an argument for the function ISNUMBER.


      25The function ISNUMBER is an argument for the function IF.




217
                                 Financial Analysis using Excel




Identification of cells referenced by the function highlighted in the Formula Bar

       In Excel XP, blue rectangles will identify the cells referenced by the
       function currently shown in bold in the Formula Bar Assistant.




12.4                 MULTIPLE NESTING: TIPS

       — Always use the “Insert/Paste Function” dialog for defining functions.


       — Write the specifics of the innermost function first.


       — Complete the innermost function first, and then move up levels.


       — Do not forget to include all the arguments/requirements of the outer
         functions. This eventuality can be precluded by always using the
         “Insert/Paste Function” dialog.


       — If the function has an error that cannot be easily identified, use the
         Error Checking or Formula Evaluation tools. These tools are taught in
         5.5.




                                                                                  218
Page for Notes
                                 Financial Analysis using Excel




                                                                      CHAPTER 13


                                     ADD-INS: ENHANCING EXCEL



       This chapter discusses the following topics:


          — WHAT CAN AN ADD-IN DO?

          — WHY USE AN ADD-IN (AND NOT JUST EXCEL
                 MACROS/PROGRAMS)?

          — ADD–INS INSTALLED WITH EXCEL

          — OTHER ADD-INS

          — THE STATISTICS ADD-IN

          — CHOOSING THE ADD-INS




13.1                 ADD-INS: INTRODUCTION

       An “Add-In” is a software application that adds new functionality to
       Excel. The Add-In typically seamlessly fits into the Excel interface,
       providing accessibility to its functionality through

       — new menus
       — new options in existing menus
       — new functions
       — new toolbars and specific toolbar icons




                                                                               220
                                     Chapter 13: Add-Ins: Enhancing Excel




13.1.A                 WHAT CAN AN ADD-IN DO?


            Almost anything an imaginative software developer could create.
            Usually, an Add-In provides functionality that is useful for a particular
            type of analysis/industry — statistics, finance, real estate, etc.




13.1.B                 WHY USE AN ADD-IN?


            The Add-In could have its base code written in software languages like C,
            C++, FORTRAN, Pascal, etc. This is important because some algorithms
            and operations (like simulations) operate best when written in a specific
            language. Therefore, the developer uses the best language/tool to create
            the functionality and then packages this inside an Add-In.




13.2                       ADD–INS INSTALLED WITH EXCEL

            Some Add–Ins are available in the Microsoft Office CD–ROM and are
            installed (but not activated26) along with Excel. I show the use of three
            Add–ins.




13.3                       OTHER ADD-INS

            Many commercially sold Add-Ins can be almost like separate software just




         26 Figure 540 and Figure 542 show how to activate the Add-ins




221
                                   Financial Analysis using Excel




         needing Excel as the “host.” Two examples:


                — Crystal Ball risk analysis software


                — UNISTAT software for conducting advanced statistics and
                  econometrics from inside Excel


         Hundreds of software companies construct Add-Ins. The greatest
         contribution of this book, if I succeed in doing so, would be the opening of
         this massive potential functionality to Excel users.




13.4                   THE STATISTICS ADD-IN

         The Analysis ToolPak Add-In that ships with Excel can conduct several
         procedures including descriptives, regression, ANOVA, F-test, correlation,
         T-tests, moving average, and histogram. Let us learn how to use this
         “Add-In.”




13.4.A               CHOOSING THE ADD-INS


         Choose the menu option TOOLS/ADD-INS. You will see several Add-Ins
         as shown in Figure 157. (You may not see all the Add–Ins shown in the
         next two figures.)




                                                                                        222
                                     Chapter 13: Add-Ins: Enhancing Excel




                                       Figure 157: Selecting an Add-In




           Figure 158: In Excel XP, the Add-Ins dialog provides access to “Automation.” This topic is
                                         beyond the scope of this book.




         You need the “Analysis ToolPak Add-Ins.” Select — by clicking on it —
         the box to the left of these Add-Ins (shown in Figure 159). Execute the
         dialog by clicking on the button OK and wait for some time while the Add-
         Ins are “loaded” or “registered” with Excel. An Add-In has to be
         loaded/registered before it is available for use. The Add-In remains
         loaded across sessions. It is only “unloaded” when you select the option
         TOOLS/ADD-INS and deselect the Add-In27.




      27 If too many Add-Ins are loaded, Excel may work too slowly, or even freeze.If you find
         this problem occurring, then just load the Add-in when you are going to use it and
         unload it before quitting Excel.


223
                           Financial Analysis using Excel




                   Figure 159: The Add-In pair for data analysis




You have activated the “Analysis ToolPak.” At the bottom of the menu
TOOLS, you will see the option “DATA ANALYSIS the bottom— this
option was not there before you accessed the Add-In. (This is illustrated
in Figure 160.)


The statistical procedures are accessed through this new option.


  Note:
  Usually Add-Ins expose their functionality by creating new menu
  options or even new menus. The menu option “Data analysis”
  provides the statistics functionality available in “Analysis ToolPak”
  and “Analysis ToolPak VB.” The menu options “Optquest” down till
  CB Bootstrap” are linked to the Add-in “Crystal Ball” (not shipped in
  the Office CD-ROM).




                                                                            224
          Chapter 13: Add-Ins: Enhancing Excel




      Figure 160: The “Data Analysis” menu option




225
Page for Notes
                   Chapter 14: The SOLVER Tool for Constrained Linear Optimization




                                                                                 CHAPTER 14


                                                     THE SOLVER TOOL FOR
                                                      CONSTRAINED LINEAR
                                                                         OPTIMIZATION



       This chapter teaches:


          — DEFINING THE OBJECTIVE FUNCTION (CHOOSING THE
                 OPTIMIZATION CRITERION)

          — ADDING CONSTRAINTS

          — OPTIONS




14.1                  DEFINING THE OBJECTIVE FUNCTION (CHOOSING
                      THE OPTIMIZATION CRITERION)

       The problem of constrained optimization:


       For example,


       Maximize/Minimize /other (over the choice parameters Xc …) Y = f(X1,
       X2 …)


       Subject to the inequality constraints:-


               C1 = ….



227
                              Financial Analysis using Excel




       C2 >=…


       C3 <= …


The Add-In “Solver” can solve such models. In the Solver dialog (user-
input form), the options equate with the function above. The “mapping” of
the dialog to different parts of the optimization function is shown in the
next table.


                                 Table 36: The “Solver”

Option in the Solver dialog    Equate to the following part of the optimization
….                             function…

Equal to:”                     The optimization function

Set Target Cell”               Function that needs to be optimized

By Changing Cells”             The choice parameters Xc….

Subject to the Constraints”    The constraints C1, C2, …


The Solver permits constraints of inequality. This makes the solver
extremely powerful.


Choose the menu option TOOLS/ADD-INS. Choose the Add-In “Solver” as
shown in Figure 161. Execute the dialog by clicking on the button OK.


                       Figure 161: Selecting the Solver Add-In




                                                                                  228
                       Chapter 14: The SOLVER Tool for Constrained Linear Optimization




         You have activated the “Analysis ToolPak.” If you go to the menu
         TOOLS, you will see the option “SOLVER“— this option was not there
         before you accessed the Add-In. Please define a sample problem and try it
         on an Excel workbook28.


         Access the feature through the menu path TOOLS/SOLVER. The dialog
         shown in Figure 162 opens. The “Target Cell” contains the formula for
         the function you are attempting to optimize.


         The “Equal to” area is where you choose the optimization criterion–


                 — Maximization (Max)


                 — Minimization (Min)


                 — The “Value of” option permits a more complex value seek method
                   than the rough one in TOOLS/GOAL SEEK shown in chapter 15
                   on page 230.




      28 I do not supply the sample data for most of the examples in chapter 42 to chapter 46.

         My experience is that many readers glaze over the examples and do not go through
         the difficult step of drawing inferences from a result if the sample data results are
         the same as those in the examples in the book.


229
                             Financial Analysis using Excel




                          Figure 162: Setting the target cell




The choice parameters are the numbers the algorithm plays around with
to find the max/min.


You have to tell Excel about the cells that contain these parameters. One
can do it manually, or, an easier option is to click on the button “Guess.”


Excel automatically chooses all the cell references for use in the formula
in J10 (the target cell/objective function). This is illustrated in Figure
163.


                  Figure 163: Selecting the criterion for optimization




                                                                              230
                   Chapter 14: The SOLVER Tool for Constrained Linear Optimization




14.2                 ADDING CONSTRAINTS

       The optimization function has been defined, as have the “choice
       parameters.” At this stage, you have to add the constraints.


       Click on the button “Add” and write in a constraint as shown in Figure
       164.


                                  Figure 164: The first constraint




       After defining the first constraint, click on the button “Add” (see Figure
       164.)


       Write the second constraint— see Figure 165.


                                 Figure 165: The second constraint




       Continue with constraint definitions.


       After defining the last constraint, execute the dialog by clicking on the
       button OK (see Figure 165).




231
                                 Financial Analysis using Excel




         Note:
         The constraints are shown in the area “Subject to the Constraints”
         as shown in Figure 166.



                           Figure 166: The constraints for the Solver




14.3                 CHOOSING ALGORITHM OPTIONS

       You need to choose the options for the analysis. So, click on the button
       “Options.” The dialog shown in Figure 167 opens.


       You may want to increase the iterations to 10,000. If you want to relax
       the requirements for preciseness, increase the value of “Precision” by
       removing some post-decimal zeros.


       “Save Model” is used to save each optimization model. You can define
       several optimization problems in one workbook.


       The other options are beyond the scope of this book. Click on the button
       “Continue.”




                                                                                  232
                  Chapter 14: The SOLVER Tool for Constrained Linear Optimization




                             Figure 167: Options in the Solver Add-In




Running the Solver

      Execute the procedure by clicking on the button “Solve.”


      The following output can be read from the spreadsheet.


         •   the optimized value of the Objective Function (that is, the value of
                the formula in the cell defined in the box “Set Target Cell”)


         •   is the combination of the choice variables (that is, those whose
                 value is obtained from the cells defined in the dialog area “By
                 Changing Cells”)




233
              Financial Analysis using Excel




Figure 168: The completed constrained optimization dialog




                                                            234
Page for Notes
                                  Financial Analysis using Excel




                                                                          CHAPTER 15


                                “IF-THEN” ANALYSIS: SCENARIOS
                                                                   AND GOAL SEEK



       This chapter discusses the following topics:


          — SETTING THE DESIRED VALUE FOR THE “TARGET” CELL
                 (THE ONE WITH THE FORMULA THAT REFERENCES THE
                 “SOLUTION” CELL)

          — CHOOSING THE “SOLUTION” CELL

          — RUNNING THE UTILITY




15.1                 SCENARIOS (FOR “IF THIS ASSUMPTION-THEN THIS
                     RESULT”)

       The sample data for this section is in the file “Scenarios.xls.”


       The data in columns “C,” “D” and “E” is the size of the labor force in years
       “1995,” “2000” and “2010,” respectively, for specific age groups defined in
       column “A” and for countries defined in column “B.” The cell “H3” holds
       the assumption of the “cumulative or total” growth rate of the labor force
       from the year 2010 to 2020. This rate is assumed equal for all age groups
       and countries. Column “F” is calculated by multiplying the corresponding
       cell in column “E” with “100% plus the growth rate of 40% in cell H3.”
       Therefore, column “F” values are 40% higher than the values in column
       “E.” The formulas in the cells in column “G” directly reference cell “H3.”




                                                                                      236
                         Chapter 15: “If-Then” Analysis – Scenarios and Goal Seek




         The cells “H6,” “H7,” and “H8” provide statistical parameters for the year
         2020 for the country Algeria (that is, for the cells “F2” to “F14”).


         These formulas indirectly reference cell “H3” through the formulas in the
         cells “F2” to “F14.”


                                Figure 169: The sample data and formula cells




15.1.A             DEFINING THE SCENARIOS


         Go to the menu option TOOLS/SCENARIOS. The relevant dialog is
         shown in the next figure.




237
                              Financial Analysis using Excel




 Figure 170: The dialog for TOOLS/SCENARIOS before any scenarios are defined. Click on
                            the button “Add” to define a scenario.




Click on “Add” and define the first scenario. The scenario is the next
figure illustrates. The first scenario is named “40.” It assumes that the
value of cell “H3” is 40% or 0.40.


You can make assumptions of several cells, including non-adjacent cells
and cells across sheets.


                             Figure 171: The first scenario




A comment has been added to explain the scenario. All the other options
are the defaults — I recommend sticking with them.


After the first scenario is defined, click on the button “Add” and define the


                                                                                         238
                        Chapter 15: “If-Then” Analysis – Scenarios and Goal Seek




      second scenario. This scenario is named “50” and works on changing the
      cell “H3.”


          Figure 172: The second scenario is named “50” and works on changing the cell “H3”




      The second scenario assumes that the value of cell “H3” is 50% or 0.50.


           Figure 173: The second scenario assumes that the value of cell “H3” is 50% or 0.50




      The two scenarios are defined. The dialog shows the two scenarios. The
      dialog is reproduced in the next figure.


                              Figure 174: The two scenarios are defined




239
                                  Financial Analysis using Excel




       You can define more scenarios.




Using the Scenarios


       Viewing the result of a scenario

       Click on the scenario name “40,” followed by the button “Show.” The cell
       “H3” will take on the value assumed in the scenario (40% or 0.40). All the
       cells whose formula references the “assumption cell H3” will change.


       In this example, these cells are those in the column “G” (direct reference
       to the assumption cell) and the values of the formulas for the mean,
       median and maximum of column “G” (indirect reference to the
       “assumption cell H3”).




                             Figure 175: Result of the first scenario




       Switching over to the view of the result of another scenario

       Click on the scenario name “50,” followed by the button “Show.” The cell
       “H3” will take on the value assumed in the scenario (50% or 0.50). All the
       cells whose formula references the “assumption cell H3” will change.


       In this example, these cells are those in the column “G” (direct reference
       to the assumption cell) and the values of the formulas for the mean,



                                                                                    240
                     Chapter 15: “If-Then” Analysis – Scenarios and Goal Seek




      median and maximum of column “G” (indirect reference to the
      “assumption cell H3”).


                               Figure 176: Result of second scenario




Scenario summary

      At this stage, the use of scenarios is not very useful because you can only
      see the results of one scenario at one time. You may wonder if a better
      option is to copy the worksheet and use 40% in cell “H3” of 1 worksheet
      and 50% in cell “H3” of the other worksheet.




                         Figure 177: Obtaining a “Scenario Summary”




      The real power of Scenarios comes from its ability to create a comparative
      summary table from the different scenarios. Click on the button
      “Summary.” Choose the option “Scenario summary” and the cells whose
      values you want to compare across the scenarios. I have chosen the cells



241
                                    Financial Analysis using Excel




       that contain the mean, median and maximum of column “G.”


       The “Scenario Summary” is created and displayed on a new worksheet.
       Note that the columns compare across scenarios, while the rows display
       the formula results you wish to compare.



       Making the output easily interpretable

       You can type in “Assumed Growth Rate,” “Mean,” “Median” and
       “Maximum” into cells “C6,” “C8,” “C9,” and “C10,” respectively.


           Figure 178: The “Scenario Summary” is created and displayed on a new worksheet




Using the “Group and Outline” tool

       Note that Excel has automatically inserted the “plus and minus” signs,
       grouping range outlines, and grouping levels (“1” and “2”) to the Scenario
       Summary table. Experiment with using these indicators to learn more
       about “Grouping and Outlining,” a skill taught in Volume 1: Excel For
       Beginners.




                                                                                            242
                        Chapter 15: “If-Then” Analysis – Scenarios and Goal Seek




       Figure 179: Collapsing the grouped Scenario columns “D” –”F” by clicking on the grouping
      indicator “minus” at the top. (The indicator can be seen in the previous figure. The indicator
                                           changes to a “plus.”)




      Figure 180: Expand the columns so that all the columns can be seen. Now contract the group
        of row “4” and the group of row “6” by clicking on the “minus” signs for both of them. (The
             indicators can be seen in the previous figure. The indicators change to a “plus.”)




243
                                      Financial Analysis using Excel




           Figure 181: Re-expand the rows by clicking on the two “plus” indicators for the rows




Scenario-based Pivot Tables

       Go to the dialog (user-input form) for TOOLS/SCENARIOS after the
       scenarios have been defined.


       Click on the button “Summary.”


       Choose the option “Scenario Pivot” and the cells whose values you want
       use in the data region of the Pivot.


                                Figure 182: Obtaining a “Scenario Pivot”




                                                                                                  244
                      Chapter 15: “If-Then” Analysis – Scenarios and Goal Seek




      The Pivot is created on a new worksheet. This Pivot is simple and small
      because we have defined only one “assumption cell,” two scenarios within
      this assumption cell, and three “result cells.”


             • The number of data rows in the Pivot equals the number of
               scenarios.


             • The number of data columns equals the number of result cells.


             • The number of “pages” in the Pivot is defined by the number of
               users who have defined assumption cells.


                       Figure 183: The Pivot is created on a new worksheet




      See Volume 3: Excel– Beyond The Basics to learn how to collaborate and
      work simultaneously on one file. If you click on the “Merge” button in the
      main Scenarios dialog, then you can merge the scenarios defined by
      different users. Choose a different page — if you have more than one
      user — by clicking on its name in the list that opens when you press the
      arrow on the right of cell “B1.”


      You can create a separate worksheet and a separate chart for each page
      using methods taught in Volume 4: Managing & Tabulating Data in
      Excel. See that book for more on working with Pivot Reports.


      The users who have defined scenarios will be listed. All lists all the



245
                                    Financial Analysis using Excel




       scenarios defined by all users. Use the “Merge” button to merge scenarios
       by different users.


                   Figure 184: The users who have defined scenarios will be listed




15.2                   GOAL SEEK (“IF I WANT THIS CELL TO HAVE A
                       CERTAIN RESULT, WHAT VALUE SHOULD THAT
                       CELL TAKE)

       Type this formula into cell F4 of the sample data file ““Advanced
       File2.xls.” —




       This formula will add the values in cells B2, B3… B8 and then add this
       sum to the value in cell D4 multiplied by 1.23. Note that the formula
       references the cell D4 and the cells B2 to B8.


       I will show how Excel permits you to find a value for D4 such that F4
       equals a desired “target” value. Assume you want to find the value in cell
       D4 that will make the value of the formula in F4 equal to 10,000,000,000.




                                                                                     246
                              Chapter 15: “If-Then” Analysis – Scenarios and Goal Seek




15.2.A                 SETTING THE DESIRED VALUE FOR THE “TARGET” CELL (THE ONE
                       WITH THE FORMULA THAT REFERENCES THE “SOLUTION” CELL)


            Click on the cell “F4”— that is, the cell for which a desired value is
            “sought.” Then choose the menu option TOOLS/GOAL SEEK. The
            relevant dialog is shown in Figure 185.


            Enter the desired/target value into the box “to value” as shown in Figure
            186.


                                        Figure 185: The “Goal Seek” dialog




15.2.B                 CHOOSING THE “SOLUTION” CELL


            You want F4 to achieve the given value by changing the value in cell D4.
            So enter D4 in the box “By changing cell” as shown in Figure 18629.




         29 Alternatively, click on the box marked by the arrow and then choose the cell from the

           sheet.


247
                                 Financial Analysis using Excel




                            Figure 186: Choosing the “solution” cell




Running the utility

       Execute the dialog by clicking on the button OK. You will be told if a
       solution was found. Go and look at cell D4. The value in there is the
       desired one— the value that makes F4 = “target or desired value.”




                                                                                248
                         Chapter 15: “If-Then” Analysis – Scenarios and Goal Seek




                                                         COLUMNS, 11, 48, 199
      A                                                  COMMENT, 11

      A1, 20, 23, 204                                    COMMENTS, 10, 31, 48

      ABS, 176                                           COMPOUND, 85

      ACCRINT, 128, 129, 140                             CONDITIONAL FORMATTING, 12

      ACCRINTM, 136, 137, 140                            CONFIDENCE, 65, 66, 67

      ADD–IN, 214                                        CONSOLIDATION, 13

      ADD-INS, 13, 214, 216, 217, 222                    CONSTRAINTS, 221

      ADD–INS INSTALLED WITH EXCEL,                      CONTROLLING CELL REFERENCE
        214                                                BEHAVIOR WHEN COPYING AND
                                                           PASTING FORMULAE (USE OF THE,
      ADDRESS, 200                                         31
      AND, 31, 48, 85, 98, 116, 166, 184, 186,           COPY, 9, 32, 33, 34, 35, 38
        188, 189, 190, 191, 193, 214
                                                         COPYING AND PASTING, 31, 32
      ANOVA, 178, 216
                                                         COPYING AND PASTING A FORMULA
      AREAS, 200                                           TO OTHER CELLS IN A DIFFERENT
      AUDITING, 12, 72, 74, 75, 76, 77, 80                 ROW AND COLUMN, 31

      AUTOCORRECT, 13                                    COPYING AND PASTING A FORMULA
                                                           TO OTHER CELLS IN THE SAME
      AUTOFORMAT, 12                                       COLUMN, 31
      AVEDEV, 179                                        COPYING AND PASTING A FORMULA
      AVERAGE, 62, 146, 147, 163, 178, 204,                TO OTHER CELLS IN THE SAME
        205, 206, 208, 210, 211                            ROW, 31

      AVERAGEA, 163                                      COPYING AND PASTING FORMULAS
                                                           FROM ONE WORKSHEET TO
                                                           ANOTHER, 31
      B                                                  CORREL, 63, 64, 180
      BOND, 116                                          CORRELATION, 166
                                                         COS, 77, 78, 79, 80
      C                                                  COUNT, 163, 166, 167, 168, 169

      CASH FLOW, 98                                      COUNTA, 163, 166, 169

      CELL, 20, 48, 146, 184, 185, 230                   COUNTBLANK, 166, 170

      CELL REFERENCE, 20                                 COUNTIF, 166, 173, 174, 175

      CELLS, 11, 12, 48, 125                             COUNTING AND SUMMING, 166

      CENTRAL TENDENCY, 146                              COUPDAYBS, 119, 121, 125, 139

      CHOOSE, 175, 193, 194, 197, 198, 202,              COUPDAYS, 119, 120, 125, 139
        203, 204                                         COUPDAYSNC, 119, 121, 125, 139
      CLEAR, 10                                          COUPNCD, 122, 123, 124, 125, 139
      COLUMN, 12, 48, 199                                COUPNUM, 124, 125, 139



249
                                   Financial Analysis using Excel




COUPPCD, 123, 125, 139
                                                      F
COVAR, 180
COVARIANCE, 166                                       FALSE, 114, 157, 158, 167, 168, 170, 184,
                                                        185, 186, 187, 188, 189, 190, 191, 192,
CROSS SERIES RELATIONS, 166                             194, 195, 197, 198, 199, 202, 203
CUMIPMT, 90, 91, 92, 108                              FILE, 9, 49
CUMPRINC, 89, 90, 91, 92, 108                         FILL, 10
CUMULATIVE INTEREST AND                               FILTER, 13
  PRINCIPAL PAID ON A LOAN, 85
                                                      FIND, 10
CUMULATIVE INTEREST PAID ON A
  LOAN, 85                                            FORM, 13

CUMULATIVE REPAYMENT OF                               FORMAT, 12, 125
  PRINCIPAL, 85                                       FORMULA, 10, 20, 22, 31, 48, 57, 72, 77,
CUSTOMIZE, 13                                           80, 230

CUT, 9, 45                                            FORMULA BAR, 10, 22

CUTTING AND PASTING FORMULAE,                         FREEZE PANES, 13
  31                                                  FUNCTION, 11, 57, 58, 59, 63, 65, 67, 68,
                                                        87, 88, 89, 90, 93, 95, 99, 100, 101, 102,
                                                        103, 104, 105, 106, 109, 110, 111, 114,
D
                                                        119, 120, 121, 122, 123, 124, 126, 127,
                                                        128, 129, 130, 131, 133, 134, 135, 136,
DATE, 76                                                138, 139, 140, 141, 143, 146, 147, 148,
DB, 110, 111, 112, 113                                  149, 150, 152, 153, 154, 156, 157, 161,
                                                        162, 167, 169, 170, 171, 173, 174, 178,
DDB, 111, 112, 113                                      180, 181, 184, 192, 196, 199, 206, 214
DEGREES, 79                                           FUNCTION / FINANCIAL, 11, 87, 88, 89,
DELETE SHEET, 10                                        90, 95, 105, 106, 110, 111, 114, 126, 129,
                                                        130, 131, 140, 141, 143
DEPRECIATION, 98
                                                      FUNCTION / INFORMATION, 11, 170
DEVIATIONS FROM THE MEAN, 166
                                                      FUNCTION / LOGICAL, 11
DEVSQ, 178, 179
                                                      FUNCTION / LOOKUP, 11, 199
DISC, 132, 133, 140
                                                      FUNCTION / MATH & TRIG, 11
DISPERSION, 146
                                                      FUNCTION / STATISTICAL, 11, 148, 149,
DURATION, 125, 126, 139                                 150, 152, 153, 154, 156, 157, 158, 161,
                                                        162, 167, 169, 174, 178
E                                                     FUNCTION / TEXT, 11

EDIT, 9, 32, 33, 34, 35, 36, 38, 45, 49, 50,          FUNCTION WITHIN A FUNCTION, 57
  52, 53, 54, 55                                      FUNCTIONS ENDING WITH AN, 146
EFFECT, 85, 94, 95                                    FUTURE VALUES, 98
ERROR.TYPE, 184, 197, 198                             FV, 98, 105, 106, 107, 108
EVEN, 184, 187, 188                                   FVSCHEDULE, 98, 106, 107, 108
EXP, 176
EXPONENTIAL, 166                                      G
EXTERNAL DATA, 13                                     GEOMEAN, 150




                                                                                                     250
                                                    Index




      GEOMETRIC MEAN, 146                                   ISODD, 184, 195
      GO TO, 10                                             ISREF, 184, 193
      GOAL SEEK, 12, 223, 241                               ISTEXT, 184, 192, 193, 194
      GROUP AND OUTLINE, 13
                                                            K
      H
                                                            KURT, 162
      HARMEAN, 149                                          KURTOSIS, 146
      HARMONIC MEAN, 146
      HEADER, 10                                            L
      HEADER AND FOOTER, 10                                 LARGE, 146, 155
      HELP, 14                                              LINKS, 10
      HIDE, 13                                              LN, 176
      HYPERLINK, 12, 200                                    LOAN REPAYMENTS, 85
                                                            LOG, 166, 177
      I
                                                            LOG10, 177
      IF, 98, 166, 175, 184, 185, 187, 188, 190,
         193, 194, 197, 198, 202, 203, 211                  M
      INDEX, 200
                                                            MACROS, 13, 214
      INDIRECT, 200
                                                            MATCH, 200
      INSERT, 11, 40, 42, 43, 57, 59, 63, 65, 67,
        68, 87, 88, 89, 90, 93, 94, 95, 99, 100,            MAX, 154, 155, 163
        101, 102, 103, 104, 105, 106, 109, 110,             MAXA, 154, 155, 163
        111, 114, 119, 120, 121, 122, 123, 124,
        126, 127, 128, 129, 130, 131, 133, 134,             MDURATION, 125, 126, 139
        135, 136, 138, 139, 140, 141, 143, 147,             MEDIAN, 146, 152
        148, 149, 150, 152, 153, 154, 156, 157,
        161, 162, 167, 169, 170, 171, 173, 174,             MIN, 155, 163
        175, 178, 180, 181, 192, 196, 199, 206              MINA, 155, 163
      INTEREST, 85, 116                                     MIRR, 98, 103, 108
      INTRATE, 138, 140                                     MODE, 80, 146, 152
      IPMT, 87, 88, 91, 92, 108                             MOVE OR COPY SHEET, 10
      IRR, 98, 102, 104, 108                                MULTIPLE RANGE REFERENCES, 57
      ISBLANK, 184, 192, 194                                MULTIPLYING/DIVIDING/SUBTRACTI
      ISERR, 184, 196                                        NG/ADDING ALL CELLS IN A
                                                             RANGE BY A NUMBER, 48
      ISERROR, 184, 196, 197, 198
      ISEVEN, 184, 195
                                                            N
      ISLOGICAL, 184, 192, 194
      ISNA, 184, 196, 198                                   N, 85, 168, 184, 196, 197, 198, 199

      ISNONTEXT, 184, 192, 194                              NA, 11, 40, 43, 79, 168, 184, 196, 197, 198

      ISNUMBER, 184, 192, 194, 211                          NOMINAL, 85, 95, 96
                                                            NORMAL DENSITY FUNCTION, 166



251
                                   Financial Analysis using Excel




NORMDIST, 206, 208                                    PASTE, 9, 10, 31, 32, 33, 34, 36, 43, 45, 49,
                                                        50, 52, 53, 54, 58
NOT, 31, 48, 85, 184, 185, 188, 189, 190,
  191, 192, 193, 194, 196, 197, 198, 214              PASTE SPECIAL, 10, 49, 50, 52, 53, 54
NOT FUNCTION, 184                                     PASTING ALL BUT THE BORDERS, 48
NOT(ISBLANK), 184, 192, 194                           PASTING COMMENTS, 48
NOT(ISERR), 184, 196                                  PASTING DATA VALIDATION, 48
NOT(ISERROR), 184, 197, 198                           PASTING ONLY FORMATS, 48
NOT(ISLOGICAL), 184, 192, 194                         PASTING ONLY THE FORMULA, 31, 48
NOT(ISNA), 184, 196, 198                              PASTING THE RESULT OF A
                                                        FORMULA, BUT NOT THE
NOT(ISNUMBER), 184, 192, 194
                                                        FORMULA ITSELF, 31
NOT(ISREF), 184, 193
                                                      PAYMENT ON INTEREST AND
NOT(ISTEXT), 184, 193, 194                              PRINCIPAL, 85
NPER, 85, 86, 93, 94, 99, 106, 108                    PAYMENT ON INTEREST ONLY, 85
NPV, 98, 100, 101, 102, 104, 108                      PAYMENT ON PRINCIPAL ONLY, 85
                                                      PEARSON, 180
O                                                     PERCENTILE, 146, 153, 154

OBJECT, 10, 12                                        PERCENTRANK, 156

OBJECTIVE FUNCTION, 221                               PIVOT REPORT, 13

ODD, 184                                              PMT, 87, 88, 89, 91, 92, 108

ODDFPRICE, 129                                        PPMT, 87, 88, 91, 92, 108

ODDFYIELD, 130                                        PRECEDENTS, 72

ODDLPRICE, 131                                        PRESENT VALUES, 98

ODDLYIELD, 131                                        PRICE, 116, 128, 140

OFFICE ASSISTANT, 14                                  PRICEDISC, 132, 134, 140

OFFICE CLIPBOARD, 10                                  PRICEMAT, 120, 127, 128, 129, 130, 131,
                                                        134, 135, 136, 137, 138, 139, 140, 142,
OFFSET, 200                                             143
ONLINE COLLABORATION, 12                              PRINT AREA, 9
OPEN, 9                                               PRINT PREVIEW, 9
OPTIMIZATION, 221                                     PRODUCT, 166, 171
OPTIMIZATION CRITERION, 221                           PROPERTIES, 9
OPTIONS, 13, 21, 23, 31, 48                           PROTECTION, 12
OR, 85, 98, 146, 184, 186, 187, 188, 189,             PV, 91, 98, 99, 100, 102, 106, 108
  190, 191, 193, 198

                                                      Q
P
                                                      QUARTILE, 146, 153
PAGE BREAK, 10, 11
PAGE BREAK PREVIEW, 10
PAGE SETUP, 9




                                                                                                      252
                                          Index




                                                  SKEWNESS, 146
      R
                                                  SLN, 109, 110, 112, 113
      R1C1, 20, 23                                SMALL, 156
      RANK, 146, 157                              SOLVER, 221, 223
      RATE, 85, 86, 93, 106, 108                  SORT, 13
      RATE VERSUS NPER, 98                        SPEECH, 12
      RATES OF RETURN, 98                         SPELLING, 12
      RECEIVED, 138, 140                          SPLIT, 13
      REDO, 9                                     SPSS, 4, 6
      REFERENCES ALLOWED IN A                     SQRT, 176
        FORMULA, 20
                                                  STANDARD DEVIATION, 146
      REFERENCING A BLOCK OF CELLS, 20
                                                  STANDARDIZE, 178
      REFERENCING CELLS FROM
        ANOTHER WORKSHEET, 20                     STATA, 6
      REFERENCING CORRESPONDING                   STATUS BAR, 10
        BLOCKS OF CELLS / ROWS /                  STDEV, 67, 68, 146, 157, 158, 163, 178,
        COLUMNS FROM A SET OF                       208, 209
        WORKSHEETS, 20
                                                  STDEVA, 146, 157, 158, 159, 163
      REFERENCING ENTIRE COLUMNS, 20
                                                  STDEVP, 146, 158, 163
      REFERENCING ENTIRE ROWS, 20
                                                  STDEVPA, 146, 158, 163
      REFERENCING NON– ADJACENT
        CELLS, 20                                 STYLE, 12, 20
      REPLACE, 10                                 SUBTOTALS, 13
      RISK ANALYSIS, 98                           SUM, 28, 166, 167, 170
      ROW, 12, 48, 199                            SUM OF THE SQUARES OF
                                                    DIFFERENCES ACROSS TWO
      ROWS, 11, 48, 199                             VARIABLES, 167
      ROWS TO COLUMNS, 48                         SUM OF THE SUM OF THE SQUARES
      RSQ, 180                                      OF TWO VARIABLES, 166
                                                  SUMIF, 166, 173, 175
      S                                           SUMPRODUCT, 166, 171
                                                  SUMX2MY2, 181
      SAVE, 9
                                                  SUMX2PY2, 180
      SAVE AS, 9
                                                  SUMXMY2, 181
      SAVE AS WEB PAGE, 9
                                                  SYD, 109, 110, 111, 112, 113
      SAVE WORKSPACE, 9
      SCENARIOS, 12, 115, 231, 232, 238
                                                  T
      SEARCH, 9
      SHARE WORKBOOK, 12                          T, 18, 116, 140, 141, 142, 143, 144, 216
      SHEET, 12                                   T BILL FORMULAE, 116
      SIGN, 31, 175                               TABLE, 13, 46
      SKEW, 161                                   TBILLEQ, 140, 141, 142



253
                                  Financial Analysis using Excel




TBILLPRICE, 141, 142, 143                            VAR, 146, 157, 163
TBILLYIELD, 143, 144                                 VARA, 146, 157, 158, 163
TIME, 32                                             VARIANCE, 146
TOOLBARS, 10, 76                                     VARP, 146, 158, 163
TOOLS, 12, 13, 21, 23, 72, 74, 75, 76, 77,           VARPA, 146, 158, 163
  80, 115, 216, 217, 218, 222, 223, 231,
                                                     VDB, 114
  232, 238, 241
                                                     VIEW, 10, 21, 22, 76
TRACE, 72, 74
TRACING THE CELL REFERENCES
  USED IN A FORMULA, 72                              W
TRACING THE FORMULAS IN WHICH                        WEB, 13
  A PARTICULAR CELL IS
  REFERENCED, 72                                     WINDOW, 13, 72, 76
TRANSPOSE, 200                                       WORKSHEETS, 11, 32
TRIAL, 194
TRIMMEAN, 148, 149, 151
                                                     X

TRIMMED MEAN, 146                                    XIRR, 98, 102, 104, 108
TRUE, 114, 157, 158, 167, 168, 170, 184,             XNPV, 98, 101, 102, 104, 108
  185, 186, 187, 188, 189, 190, 191, 192,
  194, 195, 196, 197, 198, 199, 202, 203
                                                     Y
TYPE, 106, 184, 185, 193, 194
                                                     YEAR, 85
U                                                    YIELD, 116, 127, 140

UNDO, 9, 45, 55                                      YIELDDISC, 134, 140
                                                     YIELDMAT, 136, 140
V
                                                     Z
VALIDATION, 13
VALUE, 146, 168, 184, 194, 196, 197, 198,            ZOOM, 11
  230




                                                                                    254


