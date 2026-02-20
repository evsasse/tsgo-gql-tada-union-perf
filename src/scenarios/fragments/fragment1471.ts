import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1469 } from "./fragment1469";
import type { FragmentToken1470 } from "./fragment1470";

export const FRAGMENT_1471 = gql(`
  fragment Fragment1471 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult1471 = ResultOf<typeof FRAGMENT_1471>;
type FragmentSelf1471 = NonNullable<FragmentResult1471>;

export type FragmentToken1471 =
  | FragmentSelf1471["__typename"]
  | FragmentSelf1471["typenameHint"] | FragmentToken1469 | FragmentToken1470;
