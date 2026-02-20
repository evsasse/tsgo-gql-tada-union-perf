import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken555 } from "./fragment555";
import type { FragmentToken556 } from "./fragment556";

export const FRAGMENT_557 = gql(`
  fragment Fragment557 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult557 = ResultOf<typeof FRAGMENT_557>;
type FragmentSelf557 = NonNullable<FragmentResult557>;

export type FragmentToken557 =
  | FragmentSelf557["__typename"]
  | FragmentSelf557["typenameHint"] | FragmentToken555 | FragmentToken556;
