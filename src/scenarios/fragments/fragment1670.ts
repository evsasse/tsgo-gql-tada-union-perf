import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1668 } from "./fragment1668";
import type { FragmentToken1669 } from "./fragment1669";

export const FRAGMENT_1670 = gql(`
  fragment Fragment1670 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult1670 = ResultOf<typeof FRAGMENT_1670>;
type FragmentSelf1670 = NonNullable<FragmentResult1670>;

export type FragmentToken1670 =
  | FragmentSelf1670["__typename"]
  | FragmentSelf1670["typenameHint"] | FragmentToken1668 | FragmentToken1669;
