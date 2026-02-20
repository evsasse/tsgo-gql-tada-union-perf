import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1632 } from "./fragment1632";
import type { FragmentToken1633 } from "./fragment1633";

export const FRAGMENT_1634 = gql(`
  fragment Fragment1634 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult1634 = ResultOf<typeof FRAGMENT_1634>;
type FragmentSelf1634 = NonNullable<FragmentResult1634>;

export type FragmentToken1634 =
  | FragmentSelf1634["__typename"]
  | FragmentSelf1634["typenameHint"] | FragmentToken1632 | FragmentToken1633;
