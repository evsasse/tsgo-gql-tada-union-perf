import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2735 } from "./fragment2735";
import type { FragmentToken2736 } from "./fragment2736";

export const FRAGMENT_2737 = gql(`
  fragment Fragment2737 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult2737 = ResultOf<typeof FRAGMENT_2737>;
type FragmentSelf2737 = NonNullable<FragmentResult2737>;

export type FragmentToken2737 =
  | FragmentSelf2737["__typename"]
  | FragmentSelf2737["typenameHint"] | FragmentToken2735 | FragmentToken2736;
