"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Froala CSS
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/plugins/colors.min.css";
import "froala-editor/css/plugins/char_counter.min.css";
import "froala-editor/css/plugins/line_breaker.min.css";
import "froala-editor/css/plugins/table.min.css";
import "froala-editor/css/plugins/emoticons.min.css";
import "froala-editor/css/plugins/image_manager.min.css";

const FroalaEditorComponent = dynamic(() => import("react-froala-wysiwyg"), {
  ssr: false,
  loading: () => <div>Loading editor...</div>,
});

export default function FroalaEditor({ content, onChange }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Load all required plugins
    const loadPlugins = async () => {
      try {
        await import("froala-editor/js/froala_editor.min.js");
        await import("froala-editor/js/plugins/image.min.js");
        await import("froala-editor/js/plugins/font_size.min.js");
        await import("froala-editor/js/plugins/colors.min.js");
        await import("froala-editor/js/plugins/lists.min.js");
        await import("froala-editor/js/plugins/paragraph_format.min.js");
        await import("froala-editor/js/plugins/fullscreen.min.js");
        await import("froala-editor/js/plugins/line_breaker.min.js");
        // await import("froala-editor/js/plugins/quick_insert.min.js");
        await import("froala-editor/js/plugins/link.min.js");
        await import("froala-editor/js/plugins/table.min.js");
        await import("froala-editor/js/plugins/emoticons.min.js");
        await import("froala-editor/js/plugins/special_characters.min.js");
        await import("froala-editor/js/plugins/align.min.js");
        await import("froala-editor/js/plugins/line_height.min.js");
        await import("froala-editor/js/plugins/image_manager.min.js");

        setIsMounted(true);
      } catch (error) {
        console.error("Error loading Froala plugins:", error);
      }
    };

    loadPlugins();
  }, []);

  if (!isMounted) {
    return <div>Loading editor...</div>;
  }

  return (
    <div className="froala-container">
      <FroalaEditorComponent
        tag="div"
        model={content || ""}
        onModelChange={onChange}
        config={{
          placeholderText: "Start typing...",

          // Image upload configuration (optional)
          imageUploadURL: "/api/images",
          imageUploadMethod: "POST",
          imageAllowedTypes: ["jpeg", "jpg", "png", "gif"],
          imageMaxSize: 5 * 1024 * 1024,
          imageDefaultWidth: 300,

          // Image Manager configuration
          imageManagerLoadURL: "/api/images",
          imageManagerLoadMethod: "GET",
          imageManagerDeleteURL: "/api/images",
          imageManagerDeleteMethod: "DELETE",

          // Toolbar configuration
          toolbarButtons: [
            // Text formatting
            [
              "bold",
              "italic",
              "underline",
              "strikeThrough",
              "subscript",
              "superscript",
              "fontSize",
              "textColor",
              "backgroundColor",
            ],
            '|',

            // Paragraph / lists
            [
              "formatOL",
              "formatUL",
              "outdent",
              "indent",
              "paragraphFormat",
              "alignLeft",
              "alignCenter",
              "alignRight",
              "alignJustify",
              "lineHeight",
            ],

            '|',

            // Rich content
            [
              "insertLink",
              "insertImage",
              "insertTable",
              "emoticons",
              "specialCharacters",
              "insertHR",
            ],
            '|',

            // Misc
            ["undo", "redo", "fullscreen"],
          ],

          // Table configuration
          tableInsertMaxSize: 10,

          // Link configuration
          linkAlwaysBlank: true,
          linkAutoPrefix: "https://",

          // Character counter
          charCounterCount: false,

          // Height
          height: 400,
          heightMin: 200,
          heightMax: 800,

          // Events
          events: {
            "froalaEditor.initialized": function () {
              console.log("Froala Editor initialized");
            },
            "froalaEditor.contentChanged": function () {
              // Additional content change handling if needed
            },
          },
        }}
      />
    </div>
  );
}
