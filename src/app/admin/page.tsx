'use client';

import React, { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import SafeImage from '@/components/SafeImage';

type Blog = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
  published: boolean;
};

type Settings = {
  brandName: string;
  phone: string;
  email: string;
  address: string;
  homepage?: {
    hero: { title: string; subtitle: string; description: string; backgroundImage: string };
    bigStatement: { image1: string; image2: string };
    academyApproach: { image: string };
  };
};

const DEFAULT_CATEGORIES = ['Laser Therapy', 'Career Guidance', 'Industry Trends', 'Skin Science', 'Beauty Education'];
const EMPTY_BLOG = {
  title: '',
  category: '',
  excerpt: '',
  coverImage: '/uploads/blog-placeholder.svg',
  content: '',
  readTime: '5 min read',
  author: 'Novelle Academy',
  published: true,
};

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'blogs' | 'homepage' | 'settings'>('blogs');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [form, setForm] = useState(EMPTY_BLOG);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState('');
  const [settings, setSettings] = useState<Settings>({
    brandName: 'Al Novelle',
    phone: '050 234 8625',
    email: 'contact@novelle.ae',
    address: 'Al Zahiyah, Abu Dhabi, UAE',
  });

  const authHeaders = useMemo(() => ({ 'x-admin-passcode': passcode }), [passcode]);
  const categories = useMemo(() => {
    return Array.from(new Set([...DEFAULT_CATEGORIES, ...blogs.map((blog) => blog.category).filter(Boolean)])).sort();
  }, [blogs]);
  const publishedCount = blogs.filter((blog) => blog.published).length;

  useEffect(() => {
    const savedPasscode = localStorage.getItem('novelle_admin_passcode') || '';
    if (localStorage.getItem('novelle_admin_auth') === 'true' && savedPasscode) {
      window.setTimeout(() => {
        setPasscode(savedPasscode);
        setIsAuthenticated(true);
        void fetchAll(savedPasscode);
      }, 0);
    }
  }, []);

  async function fetchAll(pass = passcode) {
    const [blogsRes, settingsRes] = await Promise.all([fetch('/api/blogs'), fetch('/api/settings')]);
    if (blogsRes.ok) setBlogs(await blogsRes.json());
    if (settingsRes.ok) setSettings(await settingsRes.json());
    if (pass) localStorage.setItem('novelle_admin_passcode', pass);
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (!passcode.trim()) return;

    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'x-admin-passcode': passcode },
    });

    if (!res.ok) {
      setAuthError('Wrong passcode.');
      return;
    }

    setIsAuthenticated(true);
    localStorage.setItem('novelle_admin_auth', 'true');
    localStorage.setItem('novelle_admin_passcode', passcode);
    setAuthError('');
    await fetchAll(passcode);
  }

  function logout() {
    setIsAuthenticated(false);
    setPasscode('');
    localStorage.removeItem('novelle_admin_auth');
    localStorage.removeItem('novelle_admin_passcode');
  }

  function startNewBlog() {
    setEditingBlog(null);
    setForm(EMPTY_BLOG);
    setStatus('');
    setIsEditorOpen(true);
  }

  function editBlog(blog: Blog) {
    setEditingBlog(blog);
    setForm({
      title: blog.title,
      category: blog.category,
      excerpt: blog.excerpt,
      coverImage: blog.coverImage || '/uploads/blog-placeholder.svg',
      content: blog.content,
      readTime: blog.readTime,
      author: blog.author,
      published: blog.published,
    });
    setStatus('');
    setIsEditorOpen(true);
  }

  async function saveBlog(e: FormEvent) {
    e.preventDefault();
    setIsSaving(true);
    setStatus('');

    const payload = {
      ...form,
      category: form.category.trim() || 'General',
      coverImage: form.coverImage.trim() || '/uploads/blog-placeholder.svg',
    };
    const endpoint = editingBlog ? `/api/blogs/${editingBlog.id}` : '/api/blogs';
    const method = editingBlog ? 'PUT' : 'POST';
    const res = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json', ...authHeaders },
      body: JSON.stringify(payload),
    });

    setIsSaving(false);
    if (!res.ok) {
      const result = await res.json().catch(() => ({}));
      setStatus(result.error || 'Could not save article.');
      return;
    }

    setStatus(editingBlog ? 'Article updated.' : 'Article created.');
    setIsEditorOpen(false);
    setEditingBlog(null);
    setForm(EMPTY_BLOG);
    await fetchAll();
  }

  async function deleteBlog(id: string) {
    if (!confirm('Delete this article permanently?')) return;
    const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE', headers: authHeaders });
    if (res.ok) await fetchAll();
  }

  async function uploadImage(e: ChangeEvent<HTMLInputElement>, onUrl: (url: string) => void) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    setIsUploading(true);
    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      headers: authHeaders,
      body: formData,
    });
    setIsUploading(false);

    const result = await res.json().catch(() => ({}));
    if (!res.ok) {
      setStatus(result.error || 'Image upload failed.');
      return;
    }
    onUrl(result.url);
    setStatus('Image uploaded.');
  }

  async function saveSettings(e: FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeaders },
      body: JSON.stringify(settings),
    });
    setStatus(res.ok ? 'Website settings saved.' : 'Could not save settings.');
  }

  if (!isAuthenticated) {
    return (
      <main className="admin-shell admin-login-shell">
        <section className="admin-login-card">
          <span className="admin-kicker">Admin Portal</span>
          <h1>Novelle Admin Panel</h1>
          <form onSubmit={handleLogin} className="admin-form">
            <input type="password" placeholder="Admin passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)} />
            {authError && <p className="admin-error">{authError}</p>}
            <button type="submit" className="admin-primary">Access Dashboard</button>
          </form>
        </section>
      </main>
    );
  }

  const hero = settings.homepage?.hero || { title: '', subtitle: '', description: '', backgroundImage: '' };
  const bigStatement = settings.homepage?.bigStatement || { image1: '', image2: '' };
  const academyApproach = settings.homepage?.academyApproach || { image: '' };

  return (
    <main className="admin-shell">
      <header className="admin-topbar">
        <div>
          <span className="admin-kicker">Secured by RepixelX Studio</span>
          <h1>Novelle Admin Panel</h1>
          <p>Manage article content, custom categories, direct image uploads, and homepage media.</p>
        </div>
        <div className="admin-top-actions">
          <button type="button" onClick={startNewBlog} className="admin-primary">New Article</button>
          <button type="button" onClick={logout} className="admin-secondary">Logout</button>
        </div>
      </header>

      <section className="admin-stats">
        <div><strong>{blogs.length}</strong><span>Total articles</span></div>
        <div><strong>{publishedCount}</strong><span>Published</span></div>
        <div><strong>{blogs.length - publishedCount}</strong><span>Drafts</span></div>
      </section>

      <nav className="admin-tabs" aria-label="Admin sections">
        {(['blogs', 'homepage', 'settings'] as const).map((tab) => (
          <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'active' : ''}>
            {tab === 'blogs' ? 'Blog Manager' : tab === 'homepage' ? 'Homepage Images' : 'Website Settings'}
          </button>
        ))}
      </nav>

      {status && <div className="admin-status">{status}</div>}

      {activeTab === 'blogs' && (
        <section className="admin-card admin-wide-card">
          <div className="admin-card-head">
            <div>
              <span className="admin-kicker">Published & Drafts</span>
              <h2>Blog article library</h2>
            </div>
            <button type="button" onClick={startNewBlog} className="admin-primary">New Article</button>
          </div>
          <div className="admin-list">
            {blogs.map((blog) => (
              <article key={blog.id} className="admin-blog-row">
                <SafeImage src={blog.coverImage} alt="" />
                <div>
                  <span>{blog.category} · {blog.published ? 'Published' : 'Draft'}</span>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="admin-actions">
                    <a href={`/blog/${blog.slug}`} target="_blank">View</a>
                    <button type="button" onClick={() => editBlog(blog)}>Edit</button>
                    <button type="button" onClick={() => deleteBlog(blog.id)} className="danger">Delete</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'homepage' && (
        <form onSubmit={saveSettings} className="admin-card admin-form admin-wide-card">
          <div className="admin-card-head"><div><span className="admin-kicker">Media Control</span><h2>Homepage sections</h2></div></div>
          <label>Hero subtitle<input value={hero.subtitle} onChange={(e) => setSettings({ ...settings, homepage: { ...settings.homepage, hero: { ...hero, subtitle: e.target.value }, bigStatement, academyApproach } })} /></label>
          <label>Hero title<input value={hero.title} onChange={(e) => setSettings({ ...settings, homepage: { ...settings.homepage, hero: { ...hero, title: e.target.value }, bigStatement, academyApproach } })} /></label>
          <label>Hero description<textarea rows={3} value={hero.description} onChange={(e) => setSettings({ ...settings, homepage: { ...settings.homepage, hero: { ...hero, description: e.target.value }, bigStatement, academyApproach } })} /></label>
          <ImageSetting title="Hero background" value={hero.backgroundImage} onUpload={(url) => setSettings({ ...settings, homepage: { ...settings.homepage, hero: { ...hero, backgroundImage: url }, bigStatement, academyApproach } })} onChange={(url) => setSettings({ ...settings, homepage: { ...settings.homepage, hero: { ...hero, backgroundImage: url }, bigStatement, academyApproach } })} uploadImage={uploadImage} />
          <ImageSetting title="Big statement left image" value={bigStatement.image1} onUpload={(url) => setSettings({ ...settings, homepage: { ...settings.homepage, hero, bigStatement: { ...bigStatement, image1: url }, academyApproach } })} onChange={(url) => setSettings({ ...settings, homepage: { ...settings.homepage, hero, bigStatement: { ...bigStatement, image1: url }, academyApproach } })} uploadImage={uploadImage} />
          <ImageSetting title="Big statement overlay image" value={bigStatement.image2} onUpload={(url) => setSettings({ ...settings, homepage: { ...settings.homepage, hero, bigStatement: { ...bigStatement, image2: url }, academyApproach } })} onChange={(url) => setSettings({ ...settings, homepage: { ...settings.homepage, hero, bigStatement: { ...bigStatement, image2: url }, academyApproach } })} uploadImage={uploadImage} />
          <ImageSetting title="Academy approach image" value={academyApproach.image} onUpload={(url) => setSettings({ ...settings, homepage: { ...settings.homepage, hero, bigStatement, academyApproach: { image: url } } })} onChange={(url) => setSettings({ ...settings, homepage: { ...settings.homepage, hero, bigStatement, academyApproach: { image: url } } })} uploadImage={uploadImage} />
          <button type="submit" className="admin-primary">Save Homepage</button>
        </form>
      )}

      {activeTab === 'settings' && (
        <form onSubmit={saveSettings} className="admin-card admin-form admin-wide-card">
          <div className="admin-card-head"><div><span className="admin-kicker">Global Website</span><h2>Contact and brand settings</h2></div></div>
          <label>Brand name<input value={settings.brandName} onChange={(e) => setSettings({ ...settings, brandName: e.target.value })} /></label>
          <label>Phone<input value={settings.phone} onChange={(e) => setSettings({ ...settings, phone: e.target.value })} /></label>
          <label>Email<input type="email" value={settings.email} onChange={(e) => setSettings({ ...settings, email: e.target.value })} /></label>
          <label>Address<input value={settings.address} onChange={(e) => setSettings({ ...settings, address: e.target.value })} /></label>
          <button type="submit" className="admin-primary">Save Settings</button>
        </form>
      )}

      {isEditorOpen && (
        <div className="admin-modal" role="dialog" aria-modal="true">
          <form onSubmit={saveBlog} className="admin-card admin-form admin-editor-modal">
            <div className="admin-card-head">
              <div>
                <span className="admin-kicker">{editingBlog ? 'Editing Article' : 'New Article'}</span>
                <h2>{editingBlog ? editingBlog.title : 'Create blog post'}</h2>
              </div>
              <button type="button" onClick={() => setIsEditorOpen(false)} className="admin-secondary">Close</button>
            </div>

            <label>Article title<input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></label>
            <div className="admin-two">
              <label>
                Category
                <input required list="admin-categories" value={form.category} placeholder="Type or choose category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
                <datalist id="admin-categories">{categories.map((cat) => <option key={cat} value={cat} />)}</datalist>
              </label>
              <label>Read time<input value={form.readTime} onChange={(e) => setForm({ ...form, readTime: e.target.value })} /></label>
            </div>
            <label>Author<input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} /></label>

            <div className="admin-image-field">
              <label>Cover image upload<input type="file" accept="image/*" onChange={(e) => uploadImage(e, (url) => setForm({ ...form, coverImage: url }))} /></label>
              <label>Or image URL<input type="url" value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} /></label>
              <SafeImage src={form.coverImage} alt="Blog cover preview" />
            </div>

            <label>Short excerpt<textarea required rows={3} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} /></label>
            <label>Full article content<textarea required rows={12} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Use ## headings, ### subheadings, - bullets, and numbered lists." /></label>
            <label className="admin-check"><input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} /> Publish article</label>
            <div className="admin-modal-actions">
              <button type="button" className="admin-secondary" onClick={() => setIsEditorOpen(false)}>Cancel</button>
              <button type="submit" className="admin-primary" disabled={isSaving || isUploading}>{isUploading ? 'Uploading...' : isSaving ? 'Saving...' : 'Save Article'}</button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

function ImageSetting({
  title,
  value,
  onChange,
  onUpload,
  uploadImage,
}: {
  title: string;
  value: string;
  onChange: (url: string) => void;
  onUpload: (url: string) => void;
  uploadImage: (e: ChangeEvent<HTMLInputElement>, onUrl: (url: string) => void) => Promise<void>;
}) {
  return (
    <div className="admin-image-field">
      <label>{title} upload<input type="file" accept="image/*" onChange={(e) => uploadImage(e, onUpload)} /></label>
      <label>{title} URL<input type="url" value={value} onChange={(e) => onChange(e.target.value)} /></label>
      <SafeImage src={value} alt={`${title} preview`} />
    </div>
  );
}
