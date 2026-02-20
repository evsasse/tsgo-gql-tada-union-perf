import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1172 } from "./fragment1172";
import type { FragmentToken1173 } from "./fragment1173";

export const FRAGMENT_1174 = gql(`
  fragment Fragment1174 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult1174 = ResultOf<typeof FRAGMENT_1174>;
type FragmentSelf1174 = NonNullable<FragmentResult1174>;

export type FragmentToken1174 =
  | FragmentSelf1174["__typename"]
  | FragmentSelf1174["typenameHint"] | FragmentToken1172 | FragmentToken1173;
