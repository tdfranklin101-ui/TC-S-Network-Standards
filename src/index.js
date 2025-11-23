document.getElementById("root").innerHTML = `
  <div style="max-width: 1200px; margin: 0 auto;">
    <h1 style="color: #fbbf24; font-size: 3rem; margin-bottom: 1rem;">📜 Standards</h1>
    <p style="color: #9ca3af; font-size: 1.2rem; margin-bottom: 2rem;">TC-S Protocol specifications (JSON-LD)</p>
    
    <div id="standards-list" style="display: grid; gap: 1rem;">
      <p style="color: #6b7280;">Loading standards...</p>
    </div>
  </div>
`;

fetch('/api/standards')
  .then(r => r.json())
  .then(data => {
    const container = document.getElementById('standards-list');
    if (data.standards && data.standards.length > 0) {
      container.innerHTML = data.standards.map(std => `
        <div style="background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.2); border-radius: 8px; padding: 1.5rem;">
          <h3 style="margin-top: 0; color: #fbbf24; font-family: monospace;">${std.filename}</h3>
          <p style="color: #9ca3af; font-size: 0.875rem;">JSON-LD Schema • Foundation Licensed</p>
        </div>
      `).join('');
    }
  })
  .catch(e => console.error('Failed to load standards:', e));
