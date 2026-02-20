import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1604 } from "./fragment1604";
import type { FragmentToken1605 } from "./fragment1605";

export const FRAGMENT_1606 = gql(`
  fragment Fragment1606 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult1606 = ResultOf<typeof FRAGMENT_1606>;
type FragmentSelf1606 = NonNullable<FragmentResult1606>;

export type FragmentToken1606 =
  | FragmentSelf1606["__typename"]
  | FragmentSelf1606["typenameHint"] | FragmentToken1604 | FragmentToken1605;
