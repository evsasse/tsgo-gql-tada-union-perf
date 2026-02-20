import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1583 } from "./fragment1583";
import type { FragmentToken1584 } from "./fragment1584";

export const FRAGMENT_1585 = gql(`
  fragment Fragment1585 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult1585 = ResultOf<typeof FRAGMENT_1585>;
type FragmentSelf1585 = NonNullable<FragmentResult1585>;

export type FragmentToken1585 =
  | FragmentSelf1585["__typename"]
  | FragmentSelf1585["typenameHint"] | FragmentToken1583 | FragmentToken1584;
