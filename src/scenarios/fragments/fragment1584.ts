import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1582 } from "./fragment1582";
import type { FragmentToken1583 } from "./fragment1583";

export const FRAGMENT_1584 = gql(`
  fragment Fragment1584 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult1584 = ResultOf<typeof FRAGMENT_1584>;
type FragmentSelf1584 = NonNullable<FragmentResult1584>;

export type FragmentToken1584 =
  | FragmentSelf1584["__typename"]
  | FragmentSelf1584["typenameHint"] | FragmentToken1582 | FragmentToken1583;
