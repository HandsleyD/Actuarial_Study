---
normalized_id: shared-pdf-reference-h-rdle-kerkyacharian-picard-tsybakov-wavelets-approximation-and-statistical-applications
exam_code: SHARED
material_scope: härdle, kerkyacharian, picard, tsybakov - wavelets, approximation and statistical applications.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Härdle, Kerkyacharian, Picard, Tsybakov - Wavelets, Approximation and Statistical Applications.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-h-rdle-kerkyacharian-picard-tsybakov-wavelets-approximation-and-statistical-applications

   Seminaire Paris-Berlin
    Seminar Berlin-Paris



Wavelets, Approximation and
  Statistical Applications



        Wolfgang Härdle
      Gerard Kerkyacharian
        Dominique Picard
       Alexander Tsybakov
Ein erstes Ergebnis des Seminars Berlin-Paris
Un premier résultat du seminaire Paris-Berlin
W. Härdle                                 G. Kerkyacharian
Humboldt-Universität zu Berlin            Université Paris X
Wirtschaftswissenschaftliche Fakultät     URA CNRS 1321 Modalx
Institut für Statistik und Ökonometrie   200, av. de la République
Spandauer Straße 1                         92001 Nanterre Cedex
D 10178 Berlin                             France
Deutschland
D. Picard                                  A. B. Tsybakov
Université Paris VII                      Université Paris VI
UFR Mathématique                          Institut de Statistique
URA CNRS 1321                              URA CNRS 1321
2, Place Jussieu                           4, pl. Jussieu
F 75252 Paris cedex 5                      F 75252 Paris
France                                     France




                                 3
4
Contents

1 Wavelets                                                                  1
  1.1 What can wavelets offer? . . . . . . . . . . . . . . . . . . . . . 1
  1.2 General remarks . . . . . . . . . . . . . . . . . . . . . . . . . . 7
  1.3 Data compression . . . . . . . . . . . . . . . . . . . . . . . . . 8
  1.4 Local adaptivity . . . . . . . . . . . . . . . . . . . . . . . . . . 13
  1.5 Nonlinear smoothing properties . . . . . . . . . . . . . . . . . 13
  1.6 Synopsis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

2 The Haar basis wavelet system                                             17

3 The idea of multiresolution analysis                                      23
  3.1 Multiresolution analysis . . . . . . . . . . . . . . . . . . . . .    23
  3.2 Wavelet system construction . . . . . . . . . . . . . . . . . . .     25
  3.3 An example . . . . . . . . . . . . . . . . . . . . . . . . . . . .    26

4 Some facts from Fourier analysis                                          29

5 Basic relations of wavelet theory                                         33
  5.1 When do we have a wavelet expansion? . . . . . . . . . . . . .        33
  5.2 How to construct mothers from a father . . . . . . . . . . . .        40
  5.3 Additional remarks . . . . . . . . . . . . . . . . . . . . . . . .    42

6 Construction of wavelet bases                                         45
  6.1 Construction starting from Riesz bases . . . . . . . . . . . . . 45
  6.2 Construction starting from m0 . . . . . . . . . . . . . . . . . . 52

7 Compactly supported wavelets                                               57
  7.1 Daubechies’ construction . . . . . . . . . . . . . . . . . . . . . 57
  7.2 Coiflets . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61

                                       i
   7.3   Symmlets . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63

8 Wavelets and Approximation                                                 67
  8.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . .   67
  8.2 Sobolev Spaces . . . . . . . . . . . . . . . . . . . . . . . . . .     68
  8.3 Approximation kernels . . . . . . . . . . . . . . . . . . . . . .      71
  8.4 Approximation theorem in Sobolev spaces . . . . . . . . . . .          72
  8.5 Periodic kernels and projection operators . . . . . . . . . . . .      76
  8.6 Moment condition for projection kernels . . . . . . . . . . . .        80
  8.7 Moment condition in the wavelet case . . . . . . . . . . . . . .       85

9 Wavelets and Besov Spaces                                                97
  9.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
  9.2 Besov spaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
  9.3 Littlewood-Paley decomposition . . . . . . . . . . . . . . . . . 102
  9.4 Approximation theorem in Besov spaces . . . . . . . . . . . . 111
  9.5 Wavelets and approximation in Besov spaces . . . . . . . . . . 113

10 Statistical estimation using wavelets                                    121
   10.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
   10.2 Linear wavelet density estimation . . . . . . . . . . . . . . . . 122
   10.3 Soft and hard thresholding . . . . . . . . . . . . . . . . . . . . 134
   10.4 Linear versus nonlinear wavelet density estimation . . . . . . . 143
   10.5 Asymptotic properties of wavelet thresholding estimates . . . 158
   10.6 Some real data examples . . . . . . . . . . . . . . . . . . . . . 166
   10.7 Comparison with kernel estimates . . . . . . . . . . . . . . . . 173
   10.8 Regression estimation . . . . . . . . . . . . . . . . . . . . . . . 177
   10.9 Other statistical models . . . . . . . . . . . . . . . . . . . . . 183

11 Wavelet thresholding and adaptation                                      187
   11.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . 187
   11.2 Different forms of wavelet thresholding . . . . . . . . . . . . . 187
   11.3 Adaptivity properties of wavelet estimates . . . . . . . . . . . 191
   11.4 Thresholding in sequence space . . . . . . . . . . . . . . . . . 195
   11.5 Adaptive thresholding and Stein’s principle . . . . . . . . . . . 199
   11.6 Oracle inequalities . . . . . . . . . . . . . . . . . . . . . . . . 204
   11.7 Bibliographic remarks . . . . . . . . . . . . . . . . . . . . . . 206

                                       ii
12 Computational aspects and software                                       209
   12.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . 209
   12.2 The cascade algorithm . . . . . . . . . . . . . . . . . . . . . . 210
   12.3 Discrete wavelet transform . . . . . . . . . . . . . . . . . . . . 214
   12.4 Statistical implementation of the DWT . . . . . . . . . . . . . 216
   12.5 Translation invariant wavelet estimation . . . . . . . . . . . . 221
   12.6 Main wavelet commands in XploRe . . . . . . . . . . . . . . . 224

A Tables                                                                   229
  A.1 Wavelet Coefficients . . . . . . . . . . . . . . . . . . . . . . . . 229
  A.2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 231

B Software Availability                                                    232

C Bernstein and Rosenthal inequalities                                     233

D A Lemma on the Riesz basis                                               238

Bibliography                                                               252




                                      iii
iv
Preface

The mathematical theory of ondelettes (wavelets) was developed by Yves
Meyer and many collaborators about 10 years ago. It was designed for ap-
proximation of possibly irregular functions and surfaces and was successfully
applied in data compression, turbulence analysis, image and signal process-
ing. Five years ago wavelet theory progressively appeared to be a power-
ful framework for nonparametric statistical problems. Efficient computa-
tional implementations are beginning to surface in this second lustrum of
the nineties. This book brings together these three main streams of wavelet
theory. It presents the theory, discusses approximations and gives a variety
of statistical applications. It is the aim of this text to introduce the novice
in this field into the various aspects of wavelets. Wavelets require a highly
interactive computing interface. We present therefore all applications with
software code from an interactive statistical computing environment.
    Readers interested in theory and construction of wavelets will find here in
a condensed form results that are somewhat scattered around in the research
literature. A practioner will be able to use wavelets via the available software
code. We hope therefore to address both theory and practice with this book
and thus help to construct bridges between the different groups of scientists.
    This text grew out of a French-German cooperation (Séminaire Paris-
Berlin, Seminar Berlin-Paris). This seminar brings together theoretical and
applied statisticians from Berlin and Paris. This work originates in the first
of these seminars organized in Garchy, Burgundy in 1994. We are confident
that there will be future research work originating from this yearly seminar.
    This text would not have been possible without discussion and encour-
agement from colleagues in France and Germany. We would like to thank
in particular Lucien Birgé, Christian Gourieroux, Yuri Golubev, Marc Hoff-
mann, Sylvie Huet, Emmanuel Jolivet, Oleg Lepski, Enno Mammen, Pascal
Massart, Michael Nussbaum, Michael Neumann, Volodja Spokoiny, Karine

                                       v
Tribouley. The help of Yuri Golubev was particularly important. Our Sec-
tions 11.5 and 12.5 are inspired by the notes that he kindly provided. The
implementation in XploRe was professionally arranged by Sigbert Klinke and
Clementine Dalelane. Steve Marron has established a fine set of test func-
tions that we used in the simulations. Michael Kohler and Marc Hoffmann
made many useful remarks that helped in improving the presentation. We
had strong help in designing and applying our LATEX macros from Wolfram
Kempe, Anja Bardeleben, Michaela Draganska, Andrea Tiersch and Kerstin
Zanter. Un très grand merci!


                                    Berlin-Paris, September 1997


                                   Wolfgang Härdle
                                   Gerard Kerkyacharian,
                                   Dominique Picard
                                   Alexander Tsybakov




                                    vi
Symbols and Notation

ϕ               father wavelet
ψ               mother wavelet
S1, S2, . . .   symmlets
D1, D2, . . .   Daubechies wavelets
C1, C2, . . .   Coiflets
ISE             integrated squared error
M ISE           mean integrated squared error
IR              the real line
ZZ              set of all integers in IR
lp              space of p-summable sequences
Lp (IR)         space of p-integrable functions
Wpm (IR)        Sobolev space
Bpsq (IR)       Besov space
D(IR)           space of infinitely many times differentiable
                compactly supported functions
S 0 (IR)        Schwartz space
Hλ              Hölder smoothness class with parameter λ
(f, g)          scalar product in L2 (IR)
||f ||p         norm in Lp (IR)
||a||lp         norm in lp
||f ||spq       norm in Bpsq (IR)
ONS             orthonormal system
ONB             orthonormal basis
MRA             multiresolution analysis
RHS             right hand side
LHS             left hand side
DW T            discrete wavelet transform
f ∗g            convolution of f and g

                        vii
I{A}                   indicator function of a set A
a.e.                   almost everywhere
supp f                 support of function f
ess sup                essential supremum
f (m)                  m-th derivative
τh f (x) = f (x − h)   shift operator
ωp1 (f, t)             modulus of continuity in the Lp norm
K(x, y)                kernel
δjk                    Kronecker’s delta
≃
X
                       asymptotic identical rate
                       sum over all k ∈ ZZ
 k
card Ω                 cardinality of a set Ω




                               viii
Chapter 1

Wavelets

1.1      What can wavelets offer?
A wavelet is, as the name suggests, a small wave. Many statistical phenom-
ena have wavelet structure. Often small bursts of high frequency wavelets are
followed by lower frequency waves or vice versa. The theory of wavelet re-
construction helps to localize and identify such accumulations of small waves
and helps thus to better understand reasons for these phenomena. Wavelet
theory is different from Fourier analysis and spectral theory since it is based
on a local frequency representation.
    Let us start with some illustrative examples of wavelet analysis for fi-
nancial time series data. Figure 1.1 shows the time series of 25434 log(ask)
– log(bid) spreads of the DeutschMark (DEM) - USDollar (USD) exchange
rates during the time period of October 1, 1992 to September 30, 1993.
The series consists of offers (bids) and demands (asks) that appeared on
the FXFX page of the Reuters network over the entire year, see Bossaerts,
Hafner & Härdle (1996), Ghysels, Gourieroux & Jasiak (1995). The graph
shows the bid - ask spreads for each quarter of the year on the vertical axis.
The horizontal axis denotes time for each quarter.
    The quarterly time series show local bursts of different size and frequency.
Figure 1.2 is a zoom of the first quarter. One sees that the bid-ask spread
varies dominantly between 2 - 3 levels, has asymmetric behavior with thin but
high rare peaks to the top and more oscillations downwards. Wavelets provide
a way to quantify this phenomenon and thereby help to detect mechanisms
for these local bursts.

                                       1
2                                            CHAPTER 1. WAVELETS




    Figure 1.1: Bid-Ask spreads for one year of the DEM-USD FX-rate.




         Figure 1.2: The first quarter of the DEM-USD FX rate.
1.1. WHAT CAN WAVELETS OFFER?                                                    3


    Figure 1.3 shows the first 1024 points (about 2 weeks) of this series in
the upper plot and the size of ”wavelet coefficients” in the lower plot. The
definition of wavelet coefficients will be given in Chapter 3. Here it suffices
to view them as the values that quantify the location, both in time and
frequency domain, of the important features of the function.
    The lower half of Figure 1.3 is called location - frequency plot . It is
interpreted as follows. The Y –axis contains four levels (denoted by 2,3,4 and
5) that correspond to different frequencies. Level 5 and level 2 represent
the highest and the lowest frequencies respectively. The X–axis gives the
location in time. The size of a bar is proportional to the absolute value of
the wavelet coefficient at the corresponding level and time point. The lowest
frequency level 2 chops this two week time interval into 4 half weeks. We
recognize a high activity in the first half week. The next level 3 (8 time
intervals) brings up a high activity peak after 2 days. The next higher level
(roughly one day per interval) points us to two active days in this week.
    In Figure 1.4 we represent in the same scale as Figure 1.3 the wavelet
coefficients for the next 1024 points, again a two week interval. We see
in comparison with the first two weeks that this time the activity is quite
different: the bid-ask spread has smaller values that vary more regularly.
    Let us compare this DEM/USD foreign exchange pattern with the ex-
change between Japanese YEN and DEM. Figure 1.5 shows the plot corre-
sponding to Figure 1.3. We see immediately from the wavelet coefficients
that the daily activity pattern is quite different on this market. An applica-
tion of wavelet techniques to jump detection for monthly stock market return
data is given in Wang (1995), see also Raimondo (1996).
    A Fourier frequency spectrum would not be able to represent these ef-
fects since it is not sensitive to effects that are local in time. Figure 1.7 shows
the estimated Fourier frequency spectral density for the YEN/DEM series
of Figure 1.6. Note that the symmetric center of this graph corresponds to
waves of a week’s length. We see the high frequency of a one day activity as
in the uppermost level of Figure 1.5, but not when this happens. Wavelets
provide a spatial frequency resolution, whereas the Fourier frequency repre-
sentation gives us only a global, space insensitive frequency distribution. (In
our univariate example ”space” corresponds to time.)
    The spatial sensitivity of wavelets is useful also in smoothing problems,
in particular in density and regression estimation. Figure 1.8 shows two
estimates of a total expenditure density for Belgian households. The dotted
line is a kernel density estimate and the solid line a smoothed wavelet density
4                                             CHAPTER 1. WAVELETS




    Figure 1.3: The first 1024 points (2 weeks) of the DEM-USD FX
    rate with a location - frequency plot.




         Figure 1.4: Distribution of coefficients for weeks 3–4.
1.1. WHAT CAN WAVELETS OFFER?                                5




      Figure 1.5: The first 2 weeks of the YENDEM FX-rate.




       Figure 1.6: The weeks 3 - 4 of the YENDEM FX-rate.
6                                          CHAPTER 1. WAVELETS




    Figure 1.7: The smoothed periodogram of the YENDEM series.




    Figure 1.8: Binned Belgian household data at x–axis. Wavelet
    density estimate (solid) and kernel density estimate (dashed).
1.2. GENERAL REMARKS                                                            7


estimate of the binned data given in the lower graph.
    The kernel density estimate was computed with a Quartic kernel and the
Silverman rule of thumb, see Silverman (1986), Härdle (1990). The binned
data - a histogram with extremely small binwidth - shows a slight shoulder
to the right corresponding to a possible mode in the income distribution.
The kernel density estimate uses one single, global bandwidth for this data
and is thus not sensitive to local curvature changes, like modes, troughs
and sudden changes in the form of the density curve. One sees that the
wavelet density estimate picks up two shoulders and models also the more
sparsely distributed observations in the right tail of the distribution. This
local smoothing feature of wavelets applies also to regression problems and
will be studied in Chapter 10.
    In summary, wavelets offer a frequency/time representation of data that
allows us time (respectively, space) adaptive filtering, reconstruction and
smoothing.


1.2      General remarks
The word ”wavelet” is used in mathematics to denote a kind of orthonor-
mal bases in L2 with remarkable approximation properties. The theory of
wavelets was developed by Y.Meyer, I.Daubechies, S.Mallat and others in
the end of 1980-ies.
    Qualitatively, the difference between the usual sine wave and a wavelet
may be described by the localization property: the sine wave is localized in
frequency domain, but not in time domain, while a wavelet is localized both in
frequency and time domain. Figure 1.9 explains this difference. In the upper
half of Figure 1.9 the sine waves sin(8πx), sin(16πx), x ∈ (0, 1) are shown.
The frequency is stable over the horizontal axis, the ”time” axis. The lower
half of Figure 1.9 shows a typical example of two wavelets (Daubechies 10,
denoted as D10, see Chapter 7). Here the frequency ”changes” in horizontal
direction.
    By saying ”localized” frequency we do not mean that the support of a
wavelet is compact. We rather mean that the mass of oscillations of a wavelet
is concentrated on a small interval. Clearly this is not the case for a sine wave.
    The Fourier orthonormal basis is composed of waves, while the aim of the
theory of wavelets is to construct orthonormal bases composed of wavelets.
    Besides the already discussed localization property of wavelets there are
8                                                      CHAPTER 1. WAVELETS


other remarkable features of this technique. Wavelets provide a useful tool in
data compression and have excellent statistical properties in data smoothing.
This is shortly presented in the following sections.


1.3     Data compression
Wavelets allow to simplify the description of a complicated function in terms
of a small number of coefficients. Often there are less coefficients necessary
than in the classical Fourier analysis.

EXAMPLE 1.1 Define the step function
                                                  h        i
                                     −1,     x ∈ − 12 , 0 ,
                          f (x) =                      i
                                        1, x ∈ 0, 12 .

This function is poorly approximated by its Fourier series. The Fourier ex-
pansion for f (x) has the form
                           ∞                        ∞
                           X       4              X
                f (x) =              sin(2πkx) =         ck ϕk (x),       (1.1)
                            k=1   πk               k=1
                          (k odd)                (k odd)
                 √                        √
where ϕk (x) = 2 sin(2πkx) and ck = 2πk2 . Figure 1.10 shows this function
together with the approximated Fourier series with 5 terms. The Fourier
coefficients ck decrease as O(k −1 ) which is a slow rate. So, one needs many
terms of the Fourier expansion to approximate f with a good accuracy. Fig-
ure 1.11 shows the step function f (x) with the Fourier expansion using 50
terms in (1.1). If we include 500 terms in this Fourier expansion it would
not look drastically different from what we already see in Figure 1.11. The
Fourier basis tends to keep the undesirable oscillations near the jump point
and the endpoints of the interval.
   Wavelets are more flexible. In fact, wavelet systems localize the jump
by putting a small and extremely oscillating wavelet around the jump. This
involves only one (or small number) of coefficients, in contrast to the Fourier
case. One such wavelet system is the Haar basis with (mother) wavelet
                                     (
                                         −1, x ∈ [0, 21 ],
                           ψ(x) =                                         (1.2)
                                          1, x ∈ ( 12 , 1].
1.3. DATA COMPRESSION                                                    9




        Figure 1.9: Sine and cosine waves and wavelets (D10).




   Figure 1.10: The step function and the Fourier series approximation
   with 5 terms.
10                                                 CHAPTER 1. WAVELETS


The Haar basis consists of functions ψjk (x) = 2j/2 ψ(2j x − k), j, k = . . .,
−1, 0, 1,. . .. It is clear that with such a basis the step function in Figure
1.11 can be perfectly represented by two coefficients whereas using a Fourier
series with 50 terms still produces wiggles in the reconstruction.


EXAMPLE 1.2 Let f (x) be of the form shown in Figure 1.12. The function
is
     f (x) = I{x ∈ [0, 0.5]} sin(8πx) + I{x ∈ (0.5, 1]} sin(32πx)
sampled at n = 512 equidistant points. Here I{·} denotes the indicator
function. That is, the support of f is composed of two intervals [a, b] = [0, 0.5]
and [c, d] = [0.5, 1]. On [a, b] the frequency of oscillation of f is smaller than
on [c, d]. If doing the Fourier expansion, one should include both frequencies:
ω1 -,,frequency of [a, b]” and ω2 -,,frequency of [c, d]”. But since the sine waves
have infinite support, one is forced to compensate the influence of ω1 on [c, d]
and of ω2 on [a, b] by adding a large number of higher frequency terms in
the Fourier expansion. With wavelets one needs essentially only two pairs of
time-frequency coefficients: (ω1 , [a, b]) and (ω2 , [c, d]). This is made clear in
Figure 1.13 where we show a time frequency resolution as in Figure 1.3.

    One clearly sees the dominant low frequency waves in the left part as high
valued coefficients in Level 3 in the upper part of the graph. The highest
frequency components occur in level 5. The sine wave was sampled at n = 512
points.
    Figure 1.14 shows a wavelet approximation of the above sine wave ex-
ample. The approximation is based on exactly the coefficients we see in the
location - frequency plot in the lower part of Figure 1.14. Altogether only
18 coefficients are used to reconstruct the curve at n = 512 points. The
reconstructed curve looks somewhat jagged due to the fact that we used a
non smooth (so called D4) wavelet basis. We discuss later in Chapters 8
and 9 how to improve the approximation. The 18 coefficients were selected
so that their absolute value was bigger than 0.4 times the maximal absolute
coefficient value. We see that 18 coefficients suffice to reconstruct the curve
                                                                         1
at 512 points. This corresponds to a data compression rate of about 32     .
    Wavelet data compression is especially useful in image processing, restora-
tion and filtering. Consider an example. Figure 1.15 shows the Paris–Berlin
seminar label on a grid of 256×256 points.
1.3. DATA COMPRESSION                                                     11




   Figure 1.11: The step function and the Fourier series with 50 terms.




           Figure 1.12: Two waves with different frequency.
12                                             CHAPTER 1. WAVELETS




     Figure 1.13: Location - frequency plot for the curve in Figure 1.12




     Figure 1.14: The wavelet approximation (with its location - fre-
     quency plot) for the curve of Figure 1.12
1.4. LOCAL ADAPTIVITY                                                         13


    The picture was originally taken with a digital camera and discretized
onto this grid. The original picture, as given on the front page of this text,
has thus 65536 = 256 × 256 points. The image in Figure 1.15 was computed
from only 500 coefficients (with Haar wavelets). This corresponds to a data
compression rate of about 1/130. The shape of the picture is clearly visible,
the text ”séminaire Paris– Berlin” and ”Seminar Berlin–Paris”, though, is
slightly disturbed but still readable at this level of compression.


1.4      Local adaptivity
This property was evident for the Examples 1.1 and 1.2. Wavelets are
adapted to local properties of functions to to a larger extent than the Fourier
basis. The adaptation is done automatically in view of the existence of a
”second degree of freedom”: the localization in time (or space, if multivari-
ate functions are considered). We have seen in Figures 1.3, 1.4 and the above
sine examples that wavelets represent functions and data both in levels (de-
gree of resolution) and time. The vertical axis in these graphs denotes always
the level, i.e. the partition of the time axis into finer and finer resolutions.
In Figure 1.13 for example we saw that at level 3, corresponding to 23 = 8
subintervals of the time interval [0,1], the low frequency part of the sine waves
shows up. The higher frequencies appear only at level 5 when we divide [0,1]
into 25 = 32 subintervals. The advantage of this ”multiresolution analysis”
is that we can see immediately local properties of data and thereby influence
our further analysis. The local form of the Belgian income distribution den-
sity for example becomes more evident when using wavelet smoothing, see
Figure 1.8. Further examples are given in Chapters 10, 12.
    There were attempts in the past to modify the Fourier analysis by parti-
tioning the time domain into pieces and applying different Fourier expansions
on different pieces. But the partitioning is always subjective. Wavelets pro-
vide an elegant and mathematically consistent realization of this intuitive
idea.


1.5      Nonlinear smoothing properties
The smoothing property of wavelets has been shortly mentioned above in the
Belgian income estimation. In terms of series representations of functions
14                                              CHAPTER 1. WAVELETS


smoothing means that we set some coefficients in this series equal to zero.
This can be done in different ways. One way is to cut the series, starting
from some prescribed term, for example, to keep only the first five terms of
the expansion. This yields a traditional linear smoother (it is linear with
respect to the coefficients of the series expansion). Another way is to keep
only those coefficients, whose absolute value is greater than some threshold.
The result is then a nonlinear function of the coefficients, and we obtain an
example of a nonlinear smoother. Such a nonlinear way is called thresholding.
We shall discuss this technique as we go along. It will be seen later (Chapter
10) that linear smoothers cannot achieve the minimax rate in the case of
nonhomogeneous or unknown regularity of the estimated function. Wavelet
thresholding provides a way to automatically adapt to the regularity of the
function to be estimated and to achieve the minimax rate.
    The wavelet thresholding procedure was proposed by D. Donoho and I.
Johnstone in the beginning of 1990-ies. It is a very simple procedure, and
it may seem almost to be a miracle that it provides an answer to this hard
mathematical problem.


1.6     Synopsis
This book is designed to provide an introduction to the theory and practice of
wavelets. We therefore start with the simplest wavelet basis, the Haar basis
(Chapter 2). Then we give the basic idea of space/frequency multiresolution
analysis (Chapter 3) and we recall some facts from Fourier analysis (Chapter
4) related to the fixed frequency resolution theory.
    The basics of wavelet theory are presented in Chapter 5 followed by a
chapter on the actual construction of wavelets. Chapter 7 is devoted to
Daubechies’ construction of compactly supported wavelets. Chapters 8 and
9 study the approximation properties of wavelet decomposition and give an
introduction to Besov spaces which correspond to an appropriate functional
framework. In Chapter 10 we introduce some statistical wavelet estimation
procedures and study their properties. Chapter 11 is concerned with the
adaptation issue in wavelet estimation. The final Chapter 12 discusses com-
putational aspects and an interactive software interface. In the appendix we
give coefficients used to generate wavelets and the address for the XploRe
software sources (Härdle, Klinke & Turlach (1995)).
1.6. SYNOPSIS                                                        15




    Figure 1.15: The seminar label computed from 500 coefficients.
16   CHAPTER 1. WAVELETS
Chapter 2

The Haar basis wavelet system

The Haar basis is known since 1910. Here we consider the Haar basis on the
real line IR and describe some of its properties which are useful for the con-
struction of general wavelet systems. Let L2 (IR) be the space of all complex
valued functions f on IR such that their L2 -norm is finite:
                                  Z ∞                  1/2
                      ||f ||2 =           |f (x)|2 dx          < ∞.
                                     −∞

This space is endowed with the scalar product
                                       Z ∞
                           (f, g) =            f (x)g(x)dx.
                                          −∞


Here and later g(x) denotes the complex conjugate of g(x). We say that
f, g ∈ L2 (IR) are orthogonal to each other if (f, g) = 0 (in this case we write
f ⊥ g).
    Note that in this chapter we deal with the space L2 (IR) of complex-
valued functions. This is done to make the argument consistent with the
more general framework considered later. However, for the particular case of
this chapter the reader may also think of L2 (IR) as the space of real-valued
functions, with no changes in the notation.
    A system of functions {ϕk , k ∈ ZZ}, ϕk ∈ L2 (IR), is called orthonormal
system (ONS) if             Z
                                  ϕk (x)ϕj (x)dx = δjk ,

where δjk is the Kronecker delta. An ONS {ϕk , k ∈ ZZ} is called orthonor-
mal basis (ONB) in a subspace V of L2 (IR) if any function f ∈ V has a

                                           17
18                   CHAPTER 2. THE HAAR BASIS WAVELET SYSTEM


representation                                X
                                   f (x) =            ck ϕk (x),
                                                  k
                                                  2
                                           k |ck | < ∞. Here and later
                                        P
where the coefficients ck satisfy
                                                      X         ∞
                                                                X        Z       Z ∞
                ZZ = {. . . , −1, 0, 1, . . .},           =          ,       =         .
                                                      k        k=−∞              −∞


     Consider the following subspace V0 of L2 (IR) :

           V0 = {f ∈ L2 (IR) : f       is constant on (k, k + 1],                  k ∈ ZZ}.

Clearly,                                                  X
                         f ∈ V0 ⇐⇒ f (x) =                    ck ϕ(x − k),
                                                          k
                  2
           k |ck | < ∞, the series converges in L2 (IR), and
        P
where
                                                          (
                                                              1, x ∈ (0, 1],
                     ϕ(x) = I{x ∈ (0, 1]} =                                                   (2.1)
                                                              0, x 6∈ (0, 1].

Denote
                            ϕ0k (x) = ϕ(x − k),                  k ∈ ZZ.

REMARK 2.1 The system {ϕ0k } is an orthonormal basis (ONB) in V0 .

     Now, define a new linear subspace of L2 (IR) by

                            V1 = {h(x) = f (2x) : f ∈ V0 }.

The space V1 contains all functions in L2 (IR) that are constant on the intervals
of the form ( k2 , k+1
                    2
                       ], k ∈ ZZ.
    Obviously, V0 ⊂ V1 , and an ONB in V1 is given by the system of functions
{ϕ1k }, where                     √
                         ϕ1k (x) = 2ϕ(2x − k),      k ∈ ZZ.
     One can iterate this process and define, in general, the space

                            Vj = {h(x) = f (2j x) : f ∈ V0 }.

Then Vj is a linear subspace of L2 (IR) with the ONB

                        ϕjk (x) = 2j/2 ϕ(2j x − k),                 k ∈ ZZ,
                                                                                   19


and
                            V0 ⊂ V1 ⊂ . . . ⊂ Vj ⊂ . . .
In the same way one defines the spaces Vj for j < 0, j ∈ ZZ, and one gets the
inclusions
                        . . . ⊂ V−1 ⊂ V0 ⊂ V1 ⊂ . . .
   Continuing this process infinitely, we approximate the whole space L2 (IR).

                          S∞                     S∞
PROPOSITION 2.1             j=0 Vj (and hence         j=−∞ Vj ) is dense in L2 (IR).

    Proof follows immediately from the fact that every f ∈ L2 (IR) can be
approximated by a piecewise constant function f˜ ∈ L2 (IR) of the form
  m c̃m I{x ∈ Am } where Am are intervals, and each I{x ∈ Am } may be ap-
P

proximated by a sum of indicator functions of intervalsnof the form ( 2kj , k+1
                                                                             2oj
                                                                                 ].
In other words, linear span of the system of functions {ϕ0k }, {ϕ1k }, . . . is
dense in L2 (IR). Clearly, this system is not a basis in L2 (IR). But it can be
transformed to a basis by means of orthogonalization. How to orthogonalize
it?
    Denote by W0 the orthogonal complement of V0 in V1 :
                                 W0 = V1       V0 .
(In other terms, V1 = V0 ⊕ W0 ). This writing means that every v1 ∈ V1 can
be represented as v1 = v0 + w0 , v0 ∈ V0 , w0 ∈ W0 , where v0 ⊥w0 . How to
describe the space W0 ? Let us show that W0 is a linear subspace of L2 (IR)
spanned by a certain ONB. This will answer the question. Pick the following
function                        (
                                  −1, x ∈ [0, 21 ],
                        ψ(x) =                                         (2.2)
                                    1, x ∈ ( 12 , 1].

PROPOSITION 2.2 The system {ψ0k } where
                        ψ0k (x) = ψ(x − k),            k ∈ ZZ,
is an ONB in W0 . In other terms, W0 is the linear subspace of L2 (IR) which
is composed of the functions of the form
                                       X
                             f (x) =       ck ψ(x − k)
                                       k

                2
         k |ck | < ∞, and the series converges in L2 (IR).
        P
where
20                   CHAPTER 2. THE HAAR BASIS WAVELET SYSTEM


Proof It suffices to verify the following 3 facts:
  (i) {ψ0k } is an orthonormal system (ONS). This is obvious, since the
      supports of ψ0l and ψ0k are non-overlapping for l 6= k, and ||ψ0k ||2 = 1.
 (ii) {ψ0k } is orthogonal to V0 , i.e.
                                       Z
                      (ψ0k , ϕ0l ) =       ψ0k (x)ϕ0l (x)dx = 0,         ∀l, k.

        If l 6= k, this is trivial (non-overlapping supports of ψ0k and ϕ0l ). If
        l = k, this follows from the definition of ψ0k , ϕ0k :
                Z                            Z 1                  Z 1
                    ψ0k (x)ϕ0k (x)dx =             ψ(x)ϕ(x)dx =         ψ(x)dx = 0.
                                              0                    0

(iii) Every f ∈ V1 has a unique representation in terms of the joint system
      {{ϕ0k }, {ψ0k }, k ∈ ZZ}.
        Let f ∈ V1 . Then
                                                               |ck |2 < ∞.
                                   X                      X
                         f (x) =           ck ϕ1k (x),
                                   k                       k

        This representation is unique since {ϕ1k } is an ONB in V1 . Thus, it
        suffices to prove that ϕ1k is a linear combination of ϕ0k and ψ0k for
        each k. It suffices to consider the case where k = 0 and k = 1. One
        easily shows that
                           √           √             1
              ϕ10 (x) =      2ϕ(2x) = 2 I{x ∈ (0, ]}
                                                     2
                           √                           1
                       =     2{ϕ00 (x) − ψ00 (x)}/2 = √ {ϕ00 (x) − ψ00 (x)}
                                                        2
                             √
        Similarly, ϕ11 (x) = 2ϕ(2x−1) = √12 {ϕ00 (x)+ψ00 (x)}.                                     2
      We have V1 = V0 ⊕ W0 . One can extend this construction to every Vj , to
get
                                       Vj+1 = Vj ⊕ Wj
where Wj = Vj+1 Vj is the orthogonal complement of Vj in Vj+1 . In
particular, the system {ψjk , k ∈ ZZ}, where ψjk (x) = 2j/2 ψ(2j x − k), is ONB
in Wj . Formally, we can write this as:
                                                                                      j
                                                                                      M
Vj+1 = Vj ⊕Wj = Vj−1 ⊕Wj−1 ⊕Wj = . . . = V0 ⊕W0 ⊕W1 ⊕. . .⊕Wj = V0 ⊕                        Wl .
                                                                                      l=0
                                                                            21

               S
We know that       j Vj is dense in L2 (IR), or, in other terms,

                                    [
                                         Vj = L2 (IR).
                                     j

Using the orthogonal sum decomposition of Vj , one gets also
                                                   ∞
                                                   M
                               L2 (IR) = V0 ⊕            Wj .
                                                   j=0

This symbolic writing means that every f ∈ L2 (IR) can be represented as a
series (convergent in L2 (IR)) of the form
                               X                   ∞ X
                                                   X
                     f (x) =       α0k ϕ0k (x) +            βjk ψjk (x)   (2.3)
                               k                   j=0 k

where α0k , βjk are the coefficients of this expansion. For sake of simplicity
we shall often use the notation αk instead of α0k .

COROLLARY 2.1 The system of functions
                     n                                              o
                       {ϕ0k }, {ψjk }, k ∈ ZZ, j = 0, 1, 2, . . .

is an ONB in L2 (IR).

REMARK 2.2 This representation is the one we used in the graphical
displays of Chapter 1. The coefficients we showed in the upper part of the
graphs were the coefficients βjk .

REMARK 2.3 The expansion (2.3) has the property of localization both in
time and frequency. In fact, the summation in k corresponds to localization in
time (shifts of functions ϕj0 (x) and ψj0 (x)). On the other hand, summation
in j corresponds to localization in frequency domain. The larger is j, the
higher is the ”frequency” related to ψjk .

    In fact, (2.3) presents a special example of wavelet expansion, which cor-
responds to our special choice of ϕ and ψ, given by (2.1) and (2.2). One may
suppose that there exist other choices of ϕ and ψ which provide such expan-
sion. This will be discussed later. The function ϕ is called father wavelet, ψ
is mother wavelet (ϕ0k , ψjk are ”children”).
22                CHAPTER 2. THE HAAR BASIS WAVELET SYSTEM


REMARK 2.4 The mother wavelet ψ may be defined in a different way,
for example            (
                            1, x ∈ [0, 12 ],
                ψ(x) =
                         −1, x ∈ ( 12 , 1].
There are many functions which are orthogonal to ϕ, and one can choose ψ
among these functions. (In fact, for a given father ϕ there may be several
mothers ψ).




     Figure 2.1: The sine example with a coarse Haar approximation.

    The situation of formula (2.3) is shown in Figure 2.1. We come back there
to our sine wave Example 1.2 and approximate it by only a few terms of the
Haar wavelet expansion.
    More precisely, we use levels j = 2, 3, 4, and 18 non-zero coefficients βjk
shown in size in the lower part of the figure. The corresponding approxi-
mation is shown in the upper part of Figure 2.1. The high frequency part
is nicely picked up but due to the simple step function form of this wavelet
basis the smooth character of the sine wave is not captured. It is therefore
interesting to look for other wavelet basis systems.
Chapter 3

The idea of multiresolution
analysis

3.1     Multiresolution analysis
The Haar system is not very convenient for approximation of smooth func-
tions. In fact, any Haar approximation is a discontinuous function. One can
show that even if the function f is very smooth, the Haar coefficients still
decrease slowly. We therefore aim to construct wavelets that have better
approximation properties.
    Let ϕ be some function from L2 (IR), such that the family of translates of
ϕ, i.e. {ϕ0k , k ∈ ZZ} = {ϕ(· − k), k ∈ ZZ} is an orthonormal system (ONS).
Here and later
                ϕjk (x) = 2j/2 ϕ(2j x − k), j ∈ ZZ, k ∈ ZZ.
Define the linear spaces
                                                        |ck |2 < ∞},
                               X                    X
             V0 = {f (x) =          ck ϕ(x − k) :
                                k                   k
             V1 = {h(x) = f (2x) : f ∈ V0 },
              ..
               .
             Vj = {h(x) = f (2j x) : f ∈ V0 }, j ∈ ZZ.
We say that ϕ generates the sequence of spaces {Vj , j ∈ ZZ}. Assume that
the function ϕ is chosen in such a way that the spaces are nested:
                           Vj ⊂ Vj+1 ,      j ∈ ZZ,                      (3.1)

                                       23
24       CHAPTER 3. THE IDEA OF MULTIRESOLUTION ANALYSIS


and that                     [
                                 Vj is dense in L2 (IR).                    (3.2)
                           j≥0

We proved in Chapter 2 that the relations (3.1) and (3.2) are satisfied for
the Haar basis.
DEFINITION 3.1 Let {ϕ0k } be an orthonormal system in L2 (IR). The
sequence of spaces {Vj , j ∈ ZZ}, generated by ϕ is called a multiresolution
analysis (MRA) of L2 (IR) if it satisfies (3.1) and (3.2).
    The notion of multiresolution analysis was introduced by Mallat and
Meyer in the years 1988–89 (see the books by Meyer(1990, 1993) and the
article by Mallat (1989)). A link between multiresolution analysis and ap-
proximation of functions will be discussed in detail in Chapters 8 and 9.
DEFINITION 3.2 If {Vj , j ∈ ZZ}, is a MRA of L2 (IR), we say that the
function ϕ generates a MRA of L2 (IR), and we call ϕ the father wavelet.
     Assume that {Vj , j ∈ ZZ} is a MRA. Define
                          Wj = Vj+1         Vj ,          j ∈ ZZ.
Then, as in the case of Haar basis, we get
                                               j
                                               M
                                  Vj = V0 ⊕          Wl ,
                                               l=0

since (3.1) holds. Iterating this infinitely many times, we find
                                 ∞
                                 [                 ∞
                                                   M
                                       Vj = V0 ⊕          Wj .              (3.3)
                                 j=0               j=0

By (3.2) and (3.3) one obtains
                                                    ∞
                                                    M
                             L2 (IR) = V0 ⊕               Wj .
                                                    j=0

   This means that any f ∈ L2 (IR) can be represented as a series (convergent
in L2 (IR)):
                             X                     ∞ X
                                                   X
                   f (x) =        αk ϕ0k (x) +              βjk ψjk (x),    (3.4)
                             k                     j=0 k

where αk , βjk are some coefficients, and {ψjk }, k ∈ ZZ, is a basis for Wj . Note
that there is a difference between (2.3) and (3.4):
3.2. WAVELET SYSTEM CONSTRUCTION                                                    25


  in (2.3) ψjk (x) = 2j/2 ψ(2j x − k), where ψ is defined by (2.2),

  in (3.4) {ψjk (x)} is a general basis for Wj .

The relation (3.4) is called a multiresolution expansion of f . To turn (3.4)
into the wavelet expansion one needs to justify the use of

                             ψjk (x) = 2j/2 ψ(2j x − k)

in (3.4), i.e. the existence of such a function ψ called mother wavelet.
    The space Wj is called resolution level of multiresolution analysis. In the
Fourier analysis we have only one resolution level. In multiresolution analysis
there are many resolution levels which is the origin of its name.
    In the following, by abuse of notation, we frequently write ”resolution
level j” or simply ”level j”. We employ these words mostly to designate not
the space Wj itself, but rather the coefficients βjk and the functions ψjk ”on
the level j”.


3.2     Wavelet system construction
The general framework of wavelet system construction looks like this:

  1. Pick a function ϕ (father wavelet) such that {ϕ0k } is an orthonormal
     system, and (3.1), (3.2) are satisfied, i.e. ϕ generates a MRA of L2 (IR).

  2. Find a function ψ ∈ W0 such that {ψ0k , k ∈ ZZ} = {ψ(· − k), k ∈
     ZZ}, is ONB in W0 . This function is called mother wavelet. Then,
     consequently, {ψjk , k ∈ ZZ} is ONB in Wj . Note that the mother
     wavelet is always orthogonal to the father wavelet.

  3. Conclude that any f ∈ L2 (IR) has the unique representation in terms
     of an L2 -convergent series:
                                 X                  ∞ X
                                                    X
                       f (x) =       αk ϕ0k (x) +           βjk ψjk (x),          (3.5)
                                 k                  j=0 k


      where the wavelet coefficients are
                       Z                                    Z
                αk =       f (x)ϕ0k (x)dx,      βjk =           f (x)ψjk (x)dx.
26       CHAPTER 3. THE IDEA OF MULTIRESOLUTION ANALYSIS


      The relation (3.5) is then called inhomogeneous wavelet expansion. One
      may also consider the homogeneous wavelet expansion
                                                ∞ X
                                                X
                                   f (x) =                  βjk ψjk (x),
                                               j=−∞ k

      where the ”reference” space V0 is eliminated. The αk coefficients sum-
      marize the general form of the function and the βjk represent the inno-
      vations to this general form, the local details. This is why the βjk are
      often called detail coefficients.
The fact that the expansion (3.5) starts from the reference space V0 is just
conventional. One can also choose Vj0 , for some j0 ∈ ZZ, in place of V0 . Then
the inhomogeneous wavelet expansion is of the form
                               X                         ∞ X
                                                         X
                     f (x) =        αj0 k ϕj0 k (x) +             βjk ψjk (x),
                               k                         j=j0 k

where                                      Z
                                   αjk =       f (x)ϕjk (x)dx.

In the following (up to Chapter 9) we put j0 = 0 to simplify the notation.
    An immediate consequence of the wavelet expansion is that the orthogonal
projection PVj+1 (f ) of f onto Vj+1 is of the form
                     X                            X                     X
      PVj+1 (f ) =       αj+1,k ϕj+1,k (x) =            αjk ϕjk (x) +          βjk ψjk (x).   (3.6)
                     k                             k                       k


3.3      An example
Besides the Haar wavelet example considered in Chapter 2, another classical
example of multiresolution analysis can be constructed via the Shannon basis.
In this case the space V0 = V0Sh consists of functions f ∈ L2 (IR) such that
the Fourier transforms fˆ(ξ) have support in [−π, π]. The space V0Sh is very
famous in signal processing because of the following result (see for instance
Papoulis (1977)).
    Sampling theorem. A function f belongs to V0Sh if and only if
                                        X              sin π(x − k)
                             f (x) =           f (k)                .
                                           k             π(x − k)
3.3. AN EXAMPLE                                                               27


    In words, the function f ∈ V0Sh can be entirely recovered from its sampled
values {f (k), k ∈ ZZ}.
    It follows from the sampling theorem that the space V0 = V0Sh is generated
by the function
                                           sin πx
                                  ϕ(x) =          .                         (3.7)
                                             πx
The Fourier transform of ϕ is ϕ̂(ξ) = I{ξ ∈ [−π, π]}. It is easy to see that the
integer translates of ϕ form an ONS and that ϕ generates a MRA of L2 (IR).
In other words, ϕ defined in (3.7) is a father wavelet. The space Vj associated
to this ϕ is the space of all functions in L2 (IR) with Fourier transforms
supported in [−2j π, 2j π]. This Vj is a space of very regular functions. It will
be seen in Chapters 8 and 9 that projecting on Vj can be interpreted as a
smoothing procedure.
    We can also remark that in this example the coefficient of expansion has a
special form since it is just the value f (k). This situation is very uncommon,
but some particular wavelets are constructed in such a way that the wavelet
coefficients are ”almost” interpolations of the function (e.g. coiflets, defined
in Section 7.2).
28   CHAPTER 3. THE IDEA OF MULTIRESOLUTION ANALYSIS
Chapter 4

Some facts from Fourier
analysis

This small chapter is here to summarize the classical facts of Fourier analysis
that will be used in the sequel. We omit the proofs (except for the Pois-
son summation formula). They can be found in standard textbooks on the
subject, for instance in Katznelson (1976), Stein & Weiss (1971).
   Assume that f ∈ L1 (IR), where
                               R∞
                                      L1 (IR) is the space of all complex-valued
functions f on IR, such that −∞ |f (x)|dx < ∞. The Fourier transform of f
is                                        Z ∞
                                 ˆ
                      F[f ](ξ) = f (ξ) =       e−ixξ f (x)dx.               (4.1)
                                                −∞

The function fˆ is continuous and tends to zero when |ξ| → ∞ (Riemann-
Lebesgue Lemma). If fˆ(ξ) is also absolutely integrable, there exists a contin-
uous version of f and one can define the inverse Fourier transform
                                               Z ∞
                                           1
                       F   −1
                                [fˆ](x) =            eiξx fˆ(ξ)dξ,         (4.2)
                                          2π    −∞


and
                             1 Z ∞ iξx ˆ
                    f (x) =       e f (ξ)dξ = F −1 [fˆ](x)
                            2π −∞
at almost every point x. In the following we assure that f is identical to its
continuous version, whenever fˆ(ξ) is absolutely integrable. Thus, in partic-
ular, the last equality holds for every x.
    Recall the following properties of Fourier transform which are well known.

                                           29
30               CHAPTER 4. SOME FACTS FROM FOURIER ANALYSIS


     Plancherel formulas. If f ∈ L1 (IR) ∩ L2 (IR), then
                                      1 Z∞ ˆ 2
                            ||f ||22
                                   =        |f (ξ)| dξ,                              (4.3)
                                     2π −∞
                                        Z ∞
                                      1
                            (f, g) =        fˆ(ξ)ĝ(ξ)dξ.                            (4.4)
                                     2π −∞
By extension, the Fourier transform can be defined for any f ∈ L2 (IR). In
fact, the space L1 (IR) ∩ L2 (IR) is dense in L2 (IR). Hence, by isometry (up to
            1
the factor 2π ) we define F[f ] for any f ∈ L2 (IR), and (4.3) and (4.4) remain
true for any f, g ∈ L2 (IR).
 Fourier transform of a shifted function and scaled function.
                                             Z
                     F[f (x − k)](ξ) =           e−ixξ f (x − k)dx = e−ikξ fˆ(ξ).    (4.5)
                                                                          !
                                             Z
                                                                 1   ξ
         ∀a>0:          F[f (ax)](ξ) =           e−ixξ f (ax)dx = fˆ   .             (4.6)
                                                                 a   a

Convolution.
  We write h = f ∗ g for the convolution
                                        Z
                               h(x) =       f (x − t)g(t)dt,                         (4.7)

defined for any pair of functions f and g such that the RHS of this formula
exists a.e. It is well known that in the frequency domain we have ĥ(ξ) =
fˆ(ξ)ĝ(ξ), if all the Fourier transforms in this formula exist.
    Let f˜(x) = f¯(−x). Then

                                  F[f ∗ f˜](ξ) = |fˆ(ξ)|2 .                          (4.8)

Derivation.
  If f is such that |x|N |f (x)|dx < ∞, for some integer N ≥ 1, then
                   R


                        dN ˆ         Z
                             f (ξ) =   f (t)(−it)N exp(−iξt)dt.                      (4.9)
                        dξ N

                     |ξ|N |fˆ(ξ)|dξ < ∞, then
                 R
Conversely, if

                                (iξ)N fˆ(ξ) = F[f (N ) ](ξ).                        (4.10)

Moreover, the following lemma holds.
                                                                                       31


LEMMA 4.1 If fˆ(j) (ξ) are absolutely integrable for j = 0, . . . , N , then

                         |x|N |f (x)| → 0, as |x| → ∞.

Fourier series.
    Let f be a 2π-periodic function on IR. We shall write for brevity f ∈
Lp (0, 2π) if
                  f (x)I{x ∈ [0, 2π]} ∈ Lp (0, 2π), p ≥ 1.
Any 2π-periodic function f on IR, such that f ∈ L2 (0, 2π), can be represented
by its Fourier series convergent in L2 (0, 2π):

                                               ck eikx ,
                                           X
                               f (x) =
                                           k

where the Fourier coefficients are given by
                                1 Z 2π
                          ck =         f (x)e−ikx dx.
                               2π 0
Also, by periodicity, this holds for all x ∈ IR.
   The Poisson summation formula is given in the following theorem.
THEOREM 4.1 Let f ∈ L1 (IR). Then the series
                                       X
                              S(x) =       f (x + 2lπ)                              (4.11)
                                       l

converges a.e. and belongs to L1 (0, 2π). Moreover the Fourier coefficients of
S(x) are given by
                              1 ˆ
                        ck =    f (k) = F −1 [f ](−k).                  (4.12)
                             2π
Proof For the first part it is enough to prove that
                         Z 2π X
                                   |f (x + 2lπ)|dx < ∞.
                          0    l
                                                           Z ∞
This follows from the equality of this term to                   |f (x)|dx. For the second
                                                           −∞
part we have to compute the Fourier coefficients
                        1 Z 2π X
                              { f (x + 2lπ)}e−ikx dx.
                       2π 0    l
32           CHAPTER 4. SOME FACTS FROM FOURIER ANALYSIS


By exchanging summation and integration we arrive at
                          X 1 Z 2π
                                      f (x + 2lπ)e−ikx dx
                           2π 0
                           l
                        X 1 Z 2π(l+1)
                      =               f (u)e−iku du
                         l 2π   2πl

                         1 ˆ
                      =    f (k).
                        2π
                                                                        2

REMARK 4.1 A necessary and sufficient condition for S in (4.11) to be
equal to 1 a.e. is F −1 [f ](0) = 1 and F −1 [f ](k) = 0, k ∈ ZZ\{0}.

     More generally, if f ∈ L1 (IR) and T > 0, then l f (x + lT ) is almost
                                                      P

everywhere convergent and defines a T -periodic function whose Fourier co-
efficients are given by
           1ZTX                       2π     1   2π
                                                             
                 f (x + lT ) exp −ixk    dx = fˆ    k .              (4.13)
           T 0 l                      T      T   T
Chapter 5

Basic relations of wavelet
theory

5.1     When do we have a wavelet expansion?
Let us formulate in the exact form the conditions on the functions ϕ and ψ
which guarantee that the wavelet expansion (3.5) holds. This formulation is
connected with the following questions.

Question 5.1 How can we check that {ϕ0k } is an ONS?

Question 5.2 What are the sufficient conditions for (3.1) (nestedness of Vj )
to hold?
                                                                       S
Question 5.3 What are the conditions for (3.2) to hold, i.e. when is       j Vj
dense in L2 (IR)?

Question 5.4 Can we find a function ψ ∈ W0 such that {ψ0k , k ∈ ZZ} is an
ONB in W0 ?

  These questions will be answered in turn in this chapter. An answer to
Question 5.1 is given by the following lemma.

LEMMA 5.1 Let ϕ ∈ L2 (IR). The system of functions {ϕ0k , k ∈ ZZ} is an
ONS if and only if

                           |ϕ̂(ξ + 2πk)|2 = 1
                      X
                                                (a.e.).                 (5.1)
                       k


                                      33
34            CHAPTER 5. BASIC RELATIONS OF WAVELET THEORY


Proof Denote q = ϕ ∗ ϕ̃ where ϕ̃(x) = ϕ(−x). Then, by (4.8),
                                  |ϕ̂(ξ + 2πk)|2 =
                             X                        X
                                                             q̂(ξ + 2πk).
                              k                          k

As q̂ = |ϕ̂|2 ∈ L1 (IR), Theorem 4.1 shows that this series converges a.e., and
its Fourier coefficients are ck = F −1 [q̂](−k) = q(−k). The orthonormality
condition reads as
                                                                       (
                                                                           1 if k = l,
          Z
              ϕ(x − k)ϕ(x − l)dx = δkl ,            where δkl =
                                                                           0 if k 6= l,

                         ϕ(x)ϕ(x − k)dx = δ0k . This gives
                    R
or, equivalently,
                         Z                           Z
              q(k) =         ϕ̃(k − x)ϕ(x)dx =            ϕ(x)ϕ(x − k)dx = δ0k .

Using the Fourier expansion and Remark 4.1, we get
                                  ck eikξ =       q(k)e−ikξ =          δ0k e−ikξ = 1 (a.e.).2
     X                       X                X                    X
         q̂(ξ + 2πk) =
     k                        k               k                    k

    Let us now consider Question 5.2. We need to investigate the nestedness
of the spaces Vj .
PROPOSITION 5.1 The spaces Vj are nested,
                                      Vj ⊂ Vj+1 ,        j ∈ ZZ,
if and only if there exists a 2π-periodic function m0 (ξ), m0 ∈ L2 (0, 2π), such
that                                  !      !
                                    ξ      ξ
                       ϕ̂(ξ) = m0       ϕ̂         (a.e.).                  (5.2)
                                    2      2
   It suffices to prove this proposition for j = 0. First, prove that (5.2) is a
necessary condition. Assume that V0 ⊂ V1 . Hence, ϕ ∈ V1 . The system
                                 √
                                { 2ϕ(2x − k)}
is a basis in V1 , by definition of V1 . Therefore, there exists a sequence {hk },
such that
                           √ X
               ϕ(x) =        2    hk ϕ(2x − k),                              (5.3)
                                      k
                               √ Z
                                                     |hk |2 < ∞.
                                                   X
                    hk       =  2 ϕ(x)ϕ(2x − k)dx,
                                                                   k
5.1. WHEN DO WE HAVE A WAVELET EXPANSION?                                              35


Take the Fourier transform of both sides of (5.3). Then, by (4.5), (4.6)
                                         !               !       !
                  1 X                ξ                  ξ    ξ
         ϕ̂(ξ) = √     hk e−iξk/2 ϕ̂          = m0        ϕ̂            (a.e.)
                   2 k               2                  2    2

where
                                       1 X
                             m0 (ξ) = √     hk e−iξk .
                                        2 k
Note that m0 (ξ) is a 2π-periodic function belonging to L2 (0, 2π). Let us now
turn to the proof of the converse. We begin with the following lemma.
LEMMA 5.2 Let {ϕ0k } be an ONS. Every 2π-periodic function m0 satis-
fying (5.2) such that m0 ∈ L2 (0, 2π), also satisfies

                      |m0 (ξ)|2 + |m0 (ξ + π)|2 = 1          (a.e.).

Proof By (5.2)

                 |ϕ̂(2ξ + 2πk)|2 = |m0 (ξ + πk)|2 |ϕ̂(ξ + πk)|2 .

Summing up in k and using the fact that {ϕ0k } is an ONS and m0 is 2π-
periodic we get by Lemma 5.1 that a.e.
          ∞
                |m0 (ξ + πk)|2 |ϕ̂(ξ + πk)|2
          X
  1 =
         k=−∞
          ∞
                |m0 (ξ + 2πl)|2 |ϕ̂(ξ + 2πl)|2
          X
     =
         l=−∞
            ∞
                  |m0 (ξ + 2πl + π)|2 |ϕ̂(ξ + 2πl + π)|2
            X
         +
          l=−∞
          ∞                                  ∞
                |ϕ̂(ξ + 2πl)|2 |m0 (ξ)|2 +          |ϕ̂(ξ + 2πl + π)|2 |m0 (ξ + π)|2
          X                                  X
     =
         l=−∞                                l=−∞
                  2                2
     = |m0 (ξ)| + |m0 (ξ + π)| .                                                   2

    A consequence of this lemma is that such a function m0 is bounded. Let
us now finish the proof of Proposition 5.1. It is clear that if we denote
by V̂0 (respectively V̂1 ) the set of Fourier transforms of the functions of V0
(respectively V1 ) we have:

             V̂0 = {m(ξ)ϕ̂(ξ) : m(ξ) 2π-periodic, m ∈ L2 (0, 2π)},
36          CHAPTER 5. BASIC RELATIONS OF WAVELET THEORY



          V̂1 = {m(ξ/2)ϕ̂(ξ/2) : m(ξ) 2π-periodic, m ∈ L2 (0, 2π)}.
    Condition (5.2) implies that every function in V̂0 has the form m(ξ)m0 (ξ/2)
ϕ̂(ξ/2) and belongs to V̂1 . In fact m(2ξ)m0 (ξ) is a 2π-periodic function be-
longing to L2 (0, 2π) since m ∈ L2 (0, 2π), and m0 is bounded due to the
previous lemma.

REMARK 5.1 It is always true that
                                  \
                                       Vj = {0},
                                   j


where 0 denotes the zero function (see Cohen & Ryan (1995), Theorem 1.1,
p. 12).

    The answer to Question 5.3. will be given in Chapter 8. It will be shown
                                                                 S
that if ϕ is a father wavelet, i.e. if (5.1) and (5.2) hold, then j Vj is dense
in L2 (IR) whenever ϕ satisfies a mild integrability condition (see Corollary
8.1).
    The answer to Question 5.4 is given in

LEMMA 5.3 Let ϕ be a father wavelet which generates a MRA of L2 (IR)
and let m0 (ξ) be a solution of (5.2). Then the inverse Fourier transform ψ
of                                        !      !
                                        ξ      ξ
                           ψ̂(ξ) = m1       ϕ̂     ,                    (5.4)
                                        2      2

where m1 (ξ) = m0 (ξ + π)e−iξ , is a mother wavelet.

REMARK 5.2 In other words, the lemma states that {ψ0k } is an ONB in
W0 .

Proof We need to prove the following 3 facts.

  (i) {ψ0k } is an ONS, i.e. by Lemma 5.1

                               |ψ̂(ξ + 2πk)|2 = 1
                          X
                                                    (a.e.).
                           k
5.1. WHEN DO WE HAVE A WAVELET EXPANSION?                                                          37


     Let us show this equality. With Lemma 5.2 and 2π-periodicity of m0
     we obtain
                                                             !2                   !2
                                                  ξ                  ξ
          |ψ̂(ξ + 2πk)|2 =
     X                               X
                                           m1       + πk          ϕ̂   + πk
      k                               k           2                  2
                                                                  !2                   !2
                                     X            ξ                       ξ
                             =             m0       + π + πk           ϕ̂   + πk
                                      k           2                       2
                                       ∞
                                                                          !2                        !2
                                      X               ξ                              ξ
                             =               m0         + π + 2πl + π             ϕ̂   + 2πl + π
                                     l=−∞             2                              2
                                          ∞
                                                                         !2                 !2
                                          X                ξ                     ξ
                                     +           m0          + π + 2πl        ϕ̂   + 2πl
                                          l=−∞             2                     2
                                      ∞
                                                               !2
                                      Xξ
                             =      ϕ̂   + 2πk                      =1        (a.e.).
                               k=−∞    2

 (ii) {ψ0k } is orthogonal to {ϕ0k }, i.e.
                             Z
                                 ϕ(x − k)ψ(x − l)dx = 0,                 ∀k, l.

     It suffices to show that
                                 Z
                                      ϕ(x)ψ(x − k)dx = 0,              ∀k,

     or, equivalently,
                                     g(k) = ϕ ∗ ψ̃(k) = 0,          ∀k,
     where g = ϕ ∗ ψ̃, ψ̃(x) = ψ(−x). The Fourier transform of g is

                                             ĝ = ϕ̂ψ = ϕ̂ψ̂.
                                                      b̃


     Applying the Poisson summation formula (Theorem 4.1) to f = ĝ, we
                                                             P
     get that the Fourier coefficients of the function S(ξ) = k ĝ(ξ + 2πk)
     are F −1 [ĝ](−k) = g(−k), k ∈ ZZ. Thus, the condition g(k) = 0, ∀k, is
     equivalent to S(ξ) = 0 (a.e.), or
                      X
                             ϕ̂(ξ + 2πk)ψ̂(ξ + 2πk) = 0                    (a.e.).               (5.5)
                         k
38         CHAPTER 5. BASIC RELATIONS OF WAVELET THEORY


     It remains to check (5.5). With our definition of ψ̂, and using (5.2), we
     get
              X
                   ϕ̂(ξ + 2πk)ψ̂(ξ + 2πk)
               k
                                   !                 !                 !             !
                   X ξ         ξ         ξ         ξ
              =   ϕ̂   + πk m0   + πk ϕ̂   + πk m1   + πk
                k    2         2         2         2
                                    !2                   !                    !
                   X       ξ                    ξ         ξ
              =         ϕ̂   + πk          m0     + πk m1   + πk
                    k      2                    2         2
                          !            !                 !                 !
                         ξ    ξ      ξ        ξ
              = m0         m1   + m0   + π m1   +π .
                         2    2      2        2

     Thus (5.5) is equivalent to

                   m0 (ξ)m1 (ξ) + m0 (ξ + π)m1 (ξ + π) = 0                 (a.e.).   (5.6)

     It remains to note that (5.6) is true, since

        m0 (ξ)m1 (ξ) + m0 (ξ + π)m1 (ξ + π)
                     = m0 (ξ)eiξ m0 (ξ + π) + m0 (ξ + π)eiξ+iπ m0 (ξ) = 0.

(iii) Any function f from V1 has a unique representation

                                                               c0k ψ(x − k)
                                   X                     X
                         f (x) =       ck ϕ(x − k) +
                                   k                      k


     where ck , c0k are coefficients such that                  2
                                                         k |ck | < ∞,
                                                                           0 2
                                                                       k |ck | < ∞.
                                                     P                P


   In fact, any f ∈ V1 has a √   unique representation in terms of the ONB
{ϕ1k , k ∈ ZZ}, where ϕ1k (x) = 2ϕ(2x − k). In the Fourier domain one can
express this as in the proof of Proposition 5.1:
                                           !     !
                                    ξ    ξ
                          fˆ(ξ) = q   ϕ̂                      (a.e.)                 (5.7)
                                    2    2

where
                                      1 X −iξk
                              q(ξ) = √     qk e .
                                       2 k
5.1. WHEN DO WE HAVE A WAVELET EXPANSION?                                                    39


Now, (5.2) and (5.4) entail
                              !                           !2           !
                           ξ                          ξ           ξ
                     m0      ϕ̂(ξ) =             m0            ϕ̂   ,
                           2                          2           2
                              !                           !2           !
                           ξ                          ξ           ξ
                     m1      ψ̂(ξ) =             m1            ϕ̂   .
                           2                          2           2

By summing up these two equalities one gets
                                !              !2                 ! 2
                            ξ     ξ                           ξ
                         ϕ̂     m0                   + m1             
                            2      2                           2
                                  !                   !
                                ξ            ξ
                   = m0           ϕ̂(ξ) + m1   ψ̂(ξ)                   (a.e.).             (5.8)
                                2            2

Note that                                 !2                   2
                                      ξ              ξ
                           m1                  = m0 ( + π) .
                                      2              2
Using this and Lemma 5.2, we get from (5.8)
                     !                !                   !
                 ξ                ξ            ξ
              ϕ̂         = m0       ϕ̂(ξ) + m1   ψ̂(ξ)                     (a.e.).
                 2                2            2

Substitute this into (5.7):
                     !            !                   !            !
                   ξ    ξ           ξ    ξ
         fˆ(ξ) = q   m0   ϕ̂(ξ) + q   m1   ψ̂(ξ)                                 (a.e.).
                   2    2           2    2

By passing back to the time domain, we deduce that f has the unique rep-
resentation in terms of {ϕ0k } and {ψ0k }.                            2

REMARK 5.3 The statement of Lemma 5.3 is true if we choose m1 in
more general form
                  m1 (ξ) = θ(ξ)m0 (ξ + π)e−iξ ,
where θ(ξ) is an arbitrary π-periodic function such that |θ(ξ)| = 1. One can
easily check it as an exercise.
40           CHAPTER 5. BASIC RELATIONS OF WAVELET THEORY


5.2       How to construct mothers from a father
Let us draw some conclusions from the answers to Questions 5.1 to 5.4.
    Conclusion 1: As soon as we know the father wavelet ϕ(x), and hence
ϕ̂(ξ), we can immediately construct a mother wavelet ψ with the help of
Lemmas 5.2 and 5.3. Indeed, from (5.2) we have m0 (ξ) = ϕ̂(2ξ)/ϕ̂(ξ) and,
from (5.4),
                                                !           !
                                        ξ               ξ
                         ψ̂(ξ) = m0       + π e−iξ/2 ϕ̂   .                        (5.9)
                                        2               2

The mother wavelet ψ is found by the inverse Fourier transform of ψ̂.
   Conclusion 2: It is still not clear how to find a father wavelet ϕ, but
we proved some useful formulae that may help. These formulae are 1

                                   |ϕ̂(ξ + 2πk)|2 = 1,
                              X

                               k
                                            !       !
                                           ξ    ξ
                            ϕ̂(ξ) = m0       ϕ̂   ,
                                           2    2

where
                            |m0 (ξ)|2 + |m0 (ξ + π)|2 = 1,
and m0 (ξ) is 2π-periodic, m0 ∈ L2 (0, 2π).
    It will be shown in Proposition 8.6 that  for all reasonable examples of
father wavelets we should have |ϕ̂(0)| = | ϕ(x)dx| = 1, which yields imme-
                                            R

diately
                                 m0 (0) = 1
(cf. (5.2)).
    By adding this condition to the previous ones, we obtain the following
set of relations:

                                   |ϕ̂(ξ + 2πk)|2 = 1,
                              X
                                                                                  (5.10)
                               k
                                            !       !
                                           ξ    ξ
                            ϕ̂(ξ) = m0       ϕ̂   ,                               (5.11)
                                           2    2
   1
     In the sequel we assume that ϕ̂ and m0 are continuous, so that we drop (a.e.) in all
the relations.
5.2. HOW TO CONSTRUCT MOTHERS FROM A FATHER                                       41


and
                   |m0 (ξ)|2 + |m0 (ξ + π)|2 = 1,
                                                              
                                                       
                                                       
                   m0 is 2π-periodic, m0 ∈ L2 (0, 2π),                       (5.12)
                                                       
                   m0 (0) = 1.                         

    The relations (5.9) – (5.12) provide a set of sufficient conditions to con-
struct father and mother wavelets in the Fourier domain. Their analogues in
time-domain have the following form (recall that m0 (ξ) = √12 k hk e−ikξ ).
                                                                P


LEMMA 5.4 The mother wavelet satisfies
                        √ X
                 ψ(x) = 2      λk ϕ(2x − k),                                 (5.13)
                                        k


where λk = (−1)k+1 h̄1−k . For the father wavelet
                                 √ X
                         ϕ(x) = 2       hk ϕ(2x − k),                        (5.14)
                                        k

we have the relations           P                      )
                                   h̄k hk+2l = δ0l ,
                                  kP
                                √1
                                                                             (5.15)
                                  2   k hk = 1.

Proof We have
                     !
              ξ             1 X
         m0     +π       = √     hk e−ik(ξ/2+π)
              2              2 k
                            1 X                    1 X
                         = √     h̄k eik(ξ/2+π) = √     h̄k (−1)k eikξ/2 .
                             2 k                    2 k

Hence, by (5.9)
              √ X
                                                  !
                                         1     ξ
      ψ̂(ξ) =  2     h̄k (−1)k ei(k−1)ξ/2 ϕ̂
                 k                       2     2
              √ X
                                                   !
                                  0       0  1   ξ
            =  2     h̄1−k0 (−1)k +1 e−ik ξ/2 ϕ̂                  (k 0 = 1 − k)
                 k 0                         2   2
              √ X
                                        !
                                1     ξ
            =  2     λk e−ikξ/2 ϕ̂        .
                 k              2     2

Taking the inverse Fourier transform of both sides, we get (5.13).
42              CHAPTER 5. BASIC RELATIONS OF WAVELET THEORY


    We now prove the first relation in (5.15). It is the time-domain version
of the equality in Lemma 5.2. In fact, the equality

                     m0 (ξ)m0 (ξ) + m0 (ξ + π)m0 (ξ + π) = 1,

reads as
                    1X                   0      1X                   0       0
           1 =             h̄k hk0 e−iξ(k −k) +        h̄k hk0 e−iξ(k −k)−i(k −k)π
                    2 k,k0                      2 k,k0
                    1X                   0              0
                =          h̄k hk0 e−iξ(k −k) [1 + e−i(k −k)π ]
                    2 k,k0
                    ∞ X
                              h̄k hk+2l e−2iξl .
                    X
                =
                    l=−∞ k


The second relation in (5.15) is straightforward since m0 (0) = 1 (cf. (5.12).
2


5.3        Additional remarks
REMARK 5.4 In some works on wavelets one finds (5.13) in a different
form, with λk = (−1)k h̄1−k , or with other definition of λk which can be
obtained for a certain choice of a function θ(ξ) (see Remark 5.3). This again
reflects the fact that the mother wavelet is not unique, given a father wavelet.

REMARK 5.5 From (5.12) we deduce |m0 (π)|2 = 1−|m0 (0)|2 = 0. Hence,

                                         m0 (π) = 0,                                 (5.16)

which, in view of (5.9), entails

                                         ψ̂(0) = 0.                                  (5.17)

In other words,                      Z
                                          ψ(x)dx = 0.                                (5.18)

Note that ϕ(x)dx 6= 0, and it is always possible to impose ϕ(x)dx = 1;
            R                                                                R

this last condition is satisfied for all examples of wavelets considered below.
More discussion on these conditions is provided in Chapter 8.
5.3. ADDITIONAL REMARKS                                                   43


   It is natural to ask the following reverse question: How to construct fa-
thers from a mother? To be more precise, let ψ be an L2 (IR) function such
that
                      {2j/2 ψ(2j x − k), j ∈ ZZ, k ∈ ZZ},
is an ONB of L2 (IR). Is ψ the mother wavelet of a MRA? At this level of
generality the answer is no. But under mild regularity conditions, as studied
in Lemarié-Rieusset(1993, 1994) and Auscher (1992), the question can be
answered positively.
44   CHAPTER 5. BASIC RELATIONS OF WAVELET THEORY
Chapter 6

Construction of wavelet bases

In Chapter 5 we derived general conditions on the functions ϕ and ψ that
guarantee the wavelet expansion (3.5). It was shown that to find an ap-
propriate pair (ϕ, ψ) it suffices, in fact, to find a father wavelet ϕ. Then
one can derive a mother wavelet ψ, given ϕ. In this chapter we discuss two
concrete approaches to the construction of father wavelets. The first ap-
proach is starting from Riesz bases, and the second approach is starting from
a function m0 . For more details on wavelet basis construction we refer to
Daubechies (1992),Chui(1992a, 1992b), Meyer (1993), Young (1993), Cohen
& Ryan (1995), Holschneider (1995), Kahane & Lemarié-Rieusset (1995),
Kaiser (1995).


6.1     Construction starting from Riesz bases
DEFINITION 6.1 Let g ∈ L2 (IR). The system of functions {g(· − k), k ∈
ZZ} is called Riesz basis if there exist positive constants A and B such that
for any finite set of integers Λ ⊂ ZZ and real numbers λi , i ∈ Λ, we have

                            λ2i ≤ ||         λi g(· − i)||22 ≤ B         λ2i .
                      X                X                           X
                  A
                      i∈Λ              i∈Λ                         i∈Λ


   In words, for the function belonging to the space spanned by the Riesz
basis {g(· − k), k ∈ ZZ} the L2 norm is equivalent to the l2 norm of the
coefficients (i.e. the system behaves approximately as an orthonormal basis).



                                               45
46                      CHAPTER 6. CONSTRUCTION OF WAVELET BASES


PROPOSITION 6.1 Let g ∈ L2 (IR). The system of functions
{g(· − k), k ∈ ZZ} is a Riesz basis if and only if there exist A > 0, B > 0
such that

                                    |ĝ(ξ + 2πk)|2 ≤ B
                               X
                          A≤                                         (a.e.).             (6.1)
                                k

     In this case we call g(·) the generator function , and we call
                                                                  !1/2
                                                              2
                                          X
                               Γ(ξ) =          |ĝ(ξ + 2πk)|
                                           k

the overlap function of the Riesz basis.

Proof Using the Plancherel formula and the fact that Γ is periodic we have
      Z
                                         1 Z X
                    λk g(x − k)|2 dx =             λk ĝ(ξ)e−ikξ |2 dξ
              X
          |                                  |
              k∈Λ                       2π     k∈Λ
                                         1 Z X
                                      =      |     λk e−ikξ |2 |ĝ(ξ)|2 dξ
                                        2π     k∈Λ
                                         1 X Z 2π(l+1) X
                                      =                |     λk e−ikξ |2 |ĝ(ξ)|2 dξ
                                        2π l 2πl         k∈Λ
                                              Z 2π X
                                         1
                                                         λk e−ikξ |2 |ĝ(ξ + 2πl)|2 dξ
                                           X
                                      =           |
                                        2π l 0 k∈Λ
                                         1 Z 2π X
                                      =        |    λk e−ikξ |2 |Γ(ξ)|2 dξ.
                                        2π 0 k∈Λ

Then it is clear that if (6.1) holds, the function g generates a Riesz basis.
The proof of the inverse statement is given in Appendix D.                    2
   The idea how to construct a father wavelet is the following. Pick a gen-
erator function g(·). It is not necessarily a father wavelet, since a Riesz
basis is not necessarily an orthonormal system. But it is straightforward to
orthonormalize a Riesz basis as follows.

LEMMA 6.1 Let {g(· − k), k ∈ ZZ} be a Riesz basis, and let ϕ ∈ L2 (IR) be
a function defined by its Fourier transform
                                                    ĝ(ξ)
                                          ϕ̂(ξ) =         ,
                                                    Γ(ξ)
6.1. CONSTRUCTION STARTING FROM RIESZ BASES                                        47


where                                                           !1/2
                                                            2
                                           X
                          Γ(ξ) =                |ĝ(ξ + 2πk)|
                                            k

is the overlap function of the Riesz basis. Then {ϕ(· − k), k ∈ ZZ} is ONS.

Proof Use Parseval’s identity (4.4) and the fact that the Fourier transform
of ϕ(x − k) is e−ikξ ϕ̂(ξ) (see (4.5)). This gives
            Z
                                       1 Z −i(k−l)ξ
                ϕ(x − k)ϕ(x − l)dx =       e        |ϕ̂(ξ)|2 dξ
                                      2π
                                            ∞  Z 2π(m+1) −i(k−l)ξ
           1 Z −i(k−l)ξ |ĝ(ξ)|2        1 X                 e
        =      e           2
                                 dξ =                                |ĝ(ξ)|2 dξ
          2π             Γ (ξ)         2π m=−∞ 2πm            Γ2 (ξ)
                              ∞
           1 Z 2π e−i(k−l)ξ X
        =                         |ĝ(ξ + 2πm)|2 dξ
          2π 0      Γ2 (ξ) m=−∞
           1 Z 2π −i(k−l)ξ
        =         e        dξ = δkl ,
          2π 0

where we used the fact that Γ(ξ) is 2π-periodic.                                   2

EXAMPLE 6.1 B-splines. Set

                                 g1 (x) = I{x ∈ (0, 1]},

and consider the generator function

                                 gN = g1 ∗ g1 ∗ . . . ∗ g1 .
                                           |        {z      }
                                                N −times


The function gN is called B-spline. Let δf (x) = f (x) − f (x − 1). The N -th
iteration is
                                N
                                      !
                      N             N
                                        (−1)k f (x − k).
                               X
                     δ f (x) =
                               k=0 k

Then the generator function gN is given by

                                                   xN −1
                                     "                          #
                                 N
                             δ           I{x > 0}          .                   (6.2)
                                                  (N − 1)!
48               CHAPTER 6. CONSTRUCTION OF WAVELET BASES


This formula can be proved by recurrence. In fact, observe that the Fourier
transform of gN is
                                                              !N
                                             −iξ/2 sin(ξ/2)
                       ĝN (ξ) =            e                               (6.3)
                                                     (ξ/2)
                                           1 − e−iξ
                                   =                ĝN −1 (ξ).
                                              iξ

Applying the inverse Fourier transform to the last expression and using (4.5),
(4.10) we see that

                d
                  gN (x) = gN −1 (x) − gN −1 (x − 1) = δgN −1 (x).
               dx
Hence                        Z x                       Z x
                  gN (x) =         δgN −1 (t)dt = δ          gN −1 (t)dt.
                              0                          0
                                       0
Observing that g1 = δI{x > 0} x0! we arrive after N − 1 iterations at (6.2).
Clearly, supp gN is of the length N . The first two functions gN are shown in
Figure 6.1.




        Figure 6.1: The first 2 elements of the B-spline Riesz basis.

    If N = 1, then g = g1 is the Haar father wavelet. The function g2 is called
piecewise-linear B-spline.
6.1. CONSTRUCTION STARTING FROM RIESZ BASES                                                        49


PROPOSITION 6.2 The system {gN (· − k), k ∈ ZZ}, for every N ≥ 1, is
a Riesz basis.

Proof The Fourier transform of gN is given in (6.3). The series

                                               |ĝN (ξ + 2πk)|2
                                        X

                                          k

converges uniformly to some bounded function, since it is 2π-periodic, and
for ξ ∈ [0, 2π]
                                                       2N
                                              ξ
                                    sin       2
                                                + πk                  1                 1
         |ĝN (ξ + 2πk)|2 =               ξ                   ≤             2N    ≤          .
                                          2
                                            + πk                  ξ
                                                                    + πk              (πk)2N
                                                                  2

This entails for some B > 0 the condition

                                    |ĝN (ξ + 2πk)|2 ≤ B,
                                X
                                                                     ∀ξ.
                                k


Now, since sin(x)
              x
                  is decreasing on [0, π/2], we get (if ξ ∈ [0, π])
           
               ξ
                         2N
                                                   2N                  2N           √ !2N
   X sin       2
                 + πk             sin(ξ/2)                sin(π/4)                 2 2
           ξ                    ≥                       ≥                     =           .      (6.4)
    k      2
             + πk                   (ξ/2)                    π/4                    π

Quite similarly, for ξ ∈ [π, 2π] we get the bound
            
                ξ
                          2N              
                                               ξ
                                                       2N
                                                                              2N         √ !2N
    X sin       2
                  + πk              sin        2
                                                 −π             sin(ξ 0 /2)             2 2
            ξ                   ≥         ξ                   =                    ≥           ,
     k      2
              + πk                        2
                                            −π                    (ξ 0 /2)               π

where ξ 0 = 2π − ξ ∈ [0, π], and we used the same argument as in (6.4). Thus,
we proved the existence of A > 0 such that

                                          |ĝN (ξ + 2πk)|2 ≥ A.
                                    X

                                    k

Hence, (6.1) follows.                                                   2
   Let, for example, N = 2 (piecewise-linear B-spline generator function).
Then                                           !2
                                  −iξ sin(ξ/2)
                       ĝ2 (ξ) = e                ,
                                         ξ/2
50                  CHAPTER 6. CONSTRUCTION OF WAVELET BASES


and the sum Γ2 (ξ) can be calculated explicitly (Daubechies (1992, Chap. 5))
:                                                4
                                         ξ
                                 X sin 2 + πk          2 + cos ξ
                |ĝ(ξ + 2πk)|2 =
            X
                                       ξ             =           .
             k                   k     2
                                         + πk             3
Hence, the father wavelet ϕ has the Fourier transform
                                  s                                       !2
                                         3           sin(ξ/2)
                       ϕ̂(ξ) =                  e−iξ                           .
                                      2 + cos ξ         ξ/2
It is called Battle-Lemarié father wavelet. How does the father wavelet
                                                                    q look
                                                                         3
like? Let us denote by ak the Fourier coefficients of the function 2+cos   ξ
                                                                             .
These coefficients can be calculated numerically. Then
                              s
                                      3
                                                 ak e−ikξ ,
                                               X
                                             =
                                   2 + cos ξ   k

where an infinite number of ak ’s are nonzero. Thus, ϕ̂(ξ) is an infinite sum
                                                                         !2
                                   X
                                           −i(k+1)ξ       sin(ξ/2)
                        ϕ̂(ξ) =         ak e                                  ,
                                    k                        ξ/2

and                                        X
                                  ϕ(x) =           ak g2 (x − k).
                                               k
This father wavelet has the following properties:
                                                   q
                                                         3
      · it is symmetric: ak = a−k , since              2+cos ξ
                                                               is even,

      · it is piecewise linear,
      · supp ϕ = IR.
   The Battle-Lemarié father wavelet is shown in Figure 6.2. Using the
expression for ϕ̂, we find now the function m0 (ξ):
                                                              s
                              ϕ̂(2ξ)             ξ                 2 + cos ξ
                     m0 (ξ) =        = e−iξ cos2                              .
                               ϕ̂(ξ)             2                 2 + cos 2ξ
Then                                                               s
                                               −iξ           2 ξ       2 − cos ξ
                   m1 (ξ) = m0 (ξ + π)e              = sin                        ,
                                                              2        2 + cos 2ξ
6.1. CONSTRUCTION STARTING FROM RIESZ BASES                                                51




             Figure 6.2: Battle-Lemarié father wavelet (N=2).

and, by (5.4),
                                             s
                                sin4 (ξ/4)
                  !       !                                    s
                 ξ    ξ                          2 − cos ξ/2            3
   ψ̂(ξ) = m1      ϕ̂         =                                                 e−iξ/2 .
                 2    2           (ξ/4)2          2 + cos ξ        2 + cos(ξ/2)
The inverse Fourier transform of this function gives the mother wavelet ψ.
Again, one can calculate the Fourier coefficients of ψ only numerically. It is
clear that
    · ψ(x) is symmetric around the point x = 1/2,
    · ψ is piecewise-linear, since one can write
                                             a0k g2 (x − k),
                                         X
                                ψ(x) =
                                         k

     where a0k are some coefficients,
    · supp ψ = IR.
   The Battle-Lemarié mother wavelet is shown in Figure 6.3. For N > 2
Battle-Lemarié wavelets are smoother, but they look in general similar to
the case N = 2.
52               CHAPTER 6. CONSTRUCTION OF WAVELET BASES




             Figure 6.3: Battle-Lemarié mother wavelet (N=2).

6.2     Construction starting from m0
A disadvantage of the Riesz basis approach is that, except for the Haar case,
one cannot find in this way compactly supported father and mother wavelets.
Compactly supported wavelets are desirable from a numerical point of view.
This is why we consider the second approach which allows to overcome this
problem. Pick a function m0 satisfying (5.12). By (5.2)
                         !       !                !        !   !
                        ξ    ξ                ξ    ξ    ξ
           ϕ̂(ξ) = m0     ϕ̂         = m0       m0   ϕ̂            = ...
                        2    2                2    4    4
    Continuing this splitting infinitely, and assuming that ϕ̂(0) = 1 (see Sec-
tion 5.2 and Remark 5.5), we arrive at the representation
                                       ∞
                                                       !
                                       Y          ξ
                             ϕ̂(ξ) =         m0                            (6.5)
                                       j=1        2j

provided the infinite product converges. Thus we could construct the father
wavelet. However, this rises several questions.
Question 6.1: When does the infinite product (6.5) converge pointwisely?
6.2. CONSTRUCTION STARTING FROM M0                                              53


Question 6.2: If this product converges, does ϕ belong to L2 (IR)?
Question 6.3: If ϕ is constructed in this way, is {ϕ(· − k), k ∈ ZZ} an
ONS?
   The following lemma answers Question 6.1.

LEMMA 6.2 If m0 (ξ) is Lipschitz continuous, then the infinite product in
(6.5) converges uniformly on any compact set in IR.

Proof. Since m0 (0) = 1,
                        ∞                     ∞
                                      !                       !!
                        Y        ξ            Y          ξ
                            m0            =          1+u j         ,
                     j=1         2j           j=1        2

where               !                   !
                ξ                  ξ                      LK
              u j       = m0                − m0 (0) ≤        ,    |ξ| ≤ K.
                2                  2j                      2j
Here L is the Lipschitz constant and K > 0 is arbitrary. Hence, the infinite
product converges uniformly on every compact set of ξ’s. 2
    The examples of m0 (ξ) used for the construction of ϕ̂(ξ) in practice are
all of the form of trigonometric polynomials, that is
                                           N1
                                       1 X
                             m0 (ξ) = √        hk e−ikξ                       (6.6)
                                        2 k=N0

where N0 , N1 ∈ ZZ are fixed, and
                        N1
                    1 X
                   √        hk = 1,                 (⇐⇒ m0 (0) = 1).          (6.7)
                     2 k=N0

  For this choice of m0 the conditions of Lemma 6.2 are obviously satisfied.
Moreover, the following result holds, answering Questions 6.2 and 6.3.

LEMMA 6.3 Let m0 be of the form (6.6), satisfying (6.7) and

                            |m0 (ξ)|2 + |m0 (ξ + π)|2 = 1.                    (6.8)

Assume also that there exists a compact set K in IR, containing a neighbor-
hood of 0, such that
54                CHAPTER 6. CONSTRUCTION OF WAVELET BASES


         k I{ξ + 2kπ ∈ K} = 1
       P
 (1)                                (a.e.),

 (2) m0 (2−j ξ) 6= 0,   ∀ ξ ∈ K,      ∀ j ≥ 1.
Then the function ϕ̂(ξ) in (6.5) is the Fourier transform of a function ϕ ∈
L2 (IR) such that
  (i) supp ϕ ⊆ [N0 , N1 ],
and
 (ii) {ϕ(· − k), k ∈ ZZ} is an ONS in L2 (IR).

  This Lemma is due to Cohen. For the proof see Cohen & Ryan (1995) or
Daubechies (1992, Chap. 6).                                        2
REMARK 6.1 The conditions (1) and (2) of Lemma 6.3 are obviously
fulfilled if K = [−π, π] and m0 (ξ) 6= 0 for |ξ| ≤ π2 .
Note that condition (6.8), in view of (6.6), may be written in terms of
{hN0 , . . . , hN1 }. Thus, we have only 2 restrictions, (6.7) and (6.6), on N1 −
N0 + 1 coefficients. If N1 − N0 + 1 > 2, then there exist many possible
solutions ϕ̂, all giving father wavelets.
    How to choose {hk }k=N0 ,...,N1 ? First, note that every solution ϕ has com-
pact support in view of Lemma 6.3 (i). This is a computational advantage
with respect to the Riesz basis approach. Another advantage is that one can
choose {hk } so that the father wavelet ϕ as well as the mother wavelet ψ:
      · have a prescribed number of vanishing moments,

      · have a prescribed number of continuous derivatives.
    Note that the number of vanishing moments is linked to the rate of ap-
proximation of the wavelet expansion as will be shown in Chapter 8. This is
the reason why it is important to be controlled.
    Let us discuss the conditions on {hk }, guaranteeing a prescribed number
of vanishing moments. Consider first the father wavelets.

LEMMA 6.4 Let the conditions of Lemma 6.3 be satisfied, and let
                         N1
                               hk k l = 0,
                         X
                                                 l = 1, . . . , n.         (6.9)
                        k=N0
6.2. CONSTRUCTION STARTING FROM M0                                                    55


Then for ϕ defined as the inverse Fourier transform of (6.5) we have
                          Z
                              ϕ(x)xl dx = 0,         l = 1, . . . , n.             (6.10)

Proof Condition (6.9) implies in view of the definition of m0 (ξ) in (6.6):
                                 (l)
                              m0 (0) = 0,        l = 1, . . . , n.
Since for any ϕ̂ satisfying (6.5) we have
                                               !           !
                                               ξ    ξ
                                    ϕ̂(ξ) = ϕ̂   m0   ,
                                               2    2
therefore also
                              ϕ̂(l) (0) = 0,     l = 1, . . . , n.                 (6.11)
Note that ϕ̂(ξ) is n times continuously differentiable at ξ = 0, which follows
from the fact that ϕ ∈ L2 (IR) and ϕ(x) is compactly supported (cf. (4.9)).
Now, (6.10) is just a rewriting of (6.11).                                  2
   Consider mother wavelets now. That is, take the function ψ which is the
inverse Fourier transform of
                                                 !
                                           ξ
                          ψ̂(ξ) = m0         + π e−iξ/2 ϕ̂(ξ/2)
                                           2
where ϕ̂(ξ) is defined by (6.5), or, in time domain (cf. Lemma 5.4):
                     √ X
             ψ(x) = 2       λk ϕ(2x − k),      λk = (−1)k+1 h̄1−k .                (6.12)
                                k

LEMMA 6.5 Let the conditions of Lemma 6.3 be satisfied. Then ψ ∈
L2 (IR), ψ is compactly supported, and
                              1              1
                                                                          
                     supp ψ ⊆ (1 − N1 + N0 ), (1 − N0 + N1 )                       (6.13)
                              2              2
If, in addition,
                        1−N
                         X0
                 l
                                (−1)k h̄k (1 − k)l = 0,
        X
             λk k =                                            l = 1, . . . , n,   (6.14)
         k             k=1−N1

then                      Z
                              ψ(x)xl dx = 0,         l = 1, . . . , n.             (6.15)
56               CHAPTER 6. CONSTRUCTION OF WAVELET BASES


Proof First, ψ ∈ L2 (IR), since we have ϕ ∈ L2 (IR) (Lemma 6.3), (6.12) and
the definition of m0 (ξ). To prove (6.13) note that in (6.12) we have only a
finite number of summands such that:
                  N0 ≤ 1 − k ≤ N1 (only these λk 6= 0),
                                                                      (6.16)
                  N0 ≤ 2x − k ≤ N1 (supp ϕ ⊆ [N0 , N1 ]).

From (6.16) one gets:

                      1 − N1 + N0 ≤ 2x ≤ 1 − N0 + N1 ,

which gives (6.13).
   Let us show (6.15). The equalities (6.15) are equivalent to:

                        ψ̂ (l) (0) = 0,    l = 1, . . . , n.          (6.17)

Now,                                       !        !
                                          ξ    ξ
                          ψ̂(ξ) = m1        ϕ̂   ,                    (6.18)
                                          2    2
where
                                             1 X
                  m1 (ξ) = m0 (ξ + π)e−iξ = √     λk e−ikξ ,
                                              2 k
and (6.14) entails:
                          (l)
                        m1 (0) = 0,        l = 1, . . . , n.          (6.19)
Using this and (6.18) one arrives at (6.17).                              2

REMARK 6.2 Clearly, (6.14) can be satisfied only if n + 1 is smaller than
the degree of the polynomial m0 (ξ), since (6.14) contains n equalities, and
one has also the equality (6.7) on the coefficients of m0 (ξ).

    The problem of providing a prescribed number of continuous derivatives
of ϕ and ψ is solved in a similar way: one should guarantee the existence of
certain moments of ϕ̂(ξ) and ψ̂(ξ).
Chapter 7

Compactly supported wavelets

7.1     Daubechies’ construction
The original construction of compactly supported wavelets is due to Daubechies
(1988). Here we sketch the main points of Daubechies’ theory. We are in-
terested to find the exact form of functions m0 (ξ), which are trigonometric
polynomials, and produce father ϕ and mother ψ with compact supports
such that, in addition, the moments of ϕ and ψ of order from 1 to n vanish.
This property is necessary to guarantee good approximation properties of
the corresponding wavelet expansions, see Chapter 8.
    We have seen that the conditions of Lemma 6.3, together with (6.9) and
(6.14) are sufficient for these purposes. So, we will assume that these condi-
tions are satisfied in this section. An immediate consequence of (6.14) is the
following

COROLLARY 7.1 Assume the conditions of Lemma 6.3 and (6.14). Then
m0 (ξ) factorizes as
                                             !n+1
                                  1 + e−iξ
                       m0 (ξ) =                     L(ξ),              (7.1)
                                     2

where L(ξ) is a trigonometric polynomial.

Proof The relation (6.14) implies (6.19) which, in view of the definition of
m1 (ξ) is equivalent to
                         (l)
                       m0 (π) = 0,        l = 1, . . . , n.

                                     57
58               CHAPTER 7. COMPACTLY SUPPORTED WAVELETS


Also m0 (π) = 0. Hence m0 (ξ) has a zero of order n + 1 at ξ = π. This is
exactly stated by (7.1). Since m0 is a trigonometric polynomial, L(ξ) is also
a trigonometric polynomial.                                                2
    Corollary 7.1 suggests to look for functions m0 (ξ) of the form
                                                    !N
                                         1 + e−iξ
                         m0 (ξ) =                        L(ξ),                            (7.2)
                                            2

where N ≥ 1, and L(ξ) is a trigonometric polynomial. So we only need to
find L(ξ). Denote
                           M0 (ξ) = |m0 (ξ)|2 .
Clearly M0 (ξ) is a polynomial of cos ξ if m0 (ξ) is a trigonometric polynomial.
If, in particular, m0 (ξ) satisfies (7.2), then
                                                    !N
                                        ξ
                          M0 (ξ) = cos2                  Q(ξ)
                                        2

where Q(ξ) is a polynomial in cos ξ. Since sin2 2ξ = 1−cos
                                                       2
                                                           ξ
                                                             , we can write Q(ξ)
as a polynomial in sin2 2ξ . Thus,
                                               !N                 !
                                         2 ξ                2 ξ
                       M0 (ξ) = cos                 P sin             ,
                                           2                 2

where P (·) is a polynomial. In terms of P the constraint

                        |m0 (ξ)|2 + |m0 (ξ + π)|2 = 1,
                       (or M0 (ξ) + M0 (ξ + π) = 1)

becomes
                      (1 − y)N P (y) + y N P (1 − y) = 1,                                 (7.3)
which should hold for all y ∈ [0, 1], and hence for all y ∈ IR.
   Daubechies (1992, Chap. 6) gives the necessary and sufficient conditions
on P (·) to satisfy (7.3). She shows that every solution of (7.3) is of the form
                             N −1
                                    CNk −1+k y k + y N R(1/2 − y),
                             X
                   P (y) =                                                                (7.4)
                             k=0

where R(·) is an odd polynomial such that R(y) ≥ 0,                       ∀ y ∈ [0, 1].
7.1. DAUBECHIES’ CONSTRUCTION                                                          59


    Now, the function L(ξ), that we are looking for, is the ”square root” of
P (sin2 2ξ ), i.e. |L(ξ)|2 = P (sin2 2ξ ). Daubechies (1988) proposed to take in
(7.4) R ≡ 0, and she showed that in this case m0 (ξ) is such that
                                                Z π
                           |m0 (ξ)|2 = cN             sin2N −1 x dx                  (7.5)
                                                 ξ

where the constant cN is chosen so that m0 (0) = 1. For such functions m0 (ξ)
one can tabulate the corresponding coefficients hk , see Daubechies (1992)
and Table 1 in appendix A.

DEFINITION 7.1 Wavelets constructed with the use of functions m0 (ξ)
satisfying (7.5) are called Daubechies wavelets. (One denotes them as
D2N or Db2N.)

EXAMPLE 7.1 Let N = 1. Then we obtain D2 wavelets. In this case
cN = 12 ,
                         1Z π            1 + cos ξ
             |m0 (ξ)|2 =      sin x dx =           .
                         2 ξ                2
                     −iξ
Choose m0 (ξ) = 1+e2       . Then
                                                             1 + cos ξ
                    |m0 (ξ)|2 = m0 (ξ)m0 (−ξ) =                        ,
                                                                2
so this is the correct choice of m0 (ξ). The function ϕ̂ is computed easily. We
have
                                   n
                                                        !!
                                  Y   1              iξ
                     ϕ̂(ξ) = n→∞
                              lim         1 + exp − j       .
                                  j=1 2              2
But
           n                  j           n                   j−1
                 1 + e−iξ/2                      1 − e−iξ/2
                                  !                                 !
           Y                              Y
                                      =
           j=1        2                   j=1    2(1 − e−iξ/2j )
                                                  1 − e−iξ              1 − e−iξ
                                                               !
                                        1
                                      = n                           −→           .
                                        2        1 − e−iξ/2n        n→∞    iξ
Hence
                                       1 − e−iξ
                                      ϕ̂(ξ) =   .
                                          iξ
This implies that ϕ(x) is the Haar father wavelet ϕ(x) = I{x ∈ (0, 1]}. Thus,
the Daubechies D2 wavelet coincides with the Haar wavelet.
60                CHAPTER 7. COMPACTLY SUPPORTED WAVELETS


EXAMPLE 7.2 Let N = 2. Consider the D4 wavelet. One shows easily
that |m0 (ξ)|2 has the form
                                   1
                        |m0 (ξ)|2 = (1 + cos ξ)2 (2 − cos ξ),
                                   4
and the corresponding function m0 (ξ) has the form
                                 !2     √          √
                         1 + e−iξ 1 + 3 + (1 − 3)e−iξ
               m0 (ξ) =                               .
                            2                  2

In terms of coefficients hk one has
                                            3
                                        1 X
                              m0 (ξ) = √       hk e−ikξ
                                         2 k=0

where                                 √                  √
                              h0 = 1+√ 3 , h1 = 3+√ 3 ,
                                    4 2          4 2
                                      √                  √                (7.6)
                              h2 = 3−√ 3 , h3 = 1−√ 3 ,
                                    4 2          4 2

     In general, for N ≥ 3, the function m0 (ξ) for D2N has the form
                                                   !N N −1
                                     1 + e−iξ
                                                             qk e−ikξ
                                                      X
                        m0 (ξ) =
                                        2              k=0
                                          2N −1
                                  1
                                         hk e−ikξ ,
                                           X
                               = √
                                   2 k=0

where qk are some coefficients.

REMARK 7.1 Properties of Daubechies’ wavelets
By Lemma 6.3 (i) we have

                               supp ϕ ⊆ [0, 2N − 1]                       (7.7)

and by (6.13)
                              supp ψ ⊆ [−N + 1, N ].                      (7.8)
         (l)
Since m0 (π) = 0, l = 0, . . . , N − 1, we have
                    Z
                        ψ(x)xl dx = 0,            l = 0, . . . , N − 1.   (7.9)
7.2. COIFLETS                                                            61

                                     R                R
The D4 wavelet for example satisfies ψ(x) dx = 0,       x ψ(x) dx = 0.
    The Haar wavelet is the only symmetric compactly supported father
wavelet, see Daubechies (1992).
    We have the following smoothness property: for N ≥ 2 the D2N wavelets
satisfy
                     ϕ, ψ ∈ H λN , 0.1936 ≤ λ ≤ 0.2075,              (7.10)
where H λ is the Hölder smoothness class with parameter λ. Asymptotically
λ = 0.2, as N → ∞.




                 Figure 7.1: Daubechies’ wavelets D2–D8.

EXAMPLE 7.3 As an example for this smoothness property consider the
D4 wavelet. It is only 0.38-Hölderian, as (7.10) suggests.
    Daubechies’ wavelets are given in Figure 7.1. In this figure we show the
father and the mother wavelets from D2(Haar) up to D8.


7.2     Coiflets
Daubechies’ wavelets have vanishing moments for mother wavelets, but not
for father wavelets. If the father wavelets have vanishing moments, the
62                 CHAPTER 7. COMPACTLY SUPPORTED WAVELETS


wavelet coefficients may be approximated
                                          by evaluations of the function f at
discrete points: αjk = 2−j/2 f 2kj + rjk , with rjk small enough. It can be a
useful property in specific applications, see Section 3.3. Beylkin, Coifman &
Rokhlin (1991) proposed a new class of wavelets which have essentially all the
nice properties of Daubechies’ wavelets and, in addition, vanishing moments
of father wavelets. This class of wavelets (called coiflets) is discussed below.
    To construct coiflets, one looks for m0 (ξ) of the form
                                                      !N
                                           1 + e−iξ
                           m0 (ξ) =                        L(ξ),
                                              2

where L(ξ) is a trigonometric polynomial. We want the following conditions
to be satisfied
                                    xl ϕ(x) dx = 0, l = 1, . . . , N − 1,
         R                      R
           ϕ(x) dx = 1,
                 l                                                          (7.11)
                                                    l = 0, . . . , N − 1.
         R
          ψ(x)x dx = 0,

These are equivalent to
               (
                   ϕ̂(0) = 1,      ϕ̂(l) (0) = 0, l = 1, . . . , N − 1,
                   ψ̂ (l) (0) = 0,                l = 0, . . . , N − 1.

The conditions ϕ̂(l) (0) = 0 are implied by (see the proof of Lemma 6.4)
                          (l)
                        m̂0 (0) = 0,          l = 1, . . . , N − 1.         (7.12)

COROLLARY 7.2 Assume the conditions of Lemma 6.3 and (7.12). Then
m0 (ξ) can be represented as

                           m0 (ξ) = 1 + (1 − e−iξ )N S(ξ)                   (7.13)

where S(ξ) is a trigonometric polynomial.

Proof follows the proof of Corollary 7.1.                           2
   Set N = 2K, K integer. Daubechies (1992, Chap. 8) shows, that (7.1)
and (7.13) imply the following form of m0 (ξ)
                                                     !2K
                                          1 + e−iξ
                          m0 (ξ) =                         P1 (ξ),          (7.14)
                                             2
7.3. SYMMLETS                                                                          63


where                                               !k                 !K
                         K−1
                                k             2 ξ                2 ξ
                         X
              P1 (ξ) =         CK−1+k   sin              + sin              F (ξ)
                         k=0                   2                  2
and F (ξ) is a trigonometric polynomial chosen so that

                          |m0 (ξ)|2 + |m0 (ξ + π)|2 = 1.

DEFINITION 7.2 Wavelets obtained with the function m0 (ξ) given in (7.14)
are called coiflets (of order K), and denoted by CK (for example, C1, C2
etc.).

REMARK 7.2 Properties of coiflets of order K.

                    supp ϕ ⊆ [−2K, 4K − 1].                                         (7.15)
                    supp ψ ⊆ [−4K + 1, 2K].                                         (7.16)
                    Z
                         xl ϕ(x) dx = 0,            l = 1, . . . , 2K − 1.          (7.17)
                    Z
                         xl ψ(x) dx = 0,            l = 0, . . . , 2K − 1.          (7.18)
                    Coiflets are not symmetric.                                     (7.19)

EXAMPLE 7.4 As an example let us consider the C3 coiflet which has 5
vanishing moments,
                     supp ϕ3 = [−6, 11],
                                supp ψ3 = [−11, 6].
The coefficients {hk } for coiflets are tabulated in Daubechies (1992) and in
Table 1 of appendix A. Examples of coiflets are given in Figure 7.2 where
we show the father and mother coiflets C1 to C4. In the upper left we have
plotted C1 and below C2. In the upper right we have father and mother of
C3.



7.3     Symmlets
It is shown in Daubechies (1992) that except for the Haar system no system
ϕ, ψ can be at the same time compactly supported and symmetric. Never-
theless, for practical purposes (in image processing for example), one can try
64   CHAPTER 7. COMPACTLY SUPPORTED WAVELETS




      Figure 7.2: Coiflets in order C1 to C4.




        Figure 7.3: Four symmlets S4–S7.
7.3. SYMMLETS                                                             65


to be as close as possible to the symmetry by requiring the following: the
phase of m0 (ξ) is minimal among all the m0 (ξ) with the same value |m0 (ξ)|.
This defines a certain choice of the polynomial L(ξ), with the least possible
shift.
    Coefficients {hk } for symmlets are tabulated in Daubechies (1992, p.
198). One uses the notation SN for symmlet of order N , (for example,
S1, S2 etc.).

REMARK 7.3 Properties of symmlets. The symmlet SN has the fa-
ther and mother wavelets such that

                    supp ϕ ⊆ [0, 2N − 1].                              (7.20)
                    supp ψ ⊆ [−N + 1, N ].                             (7.21)
                    Z
                        xl ψ(x) dx = 0,    l = 0, . . . , N − 1.       (7.22)
                    Symmlets are not symmetric.                        (7.23)

EXAMPLE 7.5 The symmlet S8 has 7 vanishing moments (for mother
wavelet only) and

                            supp ϕ8 = [0, 15],
                            supp ψ8 = [−7, 8].

The first four symmlets are shown in Figure 7.3.
66   CHAPTER 7. COMPACTLY SUPPORTED WAVELETS
Chapter 8

Wavelets and Approximation

8.1      Introduction
In this chapter we study the approximation properties of wavelet expansions
on the Sobolev spaces. We specify how fast does the wavelet expansion
converge to the true function f , if f belongs to some Sobolev space. This
study is continued in Chapter 9 where we consider the approximation on the
Besov spaces and show that it has an intrinsic relation to wavelet expansions.
The presentation in this chapter and in Chapter 9 is more formal than in the
previous ones. It is designed for the mathematically oriented reader who is
interested in a deeper theoretical insight into the properties of wavelet bases.
    We start by considering a general kernel approximation of functions on
the Sobolev spaces. We give an approximation theorem: if f is in a Sobolev
space and if the kernel satisfies a certain moment condition, then the ap-
proximation has a given accuracy. The theorem also admits an inverse (for
periodic kernels): if the approximation is of the given accuracy at least for
one function, then the kernel has to satisfy the moment condition. This
main moment condition which requires that certain moments of the kernel
were zero, is therefore in the focus of our study.
    First, we restrict the class of kernels by the periodic projection kernels
of the form K(x, y) = k ϕ(x − k)ϕ(y − k), where ϕ ∈ L2 (IR) is such that
                         P

{ϕ(x − k), k ∈ ZZ} is an orthonormal system. For these kernels the moment
condition is essentially equivalent to good approximation properties. There-
fore, we specify the assumptions on ϕ that ensure the moment condition for
such kernels.

                                      67
68                     CHAPTER 8. WAVELETS AND APPROXIMATION


    Next, we restrict the class of kernels even more by assuming that ϕ is
the scaling function of a multiresolution analysis (i.e. a father wavelet).
We derive necessary and sufficient conditions for the moment condition in
this case (Theorem 8.3) and provide the approximation theorem for wavelet
expansions on the Sobolev spaces (Corollary 8.2). These are the main results
of the chapter. Moreover, in Proposition 8.6 and Corollary 8.1 we prove that,
under a mild condition on the father wavelet ϕ (for example, for any bounded
                                                   S
and compactly supported father wavelet), the set j≥0 Vj is dense in L2 (IR),
and that certain other properties of MRA stated without proof in Chapters
3 and 5 are satisfied.


8.2        Sobolev Spaces
Let us first recall the definition of weak differentiability. Denote D(IR) the
space of infinitely many times differentiable compactly supported functions.
The following result is well known.
PROPOSITION 8.1 Let f be a function defined on the real line which is
integrable on every bounded interval. The two following facts are equivalent:

     1. There exists a function g defined on the real line which is integrable on
        every bounded interval such that
                                       Z y
                           ∀x ≤ y,           g(u)du = f (y) − f (x)
                                        x


     2. There exists a function g defined on the real line which is integrable on
        every bounded interval such that :
                                   Z                       Z
                                                0
                    ∀φ ∈ D(IR) :       f (u)φ (u)du = −        g(u)φ(u)du.

DEFINITION 8.1 A function f satisfying the properties of Proposition 8.1
is called weakly differentiable. The function g is defined almost everywhere,
is called the weak derivative of f and will be denoted by f 0 .

     It follows that any weakly differentiable function is continuous.
PROPOSITION 8.2 Let f and g be weakly differentiable functions. Then
f g is weakly differentiable, and (f g)0 = f 0 g + f g 0 .
8.2. SOBOLEV SPACES                                                                                                        69


Proof
  Let a ≤ b. By the Fubini theorem we have :
                                             Z b                        Z b                 Z bZ b
{f (b) − f (a)}{g(b) − g(a)} =                        f 0 (x)dx               g 0 (y)dy =               f 0 (x)g 0 (y)dxdy
                                              a                          a                   a      a

We divide the domain of integration in two parts:
  Z bZ b                               Z b              Z x                          Z b            Z y
                0       0                     0                     0                        0
              f (x)g (y)dxdy =               f (x)                 g (v)dvdx +              g (y)           f 0 (u)dudy.
    a     a                             a                  a                          a                 a

Thus
                                                      Z b
 {f (b) − f (a)}{g(b) − g(a)} =                             f 0 (x){g(x) − g(a)}dx
                                                       a
                                                           Z b
                                                      +            g 0 (y){f (y) − f (a)}dy
                                                            a
                                                      Z b
                                             =              {f 0 (x)g(x) + g 0 (x)f (x)}dx
                                                       a
                                                      −{f (b) − f (a)}g(a) − f (a){g(b) − g(a)}.

Finally
                                                           Z b
                    {f (b)g(b) − f (a)g(a)} =                      (f 0 (x)g(x) + g 0 (x)f (x))dx
                                                               a

                                                                                                                           2

DEFINITION 8.2 A function f is N times weakly differentiable, if it has
N-1 weakly differentiable weak derivatives. This implies that these derivatives
f, f 0 , ....f (N −1) are continuous.

REMARK 8.1 If f has a weak derivative, we have for all x and y :
                                              Z 1
                            f (y) = f (x) +           f 0 (x + t(y − x))(y − x)dt.
                                                  0

If f is N times weakly differentiable, then, using recursively the integration
by parts, one can easily prove the Taylor formula
              N −1
                  f (k) (x)           Z 1
                                                (1 − u)N −1 (N )
                            (y − x)k + (y − x)N
              X
f (y) =                                                    f (x + u(y − x))du.
              k=0    k!                0         (N − 1)!
70                    CHAPTER 8. WAVELETS AND APPROXIMATION


   Let us now define the Sobolev spaces. In the following we use the Lp (IR)
norms:                   ( R
                           ( |f (x)|p dx)1/p , if 1 ≤ p < ∞,
               ||f ||p =
                           ess supx |f (x)|,   if p = ∞.

DEFINITION 8.3 Let 1 ≤ p ≤ ∞, m ∈ {0, 1, . . .}. The function f ∈
Lp (IR) belongs to the Sobolev space Wpm (IR), if it is m-times weakly differen-
tiable, and if f (j) ∈ Lp (IR), j = 1, . . . , m. In particular, Wp0 (IR) = Lp (IR).

    It can be proved that in this definition it is enough to have f (m) ∈ Lp (IR)
instead of f (j) ∈ Lp (IR), j = 1, . . . , m.
    The space Wpm (IR) is naturally equipped with the associated norm

                           ||f ||Wpm = kf kp + kf (m) kp .

For the purpose of this section we define also the space W̃pm (IR) which is very
close to Wpm (IR).

DEFINITION 8.4 The space W̃pm (IR) is defined as follows. Set W̃pm (IR) =
Wpm (IR), if 1 ≤ p < ∞, and
             m              m
           W̃∞ (IR) = {f ∈ W∞ (IR) : f (m) is uniformly continuous}.

In particular, W̃p0 (IR) = Lp (IR), 1 ≤ p < ∞.

     Sometimes we write shortly Wpm and W̃pm instead of Wpm (IR) and W̃pm (IR).

REMARK 8.2 Let τh f (x) = f (x−h), and define the modulus of continuity
ωp1 f (t) = sup|h|≤t kτh f − f kp . Then f ∈ W̃pm (IR) if and only if the following
two relations hold:
                                     f ∈ Wpm (IR)                              (8.1)
and
                             ωp1 (f (m) , t) → 0, t → 0.                      (8.2)
In fact, f ∈ Lp (IR) implies that f is continuous in Lp (IR), for 1 ≤ p < ∞.

   For the general theory of Sobolev spaces see e.g. the books of Adams
(1975), Bergh & Löfström (1976), Triebel (1992), DeVore & Lorentz (1993).
   We shall frequently use the following inequalities for the Lp -norms.
8.3. APPROXIMATION KERNELS                                                            71


LEMMA 8.1 (Generalized Minkowsky inequality) Let f (x, y) be a
Borel function on IR × IR and 1 ≤ p ≤ ∞. Then
                           Z                      Z
                      ||        f (x, y)dx||p ≤          ||f (x, ·)||p dx.
                           IR                       IR

LEMMA 8.2 Let f ∈ Lp (IR), g ∈ L1 (IR), 1 ≤ p ≤ ∞. Then
                                  ||f ∗ g||p ≤ ||g||1 ||f ||p .
   Proof of these inequalities can be found in Adams (1975), Bergh & Löfström
(1976), Triebel (1992), DeVore & Lorentz (1993). Note that Lemma 8.2 is
an easy consequence of Lemma 8.1.


8.3      Approximation kernels
We develop here and later in this chapter the idea of Fix & Strang (1969).
DEFINITION 8.5 A kernel K(x, y) is a function defined on IR × IR. If
K(x, y) = K(x − y), then K is called a convolution kernel.
   Let K(x, y) be a kernel. For a positive real number h, define Kh (x, y) =
h−1 K(h−1 x, h−1 y). If h = 2−j , we write Kj (x, y) instead of Kh (x, y). For a
measurable Rfunction f we introduce the operator associated with the kernel:
Kh f (x) = Kh (x, y)f (y)dy. Analogously, Kj f and Kf are defined. The
function Kh f will play the role of an approximation for the function f , and
we will evaluate how this approximation becomes close to f as h tends to 0.
   Let us introduce some conditions on kernels used in the sequel. Let N ≥ 0
be an integer.
Condition H (size condition) There exists an integrable function F (x) ,
    such that |K(x, y)| ≤ F (x − y), ∀x, y ∈ IR.
                                                             |x|N F (x)dx < ∞.
                                                         R
Condition H(N ) Condition H holds and
Condition P (periodicity condition) K(x + 1, y + 1) = K(x, y), ∀x, y ∈ IR.
Condition M (N ) (moment condition) Condition H(N) is satisfied and
            Z
                K(x, y)(y − x)k dy = δ0k ,            ∀k = 0, . . . , N, ∀x ∈ IR,   (8.3)

      where δjk is the Kronecker delta.
72                  CHAPTER 8. WAVELETS AND APPROXIMATION


REMARK 8.3 Condition H implies that for all h and for all p, 1 ≤ p ≤ ∞,
we have
                    kKh f kp ≤ kF k1 kf kp                         (8.4)
(cf. Lemmas 8.1 and 8.2). Condition P (periodicity) is obviously satisfied in
the case of a convolution kernel K(x, y) = K(x − y). The condition (8.3) is
equivalent to the following one : Kp = p for every polynomial p of degree
not greater than N .


8.4     Approximation theorem in Sobolev spaces
Here we study the rates of convergence in Lp , as h → 0, of the approximation
Kh f to the function f , when f belongs to a Sobolev space.

THEOREM 8.1 Let K be a kernel, and let N ≥ 0 be an integer.

  (i) If K satisfies Condition M (N ) and if f belongs to the Sobolev space
      W̃pN (IR), then h−N kKh f − f kp → 0 when h → 0, for any p ∈ [1, ∞].

 (ii) If K satisfies Conditions M (N ) and H(N + 1) and if f belongs to
      the Sobolev space WpN +1 (IR), then h−(N +1) kKh f − f kp remains bounded
      when h → 0, for any p ∈ [1, ∞].

(iii) If K satisfies Conditions P and H(N ), if there exist p ∈ [1, ∞] and a
      non constant function f ∈ W̃pN (IR), such that h−N
                                                      n kKhn f −f kp → 0, for
      some positive sequence hn → 0, then K satisfies the condition M (N ).

Proof Introduce the functions
                        Z
             µ0 (x) ≡       K(x, y)dy − 1,
                        Z
                                       (y − x)j
             µj (x) =       K(x, y)             dy,   j = 1, 2, . . . , N.
                                          j!

Observe that the functions µj (x) exist if K satisfies the Condition H(N ).
Using the Taylor formula, we have for any f in the Sobolev space WpN :

                            N
                              f (k) (x)
                                          (y − x)k + RN f (y, x),
                            X
                  f (y) =
                            k=0   k!
8.4. APPROXIMATION THEOREM IN SOBOLEV SPACES                                                              73


where R0 f (x, y) = f (y) − f (x),
                Z 1
                                           (1 − u)N −1 (N )
RN f (y, x) =           (y−x)N                        {f (x+u(y−x))−f (N ) (x)}du,                    N ≥ 1.
                    0                       (N − 1)!
If moreover f ∈ WpN +1 , then
                                                                  N
                                                      N +1 (1 − u)
                                     Z 1
         RN f (y, x) =                     (y − x)                    f (N +1) (x + u(y − x)) du.
                                      0                        N!
Thus
                                     N                                  Z
                                              µk (h−1 x)f (k) (x)hk +
                                     X
  Kh f (x) − f (x) =                                                        Kh (x, y)RN f (y, x)dy.    (8.5)
                                     k=0

  (i) Let K satisfy the Condition M (N ) and let f ∈ W̃pN . Then clearly,
      µj (x) = 0 (a.e.), j = 0, 1, . . . , N , and (8.5) yields
                                                 Z
           Kh f (x) − f (x) =                        Kh (x, y)RN f (y, x)dy
               Z 1           Z
                                                     (1 − u)N −1
           =            du            Kh (x, y)                  (y − x)N [f (N ) (x + u(y − x)) − f (N ) (x)]dy,
                0                IR                   (N − 1)!
       and hence
            |Kh f (x) − f (x)|
                    N
                         Z 1              Z
                                                             (1 − u)N −1 (N )
            ≤h                   du             |t|N F (t)              |f (x − tuh)) − f (N ) (x)|dt.
                             0             IR                 (N − 1)!
       We used here the inequality |K(x, y)| ≤ F (x − y) and set x − y = th.
       Thus Lemma 8.1, Remark 8.2 and the fact that f ∈ W̃pN give
                                      hN    Z 1
                                                       N −1
                                                               Z
       kKh f − f kp              ≤              (1 − u)     du     |t|N F (t)kτtuh (f (N ) ) − f (N ) kp dt
                                   (N − 1)! 0                   IR
                                    N
                                 = h o(h), as h → 0,
       where τv f (x) = f (x − v), v ∈ IR.
 (ii) Let now f ∈ WpN +1 . Then, as K satisfies Conditions M (N ) and H(N +
      1), we have
            Kh f (x) − f (x)
                Z 1              Z
                                                      (1 − u)N
            =           du                Kh (x, y)            (y − x)N +1 f (N +1) (x + u(y − x))dy.
                    0            IR                      N!
74                         CHAPTER 8. WAVELETS AND APPROXIMATION


       Thus

               |Kh f (x) − f (x)|
                             Z 1        Z
                                                              (1 − u)N (N +1)
               ≤ hN +1             du         |t|N +1 F (t)           |f      (x + tuh))|dt,
                              0          IR                      N!

       and the application of Lemma 8.1 gives

                           hN +1 Z 1          Z
       kKh f −f kp ≤                 du(1−u)N     |t|N +1 F (t)kf (N +1) kp dt = O(hN +1 ),
                            N! 0               IR

       as h → 0.

(iii) The periodicity condition on K implies that the functions µk (x), k =
      0, 1, . . . , N are periodical, with period 1. By assumption, kKh f −f kp =
      o(hNn ). On the other hand, it follows from the proof of (i) that
                       Z
                   k       Kh (x, y)Rl f (y, x)dykp = o(hl ), l = 0, 1, . . . , N.

       This and (8.5) entail

                                   l
                                         µk (h−1    (k)
                                                        (x)hkn kp = o(hln ).
                                   X
                               k              n x)f
                                   k=0



     Using Lemma 8.4, proved below, we get successively

                   µ0 (x) = 0, µ1 (x) = 0, . . . , µN (x) ≡ 0 (a.e.).

The following two lemmas end the proof.                                                        2

LEMMA 8.3 (Adams (1975),Bergh & Löfström (1976), Triebel (1992)) Let
θ be a bounded periodic function with period 1 and let g ∈ L1 (IR).
                       Z                              Z 1            Z
                            θ(h−1 y)g(y)dy →                θ(u)du       g(y)dy
                                                       0


as h → 0.
8.4. APPROXIMATION THEOREM IN SOBOLEV SPACES                                                  75


Proof First consider the function g that is continuously differentiable and
has support ⊂ [a, b]. We have
                 Z                               Z
                         −1
                      θ(h t)g(t)dt = h                g(th)θ(t)dt
                                             X           Z 1
                                        =            h         g{h(t + k)}θ(t)dt
                                              k           0
                                             Z 1
                                        =            θ(t)S(t)dt,
                                              0

where                                        X
                                 S(t) = h            g(th + kh).
                                             k
                                                     g(u)du for every t, as h → 0. In fact,
                                              R
Clearly, S(t) converges uniformly to
            Z +∞                        X Z (m+1)h
  |S(t) −            g(th + u)du| = |                          {g(th + mh) − g(th + u)}du|.
            −∞                           m    mh

Note that, for u ∈ [mh, (m + 1)h],
 |g(th + mh) − g(th + u)| ≤ h||g 0 ||∞ I{t : a ≤ th + mh, th + (m + 1)h ≤ b}
and
            X                                         (L + 1)
                I{t : a ≤ th + mh, th + (m + 1)h ≤ b} ≤       ,
           m                                             h
where L is the length of the support of g and I is the indicator function.
Hence,                Z         +∞
                     |S(t) −         g(th + u)du| ≤ h||g 0 ||∞ (L + 1),
                               −∞
which entails that S(t) is uniformly bounded, if h is small. Applying the
dominated convergence theorem, we get
                        Z 1                  Z 1                  Z
                              θ(t)S(t)dt →            θ(u)du          g(y)dy,
                         0                       0

as h → 0. For general functions g we use the fact that compactly supported
differentiable functions are dense in L1 (IR).                           2
LEMMA 8.4 Let θ be a bounded periodic function with period 1 and let
h > 0. If there exists a function f ∈ Lp (IR) such that f 6= 0 and
                                  ||θ(h−1 x)f (x)||p → 0,                                (8.6)
as h → 0, then θ = 0 (a.e.).
76                      CHAPTER 8. WAVELETS AND APPROXIMATION


Proof Take a function g ∈ Lq (IR), where p1 + 1q = 1, such that f g 6= 0.
                                                                               R

Denote by cm the m-th Fourier coefficient of θ. Then, by Lemma 8.3
               Z ∞                                                 Z
                        −1                −1
                     θ(h t) exp(−2πimh t)f (t)g(t)dt → cm              fg          (8.7)
                −∞

as h → 0. The integral in the LHS of (8.7) does not exceed ||θ(h−1 x)f (x)||p kgkq
by the Hölder inequality. Hence, by assumption (8.6), this integral tends to
0, as h → 0. This yields cm = 0. Since m is arbitrary, this entails θ = 0
(a.e.).                                                                         2
    Parts (i) and (ii) of Theorem 8.1 indicate the rate of approximation of
f by Kh f provided that f is regular and K satisfies the moment condition
M (N ). Part (iii) shows that the moment condition is crucial to guarantee the
good approximation properties of Kh f . In Section 8.6 we shall investigate
this condition further.

REMARK 8.4 If K satisfies the condition M (0), then ∀1 ≤ p < ∞, ∀f ∈
Lp (IR),
                 ||Kj f − f ||p → 0, as j → 0.
The same is true for p = ∞, if f ∈ L∞ (IR) and is uniformly continuous. This
is due to the fact that W̃p0 = Lp , if 1 ≤ p < ∞, and that W̃∞
                                                             0
                                                                is the space of
uniformly continuous bounded functions.
    If f ∈ L∞ (IR), we have only a weak       convergence of K
                                                             Rj
                                                                f to f in the
following sense. For all g ∈ L1 (IR), g(x)Kj f (x)dx = f (u)K̃j g(u)du,
                                           R

where K̃(u, v) = K(v, u). But this kernel satisfies also the condition M (0),
so by Theorem 8.1 (i) ||K̃j g − g||1 → 0. This implies:
                        Z                       Z
        ∀g ∈ L1 (IR),        g(x)Kj f (x)dx →       f (x)g(x)dx, as j → ∞.


8.5      Periodic kernels and projection operators
DEFINITION 8.6 A function ϕ ∈ L2 (IR) such that {ϕ(x − k), k ∈ ZZ} is
an ONS, is called scaling function.

    For any function f ∈ L2 (IR) its orthogonal projection operator PV0 on V0
is defined by
           Z                                         Z
                                    2
               |PV0 (f )(x) − f (x)| dx = ming∈V0        |g(x) − f (x)|2 dx.       (8.8)
8.5. PERIODIC KERNELS AND PROJECTION OPERATORS                                                   77


   Let ϕ(·) be a scaling function, let V0 be the subspace of L2 (IR) spanned
by the orthogonal basis {ϕ(x − k), k ∈ ZZ} and let f ∈ L2 (IR). Then
                                            X Z
                       PV0 (f )(·) =                    ( f (y)ϕ(y − k)dy)ϕ(· − k).            (8.9)
                                                k

The following condition on the scaling function ϕ will be useful in the sequel.

                                                               X
Condition (θ). The function θϕ (x) =                                |ϕ(x − k)| is such that
                                                                k

                                                ess sup θϕ (x) < ∞.
                                                         x

   Note that if ϕ satisfies Condition (θ), then ϕ ∈ L∞ (IR), and also θϕ is a
periodic function with period 1, such that
                                                Z 1
                                                         θϕ (x) dx < ∞.                       (8.10)
                                                    0

Also,
        Z ∞                            Z 1X                            Z 1
               |ϕ(x)|dx =                        |ϕ(x − k)|dx =               θϕ (x)dx < ∞.   (8.11)
         −∞                             0   k                           0

Hence, Condition (θ) implies that ϕ ∈ L1 (IR) ∩ L∞ (IR), and thus the Fourier
transform ϕ̂(ξ) is continuous, and ϕ ∈ Lp (IR), ∀1 ≤ p ≤ ∞.
    Heuristically, Condition (θ) is a localization condition. Clearly, it holds
for compactly supported bounded functions ϕ, and it is not satisfied for the
Shannon function ϕ(x) = sin(πx)
                             πx
                                 . It forbids the function ϕ to be too spread,
for example, to have oscillations possibly accumulated in the sum over k.
    The following proposition is a main tool for the evaluation of Lp -norms
in the context of wavelets.

PROPOSITION 8.3 If a function ϕ satisfies Condition (θ), then for any
                                                          1
sequence {λk , k ∈ ZZ}, satisfying ||λ||lp = ( k |λk |p ) p < ∞, and any p and q
                                              P

such that 1 ≤ p ≤ ∞, p1 + 1q = 1, we have:
                            X                                                  1    1
                                                                    q
                       ||           λk ϕ(x − k)||p ≤ ||λ||lp ||θϕ ||∞ ||ϕ||1p ,               (8.12)
                            k
                                j                                         j   j      1    1
                       λk 2 2 ϕ(2j x − k)||p ≤ ||λ||lp 2( 2 − p ) ||θϕ ||∞
                   X                                                     q
              ||                                                           ||ϕ||1p ,          (8.13)
                   k
78                                      CHAPTER 8. WAVELETS AND APPROXIMATION


If, moreover, ϕ is a scaling function, then
                                                X
                     C1 ||λ||lp ≤ ||                    λk ϕ(x − k)||p ≤ C2 ||λ||lp ,                                                        (8.14)
                                                    k
                                        j       j                           j                                                j       j
                     C1 ||λ||lp 2( 2 − p ) ≤ ||                   λk 2 2 ϕ(2j x − k)||p ≤ C2 ||λ||lp 2( 2 − p ) , (8.15)
                                                           X

                                                             k
                                   1            1                                       1               1
where C1 = (||θϕ ||∞ ||ϕ||1 )−1 , and C2 = ||θϕ ||∞
                                   p            q q
                                                    ||ϕ||1p .
Proof First, observe that if ||λ||lp < ∞, then supk |λk | < ∞, and thus, under
the Condition (θ) the series k λk ϕ(x − k) is a.e. absolutely convergent.
                             P

                              X                                  X                                  1                   1
                          |        λk ϕ(x − k)| ≤                          |λk ||ϕ(x − k)| p |ϕ(x − k)| q .
                               k                                   k

Using the Hölder inequality we get
     Z                                                           Z X                                                                     p
                                            p
                                                                                |λk |p |ϕ(x − k)|{
                 X                                                                                          X
             |       λk ϕ(x − k)| dx ≤                                                                          |ϕ(x − k)|} q dx
                 k                                                     k                                    k
                                                                            p          Z
                                                         ≤       ||θϕ ||∞ ||λ||plp
                                                                            q
                                                                                                |ϕ(x)|dx.

This yields (8.12) for p < ∞. For p = ∞ the proof is easier and left to the
reader. Inequality (8.13) follows from (8.12) by renormalization. The right-
hand side inequality in (8.14) coincides with (8.12). To prove the left-hand
side inequality Rin (8.14) define f (x) = k λk ϕ(x − k). Since ϕ is a scaling
                                         P

function, λk = f (x)ϕ(x − k)dx. Thus,
                                            X Z                                                                        p
                                                                                            1                   1
                                    p
                      X
                               |λk | ≤                     |f (x)||ϕ(x − k)| |ϕ(x − k)| dx  p                   q            ,
                          k                     k

and by the Hölder inequality
                                            XZ                                                  Z                            p
                              |λk |p ≤                  |f (x)|p |ϕ(x − k)|dx( |ϕ(x − k)|dx) q .
                     X

                      k                     k

Hence,
                          1                 1       Z
                                                                                                        1           1            1
                 |λk | ) ≤ ||ϕ||1 ( |f (x)|p
                      p
     X                                      q
                                                                   X
     (                    p                                                 |ϕ(x − k)|dx) p ≤ ||ϕ||1q ||θϕ ||∞
                                                                                                             p
                                                                                                               ||f ||p .
         k                                                             k

    This yields the proof for p < ∞. As above the case p = ∞ is left to the
reader. Finally, (8.15) is a rescaled version of (8.14).                         2
    If a scaling function satisfies Condition (θ), it is in some sense well concen-
trated. In this case the projection operator PV0 , is given by a kernel operator
with a periodic kernel.
8.5. PERIODIC KERNELS AND PROJECTION OPERATORS                                        79


PROPOSITION 8.4 Let ϕ be a scaling function. If ϕ satisfies Condition
(θ), then PV0 (f )(x) = Kf (x) for any f ∈ L2 (IR), with
                                        X
                          K(x, y) =          ϕ(x − k)ϕ(y − k).
                                         k


Proof Let f ∈ L2 (IR). Then, by the Cauchy-Schwarz inequality,
       X Z                                               X
            ( |f (y)ϕ(y − k)|dy)|ϕ(x − k)| ≤                  kf k2 kϕk2 |ϕ(x − k)|
        k                                                 k
                                                      ≤ kf k2 kϕk2 θϕ (x) < ∞.

So, by the Fubini theorem we have, for almost all x:
                                   X Z
                  PV0 (f )(x) =         ( f (y)ϕ(y − k)dy)ϕ(x − k)
                                    k
                                   Z            X
                               =        f (y)       ϕ(y − k)ϕ(x − k)dy.
                                                k

                                                                             2
   A very important fact here is that under Condition (θ), the projection
operator PV0 is given by a kernel K(x, y) which acts also on other spaces
than L2 (IR), for instance, on all Lp (IR), 1 ≤ p ≤ ∞. If f ∈ Lp (IR), clearly,
by Hölder inequality we obtain that
             X Z
                  ( |f (y)ϕ(y − k)|dy)|ϕ(x − k)| ≤ ||f ||p ||ϕ||q θϕ (x),
              k

where p1 + 1q = 1.
   Proposition 8.4 justifies the following definition.

DEFINITION 8.7 (Orthogonal projection kernel). Let ϕ be a scaling
function satisfying Condition (θ). The kernel
                                        X
                          K(x, y) =          ϕ(x − k)ϕ(y − k)
                                         k

is called orthogonal projection kernel associated with ϕ.

REMARK 8.5 Obviously, the orthogonal projection kernel satisfies Con-
dition P , i.e. it is periodic.
80                     CHAPTER 8. WAVELETS AND APPROXIMATION


8.6     Moment condition for projection kernels
Here we specify the properties of ϕ necessary to obtain Condition M (N ) on
the kernel                       X
                      K(x, y) =     ϕ(x − k)ϕ(y − k).
                                      k

    First we formulate the properties of ϕ allowing to have various size con-
ditions on K.

Condition S (size condition) There exists a bounded non increasing func-
    tion Φ such that          Z
                                Φ(|u|)du < ∞,
      and
                               |ϕ(u)| ≤ Φ(|u|) (a.e.).

Condition S(N ) Condition S holds and
                                Z
                                    Φ(|u|)|u|N du < ∞.

LEMMA 8.5 Condition (θ) follows from Condition S.

Proof The function θϕ is periodic, with period 1. Hence, Condition (θ) is
satisfied if
                          ess sup θϕ (x) < ∞.                     (8.16)
                                x∈[0,1]

But if x ∈ [0, 1], then |x − k| ≥ |k|/2 for any |k| ≥ 2. Hence, Φ(|x − k|) ≤
Φ(|k|/2), for any |k| ≥ 2, x ∈ [0, 1]. Using this, we get, under Condition S,
                  X                   X
      θϕ (x) =         |ϕ(x − k)| ≤           Φ(|x − k|) ≤ Φ(|x|) + Φ(|x + 1|)
                   k                      k
                                    X                              X
                  +Φ(|x − 1|) +               Φ(|k|/2) ≤ 3Φ(0) +       Φ(|k|/2),
                                    |k|≥2                          k


for almost all x ∈ [0, 1]. Now, monotonicity of Φ yields
             X                            Z ∞
                  Φ(|k|/2) ≤ Φ(0) +                Φ(|u|/2)du = CΦ < ∞.            (8.17)
              k                               −∞


Thus, (8.16) holds, which entails Condition (θ).                                       2
8.6. MOMENT CONDITION FOR PROJECTION KERNELS                                              81


LEMMA 8.6 If ϕ satisfies Condition S, then the kernel
                                         X
                          K(x, y) =           ϕ(x − k)ϕ(y − k)
                                         k

satisfies                                               !
                                         |x − y|
                        |K(x, y)| ≤ C1 Φ                     (a.e.),
                                           C2
where the positive constants C1 and C2 depend only on Φ.

Proof Using the monotonicity of Φ, we get, for any n ∈ ZZ,
 X                             X                                  X
      Φ(|n − k|)Φ(|k|) ≤                 Φ(|n − k|)Φ(|k|) +                 Φ(|n − k|)Φ(|k|)
  k                          |k|≤|n|/2                          |k|>|n|/2
                                         !                             !
                             |n|              X                   |n| X
                         ≤ Φ                           Φ(|k|) + Φ       Φ(|n − k|)
                              2              |k|≤|n|/2
                                                                   2  k
                                         !
                              |n| X
                         ≤ 2Φ       Φ(|k|),                                           (8.18)
                               2  k

since k Φ(|n − k|) = k Φ(|k|). As Φ(x/2) is also a monotone function, we
       P                 P

get using (8.17) and (8.18),
                               !                  !                    !
                    X   |k|   |n − k|                         |n|
                      Φ     Φ                         ≤ 2CΦ Φ     .                   (8.19)
                    k    2       2                             4

Any x, y ∈ IR can be represented as

                             x = k0 + u , |u| ≤ 12 ,
                             y = k1 + v , |v| ≤ 12 ,


where k0 and k1 are integers. Set n = k0 − k1 . Then
                    X                                  X
      |K(x, y)| ≤       Φ(|x − k|)Φ(|y − k|) =              Φ(|u − k|)Φ(|v + n − k|)
                    k                                   k
                               !                  !                    !
                    X   |k|   |n − k|                         |n|
               ≤      Φ     Φ                         ≤ 2CΦ Φ     ,                   (8.20)
                    k    2       2                             4

where we used (8.19) and the inequalities |u − k| ≥ |k|
                                                     2
                                                        , |v + n − k| ≥ |n−k|
                                                                          2
                                                                              .
82                        CHAPTER 8. WAVELETS AND APPROXIMATION


   Let δ < 14 be such that Φ(δ/2) > 0. (If such δ does not exist, this means
that Φ ≡ 0, and the Lemma is trivial.) We have
                                     !                          !
                             |n|             Φ(0)    δ|x − y|
                           Φ              ≤        Φ          .                  (8.21)
                              4             Φ(δ/2)      2

In fact, if n 6= 0, we have 2|n| ≥ |n + u − v| = |x − y|, and, by monotonicity
of Φ,                         !                          !
                          |n|                   δ|x − y|
                      Φ         ≤ Φ(δ|n|) ≤ Φ              .
                           4                       2
If n = 0, then |x − y| = |u − v| ≤ 1, and
                                !                                    !
                          |n|                 Φ(0)    δ|x − y|
                        Φ           = Φ(0) ≤        Φ          .
                           4                 Φ(δ/2)      2

Combining (8.20) and (8.21), we obtain the Lemma.                          2
    Using Lemma 8.6, it is easy to see that, Condition S(N ) being satisfied,
the Condition H(N ) holds as well, and the following quantities are well-
defined

                                Z
                    mn =            ϕ(x)xn dx,
                                Z
                   µn (t) =         K(t, s)(s − t)n ds,
                                    ϕ(t − k)(t − k)n ,
                                X
                   Cn (t) =                               n = 0, 1, . . . , N.
                                k


PROPOSITION 8.5 Let, for some N ≥ 0, ϕ satisfy Condition S(N ) and
 ϕ(x)dx 6= 0. Then K, associated with ϕ, satisfies Conditions P and H(N ),
R

and we have the following.
                                     
                   Pn        n−j n
    (i) µn (t) =     j=0 (−1)    j
                                   mj Cn−j (t),       n = 0, 1, . . . , N.

    (ii) The following three relations are equivalent:

                            Cn (t) = Cn (a.e.), n = 0, 1, . . . , N,             (8.22)
                            µn (t) = µn (a.e.), n = 0, 1, . . . , N,             (8.23)
                          ϕ̂(ξ + 2kπ) = o(|ξ|N ), as ξ → 0, ∀k 6= 0,             (8.24)
8.6. MOMENT CONDITION FOR PROJECTION KERNELS                                          83


     where Cn and µn are some constants. Each of these relations implies
     that
                        Cn = mn , n = 0, 1, . . . , N,            (8.25)
     and                     Z
                    µn =         (−t)n (ϕ ∗ ϕ̃)(t)dt,       n = 0, 1, . . . , N,   (8.26)

     where ϕ̃(t) = ϕ(−t).

(iii) The kernel K satisfies Condition M (N ) if and only if (8.24) holds and
      |ϕ̂(ξ)|2 = 1 + o(|ξ|N ), as ξ → 0.

(iv) In particular, if ϕ satisfies the condition S, then we have:

                      K satisfies M (0) ⇔ ϕ̂(2kπ) = δ0k , ∀k ∈ ZZ.

Proof

 (i) By the binomial formula
                                 Z
                µn (t) =              K(t, s)(s − t)n ds
                                 XZ
                         =               ϕ(t − k)ϕ(s − k)(s − k + k − t)n ds
                                  k
                                 n
                                                    !
                                                   n
                                       (−1)n−j
                                 X
                         =                           mj Cn−j (t).
                                 j=0               j

 (ii) It follows from (i) that (8.22) ⇒ (8.23). The inverse implication is
      proved  by induction. In fact, if (8.23) holds, we have µ0 = m0 C0 (t) =
      ( ϕ(x)dx) C0 (t). Thus, C0 (t) = C0 = µ0 /m0 , ∀t. Next, assume that
       R

      (8.23) entails (8.22) for n = 0, 1, . . . , N − 1, and observe that it entails
      (8.22) also for n = N , in view of (i).
     It remains to show the equivalence of (8.22) and (8.24). By the property
     (4.9) of the Fourier transforms (see Chapter 4), we have
                                               Z
                                 ϕ̂(n) (ξ) =       ϕ(t)(−it)n e−iξt dt.

     In particular,                            Z
                          ϕ̂   (n)
                                     (2kπ) =       ϕ(t)(−it)n e−i2kπt dt.          (8.27)
84                        CHAPTER 8. WAVELETS AND APPROXIMATION


     and by (4.10) and the Poisson summation formula (4.13) of Chapter 4,
     with T = 1,
                                    Z 1 +∞
                  (n)
                                                     ϕ(t − m){−i(t − m)}n e−i2kπt dt
                                        X
             ϕ̂         (2kπ) =
                                     0 m=−∞
                                          Z 1
                              = (−i)    n
                                                     Cn (t)e−i2kπt dt.                 (8.28)
                                                 0

     Note that (8.24) is equivalent to

                           ϕ̂(n) (2kπ) = 0, n = 0, 1, . . . , N, k 6= 0.               (8.29)

     But, in view of (8.28), the condition (8.29) holds if and only if Cn (t) is
     constant for all t ∈ [0, 1] (note that by (8.28) the Fourier coefficients of
     Cn (t) on [0, 1] are proportional to ϕ̂(n) (2kπ)). Thus, (8.22) is equivalent
     to (8.24).
     To prove that (8.23) ⇒ (8.25) we apply (8.28) with k = 0. We get
                                                     Z 1
                           ϕ̂(n) (0) = (−i)n               Cn (t)dt ≡ (−i)n Cn .
                                                      0

     On the other hand, ϕ̂(n) (0) = (−i)n mn by (8.27). Thus, (8.25) follows.
     The proof of (8.26) is given by the next calculations.
                              n
                                                      !
                              X
                                           n−j       n
                    µn =            (−1)               mj mn−j
                              j=0                    j
                               n
                                                       !
                                           n−j       n Z j       Z
                                                         v ϕ(v)dv un−j ϕ(u)du
                              X
                          =         (−1)
                              j=0                    j
                                  n
                                                 !
                              Z Z X
                                            n j
                          =                   v (−u)n−j ϕ(v)ϕ(u)dudv
                                     j=0    j
                              Z Z
                          =          (v − u)n ϕ(v)ϕ(u)dudv
                              Z
                          =       (−t)n (ϕ ∗ ϕ̃)(t)dt.                                 (8.30)

(iii) The condition (8.3) may be rewritten as

                            µ0 (t) ≡ 1, µn (t) ≡ 0, n = 1, . . . , N,                  (8.31)
8.7. MOMENT CONDITION IN THE WAVELET CASE                                              85


       which is a special case of (8.23). But (8.23) ⇒ (8.26). Using (8.26), we
       rewrite (8.31) as
                                     Z
                 F[ϕ ∗ ϕ̃](0) =          (ϕ ∗ ϕ̃)(t)dt = 1,
                                     Z
               F (n) [ϕ ∗ ϕ̃](0) =       (−it)n (ϕ ∗ ϕ̃)(t)dt = 0, n = 1, . . . , N,(8.32)

       where F (n) is the nth derivative of the Fourier transform F. By the
       property (4.8) of Fourier transforms (see Chapter 4), F[ϕ ∗ ϕ̃](ξ) =
         ˆ 2 . Therefore, (8.32) is equivalent to |ϕ(ξ)|
       |ϕ(ξ)|                                         ˆ 2 = 1 + o(|ξ|N ) as
       ξ → 0. This implies that (8.3) holds if and only if (8.23) is true and
         ˆ 2 = 1 + o(|ξ|N ) as ξ → 0. To finish the proof note that (8.23) ⇔
       |ϕ(ξ)|
       (8.24) by (ii) of this proposition.

(iv) Is obvious.

We finish this section with the following remark related to the condition
M (N ) in the simplest case of a convolution kernel.

REMARK 8.6 If K(x, y) = K ∗ (x − y) is a convolution kernel and K ∗ ∈
L1 (IR), then
               K satisfies Condition M (N ) ⇔
           Z
               |x|N |K ∗ (x)|dx < ∞ and K̂ ∗ (ξ) = 1 + o(|ξ|N ), as ξ → 0.


8.7        Moment condition in the wavelet case
Proposition 8.5 explains how to guarantee the Condition M (N ) for an orthog-
onal projection kernel K(x, y) = k ϕ(x−k)ϕ(y − k). Let us now investigate
                                 P

what can be improved, if ϕ is a father wavelet that generates a MRA. The
definition of MRA was given in Chapter 3. It contained the following three
conditions on ϕ:

   • {ϕ(x − k), k ∈ ZZ} is an ONS,

   • the spaces Vj are nested: Vj ⊂ Vj+1 ,

   •
       S
         j≥0 Vj is dense in L2 (IR), where Vj is the linear subspace of L2 (IR)
       spanned by {2j/2 ϕ(2j x − k), k ∈ ZZ}.
86                   CHAPTER 8. WAVELETS AND APPROXIMATION


Here it will be sufficient to impose only the first two of these conditions,
since we work in this section under the strong Condition S(N ). The fact
     S
that j≥0 Vj is dense in L2 (IR) will follow as a consequence (see Corollary 8.1
below).
    In view of Lemma 5.1, the fact that {ϕ(x − k), k ∈ ZZ} is an ONS may
be expressed by the relation

                            |ϕ̂(ξ + 2kπ)|2 = 1
                       X
                                                      (a.e.),                   (8.33)
                        k

and, by Proposition 5.1, the spaces Vj are nested if and only if
                                    !           !
                                 ξ    ξ
                      ϕ̂(ξ) = ϕ̂   m0                  (a.e.),                  (8.34)
                                 2    2

where m0 (ξ) is a 2π-periodic function, m0 ∈ L2 (0, 2π).

REMARK 8.7 If the scaling function ϕ satisfies Condition S(N ), for some
N ≥ 0, then the orthogonal projection operator PVj on Vj is given by the
kernel
                                               j                 j
         Kj (x, y) = 2j K(2j x, 2j y) =       2 2 ϕ(2j x − k)2 2 ϕ(2j y − k).
                                          X

                                          k

In fact, Condition S(N ) implies Condition (θ) (Lemma 8.5), and one can
apply Proposition 8.4 with obvious rescaling of ϕ.

   Let us recall that if P and Q are two operators given by two kernels,
K(x, y) and F (x, y), then the composed         operator P ◦ Q is given by the
composed kernel K ◦ F (x, y) = K(x, z)F (z, y)dz. Since the spaces Vj are
                                 R

nested, we have PVj ◦ PV0 = PV0 , j = 1, 2, . . ..

THEOREM 8.2 Let ϕ be a scaling function satisfying (8.33), (8.34) and
Condition S(N ). If ϕ ∈ W̃qN (IR) for some integer N ≥ 0 and some 1 ≤
q ≤ ∞, then the kernel K(x, y) = k ϕ(x − k)ϕ(y − k) satisfies the moment
                                 P

condition M (N ).

Proof Note that Kj ϕ = ϕ for j = 1, 2, . . .. In fact, by the property of
projection operators mentioned above, PVj (ϕ) = PVj ◦ PV0 (ϕ) = PV0 (ϕ) = ϕ,
since ϕ ∈ V0 . Also, ϕ is not a constant, since ϕ ∈ L2 (IR). Thus, the
8.7. MOMENT CONDITION IN THE WAVELET CASE                                   87


assumptions of Theorem 8.1 (iii) are fulfilled for f = ϕ, h = 2−j , and K
satisfies Condition M (N ).                                                   2
     This theorem gives a sufficient condition. Let us now derive a necessary
and sufficient condition for the Condition M (N ). We shall show that, if K
is the projection operator on the space V0 of a multiresolution analysis then
it is possible to improve Proposition 8.5.
     First, we state properties of multiresolution analysis under the Condition
(θ) on the father wavelet ϕ. For this recall some notation from Chapters 3
and 5. Let

                         m1 (ξ) = m0 (ξ + π)e−iξ ,                      (8.35)
                                         !      !
                                       ξ      ξ
                          ψ̂(ξ) = m1       ϕ̂      ,                    (8.36)
                                       2      2

and let the mother wavelet ψ be the inverse Fourier transform of ψ̂. Let W0
be the orthogonal complement of V0 in V1 , i.e. V1 = V0 ⊕ W0 .

PROPOSITION 8.6 Let ϕ be a scaling function satisfying (8.33), (8.34)
and the Condition (θ). Then
  (i) For all ξ
                                     |ϕ̂(ξ + 2kπ)|2 = 1.
                                X

                                 k

 (ii) The function m0 is a 2π-periodic continuous function with absolutely
      convergent Fourier series.

(iii) m0 (0) = 1, |ϕ̂(0)| = 1, ϕ̂(2kπ) = 0, ∀k 6= 0.

(iv) {ψ(x − k), k ∈ ZZ} is an ONB in W0 .

 (v) RThe mother wavelet ψ satisfies the Condition (θ). If, moreover,
          N                         N
       |x| |ϕ(x)|dx < ∞, then |x| |ψ(x)|dx < ∞.
                               R


(vi) Let D(x, y) = K1 (x, y)−K(x, y). Then D is the kernel of the orthogonal
     projection operator on W0 , and we have
                                       X
                           D(x, y) =        ψ(x − k)ψ(y − k).
                                        k


Proof
88                     CHAPTER 8. WAVELETS AND APPROXIMATION


 (i) Fix ξ and define the function
                                   ∞
                                   X
                       gξ (x) =          ϕ(x + n) exp{−iξ(x + n)}.
                                  n=−∞

     The function gξ (x) is bounded, in view of Condition (θ), and it is
     periodic, with period 1. By the Poisson summation formula ((4.13)
     of Chapter 4, with T = 1) the Fourier coefficients of gξ (x) are ϕ̂(ξ +
     2kπ), k ∈ ZZ.
     To prove (i) we proceed now as in Lemarié (1991). By Parseval’s for-
     mula                             Z 1
                                   2
                                          |gξ (x)|2 dx, ∀ξ ∈ IR.
                   X
                      |ϕ̂(ξ + 2kπ)| =
                       k                       0

     The RHS of this equation is a continuous function of ξ since gξ is a
     bounded continuous function. Hence, k |ϕ̂(ξ + 2kπ)|2 is a continuous
                                            P

     function of ξ, which, together with (8.33), proves (i).
 (ii) Using the argument after formula (5.3) of Chapter 5, we find that the
      function m0 (ξ) in (8.34) may be written as
                                                   ak e−ikξ
                                               X
                                    m0 (ξ) =
                                               k

     with ak = ϕ(x)ϕ(2x − k)dx, where
                  R

             X              Z X
                  |ak | ≤         |ϕ(x)||ϕ(2x − k)|dx ≤ kθϕ k∞ kϕk1 < ∞.
              k              k

(iii) Lemma 5.2 of Chapter 5 yields that, under (8.33) and (8.34), |m0 (ξ)|2 +
      |m0 (ξ + π)|2 = 1 (a.e.). This equality is true everywhere, since by (ii)
      m0 is continuous. Thus, |m0 (0)| ≤ 1. Let us show that |m0 (0)| = 1. In
      fact, if |m0 (0)| < 1, then |m0 (ξ)| < η < 1, for ξ small enough, and, for
      any ξ ∈ IR,
                  ξ     ξ         ξ         ξ              ξ
       ϕ̂(ξ) = ϕ̂( )m0 ( ) = ϕ̂( q+1 )m0 ( q+1 ) . . . m0 ( ) → 0 as q → ∞.
                  2     2       2         2                2
     Thus, ϕ̂(ξ) = 0, ∀ξ ∈ IR, which is impossible. Hence, |m0 (0)| = 1.
     Also, |m0 (2kπ)|2 = 1, k ∈ ZZ, by periodicity of m0 . Using this and
     applying (8.34), we obtain
                  |ϕ̂(2j 2kπ)| = |ϕ̂(2j−1 2kπ)||m0 (2j−1 2kπ)|
                               = |ϕ̂(2j−1 2kπ)|, k ∈ ZZ, j = 1, 2, . . . .
8.7. MOMENT CONDITION IN THE WAVELET CASE                                                                    89


     Hence, for any k ∈ ZZ,
                        |ϕ̂(2j 2kπ)| = |ϕ̂(2kπ)|,                            j = 1, 2, . . . .            (8.37)
     Fix k 6= 0. Take limits of both sides of (8.37), as j → ∞, and note
     that by Riemann-Lebesgue Lemma we have ϕ̂(ξ) → 0, as |ξ| → ∞. We
     obtain ϕ̂(2kπ) = 0, k 6= 0. This, and (8.33) imply that |ϕ̂(0)| = 1.
     Now, (8.34) entails that m0 (0) = 1.
(iv) See Lemma 5.3 and Remark 5.2 of Chapter 5.
 (v) The mother
         √      wavelet ψ(x) may be written as (cf. (5.13) and the relation
     hk = 2ak , see the definition of hk after (5.3) in Chapter 5):
                               √ X
                    ψ(x) =       2 (−1)k+1 h̄1−k ϕ(2x − k)
                                                   k

                                               (−1)k āk ϕ(2x − 1 + k).
                                          X
                                = 2
                                           k

     Thus, the Condition (θ) on the function ψ follows from the inequalities
                  X                            XX
                      |ψ(x − l)| ≤ 2                            |ak ||ϕ(2x − 2l − 1 + k)|
                  l                                k        l
                                               X                   X
                                        ≤ 2                |ak |            |ϕ(2x − 2l − 1 + k)|
                                                   k                   l
                                                                X
                                        ≤ 2kθϕ k∞                          |ak |.
                                                                   k


                                |x|N |ϕ(x)|dx < ∞. Then
                            R
     Next, suppose that
              Z                                                    Z
                  |ψ(x)||x|N dx ≤                                          |ϕ(2x − 1 + k)||x|N dx
                                           X
                                                       2|ak |
                                               k
                                                                    Z
                                                                            |ϕ(x)|(|x|N + |k|N )dx,
                                                   X
                                        ≤ C                 |ak |
                                                       k
                                                                                                           N
                                                                                                 k |ak ||k| < ∞.
                                                                                            P
     where C > 0 is a constant. It remains to prove that
     We have
                            Z X
              |ak ||k|N ≤                |ϕ(x)||ϕ(2x − k)||k|N dx
         X

          k                         k
                                 XZ
                         ≤ C̃              |ϕ(x)||ϕ(2x − k)|(|2x − k|N + |x|N )dx
                                    k
                                               Z
                                0
                         ≤ C kθϕ k∞                    |x|N |ϕ(x)|dx < ∞,
90                        CHAPTER 8. WAVELETS AND APPROXIMATION


        where C̃ and C 0 are positive constants.
(vi) The system {ψ(x − k), k ∈ ZZ} is an ONB of W0 in view of (iv). The
     function ψ satisfies Condition (θ) in view of (v). Hence, we can apply
     Proposition 8.4, with W0 instead of V0 and ψ instead of ϕ.
                                                                              2

COROLLARY 8.1 Let ϕ be a scaling function, satisfying (8.33), (8.34)
and the Condition S. Then
  (i) The associated orthogonal projection kernel
                                           X
                               K(x, y) =       ϕ(x − k)ϕ(y − k)
                                           k
                                                R
        satisfies the Condition M (0), i.e.         K(x, y)dy = 1.
        S
 (ii)       j≥0 Vj is dense in L2 (IR).

Proof
  (i) By Proposition 8.5 (iii) it suffices to verify that ϕ̂(ξ + 2kπ) = o(1), as
      ξ → 0, ∀k 6= 0, and |ϕ̂(ξ)|2 = 1 + o(1), as ξ → 0. But these relations
      follow from Proposition 8.6 (iii) and from the obvious fact that ϕ̂(·) is
      a continuous function under the Condition S.
 (ii) It suffices to show that ||PVj (f ) − f ||2 → 0, for any f ∈ L2 (IR), as
      j → ∞. This follows from Theorem 8.1 (i) applied for N = 0, p =
      2, h = 2−j . In fact, the assumptions of Theorem 8.1 (i) are satisfied in
      view of Remark 8.7, the point (i) of the present Corollary and of the
      fact that
                                  L2 (IR) = W̃20 (IR).

                                                                       2
   Here is now the main theorem of this section, which is a refinement of
Proposition 8.5 in the context of multiresolution analysis.

THEOREM 8.3 Let ϕ be a scaling function, satisfying (8.33), (8.34) and
the Condition S(N ) for some integer N ≥ 0. Let K(x, y) be the associ-
ated orthogonal projection kernel, and let ψ be the associated mother wavelet
defined by (8.35) and (8.36).
    The following properties are equivalent:
    8.7. MOMENT CONDITION IN THE WAVELET CASE                                           91


      (i) |m0 (ξ)|2 = 1 + o(|ξ|2N ), as ξ → 0,

                 xn ψ(x)dx = 0,
             R
      (ii)                          n = 0, 1, . . . , N,

     (iii) ϕ̂(ξ + 2kπ) = o(|ξ|N ), as ξ → 0, ∀k 6= 0,

     (iv) K(x, y) satisfies the Condition M (N ).

        If, moreover, the function |ϕ̂(ξ)|2 is 2N times continuously differentiable
    at ξ = 0, then the properties (i) - (iv) are equivalent to

                              |ϕ̂(ξ)|2 = 1 + o(|ξ|2N ), as ξ → 0.                   (8.38)

    REMARK 8.8 The property (i) is equivalent to

                                  m0 (ξ + π) = o(|ξ|N ), as ξ → 0.                  (8.39)

    and to
                                    m1 (ξ) = o(|ξ|N ), as ξ → 0.                    (8.40)
    In fact, by Lemma 5.2 of Chapter 5,

                             |m0 (ξ)|2 + |m0 (ξ + π)|2 = 1 (a.e.).                  (8.41)

    Moreover, (8.41) holds for all ξ (not only a.e.), since in view of Proposition
    8.6 (i), we can skip (a.e.) in (8.33). This implies that (i) of Theorem 8.3 and
    (8.39) are equivalent. The equivalence of (8.39) and (8.40) follows from the
    definition of m1 (ξ) (see (8.35)).

    REMARK R 2N
                8.9 The function |ϕ̂(ξ)|2 is 2N times continuously differentiable,
    if e.g. |t| |ϕ(t)|dt < ∞. This is always the case for compactly supported
    ϕ.

    Proof of Theorem 8.3

(i)⇔ (ii) Note that (ii) is equivalent to the relation ψ̂(ξ) = o(|ξ|N ), ξ → 0, by the
          property of derivatives of Fourier transforms (Chapter 4, formula (4.9).
          Now, ψ̂(ξ) = m1 ( 2ξ )ϕ̂( 2ξ ), ϕ̂(0) 6= 0 by Proposition 8.6 (iii), and ϕ̂(ξ) is
          continuous. Hence, ψ̂(ξ) = o(|ξ|N ), ξ → 0, ⇔ (8.40) holds. Finally,
          (8.40) ⇔ (i) by Remark 8.8.
      92                    CHAPTER 8. WAVELETS AND APPROXIMATION


 (i)⇒ (iii) Using Remark 8.8, we can replace (i) by (8.39). Now, any k ∈ ZZ, k 6= 0,
            may be represented as k = 2q k 0 , where k 0 is odd, and q ≥ 0 is an integer.
            Hence,
                                                          !
                                ξ           ξ
               ϕ̂(ξ + 2kπ) = ϕ̂( + kπ)m0      + kπ
                                2           2
                                                       !
                                  ξ     0        ξ   0            ξ
                           = ϕ̂( q+1 + k π)m0 q+1 + k π . . . m0 ( + kπ).
                                2              2                  2
            As m0 is 2π-periodic and (8.39) holds, we obtain
                          ξ                   ξ
                    m0 ( q+1 + k 0 π) = m0 ( q+1 + π) = o(|ξ|N ),     as ξ → 0.
                        2                   2
            Using this and the fact that ϕ̂ and m0 are uniformly bounded (|m0 (ξ)| ≤
            1, by (8.41)), we get (iii).
 (iii)⇒ (i) Proposition 8.6 (i) guarantees the existence of such k0 that

                                         ϕ̂(π + 2k0 π) 6= 0.                      (8.42)

            Let k00 = 2k0 + 1. Then, for every ξ,
                                         !                            !
                                 ξ            ξ             ξ        ξ
            ϕ̂(ξ+2k00 π) = m0      + k00 π ϕ̂( +k00 π) = m0   + π ϕ̂( +π+2k0 π),
                                 2            2             2        2
            where we used the fact that m0 is 2π-periodic. Letting in this relation
            ξ → 0 and using (iii), the continuity of ϕ̂ and (8.42) we get m0 (ξ +π) =
            o(|ξ|N ), which, in view of Remark 8.8, is equivalent to (i).
(iii)⇔ (iv) By Proposition 8.5 (iii) it suffices to show that (iii) implies

                                 |ϕ̂(ξ)|2 = 1 + o(|ξ|N ), as ξ → 0.               (8.43)

            To show this, note that (iii) ⇒ (i), and thus
                                               ξ         ξ
                                |ϕ̂(ξ)|2 = |ϕ̂( )|2 |m0 ( )|2
                                               2         2
                                               ξ 2
                                         = |ϕ̂( )| (1 + o(|ξ|2N )).               (8.44)
                                               2
            as ξ → 0. Next, note that |ϕ̂(ξ)|2 is N times continuously differentiable
            at ξ = 0. In fact, |ϕ̂(ξ)|2 is the Fourier transform of the function ϕ ∗ ϕ̃
        8.7. MOMENT CONDITION IN THE WAVELET CASE                                                93


             (see (4.8) of Chapter 4), and derivative of order n ≤ N of |ϕ̂(ξ)|2 at
             ξ = 0 is

                                  dn |ϕ̂(ξ)|2       Z
                                                  =   (−it)n (ϕ ∗ ϕ̃)(t)dt
                                      dξ n    ξ=0
                                                 = in µ n ,

             where we used the property of Fourier transforms (4.9) of Chapter 4,
             and (8.26). Also, |ϕ̂(0)|2 = 1 by Proposition 8.6 (iii). Hence, there
             exist numbers b1 , . . . , bN such that the Taylor expansion holds:
                                                      N
                                     |ϕ̂(ξ)|2 = 1 +         bk ξ k + o(|ξ|N ),
                                                      X
                                                                                          (8.45)
                                                      k=1

             as ξ → 0. Combining (8.44) and (8.45) we get
                     N                                                  N
                                                                                           !
                              k        N                  2N                  ξ
                                                                          bk ( )k + o(|ξ|N ) ,
                     X                                                  X
                1+         bk ξ + o(|ξ| ) = (1 + o(|ξ|         )) 1 +
                     k=1                                              k=1     2

             which implies b1 = . . . = bN = 0, and, consequently, (8.43).

(iii)⇔ (8.38) Since |ϕ̂(ξ)|2 is 2N times differentiable the proof of (iii)⇔ (8.38) is
              similar to the proof of (iii) ⇔ (iv), and is therefore omitted.

 (8.38)⇒ (i) is obvious.

                                                                                                 2

        REMARK 8.10 Comparison of Proposition 8.5 and Theorem 8.3.
        If ϕ is a general scaling function, as in Proposition 8.5, then the two charac-
        teristic properties, guaranteeing Condition M (N ), i.e.

           • ϕ̂(ξ + 2kπ) = o(|ξ|N ), as ξ → 0, ∀k 6= 0 , k integer,
             and

           • |ϕ̂(ξ)|2 = 1 + o(|ξ|N ), as ξ → 0,

        are independent. But if ϕ is a scaling function of a multiresolution analysis
        (in other words, ϕ is a father wavelet), then the first property implies the
        second. This is the case considered in Theorem 8.3.
94                    CHAPTER 8. WAVELETS AND APPROXIMATION


   The following corollary summarizes the results of this chapter. It presents
explicitly the approximation properties of wavelet expansions on the Sobolev
spaces.

COROLLARY 8.2 Let ϕ be a scaling function satisfying (8.33), (8.34) and
the Condition S(N + 1), for some integer N ≥ 0. Let, in addition, at least
one of the following four assumptions hold:

(W1) ϕ ∈ W̃qN (IR) for some 1 ≤ q ≤ ∞,

(W2) |m0 (ξ)|2 = 1 + o(|ξ|2N ), as ξ → 0,

         xn ψ(x)dx = 0, n = 0, 1, . . . , N , where ψ is the mother wavelet asso-
       R
(W3)
       ciated to ϕ,

(W4) ϕ̂(ξ + 2kπ) = o(|ξ|N ), as ξ → 0, ∀k 6= 0.

Then, if f belongs to the Sobolev space WpN +1 (IR), we have
                                                
                   ||Kj f − f ||p = O 2−j(N +1) , as j → ∞,               (8.46)

for any p ∈ [1, ∞], where Kj is the wavelet projection kernel on Vj ,

                                      2j ϕ(2j x − k)ϕ(2j y − k).
                                  X
                    Kj (x, y) =
                                  k


Proof By Theorems 8.2 and 8.3, the Condition M (N ) is satisfied for K(x, y),
the orthogonal projection kernel associated with ϕ. Moreover, by Lemma 8.6
Condition S(N +1) implies Condition H(N +1). It remains to apply Theorem
8.1 (ii) with h = 2−j .                                                     2
    In view of this corollary, the simplest way to obtain the approximation
property (8.46) is to use a compactly supported father wavelet ϕ that is
smooth enough. This ensures both Condition S(N + 1) and (W1). However,
the condition (W1) is not always the easiest to check, and the conditions
(W2) to (W4) (all these three conditions, as shown in Theorem 8.3, are
equivalent) may be more convenient. Note that (W2) to (W4) are necessary
and sufficient conditions, while (W1) is a more restrictive assumption, as the
following example shows.
8.7. MOMENT CONDITION IN THE WAVELET CASE                              95


EXAMPLE 8.1 Consider the Daubechies D2(N + 1) father wavelet ϕ =
ϕD2(N +1) . For this wavelet we have (see (7.5) of Chapter 7)
                                  Z π
                 |m0 (ξ)|2 = cN         sin2N +1 xdx
                                   ξ
                           = 1 + O(|ξ|2N +2 ), as ξ → 0,

which yields (W2). Also, we know that ϕD2(N +1) is bounded and compactly
supported. By Theorem 8.3, the corresponding projection kernel K(x, y)
satisfies Condition M (N ), and by Corollary 8.2 we have the approximation
property (8.46). But (W1) is not satisfied: there is no q ≥ 1 such that
ϕD2(N +1) ∈ WqN . This shows that Theorem 8.3 is stronger than Theorem
8.2.
96   CHAPTER 8. WAVELETS AND APPROXIMATION
Chapter 9

Wavelets and Besov Spaces

9.1     Introduction
This chapter is devoted to approximation theorems in Besov spaces. The ad-
vantage of Besov spaces as compared to the Sobolev spaces is that they are
much more general tool in describing the smoothness properties of functions.
We show that Besov spaces admit a characterization in terms of wavelet co-
efficients, which is not the case for Sobolev spaces. Thus the Besov spaces
are intrinsically connected to the analysis of curves via wavelet techniques.
The results of Chapter 8 are substantially used throughout. General refer-
ences about Besov spaces are Nikol‘skii (1975), Peetre (1975), Besov, Il‘in
& Nikol‘skii (1978), Bergh & Löfström (1976), Triebel (1992), DeVore &
Lorentz (1993).


9.2     Besov spaces
In this section we give the definition of the Besov spaces. We start by intro-
ducing the moduli of continuity of first and second order, and by discussing
some of their properties.

DEFINITION 9.1 (Moduli of continuity.) Let f be a function in Lp (IR),1 ≤
p ≤ ∞. Let τh f (x) = f (x − h), ∆h f = τh f − f . We define also ∆2h f =
∆h ∆h f . For t ≥ 0 the moduli of continuity are defined by

              ωp1 (f, t) = sup k∆h f kp , ωp2 (f, t) = sup k∆2h f kp .
                          |h|≤t                        |h|≤t



                                        97
98                          CHAPTER 9. WAVELETS AND BESOV SPACES


      The following lemma is well known, see DeVore & Lorentz (1993, Chapter
2).
LEMMA 9.1 For f in Lp (IR), we have:
  (i) ωp1 (f, t), and ωp2 (f, t) are non-decreasing functions of t and, ωp2 (f, t) ≤
      2ωp1 (f, t) ≤ 4kf kp ,
                                                  R ω (f,s)     2
                                  ωp (f, 2j t) ≤ t t∞ p s2 ds (the Marchaud in-
                     P∞     −(j+1) 2
 (ii) ωp1 (f, t) ≤     j=0 2
      equality),
(iii) ωp1 (f, ts) ≤ (s + 1)ωp1 (f, t), for any s ≥ 0, t ≥ 0 ,
 (iv) ωp2 (f, ts) ≤ (s + 1)2 ωp2 (f, t), for any s ≥ 0, t ≥ 0,
 (v) ωp1 (f, t) ≤ tkf 0 kp , if f ∈ Wp1 (IR),
 (vi) ωp2 (f, t) ≤ t2 kf 00 kp , if f ∈ Wp2 (IR).
Proof
  (i) This is an obvious consequence of the definition.
 (ii) We observe that 2∆h = ∆2h −∆2h . This implies : ωp1 (f, t) ≤ 12 (ωp2 (f, t)+
      ωp1 (f, 2t)), and thus
                                k
                 ωp1 (f, t) ≤         2−(j+1) ωp2 (f, 2j t) + 2−(k+1) ωp1 (f, 2(k+1) t).
                                X

                                j=0

        This yields the first inequality in (ii) if we let k → ∞. The second
        inequality follows from the comparison of the series and the Riemann
        integral (note that ωp2 (f, s) is non-decreasing in s and s12 is decreasing).
(iii) Note that ωp1 (f, t) is a subadditive function of t, so that ωp1 (f, nt) ≤
      nωp1 (f, t) for any integer n.
                                 n−1
                                 X
 (iv) We have ∆nh f (x) =              ∆h f (x − kh). Then
                                 k=0

                                            n−1
                                            X n−1
                          ∆2nh f (x) =                  ∆2h f (x − kh − k 0 h).
                                                X

                                            k0 =0 k=0

        Thus, ωp2 (f, nt) ≤ n2 ωp2 (f, t) for any integer n.
9.2. BESOV SPACES                                                                              99


 (v) If f ∈ Wp1 , we have ∆h f (x) = f (x − h) − f (x) = −h 01 f 0 (x − sh)ds,
                                                                               R

     and k∆h f kp ≤ |h|kf 0 kp .

 (vi) Let f ∈ Wp2 . Then

                                                0h2 Z 1 00
          f (x − 2h) − f (x − h) = −f (x − h)h +       f (x − h − sh)ds.
                                                 2 0
      Quite similarly,

                                            0   h2 Z 1 00
               f (x) − f (x − h) = f (x − h)h +       f (x − h + sh)ds.
                                                2 0
      Thus,

               ∆2h f (x) = f (x − 2h) − 2f (x − h) + f (x)
                           h2 Z 1 00
                         =       {f (x − h + sh) + f 00 (x − h − sh)}ds.
                            2 0
      Therefore,
                                                                                   p         #1/p
                                           f 00 (x − h + sh) + f 00 (x − h − sh)
                              "Z
                                   ∞ Z 1
      ||∆2h f ||p   ≤ h   2
                                                                                 dsdx
                                −∞    0                      2
                              Z 1                                                         1/p
                                 1
                                                                                         
                    ≤ h   2
                                    (||f 00 (· − h + sh)||pp + ||f 00 (· − h − sh)||pp )ds
                           0 2
                    = h ||f 00 ||p .
                       2


                                                                                                 2
   In the following we shall often use the sequence spaces lp . Some notation
and results related to this spaces are necessary.
   Let a = {aj }, j = 0, 1, . . . be a sequence of real numbers, and let 1 ≤ p ≤
∞. Introduce the norm
                                                  1/p
                                 P∞        p
                    ||a||lp =     j=0 |aj |               ,   if 1 ≤ p < ∞,
                                supj |aj |,                    if p = ∞.

    As usually, lp denotes the space of all sequences a = {aj } such that
||a||lp < ∞.
    We shall also need the analog of this notation for two-sided sequences
a = {aj }, j = . . . , −1, 0, 1, . . .. The space lp (ZZ) and the norm ||a||lp are
100                                CHAPTER 9. WAVELETS AND BESOV SPACES


defined analogously, but with the summation taken over j from −∞ to ∞.
Sometimes we write ||a||lp (ZZ) , if it is necessary to underline the distinction
between lp (ZZ) and lp .
    The following well-known lemma is the discrete analog of Lemma 8.2.
LEMMA 9.2 Let {aj } ∈ l1 and {bj } ∈ lp for some 1 ≤ p ≤ ∞. Then the
convolutions
                                           ∞                          k
                                               am bm−k , c0k =
                                           X                          X
                             ck =                                           ak−m bm
                                        m=k                           m=0

satisfy {ck } ∈ lp , {c0k } ∈ lp .
     Let 1 ≤ q ≤ ∞ be given, and let the function ε(t) on [0, ∞) be such that
||ε||∗q < ∞, where
                                                         1/q
                                    R∞            q dt
                   ||ε||∗q =              0 |ε(t)| t              ,    if 1 ≤ q < ∞,
                                       ess supt |ε(t)|,               if q = ∞.
                                                                                      
Clearly, || · ||∗q is a norm in the weighted Lq -space Lq [0, ∞), dtt , if q < ∞.

DEFINITION 9.2 Let 1 ≤ p, q ≤ ∞ and s = n + α, with n ∈ {0, 1, . . .},
and 0 < α ≤ 1. The Besov space Bpsq (IR) is the space of all functions f such
that
                  f ∈ Wpn (IR) and ωp2 (f (n) , t) = ε(t)tα ,
where ||ε||∗q < ∞.

    The space Bpsq (IR) is equipped with the norm

                                                              ωp2 (f (n) , t) ∗
                                 ||f ||spq = kf k    Wpn   +k                kq .
                                                                    tα
REMARK 9.1 Let us recall the Hardy inequality (DeVore & Lorentz 1993,
p.24): if Φ ≥ 0, θ > 0, 1 ≤ q < ∞, then
                  Z ∞(            Z ∞                )q
                             θ                  ds        dt   1 Z ∞n θ    oq dt
                             t             Φ(s)              ≤ q     t Φ(t)
                   0               t            s         t   θ 0             t
and if q = ∞
                             (         Z ∞             )
                                  θ               ds        1        n      o
                       sup t                 Φ(s)          ≤ ess sup tθ Φ(t) .
                       t>0             t          s         θ    t>0
9.2. BESOV SPACES                                                                            101


Thus, if 0 < α < 1 (but not if α = 1) using the Marchaud inequality we
have, for q < ∞,
                                    )q                                      )q
           Z ∞(
                  ωp1 (f (n) , t)                         ωp2 (f (n) , t)
                                                      Z ∞   (
                                         dt       1                              dt
                                            ≤
            0           tα               t    (1 − α)q 0        tα               t

and, for q = ∞,
                                          ∗                         ∗
                      ωp1 (f (n) , t)      1  ωp2 (f (n) , t)
                                        ≤                       .
                            tα        ∞
                                          1−α       tα        ∞

Hence, if 0 < α < 1, we can use ωp1 , instead of ωp2 in the definition of Besov
spaces.
   But this is not the case if α = 1. For instance , see DeVore & Lorentz
(1993, p.52), the function

                             f (x) = x log |x| if |x| ≤ 1,
                                   =0          if |x| ≥ 1,
                                                                   1        ∗
belongs to B∞ 1∞
                  (called also Zygmund space), but ω∞ (f,t) t
                                                                    = +∞. An
                                                                  ∞
interesting feature of this example is the following: the function f satisfies
the Hölder condition of order 1 − ε for all ε ∈ (0, 1), but not the Hölder
condition of order 1 (Lipschitz condition). This may be interpreted as the
fact that the ”true” regularity of f is 1, but the Hölder scale is not flexible
enough to feel it. On the other hand, the scale of Besov spaces yields this
opportunity.
    Another example of similar kind is provided by the sample paths of the
classical Brownian motion. They satisfy almost surely the Hölder condition of
order α for any α < 21 , but they are not 12 -Hölderian. Their ”true” regularity
                                                                                 1
                                                                                     ∞
is, however, 21 since it can be proved that they belong to Bp2                           (for any
1 ≤ p < ∞).

   Definition 9.2 can be discretized, leading to the next one.

DEFINITION 9.3 The Besov space Bpsq (IR) is the space of all functions f
such that

             f ∈ Wpn (IR) and {2jα ωp2 (f (n) , 2−j ), j ∈ ZZ} ∈ lq (ZZ).
102                             CHAPTER 9. WAVELETS AND BESOV SPACES


The equivalent norm of Bpsq (IR) in the discretized version is

                            kf kWpn + k{2jα ωp2 (f (n) , 2−j )}klq (ZZ) .

   The equivalence of Definitions 9.2 and 9.3 is due to the fact that the
function ωp2 (f (n) , t) is non-decreasing in t, while t1α is decreasing. In fact,
                                          q          ∞ Z 2j+1                        q
               Z ∞
                      ωp2 (f (n) , t)         dt    X         ωp2 (f (n) , t)            dt
                                                 =                                          ,
                 0          tα                t    j=−∞ 2
                                                          j         tα                   t

and
                            q                                    q                                  q
        ω 2 (f (n) , 2j )           Z 2j+1
                                               ωp2 (f (n) , t)       dt         ω 2 (f (n) , 2(j+1) )
  log(2) p (j+1)α               ≤                                       ≤ log(2) p                    .
           2                         2j              tα              t                  2jα

REMARK 9.2 Using Lemma 9.2 we note that, if 0 < α < 1, one can
replace ωp2 (f (n) , t) by ωp1 (f (n) , t) in the definition of Bpsq (IR). On the contrary,
when s is an integer, it becomes fundamental to use ωp2 (f (n) , t). Let us
observe, for instance, that f ∈ Lp , ωp1 (f, t) = o(t) implies that f is constant.


9.3       Littlewood-Paley decomposition
In this section we give a characterization of Besov spaces via the Littlewood-
Paley decomposition. Here we used some knowledge of the Schwartz distri-
bution theory.
    Denote D(IR) the space of infinitely many times differentiable compactly
supported functions, and S 0 (IR) the usual Schwartz space (the space of in-
finitely many times differentiable functions such that the function and all
their derivatives are decreasing to zero at infinity faster than any polyno-
mial).
    Let γ be a function with the Fourier transform γ̂ satisfying

    • γ̂(ξ) ∈ D(IR),

    • supp γ̂ ⊂ [−A, +A] , A > 0,
                         3A 3A
                                               
    • γ̂(ξ) = 1 for ξ ∈ − ,    .
                          4 4
9.3. LITTLEWOOD-PALEY DECOMPOSITION                                                            103


     Let the function β be such that its Fourier transform β̂ is given by
                                                 !
                                          ξ
                               β̂(ξ) = γ̂   − γ̂(ξ).
                                          2
                                                                                 
                                                                             ξ
Set βj (x) = 2j β(2j x), j = 0, 1, . . .. Note that β̂j (ξ) = β̂             2j
                                                                                      , and
                                         ∞
                                                     !
                                         X    ξ
                               γ̂(ξ) +     β̂ j          = 1.                                 (9.1)
                                       j=0    2

     Figure 9.1 presents a typical example of the Fourier transforms γ̂ and β̂.
     It follows from (9.1) that for every f ∈ S 0 (IR)
                                                 ∞
                                                            !
                                                    ξ
                        fˆ(ξ) = γ̂(ξ)fˆ(ξ) +                    fˆ(ξ).
                                                 X
                                                 β̂ j                                         (9.2)
                                             j=0    2

This relation can be written in a different form. Define Dj f = βj ∗ f, j =
0, 1, . . ., and D−1 f = γ ∗ f . Then (9.2) is equivalent to
                                     ∞
                                     X
                              f=          Dj f   (weakly),                                    (9.3)
                                   j=−1
or                                          
                              ∞
                              X
                       f −          Dj f, g  = 0, ∀g ∈ D(IR),                               (9.4)
                              j=−1

where (·, ·) is the scalar product in L2 (IR).
    The relations (9.2), (9.3) or (9.4) are called Littlewood-Paley decomposi-
tion of f .
    In the following we need two lemmas.

LEMMA 9.3 (Bernstein’s theorem.) Let f ∈ Lp (IR), for some 1 ≤
p ≤ ∞, and let the Fourier transform fˆ satisfy: supp fˆ ⊂ [−R, R], for
some R > 0. Then there exists a constant C > 0 such that kf (n) kp ≤
CRn kf kp , n = 1, 2, . . .

Here is a quick proof of this lemma. Consider the function γ with A = 2,
and let γ ∗ (x) = Rγ(Rx). Clearly, γ̂ ∗ (ξ) = γ̂( Rξ ), and under the assumptions
of Lemma 9.3, we have fˆ(ξ) = γ̂ ∗ (ξ)fˆ(ξ), and hence f = f ∗ γ ∗ . Therefore,
f (n) = f ∗ (γ ∗ )(n) , and in view of Lemma 8.2, ||f ∗ (γ ∗ )(n) ||p ≤ Rn C||f ||p ,
where C = ||γ (n) ||1 .
104   CHAPTER 9. WAVELETS AND BESOV SPACES




                           Figure 9.1: Typical example of the Fourier t
9.3. LITTLEWOOD-PALEY DECOMPOSITION                    105




            Figure 9.2: Fourier transform β̂, A = 1.
106                        CHAPTER 9. WAVELETS AND BESOV SPACES


LEMMA 9.4 Let f ∈ Lp (IR), 1 ≤ p ≤ ∞, be such that
                                  ∞
                                         ||Dj f (n) ||p < ∞,
                                  X

                                 j=−1

for some integer n ≥ 0 and some 1 ≤ p ≤ ∞. Then f (n) ∈ Lp (IR), and
                                           ∞
                   ωp2 (f (n) , t) ≤           ωp2 (Dj f (n) , t), ∀t > 0.
                                           X
                                                                                      (9.5)
                                       j=−1

Proof The Littlewood-Paley decomposition for f (n) implies that
                                            ∞
                          ||f (n) ||p ≤           ||Dj f (n) ||p < ∞.
                                            X

                                           j=−1

Hence, f (n) ∈ Lp (IR). Quite similarly,
                                            ∞
                       ||∆2h f (n) ||p ≤          ||∆2h Dj f (n) ||p < ∞,
                                            X

                                           j=−1

for any h > 0. By Lemma 9.1 (i) we have also ωp2 (Dj f (n) , t) < ∞, ∀j =
−1, 0, . . .. Combining these facts with the observation that ωp2 (f + g, t) ≤
ωp2 (f, t) + ωp2 (g, t), for any functions f, g, we get (9.5).               2
THEOREM 9.1 If 1 ≤ p, q ≤ ∞, s > 0, and f ∈ Lp (IR), we have :
f ∈ Bpsq (IR) if and only if
                                           n                                o
             ||D−1 f ||p < ∞ and            2js ||Dj f ||p , j = 0, 1, . . . ∈ lq .   (9.6)
Proof
    Necessity of (9.6). Assume that f ∈ Bpsq (IR),
                                               
                                                    s = n + α, 0 < α ≤ 1, and
                                             ξ   ˆ
let us prove (9.6). Clearly, the function β̂ 2j f (ξ) is compactly supported,
and in view of (4.10), we have
                                     !
                               ξ
                            n
                       (iξ) β̂ j           fˆ(ξ) = F[(βj ∗ f )(n) ](ξ).
                               2
Hence,
                                                    !n
                                               2j
                   !                                         !
               ξ                             ξ
            β̂ j       fˆ(ξ) = 2     −jn
                                         β̂ j fˆ(ξ)(iξ)n
               2                            2  iξ
                                              !
                                −jn        ξ
                                     n
                             = 2 (−i) γ̂n j F[(βj ∗ f )(n) ](ξ),
                                           2
9.3. LITTLEWOOD-PALEY DECOMPOSITION                                                           107


where γ̂n is a function of D(IR) defined by : γ̂n (ξ) = δ̂(ξ)
                                                         ξn
                                                              , and δ̂ is a function
from D(IR) which equals 1 on the support of β̂ and 0 in a neighborhood of
0. Hence, by Lemma 8.2,

  ||Dj f ||p ≤ kγn k1 2−jn ||(βj ∗ f )(n) ||p = ||γn ||1 2−jn ||βj ∗ f (n) ||p , j = 0, 1, . . . ,
                                                                                              (9.7)
where γn is the inverse Fourier transform of γ̂n . The last equality in (9.7) is
justified by the use of partial integration and by the fact that              ||βj ∗f (n) ||p < ∞
shown below. Let us evaluate ||βj ∗ f (n) ||p . We have βj (y)dy = 0, since
                                                                      R

β̂j (0) = 0, and also βj is an even function. Thus,
                                      Z
                        (n)
               βj ∗ f         (x) =       βj (y)f (n) (x − y)dy
             1Z        n                                         o
           =    βj (y) f (n) (x − y) − 2f (n) (x) + f (n) (x + y) dy
             2Z
             1        n                                                o
           =    β(y) f (n) (x − 2−j y) − 2f (n) (x) + f (n) (x + 2−j y) dy,
             2

and, by Lemma 8.1 and Lemma 9.1 (iv),
                                            Z
                 ||βj ∗ f (n) ||p ≤             |β(y)|ωp2 (f (n) , 2−j |y|)dy
                                                                 Z
                                      ≤     ωp2 (f (n) , 2−j )       |β(y)|(1 + |y|)2 dy
                                      ≤ C1 ωp2 (f (n) , 2−j ),                              (9.8)

where C1 is a positive constant (the last integral is finite: in fact, since β̂ is
infinitely many times differentiable and compactly supported, the function β
is uniformly bounded and, by Lemma 4.1 of Chapter 4, |β(x)||x|N → 0, as
|x| → ∞, for any N ≥ 1).
    From (9.7) and (9.8) we deduce

                     2js ||Dj f ||p ≤ C1 ||γn ||1 2j(s−n) ωp2 (f (n) , 2−j )
                                          = C2 2jα ωp2 (f (n) , 2−j ),                      (9.9)

where C2 > 0 is a constant. By Definition 9.3, if f ∈ Bpsq (IR), then
{2jα ωp2 (f (n) , 2−j )} ∈ lq (ZZ). This and (9.9) yield: {2js ||Dj f ||, j = 0, 1, . . .} ∈
 lq . The inequality ||D−1 f ||p < ∞ is straightforward.
108                           CHAPTER 9. WAVELETS AND BESOV SPACES


    Sufficiency of (9.6). Suppose that ||D−1 f ||p < ∞, ||Dj f ||p = 2−js ηj , j =
0, 1, . . ., where {ηj } ∈ lq , and let us show that f ∈ Bpsq (IR). We have
                                          !                           !                 !
                                  ξ                              ξ                  ξ
  F[(βj ∗ f )(n)                n
                   ](ξ) = (iξ) β̂ j           fˆ(ξ) = i γ̂−n
                                                         n                jn ˆ
                                                                          2 f (ξ)β̂ j       (9.10)
                                  2                              2j                 2
   Lemma 8.2 and (9.10) entail:


                     ||Dj f (n) ||p ≤ 2jn k2j γ−n (2j ·)k1 · ||Dj f ||p
                                    = kγ−n k1 ηj 2−jα , j ≥ 0                               (9.11)
   This yields, in particular, that
                                     ∞
                                           ||Dj f (n) ||p < ∞,
                                     X
                                                                                            (9.12)
                                    j=−1

and, by Lemma 9.4, f (n) ∈ Lp (IR).
   Using the Definition 9.3, it remains to prove that {2kα ωp2 (f (n) , 2−k ), k ∈
ZZ} ∈ lq (ZZ). For k < 0 we use the rough estimate from Lemma 9.1 (i):
                      2kα ωp2 (f (n) , 2−k ) ≤ 4||f (n) ||p 2kα = C3 2kα ,
where C3 > 0 is a constant. This entails
        −1 n                         oq           ∞
                2kα ωp2 (f (n) , 2−k )    ≤ C3q         2−kqα < ∞, 1 ≤ q < ∞,
        X                                         X
                                                                                            (9.13)
      k=−∞                                        k=1

and
                                max       2kα ωp2 (f (n) , 2−k ) < ∞,                       (9.14)
                             −∞≤k≤−1

for q = ∞.
    For k ≥ 0, the evaluation is more delicate. Note that the support of the
Fourier transform F[Dj f (n) ] is included in the interval [−2j+1 A, 2j+1 A]), and
thus, by Lemma 9.3,
                           ||(Dj f (n) )00 ||p ≤ C4 2−2j ||Dj f (n) ||p ,                   (9.15)
where C4 > 0 is a constant, j ≥ −1. Using Lemma 9.1 (vi), (9.11) and
(9.15), we find
       ωp2 (Dj f (n) , 2−k ) ≤ 2−2k ||(Dj f (n) )00 ||p ≤ C4 kγ−n k1 2−2(k+j+α) ηj
                               ≤ C5 2−(k+j) ηj 2−kα , j ≥ 0, k ≥ 0,                         (9.16)
9.3. LITTLEWOOD-PALEY DECOMPOSITION                                                      109


where C5 > 0 is a constant.
   Recalling (9.12) and using Lemma 9.4, we get, for any k ≥ 0,
                                                  ∞
                        ωp2 (f (n) , 2−k ) ≤             ωp2 (Dj f (n) , 2−k )
                                                  X

                                                  j=−1
                                                      k−1
                        ωp2 (D−1 f (n) , 2−k ) +            ωp2 (Dj f (n) , 2−k )
                                                      X
                   =
                                                      j=0
                             ∞
                                   ωp2 (Dj f (n) , 2−k ).
                             X
                        +                                                              (9.17)
                             j=k

Here, in view of (9.16),
                       k−1                                          k−1
                             ωp2 (Dj f (n) , 2−k ) ≤ C5 2−kα              2−(k+j) ηj
                       X                                            X

                       j=0                                          j=0
                                                  ∞
                 ≤ 2−kα ηk0 , ηk0 = C5                2−m ηm−k .
                                                  X
                                                                                       (9.18)
                                               m=k

Here {ηk0 } ∈ lq by Lemma 9.2.
   On the other hand, by Lemma 9.1 (i) and (9.11),
                       ∞                                    ∞
                             ωp2 (Dj f (n) , 2−k ) ≤ 4            ||γ−n ||1 ηj 2−jα
                       X                                    X

                       j=k                                  j=k
                                            ∞
                  = 4||γ−n ||1 2−kα               ηj 2−α(j−k) = η̃k 2−kα ,
                                            X
                                                                                       (9.19)
                                            j=k

where again {η̃k } ∈ lq by Lemma 9.2.
   Finally, the same reasoning as in (9.11), (9.15) and (9.16) yields
                        ωp2 (D−1 f (n) , 2−k ) ≤ 2−2k ||(D−1 f (n) )00 ||p
                   ≤ C6 2−2k ||D−1 f (n) ||p ≤ C7 2−2k ,                               (9.20)
where we used (9.12). Here C6 and C7 are positive constants.
   To finish the proof, it remains to put together (9.17) – (9.20), which yields
                     {2kα ωp2 (f (n) , 2−k ), k = 0, 1, . . .} ∈ lq ,
and to combine this with (9.13) and (9.14). Thus, finally
                       {2kα ωp2 (f (n) , 2−k ), k ∈ ZZ} ∈ lq (ZZ),
110                          CHAPTER 9. WAVELETS AND BESOV SPACES


and the theorem is proved.                                            2
   Theorem 9.1 allows to obtain the following characterization of Besov
spaces.

THEOREM 9.2 (Characterization of Besov spaces.) Let N ≥ 0 be
an integer, let 0 < s < N + 1, 1 ≤ p, q ≤ ∞, and let f be a Borel function
on IR. The necessary and sufficient condition for f ∈ Bpsq (IR) is
                                           ∞
                                           X
                                    f=           uj     (weakly),                          (9.21)
                                           j=0

where the functions uj satisfy
                                                   (N +1)
                      ||uj ||p ≤ 2−js εj , ||uj             ||p ≤ 2j(N +1−s) ε0j           (9.22)

with {εj } ∈ lq , {ε0j } ∈ lq .

REMARK 9.3 Equality (9.21) is assumed to hold in the same sense as the
Littlewood-Paley decomposition. Namely, (f − ∞
                                             j=0 uj , g) = 0, ∀g ∈ D(IR),
                                            P

is an equivalent version of (9.21).

Proof of Theorem 9.2 The necessary part is a direct consequence of The-
orem 9.1, if one takes uj = Dj−1 f . The second inequality in (9.22) follows
then from Lemma 9.3 (in fact, the support of the Fourier transform F[Dj f ]
is included in the interval [−2j+1 A, 2j+1 A]).
    Let us prove that conditions (9.21) and (9.22) are sufficient for f ∈
Bpsq (IR). Under these conditions we have

                      ||Dj um ||p ≤ ||β||1 ||um ||p ≤ ||β||1 2−ms εm ,
                                                                             P∞
for any integers j ≥ −1, m ≥ 0. Therefore, the series                         m=0 Dj um converges
in Lp (IR), and
                                   ∞
                                   X                     ∞
                                                         X
                              ||         Dj um ||p ≤           ||Dj um ||p
                                   m=j                   m=j
                                             ∞
                         ≤ ||β||1 2−js                2−(m−j)s εm = 2−js ηj ,
                                             X
                                                                                           (9.23)
                                             m=j


where {ηj } ∈ lq by Lemma 9.2.
9.4. APPROXIMATION THEOREM IN BESOV SPACES                                                                111


   Now,
                                        j−1
                                        X                  ∞
                                                           X
                          Dj f =              Dj um +            D j um .                               (9.24)
                                        m=0                m=j

Let us evaluate the first sum in (9.24). Note that the Fourier transform
                                                                                              !N +1
                                                                                        2j
                                    !
                        ξ               −j(N +1)        N +1                 N +1
      F[Dj um ](ξ) = β̂ j               2          (iξ)        ûm (ξ)(−i)
                        2                                                               ξ
                                                                                 !                  !
                                N +1 −j(N +1)                               ξ                  ξ
                    = (−i)              2           F[u(N
                                                       m
                                                          +1)
                                                              ](ξ)β̂                 γ̂N +1             ,(9.25)
                                                                            2j                 2j

where as in the proof of Theorem 9.1, γ̂N +1 ∈ D(IR) is a function defined
by γ̂N +1 (ξ) = δ̂(ξ)/ξ N +1 with δ̂ ∈ D(IR) that equals 1 on the support of β̂,
and 0 in a neighborhood of 0. Taking the inverse Fourier transforms of both
sides of (9.25) and applying Lemma 8.2 and (9.22), we obtain

            ||Dj um ||p ≤ 2−j(N +1) ||u(N
                                       m
                                           +1)
                                                ||p ||βj ∗ 2j γN +1 (2j ·)||1
                        ≤ 2−j(N +1) ||βj ||1 ||γN +1 ||1 2m(N +1−s) ε0m .

This implies
                              j−1
                              X                      j−1
                                                     X
                         ||         Dj um ||p ≤            ||Dj um ||p
                              m=0                   m=0
                                        j
                    ≤ C8 2−js                 ε0m 2(m−j)(N +1−s) ≤ 2−js ηj0 ,
                                        X
                                                                                                        (9.26)
                                     m=0


where {ηj0 } ∈ lp by Lemma 9.2.
    Putting together (9.23), (9.24) and (9.26), we get (9.6), and thus f ∈
 sq
Bp (IR) by Theorem 9.1.                                                  2


9.4       Approximation theorem in Besov spaces
Here and later in this chapter we use the approximation kernels K and refer
to the Conditions M (N ), H(N ), introduced in Section 8.3.
    The result of this section is an analog of Theorem 8.1 (ii) for the Besov
spaces.
112                            CHAPTER 9. WAVELETS AND BESOV SPACES


THEOREM 9.3 Let the kernel K satisfy the Condition M (N ), and Condi-
tion H(N + 1) for some integer N ≥ 0. Let 1 ≤ p, q ≤ ∞ and 0 < s < N + 1.
    If f ∈ Bpsq (IR), then

                                     kKj f − f kp = 2−js εj ,

where {εj } ∈ lq .

Proof Let ∞     k=−1 gk , where gk = Dk f , be the Littlewood-Paley decompo-
              P

sition of f . Then, clearly, Kj f − f has the Littlewood-Paley decomposition
P∞
   k=−1 (Kj gk − gk ), and

                                     ∞
                                     X
         kKj f − f kp ≤                  kKj gk − gk kp
                                  k=−1
                                     j
                                     X                         ∞
                                                               X
                           ≤             kKj gk − gk kp +               (kF k1 + 1)kgk kp , (9.27)
                                  k=−1                        k=j+1

where the Condition H(N + 1) and Lemma 8.2 were used. By Theorem 9.1,

                                  ||gk ||p = 2−ks ε0k , {ε0k } ∈ lq .                      (9.28)

Note that the support of the Fourier transform F[gk ] is included in
[−2k+1 A, 2k+1 A], and thus, by virtue of Lemma 9.3,
                      (N +1)
                  ||gk         ||p ≤ C9 2(N +1)k ||gk ||p ≤ C9 2(N +1−s)k ε0k ,            (9.29)

where C9 > 0 is a constant. Thus, gk satisfies the assumptions of Theorem
8.1 (ii). Acting as in the proof of Theorem 8.1 and using Lemma 9.1 (iii), we
obtain, for any h > 0,

                          N
                               Z 1     Z ∞
                                               (1 − u)N −1
                                                N                   (N )    (N )
kKh gk − gk kp    ≤ h       du       |t| F (t)             kτ−tuh (gk ) − gk kp dt
                         0        −∞            (N − 1)!
                             (N )
                                     Z 1    Z ∞
                                                                     (1 − u)N −1
                  ≤ hN ωp1 (gk , h)      du      F (t)(1 + |ut|)|t|N             dt
                                      0      −∞                       (N − 1)!
                                         (N )
                  ≤ C10 hN ωp1 (gk , h),                                                   (9.30)

where C10 > 0 is a constant that does not depend on h. Set h = 2−j . Then,
by Lemma 9.1 (v), (9.29) and (9.30),

                     ||Kj gk − gk ||p ≤ 2C9 C10 2−(N +1)j+(N +1−s)k ε0k .                  (9.31)
9.5. WAVELETS AND APPROXIMATION IN BESOV SPACES                                              113


Using (9.28) and (9.31), we can reduce (9.27) to the form
                              j                                ∞
  kKj f − f kp ≤ C11 2−js [       2−(N +1−s)(j−k) ε0k +              ε0k 2−(k−j)s ] = 2−js εj ,
                              X                                X

                          k=−1                               k=j+1


where {εj } ∈ lq by Lemma 9.2.                                                                    2

REMARK 9.4 As in (9.30) we can obtain directly for f the following in-
equality:
               ||Kh f − f ||p ≤ C10 hN ωp1 (f (N ) , h),
which yields immediately Theorem 9.3 for the case where s = n + α with
0 < α < 1 (using Remark 9.2). The necessity of the Littlewood-Paley de-
composition is the price to pay to cover the case of integer s as well.


9.5      Wavelets and approximation in Besov spaces
Here we show that under certain general conditions the wavelet expansion is
analogous to the Littlewood-Paley decomposition. This yields the character-
ization of Besov spaces in terms of wavelet coefficients.
    Let ϕ be the scaling function of a multiresolution analysis (a father
wavelet). Let, as always, ϕk (x) = ϕ(x − k), k ∈ ZZ,

              ϕjk (x) = 2j/2 ϕ(2j x − k),
              ψjk (x) = 2j/2 ψ(2j x − k), k ∈ ZZ, j = 0, 1, . . . ,

where ψ is the associated mother wavelet.
   As follows from the results of Chapters 5 and 8, under rather general
conditions on ϕ, any function f ∈ Lp (IR), p ∈ [1, ∞), has the following
expansion
                              X                     ∞ X
                                                    X
                    f (x) =       αk ϕk (x) +               βjk ψjk (x),                  (9.32)
                              k                     j=0 k

where the series converges in Lp (IR), and
                                  Z
                       αk =            ϕ(x − k)f (x)dx,
                                            Z
                                      j/2
                      βjk = 2                   ψ(2j x − k)f (x)dx.
114                               CHAPTER 9. WAVELETS AND BESOV SPACES


Consider the associated kernel

                             Kj (x, y) = 2j         ϕ(2j x − k)ϕ(2j y − k).
                                              X

                                                k

Using the notation of Section 8.3, we can write, for any function f ∈ Lp (IR)
and any integer j,

                                         αjk 2j/2 ϕ(2j x − k) =
                                    X                                X
                 Kj f (x) =                                              αjk ϕjk (x),
                                     k                               k
                                    X                    j−1
                                                         XX
                 Kj f (x) =              αk ϕk (x) +             βmk ψmk (x),
                                     k                  m=0 k

where Kj is the orthogonal projection operator on the space Vj spanned by
{ϕjk , k ∈ ZZ} and as usual
                                                Z
                                          j/2
                                 αjk = 2            ϕ(2j x − k)f (x)dx.

Thus,                                                      X
                              Kj+1 f (x) − Kj f (x) =           βjk ψjk (x).                            (9.33)
                                                            k

   Let ||αj ||lp be the lp (ZZ)-norm of the sequence {αjk , k ∈ ZZ}, for a fixed
j ∈ {0, 1, . . .}. Suppose that ϕ satisfies the Condition (θ) introduced in
Section 8.5. Then, by Proposition 8.6 (v), Condition (θ) is true for the
mother wavelet ψ as well.
   Applying Proposition 8.3, we get that there exist two positive constants,
C12 and C13 , such that
                  1   1                                          1   1
        C12 2j( 2 − p ) ||αj ||lp ≤ ||Kj f ||p ≤ C13 2j( 2 − p ) ||αj ||lp ,                            (9.34)
              j( 12 − p1 )                                                 j( 12 − p1 )
         C12 2               ||βj ||lp ≤ ||Kj+1 f − Kj f ||p ≤ C13 2                      ||βj ||lp ,   (9.35)

for any integer j ≥ 0.

THEOREM 9.4 Let ϕ be a scaling function, satisfying (8.33), (8.34) and
the Condition S(N + 1), for some integer N ≥ 0. Let, in addition, ϕ satisfy
one of the conditions (W1) to (W4) of Corollary 8.2 (ensuring the Condition
M (N )). Then, for any 0 < s < N + 1, and 1 ≤ p, q ≤ ∞ we have:
  (i) f ∈ Bpsq (IR) =⇒
      f ∈ Lp (IR) and kKj f − f kp = 2−js εj , j = 0, 1, . . . , with {εj } ∈ lq ,
9.5. WAVELETS AND APPROXIMATION IN BESOV SPACES                                           115


 (ii) f ∈ Bpsq (IR) =⇒
                                              1   1
     ||α0 ||lp < ∞ and ||βj ||lp = 2−j(s+ 2 − p ) ε0j , j = 0, 1, . . . , with {ε0j } ∈ lq .

Proof
  (i) This is a direct consequence of Theorem 9.3, since Condition S(N + 1)
      implies Condition H(N + 1).
 (ii) From (9.34) and Remark 8.3 we get
                                  −1             −1
                     ||α0 ||lp ≤ C12 ||Kf ||p ≤ C12 ||F ||1 ||f ||p < ∞.
     On the other hand, (9.35) and part (i) of the present theorem entail
                         1     1
                 C12 2j( 2 − p ) ||βj ||lp ≤ ||Kj+1 f − f ||p + ||f − Kj f ||p
                                                       1
                                           ≤ 2−js (εj + εj+1 ) = 2−js ε0j ,
                                                       2
     where {ε0j } ∈ lp .
                                                                                               2

REMARK 9.5 A weaker result may be obtained for the case where ϕ is
a father wavelet satisfying Condition S. Then, in view of Corollary 8.1, the
kernel K satisfies Condition M (0), and one can apply Theorem 8.1 (i). This
yields
                        ||Kj f − f ||p → 0, as j → ∞,                 (9.36)
if either 1 ≤ p < ∞, and f ∈ Lp (IR), or p = ∞, f ∈ L∞ (IR) and f is
uniformly continuous. Also
                                   Kj f → f, as j → ∞,
in the weak topology σ(L∞ , L1 ), ∀f ∈ L∞ (IR). In fact, for any g ∈ L1 (IR)
we have            Z                  Z
                     g(x)Kj f (x)dx = f (u)K̃j g(u)du,

where K̃(u, v) = K(v, u). But K̃ satisfies also the Condition M (0), so
||K̃j g − g||1 → 0, as j → ∞. This implies
                           Z                          Z
        ∀g ∈ L1 (IR),          g(x)Kj f (x)dx →           f (x)g(x)dx, as j → ∞.
                                                                                               2
116                         CHAPTER 9. WAVELETS AND BESOV SPACES


    One can compare Theorem 9.4 with Corollary 8.2, which contains a sim-
ilar result for the Sobolev spaces. Note that the assumptions on the father
wavelet ϕ in both results are the same. Moreover, the result of Corollary 8.2
can be formulated as follows: for any 1 ≤ p ≤ ∞,

          f ∈ WpN +1 (IR) ⇒ f ∈ Lp (IR) and ||Kj f − f ||p = 2−j(N +1) εj ,

with {εj } ∈ l∞ . This and the argument in the proof of Theorem 9.4 (ii) yield
also:
                                                                        3   1
        f ∈ WpN +1 (IR) ⇒ ||α0 ||lp < ∞ and ||βj ||lp = 2−j(N + 2 − p ) ε0j ,           (9.37)

with {ε0j } ∈ l∞ . Using Theorem 8.1 (i) and Theorem 8.3 one can get that,
under the assumptions of Theorem 9.4, for any k = 0, 1, . . . , N ,

      f ∈ W̃pk (IR) ⇒ f ∈ Lp (IR) and ||Kj f − f ||p = 2−jk εj , with {εj } ∈ c0 ,

and

            f ∈ W̃pk (IR) ⇒       ||α0 ||lp < ∞ and
                                                        1   1
                                  ||βj ||lp = 2−j(k+ 2 − p ) ε0j , with {ε0j } ∈ c0 .   (9.38)

Here c0 is the space of sequences tending to 0.
    It turns out that the results (9.37) and (9.38) cannot be inverted. That
is, the Sobolev spaces cannot be characterized in terms of wavelet coeffi-
cients. The situation changes drastically for the Besov spaces, where such a
characterization is possible. This is shown in the next two theorems.

THEOREM 9.5 Let ϕ be a scaling function satisfying (8.33), (8.34) and
the Condition (θ). Let N ≥ 0 be an integer. Assume that ϕ is N + 1 times
weakly differentiable and that the derivative ϕ(N +1) satisfies the Condition
(θ). Then, for any 0 < s < N + 1, 1 ≤ p, q ≤ ∞, and any function
f ∈ Lp (IR) we have

  (i) kKj f − f kp = εj 2−js , j = 0, 1, . . . , with {εj } ∈ lq =⇒ f ∈ Bpsq (IR),
                                                1   1
 (ii) (||α0 ||lp < ∞ and ||βj ||lp = 2−j(s+ 2 − p ) ε0j , j = 0, 1, . . . , with

                                 {ε0j } ∈ lq ) =⇒ f ∈ Bpsq (IR).
9.5. WAVELETS AND APPROXIMATION IN BESOV SPACES                                           117


Proof

 (i) Set u0 = K0 f = Kf, uj = Kj+1 f − Kj f . Then

                              ||uj ||p ≤ 2−js (εj + 2−1 εj+1 )
                                       = 2−js ηj , where {ηj } ∈ lq .                   (9.39)

     Next, for some coefficients {λjk } we have

                                               λjk 2(j+1)/2 ϕ(2j+1 x − k),
                                          X
                              uj (x) =
                                           k

     since Kj+1 f − Kj f ∈ Vj+1 . Thus, by Proposition 8.3,
                          1   1                                          1       1
           C12 2(j+1)( 2 − p ) ||λj ||lp ≤ ||uj ||p ≤ C13 2(j+1)( 2 − p ) ||λj ||lp .   (9.40)

     But                                                     j+1
                 (N +1)
                          (x) = 2(j+1)(N +1)            λjk 2 2 ϕ(N +1) (2j+1 x − k),
                                                  X
               uj
                                                    k

     and using the assumptions of the theorem and Proposition 8.3 we get
                          (N +1)                                     1       1
                     ||uj          ||p ≤ C13 2(j+1)(N +1) 2(j+1)( 2 − p ) ||λj ||lp .

     This, together with (9.39) and (9.40) yield
                    (N +1)               −1 (j+1)(N +1)
                 ||uj         ||p ≤ C13 C12 2           ||uj ||p
                                    ≤ C14 2j(N +1) ||uj ||p = C14 2j(N +1−s) ηj .       (9.41)

     It remains to note that (9.39) and (9.41) guarantee (9.22), while (9.21)
     follows directly from the construction of uj . Thus, applying Theorem
     9.2, we obtain that f ∈ Bpsq (IR).

 (ii) The imposed assumptions imply, jointly with (9.34) and (9.35), that

                        ||Kf ||p < ∞, ||Kj+1 f − Kj f ||p ≤ ε00j 2−js ,

     with {ε00j } ∈ lq . Therefore,
                                    ∞
                                    X
                                          ||Kj+1 f − Kj f ||p < ∞,
                                    j=0
118                         CHAPTER 9. WAVELETS AND BESOV SPACES


       and the series
                                              ∞
                                              X
                                   Kf +             (Kj+1 f − Kj f )
                                              j=0

       converges in Lp (IR). Its limit is f . In fact,

                                      0 −1
                                     jX
                             Kf +            (Kj+1 f − Kj f ) = Kj0 f,
                                      j=0


       for any integer j0 ≥ 1, and therefore

                         ||Kj0 f − f ||p
                           ∞
                           X                                 ∞
                                                             X
                    = ||        (Kj+1 f − Kj f )||p ≤          ||Kj+1 f − Kj f ||p
                           j=j0                           j=j0
                          ∞                     ∞
                               00 −js    −j0 s
                                                    ε00j 2−(j−j0 )s = 2−j0 s ηj0 ,
                         X                     X
                    ≤         εj 2    =2
                         j=j0                  j=j0


       where {ηj0 } ∈ lq by Lemma 9.2.
       To end the proof it suffices to use the part (i) of the present theorem.
       2

THEOREM 9.6 Let ϕ be a scaling function satisfying (8.33), (8.34) and
the Condition S(N + 1), for some integer N ≥ 0. Assume that ϕ is N + 1
times weakly differentiable and that the derivative ϕ(N +1) satisfies the Con-
dition (θ). Then, for any 0 < s < N + 1, 1 ≤ p, q ≤ ∞, and any function
f ∈ Lp (IR) the following conditions are equivalent:

(B1) f ∈ Bpsq (IR),

(B2) ||Kj f − f ||p = 2−js εj , j = 0, 1, . . . , where {εj } ∈ lq ,
                                                    1   1
(B3) ||α0 ||lp < ∞ and ||βj ||lp = 2−j(s+ 2 − p ) ε0j , j = 0, 1, . . . , where {ε0j } ∈ lq .

Proof Implications (B2) =⇒ (B1) and (B3) =⇒ (B1) follow from Theorem
9.5, since Condition S(N + 1) implies Condition (θ) (see Lemma 8.5).
    Implications (B1) =⇒ (B2) and (B1) =⇒ (B3) follow from Theorem 9.4,
since under the imposed assumptions we have ϕ ∈ W1N +1 (IR) (and thus the
condition (W1) of Corollary 8.2 holds).                                2
9.5. WAVELETS AND APPROXIMATION IN BESOV SPACES                                                          119


COROLLARY 9.1 Under the assumptions of Theorem 9.6 the Besov norm
||f ||spq , 1 ≤ p < ∞, 1 ≤ q < ∞, is equivalent to the following norm in the
space of wavelet coefficients:
                                             !1    
                                                       ∞
                                                                                          ! 1 q  1q
                                              p                                              p
                                                               j(s+ 12 − p1 )
         ||f ||0spq =               |αk |p                                          |βjk |p  
                            X                          X                        X
                                                  +       2
                                k                  j=0                          k

where

                                                   Z
                                       αk =            f (x)ϕk (x)dx,
                                                   Z
                                       βjk =           f (x)ψjk (x)dx.

EXAMPLE 9.1 To approximate correctly a function of Bpsq (IR) with s <
N + 1, it is sufficient to use the wavelet expansion with the Daubechies
D2(N + 1) father wavelet ϕ, as discussed in Example 8.1.
    However, the characterization of the Besov space Bpsq (IR) in terms of
wavelet expansions requires more regular wavelets. In fact, to apply The-
orem 9.6, we need that ϕ were N + 1 times weakly differentiable. In view
of (7.10), within the Daubechies family, this property is ensured only for
wavelets D12(N + 1) and higher, and asymptotically (if N is large enough)
for wavelets D10(N + 1) and higher.

   Finally, observe that certain embedding theorems can be easily obtained
using the previous material. For example, we have the following result.

COROLLARY 9.2 Let s > 0, 1 ≤ p ≤ p0 ≤ ∞, and 1 ≤ q ≤ q 0 ≤ ∞.
Then
                            0
  (i) Bpsq (IR) ⊂ Bpsq (IR),

 (ii) Bpk1 (IR) ⊂ Wpk (IR) ⊂ Bpk∞ (IR), for any integer k > 0,
                        0                         1      1
(iii) Bpsq (IR) ⊂ Bps0 q (IR), if s0 −              0
                                                      =s− ,
                                                  p      p
                              1
(iv) Bpsq (IR) ⊂ C(IR), if s > .
                              p
120   CHAPTER 9. WAVELETS AND BESOV SPACES
Chapter 10

Statistical estimation using
wavelets

10.1       Introduction
In Chapters 3, 5, 6 and 7 we discussed techniques to construct functions ϕ and
ψ (father and mother wavelets), such that the wavelet expansion (3.5) holds
for any function f in L2 (IR). This expansion is a special kind of orthogonal
series. It is “special”, since unlike the usual Fourier series, the approximation
is both in frequency and space. In this chapter we consider the problem of
nonparametric statistical estimation of a function f in L2 (IR) by wavelet
methods. We study the density estimation and nonparametric regression
settings. We also present empirical results of wavelet smoothing.
    The idea of the estimation procedure is simple: we replace the unknown
wavelet coefficients {αk }, {βjk } in the wavelet expansion (3.5) by estimates
which are based on the observed data. This will require a truncation of
the infinite series in (3.5) since we can only deal with a finite number of
coefficients. In general, the truncation of the series and the replacement of
wavelet coefficients in (3.5) will be done in a nonlinear way. We shall discuss
in this chapter and in Chapter 11 how many basis functions we need and
why a nonlinear procedure is necessary in order to automatically adapt to
smoothness of the object being estimated.
    Everywhere in this chapter we assume that the father and mother wavelets
ϕ and ψ are real valued functions, rather than complex valued ones. This
covers the usual examples of Daubechies’ wavelets, coiflets and symmlets.

                                      121
122     CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


    The effect of nonlinear smoothing will become visible through many exam-
ples. We emphasize the fact that the statistical wavelet estimation technique
may be of nonlinear form. The nonlinearity, introduced through thresholding
of wavelet coefficients, guarantees smoothness adaptivity of the estimator as
we shall see in Chapter 11.


10.2        Linear wavelet density estimation
Let X1 , . . . , Xn be independent identically distributed random variables with
an unknown density f on IR. A straightforward wavelet estimator of f may
be constructed by estimating the projection of f on Vj1 and it is defined as
                                                          j1 X
                   fˆj1 (x) =
                                X                         X
                                     α̂j0 k ϕj0 k (x) +            β̂jk ψjk (x)          (10.1)
                                 k                        j=j0 k

where j0 , j1 ∈ ZZ are some integers, and the values
                                                 n
                                              1X
                                 α̂jk =             ϕjk (Xi ),                           (10.2)
                                              n i=1
                                              n
                                           1X
                                  β̂jk   =       ψjk (Xi )                               (10.3)
                                           n i=1

are empirical estimates of the coefficients αjk and βjk , constructed by the
method of moments. Note that E(α̂jk ) = αjk , E(β̂jk ) = βjk (here and
later E(·) denotes the expectation with respect to the joint distribution of
observations), i.e. α̂jk and β̂jk are unbiased estimators of αjk and βjk .
    We assume below that ϕ and ψ are compactly supported. Remark that
Proposition 8.6 (vi) yields in this case
X                    X                            X
     ϕjk (Xi )ϕjk (x)+       ψjk (Xi )ψjk (x) =           ϕj+1,k (Xi )ϕj+1,k (x) = Kj+1 (x, Xi )
 k                       k                          k

for any j, where the orthogonal projection kernels are

        Kj (x, y) = 2j K(2j x, 2j y), K(x, y) =
                                                           X
                                                                ϕ(x − k)ϕ(y − k)         (10.4)
                                                            k

(as defined in Sections 8.3 and 8.5).
10.2. LINEAR WAVELET DENSITY ESTIMATION                                                     123


   By successive application of this formula in (10.1), for j starting from j0
up to j1 , we obtain:
                                                                n
                                                             1X
             fˆj1 (x) =
                          X
                                  α̂j1 +1,k ϕj1 +1,k (x) =        Kj +1 (x, Xi ).        (10.5)
                          k                                  n i=1 1
    The estimator fˆj1 (x) is called linear wavelet density estimator. It is a
linear function of the empirical measure
                                                  n
                                               1X
                                        νn =        δ{x }
                                               n i=1 i
                                                                              R
where
R
        δ{x} is the Dirac mass at point x. Thus, α̂jk = ϕjk dνn , β̂jk =
  ψjk dνn , and (10.1) may be formally viewed as a “wavelet expansion” for
νn .
     Unlike (3.5), where the expansion starts from j = 0, in (10.1) we have a
series, starting from j = j0 (the value j0 may be negative, for example). This
does not contradict the general theory, since nothing changes in the argument
of Chapters 3, 5, 6, 7, if one considers the indices j, starting from j0 instead
of 0. In previous chapters the choice j0 = 0 was made just to simplify the
notation. Most software implementations set j0 = 0. However, in practice
the scaling effect may require a different choice for j0 . An empirical method
of selecting j0 is discussed in Section 11.5.
     The role of the constant j1 is similar to that of a bandwidth in kernel
density estimation. The functions ϕjk , ψjk may be regarded as certain scaled
”kernels”, and their scale is defined by the value j which, in case of the
estimator (10.1), is allowed to be in the interval [j0 , j1 ].
     For applications there is no problem with the infinite series over k in
(10.1). In fact, one implements only compactly supported wavelet bases
                                                                    P
(Haar, Daubechies, symmlets, coiflets). For these bases the sums k α̂j0 k ϕj0 k (x)
      P
and k β̂jk ψjk (x) contain only a finite number of terms. The set of indices
k included in the sums depends on the current value x.
REMARK 10.1 If supp ψ ⊆ [−A, A], the sum
                                                                 P
                                                                      β̂jk ψjk only contains the
                                                                  k
indices k such that
                      2j min Xi − A ≤ k ≤ 2j max Xi + A.
                              i                              i
                                          j
Hence, there are at the most 2 (maxi Xi − mini Xi ) + 2A nonzero wavelet
coefficients at the level j. If also the density f of Xi is compactly supported,
the number Mj of non-zero wavelet coefficients on level j is O(2j ).
124   CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


   The choice of resolution level j1 in the wavelet expansion is important.
Let us study this issue in more detail. Suppose that we know the exact
regularity of the density, e.g. we assume that it lies in the Sobolev class of
functions defined as follows:

          W (m, L) = {f : ||f (m) ||2 ≤ L, f is a probability density},

where m > 1 is an integer and L > 0 is a given constant. The number m
denotes as in Section 8.2 the regularity of f . In Chapter 8 we introduced the
Sobolev space W2m (IR), here we just add the bound L on the L2 norm of the
derivative in an explicit form.
   Let us investigate the behavior of the estimator defined in (10.1) when
f ∈ W (m, L). We consider its quadratic risk.
   The mean integrated squared error (MISE) of any estimator fˆ is

                E||fˆ − f ||22 = E||fˆ − E(fˆ)||22 + ||E(fˆ) − f ||22 .

This decomposition divides the risk into two terms:
   • a stochastic error E||fˆ − E(fˆ)||22 due to the randomness of the obser-
     vations.

   • a bias error ||E(fˆ) − f ||22 due to the method. This is the deterministic
     error made in approximating f by E(fˆ).
A fundamental phenomenon, common to all smoothing methods, appears in
this situation. In fact, as it will be shown later, the two kinds of errors have
antagonistic behavior when j1 increases. The balance between the two errors
yields an optimal j1 . Let us evaluate separately the bias and the stochastic
error.

Bound for the bias error
In order to bound the bias term we shall draw upon results of Chapter 8.
Recall some notation of Section 8.3 where approximation kernels were de-
fined. According to this notation, the kernel K(x, y) satisfies the Conditions
H(N + 1) and M (N ) for an integer N > 0, if for some integrable function
F (·)
                                 Z
 |K(x, y)| ≤ F (x − y), with         |x|N +1 F (x)dx < ∞, (ConditionH(N + 1)),
10.2. LINEAR WAVELET DENSITY ESTIMATION                                                  125

  Z
      (y − x)k K(x, y)dy = δ0k , ∀k = 0, 1, . . . , N, ∀x ∈ IR, (ConditionM (N )).
                                                                        (10.6)
We shall now apply the results of Chapter 8 for m ≤ N + 1. In the following
it is assumed that ϕ satisfies Condition (θ) and K(x, y) is the orthogonal
projection kernel associated with ϕ (see Definition 8.7). The estimation of
the bias error is merely a corollary of Theorem 8.1 (ii) and of the fact that
                             
                   E fˆj1 (x) = E (Kj1 +1 (x, X1 )) = Kj1 +1 f (x)                     (10.7)

(see (10.4) – (10.5) and the notation Kj in Section 8.3).
COROLLARY 10.1 Suppose that the father wavelet ϕ is such that the pro-
jection kernel           X
               K(x, y) =    ϕ(x − k)ϕ(y − k)
                                            k

satisfies the condition (10.6). Then, for any m ≤ N + 1, there exists a
constant C > 0 such that

                           sup        ||E(fˆj1 ) − f ||2 ≤ C2−j1 m .
                         f ∈W (m,L)


Bound for the stochastic error
PROPOSITION 10.1 Suppose that ϕ is such that the kernel
                                         X
                          K(x, y) =             ϕ(x − k)ϕ(y − k)
                                            k

satisfies |K(x, y)| ≤ F (x − y) with F ∈ L2 (IR). Then we have
                                                         j1 +1 Z
                                               2
                      E||fˆj1 − E(fˆj1 )||22 ≤                     F 2 (v)dv.
                                                          n
Proof Using (10.7) we have
                                                    Z
              E||fˆj1 − E(fˆj1 )||22 = E                |fˆj1 (x) − E{fˆj1 (x)}|2 dx
                                                         n
                                                                       !2
                                                Z
                                                      1X
                                        =           E       Yi (x)          dx,
                                                      n i=1

where Yi (x) = Kj1 +1 (x, Xi ) − E (Kj1 +1 (x, Xi )) are i.i.d. zero-mean random
variables.
126       CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


   Note that
                                                  Z                       
 E Yi2 (x) ≤ E Kj21 +1 (x, Xi ) ≤ 22j1 +2                 F 2 2j1 +1 (x − y) f (y)dy. (10.8)

Thus
                                22j1 +2 Z       Z                               
             ˆ       ˆ      2
          E||fj1 − E(fj1 )||2 ≤              F 2 2j1 +1 (x − y) dx f (y)dy
                                  n
                                2j1 +1 Z 2
                              =           F (v)dv.
                                  n
We have used the Fubini theorem in the first inequality and a change of
variable in the last equality.                                              2
    Later we write an ≃ bn for two positive sequences {an } and {bn } if there
exist 0 < A < B < ∞ such that A ≤ abnn ≤ B for n large enough.
    The two bounds of Corollary 10.1 and Proposition 10.1 can be summa-
rized in the following
THEOREM 10.1 Under the assumptions of Proposition 10.1 and Corol-
lary 10.1 we have that the MISE is uniformly bounded:
                                                          2j1
                         sup     E||fˆj1 − f ||22 ≤ C1        + C2 2−2j1 m ,
                    f ∈W (m,L)                             n

where C1 and C2 are positive constants. The RHS expression has a minimum
when the two antagonistic quantities are balanced, i.e. for j1 = j1 (n) such
that                                         1
                               2j1 (n) ≃ n 2m+1 .
In that case we obtain
                                                                   2m
                           sup        E||fˆj1 (n) − f ||22 ≤ Cn− 2m+1 ,                (10.9)
                         f ∈W (m,L)

for some C > 0.
   The result of Theorem 10.1 is quite similar to classical results on the L2 -
convergence of the Fourier series estimates (see e.g. Centsov (1962), Pinsker
(1980)). What is more interesting, wavelet estimators have good asymptotic
properties not only in L2 , but also in general Lp norms, and not only on
the Sobolev class W (m, L), but also on functional classes defined by Besov
constraints.
10.2. LINEAR WAVELET DENSITY ESTIMATION                                            127


   Here we give an example of such type of result. The following theorem is
a generalization of Corollary 10.1, with the L2 norm replaced by an Lp norm
and the class W (m, L) replaced by

          B(s, p, q, L) = {f : ||f ||spq ≤ L, f is a probability density}

where the norm ||f ||spq is the Besov norm defined in Section 9.2, and L is
a finite constant. In the following we call B(s, p, q, L) the Besov class of
functions. It is the set of densities in a ball of radius L in the Besov space
Bpsq (IR).

THEOREM 10.2 (Kerkyacharian & Picard (1992)). If
                                         X
                         K(x, y) =            ϕ(x − k)ϕ(y − k)
                                          k

satisfies the conditions (10.6) with F ∈ Lp (IR), 0 < s < N + 1, 2 ≤ p <
∞, 1 ≤ q < ∞, then
                                                                     !p/2 
                                                    2j1                   
                  sup E||fˆj1 − f ||pp < C 2−j1 sp +                           ,
              f ∈B(s,p,q,L)
                                                     n                   


for some constant C > 0, whenever 2j1 ≤ n. The RHS expression has a
minimum when the two antagonistic terms are balanced, i.e. for j1 = j1 (n)
such that
                                         1
                           2j1 (n) ≃ n 2s+1 .
In this case we obtain
                                                                 sp
                         sup         E||fˆj1 (n) − f ||pp ≤ Cn− 2s+1 ,
                     f ∈B(s,p,q,L)


for some C > 0.

REMARK 10.2 This bound is still true for 1 < p < 2 if one requires in
addition that f (x) < w(x), ∀x ∈ IR, for some function w ∈ Lp/2 (IR) which
is symmetric about a point a ∈ IR1 and non-decreasing for x > a. One
remarkable fact is that the level j1 = j1 (n) minimizing the bound of the risk
                              1
still satisfies 2j1 (n) ≃ n 2s+1 . Hence this choice is robust against variations of
p, although it depends on the regularity s.
128    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


   Proof of Theorem 10.2 is a slight modification of the above proofs for
the L2 case. We also split the risk into a stochastic term and a bias term:
                                        n                                                    o
         E||fˆj1 − f ||pp ≤ 2p−1 E||fˆj1 − E(fˆj1 )||pp + ||E(fˆj1 ) − f ||pp .

The bias term is treated similarly to Corollary 10.1, but using the approx-
imation result of Theorem 9.5. The stochastic term requires in addition a
moment inequality. In fact,
                                                   n
                                        Z
                                                1X
   E||fˆj1 − E(fˆj1 )||pp = E               |        Kj +1 (x, Xi ) − E{Kj1 +1 (x, Xi )}|p dx
                                                n i=1 1
                                                    n            p!
                                    Z
                                                 1X
                                =       E              Yi (x)         dx
                                                 n i=1

where Yi (x) = Kj1 +1 (x, Xi ) − E{Kj1 +1 (x, Xi )} are i.i.d. centered random
variables. Note also that Yi (x) are uniformly bounded by 2j1 +2 ||θϕ ||2∞ < ∞.
In fact, Condition (θ) implies that |K(x, y)| ≤ ||θϕ ||2∞ (see Section 8.5). Thus,
|Kj1 +1 (x, y)| ≤ 2j1 +1 ||θϕ ||2∞ .
    The following proposition is proved in Appendix C.

PROPOSITION 10.2 (Rosenthal’s inequality) Let p ≥ 2 and let X1 , . . . , Xn
be independent random variables such that E(Xi ) = 0 and E(|Xi |p ) < ∞.
Then there exists C(p) > 0 such that
                                                                                      !p/2 
                  n          p!             Xn                           n                 
                                                       E (|Xi |p ) +            E(Xi2 )
                  X                                                       X
            E           Xi        ≤ C(p)                                                        .
                                                                                           
                  i=1                            i=1                      i=1


COROLLARY 10.2 If Xi are independent random variables such that E(Xi ) =
0 and |Xi | ≤ M , then for any p ≥ 2 there exists C(p) > 0 such that:
                                                                                         !p/2 
                n          p!                         n                    n                  
                                ≤ C(p) M p−2                  E(Xi2 ) +           E(Xi2 )
                X                                      X                    X
        E             Xi                                                                            .
                                                                                               
                i=1                                     i=1                 i=1


Using this Corollary, we have
                                                                                                           
       n              p!                                n               n             p/2              !
1                           C(p)                                  
                           ≤ p (2j1 +2 ||θϕ ||2∞ )p−2     E Yi2 (x) +     E(Yi2 (x))
       X                                               X               X
   E         Yi (x)                                                                         .
np     i=1                   n                         i=1             i=1
                                                                                          
10.2. LINEAR WAVELET DENSITY ESTIMATION                                                                       129


As in the proof of Proposition 10.1, we find
                          n
                        Z X                                         Z
                                    E(Yi2 (x))dx ≤ n2j1 +1              F 2 (v)dv.
                              i=1

It follows that
               n              p!                                (j1 +1)(p−1) Z
   Z
       1                                                 2 p−2 2
                                                                                              F 2 (v)dv
               X
          E          Yi (x)         dx ≤    C(p)(2||θϕ ||∞ )
       np      i=1
                                                                     p−1       n
                                                                   !p/2
                                               2j1 +1
                                        + C(p)                            2(j1 +1)p/2
                                                 n
                                            Z Z                                            p/2
                                                       2        j1 +1
                                                   F           2        (x − y) f (y)dy              dx
                                                                                                       !p−1
                                                   Z
                                                           2                                  2j1 +1
                                        ≤ C(p)         F       (v)dv(2||θϕ ||2∞ )p−2
                                                                                                n
                                                                                   !p/2
                                                   Z
                                                           p   2j1 +1
                                        + C(p)         F (v)dv                            ,
                                                                 n
where we used (10.8), Jensen‘s inequality and Fubini Theorem. To get the
result of Theorem 10.2 it remains to observe that the leading term here is
 j p/2                                                j p−1             j p/2
 21
 n
         since 2j1 ≤ n and p ≥ 2 imply 2n1       ≤ 2n1      .               2
    Theorems 10.1 and 10.2 reflect the fact that, as a function of j1 , the
bias decreases and the variance increases. In practice this means that with
increasing level the linear wavelet estimates become rougher. This behavior
can be seen from the following graphs.
    In Figure 10.1 we show a graph with a uniform mixture probability density
function and a wavelet estimate based on Haar basis wavelets with j0 = 0
and j1 = 1. The n = 500 pseudo random numbers are displayed as circles
on the horizontal axis. One sees that the estimate at this resolution level
is unable to capture the two peaks. We have chosen deliberately a uniform
mixture density for this and the following examples. The power of wavelet
local smoothing will become evident and the effects of different levels can be
nicely demonstrated. The true density function has the form

       f (x) = 0.5I{x ∈ [0, 1]} + 0.3I{x ∈ [0.4, 0.5]} + 0.2I{x ∈ [0.6, 0.8]}

For practical wavelet density estimation, as well as in all simulated exam-
ples below, we use the technique slightly different from the original definition
130     CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


(10.1). An additional binning of data is introduced. The reason for this is to
enable the use of discrete wavelet transform to compute the estimators (see
Chapter 12). The binned density estimator is defined in m = 2K equidis-
tant gridpoints z1 , . . . , zm , where K ≥ j1 is an integer, zl − zl−1 = ∆ > 0.
The computation is done in two steps. On the first step, using the data
X1 , . . . , Xn , one constructs a histogram, with bins of width ∆, centered at
zl . Usually this should be a very fine histogram, i.e. ∆ should be relatively
small. Let ŷ1 , . . . , ŷm be values of this histogram at points z1 , . . . , zm . On
the second step one computes a certain approximation to the values

               X                          j1 X
                                          X
        fl =       ᾱj0 k ϕj0 k (zl ) +            β̄jk ψjk (zl ), l = 1, . . . , m,   (10.10)
               k                          j=j0 k


where
                                             m
                                          1 X
                                   ᾱjk =       ŷi ϕjk (zi ),                         (10.11)
                                          m i=1
                                                 m
                                              1 X
                                    β̄jk =          ŷi ψjk (zi ).                     (10.12)
                                              m i=1
The approximately computed values fl are taken as estimators of f (zl ), l =
1, . . . , m, at gridpoints z1 , . . . , zm . For more details on the computational
algorithm and the effect of binning see Chapter 12. In the simulated example
considered here we put m = 256.
     The performance of an estimate fˆ is expressed in terms of the integrated
squared error                                 Z
                                    ISE = (fˆ − f )2 .

In our example we approximate the ISE as the squared difference of the
density and its estimate at m = 256 gridpoints:
                                               m
                                            1 X
                                ISE ≈             (fl − f (zl ))2 .
                                            m l=1

The integrated squared error of fˆ = fˆj1 with j1 = 1 and j0 = 0 is ISE = 0.856
which will be compared later with a kernel density estimate. Let us study
now the effect of changing the level j1 . (From now on we shall set j0 = 0.)
   We first increase j1 to 2. The corresponding estimate is given in Figure
10.2. As expected the estimate adapts more to the data and tries to resolve
10.2. LINEAR WAVELET DENSITY ESTIMATION                           131




   Figure 10.1: Uniform mixture random variables (n = 500) with
   density and a Haar wavelet estimate with j1 = 1.




   Figure 10.2: The same variables as in Figure 10.1 and a Haar
   wavelet estimate with j1 = 2.
132    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




      Figure 10.3: The same variables as in Figure 10.1 and a Haar
      wavelet density estimate with j1 = 4.


more local structure. The wavelet density estimate starts to model the peaks
with a reduced ISE of 0.661.
    This effect becomes more pronounced when we increase the level to j1 = 4.
The corresponding wavelet density estimate is shown in Figure 10.3. One
sees that even more structure occurs and that the gap is modelled with the
corresponding shoulders.
    If we increase j1 further the estimator becomes spiky. This can be seen
from Figure 10.4 where we set j1 = 6. Finally, for j1 = 8 (i.e. j1 = log2 m) the
estimator reproduces the binned values ŷ1 , . . . , ŷm at gridpoints, (see Chapter
12 for more details) and this case is of no interest. Also, increasing j1 above
the value log2 m makes no sense.
    The ISE values for different wavelet bases are displayed in Table 10.1.
The ISE values show as a function of j1 the same overall behavior for all
basis functions. The ISE values lie close together and the global minimum
is achieved for j1 around 4.
    Summarizing this experiment of changing the level j1 we find an illustra-
tion to the effect given in Corollary 10.1 and Proposition 10.1. The parameter
j1 determines the spikyness or frequency localization of the estimate. The
10.2. LINEAR WAVELET DENSITY ESTIMATION                                133




        j1       1       2       3       4       5       6       7
     ISE(D2)   0.857   0.661   0.290   0.224   0.141   0.191   0.322
     ISE(D4)   0.747   0.498   0.269   0.156   0.125   0.190   0.279
     ISE(D8)   0.698   0.650   0.459   0.147   0.128   0.158   0.260
    ISE(D16)   0.634   0.613   0.465   0.132   0.133   0.186   0.296
     ISE(S4)   0.700   0.539   0.319   0.146   0.104   0.142   0.275
     ISE(S8)   0.625   0.574   0.328   0.140   0.135   0.147   0.310
     ISE(C1)   0.595   0.558   0.503   0.168   0.136   0.170   0.306


        Table 10.1: ISE values for different density estimates




       Figure 10.4: Haar wavelet density estimate with j1 = 6.
134   CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


more levels we let into (10.1) the more spiky the estimate becomes. The bias
decreases but the variance increases, and there is an optimum at j1 around
4.


10.3       Soft and hard thresholding
Figure 10.4 shows that the linear wavelet estimator may have small spikes.
This reflects the fact that unnecessary high oscillations are included. Since
the detail coefficients βjk are responsible for such oscillations, it is thus nat-
ural to introduce a selection procedure for βjk ’s. More precisely we suppress
too small coefficients by introduction of a threshold. Such a procedure is
called wavelet thresholding. There exist various thresholding procedures.
Here we introduce two of them: soft thresholding and hard thresholding.
These techniques were proposed by D.Donoho and I.Johnstone in the begin-
ning of 1990-ies. A more detailed survey of wavelet thresholding methods is
deferred to Chapter 11.
    In soft thresholding one replaces β̂jk in (10.1) by
                              S
                            β̂jk = (|β̂jk | − t)+ sign (β̂jk )                  (10.13)

where t > 0 is a certain threshold. The wavelet estimator with soft thresh-
olding is also called wavelet shrinkage estimator since it is related to Stein’s
shrinkage (see Section 11.5). In hard thresholding one replaces β̂jk in (10.1)
by
                              H
                            β̂jk = β̂jk I{|β̂jk | > t}.                  (10.14)
               S      H
The plots of β̂jk , β̂jk versus β̂jk are shown in Figure 10.5.
   The wavelet thresholding density estimator is defined as:
                                                      j1 X
                 fn∗ (x) =                                      ∗
                             X                        X
                                  α̂j0k ϕj0 k (x) +            βjk ψjk (x),     (10.15)
                              k                       j=j0 k

        ∗      S                          ∗      H
where βjk  = β̂jk (soft thresholding) or βjk = β̂jk (hard thresholding).
    The effect of thresholding is shown in Figures 10.6 – 10.11 for the same
sample as in the previous graphs. Figure 10.6 shows the wavelet density
estimator (j1 = 8, Haar D2) with hard threshold value t set to 0.4 max |β̂jk |.
                                                                              j,k
We see that spikes are present. This effect is less pronounced if we increase
the threshold to 0.6 max |β̂jk |, see Figure 10.7.
                      j,k
10.3. SOFT AND HARD THRESHOLDING                                             135




                  Figure 10.5: Soft and hard thresholding.


   We increase the threshold value further to 0.8 max |β̂jk | so that only two
                                                      j,k
coefficients are passing the threshold, see Figure 10.8. We see that increasing
the threshold value produces smoother wavelet density estimates but still has
visible local variation. This effect is avoided by soft thresholding.
    The soft threshold was set equal to 0.8 max |β̂jk | for Figure 10.9. The fol-
                                              j,k
lowing Figure 10.10 shows the estimate with a soft threshold of 0.6 max |β̂jk |.
                                                                       j,k
In comparison with Figure 10.7 one sees the effect of downweighting the
coefficients. Figure 10.11 finally shows the threshold value decreased to
0.4 max |β̂jk |. The estimate is rougher due to the lower threshold value.
    j,k
    In our specific example soft thresholding decreased the ISE further.
In Table 10.2 Rwe give estimates of the integrated squared error distances
ISE(fn∗ , f ) = (fn∗ − f )2 as a function of the threshold value and the method
of hard or soft thresholding. One sees that the best ISE value is obtained for
soft thresholding procedure with j1 = 8, t = 0.4 max |β̂j,k |. However, this is
                                                     j,k
not the best case, if one compares Figures 10.6 – 10.11 visually. The L2 error
(ISE or MISE) is not always adequate for visual interpretation (cf. Marron
& Tsybakov (1995)).
136    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




      Figure 10.6: A sample of n = 500 points with uniform mixture
      density and a Haar wavelet density estimate. The hard threshold
      was set to 0.4 max |β̂jk |.
                    j,k




                 threshold/max |β̂j,k | 0.4   0.6    0.8
                             j,k
                          hard         0.225 0.193 0.201
                          soft         0.177 0.221 0.253


  Table 10.2: ISE for different threshold values, j1 = 8, Haar wavelet.
10.3. SOFT AND HARD THRESHOLDING                                  137




   Figure 10.7: A sample of n = 500 points with density and a
   Haar wavelet density estimate. The hard threshold was set to
   0.6 max |β̂jk |.
      j,k
138    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




      Figure 10.8: A sample of n = 500 points with density and a
      Haar wavelet density estimate. The hard threshold was set to
      0.8 max |β̂jk |.
         j,k
10.3. SOFT AND HARD THRESHOLDING                                        139




   Figure 10.9: Soft thresholding with data from Figure 10.6. Thresh-
   old value 0.8 max |β̂jk |.
                 j,k
140    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




      Figure 10.10: Soft thresholding with data from Figure 10.6. Thresh-
      old value 0.6 max |β̂jk |.
                    j,k
10.3. SOFT AND HARD THRESHOLDING                                         141




   Figure 10.11: Soft thresholding with data from Figure 10.6. Thresh-
   old value 0.4 max |β̂jk |.
                 j,k
142    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


   Remark that we choose thresholds as multiples of max |β̂j,k |, in order to
                                                           j,k
compare them on a common scale. Thresholding can be done level by level,
allowing t = tj to depend on the level j. Then the values tj can be chosen
as multiples of max |β̂j,k |. Another natural way of choosing a threshold is
                        k
taking t or tj as an order statistic of the set of absolute values of coefficients
{|β̂j,k |}j,k or {|β̂j,k |}k , respectively. This is discussed in Section 11.5.

    As a further reference to later chapters we give a modification of the
above figures that avoids the local spikyness visible in the last graphs. Figure
10.12 presents a so called translation invariant wavelet density smoother. To
construct it we essentially perform an average of as many wavelet smoothers
as there are bins. In Section 12.5 we define this estimator.




      Figure 10.12: Translation invariant thresholding with data from
      Figure 10.6. Threshold value 0.25 max |β̂jk |.
                                           j,k
10.4. LINEAR VERSUS NONLINEAR WAVELET DENSITY ESTIMATION143


10.4      Linear versus nonlinear wavelet density
          estimation
In Section 10.2 we studied the linear wavelet methods. The word linear is
referring to the fact that the estimator is a linear function of the empirical
measure νn = n1 ni=1 δ{Xi } (δ{x} is the Dirac mass at point x). Then we have
                  P

seen in Section 10.3 a need for a (non-linear) thresholding type selection
procedure on the coefficients βjk coming from a practical point of view. This
suggests that for practical reasons non-linear estimators may be useful. We
are going to show now that there is also a theoretical need for non-linear
estimators.
    Note that the linear procedures of Section 10.2 are robust with respect to
the parameters p and q of Besov classes in the sense that the best choice of
the level j1 (n) depends only on the regularity s (cf. Remark 10.2). Observe
also that in Theorem 10.2 the function f belongs to the class B(s, p, q, L),
and the risk of an estimator is calculated in Lp norm, with the same p as
in the definition of the class. This will be referred to as matched a priori
assumptions on the smoothness class of functions f and on the risk.
    The following questions arise then:

Question 10.1 What is the optimal rate of convergence attainable by an
estimator when the underlying function f belongs to a certain Besov class of
functions ?

Question 10.2 Is there an effect of matched a priori assumptions in this
optimal rate ?

Question 10.3 Does it happen that linear wavelet estimators attain the op-
timal rate of convergence ?

Question 10.4 If this is the case, is it always true or are there situations
where one must use non–linear procedures to obtain optimal rates ?

Question 10.5 If it is the case, what about the performance of wavelet
thresholding estimators?

The aim of this section is to answer these questions. To define correctly the
notion of optimal rate of convergence, let us introduce the following minimax
framework.
144   CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


    Let V be a class of functions. Assume that it is known that f ∈ V . The
Lp risk of an arbitrary estimator Tn = Tn (X1 , ..., Xn ) based on the sample
X1 , .., Xn is defined as

                                    E||Tn − f ||pp ,
1 ≤ p < ∞.
   Consider the Lp minimax risk:

                      Rn (V, p) = inf sup E||Tn − f ||pp ,
                                       Tn f ∈V


where the infimum is taken over all estimators Tn (measurable functions
taking their values in a space containing V ) of f . Let us also consider the
linear Lp minimax risk

                     Rnlin (V, p) = inf
                                     lin
                                         sup E||Tnlin − f ||pp
                                      Tn   f ∈V


where the infimum is now taken over all linear estimators Tnlin in the sense
quoted above. Obviously,

                               Rnlin (V, p) ≥ Rn (V, p).             (10.16)
                                                           1
DEFINITION 10.1 The sequence an ≃ Rn (V, p) p is called optimal rate
of convergence (or minimax rate of convergence) on the class V for the Lp
risk. We say that an estimator fn of f attains optimal rate of convergence if

                        sup E||fn − f ||pp ≃ Rn (V, p).
                        f ∈V


    Note that the optimal rate of convergence is defined up to a constant or
bounded variable factor.
    In view of this definition, the answer to Question 10.1 would be obtained
by investigation of the asymptotics of the minimax risk Rn (V, p), when V
is a Besov class. Note that some information on this asymptotics is already
available from Theorem 10.2. In fact, Theorem 10.2 implies that if V =
B(s, p, q, L), then
                                                 sp
                             Rnlin (V, p) ≤ Cn− 2s+1 ,                (10.17)
where C > 0 is a constant.(Here and later we use generic notation C for
positive constants, possibly different.)
10.4. LINEAR VERSUS NONLINEAR WAVELET DENSITY ESTIMATION145


   If, in addition, we could prove that, for V = B(s, p, q, L) and some C 0 > 0
                                                  sp
                             Rn (V, p) ≥ C 0 n− 2s+1 ,                   (10.18)

then it would follow from (10.16) and (10.17) that
                                                         sp
                        Rnlin (V, p) ≃ Rn (V, p) ≃ n− 2s+1               (10.19)

and the linear estimators introduced
                              s
                                         in Section 10.2 would attain the optimal
                          − 2s+1
rate which would be n            . This would give an answer to Questions 10.1
and 10.2. However, Theorem 10.2, that we used in this reasoning, was proved
only for the matched case. In the non-matched case, where V = B(s, r, q, L)
and r 6= p, the situation turns out to be more complex.
                                                      s
                                                              The minimax rates
of convergence are, in general, different from n− 2s+1 , and they depend on the
configuration (s, r, p, q). Moreover, it is not always possible to achieve opti-
mal rates by use of linear estimators. Before discussing this in more detail,
let us make some remarks on related earlier work in minimax nonparametric
estimation.
    The minimax theory has been largely developed in 1980-ies and 1990-ies.
A variety of results have been obtained with different function classes, losses
and observation models. Among many others let us mention Bretagnolle
& Huber (1979), Ibragimov & Hasminskii (1980, 1981), Stone (1980, 1982),
Birgé (1983), who obtained, in particular, the minimax rates for Sobolev
classes and Lp risks and proved that kernel estimators attain these rates
under certain conditions. Pinsker (1980), Efroimovich & Pinsker (1981),
Nussbaum (1985) obtained not only rate optimal but exact asymptotically
optimal procedures for the L2 risks on Sobolev classes. In all these results
the risk function is matched with the class of functions.
    The first systematic study of non-matched situation is due to Nemirovskii
(1985). He classified optimal convergence rates (up to a logarithmic factor)
for Lr Sobolev classes and Lp risks, in the nonparametric regression problem
with regular design.
    Nemirovskii, Polyak & Tsybakov(1983, 1985) and Nemirovskii (1986)
pointed out that for certain combinations of Lp risks and Sobolev classes
no linear estimator can attain optimal rates in nonparametric regression and
the best nonlinear estimators outperform the linear ones by a factor polyno-
mial in n. In other words, kernel, spline, Fourier or linear wavelet methods
even though properly windowed are suboptimal. This is what we are going
146     CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


to investigate below in the case of density estimation, Besov classes and Lp
risks.
    As compared to Section 10.2, we use for technical reasons a slightly mod-
ified definition of Besov classes. We add the compactness of support assump-
tion on the density f . Let s > 0, r ≥ 1, q ≥ 1, L > 0, L0 > 0 be fixed numbers.
Consider the Besov class B̃(s, r, q, L, L0 ) = B̃(s, r, q) defined as follows:

B̃(s, r, q) = {f : f is a probability density on IR with a compact support
              of length ≤ L0 , and ||f ||srq ≤ L}.

The entries L and L0 are omitted in the notation for sake of brevity.

THEOREM 10.3 Let 1 ≤ r ≤ ∞, 1 ≤ q ≤ ∞, s > 1r , 1 ≤ p < ∞. Then
there exists C > 0 such that

                         Rn (B̃(s, r, q), p) ≥ Crn (s, r, p, q),                 (10.20)

where
                        −α p                  s                          p
                        n 1 ,          α1 = 2s+1  ,             if r > 2s+1 ,
      rn (s, r, p, q) =  log n α2 p         s− r1 + p1                  p      (10.21)
                       
                            n
                                      , α2 = 2(s− 1 )+1 ,        if r ≤ 2s+1 .
                                                     r

                                     
Let, moreover, s0 = s −         1
                                r
                                  − p1 .Then
                                      +

                                                          s0 p
                            Rnlin (B̃(s, r, q), p) ≃ n− 2s0 +1 .                 (10.22)

   This theorem has been proved in Donoho, Johnstone, Kerkyacharian &
Picard (1996). (We refer to this paper later on, for further discussion.) Before
the proof of Theorem 10.3 some remarks and a corollary are in order.

REMARK 10.3 The result (10.20) is a lower bound on the minimax risk
over the Besov classes. It divides the whole space of values (r, p) into two
main zones:
                                          p
                            (i) r >           (regular zone),
                                       2s + 1
and
                                             p
                            (ii) r ≤             (sparse zone).
                                          2s + 1
10.4. LINEAR VERSUS NONLINEAR WAVELET DENSITY ESTIMATION147


The names ”regular“ and ”sparse“ are motivated as follows.                   s
    The regular zone is characterized by the same rate of convergence n− 2s+1
as in the matched case. It will be clear from the proof of (10.20) that the
worst functions f (i.e. the hardest functions to estimate) in the regular case
are of a saw-tooth form: their oscillations are equally dispersed on a fixed
interval of the real line.
    The sparse zone is characterized by a different rate of convergence, as
compared to the matched case. The hardest functions to estimate in this zone
have quite sharply localized irregularities, and are very regular elsewhere.
Thus, only few detail coefficients βjk are non-zero. This explains the name
”sparse“.
                           p
    The boundary r = 2s+1    between the sparse and regular zones is a special
case. Here α2 = α1 , and the rate rn differs from that of the regular zone only
by a logarithmic factor.

REMARK 10.4 The result (10.22) on linear risks also splits their asymp-
totics into two zones. In fact, s0 takes two possible values:
                             (
                                     s       ,   if r ≥ p,
                      s0 =
                                 s − 1r + p1 ,    if r < p.

Thus, we have the zones:

                         (i) r ≥ p (homogeneous zone),
and
                     (ii) r < p (non-homogeneous zone).
    In
     s
       the homogeneous zone linear estimators attain the rate of convergence
n− 2s+1 of the matched case. In the non-homogeneous zone we have s0 =
                                                                          s0
s − 1r + p1 < s, and thus the convergence rate of linear estimators n− 2s0 +1 is
                  s
slower than n− 2s+1 .

  Note that the homogeneous zone is always contained in the regular zone.
Thus, we have the following corollary.

COROLLARY 10.3 (Homogeneous case) Let r ≥ p. Then, under the
assumptions of Theorem 10.3,
                                                                  sp
               Rnlin (B̃(s, r, q), p) ≃ Rn (B̃(s, r, q), p) ≃ n− 2s+1 .
148    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




      Figure 10.13: Classification of optimal rates of convergence for lin-
      ear and non-linear estimates.

   Graphically, the Remarks 10.3 and 10.4 can be summarized as shown
in Figure 10.13. (Intermediate zone is the intersection of regular and non-
homogeneous zones.) The 3 zones in Figure 10.13 are characterized as follows:

   • homogeneous zone:
                                s
         – optimal rate is n− 2s+1 , as in the matched case,
         – linear estimators attain the optimal rate,

   • intermediate zone:
                                s
         – optimal rate is n− 2s+1 , as in the matched case,
         – linear estimators do not attain the optimal rate,

   • sparse zone:

         – optimal rate is slower than in the matched case, and it depends
           on p and r,
         – linear estimators do not attain the optimal rate.

   This classification contains answers to the Questions 10.2, 10.3 and 10.4.
In doing this classification, we tacitly assumed that the values rn in (10.21)
10.4. LINEAR VERSUS NONLINEAR WAVELET DENSITY ESTIMATION149


represent not only the lower bounds for minimax risks, but also their true
asymptotics. This assumption will be justified (to within logarithmic factors
of the rates) in the next section.
    The rest of this section is devoted to the proof of Theorem 10.3. We give
the complete proof of (10.20), and some remarks on the proof of (10.22),
referring for more details to Donoho, Johnstone, Kerkyacharian & Picard
(1996).
    Consider first the proof of (10.22). Since B̃(s, p, q, L, L0 ) ⊂ B(s, p, q, L),
∀L0 > 0, it follows from Theorem 10.2 that
                                                                sp
                          Rnlin (B̃(s, p, q), p) ≤ Cn− 2s+1                  (10.23)

where C > 0 is a constant. On the other hand, consider the linear estimator
fˆj1 such that the functions ϕ and ψ are compactly supported and the condi-
tions of Theorem 10.2 are satisfied. Then, using the fact that f ∈ B̃(s, p, q) is
compactly supported, we get that fˆj1 has a support contained in a δ- neigh-
borhood of supp f , where δ > 0 depends only on ϕ, ψ and j0 . Thus, there
exists C > 0 depending only on ϕ, ψ, j0 and L0 , such that supp (fˆj1 − f ) has
a length ≤ C. Using this and the Hölder inequality, we obtain, for r > p,
                                           1−p/r
                    E||fˆj1 − f ||pp ≤ C           (E||fˆj1 − f ||rr )p/r
                                                                  1
and hence, in view of Theorem 10.2 with 2j1 ≃ n 2s+1 ,
                                                         sp
                      Rnlin (B̃(s, r, q), p) ≤ Cn− 2s+1 , , r > p,           (10.24)

where C > 0 is a constant. For r < p using the embedding theorems of Besov
spaces (see Corollary 9.2), we have B̃(s, r, q) ⊂ B̃(s0 , p, q) with s0 = s + p1 − 1r
and so, in view of (10.23),

                  Rnlin (B̃(s, r, q), p) ≤ Rnlin (B̃(s0 , p, q), p) ≤
                                                        s0 p
                                         ≤ Cn− 2s0 +1 , r < p.               (10.25)

Combining (10.23)–(10.25), we find
                                                               s0 p
                          Rnlin (B̃(s, r, q), p) ≤ Cn− 2s0 +1 ,              (10.26)

for all (r, p) satisfying the assumptions of Theorem 10.3. Next clearly,

                      Rnlin (B̃(s, r, q), p) ≥ Rn (B̃(s, r, q), p),
150    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


which, together with (10.20) implies
                                                         sp
                      Rnlin (B̃(s, r, q), p) ≥ C 0 n− 2s+1 , r ≥ p,         (10.27)

where C 0 > 0 is a constant.
    From (10.26) and (10.27) we deduce (10.22) in the homogeneous case (i.e.
for r ≥ p). To show (10.22) in the case r < p one needs to complete (10.26)
by the lower bound
                                                         s0 p
                      Rnlin (B̃(s, r, q), p) ≥ C 0 n− 2s0 +1 , r < p,

with some C 0 > 0. For the proof of this bound we refer to Donoho, Johnstone,
Kerkyacharian & Picard (1996).
    It remains to prove the lower bound (10.20). The proof presented below
differs from that of Donoho, Johnstone, Kerkyacharian & Picard (1996). We
employ different techniques for the sparse and regular cases respectively.
    In the sparse case, we use a simple lemma, due to Korostelev & Tsybakov
(1993b), Ch.2, which yields a lower bound in the problem of distinguishing
between a finite number of hypotheses in terms of the behavior of the likeli-
hood ratio. This technique is flexible enough to be implemented in a variety
of situations (see e.g. Hoffmann (1996) for application to estimation of a
volatility function in a stochastic differential equation). Further refinements
of this lemma are given in Korostelev & Tsybakov (1993a) and Tsybakov
(1995). For convenience we formulate this lemma here and give its proof.
    In the regular case, the proof of (10.20) is based on Assouad’s lemma
(see Bretagnolle & Huber (1979), Assouad (1983), Korostelev & Tsybakov
(1993b),Ch.2)).
    We start with the proof of the lower bound (10.20) in the sparse case.

Risk bounds: sparse case
Let d(·, ·) be a distance on V and let
                                                  dPfn
                                   Λn (f, g) =
                                                  dPgn

be the likelihood ratio where Pfn is the probability distribution of X1 , . . . , Xn
if f is true. The ratio Λn (f, g) is defined only if Pfn is absolutely continuous
with respect to Pgn .
10.4. LINEAR VERSUS NONLINEAR WAVELET DENSITY ESTIMATION151


LEMMA 10.1 (Korostelev & Tsybakov (1993b)) Let V contain the func-
tions g0 , . . . , gK such that

  (i) d(gk0 , gk ) ≥ δ > 0, for k = 0, . . . , K, k 6= k 0 ,

 (ii) K ≥ exp(λn ), for some λn > 0,

(iii) Λn (g0 , gk ) = exp{znk −vnk } where znk is a random variable such that there
      exists π0 > 0 with Pgnk (znk > 0) ≥ π0 , and υnk are constants,

 (iv) supk υnk ≤ λn .

Then                                       !
                                    δ                                   δ   π0
            sup Pfn     d(fˆ, f ) ≥             ≥ sup Pgnk (d(fˆ, gk ) ≥ ) ≥ ,
            f ∈V                    2            1≤k≤K                  2   2
for an arbitrary estimator fˆ.

    Proof. Let us observe that because of the triangle inequality d(gi , gk ) ≤
d(f , gi ) + d(fˆ, gk ), the events {d(fˆ, gi ) < 2δ } are disjoint and
  ˆ
                                                                              
       Pgn0 d(fˆ, g0 ) ≥ 2δ       ≥ Pgn0 ∪i6=0 {d(fˆ, gi ) < 2δ }
                                    P n ˆ                  
                                  =     P d(f , gi ) < δ
                                                 g0                      2
                                         i6=0         h                                i
                                                Egni Λn (g0 , gi )I d(fˆ, gi ) < 2δ
                                         P
                                  =
                                         i6=0                                               
                                  ≥             exp(−vni )Pgni d(fˆ, gi ) < 2δ , zni > 0
                                         P
                                         i6=0                                                
                                  ≥ exp(−λn )                    Pgni d(fˆ, gi ) < 2δ , zni > 0 ,
                                                          P
                                                          i6=0


where Egn denotes expectation with respect to Pgn . Assume that
                                                                 !
                                                        δ                π0
                                  Pgni     d(fˆ, gi ) ≥              ≤
                                                        2                2

for all i 6= 0 (ifit is not thecase, the lemma is proved).
Therefore, Pgni d(fˆ, gi ) < 2δ ≥ 1 − π20 , and since Pgni (zni > 0) ≥ π0 , then
                                                                     !
                                               δ           π0
                           Pgni    d(fˆ, gi ) < ; zni > 0 ≥ ,
                                               2           2
152    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


for all i 6= 0. It follows that
                                             !
                                         δ           π0              π0
                    Pgn0    d(fˆ, g0 ) ≥         ≥      K exp(−λn ) ≥ .
                                         2           2               2
                                                                     2
    Let us now use Lemma 10.1 to prove the lower bound on the minimax
                               p
risk in the sparse case: r ≤ 2s+1 . Consider a function g0 such that

    • g0 is a probability density,

    • ||g0 ||srq ≤ L2 ,

    • g0 (x) = c0 > 0 on an interval [a, b], a < b,

    • the length of supp g0 is less than L0 .

Clearly g0 ∈ B̃(s, r, q). Let ψ be a very regular (for example satisfying the
assumptions of Theorem 9.6) wavelet with compact support (see Chapter 7).
Consider the set {gk = g0 + γψjk , k ∈ Rj }, where j is an integer to be chosen
below ,γ > 0, and Rj is the maximal subset of ZZ such that

                          supp ψjk ⊂ [a, b],        ∀k ∈ Rj ,
                          supp ψjk ∩ supp ψjk0 = ∅, if k 6= k 0 .
                                                                        R
It is easy to see that gk are probability densities. In fact ψjk = 0 as follows
                                     j
from (5.18). Note that card Rj ≃ 2T (b − a) if T is the length of the support
of ψ. Assume that T , ψ and a, b are chosen so that, for our value j,

                                    Sj = card Rj = 2j .
                                                                                           1   1
Using Corollary 9.1 we have ||gk ||srq ≤ ||g0 ||srq +γ||ψjk ||srq ≤ L2 +c1 γ2j(s+ 2 − r ) ,
where c1 > 0 is a constant ; in what follows we set c1 = 1 for simplicity.
                                             j
Also gk = 1; gk (x) ≥ c0 − γ||ψ||∞ 2 2 , ∀x ∈ [a, b] , and the length of supp
      R

gk is less than L0 . Hence gk ∈ B̃(s, r, q) if γ ≤ c0 2−j/2 /||ψ||∞ and γ ≤
L −j(s+ 12 − r1 )
2
  2               . Obviously, the first inequality is true for j large enough if the
second inequality is satisfied. In the following we assume that this is the
case.
    We have for the Lp distance d(·, ·) :
                                                        1   1
 d(gk , gk0 ) ≥ d(gk , g0 ) = ||gk − g0 ||p = γ2j( 2 − p ) ||ψ||p , k 6= 0, k 0 6= 0, k 6= k 0 .
10.4. LINEAR VERSUS NONLINEAR WAVELET DENSITY ESTIMATION153

                                                        1  1
Thus, condition (i) of Lemma 10.1 holds with δ = γ2j ( 2 − p ) ||ψ||p . The mea-
sures Pgn0 and Pgnk are mutually absolutely continuous with
                        n
                        Y g0 (Xi )
  Λn (g0 , gk ) =
                        i=1 gk (Xi )
                         n         γ               !
                        Y            ψ (Xi )
                                   c0 jk
               =              1−
                        i=1      1 + cγ0 ψjk (Xi )
                              ( n "                                                        #)
                               X γ                   1 γ
                                                                 2    γ
                                                                                   
               = exp                      Vk (Xi ) −      Vk (Xi ) + κ    Vk (Xi )               ,
                               i=1     c0            2 c0              c0
where we denote
                                              ψjk (Xi )       c0 ψjk (Xi )
                            Vk (Xi ) =         γ            =
                                           1 + c0 ψjk (Xi )     gk (Xi )
                                           2
and κ(u) = log(1 − u) − u + u2 .
   Now, choose
                                     s                     s           !      1
                            γ       log n j                      n         s+ 1 1
                                                                              2−r
                               = t0      , 2 ≃
                            c0        n                        log n
where t0 > 0, and let us verify that we can apply Lemma 10.1. Put
            t20 n
     vnk =     E {Vk (Xi )2 } log n,
             2s gk
                      n
                log n X
     ζn   = t0           Vk (Xi ),
                   n i=1
              n                           n 
                  γ             t20 log n X
                                                            n         o
                                              Vk (Xi )2 − Egnk Vk (Xi )2 .
              X
     ηn   =     κ    Vk (Xi ) −
            i=1   c0                2n i=1
We have Λn (g0 , gk ) = exp{znk − vnk } with znk = ζn + ηn . (We omitted the index
k in ζn or ηn ). Now, let us observe that s > 1/r and thus for j large enough
we have gk (u) > c20 , ∀u ∈ [a, b]. Hence,
                    n            o               Z
             Egnk Vk (Xi )2            ≤ 2c0          2
                                                     ψjk (u)du = 2c0 ,                     (10.28)
               n                 o               Z
           Egnk |Vk (Xi )|3            ≤ 4c0         |ψjk (u)|3 du ≤ 2j/2+2 ||ψ||33 c0 ,   (10.29)
                    n            o               Z
             Egnk Vk (Xi )4            ≤ 8c0          4
                                                     ψjk (u)du ≤ 2j+3 ||ψ||44 c0 ,         (10.30)
              Egnk {Vk (Xi )} = 0.                                                         (10.31)
154    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


By the choice of j, there exists a constant C > 0 such that
                                                    !         1
                                        n                (
                                                         2 s+ 1 1
                                                              2−r   )
                               2j ≥ C                                   ,
                                      log n

and therefore, for n large enough,
                                1
            j log 2 ≥                      [log n − log log n] + log C ≥ λn ,
                        2 s + 12 − 1r
              log n
where λn = 4 s+         . Since card Rj = 2j , we get also card Rj ≥ exp(λn ).
            ( 21 − r1 )
On the other hand, from (10.28) we deduce:

                                     vnk ≤ t20 c0 log n ≤ λn

for t0 small enough. This yields conditions (ii) and (iv) of Lemma 10.1. To
obtain the condition (iii) of Lemma 10.1, we must prove that Pgnk (znk > 0) ≥
π0 > 0. This will follow from the next facts:
         q
  1.◦ ζn / Var{ζn } converges in Pgnk distribution to a zero-mean normal vari-
      able with variance 1.

  2.◦ Var{ζn } ≥ c20 t20 log n (≥ 1, say, for n large enough).

  3.◦ ηn converges to 0 in Pgnk probability.
To prove 1◦ we apply the Central Limit Theorem with Lyapunov conditions
(see for instance Pollard (1984)) and use (10.29). Next, to show 2◦ , note that,
                                                    R ψ2 (u)
for n large enough, Var{ζn } = c20 t20 log n gjk    du ≥ (c0 /2)t20 log n ψjk
                                                                           2
                                                                                          R
                                              k (u)
                                                                              (u)du.
               ◦
The proof of 3 uses (10.29) and (10.30) and it is left to the reader.
    Finally, applying Lemma 10.1 and the Markov inequality, we obtain:
                                                                  !p
                                                            δ         π0
                             Rn B̃(s, r, q), p ≥
                                                              2         2

with                                                 1    1
                         s             s           ! 2−p                        !α2
                             log n           n      s+ 1 1
                                                       2−r              log n
                  δ≃                                          =                       .
                               n           log n                          n
This gives the result (10.20)-(10.21) in the sparse case.
10.4. LINEAR VERSUS NONLINEAR WAVELET DENSITY ESTIMATION155


Risk bounds: regular case
The regular case is characterized by the condition r > p/(2s + 1). For
the proof we use a more classical tool: Assouad’s cube (Assouad (1983),
Bretagnolle & Huber (1979)).
   Let g0 , ψjk and Rj be as in the proof for the sparse case. As previously,
denote by Sj the cardinality of Rj . Let ε = (ε1 . . . εSj ) ∈ {−1, +1}Sj , and
take g ε = g0 + γ     εk ψjk . Let us denote by G the set of all such g ε . Note
                   P
                   k∈Rj
                              j
that card G is of order 22 . As ψjk = 0 (see (5.18)), we have g ε = 1. Now,
                                          R                                                     R
                                          j
G is included in B̃(s, r, q) if γ ≤ c0 2− 2 /||ψ||∞ and ||g ε ||srq ≤ L.
    In view of Corollary 9.1,
                                                                  1    1                   1
                ||g ε ||srq ≤ ||g0 ||srq + c1 γ2j(s+ 2 − r ) (                     |εk |r ) r
                                                                            X

                                                                            k∈Rj


where c1 > 0 is a constant; we set for brevity c1 = 1. Since Sj =card Rj = 2j ,
we have ||g ε ||srq ≤ L if
                                              1   1                   L
                                  2j(s+ 2 − r ) 2j/r γ ≤                .
                                                                      2
Thus, for large j only the following constraint on γ is necessary to guarantee
                                        1
that g ε ∈ B̃(s, r, q): γ ≤ (L/2)2−j(s+ 2 ) .

   We now state a lemma which replaces Lemma 10.1 in this context.
                                                      0
LEMMA 10.2 Let δ = inf0 ||g ε − g ε ||p /2.
                              ε6=ε
For ε in {−1, +1}Sj , put ε∗k = (ε01 . . . ε0Sj ) such that:
                                          (
                                                  εi , if     i 6= k,
                                  ε0i =
                                                  −εi , if    i = k.

If there exist λ > 0 and p0 such that
                                                             
                        n
                       Pgε Λn (g ε∗k , g ε ) > e−λ ≥ p0 , ∀ε, n,

then, for any estimator fˆ,
                                      h             Sj    i
                          max Egnε ||fˆ − g ε ||pp ≥ δ p e−λ p0 .
                          gε ∈G                     2
156       CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


     Proof. Denote for the brevity Eg = Egn .

                                                1 X
              max Egε ||fˆ − g ε ||pp ≥               Egε ||fˆ − g ε ||pp
               gε ∈G                          cardG ε
                                                           Z b
                                                1 X
                                            =         Egε      |fˆ − g ε |p (x)dx.
                                              cardG ε       a


Let Ijk be the support of ψjk . As Rj is chosen so that those supports are
disjoint, we have
                                                                                                  
                                           j Z                     S
                              1 X
max Egε ||fˆ − g ε ||pp                          |fˆ − g ε |p (x)dx
                                          X
                          ≥         Egε 
gε ∈G                       cardG ε      k=1 Ijk
                                   Sj       "Z                               #
                              1 X
                                                  |fˆ − g0 + εk γψjk | (x)dx
                                                                      p
                                      X
                          =             Egε
                            cardG k=1 ε       Ijk
                                   Sj             (    "Z                                #
                              1 X
                                                             |fˆ − g0 − εk γψjk |p (x)dx
                                          X
                          =                        Egε
                            cardG k=1 εi ∈{−1,+1}        Ijk
                                                            i6=k
                                            "Z                                                 #)
                          + Egε∗k                      |fˆ − g0 + εk γψjk | (x)dx   p
                                              Ijk
                                   Sj                 "Z
                              1 X
                                                            |fˆ − g0 + εk γψjk |p
                                          X
                          =                       Egε
                            cardG k=1 εi ∈{−1,+1}       Ijk
                                                            i6=k
                                                        Z                                  
                          + Λn (g       ε∗k
                                              ,g )ε
                                                             |fˆ − g0 − εk γψjk |p
                                   Sj                "    (Z                              )
                              1 X         X
                                                       p         ˆ                 p    p
                          ≥                       Egε δ I       |f − g0 + εk γψjk | ≥ δ
                            cardG k=1 εi ∈{−1,+1}           Ijk
                                                            i6=k
                                                                 (Z                                                )#
                          + Λn (g       ε∗k       ε
                                              , g )δ I   p
                                                                             |fˆ − g0 − εk γψjk | ≥ δ
                                                                                                    p          p
                                                                                                                        .
                                                                       Ijk



     Remark that
 Z                               !1/p        Z                                          !1/p           Z                        !1/p
         |fˆ − g0 + εk γψjk |p          +              |fˆ − g0 − εk γψjk |p                   ≥              |2γψjk |      p
   Ijk                                           Ijk                                                    Ijk


     and
10.4. LINEAR VERSUS NONLINEAR WAVELET DENSITY ESTIMATION157


                      Z                      !1/p
                                         p                                                       0
                               |2γψjk |             = ||g ε − g ε∗k ||p = inf0 ||g ε − g ε ||p = 2δ.
                        Ijk                                                     ε6=ε

So we have

                                                  !1/p                                                         !1/p       
     Z                                                                     Z                                              
I                |fˆ − g0 + εk γψjk |p                    >δ       ≥I                  |fˆ − g0 − εk γψjk |p               ≤δ .
          Ijk                                                                Ijk                                          


We deduce that
                                                           S
                                                           j
                                                    1 X                                                     
        Egε ||fˆ − g ε ||pp ≥                                            δ p e−λ Pgε Λn (g ε∗k , g ε ) ≥ e−λ
                                                                 X
    max
     ε
    g ∈G                                          card G k=1 εi ∈{−1,+1}
                                                                     i6=k

                                         Sj p −λ
                                       ≥   δ e p0 ,
                                         2
since card G = 2Sj −1 .                                                  2
                                                                    ε∗k ε
    It remains now to apply Lemma 10.2, i.e. to evaluate δ and Λn (g , g ).
Similarly to the calculations made for the sparse case, we write:
                                 n            2 cγ0 εk ψjk (Xi )
                                                                            !
         ε∗k      ε
                                 Y
Λn (g          ,g ) =                    1−
                                 i=1        1 + cγ0 εk ψjk (Xi )
                                       ( n "                                   2                                       #)
                                        X 2γ                      1 2γ
                                                                            
                                                                                    2γ
                                                                                                    
                          = exp                        Vk (Xi ) −      Vk (Xi ) + κ    Vk (Xi )                              .
                                          i=1       c0            2 c0              c0

Define γ by 2γ
            c0
               = √1n . As in the sparse case proof, we show that

                 n                   q
        • √1n          Vk (Xi )/ Egnε (Vk2 (Xi )) converges in Pgnε distribution to a variable
                 P
                 i=1
          N (0, 1).
                                                   (ψjk (x))2
        • Egnε (Vk2 (Xi )) = c0                                      ≥ c20 since γψjk (x) ≤ c0 for n large
                                              R
                                                  1+ cγ ψjk (x)
                                                                dx
                                                      0
          enough.
               Pn         h                                    i                               N                        
        • n1                  Vk2 (Xi ) − Egnε (Vk2 (Xi )) → 0 as well as                                    √1 Vk (Xi )     →
                                                                                               P
                  i=1                                                                                κ         n
                                                                                               i=1
          0, in Pgnε probability .
158     CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


   This entails the existence of λ > 0 and p0 > 0 such that
                                                              
                             n
                            Pgε Λn (g ε∗k , g ε ) > e−λ ≥ p0 .

It remains to evaluate δ. Since we need γ ≤ (L/2)2−j(s+1/2) this leads to take
        1
2j ≃ n 1+2s . Now
                                        0                                       1     1
             δ = inf ε6=ε0 ||g ε − g ε ||p /2 = ||γψjk ||p = γ2j( 2 − p ) ||ψ||p .

By substitution of this δ in the final inequality of Lemma 10.2 we obtain the
result:
                                   
               Rn B̃(s, r, q), p            ≥ 2j−1 e−λ p0 δ p
                                                                                                      !p
                                                                                      1     1   1
                                            = 2  −p−1 −λ
                                                         e     p0 ||ψ||pp cp0        √ 2j ( 2 − p )        2j
                                                                                       n
                                                         sp
                                            ≥ Cn− 2s+1 ,
      where C > 0 is a constant.

   From the sparse case computation we have

                                                                                    ! (s− r + p )p
                                                                                              1   1
                                                     !α2 p
                                           log n                     log n              (       )
                                                                                               1 +1
                                                                                          2 s− r
            Rn B̃(s, r, q), p ≥ C                             =C
                                               n                         n

where C > 0 is a constant. Thus
                                                     (               !α2 p                    )
                                                           log n                     sp
                                                                                    − 2s+1
               Rn B̃(s, r, q), p ≥ C max                                     ,n                   ,
                                                               n

which yields (10.20)–(10.21).


10.5        Asymptotic properties of wavelet thresh-
            olding estimates
The purpose of this section is to study the performance of Lp -risks of wavelet
thresholding estimator fn∗ defined in (10.15) when the unknown density f
belongs to a Besov class B̃(s, r, q). Then we compare the result with the lower
10.5. ASYMPTOTIC PROPERTIES OF WAVELET THRESHOLDING ESTIMATES159


bound (10.20) of Theorem 10.3, and thus obtain an answer to Questions 10.1
and 10.5.
   Let, as in Theorem 10.3,
                                     s           s − 1r + p1
                             α1 =        , α2 =                ,
                                  2s + 1        2(s − 1r ) + 1
and define                              (                      p
                                            α1 ,    if   r > 2s+1 ,
                                 α=                            p
                                            α2 ,    if   r ≤ 2s+1 .
   Suppose that the parameters j0 , j1 , t of the wavelet thresholding estimator
(10.16) satisfy the assumptions:
                                 (            α                                  p
                    j0 (n)                  ns          ,            if    r > 2s+1 ,
                  2          ≃        α
                                              α(p−r)/sr                          p                (10.32)
                                     n (log n)
                                      s                 ,            if    r ≤ 2s+1 ,
                                                                     0
                                       2j1 (n) ≃ (n/ log n)α/s ,                                  (10.33)
                                                         s
                                                             j
                                            t = tj = c         ,                                  (10.34)
                                                             n
where c > 0 is a positive constant.
   Note that the threshold t in (10.34) depends on j.
THEOREM 10.4 Let 1 ≤ r, q ≤ ∞, 1 ≤ p < ∞, s > 1/ r and r < p, and
let fn∗ be the estimator (10.15) such that:
   • the father wavelet ϕ satisfies the conditions of Theorem 9.4 for some
     integer N ≥ 0,
                                                                            q
        ∗      H                                                                j
   •   βjk = β̂jk with the variable threshold t = tj = c                        n
                                                                                  ,
   • the assumptions (10.32)-(10.34) are satisfied, and s < N + 1.
   Then, for c > 0 large enough, one has
                                                                                           p
                                              C(log n)δ n−α1 p 
                                            
                                                                               , if r > 2s+1 ,
                                                                  α2 p
                                            
                                                       0
                                            
                                                                   log n                   p
            sup         E||fn∗ − f ||pp ≤      C(log n)δ             n
                                                                                , if r = 2s+1 ,
                                             C log n α2 p
                                                    
         f ∈B̃(s,r,q)
                                            
                                                                                           p
                                                                                , if r < 2s+1 ,
                                            
                                                    n

where δ and δ 0 are positive constants depending only on p, s, r, q, and C > 0
is a constant depending only on p, s, r, q, L, L0 .
160   CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS

                                                p
REMARK 10.5        • In the sparse case r < 2s+1   , the rate is sharp: The-
   orems 10.3 and 10.4 agree. The wavelet    thresholding  estimator attains
                                     log n α2
                                         
   the optimal rate of convergence n          .
                              p
   • On the boundary r = 2s+1    of the sparse zone the lower bound of Theo-
     rem 10.3 and the upper bound of Theorem 10.4 differ in a logarithmic
     factor. As this result can be compared with the result obtained in the
     Gaussian white noise setting, (Donoho, Johnstone, Kerkyacharian &
     Picard (1997)) the upper bound of Theorem 10.4 is likely to be correct
     whereas the lower bound (10.20) is too optimistic. In this boundary
     case the optimal rate for the Gaussian white noise setting turns out to
     depend on the parameter q (see Donoho et al. (1997)).
                                p
   • In the regular case r > 2s+1 , the bounds of Theorem 10.3 and 10.4 still
     do not agree. In this case the logarithmic factor is an extra penalty
     for the chosen wavelet thresholding. However, it can be proved, that
     the logarithmic factor
                      q       can be removed by selecting a slightly different
                         j−j0
     threshold: tj = c n (Delyon & Juditsky (1996a)).

REMARK 10.6 It has been proved in Corollary 10.3 that if r ≥ p, then
                                                       
                   Rnlin B̃(s, r, q), p ≃ Rn B̃(s, r, q), p .

From 10.22 and Theorem 10.4 we see that, for r < p, we have strict inequal-
ities:
                                                        
                  Rnlin B̃(s, r, q), p >> Rn B̃(s, r, q), p .

REMARK 10.7 The constant c > 0 in the definition of the threshold
(10.34) can be expressed in terms of s, r, q, L, and it does not depend on
j, n and on a particular density f . We do not discuss here why the particular
form (10.34) of t = tj is chosen: the discussion is deferred to Chapter 11.

REMARK 10.8 The assumption on ϕ in Theorem 10.4 is rather general.
For example, it is satisfied if ϕ is bounded, compactly supported and the
derivative ϕ(N +1) is bounded. These conditions hold for the usual bases of
compactly supported wavelets (Daubechies, coiflets, symmlets) of a suffi-
ciently high order (see Chapter 7).
10.5. ASYMPTOTIC PROPERTIES OF WAVELET THRESHOLDING ESTIMATES161


   Summarizing the results of Theorems 10.3 - 10.4, and the Remarks 10.5–
10.6, we are now able to answer the Questions 10.1 and 10.5:
   • Optimal rates of convergence on the Besov classes B̃(s, r, q) are
                    s
        – n− 2s+1 in the regular case (r > 2s+1
                                             p
                                                ),
                             1   1
                        s− r + p
                log n         1 )+1                             p
        –         n
                         2(s− r
                                      in the sparse case (r < 2s+1 ).
                                                               p
        – There is an uncertainty on the boundary r = 2s+1        , where the
                            −s/(2s+1)
          optimal rate is n           , to within some logarithmic factor (the
          problem of defining this factor remains open).

   • The properly thresholded wavelet estimator (10.15) attains the optimal
     rates (in some cases to within a logarithmic factor).
     The proof of Theorem 10.4 can be found in Donoho, Johnstone, Kerky-
acharian & Picard (1996). We do not reproduce it here, but rather consider a
special case where the bound on the risk of a wavelet thresholding estimator
fn∗ is simpler. This will allow us to present, without excessive technicalities,
the essential steps of the proof.
     Assume the following
                                                              1
                                     p = 2, 1 ≤ r = q < 2, s > ,              (10.35)
                                                              r
                                                       1
                                         2j0 ≃ n 2s+1 ,
                                                        1   1                 (10.36)
                                         2j1 ≥ nα1 /(s− r + 2 ) ,
                                                   s
                                                       log n
                                             t=c             ,                (10.37)
                                                         n
for some large enough c > 0.
                                                    p
    Under the condition (10.35), clearly, p > r > 2s+1 . Thus, we are in the
intermediate zone (see Figure 10.13), and the lower bound on the minimax
risk is, in view of Theorem 10.3,
                                                                      2s
                              rn (s, r, p, q) = rn (s, r, 2, r) = n− 2s+1 .

   The next proposition shows, that, to within a logarithmic factor, the
asymptotic behavior of the wavelet thresholding estimator (10.15) is of the
same order.
162      CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


PROPOSITION 10.3 Let fn∗ be the estimator (10.15) such that:
   • the father wavelet ϕ and the mother wavelet ψ are bounded and com-
     pactly supported, and for some integer N ≥ 0, the derivative ϕ(N +1) is
     bounded,
                                                      q
      ∗      H                                            log n
   • βjk = β̂jk , with the threshold t = c                  n
                                                                ,

   • the assumptions (10.35) – (10.37) are satisfied, and s < N + 1.
Then, for c > 0 large enough, one has
                                                                                           2s
         sup         E||fn∗ − f ||22 ≤ C(log n)γ Rn (B̃(s, r, r), 2) ≃ (log n)γ n− 2s+1 ,
      f ∈B̃(s,r,r)

where γ = 1 − 2r , and C > 0.
                                                                              q
                                                                                  log n
Proof Observe first that the choice of the threshold t = c                          n
                                                                                          instead of
         q
        j
tj = c n
          does not make a big difference since for j0 ≤ j ≤ j1 there exist two
                                q        q        q
constants c1 and c2 such that c1 logn n ≤ nj ≤ c2 logn n . This will be used at
the end of the proof.
   Observe also that the functions f ∈ B̃(s, r, r) are uniformly bounded:

                                             ||f ||∞ ≤ C∗ ,

where C∗ > 0 depends only on s, r, L. This is a consequence of the (compact)
embedding of Brsr (IR) into C(IR) for s > 1/ r (Corollary 9.2 (iv)). As before,
we use the generic notation C for positive constants, possibly different. We
shall also write f ∗ for fn∗ . Note that fˆj0 −1 (x) = k αj0 k ϕj0 k (x) (cf.(10.1)).
                                                      P

By orthogonality of the wavelet basis, one gets

                E||f ∗ − f ||22 = E||fˆj0 −1 − E(fˆj0 −1 )||22
                     j1 X
                                 (E[(β̂jk − βjk )2 I{|β̂jk | > t}] + βjk
                                                                      2
                     X
                +                                                        P {|β̂jk | ≤ t})
                     j=j0 k∈Ωj
                     ∞ X
                                  2
                     X
                +                βjk = T1 + T2 + T3 + T4 ,                                  (10.38)
                     j=j1 k∈Ωj


where Ωj = {k : βjk 6= 0}. Let us observe that card Ωj ≤ 2j L0 + τ , where τ is
the maximum of the lengths of the supports of ϕ and ψ (cf. Remark 10.1).
10.5. ASYMPTOTIC PROPERTIES OF WAVELET THRESHOLDING ESTIMATES163


   The terms Tj are estimated as follows. First, using Proposition 10.1 and
(10.36), we get
                                                                               j0
                                                          2
                    T1 = E||fˆj0 −1 − E(fˆj0 −1 )||22 ≤ C
                                                           n
                                   2s
                                − 2s+1
                         ≤ Cn          .                                                  (10.39)
                                                                                          0
Using the parts (i) and (iii) of Corollary 9.2, we obtain Brsr (IR) ⊂ B2s 2 (IR),
for r < 2, where s0 = s − 1r + 12 . Thus, any function f that belongs to the
                                                            0
ball B̃(s, r, r) in Brsr (IR), also belongs to a ball in B2s 2 (IR). Therefore, by
Theorem 9.6, the wavelet coefficients βjk of f satisfy the condition (B3):
                                ∞
                                             0
                                      22js            2
                                X                X
                                                     βjk < ∞.
                                j=0              k


Hence,
                         ∞ X                                  ∞
                                                          0                0
                                       2
                                          ≤ C2−2j1 s                22js             2
                         X                                    X                X
                T4 =                  βjk                                           βjk
                         j=j1 k∈Ωj                            j=0              k
                                     2s
                                  − 2s+1
                         ≤ Cn              ,                                              (10.40)

where we again use (10.36).
   To estimate the terms T2 and T3 write
                    j1 X
                                                                        t
                              E((β̂jk − βjk )2 )[I{|β̂jk | > t, |βjk | > }
                    X
            T2 =
                    j=j0 k∈Ωj                                           2
                                            t
                    +I{|β̂jk | > t, |βjk | ≤ }],
                                            2
                    j1 X
                                 2
                    X
            T3 =                βjk [P {|β̂jk | ≤ t, |βjk | ≤ 2t}
                    j=j0 k∈Ωj

                    +P {|β̂jk | ≤ t, |βjk | > 2t}].

Note that
                                        t                      t
                I{|β̂jk | > t, |βjk | ≤ } ≤ I{|β̂jk − βjk | > },                          (10.41)
                                        2                      2
                                                               t
                I{|β̂jk | ≤ t, |βjk | > 2t} ≤ I{|β̂jk − βjk | > },
                                                               2
164    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS

                                                             |β   |
and, if |β̂jk | ≤ t, |βjk | > 2t, then |β̂jk | ≤ 2jk , and |β̂jk − βjk | ≥ |βjk | − |β̂jk | ≥
|βjk |/2. Therefore
                                    2
                                   βjk ≤ 4(β̂jk − βjk )2 .                         (10.42)
Using (10.41) and (10.42), we get
                            j1 X      n              o          t
                                      E (β̂jk − βjk )2 I{|βjk | > }
                            X
           T2 + T3 ≤
                            j=j0 k∈Ωj                            2
                                                    
                             2
                        +   βjk I{|βjk | ≤ 2t}
                              j1 X
                                                                       t
                                                                                                
                                                                      2
                              X
                        + 5           E (β̂jk − βjk ) I{|β̂jk − βjk | > } . (10.43)
                            j=j0 k∈Ωj                                  2

Clearly,
                         1                   1Z 2              1          C∗
  E(β̂jk − βjk )2 =        V ar{ψjk (X1 )} ≤   ψjk (x)f (x)dx ≤ ||f ||∞ ≤    .
                         n                   n                 n          n
Also, using the Markov inequality, one easily gets,
                                                                               j1 X
                                                                           r X
                                                t    2
           card {(j, k) : j0 ≤ j ≤ j1 , |βjk | > } ≤                                       |βjk |r .
                                                2    t                            j=j0 k

This yields:
           Pj1                                               t
                              E (β̂jk − βjk )2 I{|βjk | > }
                    P
             j=j0    k∈Ωj
                                                               2
                                   r                      j1
                                C 2                1   1 X X             1   1
                              ≤          2−j0 r(s+ 2 − r )        2jr(s+ 2 − r ) |βjk |r
                                 n t                       j=j0 k
                                                  !r/2
                                C         n                               1   1
                              ≤                          2−j0 r(s+ 2 − r )
                                n       log n
                                         2s
                              ≤ Cn− 2s+1 ,                                                             (10.44)

where we used (10.35), (10.36) and the condition
                                ∞ X
                                                   1     1
                                         2jr(s+ 2 − r ) |βjk |r ≤ C
                                X
                                                                                                       (10.45)
                                j=0 k


that follows from the fact that f ∈ B̃(s, r, r) and from Theorem 9.6.
10.5. ASYMPTOTIC PROPERTIES OF WAVELET THRESHOLDING ESTIMATES165


   Next, as r < 2,
          Pj1        X
                            2
            j=j0           βjk I{|βjk | ≤ 2t}
                      k
                                      j1 X                        ! 2−r
                                                        log n         2
                                                                                     1   1
                                2−r                   r
                                                                          2−j0 r(s+ 2 − r )
                                      X
                     ≤ (2t)                  |βjk | ≤ C
                                      j=j0 k              n
                                 2s             2−r
                     ≤ Cn− 2s+1 (log n) 2 ,                                                   (10.46)

where (10.45) was used.
   Define T41 as the last term in (10.43). Elementary calculation shows:
                 n                     o     C n 4              o
             E (β̂jk − βjk )4              ≤    E    ψ  jk (X1 )
                                             n2
                                             C   Z
                                                       4
                                           =        ψjk  (x)f (x)dx
                                             n2
                                             C           Z
                                                              4          C2j
                                           ≤    ||f ||∞     ψ jk (x)dx ≤     .
                                             n2                          n2
Using this and the Cauchy-Schwarz inequality, one obtains
                            j1 X
                                                                  t
                                                                                  
                                                          2
                            X
           T41     = 5           E (β̂jk − βjk ) I{|β̂jk − βjk | > }
                       j=j0 k∈Ωj                                  2
                                       j1 X
                                  1/2 X
                            C                                                   t
                            
                          ≤                          2j/2 P 1/2 {|β̂jk − βjk | > }
                            n2             j=j0 k∈Ωj                            2
                                                                          s
                               j1 X
                            C X                                       j
                          ≤             2j/2 P 1/2 {|β̂jk − βjk | > c   },                    (10.47)
                            n j=j0 k∈Ωj                               n

where (10.36) and (10.37) were used.
   The last probability in (10.47) is evaluated using the following well known
lemma (see the proof in Appendix C).

LEMMA 10.3 (Bernstein’s inequality.) Let ζ1 , . . . , ζn be i.i.d. bounded
random variables, such that E(ζi ) = 0, E(ζi2 ) ≤ σ 2 , |ζi | ≤ ||ζ||∞ < ∞. Then
                 n
                                               nλ2
                                                                          !
              1X
         P (|       ζi | > λ) ≤ 2 exp −                     , ∀λ > 0.
              n i=1                     2(σ 2 + ||ζ||∞ λ/3)
166    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


Applying Lemma 10.3 to ζi = ψjk (Xi ) − E(ψjk (Xi )), and noting that one
can define σ 2 = C∗ ≥ ||f ||∞ ≥ V ar{ψjk (X1 )}, we conclude that, if c > 0 is
large enough,                            s 
                                          j
                      P |β̂jk − βjk | > c       ≤ 2−4j .
                                          n

Next, substitute this into (10.47), and obtain the following
                                j1 X                 j1
                             C X                  C X
                   T41 ≤                 2−3j/2 ≤        2−j/2
                             n j=j0 k∈Ωj          n j=j0
                             C −j0 /2 C
                         ≤     2     ≤ ,                                   (10.48)
                             n        n
where we used the fact that card Ωj ≤ C2j , mentioned at the beginning of
the proof.
   To end the proof of the proposition it remains to put together (10.38) –
(10.40), (10.43), (10.44) and (10.46) – (10.48).                         2


10.6       Some real data examples
Estimation of financial return densities
For a given time series of financial data Si (e.g. stock prices), returns are
defined as the first differences of the log series, Xi = log Si −log Si−1 . A basic
distributional assumption in the statistical analysis of finance data is that
returns are approximately normally distributed. The assumption is helpful
in applying the maximum likelihood rule for certain models e.g. the ARCH
specification (Gourieroux 1992). Another reason for the dominance of the
normality assumption in finance is that in traditional equilibrium models as
the capital asset pricing model (CAPM), established by Sharpe (1964) and
Lintner (1965), utility functions are quadratic. Thus they only depend on the
first two moments of the return distribution. Also in option pricing the nor-
mality assumption of returns together with constant volatility (variance) of
Xi is vital. The Black & Scholes (1973) formula yields under this assumption
a unique option price as a function of strike price and volatility.
    It has been criticized in the recent literature that the normality assump-
tion does not capture typical phenomena of the distribution of financial data
10.6. SOME REAL DATA EXAMPLES                                               167


like foreign exchange or stock returns: thickness of tails, slim center concen-
tration, multimodality or skewness for different market periods, Gourieroux
(1992).
    Here we apply wavelet density estimators to analyze the normality versus
non-normality issue in two examples. Note that we put ourselves here into the
framework of dependent data Xi . Results similar to thos formulated above
hold for this framework as well (see Tribouley & Viennet (1998)). For the
first example, we consider the data given in Fama (1976, Table 4.1, p.102).
It contains the returns of IBM stocks from July 1963 - June 1968 and the
returns of an equally weighted market portfolio. Our interest is in comparing
the distributions of these two data sets.
    Figure 10.14 contains the IBM data, a parametric normal density esti-
mate, the wavelet estimator with soft thresholding of 0.6 max |β̂jk |, j1 = 4,
for symmlet S4 and a kernel estimate. The soft threshold was determined
by visual inspection.
    The normal density estimator was computed with the mean and standard
deviation of the return data plugged into a normal density. The kernel density
estimate with a quartic kernel is marked as a dashed curve. The nonnormality
is clearly visible in the wavelet estimate and corresponds to different market
periods, Fama (1976). The normal density estimator cannot capture the local
curvature of this data.
    Consider next the second data set of Fama (1976), related to the equally
weighted market portfolio. We choose the same threshold level as for the
IBM data. It can be seen from Figure 10.15 (threshold value 0.6 max |β̂jk |)
                                                                      j,k
that the estimate is closer to a normal density than for the IBM data. This
fits well with the intuitive hypothesis that the portfolio (which is the average
of many stock elements) would have a quasi-Gaussian behavior.
     We turn now to the second example related to the data set of Section
11. The series of exchange rate values DEMUSD (DM to US dollar) is given
in the upper half of Figure 10.16. The time period of observations here is
the same as in bid-ask speeds of Figure 1.1 (Section 1.1). The corresponding
returns density is displayed in the lower half. The feature of thick tails
together with a very concentrated slim center peak is clearly visible. The
normal distribution density underestimates the central peak and has higher
tails outside the one standard deviation region. Based on this observation
recent literature in the analysis of this data proposes Pareto distribution
densities for example.
168    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




      Figure 10.14: Density estimate of IBM returns. Soft thresholding,
      t = 0.6 max |β̂jk |.
              j,k
10.6. SOME REAL DATA EXAMPLES                                           169




   Figure 10.15: Density estimate of equally weighted portfolio. Soft
   thresholding, t = 0.6 max |β̂jk |.
                        j,k
170    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




      Figure 10.16: A comparison of density estimates. DEMUSD spot
      rates in upper graph; normal and wavelet estimates in lower graph.


Estimation of income densities
The Family Expenditure Survey (FES) is based on a representative sample of
private households in the United Kingdom in every year since 1957. The sam-
ple size of the FES is approximately 7000 households per year, which amount
to about 5 percent of all households in the United Kingdom. The FES con-
tains detailed information on household characteristics, like household size
and composition, occupation, age, etc. The theory of market demand as de-
scribed by Hildenbrand (1994) concentrates on the analysis of the structure
of income.
    A feature important for the application of the economic theory is the
stability of income distribution over time. We consider this question by esti-
mating the densities of the FES for the years 1969 - 1983. Earlier approaches
have been based on a log-normality assumption of the income distribution,
described in Hildenbrand (1994). This parametric assumption though does
not allow for the possible changes in income that have been observed espe-
cially during the Thatcher era. In particular, the possibility of multimodality
is explicitly excluded.
10.6. SOME REAL DATA EXAMPLES                                              171


    The densities were estimated with a symmlet S4 wavelet and soft thresh-
olding of t = 0.1 max |β̂jk |, based on 256 bins computed from the about 7000
                  j,k
observations per year. Figure 10.17 shows the density estimates for the first
four years 1969 - 1972. These and the following density estimates have been
computed from normalized income, i.e. the observations were divided by
their mean. The mean of income each year is thus normalized to be equal to
1. The first two years are unimodal and left skew densities whereas the den-
sity for 1971 show a pronounced shoulder in the region of 80 percent mean
income. This effect vanishes for the 1972 but reappears in Figure 10.18 for
1973 and 1975. The higher peak near the mean income which is a continuous
structural feature for the first 8 years diminishes over the next 7 years. Fig-
ure 10.19 shows two unimodal densities and then a shift in magnitude of the
two modes which is continued until 1983, see Figure 10.20. The collection of
all 15 densities is displayed in the lower right of Figure 10.20. We conclude
from our nonparametric wavelet analysis for these curves that there has been
a shift in the income distribution from the peak at about x = 1 to the lower
level x = 0.8.




               Figure 10.17: FES Income densities 1969-1972.
172   CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




           Figure 10.18: FES Income densities 1973-1976.




           Figure 10.19: FES Income densities 1977-1980.
10.7. COMPARISON WITH KERNEL ESTIMATES                                    173




         Figure 10.20: FES Income densities 1981-1983, 1969-1983.

10.7      Comparison with kernel estimates
Kernel density estimates have a long tradition in data smoothing. It is there-
fore interesting to compare the wavelet estimates with kernel estimates. A
kernel density estimator fˆh is defined via a kernel K and a bandwidth h, see
e.g. Silverman (1986),
                                          n
                                                        x − Xi
                                                            
                      fˆh (x) = n−1 h−1
                                          X
                                                K              .      (10.49)
                                          i=1             h
In application of (10.49) we need to select a bandwidth and a kernel K. We
applied the two methods to n = 500 data points with density
        f (x) = 0.5ϕ(x) + 3ϕ{10(x − 0.8)} + 2ϕ{10(x − 1.2)}           (10.50)
Here ϕ denotes the standard normal density. A diagram of the density to-
gether with the data is shown in Figure 10.21.
    We have investigated seven different bandwidth choice methods as in Park
& Turlach (1992). Table 10.3 below gives the values h suggested by these
methods for the Gaussian kernel K = ϕ and the Quartic kernel K(u) =
15
16
   (1 − u2 )2 I{|u| ≤ 1}.
174    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




         Figure 10.21: A trimodal density and n = 500 data points.




       Method                                  K=Gauss     K=Quartic
       Least squares cross validation          0.067       0.175
       Biased cross validation                 0.4         1.049
       Smoothed cross validation               0.387       1.015
       Bandwidth factorized cross validation   0.299       0.786
       Park and Marron plug in                 0.232       0.608
       Sheather and Jones plug in              0.191       0.503
       Silverman’s rule of thumb               0.45        1.18


      Table 10.3: Different bandwidth selectors for data of Figure 10.21
10.7. COMPARISON WITH KERNEL ESTIMATES                                    175




       Figure 10.22: The density with two kernel density estimates.

    In Figure 10.22 we show two different kernel density estimators with band-
widths h = 0.18 and h = 0.6 (dotted line), respectively. The computation
was done with the Quartic kernel. One sees the basic problem of the kernel
estimate: the bandwidth is either too small or too high. The left shoulder is
well estimated by the kernel estimate with bandwidth h = 0.6 but the two
peaks are not picked up. The smaller bandwidth estimate models the peaks
nicely but fails on the shoulder part.
    In comparison with the hard thresholded wavelet density estimator of Fig-
ure 10.23 the kernel estimates are unfavorable. The wavelet density estimator
was computed with the highest level j1 = 8 (dotted line). The threshold was
set to 0.4 of the maximal value. The kernel density estimate was taken with
”medium” bandwidth h = 0.4, see Table 10.3. The wavelet density estimate
captures the right peak partly and is more stable on the left shoulder side.
This performance is even improved for the soft thresholded wavelet density
estimator, see Figure 10.24. The peaks are both well represented and except
for a small trough the wavelet density estimate is remarkably stable in the
interval [−3, 0].
    The integrated squared error (ISE) for the kernel estimate fˆh was 0.019
whereas the wavelet estimate resulted in a value of ISE = 0.0099 (hard) and
176    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




      Figure 10.23: The density, a kernel estimate and a wavelet estimate
      with hard thresholding (S4, j1 = 8, t = 0.4 max |β̂jk |).
                                                  j,k
10.8. REGRESSION ESTIMATION                                                177


of 0.0063 (soft).




     Figure 10.24: The density, a kernel estimate and a wavelet estimate
     with soft thresholding (S4, j1 = 8, t = 0.4 max |β̂jk |).
                                                       j,k


    In summary we can say that this small study of comparison has shown
what was expected. Kernel density estimators are not locally adaptive, unless
we employ a more complicated local bandwidth choice. Wavelet estimators
are superior but may show some local variability as in Figure 10.24 for ex-
ample. For data analytic purposes with small to moderate data size a kernel
estimate may be preferred for its simplicity and wide distribution. For finer
local analysis and good asymptotic properties the wavelet estimator is cer-
tainly the method to be chosen.


10.8       Regression estimation
Assume that
                        Yi = f (Xi ) + ξi , i = 1, . . . , n,
where ξi are independent random variables, E(ξi ) = 0, and Xi are on the reg-
ular grid in the interval [0, 1] : Xi = ni . Consider the problem of estimating
178    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


f given the data (Y1 , . . . , Yn ).
   The linear wavelet regression estimator fˆj1 for f is defined by (10.1), with
a different definition of the estimated coefficients αjk , βjk :
                                        n
                                     1X
                            α̂jk   =       Yi ϕjk (Xi ),                      (10.51)
                                     n i=1
                                          n
                                       1X
                            β̂jk =           Yi ψjk (Xi ).                    (10.52)
                                       n i=1

   This choice of α̂jk and β̂jk is motivated by the fact that (10.51) and (10.52)
are ”almost” unbiased estimators of αjk and βjk for large n. For example,

                                 n
                              1X      i      i   Z
                   E(β̂jk ) =      f ( )ψjk ( ) ≈ f ψjk
                              n i=1 n        n

if f and ψ are smooth enough and ψ satisfies the usual assumptions, see
Remark 10.1.
     The wavelet thresholding regression estimator fn∗ is defined by (10.15) and
(10.13), (10.14), respectively, for soft and hard thresholding, with α̂jk and
β̂jk as in (10.51), (10.52).
     The remarks concerning the choice of parameters j0 , j1 , the functions ϕ
and ψ and thresholding (see Sections 10.2 – 10.4) remain valid here.
     It is important that the points Xi are on the regular grid in the interval
[0, 1]. One should change the definition of the estimators otherwise. This
is discussed for example by Hall & Turlach (1995), Hall, McKay & Turlach
(1996), Neumann & Spokoiny (1995), and we would like to dwell a little more
on it here.
     Different techniques can be implemented. The first technique is based
on a preliminary binning and scaling of the observation interval to map it
into [0,1], and it is close to WARPing, see Härdle & Scott (1992). We imple-
ment this technique in the simulations below. The idea of the construction
is simular to that of (10.10) - (10.12). We first compute a regressogram esti-
mator with bins of width ∆ centered at equispaced gridpoint z1 , . . . , zm . For
computational reasons (to make possible the use of discrete wavelet trans-
form, see Chapter 12), it is necessary to choose m as a power of 2: m = 2K ,
where K ≥ j1 is an integer. Here ∆ should be a very small number (in
relative scale). Let ŷ1 , . . . , ŷm be the values of the regressogram at gridpoints
10.8. REGRESSION ESTIMATION                                                     179


z1 , . . . , zm :
                         Pn
                                Ys I{|Xs − zi | ≤ ∆/2}
                    ŷi = Ps=1
                            n                          , i = 1, . . . , m.
                              s=1 I{|Xs − zi | ≤ ∆/2}

Next, we apply the formulas (10.10) - (10.12) to get the values fl of the
regression estimator at gridpoints z1 , . . . , zm .
    The second technique of handling the non-equispaced case was proposed
by Neumann & Spokoiny (1995). It is related to the Gasser-Müller kernel
regression estimator, see Härdle (1990, Section 3.2). The computation of
this estimator seems to be more difficult than that of the binned one since it
cannot in general be reduced to the discrete wavelet transform algorithm.
    Note that, as we work on the bounded interval and not on IR, the wavelet
base {ϕj0 k , ψjk } is no longer an ONB. In practice this will appear as boundary
effects near the endpoints of the interval [0, 1]. Several ways of correction are
possible. First, the implementation of wavelet orthonormal bases on the
interval as in Meyer (1991) and Cohen, Daubechies & Vial (1993). A second
approach would be a standard boundary correction procedure as in Härdle
(1990), based on boundary kernels. A third approach presented later in this
section is based on mirroring.
    Let us first consider wavelet regression smoothing without boundary cor-
rection. The wavelet technique for regression is applied to the data in Figure
10.25. We generated the function

     f (x) = sin(8πx)I{x ≤ 1/2} + sin(32πx)I{x > 1/2}, x ∈ (0, 1)            (10.53)

with normal noise ξi whose standard deviation is 0.4. The 512 observations
are shown as plus signs, and the true function is displayed as a solid line.
    This example is the same as in Figures 1.12, 1.13 but we have added
observation noise. Figure 10.26 shows the linear wavelet estimator fˆj1 with
S4 father and mother wavelets, j0 = 0 and j1 = 8: the estimator goes almost
through the observation points.
    Next we restrict the levels to a maximum of j1 = 5 and start with j0 = 0.
The resulting linear estimate is given in Figure 10.27. The power of wavelet
smoothing again becomes apparent: the high frequencies are well modelled
and at the same time the lower frequencies in the left half of the observation
interval are nicely represented.
    Wavelet thresholding regression estimators are defined by (10.13)–(10.15),
with the empirical wavelet coefficients given in (10.51), (10.52). We briefly
180   CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




                Figure 10.25: Data and regression curve.




      Figure 10.26: Linear wavelet estimator and true curve, j1 = 8.
10.8. REGRESSION ESTIMATION                                               181




    Figure 10.27: Linear wavelet estimator and true curve, with j1 = 5.

discuss their performance on the same example as considered above in this
section.
    Hard thresholding with t = 0.2 max |β̂jk | gave about the same ISE as
soft thresholding. We therefore show only the soft thresholding estimate in
Figure 10.28.
    Observe that the estimator behaves quite reasonably at the endpoints of
the interval. Boundary correction in this example, at least visually, turns
out not to be necessary.
    Consider another example. In Figure 10.29 we plotted the function f (x) =
x, x ∈ (0, 1) on a grid of n = 512 points (without observation noise) and the
corresponding linear wavelet estimate fˆj1 with j1 = 32. The wavelet estimate
shows well known boundary effects. A practical method for correcting the
boundary problem is symmetrizing by mirroring.
    We first “mirror” the original data by putting them in the reverse order
symmetrically with respect to an endpoint of the interval. In the example of
Figure 10.29 the mirroring with respect to x = 1 would result in a symmetric
“tent-shaped” curve. Then we apply the usual wavelet estimation procedure
with the doubled data and consider the estimator only on the original inter-
val. Mirroring at x = 0 is not necessary since the symmetrized function is
182    CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




      Figure 10.28: Wavelet smoother with soft threshold 0.2 max |β̂jk |.
                                                                jk




          Figure 10.29: Wavelet regression with boundary effect.
10.9. OTHER STATISTICAL MODELS                                              183


periodic on the doubled interval, and we use a periodically extended data for
computing, cf. Chapter 12).
   Figure 10.30 shows the boundary corrected estimate. The data were
mirrored only at x = 1. The result of the wavelet estimation on this mirrored
data shows that the boundary effects are no longer present.
   Another important question is the choice of threshold. A variant of such
a choice is to compute the following variable threshold:
                                         q
                                                2
                             t = tjk =       2σ̂jk log(Mj )             (10.54)

with                                                           2 #
                            n
                                         "
                         1 X             2      Yi−1 + Yi+1
                                              
                  2             2
                σ̂jk =    2
                               ψjk (Xi )   Yi −                         (10.55)
                         n i=1           3           2
and Mj the number of non–zero coefficients β̂jk on level j. In most common
cases Mj is proportional to 2j , see Remark 10.1. The value σ̂jk
                                                              2
                                                                 is an empirical
estimator of the variance Var(β̂jk ). The term in squared brackets in the
sum (10.55) is a local noise variance estimate, see Gasser, Stroka & Jennen-
Steinmetz (1986). The procedure (10.54), (10.55) has been suggested by
Michael Neumann. Note that the threshold (10.54) depends both on j and
k. A motivation of such a threshold choice is given in Section 11.4.


10.9       Other statistical models
Besides density estimation and regression, several statistical models were
studied in a wavelet framework. We mention here some of them.

Gaussian white noise model
This is probably the most commonly discussed model in wavelet context. It
has the form of stochastic differential equation

                     dY (t) = f (t)dt + εdW (t), t ∈ [0, 1],            (10.56)
where W is the standard Brownian motion on [0, 1], 0 < ε < 1, and f is an
unknown function to be estimated. The observations are the values of the
process Y (t), 0 ≤ t ≤ 1, satisfying (10.56).
   The Gaussian white noise model was introduced by I.A. Ibragimov and
R.Z.Hasminskii (see e.g. Ibragimov & Hasminskii (1981)). It appeared first
184   CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS




        Figure 10.30: Wavelet regression estimator after mirroring.


as a convenient idealization of the nonparametric regression model with √ reg-
ular design. In particular, the analogy is established by setting ε = 1/ n,
and considering asymptotics as ε → 0. The model (10.56) reduces techni-
cal difficulties and is a perfect guide to more applied statistical problems.
Moreover, it seems that recent works involving constructive equivalence of
experiments could allow to extend this property of guiding principle to a real
transfer of the results obtained in the Gaussian white noise model to more
difficult settings (see for instance Brown & Low (1996), Nussbaum (1996)).
    To define wavelet estimators in this model one has to use the same formu-
lae as before in the chapter, with the only modification: α̂jk and β̂jk should
be of the form
                       Z                            Z
              α̂jk =       ϕjk (t) dY (t), β̂jk =       ψjk (t)dY (t).   (10.57)


    Clearly, these stochastic integrals are unbiased estimators of αjk and βjk
under the model (10.56). For a detailed discussion of wavelet thresholding in
this model see Donoho, Johnstone, Kerkyacharian & Picard, (1995, 1997).
10.9. OTHER STATISTICAL MODELS                                            185


Time series models
Gao(1993b, 1993a),Moulin (1993) investigated the behavior of wavelet esti-
mates in time series analysis. Neumann(1996a, 1996b) has put the thresh-
olding results into a unified approach permitting to treat a lot of different
models. Neumann & von Sachs (1995) give a brief overview on wavelet
thresholding in non-Gaussian and non-iid situations, respectively. They es-
tablish joint asymptotic normality of the empirical coefficients and apply
non-linear adaptive shrinking schemes to estimate the spectral density.
    Recently, there has been growing interest in wavelet estimation of the
dependence structure of non stationary processes with locally stationary or
“slowly varying” behavior. See for example Dahlhaus (1997), von Sachs &
Schneider (1996), Neumann & von Sachs (1997), Donoho, Mallat & von Sachs
(1996).


Diffusion models
Genon-Catalot, Laredo & Picard (1992) described the behavior of a linear
wavelet estimator of a time varying diffusion coefficient observed at discrete
times. Hoffmann (1996) provided the non linear wavelet estimator of a time
or state varying diffusion coefficient, observed at discrete times. He showed
that this estimator attains optimal rates of convergence on a large scale of
smoothness classes.


Images
It is possible to generalize the wavelet tools to the multivariate case. A
multivariate extension of MRA was introduced by Mallat (1989). Nason &
Silverman (1994), Ogden (1997) give details how to compute the correspond-
ing wavelet estimators in the case of two-dimensional images.
    Some work has been done on the wavelet estimators based on the product
of d univariate wavelet bases (Tribouley (1995), Delyon & Juditsky (1996a),
Neumann & von Sachs (1995), Neumann(1996a, 1996b)).
    Tribouley (1995) showed that the wavelet thresholding procedure, un-
der a certain threshold choice, attains optimal rates of convergence on the
multivariate Besov classes for the density estimation problem. Delyon &
Juditsky (1996a) generalized these results and considered the nonparamet-
ric regression setting as well. In these papers only isotropic multivariate
186   CHAPTER 10. STATISTICAL ESTIMATION USING WAVELETS


Besov classes were studied, i.e. the case where the smoothness of estimated
function is the same in all directions. Neumann & von Sachs (1995) and
Neumann (1996a, 1996b) showed that the product wavelet estimators can
attain minimax rates of convergence in anisotropic smoothness classes.
    A quite natural application of this methodology can be found in Neumann
& von Sachs (1995) to the particular problem of estimating the time-varying
spectral density of a locally stationary process. In this case the two axes
on the plane, time and frequency, have a specific meaning. Accordingly, one
cannot expect the same degrees of smoothness in both directions. Hence,
the use of the anisotropic basis seems to be more natural than the use of the
isotropic one.
Chapter 11

Wavelet thresholding and
adaptation

11.1       Introduction
This chapter treats in more detail the adaptivity property of nonlinear (thresh-
olded) wavelet estimates. We first introduce different modifications and
generalizations of soft and hard thresholding. Then we develop the notion
of adaptive estimators and present the results about adaptivity of wavelet
thresholding for density estimation problems. Finally, we consider the data–
driven methods of selecting the wavelet basis, the threshold value and the
initial resolution level, based on Stein’s principle. We finish by a discussion
of oracle inequalities and miscellaneous related topics.


11.2       Different forms of wavelet thresholding
Two simplest methods of wavelet thresholding (soft and hard thresholding)
were introduced already in Chapter 10. Here we give a more detailed overview
and classification of the available thresholding techniques. For definiteness,
we assume that the problem of density estimation is considered. Thus, we
have a sample X1 , . . . , Xn of n i.i.d. observations from an unknown density f ,
and we want to estimate f . Extension of the definitions given below to other
models (nonparametric regression, Gaussian white noise model, spectral den-
sity estimation etc.) is standard, and it can be established in the same spirit
as discussed in Chapter 10. We classify the thresholding procedures into

                                       187
188 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION


three groups: local, global and block thresholding. For local thresholding we
distinguish between fixed and variable thresholding techniques.

Local thresholding
These are essentially the procedures of the type of soft and hard thresh-
olding introduced in Chapter 10. The word “local” means that individual
coefficients independently of each other are subject to a possible thresholding.
     Let β̂jk be the empirical wavelet coefficients defined in (10.3), and let
ηjk (u) be a function of u ∈ IR. It is possible that ηjk is a random function
depending on X1 , . . . , Xn . Assume that

                                   ηjk (u) = 0, |u| ≤ t,
where t > 0 is a threshold (possibly random). The local thresholded empirical
wavelet coefficients are
                                 ∗
                                βjk = ηjk (β̂jk ).                    (11.1)
For example, in the soft and hard thresholding defined in Chapter 10 the
functions ηjk are non–random, do not depend on j, k, and have the form,
respectively
                     ηjk (u) = η S (u) = (|u| − t)+ sign u         (11.2)

                           ηjk (u) = η H (u) = u I{|u| > t}.                         (11.3)
The wavelet density estimator with the coefficients (11.1) has the form
                                                     j1 X
               f ∗ (x) =
                           X                         X
                                α̂j0 k ϕj0 k (x) +             ηjk (β̂jk )ψjk (x).   (11.4)
                            k                        j=j0 k

We call it local thresholding wavelet estimator. It follows from Proposition
10.3 that the choice of threshold
                                                s
                                                     log n
                                     t = c                 ,                         (11.5)
                                                       n
where c > 0 is a suitably chosen constant, guarantees the asymptotically
optimal (up to a log–factor) behavior of f ∗ when ηjk (u) = η H (u). A similar
result is true for the case of soft thresholding. The question how to choose c is
not answered by these results (we know only that c should be large enough).
11.2. DIFFERENT FORMS OF WAVELET THRESHOLDING                                        189


    Other types of thresholding, where ηjk depends on j (and not on k), are
defined by (11.2) and (11.3) with
                                                s
                                                     j − j0
                                   t = tj = c                                      (11.6)
                                                       n
(Delyon & Juditsky (1996a)), or with
                                                     s
                                                           j
                                      t = tj = c                                   (11.7)
                                                           n
(Tribouley (1995),Donoho, Johnstone, Kerkyacharian & Picard (1996)). Here
again c > 0 is a suitable constant.
    Finally, the example of ηjk depending on both j and k is provided by the
soft thresholding (11.2) or (11.3) with
                                           q
                                               2
                               t = tjk =     2σjk [ψ] log Mj ,                     (11.8)

         2
where σjk  [ψ] is the variance of the empirical wavelet coefficient β̂jk and Mj is
the number of non–zero coefficients on level j. We shall discuss the thresh-
                                                 2
old choice (11.8) later in this chapter. As σjk    [ψ] is not known, one should
replace it by its empirical version. This leads to a random threshold t = tjk
(respectively random function ηjk ).
    If the threshold t of the local thresholding estimator is the same for all j, k
(as in (11.5)), we call f ∗ the estimator with fixed threshold. Otherwise, if t
may vary with j and/ or k (as in (11.6)-(11.8)), f ∗ is called local thresholding
wavelet estimator with variable threshold.

Global thresholding
Instead of keeping or deleting individual wavelet coefficients, one can also
keep or delete a whole j-level of coefficients. This leads to the following
definition of the wavelet estimator:
                                                    j1                         !
               f ∗ (x) =
                           X                        X           X
                               α̂j0 k ϕj0 k (x) +          ηj       β̂jk ψjk (x)   (11.9)
                           k                        j=j0        k

where ηj (·) is some non-linear thresholding type transformation. Kerkyachar-
ian, Picard & Tribouley (1996) considered such an estimator of a probability
190 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION


density f . They proposed the following analogues of hard and soft thresh-
olding respectively:
                                                 2j
                                             (                    )
                       ηjH (u)     = uI Sj (p) > p/2 ,                           (11.10)
                                                n

                                                            j
                                                                 
                                     Sj (p) − n2p/2
                       ηjS (u) = u                  ,                          (11.11)
                                         Sj (p)
                                                                  +

where Sj (p) is a certain statistic depending on X1 , . . . , Xn and p ≥ 1 is a
parameter. In particular, if p is an even integer, p ≤ n, Sj (p) is defined as
                           1        X       X
                 Sj (p) = n                     ψjk (Xi1 ) · · · ψjk (Xip ).
                           p     i1 6=...6=ip k


The definition of Sj (p) for general p is given in Kerkyacharian et al. (1996).
The estimator f ∗ defined in (11.9), with ηj = ηjH or ηj = ηjS , is called global
thresholding wavelet density estimator. We discuss later the advantages and
drawbacks of this estimate. Let us now make only some general remarks:
   • The above definition of global thresholding estimator is completely
     data–driven, which is not the case for local thresholding estimators
     with the threshold values (11.5)–(11.7).
   • The computational aspects become more difficult when p increases.
     The constant p, as we shall see later, comes from the Lp loss function
     that we want to optimize.
   • This procedure provides a Lp –generalization of a method introduced in
     the L2 –setting and the context of Fourier series by Efroimovich (1985).
     The expression (11.11) is reminiscent of the James-Stein estimator, see
     Ibragimov & Hasminskii (1981), Chapter 1. It is also close to a proce-
     dure introduced by Lepskii (1990) in the context of kernel estimates.

Block thresholding
Block thresholding is a procedure intermediate between local and global
thresholding. It keeps or deletes specially chosen blocks of wavelet coeffi-
cients on each level. Such a method was introduced by Hall, Kerkyacharian
11.3. ADAPTIVITY PROPERTIES OF WAVELET ESTIMATES                                        191


& Picard(1996a, 1996c). It is defined as follows. Divide the set of all integers
into non–overlapping blocks of length l = l(n):

                     Bk = {m : (k − 1)l + 1 ≤ m ≤ kl}, k ∈ ZZ.

Put
                                                  1 X 2
                                       bjk =            β .
                                                  l m∈Bk jm

Take the following estimator of bjk :
                                                  1 X 2
                                       b̂jk =           β̂ ,
                                                  l m∈Bk jm

and define the wavelet estimator of a density f as:
                                                                
                                     j1 X                            n          o
 f ∗ (x) =                                             β̂jk ψjm (x) I b̂jk > cn−1 , (11.12)
             X                       X            X
                 α̂j0 k ϕj0 k (x)+            
             k                       j=j0 k     m∈Bk


where c > 0 is a constant controlling the threshold. This estimate f ∗ is called
block thresholding wavelet density estimator.
    In most cases, the block estimator has better asymptotic properties than
the local thresholding estimators, since it has no additional logarithmic factor
in the rate of convergence (see Hall, Kerkyacharian & Picard(1996a, 1996c)
for the details).
    An obvious drawback of the estimator (11.12), as compared to the global
thresholding estimator (11.9)–(11.11), is again the fact that it is not com-
pletely data–driven. It depends on the constant c which is not given explicitly
by the theory, and has to be chosen in some empirical way (this constant is
given by the theory up to the knowledge of the uniform bound of f , see
Chapter 10).


11.3         Adaptivity properties of wavelet estimates
The wavelet estimators defined above and in Chapter 10 require prior knowl-
edge of several parameters:

  1) the highest level j1 and the initial level j0 ,
192 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION


  2) the threshold t, or more generally, the vector of thresholds t = {tjk }j,k ,

  3) the wavelet basis {ϕjk , ψjk }, or, equivalently, the father wavelet ϕ (un-
     der the assumption that mother wavelet ψ is related to ϕ by a fixed
     transformation, to avoid non-uniqueness cf. Section 5.2).

    In Chapter 10 we specified some assumptions on these parameters that
guarantee near optimal asymptotic behavior of wavelet estimates. These as-
sumptions are formulated in terms of the regularity m (or s) of the estimated
function. In practice this is a serious drawback since, in general, it is impos-
sible to know the regularity of the functional class where the function sits.
Moreover, a single function may be in the intersection of different classes.
For instance, consider the following example of a “2–bumps” function g. As-
sume that g coincides with |x| on [−1/2, 1/2], is extremely regular outside
this interval and compactly supported. Its derivative satisfies

                 g 0 (x) = −I {x ∈ [−1/2, 0]} + I {x ∈ [0, 1/2]}

on [−1/2, 1/2] and g 0 is a very regular function outside [−1/2, 1/2]. If we
look at ||τh g 0 − g 0 ||p it is, clearly, of order (2h)1/p . Hence, g 0 ∈ Bp1/p,∞ for
every 1 ≤ p < ∞. We conclude that g belongs to all the spaces Bp1+1/p,∞ ,
1 ≤ p < ∞.
   Another example is given by the function
                                        2j
                                                 3j
                                              2− 2 ψjk (x)
                                        X
                              f (x) =
                                        k=1

where ψ is a mother wavelet of a MRA: clearly f belongs to all the spaces
Bp1,1 , ∀p ≥ 1. The results of Chapter 10 entail that different spaces are
characterized by different optimal convergence rates of estimators. Thus,
it is important to find an estimator attaining simultaneously the best rates
of convergence on a large scale of spaces (respectively, functional classes).
Fortunately, wavelet estimators enjoy this property.
    Let A be a given set and let {Fα , α ∈ A} be the scale of functional classes
                                                                           α∞
Fα indexed by α ∈ A. (For example, α ∈ [0, 1], Fα is a unit ball in B∞        .)
Denote by Rn (α, p) the minimax risk over Fα for the Lp -loss:

                        Rn (α, p) = inf sup Ef ||fˆ − f ||pp .
                                      fˆ f ∈Fα
11.3. ADAPTIVITY PROPERTIES OF WAVELET ESTIMATES                          193


DEFINITION 11.1 The estimator f ∗ is called adaptive for Lp -loss and
the scale of classes {Fα , α ∈ A} if for any α ∈ A there exists cα > 0 such
that
                   sup Ef ||f ∗ − f ||pp ≤ cα Rn (α, p), ∀n ≥ 1.
                 f ∈Fα

    The estimator f ∗ is called adaptive up to a logarithmic factor for
Lp -loss and the scale of classes {Fα , α ∈ A} if for any α ∈ A there exist
cα > 0 and γ = γα > 0 such that

              sup Ef ||f ∗ − f ||pp ≤ cα (log n)γ Rn (α, p), ∀n ≥ 1.
             f ∈Fα


    Thus, as far as the rate of convergence is concerned, the adaptive estima-
tor is optimal and behaves itself as if it knows in advance in which class the
function lies (i.e. as if it knows α). For more insight into the general prob-
lem of adaptivity we refer to Lepskii(1990, 1991, 1992), Lepski & Spokoiny
(1995), Lepski, Mammen & Spokoiny (1997), Birgé & Massart (1997).
    Below we present without proof some results illustrating that the wavelet
estimators have the above adaptation property. Let us take again the density
estimation framework.
    In the following two propositions we assume that Fα is a Besov class:
Fα = B̃(s, r, q, L), where α = (s, r, q, L)

B̃(s, r, q, L) = {f : f is a probability density on IR with a compact support
                 of length ≤ L0 , and ||f ||srq ≤ L}.

Here s, r, p, q, L, L0 are positive numbers. The knowledge of the parameter L0
is not necessary for the construction of the estimates. Therefore we do not
include it into α.

PROPOSITION 11.1 (Donoho, Johnstone, Kerkyacharian & Picard (1996))
Let the father wavelet ϕ satisfy the conditions of Theorem 9.4 for some inte-
ger N > 0. Let L be a given positive number.
                                        q        The local thresholding estimate
                         j1    n           log n
chosen so that j0 = 0, 2 ≃ log n , t = c n , (where c is a constant depend-
ing on L), is adaptive up to a logarithmic factor for any loss Lp , 1 ≤ p < ∞,
and the scale of classes {Fα , α ∈ A} where

                     A = (1/r, N ) × [1, ∞] × [1, ∞] × {L}.
194 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION


   Recall that N here is the number of vanishing moments of the mother
wavelet ψ (see Chapters 9 and 10).

PROPOSITION 11.2 (Kerkyacharian et al. (1996)) Let the father wavelet
ϕ satisfy the conditions of Theorem 9.4 for some integer N > 0. Let r ≥ 1
be a given number. The global thresholding estimate defined with (11.10),
(11.11), where p = r, and such that j0 = 0, 2j1 ≃ logn n , is adaptive for any
loss Lp , 1 ≤ p ≤ r, and the scale of classes {Fα , α ∈ A} where

                   A = (1/r, N ) × {r} × [1, ∞] × (0, ∞).

    We stated the two propositions together to simplify the comparison. The
propositions deal with the local and global procedures respectively. As it
can be seen, the limitations with respect to the regularity s are the same
for both procedures: s ∈ (1/r, N ). The local procedure always looses a
logarithmic factor, but its range of loss functions is wider. The range of r is
very limited in the case of global thresholding (r should be known), whereas
there is no limitation in the local estimate. It is precisely this fact which
is described by saying that local thresholding estimate is able to adapt to
”inhomogeneous irregularities“. Finally, the adaptation with respect to the
radius L of the Besov ball is very poor in the local case: L should be known.
This is essentially because the constant c depends on L.
REMARK 11.1 For the global thresholding estimate, the result of Propo-
sition 11.1 have been generalized to the case of dependent data with β-mixing
conditions by Tribouley & Viennet (1998). For the local estimate, the adap-
tation property of Proposition 11.1 has been obtained in a number of very
different situations. Among others let us cite Donoho, Johnstone, Kerky-
acharian & Picard (1995), concerning the Gaussian white noise model and
regression, Johnstone & Silverman (1997) concerning regression with depen-
dent data, Wang (1996), Neumann & von Sachs (1997), Hoffmann (1996),
concerning the time series models. Similar results can be obtained in inverse
problems using the ”wavelet-vaguelette“ decomposition of Donoho (1995).

REMARK 11.2 In the same spirit, let us also summarize the performance
of the block thresholding estimate. By choosing

    2j0 ≃ n1/(1+2N ) , ( where N is the number of zero moments of ψ),
            n
    2j1 ≃       , l(n) ≃ (log n)2 ,
          log n
11.4. THRESHOLDING IN SEQUENCE SPACE                                          195


with c depending on L, we obtain adaptivity for the L2 -loss, without any
additional logarithmic factor, when α is in the range

                      α ∈ (1/2, N ) × {2} × [1, ∞] × {L}.

This holds for a much wider class Fα than above. Here Fα can be the set
of densities f with compact support, f = f1 + f2 , where f1 is a ”regular“
function, ||f1 ||srq ≤ L, and f2 is a ”perturbation”: a bounded function con-
taining irregularities such as discontinuities, Doppler or Chirps oscillations
(see Hall, Kerkyacharian & Picard (1996c))


11.4       Thresholding in sequence space
In studying the properties of wavelet estimates it is often useful to introduce
an idealized statistical model (called sequence space model), that approxi-
mates the true one.
    Let α̂j0 k , β̂jk be the empirical wavelet coefficients, as defined in Section
10.2. Clearly, one can write

                          α̂j0 k = αj0 k + σj0 k [ϕ]ζj0 k ,
                           β̂jk = βjk + σjk [ψ]ξjk ,                      (11.13)

where αj0 k , βjk are the “true” wavelet coefficients, ζj0 k , ξjk are random vari-
ables with zero mean and variance 1, and σj0 k [ϕ], σjk [ψ] are the corresponding
scale factors. (Note that E(ζj0 k ) = 0, E(ξjk ) = 0, since α̂j0 k and β̂jk are un-
biased estimators of αj0 k and βjk respectively.)
    Since the standard thresholding procedures are applied only to β̂jk coeffi-
cients (“detail coefficients”) we discuss the approximation in sequence space
model for β̂jk on a fixed level j.
    We assume here and below that we deal with compactly supported wavelets
ϕ and ψ. Therefore, only a finite number M of wavelet coefficients β̂jk is non-
zero, and we can assume that k varies from 1 to M . Also, note that ξjk are
asymptotically Gaussian (since β̂jk is a sum of independent random vari-
ables), and ξjk is approximately noncorrelated with ξjk0 , k 6= k 0 . In fact, if ψ
is compactly supported, supp ψ ⊆ [−A, A], for some A > 0, then
                          Z
                              ψjk (x)ψjk0 (x)f (x)dx = 0,                 (11.14)
196 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION


whenever |k − k 0 | > 2A. Hence,in the case |k − k 0 | > 2A the covariance
                                                         
                                   n
                              1    X
     Cov(β̂jk , β̂jk0 ) = E  2      ψjk (Xi )ψjk0 (Xm ) − E(β̂jk )E(β̂jk0 )
                             n i,m=1
                            n
                       1 X                               1
                     =   2
                              E (ψjk (Xi )ψjk0 (Xi )) − E(β̂jk )E(β̂jk0 )
                       n i=1                             n
                       1  Z
                                                       1
                     =       ψjk (x)ψjk0 (x)f (x)dx − βjk βjk0
                       n                               n
                          1
                     = − βjk βjk0 ,
                          n


and since βjk = O(2−j/2 ), the covariance for j large enough is much smaller
than the variance

           2                      1h  2                        i
          σjk [ψ] = Var(β̂jk ) =    E ψjk (X1 ) − E 2 (ψjk (X1 ))           (11.15)
                                  n
                                  1h  2                       1
                                                     i       
                                                   2
                                =   E ψjk (X1 ) − βjk = O          ,
                                  n                           n


as n → ∞.
   This suggests that, in a certain asymptotical approximation (which we
do not pretend to develop here with full mathematical rigour), the “new”
observation model (11.13) is equivalent to the sequence space model:

                        Zk = θk + σk ξk , k = 1, . . . , M,                 (11.16)

where Zk plays the role of β̂jk , while θk is an unknown parameter (it stands
for the true coefficient βjk ). Here ξk are i.i.d. N (0, 1) random variables and
σk > 0. Let us remark once again that (11.16) is an idealized model for
wavelet coefficients of a fixed level j. We drop the index j as compared to
(11.13) since the level j is fixed. The integer M in (11.16) is arbitrary, but
one may think that M ∼ 2j to translate the argument back into the wavelet
context.
    In the sequence space model (11.16) our aim is to estimate the unknown
vector of parameters
                                 θ = (θ1 , . . . , θM ),
11.4. THRESHOLDING IN SEQUENCE SPACE                                           197


given the vector of Gaussian observations z = (Z1 , . . . , ZM ). The sequence
space model (11.16) can be used as an approximation for the study of non-
parametric wavelet estimators in other models for example in regression and
Gaussian white noise models.
    Note that in the Gaussian white noise case (see (10.56 ),(10.57) ) the errors
ξjk in (11.13) are i.i.d. Gaussian N (0, 1) random variables and σjk [ψ] = ε.
Thus, the corresponding sequence space model is

                         Zk = θk + εξk , ξk ∼ N (0, 1).

In this case the sequence space model is exactly (and not only approximately)
equivalent to the original model.
    Sequence space models allow to provide a reasonable interpretation of
some threshold rules introduced earlier in this chapter. Let us first analyse
the Gaussian white noise case. It is well known (see e.g. Leadbetter, Lindgren
& Rootzén (1986)) that for M i.i.d. standard Gaussian variables ξ1 , . . . , ξM
                            √
one has P max |ξk | ≥ 2 log M → 0, as M → ∞. Therefore if the
              1≤k≤M
                         √
threshold is set to t = ε 2 log M , a pure noise signal (i.e. θ1 = ... = θM = 0)
is with high probability correctly
                                √ estimated as being identically zero: it makes
no sense to increase t above ε 2 log M . Note√ that, as M is proportional to
  j
2 , the threshold t is √
                       in fact of the form cε j for some constant c > 0.
    The choice t = ε 2 log n where n is the total number of observations,
allows to estimate correctly the zero signal for all coefficient levels j (in fact,
n > M ). This threshold choice, called universal threshold, typically kills
most of the coefficients and leaves only few large coefficients intact. As a
result, visually the picture of the wavelet estimator looks smooth: no small
spikes are present. This is achieved on the expense of a loss in the precision
of estimation as compared to more sophisticated thresholding techniques.
    Let us turn now to the general sequence space model   √ (11.16). Quite a
similar reasoning gives the variable thresholds tk = σk 2 log M for different
coefficients θk . As σk ∼ √1n in the density estimation case (see (11.15)),
                     q
this yields tk = ck nj where ck > 0 is a constant depending on k. This
explains the variable thresholding procedures (11.7) and (11.8) as well as their
empirical counterparts (see (10.54),
                             q        (10.55)) and Remark 11.3 below). The
                                log n
fixed threshold choice t = c n is motivated by analgous considerations,
since the number of levels j kept in the wavelet estimator is typically of
O(log n) order (see Sections 10.2,10.4).
198 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION


   The universal threshold can be defined for general sequence space model
(11.16) as well: Donoho & Johnstone (1995) introduce it in the form
                                          s
                                              2 log n
                                 t = σ̂               ,
                                                 n

where σ̂ is the robust estimate of scale defined as the median absolute de-
viation (M AD) of the empirical wavelet coefficients corresponding to the
highest resolution level j1 . The reason for using only the highest level co-
efficients for the purpose of variance estimation is that they consist mostly
of noise, in contrast to the lower level coefficients that are believed to con-
tain information on the significant features of the estimated function. The
M AD universal thresholding estimator is simple and often used in practice.
Observe that the universal thresholding tends to oversmooth the data, as
already mentioned above.
     A number of heuristic thresholding techniques is based on parametric hy-
pothesis testing for the Gaussian sequence space model framework. A recent
proposal by Abramovich & Benjamini (1996) is designed to control the ex-
pected proportion of incorrectly included coefficients among those chosen for
the wavelet reconstruction. The objective of their procedure is to include as
many coefficients as possible provided that the above expected proportion is
kept below a given value. A tendency to increase the number of coefficients,
in general, leads to undersmoothing. However, if the estimated function has
several abrupt changes this approach appears to be useful. The correspond-
ing simulation study can be found in Abramovich & Benjamini (1996). A
different testing procedure is proposed by Ogden & Parzen (1996). They
perform a levelwise rather than overall testing. At each level, they test the
null hypothesis of a pure Gaussian noise signal (θ1 = ... = θM = 0). If this
hypothesis is rejected (i.e. if a significant signal is present) the largest coef-
ficient in absolute value is kept aside, and then the test is repeated with the
remaining coefficients. Iterating this procedure, one finally arrives, at each
resolution level, to a classification of the coefficients into two groups: large
coefficients that are believed to contain some information on the signal, and
small coefficients statistically indistinguishable from the pure noise. Finally,
only the large coefficients are included in the wavelet estimator. This gives us
an example of local variable thresholding with random mechanism. Juditsky
(1997) developped a different but somewhat related thresholding approach,
applying the implicit bias – variance comparison procedure of Lepskii (1990).
11.5. ADAPTIVE THRESHOLDING AND STEIN’S PRINCIPLE                             199


This method, again, is charaterized by a random local variable thresholding.
The idea of the method is formulated for the sequence space model and ex-
tended to the equispaced design regression and density estimation problems.
Juditsky (1997) proves that for these problems his wavelet estimator is adap-
tive for the Lp -losses on the scale of Besov classes in the sense of Definition
11.1.


11.5       Adaptive thresholding and Stein’s prin-
           ciple
In this section we discuss the data driven choice of threshold, initial level j0
and the wavelet basis by the Stein (1981) method of unbiased risk estimation.
The argument below follows Donoho & Johnstone (1995).
    We first explain the Stein method for the idealized one-level observation
model discussed in the previous section:

                       Zk = θk + σk ξk ,     k = 1, . . . , M,            (11.17)

where θ = (θ1 , . . . , θM ) is the vector of unknown parameters, σk > 0 are
known scale parameters and ξk are i.i.d. N (0, 1) random variables.
    Let θ̂ = (θ̂1 , . . . , θ̂M ) be an estimator of θ. Introduce the mean squared
risk of θ̂:
                                   M
                                         E(θ̂k − θk )2 .
                                   X
                             R=
                                   k=1

Assume that the estimators θ̂k have the form

                               θ̂k = Zk + Ht (Zk ),                       (11.18)

where t is a parameter and Ht (·) is a weakly differentiable real valued function
for any fixed t. One may think initially of t to be a threshold (see the example
(11.21) later in this section), but Stein’s argument works in the general case
as well. The parameter t can be chosen by the statistician. In other words,
(11.18) defines a family of estimators, indexed by t, and the question is how
to choose an “optimal” t = t∗ . Define the optimal t∗ as a minimizer of the
risk R with respect to t.
    If the true parameters θk were known, one could compute t∗ explicitly. In
practice this is not possible, and one chooses a certain approximation t̂ of t∗
200 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION


as a minimizer of an unbiased estimator R̂ of the risk R. To construct R̂,
note that
                      E(θ̂k − θk )2 = E(R(σk , Zk , t)),           (11.19)
where
                                                d
                   R(σ, x, t) = σ 2 + 2σ 2        Ht (x) + Ht2 (x).
                                               dx
In fact,
             E(θ̂k − θk )2 = σk2 + 2σk E(ξk Ht (Zk )) + E(Ht2 (Zk )),
and, by partial integration,
                                 1 Z                    ξ2
    E(ξk Ht (θk + σk ξk )) =   √     ξHt (θk + σk ξ)e− 2 dξ
                                 2π
                                                             (η − θk )2
                                                                        !
                                 1 Z        (η − θk )
                           =   √     Ht (η)           exp −               dη
                                 2π            σk               2σk2
                                              (η − θk )2 dHt (η)
                                                        !
                                 1 Z
                           =   √     exp −                       dη
                                 2π              2σk2       dη
                                                 !
                                    dHt (x)
                           =   σk E                .
                                      dx x=Zk

Thus (11.19) follows.
    The relation (11.19) yields R = E(R̂), where the value R̂ = M
                                                                 P
                                                                   k=1 R(σk , Zk , t)
is an unbiased risk estimator, or risk predictor. It is called Stein’s unbiased
risk estimator (SURE):
                                        M
                                        X
                           SURE =             R(σk , Zk , t)
                                        k=1


   The Stein principle is to minimize R̂ with respect to t and take the
minimizer
                                         M
                                         X
                          t̂ = arg min         R(σk , Zk , t).            (11.20)
                                  t≥0
                                         k=1

as a data driven estimator of the optimal t∗ . The unbiasedness relation
E(R̂) = R (for every t) alone does not guarantee that t̂ is close to t∗ . Some
more developed argument is used to prove this (Donoho & Johnstone (1991)).
    In the rest of this section we formulate the Stein principle for the example
of soft thresholding wavelet estimators.
11.5. ADAPTIVE THRESHOLDING AND STEIN’S PRINCIPLE                                 201


   For soft thresholding (10.13) we have

                  Ht (x) = −xI{|x| < t} − tI{|x| ≥ t}sign(x),                 (11.21)

and

           R(σ, x, t) = (x2 − σ 2 )I{|x| < t} + (σ 2 + t2 )I{|x| ≥ t}
                      = [x2 − σ 2 ] + (2σ 2 − x2 + t2 )I{|x| ≥ t}.            (11.22)

An equivalent expression is

               R(σ, x, t) = min(x2 , t2 ) − 2σ 2 I{x2 ≤ t2 } + σ 2 .

The expression in square brackets in (11.22) does not depend on t. Thus,
the definition (11.19) is equivalent to
                                  M
                                        (2σk2 + t2 − Zk2 )I{|Zk | ≥ t}.
                                  X
                   t̂ = arg min                                               (11.23)
                            t≥0
                                  k=1

Let (p1 , . . . , pM ) be the permutation ordering the array |Zk |, k = 1, . . . , M :
|Zp1 | ≤ |Zp2 | ≤, . . . , ≤ |ZpM |, and |Zp0 | = 0. According to (11.23) one obtains

                                         t̂ = |Zpl |,                         (11.24)

where
                                          M
                                                 (2σp2s + Zp2k − Zp2s ).
                                          X
                     l = arg min                                              (11.25)
                             0≤k≤M
                                         s=k+1

In particular for M = 1 the above equation yields the following estimator
                                     (
                                          Z1 , Z12 ≥ 2σ12 ,
                             θ̂1 =
                                          0, Z12 < 2σ12 .

It is easy to see that computation of t̂ defined in (11.24), (11.25) requires
approximately M log M operations provided that quick sort algorithm is used
to order the array |Zk |, k = 1, . . . , M .
    Now we proceed from the idealized model (11.17) to a more realistic
density estimation model. In the context of wavelet smoothing the principle
of unbiased risk estimation gives the following possibilities for adaptation:
  (i) adaptive threshold choice at any resolution level j ≥ j0 ,
202 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION


 (ii) adaptive choice of j0 plus (i),

 (iii) adaptive choice of father wavelet ϕ(·) and mother wavelet ψ(·) plus (ii).
    To demonstrate these possibilities consider the family of wavelet estima-
tors
                                                             j1 X
    f ∗ (x, t, j0 , ϕ) =       αj∗0 k [ϕ, t]ϕj0 k (x) +               ∗
                           X                                 X
                                                                     βjk [ψ, tj ]ψjk (x),     (11.26)
                           k                               j=j0 k


where αj∗0 k [ϕ, t] = α̂j0 k + Ht (α̂j0 k ) and βjk
                                                  ∗
                                                     [ψ, t] = β̂jk + Ht (β̂jk ) are soft
thresholded empirical wavelet coefficients (cf. (10.2), (10.3), (10.13)) with
Ht (·) from (11.21). Here t = (t, tj0 , . . . , tj1 ) is a vector of thresholds. The
dependence of f ∗ on ψ is skipped in the notation since the mother wavelet ψ
is supposed to be canonically associated with the father wavelet (see Section
5.2). As in (11.19) it can be shown that, under certain general conditions,
                                                                       
                               Ekf ∗ − f k22 = E R̂(t, j0 , ϕ) .

Here Stein’s unbiased risk estimator is given by

                      X                                   j1 X
                                                          X
    R̂(t, j0 , ϕ) =        R(σj0 k [ϕ], α̂j0 k , t) +               R(σjk [ψ], β̂jk , tj ),   (11.27)
                      k                                   j=j0 k

                                              2             2
where R(σ, x, t) is defined in (11.22), and σjk [ψ] and σjk   [ϕ] are variances of
the corresponding empirical wavelets coefficients. To obtain the ”best” esti-
mator from the family (11.26) one can choose the unknown parameters of the
estimator minimizing R̂(t, j0 , ϕ). For the cases (i),(ii),(iii) these parameters
can be chosen, respectively, as follows.
(i) Adaptive choice of thresholds:

                                   t̂ = arg min R̂(t, j0 , ϕ).
                                               t

(ii) Adaptive choice of thresholds and j0 :

                                (t̂, ĵ0 ) = arg min R̂(t, j0 , ϕ).
                                                   t,j0

(iii) Adaptive choice of thresholds, j0 and wavelet basis:

                               (t̂, ĵ0 , ϕ̂) = arg min R̂(t, j0 , ϕ).
                                                   t,j0 ,ϕ
11.5. ADAPTIVE THRESHOLDING AND STEIN’S PRINCIPLE                                                  203


In the case (iii) it is assumed that the minimum is taken over a finite number
of given wavelet bases.
    Note that optimization with respect to t can be implemented as in the
fast algorithm described in (11.24), (11.25).

                                              2         2
REMARK 11.3 Since in practice the values σjk    [ϕ], σjk   [ψ] are not available,
one can use instead their empirical versions. For example if (11.26) is the
wavelet density estimator, based on the sample X1 , . . . , Xn , one can replace
 2
σjk [ψ] by its estimator
                                                    n
                                                                         !
                             2        1          1X
                           σ̂jk [ψ] =                 ψ 2 (Xi ) − β̂jk
                                                                    2
                                                                       .                        (11.28)
                                        n        n i=1 jk

In fact, for β̂jk defined in (10.3), we have
                           2
                          σjk [ψ] = Var(β̂jk )
                                    1  2        
                                                      2
                                                         
                                  =    E ψjk (X1 ) − βjk   .
                                    n
                                                           2
It is clear that (11.28) yields a consistent estimator of σjk [ψ] under rather
general assumptions on ψjk and on the underlying density of Xi ’s.

REMARK 11.4 If one wants to threshold only the coefficients βjk , which is
usually the case, the function Ht (·) for αjk should be identically zero. There-
fore, R(σj0 k [ϕ], α̂jk , t) in (11.26) should be replaced by σj0 k [ϕ] and SURE
takes the form
                                                              j1 X                       
                                                   2
                                             X                X
       R̂ ((tj0 , . . . , tj1 ), j0 , ϕ) =        σjk [ϕ] +            R σjk [ψ], β̂jk , tj .
                                             k                j=j0 k


  Let us now apply the Stein principle to a regression estimation example.
We choose a step function similar to our densities of Section 10.2:

  f (x) = 0.1I(x < 0.4) + 2I(x ∈ [0.4, 0.6] + 0.5I(x ∈ [0.6, 0.8]), x ∈ [0, 1].

The function was observed at 128 equispaced points and disturbed with Gaus-
sian noise with variance 1/128. We use the Stein rule only for threshold choice
(i) (level by level) and not for the cases (ii) and (iii) where the adaptive choice
204 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION


of j0 and of the basis is considered. We thus choose the threshold t̂ as the
minimizer with respect to t = (tj0 , . . . , tj1 ) of
                                 j1 X
                                 X                               
                       R̂(t) =            R σ̂jk [ψ], β̂jk , tj
                                 j=j0 k

where as above R(σ, x, t) is defined in (11.22) and σ̂jk [ψ] is an empirical esti-
mator of the variance of the wavelet regression coefficients. For computation
we use the discrete wavelet transform based methods described in Chapter
12 below.
   In Figure 11.1 we display the true regression function together with the
noisy data. The next Figure 11.2 presents the result of SU RE estimation.
The true curve is shown in both plots as a dashed line.


11.6       Oracle inequalities
Instead of taking the minimax point of view, to describe the performance
of estimators, one can also provide concise accounts of mean squared error
for single functions. This is precisely discussed in the papers of Hall & Patil
(1995a, 1995b). This approach shows particularly that the local thresholding
does not achieve an effective balance of bias against variance at a first-order
level. Such a balance may be achieved by suitable adjusting of the primary
resolution level, but then the price to pay is adaptivity. In contrast, the block
thresholding rules permit this balance between bias and variance and preserve
adaptivity (see Hall, Kerkyacharian & Picard (1996a, 1996c)). Another way
of explaining the performance of wavelet shrinkage introduced by D. Donoho
and I. Johnstone is the concept of an “oracle”. This can be explained as
follows. Suppose we want to estimate a quantity µ, with n observations. For
that we have a family of estimators µ̂t depending on a “tuning” parameter
t. A typical example of this situation is to estimate a density f using a
kernel method with the tuning parameter being the size of the “window”
h. We would be extremely fortunate if every time we have to estimate the
quantity µ, comes an oracle telling which t to choose for this precise µ to
attain the ideal risk R(or, µ) = min Eµ ||µ̂t − µ||2 . We say that we have an
                                     t
oracle inequality for an estimator µ̂ if:
                                                    1
                                                                 
                                   2
                      Eµ ||µ̂ − µ|| ≤ Kn R(or, µ) +   .
                                                    n
11.6. ORACLE INEQUALITIES                                            205




         Figure 11.1: Regression function and the noisy data.




   Figure 11.2: SURE regression estimator and the regression func-
   tion.
206 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION


This is saying that up to the coefficient Kn , the estimator µ̂ is behaving
as if it has an oracle. R Consider the Gaussian white noise model, and put
βjk = (f, ψjk ), β̂jk = ψjk (s)dY (s) and consider estimators t̂ of the form
       γjk β̂jk ψjk where γjk is non stochastic and belongs to {0, 1}. In this
 P P
j≤j1 k
case knowing parameter t consists in knowing where γjk = 1, i.e. which
coefficient to estimate. It is easily seen that
                                             1
          E||t̂ − f ||22 =                                  2             2
                             XX                                   XX
                                      {γjk     + (1 − γjk )βjk }+        βjk .
                             j≤j1 k          n                    j>j1 k


Here the oracle has only to tell the places where j ≤ j1 and βjk   2
                                                                      ≤ n1 , to
attain R(or, f ). It can be proved, that soft thresholding for example satisfies
an oracle inequality with Kn = (1 + 2 log n). For more discussion of the
wavelet oracle see Hall, Kerkyacharian & Picard (1996b).


11.7       Bibliographic remarks
Since the subject ”Wavelets and Statistics” is growing rapidly in the moment,
it is difficult to provide an up-to-date bibliography that will not be outdated
in a short time. Nevertheless, we believe that a brief review of the guidelines
in this field will be helpful for the reader. To our knowledge Doukhan (1988)
and Doukhan & Leon (1990) were the first to use wavelets in statistics. They
introduced the linear wavelet density estimator, and studied its quadratic
deviation.
     The connection between linear wavelet estimators and Besov spaces ap-
peared in Kerkyacharian & Picard (1992, 1993), Johnstone, Kerkyacharian &
Picard (1992). In the same time D. Donoho and I. Johnstone developed the
theory of thresholding in a general framework. Their results were published
later in Donoho & Johnstone (1994b), Donoho (1994), and Johnstone (1994).
Further study in this direction appears in a series of papers by David Donoho
and contributors: Donoho (1992a, 1992b, 1993, 1995), Donoho & Johnstone
(1994a, 1991, 1995, 1996), Donoho et al. (1995, 1996, 1997).
     Among other contributions which were not discussed in this book, we
mention the following works. Antoniadis (1994) and Antoniadis, Grégoire
& McKeague (1994) proved the asymptotic normality of the linear wavelet
density estimates and investigated different forms of soft thresholding. Fan
(1994) and Spokoiny (1996) investigated the use of wavelet thresholding in
11.7. BIBLIOGRAPHIC REMARKS                                                 207


hypothesis testing. Hall & Patil(1995a, 1995b, 1996b, 1996a) studied the
behavior of non linear wavelet estimators in various situations and proved
their local adaptivity. These estimators adapt to changing local conditions
(such as discontinuity, high oscillations, etc.) to the extent of achieving (up
to a log term) the same rate as the optimal linear estimator. Johnstone &
Silverman (1997) investigated wavelet regression estimators in the case of sta-
tionary correlated noise. Wang (1996) treated the long memory noise setting.
Nason (1996), Neumann & Spokoiny (1995) implemented crossvalidation al-
gorithms on thresholding estimates. Marron, Adak, Johnstone, Neumann &
Patil (1995) develop the exact risk analysis to understand the small sample
behavior of wavelet estimators with soft and hard thresholding. More discus-
sion on wavelet shrinkage mechanism is provided by Bruce & Gao (1996b).
For other various aspects of wavelets in statistics see the collection of papers
Antoniadis & Oppenheim (1995) and the book of Ogden (1997).
208 CHAPTER 11. WAVELET THRESHOLDING AND ADAPTATION
Chapter 12

Computational aspects and
statistical software
implementations

12.1      Introduction
In this chapter we discuss how to compute the wavelet estimators and give
a brief overview of the statistical wavelets software.
    There is a variety of software implementations available. One software
implementation is Wavelab.600, a MATLAB software for wavelet and time
frequency analysis. It was written by Buckhut, Chen, Donoho, Johnstone
and Scargh and is available on the Internet via

                  wavelab @ playfair.stanford.edu .

    There are S-Plus wavelet modules available on statlib. They describe
how to use the S-Plus Wavelets module, S+ WAVELETS and includes de-
tailed descriptions of the principal S+ WAVELETS functions. It is based on
either a UNIX or a Windows system. The intended audience are engineers,
scientists and signal analysts, see Oppenheim & Schafer (1975). A recent
book on wavelet analysis with S-plus is Bruce & Gao (1996a), see also Nason
& Silverman (1994).
    A recent interactive user interface in MATLAB is the wavelet TOOLBOX,
see Misiti, Misiti, Oppenheim & Poggi (1996). It allows selection of bases
and color aided thresholding of one and two dimensional signals.

                                   209
210    CHAPTER 12. COMPUTATIONAL ASPECTS AND SOFTWARE


   In this chapter we present the software implementation in XploRe. The
wavelet analysis presented here may be tried using the JAVA interface of
XploRe. The macros used for this book are available on the internet via
                      http:         // www.xplore-stat.de.
There is a WWW and a dynamic Java interface available.
   Other references on computational aspects are Strang & Nguyen (1996),
Young (1993), Foufoula-Georgiou & Kumar (1994) and Burke-Hubbard (1995).


12.2       The cascade algorithm
In this section we present some recursive formulas for wavelet coefficients
that allow to compute sequentially the higher level coefficients from the lower
level ones and vice versa. These recursions are called cascade algorithm (or
pyramidal algorithm). They were proposed by Mallat (1989).
    First, we define the cascade algorithm for the wavelet coefficients αjk =
(f, ϕjk ) and βjk = (f, ψjk ) of a given function f . It will be assumed through-
out that we deal only with the bases of compactly supported wavelets con-
structed starting from a function m0 (ξ) = √12 k hk e−ikξ (see Chapters 5 -
                                                    P

7), where hk are real-valued coefficients such that only a finite number of hk
are non-zero. This assumption is satisfied for Daubechies‘ bases, coiflets and
symmlets.
    Lemma 5.4 implies that the coefficients αjk and βjk satisfy, for any j, k ∈
ZZ, the relations                     X
                               αjk =     hl−2k αj+1,l ,                     (12.1)
                                           l
and                                        X
                                   βjk =           λl−2k αj+1,l ,               (12.2)
                                           l

where λk = (−1)k+1 h1−k and {hk } are the coefficients of the trigonometric
polynomial m0 (ξ). In fact, (5.13) yields
                               Z
                         j/2
              βjk = 2              f (x)ψ(2j x − k)dx =
                                               Z
                   = 2(j+1)/2                       f (x)ϕ(2(2j x − k) − s)dx
                                    X
                                         λs
                                     s
                                               Z
                         (j+1)/2
                                                    f (x)ϕ(2j+1 x − 2k − s)dx
                                    X
                   = 2                   λs
                                     s
12.2. THE CASCADE ALGORITHM                                                                      211

                            X                         X
                    =           λs αj+1,s+2k =             λl−2k αj+1,l .
                            s                          l

This gives (12.2). The relation (12.1) is obtained similarly, with the use of
(5.14).
     Together (12.1) and (12.2) define the cascade algorithm. The transfor-
mation given by (12.1) is a low-pass filter, while (12.2) is a high-pass filter
(see Daubechies (1992), Section 5.6, for explanation of the filtering termi-
nology). Assume that f is compactly supported. Then, as we deal with the
bases of compactly supported wavelets, only a finite number of coefficients
αjl are non-zero on each level j. Consequently, if the vector of coefficients
y = {αj1 l } for the level j1 is given, one can reconstruct recursively the coef-
ficients αjk , βjk for levels j ≤ j1 , by use of linear recursive formulas (12.1),
(12.2). Note that, under our assumption on the finiteness of the vector hk ,
the number of non-zero coefficients αjk , βjk decreases with the level j, since
the discrete convolutions in (12.1) and (12.2) are sampled at points 2k. If
the procedure (12.1), (12.2) stops at level j0 , the resulting vector of wavelet
coefficients w = ({αj0 k }, {βj0 k }, . . . , {βj1 −1,k })T can be presented as

                                             w = Wy,                                           (12.3)

where W is a matrix.
    It is possible to invert the cascade algorithm and thus to get the values
of coefficients y, starting from w. The inverse algorithm can be presented
by the following recursive scheme:
                                     X                      X
                      αj+1,s =               hs−2k αjk +         λs−2k βjk ,                   (12.4)
                                         k                   k

running from j = j0 to j = j1 − 1. To get (12.4) directly, observe that
αj+1,s = (PVj+1 (f ), ϕj+1,s ), where PVj+1 (f ) is the orthogonal projection of f
on the space Vj+1 . Therefore, applying (3.6), we get
                                               X
                            αj+1,s =                αjk (ϕjk , ϕj+1,s )
                                                k
                                               X
                                         +          βjk (ψjk , ϕj+1,s ).                       (12.5)
                                                k

But, in view of (5.14),
                            X        Z                             X
        (ϕjk , ϕj+1,s ) =       hl       ϕj+1,2k+l ϕj+1,s =             hl δ2k+l,s = hs−2k ,
                            l                                       l
212     CHAPTER 12. COMPUTATIONAL ASPECTS AND SOFTWARE


and, similarly,
                                         (ψjk , ϕj+1,s ) = λs−2k .
These relations and (12.5) yield (12.4).
   Now we turn to the empirical wavelet coefficients α̂jk , β̂jk . The cascade
algorithm applies to them as well. However, there are some modifications
that we are going to discuss.
   First, observe that in the statistical estimation setup (see Chapter 10)
the aim is to compute not only the empirical wavelet coefficients, but the
wavelet estimator at gridpoints z1 , . . . , zm , i.e. the vector

                                           f = (f1 , . . . , fm ),

with
              X                          j1 X
                                         X
       fl =       α̂j0 k ϕj0 k (zl ) +              ηjk (β̂jk )ψjk (zl ), l = 1, . . . , m,   (12.6)
              k                          j=j0 k


where                                                m
                                                  1 X
                                     α̂jk =             ŷi ϕjk (zi ),                        (12.7)
                                                  m i=1
                                                     m
                                                  1 X
                                         β̂jk =         ŷi ψjk (zi )                         (12.8)
                                                  m i=1
(cf. (10.10) - (10.12)). Here ŷi are the binned data and ηjk (·) are some known
functions (thresholding transformations, cf. Section 11.2). We assume that
zi are mapped in [0, 1], so that zi = mi . The difference between density
and nonparametric regression settings appears only in the definition of the
binned values ŷi , i = 1, . . . , m. For the density case ŷj are the values of a
histogram, while for the nonparametric regression case they are the values
of a regressogram (see Section 10.8). The estimator (12.6) - (12.8) can be
used for other nonparametric settings as well, with a proper definition of the
binned values ŷi .
      Computation of the estimator (12.6) - (12.8) is not an easy task: in
fact, usually the functions ϕjk , ψjk are not available in an explicit form (see
Chapters 5-7). We will see below that the cascade algorithm allows a recur-
sive computation of the empirical wavelet coefficients α̂jk , β̂jk , j0 ≤ j ≤ j1 .
The question about the efficient computation of the values of the estimator
f1 , . . . , fm is more delicate. We defer it to the next section where we present
12.2. THE CASCADE ALGORITHM                                                               213


some fast (but approximate) methods for such computation commonly used
in practice.
    To get the empirical cascade algorithm observe that the empirical wavelet
coefficients can be written as
                                        α̂ik = (qm , ϕjk ),
                                        β̂ik = (qm , ψjk ),
where qm is the measure
                                                m
                                             1 X
                                        qm =       ŷi δ{Zi } ,
                                             m i=1
                                                                                   R
with δ{x} being the Dirac mass at point x, and (qm , ϕjk ) = ϕjk dqm . Analo-
gously to (12.1) and (12.2) (but replacing f (x)dx by dqm in the calculations)
we get the following recursive formulae
                                    X                     X
                           α̂jk =       hl−2k α̂j+1,l =         hl α̂j+1,l+2k ,         (12.9)
                                    l                       l
                                    X                     X
                           β̂jk =       λl−2k α̂j+1,l =         λl α̂j+1,l+2k ,        (12.10)
                                    l                       l

Thus, to compute β̂jk , α̂jk , for j0 ≤ j ≤ j1 , we start with the computation
                 m
of α̂j1 k = m1
                 P
                       ŷi ϕj1 k (zi ), (i.e. start with the highest level j = j1 ), and then
                 i=1
obtain the values β̂jk , α̂jk recursively from (12.9) - (12.10), level by level, up
to j = j0 . Clearly, (12.9) - (12.10) is the “empirical“ version of the cascade
algorithm (12.1) - (12.2). The coefficients {hk } are tabulated in Daubechies
(1992), for common examples of compactly supported father and mother
wavelets (see also Appendix A ). Note that for such common wavelets the
number of non-zero coefficients {hk } or {λk } does not exceed 10-20.
     A problem with the implementation of (12.9) - (12.10) is that the initial
values α̂j1 k are not easy to compute, again for the reason that the functions
ϕj1 k are not explicitly known.
     The formulas (12.9) - (12.10) that define the empirical cascade algorithm
are the same as those for the original cascade algorithm (12.4) - (12.5); the
only difference is in the definition of the starting values: {αj1 k } are replaced
in (12.9) - (12.10) by {α̂j1 k }. By analogy to the previous argument, it could
seem that the inverse algorithm should be also given by the recursion (12.7):
                                        X                   X
                            α̂j+1,s =        hs−2k α̂jk +           λs−2k β̂jk .       (12.11)
                                         k                      k
214    CHAPTER 12. COMPUTATIONAL ASPECTS AND SOFTWARE


However, this is not exactly the case, because we operate with the empirical
measure qm , and not with a function f ∈ L2 (IR). The fact that αjk , βjk
are wavelet coefficients of such a function f was essential to show (12.7).
The empirical cascade algorithms (12.9) - (12.10) and (12.11) act on finite
discrete arrays of coefficients, and, in general, (12.11) is not the exact in-
version of (12.9) - (12.10). To get the exact inversion it suffices to modify
(12.9) - (12.10) and (12.11) by introducing periodic extensions of the com-
puted coefficients onto ZZ, along with dyadic summations. This constitutes
the technique of discrete wavelet transform (DWT), see Mallat (1989). We
describe it in the next section. Note beforehand that the use of inverse al-
gorithm is fundamental for the computation. In fact, the idea is to run the
forward algorithm until j = j0 , then to apply a thresholding transforma-
tion to the obtained wavelet coefficients, and to run the inverse algorithm,
starting from these transformed coefficients, until j = K. The output of
this procedure is claimed to give approximately the values f1 , . . . , fm of the
wavelet estimator at the gridpoints.


12.3       Discrete wavelet transform
To define the DW T we first introduce some linear transformations. now.
For l ∈ ZZ, r ∈ ZZ, and an integer s denote (l + r) mod s the mod s sum of l
and r. Let Z = (Z(0), . . . , Z(s − 1)) be a vector where s is an even integer.
Define the transformations Ls and Hs of the vector Z coordinatewise, for
k = 0, . . . , s/2 − 1, by
                    Ls Z(k) =
                                   X
                                        hl Z((l + 2k) mod s),
                                    l
                    Hs Z(k) =
                                   X
                                        λl Z((l + 2k) mod s).
                                    l

These are the analogues of the low-pass filter (12.1) and the high-pass filter
(12.2) respectively, with the mod s addition that can be also interpreted as a
periodic extension of data. Clearly, Ls and Hs map the vector Z of dimension
s on two vectors Ls Z and Hs Z of dimension s/2.
    The DW T acts by iterative application
                                                 of the transformations
                                                                        L and H.
                                                      K
It starts from the initial vector ( Z(0), . . . , Z(2 − 1) which we denote for
convenience in the following way as the two entries array:
                         {α(K, k), k = 0, . . . , 2K − 1}.
12.3. DISCRETE WAVELET TRANSFORM                                                       215


The DW T computes recursively the vectors
           {α(j, k), k = 0, . . . , 2j − 1}, {β(j, k), k = 0, . . . , 2j − 1}
for 0 ≤ j ≤ K − 1. The recursions defining the DW T are:
                   j+1
    α(j, k) = L2                               hl α(j + 1, (l + 2k) mod 2j+1 ),
                                         X
                         α(j + 1, k) =                                              (12.12)
                                          l
                   j+1
    β(j, k) = H2                               λl α(j + 1, (l + 2k) mod 2j+1 ).
                                         X
                         α(j + 1, k) =                                              (12.13)
                                           l
Remark that the notation α(j, k), β(j, k) is reminiscent of the wavelet co-
efficients αj,k , βj, k, while the above recursions are similar to the cascade
algorithm. However, we would like to emphasize that the definition of the
DW T is given irrespectively of the framework of the previous section: in
fact, the DW T is just a composition of linear orthogonal transformations
presented by the recursions (12.12) and (12.13). The reason for adopting
such a notation is that in the next section, where we consider statistical
applications of the DW T , the values α(j, k), β(j, k) will approximately cor-
respond to αj,k , βj, k.
     Observe that the recursions (12.12) and (12.13) can be used to define
α(j, k) and β(j, k) not only for k = 0, . . . , 2j − 1, but also for all k ∈ ZZ. It
follows from (12.12) and (12.13) that such extended sequences are periodic:
           α(j, k) = α(j, k + 2j ), β(j, k) = β(j, k + 2j ), ∀ k ∈ ZZ.
   The inverse DW T is defined similarly to (12.11), but with the periodically
extended data. It starts from the vectors
         {α(j0 , k), k = 0, . . . , 2j0 − 1}, {β(j0 , k), k = 0, . . . , 2j0 − 1}
whose periodic extensions are denoted
                          {α̃(j0 , k), k ∈ ZZ}, {β̃(j0 , k), k ∈ ZZ}
and computes in turn the vectors {α(j, s), s = 0, . . . , 2j − 1}, until the level
j = K − 1, following the recursions:
                           X                       X
       α̃(j + 1, s) =           hs−2k α̃(j, k) +       λs−2k β̃(j, k), s ∈ ZZ,      (12.14)
                            k                      k

                 α(j + 1, s) = α̃(j + 1, s), s = 0, . . . , 2j+1 − 1.               (12.15)
Clearly, (12.14) implies the periodicity of all intermediate sequences:
                         α̃(j + 1, s) = α̃(j + 1, s + 2j+1 ), s ∈ ZZ.
216   CHAPTER 12. COMPUTATIONAL ASPECTS AND SOFTWARE


12.4      Statistical implementation of the DWT
Binning
The computation of wavelet estimators is based on the DW T described
above. The DW T needs to work on signals of length m = 2K , where K
is an integer. In applications the sample size is often not a power of 2. The
data needs therefore to be transformed to a grid of m = 2K equispaced
points. This is true both for density estimation and regression smoothing.
The binning procedures for the density and regression wavelet estimation
were introduced in Sections 10.2 and 10.8 respectively. Here we would like to
discuss the effect of binning with different bin size on the quality of wavelet
estimators.
    We investigate again the example of density estimation already considered
in Chapter 10, Figures 10.1–10.11. For our example of n = 500 data points
we have investigated the binning into m = 8, 16, 32, 64, 256, 512 binpoints.
The corresponding estimated ISE values are given in Table 12.1.

               bins   S8 hard    S8 soft H hard    H soft
                 8        1      1.4157      1    1.4335
                16    0.29267     1.0596 0.13811 0.55132
                32    0.054237   0.26103 0.047822 0.41557
                64    0.053587   0.23887 0.029666 0.22516
               128    0.068648   0.27802 0.057907 0.29147
               256    0.15012    0.37995 0.1348 0.37757
               512    0.19506    0.53409 0.18746 0.55368


                Table 12.1: ISE values for different bin sizes

    One sees that the ISE values have a minimum at m = 64 = 2K , K = 6.
The corresponding ISE curve for S8 are given in Figure 12.1. Although
there is an “optimal” bin size we must be careful in interpreting it in a
statistical way. The binning is merely a presmoothing and was not taken
into account in the theoretical calculations e.g. in Chapter 10. The higher
the number of bins the more we loose the computational efficiency. The
values in Figure 12.1 represent thus more a trade off between computational
speed and presmoothing.
12.4. STATISTICAL IMPLEMENTATION OF THE DWT                                          217




              Figure 12.1: ISE for S8 as a function of bin size

Approximate computation of wavelet estimators
The implementation of DW T for an approximate computing of statistical
estimators (12.6) - (12.8) follows the next scheme.
 (i) Limits of the computation and initial values. Instead of starting at the
     level j1 , the algorithm (12.12) - (12.13) starts at j = K = log2 m. The
     initial values α(K, l) are set to be equal to the binned observations:
                          α(K, l) := ŷl+1 , l = 0, . . . , m − 1.

 (ii) Forward transform. The DW T (12.12) - (12.13) runs from j = K until
      j = j0 , and results in the vector of coefficients
        ŵ = ({α(j0 , k)}, {β(j0 , k)}, {β(j0 + 1, k)}, . . . , {β(K − 1, k)})T .
     The vectors {α(j, k)}, {β(j, k)} are of length 2j , and thus ŵ is of length
     2K .
(iii) Inverse transform. The inverse DW T (12.14) - (12.15) runs from j = j0
      until j = K − 1, starting with the vector of thresholded initial values
      w∗ = ({α∗ (j0 , k)}, {β ∗ (j0 , k)}, {β ∗ (j0 + 1, k)}, . . . , {β ∗ (K − 1, k)})T
218    CHAPTER 12. COMPUTATIONAL ASPECTS AND SOFTWARE


      where
                α∗ (j0 , k) = α(j0 , k),   β ∗ (j, k) = ηjk (β(j, k)).    (12.16)

      The inverse DW T results in 2K = m values {α∗ (K, l), l = 0, . . . , m−1}.
      ((The output is the vector f ∗ = (f1∗ , . . . , fm
                                                       ∗ T
                                                         ) , where
                           ∗
                          fl+1 := α∗ (K, l), l = 0, . . . , m − 1.
      The values fl∗ are taken as approximations for fl .
    Some remarks about this algorithm are immediate. First, the very def-
inition of the DW T comprises a periodic extension of the data at any step
of the method. This is a consequence of the dyadic summation. For exam-
ple, on the first step the original values ŷk are regarded as being periodically
extended on ZZ, with period m = 2K , so that ŷk+m = ŷk , k ∈ ZZ.
    Next, we comment on the fact that the upper level j1 does not appear in
the description of the algorithm (i) – (iii). In pactice one usually sets j1 = K,
and applies the hard or soft thresholding to all the coefficients on the levels
j = j1 , . . . , K − 1 (the level K is not thresholded since it contains only the
α coefficients). However, if one wants to exclude the coefficients of the levels
> j1 , as for example in the linear wavelet estimator, the definition (12.16)
yields this possibility by setting
                            ηjk (u) ≡ 0, j1 < j ≤ K.
   Similarly to (12.3), one can present the algorithm (i) – (iii) in the matrix
form. Let ŷ = (ŷ1 , . . . , ŷm )T . Then the result of the forward transform is
                                     ŵ = Ŵ ŷ,                          (12.17)
where Ŵ is a m × m matrix. One can show that Ŵ is an orthogonal matrix,
since it can be presented as a product of finite number of orthogonal matrices
corresponding to the steps of the algorithm (Mallat (1989)). Denote T the
thresholding transformation (12.16):
                                    w∗ = T (ŵ).
The inverse DW T is defined by the inverse matrix Ŵ −1 and, in view of the
orthogonality, Ŵ −1 = Ŵ T . Hence, the output f ∗ = (f1∗ , . . . , fm
                                                                      ∗ T
                                                                        ) of the
method (i) – (iii) is
                        f ∗ = Ŵ T w∗ = Ŵ T T (Ŵ ŷ).
12.4. STATISTICAL IMPLEMENTATION OF THE DWT                                                    219


If we deal with linear wavelet estimators and j1 takes the maximal value:
j1 = K − 1, then T is the identity transformation and we get f ∗ = ŷ.
This is natural: if all the coefficients for all levels are present the estimator
reproduces the data.
     The method (i) – (iii) is commonly used for computation of wavelet es-
timators. It is faster than the fast Fourier transform: it requires only O(m)
operations. However, except for the case of linear Haar wavelet estimator, it
does not compute the estimator (12.6), but rather an approximation. This
fact is not usually discussed in the literature.
     Let us give an intuitive argument explaining why the output f1∗ , . . . , fm ∗

of the method (i) - (iii) approximates the values f1 , . . . , fm of the estimator
(12.6). Consider only the linear wavelet estimator (i.e. put ηjk (u) = u, ∀j0 ≤
j ≤ j1 , k). Assume for a moment that the initial values ŷl of the method (i)
- (iii) satisfy                  √
                            ŷl ≈ mα̂Kl = 2K/2 α̂Kl .                       (12.18)
We know that the recursions (12.9) - (12.10) compute the values α̂jk , β̂jk ,
and that the forward transform (12.12) - (12.13) does approximately the
same job, if the initial values are the same. If (12.18) holds, the initial values
of (12.12) - (12.13) in (iii) differ
                                √ from those of the recursions (12.9) - (12.10)
approximately by the factor m. The linearity of recursions entails that the
outputs of these forward transforms differ by the same factor, i.e.
                                 √                   √
                     α(j0 , k) ≈ mα̂j0 k , β(j, k) ≈ mβ̂jk .

This and (12.7) - (12.8) yield
                                             1
                                       ŵ ≈ √ Wm ŷ,                                      (12.19)
                                             m
where Wm is the m × m matrix with columns

   ({ϕj0 k (zi )}, {ψj0 k (zi )}, {ψj0 +1,k (zi )}, . . . , {ψK−1,k (zi )})T , i = 1, . . . , m.

Combining (12.17) and (12.19), we obtain:
                                             1
                                       Ŵ ≈ √ Wm .
                                             m
Now, for linear wavelet estimates ηjk (u) = u for j0 ≤ j ≤ j1 , ηjk (u) = 0
for j > j1 , and thus the thesholding transformation T is defined by the
220    CHAPTER 12. COMPUTATIONAL ASPECTS AND SOFTWARE


idempotent matrix A = (aij )i,j=1,...,m , with aii = 1 if 1 ≤ i ≤ 2j1 +1 , and
aij = 0 otherwise. Therefore,
                                             1 T
                       f ∗ = Ŵ T AŴ ŷ ≈    W AWm ŷ = f ,                (12.20)
                                             m m
where the last equality is just the vector form of (12.6). This is the desired
approximation.
   It remains to explain why (12.18) makes sense. We have
                 √                m                   m
                              1 X                    X
                     mα̂Kl = √       ŷi ϕKl (zi ) =     ŷi ϕ(i − l).
                               m i=1                 i=1
                                                                     √
Hence for the Haar wavelet (12.18) holds with the exact equality:    mα̂Kl =
                                  −j/2    l                       −jν
ŷl . For coiflets we have αjl ≈ 2     f 2j with a precision O(2 ) where ν
is large enough, since a number of first moments of father coiflet ϕ vanish
(note that this is true only if f is smooth enough). With some degree of
approximation, one could extend this to the empirical values: α̂Kl ≈ 2−K/2 ŷl
which gives (12.18). For general wavelet bases (12.18) is not guaranteed and
the above intuitive argument fails. Donoho (1992b) and Delyon & Juditsky
(1996b) discuss this issue in more detail andcharacterize
                                                              specific wavelet
                                            −j/2
bases that guarantee the relation αjl ≈ 2        f 2j with a precision O(2−jν )
                                                    l

where ν is large enough.
REMARK 12.1 In general, one cannot claim that the approximation of
the estimator (12.6) - (12.8) given by the DW T based algorithm (i) - (iii) is
precise. The above intuitive argument is fragile in several points.
    First, it relies on (12.18) which is difficult to check, except for some special
cases, such as the Haar wavelet basis.
    Second, it assumes the equivalence of (12.12) - (12.13) and (12.9) - (12.10)
which is not exactly the case in view of the dyadic summation (which means
also the periodic extension, as mentioned above). The periodic extension
is perfect if the estimated function f itself can be extended periodically on
IR without loss of continuity. Otherwise the quality of estimation near the
endpoints of the interval becomes worse. Several suggestions are possible to
correct this: the most useful is mirroring (see Section 10.8). With mirroring
the new vector of data ŷ has the dimension 2m and the new values ŷl are not
independent even for the i.i.d. regression or Gaussian white noise models.
    Third, the intuitive argument leading to (12.20) was presented only for
linear wavelet estimators. With a nonlinear transformation T it should be
12.5. TRANSLATION INVARIANT WAVELET ESTIMATION                              221


modified and becomes even more fragile. But it is likely that with hard
or soft thresholding the argument holds through: these transformations are
linear on the entire set where they do not vanish.
    Finally, as mentioned above the approximation makes sense only if f is
smooth enough.
    With these remarks and the fact that the DW T based estimators are
almost the only computational tool that works well in practice, we conclude
that it is important to study the statistical properties of these estimators
directly. Donoho & Johnstone (1995) undertake such a study for the Gaussian
white model. We are not aware of similar studies for other models. In
general, the nice statistical results obtained for estimators (12.6) - (12.8)
are not sufficient to justify the practical procedures. Moreover, even for the
estimators (12.6) - (12.8) the results are not always complete, because they
do not account for the effect of binning. These problems remain open.

REMARK 12.2 In general, the bases of compactly supported wavelets are
defined with hk 6= 0 for k ∈ [N0 , N1 ], see Chapters 6 and 7. However, in
simulations one often shifts hk to get N0 = 0; thus the support of {hk }
becomes the set of integers k ∈ [0, N1 − N0 ]. Note that the resulting wavelet
estimator is different from the original one. For Daubechies’ wavelets N0 = 0
and this discussion does not arise.
    If one uses the linear wavelet estimator, the conditions of vanishing mo-
ments are preserved under the shift of coefficients {hk }. A significant differ-
ence appears only near boundaries or jumps. For nonlinear thresholded case
it is clear that the wavelet estimators for shfted and non-shifted situations
are different.


12.5       Translation invariant wavelet estimation
In spite of a nice mathematical theory, simulations show that in the neigh-
borhood of discontinuities the wavelet estimators can exhibit pseudo-Gibbs
phenomena. Of course, these phenomena are much less pronounced than in
the case of Fourier series estimators where they are of global nature and of
larger amplitude. However, they are present in wavelet estimators. Here we
are going to explain how to reduce these effects.
    The idea of improvement is based on the fact that the size of pseudo-
Gibbs phenomena depends mainly on the location of a discontinuity in the
222    CHAPTER 12. COMPUTATIONAL ASPECTS AND SOFTWARE


data. For example, when using the Haar wavelets, a discontinuity located
at m/2 gives no Gibbs oscillations; a discontinuity near m/3 leads to signifi-
cant pseudo-Gibbs effects. Roughly speaking, the amplitude of pseudo-Gibbs
oscillations is proportional to the square root of the number of wavelet coef-
ficients affected by the discontinuity (if a wavelet coefficient is affected by a
discontinuity, the thresholding procedure does not suppress noise in the em-
pirical wavelet coefficient). In case of a discontinuity at m/3 approximately
log m wavelet coefficients are affected by the discontinuity.
     A possible way to correct this misalignment between the data and the
basis is to shift the data so that their discontinuities change the position.
Hopefully, the shifted signal would not exhibit the pseudo-Gibbs phenomena.
After thresholding the estimator can be unshifted.
     Unfortunately, we do not know the location of the discontinuity. One
reasonable approach in this situation is optimization: introduce some qual-
itative measure of artifacts and minimize it by a proper choice of the shift.
But if the signal has several discontinuities they may interfere with each
other. That means that the best shift for one discontinuity may be the worst
for another discontinuity. This undermines the idea of optimization with
respect to shifts in general situations.
     Another, more robust, approach is based on the technique called sta-
tionary wavelet transform. From an engineering point of view this trans-
form is discussed by Rioul & Vetterli (1991) and Pesquet, Krim & Carfantan
(1994). Statistical applications of stationary wavelet transform are presented
in Coifman & Donoho (1995) and used also by Nason & Silverman (1994).
The corresponding statistical estimator is called translation invariant wavelet
estimator.
     The basic idea is very simple. As above, consider the problem of es-
timating the vector of values (f (z1 ), . . . , f (zm )) of an unknown function f
(probability density, regression, etc.) at the gridpoints z1 , . . . , zm .
     Suppose that we are given the binned data ŷ = (ŷ1 , . . . , ŷm )T , m = 2K .
Define the shift operator

                           Sτm ŷ = (ŷτ +1 , . . . , ŷτ +m )T ,

where τ is an integer and, by periodic extension, ŷi−m = ŷi+m = ŷi , i =
1, . . . , m. The translation invariant wavelet estimator is the vector f T I =
12.5. TRANSLATION INVARIANT WAVELET ESTIMATION                                223


(f1T I , . . . , fm
                  TI
                     ) defined as follows:

                                    1 m−1
                           fTI =          S m Ŵ T T (ŴSτm ŷ),
                                      X
                                                                           (12.21)
                                    m τ =0 −τ

where Ŵ is the matrix of the discrete wavelet transform (DW T ).
   In words, we do the following:
  (i) for any feasible shift we calculate the DW T of the shifted data, thresh-
      old the result, invert the DW T and unshift the signal;

 (ii) finally we average over all the shifts.
    Since the computation of each summand in (12.21) takes O(m) opera-
tions, at first glance it seems that f T I needs the O(m2 ) operations. Fortu-
nately, there exists an algorithm requiring only O(m log m) operations. Let
us explain how it works.
    The idea is close to that of the DW T but it involves an additional com-
plication due to the shifts. Introduce the vectors
                                      m/2−1                        m/2−1
             v1 = {α(K − 1, k)}k=0   , w1 = {β(K − 1, k)}k=0 ,
                               m/4−1                     m/4−1
             v2 = {α(K − 2, k)}k=0   , w2 = {β(K − 2, k)}k=0 ,
             ..                        ..
              .                         .
              vK = α(0, 0)           , wK = β(0, 0),

and set v0 = ŷ. With this notation the first step of the DW T in the method
(i) - (iii) of the previous section is

                                       v1 = Lm v0 ,
                                       w1 = Hm v0 .

The second step is

                                      v2 = Lm/2 v1 ,
                                      w2 = Hm/2 v1 ,

etc.
    A similar algorithm is used for the fast calculation of ŴSτm ŷ. The algo-
rithm returns a m × log2 m matrix which we call the T I Table according to
Coifman & Donoho (1995). This matrix has the following properties:
224   CHAPTER 12. COMPUTATIONAL ASPECTS AND SOFTWARE


  (i) for any integer τ, 0 < τ < n it contains ŴSτm ŷ;
 (ii) the T I Table can be computed in O(log2 m) operations;
(iii) the extraction of ŴSτm ŷ for a certain τ from the T I Table requires
      O(m) operations.
   We start with
                      v10 = Lm v0 , v11 = Lm S1m v0 ,
                      w10 = Hm v0 , w11 = Hm S1m v0 .
The output data of this first step are (w10 , w11 ). They constitute the last
row in the T I Table. Note that both w10 and w11 are of dimension m/2.
   At the next step we filter the vector (v10 , v11 ):
                                                         m/2
                   v20 = Lm/2 v10 , v21 = Lm/2 S1      v10 ,
                                                   m/2
                   v22 = Lm/2 v11 , v23 =    Lm/2 S1 v11 ,
and
                                                          m/2
                   w20 = Hm/2 v10 , w21 = Hm/2 S1             v10 ,
                             m/2                   m/2    m/2
                   w22 = H         v11 , w23 = H         S1 v11 .
The vectors (w20 , w21 , w22 , w23 ) give the next row in the T I Table. These
are four vectors, each of dimension m/4.
    After log2 m = K iterations we completely fill the T I Table. Then the
thresholding transformation T is applied. Finally, one can invert the T I
Table, so that the result of inversion gives the estimator (12.21). The fast
inversion algorithm is similar to (12.14) - (12.15). We refer to Coifman &
Donoho (1995) for further details.
    The translation invariant wavelet density estimation has been shown al-
ready in Figure 10.12 for a soft thresholding transformation T . In Figure 12.2
we show the same density example as in Section 10.4 with a hard threshold
of t = 0.25 max |β̂jk |.


12.6      Main wavelet commands in XploRe
The above computational algorithms are implemented in the interactive sta-
tistical computing environment XploRe. The software is described in the
12.6. MAIN WAVELET COMMANDS IN XPLORE                                            225




    Figure 12.2: Translation invariant density estimation with S8 and
    hard threshold 0.25 max |β̂jk |

book Härdle et al. (1995) and is available via the http://www.xplore-
stat.de address. Here we discuss only the main wavelet commands. In the
appendix we give more information about how to obtain the software.

Wavelet generating coefficients
The XploRe wavelet library implements 22 common basis wavelets. These
are the Haar (= D2) wavelet, and

       D4, . . . , D8, . . . , D20; S4, S5, . . . , S10; C1, C2, . . . , C5   (12.22)

with the {hk } coefficients from Daubechies (1992). These coefficients are
stored in a file
                            ”/data/wavelet.dat”
The letter ”D” stands for Daubechies, ”S” for symmlet, ”C” for coiflet.
There are 296 coefficients all together. We list them in Table A.1 in the
appendix. This table shows the coefficients in the order given in (12.22).
The indices of each coefficient sequence are given in Table A.2. The wavelet
226   CHAPTER 12. COMPUTATIONAL ASPECTS AND SOFTWARE


Symmlet7 S7 is the 14th wavelet and thus the coefficients 139 to 152 are
taken out of Table A.1. We list in Table 12.2 the coefficients for S7.

                      139   0.00268181    146   0.536102
                      140   -0.00104738   147   0.767764
                      141   -0.0126363    148   0.28863
                      142   0.0305155     149   -0.140047
                      143   0.0678927     150   -0.107808
                      144   -0.0495528    151   0.00401024
                      145   0.0174413     152   0.0102682

                    Table 12.2: The coefficients for S7.


   The XploRe command is library("wavelet"). This call to the wavelet
module automatically yields the {hk } coefficient vectors haar, daubechies4,
daubechies8 etc. These are generically denoted by h in the sequel (e.g.
h = daubechies4).
   The coefficients h are used to generate the discrete wavelet transform via
fwt or dwt to generate the functions ϕ and ψ.

Discrete wavelet transform
Let K ≥ 1 be the level where the DW T starts, and x be the input vector
of length m = 2K (it corresponds to the vector ŷ in the notation of previous
sections). Let 0 ≤ j < K be the level where the DW T stops, and the variable
l = 2j be the number of father wavelets on this output level j.
    The DW T is realized by the following command:

                             {a, b} = fwt(x, l, h),

where {a, b} is the output vector of dimension 2K (it corresponds to the vector
ŵ in the notation of previous sections). It is divided into two subvectors: a,
the vector of coefficients {α(j, k)}, and b, the vector of coefficients

                ({β(j, k)}, {β(j + 1, k)}, . . . , {β(K − 1, k)}).

The abbreviation fwt stands for ”fast wavelet transform”. Alternatively one
may use the command
                             y = dwt(x, l, h)
12.6. MAIN WAVELET COMMANDS IN XPLORE                                     227


Here y denotes the vector ŵ.
   Consider a numerical example. The command x = #(0, 0, 1, 1) would
generate a step function. Here m = 4, K = 2. The command

                           {a, b} = fwt(x, 1, haar)

would result in this case in

                a = α(0, 0) = 1/2,
                b = (β(0, 0), β(1, 0), β(1, 1)) = (1/2, 0, 0).

(Here the output level is j = 0.) It is easy to check this result directly,
starting from the values α(2, 0) = α(2, 1) = 0, α(2, 2) = α(2, 3) = 1 and
using the particular form that takes the DW T (12.12) - (12.13) for the Haar
wavelet:
                                              1
         α(1, 0) = h0 α(2, 0) + h1 α(2, 1) = √ (α(2, 0) + α(2, 1)),
                                               2
                                              1
         α(1, 1) = h0 α(2, 2) + h1 α(2, 3) = √ (α(2, 2) + α(2, 2)),
                                               2
                                              1
         β(1, 0) = λ0 α(2, 0) + λ1 α(2, 1) = √ (α(2, 1) − α(2, 0)),
                                               2
                                              1
         β(1, 1) = λ0 α(2, 2) + λ1 α(2, 3) = √ (α(2, 3) − α(2, 2)),
                                               2

and
                                               1
         α(0, 0) = h0 α(1, 0) + h1 α(1, 1) = √ (α(1, 0) + α(1, 1)),
                                                2
                                               1
         β(0, 0) = λ0 α(1, 0) + λ1 α(1, 1) = √ (α(1, 1) − α(1, 0)),
                                                2
                    √
where h0 = h1 = 1/ 2 and λ0 = −h1 , λ1 = h0 .
   In fact any algorithm could lead to a sign inversion for the vector b since
the mother wavelet is not uniquely defined, see Chapter 5.
   Taking the level j = 1 gives
                                                      √
                   a = (α(1, 0), α(1, 1)) = (0, 1/ 2)
                   b = (β(1, 0), β(1, 1)) = (0, 0).
228   CHAPTER 12. COMPUTATIONAL ASPECTS AND SOFTWARE


   The inverse wavelet transform is obtained via the command

                             invfwt(a, b, m, l, h)

or alternatively by
                               invdwt(y, l, h)
Here the entries a,b are the coefficients as above, the entry m = 2K denotes
the length of the input vector, l = 2j is the number of father wavelets on
the input level j.
    The thresholding may be done via hard or soft-thresholding, i.e. by trans-
fering the wavelet coefficients through the functions given in (10.13) and
(10.14).

Translation invariant wavelet transform
The translation invariant wavelet transform is calculated via the command

                             ti = fwtin(x, d, h)

where ti is the T I Table, x the input vector as before, d = j0 . Note that
l = 2d is the number of father wavelets on the initial level j0 .
   The variable h denotes as before the coefficient vector (e.g. symmlet7 for
the coefficients of Table 12.2). The inverse transform is called via

                           xs = invfwtin(ti, h).
Appendix A

Tables

A.1       Wavelet Coefficients
This table presents the wavelet coefficients for

                D4, . . . , D20; S4, S5, . . . , S10; C1, C2, . . . , C5,

see the description for coefficient extraction in Section 12.6.
  1    0.482963         75     0.133197            149    -0.140047         223   -0.00182321
  2    0.836516         76    -0.293274            150    -0.107808         224   -0.000720549
  3    0.224144         77    -0.0968408           151     0.00401024       225   -0.00379351
  4   -0.12941          78     0.148541            152     0.0102682        226    0.0077826
  5    0.332671         79     0.0307257           153     0.00188995       227    0.0234527
  6    0.806892         80    -0.0676328           154    -0.000302921      228   -0.0657719
  7    0.459878         81     0.000250947         155    -0.0149523        229   -0.0611234
  8   -0.135011         82     0.0223617           156     0.00380875       230    0.405177
  9   -0.0854423        83    -0.0047232           157     0.0491372        231    0.793777
 10    0.0352263        84    -0.0042815           158    -0.027219         232    0.428483
 11    0.230378         85     0.00184765          159    -0.0519458        233   -0.0717998
 12    0.714847         86     0.000230386         160     0.364442         234   -0.0823019
 13    0.630881         87    -0.000251963         161     0.777186         235    0.034555
 14   -0.0279838        88     3.934732e-005       162     0.48136          236    0.0158805
 15   -0.187035         89     0.0266701           163    -0.0612734        237   -0.00900798
 16    0.0308414        90     0.188177            164    -0.143294         238   -0.00257452
 17    0.032883         91     0.527201            165     0.00760749       239    0.00111752
 18   -0.0105974        92     0.688459            166     0.0316951        240    0.000466217
 19    0.160102         93     0.281172            167    -0.000542132      241   -7.09833e-005
 20    0.603829         94    -0.249846            168    -0.00338242       242   -3.459977e-005
                                          229
230                                               APPENDIX A. TABLES


 21    0.724309       95   -0.195946        169    0.00106949      243    0.000892314
 22    0.138428       96    0.127369        170   -0.000473154     244   -0.00162949
 23   -0.242295       97    0.0930574       171   -0.0102641       245   -0.00734617
 24   -0.03224        98   -0.0713941       172    0.00885927      246    0.0160689
 25    0.0775715      99   -0.0294575       173    0.0620778       247    0.0266823
 26   -0.00624149    100    0.0332127       174   -0.0182338       248   -0.0812667
 27   -0.0125808     101    0.00360655      175   -0.191551        249   -0.0560773
 28    0.00333573    102   -0.0107332       176    0.0324441       250    0.415308
 29    0.111541      103    0.00139535      177    0.617338        251    0.782239
 30    0.494624      104    0.00199241      178    0.717897        252    0.434386
 31    0.751134      105   -0.000685857     179    0.238761        253   -0.0666275
 32    0.31525       106   -0.000116467     180   -0.054569        254   -0.0962204
 33   -0.226265      107    9.358867e-005   181    0.000583463     255    0.0393344
 34   -0.129767      108   -1.32642e-005    182    0.0302249       256    0.0250823
 35    0.0975016     109   -0.0757657       183   -0.0115282       257   -0.0152117
 36    0.0275229     110   -0.0296355       184   -0.013272        258   -0.00565829
 37   -0.031582      111    0.497619        185    0.000619781     259    0.00375144
 38    0.000553842   112    0.803739        186    0.00140092      260    0.00126656
 39    0.00477726    113    0.297858        187    0.00077016      261   -0.000589021
 40   -0.0010773     114   -0.0992195       188    9.563267e-005   262   -0.000259975
 41    0.0778521     115   -0.012604        189   -0.00864133      263    6.233903e-005
 42    0.396539      116    0.0322231       190   -0.00146538      264    3.122988e-005
 43    0.729132      117    0.0273331       191    0.0459272       265   -3.25968e-006
 44    0.469782      118    0.0295195       192    0.0116099       266   -1.784985e-006
 45   -0.143906      119   -0.0391342       193   -0.159494        267   -0.000212081
 46   -0.224036      120    0.199398        194   -0.0708805       268    0.00035859
 47    0.0713092     121    0.723408        195    0.471691        269    0.00217824
 48    0.0806126     122    0.633979        196    0.76951         270   -0.00415936
 49   -0.0380299     123    0.0166021       197    0.383827        271   -0.0101311
 50   -0.0165745     124   -0.175328        198   -0.0355367       272    0.0234082
 51    0.012551      125   -0.0211018       199   -0.0319901       273    0.028168
 52    0.00042957    126    0.0195389       200    0.049995        274   -0.09192
 53   -0.0018016     127    0.0154041       201    0.00576491      275   -0.0520432
 54    0.00035371    128    0.00349071      202   -0.0203549       276    0.421566
 55    0.0544158     129   -0.11799         203   -0.000804359     277    0.77429
 56    0.312872      130   -0.0483117       204    0.00459317      278    0.437992
 57    0.675631      131    0.491055        205    5.703608e-005   279   -0.062036
 58    0.585355      132    0.787641        206   -0.000459329     280   -0.105574
 59   -0.0158291     133    0.337929        207   -0.0727326       281    0.0412892
 60   -0.284016      134   -0.0726375       208    0.337898        282    0.0326836
 61    0.000472485   135   -0.0210603       209    0.852572        283   -0.0197618
A.2.                                                                     231


 62     0.128747      136    0.0447249      210    0.384865        284   -0.00916423
 63    -0.0173693     137    0.00176771     211   -0.072733        285    0.00676419
 64    -0.0440883     138   -0.00780071     212   -0.0156557       286    0.00243337
 65     0.013981      139    0.00268181     213    0.0163873       287   -0.00166286
 66     0.00874609    140   -0.00104738     214   -0.0414649       288   -0.000638131
 67    -0.00487035    141   -0.0126363      215   -0.0673726       289    0.00030226
 68     0.000039174   142    0.0305155      216    0.38611         290    0.000140541
 69     0.000675449   143    0.0678927      217    0.812724        291   -4.134043e-005
 70    -0.000117477   144   -0.0495528      218    0.417005        292   -2.131503e-005
 71     0.0380779     145    0.0174413      219   -0.0764886       293    3.734655e-006
 72     0.243835      146    0.536102       220   -0.0594344       294    2.063762e-006
 73     0.604823      147    0.767764       221    0.0236802       295   -1.674429e-007
 74     0.657288      148    0.28863        222    0.00561143      296   -9.517657e-008



        Table A.1: The 296 coefficients for the wavelet construction.


A.2
                        1   0   0 12       117    126
                        2   1   4 13       127    138
                        3   5 10 14        139    152
                        4 11 18 15         153    168
                        5 19 28 16         169    186
                        6 29 40 17         187    206
                        7 41 54 18         207    212
                        8 55 70 19         213    224
                        9 71 88 20         225    242
                       10 89 108 21        243    266
                       11 109 116 22       267    296
Table A.2: The indices for the selected wavelets. The first column indicates
the wavelet number, the second the lower index, the third the upper index.
Appendix B

Software Availability

For questions concerning the availability of new releases of XploRe, contact
xplore@netcologne.de
    or
GfKI – Gesellschaft für Kommunikation und Information
Mauritiussteinweg 2
D-50676 Köln
GERMANY
FAX:+49 22 1923 3906
    There exists a mailing list for discussion of software problems. Mail to
                          stat@wiwi.hu-berlin.de
for subscribing or unsubscribing to the mailing list. After subscribing, send
your mail to:
                         xplore@wiwi.hu-berlin.de
    The XploRe programs that produced the figures in this text are freely
distributed. The whole set of programs is available via internet by contacting
                     http://wotan.wiwi.hu-berlin.de
    You may be interested in trying the Java interface of XploRe
    All algorithms in this book are freely available. They can be found under
the above http adress under
                     http://wotan.wiwi.hu-berlin.de
Putting the algorithm hkpt103.xpl into the Java interface results in a graph
corresponding to a picture 10.3 in this text. The other graphes may be
recalculated correspondingly.




                                     232
Appendix C

Bernstein and Rosenthal
inequalities

The aim of this appendix is to give a simple proof of both Bernstein and
Rosenthal inequalities. For a deeper insight into the field of general moments
or exponential inequalities we refer to Petrov (1995), Pollard (1984), Hall &
Heyde (1980) (for the case of martingales), Ledoux & Talagrand (1991) for
more general isoperimetric and concentration of measure inequalities. The
proof is based on the following lemma which is a special case of concentration
of measure results.

LEMMA C.1 Let X1 , . . . , Xn be independent random variables such that
                          n
Xi ≤ M, E(Xi ) ≤ 0, b2n =   E(Xi2 ). Then for any λ ≥ 0,
                          P
                          i=1

                     n
                                      b2
                                                        !!
                                            λM
                   P ( Xi ≥ λ) ≤ exp − n2 θ
                     X
                                                                        (C.1)
                      i=1             M      b2n

where θ(x) = (1 + x) log(1 + x) − x.

Proof:


   • Consider the function
                                (
                                    (ex − 1 − x)/x2 , x 6= 0,
                      Φ(x) =        1
                                    2
                                                    , x = 0.

                                       233
234   APPENDIX C. BERNSTEIN AND ROSENTHAL INEQUALITIES


      Clearly Φ(x) ≥ 0, ∀x ∈ IR1 , and Φ(x) is non-decreasing. The last
      property is easily obtained by observing that the derivative of Φ is
       1
      x3
         (ex (x − 2) + x + 2), x 6= 0, and then proving that ex (x − 2) + x + 2
      has the same sign as x.
   • Using the Markov inequality and independence of X 0 i s we get that, for
     arbitrary t > 0, λ > 0,
                     n                                                 n
                                    !                       "                      !#
                     X                                                 X
               P           Xi > λ       ≤ exp(−λt)E exp                      tXi
                     i=1                                               i=1
                                                                n
                                                (   "                                   #)
                                                                                  tXi
                                                                X
                                        = exp − λt −                  log E(e           )       .
                                                                i=1

      Next,
                                                                                           
                log E(etXi ) = log E(etXi − 1 − tXi + 1 + tXi )
                                                                             
                                  ≤ log E(etXi − 1 − tXi ) + 1
                                                                        
                                  = log 1 + E(Φ(tXi )t2 Xi2 ) ,

      where we used the inequality E(Xi ) ≤ 0. Thus, since log(1 + u) ≤ u
      for u ≥ 0, we get
                                                       
                    log E(etXi ) ≤ E Φ(tXi )t2 Xi2 ≤ Φ(tM )t2 E(Xi2 ),
      using the monotonicity of the function Φ. Then it follows:
              n
                             !
                                            n                           o
                                 ≤ exp −[λt − b2n t2 Φ(tM )]
              X
          P         Xi > λ
              i=1
                                        b2 λM 2
                                            (       "                                               #)
                                 = exp − n2  2
                                                t − (etM − 1 − tM )                                      .
                                        M   bn
      As t > 0 can be arbitrary, we optimize this inequality by taking t such
      that
                  λM 2        tM                 1          λM
                       − M   e   + M =  0 ⇔ t =     log(1 +      ),
                   b2n                           M           b2n
      wich gives the result.
  2
We now prove the following result known as Bernstein’s inequality (see Petrov
(1995), Pollard (1984) for complete bibliography).
                                                                                             235


THEOREM C.1 Under the assumptions of Lemma C.1, for any λ > 0,
                             n
                                                 λ2
                                          !                                !
                             X
                        P     Xi > λ ≤ exp − 2 λM .
                          i=1               2(bn + 3 )

Proof:
It suffices to show that in inequality (C.1) one can replace the function θ(x)
by the function
                                        3 x2
                                h(x) =         .
                                        2x+3
Hence, we have to prove that

                                 θ(x) − h(x) ≥ 0, ∀x ≥ 0.

This is easily done by observing that θ(0) = h(0), θ0 (0) = h0 (0) and θ00 (0) ≥
h00 (0), ∀x ≥ 0. 2

   The following Corollary is a direct consequence of Theorem C.1.

COROLLARY C.1 (i) If Xi are independent random variables,
|Xi | ≤ M, E(Xi ) = 0, then
                   n
                                             λ2
                                  !                                    !
                   X
            P           Xi ≥ λ ≤ 2 exp − 2 λM , ∀λ ≥ 0.
                    i=1                 2(bn + 3 )

   (ii) If Xi are i.i.d , |Xi | ≤ M, E(Xi ) = 0, E(Xi2 ) = σ 2 , then
                      n
                                              nv 2
                                    !                                      !
                   1 X
            P            Xi ≥ v ≤ 2 exp −              , ∀v ≥ 0.
                   n i=1                  2(σ 2 + vM
                                                   3
                                                     )

Let us now prove the following result known as Rosenthal’s inequality (Rosen-
thal (1970)).

THEOREM C.2 Let p ≥ 2 and let (X1 , . . . , Xn ) be independent random
variables such that E(Xi ) = 0, E(|Xi |p ) < ∞. Then there exists C(p) such
that
                                                                              !p/2 
            n           p!            Xn                       n                   
                                                E (|Xi |p ) +         E(Xi2 )
            X                                                   X
        E          Xi        ≤ C(p)                                                     .   (C.2)
                                                                                  
             i=1                          i=1                   i=1
236         APPENDIX C. BERNSTEIN AND ROSENTHAL INEQUALITIES


REMARK C.1 This inequality is an extension of the classical convexity
inequalities, true for 0 < p ≤ 2:
                                                                    p/2
                          n          p!                n          2                 n
                                                                                                       !p/2
                                                                                                   2
                          X                            X                            X
                E               Xi        ≤ E              Xi              =          E(Xi )              .
                          i=1                          i=1                          i=1

Proof:
We use again Lemma C.1, but this time we replace θ(x) by x log(1 + x) − x
which is obviously smaller than θ(x) for any x ≥ 0. Let us fix an arbitrary
y ≥ 0 and consider the random variables Yi = Xi I{Xi ≤ y}. We have
E(Yi ) ≤ E(Xi ) = 0, Yi ≤ y, and
                                             n                       n
                                     Bn2 =         E(Xi2 ) ≥               E(Yi2 ) = b2n .
                                             X                       X

                                             i=1                     i=1

It follows from Lemma C.1 that
                    n
                                                 b2
                                     !                                     !
                                                       xy
                                          ≤ exp{− n2 θ 2 }
                    X
            P             Yi ≥ x
                    i=1                          y     bn
                                                  b2 xy
                                                       "         (                        !             )#
                                                                  xy    xy
                                          ≤ exp − n2    2
                                                          log 1 + 2 − 2
                                                  y    bn         bn    bn
                                               "    (            !   )#
                                                  x           xy
                                          ≤ exp −    log 1 + 2 − 1 , ∀x > 0.
                                                  y           Bn
    Using this inequality we get, for any x > 0,
      n                                   n
                          !                                                                !                               
      X                                   X
P           Xi > x              ≤ P              Yi > x, X1 ≤ y, . . . , Xn ≤ y + P                        max Xi > y
                                                                                                           1≤i≤n
      i=1                                 i=1
                                           n                      n
                                                           !
                                          X                       X
                                ≤ P              Yi > x +               P (Xi > y)
                                          i=1                     i=1
                                     n
                                                                               (                    !             )!
                                     X                   x        xy
                                ≤     P (Xi > y) + exp −   log 1 + 2                                    −1             . (C.3)
                                  i=1                    y        Bn
Quite similarly one obtains
                      n                                    n
                                             !
                      X                                    X
                P             (−Xi ) > x           ≤             P (−Xi > y)
                      i=1                                  i=1
                                                                           (                   !        )!
                                                           x        xy
                                                   + exp −   log 1 + 2                             −1         .        (C.4)
                                                           y        Bn
                                                                                                     237


Combining (C.3) and(C.4), and putting y = x/τ, τ > 0, we find
      n                   n
                                                           x2
                     !                                                     (                !    )!
      X                   X
P         Xi > x ≤     P (τ |Xi | > x) + 2 exp −τ log 1 +                                       −1    .
      i=1          i=1                                    τ Bn2

Now, for p > 1,
          n          p!       Z ∞                     n
                                                                           !
                                          p−1
          X                                           X
      E         Xi        =          px         P              Xi > x dx
          i=1                  0                         i=1
                              n Z ∞
                                            pxp−1 P (τ |Xi | > x)dx
                              X
                          ≤
                              i=1 0
                                                                    x2
                                   Z ∞                               (             !    )!
                                              p−1
                          + 2p            x         exp −τ log 1 +                     −1       dx
                                    0                              τ Bn2
                              n
                                    E (|τ Xi |p )
                              X
                          ≤
                              i=1
                                                    Z ∞
                                                               p−2
                          +   p(τ Bn2 )p/2 eτ              t 2 (1 + t)−τ dt,                     (C.5)
                                                     0

                                                                               2
where we made the change of the variables t = τxB 2 . To end the proof it
                                                    n
remains to choose τ such that the integral of the RHS is convergent i.e.
τ > p/2. Under this choice of τ inequality (C.5) entails (C.2) with
                                                          Z ∞
                                                                     p−2
                     C(p) = max{τ , pτ  p       p/2 τ
                                                     e           t 2 (1 + t)−τ dt}.
                                                           0

  2
Appendix D

A Lemma on the Riesz basis

We prove that if {g(· − k), k ∈ ZZ} is a Riesz basis, then (6.1) is satisfied.
Thus, we complete the proof of Proposition 6.1. Note that is {g(·−k), k ∈ ZZ}
a Riesz basis, then the following property is true.
                                                   +N
                                                        ak e−ikξ we have:
                                                   P
   For every trigonometric polynomial m(ξ) =
                                                   −N


       1 Z 2π               1 Z 2π                     1 Z 2π
  A           |m(ξ)|2 dξ ≤         Γ(ξ)|m(ξ)|2 dξ ≤ B         |m(ξ)|2 dξ    (D.1)
      2π 0                 2π 0                       2π 0
    Let us prove that this implies A ≤ Γ(ξ) ≤ B a.e. If we introduce the
following Fejer kernel:
                                    N
                                                   !
                                1 X       |k| ikξ
                       KN (ξ) =        1−     e ,
                                N k=−N    N

it is well known (see for instance Katznelson (1976),p.11 ) that,

                                     1 Z 2π
                    KN ∗ Γ(ξ0 ) =           KN (ξ0 − ξ)Γ(ξ)dξ
                                    2π 0
converges in L1 to Γ(ξ0 ) as N → ∞. So there exists a subsequence N 0 such
that KN 0 ∗ Γ(·) → Γ(·) a.e., as N 0 → ∞. (in fact this result is also true
without taking a subsequence but is much more difficult to prove.) Recall
that                                          !2
                                    1 sin N2ξ
                           KN (ξ) =              ,
                                    N sin 2ξ

                                       238
                                                                         239


and that for
                                 N
                                                 sin (2N2+1)ξ
                                        eikξ =
                                 X
                      DN (ξ) =
                                 k=−N               sin 2ξ
we have
                                                           2
                                      1
                      K2N +1 (ξ) = √        DN (ξ) .
                                     2N + 1
As
                           1 Z 2π
                                  K2N +1 (ξ)dξ = 1
                          2π 0
using (D.1) we deduce
                         1 Z 2π
                   A≤           K2N +1 (ξ0 − ξ)Γ(ξ)dξ ≤ B
                        2π 0
and using the a.e. convergence of the subsequence K2N 0 +1 , we deduce (6.1).
Bibliography

Abramovich, F. & Benjamini, Y. (1996). Adaptive thresholding of wavelet
    coefficients, Computational Statistics and Data Analysis 22: 351–361.

Adams, R. (1975). Sobolev Spaces, Academic Press, New York.

Antoniadis, A. (1994). Smoothing noisy data with tapered coiflet series,
    Technical Report RR 993-M, University of Grenoble.

Antoniadis, A., Grégoire, G. & McKeague, I. (1994). Wavelet methods
    for curve estimation, Journal of the American Statistical Association
    89: 1340–1353.

Antoniadis, A. & Oppenheim, G. (eds) (1995). Wavelets and Statistics, Vol.
    103 of Lecture Notes in Statistics, Springer, Heidelberg.

Assouad, P. (1983). Deux remarques sur l’estimation, Comptes Rendus Acad.
    Sci.Paris (A) 296: 1021–1024.

Auscher, P. (1992). Solution of two problems on wavelets, Preprint, IRMAR,
    Univ. Rennes I.

Bergh, J. & Löfström, J. (1976). Interpolation spaces - An Introduction,
    Springer Verlag, New York.

Besov, O. V., Il‘in, V. L. & Nikol‘skii, S. M. (1978). Integral Representations
    of Functions and Embedding Theorems., J. Wiley, New York.

Beylkin, G., Coifman, R. R. & Rokhlin, V. (1991). Fast wavelet transforms
    and numerical algorithms, Comm. Pure and Appl. Math. 44: 141–183.

                                     240
BIBLIOGRAPHY                                                             241


Birgé, L. (1983). Approximation dans les éspaces metriques et théorie de
     l’estimation, Zeitschrift für Wahrscheinlichkeitstheorie und verwandte
     Gebiete 65: 181–237.

Birgé, L. & Massart, P. (1997). From model selection to adaptive estimation,
     in D. Pollard (ed.), Festschrift for L. Le Cam, Springer, pp. 55–88.

Black, F. & Scholes, M. (1973). The pricing of options and corporate liabil-
    ities, Journal of Political Economy 81: 637–654.

Bossaerts, P., Hafner, C. & Härdle, W. (1996). Foreign exchange-rates have
    surprising volatility, in P. Robinson (ed.), Ted Hannan Memorial Vol-
    ume, Springer Verlag.

Bretagnolle, J. & Huber, C. (1979). Estimation des densités: risque minimax,
    Z. Wahrscheinlichkeitstheorie und Verwandte Gebiete 47: 119–137.

Brown, L.-D. & Low, M. L. (1996). Asymptotic equivalence of non-
    parametric regression and white noise, Annals of Statistics 24: 2384–
    2398.

Bruce, A. & Gao, H.-Y. (1996a). Applied Wavelet Analysis with S-Plus,
    Springer Verlag, Heidelberg, New York.

Bruce, A. & Gao, H.-Y. (1996b). Understanding waveshrink: variance and
    bias estimation, Biometrika 83: 727–745.

Burke-Hubbard, B. (1995). Ondes et ondelettes, Pour la science, Paris.

Centsov, N. N. (1962). Evaluation of an unknown distribution density from
    observations, Soviet Math. Dokl. 3: 1599–1562.

Chui, C. (1992a). An Introduction to Wavelets, Academic Press, Boston.

Chui, C. (1992b). Wavelets: a Tutorial in Theory and Applications, Aca-
    demic Press, Boston.

Cohen, A., Daubechies, I. & Vial, P. (1993). Wavelets on the interval and
    fast wavelet transform, Journal of Applied and Computational Harmonic
    Analysis 1: 54–81.
242                                                       BIBLIOGRAPHY


Cohen, A. & Ryan, R. (1995). Wavelets and Multiscale Signal Processing,
    Chapman & Hall.

Coifman, R. R. & Donoho, D. (1995). Translation-invariant de-noising, in
    Antoniadis & Oppenheim (1995), pp. 125–150.

Dahlhaus, R. (1997). Fitting time series models to nonstationary processes,
    Annals of Statistics 25: 1–37.

Daubechies, I. (1988). Orthonormal bases of compactly supported wavelets,
   Comm. Pure and Appl. Math. 41: 909–996.

Daubechies, I. (1992). Ten Lectures on Wavelets, SIAM, Philadelphia.

Delyon, B. & Juditsky, A. (1996a). On minimax wavelet estimators, Journal
    of Applied and Computational Harmonic Analysis 3: 215–228.

Delyon, B. & Juditsky, A. (1996b). On the computation of wavelet coeffi-
    cients, Technical report, IRSA/INRIA, Rennes.

DeVore, R. A. & Lorentz, G. (1993). Constructive Approximation, Springer-
   Verlag, New York.

Donoho, D. (1992a). De-noising via soft-thresholding, Technical report 409,
    Dept. of Statistics, Stanford University.

Donoho, D. (1992b). Interpolating wavelet transforms, Technical report 408,
    Dept. of Statistics, Stanford University.

Donoho, D. (1993). Smooth wavelet decompositions with blocky coefficient
    kernels, Technical report, Dept. of Statistics, Stanford University.

Donoho, D. (1994). Statistical estimation and optimal recovery, Annals of
    Statistics 22: 238–270.

Donoho, D. (1995). Nonlinear solutions of linear inverse problems by wavelet-
    vaguelette decomposition, Journal of Applied and Computational Har-
    monic Analysis 2: 101–126.

Donoho, D. & Johnstone, I. (1991). Minimax estimation via wavelet shrink-
    age, Tech. Report, Stanford University .
BIBLIOGRAPHY                                                                243


Donoho, D. & Johnstone, I. (1994a). Ideal spatial adaptation by wavelet
    shrinkage, Biometrika 81: 425–455.

Donoho, D. & Johnstone, I. (1994b). Minimax risk over lp -balls for lp -error,
    Probabiliy Theory and Related Fields 99: 277–303.

Donoho, D. & Johnstone, I. (1995). Adapting to unknown smoothness
    via wavelet shrinkage, Journal of the American Statistical Association
    90: 1200–1224.

Donoho, D. & Johnstone, I. (1996). Neoclassical minimax problems, thresh-
    olding and adaptive function estimation, Bernoulli 2: 39–62.

Donoho, D., Johnstone, I., Kerkyacharian, G. & Picard, D. (1995). Wavelet
    shrinkage: Asymptopia?, Journal of the Royal Statistical Society, Se-
    ries B 57: 301–369.

Donoho, D., Johnstone, I., Kerkyacharian, G. & Picard, D. (1996). Density
    estimation by wavelet thresholding, Annals of Statistics 24: 508–539.

Donoho, D., Johnstone, I., Kerkyacharian, G. & Picard, D. (1997). Universal
    near minimaxity of wavelet shrinkage, in D. Pollard (ed.), Festschrift for
    L. Le Cam, Springer, N.Y. e.a., pp. 183–218.

Donoho, D., Mallat, S. G. & von Sachs, R. (1996). Estimating covariances of
    locally stationary processes: Consistency of best basis methods, Tech-
    nical report, University of Berkeley.

Doukhan, P. (1988). Formes de Töeplitz associées à une analyse multiéchelle,
    Comptes Rendus Acad. Sci.Paris (A) 306: 663–666.

Doukhan, P. & Leon, J. (1990). Déviation quadratique d’estimateurs d’une
    densité par projection orthogonale, Comptes Rendus Acad. Sci. Paris,
    (A) 310: 425–430.

Efroimovich, S. (1985). Nonparametric estimation of a density with unknown
     smoothness, Theory of Probability and its Applications 30: 524–534.

Efroimovich, S. & Pinsker, M. (1981). Estimation of square-integrable density
     on the basis of a sequence of observations, Problems of Information
     Transmission 17: 182–195.
244                                                        BIBLIOGRAPHY


Fama, E. F. (1976). Foundations of Finance, Basil Blackwell, Oxford.

Fan, J. (1994). Test of significance based on wavelet thresholding and Ney-
     man’s truncation. Preprint.

Fix, G. & Strang, G. (1969). A Fourier analysis of the finite element method,
     Stud. Appl. Math. 48: 265–273.

Foufoula-Georgiou, E. & Kumar, P. (eds) (1994). Wavelets in Geophysics,
    Academic Press, Boston/London/Sydney.

Gao, H.-Y. (1993a). Choice of thresholds for wavelet estimation of the log
    spectrum. Preprint 430. Dept. of Stat. Stanford University.

Gao, H.-Y. (1993b). Wavelet estimation of spectral densities in time series
    analysis. PhD Dissertation. University of California, Berkeley.

Gasser, T., Stroka, L. & Jennen-Steinmetz, C. (1986). Residual variance and
    residual pattern in nonlinear regression, Biometrika 73: 625–633.

Genon-Catalot, V., Laredo, C. & Picard, D. (1992). Nonparametric estima-
    tion of the variance of a diffusion by wavelet methods, Scand. Journal
    of Statistics 19: 319–335.

Ghysels, E., Gourieroux, C. & Jasiak, J. (1995). Trading patterns, time defor-
    mation and stochastic volatility in foreign exchange markets, Discussion
    paper, CREST, Paris.

Gourieroux, C. (1992). Modèles ARCH et Applications Financières, Econom-
    ica, Paris.

Hall, P. & Heyde, C. C. (1980). Martingale Limit Theory and its Applications,
     Acad. Press, New York.

Hall, P., Kerkyacharian, G. & Picard, D. (1996a). Adaptive minimax opti-
     mality of block thresholded wavelet estimators, Statistica Sinica . Sub-
     mitted.

Hall, P., Kerkyacharian, G. & Picard, D. (1996b). Note on the wavelet oracle,
     Technical report, Aust. Nat. University, Canberra.
BIBLIOGRAPHY                                                              245


Hall, P., Kerkyacharian, G. & Picard, D. (1996c). On block thresholding for
     curve estimators using kernel and wavelet methods. Submitted.

Hall, P., McKay, I. & Turlach, B. A. (1996). Performance of wavelet methods
     for functions with many discontinuities, Annals of Statistics 24: 2462–
     2476.

Hall, P. & Patil, P. (1995a). Formulae for mean integrated squared error of
     nonlinear wavelet-based density estimators, Annals of Statistics 23: 905–
     928.

Hall, P. & Patil, P. (1995b). On wavelet methods for estimating smooth
     functions, Bernoulli 1: 41–58.

Hall, P. & Patil, P. (1996a). Effect of threshold rules on performance of
     wavelet-based curve estimators, Statistica Sinica 6: 331–345.

Hall, P. & Patil, P. (1996b). On the choice of smoothing parameter, thresh-
     old and truncation in nonparametric regression by nonlinear wavelet
     methods, Journal of the Royal Statistical Society, Series B 58: 361–377.

Hall, P. & Turlach, B. A. (1995). Interpolation methods for nonlinear wavelet
     regression with irregularly spaced design. Preprint.

Härdle, W. (1990). Applied Nonparametric Regression, Cambridge University
     Press, Cambridge.

Härdle, W., Klinke, S. & Turlach, B. A. (1995). XploRe - an Interactive
     Statistical Computing Environment, Springer, Heidelberg.

Härdle, W. & Scott, D. W. (1992). Smoothing by weighted averaging of
     rounded points, Computational Statistics 7: 97–128.

Hildenbrand, W. (1994).      Market Demand, Princeton University Press,
     Princeton.

Hoffmann, M. (1996).       Méthodes adaptatives pour l’estimation non-
    paramétrique des coefficients d’une diffusion, Phd thesis, Université
    Paris VII.

Holschneider, M. (1995). Wavelets: an Analysis Tool, Oxford University
    Press, Oxford.
246                                                        BIBLIOGRAPHY


Ibragimov, I. A. & Hasminskii, R. Z. (1980). On nonparametric estimation
     of regression, Soviet Math. Dokl. 21: 810–814.

Ibragimov, I. A. & Hasminskii, R. Z. (1981). Statistical Estimation: Asymp-
     totic Theory, Springer, New York.

Johnstone, I. (1994). Minimax Bayes, asymptotic minimax and sparse
    wavelet priors, in S.Gupta & J.Berger (eds), Statistical Decision Theory
    and Related Topics, Springer, pp. 303–326.

Johnstone, I., Kerkyacharian, G. & Picard, D. (1992). Estimation d’une
    densité de probabilité par méthode d’ondelette, Comptes Rendus Acad.
    Sci. Paris, (1) 315: 211–216.

Johnstone, I. & Silverman, B. W. (1997). Wavelet methods for data with cor-
    related noise, Journal of the Royal Statistical Society, Series B 59: 319–
    351.

Juditsky, A. (1997). Wavelet estimators: adapting to unknown smoothness,
     Mathematical Methods of Statistics 6: 1–25.

Kahane, J. P. & Lemarié-Rieusset, P. (1995). Fourier Series and Wavelets,
    Gordon and Breach Science Publishers, Amsterdam.

Kaiser, G. (1995). A Friendly Guide to Wavelets, Birkhäuser, Basel.

Katznelson, Y. (1976). An Introduction to Harmonic Analysis, Dover, New
    York.

Kerkyacharian, G. & Picard, D. (1992). Density estimation in Besov spaces,
    Statistics and Probability Letters 13: 15–24.

Kerkyacharian, G. & Picard, D. (1993). Density estimation by kernel and
    wavelet methods: optimality of Besov spaces, Statistics and Probability
    Letters 18: 327–336.

Kerkyacharian, G., Picard, D. & Tribouley, K. (1996). Lp adaptive density
    estimation, Bernoulli 2: 229–247.

Korostelev, A. P. & Tsybakov, A. B. (1993a). Estimation of the density sup-
    port and its functionals, Problems of Information Transmission 29: 1–
    15.
BIBLIOGRAPHY                                                                   247


Korostelev, A. P. & Tsybakov, A. B. (1993b). Minimax Theory of Image
    Reconstruction, Springer, New York.

Leadbetter, M. R., Lindgren, G. & Rootzén, H. (1986). Extremes and Related
    Properties of Random Sequences and Processes, Springer, N.Y e.a.

Ledoux, M. & Talagrand, M. (1991). Probability in Banach Spaces, Springer,
    New York.

Lemarié, P. (1991). Fonctions à support compact dans les analyses multi-
   résolutions, Revista Mat. Iberoamericana 7: 157–182.

Lemarié-Rieusset, P. (1993). Ondelettes généralisées et fonctions d’échelle à
   support compact, Revista Mat. Iberoamericana 9: 333–371.

Lemarié-Rieusset, P. (1994). Projecteurs invariants, matrices de dilatation,
   ondelettes et analyses multi-résolutions, Revista Mat. Iberoamericana
   10: 283–347.

Lepski, O., Mammen, E. & Spokoiny, V. (1997). Optimal spatial adaptation
    to inhomogeneous smoothness: an approach based on kernel estimates
    with variable bandwidth selectors, Annals of Statistics 25: 929–947.

Lepski, O. & Spokoiny, V. (1995). Local adaptation to inhomogeneous
    smoothness: resolution level, Mathematical Methods of Statistics 4: 239–
    258.

Lepskii, O. (1990). On a problem of adaptive estimation in gaussian white
    noise, Theory Prob. Appl. 35: 454–466.

Lepskii, O. (1991). Asymptotically minimax adaptive estimation I: Upper
    bounds. Optimal adaptive estimates, Theory Prob. Appl. 36: 682–697.

Lepskii, O. (1992). Asymptotically minimax adaptive estimation II: Statis-
    tical models without optimal adaptation. Adaptive estimates, Theory
    Prob. Appl. 37: 433–468.

Lintner, J. (1965). Security prices, risk and maximal gains from diversifica-
     tion, Journal of Finance 20: 587–615.
248                                                       BIBLIOGRAPHY


Mallat, S. G. (1989). A theory for multiresolution signal decomposition:
    the wavelet representation, IEEE Transactions on Pattern Analysis and
    Machine Intelligence 11: 674–693.

Marron, J. S., Adak, S., Johnstone, I., Neumann, M. & Patil, P. (1995).
    Exact risk analysis of wavelet regression. Manuscript.

Marron, J. S. & Tsybakov, A. B. (1995). Visual error criteria for qualitative
    smoothing, Journal of the American Statistical Association 90: 499–507.

Meyer, Y. (1990). Ondelettes et opérateurs, Hermann, Paris.

Meyer, Y. (1991). Ondelettes sur l’intervalle, Rev. Mat. Iberoamericana
    7: 115–133.

Meyer, Y. (1993). Wavelets: Algorithms and Applications, SIAM, Philadel-
    phia.

Misiti, M., Misiti, Y., Oppenheim, G. & Poggi, J. (1996). Wavelet TOOL-
     BOX, The MathWorks Inc., Natick, MA.

Moulin, P. (1993). Wavelet thresholding techniques for power spectrum es-
    timation, IEEE. Trans. Signal Processing 42: 3126–3136.

Nason, G. (1996). Wavelet shrinkage using cross-validation, Journal of the
    Royal Statistical Society, Series B 58: 463–479.

Nason, G. & Silverman, B. W. (1994). The discrete wavelet transform in S,
    Journal of Computational and Graphical Statistics 3: 163–191.

Nemirovskii, A. S. (1986). Nonparametric estimation of smooth regression
   functions, Journal of Computer and System Sciences 23(6): 1–11.

Nemirovskii, A. S., Polyak, B. T. & Tsybakov, A. B. (1983). Estimators
   of maximum likelihood type for nonparametric regression, Soviet Math.
   Dokl. 28: 788–92.

Nemirovskii, A. S., Polyak, B. T. & Tsybakov, A. B. (1985). Rate of conver-
   gence of nonparametric estimators of maximum likelihood type, Prob-
   lems of Information Transmission 21: 258–272.
BIBLIOGRAPHY                                                           249


Neumann, M. (1996a). Multivariate wavelet thresholding: a remedy against
   the curse of dimensionality ? Preprint 239. Weierstrass Inst. of Applied
   Analysis and Stochastics, Berlin.

Neumann, M. (1996b). Spectral density estimation via nonlinear wavelet
   methods for stationary non-gaussian time series, Journal of Time Series
   Analysis 17: 601–633.

Neumann, M. & Spokoiny, V. (1995). On the efficiency of wavelet estimators
   under arbitrary error distributions, Mathematical Methods of Statistics
   4: 137–166.

Neumann, M. & von Sachs, R. (1995). Wavelet thresholding: beyond the
   Gaussian iid situation, in Antoniadis & Oppenheim (1995), pp. 301–
   329.

Neumann, M. & von Sachs, R. (1997). Wavelet thresholding in anisotropic
   function classes and application to adaptive estimation of evolutionary
   spectra, Annals of Statistics 25: 38–76.

Nikol‘skii, S. M. (1975). Approximation of Functions of Several Variables
    and Imbedding Theorems, Springer, New York.

Nussbaum, M. (1985). Spline smoothing in regression models and asymptotic
    efficiency in L2 , Annals of Statistics 13: 984–97.

Nussbaum, M. (1996). Asymptotic equivalence of density estimation and
    gaussian white noise, Annals of Statistics 24: 2399–2430.

Ogden, T. (1997). Essential Wavelets for Statistical Applications and Data
    Analysis, Birkhäuser, Basel.

Ogden, T. & Parzen, E. (1996). Data dependent wavelet thresholding in non-
    parametric regression with change point applications, Computational
    Statistics and Data Analysis 22: 53–70.

Oppenheim, A. & Schafer, R. (1975). Digital Signal Processing, Prentice-
   Hall, New York.

Papoulis, G. (1977). Signal Analysis, McGraw Hill.
250                                                        BIBLIOGRAPHY


Park, B. V. & Turlach, B. A. (1992). Practical performance of several data
    driven bandwidth selectors, Computational Statistics 7: 251–270.

Peetre, J. (1975). New thoughts on Besov spaces, vol. 1, Technical report,
    Duke University, Durham, NC.

Pesquet, J. C., Krim, H. & Carfantan, H. (1994). Time invariant orthogonal
    wavelet representation. Submitted for publication.

Petrov, V. V. (1995). Limit Theorems of Probability Theory, Clarendon Press,
     Oxford.

Pinsker, M. (1980). Optimal filtering of square integrable signals in gaussian
    white noise, Problems of Information Transmission 16: 120–133.

Pollard, D. (1984). Convergence of Stochastic Processes, Springer, New York.

Raimondo, M. (1996). Modelles en ruptures, Phd thesis, Université Paris
    VII.

Rioul, O. & Vetterli, M. (1991). Wavelets and signal processing, IEEE Signal
    Processing Magazine 8(4): 14–38.

Rosenthal, H. P. (1970). On the subspaces of Lp (p > 2) spanned by sequences
    of independent random variables, Israel Journal of Mathematics 8: 273–
    303.

Sharpe, W. (1964). Capital asset prices: a theory of market equilibrium
    under conditions of risk, Journal of Finance 19: 425–442.

Silverman, B. W. (1986). Density Estimation for Statistics and Data Anal-
     ysis, Chapman and Hall, London.

Spokoiny, V. (1996). Adaptive hypothesis testing using wavelets, Annals of
    Statistics 25: 2477–2498.

Stein, C. M. (1981). Estimation of the mean of a multivariate normal distri-
     bution, Annals of Statistics 9: 1135–1151.

Stein, E. & Weiss, G. (1971). Introduction to Fourier Analysis on Euclidean
     Spaces, Princeton University Press, Princeton.
BIBLIOGRAPHY                                                             251


Stone, C. J. (1980). Optimal rates of convergence for nonparametric estima-
    tors, Annals of Statistics 8: 1348–60.

Stone, C. J. (1982). Optimal global rates of convergence for nonparametric
    regression, Annals of Statistics 10: 1040–1053.

Strang, G. & Nguyen, T. (1996). Wavelets and Filter Banks, Wellesley-
    Cambridge Press, Wellesley, MA.

Tribouley, K. (1995). Practical estimation of multivariate densities using
    wavelet methods, Statistica Neerlandica 49: 41–62.

Tribouley, K. & Viennet, G. (1998). Lp adaptive estimation of the density
    in a β-mixing framework., Ann. de l’Institut H. Poincaré, to appear .

Triebel, H. (1992). Theory of Function Spaces II, Birkhäuser Verlag, Basel.

Tsybakov, A. B. (1995). Pointwise and sup-norm adaptive signal estimation
    on the Sobolev classes. Submitted for publication.

von Sachs, R. & Schneider, K. (1996). Wavelet smoothing of evolutionary
    spectra by non-linear thresholding, Journal of Applied and Computa-
    tional Harmonic Analysis 3: 268–282.

Wang, Y. (1995). Jump and sharp cusp detection by wavelets, Biometrika
   82: 385–397.

Wang, Y. (1996). Function estimation via wavelet shrinkage for long–memory
   data, Annals of Statistics 24: 466–484.

Young, R. K. (1993). Wavelet Theory and its Applications, Kluwer Academic
    Publishers, Boston/Dordrecht/London.
Index

T I Table, 221                              cascade algorithm, 208
                                            Characterization of Besov spaces,
XploRe wavelet library, 223                          110
adaptive choice of j0 , 201                 coiflets, 27, 61–63
adaptive choice of father wavelet,          coiflets (of order K), 63
       201                                  compactly supported wavelet bases,
adaptive threshold, 201                              123
approximation in Besov spaces, 111          compactly supported wavelets, 57
approximation kernels, 71, 124              condition (θ), 80
                                            condition (θ), 77
B-splines, 47                               condition H, 71
bandwidth, 123, 172                         condition H(N), 71
Bandwidth factorized cross valida-          condition M(N), 71
        tion, 172                           condition P, 71
bandwidth selectors, 172                    condition S, 80
basis wavelets, 223                         construction of father wavelets, 45
Battle-Lemarié father wavelet, 50          Convolution, 30
Bernstein’s inequality, 165                 convolution kernel, 71
Bernstein’s theorem, 103
Besov class, 127, 145                       data compression, 8
Besov space, 100                            Daubechies wavelets, 59
Besov spaces, 97, 102, 110                  Daubechies’ wavelets, 60
bias error, 124                             density estimation, 121
Biased cross validation, 172                detail coefficients, 26
bid-ask spread, 3
binning, 130, 214                           exchange rates, 1
bound for the bias, 124
bound for the stochastic error, 125         fast wavelet transform, 224
boundary effects, 178                       father wavelet, 21, 24, 25, 115
                                            forward transform, 215
capital asset pricing model, 166            Fourier coefficients, 31

                                      252
INDEX                                                                         253


Fourier frequency spectrum, 3              local adaptivity, 13
Fourier series, 8, 31                      localization property, 7
Fourier transform, 29                      location - frequency plot, 3
Fourier transform of a shifted func-       low-pass filter, 209
        tion and scaled function, 30
frequency localization, 21                 Marchaud inequality, 98
frequency representation, 3                matching of smoothness and risk,
Fubini theorem, 69                                 143
                                           mean integrated squared error, 124
Generalized Minkowsky inequality,          minimax nonparametric estimation,
       71                                          145
generator function, 46                     minimax rate of convergence, 144
                                           moduli of continuity, 97
Hölder smoothness class, 61
                                           Moment condition in the wavelet
Haar basis, 17
                                                   case, 85
Haar father wavelet, 48, 59
                                           moment conditions for kernels, 80
hard thresholding, 134
                                           mother wavelet, 21, 25
Hardy inequality, 100
                                           MRA, 24
high-pass filter, 209
                                           multiresolution analysis, 13, 14, 24
homogeneous wavelet expansion, 26
                                           multiresolution expansion, 25
infinitely differentiable compactly sup-
         ported functions, 68              nestedness of the spaces Vj , 34
inhomogeneous wavelet expansion,           non-linear estimators, 143
         26                                nonlinear smoothing, 13, 122
integrated squared error, 130, 174         nonparametric regression, 121
inverse Fourier transform, 29
                                           ONB, 18, 19, 178
inverse transform, 215
                                           ONS, 20
Kernel density estimates, 170              optimal rate of convergence, 143,
kernels, 123                                       144
                                           option pricing, 166
Least squares cross validation, 172        oracle inequalities, 205
limits of computation and initial val-     orthogonal projection kernel, 79
         ues, 215                          orthonormal basis, 17, 18
Linear wavelet density estimation,         orthonormal system, 17, 20
         122                               overlap function, 46
Littlewood-Paley, 102
Littlewood-Paley decomposition, 103,       Park and Marron plug in, 172
         110                               Parseval’s formula, 88
254                                                             INDEX


periodic kernels, 76                 Stein’s principle, 199
periodicity, 71                      Stein’s unbiased risk estimator (SURE),
piecewise-linear B-spline, 48                 200
Plancherel formulas, 29              stochastic error, 124
Poisson summation formula, 31, 37,   symmetric compactly supported fa-
        84, 88                                ther wavelet, 61
portfolio, 166                       symmlets, 63, 65
projection operators, 76
pseudo-Gibbs phenomena, 219          thresholding, 13
pyramidal algorithm, 208             time localization, 21
                                     translation invariant wavelet esti-
Quartic kernel, 172                          mator, 142, 220
                                     Translation invariant wavelet trans-
reconstruction, 7                            form, 226
regular zone, 146                    trigonometric polynomial, 57, 58
return densities, 165
Riemann-Lebesgue Lemma, 29           unbiased risk estimation, 199
Riesz basis, 45, 48
risk of an estimator, 143            wavelet coefficients, 3, 25
Rosenthal’s inequality, 128          wavelet density, 7
                                     wavelet expansion, 21, 25
sampling theorem, 26                 wavelet shrinkage, 134
scaling function, 76, 78, 116        wavelet thresholding density esti-
Schwartz space, 102                          mator, 134
sequence spaces, 99                  wavelets in Besov spaces, 113
Shannon basis, 26                    weak differentiability, 68
Shannon function, 77
Sheather and Jones plug in, 172      XploRe, 14
signal processing, 26
                                     Zygmund space, 101
Silverman’s rule of thumb, 172
size condition, 71, 80
Smoothed cross validation, 172
smoothing, 7
Sobolev space, 68, 70, 116
soft thresholding, 134
space adaptive filtering, 7
sparse zone, 146
spatial sensitivity, 3
stationary wavelet transform, 220


