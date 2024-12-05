export default function ColorPalette() {
    const colors = [
      { name: "Primary", code: "#E7BAB7" },
      { name: "Secondary", code: "#100F18" },
      { name: "Accent", code: "#D6945B" },
      { name: "Highlight", code: "#BB49AF" },
      { name: "Info", code: "#1227B3" },
      { name: "Light", code: "#D2D2D3" },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-secondary">Color Palette</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {colors.map((color) => (
            <div
              key={color.code}
              className="flex flex-col items-center p-4 rounded shadow"
              style={{ backgroundColor: color.code }}
            >
              <div className="text-light text-lg font-semibold">{color.name}</div>
              <div className="mt-2 text-light text-sm">{color.code}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  