import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1464 } from "./fragment1464";
import type { FragmentToken1465 } from "./fragment1465";

export const FRAGMENT_1466 = gql(`
  fragment Fragment1466 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult1466 = ResultOf<typeof FRAGMENT_1466>;
type FragmentSelf1466 = NonNullable<FragmentResult1466>;

export type FragmentToken1466 =
  | FragmentSelf1466["__typename"]
  | FragmentSelf1466["typenameHint"] | FragmentToken1464 | FragmentToken1465;
