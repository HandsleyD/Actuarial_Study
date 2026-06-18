---
normalized_id: shared-pdf-reference-schaum-s-fundamentals-of-relational-databases-291
exam_code: SHARED
material_scope: schaum_s fundamentals of relational databases -- 291.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Schaum_s Fundamentals of Relational Databases -- 291.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-schaum-s-fundamentals-of-relational-databases-291

                                                                     Page i




Schaum's Outline of Fundamentals of Relational Databases
                       Ramon A. Mata-Toledo, Ph.D.

                  Associate Professor of Computer Science
                         James Madison University

                        Pauline K. Cushman, Ph.D.

          Associate Professor of Integrated Science and Technology
                           and Computer Science
                         James Madison University
                                                                                                                    Page ii

RAMON A. MATA-TOLEDO has been teaching since 1971 in U.S. and overseas high schools and colleges in both
mathematics and computer science. He is currently an Associate Professor of Computer Science at James Madison
University in Harrisonburg, Virginia. Dr. Mata-Toledo earned his Ph.D. in Computer Science from Kansas State
University. He earned his M.S. and M.B.A. from the Florida Institute of Technology. His bachelor degree with a double
major in Mathematics and Physics is from the Instituto Pedagogico de Caracas (Venezuela). He is the author of
numerous publications in scientific magazines, national and international congresses and trade journals. He is coauthor
of Basic Mathematics with Applications to Science and Technology (Schaum's Outline Series), Introduction to
Computer Science (Schaum's Outline Series), and Fundamentals of SQL Programming (Schaum's Outline Series). Dr.
Mata-Toledo also holds Oracle Masters as Database Administrator and Applications Developer from Oracle Education
Services. He has also done database consultant work for national and international organizations. Dr. Mata-Toledo can
be reached at matatora@jmu.edu.

PAULINE K. CUSHMAN taught public school at the elementary level for 12 years. She has been teaching Computer
Science and Computer Information Systems courses at the college and university level since 1985. She has taught a
variety of computer science courses, including programming, intelligent systems, database design, and multimedia
technology. She has done extensive consulting with non-profit agencies regarding database technology. She is currently
an Associate Professor of Integrated Science and Technology and Computer Science at James Madison University in
Harrisonburg, Virginia. Dr. Cushman earned her Ph.D. in Computer Science and Engineering from the University of
Louisville. She is co-author of Introduction to Computer Science (Schaum's Outline Series) and Fundamentals of SQL
Programming (Schaum's Outline Series). Dr. Cushman can be reached at cushmapk@jmu.edu.

DOS, Notepad, and Windows® 95 are trademarks of Microsoft Corporation.
OracleTM, Personal OracleTM, PO8TM and SQL*PlusTM are trademarks of Oracle Corporation.
Certain portions of Oracle Corporation user documentation have been reproduced herein with the permission of Oracle
Corporation. Oracle does not make any representations as to the accuracy or completeness of any information contained
in the Work and is not responsible for any errors or omissions contained in the Work.




Copyright © 2000 by The McGraw-Hill Companies, Inc. All rights reserved. Manufactured in the United States of
America. Except as permitted under the United States Copyright Act of 1976, no part of this publication may be
reproduced or distributed in any form or by any means, or stored in a database or retrieval system, without the prior
written permission of the publisher.

eISBN 0-07-137869-3

The material in this eBook also appears in the print version of this title: 0-07-136188-X.

All trademarks are trademarks of their respective owners. Rather than put a trademark symbol after every occurrence of
a trademarked name, we use names in an editorial fashion only, and to the benefit of the trademark owner, with no
intention of infringement of the trademark. Where such designations appear in this book, they have been printed with
initial caps.

McGraw-Hill eBooks are available at special quantity discounts to use as premiums and sales promotions, or for use in
corporate training programs. For more information, please contact George Hoare, Special Sales, at
george_hoare@mcgraw-hill.com or (212) 904-4069.

TERMS OF USE

This is a copyrighted work and The McGraw-Hill Companies, Inc. ("McGraw-Hill") and its licensors reserve all rights
in and to the work. Use of this work is subject to these terms. Except as permitted under the Copyright Act of 1976 and
the right to store and retrieve one copy of the work, you may not decompile, disassemble, reverse engineer, reproduce,
modify, create derivative works based upon, transmit, distribute, disseminate, sell, publish or sublicense the work or any
part of it without McGraw-Hill's prior consent. You may use the work for your own noncommercial and personal use;
any other use of the work is strictly prohibited. Your right to use the work may be terminated if you fail to comply with
these terms.

THE WORK IS PROVIDED "AS IS". McGRAW-HILL AND ITS LICENSORS MAKE NO GUARANTEES OR
WARRANTIES AS TO THE ACCURACY, ADEQUACY OR COMPLETENESS OF OR RESULTS TO BE
OBTAINED FROM USING THE WORK, INCLUDING ANY INFORMATION THAT CAN BE ACCESSED
THROUGH THE WORK VIA HYPERLINK OR OTHERWISE, AND EXPRESSLY DISCLAIM ANY WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. McGraw-Hill and its licensors do not
warrant or guarantee that the functions contained in the work will meet your requirements or that its operation will be
uninterrupted or error free. Neither McGraw-Hill nor its licensors shall be liable to you or anyone else for any
inaccuracy, error or omission, regardless of cause, in the work or for any damages resulting therefrom. McGraw-Hill has
no responsibility for the content of any information accessed through the work. Under no circumstances shall McGraw-
Hill and/or its licensors be liable for any indirect, incidental, special, punitive, consequential or similar damages that
result from the use of or inability to use the work, even if any of them has been advised of the possibility of such
damages. This limitation of liability shall apply to any claim or cause whatsoever whether such claim or cause arises in
contract, tort or otherwise.

DOI: 10.1036/0071378693
                                                                                    Page iii




Dedication


Dedicated to the memory of my father, Miguel Jesus Mata, the memory of my
uncle Alberto Jose Gomez and to the glory and praise of my heavenly Father,
the Light of the World for the continuous blessing that He offers me through the
love and dedication of my wife Anahis and my children Harold, Lys, and Hayley.
I dedicate this book to all of them with my deepest love and affection. Last but
not least, I dedicate this work to my mother Mami Nina, my aunt Lys Violeta
Mata de Gomez, and my sister Carmen Elena for their love, prayers, and support
throughout the years.
RAMT

Relational databases for all my relations. For my parents who are gone now, but
always emphasized the importance of relations. For my extended family entities,
my siblings, Theo, Marj, Low, and Beth, along with their assorted spouses,
children, and grandchildren. For my children and their spouses, Chuck, Jeni,
Matt, Cindy, and Kerry, and my granddaughters Grace and Natalie; they all have
great attributes. And for my favorite relation, my husband Jim. Our life has been
both integrated and shared.
PKC
                                                                                                                 Page iv




Preface
This book was written for anyone who wants a general introduction to relational databases that is both theoretical and
practical. Relational databases are the most popular database management systems in the world and are supported by a
variety of vendor implementations. Some examples are provided using the RDBMS from Oracle and Microsoft Access.

SQL is the standard computer language used to communicate with relational database management systems, so Chapter
3 provides a brief introduction to SQL. For a more complete explanation of programming in SQL, see the companion
book Schaum's Outline Fundamentals of SQL Programming by the same authors.

We would like to thank the personnel at McGraw-Hill for their help and support, particularly our sponsor editor Barbara
Gilson and editing liaison Maureen Walker. We hope that this book provides a good introduction to relational databases.

              RAMON A. MATA-TOLEDO
              PAULINE K. CUSHMAN
                                                                      Page v




Contents

Chapter 1                                                         1
An Overview of DBMS and DB Systems Architecture

   1.1 Introduction to Database Management Systems                1

   1.2 Data Models                                               10

   1.3 Database System Architecture                              12

Chapter 2                                                        28
Relational Database Concepts

   2.1 Relational Database Management Systems                    28

   2.2 Mathematical Definition of a Relation                     31

   2.3 Candidate Key and Primary Key of Relation                 32

   2.4 Foreign Keys                                              34

   2.5 Relational Operators                                      36

   2.6 Set Operations on Relations                               42

   2.7 Insertion, Deletion and Update Operations on Relations    48

   2.8 Attribute Domains and Their Implementations               52

Chapter 3                                                        78
An Introduction to SQL

   3.1 Introduction to SQL Language                              78

   3.2 Table Creation                                            82

   3.3 Selections, Projections, and Joins Using SQL              91

Chapter 4                                                       122
Functional Dependencies

   4.1 Introduction                                             122

   4.2 Definition of Functional Dependencies                    123
   4.3 Functional Dependencies and Keys                             126

   4.4 Inference Axioms for Functional Dependencies                 126

   4.5 Redundant Functional Dependencies                            128

   4.6 Closures, Cover and Equivalence of Functional Dependencies   131

Chapter 5                                                           148
The Normalization Process

   5.1 Introduction                                                 148

   5.2 First Normal Form                                            149

   5.3 Data Anomalies in 1NF Relations                              153

   5.4 Partial Dependencies                                         154
                                                          Page vi



   5.5 Second Normal Form                           155

   5.6 Data Anomalies in 2NF Relations              157

   5.7 Transitive Dependencies                      157

   5.8 Third Normal Form                            158

   5.9 Data anomalies in 3NF Relations              159

   5.10 Boyce-Codd Normal Form                      160

   5.11 Lossless or Lossy Decompositions            161

   5.12 Preserving Functional Dependencies          169

Chapter 6                                           194
Basic Security Issues

   6.1 The Need for Security                        194

   6.2 Physical and Logical Security                195

   6.3 Design Issues                                196

   6.4 Maintenance Issues                           197

   6.5 Operating System Issues and Availability     198

   6.6 Accountability                               198

   6.7 Integrity                                    212

Chapter 7                                           222
The Entity-Relationship Model

   7.1 The Entity-Relationship Model                222

   7.2 Entities and Attributes                      223

   7.3 Relationships                                226

   7.4 One-to-One Relationships                     229

   7.5 Many-to-One and Many-to-Many Relationships   229

   7.6 Normalizing the Model                        230
   7.7 Table Instance Charts   232

Index                          247
                                                                                                                     Page 1




Chapter 1—
An Overview of DBMS and DB Systems Architechture

1.1—
Introduction to Database Management Systems

A Database Management System (DBMS) is the software system that allows users to define, create and maintain a
database and provides controlled access to the data. A database is a logically coherent collection of data with some
inherent meaning. The term database is often used to refer to the data itself; however, there are other additional
components that also form part of a complete database management system. Figure 1-1 shows that a complete DBMS
usually consists of hardware, software including utilities, data, users and procedures. These items will be explained in
the following paragraphs.




                                                          Fig. 1-1
                                                 Complete computer system.
                                                                                                                          Page 2

The hardware is the actual computer system used for keeping and accessing the database. In large organizations, the
hardware for such a system typically consists of a network with a central server and many client programs running on
desktops. The server is the central processor where the database is physically located. The server usually has a more
powerful processor because it handles the data retrieval operations and most of the actual data manipulation. The clients
are the programs that interact with the RDBM and run on the personal desktops at the user's end to access the database.
A DBMS and its clients can also reside in a single computer. In that case there is usually only one user at a time
accessing the database, either a single user or a single personal database management system accessed by several users
at different times. The actual configuration of the network varies from organization to organization. Specific hardware
issues will not be addressed in this book.

The software is the actual DBMS. In a client/server network, the DBMS allows for data handling programs residing on
the server and client programs on each desktop. In a single-user system usually only one piece of software handles
everything. The DBMS allows the users to communicate with the database. In a sense, it is the mediator between the
database and the users. Each client station or each individual user can be given different levels of access to the data.
Some will be allowed to change portions of the database structure, some can change the existing data, and others will
only be allowed to view the data. The DBMS controls access and helps maintain the consistency of the data. Utilities are
usually included as part of the DBMS. Some of the most common utilities are report writers, application development
tools and other design aids. Examples of DBMS software include Microsoft AccessTM, Oracle Corporation Personal
OracleTM, and IBM DB2TM. The typical arrangement of all the software modules and how they interact in a DBMS will
be explained at the end of this chapter.

The database should contain all the data needed by the organization. One of the major features of databases is that the
actual data are separated from the programs that use the data. The set of facts represented in a database is called the
Universe of Discourse (UOD). The UOD should only include facts that form a logically coherent collection and that are
relevant to its users. For this reason, a database should always be designed, built and populated for a particular audience
and for a specific purpose. Probably as part of the UOD discussion, it is important to point out that only a partial view of
the real world can be captured by a DBMS. Emphasis is on the relevant data pertaining to one or more objects, or
entities. We will define an entity as the thing of significance about which information needs to be known. The
characteristics that describe or qualify an entity are called attributes of the entity. For instance, in a student database, the
basic entity is the student. Information recorded about that entity might be first and last name, major, grade point
average, home address, current address, date of birth, and class level. These are the attributes of the student entity. The
system would not be interested in the type of clothes, the number of friends, the movies the student attends, and so on.
That is, this information is not relevant to the user and should not be part of the UOD. More explanation concerning data
will be given in the next section.
                                                                                                                                      Page 3

Also, for each attribute, the set of possible values that the attribute can take is called the domain of the attribute. The
domain of the date of birth would be all the dates that might be reasonable in the student body; none in the 1700s would
be expected. Undergraduate class levels would probably be restricted to Freshman, Sophomore, Junior, and Senior. No
other values would be allowed for that attribute.

There are a number of users who can access or retrieve data on demand using the applications and interfaces provided
by the DBMS. Each type of user needs different software capabilities.

• The database administrator (DBA) is the person or group in charge of implementing the database system within the
organization. The DBA has all the system privileges allowed by the DBMS and can assign (grant) and remove (revoke)
levels of access (privileges) to and from other users.

• The end users are the people who sit at workstations and interact directly with the system. They may need to respond
to requests from people outside the organization, to find answers quickly to questions from higher-level management, or
to generate periodic reports. In some cases the end users should be allowed to change data within the system, for
example addresses or order information. Other end users, such as those at a help desk, would only need privileges to
view the data, not to change it.

• The application programmers interact with the database in a different manner. They access the data from programs
written in high-level languages such as Visual Basic or C++. The application programmers design systems such as
payroll, inventory, and billing that normally need to access and change the data.

An integral part of any system is the set of procedures that control the behavior of the system, that is, the actual
practices the users follow to obtain, enter, maintain, and retrieve the data. For example, in a payroll system, how are the
hours worked received by the clerk and entered into the system? Exactly when are monthly reports generated and to
whom are they sent? These procedures are often formalized so that users at any level know exactly what to do and how
to do the assigned task. In many organizations, if some employees have been there for a long time they may know
exactly what to do and when. However, it is important to have procedures clearly articulated and written on record so
that the system would not be jeopardized if new employees needed to use the system. Part of the job of the DBA is to
verify that all procedures related to the complete system are clearly delineated.
   Example 1.1
   Indicate which type of user would perform the following functions for a payroll system in a large company: (a) Write an application
   program to generate and print the checks, (b) change the address in the database for an employee who has moved, (c) create a new user
   account for a newly hired payroll clerk.
                                                                                                                    Page 4

a. Write an application program to generate and print the checks.

An application programmer or a team of programmers would design and implement such an application program.

b. Change the address in the database for an employee who has moved.

An end user might take the information from the employee over the phone and directly access the database to change it.
However, changing such information from phone conversations may result in incorrect data because of typographical
error or misunderstanding. In order to verify that updates are made correctly, the procedures in many organizations
require that database changes be submitted in writing.

c. Create a new user ID for the newly hired payroll clerk.

The DBA or the DBA assistant working under the supervision of the DBA would be the person to create new user IDs.
In a small organization, there might be only one person who does all administration of the system. In larger
organizations, DBA assistants on the database administration team would be assigned different jobs. One person might
handle all user accounts and another might be in charge of database maintenance.

1.1.1—
Data

The data are the heart of the DBMS. There are two kinds of data. First, and most obvious, is the collection of
information needed by the organization. The second kind of data, or metadata, is information about the database. This
information is usually kept in a data dictionary or catalog. The data dictionary includes information about users,
privileges and the internal structure of the database. Careful management of all the data is essential in order that
information can be trusted to be up to date and accurate. All levels of users need to have a firm understanding of the
database and how it is structured. It is helpful to examine the database from several different perspectives. The system
may be multi-user or single-user; the data are usually both integrated and shared; and the database may be centralized or
distributed.

First, the configuration of the hardware and the size of the organization will determine whether it is a multi-user system
or a single-user system. In a single-user system, the database resides on one computer and is only accessed by one user
at a time. This one user may design, maintain, and write programs for the system, performing all the user roles. On the
other hand, someone else, often a consultant, may have been hired to design the system. In this case, the single user may
only perform the role of end user and the data may always be accessed interactively through the DBMS without using
application programs.

Because of the large amount of data managed even by small organizations, most systems are multi-user. In this situation,
the data are both integrated and
                                                                                                                                    Page 5

shared. A database is integrated when the same information is not recorded in two places. For example, both the billing
department and the shipping department may need customer addresses. Even though both departments may access
different portions of the database, the customers' addresses should only reside in one place. It is the job of the DBA to
make sure that the DBMS makes the correct addresses available from one central storage area.

Likewise, the individual pieces of data are shared by both departments. The DBMS must assure that the two users are
not changing different portions of the data at the same time. If this happens, the data may not remain accurate. Also,
users who share data do not need the same level of access. The shipping department may only need to examine the
customer's address for shipping purposes and should have no need to examine the customer's payment history. The
billing department needs to be able both to examine the current balance and to change the balance when a payment is
made. These permissions are called privileges and, as indicated before, are assigned by the DBA.
   Example 1.2
   Consider a database at a cable company which contains customer names, addresses, service categories (basic cable, premium channels,
   pay-per-view, etc.) and billing information. Indicate for each user, a billing clerk, a repair person, and a customer service
   representative, which items that user should be able to access and which items the user should be able to access and change.


              User                                               Permission Level

a. Billing clerk                       Should be able to access and change all data.

b. Repair person                       Needs to access but not change name, address, and service
                                       information. Should not have access to any billing information.

c. Customer                            Needs to be able to access and change name, address, and
service representative                 service information. If billing questions are referred to the
                                       billing department, the customer service person has no need of
                                       any billing information.


A third issue for understanding both the data and the DBMS is whether the system is centralized or distributed. During
the 1970s and 1980s most database management systems resided on large mainframes or minicomputers. The systems
were centralized and single tier, which means the DBMS and the data reside in one location. The theory was that if data
are kept in two places there is a high probability that two items which are supposed to be identical may not in fact be the
same. For example, if a customer's address is stored in two separate tables for any reason, it is possible for one to be
changed and the other to remain the same. Often dumb terminals were used to access the DBMS through teleprocessing.
                                                                                                                    Page 6

The rise of personal computers in businesses during the 1980s, the increased reliability of networking hardware, and the
advances of doing business over the Internet during the 1990s led to the newer trend of trying to maintain accuracy of
data and still make use of distributed systems. Two-tier and three-tier systems became common. In a two-tier system,
different software is required for the server and for the client. The three-tier system adds middleware, which provides a
way for clients of one DBMS to access data from another DBMS. Fig. 1-2 illustrates the difference between single-tier,
two-tier and three-tier software systems.




                                                           Fig. 1-2
                                          Single-, two- and three-tier configurations.

A distributed DBMS can be implemented in several different ways. A local office network may store the customer data
on one server and the supplier data on another. In both cases, the system would allow many client programs to access
the data from both servers at the same time. Chapter 6 discusses the security
                                                                                                                      Page 7

implications of this configuration. Another method of distribution is to store several equivalent databases in different
places. The data are distributed geographically and located closest to where they will be used. However, it is critical in a
distributed database that each node of the distributed system should be able to execute a global application or access
files at any other node. For example, an organization with branches in several states may store a different customer list
at each branch. The tables are distributed but connected, so the DBMS is able to find the information for any customer at
any time from any location. The users ask for particular information and the DBMS hides the details of how it locates
the requested data. This transparency is an important issue in distributed DBMS software. Remember, even though the
database may be distributed, it is not the same as being decentralized. Items of data still reside in only one place and the
DBMS knows where to find them. Another advantage of the distributed model is that it results in improved reliability
and performance. When both data and the DBMS software are disbursed, if one system goes out, others should still be
able to function, and the entire organization is not immobilized.

There are several possible arrangements for connecting the nodes of a distributed system. They may be connected in a
star, a ring or a network configuration, as shown in Fig. 1-3. The star configuration is centralized and depends upon the
central node for communication among all the nodes. If the central server has problems, the rest of the nodes are
inaccessible. In both a ring and a network configuration, the stability of the network does not depend completely upon
the stability of any one machine. Particular network issues are beyond the scope of this book.




                                                          Fig. 1-3
                                                   Network configurations.
                                                                                                                                   Page 8

   Example 1.3
   Describe how a local medical group of 3 doctors with 2 separate office locations would keep their patient database if it were
   centralized. How could it be changed to make it a distributed system?

For a centralized system, the entire database would reside on one server at one central location. Client machines at each
location would access the central database for patient information. If the central system was down, no patient
information could be accessed. In a distributed system, the information for the patients usually seen in location 1 would
be kept on a server in that office. Patient information for location 2 patients would be kept on a server in that office. The
DBMS would access both locations to find information on any patient. If one of the servers was down, the other could
still be accessed.
   Example 1.4
   Specify whether each system would be single-tiered, two-tiered, or three-tiered.

a. The Happy Nights motel chain allows local managers to purchase a franchise. They can install and use the DBMS of
their choice for their reservation system. The only requirement is that they be able to connect and communicate with the
central office's system.

b. The Sticky Wicket Company has home offices in Detroit and branches in Chicago and Baltimore. The inventory and
parts database is distributed with each branch keeping its own inventory. One central DBMS located in Detroit allows
instant ordering of supplies through the central office.

Since both these companies have a number of locations, the systems are obviously not single-tier. The key to the
difference is whether there is one central DBMS or whether each local entity runs its own personal database system.
Since example (a) allows each franchise to use a different DBMS, middleware will be required to connect these systems
with the central office DBMS, resulting in a three-tier system. Because (b) uses one central DBMS with client software
at each location, this would be a two-tier system.

1.1.2—
Why We Need DBMS

Before continuing with this introduction to DBMS concepts, it is important to specify why we need database
management systems. Certainly all readers are aware of the information explosion in today's society. Personal
information is stored about each of us in a variety of forms. Anyone who works in any kind of business, either a large or
a small organization, knows how important it is to keep accurate records. The advantages of using a DBMS fall into
three main categories.

• Proper maintenance of the data

• Providing access to data

• Maintaining security of the data
                                                                                                                                           Page 9

1.1.2.1—
Proper Maintenance of the Data

Proper maintenance of the data will be a recurring theme throughout this book. The users must be able to trust that the
data is accurate and up to date. Inconsistency should be avoided and redundancy should be minimized. Redundancy
occurs when the same information is kept in a variety of places. Inconsistency comes when data are changed in one of
those locations and not changed in another. Most database systems provide for integrity constraints that must be
followed. All these concepts will be considered both explicitly and implicitly in the following chapters. The DBMS is
the key to enforcing these characteristics within the database. Each DBMS may manage the data in different ways, but
they all are careful to address such data issues.
   Example 1.5
   In a particular organization, customer names and addresses are kept in one database for the sales department and another database for
   the billing department. What inconsistency might result from this redundancy?

When a sales person is taking an order, the customer reports a change in address. The sales person might update the
record in the sales department. However, when the bill is prepared, it is sent to the old address because the address was
not changed in that database.

1.1.2.2—
Providing Access to Data

As specified in the previous section, the data are usually shared by a variety of users and programs. Both storage of and
access to data should be easy and quick. Concurrent support for all kinds of transactions, both interactive and
programmed queries, must be provided by the DBMS. The interactive queries should not have to wait for the application
programs to finish. Basically, the data should be accessible precisely when required. It would be unacceptable for the
users to wait even a day while the database is updated and checked. The job of the DBMS is to allow for speedy access
for all the necessary users while still using proper maintenance procedures.

Another issue surrounding access is the ability to find a particular piece of information from the large amount of data
stored. The DBMS must contain flexible methods to access each item in the database while allowing for speedy searches
throughout the database to find that item.

1.1.2.3—
Maintaining Security of the Data

The DBA is usually the person responsible for the security of the data. Unauthorized access must be prevented, and a
variety of levels of permission must be granted to users. Tools are provided for the DBA to enforce all security
procedures and meet all the conflicting requirements that arise when many people must access the same database. If two
separate users are accessing a
                                                                                                                                     Page 10

particular table at the same time, the DBMS must not allow them both to make conflicting changes. Such safeguards are
part of all systems. The DBMS also provides the tools for easy backup and recovery in case of system failures. Chapter
6 explores a variety of issues surrounding data security.
   Example 1.6
   Make a list of all the databases you can think of where your name and financial information are kept. How can you check the accuracy
   of this data?

Information about you is stored by your employer, your school, possibly your religious organization, the government
and any banks or credit companies. You can check the accuracy of many of these locations by asking for a credit report
or current statement. Many localities have laws requiring schools and government agencies to allow you to see and
correct personal information. You will never know if the information is wrong if you don't check it yourself.

It might also be helpful to specify situations when one might not want to use a DBMS. Sometimes these systems result
in unnecessary costs when traditional file processing would work just as well. If only one person maintains the data and
that person is not skilled in designing a database, the resulting product might also take more time and be less efficient.
When you are designing a database, as with any other system, remember that a simple, clear strategy is usually more
easily maintained than a complex, confusing design.

1.2—
Data Models

Children build model airplanes or model cars as a way of understanding how a real airplane or car is constructed.
Through understanding the models, children expect to see a car with four wheels and an airplane with two wings. Real
estate developers take prospective customers on tours of a model home to show them how the house is organized and
the relationship between the various rooms of the house. Homebuyers can get a good feel for the flow from kitchen to
dining room to living room. Models generally allow people to conceptualize an abstract idea more easily.

A data model is a way of explaining the logical layout of the data and the relationship of various parts to each other and
the whole. Different data models have been used throughout the years. In the early years often a flat file system, or a
simple text file with all the data listed in some order, seemed the easiest. The application program accessed the data
usually sequentially for batch processing. Not much interactive access was available. Other models used on big
mainframes were the hierarchical and the network model. The hierarchical database is constructed using a tree model,
with one root and several levels of subtrees. Each item has just one link leading to it. Data are accessed beginning with
the root and traveling down the tree until the desired details are located. The network model contains many links among
the various items of data. Interrelated indices allow access to data from a variety of directions.
                                                                                                                                   Page 11

In 1970, Dr. E. F. Codd described a new kind of model, the relational model for database systems.1 Relational database
management systems, where all data are kept in tables or relations, became the new standard. They are much more
flexible and easy to use, as almost any item of data can be accessed more quickly than in the other models. Retrieval
time is reduced so that interactive access becomes more feasible than in the other models. The use of related tables and
views also allows the use of distributed databases that would be difficult in the hierarchical or network models. The data
dictionary for the relational model contains the table names, along with column names and data types for each table. In
addition, the data dictionary maintains information about all users and privileges. Relational database management
systems (RDBMS) will be the model used throughout this book and are explained more fully in Chapter 2.
   Example 1.7
   Given this model of data for a flower company, would it be hierarchical, network or relational?




This would be a hierarchical model because, though each node can point to several other nodes, each level only has one
node pointing to it from above. To find out the amount of light needed, one would need to access first the flower name
and then the conditions. It would be difficult to access planting instructions for only those flowers that need to be
planted in full sunlight.
   Example 1.8
   How would the same data be organized in a RDBMS?

In a relational database the data would be kept in a table with one row for each item as shown below. Questions
regarding the values in any column are possible any time. For example, the names and planting instructions for each
flower that grows in full sunlight would be easily displayed.
   1 E. F Codd, The Relational Model of Data for Large Shared Data Banks. This model is further explained in E. F. Codd, The Relational

   Model for Database Management Version 2, Addison-Wesley, Reading, MA, 1990.
                                                                                                                      Page 12

  Flower         Planting                           Light           Soil
  Name         Instructions       Conditions       Needed        Conditions       Cost




1.3—
Database System Architecture

Understanding an abstract model of the data is important in order to describe the architecture of the database system.
Recall from earlier in this chapter that one of the major features of databases is that the actual data are separated from
the programs that use the data. That fact is important to keep in mind in this entire section which explains database
schemas and languages and then describes database system architecture.

Database management systems can also be classified in the way they use their data dictionary. As stated before, the data
dictionary contains logical descriptions of the data and its relationships, physical information about data storage, and
usually information on users and privileges. Some software vendors also design the data dictionary to keep usage
information such as frequencies of queries and other transaction information. Data dictionaries are helpful for all human
users, especially the database administrator, as well as invaluable to the application programs and report generators that
might access the database.

1.3.1—
Schemas and Languages

The data model describes the data and the relationships at the abstract level. The database schema is used to describe the
conceptual organization of the database system. This organization is defined during the design process, usually using the
data definition language (DDL) provided by the particular software vendor.

The organization of the data can be defined at two levels, logical and physical. The physical organization is related to
how the data are actually stored on the disk. The logical organization is the conceptual data model that is being
implemented. The DDL allows the user to define the organization of the data at the logical level. The particular DBMS
software then takes care of the physical organization of data by mapping from the logical to the physical. In this way,
users are protected from having to deal with the hardware level storage of data.

The DDL is used to create the tables and describe the fields within each table. Fig. 1-4 shows the schema diagram for
part of a retail store database. The schema shows three tables. Each table contains information about particular objects:
customers, orders and employees. The schema contains no information about how the bits of each item are physically
organized or exactly where the item is stored on a particular storage device.
                                                                                                                                            Page 13


 ORDER                            CUSTOMER                         EMPLOYEE
 INFORMATION                      INFORMATION                      INFORMATION

 ID                               ID                               ID

 CUSTOMER_ID                      NAME                             LAST_NAME

 DATE_ORDERED                     PHONE                            FIRST_NAME

 DATE_SHIPPED                     ADDRESS                          USERID

 SALES_REP_ID                     CITY                             START_DATE

 TOTAL                            STATE                            COMMENTS

 PAYMENT_TYPE                     COUNTRY                          MANAGER_ID

 ORDER_FILLED                     ZIP_CODE                         TITLE

                                  CREDIT_RATING                    DEPT_ID

                                  SALES_REP_ID                     SALARY

                                  REGION_ID                        COMMISSION_PCT


Fig. 1-4
Schema diagram for part of retail store database.

It is important to decide on the schema early in the database design process. Once the database has been created and has
begun to be populated with data, it is sometimes difficult to change the schema. The actual population of the database
with information is accomplished using the data manipulation language (DML). The most common language used by
many DBMS for this purpose is SQL, which is explained in Chapter 3. The DML allows the user to enter, to retrieve,
and to update the data. Some database management systems like Microsoft AccessTM allow a graphical interaction with
the database, but usually a DML is working in the background.
      Example 1.9
      Design a possible schema for a doctors' office. The doctors want immediate access to patient medical information. The records clerk
      needs to be sure all insurance companies are billed and then each patient is billed for the remainder.

One possible simple schema is shown below. The information could be kept in three tables: patient medical history,
patient personal information, and insurance company information. The information kept in medical history would be
determined by the particular specialty of the doctors. This table would be connected to the personal information through
the patient_ID. The insurance company information could be kept in another table connected to each patient by the
company_ID. The reader should be aware that this example is not the definition of a complete database. More
information would certainly be stored.
                                                                                                                                      Page 14


PATIENT MEDICAL                   PATIENT PERSONAL                            INSURANCE COMPANY
HISTORY                           INFORMATION                                 INFORMATION

PATIENT_ID                        PATIENT_ID                                  COMPANY_ID

AGE                               NAME                                        NAME

GENDER                            ADDRESS                                     ADDRESS

PAST_ILLNESS                      CITY                                        CITY

OTHER . . .                       STATE                                       STATE

                                  ZIP                                         ZIP

                                  TOTAL_AMT_DUE

                                  INSURANCE_CO_ID

                                  AMT_BILLED_INSURANCE


   Example 1.10
   Would the user use the DML or the DDL to do each task? (a) Change the customer's address, (b) define an inventory table, (c) enter the
   information for a new employee.

a. and c. Updating a customer address and entering new employee information would be accomplished through the use
of the DML. Both these activities entail manipulating data within currently established tables.

b. Defining a new table would entail the use of the DDL. Creating the table and establishing the attributes are part of the
data definition.

1.3.2—
Three-Level Architecture

The generally accepted method of explaining the architecture of a database system was formalized by a committee in
1975 and more fully explained in 1978.2
   2 Dionysios C. Tsichritzis and Anthonly Klug (eds.), The ANSI/X3/SPARC DBMS Framework: Report of the Study Group on Data

   Base Management Systems, Information Systems 3, 1978.
                                                                                                                     Page 15

It is known as ANSI/SPARC architecture, named for the Standards Planning and Requirements Committee of the
American National Standards Institute. The three levels are internal, conceptual and external.

• The internal level is the one that concerns the way the data are physically stored on the hardware. The internal level is
described using the actual bytes and machine-level terminology. Usually the DBMS software takes care of this level.

• The conceptual level, the logical definition of the database, is sometimes referred to as the community view. The data
model and the schema diagram are both explanations of the database on the conceptual level. The DBA and assistants
maintain the schema and usually are the ones who use the DDL to define the database.

• The external level is the one concerned with the users. Whether the users are application programmers or end users,
they still have a view, or mental model, of the database and what it contains.

Fig. 1-5 shows a graphical representation of the three levels. The conceptual level, or the community view, is where the
physical interior level is interpreted and changed into external views for the users. This figure demonstrates that the
DBMS acts as the ''go-between" to manage the system by handling interior storage and protecting the users from
hardware issues.




                                                         Fig. 1-5
                                                DBMS three-level architecture.
                                                                                                                                  Page 16

To understand the difference between the three levels, consider again the database schema in Fig. 1-4 that describes
customers, orders, and employees. That schema would be the conceptual or community view of the database. Particular
information is listed for each entity. The internal level would describe exactly which bytes contain the information and
how it can be accessed. If User 1 is the payroll clerk, the external view would contain only the employee information. If
Application Programmer 1 is designing billing programs, he or she would need all customer and order information as
well as information on the particular sales representative in the external view. Fig. 1-6 shows specific information
actually available at each level regarding a particular employee.




                                                                Fig. 1-6
                                                     Information at different levels.

   Example 1.11
   Examine the sample schema in Example 1.9. What would be the internal view, the community view, and the external view of that
   database?

The tables and the actual contents of each column would be the community view of the database. It might contain such
information as


PATIENT_ID          NAME            ADDRESS . . .

444-44-4444         Sue Jones       345 High St . . .
                                                                                                                     Page 17

The internal view would be the physical location of each element on the disk of the server as well as how many bytes of
storage each element needs. The external view would depend upon which user is accessing the database. The doctor
would expect to see the patient history. The billing clerk would expect the insurance and billing information.

1.3.3—
Data Independence

The concept of data independence is important to address at this time. It has already been stated that the data should be
kept separate from the DBMS. At the physical level, the data should be independent of the particular model or
architecture. The schema at any of the three levels should be modifiable without interfering with the next higher level.
For example, the physical storage of the database might need to be changed. However, this change should not affect
either the conceptual view of what is stored or the user's ability to understand and access the data. The data should also
be logically independent. Different users and application programs require different information via different logical
views. A well-designed system will maintain data independence both physically and logically.

1.3.4—
Putting the Modules Together

We have discussed all the components of the DBMS. This section focuses on the various software modules usually
found in the DBMS and where they can be found with regard to the computer system as a whole. It is probably easiest to
approach this environment from the standpoint of the different users explained previously. Fig. 1-7 shows the
relationship of users and the various software modules to the actual data.




                                                         Fig. 1-7
                                                   Modules of the DBMS.
                                                                                                                     Page 18

The actual data are stored on a disk. The DBA and assistants can issue both privileged commands and DDL statements,
which are managed first by the DDL compiler. End users issue interactive queries that are also compiled before
processing. The application programmers write the programs that are precompiled to create the DML statements needed,
as well as compiled in the host language.

The DBMS provides complete protection for the data through the use of the data dictionary, the run-time database
manager, and the stored data manager. Every access to the stored data comes through one or more of these components.
The DBMS consistently checks with the data dictionary to be sure all accesses are legal and then processes those
commands through the run-time processor. The run-time database manager handles each query, whether retrieval or
update. Only the DBA and staff have access to the stored data manager for creation and updating of the actual table
structure.

Solved Problems

1.1. Which type of user would usually perform the following functions for an inventory system in a large company?

   a. Create a monthly report of current inventory value.

   b. Update the number in stock for specific items received in shipment.

   c. Cancel the user account for an employee who just retired.

   d. Change the structure of the inventory database to include more information on each item.

   e. Reply to a phone request regarding the number of a particular item that are currently in stock.

a. Application programmer.

b. End user.

c. DBA or the person on the team designated with that job.

d. DBA or the person on the team designated with that job.

e. End user.

1.2. Consider an inventory database at a kitchen cabinet factory which contains parts information (part number,
description, color, size, number in stock, etc.) and vendor information (name, address, purchase order, etc.). Indicate for
each user, an accounts payable clerk, a line foreman, and a receiving clerk, which items that user should be able to
access and which items the user should be able to access and change.
                                                                                                                    Page 19


         User                                  Permission level

a. Accounts payable        Should be able to access and change all data.
clerk

b. Line foreman            Needs to access but not change parts information. Probably
                           does not need to have access to any vendor information
                           except maybe name.

c. Receiving clerk         Needs to be able to access and change parts information,
                           such as number in stock. Should be able to access but not
                           change vendor information.


1.3. Why have client/server systems become so prevalent in the business world?

First, the advance of hardware technology allows even small organizations to purchase powerful servers at a reasonable
cost. Both easy-to-use software and network resources are also within a reasonable price range. These systems provide a
high level of performance while allowing for trusted backup and security capabilities.

1.4. What are some differences in security issues between single-user and multi-user systems?

Single-user systems are often kept secure simply by locking the door to the room containing the computer. Multi-user
systems, whether stand-alone or client/server, must employ some kind of password protection allowing different users
different levels of access. While backup and recovery issues are similar, having concurrent users results in the necessity
for transaction protection, deadlock handling, and locking. These issues are discussed in Chapter 6.

1.5. A county-wide school board wants to create a distributed database for student information. Describe how it might
be designed. How would it be different if they wanted a centralized system?

For a distributed system, each local school would keep information on all its students on a server located within the
school. All the student databases would be accessible from the central office and from the other schools so that staff in
any location could find information on any student. If the school board wanted a centralized system they would need to
have one server, probably located at the central office, and then allow access to that database from each local school.

1.6. Specify whether each system would likely be single-tiered, two-tiered, or three-tiered.

   a. A woman artist designs and sells jewelry and accessories through mail order or at craft shows. She works out of
   her home.

   b. The school board from the previous example that has a centralized system with each local school accessing data
   from the server in the central office.

Because the woman in (a) works out of her home, probably she has one computer with the customer and financial
information in one DBMS. This would be a single-tier system.
                                                                                                                 Page 20

   The school board in (b) has one DBMS. Each school would be running the DBMS client software from the central
   server. This is a two-tier system.

1.7. A woman artist designs and sells jewelry and accessories through mail order or at craft shows. She works out of her
home. Currently she has a mailing list in a word processing file she uses for sending out catalogs. She also keeps both
supplier and customer names and addresses in word processing files and prepares bills using a spreadsheet and keeps her
income and expenses on another spreadsheet. What would be the advantages for her to design and use a DBMS for all
her records?

First, she would be helped with proper maintenance of her data. Currently she runs the risk of losing money because she
may not record every transaction with every customer on her ledger spreadsheet. It is possible that the address for the
same person in the catalog mailing list and the customer mailing list might be different. She may also not be able to
demonstrate that she has collected all the required sales tax for the government. If she used a DBMS, she would reduce
redundancy and be assured of the accuracy of her records. Second, she would have faster access to her data. She would
be able to prepare her tax return more easily with all queries answered quickly. Using the DBMS would improve the
completeness of her data. Third, she could maintain the security of her data. The DBMS can limit access through the use
of passwords and also provide for easy backup and recovery of her records.

1.8. Given this model for a university database, is it hierarchical, network or relational?




This is a network model because each node can point to several others and can be pointed to by several others.
                                                                                                                   Page 21

1.9. How would the data in the previous question be arranged if it were relational?


FACULTY
NAME              COURSE 1 COURSE 2 COURSE 3




COURSE            COURSE                     ROOM                   MAX
NAME              NUMBER            DAY TIME NUMBER                 ENROLLMENT




STUDENT
NAME              COURSE 1 COURSE 2 COURSE 3




It would be arranged in a variety of tables as shown above. The items would still be connected by course number.

1.10. Design the schema for a system that keeps information for a youth football league.

A sample schema is shown below. All tables would be connected by team_ID numbers. Using the relational model it
would be easy to access the names of players and coaches on any given team.


PLAYER INFORMATION               TEAM INFORMATION                     COACH INFORMATION

PLAYER_ID                        TEAM_ID                              COACH_ID

NAME                             TEAM_NAME                            NAME

ADDESS                           TEAM_SPONSOR                         ADDRESS

CITY                             PRACTICE_LOCATION                    CITY

STATE                            WINS                                 STATE

ZIP                              LOSSES                               ZIP

PHONE                                                                 PHONE

TEAM_ID                                                               TEAM_ID
1.11. Explain the difference between the DDL and the DML.

DDL, or data definition language, is used to handle the structure of the database, to create or remove the tables along
with the columns and data types of the columns within the
                                                                                                                    Page 22

    tables. DDL is usually used only by the DBA and assistants. DML, or data manipulation language, consists of
statements to access, retrieve, or update data within existing and predefined tables. DML is used to formulate interactive
queries or queries from within application programs.

1.12. Would the user use the DML or the DDL to do each task? (a) Update a student's grade point average, (b) define a
new course table, (c) add a column to the student table.

a. Updating a student gpa would be accomplished through the use of the DML. This activity is part of manipulating data
within currently defined tables.

b. and c. Defining a new table and adding a column to an existing table would entail the use of the DDL. Creating tables
and establishing the attributes are part of data definition.

1.13. Give examples of the internal, community, and external view of the team database described in 1.10.

The internal level would be the physical location of the information on the storage medium and the number of bytes
used by each item.

The community view would be a conceptual view of the tables and the information contained in them. For example,


COACH_ID         NAME           TEAM_ID

21               Phil Johnson 13


The external view would depend on the user. The record keepers would understand they could calculate standings by
examining the win/loss records of each team. The coaches would know they could access the phone numbers of all the
players on their team.

1.14. Give examples of the internal, community, and external view of the university database described in 1.9.

The internal level would be the physical location of the information on the storage medium and the number of bytes
used by each item.

The community view would be a conceptual view of the tables and the information contained in them. For example,

COURSE              COURSE_
NAME                NUMBER         DAY       TIME
Intro to Database CS474            Tu/Th     1:00


The external view would depend on the user. The faculty members would understand that they could access lists of
students in the courses. The registrar's office would know that it should post the list of closed classes.

1.15. Explain the difference between logical and physical data independence.

Physical data independence is related to the actual storage of the data on the storage medium. The way the data are
stored in bits and bytes should not affect users' access to that data. Logical data independence usually relates to the
different logical views of the data available to different users. If one user sees customer name and address without all
the billing information, that does not mean that the billing information is not being stored. Another user should be able
to see and even change this information without corrupting the database as a whole.
                                                                                                                        Page 23

1.16. What software modules does the DBMS use to protect the accuracy of the database?

The DBMS uses the data dictionary, the run-time manager and the stored data manager. The data dictionary is accessed
to verify that requests are legal for that particular database. For example, if the user wants all the parts that are red, the
attribute color must actually exist within the table. The run-time manager then processes the actual queries, retrieving
the requested information or updating the table. The stored data manager, accessed by the DBA, may use functions of
the operating system or may handle tasks on its own. This module also keeps the data dictionary up to date following
DDL statements.

Supplementary Problems

1.17. Which type of user would perform the following functions for a billing system in a large company?

   a. Respond to call in from customer regarding the current balance due on their account.

   b. Write a program to generate monthly bills.

   c. Develop schema for new kind of billing system.

1.18. Consider a database at a university which contains information on students (name, ID number, course schedule,
grades, etc.), classes (number, name, class list), and faculty (name, ID number, course schedule, salary etc.). Indicate for
each user which items that user should be able to access and which items the user should be able to access and change.

   a. Faculty member

   b. Clerk in registrar's office

   c. Student

   d. Payroll clerk

1.19. Consider the university discussed in the previous problem. Would their database likely be centralized or
distributed? What unknown factors might make a difference in the design?

1.20. Specify whether each system would be single-tiered, two-tiered, or three-tiered. (a) A mechanic's union allows
each local group to keep its own records on its own type of DBMS. The central union headquarters wants to allow
access from any local to any local. (b) A medical practice with 3 doctors and 2 locations keeps centralized records
accessed by terminals in each location.

1.21. A small private school wants to keep track of students, courses, and faculty. It also has a number of parents and
private contributors. Describe the advantages for this school of using a DBMS for all its records.
                                                                                                                   Page 24

1.22. Given this model for a parts database, is it hierarchical, network or relational?




1.23. Describe how it would look if it were relational. Why would the relational model be better for this application?

1.24. Design the schema for keeping information on flowers for a mail-order company, including information about
each kind of flower, the method of delivery (seeds, bulb, pot, etc.), and the temperature zones in which each flower will
grow.

1.25. Would the user use the DML or the DDL to do each task? (a) Define a new table for keeping soil and light needs,
(b) add a flower to the inventory, (c) add a new zone to the zone table.

1.26. Give examples of the internal, community, and external view of the flower database described in 1.21.

1.27. Why is it important to maintain data independence in a database?

Answers to Supplementary Problems

1.17. a. End user. b. Application programmer. c. DBA or designee in that department.

1.18. a. Faculty member should not be able to change anything. Should have access to class information, but not student
information. Should have access only to his or her own faculty data.
                                                                                                                    Page 25

b. Clerk in registrar's office should be able to access and change all class information. Should be able to access student
information and change only the data surrounding grades. Should be able to access and change faculty class information
but not faculty salary data.

c. Student should only be able to access class information with regard to day and time and whether it is open or closed.
Should not have access to any class lists or any faculty information. Also, should not have permission to see any student
data except his or her own.

d. Payroll clerk probably does not need any access to student data. Should be able to access and change faculty data. In
some cases, may need to access but not change class information.

1.19. At first glance, one would think the university database would be centralized with all the course, student, and
faculty information kept in one place. However, several factors might change this decision. First, if there are several
branch campuses, each campus might want to keep its own student data. Second, for security purposes different offices
in different locations might want to keep data. For instance, the human resources office would keep all the faculty
information, the registrar's office would keep the course and student grade information, and other student information
might be kept by student affairs. With this type of distribution, the DBMS would need to be able to access information
at any location with proper authorization.

1.20. a. Three-tier because of the required middleware to connect different kinds of DBMS.

   b. Two-tier.

1.21. First, the school would be assured of proper maintenance of the data. All tables with personal information would
be accurate and up to date. The DBMS would enforce consistency of information on all students, parents, faculty and
contributors. Second, the DBMS would provide quick access to data. Items such as student transcripts, course lists, and
parent telephone numbers would be instantly accessible. Financial records would be available for scrutiny by
contributors. Third, security of the data is maintained. With a DBMS the school officials would be sure that all
information remained confidential and secure.

1.22. It is hierarchical because access to each item is only through one path beginning at the top. One could not access
the cost without knowing the part name.

1.23. It would be in tables as shown below. The tables would be connected by the supplier ID number. The relational
model would be better because any item can be accessed quickly in a variety of ways. For example, the cost of all items
from a particular supplier could be listed.
                                                                                                                    Page 26

PART                                                  SUPPLIER
                    COLOR            COST
NAME                                                  ID




SUPPLIER SUPPLIER                 SUPPLIER
ID       ADDRESS                  PHONE




1.24. The schema might look like the table below. Each flower is connected to the type of zone in which it grows and
the way it is delivered by the respective IDs.


DELIVERY INFORMATION FLOWER INFORMATION                                 ZONE INFORMATION

DELIVERY_ID                         ID                                  ZONE_ID

CATEGORY                            COMMON_NAME                         LOWEST_TEMP

SIZE                                LATIN_NAME                          HIGHEST_TEMP

                                    HIGHEST_TEMP_ZONE_ID

                                    LOWEST_TEMP_ZONE_ID

                                    DELIVERY_ID

                                    LIGHT_NEEDS

                                    SOIL_TYPE


1.25. a. Defining a new table would entail the use of the DDL. Creating the table and establishing the attributes are part
of the data definition.

    b. and c. Entering new zone and flower information would be accomplished through the use of the DML. Both these
    activities entail manipulating data within currently established tables.

1.26. The internal level would be the physical location of the information on the storage medium and the number of
bytes used by each item.

The community view would be a conceptual view of the tables and the information contained in them. For example,

DELIVERY_ID          CATEGORY            SIZE
1                    pot                 1.5 inches
The external view would depend on the user. The shipping clerk would understand that the Thorndale Ivy is delivery
type 1, which should be shipped in a pot. The helpdesk personnel would respond to a question that Thorndale Ivy plants
can be planted in full sun, partial shade, or shade.
                                                                                                                   Page 27

1.27. Data independence is important for three reasons. First, at the physical level, the DBA should be able to change the
internal structure of a database without altering the community or the external views. Second, at the logical level,
application code or user queries should not need to be altered because of changes in the data representation of storage.
Third, the management of the data is easier when the DBMS software is separate from the actual data. Different users
can access the data concurrently and feel confident that the DBMS is maintaining integrity and accuracy of the data.
                                                                                                                     Page 28




Chapter 2—
Relational Database Concepts

2.1—
Relational Database Management Systems

As indicated in Chapter 1, Database Management Systems are based on data models that allow for a logical or high-
level description of the data. A Database Management System based on the relational data model is called a Relational
Database Management System (RDBMS). In this type of database, the information that comprises the Universe of
Discourse is represented as a set of relations. In this sense, a RDBMS can then be defined as a collection of relations.
Although the notion of a relation can be defined in mathematical terms (see Section 2.2), for all practical purposes, we
will represent relations as two-dimensional tables that satisfy certain conditions that will be explained later on. For this
reason, in this book we will use the terms tables and relations interchangeably. The reader should keep in mind that in a
RDBMS the data is logically perceived as tables. That is, tables are logical data structures that we assume hold the data
that the database intends to represent. Tables are not physical structures. Each table has a unique name. Tables consist of
a given number of columns or attributes. Every column of a table must have a name and no two columns of the same
table may have identical names. The total number of columns or attributes that comprises a table is known as the degree
of the table. In this book, we use the terms column and attribute interchangeably. The data in the table appears as a set of
rows or n-tuples where n is the number of attributes of the table. Whenever the number of attributes of the table is
understood, we can omit the prefix n and refer to the rows of the tables as just rows or tuples. Calling a row an n-tuple
(for a fixed n) has the advantage of indicating that the row has n entries (see Example 2.2). However, this terminology is
not popular. Most books refer to rows as tuples and vice versa. In this book, unless otherwise stated we will adhere to
the most common terminology. All rows of a table have the same format and represent some object
                                                                                                                                  Page 29

or relationship in the real world. The total number of rows present in a table at any one time is known as the cardinality
of the table. In legacy systems, the terms field and record are used as synonyms of the terms attribute and row
respectively. Fig. 2-1 shows the general format of the tabular representation of a relation.




                                                                  Fig. 2-1
                                         General format of a relation when represented as a table.

We will call the content of a table at any particular point in time a snapshot or instance of the table. In general, when
tables are defined the number of columns remains fixed for the duration of the table. However, the number of rows
present in the table is bound to vary since the content of the table reflects the dynamics of the universe that the database
intends to capture. New rows may be inserted into the table to represent new facts of the UOD; some rows may be
updated to reflect ongoing changes and other rows may be deleted from the table to indicate that some facts are no
longer valid or relevant anymore. Notice that tables are required to have at least one column but are not required to have
rows. A table with no rows is called an empty table. The process of inserting tuples for the very first time into a table is
called populating the table.

For each column of a table there is a set of possible values called its domain. The domain contains all permissible values
that can appear under that column. That is, the domain of any column can be viewed as a pool of values from which we
can draw values for the column. We will denote the domain of any given column or attribute by Dom(column name).
Observe that any value that appears under a column must belong to its domain. In a table, it is possible that two or more
columns may have the same domain. Example 2.1 shows the tabular representation of a relation called EMPLOYEE.
   Example 2.1
   Given the EMPLOYEE relation shown below, identify its degree and cardinality. For each attribute identify a possible domain.


EMPLOYEE

      Id         Last_Name         First_Name            Department              Salary

  555294562         Martin           Nicholas             Accounting              55000

  397182093       Benakritis            Ben                Marketing              33500

  907803123         Adams              Larry          Human Resources             40000
                                                                                                                                       Page 30

In this table we can identify five attributes or columns: Id, Last_Name, First_Name, Department and Salary. Therefore,
the degree of the relation is five.

The table has only three rows or tuples. Therefore, the cardinality of the relation is three.

Possible domains for each of these attributes are as follows:

The domain of the attribute Id, denoted by Dom(Id), is a set of numerical characters. In the United States, for example, it
is customary to use the Social Security Number (SSN) of the employee as his or her employee id. Assuming that this is
the case in this example, Dom(Id) is the set of nine-digit positive numbers.

The domain of the attribute Last_Name, Dom(Last_Name), is the set of legal last names. In this book we will assume
that names consist of a sequence of English alphabetical characters and some other symbols such as a single quote or a
hyphen. The number of characters that may comprise a legal last name depends on conventions established by the DBA
or the creator of the table. The maximum number of characters typically allowed for names ranges from 20 up to 256
characters.

The domain of the attribute First_Name, Dom(First_Name), is the set of legal first names that a person can have. We
will assume that first names follow the same convention used for last names.

For a given company, the domain of the attribute Department, Dom(Department), is the set of names that have been
selected as valid department names. In this case, the table shows only three of these values.

The domain of the attribute Salary, Dom(Salary), is a subset of the set of nonnegative real numbers. Notice that a
negative salary does not make sense.

In this book, we will assume that every entry of a table or relation has at most a single value.1 That is, at the intersection
of every column and every row there is at most a single value. For any given relation r, for any attribute A of r, and an
arbitrary tuple t of r, we will use the notation t(A) to denote the value of the entry of tuple t under the column A. That is,
the value at the intersection of column A and row t.
   Example 2.2
   For the CUSTOMER_ORDER relation shown below, what are the individual values of t(A) if t is an arbitrary tuple and A is an
   arbitrary attribute of the relation?


CUSTOMER_ORDER                    Id     Date_Ordered          Date_Shipped         Payment_Type

                                  1        08/11/1999            08/12/1999                cash

                                  2        08/12/1999            08/12/1999          purchase order

                                  10       08/14/1999            08/15/1999                credit


   1 This guarantees that the relation can be represented in a RDBMS or equivalently that it is in First Normal Form. See Chapter 5,

   Section 5.2.
                                                                                                                                           Page 31

If we call t the first tuple shown in the table, we can say that t(Id) = 1, t(Date_Ordered) = 08/11/1999, t(Date_Shipped) =
08/12/1999 and t(Payment_ Type) = cash.

If t is the second tuple, we will have that t(Id) = 2, t(Date_Ordered) = 08/12/1999, t(Date_Shipped) = 08/12/1999 and t
(Payment_Type) = purchase order.

If t is the third tuple, we will have that t(Id) = 10, t(Date_Ordered) = 08/14/1999, t(Date_Shipped) = 08/15/1999 and t
(Payment_Type) = credit.

Notice that the tuples of this relation are 4-tuples. That is, each tuple has 4 entries; one entry for each of the four
columns of the table.

From the definitions considered earlier and the notion of a table, whenever a relation is represented by means of a table,
we will assume that the following conditions hold:

• The table has a unique name.2

• Each column of the table has a unique name. That is, no two columns of the same table may have identical names.

• The order of the columns within the table is irrelevant.

• All rows of the table have the same format and the same number of entries.

• The values under each column belong to the same domain (strings of characters, integer values, real values, etc).

• Every entry (the intersection of a row and a column) of every tuple of the relation must be a single value. That is, no
list or collection of values is allowed.

• The order of the rows is irrelevant since they are identified by their content and not by their position within the table.

• No two rows or tuples are identical to each other in all their entries.3

2.2—
Mathematical Definition of a Relation

In this section we will formalize the definitions of the previous section. Given a finite set of attributes A1, A2, A3, . . ., An
we will call a relational scheme R the set formed by all these attributes. That is, R = {A1, A2, A3, . . ., An}. Associated
with each of these attributes there is a nonempty set Di, (1 ≤ i ≤ n) called the domain of the attribute Ai and denoted by
Dom(Ai). Let D be a new set defined as the union of all the attribute domains. In other words, D = D1 ∪ D2 . . . ∪ Dn. We
define a relation r on relational scheme R as a finite set of mappings {t1, t2, . . ., tk} from R to D. The individual
mappings ti are called tuples or n-tuples. For each
    2 This constraint refers to tables within the same tablespace or same database in case of personal databases.

    3 Mathematically, a relation is a set of mappings and therefore there are no duplicate elements. In addition, each record is required to have

    an attribute whose value uniquely identifies each row.
                                                                                                                                   Page 32

of these tuples, the value under a particular column Ai, denoted by t(Ai), must be an element of the domain of Ai. That
is, if t is any tuple of the relation r then t(Ai) ∈ Dom(Ai) where the symbol ''∈" is read "belongs to". If the schema R of a
relation r is understood, we will refer to the relation by its name, otherwise we will denote it as r(R). Although other
authors prefer to define a relation as a subset of the Cartesian Product of the domains of the attributes of the relation, we
have decided to define relations as sets of mappings to avoid any explicit ordering of the attribute names. This
corresponds with the tabular representation of the relation since the order of the columns is irrelevant.

2.3—
Candidate Key and Primary Key of Relation

The notion of a key is a fundamental concept in the relational model because it provides the basic mechanism for
retrieving tuples within any table of the database. Formally, given a relation r and its attributes A1, A2, A3, . . . , An, we
will call any subset K = {A1, A2, . . . , Ak} with (1 ≤ k < n) of these attributes a candidate key if K satisfies the following
conditions simultaneously:

(1) For any two distinct tuples t1 and t2 of the relation r, there exists an attribute Aj of K such that t1(Aj) ≠ t2(Aj). This
implies that no two different tuples of r will have identical entries in all attributes of K. In other words, at least one of
the following inequalities will be true t1(A1) ≠ t2(A1), t1(A2) ≠ t2(A2), . . ., t1(Ak) t2(Ak) for any two tuples that we consider
in the relation. This condition is known as the uniqueness property of the key.4

(2) No proper subset K' of K satisfies the uniqueness property. That is, no element of K can be discarded without
destroying the uniqueness property. This condition, called the minimality property of the key, guarantees that the number
of attributes that comprises the key is minimum.

Since a relation r may have more than one candidate key, one of these candidate keys should be designated as the
primary key (PK) of the relation. The values of the primary key can then be used as the identification and addressing
mechanism of the relation. That is, we will differentiate between the different rows of the relation on the basis of their
PK values. We will also uniquely retrieve tuples from a relation based on the values of their PK values. Once a primary
key has been selected, the remaining candidate keys, if they exist, are sometimes called alternate keys. A RDBMS
allows only one primary key per table. A primary key may be composed of one single attribute (single primary key) or
may be composed of more than one attribute (composite primary key). Attributes that are part of any key (primary or
alternate) are called prime
    4 Some RDBMS allow users to create tables with columns defined with a UNIQUE constraint. This type of constraint forbids duplicate

    values under any attribute so defined.
                                                                                                                                     Page 33

attributes. In this book, we will underline the attributes that are part of the primary key. In Example 2.1, attribute Id is
underlined because it is the PK of the EMPLOYEE relation. Since Id is the PK of this table no two employees will have
identical Id values. Likewise, in Example 2.2, we also underlined the attribute Id of the CUSTOMER_ORDER relation.
Since Id is the PK of the CUSTOMER_ORDER relation, no two orders will have the same Id value. Notice that even
though these two primary keys (Id of EMPLOYEE and Id of CUSTOMER_ORDER) have identical names they are to
be considered different because their underlying meanings are different.

Since the primary key is used to identify uniquely the tuples or rows of a relation, none of its attributes may be NULL.
This fact imposes an additional condition or constraint on the keys known as the integrity constraint. In a relation, a
NULL value is used to represent missing information, unknown, or inapplicable data. The reader should be aware that a
NULL value is not a zero value nor does it represent a particular value within the computer.5
   Example 2.3
   Consider the DEPT table and the rows shown below. Explain whether or not these rows can be inserted into the DEPT table. Notice
   that DEPARTMENT is the key of the table.


DEPT

 DEPARTMENT              NAME          LOCATION            BUDGET

         20                Sales           Miami            1700000

         10             Marketing        New York           2000000



 DEPARTMENT               NAME          LOCATION           BUDGET
         10              Research         New York          1500000
                        Accounting          Atlanta         1200000
         15             Computing           Miami           1500000




   5 In most RDBMS comparisons between nulls are by definition neither true nor false but unknown.
                                                                                                                           Page 34

Given a key K of a relation r, we will call a superkey of r any set of attributes K′ of the relation that contains the key.
That is, if K′ is a superkey then K′ ⊂ K. The symbol "⊂" reads "subset of". That is, any set of attributes of the relation r
that contains the key is called a superkey. It should be clear that a superkey satisfies the uniqueness property of the key
but not the minimality property of the key (see Solved Problem 2.8).

Keys, as we mentioned before, are the basic mechanism for identifying and retrieving the different tuples of a relation.
Therefore, when considering the selection of keys we need to choose attributes that satisfy the uniqueness and
minimality condition for all permissible data. What this implies is that we cannot select keys for a table based on a list of
possible values that may appear in the table. We also need to consider the underlying meaning of the attributes that we
are selecting (see Solved Problem 2.7).

Given a relation r, a subset X = {A1,A2, . . ., Ak} of attributes of r, and any tuple t of r, we will call the X-value of t,
denoted by t(A1, A2, . . ., Ak) the k-tuple {t(A1), t(A2), . . ., t(Ak)}. That is, the X-value of a tuple t is a k-tuple whose
elements are the individual entries at the intersection of the tuple t and the attributes A1, A2, . . ., Ak respectively. If the
order of the attributes is understood, the X-value of t can be denoted by t(X).

Primary keys are defined using DDL statements and are automatically enforced by the RDBMS. They are generally
defined at the time the tables are created (see Chapter 3, Section 3.2.1).

2.4—
Foreign Keys

Because columns that have the same underlying domain can be used to relate tables of a database, the concept of a
foreign key allows the DBMS to maintain consistency among the rows of two relations or between the rows of the same
relation. This concept can be formally defined as follows: Given two relations r1 and r2 of the same database,6 a set of
attributes FK of relation r1 is said to be a foreign key of r1 (with respect to r2) if the following two conditions are satisfied
simultaneously:

• The attributes of FK have the same underlying domain as a set of attributes of relation r2 that have been defined as the
PK of r2.7 The FK is said to reference the PK attribute(s) of the relation r2.

• The FK-values in any tuple of relation r1 are either NULL or must appear as the PK-values of a tuple of relation r2.

From a practical point of view, the foreign key concept ensures that the tuples of relation r1 that refer to tuples of relation
r2 must refer to tuples of r2 that already exist. This condition imposed on foreign keys is called the referential integrity
constraint. Some authors call the table that contains the foreign key a child table; the table that contains the referenced
attribute or attributes is called
    6 According to this definition of foreign key, relations r , and r
                                                              1          2 could be the same relation.

    7 Some DBMS vendors extend this concept to include attributes of r
                                                                              2 that have been defined as UNIQUE.
                                                                                                                               Page 35

the parent table. Using this terminology, we can say that the FK value in each row of a child table is either null or it
must match the PK value of a tuple of the parent table.
   Example 2.4
   Consider the tables indicated below. Assume that the attribute EMP_DEPT is a FK of the EMPLOYEE table that references the
   attribute ID of DEPARTMENT. Indicate if the rows shown below can be inserted into the EMPLOYEE table.


    ID           NAME                LOCATION                 DEPARTMENT

    10         Accounting              New York

    40             Sales                 Miami



EMP ID       EMP_NAME              EMP_MGR              TITLE           EMP_DEPT             EMPLOYEE

   1234           Green                                President              40

   4567          Gilmore               1234           Senior VP               40

   1045            Rose                4567             Director              10

   9876           Smith                1045           Accountant              10




Notice that in the previous example, we use the keyword8 NULL to indicate explicitly the absence of a department
whereas in Example 2.3 the entry for DEPARTMENT was left blank. The reader should be aware that some systems
allow both ways to indicate a NULL value whereas some other systems may require that the NULL keyword be used
explicitly.

Foreign keys are generally defined after all tables have been created and populated. This avoids problems such as the
one illustrated in Solved Problem 2.9 or problems of circularity. The latter problem occurs when one table references
values in another table, which in turn, may reference the first table. Integrity constraints are defined using DDL
statements and are automatically enforced by the RDBMS.
   8 A keyword is a word that has a specific meaning to the system and cannot be used outside a specific context.
                                                                                                                             Page 36

2.5—
Relational Operators

We call relational operators a set of operators that allow us to manipulate the tables of the database. The entire set of
operators that allows us to construct new relations from a set of given relations is called a relational algebra. Relational
operators are said to satisfy the closure property since they operate on one or more relations to produce new relations.
When a relational operator is used to manipulate a relation, we say that the operator is "applied" to the relation. To
define a relational operator we use relational calculus. That is, the set of predicate or truth-value statements that,
combined with basic logical operations, determine the shape and membership conditions of elements in the resulting
relation. To define the relational operators, we will use the logical symbols: ∃ (there exists), ∀ (for all), ∧ (or), ∧ (and),
~ (not), and some set theory symbols that include ∈ (belongs to), ⊂ (subset of), ∅ (empty set), / or (such that), and
some of their negated symbols such as ∉ (does not belong to), and ⊄ (not a subset of). Since relational operators are
defined by means of equalities, the expression on the left-hand side of the equal sign is the relational algebra expression
for the operator. The expression on the right-hand side is the relational calculus definition of the operator. In this
section, we will discuss only the Selection, the Projection and the Equijoin relational operators. Some other operations,
in particular, Boolean operations on relations will be considered later in the chapter. Each operation on a relation
answers a question posed to the database. In database lingo, questions to the database are called queries. We will use
this term to refer to any relational operation performed on relations with the purpose of retrieving information from the
database.

2.5.1—
The Selection Operator9

This operator, when applied to a relation r, produces another relation whose rows are a subset of the rows of r that have
a particular value on a specified attribute. The resulting relation and r have the same attributes. More formally, we can
define this operator as follows. Let r be a relation on scheme R, A a specified attribute of r, and a particular element a of
the Dom(A). The Selection of r on attribute A for the particular element a is the set of tuples t of the relation r such that t
(A) = a. That is, all rows of the new relation—the Selection relation—have a under the column A. The Selection of r on
A is denoted σA=a(r). Notice that the predicate A = a of σA=a(r) is meant to be understood as t(A) = a. Mathematically, the
Selection operator can be defined as follows:

σA=a(r) = {t ∈ r/t(A) = a} where the symbol "/" is read "such that".

The scheme of the new relation, σA=a(r) is the same scheme of the relation r.
   9 This operator is also known as the RESTRICT or SELECT operator. We do not use the word SELECT to avoid any confusion with

   the SQL command that shares the same name.
                                                                                                                                    Page 37

That is, as was mentioned before, σA=a(r) and r have the same attributes. The following example illustrates how this
Selection operator works. Notice that the Selection operator is a unary operator. That is, it operates on one relation at a
time. From a practical point of view this operator is applied to a relation whenever we are interested in retrieving all
possible information about a tuple or set of tuples that have a given value under a particular column.
    Example 2.5
    Given the EMPLOYEE relation of the previous example, find all the information contained in the table for all employees who work for
    department 10.

Since we need to retrieve all the information about the employees who work for department 10, it is necessary to
determine σEMP_DEPT=10(EMPLOYEE). Notice that in this example the condition that needs to be satisfied by the tuples of
the EMPLOYEE relation to appear as tuples of the new SELECTION relation is t(EMP_DEPT) = 10. The resulting
table is shown below.




2.5.2—
The Projection Operator

The Projection operator is also a unary operator. Whereas the Selection operator chooses a subset of the rows of the
relation, the Projection operator chooses a subset of the columns. This operator can be formally defined as follows. The
Projection of relation r onto a set X of its attributes, denoted by πx(r), is a new relation that we can obtain by first
eliminating the columns of r not indicated in X and then removing any duplicate tuple. The attributes of X are the
columns of the Projection relation. Mathematically, the Projection relation can be defined as follows: Let r be a relation
with relational scheme R and let X = {A1, A2, . . ., Ak} be a subset of its attributes, then πx(r) = {t(X)/t ∈ r}. Notice that
entries of the rows of the Projection relation are formed by taking from each of the tuples t of r the entries corresponding
to the attributes defined in X. That is, the entries for a tuple j of πx(r) are formed by selecting the entries tj(A1), tj
(A2), . . .,tj(Ak) from the tuple j of the relation r. Since relations have been defined as sets it is necessary to eliminate all
duplicate tuples from πx(r). From a practical point of view, this operator is applied whenever we are interested in the
different values currently present under a particular column or
                                                                                                                                  Page 38

the different combinations of values currently present in two or more columns. The following example illustrates the use
of the Projection operator.
   Example 2.6
   Using the DEPARTMENT table shown below, what are the locations of the different departments? From the answer to the previous
   question, can we tell the total number of locations that are currently present in the DEPARTMENT table?


                        ID            NAME            LOCATION
 DEPARTMENT
                         10      Accounting             New York

                        30          Computing           New York

                        50          Marketing          Los Angeles

                        60        Manufacturing           Miami

                        90             Sales              Miami


Since we need to determine the different values that are currently present in the LOCATION column, we need to find
the Projection of the DEPARTMENT table on the attribute LOCATION. That is, we need to find πLOCATION
(DEPARTMENT). In this case, r = DEPARTMENT and X = {LOCATION}. The tuples of the Projection are obtained
by retrieving the value t(LOCATION) for each of the tuples of the relation DEPARTMENT. Since two of the tuples
have New York as their locations, only one of these values will appear in the projection. Similar argument can be made
for the tuples that have Miami as their locations. The resulting relation is shown next.


                              LOCATION
πLOCATION
(DEPARTMENT)
                                    New York

                                Los Angeles

                                   Miami


Observe that LOCATION is the sole attribute of this table.

In general, the projection of this relation on the attribute LOCATION cannot give us the total number of locations
present in the DEPARTMENT table since duplicate values are eliminated. Notice that the Projection relation only has
three locations whereas the DEPARTMENT relation has a total of five locations.
                                                                                                                               Page 39

    Example 2.7
    Using the table of the previous example, what are the different departments and their locations?

In this case, X = {NAME, LOCATION) and r = DEPARTMENT. The resulting relation is shown below.


                                            NAME                     LOCATION
πNAME, LOCATION
(DEPARTMENT)
                                              Accounting              New York

                                          Computing                   New York

                                          Marketing                  Los Angeles

                                       Manufacturing                     Miami

                                              Sales                      Miami


The resulting relation does not contain duplicate values since the different combinations of name and location are
unique. Notice that the tuples (Manufacturing, Miami) and (Sales, Miami) are different. Likewise (Accounting, New
York) and (Computing, New York) are considered to be two different tuples.

Before considering the next operator, it is necessary to define the concatenation operator. This operator is a tuple
operator instead of a table operator. Given two tuples s = (s1, s2, . . ., sn,) and r = (r1, r2, . . ., rm), the concatenation of r and
s is the (m + n)-tuple defined as follows:

    = (s1, s2, . . . sn, r1, r2, . . . rm) where the symbol is read the "concatenation" of tuples r and s. Notice that the number
of entries in the tuples r and s are not necessarily the same. For example, if r = (a, b, c) and s = (1,2) then =(a, b, c, 1,
2).

2.5.3—
The Equijoin Operator

The Equijoin10 operator is a binary operator for combining two relations not necessarily different. In general, this
operator combines two relations on all their common attributes. That is, the join consists of all the tuples resulting from
concatenating the tuples of the first relation with the tuples of the second relation that have identical values for a
common set of attributes X. By common attributes we mean attributes that, although they may not have the same name,
must have the same domain and underlying meaning. Mathematically, this definition can be expressed as follows: Let r
be a relation with a set of attributes R and let s be another relation with a set of attributes S. In addition, let us
    10 This type of join is also called a natural join.
                                                                                                                              Page 40

assume that R and S have some common attributes and let X be that set of common attributes. That is, R ∩ S = X. The
join of r and s, denoted by r Join s, is a new relation whose attributes are the elements of R ∪ S. In addition, for every
tuple t of the r Join s relation, the following three conditions must be satisfied simultaneously: (1) t(R)= tr for some tuple
tr of the relation r (2) t(S) = ts for some tuple ts of the relation and (3) ts (X) = tr(X).

An equivalent definition of the Join operator is as follows:



This definition and the previous one are equivalent. The next example illustrates how this operator works.
   Example 2.8
   Join the tables shown below on their common attributes DEPARTMENT and NAME. Write a possible user's query that can be satisfied
   by the result of this operation. Can these two tables be joined on the attribute ID?


                         ID           NAME          LOCATION
 DEPARTMENT
                         100       Accounting           Miami

                        200         Marketing         New York

                        300            Sales            Miami



                        ID              NAME             DEPT              TITLE
   EMPLOYEE
                          100          Smith              Sales              Clerk

                       200               Jones         Marketing             Clerk

                       300              Martin         Accounting            Clerk

                       400                Bell         Accounting      Sr. Accountant


In this case, the common attributes are the DEPT and NAME attributes. The join of these two tables, denoted by
DEPARTMENT Join EMPLOYEE, is shown below. Since both tables have an attribute called ID, to avoid confusing
the attribute ID of the DEPARTMENT table with the attribute ID of the EMPLOYEE table, it is necessary to qualify
each attribute by preceding it with its corresponding table name before joining the tables. For a similar reason, the
attribute NAME of the EMPLOYEE and DEPARTMENT tables has to be qualified. Observe that this is consistent with
the requirement that in any table the column names must be different. Notice that the common column was not
duplicated. The results of this join operation could be used to satisfy a user's request to "display all the information
about the employees along with their department's id, name and location".
                                                                                                                     Page 41


                                    DEPARTMENT Join EMPLOYEE

 DEPT       DEPARTMENT                               EMPLOYEE        EMPLOYEE
  ID           NAME                 LOCATION            ID             NAME               TITLE

   100          Accounting              Miami            300              Martin            Clerk

   100          Accounting              Miami            400               Bell       Sr. Accountant

   200          Marketing             New York           200               Jones            Clerk

   300             Sales                Miami            100              Smith             Clerk


In this Join operation notice that the common attribute is DEPARTMENT NAME. That is, X = {DEPARTMENT}. In
addition, observe that this join satisfies the three conditions mentioned above. In fact, if r is the DEPARTMENT relation
and s is the EMPLOYEE relation we will have that their respective schemes are:

                                               R = {ID, NAME, LOCATION} and
                                                  S = {ID, NAME, DEPT, TITLE}

Observe also that for every tuple t of the Join relation we must have

    t(R) = t(ID, NAME, LOCATION) = tr for some tuple of r.
    t(S) = t(ID, NAME, TITLE) = ts for some tuple of s.
    tr(X) = ts(X)

If we include the attribute names for sake of the explanation and consider the first tuple of the Join relation we have that


 DEPT       DEPARTMENT                             EMPLOYEE       EMPLOYEE
  ID           NAME                LOCATION           ID            NAME           TITLE

   100         Accounting              Miami           300              Martin      Clerk


If we call t this first tuple notice that

t(DEPARTMENT ID, DEPARTMENT NAME, LOCATION) =
(100, Accounting, Miami) = tr
t(EMPLOYEE ID, EMPLOYEE NAME, DEPT, TITLE) =
(300, Martin, Accounting, Clerk) = ts
tr(DEPARTMENT) = ts(DEPARTMENT) = Accounting

The reader can verify that the three conditions indicated above for the Join are satisfied by the remaining tuples of the
relation. We leave this as an exercise for the reader.
                                                                                                                       Page 42

The tables DEPARTMENT and EMPLOYEE cannot be joined on the attribute ID because the attribute ID of the
EMPLOYEE table and the attribute ID of the DEPARTMENT table have different meanings. One is an employee's id
while the other is a department's id. This illustrates the fact that two tables cannot be joined just because they have
attributes with the same name. To join two tables on their common attributes, these attributes need to have same domain
and the same underlying meaning.

In the database literature, there are several types of joins. The equijoin or natural join previously defined requires that
the condition to be satisfied by the tuples of the intervening relations be equality. A composition is a natural join with
the common join attribute or attributes deleted. A theta join is a join where the condition that needs to be satisfied by the
tuples may be defined by means of one the following logical operators ≤, ≥, ≠, <, or >. In general, the latter operation is
not directly supported by the RDBMS manufacturers but it can be implemented as a combination of Selection and
Projection operations (see Solved Problem 2.17).

2.6—
Set Operations on Relations

Since relations have been defined as mathematical sets, the basic binary operations that are traditionally considered as
''set operations" can also be applied to relations. These operations are: Union, Intersection, Difference and the Cartesian
product. Of all these operations the union is perhaps the most powerful and interesting. The first three of these
operations require that the attributes of the participating relations be union compatible. We will say that two sets of
attributes A and B are union compatible if they are of the same degree and the corresponding domains are of the same
data type. Notice that this definition does not require that the names of the attributes be the same. In practical terms the
purpose of all these operations is to allow the result of the execution of multiple operations to be displayed as a single
statement.

As Chapter 3 will show, all these operations are implemented using variations of the SQL statement SELECT. Since the
result of each of these operations is a single table and the attributes of the participating tables are not required to be the
same, what will be the names of the columns of the "final" table? In this book, we will follow the convention that the
result table will have the column names of the "first" table. This will be clarified shortly.
                                                                                                                           Page 43

2.6.1—
Union

Given two relations r(R) and s(S) with union compatible schemes, the UNION of these two relations, denoted by r ∪ s,
is the set of all tuples that are currently present in r or are currently present in s or are present in both relations. In
mathematical terms, the UNION can be defined as follows:

r ∪ s = {t/t ∈ r ∨ t ∈ s} where the symbol "∪" is read "union" and the symbol ∨ is read "or".

Like in any other relation, there are no duplicate tuples in the UNION relation. The scheme of the UNION, that is, its set
of attributes is the scheme of the relation r since this is the relation that is named first in the UNION operation. Observe
that if we had written s ∪ r the attributes of s would have appeared as column headings of the resulting relation.
   Example 2.9
   Given the relations shown below, find the union of these two relations. What query will this operation answer?


C_PROGRAMMER

  Employee_Id                Last_Name                 First_Name               Project                  Department

   101123456                    Venable                     Mark             E-commerce               Sales Department

   103705430                    Cordani                     John                Firewall          Information Technology

   101936822                    Serrano                    Areant            E-commerce               Sales Department



JAVA_PROGRAMMER

  Employee_Id                Last_Name                 First_Name               Project                  Department

   101799332                    Barnes                     James           Web Application        Information Technology

   101936822                    Serrano                    Areant            E-commerce                Sales Department



C_PROGRAMMER ∪ JAVA_PROGRAMMER

  Employee_Id                Last_Name                 First_Name               Project                  Department

   101123456                    Venable                    Mark              E-commerce                Sales Department

   103705430                    Cordani                     John                Firewall          Information Technology

   101799332                    Barnes                     James           Web Application        Information Technology

   101936822                    Serrano                    Areant            E-commerce                Sales Department
                                                                                                                                    Page 44

Notice that there are no duplicate tuples in the resulting relation. Observe also that it is not possible by mere
examination of the resulting relation to tell which rows were selected from which table. This operation may answer a
query that requests information about all employees that are C programmers or Java programmers or both.

The UNION is a commutative operation. That is, for any two relations r and s, we have that r ∪ s = s ∪ r. The observant
reader should realize that this is a direct consequence of the commutativity of the Boolean OR operator.

2.6.2—
Intersection

Given two relations r(R) and s(S) with union compatible schemes, the intersection of these two relations, denoted by r ∩
s, is the set of tuples currently present in both relations. That is, the set of tuples common to both relations. In
mathematical terms, the INTERSECTION can be defined as follows:

r ∩ s = {t/t ∈ r ∧ t ∈ s} where the symbol "∩" is read "intersection" and the symbol "∧" is read "and". Like in any
relation, there are no duplicate tuples in the INTERSECTION relation.
   Example 2.10
   Given the tables of the previous example, find the intersection of the given relations. What query will this operation answer?

The tuples of the intersection of these two relations are the tuples that are currently present in both relations. In this case
there is only one tuple common to both relations. This operation will answer a query that requests information about all
employees that are both C and Java programmers.


C_PROGRAMMER ∩ JAVA_PROGRAMMER

 Employee_Id         Last_Name          First_Name             Project           Department

   101936822            Serrano             Areant          E-commerce        Sales Department


The INTERSECTION is a commutative operation. That is, r ∩ s = s ∩ r for any two relations r and s. This is direct
consequence of the commutativity of the Boolean AND operator.
                                                                                                                      Page 45

2.6.3—
Difference

Given two relations r(R) and s(S) with union compatible schemes, the DIFFERENCE of relations R and S (in that
order), denoted by r – s, is the set of tuples that are currently present in r and are not currently present in s. The symbol
can be read as a "difference" or as a "minus". In mathematical terms, the difference of these two relations can be defined
as follows:

r – s = {t/t ∈ r ∧ t ∉ s} where the symbol "∉" is read "does not belong to" and the symbol "∧", as we indicated before, is
read "and".
   Example 2.11
   Find the difference of the relations C_PROGRAMMER – JAVA_PROGRAMMER and JAVA_PROGRAMMER –
   C_PROGRAMMER. What queries do these operations answer? Use the relations defined in Example 2.10.

The relation C_PROGRAMMER – JAVA_PROGRAMMER contains the tuples that are currently present in the relation
C_PROGRAMMER and are not currently present in the relation JAVA_PROGRAMMER. The Difference relation is
shown below.


C_PROGRAMMER – JAVA_PROGRAMMER

 Employee_Id        Last_Name        First_Name           Project             Department

   101123456          Venable            Mark          E-commerce           Sales Department

   103705430          Cordani             John           Firewall       Information Technology


This query may answer a request to find all C programmers that are not Java programmers.

The relation JAVA_PROGRAMMER – C_PROGRAMMER contains the tuples that are currently present in the relation
JAVA_PROGRAMMER and are not currently present in the relation C_PROGRAMMER. The difference relation is
shown below.


JAVA_PROGRAMMER – C_PROGRAMMER

 Employee_Id        Last_Name         First_Name             Project                Department

   101799332           Barnes            James          Web Application       Information Technology
                                                                                                                               Page 46

This query may answer a request to find all Java programmers that are not C programmers.

Notice that the order in which the relations are named in the difference operation is important. In general, and as this
example illustrates, given two relations r and s, we have that r – s ≠ s – r. This result shows that the DIFFERENCE of
relations is not a commutative operation.

2.6.4—
Cartesian Product11

Given two nonempty relations r(R) and s(S), the CARTESIAN PRODUCT of these two relations, denoted by r ⊗ s, is
defined as the relation whose tuples are formed by concatenating every tuple of relation r with every tuple of relation s.
In mathematical terms, the Cartesian product is defined as follows:

r⊗s={        /p ∈ r and q ∈ s} where, as indicated before, the symbol                reads "the concatenation of tuples p and q".

The degree of the CARTESIAN PRODUCT relation is the sum of the degrees of the original relations with duplicate
names qualified if necessary. The cardinality of the CARTESIAN PRODUCT is the product of the cardinality of the
original relations. The reader should be careful when applying the Cartesian product because the result relation may
make no sense. This operation is sometimes useful if followed by a SELECTION operation that matches values of
attributes coming from the component relations (see Solved Problem 2.16). Of all the set operations on relations the
Cartesian product is the most time consuming. Therefore, we caution the reader in the use of this operation.
   Example 2.12
   Given the relations shown below, find the Cartesian product of these two relations.


BUYER          ID_NUMBER               ITEM

                      100                 A

                      234                 B

                      543                 C


   11 This operation is also called the cross product.
                                                                                                                    Page 47


PRODUCT         CODE        NAME         PRICE

                   A          Bike        250

                   B          Spikes      90

                   C        Goggles       15

                   D          Gloves      35


The Cartesian product of these two relations is shown below. As the resulting relation shows, this Cartesian product has
5 attributes = 2 (from BUYER) + 3 (from PRODUCT) and 12 tuples = 3 (from BUYER) * 4 (from PRODUCT). The
Cartesian product is shown below.


 ID_NUMBER             ITEM     CODE      NAME        PRICE

       100              A            A      Bike        250

       100              A            B     Spikes       90

       100              A            C    Goggles       15

       100              A            D     Gloves       35

       234              B            A      Bike        250

       234              B            B     Spikes       90

       234              B            C    Goggles       15

       234              B            D     Gloves       35

       543              C            A      Bike        250

       543              C            B     Spikes       90

       543              C            C    Goggles       15

       543              C            D     Gloves       35


Notice that this relation, besides containing tuples that can provide us with some useful information, also contains tuples
that are meaningless. For instance, from the first tuple we can see that customer number 100 bought a bike for $250.
However, what is the meaning of the second tuple?
                                                                                                                            Page 48

2.7—
Insertion, Deletion and Update Operations on Relations

As indicated before in Section 2.1, the contents of relations are, in general, time-varying. Some of the most common
operations applied to relations that allow them to change over time are: Insertion, Deletion and Update operations.
Although these operations can be formally defined in mathematical terms, their definitions are too complicated to be of
any practical use. Therefore, to define them we will use a less formal approach that allows us to visualize the effect of
the operations.

2.7.1—
Inserting a Tuple into a Table

Given a relation r with relation scheme R = {A1, A2, A3, . . ., An}. The format of the INSERT operation is as follows:

    INSERT INTO relation-name (A1 = v1, A2 = v2, A3 = v3, . . ., An = vn)

where the values v1, v2, . . ., vn belong to the domain of the attributes A1, A2, A3, . . ., An respectively. If the order of the
attributes is understood, we will write the INSERT operation as

    INSERT INTO relation-name (v1, v2, v3, . . ., vn)

The effect of this operation, as its name indicates, is to add a new tuple t to the relation where t(Ai) = vi.

Notice that the effect of this operation is not guaranteed to succeed; the INSERT operation may fail for one of the
following reasons:

• A given value may not belong to the domain of its corresponding column. That is, vi ∉ Dom(Ai).

• The tuple that is being inserted does not have the appropriate number of entries as determined by the scheme of the
relation.

• The key value of the tuple that is being inserted may duplicate the value of the PK of a tuple already present in the
relation.

• One or more values of the tuple being inserted may duplicate the values under one or more columns that have been
defined as UNIQUE.

• The name of the relation does not exist in the database, or the attributes, as mentioned in the INSERT INTO operation,
do not exist in the relation.
                                                                                                                                  Page 49

In all cases where a violation occurs the system will issue an appropriate error message. The nature of the message
depends on the RDBMS being used.

The following example illustrates the use of the INSERT operation.
   Example 2.13
   Given the PATIENT-ACCOUNT relation shown below, state whether or not the indicated tuples can be inserted into the relation.
   Assume that character data needs to be enclosed in double quotes within the INSERT operator.

PATIENT-ACCOUNT (ACCOUNT, AMOUNT-DUE, DEPARTMENT, DOCTOR-ID, TREATMENT-CODE)

where the corresponding domains are:

Dom(ACCOUNT) = character string, length 9 characters.
DOM(AMOUNT-DUE) = numeric, maximum 9 digits with two optional decimals.
Dom(DEPARTMENT) = {G, T, L, X-rays, I}
Dom(DOCTOR-ID) = character, 4 digits maximum, range from 1000 through 2000.
Dom(TREATMENT-CODE) = {G100, G110, G120, T130, L140, L150, X160, X170, I180, I190, I200}


PATIENT-ACCOUNT

 ACCOUNT          AMOUNT-DUE              DEPARTMENT               DOCTOR-ID           TREATMENT-CODE

  980543990              2456                      G                    1200                     X160

  804804308             245.45                     T                    1123                     G100

  173402644             589.25                     L                    1111                      I180


a. INSERT INTO patient-account (ACCOUNT = "890345255", AMOUNT-DUE = 256, DEPARTMENT = "G",
DOCTOR-ID = "1500", TREATMENT-CODE = "T130")

This tuple can be inserted with no problems since it does not violate any of the restrictions indicated above.

b. INSERT INTO patient-account (ACCOUNT = "980543990", AMOUNT-DUE = 256, DEPARTMENT = "G",
DOCTOR-ID = "1500", TREATMENT-CODE = "T130")

This tuple cannot be inserted because it duplicates the primary key of one of the existing tuples.

c. INSERT INTO patient-account (ACCOUNT = "890345255", AMOUNT-DUE = 256, DEPARTMENT = "G",
DOCTOR-ID = "1500")

This tuple cannot be inserted because it does not have the appropriate number of entries.
                                                                                                                                   Page 50

d. INSERT INTO patient-account (ACCOUNT = "564890155", AMOUNT-DUE = 256, DEPARTMENT = "G",
DOCTOR-ID = "1500", TREATMENT-CODE = "T130")

This tuple cannot be inserted because one of the columns is not recognized by the system. Column AMOUNT_DUE has
been misspelled.

e. INSERT INTO patient-account (ACCOUNT = "721307804", AMOUNT-DUE = 256, DEPARTMENT = "G",
DOCTOR-ID = "3500", TREATMENT-CODE = "T130")

This tuple cannot be inserted because the value for the DOCTOR-ID attribute is not within the acceptable range.

2.7.2—
Deleting a Tuple from a Table

The DELETE operation removes a particular tuple from a relation. To remove a specific tuple it is necessary to identify
it by the attributes of its primary key. Given a relation r with relation scheme R = {A1, A2, A3, . . ., An}. The format of
the DELETE operation is as follows:

   DELETE FROM relation-name WHERE search-condition

The search-condition generally specifies the values of the key attributes of the particular tuple that we want to delete.
However, whenever more than one tuple is to be deleted by the same operation, the search condition may be specified
by the value of any other attribute. In this book, we will indicate the search-condition as (A1 = v1, A2 = v2, A3 = v3, . . .,
Ak = vk) where the attributes A1, A2, A3, . . ., Ak comprise the key of the relation. If the attributes are understood, we will
list only the vi values. The DELETE operation fails if one of the following conditions occurs:

• The indicated tuple is not present in the relation.

• The tuple to be deleted is referenced by a foreign key of another relation. In this case, we say that the operation
violates the integrity constraint.

• The relation does not exist or the tuple does not conform to the scheme of the relation.

Deleting the last tuple of a relation is permissible since the empty relation is allowed. That is, a relation with no tuples is
legal. In all cases where a violation occurs the system will issue an appropriate error message.
   Example 2.14
   Using the PATIENT-ACCOUNT relation of the previous example, indicate whether or not it is possible to delete the tuples indicated
   below.
                                                                                                                            Page 51

a. DELETE FROM patient-account WHERE account = "980543990"

This operation successfully removes the tuple whose primary key is 980543990.

b. DELETE FROM patient-account WHERE account = 980543990

This operation fails because the value of the account attribute is not found. Notice that we have made the assumption
that character data needs to be enclosed in double quotes. In this case, the RDBMS is looking for a numerical value
instead of a character value. Some systems automatically translate character data into numeric data and vice versa.
However, the reader should not rely on automatic translations. In this book, we will assume that no automatic translation
occurs.

c. DELETE FROM patient-account WHERE accounts = "980543990"

This operation fails because the RDBMS does not recognize the attribute accounts. Notice that the key attribute is
singular and not plural.

2.7.3—
Updating a Tuple of a Table

To update a tuple is to change the values of one or more of its attributes. The tuple that we want to update needs to be
identified by its key or some other search attribute. The format of this operator is as follows:

   UPDATE table-name SET column_name = new-value WHERE search-condition

The reader should be aware that the UPDATE operator is just a convenience offered by the vendors of the RDBMS
since we could delete the tuple that we want to change and then add a new tuple with the correct values. The reasons
that this operator may fail are the same reasons that the INSERT and DELETE operations may fail.
   Example 2.15
   Update the PATIENT-ACCOUNT table to show that patient with account 804804308 has made a payment of $45.45 and now owes
   $200.00. The corresponding UPDATE operation is as follows:

   UPDATE patient-account SET amount-due = 200 WHERE account = "804804308"
                                                                                                                    Page 52

This operation successfully sets the value of the attribute amount-due to its new value of 200.

2.8—
Attribute Domains and Their Implementations

As indicated before, the domain of an attribute defines the characteristics of the values that a table column may contain.
In any RDBMS the domain of any given attribute is implemented using a data type. National and international
organizations such as the ANSI (American National Standards Institute) and the ISO (International Standard
Organization) have defined a set of basic data types. These data types, although supported by most of the RDBMS
vendors, have implementation details that vary from vendor to vendor. Table 2-1 shows some of the basic SQL data
types and their implementations for selected RDBMS vendors.
                                                                                                                     Page 53

Columns of data type character(n) or character varying(n), where n is the maximum number of characters that can be
stored in the column, are generally used for data containing text or numbers that are not involved in calculations.
Examples of this data type are names, addresses, employee identification numbers, social security numbers, and
telephone numbers. The primary difference between the character(n) and character varying(n) data types is how they
store strings (sequence of characters) shorter than the maximum column length. When a string with fewer than n
characters is stored in a character(n) column, the RDBMS pads blank spaces to the end of the string to create a string
that has exactly n characters. When a string with fewer than n characters is stored in a character varying(n) column, the
RDBMS stores the string ''as is" and does not pad it with blank spaces. For this reason, if we know that the contents of a
character column may vary in length, it is better to define the column as character varying since the RDBMS can store
this information more efficiently. Text data, whether it is stored as fixed or varying type, is always case sensitive. For
example, the string 'abc' is different than the string 'aBc'. Any embedded blank counts as a character. For instance, 'abc'
and ' abc ' are different strings since the latter contains at least one embedded blank.

Columns of type float(n), where n is the total numbers of digits, are generally used to represent large numerical
quantities or scientific computations. For example, in Oracle we can use float data types to represent numbers in the
range between 1.0 × 10–10 and 1.0 × 10+10.

Columns of type decimal(p,s) are used to represent fixed-point numbers. The precision, p, is the total number of digits
both to the right and to the left of the decimal point. The scale, s, is the number of decimal digits to the right of the
decimal point. When the number we are representing is a whole number, the scale is set equal to zero. An example of
this data type is the number 123.23 which can be specified as decimal(5,2). Whole numbers such as 125 can be specified
as decimal(3,0).

Although not shown on Table 2-1, another data type that is commonly used by all RDBMS is DATE. This data type
allows users to store date and time information. Date is generally displayed in the default format DD-MM-YY where
DD stands for Day, MM stands for month and YY stands for year.
                                                                                                                       Page 54

Solved Problems

2.1. What is the degree and cardinality of the SUPPLIER relation shown below?


SUPPLIER

  Supplier-Id        Part       Order-Number         Customer-Number         Quantity-Last-Order         Total

     S1002          P1898E      18904-01-12-00            119078090                   1000              12800

     S8948          P3473       12443-10-11-99            232301248                     25               1000

     S1000         P2354-A      98080-05-08-00            300234732                    780              19500

     S2993         P1898A       80808-78-08-31            459042354                     2                 500


Since the table has 5 columns its degree is 5. There are 4 tuples in this table. Therefore, the cardinality is 4.

2.2. Assuming that you have to create the SUPPLIER relation of the previous exercise in a RDBMS, what data types
will you choose for the different attributes of the relation? Justify your answer.

The data type of the Supplier-Id attribute should be character. Notice that there are digits and letters as part of the values
of this attribute. If all supplier-Id values are 5 characters long then character(5) is an appropriate data type. If the
supplier-Id varies in length, then character varying(6) may be appropriate. Notice that in this case, we are allowing for
these values to grow up to 6 characters. Similar arguments can be made for the attributes Part, Order-Number, and
Customer-Number. All these attributes are, by their nature, character data. Notice that the customer number seems to be
"numeric". However, this attribute should not be defined as such because customer numbers are not involved in any
type of computation. In their behavior they are very similar to the Social Security numbers.

Attributes Quantity-Last-Order and Total should be numeric since they may be involved in some particular
computation. For example, the company may produce a monthly or annual report listing the total dollar amount and the
total number of items bought by every customer. Quantity-Last-Order should be an integer, whereas Total should allow
for fractional parts.

2.3. So far we have considered the terms table and relation as synonyms. Assume that the table shown below is a partial
list of the academic degrees of the instructors of a particular university; can this table be considered a relation?
                                                                                                                       Page 55


INSTRUCTORS

     Last-Name           First-Name        Academic-Degree          Department

        Prieto               Ray            B.S, M.S, Ph.D            Physics

       Renton                Joan                 B.A                 Biology

        Perez                Jose           B.A, M.S, Ph.D            PreMed

         Bell               Mardre          B.A, M.S, Ph.D            PreMed


No, this table cannot be considered a relation because the entries under the column Academic-Degree are not single
values. Notice that with the exception of instructor Renton, each entry contains more than one value. This table is just
that, a table; it cannot be considered a relation.

2.4. Consider a relation with a single-attribute key and n (n > 0) tuples. If we do a Projection on the key attribute of this
relation, what can we say about the cardinality of the Projection relation?

Since there are n different tuples in the relation, there must be n different key values, one per tuple. Therefore, the
cardinality of the projection on the key attribute should be equal to n since there are no duplicate values and each value
must appear only once.

2.5. Assume that you have two relations, an EMPLOYEE relation and a PROJECT relation. The EMPLOYEE table has
an attribute Id. The value of this attribute may range from 1 to 100. The PROJECT relation also has an attribute Id that
also ranges from 1 to 100. Since these attributes take values in the same range, can we say that these attributes are the
same? Can these two attributes be considered common attributes?

No, we cannot say that these attributes are the same since they have different meaning. Attributes have roles that allow
us to differentiate them from a logical point of view. The roles of these attributes are different. One of them represents
employee Ids, that is, values that uniquely identify each employee. The other attribute represents project Ids. For similar
reasons, these two attributes cannot be considered common.

2.6. Given the relations of the previous example, if we were to join these two relations would the RDBMS prevent us
from doing the join?

The answer is no. The RDBMS will not prevent us from doing the operation because it is not aware of the semantic
meaning of these attributes and, as long as the operation is valid from a syntactical point of view, the RDBMS will
execute it. However, the resulting relations are, in general, meaningless.

2.7. The STAFF relation of a medical facility is shown below. Does it make sense to choose the attribute Last-Name as
the primary key of this relation?
                                                                                                                           Page 56


  Last-Name        First-Name               Title             Salary          Department

     Kyger            Wendy             X-Ray Tech            28000            Radiology

    Dillard          Suzanne            X-Ray Tech            28000            Radiology

   Shafiroff           Jean              Secretary            16000          General Office

    Carson        Anna-Christie      Medical Assistant        23000        General Medicine

    Sutton           Melissa            X-Ray Tech            28000            Radiology

    Renton            Hayley            Receptionist          14000          General Office


No, the attribute Last-Name cannot be used as the primary key of this relation even though all the current last names are
different. Last names do not satisfy the requirement that keys have to remain keys regardless of the number of tuples
that are inserted into the table. That is, the fact that there are no duplicates in the Last-Name column in the current table
instance is not a guarantee that there will not be duplicates in the future. In this case, using the attribute Last-Name as
the primary key imposes an additional and unnecessary constraint of having to consider, as a pre-employment condition,
the last name of a prospective employee. In fact, if Last-Name is chosen as the key there cannot be two people with
identical last names working at the same facility.

2.8. Since relations are defined as sets we know that there are no duplicate tuples. Why then can we not use the entire set
of attributes of a relation as the primary key of the relation?

It is true that in any relation r the primary key is a subset of the entire set of attributes of the relation. That is, the entire
set of attributes of the relation is a superkey of the relation. In addition, it is also true that no two tuples of the relation
have identical values in all their attributes. However, we need to keep in mind that keys are used as the primary
mechanism for identifying and retrieving tuples from relations. To do so, we would like to use a minimal set of values.
For instance, in an EMPLOYEE relation, knowing an employee-id number we would like to know his or her salary. If
we need to know all the information about an employee to retrieve his or her corresponding tuple then we do not need to
retrieve the tuple. We already know all that we need about the employee! Notice that from the entire set of attributes of
the relation we can discard those attributes that are not part of the key and still identify uniquely every tuple of the
relation. This shows that a superkey does not satisfy the minimality condition.

2.9. Assume that we are going to populate the EMPLOYEE relation whose scheme is shown below. The arrow indicates
that the Manager-Id attribute is a foreign key that refers to the Id attribute of the relation. The meaning of this foreign
key is that in order to be a manager you must also be an employee. If the tuples (a), (b) and (c) shown below are the first
set of tuples that are going to be inserted into the table, can they be inserted without any problem?
                                                                                                                         Page 57




   a. ("190034890", "Gomez","Lila", ''Human Resources", 25000, "355899234")

   b. ("123434643", "Tuset", "Agustin", "Marketing", 35000, NULL)

   c. (NULL, "Tuset", "Maria Pia", "Sales", 40000, NULL)

If tuple (a) is the first tuple to be inserted into the table, the RDBMS will generate a foreign-key violation error since the
Manager-Id 355899234 is not currently present as one of the values of the Id column. Since Manager-Id is a FK that
references Id, then any non-null value that is inserted into the Manager-Id column must already appear as a value in the
Id column.

Tuple (b) can be inserted into the table with no problem because NULL is acceptable as one of the values of the
Manager-Id column. Null may be used to indicate that the employee has not been assigned to any manager.

Tuple (c) cannot be inserted because it violates the integrity constraint of the primary key. That is, the value of the
primary key cannot be NULL.

2.10. Prove that the Selection operator is commutative with respect to itself. That is, if r is a relation and A and B are
attributes of the relation r with a ∈ Dom(A) and b ∈ dom(B) then the following identity holds



Notice that what this identity is saying is that if we need to select all the tuples of the relation r that have an "a" under
column "A" and then from this resulting relation select all the tuples that have "b" under column "B", it does not make
any difference if we select first from the original relation r all the tuples that have "b" under "B" and then from this
resulting set all the tuples that have "a" under column "A".

To prove that two sets A and B are equal we need to show that A ⊂ B and B ⊂ A. Since the Selection relation is also a
set, to prove the given statement we need to show that

                                 and

To prove part (a), that is, σA=a(σB=b(r)) ⊂ σB=b(σA=a(r)) we need to take any arbitrary tuple t of σA=a(σB=b(r)) and show that
this tuple is also a tuple of σB=b(σA=a(r)). We can prove this as follows:

Let t ∈ σA=a(σB=b(r)), according to the definition of the Selection operator, this implies that t is an element of the relation
σB=b(r) and that t(A) = a. That is t ∈ σB=b(r) and t(A) = a. Applying the definition of Selection again to (σB=b(r)), we have
that t ∈ r ∧ t(A) = a ∧ t(B) = b. Grouping conveniently, using the fact that the ∧ operator is commutative and applying
the definition of Selection we have that t ∈ σA=a(r) ∧ t(B) = b. Applying the definition of Selection again, we have that t
∈ σB=b(σA=a(r)). Since we have taken an arbitrary tuple t of σA=a(σB=b(r)) and shown that it is also a tuple of σB=b(σA=a(r))
then, according to the definition of inclusion of sets, σA=a(σB=b(r)) ⊂ σB=b(σA=a(r)). This proves part (a). A similar
argument can be made to prove part (b). Since parts (a) and (b) are both true then σA=a(σB=b(r)) = σB=b(σA=a(r)).

2.11. Given the EMPLOYEE relation shown below, find the last name, department and salary of all employees.
                                                                                                                     Page 58


EMPLOYEES

       SSN              Last-Name           First-Name          Department         Sex    Salary

   122904934           Gomez                Luis               General Office      M     40000

   789009233           Nadeau               Frank              Engineering         M     57000

   802341175           Knupp                Carroll            Security            M     23000

   123425434           Nichols              Lois               Engineering         F     30000

   209354532           Nichols              James              Maintenance         M     30000

   894393344           Nadeau               Peggy              General Office      F     40000

   823123453           Smith                Donald             Maintenance         M     35000

   634890303           Smith                Faith              Maintenance         F     34000


To obtain the required information, it is necessary to find the projection of the relation on the attributes Last-Name,
Department and Salary. That is, πlast-name, department, salary(EMPLOYEE). This projection is shown below.


πlast-name, department, salary(EMPLOYEE).

                       Last-Name               Department                 Salary

                          Gomez               General Office              40000

                          Nadeau               Engineering                57000

                          Knupp                     Security              23000

                          Nichols              Engineering                30000

                          Nichols              Maintenance                30000

                          Nadeau              General Office              40000

                           Smith               Maintenance                35000

                           Smith               Maintenance                34000



Notice that tuples such as (Nichols, Engineering, 30000) and (Nichols, Maintenance, 30000) are different since they
differ in their Department values. Likewise, the tuples (Smith, Maintenance, 35000) and (Smith, Maintenance, 34000)
are different since they differ in their Salary values.

2.12. In addition to the EMPLOYEE table of the previous problem, assume that the DEPARTMENT table shown below
is also available. Write a query that allows us to find the budget of the department where the employee Luis Gomez
works.
                                                                                                                   Page 59


DEPARTMENT

                    Id               Name               Building                Budget

               GOF           General Office          North Tower        2000000

               ENG           Engineering             North Tower        3000000

               SEC           Security                South Tower        1000000

               MAI           Maintenance             East Tower         6000000


To answer this question, first we need to retrieve all the information about the given employee. To do this, we calculate
σlast-name= "Gomez"(EMPLOYEE). This resulting relation is:


σlast-name = "Gomez"(EMPLOYEE)

                         Last-Name            Department           Salary

                          Gomez               General Office       40000


Using this new relation, we then do a projection on the department attribute to find the department in which the given
employee works. That is,

πdepartment(σlast-name = "Gomez"(EMPLOYEE))

The resulting relation is:


πdepartment(σlast-name = "Gomez"(EMPLOYEE))

                                               Department

                                              General Office


Next, we can use the value returned by this relation to do a Selection on the DEPARTMENT relation. That is, in this
relation we try to retrieve all the information about the tuple where department = "General Office":

SELECTION Name = π(department(σ last-name = "Gomez" (EMPLOYEE))) (DEPARTMENT)

The result of this relation is:

SELECTION Name = π department(σ last-name = "Gomez" (EMPLOYEE)) (DEPARTMENT)



       Name               Building             Budget
 General Office        North Tower          2000000


Finally, we can do a projection on the attribute budget to obtain the desired result.

πdepartment(SELECTION Name = (πdepartment(σ last-name = "Gomez" (EMPLOYEE))))(DEPARTMENT))


    Budget

    2000000
                                                                                                                    Page 60

2.13. Write a query that will display the first and last name of each employee, his or her department and the building in
which his or her department is located.

To answer this question we first form an Equijoin between the relations EMPLOYEE and DEPARTMENT on the
common attributes department (of EMPLOYEE) and name (of DEPARTMENT). Using the result of the Equijoin we
can then do a projection on the resulting relation on the required attributes.

The join operation between these two relations is as follows:


EMPLOYEE Join DEPARTMENT

     SSN         Last-Name First-Name             Sex    Salary       Department          Building   Budget

  122904934        Gomez             Luis         M       40000       General Office   North Tower   2000000

  789009233        Nadeau           Frank         M       57000        Engineering     North Tower   3000000

  802341175         Knupp           Carroll       M       23000          Security      South Tower   1000000

  123425434        Nichols           Lois          F      30000        Engineering     North Tower   3000000

  209354532        Nichols          James         M       30000       Maintenance      East Tower    6000000

  894393344        Nadeau           Peggy          F      40000       General Office   North Tower   2000000

  823123453         Smith          Donald         M       35000       Maintenance      East Tower    6000000

  634890303         Smith            Faith         F      34000       Maintenance      East Tower    6000000


To obtain the information that we are looking for we do a Projection on the Join relation. This projection is as follows:



πfirst-name,last-name,department,building(EMPLOYEE Join DEPARTMENT)

                   First-Name        Last-Name          Department             Building

                       Luis             Gomez           General Office       North Tower

                      Frank             Nadeau           Engineering         North Tower

                      Carroll           Knupp              Security          South Tower

                       Lois             Nichols          Engineering         North Tower

                      James             Nichols         Maintenance          East Tower

                      Peggy             Nadeau          General Office       North Tower
                    Donald            Smith         Maintenance        East Tower

                     Faith            Smith         Maintenance        East Tower


2.14. The Join operation allows us to display specific rows from two related tables. In all our examples, we have
displayed rows from one table that have a "match" in another table. However, we may want rows from one of the tables
to appear in the Join table even when these rows do not have a match in the other table. The Outer Join is an additional
relational operation that allows us to accomplish this. The result of an Outer Join operation will contain the same rows
as an Equijoin plus a row
                                                                                                                       Page 61

corresponding to each row from the original relations that do not match on the join condition. There are two main
variations of the Outer Join: the Left Outer Join and the Right Outer Join. We will denote these two operations as lr
Ljoin rr and lr Rjoin rr where lr and rr stand for relation names that we will call the left relation and the right relation
respectively. Given two relations r(R) and s(S) with common attributes X, we will define r Ljoin s as a relation that
contains all the tuples from the EquiJoin of the relations plus a row corresponding to each row of the left relation, the r
relation, that does not contain a matching row in the right relation, the s relation. Likewise, we will define r Rjoin s as a
relation that contains all the tuples from the EquiJoin of the relations plus a row corresponding to each row of the right
relation, the s relation, that does not contain a matching row in the left relation, the r relation. In case of the Ljoin the
"no match" rows from the left table have null values appended to the right. In the Rjoin, the "no match" rows from the
right table have null values appended to the left. An additional relational operation, called the Full Outer Join, can be
defined as the UNION of the Ljoin and Rjoin.12 Consider the two tables SalesAssociate and Customer given below.
Display the name of the SalesAssociate, his or her id and the customer name for all customers. Include in the result all
customer names even if they do not have a designated SalesAssociate.


SalesAssociate

    Last_Name           Id

      McGee             11

       Gilson           12

       Segui            13

      Nguyen            14

      Dumas             15



Customer

    SalesAssociateId                    Name

            11                      WomanSport

            11                     Baseball for All

            12                    Sport Equipments

            13                 Sam's Sporting Goods

            14                The Little Sporting Shop

            14                    Equipo Deportivo

            15                        Sportique

                                      UniSports
12 RDBMS vendors rarely support this operation because it can be implemented as a Union operation.
                                                                                                                       Page 62

In this case the common attribute is Id (of SalesAssociate) and SalesAssociateId (of Customer). The Rjoin table on this
common Id is shown below. Notice that the Customer Unisports shows in the Rjoin table even though it has no
SalesAssociate.




2.15. Another type of operation that allows us to answer a particular type of query that occurs frequently in databases is
the DIVISION operator. The division operator allows us to answer questions such as, what tuples from one table have
every value that appears in a particular column of another table? The Division operator can be defined as follows: given
two relations r(R) and s(S) with A ⊂ R and B ⊂ S and A and B union compatible. The Division relation will be denoted
by r[A ÷ B]s where the relation r is called the dividend relation, s is the divisor relation, A the dividend attribute(s) and
B the divisor attribute(s). The result of this operation can be obtained using the following algorithm:13

(1) Consider the dividend relation as a binary relation consisting of the dividend attribute(s) (A) and the nondividend
attributes C = R – A.

(2) Find the Projection of the dividend relation on the nondividend attribute(s). That is, find πC(R). Then for each of the
tuples obtained in this Projection repeat the following steps:

   a. Form a table with all tuples of the dividend relation that includes the tuple selected in the previous step. Make sure
   that the scheme of this table is the same as the scheme of the dividend relation.

   b. Project the table of the previous step on the dividend attribute. Call this set Ti.
   13 Adapted from Database Management Systems by D. Tsichritzis and F. Lochovsky, Academic Press, 1977.
                                                                                                                   Page 63

(3) Project the divisor relation on the divisor attribute.

(4) Choose the set Ti that contains all the tuples obtained in step 3.

Using this algorithm and the tables BUYER and PRODUCT shown below, find the buyers who have bought every type
of product.14 The query to answer this request is: BUYER [ITEM ÷ CODE] PRODUCT. Notice that the attributes ITEM
and CODE are union compatible. ITEM is the dividend attribute and CODE is the divisor attribute.


BUYER

   Name           Item

    Smith           A

    Jones           B

   Adams            A

    Smith           B

    Jones           A

    Smith           C



PRODUCT

    CODE            COST          PRICE

       A                5             4

       B                4             4

       C                6             9


Applying the algorithm to the given tables we have that:

(1) Since the dividend relation (BUYER) consists of only two attributes, it can be easily divided into two groups; the
dividend attribute (ITEM) and nondividend attribute (NAME).

(2) The Projection of the BUYER relation on the nondividend attribute is shown below:



  πNAME(BUYER)

       NAME

      SMITH
   JONES

  ADAMS


14 This exercise appears in Database Management Systems by D. Tsichritzis and F. Lochovsky, Academic Press, 1977.
                                                                                                                        Page 64

Choose tuple SMITH and form a new table T1 with the tuples of the dividend relation (BUYER) that contain the tuple
SMITH. Include all attributes of the dividend relation. This new table is:


Table T1

  Name        Item

     Smith      A

     Smith      B

     Smith      C


Obtain the Projection of this table on the dividend attribute and call this set T1. That is, T1 = πITEM(T1) = {(A), (B), (C)}.
Notice that this is a set of tuples.

Choose the tuple JONES and form a new table T2 with the tuples of the dividend relation (BUYER) that contain the
tuple JONES. This table is shown below:


T2

  Name        Item

     Jones     B

     Jones     A


Obtain the Projection of this table on the dividend attribute and call this set T2. That is, T2 = πITEM(T2) = {(A), (B)}.

Choose the tuple ADAMS and form a new table T3 with the tuples of the dividend relation (BUYER) that contain the
tuple ADAMS. This new table is:


  Name       Item

 Adams         A


Obtain the Projection of this table on the dividend attribute and call this set T3. That is, T3 = πITEM(T3) = {(A)}.

(3) Find the Projection of the divisor relation (PRODUCT) on the divisor attribute (CODE). That is, find πCODE
(PRODUCT). This relation is shown below:


CODE

A
B

C


(4) T1 is the only set of tuples that contains the three different tuples obtained in the previous step. Since T1 was obtained
when we chose the tuple SMITH, then SMITH is the buyer who has bought all products.
                                                                                                                          Page 65

2.16. Given the tables shown below, find the names of the dependents of all Engineers.


EMP

      SSN           Last-Name         Title         Department            No-of-Dependents

  123456789              Hopkins     Engineer       Construction                   2

  987654321              Brando     Architect            Design                    1

  570345228              Kimball     Engineer       Construction                   3

  923458004          Housden         Lawyer          Main Office                   1



DEP

  EMPSSN                 DEPSSN     Last-Name     First-Name          DOB

  123456789          792323653        Hopkins        Gerald         11/12/90

  123456789          970254356        Hopkins        Brenda         05/12/92

  987654321          805298992        Brando          Greta         08/12/85

  570345228          234497909        Kimball         Silvia        02/02/87

  570345228          807325224        Kimball        George         04/08/90

570345228          345098772        Kimball      Alice            05/23/92

923458004          943003993        Housden      David            07/12/81


Let us first identify all the Engineers in the EMP table. To do this, let us find σTITLE = Engineer(EMP). This table is shown
below:


σTITLE = Engineer(EMP)

      SSN            Last-Name          Title        Department          No-of-Dependents

  123456789               Hopkins     Engineer       Construction                 2

  570345228               Kimball     Engineer       Construction                 3



From this relation that lists all Engineers let us obtain their SSN, Last-Name and Title. To do this we need to obtain
πSSN,Last-Name,Title(σTITLE = Engineer(EMP)). This relation is:
                                                                                                                         Page 66


πSSN,Last-Name,Title(σTITLE= Engineer(EMP))

        SSN                Last-Name                   Title

   123456789                 Hopkins              Engineer

   570345228                 Kimball              Engineer


We can now form the Cartesian product of this relation and the DEP table. Let us rename the previous table πSSN,Last-Name,Title
(σTITLE = Engineer(EMP)) and call it ENG, short for Engineers. The Cartesian product is shown below. Notice that some
attributes had to be qualified to avoid duplicate names within the table.

ENG ⊗ DEP

      SSN            Eng-Last-Name             Title           EMPSSN      DEPSSN      DEP-Last-Name First-Name       DOB

  123456789               Hopkins             Engineer         123456789   792323653      Hopkins      Gerald       11/12/90

  123456789               Hopkins             Engineer         123456789   970254356      Hopkins      Brenda       05/12/92

  123456789               Hopkins             Engineer         987654321   805298992      Brando        Greta       08/12/85

  123456789               Hopkins             Engineer         570345228   234497909      Kimball       Silvia      02/02/87

  123456789               Hopkins             Engineer         570345228   807325224      Kimball      George       04/08/90

  123456789               Hopkins             Engineer         570345228   345098772      Kimball       Alice       05/23/92

  123456789               Hopkins             Engineer         923458004   943003993      Housden       David       07/12/81

  570345228               Kimball             Engineer         123456789   792323653      Hopkins      Gerald       11/12/90

  570345228               Kimball             Engineer         123456789   970254356      Hopkins      Brenda       05/12/92

  570345228               Kimball             Engineer         987654321   805298992      Brando        Greta       08/12/85

  570345228               Kimball             Engineer         570345228   234497909      Kimball       Silvia      02/02/87

  570345228               Kimball             Engineer         570345228   807325224      Kimball      George       04/08/90

  570345228               Kimball             Engineer         570345228   345098772      Kimball       Alice       05/23/92

  570345228               Kimball             Engineer         923458004   943003993      Housden       David       07/12/81


The Cartesian product by itself is not useful, but we can use it to retrieve the "real dependents" of the Engineers. To do
this we can select all tuples where SSN = EMPSSN. This operation on the Cartesian product is:
                                                                                                                       Page 67


σSSN = EMPSSN(ENG ⊗ DEP)

      SSN           Eng-Last-Name               Title         EMPSSN      DEPSSN      DEP-Last-Name First-Name       DOB

  123456789              Hopkins             Engineer         123456789   792323653      Hopkins      Gerald       11/12/90

  123456789              Hopkins             Engineer         123456789   970254356      Hopkins      Brenda       05/12/92

  570345228              Kimball             Engineer         570345228   234497909      Kimball       Silvia      02/02/87

  570345228              Kimball             Engineer         570345228   807325224      Kimball      George       04/08/90

  570345228              Kimball             Engineer         570345228   345098772      Kimball       Alice       05/23/92


The required list of dependents can then be obtained by doing a Projection on the attributes SSN, Eng-Last-Name, First-
Name. This Projection is shown below.

πSSN,Eng-Last-Name,First-Name(σSSN = EMPSSN(ENG ⊗ DEP))


         SSN               Eng-Last-Name            First-Name

    123456789                   Hopkins                   Gerald

    123456789                   Hopkins                   Brenda

    570345228                   Kimball                   Silvia

    570345228                   Kimball                   George

    570345228                   Kimball                   Alice


2.17. The theta-Join operation between two relations r(R) and s(S), generally denoted by r θ s, is a generalization of the
Equijoin that combines a Selection with a Cartesian product. Using the tables shown below, find the items that each
customer can afford based on his or her credit.


Product

    Id             Name               Price

  00123         Basketball             125

  00343             Bike               550

  00489         Golf Clubs             980
Customer

   Id      Credit

  C3920    1500

  C563      350

  C332      200
                                                                                                                 Page 68

The Theta Join can be simulated as follows:

Form the Cartesian product of the two given relations. That is, find Customer ⊗ Product. Notice that some attributes had
to be qualified.

Customer ⊗ Product

  CustomerId             Credit           ProductId     Name       Price

     C3920                1500             00123      Basketball   125

     C3920                1500             00343        Bike       550

     C3920                1500             00489      Golf Clubs   980

      C563                 350             00123      Basketball   125

      C563                 350             00343        Bike       550

      C563                 350             00489      Golf Clubs   980

      C332                 200             00123      Basketball   125

      C332                 200             00343        Bike       550

      C332                 200             00489      Golf Clubs   980


Using the result of this Cartesian product, we can now do a SELECTION where the selection criterion is Credit ≥ Price.
That is, let us find σCredit ≥ Price(Customer ⊗ Product). This relation is shown below.


    σCredit ≥ Price(Customer ⊗ Product)


  CustomerId             Credit           ProductId     Name       Price

     C3920                1500             00123      Basketball   125

     C3920                1500             00343        Bike       550

     C3920                1500             00489      Golf Clubs   980

      C563                 350             00123      Basketball   125

      C332                 200             00123      Basketball   125


Taking the Projection on the attributes CustomerId, ProductId, Name and Price we obtain the required information.
                                                                                                                     Page 69


 CustomerId       ProductId        Name         Price

     C3920           00123       Basketball      125

     C3920           00343          Bike         550

     C3920           00489       Golf Clubs      980

     C563            00123       Basketball      125

     C332            00123       Basketball      125


2.18. How can the Join operation be used to simulate a Selection?

To simulate a selection using a join operation, proceed as follows: Given a relation r(R), an attribute A of r and a value a
∈ Dom(A) assume that you want to obtain σA=a(r). To obtain this Selection, create a new relation s with a single attribute
and a single tuple. Let A be the only attribute of this relation and a its only tuple. The new relation is shown below.


σA=a(r)

    A

     a


Then form the Equijon between r and σA=a(r) on the common attribute A. That is, form σ (A) Join r. This join is
equivalent to σA=a(r).

2.19. Given the relations DOCTORS and NURSES, find the last names and supervisors of the medical personnel that
work in the Cardiology department. What assumptions are necessary to be able to present the result as a single table?


DOCTORS

         Id      Last-Name      Department        Supervisor

  120534533         Silver       Cardiology        Dr. Jones

  380237302       Roswell         Radiology       Dr. Stewart

  293982983       Hartman         Oncology         Dr. Smith

  727873233        Stanley       Cardiology        Dr. Sing

  982391179        Bartley        Pediatrics     Dr. Spresser

  425370983         Jones           Rehab          Dr. Sams
                                                                                                                  Page 70


NURSES

       Id          Last-Name          Department           Supervisor

  930272434           Clinton          Pediatrics         Mrs. Alexander

 8923903133           Alvarez         Cardiology           Ms. Hussain

  321231234            Lewis             Rehab             Mr. Hanson

  930111341            Felton          Oncology            Mr. Lenkerd

  823907592         Traubaugh          Pediatrics          Ms. Sullivan

  392983999           Rissler         Cardiology           Mr. Sanchez


To answer this query we need to proceed as follows:

First find the names of the doctors and nurses that work in the Cardiology department. The queries to find the doctors
and nurses who work in the Cardiology department are shown below.


σ(DEPARTMENT = CARDIOLOGY(DOCTOR)

       Id           Last-Name          Department            Supervisor

  120534533            Silver           Cardiology            Dr. Jones

  727873233           Stanley           Cardiology            Dr. Sing



σ(DEPARTMENT = CARDIOLOGY(NURSE)

       Id           Last-Name          Department            Supervisor

  8923903133           Alvarez          Cardiology           Ms. Hussain

  392983999            Rissler          Cardiology           Mr. Sanchez


From the two previous relations we can find the Last-Name and Supervisor of both doctors and nurses. The queries to
obtain this information are:


πLast-Name,Supervisor(σDEPARTMENT = CARDIOLOGY(DOCTOR))

                                Last-Name            Supervisor
Silver    Dr. Jones

Stanley   Dr. Sing
                                                                                                                          Page 71


πLast-Name,Supervisor(σDEPARTMENT = CARDIOLOGY(NURSE))

                               Last-Name                 Supervisor

                                 Alvarez             Ms. Hussain

                                  Rissler            Mr. Sanchez


To present the previous two results as a single table, let us form the UNION of these two relations. To be able to do this
both relations must have the same number of attributes and the data type of these attributes must be the same.


 Last-Name         Supervisor

    Silver          Dr. Jones

   Stanley           Dr. Sing

   Alvarez        Ms. Hussain

    Rissler       Mr. Sanchez


2.20. Given relations r(R), s(S) and the operations shown below, what can be said about the cardinality of the resulting
relations?

(a) s ∪ r (b) r ∩ s (c) r – s (d) r ∩ s
(e) σA=a (r) for a ∈ Dom(A) (f) πA(r) if A is in the scheme of r.

a. The cardinality of a Union operation depends on the number of identical tuples currently present in r and s. If the
relations are disjoint, that is, if they do not have common tuples, the cardinality of the Union is equal to the sum of the
cardinalities of the relations. If all tuples of relation r are contained in relation s, then the cardinality of the Union is
equal to the cardinality of the s. In case the relations have some but not all tuples in common the cardinality of the
Union is less or equal to the sum of the cardinalities of the relations.

b. The cardinality of the Intersection may be zero in case the relations do not have any common tuples. If all tuples of
one relation are included in the other relation then the cardinality of the Intersection is the minimum of the two
cardinalities. In cases where the relations have some but not all tuples in common then the cardinality of the Intersection
is less or equal to the minimum of the cardinalities.

c. If the Difference r – s is not the empty relation, then the cardinality of the Difference is less or equal to the cardinality
of r. If all the tuples of s are included in r then the cardinality of the Difference relation is the difference of the
cardinalities. That is the cardinality of r minus the cardinality of s.

d. The cardinality of the Cartesian product is the product of the cardinalities of the relation.

e. The cardinality of the Selection is less or equal to the cardinality of r.

f. The cardinality of the Projection is less than the cardinality of r if there are duplicate rows in the Projection. If there
are not duplicate rows then the cardinality of the Projection is equal to the cardinality of the relation r.
                                                                                                                 Page 72

Supplementary Problems

2.21. Given the following tables shown below, determine which of these tables can also represent relations. Explain
why.


                    Table A

     A          B              C         D

     1          88             80        0

                45             23        89

     25         87             23        43

     46         26             39        55

     53         23             33        43

     16         57             48        48



                     Table B

A          B             C          D

1          88            80              0

16         57            48         48

25         87            23         43

46         26            39         55

53         23            33         43

16         57            48         48



                     Table C

     A          B              C         D

 23WEE          88             80        0

     16         57             48        48
25WE   87   23   43

46RE   26   39   55

53WT   23   33   43

16E    57   48   48
                                                                                                                     Page 73

2.22. Assume that a relation instance has a degree of 7 and a cardinality of 15. How many attributes does this relation
have and how many different rows are currently present in the relation?

2.23. Assume that you have a relation r(R) and that you perform a Projection on this relation on the set of attributes X
(X ⊂ R) of the relation. If you then do a Selection on the Projection relation to retrieve all tuples that satisfy the
condition A = a, what is the relationship between A and the attributes of the Projection?

2.24. Consider the relations r(ABC) and s(ACDE). Assume also that a ∈ Dom(A), b ∈ Dom(B), c ∈ Dom(C) and d ∈
Dom(D). Which of the following expressions are legal to carry out?

   a. r ∪ s b. πB(r) ∩ πB(r) c. σD=d(r)

2.25. Find an appropriate key for each of the relational schemes below. Are the keys single or composite? If the current
set of attributes is not appropriate explain why and propose a solution.

   a. ORDER(Order-No, Order-Date, SalesRep, Total-Amount, Discount, Ship-Date). Assume that order numbers are
   reset daily. A customer-Id can place more than one order per day.

   b. STORE(Location, No-of-Employees, Total-Monthly-Sales, Manager, City). Assume that there may be more than
   one store located in the same city.

   c. PAYMENT(Customer-Id, Account, Amount-Paid, Date-Paid, Type-Payment, Discount). Assume that a customer
   may have more than one account and that he or she can make several payments on any day but no more than one
   payment per day can be applied to each account.

2.26. Consider the relations shown below and the attributes that have been selected as PK for these relations. Justify if
the choices for PK are appropriate or not.

   a. EMPLOYEE (ID, LAST-NAME, SALARY).

   b. STUDENT (NAME, ADVISOR, MAJOR). Assume that each student has a unique advisor. An advisor may have
   more than one advisee.

   c. STUDENT (ID, NAME, ADVISOR). Assume that each student has a unique advisor.

2.27. Given the TRAVELER and RESORT tables, find the names of all the customers that have visited all the resorts
that currently appear in the RESORT table. What operation will you use?
                                                                                                                 Page 74


TRAVELER

   Customer        Country

     Alton          Mexico

    Russell         Mexico

     Jones          Mexico

    Martin          Mexico

     Alton         England

     Jones         England

    Russell         Brazil

     Jones          Brazil

    Martin          Brazil

     Alton           Spain

    Russell          Spain

     Jones           Spain



  RESORT

  Country     Resort Location       Price

   Mexico          Cancun           1200

  England         Liverpool         1790

   Brazil       Rio de Janeiro      1790

    Spain          Marbella         2200


2.28. Assume that you have the two relations considered in Example 2.4. What would happen if you try to delete from
the DEPARTMENT table the tuple with Id = 10? Assume that this department has been eliminated from the company
and all its employees have to be laid off. How can you avoid getting any errors from the system when you try to delete
the tuple with Id = 10?

2.29. Assume that you have two relations r and s defined over the same scheme R and that X⊂ R. Using tables of your
own, write an example to illustrate that in the expressions shown below the left hand of the expression is always
included in the right hand but not the other way around.

   a. πX(r ∩ s) = πX(r) ∩ πB(s)
   b. πX(r ∪ s) = πX(r) ∪ πB(s)
                                                                                                                        Page 75

2.30. Using the relations shown below find the following operations:

a. σA=a(r) b. πA,B(r) c. r ∪ s d. r ⊗ s e. r ~ s


r

    A        B        C

    a        1         a

    b        1         b

    a        1         c

    c        2         d



s

    A        B        C

    a        1         a

    a        3         d


Answers to Supplementary Problems

2.21. Table A cannot represent a relation because the PK cannot be NULL or have no value. Table B cannot represent a
relation because two of its rows are identical. Table C may or may not represent a relation. If the data type of the key is
character then it is possible for this table to be a relation. However, if the data type is supposed to be numeric then the
table is not a relation.

2.22. Since the degree is 7 the relation has 7 attributes. Since the cardinality is 15 there are 15 different tuples currently
present in the relation.

2.23. Attribute A must be one of the attributes of the set X on which the Projection is taken.
                                                                                                                      Page 76

2.24. a. This Union operation is not legal because the relations do not have the same number of attributes.

    b. This operation is legal if the attributes are union compatible.

    c. This operation is illegal because the attribute D is not an element of the scheme of relation r.

    2.25. a. The PK key for this relation is a composite key. The attributes of the key are: Order-No and Order-Date.

    b. The current set of attributes does not allow us to choose a key without imposing unnecessary constraints on the
    relation. The best solution is to add a new attribute Store-Id and use it to uniquely identify each of stores. The pair
    Location and Manager-Last-Name is not a viable solution since it imposes on the data the unnecessary condition.
    Before hiring a new manager the database must be checked to see if there is another manager with similar last name.
    This does not seem to be a good hiring practice.

    c. The key for this relation is a composite key formed by the following attributes: Customer-Id, Account and Date-
    Paid.

2.26. a. This composite attribute is not an appropriate key. Keys must be keys regardless of the data or for how long the
relation is going to be used. In this case, it is possible that two different employees may have the same last-name and
salary.

    b. This composite key is not an appropriate key either. An advisor may have two different advisees with the same
    name.

    c. This composite key is not appropriate because it violates the minimality property of the key. The attribute Name
    can be discarded. It is not necessary to uniquely identify the tuples of the relation.

2.27. To find the name of all travelers that have visited all the available resorts currently listed in the RESORT table,
you must use a division operator. Jones has visited all the available resorts.

2.28. The system will generate an error because that tuple is being referenced by some tuples in the EMPLOYEE table.
Some systems allow you to DELETE a tuple with the CASCADE option; what this does is to drop the tuple and the
foreign key constraint that exists with the referencing table. If this not possible try to delete the tuple from the
EMPLOYEE table before DELETING the department tuple from the DEPARTMENT table. Obviously, this is not an
ideal solution.

2.29. Answers will vary. Each table you make may look different.

2.30. a. σA=a(r)


   A       B       C

   a       1       a

   a       1       c
                                         Page 77

b. πA,B(r)


 A         B

 a         1

 b         1

 c         2


c. r ∪ s


 A         B     C

 a         1     a

 b         1     b

 a         1     c

 c         2     d

 a         3     d


d. r ⊗ s


 r.A       r.B   r.C   s.A   s.B   s.C

 a         1     a     a     1     a

 a         1     a     a     3     d

 b         1     b     a     1     a

 b         1     b     a     3     d

 a         1     c     a     1     a

 a         1     c     a     3     d

 c         2     d     a     1     a

 c         2     d     a     3     d
e. r – s


 A         B   C

 b         1   b

 a         1   c

 c         2   d
                                                                                                                                  Page 78




Chapter 3—
An Introduction to SQL

3.1—
Introduction to SQL Language

The previous chapter detailed the theoretical and mathematical background for creating, maintaining and retrieving
items from tables in relational databases. This chapter presents a general introduction to how these tasks are performed
for particular RDBMS systems. We will present only an overview of SQL. For more detailed information on the
capabilities of this language, consult other sources that specifically deal with SQL as a language.1

SQL is the standard computer language used to communicate with relational database management systems. The SQL
standard has been defined by the American National Standard Institute (ANSI) and the International Standards
Organization (ISO). The official name of the language is International Standard Database Language SQL (1992). The
latest version of this standard is commonly referred to as SQL/92 or SQL2. In this book, we will refer to this standard as
the ANSI/ISO SQL standard or just the SQL standard.

The ORACLE Corporation, formerly Relational Software Inc, produced the first commercial implementation of the
language in 1979. Although most relational database vendors support SQL/92, compliance with the standard is not
100%. Currently, there exist several flavors of SQL on the market since each RDBMS vendor tries to extend the
standard to increase the commercial appeal of its product. In this chapter, we adhere to the SQL/92 standard whenever
possible. However, we will illustrate the implementations of these features using
   1 One such book is Schaum's Outline: Fundamentals of SQL Programming by the authors of this publication. These two books are

   intended as companions and together would form a basis for a complete study of relational databases.
                                                                                                                                     Page 79

Personal Oracle 8, the PC version of the ORACLE relational database management system. It is important to note that
many RDBMS vendors provide more interactive ways to create and maintain databases using tables and/or windows.
The examples we will use in this area come from Microsoft Access. Although we will show alternate ways to maintain
tables and create queries, the reader should remember that SQL is still the background language used by MS Access.
From the MS Access query interface, one can always view the SQL that accomplishes the same purpose.

One of the main characteristics of the SQL language is that it is a declarative or nonprocedural language. From the
programmer's point of view, this implies that the programmer does not need to specify step by step all the operations
that the computer needs to carry out to obtain a particular result. Instead, the programmer indicates to the database
management system what needs to be accomplished and then lets the system decide on its own how to obtain the desired
result.

The statements or commands that comprise the SQL language are generally divided into two major categories or data
sublanguages, DDL and DML, which were explained in Chapter 1. Each sublanguage is concerned with a particular
aspect of the language. DDL includes statements that support the definition or creation of database objects such as
tables, indexes, sequences and views. Some of the most commonly used DDL statements are the different forms of the
CREATE, ALTER and DROP commands. DML includes statements that allow the processing or manipulation of
database objects. Some of the most commonly used DML statements are the different modalities of the SELECT,
INSERT, DELETE and UPDATE statements. It is important to observe that all objects created in a database are stored in
the data dictionary or catalog.

The SQL language can be used interactively or in its embedded form. Interactive SQL allows the user to issue
commands2 directly to the DBMS and receive the results back as soon as they are produced. When embedded SQL is
used, the SQL statements are included as part of a program written in a general-purpose language such as C, C++ or
COBOL. In this case, we refer to the general-purpose programming language as the host language. The main reason for
using embedded SQL is to use additional programming language features that are not generally supported by SQL.

When embedded SQL is used, the user does not observe directly the output of the different SQL statements. Instead, the
results are passed back in variables or procedure parameters.

As a general rule, any SQL instruction that can be used interactively can also be used as part of an application program.
However, the user needs to keep in mind that there may be some syntactical differences in the SQL statements when
they are used interactively or when they are embedded into a program. In this chapter, we only consider SQL in its
interactive form.
   2 Some authors refer to instructions used in interactive mode as commands and embedded instructions as statements. In this book, we

   will use these two terms interchangeably.
                                                                                                                                    Page 80

3.1.1—
Name Conventions for Database Objects

Database objects, including tables and attribute names, must obey certain rules or conventions that may vary from one
RDBMS to another. Failing to follow the naming conventions of a particular RDBMS may cause errors. However, users
are generally ''safe" if they stay within the following guidelines.

• Names can be from 1 to 30 characters long (64 in MS Access) with the exception that the database's names may be
limited to 8 characters as is the case with any ORACLE database.

• Names must begin with a letter (lower or upper-case); the remaining characters can be any combination of upper or
lower-case letters, digits or the underscore character. MS Access allows spaces in the name, but then requires the use of
square brackets, e.g. [My pets].
   Example 3.1
   Tell whether these names are usually valid or invalid according to the SQL naming conventions. If invalid, explain the reason.

   a. Database names: Employee, PurchaseOrders, Sales Data
   b. Table names: PARTS, Employee_Birthdays, Vendor-Names
   c. Attribute names: Computer_ID_Number, $_Amount_Paid,
    addresscitystatezipcode

a. Database names: Employee — valid; PurchaseOrders — invalid because in many versions of SQL, including Oracle,
database names are limited to 8 characters; Sales Data — invalid because spaces are not allowed except in MS Access
along with square brackets ([Sales Data]).

b. Table names: PARTS — valid because the case does not matter — this would be the same as parts;
Employee_Birthdays — valid because table names can be any length up to 30 and may contain the underline character;
Vendor-Names — invalid because only letters, digits, and the underline character may be used.

c. Attribute names: Computer_ID_Number — valid; $_Amount_Paid — invalid because characters other than letters,
digits, and the underscore character are not allowed; addresscitystatezipcode — valid but not very smart. Not only is it
hard to read with no underscore characters between the words, but also it implies that many different items would be
included in the one column. Choose the columns so that one item of data is stored for each record. This attribute should
really be divided into four different columns.

3.1.2—
Structure of SQL Statements/SQL Writing Guidelines

Any SQL statement or command is a combination of one or more clauses. Clauses are, in general, introduced by
keywords. An example of a SQL statement
                                                                                                                       Page 81

is shown in Fig. 3-1. At this moment, the reader should not be concerned with the inner working of this statement but
only with its structural aspects.

SELECT column-name-1, column-name-2, . . . column-name-N
FROM table-name
WHERE Boolean-condition
ORDER BY column-name [ASC|DESC][, column-name [ASC | DESC]. . . .];
Fig. 3-1.
Keywords and clauses in the structure of a SQL statement.

In this SQL statement, we can distinguish four keywords and four clauses. The keywords are shown in bold in Fig. 3-1.
As indicated before, a keyword is a word that has a specific meaning within the language. To use a keyword other than
in its specific context will generate errors. The four clauses of this SQL statement are underlined in Fig. 3-1. Notice that
each clause starts with a keyword.

In the preceding statement, the first two clauses (SELECT and FROM) are mandatory and the last two (WHERE and
ORDER BY) are optional. When describing the syntax of SQL statements we will indicate optional keywords or clauses
by enclosing them in square brackets. Using this convention, we can rewrite the preceding statement as shown in Fig. 3-
2.

SELECT column-name-1, column-name-2, . . . column-name-N
FROM table-name
[WHERE condition]
[ORDER BY column-name [ASC | DESC][, column-name [ASC | DESC]. . . .]];
Fig. 3-2
Mandatory and optional clauses explicitly indicated in a SQL statement.

Notice that in the ORDER BY clause we have enclosed in square brackets the words ASC (ascending) and DESC
(descending) separated by a '|' character. This character, sometimes called the "pipe" character, is used to separate the
different options that a user can choose when writing a SQL statement. The user can choose one and only one from each
set of options. Notice also that we have underlined the word ASC. This indicates that this word is a default value. That
is, a value that will be used by the system when the user does not choose a different option from the set of available
choices. In Fig. 3-2, whenever the ORDER BY clause is used and the user does not choose the DESC option the RDBMS
will use the ASC option by default.

When writing SQL statements or commands it is useful to follow certain rules and guidelines to improve the readability
of the statements and to facilitate their editing if this is necessary. Some of the guidelines that the reader should keep in
mind are:
                                                                                                                                           Page 82

• SQL statements are not case sensitive. However, keywords that start a clause are generally written in upper case to
improve readability of the SQL statements.

• SQL statements can be written in one or more lines. It is customary to write each clause in its own line.

• Keywords cannot be split across lines and, with very few exceptions, cannot be abbreviated.

• SQL statements end in a semicolon. This semicolon must follow the last clause of the statement but it does not have to
be in the same line.

3.2—
Table Creation

In any RDBMS, tables are the basic unit of data storage. Tables hold all of the user-accessible data. To create a table it
is necessary to name the table and all the attributes that comprise it. In addition, for every attribute the user needs to
define its data type and, if necessary, the appropriate constraint or constraints. The name of the table identifies it as a
unique object within the RDBMS.3 Column or attribute names serve to differentiate the attributes from one another.
Attribute names must be unique within the table. The data type of each attribute defines the characteristics of its
underlying domain. The constraint or constraints that may be defined for a column impose conditions that need to be
satisfied by all the values stored in the column. Tables in SQL are created using the CREATE TABLE statement or
command. Fig. 3-3 shows the basic form of this command. In this section, we will assume that every time a table is
created there is no other table by the same name previously created by the same user in his or her schema,4 as explained
in Chapter 1. (If a table already exists with that name, and the table is to be redefined, use the DROP TABLE command.)
In the database lingo, tables created by a user are said to be "owned" by the user.

             CREATE TABLE table-name
             (
                column-name-1                         data-type-1             [constraint],
                column-name-2                         data-type-2             [constraint],
                       . .
                column-name-N                         data-type-N             [constraint]
             );



Fig. 3-3.
A basic syntax of the CREATE TABLE command.

   3 Formally, it defines the table as a unique object within the user's tablespace or schema or within the entire system depending upon

   whether or not the table has been defined as public.
   4 This term refers to a collection of logical structures of data or schema objects. Each user owns a single schema whose name is that of its

   owner. Any user, with the appropriate privileges, can create objects in his or her own schema. Some schema objects are tables, synonyms,
   indexes, sequences and views.
                                                                                                                                   Page 83

When describing the syntax of the CREATE TABLE command we will call a column definition line every line of the
form

column-name data type [constraint],

where optional elements are enclosed in square brackets. Therefore, according to this notation, every column definition
line requires a column name and a data type. Constraints are optional. Usually, when typing a CREATE TABLE
command, each column definition line is written in a separate line for readability. Commas separate column definition
lines except for the last line which is followed by a parenthesis. As any other SQL command, a semicolon follows the
closing parenthesis.
   Example 3.2
   Write the SQL statements to create a table called SAMPLE TABLE with two attributes: Attribute 1 is text no more than 15 characters
   long and Attribute 2 is currency. NOTE: Recall from Table 2-1 that in the Oracle implementation of SQL, text of varying length is
   indicated by Varchar2 (max-size) and currency would simply be a number with two decimal places.

CREATE TABLE Sample_Table
(
   Attribute_1   Varchar2(15),
   Attribute_2   Number(4,2)
);

Notice in this code that the naming rules from Section 3.1.1 have been followed. Spaces in names of tables or attributes
are not allowed and usually replaced with the underscore character.

3.2.1—
Constraint Implications

The SQL standard requires that, whenever a constraint is defined, the constraint be given a name. Constraints can be
named explicitly by the user at the time a table is created or modified. Otherwise, the constraint is named internally by
the RDBMS. Constraints that are named by the user are called named constraints. Constraints named by the RDBMS
are vendor dependent and are called unnamed constraints. Although constraint names can follow the conventions
indicated in Section 3.1.1, we will use the following format for named constraints:
                CONSTRAINT table-name-column-name-suffix

where the clause CONSTRAINT is mandatory and the suffix is a one or two letters sequence that indicates the type of
the constraint. Table 3-1 shows a list of the suffixes that we will use in this book. Unnamed constraints must not be
preceded by the CONSTRAINT clause.
                                                                                                                                   Page 84




Some of the constraints that we will consider in this chapter are shown in Table 3-2. A constraint defined as part of a
column definition is called a column constraint. This type of constraint can be used to impose a single condition on the
column in which it is defined. A constraint that is part of a table definition is called a table constraint. This type of
constraint can be used to define more than one constraint on any column of the table. We will only consider column
constraints here. See a SQL reference for an explanation of table constraints.




   Example 3.3
   A university allows students to buy meals using a Flex Card. They purchase a certain amount and each time they use the card the
   appropriate amount is subtracted from their account. Create the table Flex_Card with the attributes and assumptions indicated below.
   Choose the most appropriate data types.
   Attributes: student name, card number, starting value, value left, and pin number.
   Assumptions: The attribute student name may have up to 25 characters. The attributes value left and original value are measured in
   dollars and cents. The attribute card number may have up to 15 digits. The pin number attribute is always 12 characters long.

The SQL instruction to create the Flex_Card table is as follows:
                                                                                                                             Page 85


CREATE TABLE Flex_Card
( Student_Name
   Card_Number                      VARCHAR2 (25),
   Starting_Value                   VARCHAR2 (15),
   Value_Left                       NUMBER (4,2),
   Pin_Number                       NUMBER (4,2),
);                                  CHAR (12)


The attribute Student_Name is obviously of type character. Since not all student names are 25 characters long, the
data type of this column is Varchar2(25). The Card_Number and Pin_Number columns are both of character
type because they are not involved in any type of computation. Since Card_Number may vary in length, its data type
is Varchar2(15). The data type of Pin_Number is Char(12) since this column has a fixed length. The
Starting_Value and Value_Left columns are both numerical quantities that may have up to 4 digits including 2
decimal places. Observe the use of the underscore character to improve the readability of the attribute names.
   Example 3.4
   Rewrite the CREATE TABLE of the previous example with the attribute Card_Number defined as the primary key and the attribute
   Pin_Number defined as unique. Use unnamed constraints.

In this case, we may use a column constraint to define the attribute Card_Number as the PK. By definition of PK, this
attribute is also UNIQUE and therefore it is not necessary to define it as such. The attribute Pin_Number is only
defined as a UNIQUE attribute. The reader should be aware that these two constraints behave a little bit differently. The
PRIMARY KEY constraint, in addition to requiring that the values be unique, also guarantees that the values of the
Card_Number column cannot be NULL. The UNIQUE constraint of the Pin_Number column does not allow
duplicate values in this column but it does allow NULL values. The new CREATE TABLE command is shown below.

CREATE TABLE Flex_Card
( Student_Name                      VARCHAR2(25),
   Card_Number                      VARCHAR2(15) PRIMARY KEY,
   Starting_Value                   NUMBER(4,2),
   Value_Left                       NUMBER(4,2),
   Pin_Number                       CHAR(12)UNIQUE
);


   Example 3.5
   Rewrite the CREATE TABLE of the previous example using named constraints.

Following the convention for naming constraints and using the suffixes of Table 3-1, the constraints associated with the
attributes Card_Number and Pin_Number are respectively

Calling_Card_Card_Number_PK and Calling_Card_Pin_Number_U
                                                                                                                  Page 86

The corresponding CREATE TABLE command is shown below:

CREATE TABLE Flex_Card
(Student_Name                    VARCHAR2(25),
 Card_Number                     VARCHAR2(15)CONSTRAINT
                                 calling_card_card_number_PK PRIMARY KEY,
 Starting_Value                  NUMBER(4,2),
 Value_Left                      NUMBER(4,2),
 Pin_Number                      CHAR(12)CONSTRAINT
                                 calling_card_pin_number_U UNIQUE);


Notice that the column definition for the attributes Card_Number and Pin_Number have been written in more than
one line to fit the width of this page.

3.2.2—
Creating Tables and Constraints in MS Access

MS Access provides a way to create the table directly through the use of the table design view. Fig. 3-4 shows the
window where the user can type in the field names, choose a data type, and give a brief description of the column. The
table from Example 3.2 has been defined. Notice that table and attribute names are allowed to contain spaces. In Fig. 3-
4, Attribute 1 is the primary key, as indicated by the picture of the key to the left of the field name. Limits on size,
default values, and many other constraints can be indicated through the use of the bottom half of the window. The
Indexed Yes(No duplicates) will enforce the SQL Unique constraint, and if the line Required is set to Yes then NULL
values are not allowed. Consult a reference on MS Access for a detailed guide to using other sections of this screen.




                                                          Fig. 3-4.
                                              Table design view in MS Access.
                                                                                                                                       Page 87

    Example 3.6
    Show the Flex Card table design as it would be created using MS Access. Be sure to use all the constraints shown in Example 3.4.




The design view of the table shows that the Card Number is the primary key. The Pin Number can be forced to be
Unique by selecting the No Duplicates value for the property Indexed.

3.2.3—
Populating and Maintaining Tables

After creating a table, the user may add rows to the table using the INSERT INTO command. The process of adding
rows to a table is called populating the table. In its simplest form, this command allows the user to add rows to a table
one row at a time. Fig. 3-5 shows the basic syntax of this command. More complex insertion techniques are available,
but beyond the scope of this chapter. Section 2.7.1 described the care that must be taken when trying to insert a tuple
into a table. The INSERT INTO commands must be formatted correctly and not violate any of the rules listed in
Chapter 2. If the INSERT INTO operation fails, an error message will appear.

INSERT INTO table-name (column-1, column-2, . . . column-N)
VALUES (value-1, value-2, . . . value-N) ;


Fig. 3-5.
Basic form of the INSERT statement.
                                                                                                                          Page 88

In Fig. 3-5, column-1, column-2, . . . column-N are the table's columns, and value-1, value-2, value-
3, . . . value-N are the values that will be inserted into their corresponding columns. Notice that the value to be
inserted into a column must be of the same data type that was specified for that column when its table was created. It is
important to keep in mind that we must specify a value in the VALUES clause for each column that appears in the
column list.
   Example 3.7
   Insert into the Flex_Card table the data indicated below.

Student_Name        Card_Number          Starting_Value        Value_Left     Pin Number
Ann Stephens        1237096435           20.00                 12.45          987234569871
John Gilmore        5497443544           15.00                 11.37          433809835833


Since the basic form of the INSERT INTO command only allows the insertion of one row at a time, it is necessary to
use two consecutive INSERT INTO commands to add these two tuples to the Flex_Card table. Notice that all character
data has been enclosed in single quotes.
INSERT INTO Flex_Card (Student_Name, Card_Number,
                          Starting_Value,Value_Left, Pin_Number)
VALUES ('ANN STEPHENS', '1237096435', 20.00, 12.45,
        '987234569871');
INSERT INTO Flex_Card (Student_Name, Card_Number,
                          Starting_Value,Value_Left,Pin_Number)
VALUES ('JOHN GILMORE', '5497443544', 15.00, 11.37,
        '433809835833');
COMMIT;

The COMMIT command that follows the last INSERT INTO command is necessary to make the changes to the table
permanently. The COMMIT command will be explained in Chapter 6.

The reader should be aware that the order of the columns following the INTO clause is immaterial provided that their
corresponding values appear in the same order in the VALUES clause. This allows us to fill in the columns of a row in
any order. Example 3.8 illustrates this.
   EXAMPLE 3.8
   Insert into the Flex_Card table the rows shown below, and fill in the columns in the following sequence: Pin_Number,
   Card_Number, Student_Name, Starting_Value, and Value_Left.

Student_Name        Card_Number           Starting_Value       Value_Left      Pin Number
John Darc           2137096435            20.00                20.00           125234569871
Richard Lion        3817443544            20.00                20.00           632809835833
                                                                                                            Page 89

As in the previous example, we need two consecutive INSERT statements to add these rows to the Flex_Card table. The
new INSERT statements are as follows:
INSERT INTO Flex_Card (Pin_Number,Card_Number,Student_Name,
                       Starting_Value,Value_Left)
VALUES ('125234569871', '2137096435', 'JOAN DARC', 20.00,
        20.00);
INSERT INTO Flex_Card (Pin_Number, Card_Number, Student_Name,
                       Starting_Value,Value_Left)
VALUES ('632809835833', '3817443544', 'RICHARD LION',
        20.00, 20.00);
COMMIT;

As part of the normal maintenance of a database, one or more rows may need to be updated or removed from the
database. For instance, in the Flex_Card table, the amount left on the card may change, or the student might leave
school. The SQL command that allows the user to delete rows from a table is the DELETE command (see Section 2.7.2).
The SQL command that allows the user to update values in existing rows is the UPDATE command (see Section 2.7.3).

The DELETE command can be used to remove rows that meet certain conditions or it can be used to remove all rows
from a particular table. The syntax of this command to remove rows that meet certain conditions is shown here:
                 DELETE FROM table-name WHERE condition;

The syntax of the DELETE command to remove all rows of a table is
                             DELETE table-name;

   Example 3.9
   Student Joan Darc has left school. Remove her information from the database.

DELETE FROM Flex_Card
WHERE student_name = 'JOAN DARC';

This DELETE command will remove the entire row from the table. Sometimes, however, information in a row must be
changed. As the name of the UPDATE command suggests, its primary function is to update the rows of a table. The
basic syntax of this SQL command to update one or more values of a single row is as follows:
UPDATE table-name
SET col-1 = new-vall [ . . ., . . . col–N = new-valN]
[WHERE condition];

where col-1 . . ., col-N stand for column names and new-vall, . . . new-valN stand for the new values that will
be stored in their corresponding columns. The WHERE clause allows us to change the values of selected rows. The
following example illustrates the use of this command.
                                                                                                                               Page 90

   Example 3.10
   Richard Lion has spent $7.50 of the value of his flex card. The new amount left on his card is $13.50. Update his row.

UPDATE Flex_Card
SET value_left = 13.50
WHERE student_name = 'RICHARD LION';

The UPDATE statement sets the specified attribute to the new value. Several columns and rows can be updated at the
same time through more complex UPDATE commands.

3.2.4—
Populating Tables in MS Access

MS Access provides a way to enter items into the table from the table view without the use of SQL. Rows can be
inserted, deleted, or individual values can be updated directly. Fig. 3-6 shows this view of the table. Items can simply be
updated or typed into each column. During the editing process, constraints are enforced as the user is typing in the
information. The editor flags the error and does not allow the row to be recorded until unique or required items are
correct.




                                                                  Fig. 3-6.
                                                         Table view in MS Access.

   Example 3.11
   Show the screen that would be used to type into the Flex_Card table the data from both Example 3.7 and Example 3.8 above.
                                                                                                                     Page 91

After the data is typed directly into the table, when the user closes the screen MS Access asks if the changes to the table
should be saved. However, the user should be aware of the need to save frequently as data are entered. Saving is the
equivalent of the COMMIT in Oracle.

3.3—
Selections, Projections, and Joins Using SQL

The SELECT statement is the most frequently used SQL statement. The SELECT statement is used primarily to query or
retrieve data from the database. For this reason, it is customary to call a SELECT statement a query. In this book, we
will refer to any SELECT statement by this name. The basic syntax of this statement is shown once again in Fig. 3-7.
SELECT column-1, column-2, column-3, . . ., column-N
FROM table-1, . . ., table-N
[WHERE condition]
[ORDER BY column-name [ASC | DESC] [,column-name [ASC | DESC] . . .]];

Fig. 3-7.
Basic structure of the SELECT statement.

The SELECT statement is formed by at least two clauses: the SELECT clause and the FROM clause. The clauses WHERE
and ORDER BY are optional. Observe that the SELECT statement, like any other SQL statement, ends in a semicolon.
The functions of each of these clauses are summarized below.

• The SELECT clause lists the subset of attributes or columns to retrieve. (See Projection in Section 2.5.2.) The
attributes listed in this clause are the columns of the resulting relation.

• The FROM clause lists the tables from which to obtain the data. The columns mentioned in the SELECT clause must be
columns of the tables listed in the FROM clause. (To accomplish Equijoins, as explained in Section 2.5.3, several tables
may be used.)

• The WHERE clause specifies the condition or conditions that need to be satisfied by the tuples or rows of the tables
indicated in the FROM clause. (See Selection in Section 2.5.1.)

• The ORDER BY clause indicates the criterion or criteria used to sort rows that satisfy the WHERE clause. The ORDER
BY clause only affects the display of the data retrieved, not the internal ordering of the rows within the tables.

As a mnemonic aid to the basic structure of the SELECT statement some authors summarize its functionality by saying
that "you SELECT columns FROM tables WHERE the rows satisfy certain conditions and the result is ORDERED BY
specific columns''.

The WHERE clause is what gives real power to the SELECT command since it provides the ability to display data that
meets a specified condition. For instance,
                                                                                                                 Page 92

you might want to print out all the names of people in a certain zip code area or you might want to see the names of all
employees that work for a given department. The condition that accompanies the where clause defines the criterion to be
met. The types of condition that we consider in this chapter are of the following form:
Column-name       comparison-operator            single-value

Column-name is the name of one of the columns of the table indicated in the FROM clause. The comparison operator
is one of the operators shown in Table 3-5. By a single value we mean a numeric quantity or a character string. It is
possible to construct other more complex queries using compound conditions using the Boolean operators AND, OR and
NOT.




The following example illustrates the use of the SELECT command.
   Example 3.12
   Recall the EMPLOYEE table from Example 2.8.


                ID          NAME           DEPT         TITLE
EMPLOYEE
                100         Smith       Sales        Clerk

                200         Jones       Marketing    Clerk

                300         Martin      Accounting   Clerk

                400         Bell        Accounting   Sr.
                                                     Accountant


Using the EMPLOYEE table, display the name and title of all the employees who work in the accounting department.

To retrieve this data from the EMPLOYEE table we use the following statement
                                                                                                                                     Page 93

SELECT name, title, dept ⇐ Columns to retrieve
FROM employee ⇐ Table from which to retrieve the data
WHERE dept = 'Accounting'; ⇐ Criterion to be satisfied

The resulting table is shown below.


NAME               TITLE               DEPT

Martin       Clerk                 Accounting

Bell         Sr. Accountant        Accounting


Notice that in the resulting table the attribute names and their corresponding values are displayed in the same order in
which they were listed in the SELECT statement. All the retrieved tuples satisfy the condition indicated in the WHERE
clause. That is, for any tuple t of the resulting relation, t(DEPT) = Accounting. Observe that the rows retrieved are not
sorted by alphabetical name. However, if we want to display the table with the names ordered in alphabetical order, we
can proceed as indicated in Example 3.13. Observe also that in the SELECT clause the attribute names are not case
sensitive. That is, we can write the attributes in either lower or upper case and obtain the same result. However, the
condition indicated in the WHERE clause requires some consideration. Since DEPT is a character column, the condition
has been enclosed in single quotes. In addition, we need to remember that character data is case sensitive. Had the
condition of the WHERE clause been written as DEPT= 'ACCOUNTING' then no tuple would have satisfied it. Observe
that the strings 'Accounting' and 'ACCOUNTING' are different strings.
   Example 3.13
   Display the result of the previous query in alphabetical order by the employee's name.

In this case, the SELECT statement needs to indicate to the RDBMS that the results need to be sorted in alphabetical
order. Since we want to sort the resulting table according to the attribute NAME, it is necessary to mention this attribute
in the ORDER BY clause. By default, the sorting of rows is done in ascending order5 according to the column or
columns that define the order, in this case, the attribute NAME. The SELECT statement to accomplish the desired result
is shown next.
   5 By ascending order, we mean from lower values to higher values according to the coalescence sequence of the ASCII characters.
                                                                                                                      Page 94

     SELECT name, title, dept
     FROM employee
     WHERE dept = 'Accounting'
     ORDER BY name;

The resulting table is shown here:




The SELECT statement allows the use of the asterisk as a wildcard character. The use of SELECT * is the same as
asking for all the columns of the table to be shown in the resulting chart.
     Example 3.14
     Display all the information for everyone in the EMPLOYEE table who is a clerk.

SELECT *
FROM employee
WHERE title = 'Clerk';


ID        NAME            DEPT           TITLE

100       Smith       Sales             Clerk

200       Jones       Marketing         Clerk

300       Martin      Accounting        Clerk


Once again the resulting table would not be displayed alphabetically unless we used the ORDER BY clause.

The SELECT statement can accomplish the Equijoin operation as explained in Chapter 2 by accessing columns from
two or more tables. As stated in Section 2.5.3, a join consists of all the tuples resulting from concatenating the tuples of
the first relation with the tuples of the second relation that have identical values for a common set of attributes. Recall
the second table, DEPARTMENT, from Example 2.8.
                                                                                                                                       Page 95


                             ID             DEPT            LOCATION
DEPARTMENT
                            100          Accounting         Miami

                            200          Marketing          New York

                            300          Sales              Miami


   Example 3.15
   Display all the information about the employees along with their department's ID, name and location. For this, you will need two tables,
   DEPARTMENT and EMPLOYEE.

SELECT department.id, department.dept, department.location,
     employee.id, employee.name, employee.title
FROM department, employee
WHERE department.dept = employee.dept;

This query requires the join of two separate tables, as evident in the FROM clause. The resulting chart from this query
would produce the same table below as shown in Example 2.8.


  DEPT       DEPARTMENT                LOCATION           EMPLOYEE             EMPLOYEE                TITLE
   ID           NAME                                         ID                  NAME

   100        Accounting               Miami                     300           Martin               Clerk

   100        Accounting               Miami                     400           Bell                 Sr.
                                                                                                   Accountant

   200        Marketing                New York                  200           Jones                Clerk

   300        Sales                    Miami                     100           Smith                Clerk


Since for a true join we only wanted the row for each employee matched with his or her department, we needed to use
the WHERE clause to connect columns in each table. If the WHERE clause had been omitted, the resulting chart would
have contained twelve rows, one for each row in DEPARTMENT matched with each row in EMPLOYEE. This
resulting table, shown below, is the Cartesian product of the two relations. This Cartesian product has 6 attributes, 3
(from EMPLOYEE) + 3 (from DEPARTMENT) = 6, and 12 tuples, 4 (from EMPLOYEE) * 3 (from DEPARTMENT)
= 12.
                                                                                                                                    Page 96

ID      DEPT              LOCATION          ID       NAME         TITLE
---     ----------        -----------       ---      ------       --------------
100     Accounting        Miami             100      Smith        Clerk
200     Marketing         New York          100      Smith        Clerk
300     Sales             Miami             100      Smith        Clerk
100     Accounting        Miami             200      Jones        Clerk
200     Marketing         New York          200      Jones        Clerk
300     Sales             Miami             200      Jones        Clerk
100     Accounting        Miami             300      Martin       Clerk
200     Marketing         New York          300      Martin       Clerk
300     Sales             Miami             300      Martin       Clerk
100     Accounting        Miami             400      Bell         Sr. Accountant
200     Marketing         New York          400      Bell         Sr. Accountant
300     Sales             Miami             400      Bell         Sr. Accountant


Remember to use caution when finding the Cartesian product of two tables because often some of the tuples make no
sense. For example, the first tuple shows that Smith is a Clerk in the Accounting department, 100, which is located in
Miami. The second tuple, however, says that Smith is a Clerk in Department 100, and the Marketing Department, 200, is
in New York. Ordinarily, one would have no use for that information.

3.3.1—
Set Operations in SQL

Section 2.6 explained the mathematical basis of set operations performed on relations. This section will demonstrate the
use of SQL to perform these operations. The first example is a union of two relations, or the set of all tuples in both
relations with no duplicate tuples listed. The UNION operator is shown in Fig. 3-8. Recall from the definition of union in
Chapter 2 that the tables must have the same structures.

SELECT *
FROM table_1
UNION
SELECT *
FROM table_2;



Fig. 3-8.
UNION operator in SQL.

   Example 3.16
   Recall these tables from Chapter 2. Write the SQL code that will perform the UNION of the two tables, or show all the programmers in
   the organization.
                                                                                                                            Page 97


C_PROGRAMMER

  Employee_Id         Last_Name         First_Name             Project                Department

    101123456           Venable             Mark            E-commerce             Sales Department

    103705430           Cordani              John             Firewall         Information Technology

    101936822           Serrano            Areant           E-commerce             Sales Department



JAVA_PROGRAMMER

  Employee_Id         Last_Name         First_Name             Project                Department

    101799332            Barnes             James         Web Application Information Technology

    101936822            Serrano           Areant            E-commerce            Sales Department


SELECT *
FROM c_programmer
UNION
SELECT *
FROM java_programmer;

The resulting chart demonstrates the union of the two tables. All the tuples from each relation are included with no
duplicate rows.

EMP_ID            LAST             FIRST        PROJECT                  DEPARTMENT
------------      ---------        -------      ---------------          -----------------------
101123456         Venable          Mark         E-commerce               Sales
101799332         Barnes           James        Web Application          Information Technology
101936822         Serrano          Areant       E-commerce               Sales
103705430         Cordani          John         Firewall                 Information Technology


Intersection of relations can also be performed in SQL. The intersection is the set of tuples present in both relations. The
SQL syntax is shown in Fig. 3-9.

SELECT *
FROM table_1
INTERSECT
SELECT *
FROM table_2;



Fig. 3-9.
INTERSECTION operator in SQL.

   Example 3.17
   Write the SQL code that will perform the INTERSECTION of the two programmer tables, or show which programmers can program in
   both C and JAVA.
                                                                                                                                 Page 98

SELECT *
FROM c_programmer
INTERSECT
SELECT *
FROM java_programmer;

The resulting chart shows that only one programmer is listed in both tables.

EMP_ID             LAST_NAME              FIRST_NAME              PROJECT                   DEPARTMENT
-----------        -------------          ---------------         ----------------          --------------
101936822          Serrano                Areant                  E-commerce                Sales


A third set operation explained in Chapter 2 is the DIFFERENCE between two relations, or the set of tuples contained in
the first that are not present in the second. The MINUS operator in SQL allows us to determine the rows that are present
in one table but not in another. Unlike the UNION and INTERSECT operators, the MINUS operator is not commutative.
That is, the result of table A MINUS table B is in general different than the result of table B MINUS table A. The syntax
for this operator is shown in Fig. 3-10.

SELECT *
FROM table_1
MINUS
SELECT *
FROM table_2;



Fig. 3-10.
DIFFERENCE operator in SQL.

   Example 3.18
   Write the SQL code that will perform the DIFFERENCE of the two programmer tables, or find all the C programmers that are not also
   JAVA programmers.

SELECT *
FROM c_programmer
MINUS
SELECT *
FROM java_programmer;

The resulting chart shows the tuples that were present in the C_PROGRAMMER table that were not also present in the
JAVA_PROGRAMMER table.

EMP_ID             LAST_NAME            FIRST_NAME           PROJECT               DEPARTMENT
-----------        -------------        ------------         -------------         ---------------------
101123456          Venable              Mark                 E-commerce            Sales
103705430          Cordani              John                 Firewall              Information Technology
                                                                                                                    Page 99

3.3.2—
Queries in MS Access

The screen for constructing queries in MS Access provides a way to select the columns from specific tables where
columns have specific names. It is even possible to sort the resulting chart. All this can be done without writing SQL
statements through the use of the query design view, shown in Fig. 3-11. The tables are shown in the top half of the
screen with all the attributes listed and the primary key indicated in bold font. The attributes selected to appear in the
resulting table and their order are shown in the bottom half. Sorts can be ascending or descending. Criteria to be used (as
the WHERE clause) can also be entered directly. Compound criteria will be demonstrated at the end of this chapter in
Solved Problems.




                                                          Fig. 3-11.
                                               Query design view in MS Access.

In Fig. 3-11, the resulting table would correspond to the following SELECT statement:
SELECT attribute_1, attribute_2
FROM sample_table
WHERE attribute_2 > 2
ORDER BY attribute_1;

In the design view of this query, choose View=>SQL View, and this statement will appear:

SELECT [Sample Table].[Attribute 1], [Sample Table].[Attribute 2]
FROM [Sample Table]
WHERE ((([Sample Table].[Attribute 2])>2))
ORDER BY [Sample Table].[Attribute 1];
                                                                                                                                  Page 100

Because MS Access allows the use of spaces in names, the names are enclosed in square brackets. For the sake of
clarity, the table name is always used to identify each column. This can be done in any SQL statement, but is usually
omitted except in statements that join two tables. See Example 3.15.
   Example 3.19
   Recall the Flex_Card table introduced earlier in the chapter in Example 3.3. Show the MS Access design view of the query to list the
   names of everyone who has less than $15 left on the card.




The fields listed in the lower portion of the design view are the only columns that will appear in the resulting chart. This
particular query would result in this chart:




   Example 3.20
   It is also possible to perform a join in MS Access queries. You can include columns from any number of related tables. Consider the
   DEPARTMENT and EMPLOYEE tables used in Example 3.15. Show the MS Access design view for the query that would display all
   the information about the employees along with their department's ID, name and location.
                                                                                                                  Page 101




Notice that both tables are shown in the upper section of the design view connected by a line. The line from
department.dept to employee.dept coincides with the WHERE clause from Example 3.15.
WHERE department.dept = employee.dept

Any of the tables in the database may be used in queries. It is important to connect the columns that you want to use for
the join process.

Performing other set operations in MS Access cannot be accomplished from the design view. SQL statements are
needed. Consult the MS Access Help or other MS Access books to find out how to perform these operations.

Solved Problems

3.1. What is the difference between the use of SQL in Personal Oracle and in MS Access?

Personal Oracle has an interactive, command line interface. A prompt waits for the SQL commands to be typed and then
the DBMS responds to the command. MS Access employs a graphical user interface through the use of dialog windows.
However, when constructing a query using the design view, it is always possible to see the SQL that is working in the
background through the use of menus, View=> SQL View.
                                                                                                                    Page 102

3.2. Tell whether these names are usually valid or invalid according to the SQL naming conventions. If invalid, explain
the reason.

    a. Database names: Parts1, Chicago_Office, Emp_data.

    b. Table names: Emp_data, All_the_books_I_want_to_read_in_the_world, 1_potato_2_potato.

    c. Attribute names: Letter_Grade, Grade%, Mom'sPhoneNumber.

a. Database names: Parts1 — valid; Chicago_Office — invalid in Oracle, as database names in Oracle should be 8
characters or less; Emp_data valid, but it sounds more like a table name. Databases contain many tables and usually
have more than one kind of related data.

b. Table names: Emp_data — valid; All the_books_I_want_to_read_in_the_world — invalid, as most names should be
limited to 30 characters. However, in MS Access, a name this long would be valid; 1_potato_2_potato — valid, as
letters, digits, and the underscore character can all be used.

c. Attribute names: Letter_Grade — valid; Grade% — invalid because of incorrect percent character;
Mom'sPhoneNumber — invalid because of apostrophe.

3.3. A flower vendor wants to market flowers that can be grown in a variety of zones. These zones have a range for the
lowest possible temperature during the year. Create the table ZONE with the attributes and assumptions indicated
below. Attributes: ID, the lowest possible low temperature, and the highest possible low temperature. Assumptions: the
ID will be the primary key and have one or two characters, the temperatures will be at most two digits and a possible
minus sign. Use unnamed constraints.
CREATE TABLE Zone
(
  ID        Char(2) PRIMARY KEY,
  LowerTemp Number(3),
  UpperTemp Number(3)
);

3.4. The same flower vendor wants to use a code to explain type of delivery. Create the table DELIVERY with the
attributes and assumptions indicated below. Attributes: ID, the category or type of delivery and the size of the delivery.
Assumptions: the ID will be the primary key and have one character, the category will be at most five characters (pot,
plant, hedge, shrub, tree) and the delivery size will be up to five digits with three decimal spaces. Use unnamed
constraints.

CREATE TABLE Delivery
(
 ID                    Char(1) PRIMARY KEY,
 Category              VARCHAR2(5),
 DelSize               Number(5,3)
);
                                                                                                               Page 103

3.5. The flower vendor wants to market certain types of flowers. Create the table FLOWERINFO with the attributes and
assumptions indicated below. Choose the most appropriate data types. Attributes: ID with three characters, common
name, Latin name, the coolest and hottest zones where it can be grown, the delivery category, and the sun needs.
Assumptions: The ID will be the primary key, the attribute common name may have up to thirty characters and the Latin
name up to twenty-five characters. The attributes coolest zone, hottest zone and delivery category will match the IDs
from other tables, and the sun needs will be up to five characters, S for Sun, SH for Shade, P for Partial sun and any
combination (StoP, StoSH, etc.). Use named constraints for this table for the primary key.

CREATE TABLE FlowerInfo
(
    ID                  Char(3) CONSTRAINT
                        flowerinfo_id_PK PRIMARY KEY,
 ComName                VARCHAR2(25),
 LatName                VARCHAR2(30),
 CZone                  Number,
 HZone                  Number,
 Delivered              Number,
 SunNeeds               VARCHAR2(5)
);


3.6. Show the design view for creating the FLOWERINFO table in MS Access. Be sure to indicate the primary key.
                                                                                                              Page 104

3.7. Write the code to insert into the ZONE table the data indicated below:

ID        LOWERTEMP      UPPERTEMP
--        ---------      ---------
2               –50            –40
3               –40            –30
4               –30            –20
5               –20            –10
6               –10              0
7                 0             10
8                10             20
9                20             30
10               30             40


INSERT INTO Zone (ID, LowerTemp, UpperTemp)
VALUES ('2',–50,–40);
INSERT INTO Zone (ID, LowerTemp, UpperTemp)
VALUES ('3',–40,–30);
INSERT INTO Zone (ID, LowerTemp, UpperTemp)
VALUES ('4',–30,–20);
INSERT INTO Zone (ID, LowerTemp, UpperTemp)
VALUES ('5',–20,–10);
INSERT INTO Zone (ID, LowerTemp, UpperTemp)
VALUES ('6',–10, 0);
INSERT INTO Zone (ID, LowerTemp, UpperTemp)
VALUES ('7', 0, 10);
INSERT INTO Zone (ID, LowerTemp, UpperTemp)
VALUES ('8', 10, 20);
INSERT INTO Zone (ID, LowerTemp, UpperTemp)
VALUES ('9', 20, 30);
INSERT INTO Zone (ID, LowerTemp, UpperTemp)
VALUES ('10', 30, 40);

Notice that the ID is character data and must be enclosed with single quotation marks. Numbers do not have quotation
marks.

3.8. Write the code to insert into the DELIVERY table the data indicated below:

ID     CATEG          DELSIZE
--     -----         --------
1      pot                1.5
2      pot               2.25
3      pot              2.625
4      pot               4.25
5      plant
6      bulb
7      hedge                18
8      shrub                24
9      tree                 36
                                                                                                                Page 105

INSERT INTO Delivery (ID, Category, DelSize)
VALUES ('1','pot', 1.5);
INSERT INTO Delivery (ID, Category, DelSize)
VALUES ('2','pot', 2.25);
INSERT INTO Delivery (ID, Category, DelSize)
VALUES ('3', 'pot',2.625);
INSERT INTO Delivery (ID, Category, DelSize)
VALUES ('4','pot',4.25);
INSERT INTO Delivery (ID, Category, DelSize)
VALUES ('5','plant',NULL );
INSERT INTO Delivery (ID, Category, DelSize)
VALUES ('6','bulb', NULL);
INSERT INTO Delivery (ID, Category, DelSize)
VALUES ('7','hedge', 18);
INSERT INTO Delivery (ID, Category, DelSize)
VALUES ('8','shrub', 24);
INSERT INTO Delivery (ID, Category, DelSize)
VALUES ('9', 'tree', 36);

Notice that in the required data, plant and bulb do not have any information in the DelSize column. Therefore, the value
inserted is NULL. Remember that NULL is not the same as zero.

3.9. Write the code to insert into the FLOWERINFO table the data indicated below:

ID COMNAME                        LATNAME                                CZONE HZONE DELIVER SUNNE
--- ---------------------- ------------------------------ ----- ----- ------- -----
101 Lady Fern                     Atbyrium filix-femina                       2       9         5 SH
102 Pink Caladiums                C.x bortulanum                             10      10         6 PtoSH
103 Lily-of-the-Valley            Convallaria majalis                         2       8         5 PtoSH
105 Purple Liatris                Liatris spicata                             3       9         6 StoP
106 Black Eyed Susan              Rudbeckia fulgida var. specios              4      10         2 StoP
107 Nikko Blue Hydrangea          Hydrangea macrophylla                       5       9         4 StoSH
108 Variegated Weigela            W. florida Variegata                        4       9         8 StoP
110 Lombardy Poplar               Populus nigra Italica                       3       9         9 S
111 Purple Leaf Plum Hedge        Prunus x cistena                            2       8         7 S
114 Thorndale Ivy                 Hedera belix Thorndale                      3       9         1 StoSH


INSERT INTO FlowerInfo(ID, ComName, LatName, CZone, HZone, Delivered,
SunNeeds)
VALUES ('101', 'Lady Fern', 'Atbyrium filix-femina',2, 9, 5, 'SH');
INSERT INTO FlowerInfo(ID, ComName, LatName, CZone, HZone, Delivered,
SunNeeds)
VALUES ('102', 'Pink Caladiums', 'C.x bortulanum',10, 10, 6, 'PtoSH');
INSERT INTO FlowerInfo(ID, ComName, LatName, CZone, HZone, Delivered,
SunNeeds)
                                                                                                                Page 106

VALUES ('103', 'Lily-of-the-Valley', 'Convallaria majalis',2, 8, 5,
'PtoSH');
INSERT INTO FlowerInfo(ID, ComName, LatName, CZone, HZone, Delivered,
SunNeeds)
VALUES ('105', 'Purple Liatris', 'Liatris spicata',3, 9, 6, 'StoP');
INSERT INTO FlowerInfo(ID, ComName, LatName, CZone, HZone, Delivered,
SunNeeds)
VALUES ('106', 'Black Eyed Susan', 'Rudbeckia fulgida var. specios',4, 10,
2, 'StoP');
INSERT INTO FlowerInfo(ID, ComName, LatName, CZone, HZone, Delivered,
SunNeeds)
VALUES ('107', 'Nikko Blue Hydrangea', 'Hydrangea macrophylla',5, 9, 4,
'StoSH');
INSERT INTO FlowerInfo(ID, ComName, LatName, CZone, HZone, Delivered,
SunNeeds)
VALUES ('108', 'Variegated Weigela', 'W. florida Variegata',4, 9, 8,
'StoP');
INSERT INTO FlowerInfo(ID, ComName, LatName, CZone, HZone, Delivered,
SunNeeds)
VALUES ('110', 'Lombardy Poplar', 'Populus nigra Italica',3, 9, 9, 'S');
INSERT INTO FlowerInfo(ID, ComName, LatName, CZone, HZone, Delivered,
SunNeeds)
VALUES ('111', 'Purple Leaf Plum Hedge', 'Prunus x cistena',2, 8, 7, 'S');
INSERT INTO FlowerInfo(ID, ComName, LatName, CZone, HZone, Delivered,
SunNeeds)
VALUES ('114', 'Thorndale Ivy', 'Hedera belix Thorndale',3, 9, 1, 'StoSH');

3.10. Write the SQL query and show the resulting table that lists the ID and common name of all the flowers that can
grow in zone 9. Remember that 9 can be the coolest zone or the hottest zone.
SELECT id, comname
FROM flowerinfo
WHERE czone = 9 OR hzone = 9;
ID COMNAME
--- ---------------
101 Lady Fern
105 Purple Liatris
107 Nikko Blue Hydrangea
108 Variegated Weigela
110 Lombardy Poplar
114 Thorndale Ivy

Remember that AND, OR and NOT can be used to create compound WHERE clauses.
                                                                                                                        Page 107

3.11. Show the MS Access design view to create the same query from the previous exercise.




In the design view, you can create compound conditions. Putting both conditions on the CRITERIA: line indicates the
AND relationship, while putting one of the conditions on the OR line will create the OR relationship. You can also use a
column for the WHERE condition without printing the column in the resulting query by removing the check from the
SHOW: box as seen above.

3.12. Write the query that would print out the entire DELIVERY table.
SELECT *
FROM delivery;

Recall that the asterisk (*) means to list all the columns. This command is a short cut to printing the entire table.

3.13. Write the query that will print the ID and common name of the flowers delivered in pots, along with the size of the
pot. Print the resulting table in alphabetical order of common name. NOTE: This query needs data from two tables. You
need to figure out how they will be connected.
SELECT flowerinfo.id, flowerinfo.comname, delivery.delsize
FROM flowerinfo, delivery
WHERE flowerinfo.delivered = delivery. id
       AND delivery.category = 'pot'
                                                                                                                 Page 108

ORDER BY flowerinfo.comname;
ID        COMNAME                                   DELSIZE
---       ------------------------                  -------
106       Black Eyed Susan                             2.25
107       Nikko Blue Hydrangea                         4.25
114       Thorndale Ivy                                 1.5



The WHERE clause of this query included the category 'pot' as well as the columns in each table that are connected,
flowerinfo.delivered and delivery.id.

3.14. Show the MS Access design view for the query in the previous example. Remember to connect the correct
columns.




Notice that in MS Access, sorting is indicated in the Sort: row and can be ascending or descending. Criteria including
text data must be enclosed in double quotation marks instead of single.

3.15. Write the SQL statement and the resulting table that gives the common name and the lowest possible temperature
for growing the flowers delivered as plants or bulbs. HINT: This query requires information from all three tables. The
WHERE clause is very complex. Be sure to use parentheses around the OR section.
                                                                                                                   Page 109

SELECT flowerinfo.comname, delivery.category, zone.lowertemp
FROM flowerinfo, zone, delivery
WHERE delivery. ID = flowerinfo.delivered AND
flowerinfo.czone = zone.id AND
(delivery.category = 'plant' OR delivery.category = 'bulb');
COMNAME                             CATEG       LOWERTEMP
-------------------------           -----       ---------
Lady Fern                           plant             –50
Lily-of-the-Valley                  plant             –50
Purple Liatris                      bulb              –40
Pink Caladiums                      bulb               30


When using AND and OR, AND is always executed first. Therefore, parentheses are needed to allow the results to pertain to
plants or bulbs. The connecting columns must use the AND to make the result a true join.

3.16. Show the MS Access design view to accomplish the query in the previous problem.




Notice that all the connecting information is accomplished using the lines in the upper section. OR criteria within the
same column can be on the Criteria line and the Or line, or it can be on the same line using the word "Or".

3.17. The flower company is discontinuing the sale of Lady Fern. Write the SQL statements to delete that tuple from the
table.
DELETE FROM flowerinfo
WHERE comname = 'Lady Fern';
                                                                                                                Page 110

3.18. The flower company is getting a new product, but they don't have all the information.

a. Insert this information into the table: ID is 104, common name is ''White Edged Hosta" and the Latin name is "Hosta
undulata."

b. Now the company has got the rest of the information. Update that row to include Czone = 3, Hzone = 8, Delivery = 5,
and Sun needed = PtoSH.

a. You can insert a row into the table without having all the information. The primary key must be included, but other
attributes may be ignored. In most RDBMs they will be treated as if the contents are NULL. The code to insert part of a
tuple looks like this.
   INSERT INTO FlowerInfo(ID, ComName, LatName)
   VALUES ('104', 'White Edged Hosta', 'Hosta undulata');

b. Updating the table by setting new values is the same as changing existing values. Use the UPDATE command. The
WHERE clause is included to specify which row is to be changed.

   UPDATE flowerinfo
   SET czone = 3, hzone = 8, delivered = 5, sunneeds = 'PtoSH'
   WHERE id = '104';

3.19. Look at the TRAVELER table and the RESORT table below.


TRAVELER

   Customer        Country

     Alton          Mexico

     Jones         England

     Russell         Spain



RESORT

  Country      Resort Location     Price

  Mexico           Cancun          1200

  England         Liverpool        1790

   Brazil       Rio de Janeiro     1790

   Spain          Marbella         2200


Write the SQL code to display the Cartesian product of the two tables.
SELECT *
FROM traveler, resort
                                                                                                                     Page 111

Examine the resulting table to see that this kind of join makes no sense in this situation. If Alton visited Mexico, the fact
that Liverpool is in England is irrelevant.

CUSTOMER         COUNTRY         COUNTRY         RESORTLOC              PRICE
-----------      ----------      ----------      --------------         -------
Alton            Mexico          Mexico          Cancun                 1200
Jones            England         Mexico          Cancun                 1200
Russell          Spain           Mexico          Cancun                 1200
Alton            Mexico          England         Liverpool              1790
Jones            England         England         Liverpool              1790
Russell          Spain           England         Liverpool              1790
Alton            Mexico          Brazil          Rio de Janeiro         1790
Jones            England         Brazil          Rio de Janeiro         1790
Russell          Spain           Brazil          Rio de Janeiro         1790
Alton            Mexico          Spain           Marbella               2200
Jones            England         Spain           Marbella               2200
Russell          Spain           Spain           Marbella               2200


3.20. Write the SQL code to display the true equijoin of the tables.
SELECT *
FROM traveler, resort
WHERE traveler.country = resort.country;

The resulting table shows that the information on the resort in Brazil never appears. For a true join, only the attributes
with matching values are considered.

CUSTOMER          COUNTRY         COUNTRY         RESORTLOC            PRICE
-----------       ----------      ----------      ------------         ---------
Alton             Mexico          Mexico          Cancun               1200
Russell           England         England         Liverpool            1790
Jones             Spain           Spain           Marbella             2200


3.21. Consider the two tables below, Golf Resorts and Beach Resorts.


GOLF

  Country     Resort Location      Price

     US          Greenbrier         2100

     US         Myrtle Beach        1400

  Mexico           Cancun           1200
                                                                                                                  Page 112


BEACH

  Country     Resort Location      Price

  Mexico           Cancun           1200

    US          Myrtle Beach        1400

   Brazil       Rio de Janeiro      1790

   Spain          Marbella          2200


Write the SQL code to list all the resorts, or perform the UNION of the two tables.
SELECT *
FROM golf
UNION
SELECT *
FROM beach;

The resulting chart shows all the resorts.

COUNTRY         RESORTLOC                 PRICE
----------      --------------           ------
Brazil          Rio de Janeiro             1790
Mexico          Cancun                     1200
Spain           Marbella                   2200
US              Greenbrier                 2100
US              Myrtle Beach               1400


3.22. Write the SQL code to display the resorts that are both golf and beach destinations, or the INTERSECTION of the
two tables.
SELECT *
FROM golf
INTERSECT
SELECT *
FROM beach;

The resulting table shows only Cancun and Myrtle Beach because they are the only resorts listed in both tables.
                                                                                                                  Page 113

3.23. Write the SQL code to display the beach resorts that are NOT also golf resorts, or the DIFFERENCE between the
beach and the golf resorts.
SELECT *
FROM beach
MINUS
SELECT *
FROM golf;

The resulting chart displays the resorts in Spain and in Brazil. If the query had asked for the golf resorts that were not
beach resorts, the two select statements would have been reversed. If the SELECT *FROM golf clause were first, then the
resulting chart would have displayed only Greenbrier.

Supplementary Problems

3.24. Tell whether these names are usually valid or invalid according to the SQL naming conventions. If invalid, explain
the reason.

a. Database names: Flowers, CansAndBoxes, Part_Num

b. Table names: Cars&Trucks, Shade_Flowers, Light Needed To Grow In To Tallest Possible

c. Attribute names: Card#, Zip Code, Amount_Due

3.25. A bookstore wants to stock mystery stories from particular publishers. Create the table PUBINFO with the
attributes and assumptions indicated below. Attributes: ID, name, and city. Assumptions: the ID will be the primary key
and have four characters. The publisher's name and city may be a maximum of thirty and fifteen characters respectively.
Use unnamed constraints.

3.26. To help the mystery bookstore, create the table BOOKINFO with the attributes and assumptions indicated below.
Attributes: ID, title, author, publisher ID and copyright year. Assumptions: the ID will be the primary key and have four
characters. The title and author will have thirty and twenty-five characters respectively. The publisher's ID will have
four characters. The copyright year will be an integer. Use named constraints for the primary key.

3.27. Show the MS Access design view to create the BOOKINFO table from the previous problem.
                                                                                                                    Page 114

3.28. Write the SQL to insert into the PUBINFO table the data indicated below.

ID         NAME                               CITY
------     ------------------------           -----------
AB01       Avon Books                         New York
MMC1       MacMillan Company                  New York
NAL1       New American Library               New York
PB01       Pocket Books                       New York
PNB1       Penguin Books                      Baltimore
SBS1       Scholastic Book Services           New York
WP01       World Publishing                   Cleveland


3.29. Write the SQL to insert into the BOOKINFO table the data indicated below.

ID       TITLE                                     AUTHOR                          PUBI        CYEAR
-----    -----------------------------             -----------------------         -----      ------
C200     Poirot Loses a Client                     Agatha Christie                 WP01         1937
D300     The Hound of the Baskervilles             Sir Arthur Conan Doyle          SBS1         1964
G600     Cosmopolitan Crimes                       Hugh Greene (ED)                PNB1         1971
J100     Lying in Wait                             J.A. Jance                      AB01         1994
L400     A Stitch in Time                          Emma Lathen                     MMC1         1968
Q500     The Player on the Other Side              Ellery Queen                    PB01         1963
Q501     Face to Face                              Ellery Queen                    NAL1         1967
S100     Strong Poison                             Dorothy L. Sayers               AB01         1930
S101     Have His Carcase                          Dorothy L. Sayers               AB01         1932
S102     Gaudy Night                               Dorothy L. Sayers               AB01         1936


3.30. Write the SQL code and show the resulting table to display the ID, title, author, and copyright year for all the
books published before 1950.

3.31. Write the SQL code and show the resulting table to display all the publishers which are not located in New York.

3.32. Show the MS Access Design View for the query in the previous problem.

3.33. Write the SQL code and show the resulting table to display the book title and the name and location of all the
publishers of books for books published after 1950.

3.34. Show the MS Access Design View for the query in the previous problem.

3.35. Write the SQL code to delete the J.A. Jance book from the table.

3.36. Instead of listing the location as "New York", the entry should include the state also, and be "New York, NY".
Write the SQL code to change the locations in the publishers table to include the state.
                                                                                                         Page 115

3.37. Look at the DOCTORS and NURSES tables below. Write the SQL code to display the Cartesian product of these
two tables. Examine the resulting chart to convince yourself that this particular join makes no sense.


DOCTORS

     Id         LastName          Department      Supervisor

     120          Silver          Cardiology       Dr. Jones

     727         Stanley          Cardiology       Dr. Sing

     982          Bartley           Pediatrics    Dr. Spresser



NURSES

     Id         LastName          Department      Supervisor

     930          Clinton           Pediatrics   Mrs. Alexander

     892         Alvarez          Cardiology      Ms. Hussain


3.38. Write the SQL code to display the equijoin of the DOCTORS and NURSES table.

3.39. Consider the tables for two sporting goods stores below.


Store 1

    Id        Name          Price

  00123     Basketball      125

  00343        Bike         550

  00489     Golf Clubs      980



Store 2

    Id        Name          Price

  00652      Football        99

  00123     Basketball      125

  00489     Golf Clubs      980
  00245        Tent        640


Write the SQL code to list all the products, or perform the UNION of the two tables.
                                                                                                                Page 116

3.40. Write the SQL code to display the resorts that are sold at both stores, or the INTERSECTION of the two tables.

3.41. Write the SQL code to display the items sold in store 2 that are NOT also sold in store 1, or the DIFFERENCE
between store 2 and store 1.

Answers to Supplementary Problems

3.24. Answers:

a. Database names: Flowers – valid; CansAndBoxes – invalid in Oracle because database names longer than 8
characters are not allowed; Part_Num – valid.

b. Table names: Cars&Trucks – invalid because ampersand is not allowed; Shade_Flowers – valid; Light Needed To
Grow In To Tallest Possible – valid in MS Access (with square brackets) but invalid elsewhere because it is longer than
30 characters and also contains spaces.

c. Attribute names: Card# – invalid because of pound sign (or hash); Zip Code – invalid because of space except in MS
Access with square brackets; Amount_Due – valid.

3.25. Code:

CREATE TABLE PubInfo
(
 ID           Char (4) PRIMARY KEY,
 Name         VARCHAR2(30),
 City         VARCHAR2(15)
);


3.26. Code:

CREATE TABLE BookInfo
(
    ID         Char(4) CONSTRAINT
                      bookinfo_id_PK PRIMARY KEY,
 Title         VARCHAR2(30),
 Author        VARCHAR2(25),
 PubID         Char(4),
 CYear         Number
);
                                                           Page 117

3.27. MS Access:




3.28. Code:
INSERT INTO PubInfo (ID, Name, City)
VALUES ('AB01', 'Avon Books', 'New York');
INSERT INTO PubInfo (ID, Name, City)
VALUES ('MMC1', 'MacMillan Company', 'New York');
INSERT INTO PubInfo (ID, Name, City)
VALUES ('NAL1', 'New American Library', 'New York');
INSERT INTO PubInfo (ID, Name, City)
VALUES ('PB01', 'Pocket Books', 'New York');
INSERT INTO PubInfo (ID, Name, City)
VALUES ('PNB1', 'Penguin Books', 'Baltimore');
INSERT INTO PubInfo (ID, Name, City)
VALUES ('SBS1', 'Scholastic Book Services', 'New York');
INSERT INTO PubInfo (ID, Name, City)
VALUES ('WP01', 'World Publishing', 'Cleveland');
                                                                             Page 118

3.29. Code:
INSERT INTO BookInfo (ID, title, author, pubid, cyear)
VALUES ('C200', 'Poirot Loses a Client', 'Agatha Christie', 'WP01', 1937);
INSERT INTO BookInfo (ID, title, author, pubid, cyear)
VALUES ('D300', 'The Hound of the Baskervilles', 'Sir Arthur Conan Doyle',
'SBS1', 1964);
INSERT INTO BookInfo (ID, title, author, pubid, cyear)
VALUES ('G600', 'Cosmopolitan Crimes', 'Hugh Greene (ED)', 'PNB1', 1971);
INSERT INTO BookInfo (ID, title, author, pubid, cyear)
VALUES ('J100', 'Lying in Wait', 'J.A. Jance', 'AB01', 1994);
INSERT INTO BookInfo (ID, title, author, pubid, cyear)
VALUES ('L400', 'A Stitch in Time', 'Emma Lathen', 'MMC1', 1968);
INSERT INTO BookInfo (ID, title, author, pubid, cyear)
VALUES ('Q500', 'The Player on the Other Side', 'Ellery Queen', 'PB01',
1963);
INSERT INTO BookInfo (ID, title, author, pubid, cyear)
VALUES ('Q501', 'Face to Face', 'Ellery Queen', 'NAL1', 1967);
INSERT INTO BookInfo (ID, title, author, pubid, cyear)
VALUES ('S100', 'Strong Poison', 'Dorothy L. Sayers', 'AB01', 1930);
INSERT INTO BookInfo (ID, title, author, pubid, cyear)
VALUES ('S101', 'Have His Carcase', 'Dorothy L. Sayers', 'AB01', 1932);
INSERT INTO BookInfo (ID, title, author, pubid, cyear)
VALUES ('S102', 'Gaudy Night', 'Dorothy L. Sayers', 'AB01', 1936);

3.30. Code:

         SELECT id, title, author, cyear
         FROM bookinfo
         WHERE cyear < 1950;


ID       TITLE                       AUTHOR                    CYEAR
-----    -------------------------   ---------------------   -------
C200     Poirot Loses a Client       Agatha Christie            1937
S100     Strong Poison               Dorothy L. Sayers          1930
S101     Have His Carcase            Dorothy L. Sayers          1932
S102     Gaudy Night                 Dorothy L. Sayers          1936


3.31. Code:

SELECT *
FROM pubinfo
WHERE city <> 'New York';


ID       NAME                 CITY
----     ------------------   ----------
PNB1     Penguin Books        Baltimore
WP01     World Publishing     Cleveland
                                                                           Page 119

3.32. MS Access:




3.33. Code:

     SELECT bookinfo.title, pubinfo.name, pubinfo.city
     FROM bookinfo, pubinfo
     WHERE bookinfo.pubid = pubinfo.id
        AND bookinfo.cyear > 1950;
TITLE                            NAME                        CITY
------------------------------   -------------------------   -----------
The Hound of the Baskervilles    Scholastic Book Services    New York
Cosmopolitan Crimes              Penguin Books               Baltimore
Lying in Wait                    Avon Books                  New York
A Stitch in Time                 MacMillan Company           New York
The Player on the Other Side     Pocket Books                New York
Face to Face                     New American Library        New York


3.34. MS Access:
                                                                                                     Page 120

3.35. Code:
      DELETE FROM bookinfo
      WHERE author = 'J.A. Jance';

3.36. Code:
      UPDATE pubinfo
      SET city = 'New York, NY'
      WHERE city = 'New York';

The resulting chart shows the update has been made:

ID            NAME                                    CITY
-------       ------------------------------          --------------
AB01          Avon Books                              New York, NY
MMC1          MacMillan Company                       New York, NY
NAL1          New American Library                    New York, NY
PB01          Pocket Books                            New York, NY
PNB1          Penguin Books                           Baltimore
SBS1          Scholastic Book Services                New York, NY
WP01          World Publishing                        Cleveland



3.37. Code:
      SELECT *
      FROM doctors, nurses;

Table:

ID       LASTNAME   DEPARTMENT     SUPERVISOR         ID    LASTNAME   DEPARTMENT   SUPERVISOR
---      --------   ----------     ------------       ---   --------   ----------   --------------
120      Silver     Cardiology     Dr. Jones          930   Clinton    Pediatrics   Mrs. Alexander
727      Stanley    Cardiology     Dr. Sing           930   Clinton    Pediatrics   Mrs. Alexander
982      Bartley    Pediatrics     Dr. Spresser       930   Clinton    Pediatrics   Mrs. Alexander
120      Silver     Cardiology     Dr. Jones          892   Alvarez    Cardiology   Ms. Hussain
727      Stanley    Cardiology     Dr. Sing           892   Alvarez    Cardiology   Ms. Hussain
982      Bartley    Pediatrics     Dr. Spresser       892   Alvarez    Cardiology   Ms. Hussain


3.38. Code:
      SELECT *
      FROM doctors, nurses
      WHERE doctors.department = nurses.department;
                                                                                               Page 121

Table:

ID       LASTNAME   DEPARTMENT   SUPERVISOR     ID    LASTNAME   DEPARTMENT   SUPERVISOR
---      --------   ----------   ------------   ---   --------   ----------   -------------
120      Silver     Cardiology   Dr. Jones      892   Alvarez    Cardiology   Ms. Hussain
727      Stanley    Cardiology   Dr. Sing       892   Alvarez    Cardiology   Ms. Hussain
982      Bartley    Pediatrics   Dr. Spresser   930   Clinton    Pediatrics   Mrs. Alexander


3.39. Code:

SELECT *
FROM store1
UNION
SELECT*
FROM store2;
ID            NAME                     PRICE
-------       --------------------    ------
00123         Basketball                 125
00245         Tent                       640
00343         Bike                       550
00489         Golf Clubs                 980
00652         Football                    99


3.40. Code:

SELECT *
FROM store1
INTERSECT
SELECT*
FROM store2;
ID         NAME                        PRICE
-----      ---------------------      ------
00123      Basketball                    125
00489      Golf Clubs                    980


3.41. Code:

SELECT *
FROM store2
MINUS
SELECT*
FROM store1;
ID         NAME                        PRICE
-----      ---------------------      ------
00245      Tent                          640
00652      Football                       99
                                                                                                                          Page 122




Chapter 4—
Functional Dependencies

4.1—
Introduction

In any relational database, controlling the redundancy and preserving the consistency of data are two of the most
important issues that any database designer or data administrator has to face. Data redundancy occurs when a piece of
data is stored in more than one place in the database. If the content of that piece of data is changed to a particular value,
then it is necessary to ensure that every copy of the same piece of data is changed to the same value. This piece of data
is said to be consistent in the database. If some, but not all, copies of this piece of data are changed to the same value,
the data is said to be inconsistent. A database is said to be in a consistent state if all its data is consistent. Otherwise it is
said to be in an inconsistent state. Since relations are the logical entities that store data in any RDBMS, to achieve the
goal of controlling data redundancy and maintaining its correctness and accuracy it is necessary to be aware of all
constraints that apply to the database relations.

One way to learn more about the different types of constraints imposed on all permissible data of a relation or set of
relations is through the use of functional dependencies (FDs). Functional dependencies arise naturally in many ways due
to requirements or restrictions that exist in the real world and that have to be captured by the database. In general, these
restrictions or constraints can be classified into two general groups: semantic constraints and agreement constraints.
Semantic constraints depend on the meaning or understanding of the attributes of a relation. For instance in an
EMPLOYEE relation no employee may have a negative salary or a negative age. Agreement or concordance
                                                                                                                                     Page 123

constraints do not depend on the particular values of the attributes of a tuple, but on whether or not tuples that agree on
certain attributes agree also in the values of some of their other attributes. For instance, consider the attributes
Department and Supervisor of an EMPLOYEE relation. If we assume that employees only work for one department,
that there is only one supervisor per department and that every department has a supervisor then two tuples with the
same value under the Supervisor column must have the same value under the Department column. Functional
dependencies are the most important of the agreement or concordance constraints. We will consider this topic next.

4.2—
Definition of Functional Dependencies

Given a relation r(R) and two sets of its attributes A and B. We will say that attribute(s) A functionally determines
attribute(s) B with respect to r, denoted by A ⇒ B, if and only if for any two tuples t1 and t2 of r whenever t1(A) = t2(A)
then t1(B) = t2(B). That is, if A functionally determines B, then whenever two tuples of r have identical values in column
A their respective values in column B must also be identical. If the relation r is understood, we will just say that A
functionally determines B. In the notation A ⇒ B, attribute A, the left-hand side of the functional dependency, is called
the determinant; attribute B is called the right-hand side of the functional dependency. If A ⇒ B (with respect to a
relation r), we will say the relation r ''satisfies the functional dependency" or that the "functional dependency is satisfied
by the relation". Observe that in the definition given above, both A and B have been defined as sets of attributes and not
necessarily as single attributes. In other words, A and B may be composite attributes. When more than one attribute are
explicitly indicated in a functional dependency, it is customary to use concatenation to stand for set union between sets
of operators. That is, in the functional dependency AB ⇒ X, AB is shorthand for A ∪ B. In addition, the notation A
B is used to denote that a set of attributes A does not functionally determine a set of attributes B. Functional
dependencies where the right-hand side consists of only one attribute are called simple FDs.
   Example 4.1
   Given the Lakes-Of-The-World relation shown below, state whether or not the functional dependencies (a) Continent ⇒ Name and (b)
   Name ⇒ Length are satisfied by this relation. Assume that the Area attribute is measured in square miles and that the Length attribute
   is measured in miles.1

   1 Reference: The World Almanac and Book of Facts 2000, World Almanac Books.
                                                                                                                     Page 124


Lakes-Of-The-World

     Name           Continent        Area       Length

  Caspian Sea      Asia-Europe      143244        760

   Superior      North America       31700        350

    Victoria          Africa         26828        250

   Aral Sea            Asia          24904        280

     Huron       North America       23000        206

   Michigan      North America       22300        307

  Tanganyika          Africa         12700        420


a. The functional dependency Continent ⇒ Name is not satisfied by the relation. We can verify this because according
to the definition of functional dependency, if Continent ⇒ Name, then for any two tuples of the relation that have the
same value under the Continent attribute their values under the Name attribute must also be the same. For example, in
the Lakes-Of-The-World relation consider the following tuples:

t1: (Superior, North America, 31700, 350) and t2: (Huron, North America, 23000 206).

Notice that

t1(Continent) = t2(Continent) = North America but
t1(Name) = Superior ≠ t2(Name) = Huron.

Since these two tuples agree on their values under the Continent attribute but not on their values under the Name
attribute, we have that Continent    Name.

b. The functional dependency Name ⇒ Length is satisfied by the relation. In this case, the relation is obviously satisfied
because for any given lake there is only one length associated with it.

The reader should keep in mind that determining whether or not an attribute functionally determines another attribute is
based only on the meaning of the attributes. In this sense, functional dependencies can be considered assertions about
the real world that should hold at any point in time. That is, they should be true for all instances of the relation. Since
functional dependencies depend on the semantics of their attributes they should not be inferred from the current content
of a relation. That is, we cannot look at the current content of a relation and based on the values of the attributes A and B
decide that A ⇒ B. Notice also that from the definition of functional dependency (FD) and the previous discussion it is
always possible to determine if a given functional dependency is
                                                                                                                                       Page 125

or is not satisfied by an instance of a relation. However, it is not valid to infer functional dependencies from a particular
instance of a relation without first taking into account the meaning of the intervening attributes. The Satisfies algorithm
shown below can be used to determine if a relation r satisfies or does not satisfy a given functional dependency A ⇒ B.
The input to the algorithm is a given relation r and a functional dependency A ⇒ B. The output of the algorithm is True
if r satisfies A ⇒ B; otherwise the output is False.

The Satisfies Algorithm2

(1) Sort the tuples of the relation r on the A attribute(s) so that tuples with equal values under A are next to each other.

(2) Check that tuples with equal values under attribute(s) A also have equal values under attribute(s) B.

(3) If any two tuples of r meet condition 1 but fail to meet condition 2 the output of the algorithm is False. Otherwise,
the relation satisfies the functional dependency and the output of the algorithm is True.
   Example 4.2
   Using the relation of the previous example, apply the Satisfies algorithm to show that the attribute Continent does not determine the
   attribute Name.




   2 Adapted from The Theory of Relational Databases by D. Maier, Computer Science Press, 1983.
                                                                                                                                 Page 126

After sorting the tuples of the relation on the Continent attribute, notice that the use of the algorithm makes it obvious
that the relation does not satisfy the functional dependency that is Continent ⇒ Name. The output of the algorithm is
False.

4.3—
Functional Dependencies and Keys

Given a relation r(R) and its primary key K, for any particular value of K we can always determine whether or not there
is a tuple in the relation with that K value. In addition, if the tuple is present in the relation we can not only uniquely
identify the tuple but also the value of any of its attributes. Using the notion of functional dependency we can say that
the key K functionally determines any attribute of the relation. That is, K ⇒ Ai where Ai is any set of attribute(s) of the
relation. Since keys are particular cases of FDs all properties that are true for FDs are also valid for keys. Some of these
properties are considered in the next and following sections. As we indicated in Chapter 2, Section 2.3, we call prime
attributes any set of attributes that comprises a PK or an alternate key.

4.4—
Inference Axioms for Functional Dependencies

A relation r may satisfy more than one set of functional dependencies. In theory, it is possible to use the Satisfies
algorithm with all possible combinations of attributes of the relation r to determine which FDs are satisfied by the
relation. Although this method may indicate all FDs that are satisfied by the relation, from a practical point of view, it is
obviously a tedious and time-consuming task. The inference axioms offer an alternate method that allows us to infer the
FDs that are satisfied by a relation without the use of any algorithm. Given a set F of FDs, the inference axioms are a set
of rules that tell us that if a relation satisfies the FDs of F the relation must satisfy certain other FDs. The latter set of
FDs that the relation must satisfy are said to be derived or logically deduced from the FDs of F.

The inference axioms are said to be complete and sound. By complete we mean that, given a relation r(R) and a set F of
functional dependencies satisfied by r, the axioms allow us to derive all valid functional dependencies that are satisfied
by r. By sound we mean that if the axioms are correctly applied they cannot derive false dependencies.

Assume that r(R) is a relation and that X, Y, Z and W are subsets of R. The set of inference axioms3 is shown below. We
have enclosed in parentheses the most common name or names for each of the individual axioms. Whenever two or
more names are listed we will generally use the first one in the list.
   3 This set of axioms is sometimes called Armstrong's Axioms after W. W. Armstrong who initially proposed a set of somewhat similar

   axioms.
                                                                                                                     Page 127


Inference Axioms

(1)     If Y ⊆ X, then X ⇒ Y (Reflexivity*)

(2)     If X ⇒ Y, then XW ⇒ Y and/or XW ⇒ YW (Augmentation*)

(3)     If X ⇒ Y and Y ⇒ Z, then X ⇒ Z (Transitivity)

(4)     If X ⇒ Y and YW ⇒ Z, then XW ⇒ Z (Pseudotransitivity*)

(5)     If X ⇒ Z and X ⇒ Y, then X ⇒ YZ (Additivity or Union)

(6)     If X ⇒ YZ, X ⇒ Y and X ⇒ Z (Projectivity or Decomposition)

*This axiom is considered a basic axiom. Any other inference rule can be derived from a set that
contains all the basic axioms.


Notice that when there are more than one attribute in either the left or right or both sides of a functional dependency the
order in which these attributes are written is immaterial since the union set operation is commutative. That is, AB ⇒ CD
can be written as AB ⇒ DC or BA ⇒ DC or BA ⇒ CD without altering the meaning of the functional dependency.

The axiom of Reflexivity indicates that given a set of attributes the set itself functionally determines any of its own
subsets. As a particular case of this axiom we have that X ⇒ X for any set of attributes X. This is an immediate
consequence of X ⊂ X. Functional dependencies of the form X ⇒ Y where Y ⊂ X are called trivial dependencies.

The axiom of Augmentation indicates that we can augment or enlarge the left side of an FD or both sides conveniently
with one or more attributes. Notice that the axiom does not allow augmenting the right-hand side alone.

The axiom of Transitivity indicates that if one attribute uniquely determines a second attribute and this, in turn, uniquely
determines a third one, then the first attribute determines the third one.

The axiom of Pseudotransitivity is a generalization of the Transitivity axiom (see Supplementary Problem 4.16). Notice
that for this axiom to be applied it is required that the entire right-hand side of a FD appears as attribute(s) of the
determinant of another FD.

The axiom of Additivity indicates that if there are two FDs with the same determinant it is possible to form a new FD
that preserves the determinant and has as its right-hand side the union of the right-hand sides of the two FDs.

The axiom of Projectivity or Decomposition is the inverse of the additivity axiom. This axiom indicates that the
determinant of any FD can uniquely determine any individual attribute or any combination of attributes of the right-hand
side of the FD.

The reader should keep in mind that the inference axioms allow us to discover new FDs that are present or satisfied by a
relation even if they are not explicitly stated. For example, if a relation r satisfies X ⇒ Y and Y ⇒ Z it also satisfies X
⇒ Z even if the latter FD is not explicitly indicated as being satisfied by the relation.
                                                                                                                               Page 128

As indicated before, the set of inference axioms allows us to derive new functional dependencies from a given set of
FDs. The next example illustrates the use of the inference axioms and how they are applied to derive FDs.
   Example 4.3
   Given the set F = {A ⇒ B, C ⇒ X, BX ⇒ Z} derive AC ⇒ Z using the inference axioms. Assume that all these attributes belong to a
   relational scheme R not shown here.

(1) With A ⇒ B (given) and BX ⇒ Z (given) and by application of the axiom of Pseudotransitivity we have that AX ⇒
Z. Notice that we were able to apply this axiom because the attribute B appears on the right-hand side of a functional
dependency and on the left-hand side of another as required by the Pseudotransitivity axiom.

(2) Using AX ⇒ Z (from the previous step) and C ⇒ X (given) and by application of the Pseudotransitivity axiom we
have that AC ⇒ Z.

Example 4.3 illustrates the notion of logical implication between functional dependencies. In fact, this result shows that
if a relation r satisfies the functional dependencies of the set F given above then it must satisfy the functional
dependency AC ⇒ Z. We can formalize this concept as follows: Given a set F of functional dependencies of a relational
scheme R, and a functional dependency X ⇒ Y. We say that F logically implies X ⇒ Y, denoted by F X ⇒ Y, if
every relation r(R) that satisfies the dependencies in F also satisfies X ⇒ Y.
   Example 4.4
   Given F = {A ⇒ B, C ⇒ D} with C ⊂ B, show that F      A ⇒ D.

(1) Knowing that C ⊂ B and using the axiom of Reflexivity we have that B ⇒ C.

(2) Using A ⇒ B (given) and B ⇒ C (from the previous step) and by application of the Transitivity axiom we have that
A ⇒ C.

(3) From A ⇒ C (from step 2) and C ⇒ D (given) and by application of the Transitivity axiom we have that A ⇒ D.

Since A ⇒ D can be derived from the set of FDs of F then F             A ⇒ D.

4.5—
Redundant Functional Dependencies

Given a set F of FDs, a functional dependency A ⇒ B of F is said to be redundant with respect to the FDs of F if and
only if A ⇒ B can be derived from the set of FDs F – {A ⇒ B}. That is, if A ⇒ B can be derived from the FDs of F not
including A ⇒ B. Redundant functional dependencies, as their name indicates, are extra and unnecessary and can be
safely removed from the set F. If the set
                                                                                                                       Page 129

F of FDs is understood, we will say that the functional dependency A ⇒ B is redundant. Eliminating redundant
functional dependencies allows us to minimize the set of FDs. The concept of minimality will be further explored in
Section 4.6.4. Determining which FDs are redundant in a given set can be a tedious and long process, particularly when
there are a large number of FDs in the set. The Membership algorithm shown below provides us with a more systematic
procedure to determine redundant FDs; however, the algorithm is still lengthy if applied to a large number of FDs. The
input to this algorithm is a set F of FDs and a particular FD of F that is being tested for redundancy. This algorithm is
shown next.

The Membership Algorithm

Assume that F is a set of functional dependencies with A ⇒ B ∈ F. To determine if A ⇒ B is redundant with respect to
the other FDs of the set F proceed as follows:

(1) Remove temporarily A ⇒ B from F and initialize the set of functional dependencies G to F. That is, set G = F – {A
⇒ B}. If G ≠ ∅ proceed to step 2; otherwise stop executing the algorithm since A ⇒ B is nonredundant.

(2) Initialize the set of attributes Ti (with i = 1) with the set of attribute(s) A (the determinant of the FD under
consideration). That is, set Ti = T1 = {A}. The set T1 is the current Ti.

(3) In the set G, search for functional dependencies X ⇒ Y such that all the attributes of the determinant X are elements
of the current set Ti. There are two possible outcomes to this search:

(3-a)
If such functional dependency is found, add the attributes of Y(the right-hand side of the FD whose determinant is in Ti)
to the set Ti and form a new set Ti+1 = Ti ∪ Y. The set Ti+1 is now the current Ti.

    Check if all the attributes of B (the right-hand side of the functional dependency under consideration) are members
of Ti+1. If this is the case, stop executing the algorithm because the FD: A ⇒ B is redundant. If not all attributes of B are
members of Ti+1, remove X ⇒ Y from G and repeat step 3.

(3-b)
If G = ∅ or there are no FDs in G that have all the attributes of its determinant in the current Ti then A ⇒ B is not
redundant.

As indicated before, if a functional dependency A ⇒ B ∈ F is found to be redundant, we can remove it permanently
from the set F.

The following example illustrates the use of the Membership algorithm.
                                                                                                                         Page 130

   Example 4.5
   Given the set F = {X ⇒ YW, XW ⇒ Z, Z ⇒ Y, XY ⇒ Z}, determine if the functional dependency XY ⇒ Z is redundant in F.

Step (1)
Temporarily remove the functional dependency XY ⇒ Z from the set F.



Step (2)
Initialize a set of attributes T1 with the attribute(s) of the determinant of the FD under consideration. In this particular
case, since XY is the determinant of XY ⇒ Z, we have that T1 = {XY}.

Step (3/3-a)
In the set G, look for functional dependencies such that all the attributes of their determinants are elements of the set T1.
Notice that the determinant of X ⇒ YW is an element of T1. That is, X ∈ T1. Adding to T1 the attributes that appear on
the right-hand side of this FD we form the new set shown below.



Since Z, the right-hand side of XY ⇒ Z is not an element of T2 (Z ∉ T2) remove X ⇒ YW from G. Set G = {XW ⇒ Z,
Z ⇒ Y} and repeat step 3.

Step (3/3-a)
(2nd time)
Observe now that all the attributes of the determinant of XW ⇒ Z are elements of T2. Adding the attribute of the right-
hand side of this FD to the set T2 produces a new set T3 = T2 ∪{Z} = {XYWZ}. Since Z ∈ T3 the algorithm stops and
XY ⇒ Z is a redundant FD. That is, XY ⇒ Z can be safely removed from F

To verify that XY ⇒ Z is redundant, we need to exclude this FD from F before attempting to derive it from the FDs of F
using the inference axioms.



a. Using X ⇒ YW (given) and by application of the Projectivity axiom we have that X ⇒ Y and X ⇒ W.

b. With X ⇒ W (from step a) and XW ⇒ Z (given) and by application of the Pseudotransitivity axiom we obtain XX ⇒
Z.

c. Since the concatenation of attributes is equivalent to their union we have that X ∪ X = X. Using this result and
rewriting the determinant of the functional dependency of step b, we obtain X ⇒ Z.

Therefore, the functional dependency XY ⇒ Z is redundant because we have shown that it can be derived from the FDs
of F.
                                                                                                                                  Page 131

4.6—
Closures, Cover and Equivalence of Functional Dependencies

Given a set F of FDs we are interested in determining all the FDs that can be logically implied by F. The set of all FDs
that can be logically implied from F sees its most important application in the normalization process of relations (see
Chapter 5). The following subsections provide the definitions and algorithms to generate a set of FDs or to test if a given
set F of FDs implies a particular FD.

4.6.1—
Closure of a Set F of Functional Dependencies

Given a set F of functional dependencies for a relation scheme R, we define F+, the closure of F, to be the set of all
functional dependencies that are logically implied by F. In mathematical terms, F+ = {X ⇒ Y/F X ⇒ Y}. The closure
set satisfies the two following properties simultaneously:

(1) F+ is the smallest set that contains F and satisfies property 2.

(2) Any application of the inference axioms to the FDs of F only produces FDs that are already in F+.

The following example illustrates this concept.
   Example 4.6
   Given set F = {XY ⇒ Z} determine all the elements of F+. Assume that the scheme is comprised by all attributes mentioned in the FDs
   of F.

To generate all FDs that can be derived from F we proceed as follows: First, apply the inference axioms to all single
attributes. Second, apply the inference axioms to all combinations of two attributes and use the functional dependencies
of F whenever it is applicable. Next apply the inference axioms to all combinations of three attributes and use the FDs of
F when necessary. Proceed in this fashion for as many different attributes as there are in F. The resulting set is shown
below.

F+ = {X ⇒ X, Y ⇒ Y, Z ⇒ Z, XY ⇒ X, XY ⇒ Y, XY ⇒ XY, XZ ⇒ X, XZ ⇒ Z,
XZ ⇒ XZ, YZ ⇒ Y, YZ ⇒ Z, YZ ⇒ YZ, XYZ ⇒ XY, XYZ ⇒ XZ,
XYZ ⇒ YZ, XYZ ⇒ XYZ}
                                                                                                                           Page 132

4.6.2—
Closure of a Set of Attributes

As the previous example illustrates, the number of elements in F+ can be considerably larger than the number of
attributes of F Notice that F. only has one FD but F+ has 16 different FDs.

For any given functional dependency X ⇒ Y, F+ can be used to determine whether or not F X ⇒ Y; however, the
computation of F+ can be a very lengthy process. To simplify this task we can use an alternate method that consists of
finding X+, the closure of the set of attributes X under F. This concept can be formally defined as follows:

Given a set of attributes X and a set F of functional dependencies, the closure of the set of attributes X under F, written
as X+, is the set of attributes A that can be derived from X by applying the inference axioms to the functional
dependencies of F. The closure of X is always a nonempty set because X ⇒ X by the axiom of Reflexivity. Whenever
the set F of functional dependencies is understood we will refer to X+ as the closure of X. Notice that we are assuming
that X and all the attributes of the FDs of F are defined over the same scheme R.

The reader may wonder if there is any relationship between the FDs that can be derived from X and the FDs of F+ that
have X as the determinant. In fact, if X+ = {A1 A2 A3 . . . An} then, by definition of the closure of X, any attribute of this
set can be derived from X. That is, X ⇒ A1, X ⇒ A2, X ⇒ A3, . . ., X ⇒ An. Using these FDs and by repeated
application of the axiom of additivity, we can form the FD X ⇒ A1 A2 A3 . . . An that has in its right-hand side all
attributes Ai ∈ X+. The right-hand side of this production turns out to be a maximal set of attributes in F+ with respect to
the attributes that can be derived from X. That is, if X ⇒ Z ∈ F+ then Z ⊂ A1A2A3 . . . An. Observe that in this inclusion
statement the set on the right-hand side is nothing more than X+. This result provides us with a criterion to determine
whether or not F X ⇒ Y for a given X ⇒ Y. In fact, to verify that F X ⇒ Y it is only necessary to show that Y ∈
X +.

To calculate X+ systematically we can use an algorithm that somewhat resembles the Membership Algorithm. We will
call this algorithm the Closure Algorithm.

The Closure Algorithm

The input to this algorithm is a set F of FDs and a set of attributes X defined over the same scheme. The output of the
algorithm is X+.

(1) Initialize a set G of FDs with the attributes of F. That is, set G = F.

(2) Initialize the set of attributes Ti (with i = 1) with the attributes of X. That is, set Ti = T1 = {X}. The set T1 is the
current Ti.
                                                                                                                           Page 133

(3) In the set G, look for functional dependencies X ⇒ Y such that all the attributes of the determinant X are elements of
the current set Ti. There are two possible outcomes to this search:

(3-a)
If such functional dependency is found, add the attributes of Y to the set Ti to form the set Ti+1 = Ti ∪ Y and remove X
⇒ Y from G since its right-hand side no longer contributes new attributes to future Tis. Ti+1 is now the current Ti. Repeat
step 3.

(3-b)
If G = ∅ or there are no FDs in G with all the attributes of their determinants as elements of Ti stop the execution of the
algorithm.
When the algorithm finishes the current set Ti has all the attributes that can be derived from X. That is, Ti = X+. The
following example illustrates this.
   Example 4.7
   Given the set of functional dependencies F = {A ⇒ B, B ⇒ C, BC ⇒ D, DA ⇒ B} find X+ where X = {A}. What is the meaning of
   this set? Is it true that A ⇒ DA?

Step (1)
Set G = {A ⇒ B, B ⇒ C, BC ⇒ D, DA ⇒ B}.

Step (2)
Set Ti = T1 = {A}.

Step (3/3-a)
Since the determinant of A ⇒ B is an element of T1 we form T2 = T1 ∪{B} = {AB}. We can remove A ⇒ B from G
since it can no longer contribute any of the attributes of its right-hand side to future Tis. We are now working with the
following set G = {B ⇒ C, BC ⇒ D, DA ⇒ B}. Repeat step 3.

Step (3/3-a)
(2nd time)
With this new set G we find that the determinant of B ⇒ C is now an element of T2. Adding the attributes of the right-
hand side of this FD to T2 we form a new T3 = T2 ∪ {C} = {ABC}. Removing B ⇒ C from G we now have that G = BC
⇒ D, DA ⇒ B }. Repeat step 3.

Step (3/3-a)
(3rd time)
Considering T3 we find that the determinant of BC ⇒ D is an element of this set. Adding the attributes of the right-hand
side of this functional dependency to T3 we have that T4 = T3 ∪ {ABC} ∪ {D} = {ABCD}. Removing BC ⇒ D from G
we now have that G = {DA ⇒ B}. Repeat step 3.

Step (3/3-a)
(4th time)
Considering T4 we find that the determinant of DA ⇒ B is an element of this set. Adding the attributes of the right-hand
side of this functional dependency to T4 we have that T5 = T4 ∪ {ABC} ∪ {B} = {ABCD}. Removing DA ⇒ B from G
we now have that G = ∅. Repeat step 3.

Step (3/3-b)
(1st time)
Since G = ∅ the algorithm stops and the current Ti = T5 = {ABCD}. = X+.
                                                                                                                    Page 134

This result indicates that the attribute A may be the determinant of an FD that has as its right-hand side any of the
individual attributes of X+ or any combination of attributes of this set.

Attributes AD are elements of X+, therefore it is true that A ⇒ DA. We can verify this as shown below. The set of FDs
is F = {A ⇒ B, B ⇒ C, BC ⇒ D, DA ⇒ B}.

(1) With A ⇒ B (given) and B ⇒ C (given) we obtain A ⇒ C (Axiom of Transitivity)

(2) Using A ⇒ B (given) and BC ⇒ D (given) we obtain AC ⇒ D (Axiom of Pseudotransitivity)

(3) With AC ⇒ D (from step 2) and A ⇒ C (from step 1) we have AA ⇒ D (Axiom of Pseudotransitivity)

(4) Knowing that A ∪ A = A and using the convention that concatenation stands for union, we can rewrite the FD
obtained in the previous step as A ⇒ D

(5) Knowing that A ⇒ A (Axiom of Reflexivity) and A ⇒ D (from step 4) we have that A ⇒ AD (Axiom of Additivity)

Therefore, it is true that A ⇒ DA.

4.6.3—
Covers and Equivalence of Set of Functional Dependencies

As we indicated before, for a given set F of FDs, the set F+ may contain a large number of FDs. This is particularly true
for any set F that also has a large number of FDs. Therefore, it is desirable to be able to find sets that contain smaller
number of FDs than F and still generate all the FDs of F+. Sets of FDs that satisfy this condition are said to be equivalent
sets. We can formalize this definition as follows:

Given two sets F and G of FDs defined over the same relational scheme. We will say that F and G are equivalent if and
only if F+ = G+. We will indicate that F and G are equivalent sets by writing F ≡ G. Whenever F+ = G+, we will say that
F covers G and vice versa. If G covers F and no proper subset4 H of G is such that H+ = G+ we say that G is a
nonredundant cover of F.

The algorithm to find a nonredundant cover G is shown below. The input to this algorithm is a set F of FDs; the output
is a nonredundant cover for F.
   4 H is a proper subset of F if and only if H ⊂ F and F ≠ H.
                                                                                                                 Page 135

The Nonredundant Cover Algorithm

(1) Initialize G to F. That is, set G = F.

(2) Test every FD of G for redundancy using the Membership Algorithm of Section 4.5 until there are no more FDs of G
to be tested.

(3) The set G is a nonredundant cover of F.

The reader should keep in mind that for a given set F there may be more than one nonredundant cover since the order in
which the FDs are considered is relevant. In other words, the presence or absence of particular FDs may determine
whether or not other FDs become redundant. In addition, if we can find a nonredundant cover, this cover may not be
minimal. That is, there may be some other nonredundant covers with fewer FDs. An additional basic type of minimality
is covered in Section 4.6.4. However, advanced issues of minimality of covers are out of the scope of this book and will
not be considered here.
    Example 4.8
    Find a nonredundant cover G for the set F = {X ⇒ YZ, ZW ⇒ P, P ⇒ Z, W ⇒ XPQ, XYQ ⇒ YW, WQ ⇒ YZ}.

(1) Set G = F.

(2) a. Test X ⇒ YZ for redundancy. G = {ZW ⇒ P, P ⇒ Z, W ⇒ XPQ, XYQ ⇒ YW, WQ ⇒ YZ}
T1 = {X}. No FD of G has all the attributes of its determinant in T1. Therefore, X ⇒ YZ is nonredundant. Notice that
{YZ} ⊄ T.
b. Test ZW ⇒ P for redundancy. G = {X ⇒ YZ, P ⇒ Z, W ⇒ XPQ, XYQ ⇒ YW, WQ ⇒ YZ}
T1 = {ZW}. The determinant of W ⇒ XPQ has all its attributes in T1.
Therefore T2 = T1 ∪ {XPQ} = {ZWXPQ}. Since P, the right-hand side of ZW ⇒ P, is an element of T2, we have that
ZW ⇒ P is redundant and can be safely removed from the set G.
c. Test P ⇒ Z for redundancy. G = {X ⇒ YZ, W ⇒ XPQ, XYQ ⇒ YW, WQ ⇒ YZ}
T1 = {P}. No FD has all the attributes of its determinant in T1. Therefore, P ⇒ Z is nonredundant. Notice that {Z} ⊄ T1.
d. Test W ⇒ XPQ for redundancy. G = {X ⇒ YZ, P ⇒ Z, XYQ ⇒ YW, WQ ⇒ YZ}
T1 = {W}. No FD has all the attributes of its attributes in T1. Therefore, W ⇒ XPQ is nonredundant. Notice that {XPQ}
⊄ T1.
e. Test XYZ ⇒ YW for redundancy. G = {X ⇒ YZ, P ⇒ Z, W ⇒ XPQ, WQ ⇒ YZ}
T1 = {XYZ}. The determinant of X ⇒ YZ has all its attributes in T1.
Therefore, T2 = T1 ∪ {YZ} = {XYZ}. No other FD has all the attributes of its determinant in T2. Therefore, XYZ ⇒
YW is nonredundant. Notice that {YW} ⊄ T2.
                                                                                                                        Page 136

    f. Test WQ ⇒ YZ for redundancy. G = {X ⇒ YZ, P ⇒ Z, W ⇒ XPQ, XYQ ⇒ YW}
T1 = {WQ}. The determinant of W ⇒ XPQ has all its attributes in T1. Therefore, T2 = T1 ∪ {XPQ} = {WQXP}. The
determinant of X ⇒ YZ is an element of T. Therefore, T3 = T2 ∪ {YZ} = {WQXPYZ}. Since the right-hand side of WQ
⇒ YZ has all its attributes in T3, we have that WQ ⇒ YZ is redundant and it can be removed from the set G.

(3) There are no more FDs of G that can be tested, therefore, the nonredundant cover of F is the set G = {X ⇒ YZ, P ⇒
Z, W ⇒ XPQ, XYQ ⇒ YW}.

4.6.4—
Extraneous Attributes

If F is a nonredundant set of FDs then F cannot be made smaller by removing any of its FDs. If we were to do so, the
resulting set would no longer be equivalent to F. However, it may be possible to reduce the size of the FDs of F by
removing either extraneous left attributes with respect to F or extraneous right attributes with respect to F. These two
concepts can be formalized as follows: Let F be a set of FDs over scheme R and let A1 A2 ⇒ B1B2 be a functional
dependency in F. Attribute A1 is an extraneous left attribute in A1 A2 ⇒ B1 B2 with respect to F if and only F ≡ F – {A1
A2 ⇒ B1 B2}∪ {A2 ⇒ B1 B2}. In other words, attribute A1 is an extraneous left attribute in A1 A2 ⇒ B1 B2 if the attribute
A1 can be removed from the determinant of the FD: A1 A2 ⇒ B1B2 without changing the closure of F. Likewise, we can
define B1 as being an extraneous right attribute in the FD: A1 A2 ⇒ B1 B2 if and only if F ≡ F – {A1 A2 ⇒B1 B2} ∪ {A1
A2 ⇒ B2}. In other words, attribute B1 is an extraneous right attribute in A1 A2 ⇒ B1 B2 with respect to F if and only if
the attribute B1 can be removed from the right-hand side of the FD: A1 A2 ⇒ B1 B2 without changing the closure of F. If
the set F is understood, we will refer to extraneous attributes as either extraneous right attributes or extraneous left
attributes. Functional dependencies that have no extraneous left attributes are called left-reduced FDs. Likewise,
functional dependencies that have no extraneous right attributes are called right-reduced FDs. If all FDs of F are left-
reduced the set F is said to be a left-reduced set. Likewise, if all FDs of F are right-reduced the set F is said to be a right-
reduced set. In this book, we will only consider left-reduced FDs because, from a practical point of view, they are the
most useful.

The algorithm for removing extraneous left attributes is shown below. The input to this algorithm is a set F of FDs. The
output of the algorithm is a left-reduced cover for G.
                                                                                                                       Page 137

The LeftReduce Algorithm

(1) Initialize a set G of FDs to F. That is, set G = F.

(2) For every A1 A2 . . . Ai. . . . An ⇒ Y in G do step 3 until there are no more FDs in G to which this step can be applied.
The algorithm stops when all FDs of G have executed step 3.

(3) For each attribute Ai in the determinant of the FD selected in the previous step do step 4 until all attributes have been
tested. After finishing testing all attributes of a particular FD repeat step 2.

(4) Test if all attributes of Y (the right-hand side of the FD under consideration) are elements of the closure of A1 A2 . . .
An (notice that we have removed attribute Ai from the determinant of the FD) with respect to the FDs of G. If this is the
case remove attribute Ai from the determinant of the FD undergoing testing because Ai is an extraneous left attribute. If
not all attributes of Y are elements of the closure of A1 A2 . . . An then attribute Ai is not an extraneous left attribute and
should remain in the determinant of the FD under consideration.

When the algorithm finishes the set G contains a left-reduced cover set for T.

Note: The algorithm can be executed a little bit faster if the reader realizes that step 2 can only be applied to FDs with a
determinant of two or more attributes.

The following example illustrates the use of this algorithm.
    Example 4.9
    Reduce the set F = {X ⇒ Z, XY ⇒ WP, XY ⇒ ZWQ, XZ ⇒ R} by removing extraneous left attributes.



There is no need to consider FDs with determinants that consist of a single attribute since there cannot be extraneous left
attributes.

Step (1)
Set G = {X ⇒ Z, XY ⇒ WP, XY ⇒ ZWQ, XZ ⇒ R}

Step (2)
1st time
Select XY ⇒ WP and do step 3. [We need to repeat this step for all FDs in G.]

Steps (3–4)
1st time
From the previous FD choose one attribute of the determinant. Let's choose X and test if the right-hand side of Y ⇒ WP
is in the closure of Y with respect to G. The closure of Y+ = {Y}. Since {WP} ⊄ Y+, the X attribute is not an extraneous
left attribute.

Steps (3–4)
2nd time
Choosing the Y attribute of the determinant of the FD: XY ⇒ WP and testing if the right-hand side of X ⇒ WP is in the
closure of X with respect to G, we have that X+ = (XZR). Since {WP} ⊄ X+, the Y attribute is not an extraneous left
attribute.

Step (2)
2nd time
Select XY ⇒ ZWQ and do step 3.
                                                                                                                   Page 138

Steps (3–4)
1st time
From the previous FD choose one attribute of the determinant. Let's choose X and test if the right-hand side of Y ⇒
ZWQ is in the closure of Y with respect to G. The closure of Y+ = {Y}. Since {ZWQ} ⊄ Y+, the X attribute is not an
extraneous left attribute.

Steps (3–4)
2nd time
Choosing the Y attribute of the determinant of XY ⇒ ZWQ and testing if the right-hand side of X ⇒ ZWQ is in the
closure of X with respect to G, we have that X+ = (XZR). Since {ZWQ}⊄ X+, the Y attribute is not an extraneous left
attribute.

Step (2)
3rd time
Select XZ ⇒ R

Steps (3–4)
1st time
From the previous FD choose one attribute of the determinant. Let's choose X and test if the right-hand side of Z ⇒ R is
in the closure of Z with respect to G. The closure of Z+ = {Z}. Since {R} ⊄ Z+, the X attribute is not an extraneous left
attribute.

Steps (3–4)
2nd time
Choosing the Z attribute of the determinant of the FD: XZ ⇒ R and testing if the right-hand side of X ⇒ R is in the
closure of X with respect to G, we have that X+ = (XZR). Since {R} ⊂ X+, the X attribute is an extraneous left attribute.
Therefore, this attribute can be removed from the FD.

   Since there are no more FDs to be tested in the set G, we have that a left-reduce cover for F is G = {X ⇒ Z, XY ⇒
   WP, XY ⇒ ZWQ, X ⇒ R}.

4.6.5—
Canonical Cover

For a given set F of FDs, a canonical cover, denoted by Fc, is a set of FDs where the following conditions are
simultaneously satisfied:

(1) Every FD of Fc is simple. That is, the right-hand side of every functional dependency of Fc has only one attribute.

(2) Fc is left-reduced.

(3) Fc is nonredundant.

   Example 4.10
   Given the set F of FDs shown below, find a canonical cover for F. Let's call
   Fc = {X ⇒ Z, XY ⇒ WP, XY ⇒ ZWQ, XZ ⇒ R}.

From the previous exercise we know that a left-reduced cover for set F is Fc = {X ⇒ Z, XY ⇒ WP, XY ⇒ ZWQ, X ⇒
R}. By repeated application of the Projectivity axiom, we can rewrite this set as follows:

Fc = {X ⇒ Z, XY ⇒ W, XY ⇒ P, XY ⇒ Z, XY ⇒ W, XY ⇒ Q, X ⇒ R}.
                                                                                                                      Page 139

Notice that in this set, XY ⇒ Z is redundant. Observe that we can derive that FD from X ⇒ Z (given) and by
application of the Axiom of Augmentation. Therefore, XY ⇒ Z can be eliminated from Fc. In addition, since F is a set
we can eliminate all its duplicate FDs and obtain Fc = {X ⇒ Z, XY ⇒ W, XY ⇒ P, XY ⇒ Q, X ⇒ R}. This resulting
set where all FDs are simple, left-reduced and nonredundant, is the canonical cover of F.

Solved Problems

4.1. Given the relation r(R) shown below. State whether or not the following functional dependencies are satisfied by the
relation.

    a. A ⇒ B     b. A ⇒ C       c. AB ⇒ C      d. C ⇒ A       e. BC ⇒ A      f. AC ⇒ B


r

    A       B        C

    1       4        2

    3       5        6

    3       4        6

    7       3        8

    9       1        0


a. FD: A ⇒ B is not satisfied by r because for tuples (3,5,6) and (3,4,6) we have that t1(A) = 3 = t2(A) but t1(B) = 5 ≠ t2
(B) = 4.

b. FD: A ⇒ C is satisfied by all tuples of r that have unique values under column A. These tuples are said to satisfy the
FD vacuously. In addition, the only two tuples that have equal values in column A also have equal values under column
C. That is, t1(A) = 3 = t2(A) and t1(C) = 6 = t2(C). The relation r satisfies the FD: A ⇒ C because all its tuples satisfy the
FD.

c. FD: AB ⇒ C is satisfied by the relation r. There are no tuples with equal entries under columns A and B. All tuples
satisfy the FD vacuously. Therefore, r satisfies the given FD.

d. FD: C ⇒ A is satisfied by the relation r. In fact, t1(C) = 6 = t2(C) and t1(A) = 3 = t2(A). The remaining tuples of the
relation satisfy the FD vacuously.

e. FD: BC ⇒ A is satisfied by the relation r. All tuples satisfy the FD vacuously.

f. FD: AC ⇒ B is not satisfied by the relation r. Consider the following two tuples where t1(AC) = (3,6) = t2(AC) but t1
(B) = 5 ≠ t2(B) = 4.
                                                                                                                        Page 140

4.2. Show that inference rule ''if AB ⇒ C and C ⇒ A then C ⇒ B" is invalid for any relation r(R). Assume that A, B, C,
D are all attributes of a relational scheme not shown here.

To disprove the validity of this or any given inference rule we only need to construct a 2-tuple relation r that satisfies
AB ⇒ C and C ⇒ A but not C ⇒ B. An instance of a relation r that disproves this inference rule is:


r

    A     B       C       D

    a1    b1      c1      d1

    a1    b2      c1      d2


Notice that AB ⇒ C is satisfied vacuously by the relation r because the values under attributes AB are different. In
addition, notice that C ⇒ A is satisfied by the relation because t1(C) = t2(C) = c1 and t1(A) = t2(A) = a1. However, C ⇒ B
is not satisfied by the relation because t1(C) = t2(C) = cl but t1(B) = b1 ≠ t2(B) = b2.

4.3. Assume that conditions 1 and 2 shown below are satisfied simultaneously by a relation r(X,Y,Z), what can we say
about the cardinality of πY(σX=x(r))?

    (1) X ⇒ Y is satisfied by r
(2) σX=x(r) is a nonempty relation.

Without loss of generalization, let's assume that X and Y are single attributes, that X ⇒ Y is not vacuously satisfied by
all tuples of r and that every tuple of r has a value under attribute Y. According to the definition of Selection, σX=x(r))
will retrieve all tuples of r that have an X-value = x. That is, all tuples of r that have an x under the attribute X. Since X
⇒ Y all tuples of σX=x(r)) that have equal X-values must also have equal Y-values. Therefore, the Projection of σX=x(r))
onto the attribute Y will have a single tuple. If we denote the cardinality of a relation as |r| , then using this notation, we
can say that |πY(σX=x(r)) | = 1. If we assume that σX=x(r)) may be empty then 0 ≤ |πY(σX=x(r)) | ≤ 1.

4.4. Assume that AB ⇒ C, C ⇒ D and D ⇒ A are simultaneously satisfied by a relation r(R). What are the candidate
keys of this relation? Which one is the PK? What are the prime attributes? Are there any superkeys for this relation?

A set of attributes of r is a candidate key of r if and only if the set functionally determines every attribute of the relation.
In this particular example, any candidate key must functionally determine attributes A, B, C, and D. The set of attributes
that can be selected as candidate keys of the relation r are: AB and DB. Let's see why.

AB is a candidate key (The given FDs are: AB ⇒ C, C ⇒ D and D ⇒ A)

If AB is a key of r then it must be true that AB ⇒ A, AB ⇒ B, AB ⇒ C and AB ⇒ D. Using the inference axioms and
the FDs of F we have that:

(1) AB ⇒ A and AB ⇒ B (Reflexivity axiom)
(2) AB ⇒ C (given)
(3) AB ⇒ C (given) and C ⇒ D (given) then AB ⇒ D (Transitivity axiom).
                                                                                                                      Page 141

Therefore, AB is a candidate key of the relation r because it functionally determines any other attribute of the relation r.

DB is a candidate key (The given FDs are: AB ⇒ C, C ⇒ D and D ⇒ A)

If DB is a key of r then it must be true that DB ⇒ A, DB ⇒B, DB ⇒ C and DB ⇒ D. Using the inference axioms and
the FDs of F we have that:

(1) DB-D and DB ⇒ B (Reflexivity axiom)
(2) DB ⇒ D (previous step) and D ⇒ A (given) we have that DB ⇒ A (Transitivity axiom)
(3) DB-A (from previous step) and AB ⇒ C (given) then DBB ⇒ C (Pseudotransitivity axiom)
(4) Knowing that concatenation stands for union and that B ∪ B = B we can rewrite DBB ⇒ C as DB ⇒ C.

Therefore, DB is a candidate key of the relation r because it functionally determines all other attributes of the relation r.

Notice that there are two candidate keys. However, only one can be selected as the PK of the relation. The database
designer or the DBA should choose the one that makes more sense or is more convenient for the application.

The prime attributes of this relation are: A, B and D. Remember that a prime attribute is any attribute that is part of a PK
or an alternate key.

There are several superkeys. They are: ABC, ABD, ABCD, DBA, DBC and DBAC.

4.5. Given the relational scheme R(A,B,C,D) and the FDs A ⇒ B and BC ⇒ D. Determine which of the dependencies
shown below can be derived from these FDs by application of the inference axioms.

a. AC ⇒ D       b. B ⇒ D     c. AD ⇒ B

a. AC ⇒ D can be derived from A ⇒ B and BC ⇒ D by application of the Pseudotransitivity axiom.

b. B ⇒ D cannot be derived from the given FDs. Notice that from the given BC ⇒ D we cannot deduce that B ⇒ D.
The following instance of r confirms this.


A       B     C      D

a1      b1    c1     d1

a2      b1    c2     d2


     Observe that in this instance BC ⇒ D but B      D.

c. AD ⇒ B can be immediately derived from A ⇒ B by an application of the Augmentation axiom. Notice that this
axiom states that if we only need A to determine B then having extra information, in this case, D, does not change the
fact that we only need A to determine B. Attributes such as D are sometimes called redundant attributes.

4.6. Show that the axiom of Transitivity is a particular case of the Pseudotransitivity axiom.

If W = ∅ in the Pseudotransitivity axiom (X ⇒ Y and YW ⇒ Z, then XW ⇒ Z) we can rewrite this axiom as follows:
if X ⇒ Y and Y∅ ⇒ Z, then X∅ ⇒ Z. Since concatenation stands for union and X ∪ ∅ = X for any set X, we have that
if X ⇒ Y and Y ⇒ Z, then X ⇒ Z.
                                                                                                                   Page 142

4.7. Given the relation r(A,B,C) and the set F = {AB ⇒ C, B ⇒ D, D ⇒ B} of functional dependencies, find the
candidate keys of the relation. How many candidate keys are in this relation? What are the prime attributes?

AB and AD are the two candidate keys of this relation. That is, either one of these two sets of attributes functionally
determines any other attribute in the relation.

AB is a candidate key
(1) AB ⇒ A and AB ⇒ B (Reflexivity axiom)
(2) AB ⇒ C (given)
(3) AB ⇒ B (from step 1) and B ⇒ D (given) then AB ⇒ D (Transitivity axiom)

Since AB determines every other attribute of the relation we have that AB is a candidate key.

AD is a candidate key
(1) AD ⇒ A and AD ⇒ D (Reflexivity axiom)
(2) AD ⇒ D (from previous step) and D ⇒ B (given) then AD ⇒ B (Transitivity axiom)
(3) AD ⇒ B (from previous step) and AB ⇒ C (given) then AAD ⇒ C (Pseudotransitivity axiom). Keeping in mind
that concatenation stands for union and A ∪ A = A, we can rewrite AAD ⇒ C as A ⇒ C.

Since AD determines every other attribute in the relation we have that AD is a candidate key.

The prime attributes are: A, B, and D.

4.8. Given F = { XY⇒W, Y ⇒ Z, WZ ⇒ P, WP ⇒ QR, Q ⇒ X} show that F                  XY ⇒ P using the inference axioms.

    (1) XY ⇒ W (given) and WZ ⇒ P (given) we have XYZ ⇒ P (Pseudotransitivity axiom)
(2) XYZ ⇒ P (from previous step) and Y ⇒ Z (given) we have XYY ⇒ P (Pseudotransitivity axiom). Since
concatenation stands for union and Y ∪ Y = Y, we can rewrite the last FD as follows: XY ⇒ P.

4.9. Given the set F of FDs of the previous exercise, show that F    XY ⇒ P using (XY)+.

Step (1)
G = {XY ⇒ W, Y ⇒ Z, WZ ⇒ P, WQ ⇒ QR, Q ⇒ X}

Step (2)
T1 = {XY}

Steps (3/3-a)
All attributes of the determinant of XY ⇒ W are members of T1. Therefore, we form a new set T2 by adding to T1 the
right-hand side of this FD. Therefore, T2 = T1 ∪ {W} = {XYW}. G = G – (XY ⇒ W} = {Y ⇒ Z, WZ ⇒ P, WQ ⇒ QR,
Q ⇒ X }.

Steps (3/3-a)
(2nd time)
The determinant of Y ⇒ Z is a member of T2, therefore, T3 = T2 ∪ {Z} = {XYWZ}. G = G – (Y ⇒ Z} = {WZ ⇒ P,
WQ ⇒ QR, Q ⇒ X}.

Steps (3/3-a)
(3rd time)
Observe now that all the attributes of the determinant of WZ ⇒ P are members of T3. Therefore, T4 = T3 ∪ {P} =
{XYWZP}. G = G – (WZ ⇒ P} = {WQ ⇒ QR, Q ⇒ X}.

Step (3/3-b)
There are no FDs in G that have all their attributes as elements of T4. Therefore, the algorithm terminates and (XY)+ =
{XYZWP}. Since P, the right-hand side of XY ⇒ P is a member of (XY)+ this implies that we can derive P from the
attributes XY using the inference axioms.
                                                                                                                Page 143

Another way of showing that XY ⇒ P using the inference axioms is as follows:

                               F = {XY ⇒ W, Y ⇒ Z, WZ ⇒ P, WP ⇒ QR, Q ⇒ X}

    (1) Y ⇒ Z (given) therefore XY ⇒ Z (Augmentation axiom)
(2) XY ⇒ Z (from previous step) and WZ ⇒ P (given) we have WXY ⇒ P (Pseudotransitivity axiom)
(3) WXY ⇒ P (from previous step) and XY ⇒ W (given) we have that XYXY ⇒ P (Pseudotransitivity axiom)
(4) XYXY ⇒ P can be rewritten as XY ⇒ P knowing that concatenation stands for union, that the union of set is
commutative and X ∪ X = X and Y ∪ Y = Y.

4.10. Eliminate redundant FDs from F = {X ⇒ Y, Y ⇒ X, Y ⇒ Z, Z ⇒ Y, X ⇒ Z, Z ⇒ X} using the membership
algorithm.

Testing X ⇒ Y for redundancy (X ⇒ Y has been temporarily removed from F)

Step (1)
G = {Y ⇒ X, Y ⇒ Z, Z ⇒ Y, X ⇒ Z, Z ⇒ X}

Step (2)
T1 = {X}

Steps (3/3-a)
The determinant of X ⇒ Z is an element of T1. Adding the right-hand side of this FD to T1 we have that T2 = T1 ∪ {Z}=
{XZ}. Notice that Y ∉ T2. Therefore, removing X ⇒ Z from G we have that G = G – {X ⇒ Z} = {Y ⇒ X, Y ⇒ Z, Z ⇒
Y, Z ⇒ X}.

Steps (3/3-a)
(2nd time)
The determinant of Z ⇒ Y is an element of T2. Therefore, T3 = T2 ∪ {Y} = {XZY}. Since Y ∈ T3 we have that X ⇒ Y
is redundant in the set G and can be safely removed from it.

Testing Y ⇒ X (Y ⇒ X has been temporarily removed from F)

Step (1)
G = {Y ⇒ Z, Z ⇒ Y, X ⇒ Z, Z ⇒ X}

Step (2)
T1 = {Y}

Steps (3/3-a)
The determinant of Y ⇒ Z is an element of T1. Therefore, T2 = T1 ∪} = {YZ}. G = {Z ⇒ Y, X ⇒ Z, Z ⇒ X.

Steps (3/3-a)
(2nd time)
The determinant of Z ⇒ X is now an element of T2. Therefore, T3 = T2 ∪ {X} = {YZX}. Since the right-hand side of the
FD that we are testing, Y ⇒ X, is an element of T3 we can conclude that Y ⇒ X is redundant and can be safely removed
from the set G. This new set is then G = {Y ⇒ Z, Z ⇒ Y, X ⇒ Z, Z ⇒ X}.

Testing Y ⇒ Z (Y ⇒ Z has been temporarily removed from F)

Step (1)
G = {Z ⇒ Y, X ⇒ Z, Z ⇒ X}

Step (2)
T1 = {Y}

Steps (3/3-b)
None of the FDs of G has all their attributes as elements of T1. Therefore, Y ⇒ Z is nonredundant.

Testing Z ⇒ Y (Z ⇒ Y has been temporarily removed from F)

Step (1)
G = {Y ⇒ Z, X ⇒ Z, Z ⇒ X}

Step (2)
T1 = {Z}

Steps (3/3-a)
The determinant of Z ⇒ X is an element of T1. Therefore, T2= T1 ∪ {X} = {ZX}. Removing Z ⇒ X from G we have
that now G = {Y ⇒ Z, X ⇒ Z}.
                                                                                                           Page 144

Steps (3/3-a)
(2nd time)
The determinant of X ⇒ Z is an element of T2. Therefore, T3 = T2 ∪ {Z} = {ZX}. Removing Z ⇒ Y from G produces a
new set G = Y ⇒ Z}.

Steps (3/3-b)
None of the FDs of G has all their attributes as elements of T3. Therefore, Z ⇒ Y is nonredundant.

Testing X ⇒ Z (X ⇒ Z has been temporarily removed from F)

Step (1)
G = {Y ⇒ Z, Z ⇒ Y, Z ⇒ X}

Step (2)
T1 = {X}

Step (3)
None of the FDs of G has all their attributes as elements of T1. Therefore, X ⇒ Z is nonredundant.

Testing Z ⇒ X (Z ⇒ X has been temporarily removed from F)

Step (1)
G = {Y ⇒Z, Z ⇒ Y, X ⇒ Z}

Step (2)
T1 = {Z}

Steps (3/3-a)
The determinant of Z ⇒ Y has all its attributes in T1. Therefore, T2 =T1 ∪ {Y} = {ZY}. Removing Z ⇒Y from G
produces a new G = {Y ⇒ Z, X ⇒ Z}.

Steps (3/3-a)
The determinant of Y ⇒ Z has all its attributes in T2. Therefore, T3 = T2 ∪ {Z} = {ZY}. Removing Y ⇒ Z from G we
have G = {X ⇒ Z}.

Steps (3/3-b)
None of the FDs of G has all their attributes as elements of T1. Therefore, Z ⇒ X is nonredundant.

The nonredundant set F is as follows: = {Y ⇒ Z, Z ⇒ Y, X ⇒ Z, Z ⇒ X}.

4.11. Reduce the set F = {X ⇒ YW, XW ⇒ Z, Z ⇒ Y, XY ⇒ Z} by removing left extraneous attributes.

No need to consider FDs with single determinants.

Step (1)
Set G = {X ⇒ YW, XW ⇒ Z, Z ⇒ Y, XY ⇒ Z}

Step (2)
(1st time)
Select XW ⇒ Z and do step 3. [We need to repeat this step for all FDs of G.]

Steps (3–4)
(1st time)
From the determinant of the previous FD let's choose attribute X and test if Z ∈ (W)+ with respect to G.
(W)+ = {W}. Since {Z} ⊄ (W)+ we have that the attribute X is not an extraneous attribute.
Step (2)
(2nd time)
From the determinant of XW ⇒ Z, let's choose attribute W and test if Z ∈ (X)+ with respect to G. Since (X)+ =
{XYWZ} and {Z} ⊂ (X)+ we have that attribute W is an extraneous left attribute and can be removed from the
determinant of XW ⇒ Z.

Step (2)
(1st time)
Select XY ⇒ Z. The new set G = {X ⇒ YW, X ⇒ Z, Z ⇒ Y, XY ⇒ Z}.

Steps (3-4)
(1st time)
From the determinant of XY ⇒ Z let's choose attribute X and test if {Z} ⊂ (Y)+. Since (Y)+ = {Y} we have that {Z} ⊂
(Y)+. Therefore, attribute X is not an extraneous left attribute.

Steps (3-4)
(2nd time)
From the determinant of XY ⇒ Z let's choose attribute Y and test if {Z} ⊂ (X)+. In this case, (X)+ = {XYWZ}.
Therefore, {Z} ⊂ (X)+. Attribute Y is an extraneous left attribute and can be removed from XY ⇒ Z.

The algorithm stops executing since there are no more FDs in G that can be tested. After removing duplicate FDs, the
set F = {X ⇒ YW, X ⇒ Z, Z ⇒ Y} is a left-reduced set.
                                                                                                                    Page 145

4.12. Transform the left reduced set of the previous example to a canonical cover for F.

To obtain a canonical cover for F, it is necessary that all FDs be simple. That is, that all FDs of F must have a single
attribute in their right-hand sides. Using the Projectivity axiom we can rewrite F as follows: F = {X ⇒ Y, X ⇒ W, X ⇒
Z, Z ⇒ Y}. X ⇒ Y is a redundant FD since it can be derived from X ⇒ Z and Z ⇒ Y using the Transitivity axiom.
Eliminating X ⇒ Y from F we have that Fc = {X ⇒ W, X ⇒ Z, Z ⇒ Y}.

Supplementary Problems

4.13. For each of the FDs shown below give an instance of a relation r(R) that shows that these FDs are not valid
inference rules.

    a. If A ⇒ B then B ⇒ A b. If AB ⇒ C then A ⇒ C
    c. If AB ⇒ C then B ⇒ C

4.14. Assume that there is a set of FDs that satisfy a relation r(A,B,C). An instance of this relation is shown below. Find
the functional dependencies that are satisfied by r.


r

    A       B         C

    f        e        e

    d        e        e

    b        c        e

    a        c        d

    a        b        c


4.15. Find the candidate keys for the relation r(X, Y, Z, W, P) if all FDs of the set F = {Y ⇒ Z, Z ⇒ Y, Z ⇒ W, Y ⇒
P} hold for all instances of r.

4.16. Using the inference axioms show that F     XY ⇒ Q where F = {XY ⇒ W, Y ⇒ Z, WZ ⇒ P, WP ⇒ QR, Q ⇒
X}.

4.17. Using (XY)+ show that F XY ⇒ Q where F = {XY ⇒ W, Y ⇒ Z, WZ ⇒ P, WP ⇒ QR, Q ⇒ X. Find a
derivation for XY ⇒ Q using the inference axioms. Make sure that this derivation is different than the one obtained in
the previous problem.
                                                                                                                  Page 146

4.18. Remove any extraneous left attributes from F = {A ⇒ BC, E ⇒ C, D ⇒ AEF, ABF ⇒ BD}.

4.19. Find a canonical cover for the set F of the previous example.

Answers to Supplementary Problems

4.13. a. The given FD is not a valid inference rule as the instance shown below indicates. Notice that A ⇒ B but it is not
true that B ⇒ A.


r

    A       B

    a1      b1

    a2      b1


b. The given FD is not a valid inference rule as the instance shown below indicates. Observe that AB ⇒ C holds true
but A ⇒ C does not.


r

    A       B        C

    a1      b1       c1

    a1      b2       c2


c. The given FD is not a valid inference rule as the instance shown below indicates. Notice that AB ⇒ C holds true but
B ⇒ C does not.


r

    A       B        C

    a1      b1       c1

    a2      b1       c2
                                                                                                             Page 147

4.14. AB ⇒ C and AC ⇒ B are the only FDs satisfied by the relation r.

4.15. XY and XZ are the only candidate keys of the relation r.

4.16. a. From WZ ⇒ P (given) and WP ⇒ QR (given) results WWZ ⇒ QR (Pseudotransitivity axiom). The latter FD
can be rewritten as WZ ⇒ QR (concatenation stands for union and W ∪ W = W)
b. From WZ ⇒ QR (previous step) and Y ⇒ Z (given) results WY ⇒ QR (Pseudotransitivity axiom)
c. From WY ⇒ QR (previous step) and XY ⇒ W (given) results XYY ⇒ QR (Pseudotransitivity axiom). The latter FD
can be rewritten as XY ⇒ QR (concatenation stands union and Y ∪ Y = Y)
d. From XY ⇒ QR (previous result) results XY ⇒ Q (Projectivity axiom)

4.17. (XY)+ = {XYWZPQR}. Q ∈ (XY)+, therefore F         XY ⇒ Q.

Using Y ⇒ Z (given) and WZ ⇒ P (given) we obtain WY ⇒ P (Pseudotransitivity axiom). Using this last result and
WP ⇒ QR (given) we obtain WWY ⇒ QR. Knowing that W ∪ W = W, we can rewrite the latter FD as follows: WY ⇒
QR. Using this last result and XY ⇒ W (given) we have that XYY ⇒ QR. The determinant of this FD can be rewritten
as XY ⇒ QR since Y ∪ Y = Y. Using XY ⇒ QR and the axiom of Projectivity we have XY ⇒ Q.

4.18. Attribute B of the determinant of ABF ⇒ BD is an extraneous left attribute. This FD can be written as AF ⇒ BD.

4.19. AF ⇒ B is redundant since A ⇒ B is in F. Fc = {A ⇒ B, A ⇒ C, E ⇒ C, D ⇒ A, D ⇒ E, D ⇒ F, AF ⇒ D}.
                                                                                                                                  Page 148




Chapter 5—
The Normalization Process

5.1—
Introduction

In relational databases the term normalization1 refers to a reversible step-by-step process in which a given set of
relations is replaced by successive collections of relations that have a progressively simpler and more regular structure.
Each step, referred to as a normal form, defines a set of criteria (the normal form test) that needs to be met by the
different tables of the database. In this sense, to say that a relation is in a particular normal form is an indication of the
conditions that the table has met. Since the process is reversible, the original set of relations can be recovered with no
loss of information. As the normalization progresses to higher forms, the individual collection of relations becomes
progressively more restricted on the type of functional dependencies that they can satisfy and the data anomalies that
they can experience. Data anomalies will be explained in Section 5.3.

The objectives of the normalization process are:2

To make it feasible to represent any relation in the database.

• To obtain powerful relational retrieval algorithms based on a collection of primitive relational operators.

• To free relations from undesirable insertion, update, and deletion anomalies.

• To reduce the need for restructuring the relations as new data types are introduced.
   1 This process was initially defined by E. F. Codd in "Normalized Data Base Structure: A Brief Tutorial," Proc. ACM SIGFIDET

   Workshop on Data Description, Access and Control pp. 1–17, 1971.
   2 Adapted from Database Management Systems by D. Tsichritzis and F. Lochovsky, Academic Press, 1977.
                                                                                                                                     Page 149

The first two objectives apply specifically to the First Normal Form; the last two apply to all normal forms. These terms
will be defined shortly.

The entire normalization process is based upon the analysis of relations, their schemes, their primary keys and their
functional dependencies. Whenever a relation does not meet a normal form test, the relation must be decomposed or
broken into some other relations that individually meet the criteria of the normal form test. Initially, E. F. Codd
proposed three normal forms that he called first, second, and third normal form. These forms are generally abbreviated
and referred to as 1NF, 2NF, and 3NF respectively. In addition to these original normal forms there exist others such as
the Boyce-Codd Normal Form3 (BCNF), Fourth Normal Form (4NF), and Fifth Normal Form (5NF). The relationship
between some of these normal forms is shown in Fig. 5-1. This figure is sometimes referred to as the normal form
"onion". In this book we will only address the following forms: 1NF, 2NF, 3NF, and BCNF. A discussion of these forms
follows.




                                                                Fig. 5-1
                                                     Hierarchy of the Normal Forms.

5.2—
First Normal Form

Sometimes, during the process of designing a database it may be necessary to transform into a relation a given table that
in some of its entries (the intersection of a row and a column) may have more than one value. For example, consider the
PROJECT table shown in Fig. 5-2 where one or more employees may be assigned to a project. Notice that for each
Project id (Proj-ID) every "row" of the table has more than one value under the columns Emp-ID, Emp-Name, Emp-
Dpt, Emp-Hrly-Rate, and Total-Hrs.
   3 Originally proposed in E. F. Codd; "Recent Investigations into Relational Data Base Systems," Proc. IFIP Congress, Stockholm,

   Sweden, 1974.
                                                                                                                        Page 150


 Proj-ID Proj-Name            Proj-Mgr-ID     Emp-ID           Emp-Name        Emp-Dpt           Emp-Hrly-        Total-Hrs
                                                                                                 Rate

 100         E-commerce        789487453        123423479         Heydary           MIS          65               10
                                                980808980          Jones         TechSupport     45                6
                                                234809000        Alexander       TechSupport     35                6
                                                542298973         Johnson         TechDoc        30               12

 110         Distance-Ed       820972445        432329700         Mantle            MIS          50               5
                                                689231199       Richardson       TechSupport     35               12
                                                712093093        Howard           TechDoc        30               8

 120            Cyber          980212343        834920043          Lopez         Engineering     80               4
                                                380802233         Harrison       TechSupport     35               11
                                                553208932         Olivier         TechDoc        30               12
                                                123423479         Heydary           MIS          65               07




 130             Nitts         550227043        340783453          Shaw              MIS         65               07


Fig. 5-2 The PROJECT table.

To refer to this type of table and how tables relate to relations some new terminology is necessary. Table entries that
have more than one value are called multivalue entries. Tables with multivalue entries are called unnormalized tables.
Within an unnormalized table, we will call a repeating group an attribute or group of attributes that may have multivalue
entries for single occurrences of the table identifier. This last term refers to the attribute that allows us to distinguish the
different rows of the unnormalized table. Using this terminology we can describe the PROJECT table shown above as an
unnormalized table where attributes Emp-ID, Emp-Name, Emp-Dpt, Emp-Hrly-Rate, and Total-Hrs are repeating
groups. As we indicated before in Section 2.1, this type of table cannot be considered a relation because there are entries
with more than one value.

To be able to represent this table as a relation and to implement it in a RDBMS, it is necessary to normalize the table. In
other words, we need to put the table in first normal form. We can formally define the latter term as follows: A relation r
(R) is said to be in First Normal Form (1NF) if and only if every entry of the relation (the intersection of a tuple and a
column) has at most a single value. Some authors prefer to say that a relation is in 1NF if and only if all its attributes are
based upon a simple domain. These two definitions are equivalent. If all relations of a database are in 1NF we will say
that the database is in 1NF

The objective of normalizing a table is to remove its repeating groups and ensure that all entries of the resulting table
have at most a single value. The reader should be aware that by simply removing their repeating groups unnormalized
tables do not become relations automatically. Some further manipulation of the resulting table(s) may be necessary to
ensure that they are indeed relations. In general, there are two basic approaches to normalize tables. We will consider
these two approaches next.
                                                                                                                                                         Page 151

The first approach, known as ''flattening the table", removes repeating groups by filling in the "missing" entries of each "incomplete row" of the table with
copies of their corresponding nonrepeating attributes. The following example illustrates this.
   Example 5.1
   Flatten the table of Fig. 5-2. Is the resulting table a relation? If not, how can you transform it to a 1NF relation?

In the PROJECT table, for each individual project, under the Emp-ID, Emp-Name, Emp-Dpt, Emp-Hrly-Rate, and Total-Hrs attributes there is more than one
value per entry. To normalize this table, we just fill in the remaining entries by copying the corresponding information from the nonrepeating attributes. For
instance, for the row that contains the employee Jones, we fill in the remaining "blank" entries by copying the values of the Proj-ID, Proj-Name, and Proj-
Mgr-ID columns. This row has now a single value in each of its entries. In the new table shown below, we have grayed all the new set of tuples for the
employees of the E-commerce project. We have repeated a similar process for the employees of the remaining two projects. The normalized representation of
the PROJECT table is:


 Proj-ID       Proj-Name           Proj-Mgr-ID            Emp-ID           Emp-Name              Emp-Dpt              Emp-Hrly-   Total-Hrs
                                                                                                                        Rate

    100        E-commerce           789487453           123423479            Heydary                 MIS                   65        10

    100        E-commerce           789487453           980808980              Jones           TechSupport                 45         6

    100        E-commerce           789487453           234809000           Alexander          TechSupport                 35         6

    100        E-commerce           789487453           542298973            Johnson              TechDoc                  30        12

    110        Distance-Ed          820972445           432329700             Mantle                 MIS                   50         5

    110        Distance-Ed          820972445           689231199          Richardson          TechSupport                 35        12

    110        Distance-Ed          820972445           712093093             Howard              TechDoc                  30         8

    120            Cyber            980212343           834920043              Lopez            Engineering                80         4

    120            Cyber            980212343           380802233            Harrison          TechSupport                 35        11

    120            Cyber            980212343           553208932             Olivier             TechDoc                  30        12
120   Cyber   789487453   123423479   Heydary    MIS      65   10

130   Nitts   550227043   340783453    Shaw     Cabling   40   27
                                                                                                                      Page 152

This normalized PROJECT table is not a relation because it does not have a primary key. The attribute Proj-ID no
longer identifies uniquely any row. Notice that all rows in the grayed area have the same Proj-ID. To transform this
table into a relation a primary key needs to be defined. A suitable PK for this table is the composite key (Proj-ID, Emp-
ID). Observe that any other combination of the attributes of the table will not work as a PK.

The second approach for normalizing a table requires that the table be decomposed into two new tables that will replace
the original table. Decomposition of a relation involves separating the attributes of the relation to create the schemes of
two new relations. However, before decomposing the original table it is necessary to identify an attribute or a set of its
attributes that can be used as table identifiers. Assuming that this is the case, one of the two tables contains the table
identifier of the original table and all the nonrepeating attributes. The other table contains a copy of the table identifier
and all the repeating attributes. To transform these tables in relations, it may be necessary to identify a PK for each
table. If one of the tables has more than one repeating group or if the repeating groups have other repeating groups
within themselves this process can be repeated as many times as necessary. The tuples of the new relations are the
projection of the original relation into their respective schemes. The following example illustrates this second approach
for normalizing tables.
   Example 5.2
   Normalize the table of Fig. 5-2 using the second approach of normalization.

To normalize the PROJECT table we need to replace it by two new tables. The first table contains the table attribute and
the nonrepeating groups. These attributes are: Proj-ID (the table identifier), Proj-Name, and Proj-Mgr-ID. The second
table contains the table identifier and all the repeating groups. Therefore, the attributes of this table are: Proj-ID, Emp-
ID, Emp-Name, Emp-Dpt, Emp-Hrly-Rate, and Total-Hrs. To transform the latter table into a relation, it is necessary to
assign it a PK. These two new 1NF relations are shown below. Notice that for the PROJECT-EMPLOYEE table the
composite attribute (Proj-ID, Emp-ID) is an appropriate PK.


PROJECT

  Proj-ID        Proj-Name          Proj-Mgr-ID

     100         E-commerce           789487453

     110         Distance-Ed          820972445

     120            Cyber             980212343

     130             Nitts            550227043
                                                                                                                   Page 153


PROJECT-EMPLOYEE

  Proj-ID       Emp-ID         Emp-Name          Emp-Dpt         Emp-Hrly-Rate Total-Hrs

    100        123423479         Heydary            MIS                 65              10

    100        980808980          Jones         TechSupport             45               6

    100        234809000        Alexander       TechSupport             45               6

    100        542298973         Johnson          TechDoc               30              12

    110        432329700         Mantle             MIS                 65               5

    110        689231199       Richardson       TechSupport             45              12

    110        712093093         Howard           TechDoc               30               8

    120        834920043          Lopez         Engineering             80               4

    120        380802233         Harrison       TechSupport             45              11

    120        553208932         Olivier          TechDoc               30              12

    120        123423479         Heydary            MIS                 65              10

    130        340783453          Shaw             Cabling              40              27


At this point the reader may ask which of these two approaches is better to use. Actually, both approaches are correct
because they transform any unnormalized table into a 1NF relation. However, the authors consider the second approach
more efficient because the relations produced are less redundant. In addition, as we will see in the next section, the
single table obtained using the first approach will be eventually broken into the same two tables obtained in the second
approach.

5.3—
Data Anomalies in 1NF Relations

Redundancies in 1NF relations lead to a variety of data anomalies. By this latter term we mean side effects that the data
experience as a result of some relational operations. Data anomalies are divided into three general categories: insertion,
deletion and update anomalies. They are named respectively after the relational operations of INSERT, DELETE and
UPDATE because it is during the application of these operations that a relation may experience anomalies. In reality
there are only two types of anomalies: update and insertion/deletion anomalies. The latter category can be considered as
only one category because
                                                                                                                         Page 154

a relation that experiences deletion anomalies will also have insertion anomalies. One cannot exist without the other.
However, for explanation purposes we will consider these data anomalies as divided into three categories.

To help us understand the concept of data anomalies in 1NF relations, let's consider the functional dependency EMP-ID
⇒ EMP-DPT of the PROJECT-EMPLOYEE relation of the previous section. Insertion anomalies occur in this relation
because we cannot insert information about any new employee that is going to work for a particular department unless
that employee is already assigned to a project. Remember that the composite key of this relation is (Proj-ID, Emp-ID).
Notice also that the integrity constraint prevents any attribute of a composite key from being NULL. Likewise, the
relation experiences deletion anomalies whenever we delete the last tuple of a particular employee. In this case, we not
only delete the project information that connects that employee to a particular project but also lose other information
about the department for which this employee works. Consider the information that is lost if employee Shaw is deleted.
In addition to these two types of anomalies, the relation is also susceptible to update anomalies because the department
for which an employee works may appear many times in the table. It is this redundancy of information that causes the
anomaly because if an employee moves to another department, we are now faced with two problems: we either search
the entire table looking for that employee and update his or her Emp-Dpt value or we miss one or more tuples of that
employee and end up with an inconsistent database. For small tables, this type of anomaly may not seem to be much of a
problem, but it is easy to imagine situations where there may be thousands of tuples that experience similar anomaly.

5.4—
Partial Dependencies

Given a relation r(R), the sets of attributes X and Y (X, Y ⊂ R), and X ⇒ Y, we will say that attribute Y is fully
dependent on attribute X if and only if there is no proper subset W of X such that W ⇒ Y. If there is a proper subset W
of X such that W ⇒ Y then attribute Y is said to be partially dependent on attribute X. Another way of expressing the
concept of partial and full dependency is as follows: Given A1 A2 A3 . . . Am ⇒ B1 B2 . . . Bn with (m > n), the set of
attributes B1 B2 . . . Bn is said to be partially dependent on attributes A1 A2 A3 . . . Am if and only if there exists a proper
subset of attributes Ac Ad Ae . . . Ak ⊂ A1 A2 A3 . . . Am such that Ac Ad Ae . . . Ak ⇒ B1 B2 . . . Bn. In other words,
attributes B1 B2 . . . Bn are partially dependent on the determinant if there is a subset of the attributes of the determinant
that functionally determine the right-hand side of the FD. If no such a subset of attributes of the determinant exist then
we say that attributes B1B2 . . . Bn are fully dependent on the determinant of the FD.

The identification of partial dependencies is a critical aspect of transforming relations to 2NF as we will see in Section
5.5. Example 5.3 illustrates this concept of partial dependency.
                                                                                                                  Page 155

   Example 5.3
   Identify any partial dependencies in the PROJECT-EMPLOYEE relation.

As indicated before, the PK of this relation is formed by the attributes Proj-ID and Emp-ID. This implies that Proj-ID,
Emp-ID functionally determines any individual attribute or any combination of attributes of the relation. However, we
only need attribute Emp-ID to functionally determine the following attributes: Emp-Name, Emp-Dpt, Emp-Hrly-Rate,
and Total-Hrs. In other words, attributes Emp-Name, Emp-Dpt, and Emp-Hrly-Rate are partially dependent on the key.
A diagram representing the partial dependency of these attributes on the composite key is shown below.




   Example 5.4
   Find the partial dependencies in the PROJECT table of Example 5.2.

There are no partial dependencies in this table because the determinant of the key only has a single attribute.

5.5—
Second Normal Form

A relation r(R) is in Second Normal Form (2NF) if and only if the following two conditions are met simultaneously:

(1) r(R) is already in 1NF.

(2) No nonprime attribute is partially dependent on any key or, equivalently, each nonprime attribute in R is fully
dependent upon every key (including candidate keys).

Notice that in order to find the nonprime attributes of R we need to identify all prime attributes of R. As a consequence
of this we need to identify first all possible keys of the relation. The nonprime attributes are then calculated as R – P
where P is the set of all prime attributes and R is the relational scheme of R.

If all relations of a database are in 2NF we will say that the database is in 2NF.

To transform a relation into a 2NF relation we will follow the approach illustrated in Fig. 5-3. In this diagram,4 the
prime attributes are indicated with asterisks and functional dependencies with arrows. The composite key is indicated
with a curly bracket.
   4 Adapted from Computer Data-Base Organization, 2nd edn, by James Martin, Prentice-Hall, 1975.
                                                                                                                    Page 156




                                                          Fig. 5-3
                                                      Conversion to 2NF.

Notice that in Fig. 5-3, the PK consists of attributes A and B. These two attributes determine all other attributes.
Attributes A and B are the only prime attributes. Attribute C is fully dependent on the key. Attribute D is partially
dependent on the key because we only need attribute A to functionally determine it. Attributes C and D are nonprime.
Observe that in the diagram the original relation gets replaced by two new relations. The first new relation has three
attributes: A, B, and C. The PK of this relation is AB (the PK of the original relation). The second relation has A and D
as its only two attributes. Observe that attribute A has been designated as the PK of the second relation and that attribute
D is now fully dependent on the key. Although the diagram only shows four attributes, we can generalize this procedure
for any relation that we need to transform to 2NF if we assume that C stands for the collection of attributes that are fully
dependent on the key and D stands for the collection of attributes that are partially dependent on the key. The next
example illustrates how to transform a relation into 2NF using this general procedure.
   Example 5.5
   Transform the PROJECT-EMPLOYEE relation into a 2NF relation.

The general procedure calls for breaking this relation into two new relations. The first relation has as its PK the PK of
PROJECT-EMPLOYEE (Proj-ID, Emp-ID), and the remaining attributes of this relation are all the attributes that fully
depend on this key. In this case, the only attribute that fully depends on this composite key is Total-Hours. The scheme
of this new relation that we have named HOURS-ASSIGNED is as follows:

HOURS-ASSIGNED (Proj-ID, Emp-ID, Total-Hours)

The second relation contains as its key the Emp-ID attribute since this attribute fully determines the Emp-Name, Emp-
Dpt, and Emp-Hrly-Rate. The scheme of this relation is as follows:

EMPLOYEE (Emp-ID, Emp-Name, Emp-Dpt, Emp-Hrly-Rate)
                                                                                                                    Page 157

5.6—
Data Anomalies in 2NF Relations

Relations in 2NF are still subject to data anomalies. For sake of explanation, let us assume that the department in which
an employee works functionally determines the hourly rate charged by that employee. That is, Emp-Dpt ⇒ Emp-Hrly-
Rate. This fact was not considered in the explanation of the previous normal form but it is not an unrealistic situation.
Insertion anomalies occur in the EMPLOYEE relation. For example, consider a situation where we would like to set in
advance the rate to be charged by the employees of a new department. We cannot insert this information until there is an
employee assigned to that department. Notice that the rate that a department charges is independent of whether or not it
has employees. The EMPLOYEE relation is also susceptible to deletion anomalies. This type of anomaly occurs
whenever we delete the tuple of an employee who happens to be the only employee left in a department. In this case, we
will also lose the information about the rate that the department charges. Update anomalies will also occur in the
EMPLOYEE relation because there may be several employees from the same department working on different projects.
If the department rate changes, we need to make sure that the corresponding rate is changed for all employees that work
for that department. Otherwise, the database may end up in an inconsistent state.

5.7—
Transitive Dependencies

Assume that A, B, and C are the set of attributes of a relation r(R). Further assume that the following functional
dependencies are satisfied simultaneously: A ⇒ B, B A, B ⇒ C, and C A and A ⇒ C. Observe that C ⇒ B is
neither prohibited nor required. If all these conditions are true, we will say that attribute C is transitively dependent on
attribute A. It should be clear that these FDs determine the conditions for having a transitive dependency of attribute C
on A. If any of these FDs are not satisfied then attribute C is not transitively dependent on attribute A. The diagram
shown in Fig. 5-4 summarizes these conditions. In this diagram the arrows are equivalent to the symbol "⇒" that we use
for denoting FDs. Notice that the functional dependency A ⇒ C may not be explicitly indicated but it holds true due to
the Transitivity axiom. The requirements that B C and C A are necessary to ensure that attributes A and B are
nonprime attributes.




                                                           Fig. 5-4
                                              Conditions that define the transitive
                                            dependency of attribute C on attribute A.
                                                                                                                  Page 158

5.8—
Third Normal Form

A relation r(R) is in Third Normal Form (3NF) if and only if the following conditions are satisfied simultaneously:

(1) r(R) is already in 2NF

(2) No nonprime attribute is transitively dependent on the key.

The reader should not get confused with the conditions stated in Fig. 5-4 and the second condition of the definition of
3NE Notice that Fig. 5-4 states the conditions that need to be met so that the nonprime attribute C can be transitively
dependent on key A. The definition of 3NF requires that these conditions are not met if A is the key attribute and C is a
nonprime attribute.

Another way of expressing the conditions for Third Normal Form is as follows:

(1) r(R) is already in 2NF.

(2) No nonprime attribute functionally determines any other nonprime attribute.

Since these two sets of conditions are equivalent (see Solved Problem 5.5), we will use the one that is most convenient
for the particular problem at hand.

As these two definitions of 3NF imply, the objective of transforming relations into 3NF is to remove all transitive
dependencies. To transform a 2NF relation into a 3NF we will follow the approach indicated by Fig. 5-5. In this figure,
assume that any FD not implicitly indicated does not hold. An asterisk indicates the key attribute and the arrows denote
functional dependencies. The dashed line indicates that the FD A ⇒ C may not be explicitly given but it is always
present because it can be derived using the inference axioms.




                                                               Fig. 5.5
                                                  Conversion to Third Normal Form.

The next example illustrates how to transform a relation into 3NF using this general procedure.
   Example 5.6
   Convert to 3NF the EMPLOYEE relation of Example 5.5 using the first definition of 3NF.

The relation EMPLOYEE of Example 5.5 is not in 3NF because there is a transitive dependency of a nonprime attribute
on the primary key of the relation. In this case, the nonprime attribute Emp-Hrly-Rate is transitively dependent on
                                                                                                                               Page 159

the key through the functional dependency Emp-Dpt ⇒ Emp-Hrly-Rate. Notice that all other conditions required by the
definition are met by this set of FDs. In particular, we have that Emp-Dpt Emp-ID and Emp-Hrly-Rate Emp-ID.
To transform this relation into a 3NF relation, it is necessary to remove any transitive dependency of a nonprime
attribute on the key. According to the diagram of Fig. 5-5, it is necessary to create two new relations. The scheme of the
first relation is EMPLOYEE (Emp-ID, Emp-Name, Emp-Dpt). The scheme of the second relation is CHARGES (Emp-
Dpt, Emp-Hrly-Rate). Observe that in the second relation, the Emp-Dpt attribute has been made the PK of the relation as
required by the diagram.
   Example 5.7
   Using the second definition of 3NF, how can we determine that the EMPLOYEE relation of Example 5.5 is not in 3NF? If we use the
   second definition for 3NF, do we need to use a different procedure to transform the relation to 3NF?

We can determine that the relation is not in 3NF by noticing that Emp-Dpt ⇒ Emp-Hrly-Rate and both attributes are
nonprime. To transform this relation to 3NF we use the same general procedure of Fig. 5-5.

The new set of relations that we have obtained through this normalization process does not exhibit any of the anomalies
of the previous forms. That is, we can insert, delete and update tuples without any of the side effects that were present in
1NF and 2NF.

5.9—
Data Anomalies in 3NF Relations

The Third Normal Form helped us to get rid of the data anomalies caused either by transitive dependencies on the PK or
by dependencies of a nonprime attribute on another nonprime attribute. However, relations in 3NF are still susceptible to
data anomalies particularly when the relations have two overlapping candidate keys or when a nonprime attribute
functionally determines a prime attribute. The following two examples will illustrate this.
   Example 5.8
   Consider the CERTIFICATION-PROGRAM (Area, Course, Section, Time, Location)


     Area          Course           Section             Time                      Location

  East Coast      SQL 101         Introduction       8:00–10:00         Atlanta Educational Center

  East Coast      SQL 101        Intermediate       10:00–12:00       New York Educational Center

  West Coast      SQL 101          Advanced          8:00–10:00          Los Angeles Educational
                                                                                 Center
                                                                                                                                   Page 160

This relation is in 3NF because neither of the nonprime attributes functionally determines the other attributes. However,
if there is only one instructional center per city then we will have that Location ⇒ Area. This dependency does not
violate the 3NF condition but there are some anomalies in the data. For example, assume that if we delete the last tuple
of the relation we may lose information about the location of the educational center.
   Example 5.9
   Consider the MANUFACTURER relation shown below where each manufacturer has a unique ID and name. Manufacturers produce
   items (identified by their unique item numbers) in the amounts indicated. Manufacturers may produce more than one item and different
   manufacturers may produce the same items.


MANUFACTURER

    ID             Name              Item-No        Quantity

M101       Electronics USA          H3552            1000

M101       Electronics USA          J08732             500

M101       Electronics USA          Y23490             200

M322       Electronics-R-Us         H3552              900


This MANUFACTURER relation has two candidate keys: (ID, Item-No) and (Name, Item-No) that overlap on the
attribute Item-No. The relation is in 3NF because there is only one nonprime attribute and therefore it is impossible that
this attribute can determine another nonprime attribute.

The relation MANUFACTURER is susceptible to update anomalies. Consider for example the case in which one of the
manufacturers changes its name. If the value of this attribute is not changed in all of the corresponding tuples there is the
possibility of having an inconsistent database.

5.10—
Boyce-Codd Normal Form

To eliminate these anomalies in 3NF relations, it is necessary to carry out the normalization process to the next higher
step, the Boyce-Codd Normal Form. This concept is formalized next.

A relation r(R) is in Boyce-Codd Normal Form (BCNF) if and only if the following conditions are met simultaneously:

(1) The relation is in 1NF.

(2) For every functional dependency of the form X ⇒ A, we have that either A ⊂ X or X is a superkey of r. In other
words, every functional dependency is either a trivial dependency or in the case that the functional dependency is not
trivial then X must be a superkey.
                                                                                                                      Page 161

Notice that the definition of BCNF does not make any reference to the concepts of full or partial dependency. However,
from this definition we can make the following assertions about the prime and nonprime attributes of the relational
scheme:

• All nonprime attributes must be fully dependent on every key.

• All prime attributes must be fully dependent on all keys of which they are not part.

In Fig. 5-1, we can observe that the set of 3NF relations are a proper subset of the BCNF relations. That is, all BCNF are
in 3NF but not all 3NF are in BCNF. In this sense, the definition of BCNF is said to be more restrictive. The following
example illustrates this.
   Example 5.10
   Using the MANUFACTURER relation of the previous example, transform it to BCNF.

To transform this relation into BCNF we can decompose it into the following set of relational schemes:


                Set No. 1
        MANUFACTURER(ID, Name)
   MANUFACTURER-PART(ID, Item-No, Quantity)

                             or

               Set No. 2
       MANUFACTURER(ID, Name)
 MANUFACTURER-PART(Name, Item-No, Quantity)


Notice that both relations are in BCNF and that the update data anomaly is no longer present. In this example, we have
decomposed the relation in a manner that is convenient for purpose of the explanation. In Solved Problem 5.16 we will
consider a more systematic procedure to transform relations into BCNF.

5.11—
Lossless or Lossy Decompositions

So far we have decomposed a relation using either a general procedure (Sections 5.5 and 5.8) or an ad-hoc method
(Section 5.10). However, whenever a relation is decomposed it is necessary to ensure that the data in the original
relation is represented faithfully by the data in the relations that are the result of the decomposition; that is, we need to
make sure that we can recover the original relation from the new relations that have replaced it. Generally the original
relation is recovered by forming the natural join of the new relations. If we can recover the original relation we say that
the decomposition is lossless with respect to D or that the relation has a lossless-join decomposition with respect to D
where D is a set of FDs satisfied by the original relation. If the relation cannot be recovered we say that the
decomposition is lossy. We can formalize this concept as follows:
                                                                                                                                Page 162

Assume that a relation r(R) has been replaced by a collection or relation r1(R1), r2(R2), . . . rn(Rn) such that R= R1 ∪ R2
∪ . . . ∪ Rn and D is a set of dependencies satisfied by r. We say that the decomposition is lossless with respect to D or
is a lossless-join decomposition with respect to D if and only if r = πR1(r) join πR2(r) join . . . join πRn(r). That is, the
relation r is lossless if it is the natural join of its projections onto the Ri's. If the relation cannot be recovered from the
natural projection the decomposition is said to be lossy with respect to D. The following example illustrates this concept.
   Example 5.11
   Consider the relation r shown below and its decomposition R1 and R2. Assume that X ⇒ Y and Z ⇒ Y. Is this decomposition lossless
   or lossy?




Notice that the natural join of relations R1 and R2 has tuples that were not present in the original relations. These
additional tuples that were not in the original relation are called spurious tuples because they represent spurious or false
information that is not valid. We have grayed the spurious tuples in the join relation. Since the natural join of relation R1
and R2 does not recover the original relation the decomposition is lossy.
                                                                                                                           Page 163

5.11.1—
Testing for Lossless Joins

As indicated before, a lossless-join decomposition is necessary to ensure that the relation is recoverable. Determining
whether or not a decomposition is lossless or lossy with respect to a set of FDs is a fairly easy procedure if we use the
Lossless Join Algorithm. This algorithm is shown next.

The Lossless-Join Algorithm

The algorithm has two inputs. The first input is a set of relations r1(R1), r2(R2), . . ., rn(Rk) that have replaced a relation r
(A1, A2, A3, . . ., An) where R = {A1, A2, A3, . . ., An} = R1 ∪ R2 ∪ . . . ∪ Rk. The second input to the algorithm is a set F
of functional dependencies satisfied by r. The output of the algorithm is a decision stating that the decomposition is
lossless or lossy. To apply this algorithm proceed as follows:

(1) Construct a table with n columns (n is the number of attributes of the original relation) and k rows (k is the number
of relations in which the original relation has been decomposed). Label the columns of this table A1, A2, A3, . . ., An
respectively. Label the rows R2, R2, R3, . . ., Rk.

(2) Fill in the entries of this table as follows:
For each attribute Ai check if this attribute is one of the attributes of the scheme of the relation Rj. If attribute Ai is in the
scheme of Rj, then in the entry (Ai, Rj) of the table write ai. If attribute Ai is not one of the attributes in the scheme of
relation Rj then in the entry (Ai,Rj) write bij.

(3) For each of the functional dependencies X ⇒ Y of F do the following until it is not possible to make any more
changes to the table. When the table no longer changes continue with step 4.

Look for two or more rows that have the same value under the attribute or attributes that comprise X (the determinant of
the FD under consideration). There are two possible outcomes to this search:

    (3-a) If there are two or more rows with the same value under the attribute or attributes of the determinant X then
    make equal their entries under attribute Y (the right-hand side of the FD under consideration). When making equal
    two or more symbols under any column, if one of them is aj, make all of them aj. If they are bij and bkl, choose one of
    these two values as the representative value and make the other values equal to it. Continue with step 3.

    (3-b) If there are no two rows with the same value under the attribute or attributes of the determinant X continue
    with step 3.

(4) Check the rows of the table. If there is a row with its entries equal to a1 a2 . . . an then the decomposition is lossless.
Otherwise, the decomposition is lossy.
                                                                                                                               Page 164

   Example 5.125
   Consider the relation r(X, Y, Z, W, Q), the set F = {X⇒Z, Y ⇒ Z, Z⇒W, WQ⇒Z, ZQ⇒X} and the decomposition of r into relations
   R1(X, W), R2(X, Y), R3(Y, Q), R4(Z, W, Q), and R5(X, Q). Using the Lossless-Join Algorithm determine if the decomposition is
   lossless or lossy.

Steps (1–2)
Since the original relation has 5 attributes and the original relation has been decomposed into 5 relations, we need to
create a table with 5 columns and 5 rows. The columns of the table are named X, Y, Z, W and Q respectively. The rows
of the table are named R1, R2, R3, R4 and R5 respectively. For explanation purposes we have renamed the attributes A1,
A2, . . ., A5. The table is shown below.


           X(A1)   Y(A2)      Z(A3)      W(A4)      Q(A5)

  R1

  R2

  R3

  R4

  R5


    Since X is one of the attributes of relation R1 we write a1 in the entry (R1, A1) or its equivalent (R1, X). In other
words, under column A1 (or X) and row R1 we write a1 as seen in the row pointed to by the arrow (see below). Likewise,
we write a4 in the entry corresponding to (R1, A4) or its equivalent (R1, W) because W is also an attribute of relation R1.
That is, under column A4 (or W) and row R1 we write a4 as seen in the row pointed to by the arrow (see below). In the
remaining entries of row R1 we write the values bij where i is the column number and j is the row number. These entries
(from left to right) are b12, b13 and b15 respectively as seen in the row pointed to by the arrow in the following table:


           X(A1)   Y(A2)      Z(A3)     W(A4)       Q(A5)

  R1        al       b12        b13        a4         b15

  R2

  R3

  R4

  R5


   5 A similar example appears in Principles of Database and Knowledge-Base Systems Vol 1, by J. D. Ullman, Computer Science Press,

   1988.
                                                                                                                         Page 165

Proceeding in this fashion we fill in the remaining entries in the table. After filling in all entries the table looks like this.


         X(A1)     Y(A2)      Z(A3)     W(A4)      Q(A5)

  R1       a1        b12       b13        a4         b15

  R2       a1         a2       b23        b24        b25

  R3       b31        a2       b33        b34        a5

  R4       b41       b42        a3        a4         a5

  R5       a1        b52       b53        b54        a5


Steps (3/3-a)
1st time
Considering X ⇒Z or its equivalent A1 ⇒ A3 we look for tuples that have the same value under column X (or A1). In
this case, rows R1, R2 and R5 have the same value a1. Therefore, we equate or make equal the values under attribute Z (or
A3). Remember that Z (or A3) is the right-hand side of the functional dependency that we are considering. Notice that the
corresponding entries for rows R1, R2 and R5 under the Z column are b13, b23 and b53 respectively. To equate these entries
to the same value we need to choose one of them arbitrarily and make the other two entries the same. Choosing b13 as
the representative value and changing the remaining two entries to this value, we have that the table looks like the one
shown next. Notice that we have grayed the entries that were made equal to the value b13 of row R1. Repeat step 3.


         X(A1)     Y(A2)     Z(A3)     W(A4)      Q(A5)

  R1       a1        b12       b13        a4        b15

  R2       a1        a2        b13       b24        b25

  R3       b31       a2        b33       b34         a5

  R4       b41       b42       a3         a4         a5

  R5       a1        b52       b13       b52         a5


Steps (3/3-a)
2nd time
Considering Y ⇒ Z or its equivalent A2 ⇒ A3, we now look for rows that have the same value in the column Y (or A2).
In this case, rows R2 and R3 have the same value a2. Therefore, we need to equate the corresponding entries under
column Z (or A3). Choosing b13 as the representative value we can change
                                                                                                                 Page 166

   the b33 entry to b13. After this change the table looks like the one shown below. Notice that we have grayed the row
whose entry changed. Repeat step 3.


        X(A1)    Y(A2)     Z(A3)    W(A4)     Q(A5)

  R1      a1       b12      b13        a4       b15

  R2      a1       a2       b13       b24       b25

  R3     b31       a2       b13       b34       a5

  R4     b41       b42       a3        a4       a5

  R5      a1       b52      b13       b52       a5


Steps (3/3-a)
3rd time
Considering Z ⇒ W or its equivalent A3 ⇒ A4, we look for tuples that have identical values under column Z (or A3). In
this case rows R1, R2, R3 and R5 have the same value, b13, under this column. Therefore, we need to make equal all
entries under column W (or A4). Since one of the values under column W (or A4) is a4 (for row R1), we make all the bij's
entries equal to a4. The resulting table is shown next. As before we have grayed all entries that were changed. Repeat
step 3.


        X(A1)    Y(A2)     Z(A3)    W(A4)     Q(A5)

  R1      a1       b12       a3        a4       b15

  R2      a1       a2        a3        a4       b25

  R3     b31       a2        a3        a4       a5

  R4     b41       b42       a3        a4       a5

  R5      a1       b52       a3        a4       a5


Steps (3/3-a)
4th time
Considering WQ ⇒ Z or its equivalent A4A5 ⇒ A3, we now look for rows that have identical values under columns A4
and A5 simultaneously. Rows R3, R4 and R5 have values of a4 and a5 under columns WQ (or A4 and A5) respectively.
Therefore, we need to equate all the corresponding entries for these rows under column Z (or A3). Since all the values
under column Z (or A3) are already equal no changes are necessary. Repeat step 3.
                                                                                                                   Page 167

Steps (3/3-a)
5th time
Considering ZQ ⇒ X or its equivalent A3A5 ⇒ A1, we look for rows that have equal values under columns ZQ (or A3A5)
simultaneously. Rows R3, R4 and R5 have values equal to a3 and a5 under columns A3 and A5 respectively. Therefore, it is
necessary to equate their corresponding entries under column X (or A1). Since one of the entries is a1 (for row R5), we
make all the remaining bij's equal to a1. The resulting table, after all the corresponding changes are made, looks like the
one shown below. As in all cases before, we have grayed the entries that were affected by the changes. Repeat step 3.


        X(A1)     Y(A2)    Z(A3)     W(A4)     Q(A5)

  R1      a1       b12       a3        a4        b15

  R2      a1        a2       a3        a4        b25

  R3      a1        a2       a3        a4        a5

  R4      a1       b42       a3        a4        a5

  R5      a1       b52       a3        a4        a5


Steps (3/3-a)
6th time
There are no more FDs to consider and the table cannot undergo any more changes. Therefore, we are through with step
3 and move to step 4.

Step (4)
1st time
We now look for a row that has all ai's. Since row R3 has become a1a2a3a4a5 (see below) the decomposition is lossless.


        X(A1)     Y(A2)    Z(A3)     W(A4)     Q(A5)

  R1      a1       b12       a3        a4       b15

  R2      a1        a2       a3        a4       b25

  R3      a1        a2       a3        a4        a5

  R4      a1       b42       a3        a4        a5

  R5      a1       b52       a3        a4        a5
                                                                                                                                Page 168

   Example 5.13
   Consider the relation r(X, Y, Z) and its decomposition R1(X, Y) and R2(Y, Z). Assume that X ⇒ Y and Z ⇒ Y. Use the Lossless-Join
   Algorithm to determine if this decomposition is lossless or lossy.

Steps (1–2)
Since the original relation has 3 attributes and it has been decomposed into 2 relations we need to form a table with
three columns and two rows. Notice again that for explanation purposes we have renamed the attributes A1, A2, . . ., A5.
However, this step is not necessary.


         X(A1)     Y(A2)      Z(A3)

  R1

  R2


    The scheme of relation R1 consists of attributes X and Y. Therefore under columns X (or A1) and Y (or A2) we write
a1 and a2 respectively.

    The scheme of relation R2 consists of attributes Y and Z. Therefore under columns Y (or A2) and Z (or A3) we write
a2 and a3 respectively.


         X(A1)     Y(A2)      Z(A3)

  R1       al        a2         b13

  R2      b21        a2         a3


Steps (3/3-b)
1st time
Considering X ⇒ Y we look for rows that have the same value under attribute X. Since there are no two rows with
identical value under attribute X, the table remains unchanged and we continue with step 3 again.

Steps (3/3-b)
2nd time
Considering Z ⇒ Y we now look for rows with identical values under attribute Z. Since there are no two rows with
identical value under this attribute, the table remains unchanged.

Step (3)
3rd time
There are no more FDs to consider in F and therefore the table cannot undergo any more changes. We continue with
step 4.

Step (4)
1st time
Since there is no row in the table that has all ai's in its entries the decomposition is lossy. That is, the original table
cannot be recovered from the natural join of relations R1 and R2.
                                                                                                                                     Page 169

5.12—
Preserving Functional Dependencies

As indicated in the previous section, for a relation r to be recoverable from its projections its decomposition must be
lossless. In addition to this, the decomposition should satisfy another property known as the dependency preservation.
What this property requires is that the decomposition satisfy all the FDs that are satisfied by the original relation. The
reason this is desirable is that the set of functional dependencies that are satisfied by a relation define integrity
constraints that the relation needs to meet. Any decomposition that does not preserve the dependencies of the original
relation imposes an unnecessary burden on the RDBMS. If fact, any update to any of the relations of the decomposition
would require a join of all these relations to check that the constraints are not violated. This is obviously a time-
consuming operation that reduces efficiency of the system. The following example illustrates this.
     Example 5.14
     Consider a relation r(X, Y, Z) that satisfies the dependencies XY ⇒ Z and Z ⇒ X. The decomposition of relation r(X, Y, Z) into R1
     (XY) and R2(XZ) is lossless but it does not preserve the dependencies. Consider the following instances of these relations.




R1                                       R2
        Y         Z                           Z        X

        y1        z1                          z1       x1

        y1        z2                          z2       x1


Notice that relation R2 satisfies Z ⇒ X but that the join of these two relations does not satisfy the functional dependency
XY ⇒ Z.


R1Join R2         X       Y       Z

                  x1      y1      z1

                  x1      y1      z2


5.12.1—
Projection of a Set of Dependencies Onto a Set of Attributes

To formalize the concept of dependency preservation and to define an algorithm that allows us to test for dependency
preservation some additional terminology is necessary. Assume that a relation r(R) has been decomposed into a series of
relations ρ = (R1, R2, . . ., Rk) and that F is a set of FDs satisfied by r. We define the projection of F onto a set of
attributes Z, denoted by π(z)F, as follows:

π(z)F = {X ⇒ Y ∈ F+/XY ⊂ Z} where the symbol ''/" reads "such that".
                                                                                                                                    Page 170

It is important to observe that this definition does not require that X ⇒ Y be in F but in F+ (where F+ is closure of F).
Notice also that both X and Y may be composite attributes whose union must be a subset of the attributes of Z. The FDs
of π(z)F are said to be satisfied by the attributes of Z.

To calculate the projection π(z)F consider the proper subsets X of attributes of Z (X ⊂ Z and X ≠ Z) that appear as the
determinant of a functional dependency or are part of the determinant of a functional dependency of F and do the
following:

(1) Calculate X+.

(2) For each set of attributes Y of X+ that satisfies simultaneously the following conditions:

   a. Y ⊂ Z

   b. Y ⊂ X+ (with respect to F)

   c. Y ⊄ X (This requirement excludes the consideration of trivial dependencies. Trivial dependencies are true anyway
   due to the axiom of Transitivity)

   include X ⇒ Y as one of the FDs of π(z)F. The set of FDs in π(z)F are said to be satisfied by the attributes of Z.

   Example 5.15
   Given the relation r(X, Y, W, Z, Q) and the set F = { X ⇒ Z, Y ⇒ Q, ZQ ⇒ W}, find the projection of F onto the set of attributes {X,
   Y, W}.

The only attributes of {X, Y, W} that appear as determinants of F are X and Y. The proper subsets of {X, Y, W} that
need to be considered are {X}, {Y}, and {X, Y}.

Considering attribute X

Step (1)
1st time
Calculate X+. Using the closure algorithm (see Section 4.6.2) we have that X+ = {X, Z}.

Step (2)
2nd time
Considering attribute Z of X+, we observe that Z ⊄ {X, Y, W}. Since Z does not meet condition (a) of step 2 no FD is
included in π(z)F.

Considering attribute Y

Step (1)
1st time
Calculate Y+. Using the closure algorithm (see Section 4.6.2) we have that Y+ = {Y,Q}.

Step (2)
2nd time
Considering attribute Q of Y+, we have that Q ⊄ {X, Y, W}. Since Q does not meet condition (a) of step 2 no FD is
included in π(z)F.

Considering attributes XY

Step (1)
1st time
Calculate {XY}+. Using the closure algorithm (see Section 4.6.2) we have that {XY}+ = {X, Y, Z, Q, W}.
                                                                                                                       Page 171

Step (2)
2nd time
Considering the attributes of {XY}+ = {X, Y, Z, Q, W}, the definition of closure and excluding the trivial functional
dependencies we have that XY ⇒ W, XY ⇒ Q, and XY ⇒ Z. Of all these FDs, only XY ⇒ W satisfies the conditions
of step 2a through 2b, therefore this FD can be added to π(z)F. This FD of π(z) F is the only FD that is satisfied by the
attributes of {X, Y, W}.

5.12.2—
Testing Preservation of Dependencies

Given a relation r(R), a decomposition ρ = (R1, R2, . . ., Rk) of the relation and a set F of FDs satisfied by r(R), we say
that the decomposition ρ preserves the functional dependencies of r if and only if the following conditions are satisfied
simultaneously:




In other words, the decomposition ρ preserves a set of dependencies F if the union of all the dependencies in
logically implies all the dependencies in F.

This definition also provides a procedure to test whether or not a decomposition of a given relation preserves a set F of
functional dependencies. Just take the projections of F+ onto all the Ri's, union these sets and test if this set is equivalent
to F. Calculating F+, as we indicated before, is a very tedious and time-consuming task. Fortunately, there is a shorter
algorithm that does not require the computation of F+. However, before introducing this new algorithm it is necessary to
define the following operation on a set of attributes with respect to a set of FDs.

An R-operation on a set of attributes Z with respect to set of dependencies F replaces attribute Z with the following set
Z ∪ ((Z ∩ R)+ ∩ R). The purpose of this operation is to add to the set Z all attributes A such that (Z ∩ R) ⇒ A ∈ πR(F).


To verify if the sets F and                 are equivalent without having to calculate F+, the algorithm considers each X
                                       +
⇒ Y in F and determines if Y is in X by considering the effect of calculating the closure with respect to the projections
of F onto the various Ri's. The algorithm is shown next.
                                                                                                                                    Page 172

The Test Preservation Algorithm6

The input to this algorithm is a decomposition ρ = (R1, R2, . . ., Rk) and a set F of functional dependencies. The output of
the algorithm is a statement that indicates whether or not the decomposition preserves the dependencies.

(1) For each X ⇒ Y ∈ F initialize a set T of attributes with the attributes of X (the determinant of the FD under
consideration). That is, set T = X and continue with step 2.

(2) Repeat step 3 until the set T no longer changes. When T no longer changes continue with step 4.g

(3) For each relation Ri (1 ≤ i ≤ k) of the input decomposition apply the corresponding Ri operation (on a set of attributes
T with respect to set of dependencies F). That is, do the following:

T = T ∪ ((T ∩ Ri)+ ∩ Ri) and repeat step 3.

(4) Test to see if Y (the right-hand side of the FD under consideration) is such that Y ⊂ T. There are two outcomes to
this test. If the answer is negative, that is, if Y ⊄ T stop the execution of the algorithm and report that the decomposition
ρ = (R1, R2, . . ., Rk) does not preserve the functional dependencies. If the answer is affirmative, that is, if Y ⊂ T then X
⇒ Y ∈ G+. If there are other FDs in F that need to be considered repeat step 1 with a functional dependency that has not
been considered before. If there are no more FDs in F that can be considered continue with step 5.

(5) The two sets of FDs are equivalent and the algorithm reports that the decomposition preserves ρ = (R1, R2, . . ., Rk),
the functional dependencies of the original relation.
   Example 5.16
   Determine if the decomposition ρ = {R1(X, Y), R2(Y, Z), R3(Z, W)} of the relation r(X, Y, Z, W) preserves the dependencies of the set
   F = {X ⇒ Y, Y ⇒ Z, Z ⇒ W, W ⇒ X}.

For explanation purposes and to be somewhat methodical, we will consider the different FDs of the set F in the order in
which they are listed inside F.

Step (1)
1st time (with respect to X ⇒ Y)
Considering X⇒Y, we initialize the set of attributes T to the determinant of the FD under consideration. That is, we set
T = {X}.
   6 Adapted from Principles of Database and Knowledge-Base Systems Vol. 1, by J. D. Ullman, Computer Science Press, 1988.
                                                                                                                  Page 173

Steps (2/3)
1st time (with respect to X ⇒ Y)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {X} ∩ {X, Y} = {X}
(T ∩ R1)+ = {X }+ = {X, Y, Z, W} (applying the closure algorithm of Section 4.6.2)
(T ∩ R1)+ ∩ R1 = {X, Y, Z, W}∩ {X, Y} = {X, Y} = {X,Y}
T ∪ ((T ∩ R1)+ ∩ R1) = {X} ∪ {X, Y} = {X, Y}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {X, Y}
T = {X, Y} (This value of T is carried over the next iteration with R2)

Step (3)
2nd time (with respect to X ⇒ Y)
Applying the R2 operation T ∪ ((T ∩ R2)+ ∩ R2) with respect to F we have that
T ∩ R2 = {X, Y} ∩ {Y, Z} = {Y}
(T ∩ R2)+ = {Y}+ = {Y, Z, W, X} (applying the closure algorithm of Section 4.6.2)
(T ∩ R2)+ ∩ R2 = {X, Y, Z, W} ∩ {Y, Z} = {Y, Z}
T ∪ ((T ∩ R2)+ ∩ R2) = {X,Y} ∪ {Y, Z} = X, Y, Z}
T = T ∪ ((T ∩ R2)+ ∩ R2) = {X, Y, Z}
T = {X, Y, Z} (This value of T is carried over the next iteration with R3)

Step (3)
3rd time (with respect to X ⇒ Y)
Applying the R3 operation T ∪ ((T ∩ R3)+ ∩ R3) with respect to F we have that
T ∩ R3 = {X, Y, Z} ∩ {Z, W} = {Z}
(T ∩ R3)+ = {Z}+ = {Z, W, X, Y} (applying the closure algorithm of Section 4.6.2)
(T ∩ R3)+ ∩ R3 = {X, Y, Z, W} ∩ {Z, W} = {Z, W}
T ∪ ((T ∩ R3)+ ∩ R3) = {X, Y, Z} ∪ {Z, W} = {X, Y, Z, W}
T = T ∪ ((Z ∩ R3)+ ∩ R3) = {X, Y, Z, W}
T = {X, Y, Z, W}

At this point the algorithm calls for repeating the Ri's operation with this new T. However, T will not change. We have
omitted these steps because they will produce similar results to the ones already obtained. We continue with step 4.

Step (4)
1st time (with respect to X ⇒ Y)
Since Y (the right-hand side of the FD under consideration) is such that
{Y} ⊂ T = {X, Y, Z, W}, then X ⇒ Y ∈ G+.

Step (1)
1st time (with respect to Y ⇒ Z)
Considering Y ⇒ Z, we initialize the set of attributes T to the determinant of the FD under consideration. That is, we set
T = {Y}.
                                                                                                                 Page 174

Steps (2/3)
1st time (with respect to Y ⇒ Z)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {Y} ∩ {X, Y} = {Y}
(T ∩ R1)+ = {Y}+ = {Y, Z, W, X} (applying the closure algorithm of Section 4.6.2)
(T ∩ R1)+ ∩ R1 = {Y, Z, W, X} ∩ {X, Y} = {Y, X}
T ∪ ((T ∩ R1)+ ∩ R1) = {Y} ∪ {X, Y} = {Y, X}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {Y, X}
T = {Y, X} (This value of T is carried over the next iteration with R2)

Step (3)
2nd time (with respect to Y ⇒ Z)
Applying the R2 operation T ∪ ((T ∩ R2)+ ∩ R2) with respect to F we have that
T ∩ R2 = {Y, X} ∩ {Y, Z} = {Y}
(T ∩ R2)+ = {Y}+ = { Y, Z, W, X} (applying the closure algorithm of Section 4.6.2)
(T ∩ R2)+ ∩ R2 = {Y, Z, W, X} ∩ {Y, Z}= {Y, Z}
T ∪ ((T ∩ R2)+ ∩ R2) = {Y, X} ∪ {Y, Z} = {X, Y, Z}
T = T ∪ ((T ∩ R2)+ ∩ R2) = {X, Y, Z}
T = {X, Y, Z} (This value of T is carried over the next iteration with R3)

Step (3)
3rd time (with respect to Y ⇒ Z)
Applying the R3 operation T ∪ ((T ∩ R3)+ ∩ R3) with respect to F we have that
T ∩ R3 = {X, Y, Z} ∩ {Z, W} = {Z}
(T ∩ R3)+ = {Z}+ = {Z, W, X, Y} (applying the closure algorithm of Section 4.6.2)
(T ∩ R3)+ ∩ R3 = {Z, W, X, Y} ∩ {Z, W} = {Z, W}
T ∪ ((T ∩ R3)+ ∩ R3) = X, Y, Z} ∪ {Z, W} = {X, Y, Z, W}
T = T∪ ((T ∩ R3)+ ∩ R3) = {X, Y, Z, W}
T = {X, Y, Z, W}

At this point the algorithm calls for repeating the Ri's operation with this new T. However, T will not change. We have
omitted these steps because they will produce similar results to the ones already obtained. We continue with step 4.

Step (4)
1st time (with respect to Y ⇒ Z)
Since Z (the right-hand side of the FD under consideration) is such that
{Z} ⊂ T = {X, Y,Z, W}, then Y ⇒ Z ∈ G+.

Step (1)
1st time (with respect to Z ⇒ W)
Considering Z ⇒ W, we initialize the set of attributes T to the determinant of the FD under consideration. That is, we
set T = {Z}.
                                                                                      Page 175

Steps (2/3)
1st time (with respect to Z ⇒ W)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {Z} ∩ {X, Y} = ∅
(T ∩ R1)+ = ∅+ = ∅
(T ∩ R1)+ ∩ R1 = ∅
T ∪ ((T ∩ R1)+ ∩ R1) = {Z} ∪ ∅ = {Z}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {Z}
T = {Z} (This value of T is carried over the next iteration with R2)

Step (3)
2nd time (with respect to Z ⇒ W)
Applying the R2 operation T ∪ ((T ∩ R2)+ ∩ R2) with respect to F we have that
T ∩ R2 = {Z} ∩ {Y, Z} = {Z}
(T ∩ R2)+ = {Z}+ = {Z, W, X, Y} (applying the closure algorithm of Section 4.6.2)
(T ∩ R2)+ ∩ R2 = {Z, W, X, Y} ∩ {Y, Z} = {Z, Y}
T ∪ ((T ∩ R2)+ ∩ R2) = {Z} ∪ {Z, Y} = {Z, Y}
T = T ∪ ((T ∩ R2)+ ∩ R2) = {Z, Y}
T = {Z, Y} (This value of T is carried over the next iteration with R3)

Step (3)
3rd time (with respect to Z ⇒ W)
Applying the R3 operation T ∪ ((T ∩ R3)+ ∩ R3) with respect to F we have that
T ∩ R3 = {Z, Y} ∩ {Z, W} = {Z}
(T ∩ R3)+ = {Z}+ = {Z, W, X, Y} (applying the closure algorithm of Section 4.6.2)
(T ∩ R3)+ ∩ R3 = {Z, W, X, Y} ∩ {Z, W} = {Z, W}
T ∪ ((T ∩ R3)+ ∩ R3) = {Z, Y} ∪ {Z, W} = {Z, Y, W}
T = T ∪ ((T ∩ R3)+ ∩ R3) = {Z, Y, W}
T = {Z, Y, W}

At this point the algorithm calls for repeating the Ri's operation with this new T.

Step (3)
4th time (with respect to Z ⇒ W)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {Z, Y, W} ∩ {X, Y} = {Y}
(T ∩ R1)+ = {Y}+ = {Y, Z, W, X}
(T ∩ R1)+ ∩ R1 = {X, Y}
T ∪ ((T ∩ R1)+ ∩ R1) = {Z, Y, W} ∪ {X, Y} = {Z, Y, W}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {Z, Y, W}
T = {Z} (This value of T is carried over the next iteration with R2)

Step (4)
1st time (with respect to Z ⇒W)
Since W (the right-hand side of the FD under consideration) is such that
{W} ⊂ T= {Z, Y, W}, then Z ⇒ W ∈ G+.
                                                                                                                 Page 176

Step (1)
1st time (with respect to W ⇒ X)
Considering W ⇒ X, we initialize the set of attributes T to the determinant of the FD under consideration. That is, we
set T = {W}.

Steps (2/3)
1st time (with respect to W ⇒ X)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {W} ∩ {X, Y} = ∅
(T ∩ R1)+ = ∅+ = ∅
(T ∩ R1)+ ∩ R1 = ∅
T ∪ ((T ∩ R1)+ ∩ R1) = {W} ∪ ∅ = {W}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {W}
T = {W} (This value of T is carried over the next iteration with R2)

Step (3)
2nd time (with respect to W ⇒ X)
Applying the R2 operation T ∪ ((T ∩ R2)+ ∩ R2) with respect to F we have that
T ∩ R2 = {W} ∩ {Y, Z} = ∅
(T ∩ R2)+ = ∅+ = ∅
(T ∩ R2))+ ∩ R2 = {W} ∩ ∅ = ∅
T ∪ ((T ∩ R2)+ ∩ R2) = {W} ∪ ∅ = {W}
T = T ∪ ((T ∩ R2)+ ∩ R2) = {W}
T= {W}

Step (3)
3rd time (with respect to W ⇒ X)
Applying the R3 operation T ∪ ((T ∩ R3)+ ∩ R3) with respect to F we have that
T ∩ R3 = {W} ∩ {Z, W} = {W}
(T ∩ R3)+={W}+ = {W, X, Y, Z}(applying the closure algorithm of Section 4.6.2)
(T ∩ R3)+ ∩ R3 = {W, X, Y, Z} ∩ {Z, W} = {Z, W}
T ∪ ((T ∩ R3)+ ∩ R3) = {W} ∪ {Z, W} = {Z, W}
T = T ∪ ((T ∩ R3)+ ∩ R3) = {Z, W}
T = {Z, W}

Step (3)
4th time (with respect to W ⇒ X)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {Z, W} ∩ {X, Y} = ∅
(T ∩ R1)+ = ∅+ = ∅
(T ∩ R1)+ ∩ R1 = ∅
T ∪ ((T ∩ R1)+ ∩ R1) = {Z, W} ∪ ∅ = {Z, W}
T = T ∪ ((T ∩ R1))+ ∩ R1) = {Z, W}
T = {Z, W} (This value of T is carried over the next iteration with R2)

Step (3)
4th time (with respect to W ⇒ X)
Applying the R2 operation T ∪ ((T ∩ R2)+ ∩ R2) with respect to F we have that
                                                                                                                   Page 177

   T ∩ R2 = {Z, W} ∩ {Y, Z} = {Z}
(T ∩ R2)+ = (Z}+ = {Z, W, X, Y}
(T ∩ R2)+ ∩ R2 = {Z, W, X, Y} ∩ {Y, Z} = {Y, Z}
T ∪ ((T ∩ R2)+ ∩ R2) = {Z, W} ∪ {Y, Z} = {Z, W, Y}
T = T ∪ ((T ∩ R2)+ ∩ R2) = {Z, W, Y}
T = {Z, W, Y} (This value of T is carried over the next iteration with R3)

Step (3)
5th time (with respect to W ⇒ X)
Applying the R3 operation T ∪ ((T ∩ R3)+ ∩ R3) with respect to F we have that
T ∩ R3 = {Z, W, Y} ∩ {Z, W} = {Z, W}
(T ∩ R3)+ = {Z, W}+ = {W, X, Y, Z} (applying the closure algorithm of Section 4.6.2)
(T ∩ R3))+ ∩ R3 = {W, X, Y, Z} ∩ {Z, W} = {Z, W}
T ∪ ((T ∩ R3)+ ∩ R3) = {Z, W, Y} ∪ {Z, W} = {Z, W, Y}
T = T ∪ ((T ∩ R3)+ ∩ R3) = {Z, W, Y}

Step (3)
4th time (with respect to W ⇒ X)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {Z, W, Y} ∩ {X, Y} = {Y}
(T ∩ R1)+ = {Y}+ = {Y, Z, W, X}
(T ∩ R1)+ ∩ R1 = {Y, Z, W, X} ∩ {X, Y} = {X, Y}
T ∪ ((T ∩ R1)+ ∩ R1) = {Z, W, Y} ∪ {X, Y} = {Z, W, Y, X}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {Z, W, Y, X}
T = {Z, W, Y, X} (This value of T is carried over the next iteration with R2)

Step (3)
4th time (with respect to W ⇒ X)
At this moment the algorithm calls for repeating step 3 with the Ri's; however, after executing these steps the set T no
longer changes. We have omitted these steps here and continue with step 4.

Step (4)
1st time (with respect to W ⇒ X)
Since X (the right-hand side of the FD under consideration) is such that
{X} ⊂ T = {Z, W, Y, X}, then W ⇒ X ∈ G+.

Step (5)
1st time (with respect to W ⇒ X)
Since all the FD of F are elements of G+, the two sets are equivalent and the decomposition preserves the dependencies
of F.

So far we have considered systematic procedures to test for the lossless-join and dependency preservation properties of a
decomposition. However, the reader should be aware that the two properties do not imply each other. That is, it is
possible to have a lossless decomposition that does not preserve the functional dependencies of the original relation and
vice versa. Solved Problem 5.15 illustrates the use of an algorithm that allows us to find a 3NF lossless decomposition
of a given relation that preserves the dependencies of the original relations. Likewise Solved Problem 5.16 shows an
algorithm that provides us with a lossless BCNF decomposition of a given relation.
                                                                                                                       Page 178

Solved Problems

5.1. In the EMPLOYEE table shown below, identify the table identifier, all repeating and nonrepeating attributes.
Flatten the table and state if the resulting table is a relation. If not, how can you make it a relation?


EMPLOYEE

     ID         Last-Name       Department      Dependent-      Dependent-     Dependent-      Dependent-
                                                  Name            DOB             Sex             ID

 322135609        Cordani            CS            Mary          01/12/60            F         800980432
                                                   Cindy         04/24/65            F         953635262
                                                   John          07/12/68            M         992556631

 423542641        Strange            VP            Fern          03/28/62            F         790902462
                                                  Victoria       11/12/84            F         800234979

 536234809      VanKlaveren         Sales           Sadie        08/31/65            F         970073473

 632390802         Miller           Sales           Sallie       09/21/45            F         890721289

 980772345        Kroeger           MIS           Jonathan       08/15/85            M         943632552


The table identifier is the attribute ID. The nonrepeating attributes are: ID, Last-name and Department. The repeating
attributes are: Dependent-Name, Dependent-Sex, and Dependent-ID.

To flatten the table we have to fill in all the entries of the table by copying the information of the corresponding
nonrepeating attributes. The normalized table looks like this:


     ID         Last-Name       Department      Dependent-      Dependent-     Dependent-      Dependent-
                                                  Name            DOB             Sex             ID

 322135609        Cordani            CS            Mary           01/12/60           F          800980432
 322135609        Cordani            CS            Cindy          04/24/65           F          953635262
 322135609        Cordani            CS            John           07/12/68           M          992556631

 423542641        Strange            VP            Fern           03/28/62           F          790902462
 423542641        Strange            VP           Victoria        11/12/84           F          800234979

 536234809     VanKlaveren          Sales           Sadie         08/31/65           F          970073473

 632390802         Miller           Sales           Sallie        09/21/45           F          890721289

 980772345        Kroeger           MIS           Jonathan        08/15/85           M          943632552
                                                                                                                        Page 179

This ''flat" table is not a relation because it does not have a primary key. Notice, for instance, that ID (the table
identifier) no longer identifies any of the first three rows of this table. To transform this table into a relation we need to
identify a suitable primary key for the relation. The composite key (ID, Dependent-ID) seems to be a suitable primary
key.

5.2. Normalize the table of the previous example by creating two new relations. The table is reproduced below for the
convenience of the reader.


     ID          Last-Name       Department       Dependent-     Dependent-      Dependent-      Dependent-
                                                    Name           DOB              Sex             ID

 322135609         Cordani            CS             Mary          01/12/60            F          800980432
                                                     Cindy         04/24/65            F          953635262
                                                     John          07/12/68            M          992556631

 423542641         Strange            VP             Fern          03/28/62            F          790902462
                                                    Victoria       11/12/84            F          800234979

 536234809      VanKlaveren          Sales           Sadie         08/31/65            F          970073473

 632390802          Miller           Sales           Sallie        09/21/45            F          890721289

 980772345         Kroeger           MIS           Jonathan        08/15/85            M          943632552


To normalize this table we need to create two new relations. The attributes of the first relation are the table identifier
and all the nonrepeating attributes. The attributes of the second table are the table identifier and all the repeating
attributes. The schemes of these two relations are shown below. Observe that the attribute ID (of Employee) has been
renamed in the Dependent relation.

                                            Employee (ID, Last-name, Department)

                         Dependent (Emp-ID, Dependent-ID, Dependent-Name, Dependent-Sex)

The corresponding instances of these two relations are shown next. Notice that duplicate rows have been deleted to
comply with the definition of a relation. PKs are underlined.


Employee                                         Dependent

     Id         Last-Name       Department         Emp-Id       Dependent- Dependent- Dependent- Dependent-
                                                                    Id       Name       DOB         Sex

 322135609        Cordani            CS           322135609     800980432          Mary          01/12/60           F

 423542640        Strange            VP           322135609     953635262          Cindy         04/24/65           F

 536234809 VanKlaveren              Sales         322135609     992556631          John          07/12/68           M

 632390802         Miller           Sales         423542641     790902462           Fern         03/28/62           F
980772345   Kroeger   MIS   423542641   800234979   Victoria   11/12/84   F

                            536234809   970073473    Sadie     08/31/65   F

                            632390802   890721289    Sallie    09/21/45   F

                            980772345   943632552   Jonathan   08/15/85   M
                                                                                                                        Page 180

5.3. Consider the relational scheme of the relation SCHEDULE shown below. What is the highest normal form of this
relation? What type of data anomalies does this relation have? Give an example of the type of data anomalies that this
relation may experience.

SCHEDULE (Student-ID, Class No, Student-Name, Student-Major, Class-Time, Building-Room, Instructor). Assume
the following functional dependencies.


                                               Student-ID ⇒ Student-Name
                                               Student-ID ⇒ Student-Major
                                               Class-No ⇒ Class-Time
                                               Class-No ⇒ Building-Room
                                               Class-No ⇒ Instructor


There are some partial dependencies on the key, for example, Class-No ⇒ Building-Room or Student-ID ⇒ Student-
Major. Therefore, the highest form of the relation is in1NF.

Since the relation is in 1NF, there are insertion/deletion anomalies and update anomalies. For instance, if a student drops
all his classes, the relation will experience deletion anomalies because information about the student number, name and
major will also be lost. In addition, if the student is the last student in the class, information about the instructor will also
disappear. Since there are deletion anomalies the relation will also experience insertion anomalies, for instance,
information about Class-Time, Building-Room and Instructor cannot be inserted into the relation until there is a student
enrolled in the class. Update anomalies occur if, for instance, a class is changed from one building to another. In this
case, it is necessary to make sure that all tuples of the relation are changed or the database may end up in an inconsistent
state.

5.4. Consider the relation scheme and FD shown below. What is the highest normal form of this relation? Transform this
relation to its next higher form. Can the information of the given relation be recovered? What operation is necessary to
recover it?

   Programmer-Task (Programmer-ID, Programming-Package-ID,
   Programming-Package-Name, Total-Hours-Worked-on-Package).

   Programming-Package-ID ⇒ Programming-Package-Name

The highest form of this relation is 1NF because there are partial dependencies on the composite key. Consider for
example, Programming-Package-ID ⇒ Programming-Package-Name.

The next highest form of this relation is 2NF. To transform it we can use Fig. 5-3 as a guide. According to this figure,
we need to create two new relations. The first relation has as its key the primary key of the given relation: Programmer-
ID, Programming-Package-ID. The scheme of this first relation is:

   Programmer-Activity (Programmer-ID, Programming-Package-ID,
   Total-Hours-Worked-on-Package)

The second relation has as its primary key the attribute Programming-Package-ID. The scheme of this relation is:

   Package-Info (Programming-Package-ID, Programming-Package-Name)

The information of the original relation can be recovered by means of a join operation on the common attribute:
Programming-Package-ID.
                                                                                                                    Page 181

5.5. Show that the two definitions of 3NF given in Section 5.8 are equivalent.

The conditions given in Fig. 5-4 are the general conditions for transitivity dependencies. Any relation that satisfies these
conditions has a transitive dependency and is not in 3NF. Assuming the A is the single key of the relation, we will have
that attributes B and C cannot be keys since they do not functionally determine A. Attributes B and C are nonprime
attributes. Notice that even if A ⇒ C is not explicitly stated in the diagram it can be determined by the transitivity
axiom.

In Fig. 5-4 the only way to avoid having A ⇒ C is not having B ⇒ C. If we generalize this situation to any two
nonprime attributes B and C, we can see that both definitions of 3NF are equivalent.




                                                   Conditions that define the
                                                    transitive dependency of
                                                   attribute C on attribute A.

5.6. Consider the relation scheme (Sales-Transaction-No, Item-No, Item-Price, Item-Quantity-Sold, Seller, Seller-
District) and the FDs shown below. What is the key of this relation? Transform this relation to 3NF.

   Sales-Transaction-No, Item-No ⇒ Item-Quantity-Sold
   Item-No ⇒ Item-Price
   Sales-Transaction-No ⇒ Seller
   Seller ⇒ Seller-District

The key of this relation is the composite attribute Sales-Transaction-No, Item-No. In fact, these two attributes determine
all other attributes as indicated next.

    a. Sales-Transaction-No, Item-No ⇒ Sales-Transaction-No (Reflexivity axiom)
b. Sales-Transaction-No, Item-No ⇒ Item-No (Reflexivity axiom)
c. Sales-Transaction-No, Item-No ⇒ Item-Quantity-Sold (given)
d. From Sales-Transaction-No, Item-No ⇒ Item-No (Reflexivity axiom) and Item-No ⇒ Item-Price (given) we have
that Sales-Transaction-No, Item-No ⇒ Item-Price (Transitivity axiom)
e. From Sales-Transaction-No, Item-No ⇒ Sales-Transaction-No (Reflexivity axiom) and Sales Transaction-No ⇒
Seller (given) we have that Sales-Transaction-No, Item-No ⇒ Seller (Transitivity axiom)
f. From Sales-Transaction-No, Item-No ⇒ Seller (step e) and Seller ⇒ Seller-District we have that Sales-Transaction-
No, Item-No ⇒ Seller-District (Transitivity axiom)

The highest form of this relation is 1NF because there are partial dependencies on the primary key.

To transform it into 2NF, we will use Fig. 5-3 as a guide. However, notice that we need to consider each of the partial
dependencies separately. Therefore, instead of replacing the original relation with two, we need to replace it with three
new relations. These relations are:

    a. Item-Sold(Sales-Transaction-No, Item-No, Item-Quantity-Sold)
b. Item(Item-No, Item-Price)
c. Seller(Sales-Transaction-No, Seller, Region)
                                                                                                                     Page 182

Relations (a) and (b) are in 3NF since the only nonprime attribute is fully dependent on the key. Relation (c) is not in
3NF because one of the nonprime attributes (Seller) functionally determines another nonprime attribute (Region). This
relation can be transformed into 3NF by following the guidelines of Fig. 5-3. The new two relations are:

   Seller-Transaction(Sales-Transaction-No, Seller)
   Seller-Region(Seller, Region)

5.7. Transform into 2NF the relation of the Solved Problem 5.3. The relation and all its dependencies are reproduced
below.

SCHEDULE (Student-ID, Class No, Student-Name, Student-Major, Class-Time, Building-Room, Instructor).

Assume the additional functional dependencies also hold:

   Student-ID ⇒ Student-Name
   Student-ID ⇒ Student-Major
   Class-No ⇒ Class-Time
   Class-No ⇒ Building-Room
   Class-No ⇒ Instructor

In all cases where we need to transform a relation into 2NF, we have been using Fig. 5-3 as a general guideline for the
conversion. However, in this example, the solution is not as direct as in all previous cases. The reason for this is that the
key is composite and each one of the prime attributes partially determines some other nonprime attributes. Therefore,
instead of two relations we have to create at least three relations. These relations are:

STUDENT (Student-ID, Student-Name, Student-Major). Notice that all the attributes are dependent on the primary key
Student-ID.

CLASS (Class-No, Class-Time, Building-Room, Instructor). Notice that all the attributes are dependent on the primary
key Class-No.

Since the normalization process is reversible we should be able to recover the original relation, therefore, we need an
extra relation to make this possible. In this case, we create a new relation STUDENT-CLASS (Student-ID, Class No).

5.8. Consider the relation r(X, Y, Z, W) and a set F = {Y ⇔ W, XY ⇒ Z} where the symbol ⇔ means that Y ⇒ W and
W ⇒ Y simultaneously. What are the candidate keys of this relation? What is the highest normal form of this relation?

This relation has two candidate keys: XY and WX.

XY is a candidate key because XY determines all other attributes as shown below.

    a. XY ⇒ X (Reflexivity axiom)
b. XY ⇒ Y (Reflexivity axiom)
c. XY ⇒ Z (given)
d. XY ⇒ Y and Y ⇒ W then XY ⇒ W (Transitivity Axiom)
                                                                                                                    Page 183

WX is a candidate key because WX determines all other attributes as shown below.

    a. WX ⇒ W (Reflexivity)
b. WX ⇒ X (Reflexivity)
c. We already know that XY ⇒ Z (given). We also know that W ⇒ Y (given). Using the Pseudotransitivity axiom, we
have that XW ⇒ Z.
d. WX ⇒ W (step a) and W ⇒ Y (given) therefore WX ⇒ Y (Transitivity axiom)

The prime attributes are: X, Y and W. The only nonprime attribute is Z.

The relation is in 2NF because there are no partial dependencies of the nonprime attribute on the key. In both cases we
have that Z is fully dependent on both keys.

The relation is in 3NF because there is only one nonprime attribute. Therefore, we cannot have one nonprime attribute
determining another nonprime.

The relation is not in BCNF because the determinants of either W ⇒ Y or Y ⇒ W are not keys of the relation.
Therefore, the highest form of this relation is 3NF.

5.9. Given the relation r(X, Y, W, Z, P, Q) and the set F = { XY ⇒ W, XW ⇒ P, PQ ⇒ Z, XY⇒ Q}, consider the
decomposition R1(Z, P, Q), R2(X, Y, Z, P, Q). Is this decomposition lossless or lossy? Use the Lossless-Join algorithm.

Step (1)
Construct a table with six columns (one column per attribute) and two rows (one row per relation of the decomposition).
Name each column with the name of one attribute and each row with the name of a relation.


            X(A1)      Y(A2)      Z(A3)     W(A4)       P(A5)     Q(A5)

R1

R2


Step (2)
Fill in the entries as follows:
The attributes of the scheme of R1 are: Z (A3), P(A5), Q(A6). Therefore, we place a3, a5 and a6 under these columns
respectively. The remaining entries of this row are filled with b11, b12, and b14 respectively.
The attributes of the scheme of R2 are: X(A1), Y(A2), W(A4), P(A5), Q(A6).
Therefore, we place a1, a2, a4, a5 and a6 under these columns respectively. The remaining entry of this row is filled with
b23.


            X(A1)      Y(A2)      Z(A3)     W(A4)       P(A5)     Q(A5)

R1            b11        b12        a3        b14         a5         a6

R2            a1         a2         b23        a4         a5         a6



Step (3)
1st time
Considering XY ⇒ W we check if the two rows of the table have the same value under the columns that make up the
determinant of the FD. Since the rows do not have identical values we repeat step 3 and consider another FD.
                                                                                                                   Page 184

Step (3)
2nd time
Considering XW ⇒ P we check if the two rows of the table have the same value under the columns that make up the
determinant of the FD. Since the rows do not have identical values we repeat step 3 and consider another FD.

Step (3)
3rd time
Considering PQ ⇒ Z we check if the two rows of the table have the same value under the columns that make up the
determinant of the FD. Since the rows do have identical values under the attributes P and Q respectively, we make equal
the entries of the two rows under attribute Z. Since one of the values is a3, we make the other entry equal to this value.


           X(A1)     Y(A2)       Z(A3)     W(A4)         P(A5)         Q(A5)

R1         b11       b12         a3        b14           a5            a6

R2         a1        a2          a3        a4            a5            a6


Although the algorithm requires that we continue the table will not change. We have omitted these steps and continue
with step 4.

Step (4)
1st time
Since one of the rows has become all ai's, the decomposition is lossless.

5.10. Given the relation r(X, Y, Z, W, Q) and the set F = {XY ⇒ WQ, Z ⇒ Q, W ⇒ Z, Q ⇒ X,}, find the FDs that are
satisfied by relation R1(X, Y, Z) of a decomposition (the other relations are not shown here) by projecting the set of
dependencies F onto the attributes of the scheme of these relations.

To determine π{X,Y,Z}(F) consider the different proper subsets of the scheme (X, Y, Z) and calculate their closure. These
subsets are: {X}, {Y}, {Z}, {X, Y}, {Y, Z}, {X, Z}.

For the single element subsets the closures are:



For the two-element subsets the closures are:



From each of the individual closures, we choose X ⇒ Y if Y is an element of {X}+ and the following conditions are met
simultaneously: (a) Y ⊂ {X, Y, Z}, (b) Y ∈ X+ (with respect to F), (c) Y ⊄ X.

Closures {X}+ and {Y}+ only produce trivial dependencies which are not included in π{X,Y,Z}(F).

Therefore, from {Z}+ we select Z ⇒ X. That is we add this FD to {X, Y, Z}(F). We also have Z ⇒ Q but attribute Q is
not part of the scheme {X, Y, Z} as required by condition (a) indicated above.


   Closure {XY}+ = {X, Y, W, Q, Z} produces XY ⇒ Z
Closure {YZ}+ = {Y, Z, Q, X, W, Q} produces YZ ⇒ X
Closure {XZ}+ = (X, Z, Q} produces only trivial dependencies
The elements of π {X,Y,Z}(F) are {XY ⇒ Z, YZ ⇒ X, Z ⇒ X}
Eliminating redundant FDs we have that π {X,Y,Z}(F) = {XY ⇒ Z, Z ⇒ X}
                                                                                                                Page 185

5.11. Consider the relation r(X, Y, Z, W) and the decomposition ρ = {R1(X, Y), R2(Z, W)}. Is this relation dependency
preserving with respect to F = {X ⇒ Y, Z ⇒ W}?

For explanation purposes and to be somewhat methodical, we will consider the different FDs of the set in the order in
which they are listed in F.

Step (1)
1st time (with respect to X ⇒ Y)
Initializing T to the determinant of the FD under consideration we have T = {X}.

Steps (2/3)
1st time (with respect to X ⇒ Y)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {X} ∩ {X, Y} = {X}
(T ∩ R1)+ = {X}+ = {X, Y} (applying the closure algorithm of Section 4.6.2)
(T ∩ R1)+ ∩ R1 = {X, Y} ∩ {X, Y} = {X, Y}
T ∪ ((T ∩ R1)+ ∩ R1) = {X} ∪ {X, Y} = {X, Y}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {X, Y} (This is the value of X that is carried over the next iteration with R2)

Step (3)
2nd time (with respect to X ⇒ Y)
Applying the R2 operation T ∪ ((T ∩ R2)+ ∩ R2) with respect to F we have that
T ∩ R2 = X, Y} ∩ {Z, W} = ∅
(T ∩ R2)+ = ∅+ = ∅
(T ∩ R2)+ ∩ R2 = ∅ ∩ {Z, W}= ∅
T ∪ ((T ∩ R2)+ ∩ R2) = X,Y} ∪ ∅ = {X, Y}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {X, Y} (This is the value of X that is carried over the next iteration with R1)

Step (3)
3rd time (with respect to X ⇒ Y)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {X, Y} ∩ {X, Y} = {X, Y}
(T ∩ R1)+ = {X, Y}+ = {X, Y} (applying the closure algorithm of Section 4.6.2)
(T ∩ R1)+ ∩ R1 = {X, Y} ∩ {X, Y} = {X, Y}
T ∪ ((T ∩ R1)+ ∩ R1) = {X, Y} ∩ {X, Y} = {X, Y}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {X, Y} (This is the value of X that is carried over the next iteration with R2)
Since the set T will no longer change, we continue with step 4.

Step (4)
1st time (with respect to X ⇒ Y)
Since Y (the right-hand side of the FD under consideration) is such that




Steps (2/3)
1st time (with respect to Z ⇒ W)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {Z} ∩ {X, Y} = ∅
(T ∩ R1)+ = ∅ + = ∅
(T ∩ R1)+ ∩ R1 = ∅∩ {X, Y} = ∅
T ∪ ((T ∩ R1)+ ∩ R1) = {Z} ∪ ∅ = {Z}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {Z} (This is the value of X that is carried over the next iteration with R2)
                                                                                                                 Page 186

Step (3)
2nd time (with respect to Z ⇒ W)
Applying the R2 operation T ∪ ((T ∩ R2)+ ∩ R2) with respect to F we have that
T ∩ R2 = {Z} ∩ {Z, W} = {Z}
(T ∩ R2)+ ={Z}+ = {Z, W} (applying the closure algorithm of Section 4.6.2)
(T ∩ R2)+ ∩ R2 = {Z, W} ∩ {Z, W} = {Z, W}
T ∪ ((T ∩ R2)+ ∩ R2) = {Z} ∪ {Z, W} = {Z, W}
T = T ∪ ((T ∩ R2)+ ∩ R2) = {Z, W} (This is the value of X that is carried over the next iteration with R1)

Step (3)
3rd time (with respect to Z ⇒ W)
Applying the R1 operation T ∪ ((T ∩ R1)+ ∩ R1) with respect to F we have that
T ∩ R1 = {Z, W} ∩ {X, Y} = ∅
(T ∩ R1)+ = ∅+ = ∅
(T ∩ R1)+ ∩ R1 = ∅ ∩ {X, Y} = ∅
T ∪ ((T ∩ R1)+ ∩ R1) = {Z, W} ∪ ∅ = {Z, W}
T = T ∪ ((T ∩ R1)+ ∩ R1) = {Z, W}
Since the set T will no longer change, we continue with step 4.

Step (4)
1st time (with respect to Z ⇒ W)
Since W (the right hand side of the FD under consideration) is such that




Step (5)
1st time
The previous results have shown that both X Y and Z W are elements of G+, therefore, the decomposition ρ = {R1(X,
Y), R2(Z, W)} preserves the dependencies.

5.12. Show that every two-attribute relation is in BCNF. That is, if r(X, Y) then r(X, Y) is in BCNF.

Let us consider the following cases:

a. X is the sole key of the relation. In this case, the nontrivial dependency X ⇒ Y has X as a superkey since X ⊂ X.

b. Y is the sole key of the relation. In this case, the nontrivial dependency Y ⇒ X has Y as a superkey since Y ⊂ Y.

c. Both X ⇒ Y and Y ⇒ X hold simultaneously. Then whatever PK we consider for the relation we will have either X
or Y as its determinant. Either one of the two possible cases has already been considered under (a) or (b).

5.13. Consider the relation r(A, B, C, D, E) and the set F = {AB ⇒ CE, E ⇒ AB, C ⇒ D}. What is the highest normal
form of this relation?

Since r is a relation by definition the relation is already in 1NF.

To determine the normal form of the given relation, we need to determine all possible keys of the relation. The two
possible keys of this relation are AB and E. Let us see why this is so.

AB is a key
(1) AB ⇒ A (Reflexivity axiom)
(2) AB ⇒ B (Reflexivity axiom)
(3) From AB ⇒ CE (given) we have that AB ⇒ C (Projectivity axiom)
(4) From AB ⇒ CE (given) we have that AB ⇒ E (Projectivity axiom)
(5) From AB ⇒ C (step 3) and C ⇒ D (given) we have that AB ⇒ D (Transitivity axiom)
                                                                                                                       Page 187

Since AB determines all attributes of the relation AB is a key.

E is a key
Since E ⇒ AB (given) and AB is a key then E is also a key because by application of the
Transitivity axiom E can functionally determine all other attributes of the relation.
The prime attributes are: A, B, and E.
The nonprime attributes are: C and D.
The relation is in 2NF because there are no partial dependencies on any of the key.
The relation is not in 3NF because there is a transitivity dependency on the keys. Notice that
C ⇒ D and both attributes are nonprime.

5.14. Given the relation r(A, B, C) and the FDs A ⇒ B and B ⇒ C, we know that r is not in 3NF because there is a
transitivity dependency on the key A. Would this relation be in 3NF if C ⇒ B is true for this relation?

The relation is not in 3NF even if this functional dependency is true. Refer to Fig. 5-4 and notice that C ⇒ B is not
required.

5.15. The algorithm shown below takes as its input a relation r(R), a canonical set Fc of functional dependencies and a
candidate key K of the relation. The output of the algorithm is a decomposition in third normal form of the relation ρ =
(R1, R2, R3, . . ., Rn) that is lossless and preserves the dependencies.7

(1) Find all attributes of the scheme of the relation r that do not appear as part of the determinant or as part of the right-
hand side of any dependency in Fc. If there are attributes that meet this condition form a set A with these attributes and
do steps 1-a and 1-b, otherwise continue with step 2.
(1-a) Create a relation with the attributes of the set A. That is, create r(A)
(1-b) Remove all the attributes of the set A from the scheme of the relation r. That is, set R = R – {A}

(2) Look for a functional dependency X ⇒ Y in Fc such that all the attributes that remain in R appear in the dependency.
If such a functional dependency is found then create the relation r(X, Y) and stop executing the algorithm. Otherwise
continue with step 3.

(3) For every X ⇒ A in Fc (single attribute A since Fc is a canonical set) form a relation Ri(X, A) where X ⇒ A. When
all FDs of Fc have been considered continue with step 4.

(4) Combine, if any, all relational schemes that have the same left-hand side. That is, combine Rj(X, Z) where X ⇒ Z
with Rk(X, W) where X ⇒ W and form a relation Rjk(X, ZW) where X ⇒ ZW. Continue with step 5.

(5) If all the elements of the key K do not appear as part of the determinant associated with any of the relations formed
in step 4, create a new relation whose attribute is the key K. Continue with step 6.

(6) The different relations Ri(X,Y) form a 3NF lossless decomposition that preserves the dependencies.
   7 Adapted from An Introduction to Database Systems by B. C. Desai, West Publishing Company, 1990.
                                                                                                                      Page 188

The following problem illustrates the use of this algorithm.

Given the relation r(X, Y, Z, W, Q) and the canonical set Fc = {X ⇒ Y, XZ ⇒ W, YW ⇒ Q} find a 3NF decomposition
using the algorithm of the previous problem.

Before applying the algorithm we need to find a candidate key for the given relation. In this case, that key is the
composite attribute XZ. Let's see why this so.

XZ is a key.
(1) XZ ⇒ X (Reflexivity axiom)
(2) XZ ⇒ Z (Reflexivity axiom)
(3) From X ⇒ Y (given) and XZ ⇒ X (from 1) we have that XZ ⇒ Y (Transitivity axiom)
(4) XZ ⇒ W (given)
(5) From X ⇒ Y (given), XZ ⇒ W (given) and YW ⇒ Q we have that XXZ ⇒ Q (Pseudotransitivity axiom). The
determinant of the latter FD can be written as XZ ⇒ Q because the union of attributes is commutative.

Since XZ functionally determines all other attributes XZ is a key of the relation. Applying the algorithm of Solved
Problem 5.15 we have the following:

Step (1)
There are no attributes in the scheme of r(X, Y, ZW, Q) that do not appear as part of a functional dependency of Fc.
Continue with step 2.

Step (2)
There is not a single functional dependency that has all the elements of the scheme of the given relation.

Step (3)
Considering X ⇒ Y we form the relation R1(X, Y)
Considering XZ ⇒ W we form the relation R2(X, Z, W)
Considering YW ⇒ Q we form the relation R3(Y, W, Q)

Step (4)
There are no relations where their associated FDs have the same determinant. Continue with step 5.

Step (5)
The attributes of the key (XZ) appear as part of the determinant of the functional dependency (XZ ⇒ Z) associated with
the relation Rxzw(X, Z, W), therefore, there is no need to create another relation whose scheme is the candidate key XZ.

The decomposition ρ = {R1(X, Y), R2(X, Z, W), R3(Y, W, Q)} is lossless. To verify this we can apply the lossless-join
algorithm of Section 5.11.1. The initial table corresponding to steps 1 and 2 is shown next.


          X(A1)     Y(A2)      Z(A3)     W(A4)      Q(A5)

R1          a1         a2        b13        b14       b15

R2          a1        b22        a3         a4        b25

R3         b31         a2        b33        a4         a5
                                                                                                                     Page 189

Considering the FD of the canonical set Fc = {X ⇒ Y, XZ ⇒ W, YW ⇒ Q} and by successive application of step 3 the
table looks like the one shown below.


          X(A1)      Y(A2)       Z(A3)     W(A4)       Q(A5)

R1          a1          a2        b13        b14         b15

R2          a1          a2         a3         a4         a5

R3          b31         a2        b33         a4         a5


Since one of the rows (R2) has all ai's the decomposition is lossless. We leave as an exercise to the reader to prove that
the decomposition preserves the dependencies.

5.16. The algorithm shown below takes two inputs. The first input is a relation r(R). The second input is a nonredundant
cover F' of the set F of functional dependencies that are satisfied by r(R). The output of the algorithm is a lossless BCNF
decomposition ρ = (R1, R2, R3, . . ., Rn). The resulting decomposition may or may not satisfy all the FDs that are satisfied
by the original relation. Notice that the algorithm only guarantees that the decomposition is lossless, not that it preserves
the dependencies of the original relation. The reader should be aware that the order in which the FDs are selected in step
2 of the algorithm affects the resulting decomposition.

(1) Initialize a relation Sin to the given relation r(R). That is, Sin has the same scheme R of the relation r.
Initialize a set of relations Sout to the empty set, that is, set Sout = {}.
Initialize an integer variable j to zero. That is, j = 0.

(2) Look for a nontrivial X ⇒ Y in F' such that X is not a superkey of Sin. There are two outcomes to this search:

(2-a)
If such a functional dependency is found do the following:
Increment j, that is, set j = j + 1
Create a relation Rj(X, Y) where X is the key of the relation. The relation Rj satisfies X ⇒ Y.
Add the relation Rj(X, Y) to the set Sout. That is, set Sout = Sout ∪ Rj.
Remove the right-hand side of X ⇒ Y from Sin. That is, set Sin = Sin – {Y}
Remove X ⇒ Y from the set F'.
If there are attributes left in Sin and there are FDs in F' then repeat step 2, otherwise do step 3.

(2-b)
If no such functional dependency is found do step 3. Notice that this condition will occur when there are FDs X ⇒ Y in
F' such that XY ⊄ Sin.
                                                                                                                          Page 190

(3) If there are no FDs left in F' and there are no attributes left in Sin, the relations of Sout form a BCNF decomposition of
the given relation r(R) that is both lossless and contains the same set of FDs of the original relations. If there are
attributes left in Sin but there are no FDs left in F' or if there are no attributes left in Sin but there are FDs left in F' then
the procedure produces a decomposition that is lossless but does not preserve all the FDs of the original relations. The
final decomposition is Sout ∪ Sin.

Consider the relation r(X, Y, W Z, P, Q) and the nonredundant set F' of FDs = {XY ⇒ W, XW ⇒ P, PQ ⇒ Z, XY ⇒
Q}.

Step (1)
Initialize a relation Sin to the given relation r(R). Sin = {X, Y, W, Z, P, Q}
Initialize a set of relations Sout to the empty set, that is, set Sout = {}.
Initialize an integer variable j to zero. That is, j = 0.

Step (2/2-a)
1st time
Consider the nontrivial FD: XY ⇒ W. Notice that this FD is not a superkey.
Increment j, that is, set j = 1
Create a relation R1(XY, W) where XY is the key of the relation. The relation
R1 satisfies XY ⇒ W.
Add the relation R1(XY, W) to Sout. Sout = Sout ∪ R1 = R1(XY, W)
Remove the right-hand side of XY ⇒ W from Sin. That is, set Sin = {X, Y, W, Z, P, Q} – {W} = {X, Y, Z, P, Q}
Remove XY-W from the set F'. That is, F'= {XW ⇒ P, PQ ⇒ Z,
XY ⇒ Q}

Step (2/2-a)
2nd time
Consider the nontrivial FD: XY ⇒ Q. Notice that this FD is not a superkey.
Increment j, that is, set j = 2
Create a relation R2(XY, Q) where XY is the key of the relation. The relation
R2 satisfies XY ⇒ Q.
Add the relation R2(XY, Q) to Sout. Sout = Sout ∪ R2 = {R1(XY, W),
R2(XY, Q)}
Remove the right-hand side of XY ⇒ Q from Sin. That is, set
Sin = {X, Y, Z, P, Q} – {Q} = { X, Y, Z, P}
Remove XY ⇒ Q from the set F'. That is, F' = {XW ⇒ P, PQ ⇒ Z}

Step (2/2-b)
1st time
No FD can be considered because Sin = {X, Y, Z, P} and
F' = {XW ⇒ P, PQ ⇒ Z}. Notice that neither {XWP} ⊂ Sin = {X, Y, Z, P} nor
{PQZ} ⊂ Sin = {X, Y Z, P}

Step (3)
1st time
The resulting decomposition is Sout = {R1(XY, W), R2(XY, Q), R3(X, Z, W)}
The resulting decomposition does not preserve the dependencies of the
original relation because the XW ⇒ P and PQ ⇒ Z are not associated with any
relation Ri. However, the decomposition Sout is lossless. The final table of the
application of the lossless-join algorithm after considering all the FDs of F' is
shown below. Notice that at least one row is all ai's.
     X(A1)   Y(A2)   W(A3)   Z(A4)   P(A5)   Q(A6)

R1    a1      a2      a3              a5

R2    a1      a2      a3      a4      a5      a6

R3    a1      a2      a3      a4      a5      a6
                                                                                                                     Page 191

Supplementary Problems

5.17. Verify that if the FDs of Solved Problem 5.16 are considered in the following order: PQ ⇒ Z, XW ⇒ P, XY ⇒ Q
and XY ⇒ W, the resulting BCNF decomposition is lossless and preserves the dependencies.

5.18. Given the relation r(A, B, C, D, E, F, G, H, I, J, K, L) and the set F = {A ⇒ B, A ⇒ C, A ⇒ D, AE ⇒ G, B ⇒ C,
D ⇒ C, E ⇒ F, E ⇒ H, H ⇒ I, JKL ⇒ E, JKL ⇒ H, LHK ⇒ J, LHK ⇒ E, LAK ⇒ J, LAK ⇒ E, LKE ⇒ J} find a
3NF lossless and preserving dependency decomposition. Verify that the key is the composite set of attributes AKL.
Assume that all attributes are single letters.

5.19. Consider the following relation REALTOR(Property-No, Date-Sold, License-No, Commission, Bonus). Assume
also that the following dependencies hold in this database: Date-Sold ⇒ Bonus, and License-No ⇒ Commission. If we
assume that attributes Property-No and License-No form a composite key, what is the highest normal form of this
relation?

5.20. Consider the relation r(A, B, C, D, E, F) and the set F = (A ⇒ B, C ⇒ DF, AC ⇒ E, D ⇒ F}. What is the key of
the relation? What is the highest normal form of this relation? If it is not in 3NF find a decomposition that is lossless and
dependency preserving.

5.21. Consider the relation r(A, B, C,D), the set F = {A ⇒ B, C ⇒ D} and the decomposition R1(AB) and R2(CD). Is
this decomposition lossless? Does it preserve the dependencies of the set F?

5.22. Given the relation r(A, B, C, D, E, F) and the set F = (A ⇒ B, CD ⇒ A, BC ⇒ D, AE ⇒ F, CE ⇒ D}, verify that
the decomposition R1(C, D, E), R2(A, B), R3(A, E, F) and R4(A, C, E) is a BCNF lossless decomposition.

5.23. Consider the set of FDs = {Employee ⇒ Department, Employee ⇒ Title, Employee ⇒ Pay-Scale, Title ⇒ Pay-
Scale}, and find at least two different lossless decompositions for the given relation.

5.24. Consider the relation Supplier (Supplier-No, Part-No, Supplier-Name, Supplier-Control, Price) and assume that
only the following FDs hold for this relation: Supplier-No ⇒ Supplier-Name, Supplier-No ⇒ Supplier-Control. What
type of data anomalies does this relation have in its present form? Transform it to 3NF if not already in that form.
                                                                                                                    Page 192

5.25. Find the highest normal form of the relation r(A, B, C, D) if the following FDs are satisfied by the relation F =
{AB ⇒ D, AC ⇒ BD, B ⇒ C}.

5.26. Consider the relation for release RECORD (Title, Performer, Style, Price, Label, Producer) and the dependencies
shown below. Indicate what is the highest normal form of this relation. Indicate a possible 3NF decomposition of this
relation.

Title ⇒ Label, Style    Style ⇒ Price    Performer ⇒ Producer

Answers to Supplementary Problems

5.17. Sout = {R1(P, Q, Z) satisfies PQ ⇒ Z, R2(X, W, P) satisfies XW ⇒ P, R3(X, Y, Q) satisfies XY ⇒ Q, R4(X, Y, W)
satisfies XY ⇒ W}.

5.18. The following FDs are redundant and do not appear as members of the canonical cover for the set F: {A ⇒ C, JLK
⇒ H, LKE ⇒ J, LKH ⇒ E, LAK ⇒ J}. The decomposition has the following relations: R1(A, B, D) that satisfies A ⇒
BD, R2(B, C) that satisfies B ⇒ C, R3(D, C) that satisfies D ⇒ C, R4(E, F, H) that satisfies E ⇒ FH, R5(H, I) that
satisfies H ⇒ I, R6(J, L, K, E) that satisfies JLK ⇒ E, R7(L, H, K, J) that satisfies LHK ⇒ J, R8(L, A, K, J) that satisfies
LAK ⇒ J, and R9(A, E, G) that satisfies AE ⇒ G. There are no relations that contain attributes that do not appear as part
of the determinant or the right-hand side of the FDs of F. The key appears as part of the determinant of a relation.

5.19. There is a partial dependency on the key. Consider the FD: License-No ⇒ Commission. Therefore, the highest
normal form is 1NF.

5.20. The key of the relation is the composite attribute AC. As it stands this relation is only 1NF. A 3NF decomposition
of this relation is R1(A, C, E), R2(C, D), R3(D, F) and R4(A, B). This decomposition is lossless and preserves the
dependencies.

5.21. The decomposition preserves the functional dependencies but is not lossless.

5.22. Show that all relations are in BCNF and use the lossless-join algorithm to show that they are a lossless
decomposition.
                                                                                                                       Page 193

5.23. R1(Employee, Department, Title) and R2(Title, Pay-Scale). Two other decompositions are: R1(Employee, Title) and
R2(Employee, Department, Pay-Scale) or R1(Employee, Pay-Scale) and R2(Employee, Department, Title).

5.24. This relation presents insertion anomalies, deletion anomalies and update anomalies. In this relation we cannot
enter a Supplier-Control until that supplier supplies a part (insertion anomaly). Notice that this is necessary to preserve
the integrity constraint of the key. If a supplier stops temporarily supplying a particular part, then the deletion of the last
tuple containing that Supplier-No also deletes the Supplier-Control of the supplier (deletion anomaly). Finally, if the
Supplier-Control of a particular supplier needs to be updated, we must look for every tuple that contains that supplier as
part of the key. If a supplier supplies many parts and we fail to update all the corresponding tuples, the database may
end up in an inconsistent state. We can transform this relation into a 2NF as follows:

                               Supplier(Supplier-No, Supplier-Name, Supplier-Control) and
                                            Part(Part-No, Supplier-No, Price)

The relation is also in 3NF because there are no transitive dependencies. Notice each relation only has one nonprime
attribute, therefore, there cannot be transitivity dependencies on the key.

5.25. The keys of this relation are: AB and AC. The prime attributes are: {A, B, C}. Attribute D is the sole nonprime
attribute. Attribute D is not partially dependent on any key. Therefore, the relation is in 2NF. The relation is also in 3NF
because there is only one nonprime attribute; therefore, a transitive dependency between two different nonprime
attributes cannot exist. The relation is not in BCNF because B ⇒ C and B is not a superkey of the relation.

5.26. The key of the relation is the composite attribute Title, Performer. As it stands the relation is in 1NF because there
is at least one partial dependency on the key. For example, Performer ⇒ Producer. A possible decomposition may be
Record(Title, Performer), Genre(Title, Label, Style), Producer(Performer, Producer-Name), Cost(Style, Price).
                                                                                                                    Page 194




Chapter 6—
Basic Security Issues

6.1—
The Need for Security

In any corporation data is the most valuable resource. Therefore, the database needs to be controlled, managed,
protected and secured. In the context of RDBMS we will understand the term security to mean the protection of the
database against unauthorized access or the intentional or unintentional disclosure, alteration or destruction of the
database. In this chapter we consider some of the elementary aspects of data security. We recognize that security
concerns are not limited to relational databases. Many of the issues discussed here apply to DBMS with other
architectures, as all data must be kept accurate and secure. However, since this book concerns relational databases, in
most cases we present a general introduction to the topic of security in relational databases. Also, some specific
examples of handling security issues using SQL will be given.

The need for database security began in the early days of computing. In those days, the physical security of the entire
computer system was the main concern for the large organizations that could afford the sizeable systems of that time.
However, with the proliferation of personal computers, more organizations began relying on databases and logical
security of the information itself became more critical. The need for security today is a result of a variety of factors,
many mentioned in previous chapters, including:

• Multiple users trying to access and/or change databases at the same or different times.

• More data being kept in single location.

• Databases becoming accessible across communication lines and the existence of distributed databases.

• The advancement of the Internet.

• More specialized software available both to enter the system illegally to extract data and to analyze the information
once it is obtained.
                                                                                                                     Page 195

Because it is important to centralize database security, the person primarily responsible for the security of the database is
usually the Database Administrator (DBA). The DBA must consider a variety of potential threats to the system.
Problems may arise from the general public as well as from people within the organization; therefore users must be
authenticated and authorized. By authentication, we mean that the user has proven to the system that the user really is
who he or she claims to be. Often this authentication process takes the form of verifying a password. Authorization then
involves the specific privileges that the authenticated user has been granted. Authentication and authorization will be
discussed in a later section.

Security breaks may be intentional or accidental, so inadvertent changes must be prevented as much as possible by the
DBMS itself. Intentional security problems may be malicious or non-malicious, aimed at the computer system itself or
at the data contained therein. Most of these issues will be explored in this chapter. The reader should consult other
sources for more information. Many books specializing in database security are available, and DBMS documentation
will provide specifics on your particular system.

6.2—
Physical and Logical Security

Physical security usually means the security of the hardware associated with the system and the protection of the site
where the computer resides. Logical security encompasses the security measures residing in the operating system and/or
the DBMS designed to handle threats to the data, both to its accuracy and also to its confidentiality. One result of the
growth of the Internet and the explosion in the number of communication lines is that people do not need to have
physical access to the hardware to threaten the data. There is no longer a clear distinction between physical and logical
security. This section will discuss some issues specifically relating to physical security of the database. Logical security
is far more difficult to accomplish and will be examined throughout the rest of the chapter.

6.2.1—
Physical Security Issues

Usually physical security is not the job of the DBA. This job is the responsibility of the security officer in the
organization. However, it is prudent for the DBA to make certain that reasonable measures are followed by the
organization. In a single user system with the database residing on one personal computer, physical safeguards may
entail only locking the workstation and securing the door of the room to limit access. A larger organization might use
guards and alarm systems for the rooms that contain the server and other centralized computer equipment. Depending
upon the particular organization and the sensitivity of the data, guards and other security measures might also be put into
place for the entire building. Most office buildings in urban areas already employ such practices.
                                                                                                                                          Page 196

Physical threats are not always in the form of illegal entry. Natural events such as fire, floods, and earthquakes must also
be considered. Computer equipment should never be kept in a basement area that might fill with water. Special fire
extinguishers and smoke alarms are available and should certainly be utilized. Many organizations regularly store
backup copies of databases in different cities to allow for fast recovery in the face of massive disasters. The DBA should
consult with others in the organization to assess the particular risks and ensure that appropriate procedures are followed.
   Example 6.1
   A group of three doctors is investigating the physical security of their patient database. Their office is located on the sixth floor in a
   medical arts complex in a large city. The database is located on a single server and accessible by terminals in each room. What would
   you suggest they should do?

The doctors need to check to be sure that the building management follows appropriate security measures. If night
guards patrol the building, probably secure locks and simple burglar alarms will suffice. If no night guards are available,
the doctors could contract with an outside security company for protection. The room containing the server should be
locked at all times to prevent patients and other unauthorized personnel from inadvertently entering during the day. The
doctors also should consider keeping backup copies of the database at an alternate location that is not in the same
building.

6.3—
Design Issues

The DBA handles security issues and also all database design. Therefore, the smart DBA will follow a few guidelines to
help build the most secure system from the beginning. These guidelines include:

(1) Keep it simple. The smaller and simpler the database design, the fewer ways there are for malicious users to
sabotage and for authorized users accidentally to corrupt the data.

(2) Use an open design. All persons accessing the database should understand the schema of the database. (See Chapter
1 to refresh your memory on schemas.) If users thoroughly understand the design, they will be more able to access what
they want when they want it with less possibility of error.

(3) Normalize the database. Chapter 5 described the anomalies that occur when the database is not normalized.
Normalization takes place during the design phase. It is harder to impose normalization on the relations after the
database has been in use.
                                                                                                                                   Page 197

(4) Always follow the principle of assuming privileges must be explicitly granted rather than excluded. If no privileges
are assumed by any user, there is less likelihood that a user will be able to gain illegal access. The designer of the
database should help decide which privileges are necessary for each group of users and only grant these privileges. It is
safer to err on the side of caution and give the least privilege needed even if a higher level must be granted later rather
than to give blanket rights that must be revoked. Section 6.6.6 provides examples of how to grant privileges using SQL.

(5) Create unique views for each user or group of users. Section 6.6.9 describes how to create and maintain views with
SQL.
    Example 6.2
    The DBA of an insurance company is beginning to design a new customer database. What are three possible groups of user? What
    views should be created for these groups? Which groups would need to be granted rights of access or revision?

Three possible groups of users would be the billing department, the agents, and the customer service personnel. The
billing department would need views containing all billing information. They should be able to access and change items
such as current balance due and amount paid. The agents need to have a view with complete information on levels and
types of coverage. They should be able to change the coverage as requested. Customer service personnel should be able
to access both billing information and coverage so that they can answer questions over the telephone. However, they
should not be given rights to revise the data.

6.4—
Maintenance Issues

Once the database is designed, the DBA's job is not finished. Maintenance is necessary for the lifetime of the database.
Most of the security issues regarding maintenance fall into three categories:

(1) Operating System Issues and Availability

(2) Confidentiality and Accountability

(3) Integrity

The following sections examine each of these areas. Once again, it is important to point out that these issues are similar
for databases of any type of architecture. Whenever possible, problems and solutions specific to relational databases are
discussed. Examples are provided using SQL.
                                                                                                                   Page 198

6.5—
Operating System Issues and Availability

Operating system security is not specific to the database and is usually handled by the system administrator (SYSAD) or
the security officer rather than the DBA. However, as with physical security issues, the DBA should make certain that
reasonable safeguards are being followed. The operating system should verify that users and application programs
attempting to access the system are authorized and that they really are the particular user or application program that
was authorized. There is some division of responsibility here. Accounts and passwords for the entire system are handled
by the system administrator. Accounts and passwords for the database itself are handled by the DBA. These tasks will
be explained in the next few sections.

Other tasks such as making sure the data are secure across communication lines and throughout a network are also the
job of the general computer services department. The DBA should double check that appropriate security measures are
being followed.

Availability usually entails being sure that the system is up and running during any period when it will be needed, often
twenty-four hours a day, seven days a week. In today's terminology, system administrators are asked to provide ''24/7"
coverage. Of course, by Murphy's Law, the system will always go down at the most critical moment. The DBA should
be prepared to get the system back up and running as soon as possible. It is critical to provide systematic backups and
adequate recovery methods. Many RDBMS provide help in this process. Since this task is inextricably related to the
operating system, it will not be addressed here.

6.6—
Accountability

The task of maintaining the accountability of the database resides with the DBA. Accountability means that the system
does not allow illegal entry; that is, all users are legal users and really are who they say they are (authentication).
Accountability is related to both prevention and detection of illegal actions. There are several ways accountability is
assured. First, regular audits of the system should be performed to identify security flaws. Second, the authentication
and authorization of users must be continually monitored.

Accountability also relates to what levels of access and privileges users are granted (authorization). Once the users have
been authenticated and authorized, they should have full rights to do everything they need to do for their particular jobs.
In this section we will also consider the tasks of creating, dropping, and monitoring users, granting system and object
privileges to users, and creating and updating views. Each RDBMS has its own methods of handling system availability.
The explanation in this section will demonstrate how to accomplish these tasks using SQL in Oracle. Though the goals
are the same, you will need to consult your RDBMS manual for specific ways to achieve these goals in other systems.
                                                                                                                       Page 199

6.6.1—
Audits

Auditing a database entails the monitoring and recording of certain actions by users. The record created by auditing
resides in the audit trail. The most common actions that are audited are starting a session, shutting down a session, and
connecting to the database using administrative privileges. Other types of auditing can track changes that are made to
specific tables or views. The audit trail is kept in a secure place and is used in several ways. First, it can help answer the
question, have the security controls in place prevented all unlawful entry to the system, or has unlawful entry occurred
without being detected? Second, the audit trail can provide information about database usage for optimizing the system.

The process of auditing a database is not the same as auditing financial records. Specific methods, skills, and tools are
necessary, which are beyond the scope of this book. Usually the particular RDBMS provides tools to aid in the auditing
process. The most critical thing the organization must do is to construct an auditing strategy specific to that particular
business or industry. The strategy is usually related to the organization's long-term database plan and the risks inherent
in such a plan. The DBA should appreciate the necessity of a regular auditing strategy.

6.6.2—
Authentication and Authorization

Although the DBA is not personally responsible for the complete auditing of the database, he or she is responsible for
monitoring its usage. In this section, we will address the topics of authentication and authorization of users.

6.6.2.1—
Authentication

By authentication, we will refer to any mechanism that determines whether a user is who he or she claims to be. As
stated before, authentication can be carried out at the operating system level or by the RDBMS. In either case, the
SYSAD or the DBA creates for every user an individual account or username. In addition to these accounts, users are
also assigned passwords. A password is a sequence of characters, numbers or a combination of both which is
supposedly known only to the system and its legitimate user. Since the password is the first line of defense against
unauthorized use by outsiders, it needs to be kept confidential by its legitimate user. It is highly recommended that users
change their password frequently. It needs to be hard to guess, but easy for the user to remember. Several guidelines for
choosing good passwords include:

• Passwords should be, at the very least, six characters long (some people suggest eight is better), and made up of a
combination of letters, numbers and some other allowable keyboard symbols.

• Avoid words from a foreign language, geographical names, and common names such as nicknames or proper names.
                                                                                                                    Page 200

• Avoid choosing personal statistics such as social security number, phone number, license number, street address, etc.

• Consider concatenating two words together with a punctuation mark or digit in the middle. For example, dog6book, or
bush+sky.

• Consider thinking of a sentence and using the first letter of each word. For example, the sentence "Times New Roman
is my favorite font" would result in the password tnrimff.
   Example 6.3
   Which of the following passwords should not be used and why?

   a. 326High
   b. cat
   c. face9cow
   d. Susie

a. 326High — No, sounds like a street address

b. cat — No, too short, and also a common word

c. face9cow — Yes, two unrelated words connected with a digit

d. Susie — No, a proper name

RDBMs store user names and passwords in an encrypted form in the data dictionary. To access the database, a user must
run an application and connect to the database using his or her account or user name and the appropriate password. For
example, for the exercises of this book, we have connected to the Personal Oracle 8 (PO8) database via the SQL Plus
application using scott as the user name and tiger as the password respectively. To change a password in Oracle, a user
can issue the following command.
ALTER USER user-name IDENTIFIED by new-password;

   Example 6.4
   Log into PO8 as scott/tiger and change the password to "tnrimff".

The corresponding instruction is as follows:
ALTER USER Scott IDENTIFIED BY tnrimff;

It should be obvious that after changing the password, the user will no longer be able to use his or her previous
password. Users can change their passwords as many times as they want.

Another way to control security is through the use of profiles. A profile is a set of limits to system resources and
passwords. A particular profile is given a name, and then assigned to users. Finally, the profile needs to be enabled. In
this way, a large number of users can be monitored. System resources that can be limited are items such as CPU time,
connect time, number of concurrent sessions, idle time, and memory space. Passwords can be controlled through aging,
history,
                                                                                                                                       Page 201

and expiration dates. Accounts can be locked if a user fails to log into the system after a specified period of time. The
general SQL syntax used by Oracle to create a profile is the following:

CREATE PROFILE profile_name LIMIT
     [parameter_1      max_value]
     [parameter_2      max_value]
               . . . . .
     [parameter_n      max_value];



Some of the parameters that can be used for setting passwords in the CREATE PROFILE command are shown in Table
6-1. Many RDBMS systems also provide tools for password verification to force users to create good passwords. For
instance, it can check to see if the new password is of minimum length, contains correct characters, and differs from the
old by at least three or four letters.




   Example 6.5
   Create a profile called General that will allow the password to last thirty days with a three-day grace period. Allow only three failed
   login attempts before the account is locked. Do not allow a password to be used for two years, but it can be used an unlimited number
   of times.


CREATE PROFILE general LIMIT
     PASSWORD_LIFE_TIME                          30
     PASSWORD_GRACE_TIME                         3
     FAILED_LOGIN_ATTEMPTS                       3
     PASSWORD_REUSE_MAX                          UNLIMITED
     PASSWORD_REUSE_TIME                         730;
                                                                                                                    Page 202

Notice that there are no commas in the command and the parameters do not have to be listed in any particular order.
Remember that all maximum values are listed in days. Any values can be granted as UNLIMITED, but that is not very
wise. The values used in the profile should be part of the general database security strategy. Once the profile is created,
it can be assigned to a user when an account is created, dropped, or altered later. The CREATE and ALTER commands
will be demonstrated in the following sections.

6.6.2.2—
Authorization

By authorization we will understand the granting of a right or privilege to a user that allows him or her to have access to
the system or objects within the system. The basic types of privileges associated with any user are the system and object
privileges. System privileges allow the user to gain access to the database. Object privileges allow the user to manipulate
objects within the database. When a database user is created, the user is associated with a schema or a collection of
objects in the database to which he or she has access. The system administrator or DBA determines and controls the
access rights of a user through the user's security domain. The settings of this domain limit what the user can or cannot
do in the database. In this sense, the security domain includes information about:

• Type of authentication for this user (through the operating system or the network services).

• The amount of system resources available to this user, including tablespaces (similar to directories in a Windows or
DOS environment) and their default values.

• The database objects that the user can access and the operations that the user can perform on these objects.

Before a user can grant any system privileges to any other user he or she must have administrative privileges. Table 6-2
lists some of the basic system privileges.




The process of creating and granting rights and views to users will be discussed in the next section.
                                                                                                                                     Page 203

6.6.3—
Creating Users

To create a user we can use the following simplified version of the CREATE USER command.
CREATE USER user-name IDENTIFIED BY user-password
DEFAULT TABLESPACE tablespace-name
TEMPORARY TABLESPACE temptablespace-name
QUOTA integer M on tablespace-name
QUOTA integer N on temptablespace-name
[PROFILE profile_name];

This command assigns to the user a default and a temporary tablespace. A tablespace is a logical storage unit similar to
a directory in Windows or DOS. This command also establishes the amount of memory allocated to the user (his or her
quota) in each of these tablespaces. A profile may or may not be assigned in the CREATE statement.

As indicated before, to create a user it is necessary to have administrative privileges. To be able to do this, it is necessary
to log into PO8TM using SYSTEM as the user name and MANAGER as the password. This is a built-in account in
Oracle with administrative privileges.1
   Example 6.6
   Create the user HAYLEY with password tbl42sho. Assign her the profile General from Example 6.5.

The command to create this user is shown below.
CREATE USER hayley IDENTIFIED BY tbl42sho
DEFAULT TABLESPACE user_data
TEMPORARY TABLESPACE temporary_data
QUOTA 5M on user_data QUOTA 1M on temporary_data
PROFILE general;

The tablespaces user_data and temporary_data come with the default database created for PO8TM. We will use
them in this section without further consideration since their explanation is beyond the scope of this book.

6.6.4—
Dropping Users

After creating a user it may be necessary to remove him or her from the database. For instance, the user may resign or be
fired. The instruction that allows us to do this is the following:
DROP USER user-name [CASCADE];

   1 In the following sections, unless otherwise indicated, we will assume that the reader has logged into the ORACLE database using this

   built-in account.
                                                                                                                   Page 204

If the CASCADE option is used when dropping a user, not only the user but also all of the user's objects in his or her
schema will be dropped too.
   Example 6.7
   Drop the user Hayley but leave all her objects in her schema.

DROP USER hayley;

6.6.5—
Monitoring Users

To display information about the user, there are several views (to be explained later in the chapter) that allow the
database administrator to gather information about the database users. Views can be queried as any other ordinary table.
Table 6-3 lists some of the views that provide information about users.




6.6.6—
Granting System Privileges to Users

Once a user has been created, the system administrator may grant the user a set of privileges. Table 6-4 lists some of the
most common privileges assigned to a user.
                                                                                                                       Page 205

The command to grant privileges to a user is the following:
GRANT priv-1 [,priv-2, . . . priv-n] TO USER user-name;

The first privilege that should be granted to a user is the one that allows the user to connect to the database. As indicated
in Table 6-4, the name of this privilege is CREATE SESSION.
   Example 6.8
   Recreate the user hayley and grant her the CREATE       SESSION privilege.

The corresponding command is
GRANT create session TO hayley;

If user hayley tries to log into the database, the login will succeed. However, if she tries to create a table, she will not be
able to do it because she lacks the privileges to do so.
   Example 6.9
   Grant the necessary privileges to the user hayley to create tables and views.

The command that allows us to do this is as follows:
GRANT create table, create view TO hayley;

After this statement, the user hayley can connect to the database and create tables in it.

To avoid the tedious task of granting individual privileges to different users, database administrators create groups of
related privileges and grant them to the users according to the privileges that the user needs. Each one of these groups of
privileges that can be granted as a group is called by Oracle a role. For instance, there may be data entry operators with
a set of particular privileges, and at the same time there may be a group of programmers with a different set of
privileges. The database administrator can then create a role for the entry operators and a different role for the
programmers. The DBA then assigns the privileges to each of these roles and grants them to the two groups of users.
The command that allows us to create a role is shown below.
CREATE ROLE role-name;

To grant privileges to a role that has already been created, the DBA can use the GRANT command as shown below.
GRANT privilege-1 [, privilege. . .] TO role-name.
                                                                                                                                            Page 206

The following example illustrates this.
   Example 6.10
   Create a role that allows a user to create a session and create a table. At the same time create another role that allows a user to create a
   session and create a view but not a table. Call these roles role_tables and role_views respectively.

CREATE ROLE role_tables;
GRANT create session, create table to role_tables;
CREATE ROLE role_views;
GRANT create session, create view to role_views;

After these roles have been created, the DBA can assign them to any user using the grant command. Assuming there
were users Bruce Rounder (roundeba) and Debbie Martinez (martinde) who needed to access the database and create
tables but not views, the DBA could grant them these privileges using the following command:
GRANT role_tables to roundeba, martinde;

Once a privilege has been granted to a user or a role, it can also be taken away from the user or the role. The instructions
that allows the DBA to take away a specific set of privileges from a user or a role are the following:

                                                                                                            or
REVOKE priv-1 [,priv-
2 . . . priv-n]                          Command to revoke individual
                                   ⇐     privileges from a user or users.
FROM [ user-1 [, user-
2 . . . ,user-n]];
REVOKE priv-1 [,priv-
2 . . . priv-n]
                                         Command to revoke individual
                                   ⇐     privileges from a role or roles.
FROM [ role-1 [, role-
2 . . . ,role-n]];



Users who have been granted privileges can consult some of the individual views available for this purpose. Table 6-5
lists some of these views.
                                                                                                                                   Page 207

6.6.7—
Granting Object Privileges to Users

So far we have considered system privileges; however, the DBA can also grant privileges on specific objects. This type
of privilege is called an object privilege. Object privileges allow particular actions on the object. Table 6-6 lists several
objects and their privileges.




The command that allows us to grant privileges on a particular object to a user or role is the following:
GRANT obj-priv-1 [,obj-priv-2 . . ., obj-priv-n]
ON object-1 [,object-2, . . ., object-n]
TO user-1[,user-2, . . ., user-n]
[WITH GRANT OPTION];
                                 or
GRANT obj-priv-1 [,obj-priv-2 . . ., obj-priv-n]
ON object-1 [,object-2, . . ., object-n]
TO role-1 [,role-2, . . ., role-n]
[WITH GRANT OPTION];

If the WITH GRANT OPTION option is used, the user or role to which the privileges are granted can then, in turn, grant
these privileges to another user. Any user who owns an object can grant privileges to another user.
   Example 6.11
   Log in as scott and write the commands that allows scott to grant SELECT privileges to user hayley on the tables EMPLOYEE and
   DEPARTMENT.

GRANT select
ON employee
TO hayley;
GRANT select
ON department
TO hayley;
                                                                                                                     Page 208

Users who have been granted privileges on objects owned by another user can always refer to these objects by preceding
the name of the object with that of its owner and separating them with a period.

Owner-name.object-name

For example, had the user hayley logged on, she could access the table EMPLOYEE by preceding the table name with
that of its owner scott. She could refer to this table as follows:




6.6.8—
Hiding Data through Views

A mechanism that allows users to exclude data that other users should not see is that of a view. By this term, we will
understand a stored query that, when executed, derives its data from other tables (the base or underlying tables). The
view is a query literally stored in the data dictionary. The view does not contain data and it is not allocated any storage
space either. When a user references a view, the RDBMS retrieves its definition from the dictionary and executes or
''runs" the query.

Views provide a level of security because they allow us to hide data "behind" the query. That is, users who execute the
query will only see the result of the query, not the tables or views from which the data is extracted. In this sense, views
are a tailored presentation of the data contained in one or more tables or views. Notice that a view can be based on some
other views providing an extra level of protection.

6.6.9—
Creating Views

Since views may be derived from tables, there are many similarities between these two objects. From a practical point of
view the user cannot easily differentiate views from tables. Users with the appropriate privileges can query views like
any other table. In addition, users can, with some restrictions, update, insert and delete data from a view. Like any other
database object, to create a view in his or her own schema, the user must have the system privilege CREATE VIEW.

The syntax of this command is shown below.
CREATE VIEW view-name [(alias-1, alias-2, . . ., alias-n)]
AS query
WITH [READ ONLY | WITH CHECK OPTION [CONSTRAINT
  constraint-name];
                                                                                                                                           Page 209

The aliases are names for the expressions SELECTed by the view's query. The number of aliases must match the
number of expressions selected by the view. The WITH READ OPTION option prevents insertions, deletions or update
of the underlying tables through the view. The WITH CHECK OPTION option specifies that inserts and updates
performed through the view must result in rows that the view query can select.2 The following examples illustrate this.
   Example 6.12
   Recall the C_PROGRAMMER table from Chapter 3.


C_PROGRAMMER

    Employee_Id                LastName         First_Name             Project                 Department

      101123456                Venable              Mark            E-commerce              Sales Department

      103705430                 Cordani              John              Firewall        Information Technology

      101936822                 Serrano             Areant          E-commerce              Sales Department


Create a view that contains the following attributes of the C_PROGRAMMER table (the base table): last_name,
first_name, project. Call the view E_commerce.
CREATE view E_commerce
AS SELECT last_name, first_name, project
FROM c_programmer
WHERE project = 'E-commerce'
WITH CHECK OPTION;

To display the contents of this view the user can issue the following command.
SELECT *
FROM e_commerce;

The result of this query is shown below.

LAST_NAME             FIRST_NAME              PROJECT
-------------         -------------           -------------

Venable               Mark                    E-commerce
Serrano               Areant                  E-commerce


   2 Actually, this option cannot make this guarantee if there is a subquery in the query of this view or any of the underlying views on

   which this view is based.
                                                                                                                                  Page 210

   Example 6.13
   Recall the EMPLOYEE and DEPARTMENT tables from Chapter 3.


                   ID             NAME         DEPT                TITLE
EMPLOYEE
                   100            Smith        Sales               Clerk

                   200            Jones        Marketing           Clerk

                   300            Martin       Accounting          Clerk

                   400            Bell         Accounting          Sr. Accountant



                        ID           DEPT              LOCATION
DEPARTMENT
                        100          Accounting        Miami

                        200          Marketing         New York

                        300          Sales             Miami


   Create a view called Clerks that displays the name, the name of the department and the location for all employees who are Clerks.
   Name the headings Employee, Department, and City.

The query that allows us to display this information is the join of the EMPLOYEE and DEPARTMENT tables on the
common attribute Dept in each table. The corresponding command is
CREATE VIEW Clerks (Employee,Department, City)
AS SELECT E. name, D.dept, D.location
FROM employee E, department D
WHERE E.dept = D.dept
AND E.title ='Clerk';

The output of the execution of this view is as follows:
SELECT *
FROM clerks;

EMPLOYEE            DEPARTMENT            CITY
------------        ------------          ------------
Martin              Accounting            Miami
Jones               Marketing             New York
Smith               Sales                 Miami
                                                                                                                               Page 211

This example clearly illustrates the power of views to hide data. Notice that as far as the user is concerned there are no
practical differences between this view and any other table. In fact, if we describe this view (see below), we will not
have any idea that its base table is the join of two tables. Observe also how the aliases help to hide the data even more
since there is no mention of the real name of the original columns.

DESC clerks;
Name                                          Null             Type
-------------------------------               ---------        --------------

EMPLOYEE                                                       VARCHAR2 (15)
DEPARTMENT                                                     VARCHAR2 (15)
CITY                                                           VARCHAR2 (12)



6.6.10—
Updating Views

As indicated before, a user can update a view if he or she has the appropriate privileges. The command to update a view
is similar to that of updating a table (see Chapter 3, Section 3.2.3). However, in some instances, to preserve the integrity
of the data it is necessary to ensure that any update performed through the view will not affect the data that the view is
able to select. This type of update can be prevented by creating the view with the WITH CHECK option as we did in
Example 6.11. The following example illustrates this.
   Example 6.14
   Update the query of Example 6.11 by changing the project from "E-commerce" to "E-business" for the programmer whose last name is
   ''Venable".

The corresponding command is as follows:

UPDATE E_commerce
SET project ='E-business'
WHERE last_name = 'Venable';



Notice that if we try to execute this command we get an error. This error reads something like this:

SQL> UPDATE E_commerce
  2 SET project ='E-business'
  3 WHERE last_name = 'Venable';
UPDATE E_commerce
         *
ERROR at line 1:
ORA-DDD: view WITH CHECK OPTION where-clause violation
                                                                                                                   Page 212

In this case, DDD stands for a manufacturer internal error. This error occurs because we are trying to change a row that
is retrieved by the query. That is, if we update the corresponding row, the query can no longer retrieve it since it will
change the region_id from 'E-commerce' to 'E-business'. If we were not using the option WITH CHECK OPTION we
would have been able to update the view and its underlying table

6.7—
Integrity

Integrity refers to the accuracy or correctness of the data in the database. There are a number of ways to maintain the
integrity of the data. The RDBMS usually provides a number of tools to help in this process. However, in order to gain
full benefit, it is important to understand these tools.

6.7.1—
Integrity Constraints

A number of constraints should be used to maintain database integrity. These tools include entity constraints, referential
integrity constraints, the use of primary keys and foreign keys, and a number of other constraints. The integrity of the
database is of primary importance when designing such constraints. These constraints, which are directly related to
database security, were explained in Chapter 2. One integrity issue not discussed previously is the concept of
concurrency.

6.7.2—
Concurrency Issue — Commit and Rollback

When there are several users accessing and perhaps changing the data at the same time, it is important for the RDBMS
to maintain integrity so that successive changes do not corrupt the data. SQL in Oracle provides a way to monitor these
changes. To make permanent all changes made to a table through the use of an INSERT, UPDATE or DELETE
operation, the user needs to commit these changes. The instruction that allows a user to record these changes
permanently into the database is the COMMIT statement. The basic syntax of this statement is this:

COMMIT [WORK];

Notice that the keyword WORK is optional.

The reader should be aware that prior to the execution of a COMMIT command, all changes made to the rows of a table
are stored in a database buffer or working storage in main memory. If for some reason the user quits the database before
committing the changes, no data will be written to the database files and the changes will be lost. If the user making
changes to a table is working in a multi-user environment and other users share this table, no changes made to the table
will be accessible to the other users unless the person making the
                                                                                                                      Page 213

changes issues a commit command. This happens because whenever a user modifies the rows of a table, he or she has
exclusive access to these rows until the changes have been committed. By exclusive access of a row, we mean that no
other users can view the current contents of the row that have been changed. The affected rows are said to be locked. At
this time, any other user accessing the same table will not notice that the table has changed. When the user commits the
changes, the modified rows are written to the database files; and the locks on all affected rows are released. Users whose
transactions started after the data was committed can view the modified rows with their new content.

Assuming that the changes made to a table (insertions, updates or deletions) have not been committed, the user can
cancel all the intermediates changes made to a table by issuing a ROLLBACK statement or by ending the session. These
actions cause the RDBMS to ignore all changes made to any table or any other database object since the last commit or
since the user began his or her interactive session.

Technically, a ROLLBACK statement is used to cancel or terminate the current transaction and return the table to its old
values. A transaction is a logical unit of work that, in general, involves several database operations. All operations of a
transaction succeed or fail as a group. In other words, if one operation fails then all operations fail. In this sense, the
transactions are said to be atomic. In addition to this, transactions are said to be durable. What this implies is that once a
transaction is COMMITted, the changes made to the tuples are guaranteed to be written to the database files even if there
are system failures. A transaction begins with the first executable SQL statement after a COMMIT, a ROLLBACK or a
connection to the database. A transaction ends after a COMMIT, a ROLLBACK or a disconnection from the database.
Most databases issue an implicit commit statement after processing a DDL statement.

Sometimes it is desirable to go back to a particular point in time during an interactive session. For instance, we can
imagine a user that has made several uncommitted changes to a table and realizes that the last few changes are incorrect
or unnecessary. If at this moment the user issues a ROLLBACK statement, all changes made to the table will be ignored,
including the changes that were correct, and the table would be restored to its original state. It would be nice if the user
could go back to a prior state of the database buffer right before where he or she began making the incorrect changes.
The SQL command that can be used to accomplish this is the SAVEPOINT command.

A SAVEPOINT identifies a point in the transaction to which we can go back (roll back) provided that the transaction has
not been committed. In this sense, we can think of a SAVEPOINT statement as a "bookmarker" within the database
buffer. Savepoints allow us to undo only a part of the current transaction by allowing the user to go back to a particular
point in time. The basic form of this statement is as follows:
                                           SAVEPOINT savepoint-name;

where savepoint_name is a unique name within the transaction. Generally, savepoint names are single letters but
they can be longer. Savepoints follow the same naming rules of any other object in the database. Savepoints are useful
in
                                                                                                              Page 214

interactive programming because they give the user some degree of control over the execution of the program. To go
back to a previous and uncommitted state of the database buffer it is necessary to issue the following command:
                                         ROLLBACK savepoint-name;

                                                         Or
                               ROLLBACK TO SAVEPOINT savepoint-name;

Fig. 6-1 illustrates the combined use of the SAVEPOINT and ROLLBACK commands.
               Fig. 6-1
Savepoint and Rollback to savepoint.
                                                                                                                    Page 215

The sequence of actions depicted in Fig. 6-1 shows the effect of rolling back to a savepoint. In this case, we assume that
the user begins his or her operation by issuing a savepoint A command. The user then inserts a new tuple and issues a
savepoint B command. Processing continues and the user deletes the first tuple of the table and issues a savepoint C
command. Finally, the user issues a rollback to savepoint A command. Notice that the effect of ROLLBACK TO
SAVEPOINT A is to return the table to the state that it had when the user issued the savepoint A command. By rolling
back to savepoint A, the user has ignored all changes made to the table after issuing the savepoint A command.
Obviously, this example assumes that the user never issued a COMMIT statement between savepoint A and savepoint C.
Had the user committed the data after savepoint C, it would have been impossible for the user to return to any of the
previous savepoints A or B. It is important to keep in mind that, at the same time, the user cannot change his or her mind
after returning to savepoint A. That is, he or she cannot return (roll forward) to any of the savepoints B or C. Notice that
savepoint names must be unique within a given transaction. Whenever the user creates a savepoint with the same name
of an earlier savepoint the earlier savepoint is erased. After the changes are committed, the user can reuse any of the
previous savepoint names provided that they are unique within the transaction.

As we indicated before, when a user issues a ROLLBACK command without the SAVEPOINT clause, the net effect of
this command is to end the transaction, erase all savepoints in the transaction, undo all changes in the transaction and
release any locks.

Solved Problems

6.1. What are some reasons that the advancement of the Internet and distributed databases presented new problems for
database security?

There are several potential problems that could arise. Distributed databases result in authorized people in several
locations attempting to access the same data at the same time. Data flowing through communication lines may be
intercepted or become corrupted. Internet access to databases allows an increased potentiality for non-authorized users
to break into the database. All these security problems need to be addressed.

6.2. A woman runs a catering service operating out of her home using a single computer. She has asked for advice on
the physical security of her customer database. What would you suggest?

Even though the woman uses her home computer, she should use reasonable measures to keep the database protected
from inadvertent corruption by other family members. If she has children, she should consider purchasing a separate
computer for their use and keeping
                                                                                                                  Page 216

   hers in a locked room. If this is impossible, and other family members will have access to the same computer, she
should employ logical safeguards such as password protection to the database. As always, regular backups should be
made and kept in fireproof containers. A simple customer database probably does not warrant special burglar alarms
apart from what she would normally have for her other personal possessions.

6.3. A small college is designing a new student database. What steps should be taken and what items should be
considered by the DBA?

First, the DBA should form a task force to examine the student entity to be represented by the system. The more
categories of users that are included the more likely it is that a database will be designed to meet all users' needs. The
task force should consider such questions as which attributes should be included? What is the simplest way to divide the
attributes into relations? Once the relations are designed, the tables should be normalized at least to 3NF. Finally, the
task force should determine which groups of users should be formed and what privileges and views these groups would
require. Possible groups might include admissions officers, registrars, faculty, and departmental secretaries. Each of
these groups need different privileges and views.

6.4. Which of the following passwords should not be used and why?

a. YK 334
b. mfmitm (for "My favorite movie is Tender Mercies")
c. Natalie1
d. Washington

a. YK 334 – No, sounds like auto license number, and no spaces allowed.
b. mfmitm (for "My favorite movie is Tender Mercies") – Yes, would be hard to guess.
c. Nataliel – No, don't use proper names even with a digit.
d. Washington – No, proper name, and too long.

6.5. Write the command to change the password of the user Nakesha J. Sualki (sualkinj) from 6tv7box to 4cat2ball.

To change the password of this user we need to issue the following command:
   ALTER USER sualkinj IDENTIFIED BY 4cat2bal;

6.6. Create the user my723acct with password kmd26pt. Use the user_data and temporary_data tablespaces
provided by PO8 and provide to this user 10M of storage space in user_data and 5M of storage space in
temporary_data.

The command to create this user using the tablespaces provided by PO8 is as follows:
   CREATE USER my723acct IDENTIFIED BY kmd26pt
   DEFAULT TABLESPACE user_data
   TEMPORARY TABLESPACE temporary_data
   QUOTA 10M on user_data QUOTA 5M on temporary_data;

6.7. Create the role role_tables_and_views.

The command to create this role is as follows:
   CREATE ROLE role_tables_and_views;
                                                                                                                     Page 217

6.8. Grant to the role of the previous question the privileges to connect to the database and the privileges to create tables
and views.

The privilege to connect to the database is CREATE SESSION. The privileges to create tables and views are CREATE
TABLE and CREATE VIEW respectively.

The command to grant these privileges to the given role is as follows:
   GRANT create session, create table, create view
   TO role_tables_and_views;

6.9. Grant the role of the previous question to the users sualkinj and my723acct. After granting the role to these two
users, what they would be able to do?
   GRANT role_tables_and_views TO sualkinj, my723acct;

Both users can connect to the database and are able to create tables and views.

6.10. The users sualkinj and my723acct do not have SELECT privileges on the tables INVENTORY and ITEM that
were created by the user scott. Write the command that would allow scott to grant these users SELECT privileges on
these two tables.

Scott would have to issue the following commands to allow these two users to do selections on the given tables.
   GRANT select ON inventory TO sualkinj, my723acct;
                                and
   GRANT select ON item TO sualkinj, my723acct;

6.11. User sualkinj has been transferred and no longer needs the privileges that were granted to her through the role
role_tables_and_views. Make sure that she can no longer create tables and views or have access to the tables of
the previous question. However, user sualkinj should still be able to connect to the database. Write the command to
accomplish these tasks.

The commands shown below revoke the privileges mentioned above from the user sualkinj.
   REVOKE select ON scott.inventory FROM sualkinj;
   REVOKE select ON scott.item FROM sualkinj;
   REVOKE create table, create view FROM sualkinj;

6.12. Assume that the user sualkinj finished all her tasks and has moved to another company. Since the objects that she
created are no longer of any use, write the command that allows the DBA to remove this user and all her objects.

The corresponding command is shown below.
   DROP USER sualkinj CASCADE;

Notice that to drop the user and his or her objects the CASCADE option is necessary.
                                                                                                               Page 218

6.13. Assume that the DBA suspects that a person currently logged-in may be an impostor impersonating the legal user
dullbns. Is there any way to terminate the session of this person?

Yes, there is a way to end this user's session. However, before ending the session the DBA needs to obtain some
information such as the session id and the serial number of the user session. The DBA can obtain this information from
the V$SESSION view. A query to retrieve that information and its output are shown below.

     SELECT sid, serial#,username FROM v$session;
           SID     SERIAL# USERNAME
    ----------- -------- ------------------------
             1         1 dullbns
             2         3 scott
             .
             .
             9        11 SYSTEM



With this information, the DBA can kill the session by issuing the following command:
   ALTER SYSTEM KILL SESSION '1,1';

6.14. The name of the Accounting department has changed to Bookkeeping. Change the name of the department in the
EMPLOYEE table. Verify the result. Make sure that all changes can be discarded in case the user makes a mistake. If
the operation is incorrect, how can the user undo the changes?

To change the name of the department it is necessary to update the appropriate rows in the EMPLOYEE table.
However, before making any changes to this table let us define a savepoint. This way, we know that we can undo the
changes.
   SAVEPOINT before_update;

The current names of people in the Accounting department are shown here.

    NAME          DEPT
    ------------- -----------------
    Martin        Accounting
    Bell          Accounting



The SQL command to update the name of the department is shown below.
   UPDATE employee
   SET dept = 'Bookkeeping'
   WHERE dept = 'Accounting';

We can verify that the changes are correct by issuing the following query.
   SELECT name, dept
   FROM employee
   WHERE dept = 'Bookkeeping';
                                                                                                                   Page 219

The output of this query is shown here.

    NAME         DEPT
    ------------ ----------------
    Martin       Bookkeeping
    Bell         Bookkeeping



If the update is incorrect the user can undo the changes by issuing the command:
    ROLLBACK TO SAVEPOINT before_update;

6.15. As a user, how can I find out the default and temporary tablespaces to which I have been assigned?

The data dictionary view that allows any user to find out this information is the view USER_USERS. This view, in
addition to the previous information, informs the user about his or her user id, and the time the account was created.

Supplementary Problems

6.16. A pharmaceutical company wants to examine the physical security of their research database. They have a large
facility with multiple servers located in several different buildings within the complex. What would you suggest?

6.17. List the security guidelines that a conscientious database designer should follow.

6.18. Change the password of user Suzanne Vance (vancesk) from burg8two to big6bpw.

6.19. How do we delete a view?

6.20. Which of the following passwords should not be used and why?

a. Aristotle

b. tv9stove

c. 12345678

d. dribgib

6.21. Create the user thomasjp with password timbcns2. Use the tablespaces user_data and temporary_data
provided by PO8. Assign to this user 12M of storage in user_data and 6M of storage in temporary_data.
                                                                                                                     Page 220

6.22. Create the role role_tables.

6.23. Grant to the role of the previous question the privileges to connect to the database and the privileges to create
tables only.

6.24. Grant the role of the previous question to the users all7clrks and jimzapsy.

6.25. Allow the users all7clrks and jimzapsy to have SELECT privileges on the WAREHOUSE and REGION tables
created by scott.

6.26. Revoke all the privileges granted to all7clrks.

6.27. Remove user all7clrks and all his objects from the database.

6.28. Can a user that is currently connected to the database be dropped?

Answers to Supplementary Problems

6.16. Because of the sensitive nature of the data, this company should employ as much physical security as possible.
They can place guards at the gates to the complex and within the lobby of each building. Motion detectors could be
placed in each room that contains a server. Fire and flood protection should be implemented as much as possible.
Probably, they should store copies of the data in secure locations off the premises.

6.17. LIST:
(1) Keep It Simple
(2) Use an open design.
(3) Normalize the database.
(4) Always follow the principle of assuming privileges must be explicitly granted rather than excluded.
(5) Create unique views for each user or group of users.

6.18.
   ALTER user vancesk IDENTIFIED BY big6bpw;
                                                                                                                  Page 221

6.19. Views like most of the database objects can be deleted using the DROP command. The syntax of this command is
very similar to that of dropping a table. For instance, to drop the view clerks, we can issue the following command:
   DROP VIEW clerks;

Notice that it does not make sense to use the CASCADE option because it is not possible to define integrity constraints
on the view.

6.20.
a. Aristotle – No, don't use famous names
b. tv9stove – Yes, two unrelated words connected with a digit
c. 12345678 – No, don't use patterns of letters or digits
d. dribgib – No, this is ''big bird" backwards, and would be too easy to guess

6.21.
   CREATE USER thomasjp IDENTIFIED BY timbcns2
   DEFAULT TABLESPACE user_data
   TEMPORARY TABLESPACE temporary_data
   QUOTA 12M on user_data QUOTA 6M on temporary_data;

6.22.
   CREATE ROLE role_tables;

6.23.
   GRANT create session, create table TO role_tables;

6.24.
   GRANT role_tables TO all7clrks, jimzapsy;

6.25.
   GRANT select ON s_warehouse TO all7clrks, jimzapsy;

                                       and

   GRANT select ON s_region TO all7clrks, jimzapsy;

6.26.
   REVOKE create session FROM all7clrks;
   REVOKE create table FROM all7clrks;
   REVOKE select scott.warehouse FROM all7clrks;
   REVOKE select scott.region FROM all7clrks;

6.27.
   DROP USER all7clrks CASCADE;

6.28. No, a user that is currently logged in cannot be dropped. However, the DBA can kill his or her session and then
drop the user.
                                                                                                                   Page 222




Chapter 7—
The Entity-Relationship Model

7.1—
The Entity-Relationship Model

The modeling, design, and creation of a database is an iterative top-down process. There are several steps in the creation
of a database. First, the designer must gather information about the organization in order to ascertain the specific
requirements. This usually entails the use of interviews and a thorough examination of all the inputs and outputs of the
system. Often software engineering tools, such as data flow diagrams and system flow charts, are used. The objective of
this step is to determine both the work-flow and the information that is relevant to the organization. Building the Entity-
Relationship (E-R) Model is the second step in the process. The Entity-Relationship (E-R) Model is a graphical
representation of the database logic and includes a detailed description of all entities, relationships, and constraints.
After the E-R Diagram has been successfully constructed, the designer creates the Table Instance Charts, one per entity,
that contain information about the data types for the attributes of the entities and some sample data. Finally the
individual tables are defined and created using a DBMS. The design steps are iterative because changes during a later
step may entail revision of the E-R Diagram. Both E-R Diagrams and Table Instance Charts are explained in this
chapter. It is important to remember that, as in any top-down approach, these tools should be constructed before
beginning to implement the database.

As we explained in Chapter 1, a data model is a way of explaining the logical layout of the data and the relationships of
various parts of the database to each other and to the whole. This entire book has focused on the relational database
model, where all data are kept in tables or relations that are often connected in some way. By examining the relations
alone, we have been able to see the logical
                                                                                                                                             Page 223

layout. However, we have not yet demonstrated a clear method of illustrating the relationships of all the tables to each
other. Just as the blueprints are the key to understanding and creating the design of a building, the E-R Diagram is the
key to understanding and creating the design of the database.

The E-R Diagram is an attempt to conceptualize the database. The model helps to ensure that all the client's
requirements are met and that these requirements do not conflict with one another. Functional dependencies are also
identified. It is at this point that the normalization process explained in Chapter 5 takes place. While the database is still
in a conceptual state and independent of any DBMS, it is easy to modify and refine all the individual pieces. Once the
model is complete it can then be mapped to any specific type of database software. The model also helps to identify the
potential levels of use and to define the views of the data that should be produced.

The E-R Model was described by P. P. Chen in 1976 in a paper "The Entity-Relationship Model: Toward a Unified
View of Data."1 It is now the most widely used model for the design of databases. Since there is not an accepted group
of standards, different vendors and authors have developed their own conventions. In this book we will follow the E-R
conventions used by the Oracle Corporation.

7.2—
Entities and Attributes

The building blocks of the E-R Model are entities, attributes, and relationships. We have already defined entities and
attributes in Chapter 1 and have consistently used these concepts throughout the book. Entities are the objects of
significance for the organization about which information needs to be known. The characteristics that describe or qualify
an entity are the attributes. In the E-R Diagram entities are represented by soft (rounded) boxes with unique names in
capital letters. Attributes are the items of information about each entity. Attribute names are unique within the entity and
are written in lower-case letters within the box.
   Example 7.1
   Identify two entities that might be important for a retail business. List at least three attributes for each entity. Then show what the
   entities and attributes would look like in an E-R Diagram.

Two entities of importance for a business might include employees and customers. Some of the information that may be
relevant for employees may be ID number, last name, first name, and salary. Customers would have name, address, city,
state, zip, and phone number. Fig. 7-1 shows the sample representation of these entities. Not all attributes are included
for space purposes.
   1 Chen, P.O., "The Entity-Relationship Model: Toward a Unified View of Data," ACM Transactions on Database Systems, Vol.1, No.1.

   March 1976.
                                                                                                                     Page 224




                                                            Fig. 7-1
                                                  Representation of two entities.

Each entity must have multiple occurrences. For example, the entity EMPLOYEE has one entry for each employee.
Each instance has specific values for each attribute. Since entities have multiple occurrences, there must be a way to
distinguish one instance from all the others that make up the entity. Therefore each entity must have a Unique Identifier
(UID) that is an attribute or set of attributes that uniquely identifies each instance. Chapter 2 explained candidate keys
and primary keys. The UID of the entity, which may be a single or composite attribute, is the primary key. If there
seems to be no way to identify the entity in a unique way, it should be reevaluated as to whether or not it actually is an
entity. The attributes which are the UID are marked in the E-R Diagram with #*. The asterisk (*) indicates the attribute
is mandatory, that is, it may not be left blank for that instance. The pound sign or hash (#) indicates that the attribute is
the UID, or part of the UID. Some attributes are mandatory even though they are not part of the UID, and they would be
marked only with an asterisk. Optional attributes may be indicated with an o.
   Example 7.2
   Choose a UID for the entities EMPLOYEE and CUSTOMER in Example 7.1. Show the new representations.

The obvious UID for EMPLOYEE would be the ID number. The entity CUSTOMER could use name as UID. However,
it is possible for two customers to have the same name and then the instance would no longer be unique. In some cases,
it might be possible to use a combination of attributes, such as name and phone number. It is unlikely that two customers
with the same name would have the same phone number. However, it is often easier and more beneficial to create a new
attribute to be the UID. A new attribute can be added to the entity called ID number to assure that each instance of
CUSTOMER will be unique. Notice that the UIDs are marked in Fig 7-2.




                                                             Fig. 7-2
                                             Representation of an entity showing UID.
                                                                                                                                     Page 225

Remember that there is a difference between the entity and the instance of the entity. The entity is the general category
of items, such as products or orders. The instance would be one particular example of the category, such as product
#CN1234, a candlestick, which costs $5.14.

7.2.1—
Identifying Entities

Identifying the correct entities for the database is critical. Usually the first step of ascertaining requirements results in
some kind of narrative explaining the system. In a narrative, entities are generally represented by nouns. The narrative
should be examined closely for significant nouns. Identify synonyms within the list to avoid duplication. Look for meta-
words, or words that might be categories rather than instances. Then list as many instances of the entity as you can think
of to test that all have the same characteristics and are subject to the same rules. For example, a narrative about a
furniture store may include items such as hide-a-bed, sofa, loveseat, or settee. The entity could be "couch" and each of
these designations would be a type of couch. All the instances have attributes such as price, color, and type of covering.
If entities are found, decide upon names. Establish what information must be kept about each entity. The attributes
would be adjectives describing the entity. Decide which attribute or attributes can serve as the UID. Represent the
entities that are identified, including the attributes, and mark the UID in the diagram.
   Example 7.3
   The gathering of specifications for a church database resulted in the explanation shown below. Choose the entities you might want to
   represent, the attributes for each entity, and model them in a diagram including the UID.

   "The Third Presbyterian Church needs to keep track of its members. The members need to receive the newsletter regularly. There are
   several committees within the church, and each person may serve on only one committee. The Finance Committee wants to record the
   amount of money that individual members give to the church and report the total to them at the end of the year. The church needs to
   purchase supplies such as paper and bulletin covers. The secretary, a member of the staff deals with several different office supply
   companies."

The nouns that might be identified in this narrative would include MEMBER, VENDOR, and COMMITTEE. Each
entity needs a number of attributes that were described in the narrative. Diagrams are shown in Fig. 7-3.
                                                                                                                     Page 226




                                                              Fig. 7-3
                                              Entities for Third Presbyterian Church.

Not all the necessary attributes are listed in Fig. 7-3 for space purposes. However, each entity has been assigned a UID.
The attribute name can be used for the entity COMMITTEE because it is safe to assume that the church would not
establish two committees with the same name. Both the other entities use ID number as UID. Notice that this diagram
has no way to show the committee or committees on which each member serves. The entity MEMBER is related in
some way to the entity COMMITTEE. The next section will explore representing such relationships in an E-R Diagram.

7.3—
Relationships

Once the entities have been established along with their attributes, it is time to examine relationships. A relationship is a
two-directional association or connection between two entities. If entities are the nouns of the database, relationships are
the transitive verbs. For example, the customer orders a product, the member serves on a committee.

Begin by designing sentences connecting the entities that might be related. It is important to write out the sentences as
clearly as possible. If you end up with a compound sentence, containing a comma or more than one verb, chances are
there are two or more entities or relationships involved. If the sentence contains words relating to time, such as first,
next, or after, they may be examples of constraints that must be represented in the model. Other types of sentences also
reflect relationships. One form is "there are . . . X in Y" which can be reworded using a transitive verb. The two
sentences represent the two directions of the relationship. For example, "there are passengers on the flight" could be
rewritten to reflect the relationship "a flight has passengers.'' If both flights and passengers are entities then a
relationship between those entities has been identified. If the sentence contains an adverb, this often corresponds to an
attribute of a relationship.

Once you have identified the entities and attributes, and have written sentences about them to identify relationships, it is
time to examine all the
                                                                                                                      Page 227

relationships of a particular entity to be sure they are relevant and unique. Remember that a relationship is between two
entities, and the relationship often goes in both directions. It is important to name the relationships so they can be read in
more than one direction. For example, "The product is part of the inventory." and "The inventory is composed of
products." Fig. 7-4 shows a list of relationship names that might be helpful in this step. This list was created by Richard
Barker.2

                                  Useful Pairs of Relationship Names
      about                     subject of            owned by             owner of*
      applicable to             context for*          part of              composed of
      at                        location of           part of              detailed by
      based on                  basis for             party to             for
      based on                  under                 party to             holder of
      bought in from            supplier of           placed on            responsible for
      bound by                  for                   precluded by         precluded by
      change authority for      on                    represented by       representation of
      classification for        of                    responsible for      responsibility of
      covered by                for                   responsible for      of
      defined by                part definition of    run by               carrier for
      description of            for                   source of            based on


Note: where the above are marked with an asterisk*, one should only use these as a last resort. For
example, "owned by" should only be used as a relationship name when the relationship means legal
ownership.


Some of the above names imply the role of a person or organization.


Fig. 7-4.
Useful pairs of relationship names.

Each direction of the relationship must have the following:

• a name, usually in lower-case letters

• an optionality, which is either "mandatory" (continuous line) and is read "must be" or "optional" (dashed line) and is
read "may be"

• a degree or cardinality which is "one or more" indicated by a crowsfoot or "one and only one" indicated by the
absence of the crowsfoot

The name is positioned in the diagram close to the entity or noun of the sentence. The optionality is the line connecting
the two entity boxes and the degree is indicated at the point where the line meets each box. Fig. 7-5 shows a sample
relationship. That relationship can be read left to right as "Each MEMBER may be serving on one or more
COMMITTEES." or right to left as "Each COMMITTEE may be made up of one or more MEMBERS."
    2 Barker, Richard, CASE*METHODSM Entity Relationship Modelling, Addison-Wesley, 1989.
                                                                                                                                           Page 228




                                                                Fig. 7-5
                                                       Member-Committee relationship.

It is helpful to follow a few conventions to make a complex diagram easier to read. If one entity has degree of one or
more, that entity should be on the left or on the top of the chart. Some authors say that "crows fly east or crows fly
south." Following this convention, entities that are more volatile, whose instances change frequently, will end up being
placed near the left top of the diagram. Entities that are less volatile will end up being placed nearer the bottom.
   Example 7.4
   Indicate how you would read each of the following relationships. Notice in the chart that the crowsfeet are on the left in each case.




a. L to R: Each STUDENT may be enrolled in one and only one COURSE.
R to L: Each COURSE may be taken by one or more STUDENTS.

b. L to R: Each EMPLOYEE must be assigned to one and only one DEPARTMENT.
R to L: Each DEPARTMENT may be responsible for one or more EMPLOYEES.

c. L to R: Each PAYCHECK must be for one and only one EMPLOYEE.
R to L: Each EMPLOYEE may be the receiver of one or more PAYCHECKS.

In some cases, it is possible for an entity to have a relationship with itself. Although rare, this kind of recursive
relationship is possible. It would be indicated in a diagram by a circular line with both ends connected to the box and
words defining the relationship at each end. For example, if each employee has a supervisor, the supervisor is also an
employee.

Once you have named the relationship and determined its cardinality and optionality, re-examine the model by reading
aloud the relationships between the pairs. Do they make sense, especially for this particular organization? Often the
relationships can be verified at this point before more time is invested.
                                                                                                                                   Page 229

There are three types of relationships: one-to-one, many-to-one, and many-to-many. They will be considered in the next
two sections.

7.4—
One-to-One Relationships

The one-to-one relationship has the cardinality or degree of one and only one in both directions. These relationships are
denoted by 1 to 1 or 1:1. 1:1 relationships are rare, especially 1:1 relationships that are mandatory in both directions. If
you find a 1:1 relationship, examine the two entities closely, as they may actually be the same entity.
   Example 7.5
   A relationship exists that can be written two ways: "The bed frame must be supporting one and only one mattress." "The mattress must
   be resting on one and only one bed frame." Diagram this 1:1 relationship. Can the entities be expressed as only one entity?




The diagram is shown as a 1:1 relationship that is mandatory in both directions. Since each bed frame supports only one
mattress, you should consider the possibility that the two entities are really only one entity BED. The needs of the
particular database will suggest whether they should be combined into one.

7.5—
Many-to-One and Many-to-Many Relationships

The many-to-one relationship has a cardinality in one direction of one or more and in the other direction of one and only
one. This relationship is usually denoted as M:1 or M to 1. It should be obvious to the reader that the relationship could
also be expressed as one-to-many. However, since the convention in the E-R Diagram is to have the one or more
cardinality on the left, it is usually expressed as M:1. All the samples in Example 7.4 are M:1 relationships. The many-
to-many relationship is one where there is a degree of one or more in both directions. This relationship can be denoted
as M:M (M to M) or M:N (M to N). Because the actual number of each degree is usually not the same, we will use the
M:N notation. Fig. 7-5 shows an example of M:N relationship. Members can serve on one or more committee, and
committees are made up of one or more members. Both M:1 and M:N relationships are very common. They are usually
optional in both directions, but can be mandatory in one direction. It is unusual to find M:1 or M:N relationships that are
mandatory in both directions.
                                                                                                                                       Page 230

   Example 7.6
   Examine the diagrams and identify the kinds of relationships illustrated.




a. Because a book can be written by one or more authors, and an author can write one or more books, this is an M:N
relationship.

b. Because a client may be treated by one and only one therapist, and a therapist may be counselor of one or more
clients, this is an M:1 relationship.

7.6—
Normalizing the Model

Once the initial E-R Diagram has been formed, it must be normalized. The steps listed in Chapter 5 must be followed to
put the model into 1NF, 2NF, 3NF or BCNF. We cannot overemphasize the importance of normalizing the model before
the database is implemented using a DBMS. It is much harder to change the structure of the database after data has been
entered into the tables.
   Example 7.7
   Refer to the PROJECT table in Fig. 5-2. That table could have been initially modeled as shown in Fig. 7-6. Is the entity in 1NF? If not,
   how can it be normalized?




                                                                  Fig. 7-6
                                                               PROJECT entity.
                                                                                                                    Page 231

The objective of putting an entity into 1NF is to remove its repeating groups and ensure that all entries of the resulting
table have at most a single value. It is clear in Fig. 7-6 that there are repeating values for each employee working on the
project. Therefore, it is NOT in 1NF. Two entities are represented, PROJECT-EMPLOYEE and PROJECT. The first
attempt at normalization from Chapter 5 Example 5.2 would result in the E-R Diagram in Fig. 7-7.




                                                        Fig. 7-7
                                           PROJECT-EMPLOYEE and PROJECT entities.

   Example 7.8
   Put the model from Fig. 7-7 into 2NF.

Changing to 2NF assures that no nonprime attribute is partially dependent on any key. In this case, the only attribute that
fully depends on the composite key (Proj-id,Emp-id) is Total-Hours. There would now be two entities, PROJECT-
EMPLOYEE and HOURS-ASSIGNED, as shown in Fig. 7-8.




                                                         Fig. 7-8
                                                  HOURS-ASSIGNED and
                                                PROJECT-EMPLOYEE entities.

In the same way, an entity model can usually be changed into 3NF and BCNF using the normalization processes
illustrated in Chapter 5. Performing these changes assures that the E-R Model and, therefore, the database, will be
normalized from the beginning of its design.
                                                                                                                      Page 232

7.7—
Table Instance Charts

When you begin to implement a database in a particular DBMS, you must first create the tables. The CREATE TABLE
command in SQL was demonstrated in Chapter 3. A sample CREATE TABLE command is shown in Fig. 7-9.

   CREATE TABLE Flex_Card
   (Student_Name        VARCHAR2(25),
    Card_Number         VARCHAR2(15) CONSTRAINT
                        calling_card_card_number_PK PRIMARY KEY,
    Starting_Value      NUMBER(4,2),
    Value_Left          NUMBER(4,2),
    Pin_Number          CHAR(12) CONSTRAINT
                        calling_card_pin_number_U UNIQUE);


Fig. 7-9. CREATE TABLE command in SQL.

It is clear that in order to write the CREATE TABLE command, you must already have defined the data types, primary
and foreign keys, and all other constraints that will be used. Before beginning this step, it is helpful to organize all the
information that has been generated during the design of the E-R Model. The Table Instance Chart (TIC), used by the
Oracle Corporation, describes in a detailed manner each entity, its attributes and the relationship(s) in which the entity
may participate, whether the relationship of the entity is to itself or to some other entities. Sometimes the TIC includes
sample data to help the user understand the chart. The format of a TIC is shown in Fig. 7-10, and the conventions used
as entries in the TIC are shown in Fig. 7-11.


 Column Name

 Key Type

 Nulls/Unique

 FK Ref. table

 FK Ref. Columns

 Data Type

 Maximum Length

 Sample Data




Fig. 7-10.
Format of TIC.
                                                                                                                           Page 233


SYMBOL                   MEANING

PK                       Primary Key

FK                       Foreign Key

FK1, FK2                 Two FKs within the same table

FK1, FK2                 Two columns within the same composite FK

NN                       NOT NULL column (required for mandatory attributes)

U                        UNIQUE column

U1, U1                   Two columns that are UNIQUE in combination


Fig. 7-11.
Convention symbols for TIC.

The steps used to create the TIC are:

(1) Create a TIC for each entity of the E-R Diagram. Each chart will have the same name as the entity it represents.

(2) Create one column in the chart for each attribute of the entity. Mark mandatory attributes as NN. If the UID contains
a single attribute, record the key type as PK and mark it as NN and U. If the UID is composite, record PK in each
column and mark them NN and U.

(3) If the UID includes relationships, add the FK column for each relationship and label it PK and FK. Add FK columns
to the right of all columns even if the FK is part of the PK. Use suffixes to distinguish FKs that appear within the same
table.

(4) For M:1 relationships, take the PK at the one end and put it in the table at the many end as a FK.

(5) For mandatory 1:1 relationships, place the unique FK in the table at the mandatory end and label it NN. If the 1:1
relationship is optional in both directions, place the FK in the table at either end of the relationship.

(6) For an M:1 recursive relationship, add a FK column to the table. This FK column refers to values of the PK column
of the same table.
    Example 7.9
    Create a TIC for the E-R Diagram from Figs 7-7 and 7-8. They can be combined into one diagram as shown in Fig. 7-12.
                                                                                                                  Page 234




                                                         Fig. 7-12.
                                       E-R Diagram for HOURS/EMPLOYEE/PROJECT.

Because there are three entities in the diagram, there will be three TICs. EMPLOYEE will have four columns and the
other two will both have three. We will build these charts one at a time.

a. We will start with EMPLOYEE. The table has columns for each attribute. The PK is ID, so it is marked both NN and
U. There are no other mandatory attributes. Determine the data type and size of each attribute. The attribute ID is the FK
at the one end of a M:1 relationship, so it will be put into the HOURS-ASSIGNED table. However, EMPLOYEE is at
the many end of a relationship with PROJECT, so the proj-id from PROJECT is a FK for this entity. This attribute may
not be NULL.


Column Name          id             emp-name       emp-dpt       emp-hrly-rate    proj-id

Key Type             PK                                                           FK

Nulls/Unique         NN, U                                                        NN

FK Ref. Table                                                                     PROJECT

FK Ref. Columns                                                                   proj-id

Data Type            Character      Character      Character     NUMBER

Maximum Length       9              25             10            4,2

Sample Data          123456789      Tom Jones      Sales         10.55
                                                                                                                  Page 235

b. The next TIC will be PROJECT. The table has columns for each attribute. The PK is ID, so it is marked both NN and
U. There is one other mandatory attribute, proj-name, so it is marked NN. Determine the data type and size of each
attribute. The attribute ID is the FK at the one end of a M:1 relationship, so it will be put into the HOURS-ASSIGNED
table.


Column Name             id              proj-name            proj-mgr-id

Key Type                PK

Nulls/Unique            NN, U           NN

FK Ref. Table

FK Ref. Columns

Data Type               Character       Character            Character

Maximum Length          7               25                   9

Sample Data             BRDG109         Second St.           987654321
                                        Bridge


c. The last TIC we will build will be HOURS-ASSIGNED. The table has columns for each attribute. The PK is
composite, using both emp-id and proj-id. They are both marked NN and U. There are no other mandatory attributes.
Determine the data type and size of each attribute. The attributes proj-id and emp-id are both the keys at the many end of
a M:1 relationship, so a column is listed for each. They are marked NN and U.


Column Name         proj-id         emp-id           total-hours    PROJECT     EMPLOYEE
                                                                    proj-id     emp-id

Key Type            PK              PK                              FK          FK

Nulls/Unique        NN, U           NN, U                           NN, U       NN, U

FK Ref. Table                                                       PROJECT     EMPLOYEE

FK Ref. Columns                                                     proj-id     emp-id

Data Type           Character       Character        NUMBER

Maximum             6               9                4,1
Length

Sample Data         BRDG109         123456789        102.5
                                                                                                                      Page 236

Table Instance Charts can be invaluable in preparing the model for full implementation in a DBMS. Remember, proper
design will always save time in implementation.

Solved Problems

7.1. List the steps necessary in the design of a database.

    (1) Gather data and ascertain requirements.
(2) Build the E-R Diagram.
(3) Construct the table instance charts.
(4) Define the individual tables.
(5) Implement using a DBMS.

7.2. Identify two entities that might be important for a school. List at least three attributes for each entity. Then show
what the entities and attributes would look like in an E-R Diagram.

Two entities of importance for a school might include teachers and students. Teachers would have ID numbers, names,
and salaries. Students would have ID numbers, names, and grade point averages.




7.3. List the steps necessary to identify the entities from the specifications.

    (1) Examine specifications closely for a noun that might be of significance.
(2) Give it a name. Be sure to name both directions. (Ask how ENTITY A is related to
    ENTITY B and how ENTITY B is related to ENTITY A.)
(3) Determine the relationship optionality. (Ask, is the relationship mandatory or optional?)
(4) Establish what information must be kept about this entity.
(5) Decide which attribute or attributes can serve as the UID.
(6) Represent the entities including the attributes and mark the UID in the diagram.
(7) Repeat for all other significant nouns in the requirements documentation.
                                                                                                                 Page 237

7.4. The gathering of specifications for a school database resulted in the explanation shown below. Choose the entities
you might want to represent, the attributes for each entity, and model them in a diagram including the UID.

''The Beverly Elementary School needs a database. The school has a number of students in each class, one class in each
room, and two classes for each grade. Each teacher teaches only one class."




The two most obvious entities are STUDENT and TEACHER. However, it is also clear that both STUDENT and
TEACHER entities need to know their class. The class information should not be positioned in two separate places.
Therefore a separate entity CLASS is created. No relationships are indicated in this diagram.

7.5. Indicate how you would read the following relationship. Identify the type of relationship.




L to R: Each CAR must be responsibility of one and only one DRIVER.

R to L: Each DRIVER must be responsible for one or more CARS.

This is a M:1 relationship, mandatory in both directions.

7.6. Indicate how you would read the following relationship. Identify the type of relationship.




L to R: Each DEPENDENT must be claimed by one and only one EMPLOYEE.

R to L: Each EMPLOYEE may be claiming one or more DEPENDENTS

This is an M:1 relationship mandatory in only one direction.
                                                                                                                  Page 238

7.7. Diagram this relationship. What kind of relationship is it? "The COMPUTER must be the host of one and only one
MOTHERBOARD." "The MOTHERBOARD may be incorporated into one and only one COMPUTER."




This is a 1:1 relationship that is mandatory in one direction only.

7.8. Create an E-R Diagram showing these relationships. Indicate what kind of relationships they are.

a. The STUDENT may be taught by one and only one TEACHER.
The TEACHER may be instructor of one or more STUDENTS.
b. The TEACHER may be responsible for one and only one CLASS.
The CLASS may be the responsibility of one and only one TEACHER.
c. The CLASS may be made up of one or more STUDENTS.
The STUDENT may be a member of one and only one CLASS.




The E-R Diagram depicts these relationships. There are three entities, and each relationship is bi-directional between
exactly two entities. Relationships between the TEACHER and CLASS are 1:1 and the others are M:1. Notice in the
diagram that the crowsfeet always go east and/or south.
                                                                                                                  Page 239

7.9. Look at the CLASS entity and determine if it is in 1NF. If not, how would you normalize it?




The entity CLASS is not in 1NF because there are repeating values for each instance of class-id. Therefore it should be
split into two entities, CLASS and STUDENT. The E-R Diagram is shown below.




7.10. Look at the E-R Diagram of the previous problem. Are both CLASS and STUDENT in 2NF? Why or why not? If
not, normalize the entities.

The entity CLASS is in 2NF, but the entity STUDENT is not. The attributes last-name, first-name, and grade-average
do not depend upon the class-id. Therefore, a separate entity should be created called CLASS-LISTING as shown
below. Often you need such a connecting table in order to be sure that the entity model is in 2NF.




7.11. Build the Table Instance Chart for the E-R Diagram in the previous example.

There are three entities, so there are three tables.

a. We will start with STUDENT. The table has columns for each attribute. The PK is ID, so it is marked both NN and
U. There are no other mandatory attributes. Determine the data type and size of each attribute. The attribute ID is the FK
at the many end of a M:1 relationship, so it has its own column.
                                                                                                                   Page 240


Column Name         id             last-name    first-name    grade        CLASS-LISTINGS
                                                              average      student-id

Key Type            PK                                                     FK

Nulls/Unique        NN, U                                                  NN, U

FK Ref. Table                                                              CLASS-LISTINGS

FK Ref.                                                                    student-id
Columns

Data Type           Character      Character    Character     NUMBER

Maximum             9              15           15            4,2
Length

Sample Data         123456789      Simpson      Marj          3.98


b. The next table is CLASS-LISTINGS. The table has columns for each attribute. The PK is a composite of student-id
and class-id, so they are both marked NN and U. There are no other mandatory attributes. Determine the data type and
size of each attribute. The attribute class-ID is the FK at the many end of a M:1 relationship, so it has its own column.
The attribute student-ID is at the one end of a M:1 relationship, so it was placed in the STUDENT table.


Column Name        student-id      class-id       CLASS class-
                                                  id

Key Type           PK                             FK

Nulls/Unique       NN, U                          NN,U

FK Ref. Table                                     CLASS

FK Ref.                                           id
Columns

Data Type          Character       Character

Maximum            7               9
Length

Sample Data        GR4RM102        123456789



c. The last table is CLASS. The table has columns for each attribute. The PK is ID, so it is marked both NN and U.
There are no other mandatory attributes. Determine the data type and size of each attribute. The attribute ID is the FK at
the one end of a M:1 relationship, so it was put into the CLASS-LISTINGS table.
                                                                                                                      Page 241


Column Name           student-id       grade-level     room

Key Type              PK

Nulls/Unique          NN, U

FK Ref. Table

FK Ref. Columns

Data Type             Character        NUMBER          Character

Maximum Length 7                       2               3

Sample Data           GR4RM102         4               102


Supplementary Problems

7.12. Identify two entities that might be important for a theater. List at least three attributes for each entity. Then show
what the entities and attributes would look like in an E-R Diagram.

7.13. The gathering of specifications for a software company database resulted in the explanation shown below. Choose
the entities you might want to represent, the attributes for each entity, and model them in a diagram including the UID.

"The WeSatisfy Software company has employees that work on different projects. Each employee may work on more
than one project. For each project the database needs to record the total amount of time spent to help in the billing
process. The company has a number of customers that purchase the software."

7.14. Indicate how you would read the following relationship. Identify what kind of relationship it is.




7.15. Indicate how you would read the following relationship. Identify what kind of relationship it is.
                                                                                                                 Page 242

7.16. Diagram this relationship. What kind of relationship is it? "Each MAN must be married to one and only one
WOMAN." "Each WOMAN must be married to one and only one MAN." What kind of relationship is it?

7.17. Create an E-R Diagram showing these relationships. Indicate what kind of relationships they are.

a. Each FLIGHT may be carrier for one or more PASSENGERS.
Each PASSENGER may be traveler on one or more FLIGHTS.
b. Each FLIGHT may be responsibility of one and only one PILOT.
Each PILOT may be responsible for one or more FLIGHTS.
c. Each PASSENGER may be responsibility of one or more PILOTS.
Each PILOT may be responsible for one or more PASSENGERS.

7.18. Look at the PILOT entity and determine if it is in 1NF. If not, how would you normalize it?




7.19. Look at the answer to the previous question. Determine if the PILOT entity is in 2NF. If not, redraw the E-R
Diagram correctly.

7.20. Build the Table Instance Chart for this E-R Diagram.
                                                                                                            Page 243

Answers to Supplementary Problems

7.12. Two entities of importance for a theater might include movies and customers. Movies would have ID numbers,
titles, and rating. Customers would have ID numbers, names, and seat numbers.




7.13. The entities are EMPLOYEE, CUSTOMER, and PROJECT. No relationships are indicated in this diagram.




7.14. L to R: Each EMPLOYEE may be assigned to one or more PROJECTS.
R to L: Each PROJECT must be responsibility of one or more EMPLOYEES.
This is an M:N relationship mandatory in only one direction.

7.15. L to R: Each STUDENT may be assigned to one and only one CLASS.
R to L: Each CLASS may be made up of one or more STUDENTS.
This is an M:1 relationship optional in both directions.

7.16. This is a 1:1 relationship mandatory in both directions.
                                                                                                                        Page 244

7.17. The relationship between the FLIGHT and PILOT is M:1. The other relationships are M:N.




7.18. To put the PILOT entity into 1NF, it must be split into two entities, PILOT and FLIGHT, as shown below. The
repeating elements have been eliminated.




7.19. The PILOT entity in the answer to the previous question is not in 2NF because, although the composite key is
(flight-id, pilot-id), the flight-time-credited is dependent only on the flight-id, not on the pilot-id. Therefore it should be
split into two entities, PILOT and TIME-CREDITED.




7.20. There are three entities, so there are three tables.

a. We will start with FLIGHT. The table has columns for each attribute. The PK is ID, so it is marked both NN and U.
There are no other mandatory attributes. Determine the data type and size of each attribute. The attribute ID is the FK at
the many end of a M:1 relationship, so it has its own column.
                                                                                                                 Page 245


Column Name           id              source          destination     TIME-CREDITED
                                                                      flight-id

Key Type              PK                                              FK

Nulls/Unique          NN, U                                           NN,U

FK Ref. Table                                                         TIME-CREDITED

FK Ref. Columns                                                       student-id

Data Type             Character       Character       Character

Maximum Length        4               15              15

Sample Data           2987            Atlanta         Dallas


b. The next table is TIME-CREDITED. The table has columns for each attribute. The PK is a composite of pilot-id and
flight-id, so they are both marked NN and U. There are no other mandatory attributes. Determine the data type and size
of each attribute. The attribute pilot-ID is the FK at the many end of a M:1 relationship, so it has its own column. The
attribute flight-ID is at the one end of a M:1 relationship, so it was placed in the FLIGHT table.


Column Name           pilot-id       flight-id      flight-hours-          PILOT pilot-
                                                    credited               id

Key Type              PK                                                   FK

Nulls/Unique          NN, U                                                NN, U

FK Ref. Table                                                              PILOT

FK Ref. Columns                                                            id

Data Type             Character      Character      NUMBER

Maximum Length        9              4              4,1

Sample Data           123456789      2987           6.5


c. The last table is PILOT. The table has columns for each attribute. The PK is ID, so it is marked both NN and U. There
are no other mandatory attributes. Determine the data type and size of each attribute. The attribute ID is the FK at the
one end of a M:1 relationship, so it was put into the TIME-CREDITED table.
                                                    Page 246


Column Name       id          name        salary

Key Type          PK

Nulls/Unique      NN, U

FK Ref. Table

FK Ref. Columns

Data Type         Character   Character   NUMBER

Maximum Length 7              15          5,2

Sample Data       GR4RM102    Thompson    1200.00
                              Page 247




Index

A

Accountability, 198

Algorithms:

    leftreduce, 137

    lossless-join, 163

    membership, 129

    satisfies, 125

    test preservation, 172

ALTER, 200

ANSI/SPARC architecture, 15

Application programmers, 3

Attributes, 2, 28, 224

    extraneous, 136

    prime, 32, 126

Audit trail, 199

Auditing, 199

Authentication, 195, 199

Authorization, 195, 202

Availability, 198

C

Cardinality, 29, 227

Centralized system, 5

Child table, 35

Clause, 80

Closure property, 36

Column (see Attribute)

COMMIT, 212
Composition, 42

Conceptual level, 15

Concurrency, 212

Configuration:

    network, 7

    ring, 7

    star, 7

Constraints, 83

    agreement, 122

    column, 84

    integrity, 9, 33, 212

    named, 83

    semantic, 122

    table, 84

    unnamed, 83

CREATE PROFILE, 201

CREATE ROLE, 205

CREATE USER, 203

CREATE VIEW, 208

D

Data, 2, 4

    access, 9

    anomalies, 153, 157, 159

    inconsistency, 9, 122

    independence, 17

    maintenance, 9

    redundancy, 9, 122

Data definition language (DDL), 12

Data dictionary, 4, 12

Data manipulation language (DML), 13

Data model, 10
Database, 1

Database administrator (DBA), 3

Database buffer, 212

Database management systems (DBMS), 1

Datatypes, 52

Decompositions, 161

Default value, 81

Degree of relation, 28

DELETE FROM . . . WHERE . . ., 50

deletion, 50

Dependency preservation, 169, 171

Determinent, 123

Distributed system, 5

Dom(attribute name), 29

Domain, 3, 29, 52

DROP USER, 203

E

End users, 3

Entity, 2, 224

Entity-relationship model (E-R), 222

Equivalent sets, 134

E-R diagram, 222

External level, 15

F

Field (see Attribute)

Flat-file system, 10
                                       Page 248

Functional dependency (FD), 122, 123

    canonical cover, 138

    closure, 131

    nonredundant cover, 134

    redundant, 128

G

GRANT . . . ON, 207

GRANT . . . TO, 205

H

Hardware, 2

Hierarchical model, 10

I

Inference axioms, 126, 127

INSERT INTO . . . 48

insertion, 48

Instance, 29

Integrated data, 5

Integrity, 212

Internal level, 15

K

Key, 32

    alternate, 32

    candidate, 32

    composite primary, 32

    foreign, 34, 84

    minimality property, 32

    primary, 32, 84

    superkey, 34

    uniqueness property, 32
L

Logical organization of data, 12

M

Metadata, 4

Multi-user system, 4

N

Network model, 10

Normal form, 148

    1NF, 149–153

    2NF, 155

    3NF, 158

    BCNF, 160

Normalization, 148, 150

O

Object privileges, 202, 207

Operations, 43

    Cartesian product, 46

    difference, 45

    intersection, 44

    union, 43

Operators, 36

    concatenation, 39

    division, 62

    equijoin, 39

    projection, 37

    relational, 36

    selection, 36

    unary, 37

Optionality, 227

Outer join, 60
P

Parent table, 35

Password, 199

Physical organization of data, 12

Populating the table, 29

Priveleges, 5

Procedures, 3

Profile, 200

Q

Query, 36, 91

    stored, 208

R

Record (see Tuple)

Referential integrity, 35

Relation, 28, 31

Relational algebra, 36

Relational calculus, 36

Relational database management systems (RDBMS), 11, 28

Relational model, 11

Relationship, 226

    many to many, 229

    many to one, 229

    one to one, 229

REVOKE . . . FROM, 206

Role, 205

Rows (see Tuple)

S

SAVEPOINT, 213

Schema, 12, 82, 202

Security, 9, 194
   logical, 195

   physical, 195

Security domain, 202

Shared data, 5

Single-tier system, 5

Single-user system, 4

Software, 2

SQL, 78

   interactive, 79

   embedded, 79

System privileges, 202
                                          Page 249

T

t(A), 30

Table (see Relation)

Table instance chart (TIC), 232

Tablespace, 203

Theta join, 42, 67

Three-tier system, 6

Transaction, 213

Transitive dependencies, 157

Trivial dependencies, 127

Tuple, 28

    spurious, 162

Two-tier system, 6

U

Union compatible, 42

Unique identifier (UID), 224

Universe of Discourse (UOD), 2

update, 51

UPDATE . . . SET . . . WHERE . . . , 51

V

V$SESSION, 218

View, 208


