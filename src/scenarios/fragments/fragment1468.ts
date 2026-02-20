import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1466 } from "./fragment1466";
import type { FragmentToken1467 } from "./fragment1467";

export const FRAGMENT_1468 = gql(`
  fragment Fragment1468 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult1468 = ResultOf<typeof FRAGMENT_1468>;
type FragmentSelf1468 = NonNullable<FragmentResult1468>;

export type FragmentToken1468 =
  | FragmentSelf1468["__typename"]
  | FragmentSelf1468["typenameHint"] | FragmentToken1466 | FragmentToken1467;
