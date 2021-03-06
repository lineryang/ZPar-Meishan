ifeq ($(SPANISH_DEPPARSER_LABELED), true)
	SPANISH_DEPPARSER_D = -DLABELED
endif

zpar.es: $(OBJECT_DIR) $(DIST_DIR) $(OBJECT_DIR)/reader.o $(OBJECT_DIR)/writer.o $(OBJECT_DIR)/options.o $(OBJECT_DIR)/spanish.postagger.o $(OBJECT_SPANISH_TAGGER)/weight.o $(OBJECT_DIR)/spanish.depparser.o $(OBJECT_SPANISH_DEPPARSER)/weight.o $(OBJECT_DIR)/spanish.deplabeler.o $(OBJECT_SPANISH_DEPLABELER)/weight.o $(OBJECTS)
	$(CXX) $(CXXFLAGS) -DTARGET_LANGUAGE=spanish -D$(SPANISH_ANNOTATION) $(SPANISH_DEPPARSER_D) -I$(SRC_SPANISH) -I$(SRC_SPANISH_TAGGER) -I$(SRC_SPANISH_TAGGER)/implementations/$(SPANISH_TAGGER_IMPL)-I$(SRC_COMMON_DEPPARSER) -I$(SRC_COMMON_DEPPARSER)/implementations/$(SPANISH_DEPPARSER_IMPL)-I$(SRC_COMMON_DEPLABELER)-I$(SRC_COMMON_DEPLABELER)/implementations/$(SPANISH_DEPLABELER_IMPL)-c $(SRC_SPANISH)/zpar.es.cpp -o $(OBJECT_DIR)/zpar.es.o 
	$(LD) $(LDFLAGS) -o $(DIST_DIR)/zpar.es $(OBJECT_DIR)/zpar.es.o $(OBJECT_SPANISH_TAGGER)/weight.o $(OBJECT_DIR)/spanish.postagger.o $(OBJECT_DIR)/spanish.depparser.o $(OBJECT_SPANISH_DEPPARSER)/weight.o  $(OBJECT_DIR)/spanish.deplabeler.o $(OBJECT_SPANISH_DEPLABELER)/weight.o $(OBJECTS)
	@echo The Spanish zpar.es system compiled - configured with annotation type $(SPANISH_ANNOTATION) - successfully into $(DIST_DIR).


