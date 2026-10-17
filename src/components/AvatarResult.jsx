import logoSrc from '../assets/logo.svg'
import { useAvatarStore } from '../store/avatarStore'
import { useProviderStore } from '../store/providerStore.'

export function AvatarResult () {
    const { avatarUrl } = useAvatarStore()
    const { provider } = useProviderStore()

    return (
        <div className="avatar-result">
            <img
                src={avatarUrl || logoSrc}
                alt={avatarUrl ? `${provider.name} avatar` : 'Cosmit Avatars logo'}
            />
            {avatarUrl && (
                <a href={avatarUrl} target="_blank" rel="noopener noreferrer" className="open-avatar">
                    Open original ↗
                </a>
            )}
        </div>
    )
}