import{r as e,o as t,c as o,a as l,F as a,b as s,d as n}from"./app.0b7392c1.js";const i={},d=s('<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><p>Configuration of <code>asdf</code> encompasses both the sharable <code>.tool-versions</code> files as well as user specific customisations with <code>.asdfrc</code> and Environment Variables.</p><h2 id="tool-versions" tabindex="-1"><a class="header-anchor" href="#tool-versions" aria-hidden="true">#</a> <code>.tool-versions</code></h2><p>Whenever <code>.tool-versions</code> file is present in a directory, the tool versions it declares will be used in that directory and any subdirectories.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Global defaults can be set in the file <code>$HOME/.tool-versions</code></p></div><p>This is what a <code>.tool-versions</code> file looks like:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ruby 2.5.3\nnodejs 10.15.0\n</span></span></code></pre></div><p>You can also include comments:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ruby 2.5.3 # This is a comment\n# This is another comment\nnodejs 10.15.0\n</span></span></code></pre></div><p>The versions can be in the following format:</p><ul><li><code>10.15.0</code> - an actual version. Plugins that support downloading binaries, will download binaries.</li><li><code>ref:v1.0.2-a</code> or <code>ref:39cb398vb39</code> - tag/commit/branch to download from github and compile</li><li><code>path:/src/elixir</code> - a path to custom compiled version of a tool to use. For use by language developers and such.</li><li><code>system</code> - this keyword causes asdf to passthrough to the version of the tool on the system that is not managed by asdf.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Multiple versions can be set by separating them with a space. For example, to use Python <code>3.7.2</code>, fallback to Python <code>2.7.15</code> and finally to the <code>system</code> Python, the following line can be added to <code>.tool-versions</code>.</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">python 3.7.2 2.7.15 system\n</span></span></code></pre></div></div><p>To install all the tools defined in a <code>.tool-versions</code> file run <code>asdf install</code> with no other arguments in the directory containing the <code>.tool-versions</code> file.</p><p>To install a single tool defined in a <code>.tool-versions</code> file run <code>asdf install &lt;name&gt;</code> in the directory containing the <code>.tool-versions</code> file. The tool will be installed at the version specified in the <code>.tool-versions</code> file.</p><p>Edit the file directly or use <code>asdf local</code> (or <code>asdf global</code>) which updates it.</p><h2 id="home-asdfrc" tabindex="-1"><a class="header-anchor" href="#home-asdfrc" aria-hidden="true">#</a> <code>$HOME/.asdfrc</code></h2><p>Add an <code>.asdfrc</code> file to your home directory and asdf will use the settings specified in the file. The file below shows the required format with the default values to demonstrate:</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">legacy_version_file = no\nuse_release_candidates = no\nalways_keep_download = no\nplugin_repository_last_check_duration = 60\n</span></span></code></pre></div><h3 id="legacy-version-file" tabindex="-1"><a class="header-anchor" href="#legacy-version-file" aria-hidden="true">#</a> <code>legacy_version_file</code></h3><p>Plugins <strong>with support</strong> can read the versions files used by other version managers, for example, <code>.ruby-version</code> in the case of Ruby&#39;s <code>rbenv</code>.</p>',20),r=l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"left"}},"Options"),l("th",{style:{"text-align":"left"}},"Description")])],-1),c={style:{"text-align":"left"}},u=l("code",null,"no",-1),h=n(),f=l("td",{style:{"text-align":"left"}},[n("Use "),l("code",null,".tool-versions"),n(" to read versions")],-1),p=l("tr",null,[l("td",{style:{"text-align":"left"}},[l("code",null,"yes")]),l("td",{style:{"text-align":"left"}},[n("Use plugin fallback to legacy version files ("),l("code",null,".ruby-version"),n(") if available")])],-1),y=l("h3",{id:"use-release-candidates",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#use-release-candidates","aria-hidden":"true"},"#"),n(),l("code",null,"use_release_candidates")],-1),g=l("p",null,[n("Configure the "),l("code",null,"asdf update"),n(" command to upgrade to the latest Release Candidate instead of the latest Semantic Version.")],-1),v=l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"left"}},"Options"),l("th",{style:{"text-align":"left"}},"Description")])],-1),b={style:{"text-align":"left"}},m=l("code",null,"no",-1),x=n(),w=l("td",{style:{"text-align":"left"}},"Semantic Version is used",-1),_=l("tr",null,[l("td",{style:{"text-align":"left"}},[l("code",null,"yes")]),l("td",{style:{"text-align":"left"}},"Release Candidate is used")],-1),k=l("h3",{id:"always-keep-download",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#always-keep-download","aria-hidden":"true"},"#"),n(),l("code",null,"always_keep_download")],-1),F=l("p",null,[n("Configure the "),l("code",null,"asdf install"),n(" command to keep or delete the source code or binary it downloads.")],-1),D=l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"left"}},"Options"),l("th",{style:{"text-align":"left"}},"Description")])],-1),T={style:{"text-align":"left"}},C=l("code",null,"no",-1),A=n(),E=l("td",{style:{"text-align":"left"}},"Delete source code or binary after successful install",-1),S=l("tr",null,[l("td",{style:{"text-align":"left"}},[l("code",null,"yes")]),l("td",{style:{"text-align":"left"}},"Keep source code or binary after install")],-1),I=l("h3",{id:"plugin-repository-last-check-duration",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#plugin-repository-last-check-duration","aria-hidden":"true"},"#"),n(),l("code",null,"plugin_repository_last_check_duration")],-1),O=l("p",null,[n("Configure the duration since the last asdf plugin repository sync to the next. Commands "),l("code",null,"asdf plugin add <name>"),n(" or "),l("code",null,"asdf plugin list all"),n(" will trigger a check of the duration, if the duration has passed then a sync occurs.")],-1),P=l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"left"}},"Options"),l("th",{style:{"text-align":"left"}},"Description")])],-1),R={style:{"text-align":"left"}},L=n("integer in range "),M=l("code",null,"1",-1),U=n(" to "),N=l("code",null,"999999999",-1),V=n(),j=l("br",null,null,-1),H=n(),$=l("code",null,"60",-1),G=n(" is "),q=l("td",{style:{"text-align":"left"}},"Sync on trigger event if duration since last sync has passed",-1),B=l("tr",null,[l("td",{style:{"text-align":"left"}},[l("code",null,"0")]),l("td",{style:{"text-align":"left"}},"Sync on each trigger event")],-1),K=l("tr",null,[l("td",{style:{"text-align":"left"}},[l("code",null,"never")]),l("td",{style:{"text-align":"left"}},"Never sync")],-1),W=s('<h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2><ul><li><code>ASDF_CONFIG_FILE</code> - Defaults to <code>~/.asdfrc</code> as described above. Can be set to any location.</li><li><code>ASDF_DEFAULT_TOOL_VERSIONS_FILENAME</code> - The filename of the file storing the tool names and versions. Defaults to <code>.tool-versions</code>. Can be any valid filename. Typically you should not override the default value unless you know you want asdf to ignore <code>.tool-versions</code> files.</li><li><code>ASDF_DIR</code> - Defaults to <code>~/.asdf</code> - Location of the <code>asdf</code> scripts. If you install <code>asdf</code> to some other directory, set this to that directory. For example, if you are installing via the AUR, you should set this to <code>/opt/asdf-vm</code>.</li><li><code>ASDF_DATA_DIR</code> - Defaults to <code>~/.asdf</code> - Location where <code>asdf</code> install plugins, shims and installs. Can be set to any location before sourcing <code>asdf.sh</code> or <code>asdf.fish</code> mentioned in the section above. For Elvish, this can be set above <code>use asdf</code>.</li></ul><h2 id="internal-configuration" tabindex="-1"><a class="header-anchor" href="#internal-configuration" aria-hidden="true">#</a> Internal Configuration</h2><p>Users should not worry about this section as it describes configuration internal to <code>asdf</code> useful for Package Managers and integrators.</p><ul><li><code>$ASDF_DIR/asdf_updates_disabled</code>: Updates via the <code>asdf update</code> command are disabled when this file is present (content irrelevant). This is used by Package Managers like Pacman or Homebrew to ensure the correct update method is used for the particular installation.</li></ul>',5);i.render=function(s,n){const i=e("Badge");return t(),o(a,null,[d,l("table",null,[r,l("tbody",null,[l("tr",null,[l("td",c,[u,h,l(i,{type:"tip",text:"default",vertical:"middle"})]),f]),p])]),y,g,l("table",null,[v,l("tbody",null,[l("tr",null,[l("td",b,[m,x,l(i,{type:"tip",text:"default",vertical:"middle"})]),w]),_])]),k,F,l("table",null,[D,l("tbody",null,[l("tr",null,[l("td",T,[C,A,l(i,{type:"tip",text:"default",vertical:"middle"})]),E]),S])]),I,O,l("table",null,[P,l("tbody",null,[l("tr",null,[l("td",R,[L,M,U,N,V,j,H,$,G,l(i,{type:"tip",text:"default",vertical:"middle"})]),q]),B,K])]),W],64)};export default i;