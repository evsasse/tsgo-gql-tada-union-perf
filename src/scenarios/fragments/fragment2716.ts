import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2714 } from "./fragment2714";
import type { FragmentToken2715 } from "./fragment2715";

export const FRAGMENT_2716 = gql(`
  fragment Fragment2716 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult2716 = ResultOf<typeof FRAGMENT_2716>;
type FragmentSelf2716 = NonNullable<FragmentResult2716>;

export type FragmentToken2716 =
  | FragmentSelf2716["__typename"]
  | FragmentSelf2716["typenameHint"] | FragmentToken2714 | FragmentToken2715;
