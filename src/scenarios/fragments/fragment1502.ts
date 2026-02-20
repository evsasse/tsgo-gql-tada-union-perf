import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1500 } from "./fragment1500";
import type { FragmentToken1501 } from "./fragment1501";

export const FRAGMENT_1502 = gql(`
  fragment Fragment1502 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult1502 = ResultOf<typeof FRAGMENT_1502>;
type FragmentSelf1502 = NonNullable<FragmentResult1502>;

export type FragmentToken1502 =
  | FragmentSelf1502["__typename"]
  | FragmentSelf1502["typenameHint"] | FragmentToken1500 | FragmentToken1501;
