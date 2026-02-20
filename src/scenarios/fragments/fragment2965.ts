import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2963 } from "./fragment2963";
import type { FragmentToken2964 } from "./fragment2964";

export const FRAGMENT_2965 = gql(`
  fragment Fragment2965 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult2965 = ResultOf<typeof FRAGMENT_2965>;
type FragmentSelf2965 = NonNullable<FragmentResult2965>;

export type FragmentToken2965 =
  | FragmentSelf2965["__typename"]
  | FragmentSelf2965["typenameHint"] | FragmentToken2963 | FragmentToken2964;
