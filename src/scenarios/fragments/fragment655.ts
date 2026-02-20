import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken653 } from "./fragment653";
import type { FragmentToken654 } from "./fragment654";

export const FRAGMENT_655 = gql(`
  fragment Fragment655 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult655 = ResultOf<typeof FRAGMENT_655>;
type FragmentSelf655 = NonNullable<FragmentResult655>;

export type FragmentToken655 =
  | FragmentSelf655["__typename"]
  | FragmentSelf655["typenameHint"] | FragmentToken653 | FragmentToken654;
