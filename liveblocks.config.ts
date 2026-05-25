import { LiveMap, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  throttle: 16,
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,

  async resolveUsers({ userIds }) {
    // Fetch users from your backend/database here

    return userIds.map((userId) => ({
      name: userId,
      avatar: "",
    }));
  },

  async resolveMentionSuggestions({ text }) {
    // Replace with real user lookup logic

    const users = ["john", "jane", "alex"];

    if (!text) {
      return users;
    }

    return users.filter((user) =>
      user.toLowerCase().includes(text.toLowerCase())
    );
  },
});

// Presence represents the properties that exist on every user in the Room
type Presence = {};

// Storage represents persisted shared room data
type Storage = {
  canvasObjects: LiveMap<string, any>;
};

// Static user metadata
type UserMeta = {};

// Custom room events
type RoomEvent = {};

// Thread metadata
export type ThreadMetadata = {
  resolved: boolean;
  zIndex: number;
  time?: number;
  x: number;
  y: number;
};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
  },
} = createRoomContext<
  Presence,
  Storage,
  UserMeta,
  RoomEvent,
  ThreadMetadata
>(client);