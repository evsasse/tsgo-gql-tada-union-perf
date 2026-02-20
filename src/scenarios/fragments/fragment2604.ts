import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2602 } from "./fragment2602";
import type { FragmentToken2603 } from "./fragment2603";

export const FRAGMENT_2604 = gql(`
  fragment Fragment2604 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult2604 = ResultOf<typeof FRAGMENT_2604>;
type FragmentSelf2604 = NonNullable<FragmentResult2604>;

export type FragmentToken2604 =
  | FragmentSelf2604["__typename"]
  | FragmentSelf2604["typenameHint"] | FragmentToken2602 | FragmentToken2603;
