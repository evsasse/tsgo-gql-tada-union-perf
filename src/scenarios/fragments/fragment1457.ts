import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1455 } from "./fragment1455";
import type { FragmentToken1456 } from "./fragment1456";

export const FRAGMENT_1457 = gql(`
  fragment Fragment1457 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult1457 = ResultOf<typeof FRAGMENT_1457>;
type FragmentSelf1457 = NonNullable<FragmentResult1457>;

export type FragmentToken1457 =
  | FragmentSelf1457["__typename"]
  | FragmentSelf1457["typenameHint"] | FragmentToken1455 | FragmentToken1456;
