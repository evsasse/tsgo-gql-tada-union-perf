import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2073 } from "./fragment2073";
import type { FragmentToken2074 } from "./fragment2074";

export const FRAGMENT_2075 = gql(`
  fragment Fragment2075 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult2075 = ResultOf<typeof FRAGMENT_2075>;
type FragmentSelf2075 = NonNullable<FragmentResult2075>;

export type FragmentToken2075 =
  | FragmentSelf2075["__typename"]
  | FragmentSelf2075["typenameHint"] | FragmentToken2073 | FragmentToken2074;
