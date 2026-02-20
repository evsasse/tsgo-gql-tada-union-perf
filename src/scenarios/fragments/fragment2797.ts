import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2795 } from "./fragment2795";
import type { FragmentToken2796 } from "./fragment2796";

export const FRAGMENT_2797 = gql(`
  fragment Fragment2797 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult2797 = ResultOf<typeof FRAGMENT_2797>;
type FragmentSelf2797 = NonNullable<FragmentResult2797>;

export type FragmentToken2797 =
  | FragmentSelf2797["__typename"]
  | FragmentSelf2797["typenameHint"] | FragmentToken2795 | FragmentToken2796;
