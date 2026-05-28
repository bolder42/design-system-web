# B42 — Brand Blurb & Design System Notes

> Documento de referência para handoff a AI builders (Lovable, v0, Cursor, etc.) na construção da plataforma centralizada B42.

---

## 1. Blurb

### Versão curta (hero / bio / boilerplate)

**B42 é o hub que nasce do encontro entre a Bolder e a 42 Rio — onde consultoria estratégica, tecnologia de ponta e a maior rede global de formação em engenharia de software convivem sob o mesmo teto.**

Construímos produtos digitais com IA, formamos as próximas lideranças de tech e atravessamos a transformação ao lado dos nossos clientes na interseção de três pilares: técnico, organizacional e humano. Viemos do Rio para trabalhar aqui, agora — sem ruído.

### Versão média (about / apresentação institucional)

**B42 é um hub de inovação formado pela Bolder, consultoria de estratégia e tecnologia, e pela 42 Rio, maior campus da rede global 42 na América Latina.**

Há quase uma década acompanhamos cada onda do ecossistema brasileiro — de open innovation em escala a produtos nativos de IA — convertendo visão estratégica em arquitetura que funciona. Operamos na interseção de três pilares: **técnico** (tecnologias emergentes aplicadas a problemas reais), **organizacional** (o que precisa mudar estruturalmente pra destravar resultado) e **humano** (as pessoas que executam, colaboram e lideram).

O que a gente constrói: produtos digitais com IA, estratégias de negócio ancoradas em tech e formação de lideranças de ponta. Transformações reais não se contratam — se constroem juntos.

---

## 2. Design System Notes

### Posicionamento estético

Interface *dark-first* com vibe cockpit/terminal — tipografia monoespaçada, marcadores em sintaxe de código (`//`, `_`, `[ ]`), acentos em roxo elétrico e um gradiente quente assinatura. Seriedade institucional com signatura de tech quente. Sem glossy, sem skeumorfismo, sem "sci-fi genérico".

---

### Paleta de cores

#### Núcleo (sempre presente)

| Token | Hex | Uso |
|---|---|---|
| `--bg-primary` | `#000000` | Fundo principal, preto puro |
| `--bg-elevated` | `#070707` | Superfícies elevadas sutis sobre o preto |
| `--fg-primary` | `#FFFFFF` | Texto e elementos principais |
| `--fg-warm` | `#F5ECD8` | Cream/off-white para cards e callouts |

#### Brand (acentos)

| Token | Hex | Uso |
|---|---|---|
| `--accent-purple-deep` | `#3D1D4D` | Plum escuro, fundos secundários e tints |
| `--accent-purple` | `#893B96` | Roxo principal da marca, highlights primários |
| `--accent-lavender` | `#C9A5E8` | Roxo claro para marca-texto e badges de destaque |
| `--accent-magenta` | `#D54071` | Rosa de ênfase pontual (usar com parcimônia) |

#### Gradiente assinatura

Usar em bordas, divisores e heros. É a identidade visual mais reconhecível do material da marca.

```css
background: linear-gradient(90deg, #E8A583 0%, #A99DBE 50%, #5E7A99 100%);
```

Coral → lavanda → azul-aço.

#### Sistema (neutros)

`#212121` · `#595959` · `#78909C` · `#EEEEEE`

Tokens de `success`/`warning`/`error` mantêm-se neutros até definição por contexto de produto.

---

### Tipografia

- **Mono (hero da marca):** `Fira Mono` — títulos, headers, labels, números, navegação, qualquer elemento estrutural. É a assinatura tipográfica do Bolder/B42.
- **Sans (apoio):** `Helvetica Neue` (fallback: `Inter`, `system-ui`) — corpo de texto longo em contextos onde mono seria pesado.
- **Hierarquia:**
  - Títulos em maiúsculas com tracking leve (+1 a +2%)
  - Body em case natural
  - Números sempre em mono tabular

---

### Motifs visuais recorrentes

- **Section headers em sintaxe de comentário:** `// DIFERENCIAIS`, `// NOSSA ABORDAGEM` — barra dupla + espaço + caps.
- **Marca d'água underscore:** assinatura de rodapé é `B_` (prompt de terminal). Usar `_` como elemento decorativo (cursor piscante, divisores).
- **Highlight blocks:** blocos roxo-lavanda sólidos por trás de palavras-chave (marca-texto). Padrão forte, usar consistentemente.
- **Divisores:** linhas finas brancas (`1px solid #FFFFFF` ou faixa horizontal), nunca pesadas.
- **Colchetes e barras:** `[ ]`, `// `, `*` como decorações inline em UI elements (tabs, breadcrumbs, labels).

---

### Logo & assets

- **Logo principal:** `B42` em branco sobre preto.
- **Inversão:** evitar logo sobre fundos claros sem adaptar contraste.
- **Clear space mínimo:** equivalente à altura do número "4" ao redor de toda a marca.
- **Não fazer:** distorcer, aplicar gradiente na marca, rotacionar.

---

### Diretrizes gerais

- **Dark mode é o default**, não uma opção. Light mode só se explicitamente pedido.
- **Densidade:** espaçamentos generosos — a marca respira, não se aperta.
- **Geometria:**
  - Cards: `border-radius: 8px`
  - Badges/tags: `24px` ou pill completo
  - Nada totalmente quadrado, nada excessivamente orgânico.
- **Iconografia:** line icons de peso único (1.5px stroke), estilo Lucide ou Phosphor regular.

---

## Observações

Os hexes de roxo e do gradiente foram aproximados a partir do material institucional em PDF. Recomenda-se validar contra o brand book oficial da Bolder antes de fechar tokens definitivos.
