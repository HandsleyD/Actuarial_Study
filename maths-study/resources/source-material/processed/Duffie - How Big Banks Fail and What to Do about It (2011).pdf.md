---
normalized_id: shared-pdf-reference-duffie-how-big-banks-fail-and-what-to-do-about-it-2011
exam_code: SHARED
material_scope: duffie - how big banks fail and what to do about it (2011).pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Duffie - How Big Banks Fail and What to Do about It (2011).pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-duffie-how-big-banks-fail-and-what-to-do-about-it-2011

How Big Banks Fail and What to Do about It
How Big Banks Fail and
What to Do about It



Darrell Duﬃe




princeton university press
princeton and oxford
Copyright © 2011 by Princeton University Press
Published by Princeton University Press,
41 William Street, Princeton, New Jersey 08540
In the United Kingdom: Princeton University Press,
6 Oxford Street, Woodstock, Oxfordshire OX20 1TW
press.princeton.edu

All Rights Reserved

Library of Congress Cataloging-in-Publication Data
Duﬃe, Darrell.
  How big banks fail and what to do about it / Darrell Duﬃe.
    p. cm.
  Includes bibliographical references and index.
  ISBN 978-0-691-14885-4 (alk. paper)
  1. Bank failures. 2. Bank failures—Prevention.
  3. Bank failures—United States. 4. Financial crises. I. Title.
HG1573.D84 2010
332.1—dc22                 2010032251

British Library Cataloging-in-Publication Data is available

This book has been composed in LucidaBright using TEX
Typeset by T&T Productions Ltd, London

Printed on acid-free paper. ∞

Printed in the United States of America

10 9 8 7 6 5 4 3 2 1
To Frankie
Contents




List of Figures and Tables                           ix

Preface                                              xi

Chapter One
   Introduction                                       1

Chapter Two
   What Is a Dealer Bank?                             9

Chapter Three
   Failure Mechanisms                                23

Chapter Four
   Recapitalizing a Weak Bank                        43

Chapter Five
   Improving Regulations and Market Infrastructure   53

Appendix
   Central Clearing of Derivatives                   63

Notes                                                71

Bibliography                                         79

Index                                                87
Figures and Tables



Figures

2.1   A repurchase agreement, or “repo.”                  12
2.2   A tri-party repurchase agreement, by which a
      money-market fund lends cash to a dealer.           14
2.3   Novation of a credit default swap.                  18
3.1   The sudden disappearance of cash at Bear
      Stearns in the days before it was acquired by
      J. P. Morgan in March 2008.                         24
3.2   Rehypothecation of prime-brokerage assets.          36
3.3   A prime broker lends $100 million to Hedge
      Fund B from funds deposited by Hedge Fund A.        37
3.4   In this example, a prime broker borrows $120
      million by rehypothecating $140 million of the
      assets of a client, to whom it lent $100 million,
      for a net cash ﬁnancing to the prime broker of
      $20 million.                                        38
3.5   Assets pledged to Morgan Stanley that it was
      permitted to repledge dropped radically after the
      failure of Lehman (dollars, in billions).           40
4.1   Illustration of debt overhang.                      44
4.2   Distress-contingent convertible debt converts
      to equity when a bank’s leverage hits a distress
      trigger level.                                      47
5.1   The reduction in counterparty exposure achieved
      with multilateral netting.                          57
5.2   A signiﬁcant reduction in counterparty exposure
      reduction is lost with multiple CCPs.               58
A.1   The waterfall of resources available to a CCP.      68
x   •   Figures and Tables

Tables

2.1      Major dealers participating at the New York
         Federal Reserve Bank meeting on over-the-counter
         derivatives market infrastructure held on
         January 14, 2010.                                  10
2.2      Exposures of dealers in OTC derivatives markets
         as of June 2009. Net exposures do not include
         non-U.S. credit default swaps.                     17
3.1      Quarter-end ﬁnancing of broker-dealer ﬁnancial
         instruments before the failures of Bear Stearns
         and Lehman ($ billions).                           31
3.2      Variation in repo haircuts.                        33
Preface




As we come out of the ﬁnancial crisis of 2007–2009, success
in placing our ﬁnancial system on a sounder footing depends
on an understanding of how the largest and most connected
banks, the major dealer banks, can make a sudden transition
from weakness to failure. The dealer banks are at the center
of the plumbing of the ﬁnancial system. Among many other
crucial activities, they intermediate over-the-counter markets
for securities and derivatives. Although the ﬁnancial crisis has
passed, the dealer banks remain among the most serious points
of instability in the ﬁnancial system.
   Once the solvency of a dealer bank is questioned, its relation-
ships with its customers, equity investors, secured creditors,
derivatives counterparties, and clearing bank can change sud-
denly. The incentives at play are similar to those of a depositor
run at a commercial bank. That is, fear over the solvency of the
bank leads to a rush by many to reduce their potential losses in
the event that the bank fails: At ﬁrst, the bank must signal its
strength, giving up some of its slim stocks of remaining capi-
tal and cash, for to do otherwise would increase perceptions of
weakness. Eventually, it is impossible for the bank to stem the
tide of cash outﬂows. The bank then fails.
   The key mechanisms of a dealer-bank failure, such as the col-
lapses of Bear Stearns and Lehman Brothers in 2008, depend on
special institutional and regulatory frameworks that inﬂuence
the ﬂight of short-term secured creditors, hedge-fund clients,
derivatives counterparties, and most devastatingly, the loss of
clearing and settlement services. Dealer banks, sometimes re-
ferred to as “large complex ﬁnancial institutions” or as “too
big to fail,” are indeed of a size and complexity that sharply
distinguish them from typical commercial banks. Even today,
the failure of a dealer bank would pose a signiﬁcant risk to the
entire ﬁnancial system and the wider economy.
xii   •   Preface

   Current regulatory approaches to mitigating bank failures do
not adequately treat the special risks posed by dealer banks.
Some of the required reforms are among those suggested in
2009 by the Basel Committee on Banking Supervision (2009)
and in pending U.S. legislation, namely the Restoring Ameri-
can Financial Stability Bill. Additional needed reforms to reg-
ulations or market infrastructure still do not receive adequate
attention. A January 2010 speech by Paul Tucker, Deputy Gov-
ernor of the Bank of England, shows that some regulators are
aware of the signiﬁcant changes still required.1
   In How Big Banks Fail, I describe the failure mechanics of
dealer banks in clinical detail, as well as outline improvements
in regulations and market infrastructure that are likely to re-
duce the risks of these failures and reduce the damage they
cause to the wider ﬁnancial system when they do fail.
   I am grateful for impetus to this project from Andrei Shleifer
and Jeremy Stein, for research assistance from Ross Darwin, Vo-
jislav Sesum, Felipe Varas, and Zhipeng Zhang, and for helpful
conversations with Joseph Abate, Viral Acharya, Tobias Adrian,
J. A. Aitken, Yacov Amihud, Martin Bailey, Hugo Bänziger, John
Berry, Robert Bliss, Michael Boskin, Lucinda Brickler, Jeremy
Bulow, John Campbell, John Coates, John Cochrane, Andrew
Crockett, Qiang Dai, Peter DeMarzo, Doug Diamond, Bill Dud-
ley, Espen Eckbo, David Fanger, Alessio Farhadi, Peter Fisher,
Mark Flannery, Ken French, John Goggins, Jacob Goldﬁeld, Ja-
son Granet, Ken Griﬃn, Joe Grundfest, Robert E. Hall, Dick
Herring, Brad Hintz, Tom Jackson, Anil Kashyap, Matt King,
Paul Klemperer, Alex Klipper, Bill Kroener, Eddie Lazear, Matt
Leising, Paul Klemperer, Jean-Pierre Landau, Joe Langsam, Ada
Li, Theo Lubke, David Mengle, Andrew Metrick, Rick Mishkin,
Stewart Myers, Raghu Rajan, Eric Rosengen, Ken Scott, Manmo-
han Singh, Bob Shiller, Hyun Shin, David Scharfstein, Brendon
Shvetz, Manmohan Singh, David Skeel, Matt Slaughter, Jeremy
Stein, René Stulz, Kimberly Summe, Glen Taksler, John Taylor,
Lauren Teigland-Hunt, Rick Thielke, Paul Tucker, Peter Walli-
son, Andrew White, Alex Wolf, Alex Yavorsky, Haoxiang Zhu,
and Tatjana Zidulina. For their guidance, I also thank Ann Nor-
man and Timothy Taylor from the Journal of Economic Perspec-
tives, which published a shorter version of this work under the
title “The Failure Mechanics of Dealer Banks,” in February 2010.
                                                    Preface   • xiii

I am also grateful to Linda Truilo for expert copyediting. Finally,
I am grateful to Janie Chan, Seth Ditchik, Peter Dougherty, and
Heath Renfroe of Princeton University Press.
Darrell Duﬃe
Stanford University, March, 2010
How Big Banks Fail and What to Do about It
CHAPTER ONE


Introduction



I begin with a story of the failure of a bank that is a major
dealer in securities and derivatives. Our dealer bank will be un-
able to stop the drain of cash caused by the departures of its
short-term creditors, over-the-counter (OTC) derivatives coun-
terparties, and client hedge funds. The most immediate exam-
ples are the 2008 failures of Bear Stearns and Lehman, but the
failure mechanics at work could apply to any major dealer bank,
once it is suﬃciently weakened. There are further lessons to be
learned from the major dealers such as Morgan Stanley that did
not fail despite severe stresses on their liquidity shortly after
the Lehman bankruptcy.
   We pick up the story several months before the demise of a
hypothetical dealer bank, which we shall call Beta Bank. Beta’s
capital position has just been severely weakened by losses. The
cause need not be a general ﬁnancial crisis, although that would
further reduce Beta’s chance of recovery. Once weakened, Beta
takes actions that worsen its liquidity position in a rational
gamble to signal its strength and protect its franchise value.
Beta wishes to reduce the ﬂight of its clients, creditors, and
counterparties.
   Beta’s ﬁrst move is to bail out some clients from the signif-
icant losses that they suﬀered through investments arranged
by Beta. This is an attempt to maintain the value of Beta’s repu-
tation for serving its clients’ interests. As time passes, and the
cracks in Beta’s ﬁnances become apparent to some market par-
ticipants, Beta notices that some of its OTC derivatives counter-
parties have begun to lower their exposures to Beta. Their trans-
actions slant more and more toward trades that drain cash away
from Beta and toward these counterparties. Beta believes that
it must continue to oﬀer competitive terms on these trades,
for to do otherwise would signal ﬁnancial weakness, thereby
exacerbating the ﬂight. Other dealer banks are increasingly be-
ing asked to enter derivatives trades, called “novations,” which
have the eﬀect of inserting the other dealers between Beta and
2   •   Chapter One

its original derivatives counterparties, insulating those coun-
terparties from Beta’s default risk. As those dealers notice this
trend, they begin to refuse novations that would expose them
to Beta’s default. As a result, the market gossip about Beta’s
weakness begins to circulate more rapidly.
   Beta has been operating a signiﬁcant prime-brokerage busi-
ness, oﬀering hedge funds such services as information tech-
nology, trade execution, accounting reports, and—more impor-
tant to our story—a repository for the hedge funds’ cash and
securities. These hedge funds have heard the rumors and have
been watching the market prices of Beta’s equity and debt in
order to gauge Beta’s prospects. They begin to shift their cash
and securities to better-capitalized prime brokers or, safer yet,
to custodian banks. Beta’s franchise value is thus rapidly erod-
ing; its prospects for a merger rescue or for raising additional
equity capital diminish accordingly. Potential providers of new
equity capital question whether their capital infusions would
do much more than improve the position of Beta’s creditors.
In the short run, a departure of prime-brokerage clients is also
playing havoc with Beta’s cash liquidity, because Beta has been
ﬁnancing its own business in part with the cash and securities
left with it by these hedge funds. As they leave, Beta’s cash
ﬂexibility declines to alarming levels.
   Although Beta’s short-term secured creditors hold Beta’s se-
curities as collateral against default losses, at this point they
see no good reason to renew their loans to Beta. Potentially,
they could get caught up in the administrative mess that would
accompany Beta’s default. Moreover, even though the amount
of securities that they hold as collateral includes a “haircut”—
a buﬀer for unexpected reductions in the market value of the
collateral—there remains the risk that they could not sell the
collateral at a high enough price to cover their loans. Most of
these creditors fail to renew their loans to Beta. A large fraction
of these short-term secured loans are in the form of repurchase
agreements, or “repos.” The majority of these have a term of
one day. Thus, on short notice, Beta must ﬁnd signiﬁcant new
ﬁnancing, or conduct costly ﬁre sales of its securities.
   Beta’s liquidity position is now grave. Beta’s treasury de-
partment is scrambling to maintain positive cash balances in
its clearing accounts. In the normal course of business, Beta’s
                                                Introduction •   3

clearing bank would allow Beta and other dealers the ﬂexibil-
ity of daylight overdrafts. A clearing bank routinely holds the
dealer’s securities in amounts suﬃcient to oﬀset potential cash
shortfalls. Today, however, Beta receives word that its clear-
ing bank has exercised its right to stop processing Beta’s cash
transactions, given the exposure of the clearing bank to Beta’s
overall position. This is the last straw. Unable to execute its
trades, Beta declares bankruptcy.
   Beta Bank is a ﬁctional composite. In what follows, my goal
is to establish a factual foundation for the key elements of
this story. In addition to providing institutional and conceptual
frameworks, I will propose revisions to regulations and market
infrastructure.


Economic Principles

The basic economic principles at play in the failure of a large
dealer bank are not so diﬀerent from those of a garden-variety
run on a typical retail bank, but the institutional mechanisms
and the systemic destructiveness are rather diﬀerent.
   A conventional analysis of the stability of a bank, along the
lines of Diamond and Dybvig (1983), conceptualizes the bank
as an investor in illiquid loans. Financing the loans with short-
term deposits makes sense if the bank is a superior interme-
diator between depositors, who are usually interested in short-
term liquidity, and borrowers, who seek project ﬁnancing. The
equity owners of the bank beneﬁt, to a point, from leverage. Oc-
casionally, perhaps from an unexpected surge in the liquidity
demands of depositors or from a shock to the ability of bor-
rowers to repay their loans, depositors may become concerned
over the bank’s solvency. If the concern is suﬃciently severe,
the anticipation by depositors of a run is self-fulﬁlling.
   The standard regulatory tools for treating the social costs
of bank failures are the following: supervision and risk-based
capital requirements, which reduce the chance of a solvency
threatening loss of capital; deposit insurance, which reduces
the incentives of individual depositors to trigger cash insol-
vency by racing each other for their deposits; and regulatory
resolution mechanisms that give authorities the power to re-
structure a bank relatively eﬃciently. These regulatory tools
4   •   Chapter One

not only mitigate the distress costs of a given bank and protect
its creditors, but they also lower the knock-on risks to the rest
of the ﬁnancial system. We will consider some additional policy
mechanisms that more speciﬁcally address the failure risks of
large dealer banks.
   Although I will simplify the discussion by treating large
dealer banks as members of a distinct class, in practice they
vary in many respects. They typically act as intermediaries in
the markets for securities, repurchase agreements, securities
lending, and over-the-counter derivatives. They conduct pro-
prietary (speculative) trading in conjunction with these ser-
vices. They are prime brokers to hedge funds and provide asset-
management services to institutional and wealthy individual
investors. As part of their asset-management businesses, some
operate “internal hedge funds” and private equity partnerships,
for which the bank acts eﬀectively as a general partner with
limited-partner clients. When internal hedge funds and other
oﬀ-balance-sheet entities such as structured investment vehi-
cles and money-market funds suﬀer heavy losses, the potential
for a reduction in the dealer’s reputation and franchise value
gives the dealer bank an incentive to compensate investors
voluntarily in these vehicles.
   Dealer banks may have conventional commercial banking op-
erations, including deposit taking as well as lending to cor-
porations and consumers. They may also act as investment
banks, which can involve managing and underwriting securi-
ties issuances and advising corporate clients on mergers and
acquisitions. Investment banking sometimes includes “mer-
chant banking” activities, such as buying and selling oil, forests,
foodstuﬀs, metals, or other raw materials.
   Large dealer banks typically operate under the corporate um-
brella of holding companies. These are sometimes called “large
complex ﬁnancial institutions.” Some of their activities are
therefore outside of the scope of traditional bank-failure res-
olution mechanisms such as conservatorship or receivership.1
New U.S. legislation, particularly the Restoring American Finan-
cial Stability Bill, extends the authority of the government to re-
structure large failing bank–holding companies and other sys-
temically important ﬁnancial institutions that were not already
covered by traditional resolution mechanisms.
                                                Introduction •   5

   When the solvency of a dealer bank becomes uncertain, its
various counterparties and customers have incentives to re-
duce their exposures to the bank, sometimes quickly and in
a self-reinforcing cascade. Although their incentives to exit are
similar to those of uninsured bank depositors, the mechanisms
at play make the stability of a dealer bank worthy of additional
policy analysis, especially considering the implications for sys-
temic risk. Dealer banks have been viewed, with good reason, as
“too big to fail.” The destructiveness of the failure of Lehman
Brothers in September 2008 is a case in point.
   Although all large dealer banks now operate as regulated
banks or within regulated bank–holding companies that have
access to traditional and new sources of government or central-
bank support, concerns remain over the systemic risk that
some of these ﬁnancial institutions pose to the economy. Al-
though access to government support mitigates systemic risk
associated with catastrophic failures, the common knowledge
that too-big-to-fail ﬁnancial institutions will receive support
when they are suﬃciently distressed—in order to limit disrup-
tions to the economy—provides an additional incentive to large
ﬁnancial institutions to take ineﬃcient risks, a well-understood
moral hazard. The creditors of systemically important ﬁnancial
institutions may oﬀer ﬁnancing at terms that reﬂect the likeli-
hood of a government bailout, thus further encouraging these
ﬁnancial institutions to increase leverage.
   Among the institutional mechanisms of greatest interest
here are those associated with short-term “repo” ﬁnancing,
OTC derivatives, oﬀ-balance-sheet activities, prime brokerage,
and loss-of-cash settlement privileges at a dealer’s clearing
bank. Counterparty treatment at the failure of the dealer is a
boundary condition that may accelerate a run once it begins.
   As counterparties and others begin to exit their relationships
with a distressed dealer bank, not only is the cash liquidity
position of the bank threatened, but its franchise value also
diminishes, sometimes precipitously. If the balance sheet or
franchise value has signiﬁcant associated uncertainty, poten-
tial providers of additional equity capital or debt ﬁnancing, who
might hope to proﬁt by sharing in a reduction in distress losses,
may hold back in light of adverse selection. They would be
purchasing contingent claims whose prospects could be much
6   •   Chapter One

more transparent to the seller (the bank) than to the investor.
For example, during the 2008 ﬁnancial crisis, when Wachovia
was searching for a potential buyer of its business in order to
avoid failure, a Wachovia oﬃcial described the reluctance of
Wells Fargo by saying2 “They didn’t understand our commercial
loan book.”
   Another market imperfection, known as “debt overhang,”
further dampens the incentive of a weakened bank to raise new
equity capital in order to lower its distress costs. Although large
potential gains in the total enterprise value of a distressed bank
could be achieved by the addition of equity capital, these gains
would go mainly toward making creditors whole, which is not
the objective of the current equity owners. Debt overhang is
discussed in more detail in chapter 4.
   In a normal distressed corporation, debt overhang and ad-
verse selection can be treated by a bankruptcy reorganization,
which typically eliminates the claims of equity owners and con-
verts the claims of unsecured creditors to new equity. Attempts
to restructure the debt of a large dealer bank, however, could
trigger a rush for the exits by various clients, creditors, and
derivatives counterparties. This may lead to a large ﬁre sale,
disrupting markets for assets and over-the-counter derivatives,
with potentially destructive macroeconomic consequences. An
automatic stay, which tends to preserve the enterprise value
of a distressed non-ﬁnancial company, can also limit the abil-
ity of a large dealer bank to manage its risk and liquidity. In
any case, in many signiﬁcant jurisdictions such as the United
States, large classes of over-the-counter derivatives and repur-
chase agreements (short-term secured claims) are exempt from
automatic stays, as explained by Krimminger (2006) and the In-
ternational Swaps and Derivatives Association (2010). Jackson
and Skeel (2010) analyze the eﬃcacy of this exemption from au-
tomatic stays, from a legal viewpoint. The eﬃcacy of this “safe
harbor” for derivatives and repurchase agreements is a matter
of signiﬁcant debate.
   Throughout this book I will pay special attention to reforms
that go beyond those associated with conventional capital re-
quirements, supervision, and deposit insurance. Among the ad-
ditional mechanisms that might be used to address large-bank
failure processes are central clearing counterparties for OTC
                                                Introduction •   7

derivatives, dedicated “utilities” for clearing tri-party repur-
chase agreements, forms of debt that convert to equity con-
tingent on distress triggers, automatically triggered manda-
tory equity rights oﬀerings, and regulations that require dealer
banks to hold not only enough capital, but also enough liquid-
ity, that is, enough uncommitted liquid assets to ﬁll the hole
left by sources of short-term ﬁnancing that may disappear in a
run.
   In the next chapter, I review the typical structure and lines
of business of a bank holding company whose subsidiaries in-
termediate over-the-counter markets for securities, repurchase
agreements, and derivatives, among other investment activities
that play a role in their failure mechanics. Chapter 3 then de-
scribes those failure mechanics. Chapter 4 reviews some imped-
iments to the voluntary recapitalization of weakened ﬁnancial
institutions, and some contractual or regulatory mechanisms
for automatic recapitalization when certain minimum capital
or liquidity triggers are hit. Such automatic recapitalization
mechanisms are among the main policy recommendations that
are summarized in chapter 5. Other recommendations in this
last chapter include minimum liquidity coverage ratios that in-
corporate the liquidity impact on a dealer bank of a potential
ﬂight by short-term secured creditors, derivatives counterpar-
ties, and prime-brokerage clients. I also recommend utility-style
repo clearing banks. Another key recommendation, the central
clearing of OTC derivatives, is described in more detail in the
appendix.
CHAPTER TWO


What Is a Dealer Bank?



Dealer banks are ﬁnancial institutions that intermediate the
“backbone” markets for securities and over-the-counter (OTC)
derivatives. These activities tend to be bundled with other
wholesale ﬁnancial market services, such as prime brokerage
and underwriting. Because of their size and their central posi-
tion in the plumbing of the ﬁnancial system, the failure of a
dealer bank could place signiﬁcant stress on its counterparties
and clients, and also on the prices of the assets or derivatives
that it holds. The collapse of a major dealer bank also reduces
the ability of the ﬁnancial system to absorb further losses and
to provide credit and liquidity to major market participants.
Thus, the potential failure of a major dealer bank is a systemic
risk.
   Most if not all of the world’s major dealer banks are among
the ﬁnancial institutions listed in table 2.1 that were invited to
a meeting concerning over-the-counter derivatives at the New
York Federal Reserve Bank on January 14, 2010. This list over-
laps substantially with the list of primary dealers in U.S. gov-
ernment securities.1 These ﬁrms typify large global ﬁnancial
groups that, in addition to their securities and derivatives busi-
nesses, may operate traditional commercial banks or have sig-
niﬁcant activities in investment banking, asset management,
and prime brokerage.
   The constellation of these various ﬁnancial activities under
the umbrella of one holding company presents a complex ar-
ray of potential costs and beneﬁts. The relevant research—for
example, Boot, Milbourn, and Thakor (1999)—does not ﬁnd a
strong case for the net beneﬁts of forming large diversiﬁed ﬁ-
nancial conglomerates of this type.2 There are likely to be some
economies of scope in information technology, marketing, ﬁ-
nancial innovation, and the diversiﬁcation beneﬁt of buﬀer-
ing many diﬀerent sources of risk with a smaller number of
pools of capital. Moreover, some of the risk-management fail-
ures among the large ﬁnancial conglomerates, discovered dur-
ing the crisis, probably reﬂect diseconomies of scope in risk
10   •   Chapter Two

Table 2.1
Major dealers participating at the New York Federal Reserve Bank meeting
on over-the-counter derivatives market infrastructure held on January 14,
2010.

                   BNP Paribas
                   Bank of America
                   Barclays Capital
                   Citigroup
                   Commerzbank AG
                   Credit Suisse
                   Deutsche Bank AG
                   Goldman, Sachs & Co.
                   HSBC Group
                   J. P. Morgan Chase
                   Morgan Stanley
                   The Royal Bank of Scotland Group
                   Société Générale
                   UBS AG
                   Wells Fargo

  Source: New York Federal Reserve Bank.

management and corporate governance. It seems as though
some senior executives and boards simply found it too diﬃ-
cult to comprehend or control some of the risk-taking activities
inside their own ﬁrms.3
   Proposals to limit the scope of risk-taking activities of large
banks, such as that made by former Federal Reserve Chairman
Paul Volcker,4 are based on a desire to lower the probability of
failure-threatening losses by precluding speculative activities
beyond traditional loan provision and other client services. The
“Volcker Rule” would also simplify the prudential supervision
of large banks, because it would make them less complex. To
be weighed against these beneﬁts are the dangers of pushing a
signiﬁcant amount of risk-taking out of the regulated banking
sector, and into the non-bank sector, where capital regulations
and prudential supervision are likely to be less eﬀective in lim-
iting systemic risk. It may also be diﬃcult to frame regulations
that eﬃciently separate activities by which a bank speculates
from those by which it takes risks in order to serve a client. For
example, if a corporate client is best served by a bank loan that
is tailored to reduce the client’s currency risk or interest rate
risk, a bank would normally lay oﬀ the currency or interest rate
                                      What Is a Dealer Bank? •   11

risk in a separate derivatives trade that could be diﬃcult to
identify as part of its client-service activities.
   In the remainder of this chapter, I outline some of the key
activities in which large dealer banks engage that can play a
key role in their failure mechanics.


Securities Dealing, Underwriting, and Trading

Banks with securities businesses intermediate in the primary
market between issuers and investors, and in the secondary
market among investors. The driving concept is to buy low and
sell high. Proﬁts are earned in part though the provision of liq-
uidity. In the primary market, the bank, sometimes acting as an
underwriter, eﬀectively buys equities or bonds from an issuer
and then sells them over time to investors. In secondary mar-
kets, a dealer stands ready to have its bid prices hit by sellers
and its ask prices lifted by buyers.
   Dealers dominate the intermediation of over-the-counter
securities markets, covering bonds issued by corporations,
municipalities, many sovereign governments, and securitized
credit products. OTC trades are privately negotiated. Trade be-
tween dealers in some derivatives and some securities, such
as government bonds, is partially intermediated by interdealer
brokers. Although public equities are easily traded on ex-
changes, dealers are also active in secondary markets for eq-
uities, acting as brokers or operators of “dark pools” (oﬀ-
exchange order-crossing systems), securities custodians, secu-
rities lenders, or direct intermediaries in large-block trades.
   Banks with dealer subsidiaries also engage in speculative in-
vesting, often called proprietary trading, aided in part by the
ability to observe ﬂows of capital into and out of certain classes
of securities. Although legal “Chinese walls” may insulate pro-
prietary traders from the information generated by securities
dealing, there are nevertheless synergies between dealing and
proprietary trading, based on common inventories of securi-
ties and cash, shared sources of external ﬁnancing, and com-
mon human resources and infrastructure, such as information
technology and trade-settlement “back oﬃce” systems.
   Securities dealers also intermediate the market for repur-
chase agreements, or “repos.” Putting aside some legal issues
12    •   Chapter Two


                                 CASH
     SECURED
                                                    DEALER    DAY 0
      LENDER
                               SECURITIES




                                 CASH
     SECURED                  + INTEREST            DEALER    DAY 1
      LENDER
                               SECURITIES


Figure 2.1.    A repurchase agreement, or “repo.”


that arise in bankruptcy, a repo is a short-term cash loan collat-
eralized by securities. As ﬁgure 2.1 illustrates, one counterparty
borrows cash from the other, and as collateral against perfor-
mance on the loan, posts government bonds, corporate bonds,
agency securities, or other debt securities such as collateralized
debt obligations. Repos are frequently used for levered ﬁnanc-
ing. For example, a hedge fund that specializes in ﬁxed-income
securities can ﬁnance the purchase of a large quantity of se-
curities with a small amount of capital by placing purchased
securities into repurchase agreements with a dealer, using the
cash proceeds of the repo to purchase additional securities.
   The majority of repurchase agreements are for short terms,
typically overnight. In order to hold a security position over
time, repurchase agreements are renewed with the same dealer
or replaced by new repos with other dealers. The performance
risk on a repo is typically mitigated by a “haircut” that reﬂects
the risk or liquidity of the securities. For instance, a haircut of
10 percent allows a cash loan of $90 million to be obtained by
posting securities with a market value of $100 million.
   In order to settle their own repo and securities trades,
dealers typically maintain clearing accounts with other ma-
jor banks. J. P. Morgan Chase and the Bank of New York Mel-
lon handle most dealer clearing. Access to clearing services
is crucial to a dealer’s daily operations. In the event that a
dealer’s clearing bank denies these services—for example, over
credit concerns—the dealer would be unable to meet its daily
obligations. It would fail almost instantly.
                                        What Is a Dealer Bank? •   13

  Repurchase agreements are frequently “tri-party” in nature.
In 2007, according to Geithner (2008), tri-party repos involv-
ing primary dealers totaled approximately $2.5 trillion per day.
As illustrated in ﬁgure 2.2, the third party is usually a clearing
bank that holds the collateral and is responsible for returning
the cash to the creditor. This arrangement is designed to facili-
tate trade and safe custody of the collateral. In theory, the clear-
ing bank is merely an agent of the two repo counterparties. In
practice, however, current tri-party repo practices also expose
clearing banks to the default of the dealer banks, as we shall
explain in chapter 3. The same two clearing banks, J. P. Morgan
Chase and the Bank of New York Mellon, are dominant in tri-
party repos. Some tri-party repos, particularly in Europe, are ar-
ranged through specialized repo clearing services, Clearstream
and Euroclear. In the United States, the Fixed Income Clearing
Corporation handled the clearing of approximately $1 trillion a
day of U.S. Treasury repurchase agreements in 2008, according
to its parent, the Depository Trust and Clearing Corporation.
  A dealer is not simply a broker that matches buyers and sell-
ers. Because the ultimate buyers and sellers do not approach
the dealer simultaneously, and because their trades do not pre-
cisely oﬀset each other, the dealer acts as a buyer and as a seller
on its own account. Securities dealing is therefore risky. Long-
run success depends not only on skill but also on access to a
pool of capital that is able to absorb signiﬁcant losses. Dealing
also requires suﬃcient liquidity to handle large ﬂuctuations in
cash ﬂows.


Over-the-Counter Derivatives

Derivatives are contracts that transfer ﬁnancial risk from one
investor to another. For example, a call option gives an in-
vestor the right to buy an asset in the future at a pre-arranged
price. Derivatives are traded on exchanges and over the counter
(OTC). For most OTC derivatives trades, one of the two coun-
terparties is a dealer. A dealer usually lays oﬀ much of the net
risk of the derivatives positions requested by counterparties
by entering new derivatives contracts with other counterpar-
ties, who are often other dealers. This is sometimes called a
“matched book” dealer operation.
14    •   Chapter Two


                   CASH                        CASH
     MONEY                    TRI-PARTY
     MARKET                   CLEARING                     DEALER
      FUND                      BANK         SECURITIES




Figure 2.2. A tri-party repurchase agreement, by which a money-market
fund lends cash to a dealer.


   As in their securities businesses, dealer banks also conduct
proprietary trading in OTC derivatives markets. Again, the basic
idea is to buy low and sell high, on average, over many positions.
   The notional amount of an OTC derivative contract is typ-
ically measured as the market value—or, in the case of debt-
based derivatives, the face value—of the asset whose risk is
transferred by the derivative. For example, a call option to buy
1 million shares of an equity whose price is $50 per share rep-
resents a notional position of $50 million dollars. A credit de-
fault swap has a notional size of $100 million if it oﬀers de-
fault protection on $100 million principal of debt of the named
borrower.
   Currently, the total gross notional amount of OTC deriva-
tives outstanding is roughly $600 trillion dollars, according
to the Bank of International Settlements. (The gross notional
amount of exchange-traded derivatives is roughly $400 tril-
lion.) The majority of OTC derivatives are interest rate swaps,
which are commitments to make periodic exchanges of one
interest rate, such as the London Interbank Oﬀering Rate (LI-
BOR), for another, such as a ﬁxed rate on a given notional prin-
cipal, until a stipulated maturity date. For example, a corpo-
ration may ﬁnd that investors in its debt are more receptive
to ﬂoating-rate notes than to ﬁxed-rate notes, whereas the is-
suing corporation may prefer a ﬁxed rate of interest expense,
for example, because equity-market investors might otherwise
bid down its shares if they are not conﬁdent of the sources of
reported earnings ﬂuctuations. The corporation may then is-
sue ﬂoating-rate debt and also enter an interest rate swap, by
which it makes coupon payments at a ﬁxed rate and receives
ﬂoating-rate payments.
                                      What Is a Dealer Bank? •   15

   The largest OTC derivatives dealer by volume is J. P. Mor-
gan Chase & Company, with a total notional position recently
measured at $79 trillion, according to data reported to the Of-
ﬁce of the Comptroller of the Currency (2009). Bank of Amer-
ica Corporation, Goldman Sachs, Morgan Stanley, and Citigroup
come next in terms of their notional holdings of derivatives,
with $75 trillion, $50 trillion, $42 trillion, and $35 trillion,
respectively.
   As opposed to assets held in positive net supply, such as eq-
uities, the net total supply of any type of derivative is zero.
Thus, the net total market value of all derivatives contracts
is zero, as a mere accounting identity. For example, the call
option in our simple example may have a substantial market
value to the buyer, say $10 million. The seller in that case has
a market value that is negative by the same amount, $10 mil-
lion dollars. As contingencies are realized over time, deriva-
tives transfer wealth from counterparty to counterparty, but do
not directly add to or subtract from the total stock of wealth.
Indirectly, however, derivatives can provide substantial bene-
ﬁts by transferring risk from those least prepared to bear it to
those most prepared to bear it. Derivatives can also cause sub-
stantial distress costs. For instance, counterparties incurring
large losses on derivatives contracts may be forced to incur
frictional bankruptcy costs, and their failures to perform on
their derivatives contracts may lead to large distress costs for
their counterparties.
   A useful gauge of counterparty risk in the OTC derivatives
market is the amount of exposure to default presented by the
failure of counterparties to perform their contractual obliga-
tions. In our simple option example, the current exposure of the
buyer to the seller is the $10 million market value of the option,
unless the seller has provided collateral against its obligation.
If the seller provides $8 million in collateral, the exposure is
reduced to $2 million.
   Normally, the various OTC derivatives trades between a given
pair of counterparties are legally combined under a “master
swap agreement” between those two counterparties. The mas-
ter swap agreements signed by dealers generally conform to
standards set by the International Swaps and Derivatives As-
sociation (ISDA). Credit support annexes of these master swap
16   •   Chapter Two

agreements govern collateral requirements as well as the obli-
gations of the two counterparties in the event that one of them
cannot perform. In many cases, a counterparty to a dealer is
required to post an “independent amount” of collateral with
the dealer, which remains with the dealer for the life of the
position.5 In addition, as the market values of the derivatives
contracts between any two counterparties ﬂuctuate, the collat-
eral required is recalculated, normally on a daily basis, accord-
ing to terms stated in the credit support annex of their master
swap agreement.
   One of the key features of master swap agreements is the net-
ting of exposures and of collateral requirements across diﬀer-
ent derivatives positions. For example, suppose that the owner
of the call option that is worth 10 million dollars in our previ-
ous example is a dealer that also holds an oil forward contract
with the same counterparty, whose market value to the dealer
is −$4 million. In this case, the net exposure of the dealer to
its counterparty is 10 − 4 = 6 million dollars, before collat-
eral is considered. Netting lowers default exposure and low-
ers collateral requirements. As the ﬁnancial crisis that began
in 2007 deepened, the range of acceptable forms of collateral
taken by dealers from their OTC derivatives counterparties was
narrowed, leaving over 80 percent of collateral in the form of
cash during 2008, according to a survey conducted by the In-
ternational Swaps and Derivatives Association (2009). The total
amount of collateral demanded also nearly doubled in 2008,
from about $2 trillion in 2007 to about $4 trillion in 2008.
   Table 2.2 shows the total gross exposures of major dealers
in OTC derivatives of various types, as estimated from dealer
surveys by the Bank for International Settlements (2009a), be-
fore considering netting and collateral. The table also shows a
substantial reduction in exposure through netting. Despite the
amount of concern that has been raised over counterparty de-
fault exposures on credit default swaps, which are in essence in-
surance against the default of a named borrower, this source of
counterparty risk is small in comparison to that associated with
interest rate swaps. Although interest rate swaps have market
values that are less volatile than those of credit default swaps,
the notional amount of interest rate swaps is over ﬁfteen times
that of credit default swaps, overwhelming the eﬀect of volatil-
ity diﬀerences in terms of total counterparty credit exposures.
                                        What Is a Dealer Bank? •   17

Table 2.2
Exposures of dealers in OTC derivatives markets as of June 2009. Net
exposures do not include non-U.S. credit default swaps.


                                         Exposure
                    Asset class         ($ billions)

                  Credit default swap      2,987
                  Interest rate           15,478
                  Equity linked              879
                  Foreign exchange         2,470
                  Commodity                  689
                  Unallocated              2,868

                  Total                   25,372
                  Total after netting      3,744

 Source: BIS, November, 2009.


While it is likely that the market values of credit default swaps
would become even more volatile during a sudden ﬁnancial cri-
sis, the fact that dealer banks have relatively balanced short and
long positions in credit default swaps partially insulates them
from counterparty risk in such a scenario.
   At least one of the two counterparties in most OTC deriva-
tives trades is a dealer. It would be uncommon, for example, for
a hedge fund to trade directly with, say, an insurance company.
Instead, the hedge fund and the insurance company would nor-
mally trade with dealers. Dealers themselves frequently trade
with other dealers. Further, when oﬀsetting a prior OTC deriva-
tives position, it is common for market participants to avoid
negotiating the cancellation of the original derivatives contract.
Instead, a new derivatives contract that oﬀsets the bulk of the
risk of the original position is frequently arranged with the
same or another dealer. As a result, dealers accumulate large
OTC derivatives exposures, often with other dealers.
   Dealers are especially likely to be counterparties to other
dealers in the case of a credit default swap (CDS). When a hedge
fund decides to reduce a CDS position, a typical step in execut-
ing this oﬀset is to have its original CDS position “novated” to
another dealer, which then stands between the hedge fund and
the original dealer by entering new back-to-back CDS positions
with each, as illustrated in ﬁgure 2.3.
18   •   Chapter Two



     HEDGE                CDS PROTECTION            DEALER
     FUND
                         BEFORE NOVATION




                         CD                             CDS PROTECTION
                            SP                          AFTER NOVATION
                               RO
                     AF          TE
                        TE          CT
                           RN          ION
                              OV
                                AT
                                   ION
                                                   ALTERNATE
                                                    DEALER




Figure 2.3.   Novation of a credit default swap.


  In this fashion, dealer-to-dealer CDS positions grew rapidly in
the years leading up to the ﬁnancial crisis. Data provided by the
Depository Trust and Clearing Corporation (DTCC) in January
2010 reveals that of the current aggregate notional amount of
about $25.5 trillion in credit default swaps whose terms are
collected by DTCC’s DerivServ Trade Information Warehouse,
over $20 trillion are in the form of dealer-to-dealer positions.6
Since mid-2008, when the total notional size of the CDS mar-
ket stood at over $60 trillion, the total amount of credit default
swaps outstanding has been reduced dramatically by “compres-
sion trades,” by which redundant or nearly redundant positions
among dealers are eﬀectively canceled.7 Signiﬁcant further re-
ductions in counterparty exposures have also been obtained
through clearing.


Prime Brokerage and Asset Management

Some large dealer banks are active as prime brokers to hedge
funds and other large investors. In some cases, acting through
broker-dealer subsidiaries, they provide these clients a range
                                      What Is a Dealer Bank? •   19

of services, including custody of securities, clearing, cash man-
agement services, securities lending, ﬁnancing, and reporting
(which may include risk measurement, tax accounting, and var-
ious other accounting services). A dealer may frequently serve
as a derivatives counterparty to its prime-brokerage clients. A
dealer often generates additional revenue by lending securi-
ties that are placed with it by prime-brokerage clients. As of
the end of 2007, according to data from Lipper, the major-
ity of prime-brokerage services were provided by just three
ﬁrms, Morgan Stanley, Goldman Sachs, and Bear Stearns, whose
prime-brokerage business was absorbed by J. P. Morgan when
it acquired Bear Stearns in March 2008.8
   Dealer banks often have large asset-management divisions
that cater to the investment needs of institutional and wealthy
individual clients. The services provided include custody of se-
curities, cash management, brokerage, and investment in al-
ternative asset-management vehicles, such as hedge funds and
private-equity partnerships, which are typically managed by
the same bank. Such an “internal hedge fund” may oﬀer con-
tractual terms similar to those of external stand-alone hedge
funds, and in addition can wrap the limited partner’s posi-
tion within the scope of general asset-management services.
At the end of 2009, the world’s largest manager of hedge
funds was J. P. Morgan Chase, with a total of $53.5 billion in
hedge fund assets under management, according to Williamson
(2010).
   In addition to the beneﬁt of “one-stop shopping,” a limited
partner in an internal hedge fund or private equity partnership
may perceive that a large bank is more stable than a stand-alone
hedge fund, and that the bank might voluntarily support an
internal hedge fund ﬁnancially at a time of need. For example,
near the end of June 2007, Bear Stearns oﬀered to lend $3.2
billion to one of its failing internal hedge funds, the High-Grade
Structured Credit Fund.9 In August of 2007, at a time of extreme
market stress and losses to some of its internal hedge funds,
Goldman Sachs injected10 a signiﬁcant amount of capital into
one of them, the Global Equity Opportunities Fund. In February
2008, Citigroup provided $500 million in funding to an internal
hedge fund known as Falcon.11
20   •   Chapter Two


Off-Balance-Sheet Financing

In addition to ﬁnancing asset purchases through traditional
bond issuance, commercial paper, and repurchase agreements,
among other liabilities, some large dealer banks have made
extensive use of “oﬀ-balance-sheet” ﬁnancing. For example, a
bank can originate or purchase residential mortgages and other
loans that are ﬁnanced by selling them to a special purpose ﬁ-
nancial corporation or trust that it has set up expressly to fulﬁll
this function as a purchaser of loans. Such a special purpose
entity (SPE) pays its sponsoring bank for the assets with the pro-
ceeds of debt that it issues to third-party investors. The princi-
pal and interest payments of the SPE’s debt are paid from the
cash ﬂows that, hopefully, it will receive from the assets that it
has purchased from the sponsoring bank.
   Because an SPE’s debt obligations are normally contractually
remote from the activities of the sponsoring bank, under cer-
tain conditions banks have not been required to treat the SPE’s
assets and debt obligations as though their own, for purposes
of accounting and of regulatory minimum capital requirements.
In this sense, an SPE is “oﬀ balance sheet.” Oﬀ-balance-sheet
ﬁnancing has therefore allowed some large banks to operate
much larger loan purchase and origination businesses, with a
given amount of bank capital, than would have been possible
had they held the associated assets on their own balance sheets.
For example, in June 2008, Citigroup reported over $800 bil-
lion in oﬀ-balance-sheet assets held in such “qualiﬁed special
purpose entities.”
   A form of special-purpose oﬀ-balance-sheet entity that was
popular until the ﬁnancial crisis is the structured investment
vehicle (SIV), which ﬁnances residential mortgages and other
loans with short-term debt sold to investors such as money-
market funds. In 2007 and 2008, when home prices fell dramat-
ically in the United States and subprime residential mortgage
defaults rose, the solvency of many SIVs was threatened. The
SIVs were in some cases unable to make their debt payments,
especially as some short-term creditors to these funds recog-
nized the solvency concerns and failed to renew their loans to
SIVs. Some large dealer banks bailed out investors in some of
the SIVs that they had set up. For example, in late 2007, HSBC
                                      What Is a Dealer Bank? •   21

voluntarily committed about $35 billion to bring the assets of
its oﬀ-balance-sheet SIVs onto its balance sheet.12 Citigroup fol-
lowed in December 2007 by bringing $49 billion in SIV assets
and liabilities onto its own balance sheet.13
   As with support provided to distressed internal hedge funds,
the equity owners and managers of these banks may have ra-
tionally perceived that the option of providing no recourse to
their eﬀective clients would have resulted in a loss of market
value, through a reduction in reputation and market share, that
exceeded the cost of the recourse actually taken. This amounts
to “asset substitution,” in the sense of Jensen and Meckling
(1976), that is, a conscious increase in the risk of the bank’s
balance sheet, leading to an eﬀective transfer of value from the
bank’s unsecured creditors to its equity holders. Some of these
banks, had they been able to foresee the extent of their later
losses during the ﬁnancial crisis, might have preferred to allow
their clients to fend for themselves.
CHAPTER THREE


Failure Mechanisms



The relationships between a dealer bank and its deriva-
tives counterparties, potential debt and equity investors, clear-
ing bank, and clients can change rapidly if the solvency of the
dealer bank is threatened. A dealer’s liquidity can suddenly dis-
appear, as illustrated in ﬁgure 3.1, which shows how quickly
Bear Stearns’s cash resources were depleted once its solvency
came into question in March 2008. As explained in chapter 1,
the concepts at play are not so diﬀerent from those involved in
a depositor run.
   In this chapter, we describe the main processes by which a
run on a dealer can occur, through OTC derivatives, repo, prime
brokerage, and clearing.


Reactions by OTC Derivatives Counterparties

At the perception of a potential solvency crisis of a dealer bank,
an OTC derivatives counterparty to that bank would look for
opportunities to reduce its exposure.
   Initially, a counterparty could reduce its exposure by bor-
rowing from the dealer, or by drawing on prior lines of credit
with that dealer, or by entering new derivatives contracts with
the dealer that would oﬀset some of the exposure. A counter-
party could also ask to have options that are in the money to
be restruck at the money, so as to harvest some cash from the
option position and thereby reduce exposure to the dealer. A
counterparty to the dealer could also reduce its exposure to the
weak dealer through novation to another dealer.1 For instance,
a hedge fund that had purchased protection from a dealer on
a named borrower, using a credit default swap (CDS) contract,
could contact a diﬀerent dealer and ask that dealer for a nova-
tion, insulating the hedge fund from the default of the original
dealer, as illustrated in ﬁgure 2.3. All of these actions reduce
the dealer’s cash position.
    Liquidity Pool ($ billions)
Figure 3.1. The sudden disappearance of cash at Bear Stearns in the days before it was acquired by J. P. Morgan in March
2008. Source: Testimony by SEC Chairman Chris Cox.
                                          Failure Mechanisms   •   25

   When Bear Stearns’s solvency and liquidity were threatened
in early March 2008, some of Bear Stearns’s counterparties
asked other dealers for novations, by which those dealers
would eﬀectively absorb the risk of a failure by Bear Stearns.
Kelly (2008) reported that “[h]edge funds ﬂooded Credit Suisse
Group’s brokerage unit with requests to take over trades op-
posite Bear Stearns. In a blast email sent out that afternoon,
Credit Suisse stock and bond traders were told that all such
novation requests involving Bear Stearns and any other ‘ex-
ceptions’ to normal business required the approval of credit-
risk managers.” Burroughs (2008) further reported: “That same
day Bear executives noticed a worrisome development whose
potential signiﬁcance they would not appreciate for weeks. It
involved an avalanche of what are called ‘novation’ requests.
When a ﬁrm wants to rid itself of a contract that carries credit
risk with another ﬁrm, in this case Bear Stearns, it can either
sell the contract back to Bear or, in a novation request, to
a third ﬁrm for a fee. By Tuesday afternoon, three big Wall
Street companies—Goldman Sachs, Credit Suisse, and Deutsche
Bank—were experiencing a torrent of novation requests for
Bear instruments.” Although dealers routinely grant such nova-
tions, in this case other dealers naturally began to refuse these
Bear Stearns novations. This in turn is likely to have spread
alarm over Bear Stearns’s diﬃculties. Cohan (2009:27) writes of
Goldman Sachs’s refusal on March 11, 2008, to accept a nova-
tion of a credit default swap position between Hayman Capital’s
Subprime Credit Strategies Fund and Bear Stearns. Gary Cohn,
copresident of Goldman Sachs, is quoted as telling the senior
leadership of Bear Stearns, “If we start taking novations, people
pull their business, they pull their collateral, you’re out of busi-
ness.” Cohan also describes Goldman’s oﬀer the next morning
to accept the novation.
   As for Lehman, Valukas (2010:4:1236–38) writes that “as a
result of Lehman’s rapidly declining stock price, and negative
market reactions to Lehman’s earnings preannouncement and
changes in upper-management, Citi experienced a three-fold in-
crease in novation requests on June 12 [2010] for a total of ap-
proximately 26 novation requests to trade out of Lehman that
week. . . . Citibank Global Financial Institutions Risk Manage-
ment Risk Oﬃcer Thomas Fontana, in an internal June 12 Citi
26   •   Chapter Three

e-mail exchange, stated: ‘Fuld oust[ed the] CFO and COO. . . . We
have cut back clearing lines in Asia. . . . This is bad news. Mar-
ket is saying Lehman can not make it alone. Loss of conﬁdence
here is huge at the moment. We are seeing novations and are
passing on them!’ ”
   Beyond heightening the concerns of investors, a rash of no-
vations could place the original dealer’s cash position under
additional stress, because novations could be accompanied by
removal of the independent amount of cash collateral that
had been placed in the hands of the dealer by its novating
counterparties.2
   In the United States, Rules 15c3-2 and 15c3-3 of the Securi-
ties and Exchange Act of 1934 require broker-dealers to seg-
regate “fully paid securities” and limit a broker-dealer’s use of
“free credit balances.” These rules do not, however, apply to
collateral held by the broker-dealer aﬃliates that typically hold
the cash posted by derivatives counterparties as collateral.3
The cash collateral that derivatives counterparties post with
a dealer is not typically segregated from the dealer’s own cash,
and is therefore a useful source of liquidity to the dealer.4 Al-
though the standard International Swaps and Derivatives Asso-
ciation (ISDA) credit support annex signed by dealers stipulates
that a bankrupt dealer must return any cash collateral owed to
its counterparties, the dealer may simply refuse to do so, as
Lehman Brothers did in some cases. If that occurs, the counter-
party is left with a senior unsecured claim against the dealer’s
bankruptcy estate for the missing collateral. Recovery on that
claim can be late and incomplete.5 Faced with this potential
loss, a counterparty to a weakening dealer would have an in-
centive to exit quickly its derivatives positions and retrieve its
collateral.
   The weakness of a dealer can also be exacerbated if its deriva-
tives counterparties attempt to reduce their exposures to that
dealer by entering new trades that cause that dealer to pay out
cash. For example, suppose that a dealer with liquidity prob-
lems is asked for bid and ask quotations on an OTC option. If
the bid price is accepted, the dealer would be required to settle
with a cash payment to the counterparty. In light of its liquidity
problems, the dealer could refuse to provide two-sided market
quotations, or could provide obviously unattractive quotes, but
                                         Failure Mechanisms   •   27

this would signal its weakness to the market. As a consequence,
in the initial stages of solvency concerns, a dealer that believes
there is a reasonable chance of surviving a crisis would gener-
ally wish to signal its strength by continuing to make two-sided
market quotations, despite the associated drain of cash to those
counterparties who are attempting to reduce their exposures to
the dealer.
   The credit annexes of OTC derivatives master swap agree-
ments call for the posting of additional collateral by a coun-
terparty whose credit rating is downgraded below a stipulated
level. A typical threshold for large dealers is a bond rating of
A2 by Moodys or A by Standard and Poors.6 For example, in
its 10K ﬁling with the Securities and Exchange Commission
dated January 1, 2009, on page 82, Morgan Stanley disclosed
that “[i]n connection with certain OTC trading agreements and
certain other agreements associated with the Institutional Secu-
rities business segment, the Company may be required to pro-
vide additional collateral to certain counterparties in the event
of a credit ratings downgrade. As of November 30, 2008, the
amount of additional collateral that could be called by counter-
parties under the terms of collateral agreements in the event of
a one-notch downgrade of the Company’s long-term credit rat-
ing was approximately $498.3 million. An additional amount of
approximately $1,456.2 million could be called in the event of
a two-notch downgrade.” The collateral-on-downgrade triggers
of the master swap agreements of AIG Financial Products (not
a dealer bank) were the most proximate cause of the need by
AIG for a massive U.S. government bailout.
   Master swap agreements also include terms for the early ter-
mination of derivatives in a selection of contingencies, includ-
ing the default of one of the counterparties, which typically
results in a termination settlement of the derivatives portfolio
at what amounts to the replacement cost for the non-defaulting
counterparty. For this, third-party prices, or terms for new
derivatives with other counterparties, or model-based price es-
timates, would be obtained for the terminated derivatives posi-
tions. The actual procedures to be followed can be complicated,
as appears to be case in the Lehman bankruptcy.7
   The replacement of derivatives positions may represent a
large new liability to a defaulting dealer, above and beyond the
28   •   Chapter Three

net market value of its positions at “mid-market” pricing, that
is, at the mid-point between bid and ask quotations, which is
the basis for the normal mark-to-market accounting of deriva-
tives. For example, the holding company of Bank of America
has in aggregate an OTC derivatives portfolio with a notional
size of approximately $75 trillion, according to Oﬃce of the
Comptroller of the Currency (OCC) data as of this writing.8 If
the average eﬀective termination settlement liability associated
with replacing counterparty positions, above and beyond mid-
market valuations, is, for example, 0.1% of the notional posi-
tion, then the eﬀective new liability would be about $75 billion.
Furthermore, because most OTC derivatives are executory con-
tracts that are exempt from automatic bankruptcy stays, the
termination settlement of OTC derivatives can proceed imme-
diately, giving derivatives counterparties some eﬀective prior-
ity over unsecured creditors whose claims are stayed by the
bankruptcy process, such as unsecured bond claimants. The
senior unsecured creditors of a major derivatives dealer would
therefore view the OTC derivatives book of a dealer as a major
incentive to exit their creditor positions, if possible, in the face
of any concerns over the dealer’s solvency. This could in turn
accelerate the dealer’s failure.
   A rush by OTC derivatives counterparties to exit their posi-
tions with a weak or failed dealer could be disruptive to deriva-
tives markets and to other ﬁnancial markets and institutions.9
This was the case at the default of Lehman Brothers in Septem-
ber 2008, despite the emergency attempts of other dealers to
coordinate the replacement of their OTC derivatives positions
with Lehman.10
   The termination settlement of OTC derivatives portfolios
could also be triggered by attempts to resolve a failing ﬁnan-
cial institution through an out-of-court restructuring. Consider,
for example, the resolution of a distressed bank into a good
bank and a bad bank, along the lines of the Swedish resolution
of Nordbank, as described by Macey (1999). Suppose that the
performing assets of a distressed dealer bank are to be trans-
ferred to a new “good bank,” whose equity would be given to
the unsecured creditors of the original bank, which is a resolu-
tion approach proposed by Bulow and Klemperer (2009). Even
if the bank’s creditors were to agree to such a restructuring
                                          Failure Mechanisms   •   29

outside of a bankruptcy or conservatorship, thereby avoiding
the default termination settlement provisions of master swap
agreements, the typical master swap agreement also calls for
termination settlement in the event that a counterparty trans-
fers the bulk of its assets to another entity in a manner that
leaves the counterparty in a materially weaker condition.11
   For OTC derivatives that are “cleared,” that is, novated to a
central clearing counterparty who stands between the original
counterparties,12 the counterparties to the dealer are insulated
from the default of the dealer, assuming of course the perfor-
mance of the central clearing counterparty. Although the dealer
itself is subject to its obligations under any cleared derivatives,
cleared derivatives should play little or no role in the incentives
of counterparties to the dealer to rush for the exits, except per-
haps for the incentives of a central clearing counterparty itself
to reduce its exposure to the dealer.13 Further, the incentive
of unsecured lenders to a dealer bank to run in the face of
the dealer’s distress is lowered to the extent that the dealer’s
OTC derivatives have been cleared. Central clearing also miti-
gates the systemic risk associated with knock-on eﬀects to the
counterparties of a failing dealer that are themselves important
ﬁnancial institutions. Central clearing counterparties can han-
dle only derivatives with relatively standard terms, however,
and therefore would not have been in a position to mitigate the
counterparty risks associated with the infamous AIG FP credit
derivatives, which were highly customized.
   In chapter 5, we return to consider the stabilizing role of
central clearing counterparties in more detail. The appendix
provides an overview of the operation and risk management
of central clearing counterparties, including the treatment of a
failing clearing member’s positions.


The Flight of Short-Term Creditors

Large dealers tend to ﬁnance signiﬁcant fractions of their as-
sets with short-term repurchase agreements. The counterpar-
ties of these repos are often money-market funds, securities
lenders, and other dealers. Repos with a term of one day, which
are called “overnight repos,” are common, as they oﬀer maxi-
mal ﬂexibility and, normally, the lowest market ﬁnancing rates
30   •   Chapter Three

available. For example, from New York Federal Reserve Bank
data on Financing by U.S. Government Securities Dealers,14 of
the total amount of dealer ﬁnancing of treasuries, agency secu-
rities, mortgages, and corporate bonds, approximately 70% was
ﬁnanced overnight.
   Under normal pre-crisis market conditions, a dealer bank
might have been able to ﬁnance most of its holdings of agency
securities, treasuries, corporate bonds, mortgages, and collater-
alized debt obligations by daily renewal of overnight repos with
an average haircut of under 2%, thus allowing an eﬀective lever-
age ratio of at least 50. The dealer could therefore hold these as-
sets on its balance sheet with little capital. Before their failures,
Bear Stearns and Lehman had gross (asset-to-capital) leverage
ratios of over 30, with signiﬁcant dependence on short-term
repo ﬁnancing.15 By amalgamating on-balance-sheet account-
ing data with information from 10Q footnotes, King (2008) es-
timates that in the ﬁrst half of 2008, about 42% of the ﬁnancial
instruments of broker-dealers were ﬁnanced through repo or
repo-equivalent transactions, as shown in table 3.1. For Bear
Stearns, this fraction was 55%. At the end of 2007, the total
dealer fraction was 48%, according to King’s estimates.
   Although the repo creditors providing cash to a dealer bank
have recourse to the collateralizing assets, often with a haircut
that protects them to some degree from ﬂuctuations in the mar-
ket value of the collateral, they may have little or no incentive
to renew repos in the face of concerns over the dealer bank’s
solvency.16
   In the event that the dealer counterparty fails to return their
cash, the repo creditors would have an incentive, or could be
legally required,17 to sell the collateral immediately, could dis-
cover a shortfall in the cash proceeds of the collateral sale, and
could potentially face litigation over allegations of improper
disposal of the assets. The repo creditors can avoid these
threats, and other unforeseen diﬃculties, simply by reinvesting
their cash in new repos with other counterparties.
   If a dealer bank’s repo creditors fail to renew their positions
en masse, the ability of the dealer to raise suﬃcient cash by
other means on short notice is doubtful, absent emergency sup-
port from a government or central bank. Tucker (2009) has em-
phasized the importance of broad and ﬂexible lender-of-last-
                                           Failure Mechanisms    •    31

Table 3.1
Quarter-end ﬁnancing of broker-dealer ﬁnancial instruments before the
failures of Bear Stearns and Lehman ($ billions).

                  May-08 May-08         June-08 Feb-08
                  Morgan Goldman May-08 Merrill  Bear  2nd Qtr
                  Stanley Sachs  Lehman Lynch Stearns Total

Financial          390     411       269     289      141       1,501
instruments
owned
  pledged          140      37        43       27      23        271
  (and can be
  repledged)
  pledged           54     121        80       53      54        362
  (and cannot
  be repledged)
  not pledged      196     253       146     208       64        868
  at all

Fraction           50%     39%       46%     28%      55%       42%
pledged

 Source: King (2008).

resort ﬁnancing. Aside from the direct risks posed to the cred-
itors and the counterparties of a dealer bank that is suddenly
unable to ﬁnance itself with repurchase agreements, there is the
potential for a large asset ﬁre sale that could have destructive
impacts on other market participants through adverse marks
to market on their own repo collateral. The proceeds of an asset
ﬁre sale might be insuﬃcient to meet cash demands, especially
if the solvency concerns were prompted by declines in the mar-
ket values of the collateral assets themselves. Even if the dealer
bank could quickly sell enough assets to meet its immediate
cash needs, the ﬁre sale could lead other market participants
to make fatal inferences about the weakened condition of the
dealer.
   A dealer bank’s ﬁnancing problems could be exacerbated dur-
ing a general ﬁnancial crisis, when the declining transparency
of some forms of repo collateral, or increases in the volatil-
ity of collateral valuations, could prompt dramatic increases in
repo haircuts, which in turn could lead to ﬁre sales, price de-
clines, and further increases in haircuts, an adverse feedback
cycle modeled by Geanakoplos (2003) and by Brunnermeier
and Pedersen (2008). During the autumn of 2008, haircuts on
32   •   Chapter Three

investment-grade corporate bonds rose to as much as 20%,
while repo ﬁnancing of many forms of collateralized debt obli-
gations and speculatively rated corporate bonds became es-
sentially impossible.18 Abate (2009) reported that corporate
bond repo transactions (which include non-agency mortgage
backed securities) fell approximately 60% between March 2008
and March 2009.
  Table 3.2 shows the results of a survey of repo haircuts con-
ducted by the Committee on the Global Financial System (2010).
The table shows the extent to which haircuts increased between
June 2007 (before the ﬁnancial crisis) and June 2009 (after the
most severe portion of the crisis). The table also shows that
haircuts are often larger for less creditworthy counterparties.
  Facing a dealer whose resources appear to be threatened,
counterparties could attempt to raise haircuts speciﬁcally to
that dealer, or reduce the range of acceptable collateral from
that dealer, or dispute the pricing of the dealer’s collateral. For
instance, Cohan (2009) reports on the increasing set of Bear
Stearns’s normal repo counterparties who, during the week
leading up to the failure of Bear Stearns, told the company that
they would not be renewing their repo ﬁnancing to it, or were
applying more onerous haircuts and disputing repo collateral
valuations.
  If concerns over the creditworthiness of a dealer do come
to light, the clearing bank that handles its tri-party repos, as
well as the repo counterparties providing cash to the dealer,
are likely to consider the implications of a failure by the dealer
to return the cash due on its repos. If that were to happen,
the cash-providing counterparty might be given the securities
posted by the dealer in lieu of the cash. Particularly for money-
market funds, whose repos are typically done in the tri-party
format, this is not a desirable outcome. A money-market fund
may therefore demand its cash at the ﬁrst opportunity that day
and fail to renew tri-party repos. The clearing bank could then
be exposed during the day to the extent that it had provided
credit to the dealer bank in anticipation of “re-winding” the
dealer’s repo positions at the end of the day, and to the extent
that the market value of the dealer’s securities is not adequate.
  A tri-party clearing bank would normally monitor the intra-
day “net free equity” of a dealer counterparty, checking that the
                                              Failure Mechanisms    •    33

Table 3.2
Variation in repo haircuts.
    Typical haircut on term securities ﬁnancing transactions (percent)

                         June 2007              June 2009
                                                      
                           Non-                  Non-
                  Primea primeb Unratedc Primea primeb Unratedc

G7 government
bonds
  Short-term           0       0     0.5       0.5       1         2
  Medium-term          0       0     0.5        1        2         3

U.S. agencies
  Short-term           1       2       3        1        2         3
  Medium-term          1       2       3        2        5         7

Pfandbrief             0       0       1        1        2         8

Prime MBS
  AAA-rated            4       6     10        10      20       30–100
  AA-rated and         8      12     25       100     100        100
  A-rated

Asset-backed          10      20     20        25      50        100
securities

Structured            10      15     20       100     100        100
products (AAA)

Investment
grade bonds
  AAA- and             1       2       5        8      12          15
  AA-rated
  A-rated and          4       7     10        10      15          20
  BBB-rated

High-yield             8      12     20        15      20          40
bonds

Equities
  G7 countries        10      12     20        15      20          25
  Emerging            15      20     35        20      25          40
  economies

  Notes: a Prime counterparty. b Non-prime counterparty. c Hedge funds
  and other unrated counterparties.
  Source: Committee on the Global Financial System (2010: 2).
34   •   Chapter Three

total market value of the dealer’s cash and securities (includ-
ing commitments) remains positive, but traditionally allowing
“daylight overdraft” cash transfer privileges. This allows deal-
ers to manage more easily the sequencing of settlements of its
transactions during the day, as explained by Tuckman (2010).
The clearing bank normally maintains the legal right to refuse
to process cash payments when the dealer’s creditworthiness
is of concern. If the dealer fails, the clearing bank could itself
be forced to sell repo collateral, or to use the collateral to ob-
tain a secured loan from another bank or from its central bank.
Faced with this prospect, a clearing bank might withdraw access
to tri-party repo and other clearing services from the dealer, or
block the return to the dealer of large amounts of its collateral,
further reducing the dealer’s ﬁnancial ﬂexibility.
   Thus, a suspicion that a dealer may not meet its repo obliga-
tions could be self-fulﬁlling, for a dealer would be unlikely to
be able to continue its daily operations if its ability to ﬁnance
its securities in the repo market were suddenly to disappear.
This exempliﬁes the importance of the various credit facilities
initiated by the New York Federal Reserve Bank in 2008. The Pri-
mary Dealer Credit Facility, for example, eﬀectively extended to
investment banks a source of ﬁnancing for securities that had
previously been available only to regulated banks through the
discount window.
   A dealer bank can mitigate the risk of a loss of liquidity
through a run by short-term creditors by establishing lines of
bank credit, by dedicating a buﬀer stock of cash and liquid se-
curities for emergency liquidity needs, and by “laddering” the
maturities of its liabilities so that only a small fraction of its
debt needs to be reﬁnanced within a short period of time.19 In
the face of doubts by its counterparties, a dealer bank that in ac-
tuality has suﬃcient balance-sheet ﬂexibility may have enough
time to raise capital and arrange alternative lines of ﬁnancing,
thereby controlling its need to conduct ﬁre sales and allowing it
to weather a solvency storm. Major dealer banks have teams of
professionals that manage liquidity risk by controlling the dis-
tribution of liability maturities and by managing the availability
of pools of cash and of noncash collateral that is acceptable to
secured creditors.
                                         Failure Mechanisms   •   35

   Dealer banks may have access to secured ﬁnancing from var-
ious types of central-bank backstop ﬁnancing facilities. The Eu-
ropean Central Bank (ECB) provides repo ﬁnancing to Eurozone
banks through regular auctions, by which the ECB accepts a
wide range of collateral at moderate haircuts. This repo facil-
ity acts as a liquidity backstop. Research by Cassola, Hortacsu,
and Kastl (2008) shows that from August 2007, when the range
of collateral that was acceptable in the OTC repo market nar-
rowed after a rash of subprime mortgage defaults, Eurozone
banks bid signiﬁcantly more aggressively for ﬁnancing in ECB
repo auctions. The U.S. Federal Reserve has always provided
secured ﬁnancing to regulated banks through its discount win-
dow. Discount-window ﬁnancing, however, is available for a re-
stricted range of high-quality collateral, and its use is believed
to stigmatize any banks that are so weak as to need to use
it. Dealers that are not regulated ﬁnancial institutions do not
have access to the discount window. During the ﬁnancial crisis,
special credit facilities were established by the U.S. Federal Re-
serve, allowing even non-bank dealers to arrange ﬁnancing of a
range of assets, or to exchange a range of less liquid assets for
treasury securities.20 Even the use of these facilities, however,
seemed to have carried something of a stigma. Valukas (2010)
reports, for example, that Lehman was reluctant to use the Pri-
mary Dealer Credit Facility (PDCF) for this reason.21 Almost im-
mediately after the failure of Lehman, the last two large deal-
ers whose parent ﬁrms had not been regulated as bank holding
companies, Morgan Stanley and Goldman Sachs, became regu-
lated bank holding companies, giving them access to the dis-
count window, among other sources of government support,
such as FDIC deposit insurance and loan guarantees. Tucker
(2009) describes a range of new secured ﬁnancing facilities of
the Bank of England.
   During a solvency crisis the extent to which the regulated
bank aﬃliates of a dealer are ﬁnanced by traditional insured
bank deposits may lessen the need of the parent bank hold-
ing company to replace cash that is lost from the exits of repo
counterparties and other less stable funding sources. Insured
deposits are less likely to run than are many other forms of
short-term liabilities. Under Rule 23A of the Federal Reserve
Act, however, U.S.-regulated banks may not use deposits to
fund their broker-dealer aﬃliates.
36   •   Chapter Three



     HEDGE
     FUND A                                          PRIME BROKER




                                                SECURITIES
     HEDGE
     FUND B



                                         CASH                SECURITIES



                                                   CASH
                                                  LENDER



Figure 3.2.   Rehypothecation of prime-brokerage assets.


Disappearance of Prime-Brokerage Clients

For some dealer banks, prime brokerage is an important source
of fee revenue. Under normal conditions, dealer banks can also
ﬁnance themselves in part with the cash and securities that
clients leave in their prime-brokerage accounts, as illustrated
in ﬁgure 3.2.
   One says that a customer’s assets are “segregated” from
those of its prime broker if the assets are held in separate ac-
counts to which the customer has a legally traceable property
right and that are distinct from the broker’s own accounts. If a
customer’s assets are not segregated, then the customer merely
holds a contractual claim against the broker. As a result, in the
event of the broker’s bankruptcy, the customer continues to
own the securities in a segregated account, but may need to
pursue claims against the dealer for any unsegregated assets.
   In the United Kingdom, securities and cash in prime-broker-
age accounts are not required to be segregated. Customer as-
sets are often commingled with the prime broker’s own as-
sets, and thus available to the prime broker for its business
purposes, including secured borrowing. Cash in unsegregated
                                             Failure Mechanisms   •    37


                                  PRIME
                $150 CASH        BROKER        $100 CASH
   HEDGE                                                      HEDGE
                                RESERVE
   FUND A                                                     FUND B
                                ACCOUNT

                              BALANCE $50



Figure 3.3. A prime broker lends $100 million to Hedge Fund B from funds
deposited by Hedge Fund A.


prime-brokerage accounts is, for practical purposes, equivalent
to uninsured deposits. Prime brokers operating under U.S. rules
may or may not fully segregate their clients’ cash, depending on
the situation, according to Rule 15c3-2 governing the treatment
of “free credit balances,” the amount of cash that a client has
a right to demand on short notice.22 Under Rule 15c3-3, how-
ever, a U.S.-regulated prime broker must aggregate its clients’
free credit balances “in safe areas of the broker-dealer’s busi-
ness related to servicing its customers” or otherwise deposit
the funds in a reserve bank account to prevent commingling
of customer and ﬁrm funds.23 The ability to aggregate cash
associated with clients’ free credit balances into a single pool,
although separate from the prime broker’s own funds, provides
ﬂexibility to a prime broker in managing the cash needs of its
clients through the ability to use one client’s cash balances to
meet the immediate cash demands of another.
   For example, suppose for simplicity that a dealer has two
prime-brokerage clients. It holds cash belonging to Hedge
Fund A of $150 million each, and has given a cash loan to Hedge
Fund B for $100 million. The excess cash of $50 million must be
held in a reserve account, as illustrated in ﬁgure 3.3. If Hedge
Fund A suddenly withdraws its cash, however, then the prime
broker would need to quickly come up with $100 million of cash
from new sources in order to ﬁnance its loan to Hedge Fund B.
Thus, concerns about a dealer’s liquidity that leads some cus-
tomers to switch to another prime broker could exacerbate the
dealer’s liquidity problems.
   Loans by prime brokers to their clients are normally secured
by the assets of those clients. For U.S.-regulated prime bro-
kers, the amounts of such margin loans are limited by advance
rates that are set according to asset classes. For example, the
38   •   Chapter Three


                $200 SECURITIES               $140 SECURITIES
     HEDGE                         PRIME                        SECURITIES
     FUND                         BROKER                        BORROWER
                                                $120 CASH
               $100 MARGIN LOAN                 COLLATERAL




Figure 3.4. In this example, a prime broker borrows $120 million by re-
hypothecating $140 million of the assets of a client, to whom it lent $100
million, for a net cash ﬁnancing to the prime broker of $20 million.


maximum amount of cash that can be advanced for equities
is 50% of the market value of the equities. Margin loans can
be ﬁnanced by using the client’s own assets as collateral for a
loan from a third party. Speciﬁcally, the prime broker can ob-
tain the cash that it lends a client, as well as additional cash
for its own purposes, by rehypothecating the client’s securi-
ties as collateral on a secured loan from another lender. For
each $100 of margin cash, the dealer is permitted to rehy-
pothecate $140 worth of the client’s assets, as illustrated in
ﬁgure 3.4. Under U.S. Rule 15c3-3, however, the prime broker
may not obtain more ﬁnancing based on rehypothecation, in to-
tal across all customers, than the aggregate amount of margin
loans granted to customers. Rehypothecation of securities re-
ceived from prime-brokerage clients through London accounts
can be a signiﬁcant source of ﬁnancing for the prime broker. In
the example illustrated in ﬁgure 3.4, the prime broker lends its
client $100 million and uses its client’s assets to secure a loan
for itself of $120 million, thereby netting $20 million in cash to
ﬁnance itself.
   When a dealer bank’s ﬁnancial position is weakened, hedge
funds may move their prime-brokerage accounts elsewhere.
Failure to run, as Lehman’s London-based clients learned, could
leave a client unable to claim ownership of assets that had
not been segregated in the client’s account and had been re-
hypothecated to third parties.24 In the United States, ironically,
a prime broker’s cash liquidity problems can be exacerbated
by its prime-brokerage business whether or not clients run.
Under its contract with its prime broker, a hedge fund could
continue to demand cash margin loans from the dealer backed
by securities that it has left in its prime-brokerage account, but
a prime broker whose solvency is known to be questionable
                                         Failure Mechanisms   •   39

may no longer be able to obtain the necessary cash to fund a
loan to that customer by using those same securities as collat-
eral for loans from other investors. The dealer’s potential repo
counterparties and other sources of secured loans may, as ex-
plained earlier, ﬁnd it preferable to lend elsewhere. Thus, the
absence of a run by prime-brokerage clients could temporarily
exacerbate a dealer’s liquidity crisis, through an eﬀective ex-
pansion of the dealer’s need for cash. A dealer could therefore
even have an incentive to “ﬁre” a prime-brokerage client in or-
der to avoid providing cash margin ﬁnancing to the client. On
the other hand, as explained earlier, if prime-brokerage clients
run, the cash that they pull from their free credit balances is no
longer available to meet the cash demands of other clients on
short notice, so the prime broker may be forced to use its own
cash to meet these demands.
   In summary, the exit of prime-brokerage clients can eliminate
a valuable source of liquidity to a prime broker. Clients that do
not move to another prime broker may, in the face of concerns
over their broker’s solvency, move some of their securities into
custody accounts or otherwise restrict the access of the prime
broker to the securities.
   Singh and Aitken (2009) calculate from 10Q and 10K reports
that between August 2008 and November 2008, the securities
that Morgan Stanley had received from its clients that were
available for Morgan Stanley to pledge to others declined by
69%, as illustrated in ﬁgure 3.5. If, as in the example of ﬁg-
ure 3.4, Morgan Stanley had been able to obtain $20 dollars
in ﬁnancing for every $140 dollars of client securities that it
was permitted to rehypothecate, then the reduction of approx-
imately $600 billion in repledgeable client assets shown in ﬁg-
ure 3.5 would have represented a reduction of over $80 billion
in cash ﬁnancing sources.
   For Merrill Lynch and Goldman Sachs, the corresponding de-
clines in repledgeable collateral over this short period spanning
the default of Lehman were 51% and 30%, respectively.25
   The ﬂight of prime-brokerage clients in the face of a dealer
bank’s ﬁnancial weakness could also raise concerns among po-
tential providers of emergency capital over the prime broker’s
long-run proﬁtability. Immediately after the failure of Lehman,
40                                     •   Chapter Three




Repledgeable Securities ($ billions)




Figure 3.5. Assets pledged to Morgan Stanley that it was permitted to re-
pledge dropped radically after the failure of Lehman (dollars, in billions).
Data: SEC ﬁlings collected by Singh and Aitken (2009).


some hedge funds moved away from Morgan Stanley and Gold-
man Sachs for at least a portion of their prime-brokerage ser-
vices. In the days immediately following Lehman’s default, the
cost in the CDS market of covering $100 million of senior un-
secured Morgan Stanley debt against default losses began to
exceed $10 million per year.
   Some analysts believe that hedge funds are likely to diversify
further their sources of prime brokerage, and in the future to
place more of their assets with custodian banks rather than
with traditional prime brokers.26
   A notable recent innovation to the prime-brokerage segrega-
tion model is a three-way custodial contract whose parties are
a hedge fund, a dealer bank (typically the prime broker of the
hedge fund), and a custodian bank.27 This contractual innova-
tion is designed to protect the dealer from the hedge fund’s
failure, without putting the hedge fund’s collateral at risk. By
such an arrangement, a portion of the assets that the hedge
fund places in a custodian account are legally assignable to the
dealer, contingent on the failure of the hedge fund to meet its
obligations. In the event that the dealer itself fails, the hedge
fund has immediate access to its assets.
                                         Failure Mechanisms   •   41



Loss of Clearing and Settlement Privileges

The ﬁnal step in the collapse of a dealer bank’s ability to meet
its daily obligations could be a simple refusal by its clearing
bank to process transactions that could bring the cash balances
in the dealer’s clearing account below zero during the course
of a business day, after subtracting any potential exposures of
the clearing bank to the dealer.
   In the normal course of business, a clearing bank may decide
to extend daylight overdraft privileges to creditworthy clear-
ing customers. For example, the cash required to settle a se-
curities trade on behalf of a dealer client could be wired to
the dealer’s counterparty (or that counterparty’s own clearing
bank) before the necessary cash actually appears in the dealer’s
clearing account on that day, under the premise that the dealer
will receive suﬃcient cash later that day in the course of set-
tling other transactions. Meanwhile, the dealer has securities in
its clearing account with a market value that is likely to be more
than suﬃcient to cover any potential shortfall.28 This daylight
overdraft privilege is based in part on the overnight settlement
convention of the interbank loan market, by which one has met
one’s cash settlement obligations for a given day provided that
the cash due is sent before the end of the business day. Interest
is not typically calculated on the basis of intraday balances, al-
though daylight overdrafts are sometimes assessed a small pro-
portional fee. In the U.S. interbank market, cash payments are
settled by FedWire electronic transfer of federal funds from one
bank’s account with the Federal Reserve to another’s. For the
purposes of determining the interest earned on federal funds
deposits, as well as for meeting reserve requirements, what
matters to a clearing bank on a given day is its federal funds
balances as of 6:30 p.m. est. Abate (2009:2) estimated that the
intraday peak level of overdrafts occurs at about 10 a.m., and
“easily exceeds several hundred billion dollars.”
   When a dealer’s cash liquidity comes into doubt, however,
its clearing bank could apply its “right of oﬀset,” a contractual
right that is normally granted by clearing-account holders, giv-
ing the clearing bank the right to oﬀset against the account
holder’s cash balances its potential exposures to the account
42   •   Chapter Three

holder through other obligations. This gives the clearing bank
the right to discontinue making cash payments that would re-
duce the account holder’s cash balance below zero during the
day, after accounting for such oﬀsets.29
   In the context of Lehman’s shrinking sources of ﬁnancing,
for instance, Valukas (2010:4:1241–44) reports that Citigroup
informed Lehman that Citi believed that it held a right of oﬀ-
set against a $2 billion Lehman deposit, and that Citi “sub-
jected the deposit to a number of internal controls designed
to retain the funds at Citi.” That this action amounted to an
eﬀective loss of liquidity for Lehman is apparent from the
fact that “Lehman included the deposit in its reported liquid-
ity pool,” and that Lehman disputed the right of Citi to hold
Lehman’s deposit at Citi. In August, according to Lehman, “JP-
Morgan reduced Lehman’s intraday credit position by $5 bil-
lion, requiring [Lehman] to pledge additional collateral for a like
amount” (Valukas, 2010:4:1102).30 As September approached,
as reported by Valukas (2010), Lehman was under signiﬁcant
pressure to produce additional collateral to cover the exposures
of several of its clearing banks, Citi, HSBC, Bank of America,
and, most importantly, J. P. Morgan Chase.31
   Just before Lehman failed, its principle clearing bank, J. P.
Morgan Chase, ﬁnally threatened to refuse to process Lehman’s
instructions to wire cash needed to settle Lehman’s trades with
its counterparties, by relying on agreements by which J. P. Mor-
gan Chase had the right to oﬀset Lehman’s obligations across
a range of repo, broker-dealer, and OTC derivatives activities.
Valukas (2010:4:1165) reports that on September 11, 2008, J. P.
Morgan demanded an additional $5 billion in cash collateral to
cover its daylight exposure to Lehman: “Pursuant to the notice,
if JPMorgan did not receive this collateral by the opening of
business on September 12, 2008, JPMorgan would ‘exercise [its]
right to decline to extend credit to [Lehman] under the [Clear-
ance] Agreement.’ ” In light of its right of oﬀset, a clearing bank
could freeze some of the assets held by a dealer in its clearing
accounts by declaring these assets to be collateral against the
dealer’s obligations to the clearing bank.32 Finally, after a fren-
zied weekend of communications with J. P. Morgan over collat-
eral disagreements, Lehman’s holding company was unable to
meet its obligations and entered bankruptcy on September 15,
2008.
CHAPTER FOUR


Recapitalizing a Weak Bank




This chapter reviews some impediments to the prefailure re-
capitalization of a weakened systemically important ﬁnancial
institution, such as a major dealer bank. It also explores two
“automatic” recapitalization mechanisms. The ﬁrst is distress-
contingent convertible debt, which consists of claims to interest
and principal that automatically convert to shares of equity if
and when the ﬁnancial institution fails to meet a stipulated cap-
ital requirement. The second mechanism is a regulation man-
dating an oﬀer to existing shareholders to purchase new eq-
uity at a low price when a ﬁnancial institution fails to meet
a stipulated liquidity or capital requirement. These relatively
new approaches overcome some of the adverse incentives for
recapitalization.


Incentives against Recapitalization

When a ﬁnancial institution has a low level of capital relative to
its assets, there are several impediments to its recapitalization,
absent regulation.
   The existing equity owners of the ﬁnancial institution are typ-
ically reluctant to issue new equity. The price at which new eq-
uity can be successfully issued is likely to be so dilutive as to
be against their interests. Despite the potential for new capital
to reduce signiﬁcantly the ﬁrm’s distress costs, a large amount
of the total-ﬁrm value added by new equity capital would go
toward improving the position of creditors, who would other-
wise absorb losses at default. Current shareholders are not in-
terested in donating wealth to debt holders. This roadblock to
equity issuance, called debt overhang, was ﬁrst explained by
Myers (1977).

An earlier version of this chapter appears in Ending Government Bailouts
as We Know Them, Hoover Institution Press, 2010.
 44            •   Chapter Four




Equity Value



                                                             4



                                                        10
                                               Assets

 Figure 4.1.           Illustration of debt overhang.


    Figure 4.1 illustrates the idea of debt overhang. In the ex-
 ample shown, a weak bank could potentially be recapitalized
 with an increase in assets of $10 billion raised by issuing new
 equity. This would reduce the bank’s ﬁnancial distress to the
 extent that the market value of the bank’s debt increases by,
 say, $6 billion. In perfect markets, the total market value of
 equity and the total market value of debt would increase by
 the amount of new capital, $10 billion, implying that the total
 market value of equity has increased by $4 billion. Because the
 new equity owners must have been given equity worth at least
 $10 billion (otherwise, they would not have paid $10 billion in
 cash for their new shares), it follows that the market value of
 the shares held by the old equity owners must have gone down
 by $6 billion. Thus, in perfect markets, the old equity owners
 would not allow the issuance of new shares. Reducing the mar-
 ket imperfection associated with distress costs would provide
 some incentive for a share issuance, but in this case the reduc-
 tion in distress costs would need to beneﬁt the total market
 value of equity by at least $6 billion in order to convince the
 old equity owners of the merits of the new issuance.
    Beyond the debt-overhang impediment to raising capital, new
 shares oﬀered to the market by a weak ﬁnancial institution may
 be viewed by potential buyers as “lemons.” A potential investor
 might ask, “Why would I pay $10 a share if the bank is willing to
 sell shares at that price? The bank knows more than I about the
                                    Recapitalizing a Weak Bank   • 45

value of the new shares. Thus, if the bank is willing to sell at $10,
then the shares could be worth at most $10, and possibly much
less.” This impediment to a sale is called adverse selection. It
often follows, as suggested by Akerlof (1970) as well as Leland
and Pyle (1977), that the new shares would need to be sold at
such a low price that the existing shareholders would prefer
that they were not oﬀered at all.
   Raising cash from the sale of assets is also unattractive to
equity owners. By lowering the leverage of the ﬁnancial institu-
tion, they would lose the advantage of proﬁting from any upside
return on the assets while retaining the option to default if the
return on assets is poor, in which case creditors (or taxpayers)
would absorb the default losses. Furthermore, asset sales may
themselves suﬀer from a severe “lemons” discount.
   Faced with the prospect of severe bankruptcy costs, the cred-
itors of the weakened ﬁnancial institution might prefer to re-
duce voluntarily their contractual claims. For example, by of-
fering to exchange each dollar of debt principal for a pack-
age of new debt and equity claims worth a market value of 75
cents, they would come out ahead if this avoids a bankruptcy
in which they would recover only 50 cents in market value. Fre-
quently, however, the creditors of a ﬁrm that is headed for
bankruptcy are unable to coordinate such an out-of-court re-
structuring. If all but one of them were to agree to this, for
example, then the last has an incentive to hold out, given the
likelihood that the restructuring would save the ﬁrm from de-
fault, leaving the hold-out creditor with a full payment of his
original claim. Perhaps the remaining creditors would be will-
ing to go ahead anyway, bailing out one or a few small hold-out
creditors, but rarely would the remaining creditors avoid a de-
fection in their own ranks. This situation is sometimes called
a “prisoners dilemma.” Even though creditors would be better
oﬀ, as a group, to commit to a restructuring of their claims, it is
unusual in practice to obtain a suﬃcient number of individual
consents.
   Bankruptcy is normally an eﬀective mechanism for break-
ing through the recapitalization gridlock just described. A dis-
tressed ﬁrm can emerge from bankruptcy with a new and less
risky capital structure. More broadly, as has been shown in a
range of theoretical settings by Innes (1990), Hart and Moore
46   •   Chapter Four

(1998), and DeMarzo and Duﬃe (1999), a conventional capi-
tal structure consisting of pure equity and pure debt, with a
bankruptcy-style boundary condition, is an eﬃcient contrac-
tual approach for raising capital and for allocating a ﬁrm’s cash
ﬂows and control rights. This theoretical foundation, however,
does not consider the economy-wide costs of systemic risk,
which go beyond the costs and beneﬁts that matter to creditors
and equity holders.
  For the failure resolution of systemically important ﬁnancial
institutions such as large dealer banks, alternatives include spe-
cial bankruptcy procedures, as proposed by Jackson (2010), and
government-coordinated receiverships or conservatorships, as
explained by Kroener (2010). These approaches consider the
costs and beneﬁts to the taxpayer and the general economy. The
objective of these proposals is to improve the balance between
ﬁrm-level eﬃciency and economy-wide costs.
  The remainder of this chapter is devoted to complementary
prefailure mechanisms for restructuring distressed ﬁnancial
institutions.


Distress-Contingent Convertible Debt

As originally envisioned by Flannery (2005), distress-contingent
convertible bondholders receive equity shares in lieu of future
claims to interest and principal if and when the issuer fails to
meet certain capital requirements, as illustrated in ﬁgure 4.2.
   Various designs have been proposed for the distress trigger
and for the conversion ratio, which is the number of shares
of equity to be received in exchange for each dollar of bond
principal.1 I will discuss these later. There are also various pro-
posals for the degree to which such debt issues would con-
tribute to meeting a ﬁnancial institution’s regulatory capital
requirement. It is also an open issue whether the issuance of
distress-contingent convertible bonds would be a regulatory re-
quirement or an optional method of meeting capital require-
ments, in which case regulators would need to specify the
quantitative formula by which distress-contingent convertible
debt, equity, preferred shares, and other instruments would
be weighted in measuring a bank’s regulatory capital. If the is-
suance of distress-contingent convertible bonds is not required
                                        Recapitalizing a Weak Bank     • 47



               Equity
                                     Equity
         Distress-Contingent   Distress-Contingent            Equity
          Convertible Debt      Convertible Debt
ASSETS




           Conventional          Conventional              Conventional
              Debt                  Debt                      Debt




             NORMAL               DISTRESS              POST-CONVERSION

Figure 4.2. Distress-contingent convertible debt converts to equity when
a bank’s leverage hits a distress trigger level.


by regulation, an incentive to issue these contingent securities
could be based on an adjustment to tax codes that allows their
preconversion interest payments to be deductible from income
for tax purposes, just as for ordinary corporate debt. Historical
precursors to the notion of distress-contingent securities, such
as income bonds and stock cancelation schemes, are reviewed
by Skeel (1993).
  In November 2009, Lloyds Bank announced the issuance of
£7.5 billion of such bonds, called “Enhanced Capital Notes”
or “CoCos,” with conversion to common equity if the bank’s
Tier 1 capital ratio were to fall to 5 percent. The Royal Bank of
Scotland was said to be planning a similar issuance. These an-
nouncements were part of a general recapitalization of these
two banks that includes new equity rights issues and in-
volves a participating investment by the United Kingdom. The
president of the New York Federal Reserve, William Dudley,
as well as the chairman of the Federal Reserve System, Ben
Bernanke, have spoken in favor of the general concept of
distress-contingent convertible debt for systemically important
ﬁnancial institutions.2 The governor of the Bank of England,
Mervyn King, although more skeptical, has said that these in-
struments are “worth a try.” Regulatory support for contingent
capital was included among the ﬁnancial reforms proposed un-
der the version of the Restoring American Financial Stability Bill
being considered by Congress in 2010.
48   •   Chapter Four

  If the trigger for automatic conversion is an accounting capi-
tal ratio, such as the Tier 1 capital trigger used in the design of
the Lloyds Bank issuance, there should be some concern over
the failure of accounting measures to capture the true ﬁnan-
cial condition of the bank. For example, Citibank, a systemi-
cally important ﬁnancial institution that did receive a signiﬁ-
cant government bailout during the recent ﬁnancial crisis, had
a Tier 1 capital ratio that never fell below 7 percent during the
course of the ﬁnancial crisis and was measured3 at 11.8 per-
cent at roughly its weakest moment in December 2008, when
the stock market capitalization of Citibank’s holding company
fell to around $20 billion, or about 1 percent of its total account-
ing assets. Because of the limited-liability treatment of equity
and because of signiﬁcant prevailing uncertainty over the true
valuation of Citibank’s assets, this stock market valuation sug-
gests that Citibank’s assets probably had a market value well
below its debt principal in late 2008. Nevertheless, any reason-
able tripwire based on Tier 1 capital would probably not have
been tripped.
  If restricted to accounting measures of capitalization, per-
haps a more eﬀective trigger could be based on the ratio of
tangible common equity (TCE) to tangible assets, a measure that
excludes preferred shares and intangible assets such as good-
will and tax shields from net-operating-loss carry-forwards, all
of which are relatively useless assets during a solvency crisis.
At the end 2008, Citibank had tangible common equity of only
$31 billion,4 for a TCE ratio of about 1.5 percent, eﬀectively
signaling that Citibank was substantially less well capitalized
than most of its peers. (Among large banks, only the Bank of
New York–Mellon had a similarly low tangible common equity
capital ratio.) The “S-Cap” stress tests, by which the U.S. govern-
ment measured shortfalls in the capitalization of large banks
in the spring of 2009, were based instead on accounting com-
mon equity (which includes goodwill). Even tangible common
equity reacts slowly to market conditions, given the typical lag
in marking down bad loans for accounting purposes.
  Nevertheless, a trigger based on tangible common equity
seems worthy of serious consideration. If, instead, the envi-
sioned debt is converted to equity when the market value of
equity falls to a suﬃciently low level, then, depending on the
                                  Recapitalizing a Weak Bank   • 49

conversion price and the number of new equity shares created,
short-sellers may be tempted to attack the issuer’s stock in or-
der to trigger the conversion and proﬁt from the resulting di-
lution or the reduction in the market value of equity shares
associated with a reduced value of the option to default. Short-
sellers might further increase their proﬁts by acquiring the con-
vertible debt in advance of attacking the stock, so as to obtain
new shares cheaply through conversion. Even in the absence of
such an attack, merely a rational assumption by some share-
holders that sales of shares by other shareholders might trig-
ger a conversion could indeed lead many shareholders to fulﬁll
this prophecy, through the resulting short-term impact of sud-
den sales on share prices. Markets need not be so eﬃcient that
bargain-hunting buyers of shares would react quickly enough
to oﬀset the downward price impact caused by sellers.
   Such a self-generating decline in share prices, sometimes
called a “death spiral,” could be mitigated by a trigger that is
based instead on a trailing average share price, for example, the
average closing price of the shares over the preceding twenty
business days. In that case, any adverse price impact on a given
day would receive a weight of 1/20 toward the price used in the
conversion trigger.
   Yet another approach is to use a trigger based on the bank’s
credit default swap (CDS) rate.5
   Flannery (2009) explains that the incentive for a speculative
attack is lessened or eliminated by a suﬃciently high contrac-
tual conversion price P , according to which each dollar of prin-
cipal of debt is converted to 1/P shares. Flannery notes that if
the conversion price is higher than the trigger price of equity
(that market price for shares at which conversion is contractu-
ally triggered), then conversion is eﬀectively antidilutive, rais-
ing the price of shares. This leaves open the question of how to
set the trigger price and the conversion price so that, despite
any antidilutive eﬀect of conversion, the original equity hold-
ers have a strong incentive to keep the ﬁnancial institution well
capitalized.
   The presence of distress-contingent convertible debt in the
capital structure of a dealer bank is unlikely to stop a liquid-
ity crisis once it begins. Short-term creditors, over-the-counter
(OTC) derivatives counterparties, and prime-brokerage clients
50   •   Chapter Four

who anticipate the potential failure of the bank are unlikely to
be dissuaded from a run merely by the fact that the future prin-
cipal and interest claims of the bonds have been converted to
equity. This conversion does nothing for the immediate cash
position of the bank. Once a rush for the exits begins, it is
rational that it would continue in a self-fulﬁlling manner. The
trigger that converts the debt to equity should be set so as to
eliminate the debt claims before a liquidity crisis is likely to be-
gin, and hopefully with a suﬃciently strong impact on the bal-
ance sheet to forestall a self-fulﬁlling presumption of a liquidity
crisis.
   One could also contract so that the cash proceeds of a
contingent-convertible debt issue are escrowed, say, in a trust,
and become available to the issuer in cash only when the debt
is converted to equity.6 This improves the cash position of the
bank at a time of distress, albeit at the cost to the bank of idling
the cash raised until that time.


Mandatory Rights Offerings of Equity

Distressed ﬁnancial institutions, among other ﬁrms, sometimes
oﬀer rights to existing shareholders to purchase new shares
at a price that is well below the current market price. Given
the eﬀects of debt overhang and adverse selection, an oﬀering
price near the current market price is unlikely to be exercised
by many shareholders. When oﬀered at a suﬃciently low price,
however, many existing shareholders would subscribe, given
that a failure to do so would result in a costly dilution of their
share claims and an eﬀective transfer of wealth to those who
do subscribe. Any shareholders without the cash necessary to
take up the oﬀer would do best by selling their shares before
the expiration of the oﬀer to those who do have the cash. (In
some cases, the rights themselves can be sold.) Thus, a manda-
tory rights oﬀering at a suﬃciently low price is likely to be well
subscribed, so long as the issuer indeed has some value left in
its business for long-run equity investors.
   During the ﬁnancial crisis of 2007–2009, nine major Euro-
pean banks collectively raised over $120 billion dollars using
mandatory rights oﬀerings, usually at deep discounts.7 The
                                   Recapitalizing a Weak Bank   • 51

lack of rights oﬀerings by major U.S. banks during the ﬁnan-
cial crisis is not easily explained, but it could be related to the
relatively dispersed ownership of these banks, which raises the
risk of under subscription of the oﬀering.
   A rights oﬀering at a low price largely ﬁnesses the adverse-
selection problem that I described earlier. In eﬀect, the buyers
and the sellers of the new shares are the same investors. Nev-
ertheless, because of debt overhang, the existing shareholders
may in many cases prefer not to conduct such a mandatory
rights oﬀering. Thus, due to the social costs of systemic risk,
it may be appropriate to introduce a regulation that forces an
automatic rights oﬀering as soon as a ﬁnancial institution hits
speciﬁed tripwires in its measured ﬁnancial condition.8 If the
short-term creditors, clients, and other counterparties of a ﬁ-
nancial institution know that a rights oﬀering of suﬃcient size
will occur at stipulated liquidity triggers, they may view a liq-
uidity crisis to be suﬃciently unlikely that they would not have
the incentive to start one with a run.
   Even under existing U.S. regulations, banks are required
to issue new shares, or otherwise raise new regulatory capi-
tal, when they do not meet stipulated capital-adequacy stan-
dards. In practice, however, most banks that had failed have
not been forced to raise new capital under these regulations.
Presumably, the triggers are not suﬃciently well designed, or
regulators have used excessive forbearance.
   As opposed to the conversion of debt to equity, a mandatory
rights oﬀering provides new cash that may reduce the risk of a
liquidity crisis. Indeed, the presence of a regulation mandating
a rights oﬀering when the capital position of a ﬁnancial insti-
tution deteriorates may forestall the self-fulﬁlling prophecy of
a run by creditors and others who have the discretion to drain
cash from the weakened institution. Because of the time lag be-
tween the oﬀering and the cash settlement of the new share
purchases, however, even a mandatory rights oﬀering is un-
likely to stop a run in progress. The triggers must be set so that
the new shares are sold before the cash is likely to be needed.
Thus, as opposed to the case of distress-contingent convert-
ible debt, there should be a bias toward triggers that are based
on the cash liquidity of the ﬁnancial institution, as opposed to
overall balance-sheet solvency.
52   •   Chapter Four

   Distress-contingent equity rights oﬀerings also oﬀer the po-
tential for more powerful incentives for shareholders to exert
pressure on their ﬁrms to avoid risky behavior. (One concern is
whether shareholders can coordinate so as to apply this pres-
sure eﬀectively.) Moreover, in the course of a ﬁnancial crisis, the
banking sector may need signiﬁcant amounts of new capital in
order to continue to provide credit to the broader economy.
Equity rights oﬀerings could recruit new capital that would
otherwise remain on the sidelines because of the market im-
perfections that I have described: debt overhang and adverse
selection.
   Other approaches to the automatic restructuring of dis-
tressed ﬁnancial institutions include the purchase by ﬁnancial
institutions of put options on their own shares. The puts could
have a contractually stipulated exercise event, which is based
on designated business losses, as has been the case for certain
insurance companies such as Aon and Swiss Re. An alterna-
tive would be American put options that could be exercised at
the discretion of the ﬁnancial institution. Obviously, the exer-
cise price should be designed so as to recapitalize the ﬁnancial
institution before a liquidity crisis.
   A ﬁnancial institution relying on such put options is also re-
lying on the credit quality of the seller of the puts. If the source
of distress is a general ﬁnancial crisis, the put seller may it-
self be distressed and unable to honor the obligation to pur-
chase shares. Some insurance ﬁrms have opted to buy their
put options from a special-purpose entity that is required to
invest in relatively safe assets that could be used to cover the
exercise costs, as explained by Culp (2009). Mandatory rights
oﬀerings of shares are also eﬀective, in this respect, because
once granted to existing shareholders, they can be sold to any
investor with the cash necessary to exercise the rights. Thus,
a distressed ﬁnancial institution making a rights oﬀering at a
suﬃciently low share price has access to the entire pool of in-
vestible cash held in global capital markets. This reduces the
adverse impact of ﬂights to quality during ﬁnancial crises by
funneling capital back to providers of credit.
CHAPTER FIVE


Improving Regulations and Market
Infrastructure



In this last chapter, I summarize some policies for improv-
ing the robustness of the ﬁnancial system by increasing the ﬁ-
nancial stability of large dealer banks. In the past, these banks
have often been deemed “too big to fail.” Although various new
sources of government liquidity and capital that appeared dur-
ing the ﬁnancial crisis of 2007–2009 may have prevented some
extremely damaging failures, some of these new government
programs may turn out to be costly to taxpayers and could in-
crease moral hazard in the risk-taking of large dealer banks
going forward, absent other measures.
  Here, I focus on the strengthening of regulatory liquidity
requirements, the central clearing of over-the-counter (OTC)
derivatives, ways to improve the robustness of tri-party repo
clearing, the introduction of automatic mechanisms for raising
capital when strict solvency or liquidity standards are not met,
and improved failure resolution.


Stronger Liquidity Standards for Dealer Banks

The most obvious cause of a failure of a ﬁnancial institution is
an excess of debts relative to assets. Even in perfect markets,
however, this notion of insolvency is neither necessary nor suf-
ﬁcient for failure. The direct test of the ability of a ﬁnancial
institution to continue operating is whether it can produce the
cash necessary to meet its transactions obligations on a given
day. A ﬁnancial institution whose debts signiﬁcantly exceed the
market value of its assets can have a reasonable chance, pro-
vided the debts do not come due quickly, of meeting this liquid-
ity test and regaining solvency over time. In imperfect markets,
several types of frictions can prevent a dealer bank from being
able to meet its daily cash obligations, whether or not its assets
54   •   Chapter Five

are in principle suﬃcient to cover its liabilities in an orderly
liquidation of its balance sheet.
   The forced sale of illiquid assets in order to generate cash
can lead to losses. In addition to the price discount caused by
a forced sale to a limited set of immediately available buyers,
the liquidation values of assets can be further reduced by ad-
verse selection. As explained in chapter 4, the potential buyer,
knowing less than the seller about the future asset cash ﬂows,
should oﬀer a price so low that the buyer’s informational dis-
advantage is not an issue. This same principle limits the bank’s
ability to raise cash by issuing debt or equity. As a mitigating
factor, if the seller is known to be experiencing a liquidity crisis,
the probability of adverse selection, at a given oﬀering price, is
lowered. In a ﬁnancial crisis, however, those potential bidders
who would normally be in the best position to make use of the
assets are themselves likely to be in a cash-constrained posi-
tion, and may themselves wish to raise capital or to sell the
same types of assets.
   An alternative to raising cash from the outright sale of as-
sets is to use assets as collateral for secured borrowing. As
a bank’s solvency prospects dim, however, the opportunity to
obtain even secured ﬁnancing is reduced. When a dealer expe-
riences a liquidity crisis, it can be given discriminatory terms
for haircuts and collateral pricing. The room for maneuvering
through a liquidity crisis diminishes as the inventory of un-
pledged high-quality collateral, such as treasury securities, is
reduced. Eventually, the repo market can cease to provide the
ﬁnancing necessary to keep assets on the dealer bank’s balance
sheet. By this point, even a ﬁre sale of assets is unlikely to stave
oﬀ failure. Bankruptcy can follow quickly, as it did for Lehman
Brothers.
   During the ﬁnancial crisis, the U.S. Federal Reserve System
and the Bank of England provided a range of new secured
lending facilities as backstop sources of ﬁnancing to large
dealer banks, as explained by Tucker (2009). The European Cen-
tral Bank’s conventional repo operations continued to provide
ﬁnancing to banks for a wide range of assets.
   Going forward, large dealer banks should be held to sig-
niﬁcantly higher liquidity standards. The Basel Committee on
Banking Supervision (2009) has suggested a minimum “liquid-
ity coverage ratio” of 100%, meaning that for every potential
                               Regulations and Infrastructure • 55

dollar of cash outﬂows within thirty days, a bank would need
to demonstrate to regulators that it has at least one dollar in
unencumbered highly liquid assets. The proposed deﬁnition of
this liquidity coverage ratio does not, however, consider the
dependence of a dealer bank on short-term ﬁnancing opportu-
nities presented by its access to the assets of its clients and
derivatives counterparties. As explained in chapter 3, when
hedge funds “run” from their prime broker, the assets they
had “parked” with the prime broker may no longer be avail-
able to the prime broker as a source of ﬁnancing. Likewise,
when OTC derivatives counterparties run away from a weak-
ened dealer bank, they withdraw the collateral they had left
with the dealer—collateral that the dealer is likely to have used
as a source of ﬁnancing. The reliance of a dealer bank on these
unstable sources of short-term ﬁnancing is a source of liquid-
ity risk that should be considered in the design of minimum
regulatory liquidity ratios.
   To meet its minimum liquidity needs, a dealer bank should be
required to demonstrate that it can roll over its short-term bor-
rowing, even if haircuts on secured loans and repurchase agree-
ments are raised dramatically. To that end, repurchase agree-
ments collateralized by riskier assets whose haircuts could
change adversely during a ﬁnancial crisis should not be relied
upon as a source of short-term ﬁnancing. Further, unsecured
loans should have dispersed maturities, so that there is never a
large fraction of debt coming due within a short period of time.


Utilities for Tri-party Repo Clearing

As I have explained, short-term repurchase agreements can rep-
resent an unstable source of dealer ﬁnancing. In the face of
concerns over a dealer’s solvency, the cash lender can simply
invest the cash with a more reliable repo counterparty. In the
case of tri-party repurchase agreements, the discretion of the
clearing bank to continue oﬀering clearing services is a partic-
ular concern. If the clearing bank has a credit exposure to the
dealer, for example, through a daylight overdraft (as explained
in chapter 3) or other lines of business, then the risk to the
clearing bank itself is a system-wide concern. If the clearing
56   •   Chapter Five

bank exercises its discretion to discontinue providing credit to
a dealer during the day, or to discontinue clearing the dealer’s
trades, or to make signiﬁcant demands for additional collateral
from the dealer, then the dealer may be forced to shut down.
   Bernanke (2008) has pointed to the potential beneﬁts of a tri-
party repo “utility,” which would have less discretion in rolling
over a dealer’s repo positions and fewer conﬂicting incentives.
Operational controls might be more cleanly monitored.1 The
separation of tri-party repo clearing from other clearing-bank
functions would, however, reduce a dealer’s cash-management
ﬂexibility, and thus lower its potential leverage under normal
operating conditions. This is an eﬃciency cost that is to be com-
pared with the gain in ﬁnancial stability that can be achieved
by separating tri-party repo from other clearing-bank services.
   Abate (2009) mentions the potential for Federal Reserve in-
surance of tri-party repo transactions. Another approach under
discussion is an “emergency bank,” which would be ﬁnanced by
repo market participants and which could manage the orderly
unwinds of repo positions of weakened dealers. The emergency
bank would have access to discount-window ﬁnancing from the
central bank, and would insulate systemically critical clearing
banks from losses in the course of the unwinding process. While
these alternative approaches have some advantages during a
crisis, they increase moral hazard by increasing the incentives
of market participants to take risks in the normal course of
business, given the “bailout” backstop.
   Regardless of the tri-party format, strong standards should
be established for the documentation of trades, for margin, for
caps on daylight overdrafts, and for the daily substitution of
collateral that takes place over the course of term repos.2 Im-
provements in transparency should include the public disclo-
sure of the amounts of collateral of each type that are placed in
tri-party repos, as well as the average haircuts that are applied
to each class of collateral. Based on this disclosure, market par-
ticipants would be in a better position to judge the potential for
an unstable market condition. Tuckman (2010) recommends
new risk-based capital requirements that reﬂect the intraday
risks faced by clearing banks.
   Rules limiting the speed with which repo haircuts are ad-
justed may mitigate the adverse feedback caused when in-
creases in haircuts generate price reductions.
                                  Regulations and Infrastructure • 57


               100
   A                        B        A                            B



                                            20               10

       80              90


                                                        10

               C
                                                    C


Figure 5.1. The reduction in counterparty exposure achieved with multi-
lateral netting.


Central Clearing of OTC Derivatives

The threat to a dealer posed by the ﬂight of its OTC deriva-
tives counterparties can be lowered by central clearing. Suﬃ-
ciently extensive clearing can also reduce the total exposure to
the dealer, through the multilateral netting of positive against
negative exposures that occurs with clearing. For example, as
illustrated in ﬁgure 5.1, suppose that, before considering the ef-
fect of collateral, Dealer A is exposed by $100 million to Dealer
B, while Dealer B is exposed to Dealer C for $90 million, and
Dealer C is exposed to Dealer A for $80 million. In addition
to insulating A, B, and C from each other’s default risk, cen-
tral clearing signiﬁcantly reduces the exposures. Once all three
dealers have cleared their positions, the central clearing coun-
terparty (CCP), represented in ﬁgure 5.1 by a triangle, is able to
net the receivables and payables of each dealer. For example,
Dealer A is now exposed to a maximum loss of $20 million,
before considering collateral. In addition to lowering the coun-
terparty risks facing each dealer, thereby lowering the need for
expensive collateral posting, these reductions in exposures to
counterparty risk also lower systemic risk.
   Reductions in exposure risk through central clearing require,
however, that clearing is suﬃciently centralized, as explained
by Duﬃe and Zhu (2009). This is illustrated in ﬁgure 5.2, which
assumes that Dealer C clears all of its derivatives through a
58   •    Chapter Five



                                     A                                    B
                  100
     A                        B                 100            100


                                                      CCP1
                                           80                        90
         80              90

                                                      CCP2

                  C
                                                          10



                                                      C


Figure 5.2. A signiﬁcant reduction in counterparty exposure reduction is
lost with multiple CCPs.



diﬀerent CCP than that used in trades between A and B. With
the two CCPs, counterparty exposures remain high, and there is
an unnecessarily high demand for collateral, which, aside from
its cost, may discourage dealers and other market participants
from clearing their derivatives.
   Obviously, the eﬀectiveness of central clearing depends heav-
ily on the ﬁnancial strength and risk management of central
clearing counterparties. Duﬃe, Li, and Lubke (2010) describe
the importance of proper supervision, capitalization, collateral
standards, and risk management of CCPs. (These issues are re-
viewed brieﬂy in the appendix.) Once a CCP has cleared a signif-
icant amount of derivatives, it is itself a source of systemic risk,
which may justify a need for implicit government backing. Like
a tri-party repo utility, however, a CCP has limited discretion.
The moral hazard faced by a CCP that is “too big to fail,” while
a concern, is unlike that arising from the discretion, scope, and
ﬂexibility of risk-taking by a major dealer that is too big to fail.
   Currently, the majority of OTC derivatives positions are
not cleared. There are currently no plans for clearing signiﬁ-
cant quantities of OTC derivatives that are based on equities,
                               Regulations and Infrastructure • 59

commodities, and foreign exchange. Although large quantities
of interest rate swaps are cleared, the majority are not.


Contingent Capital

Dealers will need to pin down a substantial amount of addi-
tional capital to run their businesses in the face of signiﬁcant
progress on the central clearing of derivatives, tri-party repo
utilities, and rigorous liquidity coverage ratios. Some degree
of eﬃciency in the capital structure of a large ﬁnancial insti-
tution might, however, be recovered through contingent cap-
ital. One form of contingent capital, explained in chapter 4,
consists of debt-like claims to interest and principal that, con-
tingent on stipulated distress triggers, convert to equity. Sig-
niﬁcant amounts of well-designed contingent capital will miti-
gate moral hazard, costly and systemically disruptive asset ﬁre
sales, and—after conversion—debt overhang. Another promis-
ing form of contingent capital is a regulation stipulating trig-
gers for a mandatory equity rights oﬀering, to be made at a
deep discount to the current equity price. By this mechanism,
whenever the speciﬁed capital or liquidity ratios of a systemi-
cally important ﬁnancial institution drop below a speciﬁed min-
imum, the ﬁnancial institution would be required to make such
a rights oﬀering immediately, as needed to regain ﬁnancial sta-
bility. Such rights oﬀerings have advantages over contingent
convertible debt because (1) they bring immediate cash to the
distressed ﬁnancial institution, and (2) they recruit new capi-
tal into the ﬁnancial sector, which is especially valuable dur-
ing a ﬁnancial crisis. An equity rights oﬀering may also of-
fer some additional ﬂexibility in creating an incentive for a
ﬁnancial institution to remain well capitalized.


Improved Failure Resolution

It seems inevitable, despite pending improvements in regula-
tion, best practices, and market infrastructure, that major ﬁ-
nancial institutions will fail from time to time. Among other
steps, Richard Herring (2010) and the Squam Lake Working
60   •   Chapter Five

Group on Financial Regulation (2010) recommend clearly for-
mulated wind-down plans, sometimes known as “living wills,”
that eﬀectively terminate or assign ﬁnancial contracts without
creating signiﬁcant unnecessary frictional losses through ﬁre-
sales and counterparty or creditor distress. As Herring (2010)
explains, this is especially challenging and important in an in-
ternational setting, in which resolution authorities or courts
in each sovereign jurisdiction can apply signiﬁcantly diﬀerent
approaches and incentives.
  Mechanisms for the resolution of failing large dealer banks at
the level of their holding companies are not yet eﬀective. AIG, a
type of ﬁnancial institution that is not within the scope of this
study, is a prime example of a large ﬁnancial institution that
was judged too big to fail, and was extremely costly for the U.S.
government to stabilize with only those regulatory tools avail-
able at the time. As explained by U.S. Federal Reserve Chairman
Ben Bernanke, U.S. regulators did not believe that they had the
necessary regulatory tools to resolve Lehman Brothers, other
than by allowing it to enter bankruptcy.
  Proposals for the improved resolution of systemically im-
portant ﬁnancial institutions by an adjustment to bankruptcy
law are proposed by Jackson (2010) and Jackson and Skeel
(2010). An alternative, the use of government-coordinated re-
ceiverships or conservatorships, is explained by Kroener (2010)
and is pending enactment in the Restoring American Financial
Stability Bill of 2010.
  It is not clear yet, however, whether either of the proposed
resolution mechanisms will eﬀectively treat dealer banks with
large amounts of overnight repo ﬁnancing and with signiﬁcant
uncleared OTC derivatives portfolios, which present special dif-
ﬁculties, as explained by Bliss (2003) and Edwards and Morrison
(2005).
  Some proposals for the failure resolution of large ﬁnancial
institutions could have the unintended consequences of in-
creasing the incentive for creditors and other counterparties to
“run.” For example, the discretion held by a resolution authority
to initiate a resolution process could raise uncertainty among
creditors regarding the potential timing of any such initiative,
and generate doubt over the treatment of their claims against
the failing institution. Faced with such uncertainty, a run by
                               Regulations and Infrastructure • 61

creditors might be accelerated. In the case of OTC derivatives
and repurchase agreements, a run of this type could be accel-
erated if counterparties and creditors that have the ability to
run on short notice would be harmed in the event of a resolu-
tion process that would stay their contracts for any signiﬁcant
period of time, or even if their contracts are not stayed but are
terminated under a threat of signiﬁcant loss. The bankruptcy
approach, if well designed, is likely to oﬀer less discretion, and
thus be more predictable in its consequences for counterparties
and creditors. This would lower the risk of a run.
APPENDIX


Central Clearing of Derivatives



This appendix, which draws directly from Duﬃe, Li, and Lubke
(2010), is an introduction to the central clearing of derivatives.
   Counterparty credit risk can often be reduced by “clearing,”
which means obtaining the eﬀect of a guarantee by a central
counterparty (CCP), sometimes called a clearing house. The CCP
stands between the two original counterparties, acting as the
seller to the original buyer, and as the buyer to the original
seller. In order to be ﬁnancially resilient, a CCP relies on a
range of controls and methods, including stringent member-
ship access, a robust collateral regime, clear default manage-
ment procedures, and signiﬁcant ﬁnancial resources that back
its performance.
   Because its long and short positions are automatically oﬀ-
setting, a CCP has no losses or gains on a derivatives contract
so long as the original counterparties to the trade continue to
perform. The CCP is, however, exposed to counterparty credit
risk from each of its participants. Because of this risk, and be-
cause of the systemic importance of CCPs, regulators and CCPs
should demand strict acceptance criteria from market partic-
ipants that wish to obtain the right to clear their trades with
CCPs by becoming clearing members. Clearing members must
also provide liquid margin assets that can be used to oﬀset
losses to the CCP in the event that the member fails to perform
on its cleared derivatives positions. A CCP collects two types of
collateral from each member: “initial margin,” provided when
a trade is cleared, and “variation margin,” which is exchanged
between the CCP and the clearing member on a daily basis. On
any day, the variation margin payment is the estimated change
in the market value of the derivatives position from the previ-
ous day. The determination of initial and variation margins is
discussed in more detail later in this appendix.
   Beyond demonstrating its ﬁnancial strength and providing
margin, each CCP member must also contribute capital to a
pooled CCP guarantee fund. The guarantee fund is an addi-
tional layer of resources, after initial margin, to cover losses
64   •   Appendix

stemming from the failure of a member to perform on a cleared
derivative. For example, suppose that Counterparty X fails, and
as a result “owes” the CCP $100 million, reﬂecting the cost to
the CCP of unwinding its derivatives positions with X. Suppose
that X had posted $80 million in margin with the CCP. The CCP
would ﬁrst apply this margin toward the unwinding costs. The
remaining $20 million necessary to unwind the failed deriva-
tives positions with X would be taken from the other resources
of the CCP, which include the pooled guarantee fund. The pro-
cedures followed and the forms of ﬁnancial backing available to
the CCP depend on the particular rules of the CCP. An example
is provided at the end of this appendix.
   The amount of initial margin posted with a CCP is based on
an analysis, sometimes complex, of the risks posed to the CCP
by the type of the derivative in question, as well as by the size
of the position. The initial margin for each type of derivatives
contract is based in part on the volatility of changes in the mar-
ket value of that type of derivative, bearing in mind that there is
a delay between the times at which a variation margin payment
is determined and the time by which the derivatives contract
could be liquidated in an orderly manner by the CCP, should the
clearing member fail to provide the variation margin. The initial
margin should exceed, in most extreme scenarios, the change
in market value of the derivatives position over this time win-
dow. For example, the initial margin for a credit default swap is
generally greater than that for an interest rate swap of the same
notional size because of the potential of sudden changes in the
credit quality of the borrowers referenced in most credit de-
fault swaps. The determination of initial margins should also
consider the potential for adverse changes in the liquidity of
the ﬁnancial instrument during the unwind period. For exam-
ple, the diﬀerence between the bid and oﬀer prices for some
types of derivatives could suddenly increase during a period of
ﬁnancial stress.
   The process of daily variation margin determination requires
daily estimates of the fair-market prices of each of the types of
derivative cleared by the CCP. Because of the costs of analyzing
risks and of setting up pricing methods for each type of deriva-
tive cleared, as well as other ﬁxed setup costs, it is not cost
eﬀective to clear types of derivatives that are thinly traded or
                                Central Clearing of Derivatives • 65

complex. In addition to the high cost of handling thinly traded
or complex derivatives, a CCP may face a sudden need to un-
wind positions held with a failed clearing member. If forced
to liquidate positions on thinly traded derivatives on short no-
tice, the CCP could have diﬃculty avoiding the losses caused
by ﬁre-sale discounts.
   For a moderately sized position in an actively traded deriva-
tive, it may take only a day or two for the CCP to unwind its
position without incurring a severe additional ﬁre-sale loss. For
a large position in a less actively traded type of derivative, the
CCP could take much longer to unwind its position in order to
avoid causing itself a large additional ﬁre-sale loss. Thus, the
appropriate amount of initial margin for each type of deriva-
tive reﬂects both the daily volatility of the market value of the
derivative as well as the number of days that is likely to be
needed for an orderly unwind of the position. This is one of the
key reasons that central clearing is not appropriate for thinly
traded types of derivatives.
   The initial margin required on a derivatives position could
naturally be set equal to an estimate of the daily volatility of the
market value of the position, multiplied by two days plus the
number of days required to unwind the position in an orderly
manner, and further multiplied by a safety factor. The addition
of two days is appropriate because the variation margin pay-
ment requested on a given day would typically be determined
based on the closing price of the previous day and might be re-
ceived (or found to be missing) on the following day. If the ﬁrst
sign of trouble is the failure of a counterparty to make a mar-
gin payment, it could take up to two days from the last price
determination for a CCP to realize that it must begin to unwind
the counterparty’s position.
   We give a hypothetical example of the determination of the
initial margin for a given derivatives position.
   Suppose a CCP has historically cleared an average daily no-
tional amount of $100 million of a particular type of deriva-
tive. An orderly unwind for this type of derivative is estimated
to require the liquidation on each day of no more than 20% of
the daily average clearing volume, which is $20 million in this
case. A counterparty wishes to clear a trade with a notional
position size of $60 million. The counterparty is assumed to
66   •   Appendix

have no prior positions in this type of derivative. At an orderly
unwind rate of $20 million per day, the $60 million notional
position would require a three-day safe-unwind period. Allow-
ing for two initial days to begin an unwind, the initial margin
should therefore cover the change in market value that could
occur in an extreme but plausible scenario over a total period
of ﬁve days. The daily volatility of each $1 million notional of
this type of derivative is estimated to be $2,000. Thus, a posi-
tion of $60 million represents an estimated daily volatility of
$120,000. Because the daily volatility represents a typical daily
price change, and because the margin should cover a stress sce-
nario, we suppose that the CCP or its regulator has mandated a
safety factor for this type of derivative of 3.5. The initial mar-
gin for a position size of $60 million would then be ﬁve days
worth of volatility multiplied by $120,000 of position volatility
per day, and further multiplied by a stress factor of 3.5, which
is $2.1 million in total. This calculation ignores the “diversiﬁ-
cation” beneﬁt associated with a lack of perfect correlation of
price changes over successive days.
   If a CCP is successful in clearing a large quantity of deriva-
tives trades, the CCP is itself a systemically important ﬁnancial
institution. The failure of a CCP could suddenly expose many
major market participants to losses. Any such failure, more-
over, is likely to have been triggered by the failure of one or
more large clearing members, and therefore to occur during
a period of extreme market fragility. Thus, while robust opera-
tional and ﬁnancial controls are paramount in reducing the like-
lihood of a CCP failure, a CCP must also have methods in place
for quickly recapitalizing, or for quickly unwinding its deriva-
tives positions with minimal impact on counterparty risks and
on the underlying markets. Regulators should ensure that a
CCP’s risk-management design and ﬁnancial resources are ro-
bust enough to allow the CCP to withstand extreme but plau-
sible loss scenarios. Recent experience has shown that current
international standards, which call only for protection against
the failure of the single largest participant in “extreme but plau-
sible” market conditions, are insuﬃcient. Regulatory standards
should ensure that CCPs remain resilient to a broader set of
risks, including multiple participant failures, sudden ﬁre sales
of ﬁnancial resources, and rapid reductions in market liquidity.
                               Central Clearing of Derivatives • 67

Extreme but plausible loss scenarios should encompass, at a
minimum, the largest historical observed price movements in
that market. The corresponding sizing of the guarantee fund
and other resources should be reassessed by the CCP and its
regulators on a regular basis.
   In the event that a clearing participant is unable to meet its
contractual obligations, its CCP typically has several layers of
ﬁnancial resources upon which to draw. The primary objec-
tive of the CCP in such a scenario is to be able to continue
to meet its contractual obligations as a counterparty to each
of its non-defaulting participants. In so doing, it prevents the
propagation of systemic risk. Depending on its design, a typi-
cal CCP may have several layers of protection against the cost
of unwinding the derivatives positions of any defaulting mem-
ber. In the order in which they are drawn upon, these might be
among the following: (1) the initial margin posted by the failing
participant, (2) the contribution of that participant to the CCP
guarantee fund, (3) a “ﬁrst-loss” pool of capital of the CCP, (4)
the portion of the pooled guarantee fund provided by the non-
defaulting members, and (5) a contractual claim to additional
contributions by CCP participants, contingent on losses to the
guarantee fund. In practice, the designs of CCPs vary, and may
include these and additional ﬁnancial resources for handling
default management.
   We can illustrate with an example of how the various ﬁnan-
cial resources of a CCP are engaged in a scenario with multiple
failures of clearing members. Consider the scenario depicted
in ﬁgure A.1, from Duﬃe, Li, and Lubke (2010). Here, perhaps
in the course of a severe and sudden ﬁnancial crisis, several
members of a CCP fail in sequence. In the scenario shown in
ﬁgure A.1, Participant A is the ﬁrst to default. For example, on
a given day, A has failed to make its required variation margin
payment. Under the rules of this particular CCP, the derivatives
positions of the failed participant are auctioned to the surviving
participants. Each derivatives position of A is auctioned sepa-
rately. For each position, that member oﬀering to assume A’s
position at the lowest cost to the CCP wins. The total of the
winning bids across all of A’s positions is the cost to the CCP
of unwinding A’s positions (before considering administrative
costs). This total cost is shown in the ﬁgure as the height of the
68   •   Appendix




                    -



                                       -




Figure A.1. The waterfall of resources available to a CCP. Source: Duﬃe,
Li, and Lubke (2010).


shaded portion of the “Participant A” column. As shown, this
unwind cost exceeds the initial margin that A had provided to
the CCP, despite the intention that the initial margin should
cover the unwind cost in most extreme scenarios. Indeed, this
illustrated scenario is so extreme that the unwind cost exceeds
the sum of the initial margin and the contribution of A to the
guarantee fund. The remainder of the unwind cost is funded
out of the “ﬁrst-loss” capital held by the CCP for this eventu-
ality. In practice, the derivatives positions may be auctioned in
packages, rather than individually.
   After A defaults, in this example, Participant B defaults. The
unwind cost for B is covered by the initial margin that had
                                Central Clearing of Derivatives • 69

been posted by B, then the contribution by B to the guarantee
fund, and then the remainder of the ﬁrst-loss capital of the CCP,
which has already been partly depleted by the default of A. Par-
ticipant B’s default takes place before the CCP has replenished
its ﬁrst-loss capital. The cost of unwinding B’s derivatives posi-
tions is so large in this scenario that even some of the guarantee
fund was required to cover it. Finally, Participant C fails. By this
point, the ﬁrst-loss capital of the CCP had been fully exhausted
by the failures of A and B. There has been insuﬃcient time for
the CCP to replenish its ﬁrst-loss capital and guarantee fund.
As shown in the ﬁgure, the cost of unwinding C’s positions
also requires some use of the now-reduced pooled guarantee
fund. Ultimately, the CCP has suﬃcient resources to unwind
its derivatives positions with A, B, and C, while continuing to
perform on its derivatives positions with non-defaulting partic-
ipants. The CCP then restores its guarantee fund and ﬁrst-loss
capital.
Notes



Notes to Preface
  1. See Tucker (2010).


Notes to Chapter One
Introduction
  1. Bliss and Kaufman (2006) review the distinctions between bank
and non-bank failure resolution.
  2. See Horwitz (2009).


Notes to Chapter Two
What Is a Dealer Bank?
   1. The primary dealers that are not part of ﬁnancial groups rep-
resented in table 2.1 are Cantor Fitzgerald and Jeﬀries & Company
(which are both interdealer brokers), Daiwa Securities America, Inc.,
Mizuho Securities USA, Inc., Nomura Securities International, and the
Royal Bank of Canada. The dealers shown in table 2.1 that are not
also primary dealers in U.S. government securities are Commerzbank
AG, Société Générale, and Wells Fargo.
   2. For potential synergies between commercial and investment
banking, see Kanatas and Qi (2003).
   3. For a case example of lapses in risk oversight, see UBS (2008),
the “Shareholder Report on UBS’s Writedowns,” especially chapter 5,
“Risk Management and Control Activities.”
   4. See the White House press release January 21, 2010, “President
Obama Calls for New Restrictions on Size and Scope of Financial
Institutions to Rein in Excesses and Protect Taxpayers,” at www.
whitehouse . gov / the - press - oﬃce / president - obama - calls - new -
restrictions - size - and - scope - ﬁnancial - institutions - rein - e.
   5. See ISDA, MFA, and SIFMA (2009).
   6. See http://www.dtcc.com/products/derivserv/.
   7. Statistics on the use of compression trades are provided by
Duﬃe, Li, and Lubke (2010).
   8. See Hintz, Montgomery, and Curotto (2009).
   9. See Barr (2007b). As it turned out, this and another similarly
bolstered internal hedge fund failed in the following month. See Barr
(2007a).
72   •   Notes to Chapter Three

  10. See Goldman Sachs (2007).
  11. CNBC (2008) reported, “The Citi-managed fund, known as Fal-
con, was brought onto the bank’s books, which will increase the
bank’s assets and liabilities by about $10 billion.”
  12. See Goldstein (2007).
  13. See Moyer (2007).



Notes to Chapter Three
Failure Mechanisms

   1. See International Swaps and Derivatives Association (2004).
   2. Yavorsky (2008) reports that “[a]ny perceived appearance, or
actual presence, of signiﬁcant problems faced by a ﬁrm, may lead
to a sudden spike in CDS novation requests, as counterparties seek
to reduce their exposure to the ﬁrm. In addition to the operational
burden of processing such requests, a high number of novation re-
quests can become a liquidity-draining event as existing counterpar-
ties, with which the ﬁrm has a net receivable position, move their
trades away and withdraw cash collateral in the process. Similarly,
when counterparties, with which the ﬁrm has a net payable position,
assign their trades to new counterparties, the ﬁrm may be required to
meet higher collateral requirements, including initial margin. While
the ﬁrm is under no contractual obligation to consent to novation, it
may feel pressured to do so in order to satisfy its customers, as well
as to preserve the appearance that it has ample liquidity resources
(any appearance to the contrary can be immediately devastating to
its ability to access other conﬁdence-sensitive sources of liquidity).
Such a sudden ‘cash call,’ if unplanned for, particularly if combined
with other diﬃculties experienced by the ﬁrm, can have very negative
self-fulﬁlling consequences. This risk was highlighted by (and likely
played a role in) the near collapse of Bear Stearns, which had become
an active participant in the CDS market.” Leising (2009) reported that
“Dealers such as JPMorgan, Goldman Sachs Group Inc. and UBS AG
are working with ICE Trust on a framework in which client funds
would be granted protections against counterparty default, such as
segregated collateral accounts. The lack of segregated accounts led
to losses for funds that posted excess collateral with Lehman Broth-
ers last year after the securities ﬁrm ﬁled for bankruptcy protec-
tion. This ‘structural ﬂaw’ in the over-the-counter market was evi-
dent in the weeks leading to the collapse of Lehman Brothers and
Bear Stearns last year, Lubke [Theo Lubke, of the New York Federal
Reserve] said. ‘We saw a tremendous outﬂow of liquidity from each
                                         Notes to Chapter Three • 73

bank,’ he said. ‘Their buy-side counterparties didn’t want to lose their
initial margin if there was a bankruptcy proceeding.’ ”
   3. Because the net collateral that is due to be paid to, or received
from, a counterparty is calculated daily, based on the positions at
the end of the previous day, and because any such cash ﬂows would
normally be sent on the day after they are determined, there could be
a delay of two days or more between the date on which OTC deriva-
tives positions are eliminated and the date on which the associated
collateral cash is actually returned.
   4. See New York Federal Reserve Bank (2009).
   5. See page 7 of ISDA, MFA, and SIFMA (2009).
   6. Such thresholds are sometimes stated in terms of the short-
term credit rating, and they stipulate additional collateral upon
downgrade below “prime,” which is a rating of P1 by Moodys or A1
by Standard and Poors.
   7. The legal procedures for this process that are to be followed
in Lehman’s bankruptcy are documented in Lehman Bankruptcy
Docket (2008a) and Lehman Bankruptcy Docket (2008b). Lehman-
creditors.com provides related dockets. For an overview of the treat-
ment of Lehman’s derivatives in bankruptcy, see Summe (2010).
Dealers work largely under the terms of ISDA’s standard 2002 mas-
ter swap agreement. The 2002 standard agreement is substantially
more ﬂexible regarding the method of determining the replacement
value of terminated positions than is the 1992 agreement, which
bases default settlement claims on third-party quotations. Some
OTC derivatives counterparties continue to operate under the 1992
agreement.
   8. See http://www.occ.treas.gov/deriv/deriv.htm.
   9. See Wall, Tallman, and Abken (1996).
   10. Yavorsky (2008:9) writes, “During the weekend of Septem-
ber 13–14, as the possibility of Lehman’s default began to loom
large, major CDS counterparties, including dealers, hedge funds and
other buy-side ﬁrms, arranged an emergency ‘Lehman Risk Reduc-
tion Trading Session.’ The purpose of the session was to determine
a list of derivative trades (including credit, equity, rates, FX and
commodity derivatives) to which Lehman was a counterparty, and
then close them out by entering into oﬀsetting replacement trades
with one another to ‘bypass’ Lehman. In accordance with a proto-
col drafted by ISDA, the replacement trades became contingent on
Lehman Brothers actually ﬁling for bankruptcy. According to a num-
ber of market participants, the close-out session resulted in the re-
placement of only a relatively limited amount of all the outstand-
ing trades. This reﬂected, in part, the diﬃculty of determining and
agreeing on the new prices of the trades as participants naturally
74   •   Notes to Chapter Three

expected signiﬁcant price volatility (rising credit spreads, falling eq-
uity markets, etc.) the following Monday. It also reﬂected the sheer
operational diﬃculty of replacing a substantial volume of trades in-
volving multiple counterparties within a limited amount of time. As
a result, many of the trades had to be replaced in subsequent days
and weeks, with the price of CDS protection, in particular, having by
then moved appreciably higher.”
   11. This trigger is known as “credit event upon merger,” although
it does not require a merger.
   12. See Bank for International Settlements (2007), Bliss and Steig-
erwald (2006), Duﬃe and Zhu (2009), Hills et al. (1999), and Ledrut
and Upper (2007).
   13. At the default of Lehman, Global Association of Central Coun-
terparties (2009) describes the performance of central clearing
counterparties in processing the closeout or novation of some of
Lehman’s derivatives positions.
   14. See “Weekly Release of Primary Dealer Positions, Transactions,
and Financing as of June 2009,” on the website of the New York
Federal Reserve Bank. I am grateful to J. A. Aitken for directing me
to these data.
   15. Valukas (2010) reports that Lehman’s leverage was substan-
tially larger than publicly disclosed because of inappropriate ac-
counting of “Repo 105” transactions, which were eﬀectively added
to assets and liabilities, but were not recorded as such.
   16. Valukas (2010:1092–93) writes that “Craig Delany, a manag-
ing director at JPMorgan’s Investment Bank, however, stated that,
in triparty repos, typically investors look to the counterparty (i.e.,
broker-dealer) ﬁrst and the collateral second when setting haircuts.
In other words, a haircut may not be suﬃcient for an investor if it
has serious concerns about the viability of its counterparty.”
   17. In the United States, money market funds, typically operating
under Rule 2a-7 of the Securities and Exchange Commission, have
restrictions on the types of assets they are permitted to hold and
would be required to sell immediately many of the forms of collateral
that they could receive in the event that a repo counterparty fails to
perform. For text of this rule, see the Securities Lawyers Deskbook
published by the University of Cincinnati College of Law at http://
www.law.uc.edu/CCL/InvCoRls/rule2a-7.html.
   18. Fisher (2008) states, “I would also suggest that the prevalence
of repo-based ﬁnancing helps explain the abruptness and persis-
tence with which the de-levering has been translated into illiquidity
and sharp asset price declines.” Ewerhart and Tapking (2008) and
Hordahl and King (2008) review the behavior of repo markets during
the ﬁnancial crisis. Gorton (2010) provides estimates of the haircuts
                                        Notes to Chapter Three • 75

applied to various classes of securities before and during the ﬁ-
nancial crisis. In July 2007, corporate bonds and structured credit
products of many types, both investment grade and non-investment
grade, had haircuts of 2% or less. From the second quarter of 2008,
many classes of these securities had haircuts in excess of 20%, while
a number of classes of securities are shown by Gorton’s source to
have had no ﬁnancing in the repo market.
   19. See Financial Services Authority (2009) and the section on liq-
uidity risk management in the February 22, 2010 10K (for year-end
2009) of Goldman Sachs.
   20. These facilities include the the Single-Tranche OMO Program,
the Term Discount Window Program, the Term Auction Facility, the
transitional credit extensions announced on September 21, 2008, the
Primary Dealer Credit Facility, the Term Securities Lending Facility,
the Commercial Paper Funding Facility, and the Term Asset-Backed
Securities Loan Facility.
   21. Valukas (2010:4:1396) reports that “[p]aradoxically, while the
PDCF was created to mitigate the liquidity ﬂight caused by the loss
of conﬁdence in an investment bank, use of the PDCF was seen both
by Lehman, and possibly by the broader market, as an event that
could trigger a loss of conﬁdence. A report by Lehman Brothers Cap-
ital Markets Prime Services captured a common critique of the facil-
ity: ‘PDCF borrowing has a considerable stigma in spite of the Fed’s
eﬀorts to cloak access and guarantee anonymity. Instead, primary
dealers view the PDCF as a last resort and will exhaust all other
ﬁnancing sources before pledging collateral here. For this reason,
borrowing at this program has evaporated since the [Bear Stearns]
merger closed.”
   22. Rule 15c3-2 of the Securities and Exchange Act of 1934, “Cus-
tomers’ Free Credit Balances,” states that “No broker or dealer shall
use any funds arising out of any free credit balance carried for the
account of any customer in connection with the operation of the
business of such broker or dealer unless such broker or dealer has
established adequate procedures pursuant to which each customer
for whom a free credit balance is carried will be given or sent, to-
gether with or as a part of the customer’s statement of account,
whenever sent but not less frequently than once every three months,
a written statement informing such customer of the amount due to
the customer by such broker or dealer on the date of such state-
ment, and containing a written notice that (a) such funds are not
segregated and may be used in the operation of the business of such
broker or dealer, and (b) such funds are payable on the demand of
the customer: Provided, however, that this section shall not apply
to a broker or dealer which is also a banking institution supervised
76   •   Notes to Chapter Three

and examined by State or Federal authority having supervision over
banks. For the purpose of this section the term customer shall mean
every person other than a broker or dealer.”
   23. See Securities and Exchange Commission (2002).
   24. See, for example, Farrell (2008), Mackintosh (2008), and Singh
and Aitken (2009). Aragon and Strahan (2009) estimate the degree to
which those hedge funds whose prime broker was Lehman Brothers
were harmed by the bankruptcy of Lehman.
   25. Singh and Aitken (2009) emphasize that the signiﬁcant recent
general reductions in the availability of pledgeable collateral securi-
ties may lead to a systemic shortage of collateral, which could lead
to liquidity problems.
   26. I refer to King et al. (2008) and Hintz, Montgomery, and
Curotto (2009).
   27. See Devasabai (2009).
   28. Valukas (2010:4:1093), for example, writes, “As triparty-repo
agent to broker-dealers, JPMorgan was eﬀectively their intraday tri-
party lender. When JPMorgan paid cash to the triparty investors
in the morning and received collateral into broker-dealer accounts
(which secured its cash advance), it bore a similar risk for the du-
ration of the business day that triparty lenders bore overnight. If a
broker-dealer such as LBI [Lehman Brothers International] defaulted
during the day, JPMorgan would have to sell the securities it was
holding as collateral to recoup its morning cash advance.”
   29. Valukas (2010:4:1093) notes that “JPMorgan used a measure-
ment for triparty and all other clearing exposure known as Net Free
Equity (NFE). In its simplest form, NFE was the market value of
Lehman securities pledged to JPMorgan plus any unsecured credit
line JPMorgan extended to Lehman minus cash advanced by JP-
Morgan to Lehman. An NFE value greater than zero indicated that
Lehman had not depleted its available credit with JPMorgan. The
NFE methodology also enabled JPMorgan to monitor its exposure
position at all times during the trading day and thereby evaluate col-
lateral substitutions by Lehman that might produce undesired credit
exposures. If a trade would put Lehman’s NFE below zero, the trade
would not be permitted. Through February 2008, JPMorgan gave full
value to the securities pledged by Lehman in the NFE calculation and
did not require a haircut for its eﬀective intraday triparty lending.
Consequently, through February 2008, JPMorgan did not require that
Lehman post the margin required by investors overnight to JPMorgan
during the day.”
   30. Valukas explains the fact that Lehman itself marked the value
of the collateral, which was often in the form of collateralized debt
                                           Notes to Chapter Four • 77

obligations whose true valuations were dubious, at least in the eyes
of J. P. Morgan.
   31. Lehman also presented some intraday exposure to the Bank
of New York Mellon over Lehman’s program for borrowing with
commercial paper and medium-term notes.
   32. Dey and Fortson (2008) write (see, also, Teather (2008) and
Craig and Sidel (2008)) that “[t]he giant American bank [J. P. Mor-
gan Chase] is alleged to have frozen $17 billion (£9.6 billion) of
cash and securities belonging to Lehman on the Friday night be-
fore its failure.” Sender (2009) reports, “In addition to serving as
its clearing agent, J. P. Morgan was also Lehman’s biggest counter-
party on billions of dollars of derivatives trades. In such transac-
tions, each side tots up its net exposure every night, demanding ad-
ditional collateral when the amounts owed exceed a certain thresh-
old. If Lehman defaulted, according to the agreements, the value at
which these trades were automatically closed out was determined by
J. P. Morgan. On August 26, J. P. Morgan reworked its existing credit
agreements with Lehman so that the parent guaranteed the obli-
gations of the broker-dealer and also provided collateral to secure
that guarantee. . . . Then, on September 4, J. P. Morgan was briefed
on Lehman’s upcoming earnings results and was told it expected
to report a $4bn loss, according to people familiar with the matter.
Five days later, J. P. Morgan signed another agreement with Lehman
in which the Lehman parent’s guarantee covered not just its failing
broker-dealer but all Lehman entities and covering all transactions,
including the large book of derivatives trades. . . . The creditors’ com-
mittee now alleges that J. P. Morgan had collected about $17 bn in
collateral from Lehman in the ﬁrst two weeks of September 2008.
A ﬁling on behalf of unsecured creditors states that as of the Fri-
day before the bankruptcy petition, the Lehman holding company
had ‘at least $17bn in excess assets in the form of cash and securi-
ties’ that were held by J. P. Morgan and subsequently frozen by J. P.
Morgan. ‘JPMC’s refusal to make those assets available to [Lehman]
and its subsidiaries in the days leading up to the bankruptcy ﬁling
may have contributed to Lehman’s liquidity constraints,’ the ﬁling
claims.”



Notes to Chapter Four
Recapitalizing a Weak Bank

  1. See Raviv (2004), HM Treasury (2009), and Portes (2009).
  2. See Bernanke (2009b) and Dudley (2009).
78   •   Notes to Chapter Five

  3. Citibank’s Tier 1 capital ratio was 7.1 percent in the fourth
quarter of 2007. See, for example, http://seekingalpha.com/article/
115374-citigroup-inc-q4-2008-earnings-call-transcript?page=1.
  4. See www.citibank.com/citi/ﬁn/data/090807a.pdf.
  5. I am grateful to Viral Acharya for this suggestion. Stewart My-
ers has commented that if the contingent capital is presumed by
CDS investors to be eﬀective, then the CDS rate would not be es-
pecially sensitive to declining capital, suggesting a problem for this
approach.
  6. This possibility was suggested to me by Joe Grundfest.
  7. See Duﬃe (2010) for details.
  8. I am grateful to Peter DeMarzo for suggesting this approach,
which is a subject of ongoing research by the two of us.


Notes to Chapter Five
Improving Regulations and Market Infrastructure
  1. See also Bernanke (2009a), Tuckman (2010), and Payments Risk
Committee (2009).
  2. See Bank for International Settlements (2009b), Payments Risk
Committee (2009), and Tuckman (2010).
Bibliography



Abate, Joseph. “Money Markets: Tri-party Repo Concerns.” Barclays
 Capital, Research, U.S. Economics & Rates, Strategy, March 12,
 2009.
Akerlof, George. “The Market for ‘Lemons’: Quality Uncertainty and
 the Market Mechanism.” Quarterly Journal of Economics 84, no. 3
 (1970): 488–500.
Aragon, George O., and Philip E. Strahan. “Hedge Funds as Liquidity
 Providers: Evidence from the Lehman Bankruptcy.” Working paper,
 Boston College, August 26, 2009.
Bank for International Settlements. “New Developments in Clearing
  and Settlement Arrangements for OTC Derivatives.” Technical re-
  port, Bank for International Settlements (BIS), Basel, March 2007.
  Available at www.bis.org/publ/cpss77.htm.
    . a. “OTC Derivatives Market Activity in the Second Half of
  2008.” BIS Monetary and Economic Department, Basel, May 2009.
  Available at www.bis.org/publ/otc_hy0905.pdf.
   . b. “The Role of Valuation and Leverage in Procyclicality.” BIS,
  April 2009. Available at www.bis.org/publ/cgfs34.pdf.
Barr, Alistair. a. “Bear Stearns’ Credit Hedge Funds Almost Wiped
  Out: Leveraged Fund Worth Nothing; ‘Very Little Value’ Left in
  Larger Fund, Letter Says.” MarketWatch, July 18, 2007. Available
  at www.marketwatch.com/story/bear-credit-hedge-funds-almost-
  wiped-out-sources-say.
    . b. “Bear to Lend $3.2 Bln to One of Its Hedge Funds—But
  Bank Doesn’t Lend Money to Other, More Leveraged, Hedge Fund.”
  MarketWatch, June 22, 2007. Available at www.marketwatch.com/
  story/bear-to-lend-up-to-32-bln-to-troubled-hedge-fund-it-runs.
Basel Committee on Banking Supervision. “International Frame-
  work for Liquidity Risk Measurement, Standards and Monitor-
  ing.” Technical Report, Bank for International Settlements, Decem-
  ber 2009. Available at www.bis.org/publ/bcbs165.pdf.
Bernanke, Ben. “Reducing Systemic Risk.” Speech presented at the
  Federal Reserve Bank of Kansas City’s Annual Economic Sympo-
  sium, Jackson Hole, Wyoming, August 22, 2008.
    . a. “Financial Reform to Address Systemic Risk.” Speech pre-
  sented to the Council on Foreign Relations, March 10, 2009.
80   •   Bibliography

Bernanke, Ben. b. “Financial Regulation and Supervision after the
  Crisis: The Role of the Federal Reserve.” Remarks given at the
  Federal Reserve Bank of Boston 54th Economic Conference, Oc-
  tober 13, 2009.
Bliss, Robert R. “Resolving Large Complex Financial Organizations.”
  Pp. 3–31 in George G. Kaufman, ed., Market Discipline in Banking:
  Theory and Evidence, vol. 15. Amsterdam: Elsevier Press, 2003.
Bliss, Robert R., and George G. Kaufman. “U.S. Corporate and Bank
  Insolvency Regimes: An Economic Comparison and Evaluation.”
  Working Paper WP-06-01, Federal Reserve Bank of Chicago, 2006.
Bliss, Robert R., and Robert Steigerwald. “Derivatives Clearing and
  Settlement: A Comparison of Central Counterparties and Alterna-
  tive Structures.” Economic Perspectives 30, no. 4 (2006): 22–29.
Boot, Arnoud, Todd Milbourn, and Anjun Thakor. “Megamergers
  and Expanded Scope: Theories of Bank Size and Activity Diversity.”
  Journal of Banking and Finance 23, no. 2 (1999): 195–214.
Brunnermeier, Markus K., and Lasse Heje Pedersen. “Market Liq-
  uidity and Funding Liquidity.” Review of Financial Studies 22, no. 6
  (2008): 2201–38.
Bulow, Jeremy, and Paul Klemperer. “Reorganising the Banks: Focus
  on the Liabilities, Not the Assets.” Web comment, March 21, 2009.
  Available at www.voxeu.org/index.php?q=node/3320.
Burroughs, Bryan. “Bringing Down Bear Stearns.” Vanity Fair, August
  2008, pp. 106–11.
Cassola, Nuno, Ali Hortacsu, and Jakub Kastl. “Eﬀects of the Sub-
  prime Market Crisis on the Primary Market for Liquidity.” Work-
  ing paper, Stanford University, Economics Department, Novem-
  ber 2008.
CNBC. “Citigroup to Bail Out Internal Hedge Fund.” CNBC.com,
  February 23, 2008. Available at www.cnbc.com/id/23308202.
Cohan, William D. House of Cards. New York: Doubleday, 2009.
Committee on the Global Financial System. “The Role of Margin Re-
  quirements and Haircuts in Procyclicality.” CGFS Paper Number 36,
  Bank for International Settlements, Basel, March 2010.
Craig, Susanne, and Robin Sidel. “J.P. Morgan Made Dual Cash De-
  mands.” Wall Street Journal, October 8, 2008. Available at http://
  online.wsj.com/article/SB122342716816213665.html.
Culp, Christopher L. “Contingent Capital Versus Contingent Re-
  verse Convertibles for Banks and Insurance Companies.” Journal
  of Applied Corporate Finance 20, no 4 (2009): 19–27.
DeMarzo, Peter, and Darrell Duﬃe. “A Liquidity-Based Model of
  Security Design.” Econometrica 67, no. 1 (1999): 65–99.
                                                   Bibliography   •   81

Devasabai, Kris. “A New Model.” International Custody & Fund Ad-
 ministration, January 22, 2009. Available at http://icfamagazine .
 com / public / showPage . html ? page = icfa _ display _feature & temp
 PageId=836072.
Dey, Iain, and Danny Fortson. “J. P. Morgan ‘Brought Down’ Lehman
 Brothers.” London Times, Sunday Edition, October 5, 2008.
Diamond, Douglas W., and Philip H. Dybvig. “Bank Runs, Deposit
  Insurance, and Liquidity.” Journal of Political Economy 91, no. 3
  (1983): 401–19.
Dudley, William. “Some Lessons from the Crisis.” Remarks made at
 the Institute of International Banks Membership Luncheon, New
 York, October 13, 2009.
Duﬃe, Darrell. “A Contractual Approach to Resructuring Financial
 Institutions.” Pp. 109–24 in Kenneth Scott and John Taylor, eds.,
 Ending Government Bailouts as We Know Them. Stanford: Hoover
 Press, 2010.
Duﬃe, Darrell, Ada Li, and Theo Lubke. “Policy Perspectives on OTC
 Derivatives Market Infrastructure.” Technical Report 424, Federal
 Reserve Bank of New York, January 2010.
Duﬃe, Darrell, and Haoxiang Zhu. “Do Central Clearing Counter-
 parties Reduce Counterparty Risk?” Working paper, Stanford Un-
 viversity, Graduate School of Business, March 2009. Available at
 www.stanford.edu/˜duﬃe/DuﬃeZhu.pdf.
Edwards, Franklin, and Edward R. Morrison. “Derivatives and the
  Bankruptcy Code: Why the Special Treatment?” Yale Journal on
  Regulation 22, no. 1 (2005): 91–122.
Ewerhart, Christian, and Jens Tapking. “Repo Markets, Counter-
 party Risk, and the 2007/2008 Liquidity Crisis.” Working Pa-
 per 909, European Central Bank, Frankfurt, 2008.
Farrell, Sean. “Hedge Funds with Billions Tied Up at Lehman Face
  Months of Uncertainty.” The Independent, October 6, 2008. Avail-
  able at www.independent.co.uk/news/business/news/hedge-funds-
  with-billions-tied-up-at-lehman-face-months-of-uncertainty-9525
  86.html.
Financial Services Authority. “Strengthening Liquidity Standards.”
  Technical report, Financial Services Authority, London, October
  2009. Available at www.fsa.gov.uk/pubs/policy/ps09_16.pdf.
Fisher, Peter. “Comments on Franklin Allen and Elena Carletti ‘The
  Role of Liquidity in Financial Crises’.” Jackson Hole Conference,
  Wyoming, August 2008. Available at www.kc.frb.org/publicat/
  sympos/2008/ﬁsher.09.01.08.pdf.
82   •   Bibliography

Flannery, Mark J. “No Pain, No Gain? Eﬀecting Market Discipline via
  Reverse Convertible Debentures.” Pp. 171–96 in Hal S. Scott, ed.,
  Capital Adequacy Beyond Basel: Banking, Securities, and Insurance.
  Oxford: Oxford University Press, 2005.
Flannery, Mark J. “Market-Valued Triggers Will Work for Contin-
  gent Capital Instruments.” Solicited Submission to U.S. Treasury
  Working Group on Bank Capital, 2009.
Geanakoplos, John. “Liquidity, Default, and Crashes, Endogenous
  Contracts in General Equilibrium.” Pp. 170–205 in M. Dewatripont,
  L. P. Hansen, and S. J. Turnovsky, eds., Advances in Economics
  and Econometrics: Theory and Applications, Eighth World Con-
  ference, Volume II, Econometric Society Monographs. Cambridge:
  Cambridge University Press, 2003.
Geithner, Timothy. “Reducing Systemic Risk in a Dynamic Financial
  System.” Remarks made at the Economic Club of New York, June 9,
  2008. Available at www.bis.org/review/r080612b.pdf.
Global Association of Central Counterparties. “Central Counter-
  party Default Management and the Collapse of Lehman Broth-
  ers.” Technical report, CCP12, The Global Association of Central
  Counterparties, London, 2009.
Goldman Sachs and Company. “Goldman Sachs and Various In-
  vestors Including C.V. Starr & Co., Inc., Perry Capital LLC and Eli
  Broad Invest $3 Billion in Global Equity Opportunities Fund.” Gold-
  man Sachs press release, August 13, 2007. Available at www2.
  goldmansachs.com/our-ﬁrm/press/press-releases/archived/2007/
  2007-08-13.html.
Goldstein, Steve. “HSBC to Provide $35 Billion in Funding to SIVs—
  Citigroup Reportedly Under Pressure to Move Securities onto its
  Balance Sheet.” MarketWatch, November 27, 2007. Available at
  www.marketwatch.com/story/hsbc-to-provide-35-billion-in-funds-
  to-structured-vehicles.
Gorton, Gary. Slapped in the Face by the Invisible Hand: The Panic of
  2007. New York: Oxford University Press, 2010.
Hart, Oliver, and John Moore. “Default and Renegotiation: A Dy-
  namic Model of Debt.” Quarterly Journal of Economics 113, no. 1
  (1998): 1–41.
Herring, Richard. “Wind-down Plans as an Alternative to Bailouts:
  The Cross Broder Challenges.” Pp. 125–62 in Kenneth Scott and
  John Taylor, eds., Ending Government Bailouts as we Know Them.
  Stanford: Hoover Press, 2010.
Hills, Bob, David Rule, Sarah Parkinson, and Chris Young. “Central
  Counterparty Clearing Houses and Financial Stability.” Financial
  Stability Review, Bank of England, 6, no. 2 (1999): 122–34.
                                                  Bibliography   •   83

Hintz, Brad, Luke Montgomery, and Vincent Curotto. “U.S. Secu-
  rities Industry: Prime Brokerage, A Rapidly Evolving Industry.”
  Bernstein Research, March 13, 2009.
HM Treasury. “Risk, Reward and Responsibility: The Financial Sec-
  tor and Society.” Technical report, HM Treasury, December 2009.
  Available at www.hm-treasury.gov.uk/d/ﬁn_ﬁnsectorandsociety.
  pdf.
Hordahl, Peter, and Michael R. King. “Developments in Repo Mar-
  kets During the Financial Turmoil.” BIS Quarterly Review, De-
  cember 2008, pp. 37–52. Available at www.bis.org/publ/qtrpdf/
  r_qt0812e.pdf.
Horwitz, Jeﬀ. “Wachovia’s End.” American Banker, October 13, 2009.
  Available at http://www.americanbanker.com/news/wachovias_
  end-1002613-1.html.
Innes, Robert. “Limited Liability and Incentive Contracting with Ex-
  Ante Choices.” Journal of Economic Theory 52, no. 1 (1990): 45–67.
International Swaps and Derivatives Association (ISDA). “User’s
  Guide to the 2004 ISDA Novation Deﬁnitions.” ISDA technical
  document, New York, 2004.
     . “ISDA Margin Survey 2009.” ISDA technical document, New
  York, 2009.
     . “The Bankruptcy Code Swap Safe Harbor Overview.” ISDA, New
  York, January 2010.
ISDA, MFA, and SIFMA. “Independent Amounts.” Technical re-
  port, International Swaps and Derivatives Association, Managed
  Funds Association, and Securities Industry and Financial Markets
  Association, October 2009.
Jackson, Thomas H. “Chapter 11F: A Proposal for the Use of
  Bankruptcy to Resolve Financial Institutions.” Pp. 217–52 in Ken-
  neth Scott and John Taylor, eds., Ending Government Bailouts as
  We Know Them. Stanford: Hoover Press, 2010.
Jackson, Thomas H., and David A. Skeel. “Bankruptcy, Banks, and
  Non-Bank Financial Institutions.” Draft prepared for Wharton Fi-
  nancial Institutions Center Workshop, “Cross-Border Issues in Re-
  solving Systemically Important Financial Institutions,” February 8,
  2010.
Jensen, Michael, and William Meckling. “Theory of the Firm: Man-
  agerial Behavior, Agency Costs, and Ownership Structure.” Journal
  of Financial Economics 3, no. 4 (1976): 305–60.
Kanatas, George, and Jianping Qi. “Integration of Lending and Un-
  derwriting: Implications of Scope Economies.” Journal of Finance
  58, no. 3 (2003): 1167–91.
84   •   Bibliography

Kelly, Kate. “Fear, Rumors Touched Oﬀ Fatal Run on Bear Stearns.”
 Wall Street Journal, May 28, 2008. Available at http://s.wsj.net/
 article/SB121193290927324603.html.
King, Matt. “Are the Brokers Broken?” Technical report, Citi, Euro-
  pean Quantitative Credit Strategy and Analysis, September 2008.
King, Matt, Michael Hampden-Turner, Peter Goves, and Hans Lor-
  enzen. “Where Should Hedge Funds Keep Their Cash?” Citi, Euro-
  pean Quantitative Credit Strategy and Analysis, October 2008.
Krimminger, Michael. “The Evolution of U.S. Insolvency Law for Fi-
  nancial Market Contracts.” Federal Deposit Insurance Corporation,
  June 13, 2006.
Kroener, William. “Expanding FDIC-Style Resolution Authority.” Pp.
  179–88 in Kenneth Scott and John Taylor, eds., Ending Government
  Bailouts as We Know Them. Stanford: Hoover Press, 2010.
Ledrut, Elisabeth, and Christian Upper. “Changing Post-Trading Ar-
  rangements for OTC Derivatives.” BIS Quarterly Review (Decem-
  ber 2007): 83–95.
Lehman Bankruptcy Docket. a. “Notice of Debtors’ Motion for an
  Order Pursuant to Sections 105 and 365 of the Bankruptcy Code
  to Establish Procedures for the Settlement or Assumption and As-
  signment of Prepetition Derivative Contracts Fed Seeks End to Wall
  Street Lock on OTC Derivatives.” Docket Number 1498, Novem-
  ber 13, 2008. U.S. Bankruptcy Court for the Southern District of
  New York (http://www.nysb.uscourts.gov).
    . b. “Order Pursuant to Sections 105 and 365 of the Bankruptcy
  Code to Establish Procedures for the Settlement or Assump-
  tion and Assignment of Prepetition Derivative Contracts.” Docket
  Number 2257, December 16, 2008.
Leising, Matthew. “Fed Seeks End to Wall Street Lock on OTC Deriva-
  tives.” Bloomberg.com, May 6, 2009. Available at www.bloomberg.
  com/apps/news?pid=20601087&sid=adyRr4PP035U.
Leland, Hayne, and David Pyle. “Informational Asymmetries, Finan-
  cial Structure, and Financial Intermediation.” Journal of Finance
  32, no. 2 (1977): 371–87.
Macey, Jonathan. “Are Bad Banks the Solution to a Banking Cri-
 sis?” Unpublished paper, Cornell University, SNS Occasional Pa-
 per Number 82, 1999. Available at http://ideas.repec.org/a/eee/
 jﬁnec/v54y1999i2p133-163.html.
Mackintosh, James. “Lehman Collapse Puts Prime Broker Model in
 Question.” Financial Times, September 24, 2008. Available at www.
 ft.com/cms/s/0/442f0b24-8a71-11dd-a76a-0000779fd18c.html.
                                                 Bibliography   •   85

Moyer, Liz. “Citigroup Goes It Alone to Rescue SIVs.” Forbes, De-
  cember 13, 2007. Available at www.forbes.com/2007/12/13/citi-
  siv-bailout-markets-equity-cx_lm_1213markets47.html.
Myers, Stewart. “The Capital Structure Puzzle.” Journal of Finance
  39, no. 4 (1977): 575–592.
New York Federal Reserve Bank. “Report to the Supervisors of
  the Major OTC Derivatives Dealers on the Proposals of Central-
  ized CDS Clearing Solutions for the Segregation and Portability of
  Customer CDS Positions and Related Margin.” New York Federal
  Reserve, June 30, 2009.
Oﬃce of the Comptroller of the Currency. “OCC’s Quarterly Report
  on Bank Trading and Derivatives Activities: Second Quarter 2009.”
  Technical report, US Department of the Treasury, Washingon, D.C.,
  second quarter, 2009.
Payments Risk Committee. “Task Force on Tri-Party Repo Infra-
  structure Progess Report.” New York, December 22, 2009.
Portes, Jonathan. “Risk, Reward and Responsibility: The Finan-
  cial Sector and Society.” Technical report, VOX, December 2009.
  Available at www.voxeu.org/index.php?q=node/4417.
Raviv, Alon. “Bank Stability and Market Discipline: Debt-for-Equity
  Swap versus Subordinated Notes.” Technical report, Brandeis Uni-
  versity, August 13, 2004.
Securities and Exchange Commission. “Rule 15c3-3: Reserve Re-
  quirements for Margin Related to Security Futures Products.” 17
  CFR Parts 200 and 240 [Release No. 34-50295; File No. S7-34-02]
  RIN 3235-AI61, 2002.
Sender, Henny. “Lehman Creditors in Fight to Recover Collateral.”
  Financial Times, June 21, 2009. Available at www.ft.com/cms/s/0/
  909ba63c-5e99-11de-91ad-00144feabdc0.html.
Singh, Manmohan, and James Aitken. “Deleveraging after Lehman—
  Evidence from Reduced Rehypothecation.” Unpublished. Working
  Paper WP/09, International Monetary Fund, 2009.
Skeel, David A. “Markets, Courts, and the Brave New World of
  Bankruptcy Theory.” Wisconsin Law Review 2 (1993): 465–521.
Squam Lake Working Group on Financial Regulation. The Squam
  Lake Report: Fixing the Financial System. Princeton, Princeton
  University Press, 2010.
Summe, Kimberly. “Lessons Learned from the Lehman Bankruptcy.”
  Pp. 59–105 in Kenneth Scott and John Taylor, eds., Ending Gov-
  ernment Bailouts as We Know Them. Stanford: Hoover Press,
  2010.
86   •   Bibliography

Teather, David. “Banking Crisis: Lehman Brothers: J. P. Morgan Ac-
  cused over Bank’s Downfall.” The Guardian, October 6, 2008. Avail-
  able at http: //www . guardian . co . uk / business / 2008 / oct / 06 /
  jpmorgan.lehmanbrothers.
Tucker, Paul. “The Repertoire of Oﬃcial Sector Interventions in the
  Financial System: Last Resort Lending, Market-Making, and Capi-
  tal.” Speech delivered to the Bank of Japan 2009 International Con-
  ference on Financial System and Monetary Policy: Implementation,
  Bank of Japan, Tokyo, May 27–28, 2009.
     . “Shadow Banking, Capital Markets and Financial Stability.”
  Speech delivered at BGC Partners Seminar, London, January 21,
  2010. Available at www . bankofengland . co . uk / publications /
  speeches/ 2010/speech420.pdf.
Tuckman, Bruce. “Systemic Risk and the Tri-Party Repo Clearing
  Banks.” Center For Financial Stability, New York, February 2010.
UBS. “Shareholder Report on UBS’s Writedowns.” UBS, Zurich, April
  18, 2008.
Valukas, Anton. “Report of Anton R. Valukas, Examiner.” Vol. 4, In
  re Lehman Brothers Holdings Inc., Debtors, March 2010.
Wall, Larry D., Ellis W. Tallman, and Peter A. Abken. “The Impact
  of a Dealer’s Failure on OTC Derivatives Market Liquidity during
  Volatile Periods.” Working paper 96-6, Federal Reserve Bank of
  Atlanta, Georgia, 1996.
Williamson, Christine. “Hedge Fund Ranking Reveals Nasty Scars
  from Financial Crisis.” Pensions and Investments, March 8, 2010.
Yavorsky, Alexander. “Credit Default Swaps: Market, Systemic, and
  Individual Firm Risks in Practice.” Moody’s Finance and Securi-
  ties, Investor Report, Special Comment, Moody’s Investor Services,
  October 2008.
Index

Note: numbers in italic indicate references to illustrations

Abate, Joseph, 32, 41, 56                 Cassola, Nuno, 35
adverse selection, 6, 44–45,              CCPs (central clearing
   50–52, 54                                 counterparties), 6–7, 29,
AIG Financial Products, 27, 29, 60           57–58, 57–59, 63–69, 68,
Aitken, James, 39, 40, 76n.25                74n.13
Akerlof, George, 45                       CDS. See credit default swaps
Aragon, George O., 76n.24                 Citibank, 25–26, 48, 78n.3
asset management, 19                      Citigroup, 15, 19–21, 42, 72n.11
asset sales, 31, 45, 53–54, 59            clearing/settlement services:
asset substitution, 21                       central clearing
automatic stays, 6                           counterparties (CCPs), 6–7,
                                             29, 57–58, 57–59, 63–69, 68,
Bank for International                       74n.13; clearing, deﬁned, 63;
   Settlements, 16, 17 (table)               daylight overdrafts, 2–3, 32,
Bank of America, 15, 28, 42                  34, 41–42, 55–56,
Bank of England, 35, 54                      76nn.28–29; guarantee
Bank of New York Mellon, 12–13,              funds, 63–64, 67–69;
   48, 77n.31                                importance to dealers’ daily
bankruptcy, 27, 45–46, 73n.7.                operations, 12, 14; loss of,
   See also under Lehman                     41–42, 76–77nn.28–32;
   Brothers                                  loss-of-cash settlement
Basel Committee on Banking                   privileges, 5; regulatory
   Supervision, xii, 54–55                   frameworks’ inﬂuence on, xi;
Bear Stearns: collapse of, xi,               and right to oﬀset holders’
   72–73n.2; internal hedge                  cash balances, 41–42;
   funds of, 19, 71n.9;                      stabilizing role of, 29;
   J. P. Morgan Chase’s                      tri-party repos, 13, 14, 32, 34
   acquisition of, 19; leverage              (see also repos); utilities for
   ratio of, 30; near collapse of,           tri-party repos, 6–7, 55–56
   72n.2; prime brokerage by,             Clearstream, 13
   19; repo ﬁnancing of, 32;              CoCos (Enhanced Capital Notes),
   solvency questions’ eﬀects                47–48
   on, 23, 24, 25                         Cohan, William D., 25, 32
Bernanke, Ben, 47, 56, 60                 Cohn, Gary, 25
Bliss, Robert R., 60                      collateral: initial margin, 63–69,
Boot, Arnoud, 9                              68, 72–73n.2; of Lehman
Brunnermeier, Markus K., 31                  Brothers, 26, 42,
Bulow, Jeremy, 28                            76–77nn.30–31; posted by
Burroughs, Bryan, 25                         derivatives counterparties,
buying low and selling high, 11,             26–27, 73n.3, 73n.6; sales of,
   14                                        and repos, 30; variation
                                             margin, 63–65, 67
Cantor Fitzgerald, 71n.1 (ch. 2)          Commercial Paper Funding
capital requirements, 3–4, 20,               Facility, 75n.20
   43, 46, 56                             Commerzbank AG, 71n.1 (ch. 2)
88   •   Index

Committee on the Global                 underwriting by, 11; varieties
   Financial System, 32, 33             of, 4. See also speciﬁc banks
   (table)                           death spirals, 49
conservatorship, 4, 28–29, 46, 60    debt overhang, 6, 43–44, 44,
contingent capital/convertible          50–52, 59
   debt, 59. See also                Delany, Craig, 74n.16
   distress-contingent               DeMarzo, Peter, 45–46
   convertible debt                  deposit insurance, 3–4, 35
credit default swaps (CDSs),         Depository Trust and Clearing
   16–18, 17 (table), 18, 49,           (DTTC), 13, 18
   64, 78n.5                         derivatives: automatic-stay
credit event upon merger, 29,           exemptions for, 6; in Beta
   74n.11                               Bank case study, 1–2; central
credit extensions, transitional,        clearing counterparties
   75n.20                               (CCPs), 6–7, 29, 57–58, 57–59,
Credit Suisse, 25                       63–69, 68, 74n.13; cleared, 29,
Culp, Christopher L., 52                74n.13; collateral posting by
                                        counterparties, 26–27, 73n.3,
Daiwa Securities America, 71n.1         73n.6; counterparty reactions
  (ch. 2)                               to failures, 23–29, 24,
dark pools (oﬀ-exchange                 72–73nn.2–3, 73–74nn.10–11,
  order-crossing systems), 11           74n.13; credit default swaps
daylight overdrafts, 2–3, 32, 34,       (CDSs), 16–18, 17 (table), 18,
  41–42, 55–56, 76nn.28–29              49, 64, 78n.5; deﬁnition of,
dealer banks, 9–21; asset               13; distress costs of, 15;
  management by, 19; clearing           exposure of dealers in, 16–17,
  services for (see clearing/           17 (table); institutional
  settlement services);                 mechanisms of, 5; interest
  commercial banking                    rate swaps, 14, 59; market
  operations of, 4; deﬁnition of,       value of, 15–16, 27–28, 64–65;
  9; failure mechanisms for (see        in master swap agreements,
  failure mechanisms);                  15–16, 27–29; New York
  franchise value of, 5–6;              Federal Reserve Bank meeting
  holding companies for, 4–5,           on, 9, 10 (table); OTC, as
  35, 60 (see also speciﬁc              uncleared, 58–59; OTC, dealer
  companies); investment                trading of, 13–18; OTC,
  banking by, 4; liquidity              deﬁned, 13; OTC, largest
  standards for, stronger,              dealers of, 15; OTC, notional
  53–55; oﬀ-balance-sheet               amount of, 14; OTC vs.
  ﬁnancing by, 20–21; OTC               exchange-traded, 13–14;
  derivatives trades by, 13–18;         regulatory frameworks’
  overview of, 9–11; primary, 9,        inﬂuence on, xi; replacing
  10 (table), 71n.1 (ch. 2); prime      positions, 27–28, 30–31,
  brokerage by, 18–19;                  73–74n.10. See also novations
  restructuring debt of, 6;          DerivServ Trade Information
  securities dealing by, 11–13,         Warehouse, 18
  12, 14; size/complexity of, xi,    Deutsche Bank, 25
  4–5; systemic risk from            Dey, Iain, 77n.32
  failure of, xi–xii, 5, 9, 46; as   Diamond, Douglas W., 3
  too big to fail, 5, 53, 60;        discount-window ﬁnancing,
  trading by, 11–13;                    34–35, 56, 75n.20
                                                          Index   •   89

distress-contingent convertible      Flannery, Mark J., 46, 49
   debt, 43, 46–51, 47, 59,          Fontana, Thomas, 25–26
   78n.3, 78n.5                      formulated wind-down plans
DTTC (Depository Trust and              (living wills), 59–60
   Clearing), 13, 18                 Fortson, Danny, 77n.32
Dudley, William, 47                  free credit balances, 37, 39,
Duﬃe, Darrell, 45–46, 57–58,            75–76n.22
   67, 68
Dybvig, Philip H., 3                 Geanakoplos, John, 31
                                     Geithner, Timothy, 13
ECB (European Central Bank),         Global Association of Central
   35, 54                               Counterparties, 74n.13
economic principles, 3–7             Global Equity Opportunities
Edwards, Franklin, 60                   Fund, 19
emergency-bank proposal, 56          Goldman Sachs, 15, 19, 25, 35,
Enhanced Capital Notes (CoCos),         39–40, 72n.2
   47–48                             Gorton, Gary, 74–75n.18
equity rights oﬀerings,              guarantee funds, 63–64, 67–69
   mandatory, 43, 50–52, 59
Euroclear, 13                        haircuts: deﬁnition of, 2; repo,
European Central Bank (ECB),            12, 30–32, 33 (table), 55–56,
   35, 54                               74–75n.18, 74n.16; rise of,
Eurozone banks, 35                      31–32, 74–75n.18
Ewerhart, Christian, 74n.18          Hart, Oliver, 45–46
extreme but plausible market         Hayman Capital, 25
   conditions, 66–67                 hedge funds, 55; in Beta Bank
                                        case study, 2; internal, 4, 19,
failure mechanisms, xi, 7, 23–42;       21, 71n.9, 72n.11; regulatory
   clearing/settlement services’        frameworks’ inﬂuence on, xi;
   loss, 41–42, 76–77nn.28–32;          repo-ﬁnanced, 12
   debt in excess of assets          Herring, Richard, 59–60
   (insolvency), 53; OTC             High-Grade Structure Credit
   derivatives counterparty             Fund, 19, 71n.9
   reactions, 23–29, 24,             holding companies, 4–5, 35, 60.
   72–73nn.2–3, 73–74nn.10–11,          See also speciﬁc companies
   74n.13; prime-brokerage           Hordahl, Peter, 74n.18
   clients’ disappearance,           Hortacsu, Ali, 35
   36–38, 36–40, 40, 75–76n.22,      HSBC, 20–21, 42
   76nn.24–25; short-term
   creditors’ ﬂight, 29–35, 31       initial margins, 63–69, 68,
   (table), 33 (table),                 72–73n.2
   74–75nn.15–18, 75nn.20–21         Innes, Robert, 45–46
failure resolution. See resolution   insured deposits, 35
   mechanisms                        interest: on federal funds
Falcon, 19, 72n.11                      deposits, 41; ﬂoating vs.
FDIC deposit insurance, 35              ﬁxed rates of, 14; interest
Federal Reserve Act (1913), 35          rate swaps, 14, 59
Federal Reserve insurance, 56        International Swaps and
ﬁrst-loss capital, 67–69, 68            Derivatives Association
Fisher, Peter, 74n.18                   (ISDA), 6, 15–16, 26,
Fixed Income Clearing, 13               73–74n.10, 73n.7
90   •   Index

J. P. Morgan Chase, 12, 15, 19,       Merrill Lynch, 39
    42, 76–77nn.28–31                 Milbourn, Todd, 9
Jackson, Thomas H., 6, 46, 60         Mizuho Securities USA, 71n.1
Jeﬀries & Company, 71n.1 (ch. 2)         (ch. 2)
Jensen, Michael, 21                   money-market funds, 4, 14, 29,
                                         32, 74n.17
Kastl, Jakub, 35                      Moore, John, 45–46
Kelly, Kate, 25                       Morgan Stanley, 1, 15, 19, 27,
King, Matt, 30, 31 (table)               35, 39–40, 40
King, Mervyn, 47                      Morrison, Edward R., 60
King, Michael R., 74n.18              Myers, Stewart, 43, 78n.5
Klemperer, Paul, 28
Krimminger, Michael, 6                net free equity (NFE), 32, 34,
Kroener, William, 46, 60                 76n.29
                                      New York Federal Reserve Bank,
Lehman Brothers: bankruptcy of,          10 (table), 30, 34
    xi, 35, 42, 54, 60; bankruptcy    Nomura Securities International,
    procedures for, 27, 73n.7;           71n.1 (ch. 2)
    collateral of, 26, 42,            Nordbank, 28
    76–77nn.30–31; default of,        novations: of credit default
    28, 73–74n.10, 74n.13;               swaps, 17–18, 18; and
    destructiveness of failure of,       exposure to default risk, 1–2;
    5, 38–40, 76n.24; intraday           as failure mechanisms, 25–26,
    exposure by, 77n.31; leverage        72n.2. See also derivatives
    ratio of, 30, 74n.15; market
    reactions to decline of, 25–26,   oﬀ-balance-sheet activities, 5,
    72–73n.2; NFE of, 76n.29;           20–21
    on the PDCF, 35, 75n.21;          OTC (over-the-counter)
    right of oﬀset against, 42          derivatives. See derivatives
Leising, Matthew, 72–73n.2
Leland, Hayne, 45                     Pedersen, Lasse Heje, 31
lender-of-last-resort ﬁnancing,       Primary Dealer Credit Facility
    30–31                                (PDFC), 34–35, 75nn.20–21
Li, Ada, 58, 67, 68                   prime brokers, 18–19; cash
LIBOR (London Interbank                  segregated by, 36–37, 37, 40;
    Oﬀering Rate), 14                    disappearance of clients of,
liquidity standards/coverage             36–38, 36–40, 40, 75–76n.22,
    ratio, 53–55                         76nn.24–25; institutional
living wills (formulated                 mechanisms for, 5;
    wind-down plans), 59–60              margin loans by, 37–39, 38;
Lloyds Bank, 47–48                       rehypothecation of assets of,
London Interbank Oﬀering Rate            36, 38, 38
    (LIBOR), 14                       prisoner’s dilemma, 45
Lubke, Theo, 58, 67, 68,              proprietary trading, 11, 14
    72–73n.2                          put options, 52
                                      Pyle, David, 45
master swap agreements, 15–16,
  27–29                               recapitalizing weak banks, 7,
matched book dealer operations,          43–52; via bankruptcy, 45–46;
  13                                     via distress-contingent
Meckling, William, 21                    convertible debt, 43, 46–51,
merchant banking, 4                      47, 59, 78n.3, 78n.5;
                                                          Index   •    91

   incentives against, 43–46, 44;        33 (table), 74–75nn.15–18,
   via mandatory rights                  75nn.20–21; solvency
   oﬀerings of equity, 43, 50–52,        concerns’ eﬀects on, 20,
   59; via put options, 52               49–51. See also repos
receivership, 4, 46, 60               Singh, Manmohan, 39, 40, 76n.25
regulatory frameworks, 7, 53–61;      Single-Tranche OMO Program,
   central clearing                      75n.20
   counterparties (CCPs), 6–7,        SIVs (structured investment
   29, 57–58, 57–59, 63–69, 68,          vehicles), 4, 20–21
   74n.13; contingent capital, 59;    Skeel, David A., 6, 47, 60
   failure resolution, improved,      Société Générale, 71n.1 (ch. 2)
   59–61; liquidity standards for     special purpose entities (SPEs),
   dealer banks, stronger, 53–55;        20
   overview of inﬂuences of, xi;      Squam Lake Working Group on
   reforms to, generally, xii, 6–7;      Financial Regulation, 59–60
   social costs of bank failures,     stability, conventional analysis
   tools for treating, 3–4, 35           of, 3
   (see also capital requirements;    Strahan, Philip E., 76n.24
   resolution mechanisms);            structured investment vehicles
   tri-party repo clearing               (SIVs), 4, 20–21
   utilities, 6–7, 55–56              Subprime Credit Strategies
repos (repurchase agreements):           Fund, 25
   auctions, 35; automatic-stay
   exemptions for, 6; and             tangible common equity (TCE),
   collateral sales, 30;                 48–49
   deﬁned/characterized,              Tapking, Jens, 74n.18
   11–12, 12; ﬁnancing via,           Term Asset-Backed Securities
   29–30, 31 (table); haircuts of        Loan Facility, 75n.20
   (see under haircuts);              Term Auction Facility, 75n.20
   institutional mechanisms of,       Term Discount Window
   5; length of term of, 12;             Program, 75n.20
   overnight, 29–30;                  Term Securities Lending
   securities-dealer                     Facility, 75n.20
   intermediated, 11–12; term         Thakor, Anjun, 9
   length of, 2; tri-party, 13, 14;   Tucker, Paul, xii, 30–31, 35, 54
   U.S. Treasury, 13; utility-style   Tuckman, Bruce, 34, 56
   clearing of, 6–7, 55–56
resolution mechanisms, 3–4,           U.S. Federal Reserve, 35, 54, 56
   28–29, 46, 53, 59–61               Valukas, Anton, 25–26, 35, 42,
Restoring American Financial             74nn.15–16, 75n.21,
   Stability Bill, xii, 4, 47, 60        76–77nn.28–30
Royal Bank of Canada, 71n.1           variation margins, 63–65, 67
   (ch. 2)                            Volcker, Paul, 10
Royal Bank of Scotland, 47
                                      Wells Fargo, 6, 71n.1 (ch. 2)
S-Cap stress tests, 48                Williamson, Christine, 19
Securities and Exchange Act
   (1934), 26, 37, 48, 75–76n.22      Yavorsky, Alexander, 72n.2,
short-term secured creditors:           73–74n.10
   in Beta Bank case study, 2;
   ﬂight of, xi, 29–35, 31 (table),   Zhu, Haoxiang, 57


