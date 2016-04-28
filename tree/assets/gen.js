var guids=[5751131265,8253949775,90923037591,32309316872,58112056664,21434351520,52841517522,54607674729,13047411450,55922610994,14751322185,71862559383,54309144583,43396599507,14453253692,33454200068,90325521881,76335019634,80397065735,8756293254,95405827094,69843588734,34731767344,18623327,82187006375,8549771259,67824339695,88693908569,21137601942,61693405566,83614167158,6402856499];
/*  - key, the unique ID of the person
    - n, the person's name
    - s, the person's sex
    - m, the person's mother's key
    - f, the person's father's key
    - ux, the person's wife
    - vir, the person's husband
    - a, an Array of the attributes or markers that the person has*/

  var opts = {
    radius:40,
    angle:90,
    stroke:2,
    textWidth:80
  };

  var genData = [
          /*{ key: 0, n: "Aaron", s: "M", m:-10, f:-11, ptr: 1, a: ["C", "F", "K"] },
          { key: 1, n: "Alice", s: "F", m:-12, f:-13, a: ["B", "H", "K"] },
          { key: 2, n: "Bob", s: "M", m: 1, f: 0, ptr: 3, a: ["C", "H", "L"] },
          { key: 3, n: "Barbara", s: "F", a: ["C"] },
          { key: 4, n: "Bill", s: "M", m: 1, f: 0, ptr: 5, a: ["E", "H"] },
          { key: 5, n: "Brooke", s: "F", a: ["B", "H", "L"] },
          { key: 6, n: "Claire", s: "F", m: 1, f: 0, a: ["C"] },
          { key: 7, n: "Carol", s: "F", m: 1, f: 0, a: ["C", "I"] },
          { key: 8, n: "Chloe", s: "F", m: 1, f: 0, vir: 9, a: ["E"] },
          { key: 9, n: "Chris", s: "M", a: ["B", "H"] },
          { key: 10, n: "Ellie", s: "F", m: 3, f: 2, a: ["E", "G"] },
          { key: 11, n: "Dan", s: "M", m: 3, f: 2, a: ["B", "J"] },
          { key: 12, n: "Elizabeth", s: "F", vir: 13, a: ["J"] },
          { key: 13, n: "David", s: "M", m: 5, f: 4, a: ["B", "H"] },
          { key: 14, n: "Emma", s: "F", m: 5, f: 4, a: ["E", "G"] },
          { key: 15, n: "Evan", s: "M", m: 8, f: 9, a: ["F", "H"] },
          { key: 16, n: "Ethan", s: "M", m: 8, f: 9, a: ["D", "K"] },
          { key: 17, n: "Eve", s: "F", vir: 16, a: ["B", "F", "L"] },
          { key: 18, n: "Emily", s: "F", m: 8, f: 9 },
          { key: 19, n: "Fred", s: "M", m: 17, f: 16, a: ["B"] },
          { key: 20, n: "Faith", s: "F", m: 17, f: 16, a: ["L"] },
          { key: 21, n: "Felicia", s: "F", m: 12, f: 13, a: ["H"] },
          { key: 22, n: "Frank", s: "M", m: 12, f: 13, a: ["B", "H"] },*/


          // Cedric's Lineage

          // Ann Powell
          { key: 74462881938, n: "Jenkin Powell", b: "1769-1846", s: "M", ptr:17491615470, f: 73738615656, m: 44432661351 },
          { key: 17491615470, n: "Margary Maddock", b: "1776-1860", s: "F", f: 94851590450, m: 22572735918 },
          { key: 73738615656, n: "Jenkin Powell", b: "1734-1785", s: "M", ptr:44432661351 },
          { key: 44432661351, n: "Gwenllian Griffith", b: "1736-1784", s: "F", f: 86893019246, m: 57047643192 },
          { key: 86893019246, n: "Griffith William", b: "1692-1772", s: "M", ptr:57047643192 },
          { key: 57047643192, n: "Catherine Griffiths", b: "1702-1770", s: "F" },
          { key: 94851590450, n: "Madock Evan", b: "1719-1813", s: "M", ptr:22572735918, f: 65290727931, m: 76244086144 },
          { key: 22572735918, n: "Gwenllian Hopkin", b: "1737-1801", s: "F" },
          { key: 65290727931, n: "Evan Maddock", b: "1680-?", s: "M", ptr:76244086144 },
          { key: 76244086144, n: "Magdalen Evan", s: "F" },

          // Thomas Collier
          { key: 60218274095, n: "John Collier", b: "1731-1794", s: "M", ptr: 47980578034 },
          { key: 47980578034, n: "Mary Jones", b: "1734-1776", s: "F" },
          { key: 93156484418, n: "William Collier", b: "1769-1821", s: "M", ptr: 98240256567, f: 60218274095, m: 47980578034 },
          { key: 98240256567, n: "Ann Locke", b: "1768-1849", s: "F" },

          { key: 59321657664, n: "Thomas Collier", b: "1809-1894", s: "M", ptr: 51729435930, f: 93156484418, m: 98240256567 },
          { key: 51729435930, n: "Anne Powell", b: "1810-1898", s: "F", f: 74462881938, m: 17491615470 },

          { key: 34930009383, n: "Thomas Francis", b: "1804-1880", s: "M", ptr: 51304311336 },
          { key: 51304311336, n: "Ann Davis", b: "1806-?", s: "F" },

          { key: 57135357140586, n: "William Francis", b: "1835-1915", s: "M", ptr: 57140655714128979, m: 51304311336, f: 34930009383  },
          { key: 57140655714128979, n: "Ann Collier", b: "1841-1924", s: "F", m: 51729435930, f: 59321657664  },

          { key: 5711297954937, n: "Egbert Collier Francis", b: "1875-1941", s: "M", ptr: 5711298612910, m: 57140655714128979, f: 57135357140586 },
          { key: 5711298612910, n: "Alice Huege De Serville", b: "1882-1960", s: "F" },

          // Mildred's Lineage  
         { key: 5711282727165, n: "Peter Batley Seaman", loc: "Felsom, Suffolk, England", b:"1807-1885", s: "M", ptr: 5711282727164 },
          { key: 5711282727164, n: "Hannah Cudbard", loc: "Old Accrington, Lancashire, England", b:"1807-1874", s: "F" },

         { key: 5711282727166, n: "Elisha B Seaman", b:"1853-1915", s: "M", ptr: 5710284335019, f: 5711282727165, m: 5711282727164 },
          { key: 5710284335019, n: "Sarah Hannah Hartley", b:"1854-1920", s: "F" },

         // Martha Buddles parents
         { key: 57126187, n: "John Buddle", b:"???-???", s: "M", ptr: 57126186  },
         { key: 57126186, n: "Mary Dixon", b:"???-???", s: "F" },

         // Joseph Paddicks parents
         { key: 57118315725711994, n: "Henry Dunwill Paddick", b: "1811-1872", loc: "Maidstone, Kent", s: "M", ptr: 57119151525711935 },
         { key: 57119151525711935, n: "Maria Craddick", s: "F", b:"1817-1886", loc: "Alverstoke, Hampshire" },

         { key: 571260813, n: "Joseph Dunwill Paddick", b:"1856-1895", loc:" Clarendon, Morphett Vale, SA", s: "M", ptr: 57126188, m: 57119151525711935, f: 57118315725711994  },
          { key: 57126188, n: "Martha Buddle", b:"1856-1938", s: "F", m: 57126186, f: 57126187 },

          // tree: http://www.tolliss.com/webtrees/individual.php?pid=I26419&ged=Steigenberger#
          // walter's siblings http://archiver.rootsweb.ancestry.com/th/read/GENANZ/2000-03/0953533621

         { key: 5712507418, n: "Walter Batley Seaman", b:"1891-1915", s: "M", ptr: 57125925087, m: 5711282727166, f: 5710284335019 },
          { key: 57125925087, n: "Florence Ella Paddick", b:"1892-1980", s: "F", m: 571260813, f: 57126188 },

          // Claude
          { key: 80907676319, n: "Egbert Rudolph Francis", b:"1906-1973", s:"M", m: 5711297954937, f: 5711298612910 },
          { key: 101, n: "Claude Cedric Francis", b:"1907-1982", s: "M", ptr: 102, m: 5711297954937, f: 5711298612910  },
          { key: 88084705573, n: "Lionel Ralph Francis", b:"1910-1910", s:"M", m: 5711297954937, f: 5711298612910 },
          { key: 42552130803, n: "Leon Clive Francis", b:"1914-1979", s:"M", m: 5711297954937, f: 5711298612910 },
          { key: 96132728061, n: "Valmai Alice Francis", b:"1916-1941", s:"F", m: 5711297954937, f: 5711298612910 },

          // Mildred's family
          { key: 102, n: "Mildred Lenore Martha Seaman", b:"1914-2008", s: "F", m: 5712507418, f: 57125925087 },
          { key: -102, n: "Patricia Gon", s: "F", m: 5712507418, f: 57125925087 },
          { key: -103, n: "Ronda Catherine Solomon", b:"1920-???", s: "F", m: 5712507418, f: 57125925087 },

          {key:103, n:"Bruce Francis", s: "M", m: 102, f: 101 },
          {key:104, n:"Heather Francis", s: "F", m: 102, f: 101 },
          {key:105, n:"Barry Francis", s: "M", m: 102, f: 101 },
          {key:106, n:"Dawn Francis", s: "F", m: 102, f: 101 },
          {key:107, n:"Ralph Francis", s: "M", m: 102, f: 101 },
          {key:108, n:"Cheryl Francis", s: "F", m: 102, f: 101 },
          {key:109, n:"Daryl Francis", s: "M", m: 102, f: 101 },
          {key:110, n:"Rex Francis", s: "M", m: 102, f: 101 },
          {key:111, n:"Margot Francis", s: "F", m: 102, f: 101 },
          {key:112, n:"Wayne Francis", s: "M", m: 102, f: 101 }


        ];

    function init() {
      if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
      var $ = go.GraphObject.make;
      myDiagram =
        $(go.Diagram, "myDiagram",
          {
      initialDocumentSpot: go.Spot.TopCenter,
      initialViewportSpot: go.Spot.TopCenter,
            initialContentAlignment: go.Spot.Center,
            // when a node is selected, draw a big yellow circle behind it
            nodeSelectionAdornmentTemplate:
              $(go.Adornment, "Auto",
                { layerName: "Grid" },  // the predefined layer that is behind everything else
                $(go.Shape, "Circle", { fill: "#f6ffc1", stroke: "#a4b350",strokeWidth: opts.stroke }),
                $(go.Placeholder)
              ),
            layout:  // use a custom layout, defined below
              $(GenogramLayout, { direction: opts.angle, layerSpacing: 30, columnSpacing: 10 })
          });

      // determine the color for each attribute shape
      function attrFill(a) {
        switch (a) {
          case "A": return "green";
          case "B": return "orange";
          case "C": return "red";
          case "D": return "cyan";
          case "E": return "gold";
          case "F": return "pink";
          case "G": return "blue";
          case "H": return "brown";
          case "I": return "purple";
          case "J": return "chartreuse";
          case "K": return "lightgray";
          case "L": return "magenta";
          case "S": return "red";
          case "X": return "white";
          default: return "transparent";
        }
      }

      var rad=20;

      // determine the geometry for each attribute shape in a male;
      // except for the slash these are all squares at each of the four corners of the overall square
      var tlsq = go.Geometry.parse("F M1 1 l19 0 0 19 -19 0z");
      var trsq = go.Geometry.parse("F M20 1 l19 0 0 19 -19 0z");
      var brsq = go.Geometry.parse("F M20 20 l19 0 0 19 -19 0z");
      var blsq = go.Geometry.parse("F M1 20 l19 0 0 19 -19 0z");
      var fulls = go.Geometry.parse("F M1 1 l38 0 0 38 -38 0z");
      var slash = go.Geometry.parse("F M38 0 L40 0 40 2 2 40 0 40 0 38z");
      function maleGeometry(a) {
        switch (a) {
          case "A": return tlsq;
          case "B": return tlsq;
          case "C": return tlsq;
          case "D": return trsq;
          case "E": return trsq;
          case "F": return trsq;
          case "G": return brsq;
          case "H": return brsq;
          case "I": return brsq;
          case "J": return blsq;
          case "K": return blsq;
          case "L": return blsq;
          case "S": return slash;
          case "X": return fulls;
          default: return tlsq;
        }
      }

      // determine the geometry for each attribute shape in a female;
      // except for the slash these are all pie shapes at each of the four quadrants of the overall circle

      var tlarc = go.Geometry.parse("F M20 20 B 180 90 20 20 19 19 z");
      var trarc = go.Geometry.parse("F M20 20 B 270 90 20 20 19 19 z");
      var brarc = go.Geometry.parse("F M20 20 B 0 90 20 20 19 19 z");
      var blarc = go.Geometry.parse("F M20 20 B 90 90 20 20 19 19 z");
      var full = go.Geometry.parse("F M20 20 B 360 360 20 20 19 19 z");
      function femaleGeometry(a) {
        switch (a) {
          case "A": return tlarc;
          case "B": return tlarc;
          case "C": return tlarc;
          case "D": return trarc;
          case "E": return trarc;
          case "F": return trarc;
          case "G": return brarc;
          case "H": return brarc;
          case "I": return brarc;
          case "J": return blarc;
          case "K": return blarc;
          case "L": return blarc;
          case "S": return slash;
          case "X": return full;
          default: return tlarc;
        }
      }


      // two different node templates, one for each sex,
      // named by the category value in the node data object
      myDiagram.nodeTemplateMap.add("M",  // male
        $(go.Node, "Vertical",
          { locationSpot: go.Spot.Center, locationObjectName: "ICON" },
          $(go.Panel,
            { name: "ICON" },
            $(go.Shape, "Square",
              { width: opts.radius, height: opts.radius, strokeWidth: opts.stroke, stroke:"#63b0d0", fill: "#63b0d0", portId: "" }),
            $(go.Panel,
              { // for each attribute show a Shape at a particular place in the overall square
                itemTemplate:
                  $(go.Panel,
                    $(go.Shape,
                      { stroke: null, strokeWidth: 0 },
                      new go.Binding("fill", "", attrFill),
                      new go.Binding("geometry", "", maleGeometry))
                  ),
                margin: 1
              },
              new go.Binding("itemArray", "a")
            )
          ),
          $(go.TextBlock,
            { textAlign: "center", maxSize: new go.Size(opts.textWidth, NaN), font: "bold 9pt sans-serif", margin: 2 },
            new go.Binding("text", "n")),
          $(go.TextBlock,
            { textAlign: "center", maxSize: new go.Size(opts.textWidth, NaN), stroke:"#999", font: "normal 8pt sans-serif", margin: 1 },
            new go.Binding("text", "b"))
        ));

      myDiagram.nodeTemplateMap.add("F",  // female
        $(go.Node, "Vertical",
          { locationSpot: go.Spot.Center, locationObjectName: "ICON" },
          $(go.Panel,
            { name: "ICON" },
            $(go.Shape, "Circle",
              { width: opts.radius, height: opts.radius, strokeWidth: opts.stroke, stroke: "#f54e5a", fill: "#f54e5a", portId: "" }),
            $(go.Panel,
              { // for each attribute show a Shape at a particular place in the overall circle
                itemTemplate:
                  $(go.Panel,
                    $(go.Shape,
                      { stroke: null, strokeWidth: 0 },
                      new go.Binding("fill", "", attrFill),
                      new go.Binding("geometry", "", femaleGeometry))
                  ),
                margin: 1
              },
              new go.Binding("itemArray", "a")
            )
          ),
          $(go.TextBlock,
            { textAlign: "center", maxSize: new go.Size(opts.textWidth, NaN), font: "bold 9pt sans-serif", margin: 2 },
            new go.Binding("text", "n")),
          $(go.TextBlock,
            { textAlign: "center", maxSize: new go.Size(opts.textWidth, NaN), stroke:"#999", font: "normal 8pt sans-serif", margin: 1 },
            new go.Binding("text", "b"))
        ));

      // the representation of each label node -- nothing shows on a Marriage Link
      myDiagram.nodeTemplateMap.add("LinkLabel",
        $(go.Node, { selectable: false, width: 1, height: 1, fromEndSegmentLength: 10 }));


      myDiagram.linkTemplate =  // for parent-child relationships
        $(go.Link,
          {
            routing: go.Link.Orthogonal, curviness: 10,
            layerName: "Background", selectable: false,
            fromSpot: go.Spot.Bottom, toSpot: go.Spot.Top
          },
          $(go.Shape, { strokeWidth: opts.stroke, stroke: "#bfbfbf" })
        );

      myDiagram.linkTemplateMap.add("Marriage",  // for marriage relationships
        $(go.Link, { selectable: false },
          $(go.Shape, { strokeWidth: opts.stroke, stroke: "#bfbfbf" })
      ));

      myDiagram.linkTemplateMap.add("Separation",  // for marriage relationships
        $(go.Link, { selectable: false },
          $(go.Shape, { strokeWidth: opts.stroke, stroke: "#bfbfbf", strokeDashArray: [5,2] })
      ));

      setupDiagram(myDiagram, genData,
        210 /* focus on this person */);
    }




    // create and initialize the Diagram.model given an array of node data representing people
    function setupDiagram(diagram, array, focusId) {
      diagram.model =
        go.GraphObject.make(go.GraphLinksModel,
          { // declare support for link label nodes
            linkLabelKeysProperty: "labelKeys",
            // this property determines which template is used
            nodeCategoryProperty: "s",
            // create all of the nodes for people
            nodeDataArray: array
          });
      setupMarriages(diagram);
      setupParents(diagram);

      var node = diagram.findNodeForKey(focusId);
      if (node !== null) {
        diagram.select(node);
        node.linksConnected.each(function(l) {
          if (!l.isLabeledLink) return;
          l.opacity = 0;
          var spouse = l.getOtherNode(node);
          spouse.opacity = 0;
          spouse.pickable = false;
        });
      }
    }

    function findMarriage(diagram, a, b) {
      var nodeA = diagram.findNodeForKey(a);
      var nodeB = diagram.findNodeForKey(b);
      if (nodeA !== null && nodeB !== null) {
        var it = nodeA.findLinksBetween(nodeB);  // in either direction
        while (it.next()) {
          var link = it.value;
          // Link.data.category === "Marriage" means it's a marriage relationship
          if (link.data !== null && link.data.category === "Marriage"){
            return link;
          }
          if (link.data !== null && link.data.category === "Separation"){
            return link;
          }
        }
      }
      return null;
    }

    // now process the node data to determine marriages
    function setupMarriages(diagram) {
      var model = diagram.model;
      var nodeDataArray = model.nodeDataArray;
      for (var i = 0; i < nodeDataArray.length; i++) {
        var data = nodeDataArray[i];
        var key = data.key;
        var ptrs = data.ptr;
        var Marriage = (data.a&&data.a.indexOf("X")!==-1)? "Separation" : "Marriage";
        if (ptrs !== undefined) {
          if (typeof ptrs === "number") ptrs = [ ptrs ];
          for (var j = 0; j < ptrs.length; j++) {
            var wife = ptrs[j];
            if (key === wife) {
              // or warn no reflexive marriages
              continue;
            }
            var link = findMarriage(diagram, key, wife);
            if (link === null) {
              // add a label node for the marriage link
              var mlab = { s: "LinkLabel" };
              model.addNodeData(mlab);
              // add the marriage link itself, also referring to the label node

              var mdata = { from: key, to: wife, labelKeys: [mlab.key], category: Marriage};
              model.addLinkData(mdata);
            }
          }
        }
        var virs = data.vir;
        if (virs !== undefined) {
          if (typeof virs === "number") virs = [ virs ];
          for (var j = 0; j < virs.length; j++) {
            var husband = virs[j];
            if (key === husband) {
              // or warn no reflexive marriages
              continue;
            }
            var link = findMarriage(diagram, key, husband);
            if (link === null) {
              // add a label node for the marriage link
              var mlab = { s: "LinkLabel" };
              model.addNodeData(mlab);
              // add the marriage link itself, also referring to the label node
              var mdata = { from: key, to: husband, labelKeys: [mlab.key], category: Marriage};
              model.addLinkData(mdata);
            }
          }
        }
      }
    }

    // process parent-child relationships once all marriages are known
    function setupParents(diagram) {
      var model = diagram.model;
      var nodeDataArray = model.nodeDataArray;
      for (var i = 0; i < nodeDataArray.length; i++) {
        var data = nodeDataArray[i];
        var key = data.key;
        var mother = data.m;
        var father = data.f;
        if (mother !== undefined && father !== undefined) {
          var link = findMarriage(diagram, mother, father);
          if (link === null) {
            // or warn no known mother or no known father or no known marriage between them
            if (window.console) window.console.log("unknown marriage: " + mother + " & " + father);
            continue;
          }
          var mdata = link.data;
          var mlabkey = mdata.labelKeys[0];
          var cdata = { from: mlabkey, to: key };
          myDiagram.model.addLinkData(cdata);
        }
      }
    }


    // A custom layout that shows the two families related to a person's parents
    function GenogramLayout() {
      go.LayeredDigraphLayout.call(this);
    }
    go.Diagram.inherit(GenogramLayout, go.LayeredDigraphLayout);

    GenogramLayout.prototype.makeNetwork = function(coll) {
      // generate LayoutEdges for each parent-child Link
      var net = this.createNetwork();
      if (coll instanceof go.Diagram) {
        this.add(net, coll.nodes, true);
        this.add(net, coll.links, true);
      } else if (coll instanceof go.Group) {
        this.add(net, coll.memberParts, false);
      } else if (coll.iterator) {
        this.add(net, coll.iterator, false);
      }
      return net;
    };

    // internal method for creating LayeredDigraphNetwork where husband/wife pairs are represented
    // by a single LayeredDigraphVertex corresponding to the label Node on the marriage Link
    GenogramLayout.prototype.add = function(net, coll, nonmemberonly) {
      // consider all Nodes in the given collection
      var it = coll.iterator;
      while (it.next()) {
        var node = it.value;
        if (!(node instanceof go.Node)) continue;
        if (!node.isLayoutPositioned || !node.isVisible()) continue;
        if (nonmemberonly && node.containingGroup !== null) continue;
        // if it's an unmarried Node, or if it's a Link Label Node, create a LayoutVertex for it
        if (node.isLinkLabel) {
          // get marriage Link
          var link = node.labeledLink;
          var spouseA = link.fromNode;
          var spouseB = link.toNode;
          // create vertex representing both husband and wife
          var vertex = net.addNode(node);
          // now define the vertex size to be big enough to hold both spouses
          vertex.width = spouseA.actualBounds.width + 30 + spouseB.actualBounds.width;
          vertex.height = Math.max(spouseA.actualBounds.height, spouseB.actualBounds.height);
          vertex.focus = new go.Point(spouseA.actualBounds.width + 30/2, vertex.height/2);
        } else {
          // don't add a vertex for any married person!
          // instead, code above adds label node for marriage link
          // assume a marriage Link has a label Node
          if (!node.linksConnected.any(function(l) { return l.isLabeledLink; })) {
            var vertex = net.addNode(node);
          }
        }
      }
      // now do all Links
      it.reset();
      while (it.next()) {
        var link = it.value;
        if (!(link instanceof go.Link)) continue;
        if (!link.isLayoutPositioned || !link.isVisible()) continue;
        if (nonmemberonly && link.containingGroup !== null) continue;
        // if it's a parent-child link, add a LayoutEdge for it
        if (!link.isLabeledLink) {
          var parent = net.findVertex(link.fromNode);  // should be a label node
          var child = net.findVertex(link.toNode);
          if (child !== null) {  // an unmarried child
            net.linkVertexes(parent, child, link);
          } else {  // a married child
            link.toNode.linksConnected.each(function(l) {
              if (!l.isLabeledLink) return;  // if it has no label node, it's a parent-child link
              // found the Marriage Link, now get its label Node
              var mlab = l.labelNodes.first();
              // parent-child link should connect with the label node,
              // so the LayoutEdge should connect with the LayoutVertex representing the label node
              var mlabvert = net.findVertex(mlab);
              if (mlabvert !== null) {
                net.linkVertexes(parent, mlabvert, link);
              }
            });
          }
        }
      }
    };

    GenogramLayout.prototype.assignLayers = function() {
      go.LayeredDigraphLayout.prototype.assignLayers.call(this);
      var horiz = this.direction == 0.0 || this.direction == 180.0;
      // for every vertex, record the maximum vertex width or height for the vertex's layer
      var maxsizes = [];
      this.network.vertexes.each(function(v) {
        var lay = v.layer;
        var max = maxsizes[lay];
        if (max === undefined) max = 0;
        var sz = (horiz ? v.width : v.height);
        if (sz > max) maxsizes[lay] = sz;
      });
      // now make sure every vertex has the maximum width or height according to which layer it is in,
      // and aligned on the left (if horizontal) or the top (if vertical)
      this.network.vertexes.each(function(v) {
        var lay = v.layer;
        var max = maxsizes[lay];
        if (horiz) {
          v.focus = new go.Point(0, v.height / 2);
          v.width = max;
        } else {
          v.focus = new go.Point(v.width / 2, 0);
          v.height = max;
        }
      });
      // from now on, the LayeredDigraphLayout will think that the Node is bigger than it really is
      // (other than the ones that are the widest or tallest in their respective layer).
    };

    GenogramLayout.prototype.commitNodes = function() {
      go.LayeredDigraphLayout.prototype.commitNodes.call(this);
      // position regular nodes
      this.network.vertexes.each(function(v) {
        if (v.node !== null && !v.node.isLinkLabel) {
          v.node.position = new go.Point(v.x, v.y);
        }
      });
      // position the spouses of each marriage vertex
      var layout = this;
      this.network.vertexes.each(function(v) {
        if (v.node === null) return;
        if (!v.node.isLinkLabel) return;
        var labnode = v.node;
        var lablink = labnode.labeledLink;
        // In case the spouses are not actually moved, we need to have the marriage link
        // position the label node, because LayoutVertex.commit() was called above on these vertexes.
        // Alternatively we could override LayoutVetex.commit to be a no-op for label node vertexes.
        lablink.invalidateRoute();
        var spouseA = lablink.fromNode;
        var spouseB = lablink.toNode;
        // see if the parents are on the desired sides, to avoid a link crossing
        var aParentsNode = layout.findParentsMarriageLabelNode(spouseA);
        var bParentsNode = layout.findParentsMarriageLabelNode(spouseB);
        if ( (aParentsNode !== null && bParentsNode !== null && aParentsNode.position.x > bParentsNode.position.x) || (lablink.Ml.category=="Separation")) {
          // swap the spouses
          spouseA = lablink.toNode;
          spouseB = lablink.fromNode;
        }
        //var spouseOffset = (lablink.Ml.category=="Separation") ? (spouseA.actualBounds.width - 330) : spouseA.actualBounds.width + 30;

        spouseA.position = new go.Point(v.x, v.y);
        spouseB.position = new go.Point(v.x + spouseA.actualBounds.width + 30, v.y);
        if (spouseA.opacity === 0) {
          var pos = new go.Point(v.centerX - spouseA.actualBounds.width/2, v.y);
          spouseA.position = pos;
          spouseB.position = pos;
        } else if (spouseB.opacity === 0) {
          var pos = new go.Point(v.centerX - spouseB.actualBounds.width/2, v.y);
          spouseA.position = pos;
          spouseB.position = pos;
        }
      });
    };

    GenogramLayout.prototype.findParentsMarriageLabelNode = function(node) {
      var it = node.findNodesInto();
      while (it.next()) {
        var n = it.value;
        if (n.isLinkLabel) return n;
      }
      return null;
    };

    window.onhashchange = function(){
      init();
    };

    // end GenogramLayout class