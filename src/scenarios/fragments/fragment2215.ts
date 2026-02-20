import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2213 } from "./fragment2213";
import type { FragmentToken2214 } from "./fragment2214";

export const FRAGMENT_2215 = gql(`
  fragment Fragment2215 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult2215 = ResultOf<typeof FRAGMENT_2215>;
type FragmentSelf2215 = NonNullable<FragmentResult2215>;

export type FragmentToken2215 =
  | FragmentSelf2215["__typename"]
  | FragmentSelf2215["typenameHint"] | FragmentToken2213 | FragmentToken2214;
