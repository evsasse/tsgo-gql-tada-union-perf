import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1603 } from "./fragment1603";
import type { FragmentToken1604 } from "./fragment1604";

export const FRAGMENT_1605 = gql(`
  fragment Fragment1605 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult1605 = ResultOf<typeof FRAGMENT_1605>;
type FragmentSelf1605 = NonNullable<FragmentResult1605>;

export type FragmentToken1605 =
  | FragmentSelf1605["__typename"]
  | FragmentSelf1605["typenameHint"] | FragmentToken1603 | FragmentToken1604;
