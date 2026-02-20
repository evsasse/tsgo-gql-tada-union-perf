import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2053 } from "./fragment2053";
import type { FragmentToken2054 } from "./fragment2054";

export const FRAGMENT_2055 = gql(`
  fragment Fragment2055 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult2055 = ResultOf<typeof FRAGMENT_2055>;
type FragmentSelf2055 = NonNullable<FragmentResult2055>;

export type FragmentToken2055 =
  | FragmentSelf2055["__typename"]
  | FragmentSelf2055["typenameHint"] | FragmentToken2053 | FragmentToken2054;
