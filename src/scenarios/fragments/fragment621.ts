import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken619 } from "./fragment619";
import type { FragmentToken620 } from "./fragment620";

export const FRAGMENT_621 = gql(`
  fragment Fragment621 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult621 = ResultOf<typeof FRAGMENT_621>;
type FragmentSelf621 = NonNullable<FragmentResult621>;

export type FragmentToken621 =
  | FragmentSelf621["__typename"]
  | FragmentSelf621["typenameHint"] | FragmentToken619 | FragmentToken620;
