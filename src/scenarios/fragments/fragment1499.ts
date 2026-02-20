import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1497 } from "./fragment1497";
import type { FragmentToken1498 } from "./fragment1498";

export const FRAGMENT_1499 = gql(`
  fragment Fragment1499 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult1499 = ResultOf<typeof FRAGMENT_1499>;
type FragmentSelf1499 = NonNullable<FragmentResult1499>;

export type FragmentToken1499 =
  | FragmentSelf1499["__typename"]
  | FragmentSelf1499["typenameHint"] | FragmentToken1497 | FragmentToken1498;
