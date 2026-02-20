import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2353 } from "./fragment2353";
import type { FragmentToken2354 } from "./fragment2354";

export const FRAGMENT_2355 = gql(`
  fragment Fragment2355 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult2355 = ResultOf<typeof FRAGMENT_2355>;
type FragmentSelf2355 = NonNullable<FragmentResult2355>;

export type FragmentToken2355 =
  | FragmentSelf2355["__typename"]
  | FragmentSelf2355["typenameHint"] | FragmentToken2353 | FragmentToken2354;
