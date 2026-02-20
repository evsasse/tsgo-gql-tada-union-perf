import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1708 } from "./fragment1708";
import type { FragmentToken1709 } from "./fragment1709";

export const FRAGMENT_1710 = gql(`
  fragment Fragment1710 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult1710 = ResultOf<typeof FRAGMENT_1710>;
type FragmentSelf1710 = NonNullable<FragmentResult1710>;

export type FragmentToken1710 =
  | FragmentSelf1710["__typename"]
  | FragmentSelf1710["typenameHint"] | FragmentToken1708 | FragmentToken1709;
