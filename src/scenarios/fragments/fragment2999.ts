import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2997 } from "./fragment2997";
import type { FragmentToken2998 } from "./fragment2998";

export const FRAGMENT_2999 = gql(`
  fragment Fragment2999 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult2999 = ResultOf<typeof FRAGMENT_2999>;
type FragmentSelf2999 = NonNullable<FragmentResult2999>;

export type FragmentToken2999 =
  | FragmentSelf2999["__typename"]
  | FragmentSelf2999["typenameHint"] | FragmentToken2997 | FragmentToken2998;
