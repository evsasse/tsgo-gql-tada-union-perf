import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1453 } from "./fragment1453";
import type { FragmentToken1454 } from "./fragment1454";

export const FRAGMENT_1455 = gql(`
  fragment Fragment1455 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult1455 = ResultOf<typeof FRAGMENT_1455>;
type FragmentSelf1455 = NonNullable<FragmentResult1455>;

export type FragmentToken1455 =
  | FragmentSelf1455["__typename"]
  | FragmentSelf1455["typenameHint"] | FragmentToken1453 | FragmentToken1454;
