import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1571 } from "./fragment1571";
import type { FragmentToken1572 } from "./fragment1572";

export const FRAGMENT_1573 = gql(`
  fragment Fragment1573 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult1573 = ResultOf<typeof FRAGMENT_1573>;
type FragmentSelf1573 = NonNullable<FragmentResult1573>;

export type FragmentToken1573 =
  | FragmentSelf1573["__typename"]
  | FragmentSelf1573["typenameHint"] | FragmentToken1571 | FragmentToken1572;
