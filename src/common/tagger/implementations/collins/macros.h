// Copyright (C) University of Oxford 2010
#ifndef _TAGGER_MACROS_H
#define _TAGGER_MACROS_H
#define SIMPLE_HASH

namespace TARGET_LANGUAGE {

namespace tagger {

typedef long SCORE_TYPE ;

//
// Specific global
//
const int AGENDA_SIZE = 8;

//
// General definitions for any method tagger.
//
const int MAX_SENTENCE_SIZE = 1024; // restrict size of sentences 

};

}

#endif
