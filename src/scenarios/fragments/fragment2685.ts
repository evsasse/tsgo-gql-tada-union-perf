import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2683 } from "./fragment2683";
import type { FragmentToken2684 } from "./fragment2684";

export const FRAGMENT_2685 = gql(`
  fragment Fragment2685 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult2685 = ResultOf<typeof FRAGMENT_2685>;
type FragmentSelf2685 = NonNullable<FragmentResult2685>;

export type FragmentToken2685 =
  | FragmentSelf2685["__typename"]
  | FragmentSelf2685["typenameHint"] | FragmentToken2683 | FragmentToken2684;
