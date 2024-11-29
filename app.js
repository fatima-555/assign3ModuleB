//Q1: Solve the below code of expressions using short circuit?

// Initialize variable
let a = 5;

// Expression 1
let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
console.log("Expression 1:", exp1);


// Expression 2
let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
console.log("Expression 2:", exp2);


// Expression 3
let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
console.log("Expression 3:", exp3);


// Expression 4
let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
console.log("Expression 4:", exp4);


// Expression 5
let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
console.log("Expression 5:", exp5);


// Expression 6
let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
console.log("Expression 6:", exp6);


//Expression 7
let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
console.log("Expression 7:", exp7);


//Expression 8
let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
console.log("Expression 8:", exp8);


//Expression 9
let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
console.log("Expression 9:", exp9);


//Expression 10
let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
console.log("Expression 10:", exp10);


//Expression 11
let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
console.log("Expression 11:", exp11);


//Expression 12
let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
console.log("Expression 12:", exp12);


//Expression 13
let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
console.log("Expression 13:", exp13);


//Expression 14
let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
console.log("Expression 14:", exp14);


//Expression 15
let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
console.log("Expression 15:", exp15);


//Expression 16
let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
console.log("Expression 16:", exp16);


//Expression 17
let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
console.log("Expression 17:", exp17);


//Expression 18
let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
console.log("Expression 18:", exp18);


//Expression 19
let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
console.log("Expression 19:", exp19);


//Expression 20
let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
console.log("Expression 20:", exp20);


//Expression 21
let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
console.log("Expression 21:", exp21);


//Expression 22
let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
console.log("Expression 22:", exp22);


//Expression 23
let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
console.log("Expression 23:", exp23);


//Expression 24
let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
console.log("Expression 24:", exp24);


//Expression 25
let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
console.log("Expression 25:", exp25);


//Expression 26
let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
console.log("Expression 26:", exp26);


//Expression 27
let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
console.log("Expression 27:", exp27);


//Expression 28
let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
console.log("Expression 28:", exp28);


//Expression 20
let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
console.log("Expression 20:", exp29);


//Expression 30
let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
console.log("Expression 30:", exp30);


//Expression 31
let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
console.log("Expression 31:", exp31);


//Expression 32
let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
console.log("Expression 32:", exp32);


//Expression 33
let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
console.log("Expression 33:", exp33);


//Expression 34
let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
console.log("Expression 34:", exp34);


//Expression 35
let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
console.log("Expression 35:", exp35);


//Expression 36
let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
console.log("Expression 36:", exp36);


//Expression 37
let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
console.log("Expression 37:", exp37);


//Expression 38
let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
console.log("Expression 38:", exp38);


//Expression 39
let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
console.log("Expression 39:", exp39);


//Expression 40
let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
console.log("Expression 40:", exp40);


//Expression 41
let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
console.log("Expression 41:", exp41);


//Expression 42
let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
console.log("Expression 42:", exp42);


//Expression 43
let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
console.log("Expression 43:", exp43);


//Expression 44
let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
console.log("Expression 44:", exp44);


//Expression 45
let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
console.log("Expression 45:", exp45);


//Expression 46
let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
console.log("Expression 46:", exp46);


//Expression 47
let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
console.log("Expression 47:", exp47);


//Expression 48
let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
console.log("Expression 48:", exp48);


//Expression 49
let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
console.log("Expression 49:", exp49);


//Expression 50
let exp50 = 32 && true - ++a && " " || "true"; // for a = 5
console.log("Expression 50:", exp50);


//Expression 51
let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
console.log("Expression 51:", exp51);


//Expression 52
let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
console.log("Expression 52:", exp52);


//Expression 53
let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
console.log("Expression 53:", exp53);


//Expression 54
let exp54 = "hello" + (false + a++) || (true + 2) && "test" + 5;
console.log("Expression 54:", exp54);


//Expression 55
let exp55 = (false + "start") * 3 || a++ * (1 + "end") + "result";
console.log("Expression 55:", exp55);


//Expression 56
let exp56 = 5 * (true && a++) + "test" || "result" + 4 * (false + 1);
console.log("Expression 56:", exp56);


//Expression 57
let exp57 = (a-- + 1) * "end" + 3 || 5 + "test" && "start";
console.log("Expression 57:", exp57);


//Expression 58
let exp58 = "test" + (++a + "result") * 4 || (false + 3) * "end";
console.log("Expression 58:", exp58);


//Expression 59
let exp59 = 2 + 3 * (false + "test") || (a-- + 1) * "end" + 4;
console.log("Expression 59:", exp59);


//Expression 60
let exp60 = (true + 5) * "hello" || a-- * "start" + "result" + 3;
console.log("Expression 60:", exp60);


//Expression 61
let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
console.log('Expression 61:', exp61);


//Expression 62
let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
console.log('Expression 62:', exp62);


//Expression 63
let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
console.log('Expression 63:', exp63);


//Expression 64
let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
console.log('Expression 64:', exp64);


//Expression 65
let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
console.log('Expression 65:', exp65);


//Expression 66
let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
console.log('Expression 66:', exp66);


//Expression 67
let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
console.log('Expression 67:', exp67);


//Expression 68
let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
console.log('Expression 68:', exp68);


//Expression 69
let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
console.log('Expression 69:', exp69);


//Expression 70
let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
console.log('Expression 70:', exp70);


//Expression 71
let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
console.log('Expression 71:', exp71);


//Expression 72
let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
console.log('Expression 72:', exp72);


//Expression 73
let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
console.log('Expression 73:', exp73);


//Expression 74
let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
console.log('Expression 74:', exp74);


//Expression 75
let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
console.log('Expression 75:', exp75);
