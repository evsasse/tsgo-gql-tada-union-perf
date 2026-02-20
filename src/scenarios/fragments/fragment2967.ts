import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2965 } from "./fragment2965";
import type { FragmentToken2966 } from "./fragment2966";

export const FRAGMENT_2967 = gql(`
  fragment Fragment2967 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult2967 = ResultOf<typeof FRAGMENT_2967>;
type FragmentSelf2967 = NonNullable<FragmentResult2967>;

export type FragmentToken2967 =
  | FragmentSelf2967["__typename"]
  | FragmentSelf2967["typenameHint"] | FragmentToken2965 | FragmentToken2966;
