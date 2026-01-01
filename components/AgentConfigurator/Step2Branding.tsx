
import React from 'react';
import Icon from '../Icon';
import { AgentFormData } from './types';

interface Props {
  data: AgentFormData;
  onUpdate: (updates: Partial<AgentFormData>) => void;
}

interface ImageHotlinkInputProps {
  label: string;
  value: string | null;
  placeholder: string;
  onUpdate: (url: string | null) => void;
  icon: string;
}

const ImageHotlinkInput: React.FC<ImageHotlinkInputProps> = ({ label, value, placeholder, onUpdate, icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-text-main-light dark:text-gray-200 ml-1">
        {label} Hotlink URL
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon name={icon} className="text-text-sub-light dark:text-text-sub-dark group-focus-within:text-primary transition-colors" />
        </div>
        <input
          className="block w-full pl-10 pr-12 py-3.5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-white placeholder-text-sub-light dark:placeholder-text-sub-dark focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm shadow-sm outline-none"
          placeholder={placeholder}
          type="text"
          value={value || ''}
          onChange={(e) => onUpdate(e.target.value || null)}
        />
        {value && (
          <button
            onClick={() => onUpdate(null)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-sub-light hover:text-red-500 transition-colors"
          >
            <Icon name="close" className="text-lg" />
          </button>
        )}
      </div>
    </div>
  );
};

const Step2Branding: React.FC<Props> = ({ data, onUpdate }) => {
  return (
    <div className="flex flex-col p-5 gap-8 pb-32">
      {/* Intro Text */}
      <div className="text-center space-y-2 mt-2">
        <p className="text-text-sub-light dark:text-text-sub-dark text-base">
          Give your agent a face. You can upload files or simply paste image hotlinks from the web.
        </p>
      </div>

      {/* Agent Icon Section */}
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Agent Icon</h2>
        <div className="flex flex-col items-center gap-6 p-6 bg-surface-light dark:bg-surface-dark rounded-3xl border border-border-light dark:border-border-dark shadow-sm">
          <div className="relative group cursor-pointer">
            <div className="size-32 rounded-3xl bg-field-light dark:bg-field-dark border-2 border-dashed border-border-light dark:border-border-dark flex flex-col items-center justify-center overflow-hidden hover:border-primary transition-all duration-300">
              {data.iconUrl ? (
                <img
                  src={data.iconUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Agent Icon"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/128?text=Error';
                  }}
                />
              ) : (
                <div className="flex flex-col items-center gap-2 p-4 text-center">
                  <Icon name="add_a_photo" className="text-4xl text-primary" />
                </div>
              )}
            </div>
            <button
              className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2 shadow-lg hover:bg-primary-dark transition-transform hover:scale-105"
              onClick={() => onUpdate({ iconUrl: 'https://picsum.photos/200' })}
            >
              <Icon name="auto_fix_high" className="text-sm" />
            </button>
          </div>

          <div className="w-full space-y-4">
            <ImageHotlinkInput
              label="Icon"
              icon="link"
              placeholder="https://example.com/icon.png"
              value={data.iconUrl}
              onUpdate={(url) => onUpdate({ iconUrl: url })}
            />
            <p className="text-xs text-text-sub-light dark:text-text-sub-dark text-center italic">
              Tip: Copy any image address from HTML to hotlink it.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Banner Section */}
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-baseline">
          <h2 className="text-lg font-bold">Feature Banner</h2>
          <span className="text-xs text-text-sub-light dark:text-text-sub-dark bg-field-light dark:bg-surface-dark px-2 py-1 rounded-full border border-border-light dark:border-border-dark">Optional</span>
        </div>

        <div className="flex flex-col gap-6 p-6 bg-surface-light dark:bg-surface-dark rounded-3xl border border-border-light dark:border-border-dark shadow-sm">
          <div
            className="relative w-full aspect-[16/9] rounded-2xl bg-field-light dark:bg-field-dark border-2 border-dashed border-border-light dark:border-border-dark flex flex-col items-center justify-center overflow-hidden hover:border-primary transition-all cursor-pointer group shadow-inner"
            onClick={() => { if (!data.bannerUrl) onUpdate({ bannerUrl: 'https://picsum.photos/1920/1080' }) }}
          >
            {data.bannerUrl ? (
              <img
                src={data.bannerUrl}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Banner"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1920x1080?text=Invalid+Image+URL';
                }}
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <Icon name="image" className="text-3xl text-text-sub-light dark:text-text-sub-dark group-hover:text-primary transition-colors" />
                  <div className="text-center px-4">
                    <p className="text-sm font-semibold text-primary">Preview area</p>
                    <p className="text-xs text-text-sub-light dark:text-text-sub-dark mt-1">Updates live as you paste a URL</p>
                  </div>
                </div>
              </>
            )}
          </div>

          <ImageHotlinkInput
            label="Banner"
            icon="image_search"
            placeholder="https://example.com/banner.jpg"
            value={data.bannerUrl}
            onUpdate={(url) => onUpdate({ bannerUrl: url })}
          />
        </div>
      </section>

      {/* Info Card */}
      <div className="p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 flex gap-3">
        <Icon name="info" className="text-primary text-xl" />
        <p className="text-xs text-text-sub-light dark:text-gray-300 leading-relaxed">
          Using hotlinks allows you to host images on your own CDN or use existing assets without re-uploading. Ensure the image source permits hotlinking.
        </p>
      </div>
    </div>
  );
};

export default Step2Branding;
