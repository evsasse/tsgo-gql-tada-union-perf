import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3653 } from "./fragment3653";
import type { FragmentToken3654 } from "./fragment3654";

export const FRAGMENT_3655 = gql(`
  fragment Fragment3655 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult3655 = ResultOf<typeof FRAGMENT_3655>;
type FragmentSelf3655 = NonNullable<FragmentResult3655>;

export type FragmentToken3655 =
  | FragmentSelf3655["__typename"]
  | FragmentSelf3655["typenameHint"] | FragmentToken3653 | FragmentToken3654;
